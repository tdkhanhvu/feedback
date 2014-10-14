
$(function () {
    //http://jsfiddle.net/6bBzt/2/
    industryPositiveNegativeFeedback('#industry_chart1');
    industryCategoryOfFeedback('#industry_chart2');
    industryCustomerRating('#industry_chart3');
    industryCaseResolution('#industry_chart4');
    industryAverageCaseResponseTime('#industry_chart5');
    industryAverageThreadResponse('#industry_chart6');
});

function industryPositiveNegativeFeedback(id) {
    var industriesData = [{
            name: 'Positive',
            data: [{name:'You', y:50, drilldown:'positive 1'}, {name:'Firm 1', y:70, drilldown:'positive 2'},
                {name:'Firm 2', y:90, drilldown:'positive 3'}, {name:'Firm 3', y:60, drilldown:'positive 4'}]
        }, {
            name: 'Negative',
            data: [{y:30, drilldown:'negative 1'}, {y:40, drilldown:'negative 2'}, {y:70, drilldown:'negative 3'}
                , {y:120, drilldown:'negative 4'}]
        }],
        drilldownSeries = [{
            id: 'positive 1',
            data:[
                {name:"Jan",y: 40},
                {name:"Feb",y: 50},
                {name:"Mar",y: 60},
                {name:"Apr",y: 45},
                {name:"May",y: 49},
                {name:"Jun",y: 53},
                {name:"Jul",y: 70},
                {name:"Aug",y: 65},
                {name:"Sep",y: 60},
                {name:"Oct",y: 55},
                {name:"Nov",y: 51},
                {name:"Dec",y: 46}
            ]}, {
            id: 'positive 2',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'positive 3',
            data: [
                {name:"Jan",y: 55},
                {name:"Feb",y: 61},
                {name:"Mar",y: 43},
                {name:"Apr",y: 58},
                {name:"May",y: 53},
                {name:"Jun",y: 69},
                {name:"Jul",y: 70},
                {name:"Aug",y: 85},
                {name:"Sep",y: 60},
                {name:"Oct",y: 75},
                {name:"Nov",y: 61},
                {name:"Dec",y: 36}
            ]}, {
            id: 'positive 4',
            data: [
                {name:"Jan",y: 66},
                {name:"Feb",y: 63},
                {name:"Mar",y: 60},
                {name:"Apr",y: 65},
                {name:"May",y: 69},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 65},
                {name:"Sep",y: 60},
                {name:"Oct",y: 65},
                {name:"Nov",y: 61},
                {name:"Dec",y: 66}
            ]}, {
            id: 'negative 1',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'negative 2',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'negative 3',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'negative 4',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}];

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
            enabled: true
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
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: industriesData,
        drilldown: {
            series: drilldownSeries
        }
    });
}

