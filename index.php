<!DOCTYPE html>
<!-- saved from url=(0049)http://tympanus.net/Development/Stapel/index.html -->
<html ng-app="web" lang="en" class=" js no-touch cssanimations csstransitions">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adaptive Thumbnail Pile Effect with Automatic Grouping</title>
    <meta name="description" content="Thumbnail Pile Effect with Automatic Grouping">
    <meta name="keywords" content="jquery, pile, effect, images, grid, thumbnails, css3, grouping, albums">
    <meta name="author" content="Codrops">
    <link rel="stylesheet" type="text/css" href="./css/stapel/stapel.css">
    <link rel="stylesheet" href="./css/dropdown/select2.css" type="text/css">
    <link rel="stylesheet" href="./css/closingeffect/closingeffect.css" type="text/css">
    <link rel="stylesheet" href="./css/bootstrap.css" type="text/css">
    <link rel="stylesheet" href="./css/bootstrap-theme.css" type="text/css">
    <style>
        .icon {
            width: 33%;
            float: left;
        }

        .icon > img {
            width: 25px;
            height: 25px;
        }

        .branch_info {
            padding: 0 0 5px 0;
        }
        .branch_info > img {
            width: 25px;
            height: 25px;
            vertical-align: middle;
        }

        .action_icon {
            font-size: x-large;
            width:24px;
            height:24px;
            opacity: 1.0;
            filter: alpha(opacity=100); /* For IE8 and earlier */
        }

        .action_icon:hover {
            opacity: 0.4;
            filter: alpha(opacity=40); /* For IE8 and earlier */
        }

        .disabled {
            opacity: 0.4;
            filter: alpha(opacity=40); /* For IE8 and earlier */
        }

        .minimize {
            float:right;
            color: rgb(17, 182, 24);
        }

        .flag {
            float: right;
            color: rgb(182, 17, 17);
        }

        .up {
            float: left;
            color: green;
        }

        .down {
            float: left;
            color: red;
            margin-right: 10px;
        }

        .reply_icon {
            float:left;
        }

        .reply {
            float:left;
            height: 20px;
            padding-top: 0;
            margin-top: 5px;
            margin-right:10px;
        }

        .comment_detail {
            border: 3px solid green;
            padding-bottom: 5px;
        }

        #Container .mix{
            display: none;
        }

        .controls{
            padding: 2%;
            background: #333;
            color: #eee;
        }

        label{
            font-weight: 300;
            /*margin: 0 .4em 0 0;*/
        }

        button{
            display: inline-block;
            padding: .4em .8em;
            background: #666;
            border: 0;
            color: #ddd;
            font-size: 16px;
            font-weight: 300;
            border-radius: 4px;
            cursor: pointer;
        }

        button.active{
            background: #68b8c4;
        }

        button:focus{
            outline: 0 none;
        }

        button + label{
            margin-left: 1em;
        }

        #Container > div:nth-child(odd) {
            background-color: rgb(226, 245, 213);
        }

        #Container > div:nth-child(even) {
            background-color: rgb(245, 236, 231);
        }

        #Container > .mix {
            width:100%;
        }

        .badge {
            float: left;
            margin: 5px 5px 0 0;
        }

        .avatar {
            width:96px;
        }

        .timeago {
            margin-left: 10px;
        }

        h6 {
            margin: 0;
        }
    </style>
</head>
<body ng-controller="FeedbackController as feedback">
<div class="container">
<section class="main">
<div class="wrapper">
<div class="topbar">
    <div style="width:50%;margin:20px auto;">
        <select multiple="multiple" id="industry_list" style="width:100%">
            <option value="parking">Bãi Giữ Xe</option>
            <option value="hospital">Bệnh Viện</option>
            <option value="petrol_station">Cây Xăng</option>
            <option value="airline_agency">Đại Lý Máy Bay</option>
            <option value="telcom">Hãng Viễn Thông</option>
            <option value="bank">Ngân Hàng</option>
            <option value="taxi">Taxi</option>
            <option value="va_xe">Vá Xe</option>
        </select>
    </div>
    <span id="close" class="back">←</span>
</div>
<ul id="tp-grid" class="tp-grid" style="min-width: 310px; margin-left: 20px; height: 456px;" >
<li data-pile="{{company.industryName}}" style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(0deg); left: 0px; top: 0px; display: list-item;"
    ng-repeat="company in feedback.companies" id="{{company.company_id}}">
        <span class="tp-info">
            <span>{{company.companyName}}</span>
        </span>
    <img class="company" ng-src="./images/{{company.photo}}">
</li>

</ul>
</div>
</section>
</div>

