/**
 * Created by Administrator on 2018/12/27.
 */
(function () {
    compatibilityInit();
})();
function compatibilityInit() {
    $('#isIE8').click(function () {
        var legal=HXcommon.legalBrowser();
        if(legal){
            alert('该游览器不是IE8及以下版本');
        }else{
            alert('该游览器是IE8及以下版本');
        }
    });

}