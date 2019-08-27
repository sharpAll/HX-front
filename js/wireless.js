/**
 * 华信无线电应用图表组件库
 */
var HXwireless = {
    /*
     *定制瀑布图
     * 外层div：id=fallbox canvas：id=scale 图表canvas：id=fallChart
     * initScale param(起始频率,终止频率,左偏移,右偏移)
     * initFallChart(左偏移,右偏移)
     */
    falls:{
        initScale:function (start,end,leftOffset,rightOffset) {
            var width=$('#fallbox').width();
            var height=58;
            $('#scale').attr('width',width);
            $('#scale').attr('height',58);

            //获取canvas容器
            var can = document.getElementById('scale');
            //创建一个画布
            var ctx = can.getContext("2d");

            //绘制背景
            var lineargradient = ctx.createLinearGradient(0,0,0,height);
            lineargradient.addColorStop(0,'#f7f7f7');
            lineargradient.addColorStop(1,'#f7f7f7');
            ctx.fillStyle = lineargradient;
            ctx.fillRect(0, 0, width, height);

            //绘制刻度
            var startTick=leftOffset;
            var endTick=rightOffset;
            //频率间隔
            var offsetTick=(end-start)/5;
            //刻度有效长度
            var LenTick=width-startTick-endTick;
            // 位置偏移
            var offset=LenTick/5;
            for(var i=0;i<6;i++){
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#878787';
                ctx.beginPath();
                ctx.moveTo(startTick+i*offset,2);
                ctx.lineTo(startTick+i*offset,height-20);
                ctx.stroke();
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#878787';
                ctx.beginPath();
                ctx.moveTo(startTick+i*offset+1,2);
                ctx.lineTo(startTick+i*offset+1,height-20);
                ctx.stroke();
                //添加文本
                ctx.fillStyle='#202020';
                ctx.font = "15px 雅黑";
                if(i==0){
                    ctx.textAlign='left';
                }else{
                    ctx.textAlign='center';
                }
                if(i!=5){
                    ctx.fillText((start+i*offsetTick).toFixed(2)+'MHz', startTick+i*offset, height-5);
                }else{
                    ctx.fillText(end.toFixed(2)+'MHz', startTick+i*offset, height-5);
                }
                if(i!==5){
                    var offset_1=offset/4;
                    for(var n=1;n<4;n++){
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = '#878787';
                        ctx.beginPath();
                        ctx.moveTo(startTick+i*offset+offset_1*n,2);
                        ctx.lineTo(startTick+i*offset+offset_1*n,height/2);
                        ctx.stroke();
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = '#4d4d4d';
                        ctx.beginPath();
                        ctx.moveTo(startTick+i*offset+1+offset_1*n,2);
                        ctx.lineTo(startTick+i*offset+1+offset_1*n,height/2);
                        ctx.stroke();
                        var offset_2=offset_1/3;
                        for(var m=1;m<3;m++){
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = '#4d4d4d';
                            ctx.beginPath();
                            ctx.moveTo(startTick+i*offset+1+offset_1*n+offset_2*m,2);
                            ctx.lineTo(startTick+i*offset+1+offset_1*n+offset_2*m,height/4);
                            ctx.stroke();
                            if(n==1){
                                ctx.beginPath();
                                ctx.moveTo(startTick+i*offset+1+offset_1*n-offset_2*m,2);
                                ctx.lineTo(startTick+i*offset+1+offset_1*n-offset_2*m,height/4);
                                ctx.stroke();
                            }
                        }
                    }
                }
            }
        },
        //带顶部标尺瀑布图
        initFallChart:function (leftOffset,rightOffset) {
            var width=$('#fallbox').width();
            var height=$('#fallbox').height()-58;
            $('#fallChart').attr('width',width);
            $('#fallChart').attr('height',height);

            var colors=['#0001fd','#00649a','#00bf3f','#3bc300','#807e00','#c23c00','#fd0100'];
            var tempH=15;
            var totalLimit=Math.floor(height/tempH);
            var total=[];

            var can = document.getElementById('fallChart');
            var ctx = can.getContext("2d");
            function getColor(item) {
                if(item>-20&&item<0){
                    return getGradientColor(colors[0],colors[1],item-(-20));
                }else if(item>=0&&item<20) {
                    return getGradientColor(colors[1],colors[2],item-0);
                }else if(item>=20&&item<40) {
                    return getGradientColor(colors[2],colors[3],item-20);
                }else if(item>=40&&item<60) {
                    return getGradientColor(colors[3],colors[4],item-40);
                }else if(item>=60&&item<80) {
                    return getGradientColor(colors[4],colors[5],item-60);
                }else if(item>=80&&item<100) {
                    return getGradientColor(colors[5],colors[6],item-80);
                }
            }
            initFallsLengend(width,height,rightOffset);
            function initFallsLengend(w,h,offset) {
                offset=offset-2;
                var left=w-offset;
                var lengendGradient=ctx.createLinearGradient(left,0,left,h);
                lengendGradient.addColorStop(0,"#fd0100");
                lengendGradient.addColorStop(0.16,"#c23c00");
                lengendGradient.addColorStop(0.32,"#807e00");
                lengendGradient.addColorStop(0.48,"#3bc300");
                lengendGradient.addColorStop(0.64,"#00bf3f");
                lengendGradient.addColorStop(0.80,"#00649a");
                lengendGradient.addColorStop(1,"#0001fd");
                ctx.fillStyle=lengendGradient;
                ctx.fillRect(left,0,offset/2,h);
                ctx.fillStyle='#202020';
                ctx.font = "14px 雅黑";
                ctx.textAlign='center';
                for(var i=0;i<7;i++){
                    ctx.fillText(i*20-20, left+offset/4, h-i*h/7-h/18,offset/2);
                }
            }
            function getGradientColor(startColor,endColor,offset) {
                var sColor = hexToRgb(startColor),
                    eColor = hexToRgb(endColor);
                //计算R\G\B每一步的差值
                var rStep = (eColor[0] - sColor[0]) / 20;
                var gStep = (eColor[1] - sColor[1]) / 20;
                var bStep = (eColor[2] - sColor[2]) / 20;
                return rgbToHex(parseInt(rStep*offset+sColor[0]),parseInt(gStep*offset+sColor[1]),parseInt(bStep*offset+sColor[2]))
            }
            function rgbToHex(r, g, b)
            {
                var hex = ((r<<16) | (g<<8) | b).toString(16);
                return "#" + new Array(Math.abs(hex.length-7)).join("0") + hex;
            }
            function hexToRgb(hex)
            {
                var rgb = [];
                for(var i=1; i<7; i+=2){
                    rgb.push(parseInt("0x" + hex.slice(i,i+2)));
                }
                return rgb;
            }
            function change(curLine) {
                var tempW=(width-leftOffset-rightOffset)/curLine.length;
                var ceilW=Math.ceil(tempW)+1;
                if(total.length<totalLimit){
                    total.push(curLine);
                }else {
                    total.shift();
                    total.push(curLine);
                }
                ctx.clearRect(0,0,can.width-rightOffset,can.height);
                for(var n=0;n<total.length;n++){
                    var nLen=total[n].length;
                    var Hoffset=tempH*(total.length-n-1);
                    for(var m=0;m<nLen;m++){
                        ctx.fillStyle=getColor(total[n][m]);
                        ctx.fillRect(tempW*m+leftOffset, Hoffset, ceilW, tempH);
                    }
                }
            }
            return change;
        },
        //不带顶部标尺瀑布图
        initFallChart_1:function (leftOffset,rightOffset) {
            var width=$('#fallbox').width();
            var height=$('#fallbox').height();
            $('#fallChart').attr('width',width);
            $('#fallChart').attr('height',height);

            var colors=['#2271c2','#1bccff','#a4aa22','#f1a41c','#e9755a','#aa4219','#9c2a2a'];
            var tempH=10;
            var totalLimit=Math.floor(height/tempH);
            var total=[];

            var can = document.getElementById('fallChart');
            var ctx = can.getContext("2d");
            function getColor(item) {
                if(item>-20&&item<0){
                    return getGradientColor(colors[0],colors[1],item-(-20));
                }else if(item>=0&&item<20) {
                    return getGradientColor(colors[1],colors[2],item-0);
                }else if(item>=20&&item<40) {
                    return getGradientColor(colors[2],colors[3],item-20);
                }else if(item>=40&&item<60) {
                    return getGradientColor(colors[3],colors[4],item-40);
                }else if(item>=60&&item<80) {
                    return getGradientColor(colors[4],colors[5],item-60);
                }else if(item>=80&&item<100) {
                    return getGradientColor(colors[5],colors[6],item-80);
                }
            }
            function getGradientColor(startColor,endColor,offset) {
                var sColor = hexToRgb(startColor),
                    eColor = hexToRgb(endColor);
                //计算R\G\B每一步的差值
                var rStep = (eColor[0] - sColor[0]) / 20;
                var gStep = (eColor[1] - sColor[1]) / 20;
                var bStep = (eColor[2] - sColor[2]) / 20;
                return rgbToHex(parseInt(rStep*offset+sColor[0]),parseInt(gStep*offset+sColor[1]),parseInt(bStep*offset+sColor[2]))
            }
            function rgbToHex(r, g, b)
            {
                var hex = ((r<<16) | (g<<8) | b).toString(16);
                return "#" + new Array(Math.abs(hex.length-7)).join("0") + hex;
            }
            function hexToRgb(hex)
            {
                var rgb = [];
                for(var i=1; i<7; i+=2){
                    rgb.push(parseInt("0x" + hex.slice(i,i+2)));
                }
                return rgb;
            }
            function change(curLine) {
                var tempW=(width-leftOffset-rightOffset)/curLine.length;
                var ceilW=Math.ceil(tempW)+1;
                if(total.length<totalLimit){
                    var curLen=curLine.length;
                    var Hoffset=tempH*(total.length);
                    for(var i=0;i<curLen;i++){
                        ctx.fillStyle=getColor(curLine[i]);
                        ctx.fillRect(tempW*i+leftOffset, Hoffset, ceilW, tempH);
                    }
                    total.push(curLine);
                }else{
                    total.shift();
                    total.push(curLine);
                    ctx.clearRect(0,0,can.width,can.height);
                    for(var n=0;n<total.length;n++){
                        var nLen=total[n].length;
                        var Hoffset=tempH*n;
                        for(var m=0;m<nLen;m++){
                            ctx.fillStyle=getColor(total[n][m]);
                            ctx.fillRect(tempW*m+leftOffset, Hoffset, ceilW, tempH);
                        }
                    }
                }
            }
            return change;
        }
    },
    /*
     *无委定制标准折线图
     * startfreq起始频率,endfreq终止频率,data
    */
    standardLineChart:function (startfreq,endfreq,data) {
        var lineChart= Highcharts.chart('standardLineChart',{
            chart:{
                zoomType:'x'
            },
            title: {
                text: ''+startfreq+'-'+endfreq+'MHz频谱占用情况'
            },
            credits:{
                enabled:false
            },
            subtitle: {
                text: '',
                align:'left',
                style:{
                    "fontSize":"12px",
                    'color':'#333'
                },
                x:50,
                useHTML:true
            },
            xAxis: [{
                categories:[0,0,0],
                name: '频点',
                lineWidth:2,
                lineColor:'#8a8b88'
            }],
            yAxis: [{ // Primary yAxis
                title: {
                    text: '频道占用度%',
                    rotation : 270
                },
                tickColor:'#4f6027',
                tickWidth:2,
                tickLength:5,
                tickPosition:'inside',
                tickPositions:[0,10,20,30,40,50,60,70,80,90,100],
                gridLineWidth:0,
                lineWidth:2,
                lineColor:'#4f6027',
                opposite: true
            }, { // Secondary yAxis
                title: {
                    text: '信号电平dBuV'
                },
                tickColor:'#ff2c2c',
                tickWidth:2,
                tickLength:5,
                tickPosition:'inside',
                tickPositions:[-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90,100],
                gridLineColor:'#dbdbdb',
                gridLineWidth:'0.5',
                gridLineDashStyle:'ShortDash',
                lineWidth:2,
                lineColor:'#ff2c2c'
            }],
            tooltip: {
                shared: true
            },
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: '最大电平(dBμV)',
                yAxis: 0,
                data: data.MAXDP,
                color:'#c5536a',
                lineWidth: 0.5
            },{
                name: '最小电平(dBμV)',
                yAxis: 0,
                data: data.MINDP,
                color:'#504aa0',
                lineWidth: 0.5
            },{
                name: '平均电平(dBμV)',
                yAxis: 0,
                data: data.AVGDP,
                color:'#75d574',
                lineWidth: 0.5
            },{
                name: '占用度(%)',
                yAxis: 1,
                data: data.PERCENT,
                color:'#60615b',
                lineWidth: 0.5
            }]
        });
    },
    //基于highchart的大数据量点图 需额外引入boost.js & boost-canvas.js（已关闭所有特效）
    bigDataPointChar:function (id) {
        if (!Highcharts.Series.prototype.renderCanvas) {
            throw 'Module not loaded';
        }
        console.time('scatter');
        var pointChart= Highcharts.chart(id, {
            chart: {
                zoomType: 'xy',
                height: '100%'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true,
                usePreAllocated: true
            },
            xAxis: {
                min: 0,
                max: 100,
                gridLineWidth: 1,
                labels:{
                    enabled:false
                }
            },
            yAxis: {
                // Renders faster when we don't have to compute min and max
                min: 0,
                max: 100,
                minPadding: 0,
                maxPadding: 0,
                title: {
                    text: null
                },
                labels:{
                    enabled:false
                }
            },
            title: {
                text: null
            },
            legend: {
                enabled: false
            },
            plotOptions:{
                scatter:{
                    allowPointSelect:false,
                    animation:false
                }
            },
            series: [{
                type: 'scatter',
                color: '#15ba57',
                animation:false,
                enableMouseTracking:false,
                data: [],
                marker: {
                    radius: 1,
                    states:{
                        hover:{
                            enabled:false
                        },
                        select:{
                            enabled:false
                        }
                    },
                    symbol:'circle'
                }
            }]
        });
        console.timeEnd('scatter');
        return pointChart;
    },
    /*
     *通用频率电平图
     */
    fscanChart:function () {
        var fscanChart=Highcharts.chart('fscanChart',{
            chart : {
                backgroundColor : '#fff',
                margin : [ 20, 50, 5, 0 ],
                animation : false
            },
            credits : {
                enabled : false
            },
            title : {
                text : null
            },
            xAxis : {
                lineWidth : 0,
                minorTickLength : 0,
                plotBands : []
            },
            yAxis : {
                title : {
                    text : null
                },
                gridLineColor : '#ddddde',
                labels : {
                    style : {
                        "fontSize" : "15px",
                        "color" : "#7a8282"
                    }
                },
                tickPositions : [ -20, 0, 20, 40, 60, 80, 100 ],
                lineWidth : 1,
                lineColor : '#ddddde',
                opposite : true
            },
            legend : {
                enabled : false
            },
            plotOptions : {
                area : {
                    fillColor : Highcharts.Color('#0084ff').setOpacity(0.25).get('rgba'),
                    zones : [ {
                        color : '#0084ff'
                    } ],
                    marker : {
                        radius : 2
                    },
                    lineWidth : 1,
                    states : {
                        hover : {
                            lineWidth : 1
                        }
                    },
                    threshold : null,
                    dataLabels : {
                        enabled : false
                    }
                }
            },
            tooltip : {
                formatter : function() {
                    var s = '<b>频率: ' + this.x + ' MHz</b>';
                    $.each(this.points, function() {
                        s += '<br/>' + "电平" + ': ' +
                            this.y + 'dBμV';
                    });
                    return s;
                },
                shared : true
            },
            series : [ {
                type : 'area',
                name : '电平',
                turboThreshold : 4000,
                data : [ [ 4, 0 ], [ 807, 0 ] ]
            } ]
        });
        return fscanChart;
    },
    /*
     *单频时间电平图
     */
    singleChart:function () {
        var singleChart=Highcharts.chart('singleChart',{
            chart:{
                backgroundColor:'#fff',
                margin:[-3,0,25,51],
                animation:false
            },
            credits:{
                enabled:false
            },
            title: {
                text: null
            },
            xAxis: {
                title: {
                    text: '时间',
                    align:'high',
                    style:{"fontSize": "15px","color": "#7a8282"}
                },
                lineWidth: 1,
                lineColor:'#8a8a8a',
                labels:{
                    enabled:false
                },
                tickLength:0,
                crosshair: {
                    width: 2,
                    color: '#ff9666',
                    dashStyle: 'Solid'
                }
            },
            yAxis: {
                title: {
                    text: '电平(dBμV)',
                    align:'high',
                    style:{"fontSize": "15px","color": "#7a8282"},
                    x:10,
                    y:10
                },
                gridLineColor:'#8a8a8a',
                gridLineDashStyle:'ShortDash',
                labels:{
                    style:{"fontSize": "15px","color": "#7a8282"},
                    x:-5
                },
                tickPositions:[-20,0,20,40,60,80,100],
                lineWidth: 1,
                lineColor:'#8a8a8a'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                line: {
                    color:'#15ba57',
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            tooltip: {
                formatter: function () {
                    // var s = '<b>时间: ' + this.x + 's</b><br/>';
                    var s='';
                    $.each(this.points, function () {
                        s += '' + "电平" + ': ' +
                            this.y + 'dBμV';
                    });
                    return s;
                },
                shared: true
            },
            series: [{
                type: 'line',
                name: '电平',
                turboThreshold:4000,
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }]
        });
        return singleChart;
    },
    /* chrome盒模型支持最高像素高度30198915px 最高支持10万级的数据渲染
    控件尺寸应能整除单项尺寸
    dom=》拥有滑块的dom容器 opt=》配置参数 callback=》表格加载内容函数*/
    bigDataScrollBar:function (dom,opt,callback) {
        var options = {
            total: 0,   //数据总数
            pos: null,     //当前滚动位置
            itemSize: 20,  //单项尺寸
            size: 200  //控件尺寸
        };
        options=$.extend({}, options, opt);
        var $dom=$('#'+dom);
        $dom.height(options.size);
        var height=options.total*options.itemSize;
        $dom.find('table').eq(0).wrap($('<div style="height: '+height+'px"></div>'));
        //每页可展示的数据数量
        var pageItems=options.size/ options.itemSize;
        //获取滚动位置
        function getPos() {
            var top = $dom.scrollTop();
            $dom.find('table').css('top',top);
            var pos = parseInt(top / options.itemSize);
            return pos;
        }
        //滚动事件响应
        $dom.scroll(function () {
            var pos = getPos();
            if (pos == options.pos||pos>options.total-pageItems) return;
            options.pos = pos;
            callback(pos,pageItems);
        });
        $dom.trigger('scroll');
    },
    YsLine:function (fre,occuThreshold,maxdp,overOccuThreshold) {
        return Highcharts.chart('ysLineChart', {
            chart: {
                zoomType: 'x',
                backgroundColor:'#fafafa',
                resetZoomButton:{
                    position:{
                        x:0,
                        y:-10
                    }
                }
            },
            credits:{
                enabled:false
            },
            title: {
                text: null
            },
            legend:{
                x:-100
            },
            xAxis: {
                categories: fre,
                tickInterval:100
            },
            plotOptions: {
                series: {
                    marker: {
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            yAxis: [{ // Primary yAxis
                min: 0,
                gridLineWidth: 0,
                labels: {
                    style: {
                        color: '#7995ff'
                    }
                },
                title: {
                    text: '占用度(%)',
                    style: {
                        color: '#7995ff'
                    }
                }
            }, { // Secondary yAxis
                gridLineWidth: 0,
                labels: {
                    style: {
                        color: '#39ff67'
                    }
                },
                title: {
                    text: '最大电平(dBuV)',
                    style: {
                        color: '#39ff67'
                    }
                }
            }, { // Tertiary yAxis
                min: 0,
                allowDecimals:false,
                gridLineWidth: 0,
                labels: {
                    style: {
                        color: '#ff553c'
                    }
                },
                title: {
                    text: '超出门限次数',
                    style: {
                        color: '#ff553c'
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true,
                useHTML: true,
                headerFormat: '{point.key}MHz<br/>'
            },
            series: [{
                name: '占用度',
                color:'#7995ff',
                lineWidth:1,
                states:{
                    hover:{
                        lineWidth:1
                    }
                },
                type: 'line',
                tooltip: {
                    valueSuffix: ' %'
                },
                data: occuThreshold
            }, {
                name: '最大电平',
                color:'#39ff67',
                lineWidth:1,
                states:{
                    hover:{
                        lineWidth:1
                    }
                },
                type: 'line',
                yAxis: 1,
                tooltip: {
                    valueSuffix: ' dBuV'
                },
                data: maxdp
            }, {
                name: '超出门限次数',
                color:'#ff553c',
                lineWidth:1,
                states:{
                    hover:{
                        lineWidth:1
                    }
                },
                type: 'line',
                yAxis: 2,
                data: overOccuThreshold
            }]
        });
    }
};

