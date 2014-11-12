<!DOCTYPE html>
<?php include('template.php'); ?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tôi Feedback</title>
    <link rel="stylesheet" href="./css/bootstrap.css">
    <link rel="stylesheet" href="./css/bootstrap-theme.css">
    <link rel="stylesheet" href="./css/stapel/stapel.css">
    <link rel="stylesheet" href="./css/dropdown/select2.css">
    <link rel="stylesheet" href="./css/upload/dropzone.css">
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
<div class="container">
    <header>
        <div style="width:50%;margin:20px auto;" id="industry_list_placeholder">
        </div>
        <span id="close" class="back">←</span>
    </header>
    <main>
        <ul id="tp-grid" class="tp-grid">
        </ul>
    </main>
    <footer>
        <div class="row">
            <div class="col-lg-4">
                    Copyright 2014 ToiPhanHoi.com, All rights reserved
            </div>
            <div class="col-lg-4">
                Tel: (+65) 9390 5003
            </div>
            <div class="col-lg-4">
                Address: 20 C Lorong Marzuki, Singapore, 417066
            </div>
        </div>
    </footer>
    <div id="overlay">
        <div id="overlay_content">
            <div class="left-menu" id="companyInfo">
            </div>

            <div class="right-preview unscrollable">
                <div class="panel-group" id="accordion">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    <span class="glyphicon glyphicon-plus"></span><?php echo $lang['ADD_REVIEW']; ?>
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
                                        <div class="col-md-7">
                                            <h4 style="color: rgb(141, 30, 30);margin:5px;">Trần Đoàn Khánh Vũ</h4>
                                        </div>
                                        <div id="feedback" class="col-md-5"></div>
                                        <input id="input_comment" type="text" class="form-control" placeholder="<?php echo $lang['INPUT_REVIEW']; ?>">
                                        <span class="glyphicon glyphicon-camera photo_upload_icon" id="photo_upload_comment_box"></span>
                                        <div class="btn-group" data-toggle="buttons">
                                            <label class="btn btn-default active">
                                                <input id="input_service" type="checkbox" checked><?php echo $lang['CATEGORY_SERVICE']; ?>
    </label>
                                            <label class="btn btn-default">
                                                <input id="input_park" type="checkbox"> <?php echo $lang['CATEGORY_PARK']; ?>
                                            </label>
                                            <label class="btn btn-default">
                                                <input id="input_product" type="checkbox"> <?php echo $lang['CATEGORY_PRODUCT']; ?>
                                            </label>
                                        </div>
                                        <button type="button" class="btn btn-danger cancel_thread" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;margin-left:20px"><?php echo $lang['CANCEL']; ?></button>
                                        <button type="button" class="btn btn-success send_thread" style="float:right;height: 20px;padding-top: 0;margin-top: 5px;"><?php echo $lang['SEND']; ?></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                    <?php echo $lang['ALL_REVIEWS']; ?>
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                            <div class="panel-body">
                                <div class="controls" style="position:fixed; right: 0; z-index: 1; padding: 0%; width: 8%; top: 5%;">

                                    <p><?php echo $lang['CATEGORIES']; ?></p>
                                    <p class="filter bg-primary" data-filter=".service,.park,.product">
                                        <?php echo $lang['ALL']; ?>
                                    </p>
                                    <p class="filter" data-filter=".service">
                                        <?php echo $lang['CATEGORY_SERVICE']; ?>
                                    </p>
                                    <p class="filter" data-filter=".park">
                                        <?php echo $lang['CATEGORY_PARK']; ?>
                                    </p>
                                    <p class="filter" data-filter=".product">
                                        <?php echo $lang['CATEGORY_PRODUCT']; ?>
                                    </p>

                                    <p style="margin-top: 20%;"><?php echo $lang['CASE_CLOSED']; ?></p>
                                    <p class="filter bg-primary" data-filter=".solved,.unsolved">
                                        <?php echo $lang['ALL']; ?>
                                    </p>
                                    <p class="filter" data-filter=".solved">
                                        <?php echo $lang['CASE_CLOSED']; ?>
                                    </p>
                                    <p class="filter" data-filter=".unsolved">
                                        <?php echo $lang['CASE_OPEN']; ?>
                                    </p>

                                    <p style="margin-top: 20%;"><?php echo $lang['TIME']; ?></p>
                                    <p class="sort" data-sort="myorder:asc">
                                        <?php echo $lang['LATEST']; ?>
                                    </p>
                                    <p class="sort" data-sort="myorder:desc">
                                        <?php echo $lang['OLDEST']; ?>
                                    </p>
                                </div>
                                <div id="Container"></div>
                            </div>
                        </div>
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
<script src="./js/upload/dropzone.js"></script>
<script src="./js/company.js"></script>
<script src="./js/thread.js"></script>
<script src="js/comment.js"></script>
<script src="js/reply.js"></script>
<script src="./js/main.js"></script>
<script src="./js/language.js"></script>
<div id="temp"></div>
</body>
</html>