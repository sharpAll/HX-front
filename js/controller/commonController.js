//公共接口模块
var commonController = {
    _ajaxHander: HXcommon.ajaxDataController(),
    _url: {
        /*
         arcgis规范-地理纬度与固定纬度
         get
         params:{}
         author:xia
         */
        GET_ARCGISCIRCLES:'views/arcgis/arcgis-circles.html',
        /*
         arcgis规范-带属性的标记
         get
         params:{}
         author:xia
         */
        GET_ARCGISPICPOINTS:'views/arcgis/arcgis-picPoints.html',
        /*
         arcgis规范-悬浮信息框
         get
         params:{}
         author:xia
         */
        GET_ARCGISTEMPLATEINFO:'views/arcgis/arcgis-templateInfo.html',
        /*
         arcgis规范-绘制工具
         get
         params:{}
         author:xia
         */
        GET_ARCGISDRAWTOOLS:'views/arcgis/arcgis-drawTools.html',
        /*
         arcgis规范-点的框选
         get
         params:{}
         author:xia
         */
        GET_ARCGISTOOLSANDPOINTS:'views/arcgis/arcgis-toolsAndPoints.html',
        /*
         arcgis规范-轨迹电平模型
         get
         params:{}
         author:xia
         */
        GET_ARCGISROUTELEVEL:'views/arcgis/arcgis-routeLevel.html',
        /*
         arcgis规范-路测轨迹模型
         get
         params:{}
         author:xia
         */
        GET_ARCGISROUTEMODEL:'views/arcgis/arcgis-routeModel.html',
        /*
         arcgis规范-射向线模型
         get
         params:{}
         author:xia
         */
        GET_FIRINGLINEMODEL:'views/arcgis/arcgis-firinglineModel.html',
        /*
         arcgis规范-监听图层
         get
         params:{}
         author:xia
         */
        GET_ARCGISZOOM:'views/arcgis/arcgis-zoom.html',
        /*
         无线电应用规范-频率电平图
         get
         params:{}
         author:xia
         */
        GET_WIRELESSFSCAN:'views/wireless/wireless-fscan.html',
        /*
         无线电应用规范-单频时间电平图
         get
         params:{}
         author:xia
         */
        GET_WIRELESSSINGLE:'views/wireless/wireless-Single.html',
        /*
         无线电应用规范-瀑布图
         get
         params:{}
         author:xia
         */
        GET_WIRELESSFALLS:'views/wireless/wireless-falls.html',
        /*
         无线电应用规范-规范折线图
         get
         params:{}
         author:xia
         */
        GET_WIRELESSLINE:'views/wireless/wireless-Line.html',
        /*
         无线电应用规范-大数据散点图
         get
         params:{}
         author:xia
         */
        GET_WIRELESSPOINT:'views/wireless/wireless-Point.html',
        /*
         无线电应用规范-大数据表格
         get
         params:{}
         author:xia
         */
        GET_BIGDATATABLE:'views/wireless/wireless-BigDataTable.html',
        /*
         通用应用规范-水球图
         get
         params:{}
         author:xia
         */
        GET_LIQUIDFILL:'views/common/common-liquidfill.html',
        /*
         通用应用规范-数据拖拽
         get
         params:{}
         author:xia
         */
        GET_DATADRAFT:'views/common/common-datadraft.html',
        /*
         通用应用规范-表单验证
         get
         params:{}
         author:xia
         */
        GET_VALIDATOR:'views/common/common-validator.html',
        /*
         通用应用规范-等待加载
         get
         params:{}
         author:xia
         */
        GET_LOADING:'views/common/common-loading.html',
        /*
         通用应用规范-分页
         get
         params:{}
         author:xia
         */
        GET_PAGINATION:'views/common/common-pagination.html',
        /*
         通用应用规范-浏览器工具
         get
         params:{}
         author:xia
         */
        GET_BROWSER:'views/common/common-browser.html',
        /*
         通用应用规范-兼容性
         get
         params:{}
         author:xia
         */
        GET_COMPATIBILITY:'views/common/common-compatibility.html',
        /*
         通用应用规范-弹窗
         get
         params:{}
         author:xia
         */
        GET_LAYER:'views/common/common-layer.html',
        /*
         通用应用规范-表单与url
         get
         params:{}
         author:xia
         */
        GET_FORMANDURL:'views/common/common-formandurl.html',
        /*
         通用应用规范-localStorage
         get
         params:{}
         author:xia
         */
        GET_LOCALSTORAGE:'views/common/common-localstorage.html',
    },
    getHtmlStructure : function(params,callback) {
        this._ajaxHander.get(this._url.GET_HTMLSTRUCTURE,function(data) {
            callback(data);           
        }); 
    },
    getHtmlFormat: function(params,callback) {
        this._ajaxHander.get(this._url.GET_HTMLFORMAT,function(data) {
            callback(data);
        });
    },
    getHtmlContent: function(params,callback) {
        this._ajaxHander.get(this._url.GET_HTMLCONTENT,function(data) {
            callback(data);
        });
    },
    getCssFormat: function(params,callback) {
        this._ajaxHander.get(this._url.GET_CSSFORMAT,function(data) {
            callback(data);
        });
    },
    getCssName: function(params,callback) {
        this._ajaxHander.get(this._url.GET_CSSNAME,function(data) {
            callback(data);
        });
    },
    getCssOptimize: function(params,callback) {
        this._ajaxHander.get(this._url.GET_OPTIMIZE,function(data) {
            callback(data);
        });
    },
    getJsFormat: function(params,callback) {
    this._ajaxHander.get(this._url.GET_JSFORMAT,function(data) {
        callback(data);
    });
    },
    getJsAttention: function(params,callback) {
        this._ajaxHander.get(this._url.GET_JSATTENTION,function(data) {
            callback(data);
        });
    },
    getJsAjax: function(params,callback) {
        this._ajaxHander.get(this._url.GET_JSAJAX,function(data) {
            callback(data);
        });
    },
    getWirelessFscan: function(params,callback) {
        this._ajaxHander.get(this._url.GET_WIRELESSFSCAN,function(data) {
            callback(data);
        });
    },
    getWirelessSingle: function(params,callback) {
        this._ajaxHander.get(this._url.GET_WIRELESSSINGLE,function(data) {
            callback(data);
        });
    },
    getWirelessFalls: function(params,callback) {
        this._ajaxHander.get(this._url.GET_WIRELESSFALLS,function(data) {
            callback(data);
        });
    },
    getWirelessLine: function(params,callback) {
        this._ajaxHander.get(this._url.GET_WIRELESSLINE,function(data) {
            callback(data);
        });
    },
    getWirelessPoint: function(params,callback) {
        this._ajaxHander.get(this._url.GET_WIRELESSPOINT,function(data) {
            callback(data);
        });
    },
    getBigDataTable: function(params,callback) {
        this._ajaxHander.get(this._url.GET_BIGDATATABLE,function(data) {
            callback(data);
        });
    },
    getLiquidFill: function(params,callback) {
        this._ajaxHander.get(this._url.GET_LIQUIDFILL,function(data) {
            callback(data);
        });
    },
    getDataDraft: function(params,callback) {
        this._ajaxHander.get(this._url.GET_DATADRAFT,function(data) {
            callback(data);
        });
    },
    getValidator: function(params,callback) {
        this._ajaxHander.get(this._url.GET_VALIDATOR,function(data) {
            callback(data);
        });
    },
    getLoading: function(params,callback) {
        this._ajaxHander.get(this._url.GET_LOADING,function(data) {
            callback(data);
        });
    },
    getPagination: function(params,callback) {
        this._ajaxHander.get(this._url.GET_PAGINATION,function(data) {
            callback(data);
        });
    },
    getBrowser: function(params,callback) {
        this._ajaxHander.get(this._url.GET_BROWSER,function(data) {
            callback(data);
        });
    },
    getCompatibility: function(params,callback) {
        this._ajaxHander.get(this._url.GET_COMPATIBILITY,function(data) {
            callback(data);
        });
    },
    getLayer: function(params,callback) {
        this._ajaxHander.get(this._url.GET_LAYER,function(data) {
            callback(data);
        });
    },
    getFormAndUrl: function(params,callback) {
        this._ajaxHander.get(this._url.GET_FORMANDURL,function(data) {
            callback(data);
        });
    },
    getLocalStorage: function(params,callback) {
        this._ajaxHander.get(this._url.GET_LOCALSTORAGE,function(data) {
            callback(data);
        });
    },
    getArcgisCircles:function (params,callback) {
        this._ajaxHander.get(this._url.GET_ARCGISCIRCLES,function(data) {
            callback(data);
        });
    },
    getArcgisPicPoints:function (params,callback) {
        this._ajaxHander.get(this._url.GET_ARCGISPICPOINTS,function(data) {
            callback(data);
        });
    },
    getArcgisTemplateInfo:function (params,callback) {
        this._ajaxHander.get(this._url.GET_ARCGISTEMPLATEINFO,function(data) {
            callback(data);
        });
    },
    getArcgisDrawTools:function (params,callback) {
        this._ajaxHander.get(this._url.GET_ARCGISDRAWTOOLS,function(data) {
            callback(data);
        });
    },
    getArcgisToolsAndPoints:function (params,callback) {
        this._ajaxHander.get(this._url.GET_ARCGISTOOLSANDPOINTS,function(data) {
            callback(data);
        });
    },
    getArcgisRouteLevel:function (params,callback) {
        this._ajaxHander.get(this._url.GET_ARCGISROUTELEVEL,function(data) {
            callback(data);
        });
    },
    getArcgisRouteModel:function (params,callback) {
        this._ajaxHander.get(this._url.GET_ARCGISROUTEMODEL,function(data) {
            callback(data);
        });
    },
    getFiringlineModel:function (params,callback) {
        this._ajaxHander.get(this._url.GET_FIRINGLINEMODEL,function(data) {
            callback(data);
        });
    },
    getArcgisZoom:function (params,callback) {
        this._ajaxHander.get(this._url.GET_ARCGISZOOM,function(data) {
            callback(data);
        });
    }
};