var countThreadId = 2;
var userName = "Trần Đoàn Khánh Vũ";
var photo = "user/user1.jpg";
var allCategories = ['service','park','product'];
var initFilter = false;
var serviceUrl = './_db/WebService.php';

var companies = [];
var overlayDisable = false;

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
    var threads = [
        {
            thread_id: 'thread1',
            id: '11111',
            photo: 'user/user1.jpg',
            name: 'Trần Đoàn Khánh Vũ',
            categories: [
                'service',
                'park'
            ],
            description: 'Tối thứ 7 tuần rồi (16/8), mình và một người bạn tới quán này để ăn trưa. Không ngờ gặp nhân viên giữ xe khá là bất lịch sự và gắt gỏng với tụi mình. Thế nên cuối cùng cả hai quyết định không vào quán nữa mà ghé quán khác',
            order: 1,
            start: true,
            solve: true,
            time: '2014-08-22T09:24:17Z',
            ratingScore: 2,
            totalVote: 35,
            voteUp: false,
            voteDown: false,
            replies: [
                {
                    id: '4343434',
                    photo: 'firm/kfc.jpg',
                    name: 'KFC',
                    description: 'Cám ơn bạn đã phản hồi cho quán. Quản lý của quán đã làm việc với nhân viên gửi xe. Nếu nhân viên gửi xe còn tái phạm nữa thì quán sẽ thay thế nhân viên khác. Mong bạn sẽ còn quay lại quán những lần sau',
                    start: false,
                    time: '2014-08-24T23:24:17Z',
                    replyTo: 'Trần Đoàn Khánh Vũ',
                    totalVote: 23,
                    voteUp:false,
                    voteDown: true
                }
            ]
        },
        {
            thread_id: 'thread2',
            id: '11112',
            photo: 'user/user2.jpg',
            name: 'Nguyễn Duy Long',
            categories: [
                'product'
            ],
            description: 'Hôm qua (22/8), mình tới ăn tối ở quán này và gọi phần Combo 1. Thức ăn đem ra không nóng sốt và có cả gián nằm trong đó.',
            order: 2,
            start: true,
            solve: false,
            time: '2014-08-24T09:24:17Z',
            ratingScore: 1,
            totalVote: 5,
            voteUp: true,
            voteDown: false,
            replies: [
                {
                    id: '4343433',
                    photo: 'firm/kfc.jpg',
                    name: 'KFC',
                    description: 'Cám ơn bạn đã phản hồi cho công ty. Công ty rất tiếc vì trường hợp đã xảy ra. Chúng tôi sẽ làm rõ việc này với nhân viên vì an toàn vệ sinh thực phẩm là mối quan tâm hàng đầu của công ty.',
                    start: false,
                    time: '2014-08-25T00:10:17Z',
                    replyTo: 'Nguyễn Duy Long',
                    totalVote: 3,
                    voteUp:false,
                    voteDown: false
                }
            ]
        }
    ];

    $.views.helpers({getStatus: getStatus});
    $.views.helpers({getCategoryLabel: getCategoryLabel});

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
        userName: userName
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
        var company = {
            photo: 'kfc_logo.png',
            description: 'Bên cạnh những món ăn truyền thống như gà rán và Bơ-gơ, đến với thị trường Việt Nam, KFC đã chế biến thêm một số món để phục vụ những thức ăn hợp khẩu vị người Việt như: Gà Big‘n Juicy, Gà Giòn Không Xương, Cơm Gà KFC, Bắp Cải Trộn … Một số món mới cũng đã được phát triển và giới thiệu tại thị trường Việt Nam, góp phần làm tăng thêm sự đa dạng trong danh mục thực đơn, như: Bơ-gơ Tôm, Lipton, Bánh Egg Tart.',
            time: '7h30-11h00 &amp; 13h00-16h00 các ngày trong tuần',
            address: 'A43 Trường Sơn – Phường 4 – Quận Tân Bình – Tp.HCM',
            phone: '0123456789',
            branches: [
                {
                    id: 'kfc_1',
                    name: 'A43 Trường Sơn – Phường 4 – Quận Tân Bình – Tp.HCM'
                },
                {
                    id: 'kfc_2',
                    name: 'Lầu 4 – DiamondPlaza 34 Lê Duẩn – Phường Bến Nghé – Quận 1- Tp.HCM'
                },
                {
                    id: 'kfc_3',
                    name: 'Siêu thị Sài Gòn – số 34 Đường 3/2 – Phường 12 – Quận 10 – Tp.HCM'
                },
                {
                    id: 'kfc_4',
                    name: '15-17 Cộng Hòa – Phường 4 – Quận Tân Bình – Tp.HCM'
                },
                {
                    id: 'kfc_5',
                    name: '20 An Dương Vương – Phường 9 – Quận 5 – Tp.HCM'
                },
                {
                    id: 'kfc_6',
                    name: '74/2 Hai Bà Trưng – Phường Bến Nghé – Quận 1- Tp.HCM'
                },
                {
                    id: 'kfc_7',
                    name: '80 Đường Tháp Mười – Phường 2 – Quận 6 – Tp.HCM'
                },
                {
                    id: 'kfc_8',
                    name: 'Co.op Mart – 571 Nguyễn Kiệm – Phường 9 – Quận Phú Nhuận – Tp.HCM'
                }
            ]
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

function resetSubmitThreadForm() {
    $('#input_comment').val('');
    $('#feedback').raty('cancel', false);
    allCategories.forEach(function(category) {
        $('#input_' + category).attr('checked', false)
            .parent().removeClass('active');
    })
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
        var temp = $(this).parent().parent().parent();
        //description
        temp.find('h6').toggle();

        var img = temp.parent().children().first().find('img');
        //profile pic
        img.toggle();

        //last row
        var row = temp.parent().parent().find('>.row:last-child');

        if (row.hasClass('comment_box')) {
            row.parent().find('>.row:nth-last-child(2)').toggle();

            row.css('display','none');
        }
        else row.toggle();

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
        //alert('#overlay');

        if(!overlayDisable)
            closeCompanyInfo();
        else
            overlayDisable = false;
    });

    $('body').on('click', '#overlay_content', function(event) {
        //disable clicking on inner element
        overlayDisable = true;
        //event.stopPropagation();
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