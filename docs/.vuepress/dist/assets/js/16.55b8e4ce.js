(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{138:function(i,t,e){"use strict";var c=e(10),n=e(89)(!0);c(c.P,"Array",{includes:function(i){return n(this,i,arguments.length>1?arguments[1]:void 0)}}),e(90)("includes")},139:function(i,t,e){"use strict";var c=e(10),n=e(141);c(c.P+c.F*e(142)("includes"),"String",{includes:function(i){return!!~n(this,i,"includes").indexOf(i,arguments.length>1?arguments[1]:void 0)}})},141:function(i,t,e){var c=e(53),n=e(17);i.exports=function(i,t,e){if(c(t))throw TypeError("String#"+e+" doesn't accept regex!");return String(n(i))}},142:function(i,t,e){var c=e(2)("match");i.exports=function(i){var t=/./;try{"/./"[i](t)}catch(e){try{return t[c]=!1,!"/./"[i](t)}catch(i){}}return!0}},192:function(i,t,e){},438:function(i,t,e){"use strict";e(192)},480:function(i,t,e){"use strict";e.r(t);e(138),e(139),e(22);var c={data:function(){return{selectList:["flower","star-fill","brush-fill","home","gift-fill","movie"],list:["clover","shamrock","flower","ice-cream","icecream","food","movie","payment","nickname","call","visible","incoming_call","previous","selection","protect","conversation","privac_open","favoriteslist","home","musiclist","cancel","edit","audio","QQ-circle-fill","wechat-fill","apple-fill","apple","phone-fill","fire","heart","linechart","down-circle","warn-fill","star-fill","star","gift-fill","discovery","alipay","warning","remind","label","clock","camera","brush-fill","gps-fill","error","loading","right","setting","left","download","thumbup","tick","false"],code:'\n         <s-icon name="shamrock"></s-icon>\n      '.replace(/^\s*/gm,"").trim()}},components:{"s-icon":e(140).a}},n=(e(438),e(1)),r=Object(n.a)(c,(function(){var i=this,t=i._self._c;return t("div",[t("s-card",{scopedSlots:i._u([{key:"code",fn:function(){return[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"vue"},[i._v(i._s(i.code))])])]},proxy:!0}])},[t("div",{staticClass:"ico-list"},i._l(i.list,(function(e,c){return t("div",{key:c,staticClass:"ico-wrapper",attrs:{title:i.selectList.includes(e)?"这里单独设置了颜色样式！":""}},[t("s-icon",{staticClass:"ico",attrs:{name:e,color:i.selectList.includes(e)?"#B02324":""}}),i._v(" "),t("div",{staticClass:"ico-name"},[i._v(i._s(e))])],1)})),0)])],1)}),[],!1,null,"d7c3fc60",null);t.default=r.exports}}]);