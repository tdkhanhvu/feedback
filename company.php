<!DOCTYPE html>
<html>
<?php require 'template.php'?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tôi Feedback</title>
    <link rel="stylesheet" href="./css/bootstrap.css">
    <link rel="stylesheet" href="./css/bootstrap-theme.css">
    <link rel="stylesheet" href="./css/dropdown/select2.css">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/company.css">
</head>
<body>
<div class="container">
    <header>
    </header>
    <main>
        <div class="tabbable tabs-right analytics">
            <ul class="nav nav-tabs" role="tablist" id="myTab"">
                <li class="active"><a href="#industry" role="tab" data-toggle="tab">Industry</a></li>
                <li><a href="#overview" role="tab" data-toggle="tab">Overview</a></li>
                <li><a href="#branches" role="tab" data-toggle="tab">Branches</a></li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane active" id="industry">
                    Tight pants next level keffiyeh you probably haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel have a terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan whatever keytar, scenester farm-to-table banksy Austin twitter handle freegan cred raw denim single-origin coffee viral.
                </div>
                <div class="tab-pane" id="overview">
                    <div class="chart">
                        <div id="overview_chart1"></div>
                    </div>
                    <div class="chart">
                        <div id="overview_chart2"></div>
                    </div>
                    <div class="chart">
                        <div id="overview_chart3"></div>
                    </div>
                    <div class="chart">
                        <div id="overview_chart4"></div>
                    </div>
                    <div class="chart">
                        <div id="overview_chart5"></div>
                    </div>
                    <div class="chart">
                        <div id="overview_chart6"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="tab-pane" id="branches">
                    <div class="chart">
                        <div id="branch_chart1"></div>
                    </div>
                </div>
            </div>
        </div>
        <div style="clear:both"></div>
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
</div>


<!-- /container -->

<script src="./js/jquery.min.js"></script>
<script src="./js/modernizr.custom.63321.js"></script>
<script src="./js/rating/rating.js"></script>
<script src="./js/filter/jquery.mixitup.min.js"></script>
<script src="./js/dropdown/select2.min.js"></script>
<script src="./js/timeago/jquery.timeago.js"></script>
<script src="./js/bootstrap.js"></script>
<script src="./js/highchart/highcharts.js"></script>
<script src="./js/highchart/modules/exporting.js"></script>
<script src="http://code.highcharts.com/modules/data.js"></script>
<script src="http://code.highcharts.com/modules/drilldown.js"></script>
<script src="./js/overview_chart.js"></script>
<script src="./js/branch_chart.js"></script>
<script>
    $(function () {
        $('#myTab a[href="#overview"]').tab('show');
    })
</script>

<pre id="tsv" style="display:none">Browser Version	Total Market Share
Microsoft Internet Explorer 8.0	26.61%
Microsoft Internet Explorer 9.0	16.96%
Chrome 18.0	8.01%
Chrome 19.0	7.73%
Firefox 12	6.72%
Microsoft Internet Explorer 6.0	6.40%
Firefox 11	4.72%
Microsoft Internet Explorer 7.0	3.55%
Safari 5.1	3.53%
Firefox 13	2.16%
Firefox 3.6	1.87%
Opera 11.x	1.30%
Chrome 17.0	1.13%
Firefox 10	0.90%
Safari 5.0	0.85%
Firefox 9.0	0.65%
Firefox 8.0	0.55%
Firefox 4.0	0.50%
Chrome 16.0	0.45%
Firefox 3.0	0.36%
Firefox 3.5	0.36%
Firefox 6.0	0.32%
Firefox 5.0	0.31%
Firefox 7.0	0.29%
Proprietary or Undetectable	0.29%
Chrome 18.0 - Maxthon Edition	0.26%
Chrome 14.0	0.25%
Chrome 20.0	0.24%
Chrome 15.0	0.18%
Chrome 12.0	0.16%
Opera 12.x	0.15%
Safari 4.0	0.14%
Chrome 13.0	0.13%
Safari 4.1	0.12%
Chrome 11.0	0.10%
Firefox 14	0.10%
Firefox 2.0	0.09%
Chrome 10.0	0.09%
Opera 10.x	0.09%
Microsoft Internet Explorer 8.0 - Tencent Traveler Edition	0.09%</pre>
</body>
</html>