(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-rich-detail"],{"240f":function(e,t,a){"use strict";var r;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-layout",[[e.CertsData?a("v-uni-view",{class:e.deviceType},[a("v-uni-view",{staticClass:"fixed"},[a("app-index-head",{attrs:{shareTitle:e.CertsData.name,bannerData:e.CertsData,isDetailPage:!0,shareImg:e.CertsData.cover_pic||e.CertsData.centre_pic||e.CertsData.file_url||e.CertsData.centre_url,modal:e.modal,type:e.type,noShowSearch:!1}})],1),a("app-product-detail",{attrs:{show:!0,detail:e.CertsData},on:{"on-select":function(t){arguments[0]=t=e.$handleEvent(t),e.handlePopupImage.apply(void 0,arguments)}}})],1):e._e()],[e.showImage?a("movable-popup",{attrs:{showImage:e.showImage,showImageUrl:e.showImageUrl},on:{"close-iamge":function(t){arguments[0]=t=e.$handleEvent(t),e.showImage=!1}}}):e._e()]],2)},n=[]},"5a27":function(e,t,a){"use strict";a.r(t);var r=a("f949"),i=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},bffc:function(e,t,a){"use strict";a.r(t);var r=a("240f"),i=a("5a27");for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);var s,u=a("f0c5"),d=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);t["default"]=d.exports},f949:function(e,t,a){"use strict";(function(e){a("7a82");var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ac1f"),a("5319");var i=r(a("c7eb")),n=r(a("1da1")),s=r(a("6439")),u=r(a("142e")),d=r(a("62e7")),o={components:{appIndexHead:s.default,appProductDetail:u.default,MovablePopup:d.default},data:function(){return{index:0,type:"",id:"",CertsData:{},showImage:!1,showImageUrl:""}},onLoad:function(e){var t=this;return(0,n.default)((0,i.default)().mark((function a(){return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.index=e.index,t.type=e.type,t.id=e.id,t.getDetail(e.id,e.type);case 4:case"end":return a.stop()}}),a)})))()},computed:{modal:function(){switch(this.type){case"Products":return this._moduleIndex,"product";case"Figures":return this.getModuleIndex("SJT"),"figures";case"Rendering":return this.getModuleIndex("XGT"),"rendering";case"Certs":return this.getModuleIndex("ZZZS"),"certificate";case"Publicity":return this.getModuleIndex("PPXC"),"publicity"}}},methods:{handlePopupImage:function(e){this.showImage=!0,this.showImageUrl=e},getDetailUrl:function(e){var t="";switch(e){case"Figures":t="home/getFiguresDetail";break;case"Rendering":t="home/getRenderingDetail";break;case"Publicity":t="home/getPublicityDetail";break;case"Products":t="home/getProductsDateil";break;case"Certs":t="home/getCertsDetail";break}return t},getDetail:function(t,a){var r=this;return(0,n.default)((0,i.default)().mark((function n(){var s,u;return(0,i.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=r.getDetailUrl(a),e("log",s," at pages/detail/rich-detail.vue:97"),i.next=4,r.$store.dispatch(s,{id:t});case 4:u=i.sent,200==u.data.code?(r.CertsData=u.data.data,r.CertsData.details=r.CertsData.details&&r.CertsData.details.replace(/\<img/gi,'<img style="max-width:100%"'),uni.setNavigationBarTitle({title:r.CertsData.name+"详情"}),e("log",r.CertsData," at pages/detail/rich-detail.vue:108")):r.$utils.showMsg(u.data.code,u.data.msg);case 6:case"end":return i.stop()}}),n)})))()},getDetailName:function(e){var t={0:"门板详情"};return t[e]}}};t.default=o}).call(this,a("0de9")["log"])}}]);