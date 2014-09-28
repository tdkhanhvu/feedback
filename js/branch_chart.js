var branchesData = [{
        drilldown: "Branch 1",
        name: "Branch 1",
        y: 50
    },{
        drilldown: "Branch 2",
        name: "Branch 2",
        y: 70
    },{
        drilldown: "Branch 3",
        name: "Branch 3",
        y: 90
    }, {
        drilldown: "Branch 4",
        name: "Branch 4",
        y: 60
    }],
    drilldownSeries = [{
        id: "Branch 1",
        name: "Branch 1",
        data: [
            ["Jan", 40],
            ["Feb", 50],
            ["Mar", 60],
            ["Apr", 45],
            ["May", 49],
            ["Jun", 53],
            ["Jul", 70],
            ["Aug", 65],
            ["Sep", 60],
            ["Oct", 55],
            ["Nov", 51],
            ["Dec", 46]
        ]
    },{
        id: "Branch 2",
        name: "Branch 2",
        data: [
            ["Jan", 70],
            ["Feb", 60],
            ["Mar", 80],
            ["Apr", 55],
            ["May", 59],
            ["Jun", 63],
            ["Jul", 75],
            ["Aug", 85],
            ["Sep", 90],
            ["Oct", 65],
            ["Nov", 61],
            ["Dec", 66]
        ]
    },{
        id: "Branch 3",
        name: "Branch 3",
        data: [
            ["Jan", 90],
            ["Feb", 100],
            ["Mar", 120],
            ["Apr", 100],
            ["May", 90],
            ["Jun", 80],
            ["Jul", 77],
            ["Aug", 65],
            ["Sep", 60],
            ["Oct", 80],
            ["Nov", 75],
            ["Dec", 76]
        ]
    },{
        id: "Branch 4",
        name: "Branch 4",
        data: [
            ["Jan", 60],
            ["Feb", 50],
            ["Mar", 60],
            ["Apr", 55],
            ["May", 59],
            ["Jun", 63],
            ["Jul", 70],
            ["Aug", 65],
            ["Sep", 60],
            ["Oct", 55],
            ["Nov", 51],
            ["Dec", 56]
        ]
    }];
$(function () {
    branchPositiveNegativeFeedback('#branch_chart1')
});

function branchPositiveNegativeFeedback(id) {
    $(function () {
        Highcharts.data({
            csv: document.getElementById('tsv').innerHTML,
            itemDelimiter: '\t',
            parsed: function (columns) {
                // Create the chart
                $(id).highcharts({
                    chart: {
                        type: 'column',
                        width: 485
                    },
                    title: {
                        text: 'Positive vs Negative Feedback'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Count'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}'
                    },

                    series: [{
                        name: 'Branches',
                        colorByPoint: true,
                        data: branchesData
                    }],
                    drilldown: {
                        series: drilldownSeries
                    }
                });
            }
        });
    });


}