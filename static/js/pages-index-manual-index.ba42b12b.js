(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-manual-index"],{"29df":function(t,e,a){"use strict";var i=function(t){(t.options.wxs||(t.options.wxs={}))["wxs"]=function(t){function e(t,e){var a=t.detail,i=a.scrollWidth,o=a.scrollLeft,l=t.currentTarget.dataset,r=l.scrollWidth||l.scrollwidth||0,s=l.indicatorWidth||l.indicatorwidth||0,d=l.barWidth||l.barwidth||0,c=o/(i-r)*(s-d);n(e,c)}function a(t,e){e.callMethod("scrollEvent","right");var a=t.currentTarget.dataset,i=a.indicatorWidth||a.indicatorwidth||0,o=a.barWidth||a.barwidth||0;n(e,i-o)}function i(t,e){e.callMethod("scrollEvent","left"),n(e,0)}function n(t,e){t.selectComponent(".u-scroll-list__indicator__line__bar")&&t.selectComponent(".u-scroll-list__indicator__line__bar").setStyle({transform:"translateX("+e+"px)"})}return t.exports={scroll:e,scrolltolower:a,scrolltoupper:i},t.exports}({exports:{}})};e["a"]=i},"3e84":function(t,e,a){"use strict";a.r(e);var i=a("7b2a"),n=a("dad4");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("d497");var l,r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"69ff798d",null,!1,i["a"],l);e["default"]=s.exports},"3f16":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{ref:"u-scroll-list",staticClass:"u-scroll-list"},[a("v-uni-scroll-view",{staticClass:"u-scroll-list__scroll-view",attrs:{"scroll-x":!0,"data-scrollWidth":t.scrollWidth,"data-barWidth":t.$u.getPx(t.indicatorBarWidth),"data-indicatorWidth":t.$u.getPx(t.indicatorWidth),"show-scrollbar":!1,"upper-threshold":0,"lower-threshold":0},on:{scroll:function(e){e=t.$handleWxsEvent(e),t.wxs.scroll(e,t.$getComponentDescriptor())},scrolltoupper:function(e){e=t.$handleWxsEvent(e),t.wxs.scrolltoupper(e,t.$getComponentDescriptor())},scrolltolower:function(e){e=t.$handleWxsEvent(e),t.wxs.scrolltolower(e,t.$getComponentDescriptor())}}},[a("v-uni-view",{staticClass:"u-scroll-list__scroll-view__content"},[t._t("default")],2)],1),t.indicator?a("v-uni-view",{staticClass:"u-scroll-list__indicator",style:[t.$u.addStyle(t.indicatorStyle)]},[a("v-uni-view",{staticClass:"u-scroll-list__indicator__line",style:[t.lineStyle]},[a("v-uni-view",{ref:"u-scroll-list__indicator__line__bar",staticClass:"u-scroll-list__indicator__line__bar",style:[t.barStyle]})],1)],1):t._e()],1)},o=[]},"416d":function(t,e,a){"use strict";a.r(e);var i=a("9ce3"),n=a("cb75");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("8d1d");var l,r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"598dd3b9",null,!1,i["a"],l);e["default"]=s.exports},"4e3d":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-598dd3b9]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}uni-view[data-v-598dd3b9]{box-sizing:unset}.scroll-list[data-v-598dd3b9]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.manual_page.mb .manual_list .item .view-item[data-v-598dd3b9]{position:relative}.manual_page.mb .manual_list .item .view-item .collect-item[data-v-598dd3b9]{width:6.93333vw;height:6.93333vw;background:hsla(0,0%,100%,.4);border-radius:1.6vw;position:absolute;right:2.66667vw;top:2.66667vw}.manual_page.pc[data-v-598dd3b9]{\n  /*定义滑块 样式*/}.manual_page.pc[data-v-598dd3b9]  ::-webkit-scrollbar{width:6px!important;\n  /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/background:#007acc!important;height:.26667vw!important;display:block!important;overflow:auto!important}.manual_page.pc[data-v-598dd3b9]  ::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(.44,#3cba92),color-stop(.72,#fdbb2d),color-stop(.86,#fdbb2d));-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.manual_page.pc[data-v-598dd3b9]  ::-webkit-scrollbar-track{\n  /*滚动条里面轨道*/background:#ccc!important}.manual_page.ipad .manual_list[data-v-598dd3b9], .manual_page.pc .manual_list[data-v-598dd3b9]{width:100vw;padding-top:5.77867vw}.manual_page.ipad .manual_list .item[data-v-598dd3b9], .manual_page.pc .manual_list .item[data-v-598dd3b9]{padding-left:2.848vw;padding-right:2.848vw;margin-bottom:1.508vw}.manual_page.ipad .manual_list .item .title[data-v-598dd3b9], .manual_page.pc .manual_list .item .title[data-v-598dd3b9]{margin-bottom:.92133vw;font-weight:500;font-size:1.508vw;color:#333}.manual_page.ipad .manual_list .item .title span[data-v-598dd3b9], .manual_page.pc .manual_list .item .title span[data-v-598dd3b9]{border-bottom:%?0.94?% solid #d00217;padding-bottom:.168vw}.manual_page.ipad .manual_list .item .scroll-view .view-item[data-v-598dd3b9], .manual_page.pc .manual_list .item .scroll-view .view-item[data-v-598dd3b9]{width:29.06133vw;margin-right:3.60133vw;position:relative}.manual_page.ipad .manual_list .item .scroll-view .view-item .collect-item[data-v-598dd3b9], .manual_page.pc .manual_list .item .scroll-view .view-item .collect-item[data-v-598dd3b9]{width:2.17733vw;height:2.17733vw;background:hsla(0,0%,100%,.4);border-radius:.50267vw;position:absolute;right:1.00533vw;top:1.00533vw}.manual_page.ipad .manual_list .item .scroll-view .view-item .image[data-v-598dd3b9], .manual_page.pc .manual_list .item .scroll-view .view-item .image[data-v-598dd3b9]{height:16.75067vw;border-radius:.66667vw}.manual_page.ipad .manual_list .item .scroll-view .view-item .image uni-image[data-v-598dd3b9], .manual_page.pc .manual_list .item .scroll-view .view-item .image uni-image[data-v-598dd3b9]{height:100%}.manual_page.ipad .manual_list .item .scroll-view .view-item .text[data-v-598dd3b9], .manual_page.pc .manual_list .item .scroll-view .view-item .text[data-v-598dd3b9]{height:3em;font-size:1.34vw;color:#333;padding-left:.83733vw}.manual_page .fixed[data-v-598dd3b9]{position:fixed;top:0;left:0;z-index:99}.manual_page .manual_list[data-v-598dd3b9]{width:100vw;padding-top:28.53333vw}.manual_page .manual_list .item[data-v-598dd3b9]{padding-left:3.2vw;padding-right:3.2vw;margin-bottom:4.26667vw}.manual_page .manual_list .item .title[data-v-598dd3b9]{margin-bottom:4.13333vw;font-weight:500;font-size:4.8vw;color:#333}.manual_page .manual_list .item .title span[data-v-598dd3b9]{border-bottom:.4vw solid #d00217;padding-bottom:.53333vw}.manual_page .manual_list .item .scroll-view .view-item[data-v-598dd3b9]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:45.6vw;margin-right:2.4vw}.manual_page .manual_list .item .scroll-view .view-item .image[data-v-598dd3b9]{overflow:hidden;display:block;margin-bottom:.5em;width:100%;height:52.26667vw;background:#eee;border-radius:2.4vw}.manual_page .manual_list .item .scroll-view .view-item .image uni-image[data-v-598dd3b9]{height:100%}.manual_page .manual_list .item .scroll-view .view-item .text[data-v-598dd3b9]{height:3em;width:100%;box-sizing:unset;font-size:3.73333vw;color:#333;overflow:hidden;white-space:break-spaces;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}',""]),t.exports=e},"540f":function(t,e,a){t.exports=a.p+"static/img/404.5a8d25a3.png"},"54d5":function(t,e,a){"use strict";var i=a("ff10"),n=a.n(i);n.a},"643c":function(t,e,a){var i=a("e842");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("d2f5caaa",i,!0,{sourceMap:!1,shadowMode:!1})},7499:function(t,e,a){var i=a("9b3b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1f20caa6",i,!0,{sourceMap:!1,shadowMode:!1})},"75cf":function(t,e,a){"use strict";a.r(e);var i=a("3f16"),n=a("e59d");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("b30e");var l,r=a("f0c5"),s=a("29df"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"35b4785a",null,!1,i["a"],l);"function"===typeof s["a"]&&Object(s["a"])(d),e["default"]=d.exports},"7b2a":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"no_result",class:t.deviceType},[i("v-uni-image",{attrs:{src:a("540f")}}),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.$t(t.tips)))]),t.noShowBtn?t._e():i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRest.apply(void 0,arguments)}}},[t._v(t._s(t.$t("viewOtherContent")))])],1)},o=[]},"81ae":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),o=i(a("1da1")),l=i(a("e223")),r={name:"u-scroll-list",mixins:[uni.$u.mpMixin,uni.$u.mixin,l.default],data:function(){return{scrollInfo:{scrollLeft:0,scrollWidth:0},scrollWidth:0}},computed:{barStyle:function(){var t={};return t.width=uni.$u.addUnit(this.indicatorBarWidth),t.backgroundColor=this.indicatorActiveColor,t},lineStyle:function(){var t={};return t.width=uni.$u.addUnit(this.indicatorWidth),t.backgroundColor=this.indicatorColor,t}},mounted:function(){this.init()},methods:{init:function(){this.getComponentWidth()},scrollEvent:function(t){this.$emit(t)},getComponentWidth:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$u.sleep(30);case 2:t.$uGetRect(".u-scroll-list").then((function(e){t.scrollWidth=e.width}));case 3:case"end":return e.stop()}}),e)})))()}}};e.default=r},"8cca":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-6c46f301]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.collect[data-v-6c46f301]{width:100%}.collect .collections[data-v-6c46f301]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.collect .collections uni-image[data-v-6c46f301]{width:5.33333vw;height:5.33333vw;display:block}.collect .collections .text[data-v-6c46f301]{font-size:3.46667vw;color:#333}.collect.ipad .collections[data-v-6c46f301]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.collect.ipad .collections uni-image[data-v-6c46f301]{width:18px;height:18px}.collect.ipad .collections .text[data-v-6c46f301]{font-size:16px}.collect.pc .collections[data-v-6c46f301]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.collect.pc .collections uni-image[data-v-6c46f301]{width:18px;height:18px}.collect.pc .collections .text[data-v-6c46f301]{font-size:16px}',""]),t.exports=e},"8d1d":function(t,e,a){"use strict";var i=a("a1e3"),n=a.n(i);n.a},"8ff0":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),o=i(a("1da1")),l=i(a("5458")),r=(a("2f62"),{name:"app-no-return",props:{text:{type:String,default:"方案"},noShowBtn:{type:Boolean,default:!1}},created:function(){return(0,o.default)((0,n.default)().mark((function t(){return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{tips:function(){var t="";for(var e in l.default)l.default[e]=="暂无相关"+this.text+"哦~"&&(t=e);return console.log("str",t,this.text),t}},methods:{goRest:function(){console.log(this.noShowBtn),this.$emit("rest")}}});e.default=r},"90a5":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),o=i(a("1da1"));a("45fc"),a("d3b7"),a("d81d"),a("ac1f"),a("5319"),a("e9c4"),a("99af");var l=i(a("6439")),r=i(a("3e84")),s=i(a("c551")),d=(a("2f62"),{data:function(){return{List:[],tags:"",textList:[],keyword:"",value:"",community_id:"",indicator:!0}},computed:{isNull:function(){return this.List.some((function(t,e){return t.List.length>0}))}},components:{appIndexHead:l.default,appNoReturn:r.default,appCollect:s.default},onLoad:function(t){var e=this;return(0,o.default)((0,n.default)().mark((function a(){return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log(t),e.getCategories();case 2:case"end":return a.stop()}}),a)})))()},onShow:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.language&&uni.setNavigationBarTitle({title:t.$t("ProductManual")}),t.getModuleIndex("CPSC");case 2:case"end":return e.stop()}}),e)})))()},methods:{selModal:function(t){var e=t.tags,a=t.community_id;this.tags=e,this.community_id=a,this.List=[],this.textList=this.textList.map((function(t){return t.page=1,t.isBottom=!1,t})),this.setData(this.textList)},toRest:function(){this.$router.replace("/")},toRinght:function(t,e){t.isBottom&&(console.log("toRinght"),this.getProductsOne(t))},toSearch:function(t){this.value=t,this.keyword=t,this.List=[],this.setData(this.textList)},toDetail:function(t){uni.navigateTo({url:"/pages/detail/manual?type=Manual&download_type=product&id="+t.id})},getCategories:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){var a,i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("home/getManualCategories",{pid:0});case 2:a=e.sent,200==a.data.code?(i=a.data.data,i.map((function(t,e){return t.page=1,t.isBottom=!1,t})),t.textList=JSON.parse(JSON.stringify(i)),t.setData(i)):t.$utils.showMsg(a.data.code,a.data.msg);case 4:case"end":return e.stop()}}),e)})))()},setData:function(t){var e=this;return(0,o.default)((0,n.default)().mark((function a(){var i;return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=0;case 1:if(!(i<t.length)){a.next=7;break}return a.next=4,e.getProducts(t[i],i);case 4:i++,a.next=1;break;case 7:case"end":return a.stop()}}),a)})))()},getProducts:function(t,e){var a=this;return(0,o.default)((0,n.default)().mark((function e(){var i,o;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={manual_category_id:t.id,page:t.page},a.community_id&&(i.community_id=a.community_id),""!=a.tags&&(i.tags=a.tags),""!=a.keyword&&(i.keyword=a.keyword),e.next=6,a.$store.dispatch("home/getProductManuals",i);case 6:o=e.sent,200==o.data.code?(t.List=o.data.data.data,t.List.length>=10&&t.page++,t.isBottom=t.List.length>=10,a.List.push(t)):a.$utils.showMsg(o.data.code,o.data.msg);case 8:case"end":return e.stop()}}),e)})))()},getProductsOne:function(t,e){var a=this;return(0,o.default)((0,n.default)().mark((function e(){var i,o;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={manual_category_id:t.id,page:t.page},""!=a.keyword&&(i.keyword=a.keyword),e.next=4,a.$store.dispatch("home/getProductManuals",i);case 4:o=e.sent,200==o.data.code?(t.List=t.List.concat(o.data.data.data),o.data.data.data.length>=10&&t.page++,t.isBottom=o.data.data.data.length>=10):a.$utils.showMsg(o.data.code,o.data.msg);case 6:case"end":return e.stop()}}),e)})))()}}});e.default=d},"9b3b":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-35b4785a]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}\nuni-view[data-v-35b4785a], uni-scroll-view[data-v-35b4785a], uni-swiper-item[data-v-35b4785a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-basis:auto;flex-basis:auto;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;-webkit-align-content:flex-start;align-content:flex-start}\n.u-scroll-list[data-v-35b4785a]{padding-bottom:10px}.u-scroll-list__scroll-view[data-v-35b4785a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.u-scroll-list__scroll-view__content[data-v-35b4785a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.u-scroll-list__indicator[data-v-35b4785a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:15px}.u-scroll-list__indicator__line[data-v-35b4785a]{width:60px;height:4px;border-radius:100px;overflow:hidden}.u-scroll-list__indicator__line__bar[data-v-35b4785a]{width:20px;height:4px;border-radius:100px}',""]),t.exports=e},"9ce3":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uScrollList:a("75cf").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",[[a("v-uni-view",{staticClass:"manual_page",class:t.deviceType},[a("v-uni-view",{staticClass:"fixed"},[a("app-index-head",{attrs:{shareTitle:"产品手册",pla:t.$t("tips11"),value:t.value,modal:"product_manuals"},on:{selectChange:function(e){arguments[0]=e=t.$handleEvent(e),t.selModal.apply(void 0,arguments)},searchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"manual_list"},[t.isNull?t._l(t.List,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item"},[e.List.length>0?[a("v-uni-view",{staticClass:"title"},[a("span",[t._v(t._s(e.name))])]),a("u-scroll-list",{attrs:{indicatorWidth:"pc"!=t.deviceType&&e.List.length>=3?100:0,indicator:t.indicator,indicatorColor:"#fff0f0",indicatorActiveColor:"#f56c6c"}},[a("v-uni-view",{staticClass:"scroll-list scroll-view",staticStyle:{"flex-direction":"row"}},t._l(e.List,(function(e,i){return a("v-uni-view",{key:i,staticClass:"view-item"},[a("v-uni-view",{staticClass:"image",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e)}}},["mb"==t.deviceType?[a("v-uni-image",{attrs:{src:e.cover_pic,mode:"aspectFill"}})]:[a("v-uni-image",{attrs:{src:e.cover_pic,mode:"aspectFit"}})]],2),a("v-uni-view",{staticClass:"text"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"collect-item"},[a("app-collect",{attrs:{text:"",titleData:e}})],1)],1)})),1)],1)]:t._e()],2)})):[a("app-no-return",{attrs:{text:"产品手册"},on:{rest:function(e){arguments[0]=e=t.$handleEvent(e),t.toRest.apply(void 0,arguments)}}})]],2)],1)]],2)},o=[]},a1e3:function(t,e,a){var i=a("4e3d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6c81faac",i,!0,{sourceMap:!1,shadowMode:!1})},b30e:function(t,e,a){"use strict";var i=a("7499"),n=a.n(i);n.a},c551:function(t,e,a){"use strict";a.r(e);var i=a("e68c"),n=a("ebc9");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("54d5");var l,r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"6c46f301",null,!1,i["a"],l);e["default"]=s.exports},cb75:function(t,e,a){"use strict";a.r(e);var i=a("90a5"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},d497:function(t,e,a){"use strict";var i=a("643c"),n=a.n(i);n.a},dad4:function(t,e,a){"use strict";a.r(e);var i=a("8ff0"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},e223:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i={props:{indicatorWidth:{type:[String,Number],default:uni.$u.props.scrollList.indicatorWidth},indicatorBarWidth:{type:[String,Number],default:uni.$u.props.scrollList.indicatorBarWidth},indicator:{type:Boolean,default:uni.$u.props.scrollList.indicator},indicatorColor:{type:String,default:uni.$u.props.scrollList.indicatorColor},indicatorActiveColor:{type:String,default:uni.$u.props.scrollList.indicatorActiveColor},indicatorStyle:{type:[String,Object],default:uni.$u.props.scrollList.indicatorStyle}}};e.default=i},e59d:function(t,e,a){"use strict";a.r(e);var i=a("81ae"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},e68c:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"collect",class:t.deviceType,style:{height:t.text?"unset":"100%"}},[a("v-uni-view",{staticClass:"collections",style:{marginTop:t.text?"10rpx":"",justifyContent:t.text?"unset":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCollections.apply(void 0,arguments)}}},[t.showData.collection_id>0?a("v-uni-image",{attrs:{src:"/static/images/index/shou_3.png"}}):a("v-uni-image",{attrs:{src:"/static/images/index/shou_2.png"}}),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.text))])],1)],1)},o=[]},e842:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-69ff798d]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.no_result[data-v-69ff798d]{padding-top:27.73333vw;width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.no_result.ipad[data-v-69ff798d], .no_result.pc[data-v-69ff798d]{padding-top:12.06vw}.no_result.ipad uni-image[data-v-69ff798d], .no_result.pc uni-image[data-v-69ff798d]{width:12.06vw;height:9.632vw;margin-bottom:1.00533vw}.no_result.ipad .text[data-v-69ff798d], .no_result.pc .text[data-v-69ff798d]{font-size:1.256vw;margin-bottom:3.68533vw}.no_result.ipad .btn[data-v-69ff798d], .no_result.pc .btn[data-v-69ff798d]{width:10.46933vw;height:3.43333vw;line-height:3.43333vw;border-radius:.67067vw;font-size:1.256vw}.no_result uni-image[data-v-69ff798d]{width:38.4vw;height:30.66667vw;margin-bottom:3.2vw}.no_result .text[data-v-69ff798d]{font-family:PingFangSC;font-weight:Regular;font-size:4vw;color:#333;margin-bottom:11.73333vw}.no_result .btn[data-v-69ff798d]{width:33.33333vw;height:10.93333vw;background:#998f85;border-radius:2.13333vw;font-family:PingFangSC;font-weight:Regular;font-size:4vw;color:#fff;line-height:10.93333vw;text-align:center}',""]),t.exports=e},ebc9:function(t,e,a){"use strict";a.r(e);var i=a("fc12"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},fc12:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),o=i(a("1da1"));a("e9c4");a("2f62");var l={name:"app-collect",props:{titleData:{type:Object,default:function(){return{}}},text:{type:String,default:function(){return"收藏"}}},data:function(){return{showData:JSON.parse(JSON.stringify(this.titleData))}},created:function(){return(0,o.default)((0,n.default)().mark((function t(){return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{toCollections:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){var a,i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!=t.showData.collection_id){e.next=7;break}return e.next=3,t.$store.dispatch("home/postCollections",{type:"product_manual",obj_id:t.showData.id});case 3:a=e.sent,200==a.data.code?(t.showData.collection_id=a.data.data.id,uni.showToast({title:t.$t("collectionSuccess")})):t.$utils.showMsg(a.data.code,a.data.msg),e.next=11;break;case 7:return e.next=9,t.$store.dispatch("home/delCollections",{id:t.showData.collection_id});case 9:i=e.sent,200==i.data.code?(t.showData.collection_id=0,uni.showToast({title:t.$t("cancelled"),icon:"none"})):t.$utils.showMsg(i.data.code,i.data.msg);case 11:case"end":return e.stop()}}),e)})))()}}};e.default=l},ff10:function(t,e,a){var i=a("8cca");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3cae3c76",i,!0,{sourceMap:!1,shadowMode:!1})}}]);