(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail~pages-detail-rich-detail"],{"0ed8":function(t,e,i){var a=i("bff2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4c36526c",a,!0,{sourceMap:!1,shadowMode:!1})},1153:function(t,e,i){"use strict";i.r(e);var a=i("8a2b"),n=i("2ea2");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("d6fd");var r,d=i("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"48f2f481",null,!1,a["a"],r);e["default"]=s.exports},"142e":function(t,e,i){"use strict";i.r(e);var a=i("e12c"),n=i("9b97");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("797d");var r,d=i("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"a30a8f48",null,!1,a["a"],r);e["default"]=s.exports},1573:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-48f2f481]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}\nuni-view[data-v-48f2f481], uni-scroll-view[data-v-48f2f481], uni-swiper-item[data-v-48f2f481]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-basis:auto;flex-basis:auto;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;-webkit-align-content:flex-start;align-content:flex-start}\n.u-swiper[data-v-48f2f481]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;overflow:hidden}.u-swiper__wrapper[data-v-48f2f481]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-swiper__wrapper__item[data-v-48f2f481]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-swiper__wrapper__item__wrapper[data-v-48f2f481]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;overflow:hidden;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-swiper__wrapper__item__wrapper__image[data-v-48f2f481]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-swiper__wrapper__item__wrapper__video[data-v-48f2f481]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-swiper__wrapper__item__wrapper__title[data-v-48f2f481]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;right:0;font-size:3.73333vw;padding:1.6vw 3.2vw;color:#fff;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-swiper__indicator[data-v-48f2f481]{position:absolute;bottom:10px}',""]),t.exports=e},"1b36":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-loading-icon",class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():i("v-uni-view",{ref:"ani",staticClass:"u-loading-icon__spinner",class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?t._l(t.array12,(function(t,e){return i("v-uni-view",{key:e,staticClass:"u-loading-icon__dot"})})):t._e()],2),t.text?i("v-uni-text",{staticClass:"u-loading-icon__text",style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor}},[t._v(t._s(t.text))]):t._e()],1):t._e()},o=[]},"1b68":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-a30a8f48]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.product-detail img[data-v-a30a8f48]{width:100%}.product-detail.ipad[data-v-a30a8f48], .product-detail.pc[data-v-a30a8f48]{width:100%;height:100%;overflow-y:scroll;padding:16px 18px;box-sizing:border-box}.product-detail.ipad .product-swiper[data-v-a30a8f48], .product-detail.pc .product-swiper[data-v-a30a8f48]{height:202px}.product-detail.ipad .product-middle[data-v-a30a8f48], .product-detail.pc .product-middle[data-v-a30a8f48]{padding:0}.product-detail.ipad .product-title[data-v-a30a8f48], .product-detail.pc .product-title[data-v-a30a8f48]{font-size:20px;font-weight:700;height:58px;line-height:58px;margin-bottom:25px;border-bottom:2px solid #f0efef;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.product-detail.ipad .prod-title[data-v-a30a8f48], .product-detail.pc .prod-title[data-v-a30a8f48]{font-size:16px;margin-bottom:13px}.product-detail.ipad .prod-info[data-v-a30a8f48], .product-detail.pc .prod-info[data-v-a30a8f48]{height:auto;font-size:16px;border:1px solid #e7e7e7;border-bottom:none;background:#f2f2f2;height:46px}.product-detail.ipad .prod-info[data-v-a30a8f48]:nth-last-of-type(1), .product-detail.pc .prod-info[data-v-a30a8f48]:nth-last-of-type(1){border-bottom:1px solid #e7e7e7}.product-detail.ipad .prod-info .info-title[data-v-a30a8f48], .product-detail.pc .prod-info .info-title[data-v-a30a8f48]{padding:0 12px;box-sizing:border-box;width:120px;white-space:pre-line;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.product-detail.ipad .prod-info .info-value[data-v-a30a8f48], .product-detail.pc .prod-info .info-value[data-v-a30a8f48]{padding:0 24px;width:293px;white-space:pre-line}.product-detail.ipad .prod-info[data-v-a30a8f48]:nth-last-of-type(1), .product-detail.pc .prod-info[data-v-a30a8f48]:nth-last-of-type(1){margin-bottom:15px}.product-detail .product-swiper[data-v-a30a8f48]{width:100%;height:74.66667vw}.product-detail .indicator[data-v-a30a8f48]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.product-detail .indicator__dot[data-v-a30a8f48]{height:6px;width:6px;border-radius:100px;background-color:hsla(0,0%,100%,.35);margin:0 5px;-webkit-transition:background-color .3s;transition:background-color .3s}.product-detail .indicator__dot--active[data-v-a30a8f48]{background-color:#fff}.product-detail .product-title[data-v-a30a8f48]{height:16.26667vw;border-bottom:.53333vw solid #f0efef;font-family:PingFangSC-Medium;font-weight:500;font-size:4.53333vw;color:#222;line-height:16.26667vw;margin-bottom:7.2vw}.product-detail .product-middle[data-v-a30a8f48]{padding:0 4.26667vw;box-sizing:border-box}.product-detail .prod-title[data-v-a30a8f48]{font-family:PingFangSC-Medium;font-weight:400;font-size:4.26667vw;color:#333;margin-bottom:4vw}.product-detail .prod-info[data-v-a30a8f48]{font-family:PingFangSC-Regular;font-weight:400;font-size:3.73333vw;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;height:12vw;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:.26667vw solid #e7e7e7;background:#f2f2f2;border-bottom:none}.product-detail .prod-info[data-v-a30a8f48]:nth-last-of-type(1){border-bottom:.26667vw solid #e7e7e7;margin-bottom:5.06667vw}.product-detail .prod-info .info-title[data-v-a30a8f48]{width:31.2vw;padding:0 3.2vw;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;white-space:pre-line}.product-detail .prod-info .info-value[data-v-a30a8f48]{width:60vw;padding:0 6.4vw;box-sizing:border-box;background:#fff;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;white-space:pre-line}',""]),t.exports=e},"2ea2":function(t,e,i){"use strict";i.r(e);var a=i("ca01"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},3696:function(t,e,i){"use strict";i.r(e);var a=i("1b36"),n=i("81df");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c83c");var r,d=i("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"8d43a062",null,!1,a["a"],r);e["default"]=s.exports},"5aaa":function(t,e,i){var a=i("b129");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7c14b118",a,!0,{sourceMap:!1,shadowMode:!1})},"5b76":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-indicator"},["line"===t.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper",class:["u-swiper-indicator__wrapper--"+t.indicatorMode],style:{width:t.$u.addUnit(t.lineWidth*t.length),backgroundColor:t.indicatorInactiveColor}},[i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper--line__bar",style:[t.lineStyle]})],1):t._e(),"dot"===t.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper"},t._l(t.length,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-swiper-indicator__wrapper__dot",class:[a===t.current&&"u-swiper-indicator__wrapper__dot--active"],style:[t.dotStyle(a)]})})),1):t._e()],1)},o=[]},"797d":function(t,e,i){"use strict";var a=i("b42c"),n=i.n(a);n.a},"7bf0":function(t,e,i){"use strict";i.r(e);var a=i("9b41"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"81df":function(t,e,i){"use strict";i.r(e);var a=i("c6f5"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"8a2b":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uLoadingIcon:i("3696").default,uSwiperIndicator:i("f58a").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper",style:{backgroundColor:t.bgColor,height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)}},[t.loading?i("v-uni-view",{staticClass:"u-swiper__loading"},[i("u-loading-icon",{attrs:{mode:"circle"}})],1):i("v-uni-swiper",{staticClass:"u-swiper__wrapper",style:{height:t.$u.addUnit(t.height)},attrs:{circular:t.circular,interval:t.interval,duration:t.duration,autoplay:t.autoplay,current:t.current,currentItemId:t.currentItemId,previousMargin:t.$u.addUnit(t.previousMargin),nextMargin:t.$u.addUnit(t.nextMargin),acceleration:t.acceleration,displayMultipleItems:t.displayMultipleItems,easingFunction:t.easingFunction},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"u-swiper__wrapper__item"},[i("v-uni-view",{staticClass:"u-swiper__wrapper__item__wrapper",style:[t.itemStyle(a)]},["image"===t.getItemType(e)?i("v-uni-image",{staticClass:"u-swiper__wrapper__item__wrapper__image",style:{height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)},attrs:{src:t.getSource(e),mode:t.imgMode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler(a)}}}):t._e(),"video"===t.getItemType(e)?i("v-uni-video",{staticClass:"u-swiper__wrapper__item__wrapper__video",style:{height:t.$u.addUnit(t.height)},attrs:{id:"video-"+a,"enable-progress-gesture":!1,src:t.getSource(e),poster:t.getPoster(e),title:t.showTitle&&t.$u.test.object(e)&&e.title?e.title:"",controls:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler(a)}}}):t._e(),t.showTitle&&t.$u.test.object(e)&&e.title&&t.$u.test.image(t.getSource(e))?i("v-uni-text",{staticClass:"u-swiper__wrapper__item__wrapper__title u-line-1"},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper__indicator",style:[t.$u.addStyle(t.indicatorStyle)]},[t._t("indicator",[t.loading||!t.indicator||t.showTitle?t._e():i("u-swiper-indicator",{attrs:{indicatorActiveColor:t.indicatorActiveColor,indicatorInactiveColor:t.indicatorInactiveColor,length:t.list.length,current:t.currentIndex,indicatorMode:t.indicatorMode}})])],2)],1)},o=[]},"9b41":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f538")),o={name:"u-swiper-indicator",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{lineWidth:22}},computed:{lineStyle:function(){var t={};return t.width=uni.$u.addUnit(this.lineWidth),t.transform="translateX(".concat(uni.$u.addUnit(this.current*this.lineWidth),")"),t.backgroundColor=this.indicatorActiveColor,t},dotStyle:function(){var t=this;return function(e){var i={};return i.backgroundColor=e===t.current?t.indicatorActiveColor:t.indicatorInactiveColor,i}}}};e.default=o},"9b97":function(t,e,i){"use strict";i.r(e);var a=i("de9b"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9d80":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={props:{list:{type:Array,default:uni.$u.props.swiper.list},indicator:{type:Boolean,default:uni.$u.props.swiper.indicator},indicatorActiveColor:{type:String,default:uni.$u.props.swiper.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiper.indicatorInactiveColor},indicatorStyle:{type:[String,Object],default:uni.$u.props.swiper.indicatorStyle},indicatorMode:{type:String,default:uni.$u.props.swiper.indicatorMode},autoplay:{type:Boolean,default:uni.$u.props.swiper.autoplay},current:{type:[String,Number],default:uni.$u.props.swiper.current},currentItemId:{type:String,default:uni.$u.props.swiper.currentItemId},interval:{type:[String,Number],default:uni.$u.props.swiper.interval},duration:{type:[String,Number],default:uni.$u.props.swiper.duration},circular:{type:Boolean,default:uni.$u.props.swiper.circular},previousMargin:{type:[String,Number],default:uni.$u.props.swiper.previousMargin},nextMargin:{type:[String,Number],default:uni.$u.props.swiper.nextMargin},acceleration:{type:Boolean,default:uni.$u.props.swiper.acceleration},displayMultipleItems:{type:Number,default:uni.$u.props.swiper.displayMultipleItems},easingFunction:{type:String,default:uni.$u.props.swiper.easingFunction},keyName:{type:String,default:uni.$u.props.swiper.keyName},imgMode:{type:String,default:uni.$u.props.swiper.imgMode},height:{type:[String,Number],default:uni.$u.props.swiper.height},bgColor:{type:String,default:uni.$u.props.swiper.bgColor},radius:{type:[String,Number],default:uni.$u.props.swiper.radius},loading:{type:Boolean,default:uni.$u.props.swiper.loading},showTitle:{type:Boolean,default:uni.$u.props.swiper.showTitle}}};e.default=a},b129:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-7bf5e5a3]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}\nuni-view[data-v-7bf5e5a3], uni-scroll-view[data-v-7bf5e5a3], uni-swiper-item[data-v-7bf5e5a3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-basis:auto;flex-basis:auto;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;-webkit-align-content:flex-start;align-content:flex-start}\n.u-swiper-indicator__wrapper[data-v-7bf5e5a3]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.u-swiper-indicator__wrapper--line[data-v-7bf5e5a3]{border-radius:100px;height:4px}.u-swiper-indicator__wrapper--line__bar[data-v-7bf5e5a3]{width:22px;height:4px;border-radius:100px;background-color:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-swiper-indicator__wrapper__dot[data-v-7bf5e5a3]{width:5px;height:5px;border-radius:100px;margin:0 4px}.u-swiper-indicator__wrapper__dot--active[data-v-7bf5e5a3]{width:12px}',""]),t.exports=e},b42c:function(t,e,i){var a=i("1b68");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("232adf52",a,!0,{sourceMap:!1,shadowMode:!1})},bff2:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-8d43a062]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}\nuni-view[data-v-8d43a062], uni-scroll-view[data-v-8d43a062], uni-swiper-item[data-v-8d43a062]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-basis:auto;flex-basis:auto;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;-webkit-align-content:flex-start;align-content:flex-start}\n.u-loading-icon[data-v-8d43a062]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-8d43a062]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-8d43a062]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-8d43a062 1s linear infinite;animation:u-rotate-data-v-8d43a062 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-8d43a062]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-8d43a062]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-8d43a062]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}[data-v-8d43a062]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-8d43a062]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-8d43a062]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-8d43a062]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-8d43a062]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-8d43a062]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-8d43a062{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-8d43a062{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},c6f5:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a630"),i("3ca3");var n=a(i("fc29")),o={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),i=e[e.length-1],a=i.$getAppWebview();a.addEventListener("hide",(function(){t.webviewHide=!0})),a.addEventListener("show",(function(){t.webviewHide=!1}))}}};e.default=o},c83c:function(t,e,i){"use strict";var a=i("0ed8"),n=i.n(a);n.a},ca01:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("53ca"));i("ac1f"),i("00b4");var o=a(i("9d80")),r={name:"u-swiper",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{currentIndex:0}},watch:{current:function(t,e){t!==e&&(this.currentIndex=t)}},computed:{itemStyle:function(){var t=this;return function(e){var i={};return t.nextMargin&&t.previousMargin&&(i.borderRadius=uni.$u.addUnit(t.radius),e!==t.currentIndex&&(i.transform="scale(0.92)")),i}}},methods:{getItemType:function(t){return"string"===typeof t?uni.$u.test.video(this.getSource(t))?"video":"image":"object"===(0,n.default)(t)&&this.keyName?t.type?"image"===t.type?"image":"video"===t.type?"video":"image":uni.$u.test.video(this.getSource(t))?"video":"image":void 0},getSource:function(t){return"string"===typeof t?t:"object"===(0,n.default)(t)&&this.keyName?t[this.keyName]:(uni.$u.error("请按格式传递列表参数"),"")},change:function(t){var e=t.detail.current;this.pauseVideo(this.currentIndex),this.currentIndex=e,this.$emit("change",t.detail)},pauseVideo:function(t){var e=this.getSource(this.list[t]);if(uni.$u.test.video(e)){var i=uni.createVideoContext("video-".concat(t),this);i.pause()}},getPoster:function(t){return"object"===(0,n.default)(t)&&t.poster?t.poster:""},clickHandler:function(t){this.$emit("click",t)}}};e.default=r},d6fd:function(t,e,i){"use strict";var a=i("f724"),n=i.n(a);n.a},de9b:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("5319"),i("4160"),i("d3b7"),i("159b");var a={name:"app-product-detail",props:{detail:{type:Object,default:{}},title:{type:String,default:"标题"},titleShow:{type:Boolean,default:!0},swiper:{type:Boolean,default:!0},show:{type:Boolean,default:!1}},watch:{detail:{handler:function(t){console.log(t),this.getInitValue()},deep:!0},show:{handler:function(t){t&&this.getInitValue()},deep:!0}},data:function(){return{current:0,list:[],params:[]}},onShow:function(){console.log(this.detail)},methods:{handleSelectImage:function(t){this.$emit("on-select",this.list[t])},getNodes:function(t){if(!t)return"";var e=t.replace(/\<img/g,"<img style='width: 100%;height:100%;'");return e=e.replace(/\<p/g,"<p style='font-size: 15px;'"),e},getInitValue:function(){if(this.detail.images){var t=this.detail.images,e=JSON.parse(t);this.list=e}var i=this.detail.params,a=[];i.forEach((function(t){a.push({title:t.params_key,value:t.params_value})})),this.params=a}}};e.default=a},e12c:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uSwiper:i("1153").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"product-detail",class:t.deviceType},[t.swiper?i("v-uni-view",{staticClass:"product-swiper"},[i("u-swiper",{attrs:{list:t.list,imgMode:"aspectFit",indicator:!0,height:"100%",radius:"0",indicatorMode:"line",indicatorStyle:"bottom:14px;",circular:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.current=e.current}.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSelectImage(e)}}},[i("v-uni-view",{staticClass:"indicator",attrs:{slot:"indicator"},slot:"indicator"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"indicator__dot",class:[a===t.current&&"indicator__dot--active"]})})),1)],1)],1):t._e(),i("v-uni-view",{staticClass:"product-middle"},[t.titleShow?i("v-uni-view",{staticClass:"product-title"},[t._v(t._s(t.detail?t.detail.name:""))]):t._e(),t.params.length>0?i("v-uni-view",{staticClass:"prod-title"},[t._v(t._s(t.$t("productDescription")))]):t._e(),t.params?i("v-uni-view",t._l(t.params,(function(e,a){return i("v-uni-view",{key:a,staticClass:"prod-info"},[i("v-uni-view",{staticClass:"info-title"},[i("p",[t._v(t._s(e.title))])]),i("v-uni-view",{staticClass:"info-value"},[i("p",[t._v(t._s(e.value))])])],1)})),1):t._e(),i("v-uni-view",{staticClass:"prod-title"},[t._v(t._s(t.$t("moreDetails")))]),i("v-uni-rich-text",{attrs:{nodes:t.getNodes(t.detail.details2)}})],1)],1)},o=[]},f538:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={props:{length:{type:[String,Number],default:uni.$u.props.swiperIndicator.length},current:{type:[String,Number],default:uni.$u.props.swiperIndicator.current},indicatorActiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorInactiveColor},indicatorMode:{type:String,default:uni.$u.props.swiperIndicator.indicatorMode}}};e.default=a},f58a:function(t,e,i){"use strict";i.r(e);var a=i("5b76"),n=i("7bf0");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("f925");var r,d=i("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"7bf5e5a3",null,!1,a["a"],r);e["default"]=s.exports},f724:function(t,e,i){var a=i("1573");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4bfbb212",a,!0,{sourceMap:!1,shadowMode:!1})},f925:function(t,e,i){"use strict";var a=i("5aaa"),n=i.n(a);n.a},fc29:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};e.default=a}}]);