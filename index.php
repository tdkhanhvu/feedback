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
    <link rel="stylesheet" type="text/css" href="./css/stapel/stapel.css">
    <link rel="stylesheet" href="./css/dropdown/select2.css" type="text/css">
    <link rel="stylesheet" href="./css/closingeffect/closingeffect.css" type="text/css">
    <link rel="stylesheet" href="./css/filter/styles.css" type="text/css">
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
    </style>
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
<li data-pile="Taxi" style="transition: left 400ms ease-in-out, top 400ms ease-in-out; -webkit-transition: left 400ms ease-in-out, top 400ms ease-in-out; visibility: hidden; transform: rotate(0deg); left: 0px; top: 0px; display: list-item;">
        <span class="tp-info"><span>Saigontourist</span></span>
        <img src="./images/saigontourist.jpg"/>
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
        <img src="./images/phuong_trang.jpg">
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
        <span class="tp-info"><span>KFC</span></span>
        <img class="company" src="./images/kfc.jpg">
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
        <nav id="filter"></nav>

        <section id="container">
            <ul id="stage">
                <li data-tags="Phục Vụ, Giữ Xe">
                    <div style="margin:5px 20px 0; border: 3px solid green;">
                        <div class="row">
                            <div class="col-md-2">
                                <img class="img-responsive" src="./images/user/user1.jpg"/>
                            </div>
                            <div class="col-md-10">
                                <div class="row" style="margin-top: 5px;">
                                    <div class="col-md-4">
                                        <h4 style="color: rgb(141, 30, 30);margin:5px;">Trần Đoàn Khánh Vũ</h4>
                                    </div>

                                    <div id="feedback" class="col-md-4"></div>
                                    <div class="col-md-4">
                                        <img src="images/icon/minimize.png" style="width:24px;float:right;"/>
                                        <img src="images/icon/flag.png" style="width:24px;float:right;"/>
                                    </div>
                                </div>

                                <h6>Tối thứ 7 tuần rồi (16/8), mình và một người bạn tới quán này để ăn trưa. Không ngờ gặp nhân viên giữ xe khá là bất lịch sự và gắt gỏng với tụi mình. Thế nên cuối cùng cả hai quyết định không vào quán nữa mà ghé quán khác
                                </h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <span class="label label-danger">Chưa Giải Quyết</span>
                            </div>
                            <div class="col-md-10">
                                <span class="label label-primary">Phục Vụ</span>
                                <span class="label label-success">Giữ Xe</span>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px;">
                            <div class="col-md-2">
                                <h5 style="text-align: center;color: rgb(17, 83, 141);">3 ngày trước</h5>
                            </div>
                            <div class="col-md-10">
                                <h4 style="color: rgb(16, 141, 32);margin:5px;float:left;">20</h4>
                                <img src="images/icon/up.png" style="width:24px;float:left;"/>
                                <img src="images/icon/down.png" style="width:24px;float:left;"/>
                                <button type="button" class="btn btn-success" style="float:left;height: 20px;padding-top: 0;margin-top: 5px;">Trả Lời</button>
                                <button type="button" class="btn btn-primary" style="float:left;height: 20px;padding-top: 0;margin-top: 5px;margin-left:15px;">Chia Sẻ</button>
                            </div>
                        </div>
                    </div>
                    <div style="margin:5px 20px 5px 50px; border: 3px solid green;">
                        <div class="row">
                            <div class="col-md-2">
                                <img class="img-responsive" src="./images/kfc.jpg"/>
                            </div>
                            <div class="col-md-10">
                                <div class="row" style="margin-top: 5px;">
                                    <div class="col-md-8">
                                        <h4 style="color: rgb(141, 30, 30);margin:5px;float:left">KFC</h4>
                                        <img src="images/icon/reply.png" style="width:24px;float:left;"/>
                                        <h4 style="color: rgb(135, 135, 135);margin:5px;float:left">Trần Đoàn Khánh Vũ</h4>
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/icon/minimize.png" style="width:24px;float:right;"/>
                                        <img src="images/icon/flag.png" style="width:24px;float:right;"/>
                                    </div>
                                </div>

                                <h6>Cám ơn bạn đã phản hồi cho quán. Quản lý của quán đã làm việc với nhân viên gửi xe. Nếu nhân viên gửi xe còn tái phạm nữa thì quán sẽ thay thế nhân viên khác.
                                    Mong bạn sẽ còn quay lại quán những lần sau!
                                </h6>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px;">
                            <div class="col-md-2">
                                <h5 style="text-align: center;color: rgb(17, 83, 141);">2 giờ trước</h5>
                            </div>
                            <div class="col-md-10">
                                <h4 style="color: rgb(16, 141, 32);margin:5px;float:left;">5</h4>
                                <img src="images/icon/up.png" style="width:24px;float:left;"/>
                                <img src="images/icon/down.png" style="width:24px;float:left;"/>
                                <button type="button" class="btn btn-success" style="float:left;height: 20px;padding-top: 0;margin-top: 5px;">Trả Lời</button>
                                <button type="button" class="btn btn-primary" style="float:left;height: 20px;padding-top: 0;margin-top: 5px;margin-left:15px;">Chia Sẻ</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-tags="Sản Phẩm">
                    <div style="margin:5px 20px 0; border: 3px solid green;">
                        <div class="row">
                            <div class="col-md-2">
                                <img class="img-responsive" src="./images/user/user2.jpg"/>
                            </div>
                            <div class="col-md-10">
                                <div class="row" style="margin-top: 5px;">
                                    <div class="col-md-4">
                                        <h4 style="color: rgb(141, 30, 30);margin:5px;">Nguyễn Duy Long</h4>
                                    </div>

                                    <div id="feedback1" class="col-md-4"></div>
                                    <div class="col-md-4">
                                        <img src="images/icon/minimize.png" style="width:24px;float:right;"/>
                                        <img src="images/icon/flag.png" style="width:24px;float:right;"/>
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
                                <h5 style="text-align: center;color: rgb(17, 83, 141);">30 phút trước</h5>
                            </div>
                            <div class="col-md-10">
                                <h4 style="color: rgb(16, 141, 32);margin:5px;float:left;">20</h4>
                                <img src="images/icon/up.png" style="width:24px;float:left;"/>
                                <img src="images/icon/down.png" style="width:24px;float:left;"/>
                                <button type="button" class="btn btn-success" style="float:left;height: 20px;padding-top: 0;margin-top: 5px;">Trả Lời</button>
                                <button type="button" class="btn btn-primary" style="float:left;height: 20px;padding-top: 0;margin-top: 5px;margin-left:15px;">Chia Sẻ</button>
                            </div>
                        </div>
                    </div>
                    <div style="margin:5px 20px 5px 50px; border: 3px solid green;">
                        <div class="row">
                            <div class="col-md-2">
                                <img class="img-responsive" src="./images/kfc.jpg"/>
                            </div>
                            <div class="col-md-10">
                                <div class="row" style="margin-top: 5px;">
                                    <div class="col-md-8">
                                        <h4 style="color: rgb(141, 30, 30);margin:5px;float:left">KFC</h4>
                                        <img src="images/icon/reply.png" style="width:24px;float:left;"/>
                                        <h4 style="color: rgb(135, 135, 135);margin:5px;float:left">Nguyễn Duy Long</h4>
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/icon/minimize.png" style="width:24px;float:right;"/>
                                        <img src="images/icon/flag.png" style="width:24px;float:right;"/>
                                    </div>
                                </div>

                                <h6>Cám ơn bạn đã phản hồi cho công ty. Công ty rất tiếc vì trường hợp đã xảy ra. Chúng tôi sẽ làm rõ việc này với nhân viên vì an toàn vệ sinh thực phẩm là mối quan tâm hàng đầu của công ty.
                                </h6>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px;">
                            <div class="col-md-2">
                                <h5 style="text-align: center;color: rgb(17, 83, 141);">10 phút trước</h5>
                            </div>
                            <div class="col-md-10">
                                <h4 style="color: rgb(16, 141, 32);margin:5px;float:left;">5</h4>
                                <img src="images/icon/up.png" style="width:24px;float:left;"/>
                                <img src="images/icon/down.png" style="width:24px;float:left;"/>
                                <button type="button" class="btn btn-success" style="float:left;height: 20px;padding-top: 0;margin-top: 5px;">Trả Lời</button>
                                <button type="button" class="btn btn-primary" style="float:left;height: 20px;padding-top: 0;margin-top: 5px;margin-left:15px;">Chia Sẻ</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</div>
<!-- /container -->
<script type="text/javascript" src="./js/jquery.min.js"></script>
<script src="./js/modernizr.custom.63321.js"></script>
<script type="text/javascript" src="./js/stapel/jquery.stapel.js"></script>
<script type="text/javascript" src="./js/rating/rating.js"></script>
<script type="text/javascript" src="./js/filter/jquery.quicksand.js"></script>
<script type="text/javascript" src="./js/filter/script.js"></script>
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
            readOnly: true,
            score: 1
        });

        $('#feedback1').raty({
            readOnly: true,
            score: 1
        });
    });

    $(document).on('click', ".company,.menu-button", function() {
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
</script>
<script src="./js/dropdown/select2.min.js" type="text/javascript"></script>
</body>
</html>