function industryCategoryOfFeedback(id) {
    var industriesData = [{
            name: 'Total',
            data: [{name:'You', y:50, drilldown:'total 1'}, {name:'Firm 1', y:70, drilldown:'total 2'},
                {name:'Firm 2', y:90, drilldown:'total 3'}, {name:'Firm 3', y:60, drilldown:'total 4'}]
        }, {
            name: 'Service',
            data: [{y:30, drilldown:'service 1'}, {y:40, drilldown:'service 2'}, {y:70, drilldown:'service 3'}
                , {y:120, drilldown:'service 4'}]
        }, {
            name: 'Park',
            data: [{y:40, drilldown:'park 1'}, {y:70, drilldown:'park 2'}, {y:90, drilldown:'park 3'}
                , {y:80, drilldown:'park 4'}]
        }, {
            name: 'Product',
            data: [{y:40, drilldown:'product 1'}, {y:70, drilldown:'product 2'}, {y:90, drilldown:'product 3'}
                , {y:80, drilldown:'product 4'}]
        }],
        drilldownSeries = [{
            id: 'total 1',
            data:[
                {name:"Jan",y: 40},
                {name:"Feb",y: 50},
                {name:"Mar",y: 60},
                {name:"Apr",y: 45},
                {name:"May",y: 49},
                {name:"Jun",y: 53},
                {name:"Jul",y: 70},
                {name:"Aug",y: 65},
                {name:"Sep",y: 60},
                {name:"Oct",y: 55},
                {name:"Nov",y: 51},
                {name:"Dec",y: 46}
            ]}, {
            id: 'total 2',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'total 3',
            data: [
                {name:"Jan",y: 55},
                {name:"Feb",y: 61},
                {name:"Mar",y: 43},
                {name:"Apr",y: 58},
                {name:"May",y: 53},
                {name:"Jun",y: 69},
                {name:"Jul",y: 70},
                {name:"Aug",y: 85},
                {name:"Sep",y: 60},
                {name:"Oct",y: 75},
                {name:"Nov",y: 61},
                {name:"Dec",y: 36}
            ]}, {
            id: 'total 4',
            data: [
                {name:"Jan",y: 66},
                {name:"Feb",y: 63},
                {name:"Mar",y: 60},
                {name:"Apr",y: 65},
                {name:"May",y: 69},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 65},
                {name:"Sep",y: 60},
                {name:"Oct",y: 65},
                {name:"Nov",y: 61},
                {name:"Dec",y: 66}
            ]}, {
            id: 'service 1',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'service 2',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'service 3',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'service 4',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]},{
            id: 'park 1',
            data:[
                {name:"Jan",y: 40},
                {name:"Feb",y: 50},
                {name:"Mar",y: 60},
                {name:"Apr",y: 45},
                {name:"May",y: 49},
                {name:"Jun",y: 53},
                {name:"Jul",y: 70},
                {name:"Aug",y: 65},
                {name:"Sep",y: 60},
                {name:"Oct",y: 55},
                {name:"Nov",y: 51},
                {name:"Dec",y: 46}
            ]}, {
            id: 'park 2',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'park 3',
            data: [
                {name:"Jan",y: 55},
                {name:"Feb",y: 61},
                {name:"Mar",y: 43},
                {name:"Apr",y: 58},
                {name:"May",y: 53},
                {name:"Jun",y: 69},
                {name:"Jul",y: 70},
                {name:"Aug",y: 85},
                {name:"Sep",y: 60},
                {name:"Oct",y: 75},
                {name:"Nov",y: 61},
                {name:"Dec",y: 36}
            ]}, {
            id: 'park 4',
            data: [
                {name:"Jan",y: 66},
                {name:"Feb",y: 63},
                {name:"Mar",y: 60},
                {name:"Apr",y: 65},
                {name:"May",y: 69},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 65},
                {name:"Sep",y: 60},
                {name:"Oct",y: 65},
                {name:"Nov",y: 61},
                {name:"Dec",y: 66}
            ]}, {
            id: 'product 1',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'product 2',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'product 3',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}, {
            id: 'product 4',
            data: [
                {name:"Jan",y: 50},
                {name:"Feb",y: 60},
                {name:"Mar",y: 40},
                {name:"Apr",y: 55},
                {name:"May",y: 59},
                {name:"Jun",y: 63},
                {name:"Jul",y: 60},
                {name:"Aug",y: 75},
                {name:"Sep",y: 50},
                {name:"Oct",y: 95},
                {name:"Nov",y: 81},
                {name:"Dec",y: 76}
            ]}];

    $(id).highcharts({
        chart: {
            type: 'column',
            width: 485
        },
        title: {
            text: 'Category of Feedback'
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
            enabled: true
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
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: industriesData,
        drilldown: {
            series: drilldownSeries
        }
    });
}

