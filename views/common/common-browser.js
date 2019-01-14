/**
 * Created by Administrator on 2018/12/27.
 */
(function () {
    browserInit();
})();
function browserInit() {
    $('#operationType').click(function () {
        var operation=HXcommon.operationType();
        if(!operation){
            alert("当前并非移动端");
        }else{
            alert("操作系统："+operation);
        }

    });
    $('#bowserType').click(function () {
        var type=HXcommon.bowserType();
        alert("浏览器厂商："+type);
    });
}