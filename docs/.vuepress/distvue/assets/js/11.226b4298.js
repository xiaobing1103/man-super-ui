(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{139:function(e,t,i){"use strict";var s=i(13),n=i(97)(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(98)("includes")},140:function(e,t,i){"use strict";var s=i(13),n=i(144);s(s.P+s.F*i(145)("includes"),"String",{includes:function(e){return!!~n(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},144:function(e,t,i){var s=i(55),n=i(20);e.exports=function(e,t,i){if(s(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(e))}},145:function(e,t,i){var s=i(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[s]=!1,!"/./"[e](t)}catch(e){}}return!0}},178:function(e,t,i){},179:function(e,t,i){},180:function(e,t,i){},419:function(e,t,i){"use strict";i(178)},420:function(e,t,i){"use strict";i(179)},421:function(e,t,i){"use strict";i(180)},465:function(e,t,i){"use strict";i.r(t);i(9);var s=i(12),n=i(0),l={name:"s-collapse",props:{value:{default:function(){return[]},type:[String,Array]},accordion:{type:Boolean}},data:function(){return{eventBus:new n.a}},provide:function(){return{eventBus:this.eventBus}},mounted:function(){var e=this;this.eventBus.$emit("update:selected",this.value),this.eventBus.$on("update:addSelected",(function(t){var i="string"==typeof e.value?[e.value]:Object(s.a)(e.value);e.accordion?i=[t]:i.push(t),e.$emit("input",e.accordion?t:i),e.eventBus.$emit("update:selected",i)})),this.eventBus.$on("update:removeSelected",(function(t){var i="string"==typeof e.value?[e.value]:Object(s.a)(e.value);if(e.accordion)t===e.value&&e.$emit("input","");else{var n=i.indexOf(t);i.splice(n,1),e.$emit("input",i),e.eventBus.$emit("update:selected",i)}}))}},a=(i(419),i(1)),c=Object(a.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"collapse"},[this._t("default")],2)}),[],!1,null,"49782f49",null).exports,o=(i(16),i(139),i(140),i(142)),r={name:"s-collapse-item",props:{title:{type:String,required:!0},name:{type:String,required:!0}},components:{"s-icon":o.a},inject:["eventBus"],computed:{icoClass:function(){return{"ico-active":this.visible}}},data:function(){return{visible:!1}},mounted:function(){var e=this;this.eventBus.$on("update:selected",(function(t){t.includes(e.name)?e.visible=!0:e.visible=!1}))},methods:{addSelectItem:function(){this.eventBus.$emit("update:addSelected",this.name)},removeSelectItem:function(){this.eventBus.$emit("update:removeSelected",this.name)},showPane:function(){this.addSelectItem()},closePane:function(){this.removeSelectItem()},toggle:function(){this.visible=!this.visible,this.visible?this.showPane():this.closePane()}}},d=(i(420),{data:function(){return{selected1:["1","2"],selected2:"3",code1:'\n        <s-collapse v-model="selected1" style="width:600px">\n          <s-collapse-item title="香蕉 Banana" name="1">\n            <div>香蕉是淀粉质丰富的有益水果。</div>\n          </s-collapse-item>\n          <s-collapse-item title="菠萝 Pineapple" name="2">\n            <div>菠萝果实品质优良，营养丰富，含有大量的果糖，葡萄糖，维生素B、C，磷，柠檬酸和蛋白酶等物质。</div>\n          </s-collapse-item>\n          <s-collapse-item title="葡萄 Grape" name="3">\n            <div>成熟的浆果中葡萄含糖量高达10%-30%，以葡萄糖为主。</div>\n          </s-collapse-item>\n          <s-collapse-item title="柠檬 Lemon" name="4">\n            <div>柠檬富含维生素C、糖类、钙、磷、铁、维生素B1、维生素B2、烟酸、奎宁酸、柠檬酸、苹果酸、橙皮苷、柚皮苷、香豆精、高量钾元素和低量钠元素等，对人体十分有益。</div>\n          </s-collapse-item>\n        </s-collapse>\n       '.replace(/^ {8}/gm,"").trim(),code2:'\n        <s-collapse v-model="selected2" accordion style="width:600px;">\n          <s-collapse-item title="丰城秀吉" name="1">\n            <div>（1537年3月17日-1598年9月18日）日本战国时代、安土桃山时代大名、天下人，著名政治家，继室町幕府之后，首次以“天下人”的称号统一日本的战国三杰之一。本是足轻（下级步兵），后因侍奉织田信长而崛起。</div>\n          </s-collapse-item>\n          <s-collapse-item title="德川家康" name="2">\n            <div>（1543年1月31日-1616年6月1日）江户幕府第一代征夷大将军；丰臣秀吉死后，在关原合战中率领东军战胜西军，确定了霸权。庆长八年（1603年）受封为征夷大将军，在江户开创幕府。</div>\n          </s-collapse-item>\n          <s-collapse-item title="织田信长" name="3">\n            <div>（1534年6月23日-1582年6月21日）织田信长于永禄十一年（1568年）至天正十年（1582年）间推翻了名义上管治日本逾200年的室町幕府，并使从应仁之乱起持续百年以上的战国乱世步向终结。织田信长被日本民众评选为“2014年日本人最喜爱的历史人物第一名”。</div>\n          </s-collapse-item>\n        </s-collapse>\n       '.replace(/^ {8}/gm,"").trim()}},components:{"s-collapse":c,"s-collapse-item":Object(a.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"item"},[i("div",{staticClass:"header",on:{click:e.toggle}},[e._v("\n      "+e._s(e.title)+"\n      "),i("div",{staticClass:"ico",class:e.icoClass},[i("s-icon",{attrs:{name:"right"}})],1)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"body"},[e._t("default")],2)])}),[],!1,null,"1d5adf0c",null).exports}}),u=(i(421),Object(a.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v("基础用法")]),e._v(" "),i("s-card",{scopedSlots:e._u([{key:"code",fn:function(){return[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"vue"},[e._v(e._s(e.code1))])])]},proxy:!0}])},[i("s-collapse",{staticStyle:{"max-width":"600px"},model:{value:e.selected1,callback:function(t){e.selected1=t},expression:"selected1"}},[i("s-collapse-item",{attrs:{title:"迅捷斥候·提莫",name:"1"}},[i("div",[e._v("他是负责瓦罗兰大陆的班德尔城安全的侦察兵首领，也是班德尔城最富盛名的特种部队之一“主舰斥候队”一员，因为长相可爱深受玩家喜爱，伴随的还有极高的阵亡率，以及成名的提百万称号。")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"黑暗之女·安妮",name:"2"}},[i("div",[e._v("安妮是一个拥有超高爆发能力的AP英雄，QWR的高伤害能够瞬间让敌人蒸发；又加上被动技能“嗜火”的存在，再搭配其他技能，安妮就可以拥有各种各样的控制手段，是游戏中不可多得的输出与控制兼备的AP法师。")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"影流之镰·凯隐",name:"3"}},[i("div",[e._v("凯隐是修炼暗影魔法的佼佼者。他战斗的意义，是为了实现自己真正的命运。有朝一日能够率领影流教派，开创艾欧尼亚霸业的新世代。。")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"虚空之女·卡莎",name:"4"}},[i("div",[e._v("卡莎在虚空中受困多年，靠着自己强大的意志，与一身由虚空生物化成的皮肤艰难地共存。\n卡莎可以利用虚空索敌来追踪落单的敌人，然后使用大招突进再配合无情瓢泼的艾卡西亚暴雨，迅速完成击杀")])])],1),e._v(" "),i("p",[e._v("你当前选择了 "),i("span",{staticClass:"highlight"},[e._v(e._s(e.selected1))])])],1),e._v(" "),i("h3",{staticStyle:{"margin-top":"60px"}},[e._v("手风琴效果")]),e._v(" "),i("s-card",{scopedSlots:e._u([{key:"code",fn:function(){return[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"vue"},[e._v(e._s(e.code2))])])]},proxy:!0}])},[i("s-collapse",{staticStyle:{"max-width":"600px"},attrs:{accordion:""},model:{value:e.selected2,callback:function(t){e.selected2=t},expression:"selected2"}},[i("s-collapse-item",{attrs:{title:"均衡教派",name:"1"}},[i("div",[e._v("均衡教派是一个以维护艾欧尼亚神圣平衡为己任的团体。教派的信徒们行走于精神与物质两个世界之中，协调两界之间的冲突，而且有必要的时候，也会使用强制力介入。在对诺克萨斯战争期间，均衡教派的人被迫离流离失所，而夺走他们自古传承的庙堂的，正是曾经的均衡信徒，劫")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"艾欧尼亚",name:"2"}},[i("div",[e._v("在凶险海域环绕中，诸多同盟省份在一片被称为“初生之土”的庞大群岛上组成了艾欧尼亚。追寻万物的平衡是这里长久以来的文化基调，因此物质与精神领域之间的界限也在这里若有若无，在野外的森林和山脉中尤为如此。虽然这片土地上的魔力可能变幻无常，栖息着的生物也可能危险而神奇，但在过去的几百年中，艾欧尼亚的居民一直过着富足的生活。习武的僧院、各省的民兵团、甚至就连艾欧尼亚这片土地本身，都已经足够保护当地的居民。但那一切都在十二年前结束了，因为那一年，诺克萨斯出兵攻打了“初生之土”。一望无际的帝国大军在艾欧尼亚肆虐，艾欧尼亚人经过多年的苦战才以巨大的代价击败敌人。如今的艾欧尼亚正处于脆弱的和平中。对于那场战争的不同应对，让这片土地产生了分裂——有一些团体，例如朔极的武僧和均衡教派，想要回归与世隔绝的和平以及田园牧歌的传统。另一些比较激进的派系，例如纳沃利兄弟会和影流，则主张对这片土地的魔法进行军事化改造，建立一个统一的国家，强大到足以对诺克萨斯实施打击报复。艾欧尼亚的命运正悬在微妙的平衡中，几乎无人愿意使其倒向任何一边，但所有人都能感到脚下的土地在蠢动不安")])]),e._v(" "),i("s-collapse-item",{attrs:{title:"诺克萨斯",name:"3"}},[i("div",[e._v("诺克萨斯是一个威名震天的强大帝国。在诺克萨斯境外的人眼中，它拥兵自重、血腥野蛮、欲壑难填，但对于那些看透它好战外表的人来说，这里的社会氛围实际上超乎寻常地包容。人民的所有特长和天赋都会得到尊重和受到培养的机会。\n古代诺克西人是残暴的野蛮人部落联合，他们占领了一座古城，并将其建成了现在的帝国中心。当时的诺克萨斯面临着来自各方的威胁，所以他们与所有敌人都激烈交锋，睚眦必报，不胜不归，最终让帝国的版图连年扩张。这一段艰难求生的历史让诺克萨斯人从骨子里感到骄傲自豪，也因此重视力量胜过一切。当然，力量可以通过许多不同的形式表现。\n无论社会立场、身世背景、祖国故乡和个人财富如何，任何人都可能在诺克萨斯获得权力、地位、和尊敬，只要他们能够表现出必要的能力。能够使用魔法的人会被高看一眼，帝国甚至会主动寻觅这类人，让他们的特殊天赋得到锻炼并最高效地为帝国所用。\n虽然诺克萨斯有贤能统治的政治理想，但老一辈贵族家庭依然在帝国的心脏把持着相当大的权力，有人担心诺克萨斯最大的威胁并非来自敌人，而是来自内部")])])],1),e._v(" "),i("p",[e._v("你当前选择了 "),i("span",{staticClass:"highlight"},[e._v(e._s(e.selected2))])])],1)],1)}),[],!1,null,"69e4a4b3",null));t.default=u.exports}}]);