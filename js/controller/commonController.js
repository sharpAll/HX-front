//公共接口模块
var commonController = {
    _ajaxHander: HXcommon.ajaxDataController(),
    _url: {
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
};