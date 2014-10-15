var userName = "Trần Đoàn Khánh Vũ",
    userId = 'user_1',
    photo = "user/user1.jpg",
    serviceUrl = './_db/WebService.php',
    disableLoadThread = false,
    uploaders = [],
    overlayDisable = false;
$(function(){
    initEvent();
    getIndustryList(initIndustry);
    initRating();

    $('.collapse').collapse();

    $('.right-preview').css('height',$(window).height());
    $('.left-menu').css('height',$(window).height());
    $('.wrapper').css('height',$(window).height());
});

function changeCount(e, inc, index) {
    var item = $(e);

    var span = item.parent().find('>span');
    var temp = span.first();

    temp.html(parseInt(temp.html(), 10) + inc);
    item.addClass('clicked');
    span.eq(index).removeClass('clicked');
}

function initIndustry(indInfos) {
    var gets = [];

    var industryList = {industries: new Array()};

    for (var i = 0; i < indInfos.length; i++) {
        var indInfo = indInfos[i];
        gets.push(getCompaniesByIndustryId(indInfo.id, indInfo.name));

        industryList.industries.push(
            {
                id: indInfo.id,
                name: indInfo.name
            });
    }

    $.when.apply($, gets).then(function() {
        companies.sort(function(a,b){
            if (a.industryName > b.industryName){
                return 1;
            }
            else if (a.industryName < b.industryName){
                return -1;
            }
            else if (a.id > b.id) {
                return 1;
            }
            else if (a.id < b.id) {
                return -1;
            }

            return 0;
        });

        var template = $.templates("#industryTmpl");

        template.link("#tp-grid", companies);

        var industryListTmpl = $.templates("#industryListTmpl");

        industryListTmpl.link("#industry_list_placeholder", industryList);

        $("#industry_list").select2();

        $('.select2-container').append('<img style="position:absolute;width:30px;top:0px;right:0px;" src="./css/dropdown/search.png"/>');

        initTpGrid();
    });

}

function initTpGrid() {
    var $grid = $('#tp-grid'),
        $name = $('#name'),
        $close = $('#close'),
        $loader = $('<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>').insertBefore($grid),
        stapel = $grid.stapel({
            onLoad: function () {
                $loader.remove();
            },
            onBeforeOpen: function (pileName) {
                $name.html(pileName);
            },
            onAfterOpen: function (pileName) {
                $close.show();
            }
        });

    $close.on('click', function () {
        $close.hide();
        $name.empty();
        stapel.closePile();
    });
}

function initRating() {
    $.fn.raty.defaults.path = './images/rating';

    $('#feedback').raty({
        score: 0,
        cancel: true
    });
}

function getPostAttribute(obj) {
    return {
        id : obj.id,
        type: obj.type,
        name: obj.name,
        photo: obj.photo,
        text: obj.text,
        time: obj.time,
        vote: obj.vote,
        up: parseInt(obj.up),
        down: parseInt(obj.down),
        userName: userName,
        uploadphotos: obj.uploadphotos,
        ownPost: obj.user_id == userId
    }
}

function extractAjaxPostAttribute(obj) {
    console.log(obj);
    return {
        id : obj.id,
        name: obj.name,
        photo: obj.photo,
        text: obj.text,
        time: obj.time,
        vote: obj.vote,
        up: parseInt(obj.up),
        down: parseInt(obj.down),
        uploadphotos: obj.images.map(function(obj) {return {photo: obj.image_name}}),
        user_id: obj.user_id,
        ownPost: obj.user_id == userId
    }
}

function insertDom(templ, obj, destId) {
    templ.link("#temp", obj);
    $('#' + destId).append($('#temp').html());
    $('#temp').html('');
}

