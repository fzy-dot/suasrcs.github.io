(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-list"],{"15d3":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),s=i(a("1da1")),d=i(a("6439")),o=i(a("26a3")),r=(a("2f62"),{data:function(){return{design_id:"",List:[],type:"",isDownlod:!1,download_link:"",typeList:[{name:"VR",type:0},{name:"实景图",type:1},{name:"效果图",type:2},{name:"资质证书",type:3}]}},computed:{},components:{appIndexHead:d.default,appDownlod:o.default},onLoad:function(t){var e=this;return(0,s.default)((0,n.default)().mark((function a(){return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.design_id=t.id,e.type=t.type,console.log(e.design_id),e.type=t.type,uni.setNavigationBarTitle({title:e.typeList[e.type].name}),"1"===t.type&&e.getFigures(),"2"===t.type&&(console.log(t.type),e.getRendering()),"3"===t.type&&e.getCerts();case 8:case"end":return a.stop()}}),a)})))()},onShow:function(){var t=this;return(0,s.default)((0,n.default)().mark((function e(){return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getModuleIndex("VRFA");case 1:case"end":return e.stop()}}),e)})))()},methods:{toDownlod:function(t){this.$store.dispatch("user/actionLog",{action_name:"DOWNLOADBUTTONCLICK"}),this.download_link=t.download_link,this.isDownlod=!0},openDetail:function(t){uni.navigateTo({url:"/pages/detail/print?id="+this.design_id+"&cId="+t.id+"&type="+this.type})},getFigures:function(){var t=this;return(0,s.default)((0,n.default)().mark((function e(){var a;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(1),e.next=3,t.$store.dispatch("home/getFigures",{design_id:t.design_id});case 3:a=e.sent,200==a.data.code?t.List=a.data.data.data:t.$utils.showMsg(a.data.code,a.data.msg);case 5:case"end":return e.stop()}}),e)})))()},getRendering:function(){var t=this;return(0,s.default)((0,n.default)().mark((function e(){var a;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(2),e.next=3,t.$store.dispatch("home/getRendering",{design_id:t.design_id});case 3:a=e.sent,200==a.data.code?t.List=a.data.data.data:t.$utils.showMsg(a.data.code,a.data.msg);case 5:case"end":return e.stop()}}),e)})))()},getCerts:function(){var t=this;return(0,s.default)((0,n.default)().mark((function e(){var a;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("home/getCerts",{design_id:t.design_id});case 2:a=e.sent,200==a.data.code?t.List=a.data.data:t.$utils.showMsg(a.data.code,a.data.msg);case 4:case"end":return e.stop()}}),e)})))()}}});e.default=r},2030:function(t,e,a){"use strict";a.r(e);var i=a("15d3"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"35c0":function(t,e,a){"use strict";var i=a("4ac4"),n=a.n(i);n.a},"4ac4":function(t,e,a){var i=a("6fea");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("60389981",i,!0,{sourceMap:!1,shadowMode:!1})},6962:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",[[a("v-uni-view",{staticClass:"list_page",class:t.deviceType},[a("v-uni-view",{staticClass:"fixed"},[a("app-index-head",{attrs:{noShowRight:!0,noShowSearch:!1}})],1),a("v-uni-view",{staticClass:"list_banner"},[a("v-uni-view",{staticClass:"list"},t._l(t.List,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openDetail(e)}}},[a("v-uni-view",{staticClass:"image-item"},[a("v-uni-image",{staticClass:"image",attrs:{src:e.cover_pic||e.file_url,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"tips",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.toDownlod(e)}}},[a("v-uni-image",{attrs:{src:"/static/images/index/download.png"}})],1)],1)],1)})),1)],1)],1)],t.download_link?[t.isDownlod?a("app-downlod",{attrs:{type:"image",url:t.download_link},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.isDownlod=!1}}}):t._e()]:t._e()],2)},s=[]},"6fea":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-374d3040]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.list_page.ipad .list_banner[data-v-374d3040], .list_page.pc .list_banner[data-v-374d3040]{padding-top:4.8vw}.list_page.ipad .list_banner .list[data-v-374d3040], .list_page.pc .list_banner .list[data-v-374d3040]{padding:1.424vw 1.72133vw}.list_page.ipad .list_banner .list .item[data-v-374d3040], .list_page.pc .list_banner .list .item[data-v-374d3040]{width:20%;height:19.17867vw;margin:0;margin-bottom:2.512vw;text-align:center}.list_page.ipad .list_banner .list .item .image-item[data-v-374d3040], .list_page.pc .list_banner .list .item .image-item[data-v-374d3040]{width:16.75067vw;height:19.17867vw;margin:0 auto}.list_page.ipad .list_banner .list .item .image-item .image[data-v-374d3040], .list_page.pc .list_banner .list .item .image-item .image[data-v-374d3040]{border-radius:.66667vw}.list_page.ipad .list_banner .list .item .image-item .tips[data-v-374d3040], .list_page.pc .list_banner .list .item .image-item .tips[data-v-374d3040]{right:.83733vw;bottom:.83733vw;width:2.17733vw;height:2.17733vw}.list_page.pc .list_banner[data-v-374d3040]{padding-top:3.2vw}.list_page .fixed[data-v-374d3040]{position:fixed;top:0;left:0;z-index:99}.list_page .list_banner[data-v-374d3040]{padding-top:10.66667vw}.list_page .list_banner .list[data-v-374d3040]{padding:2.66667vw 2vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list_page .list_banner .list .item[data-v-374d3040]{height:52.26667vw;margin-bottom:2.66667vw}.list_page .list_banner .list .item .image-item[data-v-374d3040]{width:96.26667vw;height:52.26667vw;position:relative;margin:0 auto}.list_page .list_banner .list .item .image-item .tips[data-v-374d3040]{position:absolute;right:1.6vw;bottom:1.6vw;width:6.93333vw;height:6.93333vw}.list_page .list_banner .list .item .image-item uni-image[data-v-374d3040]{width:100%;height:100%}.list_page .list_banner .list .item .image-item .image[data-v-374d3040]{border-radius:2.66667vw}',""]),t.exports=e},9832:function(t,e,a){"use strict";a.r(e);var i=a("6962"),n=a("2030");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("35c0");var d,o=a("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"374d3040",null,!1,i["a"],d);e["default"]=r.exports}}]);