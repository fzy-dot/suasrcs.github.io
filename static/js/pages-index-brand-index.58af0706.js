(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-brand-index"],{3585:function(t,e,a){"use strict";a.r(e);var n=a("4165"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"3e84":function(t,e,a){"use strict";a.r(e);var n=a("7b2a"),i=a("dad4");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("d497");var o,d=a("f0c5"),s=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"69ff798d",null,!1,n["a"],o);e["default"]=s.exports},4112:function(t,e,a){var n=a("aaf1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("527d84f7",n,!0,{sourceMap:!1,shadowMode:!1})},4165:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var i=n(a("c7eb")),r=n(a("1da1")),o=n(a("6439")),d=n(a("28f8")),s=n(a("3e84")),c=(a("2f62"),{data:function(){return{tabIndex:2,type:2,isIng:!1,isToBottom:!1,dataList:[],page:1}},computed:{videoHeight:function(){switch(this.deviceType){case"mb":return 390;case"ipad":case"pc":return 122.49}},imageHeight:function(){switch(this.deviceType){case"mb":return 280;case"ipad":case"pc":return 122.26}}},components:{appIndexHead:o.default,appBanner:d.default,appNoReturn:s.default},onLoad:function(){var t=this;return(0,r.default)((0,i.default)().mark((function e(){return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getPublicity();case 1:case"end":return e.stop()}}),e)})))()},onShow:function(){var t=this;return(0,r.default)((0,i.default)().mark((function e(){return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.language&&uni.setNavigationBarTitle({title:t.$t("Branding")}),t.getModuleIndex("PPXC");case 2:case"end":return e.stop()}}),e)})))()},onReachBottom:function(){this.isToBottom&&this.getPublicity()},methods:{goDetail:function(t){return(0,r.default)((0,i.default)().mark((function e(){return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.navigateTo({url:"/pages/detail/rich?type=Publicity&id="+t.id});case 1:case"end":return e.stop()}}),e)})))()},tabChange:function(t){this.isIng||(this.dataList=[],this.isToBottom=!1,this.tabIndex=t,this.type=t,this.page=1,this.getPublicity())},getPublicity:function(){var t=this;return(0,r.default)((0,i.default)().mark((function e(){var a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isIng){e.next=2;break}return e.abrupt("return");case 2:return t.isIng=!0,e.next=5,t.$store.dispatch("home/getPublicity",{page:t.page,type:t.type});case 5:a=e.sent,200==a.data.code?(t.isToBottom=10===a.data.data.data.length,t.page++,t.dataList=t.dataList.concat(a.data.data.data),console.log(t.dataList),t.isIng=!1):(t.isIng=!1,t.$utils.showMsg(a.data.code,a.data.msg));case 7:case"end":return e.stop()}}),e)})))()}}});e.default=c},"540f":function(t,e,a){t.exports=a.p+"static/img/404.5a8d25a3.png"},"643c":function(t,e,a){var n=a("e842");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("d2f5caaa",n,!0,{sourceMap:!1,shadowMode:!1})},"6f04":function(t,e,a){"use strict";a.r(e);var n=a("eca4"),i=a("3585");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("7f42");var o,d=a("f0c5"),s=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"790235c4",null,!1,n["a"],o);e["default"]=s.exports},"7b2a":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"no_result",class:t.deviceType},[n("v-uni-image",{attrs:{src:a("540f")}}),n("v-uni-view",{staticClass:"text"},[t._v(t._s(t.$t(t.tips)))]),t.noShowBtn?t._e():n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRest.apply(void 0,arguments)}}},[t._v(t._s(t.$t("viewOtherContent")))])],1)},r=[]},"7f42":function(t,e,a){"use strict";var n=a("4112"),i=a.n(n);i.a},"8ff0":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c7eb")),r=n(a("1da1")),o=n(a("5458")),d=(a("2f62"),{name:"app-no-return",props:{text:{type:String,default:"方案"},noShowBtn:{type:Boolean,default:!1}},created:function(){return(0,r.default)((0,i.default)().mark((function t(){return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{tips:function(){var t="";for(var e in o.default)o.default[e]=="暂无相关"+this.text+"哦~"&&(t=e);return console.log("str",t,this.text),t}},methods:{goRest:function(){console.log(this.noShowBtn),this.$emit("rest")}}});e.default=d},aaf1:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-790235c4]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.brand_page.mb ._item[data-v-790235c4]{text-align:center;width:100%}.brand_page.ipad .brand_banner[data-v-790235c4], .brand_page.pc .brand_banner[data-v-790235c4]{padding:4.272vw 1.06667vw 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.brand_page.ipad .brand_banner .banner-item[data-v-790235c4], .brand_page.pc .brand_banner .banner-item[data-v-790235c4]{width:33.3%}.brand_page.ipad .brand_banner ._item[data-v-790235c4], .brand_page.pc .brand_banner ._item[data-v-790235c4]{font-size:1.508vw;color:#666;text-align:center;width:100%}.brand_page.ipad .title_list[data-v-790235c4], .brand_page.pc .title_list[data-v-790235c4]{padding:1.172vw 0 1.00533vw 2.848vw;width:100vw;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.brand_page.ipad .title_list .item[data-v-790235c4], .brand_page.pc .title_list .item[data-v-790235c4]{font-size:1.508vw;color:#666;margin-right:2.93067vw}.brand_page.ipad .title_list .active[data-v-790235c4], .brand_page.pc .title_list .active[data-v-790235c4]{font-size:1.508vw;color:#333}.brand_page .title_list[data-v-790235c4]{padding:3.46667vw 3.73333vw 1.33333vw 3.73333vw;display:-webkit-box;display:-webkit-flex;display:flex;width:100vw;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.brand_page .title_list ._item[data-v-790235c4]{text-align:center;font-weight:Regular;font-size:4.26667vw;color:#666;width:100%}.brand_page .title_list .item[data-v-790235c4]{font-family:PingFangSC;font-weight:Regular;font-size:4.26667vw;color:#666;margin-right:8.53333vw}.brand_page .title_list .active[data-v-790235c4]{font-size:4.8vw;color:#333}.brand_page .fixed[data-v-790235c4]{position:fixed;top:0;left:0;z-index:99}.brand_page .brand_banner[data-v-790235c4]{padding-top:10.66667vw}.brand_page .brand_banner .banner-item[data-v-790235c4]{width:100vw}',""]),t.exports=e},d497:function(t,e,a){"use strict";var n=a("643c"),i=a.n(n);i.a},dad4:function(t,e,a){"use strict";a.r(e);var n=a("8ff0"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},e842:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-69ff798d]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.no_result[data-v-69ff798d]{padding-top:27.73333vw;width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.no_result.ipad[data-v-69ff798d], .no_result.pc[data-v-69ff798d]{padding-top:12.06vw}.no_result.ipad uni-image[data-v-69ff798d], .no_result.pc uni-image[data-v-69ff798d]{width:12.06vw;height:9.632vw;margin-bottom:1.00533vw}.no_result.ipad .text[data-v-69ff798d], .no_result.pc .text[data-v-69ff798d]{font-size:1.256vw;margin-bottom:3.68533vw}.no_result.ipad .btn[data-v-69ff798d], .no_result.pc .btn[data-v-69ff798d]{width:10.46933vw;height:3.43333vw;line-height:3.43333vw;border-radius:.67067vw;font-size:1.256vw}.no_result uni-image[data-v-69ff798d]{width:38.4vw;height:30.66667vw;margin-bottom:3.2vw}.no_result .text[data-v-69ff798d]{font-family:PingFangSC;font-weight:Regular;font-size:4vw;color:#333;margin-bottom:11.73333vw}.no_result .btn[data-v-69ff798d]{width:33.33333vw;height:10.93333vw;background:#998f85;border-radius:2.13333vw;font-family:PingFangSC;font-weight:Regular;font-size:4vw;color:#fff;line-height:10.93333vw;text-align:center}',""]),t.exports=e},eca4:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",[[a("v-uni-view",{staticClass:"brand_page",class:t.deviceType},[a("v-uni-view",{staticClass:"fixed"},[a("app-index-head",{attrs:{shareTitle:"品牌宣传",noShowSearch:!1}})],1),a("v-uni-view",{staticClass:"brand_banner"},[a("v-uni-view",{staticClass:"title_list"},[a("v-uni-view",{staticClass:"item",class:{active:2==t.tabIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange(2)}}},[t._v(t._s(t.$t("promotionalVideo")))]),a("v-uni-view",{staticClass:"item",class:{active:1==t.tabIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange(1)}}},[t._v(t._s(t.$t("sharingPhoto")))])],1),2==t.tabIndex?[t.dataList.length>0?t._l(t.dataList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"banner-item"},[a("app-banner",{attrs:{bannerData:e,height:t.videoHeight,titleSize:36,type:"publicity",isVideo:!0}})],1)})):[a("app-no-return",{attrs:{text:t.$t("promotionalVideo"),noShowBtn:!0}}),a("v-uni-view",{staticClass:"_item"},[t._v(t._s(t.$t("notPromotionalVideo")))])]]:t._e(),1==t.tabIndex?[t.dataList.length>0?t._l(t.dataList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"banner-item"},[a("app-banner",{attrs:{bannerData:e,height:t.imageHeight,radius:0,pb:44,titleSize:36,type:"publicity"},on:{toDetail:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail.apply(void 0,arguments)}}})],1)})):[a("app-no-return",{attrs:{text:t.$t("sharingPhoto"),noShowBtn:!0}}),a("v-uni-view",{staticClass:"_item"},[t._v(t._s(t.$t("notSharingPhoto")))])]]:t._e()],2)],1)]],2)},r=[]}}]);