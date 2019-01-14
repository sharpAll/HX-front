/**
 * Created by Administrator on 2018/10/27.
 */
var pointChar=null;
(function () {
    chartInit();
})();
function chartInit() {
    pointChar=HXwireless.bigDataPointChar('bigPointChart');
    var pointData=[];
     timer=setInterval(function () {
         var n = 5000,
             i;
         if(pointData.length>100000){
             pointData=[];
         }
         for (i = 0; i < n; i += 1) {
             pointData.push([
                 Math.pow(Math.random(), 2) * 100,
                 Math.pow(Math.random(), 2) * 100
             ]);
         }
         pointChar.update({
             series:[{
                 data:pointData
             }]
         })
     },1000);
}