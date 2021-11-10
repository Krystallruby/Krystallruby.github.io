// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/TimeSlider/setting/ConfigureTimeSettings":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/on dojo/text!./ConfigureTimeSettings.html ./LayersConfig ./TimeConfig jimu/dijit/CheckBox dijit/form/Select dijit/form/ValidationTextBox".split(" "),function(r,t,l,k,p,q,u,m,f,a){return t([k,p,q,r],{templateString:m,startup:function(){var d=this.config;this.layersConfig=new f({nls:this.nls,map:this.map,
config:d,parent:this},this.layersConfigContainer);this.own(u(this.layersConfig,"change",l.hitch(this,function(c){null!==c&&this.timeConfig.updateConfigByLyaers({startTime:{timeConfig:{time:c.timeExtent.startTime}},endTime:{timeConfig:{time:c.timeExtent.endTime}}})})));this.own(u.once(this.layersConfig,"initTimeExtent",l.hitch(this,function(c){this.timeConfig=new a({nls:this.nls,map:this.map,config:d,parent:this},this.timeConfigContainer);this.timeConfig.startup();d.customTimeConfig&&this.timeConfig.setConfig(d.customTimeConfig);
var b=!1;null===c&&(b=!0);this.emit("initedLayers",{isNoLayer:b})})));this.layersConfig.startup();d.customLayersConfig&&this.layersConfig.setConfig(d.customLayersConfig);this.inherited(arguments)},getLayersTimeExtent:function(){return this.layersConfig.getFullTimeExtent()},setConfig:function(d){d.customTimeConfig&&this.timeConfig.setConfig(d.customTimeConfig);d.customLayersConfig&&this.layersConfig.setConfig(d.customLayersConfig)},getConfig:function(d){d.customLayersConfig=null;d.customTimeConfig=
null;var c={};c.customLayersConfig=this.layersConfig.getConfig();c.customTimeConfig=this.timeConfig.getConfig();d=l.mixin(d,c);d.customTimeConfig.startTime.timeConfig.time&&(d.customTimeConfig.startTime.timeConfig.time=(new Date(d.customTimeConfig.startTime.timeConfig.time)).getTime());d.customTimeConfig.endTime.timeConfig.time&&(d.customTimeConfig.endTime.timeConfig.time=(new Date(d.customTimeConfig.endTime.timeConfig.time)).getTime());return d},isValid:function(){return this.timeConfig.isValid()&&
this.layersConfig.isValid()?!0:!1}})})},"widgets/TimeSlider/setting/LayersConfig":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang esri/lang dojo/_base/html dojo/_base/array dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/on dojo/text!./LayersConfig.html jimu/LayerInfos/LayerInfos ../utils jimu/utils jimu/dijit/CheckBox".split(" "),function(r,t,l,k,p,q,u,m,f,a,d,c,b,e,h){return t([u,m,f,r],{templateString:d,layersCheckboxes:[],startup:function(){this.layersCheckboxes=
[];c.getInstance(this.map,this.map.itemInfo).then(l.hitch(this,function(g){this._layerInfosObj=g;g=this._layerInfosObj.getLayerInfoArray();q.forEach(g,l.hitch(this,function(n){k.isDefined(n.layerObject.timeInfo)&&k.isDefined(n.layerObject.timeInfo.timeExtent)&&this.addARow(n)}));this.emit("initTimeExtent",this.getFullTimeExtent());this.emit("initedLaysers",this.getFullTimeExtent());170<=50*g.length?p.setStyle(this.layersContainer,"overflow-y","auto"):p.setStyle(this.layersContainer,"overflow-y","hidden")}));
this.inherited(arguments)},_creatTableRow:function(g,n,v){g=p.create("div",{"class":"row"},g);n=p.create("div",{"class":"layer-name",innerHTML:e.sanitizeHTML(n||"")},g);v=p.create("div",{"class":"time-info",innerHTML:e.sanitizeHTML(v||"")},g);return{layerNameDom:n,timeInfoDom:v}},addARow:function(g){var n=this._creatTableRow(this.layersContainer),v=new h({label:g.id,_layerId:g.id,checked:!0},n.layerNameDom);this.own(a(v,"change",l.hitch(this,function(){this.emit("change",this.getFullTimeExtent())})));
if(g.layerObject.timeInfo&&k.isDefined(g.layerObject.timeInfo.timeExtent)){var w=e.localizeDate(g.layerObject.timeInfo.timeExtent.startTime),x=e.localizeDate(g.layerObject.timeInfo.timeExtent.endTime);p.setAttr(n.timeInfoDom,"innerHTML",e.sanitizeHTML(w+"   "+this.nls.timeTo+"   "+x));v.timeExtent=g.layerObject.timeInfo.timeExtent}this.layersCheckboxes.push(v);return n},getFullTimeExtent:function(){if(0===this.layersCheckboxes.length)return null;var g=[];q.forEach(this.layersCheckboxes,l.hitch(this,
function(v){v.timeExtent&&!0===v.getValue()&&g.push(v.timeExtent)}));if(0<g.length)var n=b.getFullTimeExtent(g,!0);else return null;return{timeExtent:n}},setConfig:function(g){g&&q.forEach(this.layersCheckboxes,l.hitch(this,function(n){q.forEach(g,l.hitch(this,function(v){n._layerId===v.id&&(!0===v.isTimeEnable?n.setValue(!0):n.setValue(!1))}))}))},getConfig:function(){var g=[];q.forEach(this.layersCheckboxes,l.hitch(this,function(n){g.push({id:n._layerId,isTimeEnable:n.checked})}));return g},isValid:function(){return!0}})})},
"widgets/TimeSlider/utils":function(){define("dojo/_base/html dojo/dom-geometry dojo/_base/array esri/layers/TimeInfo jimu/utils esri/TimeExtent libs/storejs/store moment/moment".split(" "),function(r,t,l,k,p,q,u,m){var f={};f.intervalUnitOptions=[{label:window.jimuNls.timeUnit.year,value:k.UNIT_YEARS},{label:window.jimuNls.timeUnit.month,value:k.UNIT_MONTHS},{label:window.jimuNls.timeUnit.week,value:k.UNIT_WEEKS},{label:window.jimuNls.timeUnit.day,value:k.UNIT_DAYS},{label:window.jimuNls.timeUnit.hour,
value:k.UNIT_HOURS},{label:window.jimuNls.timeUnit.minute,value:k.UNIT_MINUTES},{label:window.jimuNls.timeUnit.second,value:k.UNIT_SECONDS},{label:window.jimuNls.timeUnit.milliSecond,value:k.UNIT_MILLISECONDS}];f.isLayerEnabledTime=function(a,d,c){c||(c=d.getLayerInfoById(a.id));if(c)return a=c.layerObject,a=a.timeInfo&&a.timeInfo.timeExtent,d=!0,c=c.originOperLayer,c.itemProperties&&"undefined"!==typeof c.itemProperties.timeAnimation&&(d=!1),!1===c.timeAnimation&&(d=!1),!0===c.timeAnimation&&(d=
!0),c.itemProperties&&"undefined"!==typeof c.itemProperties.timeAnimation&&"undefined"!==typeof c.timeAnimation&&(d=!0),!(!d||!a)};f.setLayersUseMapTimebyConfig=function(a,d){d=d.customLayersConfig;a=a.getLayerInfoArray();for(var c=0,b=d.length;c<b;c++)for(var e=d[c],h=0,g=a.length;h<g;h++){var n=a[h];e.id===n.id&&n.layerObject.setUseMapTime&&(!0===e.isTimeEnable?n.layerObject.setUseMapTime(!0):n.layerObject.setUseMapTime(!1))}};f.initPositionForTheme={DartTheme:{bottom:140},LaunchpadTheme:{bottom:120}};
f.isRunInMobile=function(){return window.appInfo.isRunInMobile};f.isOutOfScreen=function(a,d){var c=t.getMarginBox(a.root);a=c.w;c=c.h;return d&&(d.top>=c||d.left>=a)?!0:!1};f._MINIMODE_HEIGHT=35;f.getMarginPosition=function(a,d,c){var b=t.getMarginBox(a.root);a=b.w;b=b.h;d=r.getContentBox(d);c.marginPosition={right:a-(d.w+c.left),bottom:b-(f._MINIMODE_HEIGHT+c.top)}};f.setMarginPosition=function(a,d,c){if(c.marginPosition){var b=t.getMarginBox(a.root);a=b.w;b=b.h;var e=r.getContentBox(d);c.top=b-
(f._MINIMODE_HEIGHT+c.marginPosition.bottom);c.left=a-(e.w+c.marginPosition.right);0>c.top&&(c.top=0);0>c.left&&(c.left=0)}r.setStyle(d,"top",c.top+"px");r.setStyle(d,"left",c.left+"px")};f.initPosition=function(a,d,c){var b=window.getAppConfig();if(b&&b.theme&&b.theme.name)var e=b.theme.name;b=f.getInitTop(a,e);a=f.getInitLeft(a,d);c.top=b;c.left=a;r.setStyle(d,"top",c.top+"px");r.setStyle(d,"left",c.left+"px")};f.getInitTop=function(a,d){var c=0;return c=t.getMarginBox(a.root).h-(f.initPositionForTheme[d]?
f.initPositionForTheme[d].bottom:60)-f._MINIMODE_HEIGHT};f.getInitLeft=function(a,d){a=t.getMarginBox(a.root);d=r.getContentBox(d);return a.w/2-d.w/2};f.isValidDate=function(a){return a instanceof Date&&!isNaN(a.getTime())};f.isValidDataStrByDateLocale=function(a){return"undefined NaN, NaN"===a?!1:!0};f.hasLiveData=function(a){return!!(a&&a.useMapTime&&a.timeInfo&&a.timeInfo.hasLiveData)};f.getCalendarTime=function(a,d){if("time"===a.timeMode||"min"===a.timeMode||"max"===a.timeMode)var c=new Date(a.time);
else if("now"===a.timeMode||"today"===a.timeMode)if(c=d?new Date(d):new Date,c="today"===a.timeMode?new Date(c.getFullYear(),c.getMonth(),c.getDate(),0,0,0):c,a=a.calender,d="",a&&a.number&&a.operator&&a.unit){var b=a.unit;if(-1!==b.indexOf("esriTimeUnits"))(b=b.split("esriTimeUnits"))&&2===b.length&&(d=b[1]);else return console.log("unsupported unit:"+a.unit),new Date(c);"+"===a.operator?c=m(c).add(a.number,d).valueOf():"-"===a.operator&&(c=m(c).subtract(a.number,d).valueOf())}return new Date(c)};
f.isConfigLiveMode=function(a){var d=!1,c=!1,b=!1===a.isHonorWebMap;a&&a.customTimeConfig&&a.customTimeConfig.startTime&&a.customTimeConfig.startTime.timeConfig&&a.customTimeConfig.startTime.timeConfig.timeMode&&(d=f.isLiveTimeMode(a.customTimeConfig.startTime.timeConfig.timeMode));a&&a.customTimeConfig&&a.customTimeConfig.endTime&&a.customTimeConfig.endTime.timeConfig&&a.customTimeConfig.endTime.timeConfig.timeMode&&(c=f.isLiveTimeMode(a.customTimeConfig.endTime.timeConfig.timeMode));return b&&(d||
c)};f.isLiveTimeMode=function(a){return!a||"now"!==a&&"today"!==a&&"max"!==a&&"min"!==a?!1:!0};f.timeCalendarForBuilderConfig=function(a){if(!1===a.isHonorWebMap){var d=new Date;var c=f.getCalendarTime(a.customTimeConfig.startTime.timeConfig,d);d=f.getCalendarTime(a.customTimeConfig.endTime.timeConfig,d);return{startTime:c,endTime:d,interval:null!==a.customTimeConfig.interval?a.customTimeConfig.interval:null,thumbCount:!0===a.customTimeConfig.displayAllData?1:2}}return null};f.getFullTimeExtent=function(a,
d){var c=null;l.forEach(a,function(b){b&&(c?(c.startTime>b.startTime&&(c.startTime=new Date(b.startTime.getTime())),c.endTime<b.endTime&&(c.endTime=new Date(b.endTime.getTime()))):c=new q(new Date(b.startTime.getTime()),new Date(b.endTime.getTime())))});a=1;!0===d&&(a=0);c.startTime=new Date(c.startTime.getFullYear(),c.startTime.getMonth(),c.startTime.getDate(),c.startTime.getHours(),c.startTime.getMinutes(),0,0);c.endTime=new Date(c.endTime.getFullYear(),c.endTime.getMonth(),c.endTime.getDate(),
c.endTime.getHours(),c.endTime.getMinutes()+a,0,0);return c};f.getAutoRefreshTime=function(a){var d=0,c="";if(a&&a.autoRefresh&&!0===a.autoRefresh.isAutoRefresh&&a.autoRefresh.interval&&a.autoRefresh.unit){var b=a.autoRefresh.unit;-1!==b.indexOf("esriTimeUnits")&&(b=b.split("esriTimeUnits"))&&2===b.length&&(c=b[1]);c=c.toUpperCase();"SECONDS"===c?d=a.autoRefresh.interval:"MINUTES"===c?d=60*a.autoRefresh.interval:"HOURS"===c?d=3600*a.autoRefresh.interval:"DAYS"===c&&(d=86400*a.autoRefresh.interval)}return 1E3*
d};f.getKey=function(a){return"TimeSlider."+encodeURIComponent(p.getAppIdFromUrl())+"."+a};f.getCacheByKeys=function(a){return u.get(f.getKey(a))};f.saveToLocalCache=function(a,d){f.removeLocalCache(a);u.set(f.getKey(a),d)};f.removeLocalCache=function(a){f.getCacheByKeys(a)&&u.remove(f.getKey(a))};return f})},"widgets/TimeSlider/setting/TimeConfig":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/html jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/on dojo/text!./TimeConfig.html ../utils ./TimeCalendar esri/TimeExtent jimu/dijit/CheckBox dijit/form/Select dijit/form/ValidationTextBox".split(" "),
function(r,t,l,k,p,q,u,m,f,a,d,c){return r([k,p],{templateString:u,_KEEP_VALUE_FLAG:!1,postCreate:function(){this.startTimeCalendar=new f({mode:"min",nls:this.nls,map:this.map,config:this.config,parent:this},this.startTimeCalendar);this.endTimeCalendar=new f({mode:"max",nls:this.nls,map:this.map,config:this.config,parent:this},this.endTimeCalendar);this.own(q(this.startTimeCalendar,"haveloaded,change",t.hitch(this,function(b){this._updateInterval(b.type)})));this.own(q(this.endTimeCalendar,"haveloaded,change",
t.hitch(this,function(b){this._updateInterval(b.type)})));this.own(q(this.intervalNumber,"change",t.hitch(this,function(){this._setKeepValueFlag(!0)})));this.intervalUnits=new c({options:m.intervalUnitOptions,"class":"calendar-inputs"},this.intervalUnits);this.own(q(this.intervalUnits,"change",t.hitch(this,function(){this._setKeepValueFlag(!0)})));this.displayAllTheData=new d({label:this.nls.displayAllData,checked:!1},this.displayAllTheData);this.displayAllTheData.startup();this.startTimeCalendar.startup();
this.endTimeCalendar.startup();this.inherited(arguments)},setConfig:function(b){"undefined"!==typeof b.keepValueFlag&&this._setKeepValueFlag(b.keepValueFlag);"undefined"!==typeof b.startTime&&this.startTimeCalendar.setConfig(b.startTime.timeConfig);"undefined"!==typeof b.endTime&&this.endTimeCalendar.setConfig(b.endTime.timeConfig);if("undefined"!==typeof b.interval)this.intervalNumber.set("value",b.interval.number,!1),this.intervalUnits.set("value",b.interval.units,!1);else{var e=new Date,h=m.getCalendarTime(this.startTimeCalendar.getConfig(),
e);e=m.getCalendarTime(this.endTimeCalendar.getConfig(),e);this.findDefaultInterval(new a(h,e))}"undefined"!==typeof b.displayAllData?this.displayAllTheData.setValue(!!b.displayAllData,!1):this.displayAllTheData.setValue(!1,!1)},updateConfigByLyaers:function(b){"undefined"!==typeof b.startTime&&this.startTimeCalendar.setConfig(b.startTime.timeConfig);"undefined"!==typeof b.endTime&&this.endTimeCalendar.setConfig(b.endTime.timeConfig);this._updateInterval()},_updateInterval:function(b){this._cleanErrorTips();
"haveloaded"===b&&(this.intervalNumber.intermediateChanges=!1);if(!1!==this.isValid()&&!this._getKeepValueFlag()){var e=new Date;b=m.getCalendarTime(this.startTimeCalendar.getConfig(),e);e=m.getCalendarTime(this.endTimeCalendar.getConfig(),e);b=this.findDefaultInterval(new a(new Date(b),new Date(e)));this.intervalNumber.set("value",b.interval,!1);this.intervalUnits.set("value",b.units,!1)}},isValid:function(){var b=new Date,e=m.getCalendarTime(this.startTimeCalendar.getConfig(),b);b=m.getCalendarTime(this.endTimeCalendar.getConfig(),
b);if(!m.isValidDate(e))return this.startTimeCalendar.numberSpinner.set("state","Error"),!1;if(!m.isValidDate(b))return this.endTimeCalendar.numberSpinner.set("state","Error"),!1;if(!this.startTimeCalendar.isValid()||!this.endTimeCalendar.isValid()||!this.intervalNumber.isValid())return!1;var h=l.hasClass(this.timeConfigContainer,"error");if(e.valueOf()>b.valueOf())return h||l.addClass(this.timeConfigContainer,"error"),!1;l.removeClass(this.timeConfigContainer,"error");return!0},_cleanErrorTips:function(){l.removeClass(this.timeConfigContainer,
"error")},getConfig:function(){return{keepValueFlag:this._getKeepValueFlag(),startTime:{timeConfig:this.startTimeCalendar.getConfig()},endTime:{timeConfig:this.endTimeCalendar.getConfig()},interval:{number:this.intervalNumber.getValue(),units:this.intervalUnits.getValue()},displayAllData:this.displayAllTheData.getValue()}},getLayersTimeExtent:function(){return this.parent.getLayersTimeExtent()},_setKeepValueFlag:function(b){this._KEEP_VALUE_FLAG=b},_getKeepValueFlag:function(){return!!this._KEEP_VALUE_FLAG},
findDefaultInterval:function(b){b=(b.endTime.getTime()-b.startTime.getTime())/10;if(31104E6<b){b=Math.round(b/31104E6);var e="esriTimeUnitsYears"}else 2592E6<b?(b=Math.round(b/2592E6),e="esriTimeUnitsMonths"):6048E5<b?(b=Math.round(b/6048E5),e="esriTimeUnitsWeeks"):864E5<b?(b=Math.round(b/864E5),e="esriTimeUnitsDays"):36E5<b?(b=Math.round(b/36E5),e="esriTimeUnitsHours"):6E4<b?(b=Math.round(b/6E4),e="esriTimeUnitsMinutes"):1E3<b?(b=Math.round(b/1E3),e="esriTimeUnitsSeconds"):(b=Math.round(b),e="esriTimeUnitsMilliseconds");
return{interval:b,units:e}}})})},"widgets/TimeSlider/setting/TimeCalendar":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/on dojo/text!./TimeCalendar.html ../utils dijit/form/DateTextBox dijit/form/TimeTextBox dijit/form/Select dijit/form/NumberSpinner dijit/form/ValidationTextBox jimu/dijit/CheckBox".split(" "),function(r,t,l,k,p,q,u,m,f,a,d,c,b){return t([r,p,q,u],{templateString:f,_KEEP_VALUE_FLAG:!1,
postCreate:function(){this._timeModeOptions=[{label:this.nls.time,value:"time"},{label:this.nls.now,value:"now"},{label:this.nls.today,value:"today"}];var e={label:this.nls.maximum,value:"max"},h={label:this.nls.minimum,value:"min"};"min"===this.mode?this._timeModeOptions.push(h):"max"===this.mode&&this._timeModeOptions.push(e);this._operatorOptions=[{label:"+",value:"+"},{label:"-",value:"-"}];this.modeOptions=new b({options:this._timeModeOptions,"class":"calendar-inputs"},this.modeSelector);this.own(m(this.modeOptions,
"change",l.hitch(this,function(g){this.toggleTimeMode(g,!1);"max"===g&&"min"===g||this._setKeepValueFlag(!0)})));this.dateBox=new d({"class":"calendar-inputs"},this.dateBoxContainer);this.dateBox.startup();this.timeTextBox=new c({"class":"calendar-inputs time-inputs"},this.timeTextBoxContainer);this.timeTextBox.startup();this._updateTimeModeValue();this.own(m(this.dateBox,"change",l.hitch(this,function(){this._setKeepValueFlag(!0)})));this.own(m(this.timeTextBox,"change",l.hitch(this,function(){this._setKeepValueFlag(!0)})));
this.operatorSelector=new b({options:this._operatorOptions,"class":"calendar-operator"},this.operatorContainer);this.unit=new b({options:a.intervalUnitOptions,"class":"calendar-inputs"},this.unitContainer);this.own(m(this.operatorSelector,"change",l.hitch(this,function(){this._setKeepValueFlag(!0)})));this.own(m(this.numberSpinner,"change",l.hitch(this,function(){this._setKeepValueFlag(!0)})));this.own(m(this.unit,"change",l.hitch(this,function(){this._setKeepValueFlag(!0)})));this.maxminDateBox=
new d({readonly:"readonly","class":"calendar-inputs",disabled:!0},this.maxminDateBoxContainer);this.maxminDateBox.startup();this.maxminTimeTextBox=new c({readonly:"readonly","class":"calendar-inputs",disabled:!0},this.maxminTimeTextBoxContainer);this.maxminTimeTextBox.startup();this.inherited(arguments)},startup:function(){"min"!==this.mode&&"max"!==this.mode||this.toggleTimeMode(this.mode,!1);this.inherited(arguments);this.emit("haveloaded")},toggleTimeMode:function(e,h){k.addClass(this.calenderMode,
"hide");k.addClass(this.timeMode,"hide");k.addClass(this.maxminMode,"hide");var g=!1;!0===h&&(g=!0);this.modeOptions.set("value",e,g);"time"===e?(k.removeClass(this.timeMode,"hide"),this._getKeepValueFlag()||this._updateTimeModeValue()):"max"===e||"min"===e?(k.removeClass(this.maxminMode,"hide"),this._getMaxOrMinTime()):k.removeClass(this.calenderMode,"hide")},_getMaxOrMinTime:function(){var e=this.parent.getLayersTimeExtent();e&&this.setMaxMinTime(e)},setMaxMinTime:function(e){if("min"===this.mode)var h=
e.timeExtent.startTime;else"max"===this.mode&&(h=e.timeExtent.endTime);this.maxminDateBox.set("value",new Date(h),!1);this.maxminTimeTextBox.set("value",new Date(h),!1)},isValid:function(){return"time"===this.modeOptions.getValue()?this.dateBox.isValid()&&this.timeTextBox.isValid():"max"===this.modeOptions.getValue()||"min"===this.modeOptions.getValue()?this.maxminDateBox.isValid()&&this.maxminTimeTextBox.isValid():this.operatorSelector.isValid()&&this.numberSpinner.isValid()&&this.unit.isValid()},
setConfig:function(e){if(this._getKeepValueFlag())e.time&&(this.maxminDateBox.set("value",new Date(e.time),!1),this.maxminTimeTextBox.set("value",new Date(e.time),!1));else if(e.keepValueFlag&&(this._KEEP_VALUE_FLAG=e.keepValueFlag),e.timeMode&&this.toggleTimeMode(e.timeMode,!1),e.time&&(this.dateBox.set("value",new Date(e.time),!1),this.timeTextBox.set("value",new Date(e.time),!1),this.maxminDateBox.set("value",new Date(e.time),!1),this.maxminTimeTextBox.set("value",new Date(e.time),!1)),e.calender){if("undefined"===
typeof e.calender.operator||""===e.calender.operator)e.calender.operator="+";this.operatorSelector.set("value",e.calender.operator,!1);this.numberSpinner.set("value",e.calender.number,!1);this.unit.set("value",e.calender.unit,!1)}},getConfig:function(){var e={operator:"",number:"",unit:""};if("time"===this.modeOptions.getValue()){var h=this.dateBox.getValue();var g=this.timeTextBox.getValue();h=h&&g?new Date(h.getFullYear(),h.getMonth(),h.getDate(),g.getHours(),g.getMinutes(),g.getSeconds()):null}else"max"===
this.modeOptions.getValue()||"min"===this.modeOptions.getValue()?(h=this.maxminDateBox.getValue(),g=this.maxminTimeTextBox.getValue(),h=h&&g?new Date(h.getFullYear(),h.getMonth(),h.getDate(),g.getHours(),g.getMinutes(),g.getSeconds()):null):e={operator:this.operatorSelector.getValue(),number:this.numberSpinner.getValue(),unit:this.unit.getValue()};return{keepValueFlag:this._getKeepValueFlag(),timeMode:this.modeOptions.getValue(),time:h,calender:e}},_updateTimeModeValue:function(){this.dateBox.set("value",
new Date,!1);this.timeTextBox.set("value",new Date,!1)},_setKeepValueFlag:function(e){this._KEEP_VALUE_FLAG=e;this.emit("change")},_getKeepValueFlag:function(){return!!this._KEEP_VALUE_FLAG}})})},"widgets/TimeSlider/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/TimeSlider/setting/ConfigureTimeSettings.html":'\x3cdiv class\x3d"config-time-setting"\x3e\r\n\t\x3cdiv class\x3d"clearFix items"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"layersConfigContainer"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"clearFix items"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"timeConfigContainer"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/TimeSlider/setting/LayersConfig.html":'\x3cdiv class\x3d"layout"\x3e\r\n  \x3cdiv class\x3d"title"\x3e${nls.layerTimeExtent}\x3c/div\x3e\r\n  \x3cdiv class\x3d"layers-table-container"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layersContainer" class\x3d"rows-container"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/TimeSlider/setting/TimeConfig.html":'\x3cdiv class\x3d"time-config-container" data-dojo-attach-point\x3d"timeConfigContainer"\x3e\r\n  \x3cdiv class\x3d"title"\x3e${nls.timeSpan}\x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"error-info"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"errorIcon" class\x3d"error-icon"\x3e\x3c/div\x3e\r\n    \x3cdiv\x3e${nls.calenderError}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"time-span"\x3e\r\n    \x3cdiv class\x3d"time-items items"\x3e\r\n      \x3cdiv class\x3d"time-tips"\x3e${nls.startTime}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"startTimeCalendar"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"time-items items"\x3e\r\n      \x3cdiv class\x3d"time-tips"\x3e${nls.endTime}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"endTimeCalendar"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"title"\x3e${nls.timeDisplay}\x3c/div\x3e\r\n  \x3cdiv class\x3d"time-display"\x3e\r\n    \x3cdiv class\x3d"time-tips"\x3e${nls.interval}\x3c/div\x3e\r\n    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0"  required\x3d"true"\r\n      data-dojo-attach-point\x3d"intervalNumber" data-dojo-props\x3d"smallDelta:1,intermediateChanges:true,constraints: {min:0, places:0},trim:true"\r\n      class\x3d"time-selector calender-number calendar-inputs customdate "\x3e\r\n\r\n    \x3cdiv class\x3d"time-tips"\x3e${nls.unit}\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"intervalUnits"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"clearFix items"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"displayAllTheData" class\x3d"display-all"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/TimeSlider/setting/TimeCalendar.html":'\x3cdiv class\x3d"time-calendar-container"\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"modeSelector" class\x3d"mode-selector"\x3e\x3c/div\x3e\r\n\r\n    \x3cspan data-dojo-attach-point\x3d"timeMode" class\x3d"hide"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dateBoxContainer" class\x3d"time-selector time-date"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"timeTextBoxContainer" class\x3d"time-selector time-text"\x3e\x3c/div\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"calenderMode" class\x3d"hide"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"operatorContainer" class\x3d"time-selector"\x3e\x3c/div\x3e\r\n      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0"\r\n         data-dojo-attach-point\x3d"numberSpinner" data-dojo-props\x3d"smallDelta:1,intermediateChanges:true,constraints: {min:0, places:0}"\r\n         class\x3d"time-selector calender-number calendar-inputs"\x3e\r\n      \x3cdiv class\x3d"time-unit"\x3e${nls.unit}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"unitContainer" class\x3d"calender-unit"\x3e\x3c/div\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"maxminMode"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"maxminDateBoxContainer" class\x3d"time-selector time-date"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"maxminTimeTextBoxContainer" class\x3d"time-selector time-text"\x3e\x3c/div\x3e\r\n    \x3c/span\x3e\r\n\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/TimeSlider/setting/Setting.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"title"\x3e${nls.timeSetting}\x3c/div\x3e\r\n\t\x3cdiv class\x3d"clearFix items"\x3e\r\n\t\t\x3cdiv class\x3d"config-radio-container"\x3e\r\n\t\t\t\x3cdiv\x3e\r\n\t\t\t\t\x3cinput data-dojo-attach-point\x3d"webMapSettingRaido" data-dojo-type\x3d"dijit/form/RadioButton" type\x3d"radio" class\x3d"jimu-radio-btn blue-radio"\r\n\t\t\t\t name\x3d"modeRaido" id\x3d"webMapSettingRaido" /\x3e\r\n\t\t\t\t\x3clabel data-dojo-attach-point\x3d"webMapSettingLabel" for\x3d"webMapSettingRaido"\x3e${nls.useWebMapSetting}\x3c/label\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"config-radio-container"\x3e\r\n\t\t\t\x3cdiv\x3e\r\n\t\t\t\t\x3cinput data-dojo-attach-point\x3d"configureSettingRaido" data-dojo-type\x3d"dijit/form/RadioButton" type\x3d"radio" class\x3d"jimu-radio-btn blue-radio"\r\n\t\t\t\t name\x3d"modeRaido" id\x3d"configureSettingRaido" /\x3e\r\n\t\t\t\t\x3clabel data-dojo-attach-point\x3d"configureSettingLabel" for\x3d"configureSettingRaido"\x3e${nls.useConfigureSetting}\x3c/label\x3e\r\n\t\t\t\x3c/div\x3e\r\n\r\n\t\t\t\x3cdiv class\x3d"time-setting-btn" data-dojo-attach-point\x3d"timeSettingBtn"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"time-setting-icon" title\x3d"${nls.timeSettingBtn}"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"clearFix items hide"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"configureTimeSettingsContainer"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\r\n\t\x3cdiv class\x3d"title"\x3e${nls.sliderSetting}\x3c/div\x3e\r\n\t\x3cdiv class\x3d"clearFix items"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"autoPlay"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"clearFix items"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"loopPlay"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"clearFix items"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"showLabelsBox"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"clearFix items date-time-format tips"\x3e${nls.dateAndTimeFormat}\x3c/div\x3e\r\n\t\x3cdiv class\x3d"clearFix selector"\x3e\r\n\t\t\x3cdiv class\x3d"time-formats jimu-float-leading"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"timeFormat"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"customDateContainer" class\x3d"time-formats customdate-container jimu-float-leading hide"\x3e\r\n\t\t\t\x3cinput class\x3d"customdate jimu-input jimu-float-trailing" data-dojo-attach-point\x3d"customDateFormat" data-dojo-attach-event\x3d"blur:_onCustomDateFormatBlur"\r\n\t\t\t required\x3d"true" data-dojo-type\x3d"dijit/form/ValidationTextBox" /\x3e\r\n\r\n\t\t\t\x3ca class\x3d"help-icon" data-dojo-attach-point\x3d"helpIcon" href\x3d"http://momentjs.com/docs/#/displaying/format/" title\x3d"${nls.formatInstruction}"\r\n\t\t\t target\x3d"_blank"\x3e\x3c/a\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"autoRefreshContainer" class\x3d"hide"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/TimeSlider/setting/css/style.css":'.jimu-widget-timeslider-setting {font-family: \'Avenir Light\'; font-size: 12px; color: #000000;}.jimu-widget-timeslider-setting .clearFix {*overflow: hidden; *zoom: 1;}.jimu-widget-timeslider-setting .clearFix:after {display: table; content: ""; width: 0; clear: both;}.jimu-widget-timeslider-setting .dijitFocusedLabel{outline: none;}.jimu-widget-timeslider-setting .dijitSelect:not(.dijitDisabled),.timeslider-widget-setting-popup .dijitSelect:not(.dijitDisabled),.timeslider-widget-setting-popup .dijitComboBox:not(.dijitDisabled) .dijitButtonNode{border-color: #cfcfcf; background-color: #fff;}.jimu-widget-timeslider-setting .dijitSelectFocused .dijitButtonContents,.timeslider-widget-setting-popup .dijitSelectFocused .dijitButtonContents{border-color: #cfcfcf;} .jimu-widget-timeslider-setting .dijitSelectHover .dijitButtonContents,.timeslider-widget-setting-popup .dijitSelectHover .dijitButtonContents {border-color:#b5bcc7;}.jimu-widget-timeslider-setting .dijitSelect .dijitArrowButton,.timeslider-widget-setting-popup .dijitSelect .dijitArrowButton{background-color: #fff; background-image: none;}.jimu-widget-timeslider-setting .hide,.timeslider-widget-setting-popup .hide{display: none !important;}.jimu-widget-timeslider-setting .title {font-family: "Avenir Medium"; font-size: 14px; margin-top: 30px; letter-spacing: 0.39px;}.jimu-widget-timeslider-setting .items{margin-top: 18px; margin-left: 8px;}.jimu-widget-timeslider-setting .date-time-format{margin-top: 20px;}.jimu-widget-timeslider-setting .date-time-format.tips{font-family: \'Avenir Medium\'; font-size: 12px; color: #000000; margin-bottom: 8px;}.jimu-widget-timeslider-setting .selector{margin-left: 8px; margin-bottom: 30px;}.jimu-widget-timeslider-setting .time-formats{margin-top: 8px;}.jimu-widget-timeslider-setting .time-formats .dijitSelect{width:220px; height:36px;}.jimu-widget-timeslider-setting .customdate-container{position: relative;}.jimu-widget-timeslider-setting .customdate-container .dijitTextBox {width:260px; height:36px; margin: 0 20px;}.jimu-widget-timeslider-setting .customdate-container .help-icon{height: 16px; width: 16px; background: url("images/help.svg") no-repeat; background-position: 50% 50%; cursor: pointer; position: absolute; right: 35px; top: 11px;}.jimu-rtl .jimu-widget-timeslider-setting .customdate-container .help-icon{left: 35px; right: auto;}.jimu-widget-timeslider-setting .jimu-rtl .help-icon{right: auto; left: 32px;}.jimu-widget-timeslider-setting .auto-refresh-container{margin-top: 30px;}.jimu-widget-timeslider-setting .auto-refresh-container .time-items {margin-left: 20px; margin-right: 0px;}.jimu-rtl .jimu-widget-timeslider-setting .auto-refresh-container .time-items {margin-left: 0px; margin-right: 20px;}.jimu-widget-timeslider-setting .auto-refresh-container .interval-tips{margin: 10px 0 5px 0;}.jimu-widget-timeslider-setting .auto-refresh-container .interval-number{width: 80px;}.jimu-widget-timeslider-setting .auto-refresh-container .interval-units{width: 85px; margin: 0 5px;}.config-radio-container{display: flex; align-items: center; font-size: 14px; margin-top: 20px;}.jimu-widget-timeslider-setting .dijitRadio,.jimu-widget-timeslider-setting .dijitRadioIcon{background-image: url(images/radiobutton.svg); background-repeat: no-repeat; background-position: center center; width: 16px; height: 16px; margin: 0 2px 2px 0; padding: 0;}.jimu-widget-timeslider-setting .dijitRadioChecked{background-image: url(images/radiobutton_selected.svg);}.jimu-widget-timeslider-setting .time-setting-btn{width: 24px; height: 24px; margin: 0 10px; border-radius: 2px; display: flex; justify-content: center; align-items: center; cursor: pointer; border: 1px solid #CCCCCC;}.jimu-widget-timeslider-setting .time-setting-btn.disabled {background: #EEEEEE; cursor: default;}.jimu-widget-timeslider-setting .time-setting-icon{height: 25px; width: 25px; background: url(images/timesetting.svg) no-repeat center;}.disabled .time-setting-icon{background: url(images/timesetting_disabled.svg) no-repeat center;}.timeslider-widget-setting-popup{font-family: "Avenir Light"; color: #000000; letter-spacing: 0.33px;}.timeslider-widget-setting-popup .config-time-setting{font-size: 12px;}.timeslider-widget-setting-popup .title{font-family: "Avenir Heavy"; font-size: 14px; color: #000000; letter-spacing: 0.39px;}.timeslider-widget-setting-popup .layers-table-container {width: 100%; border-top: 1px solid #EEE; height: 170px !important; max-height: 170px; overflow: hidden;}.timeslider-widget-setting-popup .rows-container{height: 100%;}.timeslider-widget-setting-popup .layers-table-container .row {width: 100%; justify-content: center; border-bottom: 1px solid #EEE; height: 50px;}.timeslider-widget-setting-popup .layers-table-container .layer-name {margin-top: 10px;}.timeslider-widget-setting-popup .layers-table-container .time-info {padding: 0 1.5rem; color: #999;}.timeslider-widget-setting-popup .time-config-container{margin-top: 25px; font-size: 12px;}.timeslider-widget-setting-popup .time-config-container .error-info{color: red; display: none;}.timeslider-widget-setting-popup .time-config-container.error .error-info{display: flex; align-items: center; margin-bottom: -10px;}.timeslider-widget-setting-popup .time-config-container .error-icon{height: 25px; width: 25px; background: url(images/warning.svg) no-repeat center;}.timeslider-widget-setting-popup .time-config-container .items{margin-top: 15px;}.timeslider-widget-setting-popup .time-config-container .time-tips{margin: 5px;}.timeslider-widget-setting-popup .time-config-container .calendar-inputs{margin: 0 5px;}.timeslider-widget-setting-popup .time-config-container .calendar-inputs.time-inputs{min-width: 140px;}.timeslider-widget-setting-popup .time-config-container .calendar-inputs .dijitButtonContents{min-width: 120px; max-width: 170px; overflow: hidden;}.timeslider-widget-setting-popup .time-config-container .calendar-operator{font-size: 14px; width: 60px;}.timeslider-widget-setting-popup .time-config-container .time-unit{display: inline-block; max-width: 150px; overflow: hidden; vertical-align: middle;}.timeslider-widget-setting-popup .time-config-container .time-span{margin-bottom: 30px;}.timeslider-widget-setting-popup .time-config-container .time-display{display: flex; align-items: center; margin-top: 10px;}.timeslider-widget-setting-popup .time-config-container .display-all{margin: 0 5px;}',
"*now":function(r){r(['dojo/i18n!*preload*widgets/TimeSlider/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/on dojo/_base/lang dojo/_base/html dojo/keys dojo/Deferred jimu/utils ./ConfigureTimeSettings jimu/dijit/Popup jimu/dijit/CheckBox dijit/form/Select dijit/form/ValidationTextBox".split(" "),function(r,t,l,k,p,q,u,m,f,a,d,c,b){return r([t,l],{baseClass:"jimu-widget-timeslider-setting",configureTimeSettings:null,postCreate:function(){this._timeFormatOptions=[{label:this.nls.mapDefault,value:"auto"},{label:"July 2015",
value:"MMMM YYYY"},{label:"Jul 2015",value:"MMM YYYY"},{label:"July 21,2015",value:"MMMM D,YYYY"},{label:"Tue Jul 21,2015",value:"ddd MMM DD,YYYY"},{label:"7/21/2015",value:"M/DD/YYYY"},{label:"2015/7/21",value:"YYYY/M/DD"},{label:"7/21/15",value:"M/DD/YY"},{label:"2015",value:"YYYY"},{label:"7/21/2015 8:00 am",value:"M/DD/YYYY  h:mm a"},{label:"Tue Jul 21 8:00 am",value:"ddd MMM DD  h:mm a"},{label:this.nls.custom,value:"Custom"}];this.showLabelsBox=new c({label:this.nls.showLayerLabels,checked:!1},
this.showLabelsBox);this.showLabelsBox.startup();this.autoPlay=new c({label:this.nls.autoPlay,checked:!1},this.autoPlay);this.autoPlay.startup();this.loopPlay=new c({label:this.nls.loopPlay,checked:!1},this.loopPlay);this.loopPlay.startup();this.timeFormat=new b({options:this._timeFormatOptions},this.timeFormat);this.inherited(arguments)},startup:function(){this.config||(this.config={});this.customDateFormat.setAttribute("placeHolder","YYYY-MM-dd h:m:s Z");this.own(k(this.timeFormat,"click",p.hitch(this,
function(){"undefined"===typeof this._firstChange&&(this._firstChange=!1)})));this.own(k(this.timeFormat,"change",p.hitch(this,function(e){"undefined"===typeof this._firstChange?this._firstChange=!1:this._initOptionsUI(e)})));this.own(k(this.webMapSettingRaido,"change",p.hitch(this,function(){this._updateTimeSettingBtnUI()})));this.own(k(this.configureSettingRaido,"change",p.hitch(this,function(){this._updateTimeSettingBtnUI()})));this.setConfig(this.config);this.inherited(arguments)},_initOptionsUI:function(e,
h){"Custom"!==e?(q.addClass(this.customDateContainer,"hide"),this.customDateFormat.set("value","")):(q.removeClass(this.customDateContainer,"hide"),this.customDateFormat.set("value",h||""));this.own(k(this.timeSettingBtn,"click",p.hitch(this,function(){this.configureSettingRaido.checked&&this._createTimeConfigSetting().then(p.hitch(this,function(g){this.popup=new d({titleLabel:this.nls.timeSetting,autoHeight:!0,content:this.configureTimeSettings,container:"main-page",width:680,buttons:[{label:window.jimuNls.common.ok,
key:u.ENTER,disable:g,onClick:p.hitch(this,"_onPopupOk")},{label:window.jimuNls.common.cancel,classNames:["jimu-btn-vacation"],key:u.ESCAPE}],onClose:p.hitch(this,"_onPopupClose")});q.addClass(this.popup.domNode,"timeslider-widget-setting-popup")}))})))},_onPopupOk:function(){if(!1===this.configureTimeSettings.isValid())return!1;this.config=this.configureTimeSettings.getConfig(this.config);this.popup.close();this.popup=this.configureTimeSettings=null},_onPopupClose:function(){this.popup=this.configureTimeSettings=
null},setConfig:function(e){this.config=e;e.showLabels?this.showLabelsBox.setValue(!0):this.showLabelsBox.setValue(!1);!1===e.autoPlay?this.autoPlay.setValue(!1):this.autoPlay.setValue(!0);!1===e.loopPlay?this.loopPlay.setValue(!1):this.loopPlay.setValue(!0);if(e.timeFormat){this.timeFormat.setValue(e.timeFormat);if(e.customDateFormat)var h=e.customDateFormat;this._initOptionsUI(e.timeFormat,h)}else this.timeFormat.setValue("auto");"undefined"===typeof e.isHonorWebMap||!0===e.isHonorWebMap?(e.isHonorWebMap=
!0,this.webMapSettingRaido.setChecked(!0)):(e.isHonorWebMap=!1,this.configureSettingRaido.setChecked(!0));this._updateTimeSettingBtnUI()},getConfig:function(){if("Custom"===this.timeFormat.getValue()&&""===this.customDateFormat.get("value"))return this.customDateFormat.focus(),this.customDateFormat.set("state","Error"),!1;this.config.showLabels=this.showLabelsBox.getValue();this.config.autoPlay=this.autoPlay.getValue();this.config.loopPlay=this.loopPlay.getValue();this.config.timeFormat=this.timeFormat.getValue();
this.customDateFormat.get("value")?this.config.customDateFormat=this.customDateFormat.get("value"):this.config.customDateFormat="";this.config.isHonorWebMap=this.webMapSettingRaido.checked?!0:!1;this.configureTimeSettings||this._createTimeConfigSetting();this.configureTimeSettings&&this.configureTimeSettings.getConfig&&(this.config=this.configureTimeSettings.getConfig(this.config));return this.config},_onCustomDateFormatBlur:function(){this.customDateFormat.value=f.stripHTML(this.customDateFormat.value||
"")},_updateTimeSettingBtnUI:function(){this.webMapSettingRaido.checked&&q.addClass(this.timeSettingBtn,"disabled");this.configureSettingRaido.checked&&q.removeClass(this.timeSettingBtn,"disabled")},_createTimeConfigSetting:function(){var e=new m;this.configureTimeSettings=new a({nls:this.nls,map:this.map,config:this.config},this.configureTimeSettingsContainer);this.own(k(this.configureTimeSettings,"initedLayers",p.hitch(this,function(h){var g=!1;h&&h.isNoLayer&&(g=!0);e.resolve(g)})));this.configureTimeSettings.startup();
return e}})});