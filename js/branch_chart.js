var branchesData = [{
        name: 'Positive',
        data: [{name:'Branch 1', y:50, drilldown:'positive 1'}, {name:'Branch 2', y:70, drilldown:'positive 2'},
            {name:'Branch 3', y:90, drilldown:'positive 3'}, {name:'Branch 4', y:60, drilldown:'positive 4'}]
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
$(function () {
    //http://jsfiddle.net/6bBzt/2/
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
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    series: branchesData,
                    drilldown: {
                        series: drilldownSeries
                    }
                });
            }
        });
    });


}