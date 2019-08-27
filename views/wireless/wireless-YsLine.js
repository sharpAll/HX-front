/**
 * Created by Administrator on 2018/10/27.
 */
(function () {
    chartInit();
})();
function chartInit() {
    var fre=[];
    var occuThreshold=[];
    var maxdp=[];
    var overOccuThreshold=[];
    for(var i=49;i<=84;i=i+0.025){
        fre.push(Number(i.toFixed(3)));
        occuThreshold.push(20);
        maxdp.push(40);
        overOccuThreshold.push(5);
    }
    var lineChart=HXwireless.YsLine(fre,occuThreshold,maxdp,overOccuThreshold);
}