function getIndustryList(callback) {
    $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetAllIndustries'},
        dataType: 'json',
        success: function(result){
            callback(result);
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function initEvent() {
    $(document).on('click', ".company", function() {
        var temp = $(this).parent().attr('id');

        if (companyId != temp) {
            companyId = temp;
            initCompany();
        }

        $('#overlay').show();

        $('.right-preview').toggleClass('unscrollable');
        $('.wrapper').toggleClass('unscrollable');
    });

    initThreadEvent();
    initCommentEvent();
    initReplyEvent();

    $('body').on('click', '.reply', function() {
        var comment_detail = $(this).closest('.comment_detail'),
            photo = comment_detail.find('>.uploadphotos'),
            comment = photo.prev();

        if (!comment.hasClass('comment_box')) {
            if (comment_detail.hasClass('post_start'))
                photo.before('<div class="row comment_box"><div class="col-md-11" style="margin-left:30px;"><input type="text" class="form-control" placeholder="Nhập nhận xét"><span class="glyphicon glyphicon-camera photo_upload_icon"></span><button type="button" class="btn btn-danger cancel_comment" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;margin-left:20px">Hủy</button><button type="button" class="btn btn-success send_comment" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;">Gửi</button></div></div>');
            else
                photo.before('<div class="row comment_box"><div class="col-md-11" style="margin-left:30px;"><input type="text" class="form-control" placeholder="Nhập nhận xét"><span class="glyphicon glyphicon-camera photo_upload_icon"></span><button type="button" class="btn btn-danger cancel_reply" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;margin-left:20px">Hủy</button><button type="button" class="btn btn-success send_reply" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;">Gửi</button></div></div>');
        }
        else {
            comment.toggle();
        }
    });

    $('body').on('click', '.minimize', function() {
        var parent = $(this).closest('.comment_detail');

        parent.find('.avatar').toggle();
        parent.find('.comment_content').toggle();
        parent.find('.uploadphotos').toggle();

        var comment_box = parent.find('.comment_box');

        if (comment_box) {
            comment_box.hide();
        }

        $(this).toggleClass('glyphicon-minus glyphicon-plus');
    });

    $('body').on('click', '.flag', function() {
        var temp = $(this).closest('.comment_detail');

        if (temp.hasClass('post_start')) {
            var container = temp.closest('.mix');
            container.find('.comment_detail').each(function() {
                $(this).html('You have flagged this as spam');
            });

            container.find('.viewComments').remove();
        }
        else temp.html('You have flagged this comment as spam');
    });

    $('body').on('click', '.up, .down', function() {
        updateLikeDislike(this);
    });

    $('body').on('click', '.photo_upload_icon', function() {
        var icon = $(this),
            form = icon.parent().find('form');
        if (form.length) {
            form.toggle();
        }
        else {
            var id = 'upload_' + $.now();
            $('<form action="/file-upload" class="dropzone" id="' + id + '"></form>').insertAfter(icon);

            Dropzone.autoDiscover = false;
            uploaders[id] = new Dropzone("#" + id, {
                url: "upload.php",
                addRemoveLinks: true
            });
        }
    });

    /*
     close company popup window
     */

    $('body').on('click', '#overlay', function() {
        if(!overlayDisable)
            closeCompanyInfo();
        else
            overlayDisable = false;
    });

    $('body').on('click', '#overlay_content', function(event) {
        //disable clicking on inner element
        overlayDisable = true;
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            if ($('#overlay').css('display') == 'block')
                closeCompanyInfo();
        }   // esc
    });

    /*
     end close company popup window
     */

    $(function(){
        $(document).on('mousewheel', '.right-preview', loadMoreThreads);
        //$('.right-preview').scroll(loadMoreThreads);
    });
}

function closeCompanyInfo() {
    //company info
    $('#overlay').css('display','none');

    $('.right-preview').toggleClass('unscrollable');
    $('.wrapper').toggleClass('unscrollable');
}

function loadMoreThreads() {
    if (!disableLoadThread && lastThread.offset().top + lastThread.height() - 200 < $(this).height()) {
        disableLoadThread = true;
        loadThread(1);
    } else {
    }
}

function clearUploadedPhotos(formId) {
    uploaders[formId].removeAllFiles(true);
    $('#' + formId).hide();
}

function getUploadedPhoto(form) {
    var formId = form.attr('id'),
        fileNames = [];

    if (typeof uploaders[formId] !='undefined')
        uploaders[formId].files.forEach(function(file) {
            fileNames.push(file.uploadName);
        });

    return fileNames;
}

function removeFileFromServer(fileName) {
    $.ajax({
        url: './upload.php',
        type: "post",
        data: {'fileName':fileName},
        dataType: 'json',
        success: function(result){
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function removeImageFromPreview(cmtBox) {
    var form = cmtBox.parent().find('form'),
        formId = form.attr('id');

    uploaders[formId].files.forEach(function(file) {
        file.keepFile = true;
    });
}

function updateLikeDislike(e) {
    var item = $(e),
        parent = item.parent(),
        count = parent.find('.badge'),
        other = null,
        inc = 0,
        action = '',
        type = '',
        comment_detail = item.closest('.comment_detail');

    if (item.hasClass('up')) {
        action = 'up';
    }
    else {
        action = 'down';
    }

    if (item.hasClass('clicked')) {
        if (item.hasClass('up')) {
            inc = -1;
        }
        else {
            inc = 1;
        }
    }
    else {
        if (item.hasClass('up')) {
            other = parent.find('.down');

            if (other.hasClass('clicked')) {
                inc = 2;
            }
            else {
                inc = 1;
            }
        }
        else {
            other = parent.find('.up');


            if (other.hasClass('clicked')) {
                inc = -2;
            }
            else {
                inc = -1;
            }
        }
    }


    if (comment_detail.hasClass('post_start'))
        type = 'thread';
    else if (comment_detail.hasClass('reply_content'))
        type = 'reply';
    else
        type = 'comment';

    $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'UpdateLikeDislike', 'userId': userId,'action':action, 'type':type, 'itemId':comment_detail.attr('id')},
        dataType: 'json',
        success: function(result){
            count.html(parseInt(count.html(), 10) + inc);
            item.toggleClass('clicked');

            if (other != null)
                other.removeClass('clicked');
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}