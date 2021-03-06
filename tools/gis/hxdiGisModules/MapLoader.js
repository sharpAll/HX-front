define([], function() {
    var MapLoader = function(opt_options) {
    this.gisConfig_ = null;
    this.loadConfig_();
  };
  $.extend(MapLoader.prototype, {
    loadConfig_: function() {
      var me = this;
      $.ajax({
        async: false,
        url: gisConfigUrl,
        type: 'GET',
        dataType: 'json',
      }).done(function(data) {
        me.gisConfig_ = data;

      }).fail(function(data, status, desc) {
        alert("无法获取配置信息或配置信息有误！");
        throw new Error(status + "\n" + desc);
      });
    },
    getGISConfig: function() {
      return this.gisConfig_;
    }
  });

  return MapLoader;
  }
);
