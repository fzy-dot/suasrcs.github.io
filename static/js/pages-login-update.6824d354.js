(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-update"],{"1c87":function(t,e,i){"use strict";i.r(e);var a=i("3e44"),n=i.n(a);for(var d in a)["default"].indexOf(d)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(d);e["default"]=n.a},2366:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-layout",[i("v-uni-view",{staticClass:"update",class:t.deviceType},t._l(t.List,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{staticClass:"date"},[t._v(t._s(e.date))]),i("v-uni-view",{staticClass:"i-list"},t._l(e.List,(function(a,n){return i("v-uni-view",{key:n,staticClass:"i-item"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"xin"})],1),n+1<e.List.length?i("v-uni-view",{staticClass:"bottom"}):t._e(),i("v-uni-view",{staticClass:"i-date"},[t._v(t._s(a.show_time))]),i("v-uni-view",{staticClass:"text"},[i("v-uni-rich-text",{attrs:{nodes:t.getNodes(a.content)}})],1)],1)})),1)],1)})),1)],1)},d=[]},"3e44":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("c7eb")),d=a(i("1da1"));i("ac1f"),i("5319"),i("4160"),i("d3b7"),i("159b");var s={data:function(){return{List:[],page:1,isIng:!1,isBottom:!1}},onShow:function(){},onLoad:function(){this.getUpdate()},onReachBottom:function(){this.isToBottom&&this.getUpdate()},components:{},methods:{getNodes:function(t){var e=t.replace(/\<img/g,"<img style='width: 100%;height:100%;'");return e=e.replace(/\<p/g,"<p style='word-break: break-word'"),e},getUpdate:function(){var t=this;return(0,d.default)((0,n.default)().mark((function e(){var i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isIng){e.next=2;break}return e.abrupt("return");case 2:return t.isIng=!0,e.next=5,t.$store.dispatch("user/getUpdate",{page:t.page});case 5:i=e.sent,200==i.data.code?(t.isBottom=10===i.data.data.data.length,t.isIng=!1,t.page++,i.data.data.data.forEach((function(e,i){if(e.new_time=e.update_time.substring(0,7),e.show_time=e.update_time.substring(5,19),t.List.length>0){var a=!1;t.List.forEach((function(t,i){t.date==e.new_time&&(a=!0,t.List.push(e))})),a||t.List.push({date:e.new_time,List:[e]})}else t.List.push({date:e.new_time,List:[e]})})),console.log(t.List)):(t.isIng=!1,t.$utils.showMsg(i.data.code,i.data.msg));case 7:case"end":return e.stop()}}),e)})))()}}};e.default=s},"64fa":function(t,e,i){"use strict";i.r(e);var a=i("2366"),n=i("1c87");for(var d in n)["default"].indexOf(d)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(d);i("7e5a");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"3ce546b8",null,!1,a["a"],s);e["default"]=c.exports},"7e5a":function(t,e,i){"use strict";var a=i("8a69"),n=i.n(a);n.a},"8a69":function(t,e,i){var a=i("f7e7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3da524fa",a,!0,{sourceMap:!1,shadowMode:!1})},f7e7:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.safe-area-inset-bottom[data-v-3ce546b8]{z-index:2;padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}uni-view[data-v-3ce546b8]{box-sizing:border-box}uni-image[data-v-3ce546b8]{width:100%;height:100%;display:block}.update[data-v-3ce546b8]{width:100vw;height:100vh;background:#f7f7f7}.update.ipad .item[data-v-3ce546b8], .update.pc .item[data-v-3ce546b8]{width:100vw;padding-top:1.80133vw}.update.ipad .item .date[data-v-3ce546b8], .update.pc .item .date[data-v-3ce546b8]{width:6.36533vw;height:1.67467vw;background:#998f85;border-radius:0 8.37467vw 8.37467vw 0;font-size:1.00533vw;text-align:center;line-height:1.67467vw;color:#fff;margin-bottom:1.00533vw}.update.ipad .item .i-list[data-v-3ce546b8], .update.pc .item .i-list[data-v-3ce546b8]{width:100vw;background:#fff;padding:1.08933vw 1.59067vw}.update.ipad .item .i-list .i-item[data-v-3ce546b8], .update.pc .item .i-list .i-item[data-v-3ce546b8]{position:relative;width:100%;border-left:%?0.31?% solid #cacaca}.update.ipad .item .i-list .i-item .i-date[data-v-3ce546b8], .update.pc .item .i-list .i-item .i-date[data-v-3ce546b8]{font-size:.92133vw;color:#a2a2a2;padding-top:1.172vw;margin-left:2.34533vw}.update.ipad .item .i-list .i-item .text[data-v-3ce546b8], .update.pc .item .i-list .i-item .text[data-v-3ce546b8]{font-size:1.256vw;color:#333;margin-top:.90933vw;margin-left:2.34533vw}.update.ipad .item .i-list .i-item .bottom[data-v-3ce546b8], .update.pc .item .i-list .i-item .bottom[data-v-3ce546b8]{position:absolute;bottom:0;left:2.01067vw;width:26.13067vw;height:%?0.33?%;background:#e3e3e3}.update.ipad .item .i-list .i-item .left[data-v-3ce546b8], .update.pc .item .i-list .i-item .left[data-v-3ce546b8]{position:absolute;top:50%;left:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#fff;width:1.6vw;height:1.6vw}.update.ipad .item .i-list .i-item .left .xin[data-v-3ce546b8], .update.pc .item .i-list .i-item .left .xin[data-v-3ce546b8]{width:.8vw;height:.8vw;border-radius:50%;border:%?0.31?% solid #cacaca}.update .item[data-v-3ce546b8]{width:100vw;padding-top:3.6vw}.update .item .date[data-v-3ce546b8]{width:20.26667vw;height:5.33333vw;background:#998f85;border-radius:0 26.66667vw 26.66667vw 0;font-size:3.2vw;text-align:center;line-height:5.33333vw;color:#fff;margin-bottom:3.6vw}.update .item .i-list[data-v-3ce546b8]{width:100vw;background:#fff;padding:3.46667vw 5.06667vw}.update .item .i-list .i-item[data-v-3ce546b8]{position:relative;width:100%;border-left:.26667vw solid #cacaca;padding-bottom:3.73333vw}.update .item .i-list .i-item .i-date[data-v-3ce546b8]{font-size:2.93333vw;color:#a2a2a2;padding-top:3.73333vw;margin-left:7.46667vw}.update .item .i-list .i-item .text[data-v-3ce546b8]{font-size:4vw;color:#333;margin-top:2.66667vw;margin-left:7.46667vw}.update .item .i-list .i-item img[data-v-3ce546b8]{width:100%;height:100%}.update .item .i-list .i-item .bottom[data-v-3ce546b8]{position:absolute;bottom:0;left:6.4vw;width:83.2vw;height:%?1?%;background:#e3e3e3}.update .item .i-list .i-item .left[data-v-3ce546b8]{position:absolute;top:50%;left:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#fff;width:2.66667vw;height:2.66667vw}.update .item .i-list .i-item .left .xin[data-v-3ce546b8]{width:1.6vw;height:1.6vw;border-radius:50%;border:%?1?% solid #cacaca}',""]),t.exports=e}}]);