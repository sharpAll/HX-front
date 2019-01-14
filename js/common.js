/**
 * Created by Administrator on 2017/7/21.
 */
var HXcommon = {
    // ajax组件
    ajaxDataController:function () {
        //打印ajax错误日志
        function printLog(result, url, params, response) {
            console.error('AJAX 请求异常 - %s\n错误信息：\n%c%s\n%c请求链接：%s\n%c请求参数：%c%s\n%c返回数据：%c%s',
                'color:red;',
                result,
                'color:#333;',
                'color:blue',
                url,
                'color:#333;',
                'color:green',
                JSON.stringify(params),
                'color:#333;',
                'color:#643A3A',
                response)
        }
        function dataHandle(url, params, callback,async,method) {
            if ((typeof params) === 'function') {
                callback = params;
                params = null;
            }
            params = params || {};
            async = async == null ? true : async;
            $.ajax({
                async: async,
                url: url,
                data: params,
                type: method,
                success: function (result, textStatus, xhr) {
                    switch (result.status) {
                        case 404:
                            // do something
                            break;
                        case 500:
                            // do something
                            break;
                        default:
                            callback(result);
                            break;
                    }
                },
                error: function (xhr, textStatus, error) {
                    alert("系统出现异常，请稍候再试");
                    printLog(xhr.status, textStatus + ' - ' + error, url, params, xhr.responseText);
                }
            });
        }
        return {
            post: function (url, params, callback, async) {
                dataHandle(url, params, callback, async, 'post');
            },
            get: function (url, params, callback, async) {
                dataHandle(url, params, callback, async, 'get');
            }
        };
    },
    // 代码高亮
    highlightInit:function () {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    },
    /*
     *** 弹层组件依赖于layer.js
     */
    layer: {
        //tips框，obj:吸附的jquery元素,msg:消息内容，operation:1上，2右(默认)，3下，4左，backgroundColor:弹窗背景色，time:显示时间默认5000毫秒,0为不关闭
        tips: function (obj, msg, operation,backgroundColor, time) {
            var tipsArray=[];
            if(operation == "undefined" || operation == "" || operation == undefined || operation==null){
                tipsArray.push(2);
            }else{
                tipsArray.push(operation);
            }
            if(backgroundColor == "undefined" || backgroundColor == "" || backgroundColor == undefined || backgroundColor==null){
                tipsArray.push('#000');
            }else{
                tipsArray.push(backgroundColor);
            }
            return layer.tips(msg, obj, {
                tips: tipsArray,
                time: time == null ? 5000 : Number(time)
            });
        },
        //msg:消息内容，time:显示时间默认2000毫秒
        msg: function (msg, time) {
            if (time == null || isNaN(time) && Number(time) < 0) {
                time = 2000;
            } else {
                time = Number(time);
            }
            return layer.msg(msg, { time: time });
        },
        //msg:消息内容，callback:点击确定执行函数，cancelcallback:点击取消执行函数
        confirm: function (msg, callback, cancelcallback) {
            return layer.confirm(msg,
                {
                    icon: 3,
                    shadeClose: true,
                    skin: 'layui-layer-rim',
                    shade: [0.5, '#000', true],
                    border: [6, 0.3, '#000000', true],
                    btn: ['确定','取消'],
                    scrollbar: false
                }, function (index) {
                    if (callback != null && typeof (callback) === "function") {
                        callback();
                    }
                    layer.close(index);
                }, function (index) {
                    if (cancelcallback != null && typeof (cancelcallback) === "function") {
                        cancelcallback();
                    }

                });
        },
        //msg:消息内容，callback:点击确定执行函数
        alert: function (msg, callback) {
            return layer.alert(msg,
                {
                    icon: 0,
                    skin: 'layui-layer-rim',
                    shade: [0.5, '#000', true],
                    border: [6, 0.3, '#000000', true],
                    scrollbar: false
                }, function (index) {
                    if (callback != null && typeof (callback) === "function") {
                        callback();
                    }
                    layer.close(index);
                });
        },
        //msg:消息内容，callback:点击确定执行函数，btnText:设置按钮文本 默认为‘确定’
        success: function (msg, callback,btnText) {
            var btnText = btnText;
            if(btnText == "undefined" || btnText == "" || btnText == undefined){
                btnText = "确定";
            }
            return layer.alert(msg,
                {
                    icon: 1,
                    skin: 'layui-layer-rim',
                    shade: [0.5, '#000', true],
                    border: [6, 0.3, '#000000', true],
                    scrollbar: false,
                    btn: [btnText]
                }, function (index) {
                    if (callback != null && typeof (callback) === "function") {
                        callback();
                    }
                    layer.close(index);
                });
        },
        //msg:消息内容，callback:点击确定执行函数
        fail: function (msg, callback) {
            return layer.alert(msg,
                {
                    icon: 2,
                    skin: 'layui-layer-rim',
                    shade: [0.5, '#000', true],
                    border: [6, 0.3, '#000000', true],
                    scrollbar: false
                }, function (index) {
                    if (callback != null && typeof (callback) === "function") {
                        callback();
                    }
                    layer.close(index);
                });
        },
        //url:弹窗内容地址，title:弹窗标题，skin:皮肤名称，width:弹窗宽度，height:弹窗高度，cancelcallback:关闭回调
        open: function (url, title,skin, width, height, cancelcallback) {
            if (width == null || width == "" || isNaN(width) || Number(width) <= 0) {
                width = 480;
            }
            if (height == null || height == "" || isNaN(height) || Number(height) <= 0) {
                height = 270;
            }
            return layer.open({
                type: 2,
                closeBtn: 1,
                title: title == null || title == "" ? false : title,
                shade: [0.5, '#000', true],
                border: [6, 0.3, '#000000', true],
                area: [width + "px", height + "px"],
                skin:skin,
                //offset: (($(window).height() < height ? height + 40 : $(window).height()) - height) / 2 + 'px',
                //maxmin: true,
                content: url,
                cancel: function (index) {
                    if (cancelcallback != null && typeof (cancelcallback) === "function") {
                        cancelcallback();
                    }
                }
            });
        },
        //content:内容元素，title:弹窗标题，width:弹窗宽度，height:弹窗高度，cancelcallback:关闭回调
        show: function (content, title, width, height, cancelcallback) {
            if (width == null || width == "" || isNaN(width) || Number(width) <= 0) {
                width = 480;
            }
            if (height == null || height == "" || isNaN(height) || Number(height) <= 0) {
                height = 270;
            }
            //页面层
            return layer.open({
                type: 1,
                closeBtn: 1,
                title: title == null || title == "" ? false : title,
                skin: '',
                area: [width + "px", height + "px"],//宽高
                border: [6, 0.3, '#000000', true],
                //offset: (($(window).height() < height ? height + 40 : $(window).height()) - height) / 2 + 'px',
                content: content,
                cancel: function (index) {
                    if (cancelcallback != null && typeof (cancelcallback) === "function") {
                        cancelcallback();
                    }
                }
            });
        },
        closeLayer:function () {
            var index=parent.layer.index;
            parent.layer.close(index);
        }
    },
    /*基于echart的水球图 需引入echarts-liquidfill
    *el->绑定元素 per->百分比 colorArray->渐变色 callback->点击事件（可选）
     */
    liquidfill:function (el,per,colorArray,callback) {
        var liquid = echarts.init(document.getElementById(el));
        var option = {
            series: [{
                type: 'liquidFill',
                data: [per],
                amplitude:3,
                outline: {
                    show: false
                },
                backgroundStyle: {
                    color: '#efefef'
                },
                itemStyle: {
                    normal: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0, color: colorArray[0]  },
                            {
                                offset: 1, color: colorArray[1]
                            }], false)
                    }
                },
                animationDuration: 1000,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#294D99',
                            insideColor: '#ffffff',
                            fontSize: 15,
                            fontWeight: 'normal'
                        },
                        position: ['50%', '85%']
                    }
                }
            }]
        };
        liquid.setOption(option);
        if (callback != null && typeof (callback) === "function") {
            liquid.getZr().on('click', function() {
                callback();
            });
        }
    },
    /*
    数据拖拽（非实际拖拽）
    des目标元素 src可被拖拽的元素集合
     */
    datadraft:function (des,srcArray) {
        if($('body').css('position')=='static'){
            $('body').css('position','relative');
        }
        var srcEle=srcArray.join(',');
        $(srcEle).mousedown(function (event) {
            var e = event || window.event;
            var x=e.screenX;
            var y=e.screenY;
            var color=$(this).css('backgroundColor');
            var data=$(this).attr('data-n');
            $('body').append('<div id="cursor" style="position:absolute;opacity:0.3;width:20px;height:20px;background-color: '+color+';left: '+x+';top: '+y+';" data-n="'+data+'"></div>');
            console.log(e);
            $(document).mousemove(function (e) {
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                var nx = (e.pageX || e.clientX + scrollX)-21;
                var ny = (e.pageY || e.clientY + scrollY)-21;
                $('#cursor').css({'left':nx,'top':ny});
            });
            $(document).mouseup(function (event) {
                var e = event || window.event;
                if(e.target.id==des.substr(1)){
                    console.log(e);
                    var data=$('#cursor').attr('data-n');
                    alert(data)
                }
                $('body').find('#cursor').remove();
                $(this).off('mousemove mouseup');
            });
            return false;
        });
    },
    /*
     *表单验证模块 obj为表单模块
     * data-vali是否校验 data-name名称  data-maxLen最大长度 data-minLen最小长度 data-type校验类型
     * 返回是否通过校验状态位
     * */
    validator:function (obj) {
        var pass=true;
        var valiType={
            //非负数
            numberNotNega:function (value) {
                var obj={};
                var reg=/^[0-9]*$/;
                var reg1=/^\d+(\.\d+)?$/;
                if(!(reg.test(value)||reg1.test(value))){
                    obj.msg="请输入正确的";
                    obj.success=false;
                }else{
                    obj.msg="";
                    obj.success=true;
                }
                return obj;
            },
            //中文名称
            chineseName:function (input) {
                var obj={};
                var reg1 = /^[\u4E00-\uFA29\uE7C7-\uE7F3]{2,10}$/;
                var reg2 = /^[\u4E00-\uFA29\uE7C7-\uE7F3]{2,10}[·][\u4E00-\uFA29\uE7C7-\uE7F3]{2,9}$/; // 新疆人姓名,以·连接
                var reg3 = /^[\u4E00-\uFA29\uE7C7-\uE7F3]{2,10}[●][\u4E00-\uFA29\uE7C7-\uE7F3]{2,9}$/; // 新疆人姓名,以●连接
                var reg4 = /^[\u4E00-\uFA29\uE7C7-\uE7F3]{2,10}[\\s][\u4E00-\uFA29\uE7C7-\uE7F3]{2,9}$/; // 新疆人姓名,以空格连接
                var reg5 = /^[\u4E00-\uFA29\uE7C7-\uE7F3]{2,10}[\\-][\u4E00-\uFA29\uE7C7-\uE7F3]{2,9}$/; // 新疆人姓名,以-连接
                if (!reg1.test(input) && !reg2.test(input)
                    && !reg3.test(input) && !reg4.test(input)
                    && !reg5.test(input)) {
                    obj.msg="请输入正确的";
                    obj.success=false;
                }else{
                    obj.msg="";
                    obj.success=true;
                }
                return obj;
            },
            //身份证号
            IdNumber:function (IdNumber) {
                var obj={};
                if((IdNumber.length != 15) && (IdNumber.length != 18)){
                    obj.msg="请输入正确的";
                    obj.success=false;
                }else if(!this.certNoDetail(IdNumber)){
                    obj.msg="请输入正确的";
                    obj.success=false;
                }else{
                    obj.msg="";
                    obj.success=true;
                }
                return obj;
            },
            certNoDetail:function (input) {
                var IS_IDCARD = false;
                if (input.length == 15) {
                    var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
                    if (!reg.test(input)) {
                        return IS_IDCARD;
                    }
                }
                if (input.length == 18) {
                    var reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([\d|x|X]{1})$/;
                    if (!reg.test(input)) {
                        return IS_IDCARD;
                    }
                }
                var monthPerDays = [31, 28, 31, 30, 31, 30, 31, 31, 30,
                    31, 30, 31];
                var certid = input.toLowerCase();
                var birthDate = certid.length == 15 ? "19"
                    + certid.substring(6, 12) : certid.substring(6, 14);
                var year = birthDate.substring(0, 4);
                var month = null;
                var day = null;
                if (birthDate.substring(4, 5) == '0') {
                    month = birthDate.substring(5, 6);
                } else {
                    month = birthDate.substring(4, 6);
                }
                if (birthDate.substring(6, 7) == '0') {
                    day = birthDate.substring(7, 8);
                } else {
                    day = birthDate.substring(6, 8);
                }
                var dd = parseInt(day, 10);
                var mm = parseInt(month, 10);
                var yy = parseInt(year, 10);
                if (mm > 12 || mm < 1 || dd > 31 || dd < 1) {
                    return IS_IDCARD;
                }
                if (yy % 100 != 0) {
                    if (yy % 4 == 0) {
                        monthPerDays[1] = 29;
                    }
                } else {
                    if (yy % 400 == 0) {
                        monthPerDays[1] = 29;
                    }
                }
                if (monthPerDays[mm - 1] < dd) {
                    return IS_IDCARD;
                }
                if (certid.length == 15) {
                    return true;
                }
                var arTemp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5,
                    8, 4, 2];
                var num = 0;
                var proof = '';
                for (var i = 0; i < 17; i++) {
                    num = num + parseInt(certid.substring(i, i + 1), 10)
                        * arTemp[i];
                }
                num = num % 11;
                switch (num) {
                    case 0:
                        proof = "1";
                        break;
                    case 1:
                        proof = "0";
                        break;
                    case 2:
                        proof = "x";
                        break;
                    case 3:
                        proof = "9";
                        break;
                    case 4:
                        proof = "8";
                        break;
                    case 5:
                        proof = "7";
                        break;
                    case 6:
                        proof = "6";
                        break;
                    case 7:
                        proof = "5";
                        break;
                    case 8:
                        proof = "4";
                        break;
                    case 9:
                        proof = "3";
                        break;
                    case 10:
                        proof = "2";
                        break;
                }
                if (proof == '' || !(certid.substring(17, 18) == proof)) {
                    return IS_IDCARD;
                } else {
                    return true;
                }
            },
            //根据身份证号码验证是否成年
            isAdult: function(idCard) {
                var obj={};
                var birthDate = "", year = "", month = "", day = "";
                if (idCard.length == 18) {
                    year = idCard.substring(6, 10);
                    month = idCard.substring(10, 12);
                    day = idCard.substring(12, 14);
                } else {
                    year = "19" + idCard.substring(6, 8);
                    month = idCard.substring(8, 10);
                    day = idCard.substring(10, 12);
                }
                birthDate = '' + year + month + day;
                var date = new Date();
                //var nowStr = date.getFullYear() + '' + date.getMonth() + '' + date.getDate();
                var nowStr = new Date().Format("yyyyMMdd");
                var left = parseInt(nowStr, 10) - parseInt(birthDate, 10);
                if (left < 18 * 10000) {
                    obj.msg="未成年";
                    obj.success=false;
                }else{
                    obj.msg="";
                    obj.success=true;
                }
                return obj;
            },
            //验证支付宝账号
            ZFB:function (zfb) {
                var obj={};
                if(!/^1[3458][0-9]{9}/.test(zfb)&&!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(zfb)){
                    obj.msg="请输入正确的";
                    obj.success=false;
                }else{
                    obj.msg="";
                    obj.success=true;
                }
                return obj;
            },
            //邮箱地址
            Email:function (email) {
                var obj={};
                var reg=/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
                if(!reg.test(email)){
                    obj.msg="请输入正确的";
                    obj.success=false;
                }else{
                    obj.msg="";
                    obj.success=true;
                }
                return obj;
            },
            //手机号码
            mobile:function (mobile) {
                var obj={};
                var reg=/^(?:13\d|14\d|15\d|18\d|17\d)-?\d{5}(\d{3}|\*{3})$/;
                if(!reg.test(mobile)){
                    obj.msg="请输入正确的";
                    obj.success=false;
                }else{
                    obj.msg="";
                    obj.success=true;
                }
                return obj;
            },
            //手机号码或邮箱
            EmailOrMobile:function (input) {
                var obj={};
                var reg1=/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
                var reg2=/^(?:13\d|14\d|15\d|18\d|17\d)-?\d{5}(\d{3}|\*{3})$/;
                if(!(reg1.test(input)||reg2.test(input))){
                    obj.msg="请输入正确的";
                    obj.success=false;
                }else{
                    obj.msg="";
                    obj.success=true;
                }
                return obj;
            }
        };
        $(obj).find('input').each(function () {
            if(!pass){
                return
            }
            if($(this).attr('data-vali')=='true'){
                var value=$(this).val().trim();
                var name=$(this).attr('data-name');
                var maxLen=$(this).attr('data-maxLen');
                var minLen=$(this).attr('data-minLen');
                var type=$(this).attr('data-type');
                if(value==''){
                    pass=false;
                    alert('请输入'+name);
                    return;
                }else if(maxLen!=undefined){
                    if(value.length>maxLen){
                        pass=false;
                        alert(name+'的长度应不大于'+maxLen+'个字符');
                        return;
                    }
                }else if(minLen!=undefined){
                    if(value.length<minLen){
                        pass=false;
                        alert(name+'的长度应不小于'+minLen+'个字符');
                        return;
                    }
                }else if(type!=undefined){
                    var msg=valiType[type](value);
                    if(msg.success==false){
                        pass=false;
                        alert(msg.msg+name);
                        return;
                    }
                }
            }
        });
        return pass;
    },
    /*
     *** 正在加载遮罩层
     *** option为自定义配置 使用默认配置时为'default'
     *** obj为遮罩层作用元素 例如'#div1' 不使用时默认为全局遮罩
     */
    loader:function (option,obj) {
        // 默认配置
        var opt={
            backgroudColor: "rgba(236,236,236,0.8)",//背景色
            backgroundImage: "/HX-front/img/HXloading.gif",//背景图片
            text: "none",//文字
            width: 80,//宽度
            height: 52//高度
        };
        var ele;
        var scrollTop;
        var contentTop;
        var contentLeft;
        if(option!='default'){
            opt=$.extend({}, opt, option);
        }
        obj=obj||'body';
        ele=$(obj);
        contentLeft=ele.width()*0.5-opt.width*0.5;
        if(obj!='body'){
            if(ele.css("position")=='static'){
                ele.css("position","relative");
            }
            scrollTop=ele.scrollTop();
            contentTop=ele.height()*0.5-opt.height*0.5+scrollTop;
        }else{
            scrollTop=$(document).scrollTop();
            contentTop=$(window).height()*0.5-opt.height*0.5+scrollTop;
        }
        //背景遮罩层
        var height=ele.innerHeight();
        var width=ele.innerWidth();
        var loadLayer = $("<div class='loadingLayer'></div>");
        if(HXcommon.legalBrowser()){
            loadLayer.css({
                zIndex:9998,
                position: "absolute",
                height: height + "px",
                width: width + "px",
                top: 0,
                left: 0,
                background: opt.backgroudColor
            });
        }else {
            loadLayer.css({
                zIndex:9998,
                position: "absolute",
                height: height + "px",
                width: width + "px",
                top: 0,
                left: 0,
                opacity:.8,
                backgroundColor: "rgb(236,236,236)"
            });
        }

        //图片及文字层
        var content = $("<div class='loadingContent'></div>");
        content.css({
            textAlign: "center",
            position:"absolute",
            zIndex: 9999,
            height: opt.height + "px",
            width: opt.width + "px",
            top: contentTop,
            left: contentLeft,
            verticalAlign: "middle",
            background: opt.backgroudColor,
            borderRadius:"8px",
            fontSize:"13px"
        });
        var contentInner="";
        if(opt.text=='none'){
            contentInner=  "<img style='vertical-align:middle' src='" + opt.backgroundImage + "' />"
        }else{
            contentInner=
                "<img style='vertical-align:middle' src='" + opt.backgroundImage + "' />"
                + "<span style='text-align:center; vertical-align:middle;'>" + opt.text + "</span>";
        }
        content.append(contentInner);
        loadLayer.append(content);
        ele.append(loadLayer);
    },
    loaderClose:function (obj) {
        obj=obj||'body';
        $(obj).find(".loadingLayer").remove();
    },
    //判断游览器是否是ie8及以下版本
    legalBrowser:function (addFunc) {
        var pass=true;
        var explorer = window.navigator.userAgent.toLowerCase() ;
        //ie
        if (explorer.indexOf("msie") >= 0) {
            var ver=explorer.match(/msie ([\d.]+)/)[1];
            if(ver<9.0){
                pass=false;
            }
        }
        var toAddFun=addFunc||false;
        if(addFunc===true){
            //解决IE8不支持consolec产生的错误
            window.console = window.console || (function () {
                    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile
                        = c.clear = c.exception = c.trace = c.assert = function () { };
                    return c;
                })();
            //为IE8添加indexOf方法
            if (!Array.prototype.indexOf){
                Array.prototype.indexOf = function(elt /*, from*/){
                    var len = this.length >>> 0;
                    var from = Number(arguments[1]) || 0;
                    from = (from < 0)
                        ? Math.ceil(from)
                        : Math.floor(from);
                    if (from < 0)
                        from += len;
                    for (; from < len; from++)
                    {
                        if (from in this &&
                            this[from] === elt)
                            return from;
                    }
                    return -1;
                };
            }
            //解决 IE8 上trim()出错
            String.prototype.trim = function()
            {
                return this.replace(/(^\s*)|(\s*$)/g, "");
            }
        }
        return pass;
    },
    /*
     *** 同步分页基于layui
     *** data为分页数据 callback为对分页数据所做的操作 options对默认参数进行调整
     */
    pagination:function (data,callback,options) {
        var opt={
            limit:9
        };
        var options=$.extend({}, opt, options);
        var laypage = layui.laypage;
        layui.use('laypage', function(){
            //执行一个laypage实例
            laypage.render({
                elem: 'pagination' //注意，这里的 test1 是 ID，不用加 # 号
                ,count: data.total //数据总数，从服务端得到
                ,limit:options.limit
                ,prev:'上一页'
                ,next:'下一页'
                ,jump:function (obj, first) {
                    var start=(obj.curr-1)*obj.limit;
                    var curContent=[];
                    for(var i=0;i<obj.limit;i++){
                        var n=i*1+start;
                        if(n<obj.count){
                            curContent.push(data.row[n]);
                        }
                    }
                    $(".list-content").find('tbody').empty();
                    callback(curContent,obj);
                }
            });
        });
    },
    /*
     *** 异步分页基于layui 基于老版数据请求（带ajax后缀）
     ***ajaxURL为接口地址 map为所需参数 例{page:1,size:8} callback为对分页数据所做的操作 options对默认参数进行调整
     *** 调用示例HXcommon.paginationAsync("facilitymge/service/Frequency/GetDataList",map,function (curObj) {},{limit:8})
     */
    paginationAsync:function (ajaxURL,map,callback,options) {
        var opt={
            limit:9
        };
        var options=$.extend({}, opt, options);
        var total,data;
        map=$.extend({}, map, {page:1,size:options.limit});
        HXcommon.loader('default','.list-content');
        HXcommon.HXajax(ajaxURL,map,function(data){
            total=data.total;
            var laypage = layui.laypage;
            layui.use('laypage', function(){
                //执行一个laypage实例
                laypage.render({
                    elem: 'pagination' //注意，这里的 test1 是 ID，不用加 # 号
                    ,count: total //数据总数，从服务端得到
                    ,curr:1//当前页码
                    ,limit:options.limit
                    ,prev:'上一页'
                    ,next:'下一页'
                    ,jump:function (obj, first) {
                        //非首次加载页面
                        if (!first) {
                            HXcommon.loader('default','.list-content');
                            var mapNew=$.extend({}, map, {'page':obj.curr});
                            HXcommon.HXajax(ajaxURL,mapNew,function (data) {
                                callback(data);
                                HXcommon.loaderClose('.list-content');
                            })
                        }else{
                            callback(data);
                            HXcommon.loaderClose('.list-content');
                        }
                    }
                });
            });
        },{async:true});
    },
    /*
     * ajax组件 取自hxjq2.js
     * 如：HXcommon.HXajax('common/service/UserSelect/Init', inputData, afterInit,{async:true});
     * */
    domain:'http://'+window.location.host,
    HXajax:function(url, inputData, callback, options, callbackOnError){
        options = options || {};
        options.headers = {
            "Content-Type" : "application/json;"

        };
        var sId = HXcommon.getQueryJson()["sessionId"];
        if(sId == null || sId == '' || typeof(sId) == 'undefined'){
            options.url=HXcommon.domain+'/' + url + ".ajax";
        }else{
            //防止跨站点伪造，增加sessionId
            options.url=HXcommon.domain+'/' + url + ".ajax?sessionId="+sId+"&";
        }

        options.url=HXcommon.domain+'/' + url + ".ajax";
        options.type="POST";

        //去除encode，后台无法将encode之后的特殊字符转换为json
//        options.data=encodeURIComponent( JSON.stringify(inputData));
        options.data=( JSON.stringify(inputData));

        if(typeof options.async == 'undifined') options.async=false;
        var param=options.inputData;
        options.success=function(outputData){if(typeof callback == 'function'){callback(outputData, param);}};
        //options.success=function(outputData){if(typeof callback == 'function'){callback(outputData, options.inputData);}};
        options.error=function(jqXHR, textStatus, errorThrown){
            if((jqXHR.status==500||jqXHR.status==1000) && jqXHR.responseText.indexOf("dwr.engine.http.1000")>=0) {
                top.location.replace('/projectweb/pages/webcontent/views/login/login.html');
                return;
            }
            if(typeof callbackOnError == 'function'){
                callbackOnError(errorThrown);
            } else {
                HXcommon.layer.fail('通讯错误');
            }
        };
        delete options['inputData'];
        $.ajax(options);
    },
    /*
     *** 异步分页基于layui(基于spring项目)
     ***ajaxURL为接口地址 map为所需参数 例{page:1,size:8} callback为对分页数据所做的操作 options对默认参数进行调整
     *** 调用示例HXcommon.paginationAsyncSpring("facilitymge/service/Frequency/GetDataList",map,function (curObj) {},{limit:8})
     */
    paginationAsyncSpring:function(ajaxURL,map,callback,options){
        var opt={
            limit:9
        };
        var options=$.extend({}, opt, options);
        var total,data;
        map=$.extend({}, map, {page:1,size:options.limit});
        HXcommon.loader('default','.list-content');
        $.ajax({
            type : "post",
            async : false,
            url : ajaxURL,
            xhrFields : {
                withCredentials : true
            },
            crossDomain : true,
            data : map,
            success : function(data, status) {
                total=data.data.total;
                var laypage = layui.laypage;
                layui.use('laypage', function() {
                    //执行一个laypage实例
                    laypage.render({
                        elem: 'pagination' //注意，这里的 test1 是 ID，不用加 # 号
                        , count: total //数据总数，从服务端得到
                        , curr: 1//当前页码
                        , limit: options.limit
                        ,prev:'上一页'
                        ,next:'下一页'
                        , jump: function (obj, first) {
                            //非首次加载页面
                            if (!first) {
                                var mapNew = $.extend({}, map, {'page': obj.curr});
                                $.ajax({
                                    type: "post",
                                    async: false,
                                    url: ajaxURL,
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    crossDomain: true,
                                    data: mapNew,
                                    success: function (data, status) {
                                        callback(data);
                                        HXcommon.loaderClose('.list-content');
                                    }
                                });
                            } else {
                                callback(data);
                                HXcommon.loaderClose('.list-content');
                            }
                        }
                    });
                })
            }
        });
    },
    /*
     **获取表单中所有元素值，键为name属性，返回为对象
     * formId:dom容器id
     */
    serializeJson:function (formId) {
        var o = {};
        var a = $("#"+formId).serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    },
    /*
     *将json对象赋值给form
     * formId:dom容器id  jsonValue:需要给form赋值的json对象
     */
    setForm:function (formId,jsonValue) {
        var obj = $('#'+formId);
        $.each(jsonValue,function(name,ival){
            var $oinput = obj.find("input[name="+name+"]");
            if($oinput.attr("type")=="checkbox"){
                if(ival !== null){
                    var checkboxObj = $("[name="+name+"]");
                    var checkArray = ival.split(";");
                    for(var i=0;i<checkboxObj.length;i++){
                        for(var j=0;j<checkArray.length;j++){
                            if(checkboxObj[i].value == checkArray[j]){
                                checkboxObj[i].click();
                            }
                        }
                    }
                }
            }
            else if($oinput.attr("type")=="radio"){
                $oinput.each(function(){
                    var radioObj = $("[name="+name+"]");
                    for(var i=0;i<radioObj.length;i++){
                        if(radioObj[i].value == ival){
                            radioObj[i].click();
                        }
                    }
                });
            }
            else if($oinput.attr("type")=="textarea"){
                obj.find("[name="+name+"]").html(ival);
            }
            else{
                obj.find("[name="+name+"]").val(ival);
            }
        })
    },
    /*
     *取得URL参数、并传化成JSON
     * */
    getQueryJson:function () {
        var ret = {};//定义数组
        var ps=window.location.search.substr(1).split('&');
        for(var i=0;i<ps.length;i++){
            var p=ps[i].split('=');
            var pn=p[0],pv=p[1];
            if(pn=="")pn="unkown";
            ret[pn]=pv;
        }
        return ret;
    },
    /*
     *获取某个URL参数
     * */
    getUrlParam:function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);
        //匹配目标参数,并解决乱码问题
        return r ? decodeURIComponent(r[2]) : null;
    },
    /*
     *提供localStorage相关的增删改查方法
     * 默认的字段有效保存时间_timeOut为30分钟
     * 字段值采用base64加密
     * */
    localStorage : {
        _timeOut: 1800000,
        getValue: function (key, timeOut) {
            if (timeOut != undefined && (timeOut * 1000 > 1000)) {
                this._timeOut = timeOut * 1000;
            }
            var value = window.localStorage.getItem(key);
            if (value == null) {
                return null;
            }
            var obj = JSON.parse(HXcommon.base64.decode(value));
            if (this.isAvailable(obj)) {
                return obj.value;
            }
            else {
                window.localStorage.removeItem(key);
                console.log(key+'已过期');
                return false;
            }
        },
        setValue: function (key, value) {
            var obj = this.createStorage(value);
            value = JSON.stringify(obj);
            value = HXcommon.base64.encode(value);
            window.localStorage.setItem(key, value);
            return true;
        },
        clearValue: function (key) {
            window.localStorage.removeItem(key);
            return true;
        },
        createStorage: function (value){
            var obj = new Object();
            obj.value = value;
            obj.updateTime = Date.parse(new Date());
            return obj;
        },
        isAvailable: function (obj) {
            var nowTime = Date.parse(new Date());
            var n = nowTime - obj.updateTime;
            if (n > this._timeOut) {
                return false;
            }
            else {
                return true;
            }
        }
    },
    /*
     *base64加密方式
     * */
    base64:{
        _keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode : function (input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = this._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output +
                    this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                    this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
            }
            return output;
        },
        decode : function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = this._utf8_decode(output);
            return output;
        },
        _utf8_encode : function (string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        },
        _utf8_decode : function (utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        }
    },
    /*
    判断手机操作系统类型 非移动端返回false
     */
    operationType:function () {
        var operate="";
        if(!(/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent))){
            return false;
        }else {
            if(navigator.userAgent.match(/Android/i)){
                operate="android";
            }else if(navigator.userAgent.match(/BlackBerry/i)){
                operate="blackberry";
            }else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
                operate="ios";
            }else if(navigator.userAgent.match(/IEMobile/i)){
                operate="windows";
            }else{
                operate="others";
            }
            return operate;
        }
    },
    /*
    判断游览器厂商类型
     */
    bowserType:function () {
        var userAgent = navigator.userAgent.toLowerCase();
        var browser;
        if (userAgent.indexOf("micromessenger") >= 0) {
            browser = "micromessenger"; //微信
        } else if (userAgent.indexOf("mqqbrowser") >= 0) {
            browser = "mqqbrowser";//qq
        } else if (userAgent.indexOf("sogoumobilebrowser") >= 0) {
            browser = "sogoumobilebrowser"; //搜狗
        } else if (userAgent.indexOf("baidubrowser") >= 0) {
            browser = "baidubrowser"; //百度
        } else if (userAgent.indexOf("ucbrowser") >= 0) {
            browser = "ucbrowser"; //uc
        } else if (userAgent.indexOf("360 aphone browser") >= 0) {
            browser = "360 aphone browser"; //360
        } else if (userAgent.indexOf("miuibrowser") >= 0) {
            browser = "miuibrowser"; //小米
        } else if (userAgent.indexOf("firefox") >= 0) {
            browser = "firefox"; //火狐
        } else if (userAgent.indexOf("chrome") >= 0) {
            browser = "chrome"; //谷歌
        } else if (userAgent.indexOf("safari") >= 0) {
            browser = "safari"; //iphone
        }else {
            browser = "others";
        }
        return browser;
    }
};

Date.prototype.Format = function (fmt) {
    /** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
     可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
     Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
     * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
     * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
     * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
     * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
     */
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S+": this.getMilliseconds() //毫秒
    };
    var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};