<div class="menu" style="z-index: -1;">
<div class="left-menu">
    <a class="menu-button" href="#"><i class="fa fa-times"></i>Close Menu</a>
    <div style="width:100%;margin:50px auto;">
        <p>Chọn chi nhánh</p>
        <select multiple="multiple" id="branch_list" style="width:100%">
            <option value="kfc_1">A43 Trường Sơn – Phường 4 – Quận Tân Bình – Tp.HCM</option>
            <option value="kfc_2">Lầu 4 – DiamondPlaza 34 Lê Duẩn – Phường Bến Nghé – Quận 1- Tp.HCM</option>
            <option value="kfc_3">Siêu thị Sài Gòn – số 34 Đường 3/2 – Phường 12 – Quận 10 – Tp.HCM</option>
            <option value="kfc_4">15-17 Cộng Hòa – Phường 4 – Quận Tân Bình – Tp.HCM</option>
            <option value="kfc_5">20 An Dương Vương – Phường 9 – Quận 5 – Tp.HCM</option>
            <option value="kfc_6"> 74/2 Hai Bà Trưng – Phường Bến Nghé – Quận 1- Tp.HCM</option>
            <option value="kfc_7"> 80 Đường Tháp Mười – Phường 2 – Quận 6 – Tp.HCM</option>
            <option value="kfc_8">Co.op Mart – 571 Nguyễn Kiệm – Phường 9 – Quận Phú Nhuận – Tp.HCM</option>
        </select>

        <p style="padding:0px;">
            <img src="./images/kfc_logo.png" style="width:200px;margin:0 auto;"/>
        </p>
        <p class="branch_info">
            <img class="info_icon" src="./images/icon/description.png" style="display: inline;">
            Bên cạnh những món ăn truyền thống như gà rán và Bơ-gơ, đến với thị trường Việt Nam, KFC đã chế biến thêm một số món để phục vụ những thức ăn hợp khẩu vị người Việt như: Gà Big‘n Juicy, Gà Giòn Không Xương, Cơm Gà KFC, Bắp Cải Trộn … Một số món mới cũng đã được phát triển và giới thiệu tại thị trường Việt Nam, góp phần làm tăng thêm sự đa dạng trong danh mục thực đơn, như: Bơ-gơ Tôm, Lipton, Bánh Egg Tart.
        </p>
        <p>
            Năm 1997, KFC đã khai trương nhà hàng đầu tiên tại Thành phố Hồ Chí Minh. Đến nay, hệ thống các nhà hàng của KFC đã phát triển tới hơn 140 nhà hàng, có mặt tại hơn 19 tỉnh/thành phố lớn trên cả nước, sử dụng hơn 3.000 lao động đồng thời cũng tạo thêm nhiều việc làm trong ngành công nghiệp bổ trợ tại Việt Nam.
        </p>

        <p class="branch_info">
            <img src="./images/icon/time.png" style="display: inline;">
            <b id="branch_hour">7h30-11h00 &amp; 13h00-16h00 các ngày trong tuần</b>
        </p>
        <p class="branch_info">
            <img src="./images/icon/address.png" style="display: inline;">
            <b id="branch_address">A43 Trường Sơn – Phường 4 – Quận Tân Bình – Tp.HCM</b>
        </p>
        <p class="branch_info">
            <img src="./images/icon/phone.png" style="display: inline;">
            <b id="branch_phone">0123456789</b>
        </p>
    </div>
</div>

<div class="right-preview">
<div class="panel-group" id="accordion">
<div class="panel panel-primary">
    <div class="panel-heading">
        <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                <span class="glyphicon glyphicon-plus"></span>Thêm nhận xét về công ty
            </a>
        </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in">
        <div class="panel-body">
            <div class="row comment_box">

                <div class="col-md-2" style="padding:0;">
                    <img class="img-thumbnail" src="images/user/user1.jpg"/>
                </div>
                <div class="col-md-10">
                    <div class="col-md-8">
                        <h4 style="color: rgb(141, 30, 30);margin:5px;">Trần Đoàn Khánh Vũ</h4>
                    </div>
                    <div id="feedback" class="col-md-4"></div>
                    <input type="text" class="form-control" placeholder="Nhập nhận xét">
                    <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-default active">
                            <input type="checkbox" checked>Phục Vụ
                        </label>
                        <label class="btn btn-default">
                            <input type="checkbox"> Giữ Xe
                        </label>
                        <label class="btn btn-default">
                            <input type="checkbox"> Sản Phẩm
                        </label>
                    </div>
                    <button type="button" class="btn btn-danger cancel_comment" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;margin-left:20px">Hủy</button>
                    <button type="button" class="btn btn-success send_comment" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;">Gửi</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="panel panel-primary">
<div class="panel-heading">
    <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
            Tất cả nhận xét
        </a>
    </h4>
