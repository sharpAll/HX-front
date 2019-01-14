/**
 * Created by Administrator on 2018/12/27.
 */
(function () {
    layerInit();
})();
function layerInit() {
    $('#layer-tips').click(function () {
        HXcommon.layer.tips('#layer-tips','这是条tips',1);
    });
    $('#layer-msg').click(function () {
        HXcommon.layer.msg('这是条msg');
    });
    $('#layer-confirm').click(function () {
        HXcommon.layer.confirm('这是条confirm',function () {
            alert('确定')
        },function () {
            alert('取消')
        });
    });
    $('#layer-alert').click(function () {
        HXcommon.layer.alert('这是条alert',function () {
            alert('确定');
        });
    });
    $('#layer-success').click(function () {
        HXcommon.layer.success('这是条success',function () {
            alert('确定');
        });
    });
    $('#layer-fail').click(function () {
        HXcommon.layer.fail('这是条fail',function () {
            alert('确定');
        });
    });
    $('#layer-open').click(function () {
        var href=window.location.href;
        HXcommon.layer.open(href,'这是一个iframe弹窗','',500,300,function () {
            alert('关闭');
        });
    });
    $('#layer-show').click(function () {
        var html=' <div id="show-log">这是一段html内容。</div>';
        HXcommon.layer.show(html,'展示html内容',500,300,function () {
            alert('关闭');
        });
    });
}