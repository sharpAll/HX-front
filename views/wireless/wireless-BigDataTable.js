/**
 * Created by Administrator on 2018/10/27.
 */
(function () {
    tableInit();
})();
function tableInit() {
    var array=[];
    for (var i = 0; i < 200000; i++) {
        var row = { id: i, text: "text" + i };
        array.push(row);
    }
    HXwireless.bigDataScrollBar('bigDataTable',{total:200000,itemSize:30,size:300},function (pos,pageItems) {
        console.log(pos,pageItems);
        $('#bigDataTable tbody').empty();
        var html='';
        for(var i=0;i<pageItems;i++){
            var index=pos+i*1;
            html+='<tr><td>'+array[index].id+'</td><td>'+array[index].text+'</td></tr>';
        }
        $('#bigDataTable tbody').append(html);
    });
}