</div>
<div id="collapseTwo" class="panel-collapse collapse">
    <div class="panel-body">
        <div class="controls">
            <label>Lọc:</label>

            <button class="filter" data-filter="all">Tất Cả</button>
            <button class="filter btn-primary" data-filter=".category-service">Phục Vụ</button>
            <button class="filter btn-success" data-filter=".category-park">Giữ Xe</button>
            <button class="filter btn-warning" data-filter=".category-product">Sản Phẩm</button>

            <label>Sort:</label>

            <button class="sort" data-sort="myorder:asc">Asc</button>
            <button class="sort" data-sort="myorder:desc">Desc</button>
        </div>
        <div id="Container">
            <div class="mix category-service category-park" data-myorder="1">
                <div class="comment_detail post_start">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="avatar img-thumbnail" src="./images/user/user1.jpg"/>
                        </div>
                        <div class="col-md-10">
                            <div class="row" style="margin-top: 5px;">
                                <div class="col-md-4">
                                    <h4 style="color: rgb(141, 30, 30);margin:5px;">Trần Đoàn Khánh Vũ</h4>
                                </div>

                                <div id="feedback1" class="col-md-4"></div>
                                <div class="col-md-4">
                                    <span class="action_icon minimize glyphicon glyphicon-minus"></span>
                                    <span class="action_icon flag glyphicon glyphicon-flag"></span>
                                </div>
                            </div>

                            <h6>Tối thứ 7 tuần rồi (16/8), mình và một người bạn tới quán này để ăn trưa. Không ngờ gặp nhân viên giữ xe khá là bất lịch sự và gắt gỏng với tụi mình. Thế nên cuối cùng cả hai quyết định không vào quán nữa mà ghé quán khác
                            </h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <span class="label label-success">Đã Giải Quyết</span>
                        </div>
                        <div class="col-md-10">
                            <span class="label label-primary">Phục Vụ</span>
                            <span class="label label-success">Giữ Xe</span>
                        </div>
                    </div>
                    <div class="row" style="margin-top:5px;">
                        <div class="col-md-2">
                            <time class="timeago text-primary text-nowrap" datetime="2014-08-22T09:24:17Z"></time>
                        </div>
                        <div class="col-md-10">
                            <span class="badge">15</span>
                            <span class="action_icon up glyphicon glyphicon-chevron-up"></span>
                            <span class="action_icon down glyphicon glyphicon-chevron-down"></span>
                            <button type="button" class="btn btn-success reply">Trả Lời</button>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_30_facebook.png"/>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_02_google_plus.png"/>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_31_twitter.png"/>
                        </div>
                    </div>
                </div>
                <div style="margin:5px 0px 5px 50px;" class="comment_detail">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="avatar img-thumbnail" src="./images/firm/kfc.jpg"/>
                        </div>
                        <div class="col-md-10">
                            <div class="row" style="margin-top: 5px;">
                                <div class="col-md-8">
                                    <h4 style="color: rgb(141, 30, 30);margin:5px;float:left">KFC</h4>
                                    <span class="action_icon reply_icon glyphicon glyphicon-share-alt"></span>
                                    <h4 style="color: rgb(135, 135, 135);margin:5px;float:left">Trần Đoàn Khánh Vũ</h4>
                                </div>

                                <div class="col-md-4">
                                    <span class="action_icon minimize glyphicon glyphicon-minus"></span>
                                    <span class="action_icon flag glyphicon glyphicon-flag"></span>
                                </div>
                            </div>

                            <h6>Cám ơn bạn đã phản hồi cho quán. Quản lý của quán đã làm việc với nhân viên gửi xe. Nếu nhân viên gửi xe còn tái phạm nữa thì quán sẽ thay thế nhân viên khác.
                                Mong bạn sẽ còn quay lại quán những lần sau!
                            </h6>
                        </div>
                    </div>
                    <div class="row" style="margin-top:5px;">
                        <div class="col-md-2">
                            <time class="timeago text-primary text-nowrap" datetime="2014-08-24T23:24:17Z"></time>
                        </div>
                        <div class="col-md-10">
                            <span class="badge">10</span>
                            <span class="action_icon up glyphicon glyphicon-chevron-up"></span>
                            <span class="action_icon down glyphicon glyphicon-chevron-down"></span>
                            <button type="button" class="btn btn-success reply">Trả Lời</button>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_30_facebook.png"/>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_02_google_plus.png"/>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_31_twitter.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mix category-product" data-myorder="2">
                <div class="comment_detail post_start">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="avatar img-thumbnail" src="./images/user/user2.jpg"/>
                        </div>
                        <div class="col-md-10">
                            <div class="row" style="margin-top: 5px;">
                                <div class="col-md-4">
                                    <h4 style="color: rgb(141, 30, 30);margin:5px;">Nguyễn Duy Long</h4>
                                </div>

                                <div id="feedback2" class="col-md-4"></div>
                                <div class="col-md-4">
                                    <span class="action_icon minimize glyphicon glyphicon-minus"></span>
                                    <span class="action_icon flag glyphicon glyphicon-flag"></span>
                                </div>
                            </div>

                            <h6>Hôm qua (22/8), mình tới ăn tối ở quán này và gọi phần Combo 1. Thức ăn đem ra không nóng sốt và có cả gián nằm trong đó.
                            </h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <span class="label label-danger">Chưa Giải Quyết</span>
                        </div>
                        <div class="col-md-10">
                            <span class="label label-warning">Sản Phẩm</span>
                        </div>
                    </div>
                    <div class="row" style="margin-top:5px;">
                        <div class="col-md-2">
                            <time class="timeago text-primary text-nowrap" datetime="2014-08-24T09:24:17Z"></time>
                        </div>
                        <div class="col-md-10">
                            <span class="badge">35</span>
                            <span class="action_icon up glyphicon glyphicon-chevron-up"></span>
                            <span class="action_icon down glyphicon glyphicon-chevron-down"></span>
                            <button type="button" class="btn btn-success reply">Trả Lời</button>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_30_facebook.png"/>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_02_google_plus.png"/>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_31_twitter.png"/>
                        </div>
                    </div>
                </div>
                <div style="margin:5px 0px 5px 50px;" class="comment_detail">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="avatar img-thumbnail" src="./images/firm/kfc.jpg"/>
                        </div>
                        <div class="col-md-10">
                            <div class="row" style="margin-top: 5px;">
                                <div class="col-md-8">
                                    <h4 style="color: rgb(141, 30, 30);margin:5px;float:left">KFC</h4>
                                    <span class="action_icon reply_icon glyphicon glyphicon-share-alt"></span>
                                    <h4 style="color: rgb(135, 135, 135);margin:5px;float:left">Nguyễn Duy Long</h4>
                                </div>

                                <div class="col-md-4">
                                    <span class="action_icon minimize glyphicon glyphicon-minus"></span>
                                    <span class="action_icon flag glyphicon glyphicon-flag"></span>
                                </div>
                            </div>

                            <h6>Cám ơn bạn đã phản hồi cho công ty. Công ty rất tiếc vì trường hợp đã xảy ra. Chúng tôi sẽ làm rõ việc này với nhân viên vì an toàn vệ sinh thực phẩm là mối quan tâm hàng đầu của công ty.
                            </h6>
                        </div>
                    </div>
                    <div class="row" style="margin-top:5px;">
                        <div class="col-md-2">
                            <time class="timeago text-primary text-nowrap" datetime="2014-08-25T00:10:17Z"></time>
                        </div>
                        <div class="col-md-10">
                            <span class="badge">1</span>
                            <span class="action_icon up glyphicon glyphicon-chevron-up"></span>
                            <span class="action_icon down glyphicon glyphicon-chevron-down"></span>
                            <button type="button" class="btn btn-success reply">Trả Lời</button>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_30_facebook.png"/>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_02_google_plus.png"/>
                            <img class="action_icon" src="images/icon/social/glyphicons_social_31_twitter.png"/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
