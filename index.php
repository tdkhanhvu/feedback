<!DOCTYPE html>
<!-- saved from url=(0049)http://tympanus.net/Development/Stapel/index.html -->
<html lang="en" class=" js no-touch cssanimations csstransitions">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adaptive Thumbnail Pile Effect with Automatic Grouping</title>
    <meta name="description" content="Thumbnail Pile Effect with Automatic Grouping">
    <meta name="keywords" content="jquery, pile, effect, images, grid, thumbnails, css3, grouping, albums">
    <meta name="author" content="Codrops">
    <link rel="shortcut icon" href="http://tympanus.net/Development/favicon.ico">
    <link rel="stylesheet" type="text/css" href="./css/stapel/stapel.css">
    <link rel="stylesheet" href="./css/dropdown/select2.css" type="text/css">
    <script src="./js/modernizr.custom.63321.js"></script>
    <style>
        .icon {
            width: 33%;
            float: left;
        }

        .icon > img {
            width: 25px;
            height: 25px;
        }
    </style>
</head>
<body>
<div class="container">
<section class="main">
<div class="wrapper">
<div class="topbar">
    <div style="width:50%;margin:20px auto;">
        <select multiple="multiple" id="city_start" style="width:100%">
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
<ul id="tp-grid" class="tp-grid" style="min-width: 310px; margin-left: 20px; height: 456px;">
<li data-pile="Taxi"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 0px; top: 0px; display: list-item;">
    <a href="http://drbl.in/cmVe">
        <span class="tp-info">
            <span>Vinasun</span>
            <div>
                <div class="icon">
                    <img src="images/review.png"/>1000
                </div>
                <div class="icon">
                    <img src="images/comment.png"/>1000
                </div>
                <div class="icon">
                    <img src="images/company.png"/>20
                </div>
                <div class="clearfix"></div>
            </div>
        </span>
        <img src="./images/vinasun.jpg">
    </a>
</li>
<li data-pile="Taxi"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 0px; top: 0px; display: list-item;">
    <a href="http://drbl.in/cmhM">
        <span class="tp-info"><span>Saigontourist</span></span>
        <img src="./images/saigontourist.jpg">
    </a>
</li>
<li data-pile="Taxi"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 0px; top: 0px; display: list-item;">
    <a href="http://drbl.in/eKdt">
        <span class="tp-info"><span>SaigonAir</span></span>
        <img src="./images/saigonair.jpg">
    </a>
</li>
<li data-pile="Taxi"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 0px; top: 0px; display: list-item;">
    <a href="http://drbl.in/fHXA">
        <span class="tp-info"><span>Phương Trang</span></span>
        <img src="./images/phuong_trang.JPG">
    </a>
</li>
<li data-pile="Taxi"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 0px; top: 0px; display: list-item;">
    <a href="http://drbl.in/fOSN">
        <span class="tp-info"><span>Hoàng Long</span></span>
        <img src="./images/hoang_long.jpg">
    </a>
</li>
<li data-pile="Taxi"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(-2deg); left: 0px; top: 0px; display: list-item;">
    <a href="http://drbl.in/fQiz">
        <span class="tp-info"><span>Dầu Khí Cửu Long</span></span>
        <img src="./images/dau_khi_cuu_long.jpg">
    </a>
</li>
<li data-pile="Taxi"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(2deg); left: 0px; top: 0px; display: list-item;">
    <a href="http://drbl.in/fRUG">
        <span class="tp-info">
            <span>Vinataxi</span><p>1</p>
        </span>
        <img src="./images/vinataxi.jpg">
    </a>
</li>
<li data-pile="Taxi"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(0deg); left: 0px; top: 0px; display: list-item;">
    <a href="http://drbl.in/fRUH">
        <span class="tp-info"><span>Mai Linh</span></span>
        <img src="./images/mai_linh.jpg">
    </a>

    <div class="tp-title">
        <span>Taxi</span><span>12</span>
    </div>
</li>
<li data-pile="Cây Xăng"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 310px; top: 0px; display: list-item;">
    <a href="http://drbl.in/eiUm">
        <span class="tp-info"><span>Bến Thành</span></span>
        <img src="./images/ben_thanh.jpg">
    </a>
</li>
<li data-pile="Cây Xăng"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 310px; top: 0px; display: list-item;">
    <a href="http://drbl.in/ekMY">
        <span class="tp-info"><span>Nơ Trang Long</span></span>
        <img src="./images/no_trang_long.jpg">
    </a>
</li>
<li data-pile="Cây Xăng"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 310px; top: 0px; display: list-item;">
    <a href="http://drbl.in/esQV">
        <span class="tp-info"><span>Điện Biên Phủ</span></span>
        <img src="./images/dien_bien_phu.jpg">
    </a>
