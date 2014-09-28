var branches = [],
    totalVote = [[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],
    cat_service = [[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],
    cat_park = [[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],
    cat_product = [[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],
    branch = [],
    vote = [];

// positive = 0
// negative = 1
// total = 2
$(function () {
    for (i =0; i < 4; i++) {
        branch = [];

        for (j = 0; j < 12; j++) {
            vote = [];

            for (k = 0; k < 2; k++){
                if (j > 0)
                    vote[k] = branch[j-1][k];
                else
                    vote[k] = 0;

                vote[k] += Math.floor((Math.random() * 50) + 1);

                totalVote[k][j] += vote[k];

                totalVote[2][j] += vote[k];

                var temp = Math.random();
                if (temp < 0.25) {
                    cat_service[k][j] += vote[k];
                    cat_service[2][j] += vote[k];
                }
                else if (temp < 0.75){
                    cat_park[k][j] += vote[k];
                    cat_park[2][j] += vote[k];
                }
                else {
                    cat_product[k][j] += vote[k];
                    cat_product[2][j] += vote[k];
                }

            }

            branch.push(vote);
        }

        branches.push(branch);
    }

    overviewPositiveNegativeFeedback('#overview_chart1')
    overviewCategoryOfFeedback('#overview_chart2')
    overviewCustomerRating('#overview_chart3')
    overviewCaseResolution('#overview_chart4')
    overviewAverageCaseResponseTime('#overview_chart5')
    overviewAverageThreadResponse('#overview_chart6')
});

function overviewCategoryOfFeedback(id) {
    $(id).highcharts({
        chart: {
            zoomType: 'x',
            width: 485
        },
        title: {
            text: 'Feedback Category',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Count'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Total',
            data: totalVote[2]
        },{
            name: 'Service',
            data: cat_service[2]
        },{
            name: 'Park',
            data: cat_park[2]
        },{
            name: 'Product',
            data: cat_product[2]
        }]
    });
}

function overviewPositiveNegativeFeedback(id) {
    $(id).highcharts({
        chart: {
            zoomType: 'x',
            width: 485
        },
        title: {
            text: 'Positive vs Negative Feedback'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Total',
            data: totalVote[2]
        },{
            name: 'Positive',
            data: totalVote[0]
        }, {
            name: 'Negative',
            data: totalVote[1]
        }]
    });
}

function overviewCustomerRating(id) {
    $(id).highcharts({
        chart: {
            zoomType: 'x',
            width: 485,
            type: 'column'
        },
        title: {
            text: 'Customer Rating'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Rating',
            data: [4, 4.2, 4.3, 4, 3.9, 3.5, 3.2, 3, 3, 2.9, 3.2,3]
        }]
    });
}

function overviewCaseResolution(id) {
    $(id).highcharts({
        chart: {
            zoomType: 'x',
            width: 485,
            type: 'column'
        },
        title: {
            text: 'Case Resolution'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Case Closed',
            data: [80, 85, 82, 81, 75, 77, 70, 65, 60, 62, 58, 55]
        }]
    });
}

function overviewAverageCaseResponseTime(id) {
    $(id).highcharts({
        chart: {
            zoomType: 'x',
            width: 485,
            type: 'column'
        },
        title: {
            text: 'Average Case Response Time'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Hours'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Case Response Time',
            data: [10, 7.5, 8, 8.1, 7.5, 7.7, 8, 6.5, 9, 21, 25, 27]
        }]
    });
}

function overviewAverageThreadResponse(id) {
    $(id).highcharts({
        chart: {
            zoomType: 'x',
            width: 485,
            type: 'column'
        },
        title: {
            text: 'Average Thread Response'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Thread Response',
            data: [10, 7.5, 8, 8.1, 7.5, 7.7, 11, 6.5, 9, 10.2, 5.8, 5.5]
        }]
    });
}