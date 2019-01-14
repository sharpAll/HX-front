/**
 * Created by Administrator on 2018/12/27.
 */
(function () {
    loadingInit();
})();
function loadingInit() {
    $('#loadingBtn').click(function () {
        if($(this).attr('data-type')=='0'){
            $(this).attr('data-type','1');
            $(this).text('关闭遮罩');
            HXcommon.loader('default','#DIV');
        }else {
            $(this).attr('data-type','0');
            $(this).text('开启遮罩');
            HXcommon.loaderClose('#DIV');
        }
    });
}