</li>
<li data-pile="Cây Xăng"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 310px; top: 0px; display: list-item;">
    <a href="http://drbl.in/eByE">
        <span class="tp-info"><span>Nguyễn Tri Phương</span></span>
        <img src="./images/nguyen_tri_phuong.jpg">
    </a>
</li>
<li data-pile="Cây Xăng"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(0deg); left: 310px; top: 0px; display: list-item;">
    <a href="http://drbl.in/eGZl">
        <span class="tp-info"><span>Nguyễn Thái Bình</span></span>
        <img src="./images/nguyen_thai_binh.jpg">
    </a>

    <div class="tp-title"><span>Cây Xăng</span><span>12</span></div>
</li>
<li data-pile="Cinema"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 620px; top: 0px; display: list-item;">
    <a href="http://drbl.in/fzUB">
        <span class="tp-info"><span>Galaxy Cinema</span></span>
        <img src="./images/galaxy_cinema.jpg">
    </a>
</li>
<li data-pile="Cinema"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 620px; top: 0px; display: list-item;">
    <a href="http://drbl.in/fQEv">
        <span class="tp-info"><span>Megastar Cinema</span></span>
        <img src="./images/megastar_cinema.jpg">
    </a>
</li>
<li data-pile="Cinema"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 620px; top: 0px; display: list-item;">
    <a href="http://drbl.in/fREU">
        <span class="tp-info"><span>Lotte Cinema</span></span>
        <img src="./images/lotte_cinema.jpg">
    </a>
</li>
<li data-pile="Cinema"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(0deg); left: 620px; top: 0px; display: list-item;">
    <a href="http://drbl.in/eavb">
        <span class="tp-info"><span>Cinebox Cinema</span></span>
        <img src="./images/cinebox_cinema.jpg">

        <div class="tp-title"><span>Cinema</span><span>8</span></div>
    </a>
</li>
<li data-pile="Viễn Thông"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 930px; top: 0px; display: list-item;">
    <a href="http://drbl.in/cRkb">
        <span class="tp-info"><span>Viettel</span></span>
        <img src="./images/viettel.jpg">
    </a>
</li>
<li data-pile="Viễn Thông"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 930px; top: 0px; display: list-item;">
    <a href="http://drbl.in/cSKM">
        <span class="tp-info"><span>Mobifone</span></span>
        <img src="./images/mobifone.jpg">
    </a>
</li>
<li data-pile="Viễn Thông"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 930px; top: 0px; display: list-item;">
    <a href="http://drbl.in/djyP">
        <span class="tp-info"><span>Vinaphone</span></span>
        <img src="./images/vinaphone.jpg">
    </a>
</li>
<li data-pile="Viễn Thông"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(0deg); left: 930px; top: 0px; display: list-item;">
    <a href="http://drbl.in/duLR">
        <span class="tp-info"><span>Beeline</span></span>
        <img src="./images/beeline.jpg">
    </a>

    <div class="tp-title"><span>Viễn Thông</span><span>14</span></div>
</li>
<li data-pile="Siêu Thị"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 0px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fRjs">
        <span class="tp-info"><span>CoopMart</span></span>
        <img src="./images/coopmart.jpg">
    </a>
</li>
<li data-pile="Siêu Thị"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 0px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fHRu">
        <span class="tp-info"><span>BigC</span></span>
        <img src="./images/bigC.jpg">
    </a>
</li>
<li data-pile="Siêu Thị"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 0px; top: 248px; display: list-item;">
    <a href="http://drbl.in/etDm">
        <span class="tp-info"><span>Maximark</span></span>
        <img src="./images/maximark.jpg">
    </a>
</li>
<li data-pile="Siêu Thị"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(-2deg); left: 0px; top: 248px; display: list-item;">
    <a href="http://drbl.in/dJgj">
        <span class="tp-info"><span>Lottemart</span></span>
        <img src="./images/lottemart.jpg">
    </a>

    <div class="tp-title"><span>Siêu Thị</span><span>6</span></div>
</li>
<li data-pile="Trung Tâm Mua Sắm"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 310px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fmcU">
        <span class="tp-info"><span>Parkson</span></span>
        <img src="./images/parkson.jpg">
    </a>
</li>
<li data-pile="Trung Tâm Mua Sắm"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 310px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fueE">
        <span class="tp-info"><span>Vincom</span></span>
        <img src="./images/vincom.jpg">
    </a>
</li>
<li data-pile="Trung Tâm Mua Sắm"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 310px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fCkb">
        <span class="tp-info"><span>Nowzone</span></span>
        <img src="./images/nowzone.jpg">
    </a>
