/**
 * Created by Administrator on 2018/10/27.
 */
(function () {
    singleChartInit();
})();
function singleChartInit() {
    var singleChart=HXwireless.singleChart();
    timer=setInterval(function () {
        var dpArray=singleChart.series[0].yData;
        dpArray.shift();
        dpArray.push(Math.pow(Math.random(), 2) * 120-20);
        singleChart.series[0].setData(dpArray,true);
    },100)
}