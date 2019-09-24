/**
 * Created by Administrator on 2018/12/27.
 */
(function () {
    $('#printBtn').click(function () {
        var contentId='contentPrint';
        var style="    <style>" +
            "        table{" +
            "            border-collapse: collapse;" +
            "            table-layout: fixed;" +
            "        }" +
            "        table td{" +
            "            position: relative;" +
            "            border: 1px solid #000;" +
            "            font-size: 14px;" +
            "            text-align: center;" +
            "            line-height: 40px;" +
            "        }" +
            "    </style>" ;
        HXcommon.printContent(contentId,style);
    })
})();
