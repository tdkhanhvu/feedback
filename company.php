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
        <div class="tabbable company_menu">
            <ul class="nav nav-tabs" role="tablist" id="overviewTab"">
            <li class="active"><a href="#branchMgt" role="tab" data-toggle="tab">Branch</a></li>
            <li><a href="#analytics" role="tab" data-toggle="tab">Analytics</a></li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane active" id="branchMgt">
                    <p>abc</p>
                    <div class="clearfix"></div>
                </div>
                <div class="tab-pane" id="analytics">
                    <div class="tabbable tabs-right analytics">
                        <ul class="nav nav-tabs" role="tablist" id="myTab"">
                        <li class="active"><a href="#industry" role="tab" data-toggle="tab">Industry</a></li>
                        <li><a href="#overview" role="tab" data-toggle="tab">Overview</a></li>
                        <li><a href="#branches" role="tab" data-toggle="tab">Branches</a></li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active" id="industry">
                                <div class="chart">
                                    <div id="industry_chart1"></div>
                                </div>
                                <div class="chart">
                                    <div id="industry_chart2"></div>
                                </div>
                                <div class="chart">
                                    <div id="industry_chart3"></div>
                                </div>
                                <div class="chart">
                                    <div id="industry_chart4"></div>
                                </div>
                                <div class="chart">
                                    <div id="industry_chart5"></div>
                                </div>
                                <div class="chart">
                                    <div id="industry_chart6"></div>
                                </div>
                                <div class="clearfix"></div>
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
                                <div class="chart">
                                    <div id="branch_chart2"></div>
                                </div>
                                <div class="chart">
                                    <div id="branch_chart3"></div>
                                </div>
                                <div class="chart">
                                    <div id="branch_chart4"></div>
                                </div>
                                <div class="chart">
                                    <div id="branch_chart5"></div>
                                </div>
                                <div class="chart">
                                    <div id="branch_chart6"></div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
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
<script src="./js/industry_chart.js"></script>
<script src="./js/overview_chart.js"></script>
<script src="./js/branch_chart.js"></script>
<script>
    $(function () {
        $('#myTab a[href="#overview"]').tab('show');
        $('#overviewTab a[href="#analytics"]').tab('show');
    })
</script>
</body>
</html>