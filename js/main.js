var userName = "Trần Đoàn Khánh Vũ";
var userId = 'user_1';
var photo = "user/user1.jpg";
var serviceUrl = './_db/WebService.php';
var disableLoadThread = false;

var overlayDisable = false;
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
    if (!item.hasClass('disabled')) {
        var span = item.parent().find('>span');
        var temp = span.first();

        temp.html(parseInt(temp.html(), 10) + inc);
        item.addClass('disabled');
        span.eq(index).removeClass('disabled');
    }
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

function getReviewAttribute(obj) {
    console.log(obj);
    return {
        id : obj.id,
        type: obj.type,
        name: obj.name,
        photo: obj.photo,
        text: obj.text,
        time: obj.time,
        vote: obj.vote,
        voteUp: obj.voteUp,
        voteDown: obj.voteDown,
        userName: userName,
        uploadphotos: obj.uploadphotos
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
        initCompany($(this).parent().attr('id'));
    });

    initThreadEvent();
    initCommentEvent();
    initReplyEvent();

    $('body').on('click', '.reply', function() {
        var comment_detail = $(this).closest('.comment_detail'),
            photo = comment_detail.find('.uploadphotos'),
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
            temp.parent().find('.comment_detail').each(function() {
                $(this).html('You have flagged this comment as spam');
            });
        }
        else temp.html('You have flagged this comment as spam');
    });

    $('body').on('click', '.up', function() {
        changeCount(this, 1, 2);
    });

    $('body').on('click', '.down', function() {
        changeCount(this, -1, 1);
    });

    $('body').on('click', '.photo_upload_icon', function() {
        var icon = $(this);
        var form = icon.parent().find('form');
        if (form.length) {
            form.toggle();
        }
        else {
            var id = 'upload-' + $.now();
            $('<form action="/file-upload" class="dropzone" id="' + id + '"></form>').insertAfter(icon);

            $("#" + id).dropzone({ url: "upload.php", addRemoveLinks: true });
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
    var el = $(this);

    console.log(lastThread.offset().top + ' ' + lastThread.height() + ' ' + el.height());
    if (!disableLoadThread && lastThread.offset().top + lastThread.height() - 200 < el.height()) {
        disableLoadThread = true;
        loadThread(1);
    } else {
    }
}
