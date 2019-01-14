/**
 * Created by Administrator on 2018/10/27.
 */
(function () {
    chartInit();
})();
function chartInit() {
    var fscanChart=HXwireless.fscanChart();
    timer=setInterval(function () {
        var dataList=[];
        for(var i=88;i<=108;i=i+0.025){
            var item=[];
            item.push(i);
            item.push(Math.pow(Math.random(), 2) * 120-20);
            dataList.push(item);
        }
        fscanChart.series[0].setData(dataList);
    },1000)
}