/**
 * Created by Administrator on 2018/12/27.
 */
(function () {
    validatorInit();
})();
function validatorInit() {
    $('#submit').click(function () {
        var passStatus=HXcommon.validator('#validatorForm');
    });
}