var userName = "Trần Đoàn Khánh Vũ",
    userId = '',
    photo = "",
    serviceUrl = './_db/WebService.php',
    disableLoadThread = false,
    uploaders = [],
    overlayDisable = false;
    language = 'vi';
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
    console.log(obj);
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
        ownPost: obj.user_id == userId,
        spam_report: obj.spam_report,
        profile: obj.profile
    }
}

function extractAjaxPostAttribute(obj) {
    return {
        id : obj.id,
        name: obj.name,
        text: obj.text,
        time: obj.time,
        vote: obj.vote,
        up: parseInt(obj.up),
        down: parseInt(obj.down),
        uploadphotos: obj.images.map(function(obj) {return {photo: obj.image_name}}),
        user_id: obj.user_id,
        ownPost: obj.user_id == userId,
        photo: 'https://graph.facebook.com/' + obj.user_id + '/picture?type=large',
        profile: 'https://www.facebook.com/' + obj.user_id,
        spam_report: obj.spam_report
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
            console.log(result);
            callback(result);
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
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
        var flag = $(this),
            type = '',
            comment_detail = flag.closest('.comment_detail');

        if (comment_detail.hasClass('post_start'))
            type = 'thread';
        else if (comment_detail.hasClass('reply_content'))
            type = 'reply';
        else
            type = 'comment';
/*        var temp = $(this).closest('.comment_detail');

        if (temp.hasClass('post_start')) {
            var container = temp.closest('.mix');
            container.find('.comment_detail').each(function() {
                $(this).html('You have flagged this as spam');
            });

            container.find('.viewComments').remove();
        }
        else temp.html('You have flagged this comment as spam');*/

        //alert(type + ' ' + comment_detail.attr('id'));

        return $.ajax({
            url: serviceUrl,
            type: "post",
            data: {'request':'UpdateSpam', 'id': comment_detail.attr('id'), 'type': type, 'userId':userId},
            dataType: 'json',
            success: function(result){
                if (result === true) {
                    flag.toggleClass('active');
                }
            },
            error: function(xhr, status, error) {
                alert(xhr.responseText);
            }
        });
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
    if (typeof uploaders[formId] !='undefined')
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

    if (typeof uploaders[formId] !='undefined')
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


function showHideCommandButton(el) {
    if (userId == '')
        $(el).find('>div:nth-of-type(2)').hide();
    else
        $(el).find('>div:nth-of-type(2)').show();
}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        $('#status').html(getLangValue('Login'));
        $('#notLogin').show();
        $('#login').hide();
        $('.command_button > div:nth-of-type(2)').hide();
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '738394009541313',
        cookie     : true,  // enable cookies to allow the server to access
        // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log(response);
        console.log('Successful login for: ' + response.name);
        userId = response.id;
        userName = response.name;
        $('#username').html(userName);
        $('#userPhoto').attr('src', 'https://graph.facebook.com/' + userId + '/picture?type=large');

        //document.getElementById('status').innerHTML =
        //  'Thanks for logging in, ' + response.id + '!';
        $('#notLogin').hide();
        $('#login').show();
        $('.command_button').each(function(index, el) {
            showHideCommandButton(el);
        });
    });
}