function industryCustomerRating(id) {
    var industriesData = [{
            name: 'Rating',
            data: [{name:'You', y:4.5, drilldown:'rating 1'}, {name:'Firm 1', y:4, drilldown:'rating 2'},
                {name:'Firm 2', y:4.2, drilldown:'rating 3'}, {name:'Firm 3', y:3.6, drilldown:'rating 4'}]
        }],
        drilldownSeries = [{
            id: 'rating 1',
            data:[
                {name:"Jan",y: 4},
                {name:"Feb",y: 5},
                {name:"Mar",y: 4.5},
                {name:"Apr",y: 4.3},
                {name:"May",y: 4.2},
                {name:"Jun",y: 4.6},
                {name:"Jul",y: 4.4},
                {name:"Aug",y: 4.1},
                {name:"Sep",y: 4},
                {name:"Oct",y: 4.9},
                {name:"Nov",y: 4.8},
                {name:"Dec",y: 4.6}
            ]}, {
            id: 'rating 2',
            data: [
                {name:"Jan",y: 3.5},
                {name:"Feb",y: 3.6},
                {name:"Mar",y: 3.7},
                {name:"Apr",y: 3.8},
                {name:"May",y: 3.9},
                {name:"Jun",y: 4},
                {name:"Jul",y: 4.1},
                {name:"Aug",y: 4.2},
                {name:"Sep",y: 4.3},
                {name:"Oct",y: 4.4},
                {name:"Nov",y: 4.5},
                {name:"Dec",y: 4.6}
            ]}, {
            id: 'rating 3',
            data: [
                {name:"Jan",y: 4.0},
                {name:"Feb",y: 4.1},
                {name:"Mar",y: 4.3},
                {name:"Apr",y: 4.2},
                {name:"May",y: 4.4},
                {name:"Jun",y: 3.8},
                {name:"Jul",y: 3.9},
                {name:"Aug",y: 4.3},
                {name:"Sep",y: 4.4},
                {name:"Oct",y: 4.3},
                {name:"Nov",y: 4.1},
                {name:"Dec",y: 4}
            ]}, {
            id: 'rating 4',
            data: [
                {name:"Jan",y: 3},
                {name:"Feb",y: 3.2},
                {name:"Mar",y: 3.4},
                {name:"Apr",y: 3.6},
                {name:"May",y: 3.8},
                {name:"Jun",y: 3.7},
                {name:"Jul",y: 3.5},
                {name:"Aug",y: 3.3},
                {name:"Sep",y: 3.1},
                {name:"Oct",y: 3},
                {name:"Nov",y: 3.4},
                {name:"Dec",y: 3.5}
            ]}];

    $(id).highcharts({
        chart: {
            type: 'column',
            width: 485
        },
        title: {
            text: 'Customer Rating'
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
            enabled: true
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
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: industriesData,
        drilldown: {
            series: drilldownSeries
        }
    });
}

function industryCaseResolution(id) {
    var industriesData = [{
            name: 'Case Resolution',
            data: [{name:'You', y:80, drilldown:'resolution 1'}, {name:'Firm 1', y:75, drilldown:'resolution 2'},
                {name:'Firm 2', y:88, drilldown:'resolution 3'}, {name:'Firm 3', y:66, drilldown:'resolution 4'}]
        }],
        drilldownSeries = [{
            id: 'resolution 1',
            data:[
                {name:"Jan",y: 88},
                {name:"Feb",y: 82},
                {name:"Mar",y: 80},
                {name:"Apr",y: 83},
                {name:"May",y: 77},
                {name:"Jun",y: 75},
                {name:"Jul",y: 72},
                {name:"Aug",y: 75},
                {name:"Sep",y: 77},
                {name:"Oct",y: 80},
                {name:"Nov",y: 82},
                {name:"Dec",y: 84}
            ]}, {
            id: 'resolution 2',
            data: [
                {name:"Jan",y: 77},
                {name:"Feb",y: 75},
                {name:"Mar",y: 73},
                {name:"Apr",y: 71},
                {name:"May",y: 72},
                {name:"Jun",y: 73},
                {name:"Jul",y: 75},
                {name:"Aug",y: 77},
                {name:"Sep",y: 79},
                {name:"Oct",y: 75},
                {name:"Nov",y: 73},
                {name:"Dec",y: 75}
            ]}, {
            id: 'resolution 3',
            data: [
                {name:"Jan",y: 88},
                {name:"Feb",y: 89},
                {name:"Mar",y: 90},
                {name:"Apr",y: 92},
                {name:"May",y: 88},
                {name:"Jun",y: 86},
                {name:"Jul",y: 85},
                {name:"Aug",y: 87},
                {name:"Sep",y: 88},
                {name:"Oct",y: 89},
                {name:"Nov",y: 90},
                {name:"Dec",y: 92}
            ]}, {
            id: 'resolution 4',
            data: [
                {name:"Jan",y: 64},
                {name:"Feb",y: 65},
                {name:"Mar",y: 66},
                {name:"Apr",y: 68},
                {name:"May",y: 70},
                {name:"Jun",y: 72},
                {name:"Jul",y: 74},
                {name:"Aug",y: 70},
                {name:"Sep",y: 68},
                {name:"Oct",y: 64},
                {name:"Nov",y: 60},
                {name:"Dec",y: 54}
            ]}];

    $(id).highcharts({
        chart: {
            type: 'column',
            width: 485
        },
        title: {
            text: 'Case Resolution'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        legend: {
            enabled: true
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
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: industriesData,
        drilldown: {
            series: drilldownSeries
        }
    });
}

function industryAverageCaseResponseTime(id){
    var industriesData = [{
            name: 'Average Case Response Time',
            data: [{name:'You', y:10, drilldown:'response 1'}, {name:'Firm 1', y:13, drilldown:'response 2'},
                {name:'Firm 2', y:15, drilldown:'response 3'}, {name:'Firm 3', y:20, drilldown:'response 4'}]
        }],
        drilldownSeries = [{
            id: 'response 1',
            data:[
                {name:"Jan",y: 10},
                {name:"Feb",y: 12},
                {name:"Mar",y: 11},
                {name:"Apr",y: 13},
                {name:"May",y: 9},
                {name:"Jun",y: 8},
                {name:"Jul",y: 7},
                {name:"Aug",y: 8},
                {name:"Sep",y: 9},
                {name:"Oct",y: 10},
                {name:"Nov",y: 12},
                {name:"Dec",y: 11}
            ]}, {
            id: 'response 2',
            data: [
                {name:"Jan",y: 13},
                {name:"Feb",y: 11},
                {name:"Mar",y: 12},
                {name:"Apr",y: 14},
                {name:"May",y: 15},
                {name:"Jun",y: 16},
                {name:"Jul",y: 12},
                {name:"Aug",y: 13},
                {name:"Sep",y: 12},
                {name:"Oct",y: 14},
                {name:"Nov",y: 11},
                {name:"Dec",y: 13}
            ]}, {
            id: 'response 3',
            data: [
                {name:"Jan",y: 15},
                {name:"Feb",y: 16},
                {name:"Mar",y: 14},
                {name:"Apr",y: 17},
                {name:"May",y: 13},
                {name:"Jun",y: 12},
                {name:"Jul",y: 14},
                {name:"Aug",y: 16},
                {name:"Sep",y: 17},
                {name:"Oct",y: 15},
                {name:"Nov",y: 14},
                {name:"Dec",y: 15}
            ]}, {
            id: 'response 4',
            data: [
                {name:"Jan",y: 20},
                {name:"Feb",y: 22},
                {name:"Mar",y: 18},
                {name:"Apr",y: 21},
                {name:"May",y: 19},
                {name:"Jun",y: 20},
                {name:"Jul",y: 21},
                {name:"Aug",y: 22},
                {name:"Sep",y: 23},
                {name:"Oct",y: 21},
                {name:"Nov",y: 20},
                {name:"Dec",y: 19}
            ]}];

    $(id).highcharts({
        chart: {
            type: 'column',
            width: 485
        },
        title: {
            text: 'Case Resolution'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        legend: {
            enabled: true
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
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: industriesData,
        drilldown: {
            series: drilldownSeries
        }
    });
}

function industryAverageThreadResponse(id){
    var industriesData = [{
            name: 'Average Thread Response',
            data: [{name:'You', y:10, drilldown:'response 1'}, {name:'Firm 1', y:13, drilldown:'response 2'},
                {name:'Firm 2', y:15, drilldown:'response 3'}, {name:'Firm 3', y:20, drilldown:'response 4'}]
        }],
        drilldownSeries = [{
            id: 'response 1',
            data:[
                {name:"Jan",y: 10},
                {name:"Feb",y: 12},
                {name:"Mar",y: 11},
                {name:"Apr",y: 13},
                {name:"May",y: 9},
                {name:"Jun",y: 8},
                {name:"Jul",y: 7},
                {name:"Aug",y: 8},
                {name:"Sep",y: 9},
                {name:"Oct",y: 10},
                {name:"Nov",y: 12},
                {name:"Dec",y: 11}
            ]}, {
            id: 'response 2',
            data: [
                {name:"Jan",y: 13},
                {name:"Feb",y: 11},
                {name:"Mar",y: 12},
                {name:"Apr",y: 14},
                {name:"May",y: 15},
                {name:"Jun",y: 16},
                {name:"Jul",y: 12},
                {name:"Aug",y: 13},
                {name:"Sep",y: 12},
                {name:"Oct",y: 14},
                {name:"Nov",y: 11},
                {name:"Dec",y: 13}
            ]}, {
            id: 'response 3',
            data: [
                {name:"Jan",y: 15},
                {name:"Feb",y: 16},
                {name:"Mar",y: 14},
                {name:"Apr",y: 17},
                {name:"May",y: 13},
                {name:"Jun",y: 12},
                {name:"Jul",y: 14},
                {name:"Aug",y: 16},
                {name:"Sep",y: 17},
                {name:"Oct",y: 15},
                {name:"Nov",y: 14},
                {name:"Dec",y: 15}
            ]}, {
            id: 'response 4',
            data: [
                {name:"Jan",y: 20},
                {name:"Feb",y: 22},
                {name:"Mar",y: 18},
                {name:"Apr",y: 21},
                {name:"May",y: 19},
                {name:"Jun",y: 20},
                {name:"Jul",y: 21},
                {name:"Aug",y: 22},
                {name:"Sep",y: 23},
                {name:"Oct",y: 21},
                {name:"Nov",y: 20},
                {name:"Dec",y: 19}
            ]}];

    $(id).highcharts({
        chart: {
            type: 'column',
            width: 485
        },
        title: {
            text: 'Average Thread Response'
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
            enabled: true
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
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: industriesData,
        drilldown: {
            series: drilldownSeries
        }
    });
}