</li>
<li data-pile="Trung Tâm Mua Sắm"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 310px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fMuo">
        <span class="tp-info"><span>Lotte Mart</span></span>
        <img src="./images/lottemart.jpg">
    </a>
</li>
<li data-pile="Trung Tâm Mua Sắm"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(-2deg); left: 310px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fMur">
        <span class="tp-info"><span>Aeon Mall</span></span>
        <img src="./images/aeon_mall.jpg">
    </a>
</li>
<li data-pile="Trung Tâm Mua Sắm"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(2deg); left: 310px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fMus">
        <span class="tp-info"><span>Diamond Plaza</span></span>
        <img src="./images/diamond_plaza.jpg">
    </a>

    <div class="tp-title"><span>Trung Tâm Mua Sắm</span><span>7</span></div>
</li>
<li data-pile="Hàng Không"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 620px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fMMb">
        <span class="tp-info"><span>Jetstar</span></span>
        <img src="./images/jetstar.jpg">
    </a>
</li>
<li data-pile="Hàng Không"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 620px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fNkT">
        <span class="tp-info"><span>Vietnam Airline</span></span>
        <img src="./images/vietnam_airline.jpg">
    </a>
</li>
<li data-pile="Hàng Không"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 620px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fNoY">
        <span class="tp-info"><span>Vietjet</span></span>
        <img src="./images/vietjet.jpg">
    </a>
</li>
<li data-pile="Hàng Không"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 620px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fNlX">
        <span class="tp-info"><span>AirAsia</span></span>
        <img src="./images/airsia.jpg">
    </a>
</li>
<li data-pile="Hàng Không"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 620px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fNoR">
        <span class="tp-info"><span>Tiger Airways</span></span>
        <img src="./images/tigerair.jpg">
    </a>
</li>
<li data-pile="Hàng Không"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(-2deg); left: 620px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fNoZ">
        <span class="tp-info"><span>Singapore Airline</span></span>
        <img src="./images/singapore_airline.jpg">
    </a>
</li>
<li data-pile="Hàng Không"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(2deg); left: 620px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fRcg">
        <span class="tp-info"><span>Thai Airway</span></span>
        <img src="./images/thai_airway.jpg">
    </a>
</li>
<li data-pile="Hàng Không"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(0deg); left: 620px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fRcm">
        <span class="tp-info"><span>Qatar Airways</span></span>
        <img src="./images/qatar_airway.jpg">
    </a>

    <div class="tp-title"><span>Hàng Không</span><span>8</span></div>
</li>
<li data-pile="Thức Ăn Nhanh"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 930px; top: 248px; display: list-item;">
    <a href="http://drbl.in/edAj">
        <span class="tp-info"><span>Lotteria</span></span>
        <img src="./images/lotteria.jpg">
    </a>
</li>
<li data-pile="Thức Ăn Nhanh"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 930px; top: 248px; display: list-item;">
    <a href="http://drbl.in/dyZH">
        <span class="tp-info"><span>KFC</span></span>
        <img src="./images/kfc.jpg">
    </a>
</li>
<li data-pile="Thức Ăn Nhanh"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 930px; top: 248px; display: list-item;">
    <a href="http://drbl.in/ebCc">
        <span class="tp-info"><span>Jollibee</span></span>
        <img src="./images/jollibee.jpg">
    </a>
</li>
<li data-pile="Thức Ăn Nhanh"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(-2deg); left: 930px; top: 248px; display: list-item;">
    <a href="http://drbl.in/edyg">
        <span class="tp-info"><span>Burger King</span></span>
        <img src="./images/burgerking.jpg">
    </a>
</li>
<li data-pile="Thức Ăn Nhanh"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(2deg); left: 930px; top: 248px; display: list-item;">
    <a href="http://drbl.in/fszB">
        <span class="tp-info"><span>McDonalds</span></span>
        <img src="./images/mcdonald.jpg">
    </a>
</li>
<li data-pile="Thức Ăn Nhanh"
    style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; transform: rotate(0deg); left: 930px; top: 248px; display: list-item;">
    <a href="http://drbl.in/eLXj">
        <span class="tp-info"><span>Pizza Hut</span></span>
        <img src="./images/pizzahut.jpg">
    </a>

    <div class="tp-title"><span>Thức Ăn Nhanh</span><span>6</span></div>
</li>
</ul>
</div>
</section>
</div>
<!-- /container -->
<script type="text/javascript" src="./js/jquery.min.js"></script>
<script type="text/javascript" src="./js/stapel/jquery.stapel.js"></script>
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
        $("#city_start").select2();
    });
</script>
<script src="./js/dropdown/select2.min.js" type="text/javascript"></script>
</body>
</html>