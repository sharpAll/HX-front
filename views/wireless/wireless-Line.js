/**
 * Created by Administrator on 2018/10/27.
 */
(function () {
    chartInit();
})();
function chartInit() {
    var data={
        PERCENT:[],
        MAXDP: [],
        MINDP: [],
        AVGDP: []
    };
    for(var i=49;i<=84;i=i+0.025){
        var fre=Number(i.toFixed(3));
        var item_1=[fre,50];
        var item_2=[fre,20];
        var item_3=[fre,10];
        var item_4=[fre,15];
        data.PERCENT.push(item_1);
        data.MAXDP.push(item_2);
        data.MINDP.push(item_3);
        data.AVGDP.push(item_4);
    }
    var lineChart=HXwireless.standardLineChart(49,84,data);
}