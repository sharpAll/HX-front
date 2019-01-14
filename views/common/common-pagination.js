/**
 * Created by Administrator on 2018/12/27.
 */
(function () {
    syncPaginationInit();
})();
function syncPaginationInit() {
    var data={
        'total': 5,
        'row':[
            {
                'name':'JACK',
                'goal':'50'
            }, {
                'name':'IAN',
                'goal':'30'
            }, {
                'name':'FRANK',
                'goal':'60'
            }, {
                'name':'SHARP',
                'goal':'80'
            }, {
                'name':'JIM',
                'goal':'30'
            }
        ]
    };
    HXcommon.pagination(data,function (curContent) {
        var trHtml='';
        for(var i=0;i<curContent.length;i++){
            trHtml += '<tr>'
            +'<td>'+curContent[i].name+'</td>'
            +'<td>'+curContent[i].goal+'</td>'
            +'</tr>';
        }
        $(".list-content tbody").append(trHtml);
    },{'limit':3});
}