<!-- /container -->
<script type="text/javascript" src="./js/jquery.min.js"></script>
<script src="./js/modernizr.custom.63321.js"></script>
<script type="text/javascript" src="./js/stapel/jquery.stapel.js"></script>
<script type="text/javascript" src="./js/rating/rating.js"></script>
<script src="http://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js"></script>
<script src="./js/dropdown/select2.min.js" type="text/javascript"></script>
<script src="./js/timeago/jquery.timeago.js" type="text/javascript"></script>
<script src="./js/bootstrap.js" type="text/javascript"></script>
<script src="./js/angular.min.js" type="text/javascript"></script>
<script src="./js/app.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {

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
        $("#industry_list").select2();
        $("#branch_list").select2();

        $('.select2-container').append('<img style="position:absolute;width:30px;top:0px;right:0px;" src="./css/dropdown/search.png"/>');

        $.fn.raty.defaults.path = './images/rating';

        $('#feedback').raty({
            score: 0,
            cancel: true
        });

        $('#feedback1').raty({
            readOnly: true,
            score: 1
        });

        $('#feedback2').raty({
            readOnly: true,
            score: 1
        });

        $('#Container').mixItUp();

        $('.collapse').collapse();

        $("time.timeago").timeago();
    });

    $(document).on('click', ".company,.menu-button", function() {
        alert($(this).parent().attr('id'));
        var menu = $('.menu');
        if (menu.hasClass('in')) {
            setTimeout(function() {
                menu.css('z-index', '-1');
            }, 400);
        } else {
            menu.css('z-index', '9999');
        }
        menu.toggleClass('in');
    });

    $('body').on('click', '.send_comment', function() {
        alert($(this).parent().find('input').val());
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
</script>

</body>
</html>