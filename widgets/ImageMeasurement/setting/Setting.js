// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/toolbars/ImageServiceMeasureTool":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has ../kernel ./_toolbar ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ./draw ../tasks/ImageServiceMeasureParameters ../tasks/ImageServiceMeasureTask ../geometry/Point dojo/_base/array ../units".split(" "),function(f,g,n,p,r,q,l,h,d,e,b,m,u,t,k){var x=f("CustomDraw",[e],{returnCurrentPoint:function(){return this._points},hideTooltip:function(){this._options.showTooltips=
!1},showTooltip:function(){this._options.showTooltips=!0}});q=f(q,{declaredClass:"esri.toolbars.imageServiceMeasure",_eventMap:{"draw-end":["geometry"],"draw-start":[],"measure-end":["measureResult","error","geometry"],"unit-change":["measureResult","error","geometry"]},_mensurationCapabilitiesMap:{Basic:["OPERATION_POINT","OPERATION_DISTANCE_ANGLE","OPERATION_AREA_PERIMETER","OPERATION_CENTROID"],"3D":["OPERATION_POINT_3D","OPERATION_DISTANCE_ANGLE_3D","OPERATION_AREA_PERIMETER_3D","OPERATION_CENTROID_3D"],
"Base-Top Height":["OPERATION_BASE_TOP"],"Top-Top Shadow Height":["OPERATION_TOP_TOP_SHADOW"],"Base-Top Shadow Height":["OPERATION_BASE_TOP_SHADOW"]},_supportedMeasureOperations:[],_operationsMap:{OPERATION_POINT:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE:{geometryType:"LINE"},OPERATION_AREA_PERIMETER:{geometryType:"POLYGON"},OPERATION_BASE_TOP:{geometryType:"LINE"},OPERATION_BASE_TOP_SHADOW:{geometryType:"LINE"},OPERATION_TOP_TOP_SHADOW:{geometryType:"LINE"},OPERATION_CENTROID:{geometryType:"POLYGON"},
OPERATION_POINT_3D:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE_3D:{geometryType:"LINE"},OPERATION_AREA_PERIMETER_3D:{geometryType:"POLYGON"},OPERATION_CENTROID_3D:{geometryType:"POLYGON"}},_supportedUnits:{linearUnits:"INCHES FEET YARDS MILES NAUTICAL_MILES MILLIMETERS CENTIMETERS DECIMETERS METERS KILOMETERS".split(" "),angularUnits:["RADIANS","DECIMAL_DEGREES"],areaUnits:"SQUARE_INCHES SQUARE_FEET SQUARE_YARDS ACRES SQUARE_MILES SQUARE_MILLIMETERS SQUARE_CENTIMETERS SQUARE_DECIMETERS SQUARE_METERS ARES HECTARES SQUARE_KILOMETERS".split(" ")},
markerSymbol:null,lineSymbol:null,fillSymbol:null,_drawToolbar:null,_currentGeometry:null,_currentOperation:null,linearUnit:null,angularUnit:null,areaUnit:null,_decimalDegreesConstantValue:"esriDUDecimalDegrees",_decimalDegreesConstantKeyword:"DECIMAL_DEGREES",constructor:function(a){f.safeMixin(this,a);this._checkMensurationSupport();this._setDefaultSymbols()},_checkMensurationSupport:function(){this.layer.mensurationCapabilities?this._setSupportedMeasureOperations():console.log("Mensuration Capabilities not supported.")},
_setDefaultSymbols:function(){this.markerSymbol||(this.markerSymbol=new l,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),this.markerSymbol.setColor(new n("#00FFFF")));this.lineSymbol||(this.lineSymbol=new h(h.STYLE_SOLID,new n([255,0,0]),1.5));this.fillSymbol||
(this.fillSymbol=new d(d.STYLE_SOLID,new h(h.STYLE_DASHDOT,new n([255,0,0]),2),new n([255,255,0,.25])))},_setSupportedMeasureOperations:function(){var a;this._supportedMeasureOperations=[];this.mensurationCapabilities=this.layer.mensurationCapabilities.split(",");t.forEach(this.mensurationCapabilities,function(c){a=this._mensurationCapabilitiesMap[c];t.forEach(a,function(v){this._supportedMeasureOperations.push(v)},this)},this)},getSupportedMeasureOperations:function(){var a=[];t.forEach(this._supportedMeasureOperations,
function(c){a.push(b[c])},this);return a},getSupportedUnits:function(){var a={},c=[],v=[],w;for(w in this._supportedUnits)this._supportedUnits.hasOwnProperty(w)&&(c=this._supportedUnits[w],v=[],t.forEach(c,function(y){y===this._decimalDegreesConstantKeyword?v.push(this._decimalDegreesConstantValue):v.push(k[y])},this),a[w]=v);return a},setLinearUnit:function(a){for(var c in k)k.hasOwnProperty(c)&&k[c]===a&&(this.linearUnit=c);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},
setAngularUnit:function(a){for(var c in k)k.hasOwnProperty(c)&&(k[c]===a?this.angularUnit=c:a===this._decimalDegreesConstantValue&&(this.angularUnit=this._decimalDegreesConstantKeyword));this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAreaUnit:function(a){for(var c in k)k.hasOwnProperty(c)&&k[c]===a&&(this.areaUnit=c);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setMarkerSymbol:function(a){this.markerSymbol=a},setLineSymbol:function(a){this.lineSymbol=
a},setFillSymbol:function(a){this.fillSymbol=a},activate:function(a){t.forEach(this._supportedMeasureOperations,function(c){b[c]===a&&(this._currentOperation=c)},this);this.map.setMapCursor("crosshair");this._mapClickHandle=this.map.on("click",g.hitch(this,this._onMapClick));this._mapMouseDownHandle=this.map.on("mouse-down",g.hitch(this,this._onMapMouseDown));this._drawToolbar||(this._drawToolbar=new x(this.map,{fillSymbol:this.fillSymbol,markerSymbol:this.markerSymbol,lineSymbol:this.lineSymbol}),
this._drawToolbar.on("draw-end",g.hitch(this,this._setGeometry)));this._drawToolbar.activate(e[this._operationsMap[this._currentOperation].geometryType])},_onMapClick:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},_onMapMouseDown:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},deactivate:function(){this._drawToolbar&&this._drawToolbar.deactivate();this.map.setMapCursor("default");this._currentOperation=this._currentGeometry=
null;this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null);this._mapMouseDownHandle&&(this._mapMouseDownHandle.remove(),this._mapMouseDownHandle=null)},hideDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.hideTooltip();this._drawToolbar.activate(e[this._operationsMap[this._currentOperation].geometryType])},showDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.showTooltip();this._drawToolbar.activate(e[this._operationsMap[this._currentOperation].geometryType])},
_setGeometry:function(a){a=a.geometry;this.onDrawEnd(a);this._getMensurationResults(a);this._currentGeometry=a},_getImageServiceMeasureParameters:function(a){var c=new b;c.operation=b[this._currentOperation];c.mosaicRule=this.layer.mosaicRule;c.linearUnit=k[this.linearUnit];c.angularUnit=this.angularUnit===this._decimalDegreesConstantKeyword?this._decimalDegreesConstantValue:k[this.angularUnit];c.areaUnit=k[this.areaUnit];"line"===a.type||"polyline"===a.type?(c.fromGeometry=new u(a.paths[0][0][0],
a.paths[0][0][1],this.map.spatialReference),c.toGeometry=new u(a.paths[0][1][0],a.paths[0][1][1],this.map.spatialReference)):c.fromGeometry=a;return c},_getMensurationResults:function(a){a=this._getImageServiceMeasureParameters(a);(new m(this.layer.url)).execute(a,g.hitch(this,this._measureTaskSuccess),g.hitch(this,this._measureTaskError))},_measureTaskSuccess:function(a){this.onMeasureEnd(a,null,this._currentGeometry)},_measureTaskError:function(a){this.onMeasureEnd(null,a,this._currentGeometry)},
_getUnitChangeResults:function(a){a=this._getImageServiceMeasureParameters(a);(new m(this.layer.url)).execute(a,g.hitch(this,this._unitChangeSuccess),g.hitch(this,this._unitChangeError))},_unitChangeSuccess:function(a){this.onUnitChange(a,null,this._currentGeometry)},_unitChangeError:function(a){this.onUnitChange(null,a,this._currentGeometry)},onDrawStart:function(){},onDrawEnd:function(){},onMeasureEnd:function(){},onUnitChange:function(){}});p("extend-esri")&&g.setObject("toolbars.imageServiceMeasure",
q,r);return q})},"esri/tasks/ImageServiceMeasureParameters":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has ../kernel ../geometry/jsonUtils".split(" "),function(f,g,n,p,r,q){f=f(null,{declaredClass:"esri.tasks.ImageServiceMeasureParameters",fromGeometry:null,toGeometry:null,operation:null,pixelSize:null,mosaicRule:!1,linearUnit:null,angularUnit:null,areaUnit:null,toJson:function(l){var h=l&&l.fromGeometry||this.fromGeometry;l={fromGeometry:h,toGeometry:l&&l.toGeometry||
this.toGeometry,measureOperation:this.operation,mosaicRule:this.mosaicRule?n.toJson(this.mosaicRule.toJson()):null,linearUnit:this.linearUnit,angularUnit:this.angularUnit,areaUnit:this.areaUnit};h&&(l.geometryType=q.getJsonType(h));this.pixelSize&&(l.pixelSize=this.pixelSize?n.toJson(this.pixelSize.toJson()):null);return l}});g.mixin(f,{OPERATION_POINT:"esriMensurationPoint",OPERATION_DISTANCE_ANGLE:"esriMensurationDistanceAndAngle",OPERATION_AREA_PERIMETER:"esriMensurationAreaAndPerimeter",OPERATION_BASE_TOP:"esriMensurationHeightFromBaseAndTop",
OPERATION_BASE_TOP_SHADOW:"esriMensurationHeightFromBaseAndTopShadow",OPERATION_TOP_TOP_SHADOW:"esriMensurationHeightFromTopAndTopShadow",OPERATION_CENTROID:"esriMensurationCentroid",OPERATION_POINT_3D:"esriMensurationPoint3D",OPERATION_DISTANCE_ANGLE_3D:"esriMensurationDistanceAndAngle3D",OPERATION_AREA_PERIMETER_3D:"esriMensurationAreaAndPerimeter3D",OPERATION_CENTROID_3D:"esriMensurationCentroid3D"});p("extend-esri")&&g.setObject("tasks.ImageServiceMeasureParameters",f,r);return f})},"esri/tasks/ImageServiceMeasureTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../request ../geometry/normalizeUtils ./Task".split(" "),
function(f,g,n,p,r,q,l){f=f(l,{declaredClass:"esri.tasks.ImageServiceMeasureTask",constructor:function(h){this._url.path+="/measure";this._handler=g.hitch(this,this._handler)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["fromGeometry","toGeometry"]}],e:2}],_handler:function(h,d,e,b,m){try{this._successHandler([h],"onComplete",e,m)}catch(u){this._errorHandler(u,b,m)}},execute:function(h,d,e,b){var m=b.assembly;h=this._encode(g.mixin({},this._url.query,{f:"json"},h.toJson(m&&m[0])));var u=this._handler,t=
this._errorHandler;return r({url:this._url.path,content:h,callbackParamName:"callback",load:function(k,x){u(k,x,d,e,b.dfd)},error:function(k){t(k,e,b.dfd)}})},onComplete:function(){}});q._createWrappers(f);n("extend-esri")&&g.setObject("tasks.ImageServiceMeasureTask",f,p);return f})},"widgets/ImageMeasurement/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ImageMeasurement/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.layerSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"mapLayerSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.displayOperationSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"displayOperationSelect" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" multiple\x3d"true"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.angularUnitSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"angularUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.linearUnitSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"linearUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.areaUnitSelect}:\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"areaUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\x3cinput data-dojo-attach-point\x3d"popupCheckbox" data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n          \x3clabel  style\x3d"margin: 0 15px;" \x3e${nls.displayMeasureResultInPopup}\x3c/label\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"errorSection"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ImageMeasurement/setting/css/style.css":".jimu-widget-ImageMeasurement-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-ImageMeasurement-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-ImageMeasurement-setting .dijitSelect{height: 30px; width: 96%;}.jimu-widget-ImageMeasurement-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-ImageMeasurement-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-ImageMeasurement-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; padding-right:15px;}.jimu-widget-ImageMeasurement-setting .input-table \x3e tbody \x3e tr \x3e .second{width:200px;}.jimu-widget-ImageMeasurement-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}.settingsHidden {display: none;}.dojoxCheckedMultiSelect {margin-top: 4px; margin-bottom: 3px;}.dojoxCheckedMultiSelect .dojoxCheckedMultiSelectWrapper {height: 175px; margin: 0px; width: 250px;}",
"*now":function(f){f(['dojo/i18n!*preload*widgets/ImageMeasurement/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting dojo/_base/array esri/toolbars/ImageServiceMeasureTool dojo/dom-class dojo/html dojo/_base/lang dojo/on jimu/dijit/RadioBtn dijit/form/CheckBox dijit/form/Select dojox/form/CheckedMultiSelect".split(" "),function(f,g,n,p,r,q,l,h){return f([n,g],{baseClass:"jimu-widget-ImageMeasurement-setting",displayMeasureResultInPopup:"",_supportedUnits:null,_supportedOperationMap:{},_hasSupportedLayer:!1,startup:function(){this.inherited(arguments);
this.config.ImageMeasurement||(this.config.ImageMeasurement={});this._supportedOperationMap={};this._populateLayers();this._hasSupportedLayer&&(this._populateOperations(),this._populateUnitDropdowns());this.setConfig(this.config)},_populateLayers:function(){var d=this.map.itemInfo.itemData.operationalLayers,e=0,b;for(b in d)if(d.hasOwnProperty(b)&&d[b].layerObject&&d[b].layerObject.mensurationCapabilities){e++;this.mapLayerSelect.addOption({value:d[b].title,label:d[b].title});var m=null;m=new r({map:this.map,
layer:d[b].layerObject});this._supportedOperationMap[d[b].title]=[];this._supportedOperationMap[d[b].title]=m.getSupportedMeasureOperations();this._supportedUnits||(this._supportedUnits=m.getSupportedUnits())}this.mapLayerSelect.on("change",h.hitch(this,this._populateOperations));0===e?(q.add(this.searchesSection,"settingsHidden"),l.set(this.errorSection,this.nls.errorSectionMessage),this._hasSupportedLayer=!1):(q.remove(this.searchesSection,"settingsHidden"),l.set(this.errorSection,""),this._hasSupportedLayer=
!0)},_populateUnitDropdowns:function(){var d=this._supportedUnits.angularUnits,e=this._supportedUnits.areaUnits;p.forEach(this._supportedUnits.linearUnits,function(b){this.linearUnitSelect.addOption({value:b,label:this.nls.unitLabel[b]})},this);p.forEach(d,function(b){this.angularUnitSelect.addOption({value:b,label:this.nls.unitLabel[b]})},this);p.forEach(e,function(b){this.areaUnitSelect.addOption({value:b,label:this.nls.unitLabel[b]})},this)},_populateOperations:function(){this._clearOperations();
this._addOptions()},_clearOperations:function(){var d=this.displayOperationSelect.getOptions();p.forEach(d,function(e){this.displayOperationSelect.removeOption(e)},this)},_addOptions:function(){var d=this._supportedOperationMap[this.mapLayerSelect.get("value")],e=this.config.ImageMeasurement;p.forEach(d,function(b){this.displayOperationSelect.addOption({value:b,label:this.nls.operationLabel[b],selected:"selected"})},this);e.displayOperations&&0<e.displayOperations.length&&this.displayOperationSelect.set("value",
e.displayOperations)},setConfig:function(d){this.config=d;this.popupCheckbox.set("checked",this.config.ImageMeasurement.displayMeasureResultInPopup);this.config.ImageMeasurement.layerTitle&&this.mapLayerSelect.set("value",this.config.ImageMeasurement.layerTitle);this.config.ImageMeasurement.linearUnit&&this.linearUnitSelect.set("value",this.config.ImageMeasurement.linearUnit);this.config.ImageMeasurement.areaUnit&&this.areaUnitSelect.set("value",this.config.ImageMeasurement.areaUnit);this.config.ImageMeasurement.angularUnit&&
this.angularUnitSelect.set("value",this.config.ImageMeasurement.angularUnit);0<this.config.ImageMeasurement.displayOperations.length&&this.displayOperationSelect.set("value",this.config.ImageMeasurement.displayOperations)},getConfig:function(){this.config.ImageMeasurement.displayMeasureResultInPopup=this.popupCheckbox.checked;this.config.ImageMeasurement.layerTitle=this.mapLayerSelect.get("value");this.config.ImageMeasurement.linearUnit=this.linearUnitSelect.get("value");this.config.ImageMeasurement.areaUnit=
this.areaUnitSelect.get("value");this.config.ImageMeasurement.angularUnit=this.angularUnitSelect.get("value");this.config.ImageMeasurement.displayOperations=this.displayOperationSelect.get("value");return this.config}})});