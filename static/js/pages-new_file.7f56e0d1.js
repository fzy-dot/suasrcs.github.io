(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new_file"],{"01bb":function(t,e,a){"use strict";var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("5530")),o=r(a("730c")),i=r(a("e854")),s={name:"u-transition",data:function(){return{inited:!1,viewStyle:{},status:"",transitionEnded:!1,display:!1,classes:""}},computed:{mergeStyle:function(){var t=this.viewStyle,e=this.customStyle;return(0,n.default)((0,n.default)({transitionDuration:"".concat(this.duration,"ms"),transitionTimingFunction:this.timingFunction},uni.$u.addStyle(e)),t)}},mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default,o.default],watch:{show:{handler:function(t){t?this.vueEnter():this.vueLeave()},immediate:!0}}};e.default=s},2156:function(t,e,a){"use strict";a.r(e);var r=a("9280"),n=a("45db");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("7cb1");var i,s=a("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"13982e2f",null,!1,r["a"],i);e["default"]=l.exports},4018:function(t,e,a){var r=a("4148");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=a("4f06").default;n("0f1c5753",r,!0,{sourceMap:!1,shadowMode:!1})},4127:function(t,e,a){"use strict";var r=a("d233"),n=a("b313"),o={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},i=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(t){return i.call(t)},skipNulls:!1,strictNullHandling:!1},l=function t(e,a,n,o,i,l,u,d,c,f,v,p){var y=e;if("function"===typeof u)y=u(a,y);else if(y instanceof Date)y=f(y);else if(null===y){if(o)return l&&!p?l(a,s.encoder):a;y=""}if("string"===typeof y||"number"===typeof y||"boolean"===typeof y||r.isBuffer(y)){if(l){var h=p?a:l(a,s.encoder);return[v(h)+"="+v(l(y,s.encoder))]}return[v(a)+"="+v(String(y))]}var g,m=[];if("undefined"===typeof y)return m;if(Array.isArray(u))g=u;else{var b=Object.keys(y);g=d?b.sort(d):b}for(var x=0;x<g.length;++x){var w=g[x];i&&null===y[w]||(m=Array.isArray(y)?m.concat(t(y[w],n(a,w),n,o,i,l,u,d,c,f,v,p)):m.concat(t(y[w],a+(c?"."+w:"["+w+"]"),n,o,i,l,u,d,c,f,v,p)))}return m};t.exports=function(t,e){var a=t,i=e?r.assign({},e):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var u="undefined"===typeof i.delimiter?s.delimiter:i.delimiter,d="boolean"===typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,c="boolean"===typeof i.skipNulls?i.skipNulls:s.skipNulls,f="boolean"===typeof i.encode?i.encode:s.encode,v="function"===typeof i.encoder?i.encoder:s.encoder,p="function"===typeof i.sort?i.sort:null,y="undefined"!==typeof i.allowDots&&i.allowDots,h="function"===typeof i.serializeDate?i.serializeDate:s.serializeDate,g="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if("undefined"===typeof i.format)i.format=n["default"];else if(!Object.prototype.hasOwnProperty.call(n.formatters,i.format))throw new TypeError("Unknown format option provided.");var m,b,x=n.formatters[i.format];"function"===typeof i.filter?(b=i.filter,a=b("",a)):Array.isArray(i.filter)&&(b=i.filter,m=b);var w,j=[];if("object"!==typeof a||null===a)return"";w=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var _=o[w];m||(m=Object.keys(a)),p&&m.sort(p);for(var k=0;k<m.length;++k){var q=m[k];c&&null===a[q]||(j=j.concat(l(a[q],q,_,d,c,f?v:null,b,p,y,h,x,g)))}var P=j.join(u),O=!0===i.addQueryPrefix?"?":"";return P.length>0?O+P:""}},4148:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-a75f7a08], uni-scroll-view[data-v-a75f7a08], uni-swiper-item[data-v-a75f7a08]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\r\n/**\r\n * vue版本动画内置的动画模式有如下：\r\n * fade：淡入\r\n * zoom：缩放\r\n * fade-zoom：缩放淡入\r\n * fade-up：上滑淡入\r\n * fade-down：下滑淡入\r\n * fade-left：左滑淡入\r\n * fade-right：右滑淡入\r\n * slide-up：上滑进入\r\n * slide-down：下滑进入\r\n * slide-left：左滑进入\r\n * slide-right：右滑进入\r\n */.u-fade-enter-active[data-v-a75f7a08],\r\n.u-fade-leave-active[data-v-a75f7a08]{transition-property:opacity}.u-fade-enter[data-v-a75f7a08],\r\n.u-fade-leave-to[data-v-a75f7a08]{opacity:0}.u-fade-zoom-enter[data-v-a75f7a08],\r\n.u-fade-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95);opacity:0}.u-fade-zoom-enter-active[data-v-a75f7a08],\r\n.u-fade-zoom-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.u-fade-down-enter-active[data-v-a75f7a08],\r\n.u-fade-down-leave-active[data-v-a75f7a08],\r\n.u-fade-left-enter-active[data-v-a75f7a08],\r\n.u-fade-left-leave-active[data-v-a75f7a08],\r\n.u-fade-right-enter-active[data-v-a75f7a08],\r\n.u-fade-right-leave-active[data-v-a75f7a08],\r\n.u-fade-up-enter-active[data-v-a75f7a08],\r\n.u-fade-up-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.u-fade-up-enter[data-v-a75f7a08],\r\n.u-fade-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}.u-fade-down-enter[data-v-a75f7a08],\r\n.u-fade-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0}.u-fade-left-enter[data-v-a75f7a08],\r\n.u-fade-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}.u-fade-right-enter[data-v-a75f7a08],\r\n.u-fade-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}.u-slide-down-enter-active[data-v-a75f7a08],\r\n.u-slide-down-leave-active[data-v-a75f7a08],\r\n.u-slide-left-enter-active[data-v-a75f7a08],\r\n.u-slide-left-leave-active[data-v-a75f7a08],\r\n.u-slide-right-enter-active[data-v-a75f7a08],\r\n.u-slide-right-leave-active[data-v-a75f7a08],\r\n.u-slide-up-enter-active[data-v-a75f7a08],\r\n.u-slide-up-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-slide-up-enter[data-v-a75f7a08],\r\n.u-slide-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.u-slide-down-enter[data-v-a75f7a08],\r\n.u-slide-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-slide-left-enter[data-v-a75f7a08],\r\n.u-slide-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-slide-right-enter[data-v-a75f7a08],\r\n.u-slide-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-zoom-enter-active[data-v-a75f7a08],\r\n.u-zoom-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-zoom-enter[data-v-a75f7a08],\r\n.u-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95)}',""]),t.exports=e},4328:function(t,e,a){"use strict";var r=a("4127"),n=a("9e6a"),o=a("b313");t.exports={formats:o,parse:n,stringify:r}},"45db":function(t,e,a){"use strict";a.r(e);var r=a("a48c"),n=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"708c":function(t,e,a){"use strict";var r=a("4018"),n=a.n(r);n.a},"730c":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{show:{type:Boolean,default:uni.$u.props.transition.show},mode:{type:String,default:uni.$u.props.transition.mode},duration:{type:[String,Number],default:uni.$u.props.transition.duration},timingFunction:{type:String,default:uni.$u.props.transition.timingFunction}}};e.default=r},"7cb1":function(t,e,a){"use strict";var r=a("f8be"),n=a.n(r);n.a},"89af":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={fade:{enter:{opacity:0},"enter-to":{opacity:1},leave:{opacity:1},"leave-to":{opacity:0}},"fade-up":{enter:{opacity:0,transform:"translateY(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(100%)"}},"fade-down":{enter:{opacity:0,transform:"translateY(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(-100%)"}},"fade-left":{enter:{opacity:0,transform:"translateX(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(-100%)"}},"fade-right":{enter:{opacity:0,transform:"translateX(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(100%)"}},"slide-up":{enter:{transform:"translateY(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(100%)"}},"slide-down":{enter:{transform:"translateY(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(-100%)"}},"slide-left":{enter:{transform:"translateX(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(-100%)"}},"slide-right":{enter:{transform:"translateX(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(100%)"}},zoom:{enter:{transform:"scale(0.95)"},"enter-to":{transform:"scale(1)"},leave:{transform:"scale(1)"},"leave-to":{transform:"scale(0.95)"}},"fade-zoom":{enter:{opacity:0,transform:"scale(0.95)"},"enter-to":{opacity:1,transform:"scale(1)"},leave:{opacity:1,transform:"scale(1)"},"leave-to":{opacity:0,transform:"scale(0.95)"}}};e.default=r},9053:function(t,e,a){"use strict";a.r(e);var r=a("d8a2"),n=a("9f91");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("708c");var i,s=a("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"a75f7a08",null,!1,r["a"],i);e["default"]=l.exports},9280:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var r={uTransition:a("9053").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container bg",style:{backgroundImage:"url("+t.imageUrl("bg.png")+")"}},[a("v-uni-view",{staticClass:"vip_list flex_column bg"},t._l(t.scrollList,(function(e,r){return a("v-uni-view",{key:r},[e.show?a("u-transition",{attrs:{show:e.show,mode:"fade-up",duration:"1000"}},[a("v-uni-view",{staticClass:"transition"},[a("v-uni-view",{staticClass:"vip_list_bold flex"},[t._v("用户:"),a("v-uni-text",[t._v(t._s(e.title))]),t._v("购买获得"),a("v-uni-text",[t._v(t._s(e.value))]),t._v("99.99%纯金"),a("v-uni-text",[t._v(t._s(e.type))])],1)],1)],1):t._e()],1)})),1),a("v-uni-view",{staticClass:"main"},t._l(t.productData,(function(e,r){return a("v-uni-view",{key:e.id},[a("v-uni-view",{staticClass:"goods_list flex",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goPage(e)}}},[a("v-uni-view",{staticClass:"left bg",style:{backgroundImage:"url("+t.imageUrl("goods"+r+".png")+")"}}),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"tit"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(0==r?"金龙币"+e.fouthRealValue:1==r?"虎年币"+e.fouthRealValue:"张健币"+e.fouthRealValue)+"枚")]),a("v-uni-view",{staticClass:"desc"},[t._v("现金"+t._s(e.secondValue)+"元")])],1),a("v-uni-view",{staticClass:"desc"},[t._v("黄金股权"+t._s(e.productCount)+"份")]),a("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goPage(e)}}},[t._v(t._s(e.price)+"元购买")])],1)],1)],1)})),1)],1)},o=[]},"9e6a":function(t,e,a){"use strict";var r=a("d233"),n=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(t,e){for(var a={},r=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,i=e.parameterLimit===1/0?void 0:e.parameterLimit,s=r.split(e.delimiter,i),l=0;l<s.length;++l){var u,d,c=s[l],f=c.indexOf("]="),v=-1===f?c.indexOf("="):f+1;-1===v?(u=e.decoder(c,o.decoder),d=e.strictNullHandling?null:""):(u=e.decoder(c.slice(0,v),o.decoder),d=e.decoder(c.slice(v+1),o.decoder)),n.call(a,u)?a[u]=[].concat(a[u]).concat(d):a[u]=d}return a},s=function(t,e,a){for(var r=e,n=t.length-1;n>=0;--n){var o,i=t[n];if("[]"===i)o=[],o=o.concat(r);else{o=a.plainObjects?Object.create(null):{};var s="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(s,10);!isNaN(l)&&i!==s&&String(l)===s&&l>=0&&a.parseArrays&&l<=a.arrayLimit?(o=[],o[l]=r):o[s]=r}r=o}return r},l=function(t,e,a){if(t){var r=a.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,l=o.exec(r),u=l?r.slice(0,l.index):r,d=[];if(u){if(!a.plainObjects&&n.call(Object.prototype,u)&&!a.allowPrototypes)return;d.push(u)}var c=0;while(null!==(l=i.exec(r))&&c<a.depth){if(c+=1,!a.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!a.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+r.slice(l.index)+"]"),s(d,e,a)}};t.exports=function(t,e){var a=e?r.assign({},e):{};if(null!==a.decoder&&void 0!==a.decoder&&"function"!==typeof a.decoder)throw new TypeError("Decoder has to be a function.");if(a.ignoreQueryPrefix=!0===a.ignoreQueryPrefix,a.delimiter="string"===typeof a.delimiter||r.isRegExp(a.delimiter)?a.delimiter:o.delimiter,a.depth="number"===typeof a.depth?a.depth:o.depth,a.arrayLimit="number"===typeof a.arrayLimit?a.arrayLimit:o.arrayLimit,a.parseArrays=!1!==a.parseArrays,a.decoder="function"===typeof a.decoder?a.decoder:o.decoder,a.allowDots="boolean"===typeof a.allowDots?a.allowDots:o.allowDots,a.plainObjects="boolean"===typeof a.plainObjects?a.plainObjects:o.plainObjects,a.allowPrototypes="boolean"===typeof a.allowPrototypes?a.allowPrototypes:o.allowPrototypes,a.parameterLimit="number"===typeof a.parameterLimit?a.parameterLimit:o.parameterLimit,a.strictNullHandling="boolean"===typeof a.strictNullHandling?a.strictNullHandling:o.strictNullHandling,""===t||null===t||"undefined"===typeof t)return a.plainObjects?Object.create(null):{};for(var n="string"===typeof t?i(t,a):t,s=a.plainObjects?Object.create(null):{},u=Object.keys(n),d=0;d<u.length;++d){var c=u[d],f=l(c,n[c],a);s=r.merge(s,f,a)}return r.compact(s)}},"9f91":function(t,e,a){"use strict";a.r(e);var r=a("01bb"),n=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},a48c:function(t,e,a){"use strict";var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("eb32"),o=(r(a("4328")),{data:function(){return{productData:[{}],state:{timeInterval:null},initData:{},arrayData:[],dynamicData:{},paramsData:{},dynamicAmount:"",PrizePool:"",setContent:"",todayBuyNum:0,barTime:null,barNum:0,scrollList:[{type:"张健币",title:"135xxxx2819",value:"2枚",show:!0},{type:"张健币",title:"138xxxx1928",value:"5枚",show:!1},{type:"张健币",title:"145xxxx2887",value:"5枚",show:!1},{type:"金龙币",title:"159xxxx8472",value:"7枚",show:!1},{type:"张健币",title:"130xxxx2819",value:"5枚",show:!1},{type:"虎年币",title:"185xxxx8472",value:"2枚",show:!1},{type:"金龙币",title:"157xxxx0135",value:"7枚",show:!1},{type:"虎年币",title:"139xxxx0442",value:"2枚",show:!1},{type:"虎年币",title:"138xxxx8686",value:"2枚",show:!1},{type:"张健币",title:"136xxxx7898",value:"5枚",show:!1},{type:"虎年币",title:"186xxxx8116",value:"2枚",show:!1},{type:"金龙币",title:"132xxxx5882",value:"7枚",show:!1},{type:"张健币",title:"186xxxx5367",value:"5枚",show:!1},{type:"金龙币",title:"150xxxx0297",value:"7枚",show:!1},{type:"张健币",title:"135xxxx5717",value:"5枚",show:!1},{type:"金龙币",title:"155xxxx6715",value:"7枚",show:!1},{type:"金龙币",title:"156xxxx4977",value:"7枚",show:!1},{type:"张健币",title:"137xxxx1101",value:"5枚",show:!1},{type:"虎年币",title:"134xxxx8558",value:"2枚",show:!1},{type:"张健币",title:"156xxxx6558",value:"5枚",show:!1},{type:"张健币",title:"180xxxx6199",value:"5枚",show:!1},{type:"张健币",title:"188xxxx4222",value:"5枚",show:!1},{type:"虎年币",title:"150xxxx4112",value:"2枚",show:!1},{type:"金龙币",title:"176xxxx1494",value:"7枚",show:!1},{type:"张健币",title:"136xxxx5044",value:"5枚",show:!1},{type:"金龙币",title:"187xxxx8966",value:"7枚",show:!1},{type:"金龙币",title:"131xxxx9151",value:"7枚",show:!1},{type:"张健币",title:"170xxxx9886",value:"5枚",show:!1},{type:"张健币",title:"138xxxx0097",value:"5枚",show:!1},{type:"虎年币",title:"186xxxx9283",value:"2枚",show:!1},{type:"虎年币",title:"157xxxx7596",value:"2枚",show:!1},{type:"张健币",title:"136xxxx6483",value:"5枚",show:!1},{type:"张健币",title:"189xxxx0955",value:"5枚",show:!1},{type:"金龙币",title:"136xxxx7706",value:"7枚",show:!1},{type:"张健币",title:"139xxxx1259",value:"5枚",show:!1},{type:"金龙币",title:"188xxxx3300",value:"7枚",show:!1},{type:"张健币",title:"133xxxx9975",value:"5枚",show:!1}]}},methods:{goKf:function(){window.location.href=this.initData.kfUrl1},scrollBar:function(){var t=this;this.barTime=setInterval((function(){t.barNum++,t.barNum==t.scrollList.length&&(t.barNum=0);for(var e=0;e<t.scrollList.length;e++)t.scrollList[e].show=!1;t.scrollList[t.barNum].show=!0}),2e3)},goPage:function(t){2!=t.type&&4!=t.type?uni.$u.route({url:"/pages/invest_buy",params:{goodsId:t.id}}):uni.showToast({title:"今日已抢购完，凌晨00:00重新开启抢购！",icon:"none"})},getInfo:function(){var t=this;(0,n.queryProduct)().then((function(e){t.productData=e.data}));var e=new Date;e.getFullYear(),e.getMonth(),e.getDate();(0,n.queryWebsite)().then((function(e){t.initData=e.data}))}},onShow:function(){clearInterval(this.barTime),this.getInfo(),this.scrollBar()},onHide:function(){clearInterval(this.barTime)}});e.default=o},b313:function(t,e,a){"use strict";var r=String.prototype.replace,n=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,n,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(t,e,a){"use strict";var r=Object.prototype.hasOwnProperty,n=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),o=function(t){var e;while(t.length){var a=t.pop();if(e=a.obj[a.prop],Array.isArray(e)){for(var r=[],n=0;n<e.length;++n)"undefined"!==typeof e[n]&&r.push(e[n]);a.obj[a.prop]=r}}return e},i=function(t,e){for(var a=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)"undefined"!==typeof t[r]&&(a[r]=t[r]);return a},s=function t(e,a,n){if(!a)return e;if("object"!==typeof a){if(Array.isArray(e))e.push(a);else{if("object"!==typeof e)return[e,a];(n.plainObjects||n.allowPrototypes||!r.call(Object.prototype,a))&&(e[a]=!0)}return e}if("object"!==typeof e)return[e].concat(a);var o=e;return Array.isArray(e)&&!Array.isArray(a)&&(o=i(e,n)),Array.isArray(e)&&Array.isArray(a)?(a.forEach((function(a,o){r.call(e,o)?e[o]&&"object"===typeof e[o]?e[o]=t(e[o],a,n):e.push(a):e[o]=a})),e):Object.keys(a).reduce((function(e,o){var i=a[o];return r.call(e,o)?e[o]=t(e[o],i,n):e[o]=i,e}),o)},l=function(t,e){return Object.keys(e).reduce((function(t,a){return t[a]=e[a],t}),t)},u=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},d=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),a="",r=0;r<e.length;++r){var o=e.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?a+=e.charAt(r):o<128?a+=n[o]:o<2048?a+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?a+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&e.charCodeAt(r)),a+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return a},c=function(t){for(var e=[{obj:{o:t},prop:"o"}],a=[],r=0;r<e.length;++r)for(var n=e[r],i=n.obj[n.prop],s=Object.keys(i),l=0;l<s.length;++l){var u=s[l],d=i[u];"object"===typeof d&&null!==d&&-1===a.indexOf(d)&&(e.push({obj:i,prop:u}),a.push(d))}return o(e)},f=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},v=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:i,assign:l,compact:c,decode:u,encode:d,isBuffer:v,isRegExp:f,merge:s}},d8a2:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.inited?a("v-uni-view",{ref:"u-transition",staticClass:"u-transition",class:t.classes,style:[t.mergeStyle],on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.noop.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[]},dfcd:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.container[data-v-13982e2f]{background-color:#201f26}.goods_list[data-v-13982e2f]{border-radius:%?20?%;background-color:rgba(53,72,116,.9);margin-bottom:%?30?%;height:%?320?%;padding:%?0?% %?10?%}.goods_list .left[data-v-13982e2f]{color:#f1ddb3;-webkit-writing-mode:tb-lr;writing-mode:tb-lr;width:%?250?%;height:%?250?%;letter-spacing:%?5?%;font-weight:700;font-size:%?40?%}.goods_list .right[data-v-13982e2f]{margin-left:%?15?%}.goods_list .right .tit[data-v-13982e2f]{margin-bottom:%?10?%;color:#f8d184}.goods_list .right .top[data-v-13982e2f]{margin:0 auto %?20?%;padding:%?20?% %?30?%;border-radius:%?20?%;background-color:rgba(0,0,0,.5);justify-content:space-between}.goods_list .right .top uni-view[data-v-13982e2f]{color:#fff}.goods_list .right .top .line[data-v-13982e2f]{height:%?30?%;width:%?1?%;background-color:#353438}.goods_list .right .flex[data-v-13982e2f]{margin-bottom:%?2?%}.goods_list .right .flex uni-view[data-v-13982e2f]:nth-child(1){margin-right:%?20?%}.goods_list .right .desc[data-v-13982e2f]{color:#fff}.goods_list .right .btn[data-v-13982e2f]{width:%?280?%;text-align:center;margin:%?30?%;border-radius:%?60?%;height:%?70?%;line-height:%?70?%;background:linear-gradient(180deg,#fcdc95,#efc168 66%,#ffdc97)}.main[data-v-13982e2f]{padding:2% %?30?%}.header_title[data-v-13982e2f]{padding-left:%?30?%;padding-right:%?30?%;background-color:#262930;justify-content:space-between}.header_title uni-view[data-v-13982e2f]:nth-child(1), .header_title uni-view[data-v-13982e2f]:nth-child(3){height:%?45?%;width:%?45?%}.header_title uni-view[data-v-13982e2f]:nth-child(2){font-size:%?35?%}.top_img_box[data-v-13982e2f]{margin:%?20?% auto;width:95.5%}.top_img_box .top_img[data-v-13982e2f]{border-radius:%?20?%;overflow:hidden;border:%?6?% solid #fdd78c}.vip_list[data-v-13982e2f]{position:relative;background-color:rgba(0,0,0,.5);height:%?80?%;text-align:center;justify-content:center}.vip_list .left_icon[data-v-13982e2f]{position:absolute;left:0;top:%?-15?%;width:%?100?%;height:%?100?%}.vip_list .vip_list_bold[data-v-13982e2f]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fcdc95}',""]),t.exports=e},e854:function(t,e,a){"use strict";var r=a("4ea4");a("99af"),a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=r(a("1da1")),o=(r(a("89af")),function(t){return{enter:"u-".concat(t,"-enter u-").concat(t,"-enter-active"),"enter-to":"u-".concat(t,"-enter-to u-").concat(t,"-enter-active"),leave:"u-".concat(t,"-leave u-").concat(t,"-leave-active"),"leave-to":"u-".concat(t,"-leave-to u-").concat(t,"-leave-active")}}),i={methods:{clickHandler:function(){this.$emit("click")},vueEnter:function(){var t=this,e=o(this.mode);this.status="enter",this.$emit("beforeEnter"),this.inited=!0,this.display=!0,this.classes=e.enter,this.$nextTick((0,n.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,uni.$u.sleep(20);case 2:t.$emit("enter"),t.transitionEnded=!1,t.$emit("afterEnter"),t.classes=e["enter-to"];case 6:case"end":return a.stop()}}),a)}))))},vueLeave:function(){var t=this;if(this.display){var e=o(this.mode);this.status="leave",this.$emit("beforeLeave"),this.classes=e.leave,this.$nextTick((function(){t.transitionEnded=!1,t.$emit("leave"),setTimeout(t.onTransitionEnd,t.duration),t.classes=e["leave-to"]}))}},onTransitionEnd:function(){this.transitionEnded||(this.transitionEnded=!0,this.$emit("leave"===this.status?"afterLeave":"afterEnter"),!this.show&&this.display&&(this.display=!1,this.inited=!1))}}};e.default=i},eb32:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.queryPrize=e.forgetPassword=e.sendSms=e.totalByUserId=e.queryCountlog=e.queryMoneylog=e.queryById=e.queryByUserId=e.queryPay=e.querySign=e.userSign=e.totalCountByType=e.withdrawQuery=e.withdrawApply=e.queryWebsite=e.buyProduct=e.querySysConfig=e.queryPageSysConfig=e.inviteFriend=e.updateTradePassword=e.updateLoginPassword=e.queryProduct=e.faceCompareByBase64=e.faceUpload=e.ossUploadByBase64=e.bankDel=e.updateByTel=e.queryByTel=e.activeTotal=e.queryActive=e.teamDetail=e.queryByParentId=e.userTeam=e.productChange=e.productTotalCount=e.periodRandom=e.changeyjjb=e.queryChangeList=e.change2=e.addBank=e.queryBank=e.userLoginout=e.userRegister=e.loginByNo=e.userLogin=void 0;var r=uni.$u.http,n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/login",t,e)};e.userLogin=n;var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/loginByNo",t,e)};e.loginByNo=o;var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/register",t,e)};e.userRegister=i;var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/logout",t,e)};e.userLoginout=s;var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/bank/query",t,e)};e.queryBank=l;var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/bank/add",t,e)};e.addBank=u;var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/product/change2",t,e)};e.change2=d;var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/product/change/query",t,e)};e.queryChangeList=c;var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/change/yjjb",t,e)};e.changeyjjb=f;var v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/prize/period/random",t,e)};e.periodRandom=v;var p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/product/total/count",t,e)};e.productTotalCount=p;var y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/product/change",t,e)};e.productChange=y;var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/team",t,e)};e.userTeam=h;var g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/admin/user/queryByParentId",t,e)};e.queryByParentId=g;var m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/teamDetail",t,e)};e.teamDetail=m;var b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/product/active/query",t,e)};e.queryActive=b;var x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/product/active/total",t,e)};e.activeTotal=x;var w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/queryById",t,e)};e.queryByTel=w;var j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/updateByTel",t,e)};e.updateByTel=j;var _=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/bank/del",t,e)};e.bankDel=_;var k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/file/ossUploadByBase64",t,e)};e.ossUploadByBase64=k;var q=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/face/faceUpload",t,e)};e.faceUpload=q;var P=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/face/faceCompareByBase64",t,e)};e.faceCompareByBase64=P;var O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/product/query",t,e)};e.queryProduct=O;var B=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/updateLoginPassword",t,e)};e.updateLoginPassword=B;var C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/updateTradePassword",t,e)};e.updateTradePassword=C;var T=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/inviteFriend",t,e)};e.inviteFriend=T;var D=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/sysparam/queryPageSysConfig",t,e)};e.queryPageSysConfig=D;var L=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/sysparam/querySysConfig",t,e)};e.querySysConfig=L;var A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/product/buy",t,e)};e.buyProduct=A;var S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/sysparam/queryWebsite",t,e)};e.queryWebsite=S;var I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/withdraw/apply",t,e)};e.withdrawApply=I;var E=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/admin/withdraw/query",t,e)};e.withdrawQuery=E;var N=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/admin/moneylog/query",t,e)};e.totalCountByType=N;var $=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/sign",t,e)};e.userSign=$;var Y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/sign/query",t,e)};e.querySign=Y;var z=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/product/pay/query",t,e)};e.queryPay=z;var U=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/siteMsg/queryByUserId",t,e)};e.queryByUserId=U;var R=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/siteMsg/queryById",t,e)};e.queryById=R;var F=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/admin/moneylog/query",t,e)};e.queryMoneylog=F;var M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/admin/countlog/query",t,e)};e.queryCountlog=M;var H=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/totalByUserId",t,e)};e.totalByUserId=H;var V=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/sendSms",t,e)};e.sendSms=V;var X=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/user/forgetPassword",t,e)};e.forgetPassword=X;var Q=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.post("/yjjb/admin/prize/query",t,e)};e.queryPrize=Q},f8be:function(t,e,a){var r=a("dfcd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=a("4f06").default;n("09d1e654",r,!0,{sourceMap:!1,shadowMode:!1})}}]);