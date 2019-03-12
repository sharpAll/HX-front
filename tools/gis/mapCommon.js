
document.write('<link rel="stylesheet" type="text/css" href="https://js.arcgis.com/3.27/esri/css/esri.css" />');
document.write('<script type="text/javascript" src="https://js.arcgis.com/3.27/"></script>');

var gisConfigUrl = "/HX-front/tools/gis/configs/gisConfig.json";

var dojoConfig = {
    parseOnLoad: true,
    packages: [{
        "name": "hxdiGisModules",
        "location": "/HX-front/tools/gis/hxdiGisModules"
    }]
};