(window.webpackJsonp=window.webpackJsonp||[]).push([[16,24],{159:function(e,a,o){},165:function(e,a,o){"use strict";o(159)},178:function(e,a,o){},213:function(e,a,o){"use strict";o.r(a);o(36),o(15),o(5);var c={name:"super-color",props:{list:{type:Array}},data:function(){return{isOpen:!1}},mounted:function(){this.addFanDot()},watch:{isOpen:function(e){var a=this;Array.from(this.$refs.fan.children).forEach((function(o,c){if(e){var n=150/a.list.length*c;o.style.transform="rotate(".concat(n-73,"deg)")}else o.style.transform="none"}))}},methods:{selectColor:function(e){this.$emit("selectColor",e)},addFanDot:function(){var e=this,a=document.createElement("div");a.style.cssText="height:14px;width:14px;background:#fff;border-radius:50%;position:absolute;bottom:4px;left:8px",this.$refs.fan.lastChild.appendChild(a),a.addEventListener("click",(function(){e.isOpen=!e.isOpen}))},getItemStyle:function(e,a){this.list.length;return{backgroundColor:e,transformOrigin:"10px 140px",zIndex:a}}}},n=(o(165),o(1)),l=Object(n.a)(c,(function(){var e=this,a=e._self._c;return a("div",{ref:"fan",staticClass:"fan"},e._l(e.list,(function(o,c){return a("div",{key:c,staticClass:"item",style:e.getItemStyle(o.color,c),on:{click:function(a){return e.selectColor(o)}}})})),0)}),[],!1,null,"bae776be",null);a.default=l.exports},419:function(e,a,o){"use strict";o(178)},472:function(e,a,o){"use strict";o.r(a);o(5);var c=o(213),n=[{color:"#DC9FB4",cnName:"撫子",jpName:"NADESHIKO"},{color:"#E16B8C",cnName:"紅梅",jpName:"KOHBAI"},{color:"#8E354A",cnName:"蘇芳",jpName:"SUOH"},{color:"#F8C3CD",cnName:"退紅",jpName:"TAIKOH"},{color:"#F4A7B9",cnName:"一斥染",jpName:"IKKONZOME"},{color:"#64363C",cnName:"桑染",jpName:"KUWAZOME"},{color:"#F596AA",cnName:"桃",jpName:"MOMO"},{color:"#B5495B",cnName:"苺",jpName:"ICHIGO"},{color:"#E87A90",cnName:"薄紅",jpName:"USUBENI"},{color:"#D05A6E",cnName:"今様",jpName:"IMAYOH"},{color:"#DB4D6D",cnName:"中紅",jpName:"NAKABENI"},{color:"#FEDFE1",cnName:"桜",jpName:"SAKURA"}],l=[{color:"#BC9F77",cnName:"白茶",jpName:"SHIRACHA"},{color:"#876633",cnName:"媚茶",jpName:"KOBICHA"},{color:"#C18A26",cnName:"黄唐茶",jpName:"KIGARACHA"},{color:"#FFB11B",cnName:"山吹",jpName:"YAMABUKI"},{color:"#D19826",cnName:"山吹茶",jpName:"YAMABUKICHA"},{color:"#DDA52D",cnName:"櫨染",jpName:"HAJIZOME"},{color:"#C99833",cnName:"桑茶",jpName:"UWACHA"},{color:"#F9BF45",cnName:"玉子",jpName:"TAMAGO"},{color:"#DCB879",cnName:"白橡",jpName:"SHIROTSURUBAMI"},{color:"#BA9132",cnName:"黄橡",jpName:"KITSURUBAMI"},{color:"#E8B647",cnName:"玉蜀黍",jpName:"TAMAMOROKOSHI"},{color:"#F7C242",cnName:"花葉",jpName:"HANABA"}],r=[{color:"#A5A051",cnName:"鶸茶",jpName:"HIWACHA"},{color:"#BEC23F",cnName:"鶸",jpName:"HIWA"},{color:"#6C6A2D",cnName:"鶯",jpName:"UGUISU"},{color:"#939650",cnName:"柳茶",jpName:"YANAGICHA"},{color:"#838A2D",cnName:"苔",jpName:"KOKE"},{color:"#B1B479",cnName:"麹塵",jpName:"KIKUJIN"},{color:"#616138",cnName:"璃寛茶",jpName:"RIKANCHA"},{color:"#4B4E2A",cnName:"藍媚茶",jpName:"AIKOBICHA"},{color:"#5B622E",cnName:"海松",jpName:"MIRU"},{color:"#4D5139",cnName:"千歳茶",jpName:"SENSAICHA"},{color:"#89916B",cnName:"梅幸茶",jpName:"BAIKOCHA"},{color:"#91AD70",cnName:"柳染",jpName:"YANAGIZOME"}],t=[{color:"#5DAC81",cnName:"若竹",jpName:"WAKATAKE"},{color:"#36563C",cnName:"千歳緑",jpName:"CHITOSEMIDORI"},{color:"#227D51",cnName:"緑, MIDORI",jpName:"緑, MIDORI"},{color:"#A8D8B9",cnName:"白緑",jpName:"BYAKUROKU"},{color:"#6A8372",cnName:"老竹",jpName:"OITAKE"},{color:"#2D6D4B",cnName:"木賊",jpName:"TOKUSA"},{color:"#465D4C",cnName:"御納戸茶",jpName:"ONANDOCHA"},{color:"#24936E",cnName:"緑青",jpName:"ROKUSYOH"},{color:"#86A697",cnName:"錆青磁",jpName:"SABISEIJI"},{color:"#00896C",cnName:"青竹",jpName:"AOTAKE"},{color:"#20604F",cnName:"虫襖",jpName:"MUSHIAO"},{color:"#00AA90",cnName:"青緑",jpName:"AOMIDORI"}],N=[{color:"#81C7D4",cnName:"水",jpName:"MIZU"},{color:"#33A6B8",cnName:"浅葱",jpName:"ASAGI"},{color:"#0D5661",cnName:"藍",jpName:"AI"},{color:"#0089A7",cnName:"新橋",jpName:"SHINBASHI"},{color:"#336774",cnName:"錆御納戸",jpName:"SABIONANDO"},{color:"#1E88A8",cnName:"花浅葱",jpName:"HANAASAGI"},{color:"#577C8A",cnName:"舛花",jpName:"MASUHANA"},{color:"#58B2DC",cnName:"空",jpName:"SORA"},{color:"#2B5F75",cnName:"熨斗目花",jpName:"NOSHIMEHANA"},{color:"#3A8FB7",cnName:"千草",jpName:"CHIGUSA"},{color:"#7DB9DE",cnName:"勿忘草",jpName:"WASURENAGUSA"},{color:"#51A8DD",cnName:"群青",jpName:"GUNJYO"}],m=[{color:"#7B90D2",cnName:"紅碧",jpName:"BENIMIDORI"},{color:"#6E75A4",cnName:"藤鼠",jpName:"FUJINEZUMI"},{color:"#8B81C3",cnName:"藤",jpName:"FUJI"},{color:"#70649A",cnName:"二藍",jpName:"FUTAAI"},{color:"#9B90C2",cnName:"楝",jpName:"OUCHI"},{color:"#8A6BBE",cnName:"藤紫",jpName:"FUJIMURASAKI"},{color:"#6A4C9C",cnName:"桔梗",jpName:"KIKYO"},{color:"#8F77B5",cnName:"紫苑",jpName:"SHION"},{color:"#B28FCE",cnName:"薄",jpName:"USU"},{color:"#986DB2",cnName:"半",jpName:"HASHITA"},{color:"#77428D",cnName:"江戸紫",jpName:"EDOMURASAKI"},{color:"#B481BB",cnName:"紅藤",jpName:"BENIFUJI"}],s={name:"super-color",data:function(){return{display:{cnName:"桜",jpName:"super",color:"#FEDFE1"},value:"",list1:n,list2:l,list3:r,list4:t,list5:N,list6:m}},mounted:function(){var e=this.$refs;[e.fan1,e.fan2,e.fan3,e.fan4,e.fan5,e.fan6].forEach((function(e,a){setTimeout((function(){e.isOpen=!0}),1200*a)}))},methods:{changeDisplay:function(e){this.display=e}},components:{"super-fan":c.default}},i=(o(419),o(1)),p=Object(i.a)(s,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"color-wrapper"},[a("div",{staticClass:"palette"},[a("div",{staticStyle:{height:"50px",width:"100%"}},[e._v(" 点击扇子上的颜色，还有下方白色按钮可以折叠的哦~~")]),e._v(" "),a("div",{staticClass:"row"},[a("super-fan",{ref:"fan1",attrs:{list:e.list1},on:{selectColor:e.changeDisplay}}),e._v(" "),a("super-fan",{ref:"fan2",attrs:{list:e.list2},on:{selectColor:e.changeDisplay}})],1),e._v(" "),a("div",{staticClass:"row"},[a("super-fan",{ref:"fan3",attrs:{list:e.list3},on:{selectColor:e.changeDisplay}}),e._v(" "),a("super-fan",{ref:"fan4",attrs:{list:e.list4},on:{selectColor:e.changeDisplay}})],1),e._v(" "),a("div",{staticClass:"row"},[a("super-fan",{ref:"fan5",attrs:{list:e.list5},on:{selectColor:e.changeDisplay}}),e._v(" "),a("super-fan",{ref:"fan6",attrs:{list:e.list6},on:{selectColor:e.changeDisplay}})],1)]),e._v(" "),a("div",{staticClass:"introduction",style:{backgroundColor:e.display.color,transition:"1.5s"}},[a("div",{staticClass:"color-cn"},[e._v(e._s(e.display.cnName))]),e._v(" "),a("div",{staticClass:"color-jp"},[e._v(e._s(e.display.jpName))]),e._v(" "),a("div",{staticClass:"color-value"},[e._v(e._s(e.display.color))])])])}),[],!1,null,"04f0486c",null);a.default=p.exports}}]);