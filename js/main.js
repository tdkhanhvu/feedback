var countThreadId = 2;
var userName = "Trần Đoàn Khánh Vũ";
var photo = "user/user1.jpg";
var allCategories = ['service','park','product'];
var initFilter = false;
$(function(){
    initIndustry();
    initTpGrid();
    initRating();

    initReview();
    //initCompany('fastfood_2');


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

function initIndustry() {
    var industries = [
        {
            id: 1,
            name: "Taxi",
            companies: [
                {
                    id: 'taxi_1',
                    name: "Vinasun",
                    photo: "vinasun.jpg"
                },
                {
                    id: 'taxi_2',
                    name: "Saigontourist",
                    photo: "saigontourist.jpg"
                },
                {
                    id: 'taxi_3',
                    name: "Saigon Air",
                    photo: "saigonair.jpg"
                },
                {
                    id: 'taxi_4',
                    name: "Phương Trang",
                    photo: "phuong_trang.jpg"
                },
                {
                    id: 'taxi_5',
                    name: "Hoàng Long",
                    photo: "hoang_long.jpg"
                },
                {
                    id: 'taxi_6',
                    name: "Dầu Khí Cửu Long",
                    photo: "dau_khi_cuu_long.jpg"
                },
                {
                    id: 'taxi_7',
                    name: "Vinataxi",
                    photo: "vinataxi.jpg"
                },
                {
                    id: 'taxi_8',
                    name: "Mai Linh",
                    photo: "mai_linh.jpg"
                }
            ]
        },
        {
            id: 2,
            name: "Cây Xăng",
            companies: [
                {
                    id: 'cayxang_1',
                    name: "Bến Thành",
                    photo: "ben_thanh.jpg"
                },
                {
                    id: 'cayxang_2',
                    name: "Nơ Trang Long",
                    photo: "no_trang_long.jpg"
                },
                {
                    id: 'cayxang_3',
                    name: "Điện Biên Phủ",
                    photo: "dien_bien_phu.jpg"
                },
                {
                    id: 'cayxang_4',
                    name: "Nguyễn Tri Phương",
                    photo: "nguyen_tri_phuong.jpg"
                }
            ]
        },
        {
            id: 3,
            name: "Cinema",
            companies: [
                {
                    id: 'cinema_1',
                    name: "Galaxy Cinema",
                    photo: "galaxy_cinema.jpg"
                },
                {
                    id: 'cinema_2',
                    name: "Megastar Cinema",
                    photo: "megastar_cinema.jpg"
                },
                {
                    id: 'cinema_3',
                    name: "Lotte Cinema",
                    photo: "lotte_cinema.jpg"
                },
                {
                    id: 'cinema_4',
                    name: "Cinebox Cinema",
                    photo: "cinebox_cinema.jpg"
                }
            ]
        },
        {
            id: 4,
            name: "Viễn Thông",
            companies: [
                {
                    id: 'vienthong_1',
                    name: "Viettel",
                    photo: "viettel.jpg"
                },
                {
                    id: 'vienthong_2',
                    name: "Mobifone",
                    photo: "mobifone.jpg"
                },
                {
                    id: 'vienthong_3',
                    name: "Vinaphone",
                    photo: "vinaphone.jpg"
                },
                {
                    id: 'vienthong_4',
                    name: "Beeline",
                    photo: "beeline.jpg"
                }
            ]
        },
        {
            id: 5,
            name: "Siêu Thị",
            companies: [
                {
                    id: 'sieuthi_1',
                    name: "CoopMart",
                    photo: "coopmart.jpg"
                },
                {
                    id: 'sieuthi_2',
                    name: "Big C",
                    photo: "bigC.jpg"
                },
                {
                    id: 'sieuthi_3',
                    name: "Maximark",
                    photo: "maximark.jpg"
                },
                {
                    id: 'sieuthi_4',
                    name: "Lotte Mart",
                    photo: "lottemart.jpg"
                }
            ]
        },
        {
            id: 6,
            name: "Trung Tâm Mua Sắm",
            companies: [
                {
                    id: 'trungtammuasam_1',
                    name: "Parkson",
                    photo: "parkson.jpg"
                },
                {
                    id: 'trungtammuasam_2',
                    name: "Vincom",
                    photo: "vincom.jpg"
                },
                {
                    id: 'trungtammuasam_3',
                    name: "Now Zone",
                    photo: "nowzone.jpg"
                },
                {
                    id: 'trungtammuasam_4',
                    name: "Lotte Mart",
                    photo: "lottemart.jpg"
                },
                {
                    id: 'trungtammuasam_5',
                    name: "Aeon Mall",
                    photo: "aeon_mall.jpg"
                },
                {
                    id: 'trungtammuasam_6',
                    name: "Diamond Plaza",
                    photo: "diamond_plaza.jpg"
                }
            ]
        },
        {
            id: 7,
            name: "Thức Ăn Nhanh",
            companies: [
                {
                    id: 'fastfood_1',
                    name: "Lotteria",
                    photo: "lotteria.jpg"
                },
                {
                    id: 'fastfood_2',
                    name: "KFC",
                    photo: "kfc.jpg"
                },
                {
                    id: 'fastfood_3',
                    name: "Jollibee",
                    photo: "jollibee.jpg"
                },
                {
                    id: 'fastfood_4',
                    name: "Burger King",
                    photo: "burgerking.jpg"
                },
                {
                    id: 'fastfood_5',
                    name: "McDonalds",
                    photo: "mcdonald.jpg"
                },
                {
                    id: 'fastfood_6',
                    name: "Pizza Hut",
                    photo: "pizzahut.jpg"
                }
            ]
        }
    ];

    var companies = new Array();
    var industryList = {industries: new Array()};
    industries.forEach(function(industry){
        industry.companies.forEach(function(company) {
//            var item = $("<li data-pile='" + industry.name + "'><span class='tp-info'><span>"
//            + company.name + "</span></span><img class='company' src='./images/" + company.photo + "'></li>").prependTo($('#tp-grid'));

            companies.push(
                {
                    industryName : industry.name,
                    companyName : company.name,
                    companyPhoto : company.photo,
                    id: company.id
                });
        })
        industryList.industries.push(
            {
                id: industry.id,
                name: industry.name
            });
    })
    var template = $.templates("#industryTmpl");

    template.link("#tp-grid", companies);

    var industryListTmpl = $.templates("#industryListTmpl");

    industryListTmpl.link("#industry_list_placeholder", industryList);

    $("#industry_list").select2();

    $('.select2-container').append('<img style="position:absolute;width:30px;top:0px;right:0px;" src="./css/dropdown/search.png"/>');
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


    $(document).on('click', ".company", function() {
        initCompany($(this).parent().attr('id'));
    });

    $(document).on('click', ".menu-button", function() {
        //company info
        $('#overlay').css('display','none');

        $('.right-preview').toggleClass('unscrollable');
        $('.wrapper').toggleClass('unscrollable');
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
        //alert(JSON.stringify(thread));
        addThread(thread);

        //reset the form
        $('#input_comment').val('');
        $('#feedback').raty('cancel', false);
        allCategories.forEach(function(category) {
             $('#input_' + category).attr('checked', false)
                 .parent().removeClass('active');
        })
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
        //alert(JSON.stringify(reply));
        //alert(post.parent().attr('id'));
        addReply(post.parent().attr('id'),reply);
        //alert();
        $(this).parent().parent().remove();
    });

    $('body').on('click', '.cancel_comment', function() {
        $(this).parent().parent().remove();
    });

    $('body').on('click', '.reply', function() {
        var temp = $(this).parent().parent().parent();
        var div = temp.find('> .row:last-child');
        if (!div.hasClass('comment_box'))
            temp.append('<div class="row comment_box"><div class="col-md-11" style="margin-left:30px;"><input type="text" class="form-control" placeholder="Nhập nhận xét"><button type="button" class="btn btn-danger cancel_comment" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;margin-left:20px">Hủy</button><button type="button" class="btn btn-success send_comment" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;">Gửi</button></div></div>');
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
    if (companyId == 'fastfood_2') {
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
                    name: '80 Đường Tháp Mười – Phường 2 – Quận 6 – Tp.HCM',
                },
                {
                    id: 'kfc_8',
                    name: 'Co.op Mart – 571 Nguyễn Kiệm – Phường 9 – Quận Phú Nhuận – Tp.HCM'
                }
            ]
        };
        $.templates("#companyTmpl").link('#companyInfo', company);
        $("#branch_list").select2();
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