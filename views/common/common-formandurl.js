/**
 * Created by Administrator on 2018/12/27.
 */
(function () {
    formInit();
})();
function formInit() {
    $('#serializeJson').click(function () {
        var obj=HXcommon.serializeJson('Form');
        alert(JSON.stringify(obj));
    });
    $('#setForm').click(function () {
        var jsonValue={
            'account':'sharpAll',
            'password':'12345'
        };
        HXcommon.setForm('Form',jsonValue);
    });
    $('#getQueryJson').click(function () {
        var obj=HXcommon.getQueryJson();
        alert(JSON.stringify(obj));
    });
    $('#getUrlParam').click(function () {
        var str=HXcommon.getUrlParam('taskid');
        alert(str);
    });
}