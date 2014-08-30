<!DOCTYPE html>
<!-- saved from url=(0049)http://tympanus.net/Development/Stapel/index.html -->
<html>
<?php require 'template.php'?>
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
    <link rel="stylesheet" href="./css/main.css" type="text/css">
</head>
<body>
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
<ul id="tp-grid" class="tp-grid">
<!--<li data-pile="Taxi">-->
<!--    <a href="http://drbl.in/cmVe">-->
<!--        <span class="tp-info">-->
<!--            <span>Vinasun</span>-->
<!--            <div>-->
<!--                <div class="icon">-->
<!--                    <img src="images/review.png"/>1000-->
<!--                </div>-->
<!--                <div class="icon">-->
<!--                    <img src="images/comment.png"/>1000-->
<!--                </div>-->
<!--                <div class="icon">-->
<!--                    <img src="images/company.png"/>20-->
<!--                </div>-->
<!--                <div class="clearfix"></div>-->
<!--            </div>-->
<!--        </span>-->
<!--        <img src="./images/vinasun.jpg">-->
<!--    </a>-->
<!--</li>-->

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
                                <input id="input_comment" type="text" class="form-control" placeholder="Nhập nhận xét">
                                <div class="btn-group" data-toggle="buttons">
                                    <label class="btn btn-default active">
                                        <input id="input_service" type="checkbox" checked>Phục Vụ
                                    </label>
                                    <label class="btn btn-default">
                                        <input id="input_park" type="checkbox"> Giữ Xe
                                    </label>
                                    <label class="btn btn-default">
                                        <input id="input_product" type="checkbox"> Sản Phẩm
                                    </label>
                                </div>
                                <button type="button" class="btn btn-danger cancel_thread" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;margin-left:20px">Hủy</button>
                                <button type="button" class="btn btn-success send_thread" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;">Gửi</button>
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

                            <button id="button_all" class="filter" data-filter="all">Tất Cả</button>
                            <button id="button_service" class="filter" data-filter=".service">Phục Vụ</button>
                            <button class="filter" data-filter=".park">Giữ Xe</button>
                            <button class="filter" data-filter=".product">Sản Phẩm</button>

                            <label>Sort:</label>

                            <button class="sort" data-sort="myorder:asc">Asc</button>
                            <button class="sort" data-sort="myorder:desc">Desc</button>
                        </div>
                        <div id="Container"></div>
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
<script src="./js/template/jsviews.js" type="text/javascript"></script>

<script src="./js/main.js" type="text/javascript"></script>
<div id="temp"></div>
</body>
</html>