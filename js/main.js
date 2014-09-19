var countThreadId = 2;
var userName = "Trần Đoàn Khánh Vũ";
var photo = "user/user1.jpg";
var allCategories = ['service','park','product'];
var initFilter = false;
var serviceUrl = './_db/WebService.php';

var companies = [];
var overlayDisable = false;
var threads = [];

$(function(){
    initEvent();
    getIndustryList(initIndustry);
    initRating();

    initReview();

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

function initReview() {
    $.when.apply($, [getThreadsFromBranch('kfc_1')]).then(function() {
        $.views.helpers({getStatus: getStatus});
        $.views.helpers({getCategoryLabel: getCategoryLabel});

        loadReplies = [];

        threads.forEach(function(thread){
            loadReplies.push(getRepliesFromThread(thread));
        })

        $.when.apply($, loadReplies).then(function() {
            threads.forEach(function(thread){
                addThread(thread);

                thread.replies.forEach(function(reply) {
                    addReply(thread.thread_id,reply);
                })
            })

            $( document ).ready(function() {
                //hide all replies at beginning
                $('.minimize').each(function() {
                    var min = $(this);

                    if (!min.closest('.comment_detail').hasClass('post_start'))
                        min.trigger('click');
                });
            });
        });
    });
}

function getStatus(status) {
    switch(status) {
        case true:
            return "<span class='label label-success'>Đã Giải Quyết</span>";
        case false:
            return "<span class='label label-danger'>Chưa Giải Quyết</span>";
        default:
            return "";
    }
}

function getCategoryLabel(categories) {
    var result = "";
    categories.forEach(function(category) {
        var temp = "";
        switch(category) {
            case 'service':
                temp = "<span class='label label-primary'>Phục Vụ</span>";
                break;
            case 'park':
                temp =  "<span class='label label-success'>Giữ Xe</span>";
                break;
            case 'product':
                temp = "<span class='label label-warning'>Sản Phẩm</span>";
                break;
            default:
                temp = "";
        }
        result = result + temp + "\n";
    })
    return result;
}

function getReviewAttribute(obj) {
    return {
        id : obj.id,
        start: obj.start,
        name: obj.name,
        photo: obj.photo,
        description: obj.description,
        time: obj.time,
        totalVote: obj.totalVote,
        voteUp: obj.voteUp,
        voteDown: obj.voteDown,
        userName: userName,
        uploadphotos: obj.uploadphotos
    }
}

function addThread(thread) {
    var thread_tmpl = $.templates("#threadTmpl");

    thread_tmpl.link("#temp", {
        id : thread.thread_id,
        category: thread.categories.join(' '),
        order: thread.order
    });
    $('#Container').append($('#temp').html());
    $('#temp').html('');

    var review_tmpl = $.templates("#reviewTmpl");
    var temp = {
        solve: thread.solve,
        categories: thread.categories,
        ratingId: 'rating' + thread.thread_id
    };
    $.extend(temp, getReviewAttribute(thread));
    review_tmpl.link("#" + thread.thread_id, temp);
    $('#rating' + thread.thread_id).raty({
        readOnly: true,
        score: thread.ratingScore
    });

    $("time.timeago").timeago();

    if ($('#button_all').hasClass('active'))
        $('#button_service').click();
    $('#button_all').click();
}

function addReply(threadId, reply) {
    var review_tmpl = $.templates("#reviewTmpl");
    temp = {
        replyTo: reply.replyTo
    };
    $.extend(temp, getReviewAttribute(reply));
    review_tmpl.link("#temp", temp);

    $('#' + threadId).append($('#temp').html());
    $('#temp').html('');

    $("time.timeago").timeago();
}

function initCompany(companyId) {
    if (companyId == 'ff_kfc') {
        var branches = [];
        $.when.apply($, [getAllBranchesFromCompany(companyId, branches)]).then(function() {
            var company = {
                photo: 'kfc_logo.png',
                description: 'Bên cạnh những món ăn truyền thống như gà rán và Bơ-gơ, đến với thị trường Việt Nam, KFC đã chế biến thêm một số món để phục vụ những thức ăn hợp khẩu vị người Việt như: Gà Big‘n Juicy, Gà Giòn Không Xương, Cơm Gà KFC, Bắp Cải Trộn … Một số món mới cũng đã được phát triển và giới thiệu tại thị trường Việt Nam, góp phần làm tăng thêm sự đa dạng trong danh mục thực đơn, như: Bơ-gơ Tôm, Lipton, Bánh Egg Tart.',
                time: '7h30-11h00 &amp; 13h00-16h00 các ngày trong tuần',
                address: 'A43 Trường Sơn – Phường 4 – Quận Tân Bình – Tp.HCM',
                phone: '0123456789',
                branches: branches
            };
            $.templates("#companyTmpl").link('#companyInfo', company);
            $("#branch_list").select2({maximumSelectionSize: 1 });
            $('#s2id_branch_list').append('<img style="position:absolute;width:30px;top:0px;right:0px;" src="./css/dropdown/search.png"/>');

            if (!initFilter) {
                $('#Container').mixItUp();
                initFilter = true;
            }
            $('#overlay').css('display','block');

            $('.right-preview').toggleClass('unscrollable');
            $('.wrapper').toggleClass('unscrollable');
        });
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

function getCompaniesByIndustryId(industryId, industryName) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetAllCompaniesFromIndustries', 'industryId':industryId},
        dataType: 'json',
        success: function(result){
            for (var i = 0; i < result.length; i++) {
                var company = result[i];
                companies.push(
                    {
                        industryName : industryName,
                        companyName : company.name,
                        companyPhoto : company.image,
                        id: company.id
                    });
            }
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function getThreadsFromBranch(branchId) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetThreadsFromBranch', 'branchId':branchId},
        dataType: 'json',
        success: function(result){
            for (var i = 0; i < result.length; i++) {
                var thread = result[i];
                threads.push(
                    {
                        thread_id: thread.id,
                        id: '11111' + thread.id,
                        photo: thread.photo,
                        name: thread.name,
                        categories: [
                            'service',
                            'park'
                        ],
                        description: thread.description,
                        order: thread.order,
                        start: true,
                        solve: thread.isSolved,
                        time: thread.time,
                        ratingScore: thread.ratingScore,
                        totalVote: thread.totalVote,
                        voteUp: false,
                        voteDown: false,
                        uploadphotos: [
                            {
                                photo: '1.jpg'
                            },
                            {
                                photo: '2.jpg'
                            },
                            {
                                photo: '3.jpg'
                            }
                        ],
                        replies: [
                        ]
                    });
            }
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function getAllBranchesFromCompany(companyId, branches) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetAllBranchesFromCompany', 'companyId':companyId},
        dataType: 'json',
        success: function(result){
            for (var i = 0; i < result.length; i++) {
                var branch = result[i];
                branches.push(
                    {
                        id: branch.id,
                        name: branch.address
                    });
            }
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function getRepliesFromThread(thread) {
    return $.ajax({
        url: serviceUrl,
        type: "post",
        data: {'request':'GetRepliesFromThread', 'threadId':thread.thread_id},
        dataType: 'json',
        success: function(result){
            thread.replies = [];
            for (var i = 0; i < result.length; i++) {
                var reply = result[i];
                thread.replies.push(
                {
                    id: reply.id,
                    photo: 'firm/kfc.jpg',
                    name: 'KFC',
                    description: reply.description,
                    start: false,
                    time: thread.time,
                    replyTo: 'Trần Đoàn Khánh Vũ',
                    totalVote: reply.totalVote,
                    voteUp:false,
                    voteDown: true
                });
            }
        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function resetSubmitThreadForm() {
    $('#input_comment').val('');
    $('#feedback').raty('cancel', false);
    allCategories.forEach(function(category) {
        $('#input_' + category).attr('checked', false)
            .parent().removeClass('active');
    })

    //var id = $('.comment_box').find('form').attr('id');
    //(Dropzone("#" + id)).removeAllFiles(true);
    //alert((Dropzone("#" + id)).files);
}

function initEvent() {
    $(document).on('click', ".company", function() {
        initCompany($(this).parent().attr('id'));
    });

    $('body').on('click', '.send_thread', function() {
        countThreadId++;
        var categories = new Array();
        allCategories.forEach(function(category) {
            if ($('#input_' + category).is(':checked'))
                categories.push(category);
        })

        var thread = {
            thread_id: 'thread'+countThreadId,
            id: 'thread'+countThreadId + '_1',
            photo: photo,
            name: userName,
            categories: categories,
            description: $('#input_comment').val(),
            order: countThreadId,
            start: true,
            solve: false,
            time: (new Date()).toISOString(),
            ratingScore: $('#feedback').raty('score'),
            totalVote: 0,
            voteUp: false,
            voteDown: false,
            replies: []
        };
        addThread(thread);

        resetSubmitThreadForm();
    });

    $('body').on('click', '.cancel_thread', function() {
        resetSubmitThreadForm()
    });

    $('body').on('click', '.send_comment', function() {
        var post = $(this).parent().parent().parent();
        var reply = {
            id: Math.floor((Math.random() * 100000) + 1),
            photo: photo,
            name: userName,
            description: $(this).parent().find('input').val(),
            start: false,
            time: (new Date()).toISOString(),
            replyTo: post.find('> .row:first-of-type').find('h4:first-of-type').text(),
            totalVote: 0,
            voteUp:false,
            voteDown: false
        };
        addReply(post.parent().attr('id'),reply);

        $(this).parent().parent().remove();
    });

    $('body').on('click', '.cancel_comment', function() {
        $(this).parent().parent().remove();
    });

    $('body').on('click', '.reply', function() {
        var temp = $(this).parent().parent().parent();
        var div = temp.find('> .row:last-child');
        if (!div.hasClass('comment_box'))
            temp.append('<div class="row comment_box"><div class="col-md-11" style="margin-left:30px;"><input type="text" class="form-control" placeholder="Nhập nhận xét"><span class="glyphicon glyphicon-camera photo_upload_icon"></span><button type="button" class="btn btn-danger cancel_comment" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;margin-left:20px">Hủy</button><button type="button" class="btn btn-success send_comment" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;">Gửi</button></div></div>');
        else {
            div.toggle();
        }
    });

    $('body').on('click', '.minimize', function() {
        var parent = $(this).closest('.comment_detail');

        parent.find('.avatar').toggle();
        parent.find('.comment_content').toggle();
        parent.find('.command_button').toggle();
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
}

function closeCompanyInfo() {
    //company info
    $('#overlay').css('display','none');

    $('.right-preview').toggleClass('unscrollable');
    $('.wrapper').toggleClass('unscrollable');
}