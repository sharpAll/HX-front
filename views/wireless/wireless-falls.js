/**
 * Created by Administrator on 2018/10/27.
 */
//瀑布图
var fallChart = null;
//瀑布图组件渲染状态
var fallInited = false;
var fallNum = 0;
(function () {
    fallsModelInit();
    connectSocket();
})();
function fallsModelInit() {
    $('#fallbox').css('height', $(window).height() - 310);
    fallChart = customFallBox(37, 807);
    $(window).resize(function() {
        fallChart = customFallBox(37, 807);
    });
}
function customFallBox(startFreq, endFreq) {
    var fallChartTemp;
    if ($(window).width() <= 1120) {
        HXwireless.falls.initScale(startFreq, endFreq, 10, 60);
        fallChartTemp = HXwireless.falls.initFallChart(10, 60);
    } else {
        var offset = (($(window).width() - 1120) / 64).toFixed(1);
        var left = 10 + offset * 1;
        var right = 60 + offset * 1;
        HXwireless.falls.initScale(startFreq, endFreq, left, right);
        fallChartTemp = HXwireless.falls.initFallChart(left, right);
    }
    return fallChartTemp;
}

function connectSocket() {
    timer=setInterval(function () {
        var  data=[];
        for(var i=0;i<1000;i++){
            var n=Math.random()*100;
            data.push(n);
        }
        if (!fallInited) {
            fallChart = customFallBox(37, 807);
            $(window).resize(function() {
                fallChart = customFallBox(37, 807);
            });
            fallInited = true;
        }
        if (undefined != data && null != data) {
            if (fallNum < 4) {
                fallNum++;
            }
            if (fallNum > 3) {
                fallChart(data);
            }

        }
    },1000)

}