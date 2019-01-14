/**
 * Created by Administrator on 2018/12/27.
 */
(function () {
    formInit();
})();
function formInit() {
    $('#setValue').click(function () {
        var key=$('#localForm input').attr('name');
        var value=$('#localForm input').val();
        var isSet=HXcommon.localStorage.setValue(key,value);
        if(isSet){
            alert('保存成功');
        }
    });
    $('#getValue').click(function () {
        var value=HXcommon.localStorage.getValue('name',3600000);
        alert(value);
    });
}