(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{141:function(t,e,i){"use strict";var n=i(3),s=i(17),r=i(21),o=i(56),c=i(53),a=i(7),l=i(95).f,f=i(96).f,u=i(10).f,p=i(146).trim,d=n.Number,h=d,v=d.prototype,m="Number"==r(i(54)(v)),g="trim"in String.prototype,N=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var i,n,s,r=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+e}for(var o,a=e.slice(2),l=0,f=a.length;l<f;l++)if((o=a.charCodeAt(l))<48||o>s)return NaN;return parseInt(a,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof d&&(m?a((function(){v.valueOf.call(i)})):"Number"!=r(i))?o(new h(N(e)),i,d):N(e)};for(var _,y=i(8)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)s(h,_=y[I])&&!s(d,_)&&u(d,_,f(h,_));d.prototype=v,v.constructor=d,i(14)(n,"Number",d)}},146:function(t,e,i){var n=i(13),s=i(20),r=i(7),o=i(147),c="["+o+"]",a=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,e,i){var s={},c=r((function(){return!!o[t]()||"​"!="​"[t]()})),a=s[t]=c?e(u):o[t];i&&(s[i]=a),n(n.P+n.F*c,"String",s)},u=f.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(a,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},147:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},208:function(t,e,i){},209:function(t,e,i){},453:function(t,e,i){"use strict";i(208)},454:function(t,e,i){"use strict";i(209)},473:function(t,e,i){"use strict";i.r(e);i(9),i(141);var n={name:"s-sticky",props:{offsetTop:{type:Number,default:0}},data:function(){return{limitY:0,sticky:!1,top:0,left:0,g_scrollHandler:void 0,msg:""}},mounted:function(){this.init()},methods:{init:function(){this.initData(),this.addListener()},addListener:function(){this.g_scrollHandler=this.scrollHandler.bind(this),window.addEventListener("scroll",this.g_scrollHandler)},initData:function(){var t=this.$refs.stickyItem.getBoundingClientRect(),e=t.top,i=t.left;this.limitY=e-this.offsetTop,this.left=i+"px",this.top=this.offsetTop+"px"},scrollHandler:function(){window.scrollY>this.limitY?this.sticky=!0:this.sticky=!1}},beforeDestroy:function(){window.removeEventListener("scroll",this.g_scrollHandler)}},s=(i(453),i(1)),r={data:function(){return{cont:"",top:54,code:'\n      <s-sticky :offset-top="top">\n          <div class="box">向下滚动~</div>\n        </s-sticky>\n      '.replace(/^ {8}/gm,"").trim()}},components:{"s-sticky":Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"stickyItem"},[e("div",{staticClass:"slot-wrapper",class:{sticky:this.sticky},style:{top:this.top,left:this.left}},[this._t("default")],2)])}),[],!1,null,"a03e7cb2",null).exports}},o=(i(454),Object(s.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("s-card",{scopedSlots:t._u([{key:"code",fn:function(){return[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("        "),i("code",{staticClass:"vue"},[t._v(t._s(t.code))]),t._v("\n        ")])]},proxy:!0}])},[i("s-sticky",{attrs:{"offset-top":t.top,"offset-left":0}},[i("div",{staticClass:"box"},[t._v("向下滚动~~")])])],1)],1)}),[],!1,null,"16d22660",null));e.default=o.exports}}]);