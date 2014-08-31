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
    <div style="width:50%;margin:20px auto;" id="industry_list_placeholder">
    </div>
    <span id="close" class="back">←</span>
</div>
<ul id="tp-grid" class="tp-grid">
</ul>
</div>
</section>
</div>

<div class="menu" style="z-index: -1;">
    <div class="left-menu" id="companyInfo">
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

<script src="./js/jquery.min.js"></script>
<script src="./js/modernizr.custom.63321.js"></script>
<script src="./js/stapel/jquery.stapel.js"></script>
<script src="./js/rating/rating.js"></script>
<script src="./js/filter/jquery.mixitup.min.js"></script>
<script src="./js/dropdown/select2.min.js"></script>
<script src="./js/timeago/jquery.timeago.js"></script>
<script src="./js/bootstrap.js"></script>
<script src="./js/template/jsviews.js"></script>

<script src="./js/main.js"></script>
<div id="temp"></div>
</body>
</html>