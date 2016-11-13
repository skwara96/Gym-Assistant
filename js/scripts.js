$(document).ready(function(){
    $('.hamburger-icon, .menu-title').click(function(){
         $('.menu-list, .menu-title, .hamburger-icon').toggleClass('active');
    });

    $('a').hover(function(){
         $(this).toggleClass('active');
    });

   $('.svg-inject').svgInject(function() {
                console.log('SVG inject complete')
            });

$(function () {
    $('.big-graph').highcharts({
        chart: {
            type: 'areaspline',
            backgroundColor: 'rgba(0,0,0,0)',
            spacing: [0,0,0,0]
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                 enabled: false,
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            gridLineColor: 'transparent',
            title: {
                text: null
            },
            labels: {
                x: 100,
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Calories',
            data: [200, 191, 210, 234, 256, 289, 320, 381, 432, 452, 431, 404, 358, 312, 287, 220, 198, 202, 232, 245, 252]
        }, {
            name: 'Steps',
            data: [210, 208, 210, 262, 256, 242, 231, 207, 193, 178, 184, 196, 237, 258, 287, 319, 354, 452, 598, 620, 576]
        }]
    });
});

});



