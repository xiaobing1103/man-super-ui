(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(t,e,n){"use strict";var a=n(10),s=n(89)(!0);a(a.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(90)("includes")},139:function(t,e,n){"use strict";var a=n(10),s=n(141);a(a.P+a.F*n(142)("includes"),"String",{includes:function(t){return!!~s(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},141:function(t,e,n){var a=n(53),s=n(17);t.exports=function(t,e,n){if(a(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(s(t))}},142:function(t,e,n){var a=n(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,!"/./"[t](e)}catch(t){}}return!0}},208:function(t,e,n){},209:function(t,e,n){},210:function(t,e,n){},211:function(t,e,n){},212:function(t,e,n){},455:function(t,e,n){"use strict";n(208)},456:function(t,e,n){"use strict";n(209)},457:function(t,e,n){"use strict";n(210)},458:function(t,e,n){"use strict";n(211)},459:function(t,e,n){"use strict";n(212)},464:function(t,e,n){"use strict";n.r(e);n(22),n(36),n(13),n(138),n(139);var a=n(0),s={name:"s-tab",props:{value:{type:String},tabPosition:{default:"top",validator:function(t){return["top","left"].includes(t)}},test:{}},data:function(){return{eventBus:new a.a}},provide:function(){return{eventBus:this.eventBus}},mounted:function(){var t=this;this.$children.forEach((function(e){"s-tab-head"===e.$options.name&&e.$children.forEach((function(e){e.name===t.value&&t.eventBus.$emit("update:selected",t.value,e)}))})),this.eventBus.$on("update:selected",(function(e){t.$emit("input",e)})),"left"===this.tabPosition&&this.$children.forEach((function(t){t.align="s-tab-head"===t.$options.name?"left":""}))}},i=(n(455),n(1)),o=Object(i.a)(s,(function(){return(0,this._self._c)("div",{staticClass:"s-tab",class:"tab-".concat(this.tabPosition)},[this._t("default")],2)}),[],!1,null,"13efd185",null).exports,c={name:"s-tab-head",data:function(){return{align:"top"}},inject:["eventBus"],computed:{tabPosition:function(){return"tab-".concat(this.align)},headClass:function(){var t="top"===this.align?"column":"row";return"head-in-".concat(t)},itemWrapperClass:function(){var t="top"===this.align?"row":"column";return"item-in-".concat(t)},lineStyle:function(){return"top"===this.align?{width:"100px",borderBottom:"2px solid #3ba0e9"}:{height:"20px",borderLeft:"2px solid #3ba0e9"}}},mounted:function(){var t=this;this.eventBus.$on("update:selected",(function(e,n){t.$nextTick((function(){var e=t.$refs.tabHead.getBoundingClientRect(),a=n.$refs.item.getBoundingClientRect(),s=a.width,i=a.left,o=a.height,c=a.top;"top"===t.align?(t.$refs.line.style.width="".concat(s,"px"),t.$refs.line.style.left="".concat(i-e.left,"px")):(t.$refs.line.style.height="".concat(o,"px"),t.$refs.line.style.top="".concat(c-e.top,"px"))}))}))}},r=(n(456),Object(i.a)(c,(function(){var t=this._self._c;return t("div",{ref:"tabHead",staticClass:"s-tab-head",class:this.headClass},[t("div",{staticClass:"item-wrapper",class:this.itemWrapperClass},[this._t("default")],2),this._v(" "),t("div",{ref:"line",staticClass:"line",style:this.lineStyle})])}),[],!1,null,"0840b94e",null).exports),l={name:"s-tab-item",inject:["eventBus"],props:{name:{type:String},disabled:{type:Boolean}},data:function(){return{active:!1,hasIcon:!1}},created:function(){var t=this;this.eventBus.$on("update:selected",(function(e){t.active=e===t.name}))},mounted:function(){var t=this;this.$children.forEach((function(e){t.hasIcon="s-icon"===e.$options.name}))},methods:{changeSelect:function(){this.disabled||this.eventBus.$emit("update:selected",this.name,this)}}},u=(n(457),Object(i.a)(l,(function(){var t=this._self._c;return t("div",{ref:"item",staticClass:"s-tab-item",class:{active:this.active,disabled:this.disabled},on:{click:this.changeSelect}},[[this._t("icon")],this._v(" "),t("div",{class:{hasIcon:this.hasIcon}},[this._t("default")],2)],2)}),[],!1,null,"71188c86",null).exports),b={name:"s-tab-body"},d=(n(458),Object(i.a)(b,(function(){return(0,this._self._c)("div",{staticClass:"s-tab-body"},[this._t("default")],2)}),[],!1,null,"874663fc",null).exports),m={name:"s-tab-pane",inject:["eventBus"],props:{name:{type:String}},data:function(){return{visible:!0}},created:function(){var t=this;this.eventBus.$on("update:selected",(function(e){t.visible=e===t.name}))}},h={data:function(){return{selected1:"裁决之地",selected:"herb",code1:'\n         <s-tab v-model="selected">\n        <s-tab-head>\n          <s-tab-item name="x" disabled>麦林炮手</s-tab-item>\n          <s-tab-item name="bee">\n             法外狂徒\n            <s-icon name="heart" slot="icon" color="#BF827E"></s-icon>\n          </s-tab-item>\n          <s-tab-item name="flower">\n             暗夜猎手\n            <s-icon name="flower" color="plum" slot="icon"></s-icon>\n          </s-tab-item>\n          <s-tab-item name="grass">\n            放逐之刃\n            <s-icon name="shamrock" color="#409EFF" slot="icon"></s-icon>\n          </s-tab-item>\n          <s-tab-item name="herb">\n            光辉女郎\n            <s-icon name="clover" color="#E6A4A5" slot="icon"></s-icon>\n          </s-tab-item>\n          <s-tab-item name="tree">\n            荒漠屠夫\n             <s-icon name="star-fill" color="#E3CBA8" slot="icon"></s-icon>\n          </s-tab-item>\n        </s-tab-head>\n        <s-tab-body>\n          <s-tab-pane name="x"></s-tab-pane>\n          <s-tab-pane name="bee">他与崔斯特曾是赌局搭档，后被崔斯特出卖给祖安高官后入狱，越狱后誓要向昔日的盟友—崔斯特复仇。格雷福斯拥有非常独特的霰弹枪机制和装弹机制，他的普攻可以造成范围伤害并且能被阻挡，在使用完两发霰弹之后需要一定的时间装填子弹，他的技能爆发非常可观，是一个持续输出和爆发能力兼备的AD英雄。</s-tab-pane>\n          <s-tab-pane name="flower">她是一个伤害十分恐怖的偏中后期的射手，拥有着整个游戏中最强大的伤害方式（百分比真实伤害），这就决定了薇恩是个不折不扣的前排杀手，不管对方的坦克有多少血量多高护甲，在薇恩面前都无法支撑；除此之外薇恩还拥有很高的机动性，是一个非常能秀的英雄。薇恩的前期较弱，如何安稳的渡过对线期是一个很大的问题。而且十分考验玩家对于输出手法的把控；对玩家的要求极高。且自身防御力非常低下，没有任何AOE的手段，是一个需要大量时间才能玩好的英雄</s-tab-pane>\n          <s-tab-pane name="grass">一度担任诺克萨斯军队剑士长的锐雯，曾通过自己信念的力量和野蛮的行事风格在军中不断晋升，因此获得了一把传奇的符文之刃和自己的战团作为奖赏——然而在艾欧尼亚的前线上，锐雯对祖国的信仰遭到了考验，并最终粉碎。她切断了与帝国的一切关联，在分崩离析的世界中找寻自己的归宿，即使纷飞的谣言传说着诺克萨斯已经重铸。如今，锁链加身的她被迫回到诺克萨斯，即将在曾经的祖国接受审判……</s-tab-pane>\n          <s-tab-pane name="herb">拉克珊娜·冕卫，是一位年轻而强大的光魔法师。她出身自德玛西亚，一个魔法被视为禁忌的国家。只要一提起魔法，人们总是带着恐惧和怀疑。于是在成长过程中，她一直被迫隐瞒自己的力量，时刻提心吊胆，害怕一旦被人发现之后就要面临放逐的命运。但是，她也慢慢学会了接受这份神奇的力量，暗中为她的家园做出贡献。</s-tab-pane>\n          <s-tab-pane name="tree">雷克顿是一位来自恕瑞玛炙热沙漠中的面目可怖、野蛮狂怒的飞升者。他曾经是帝国最受尊敬的英雄，带领军队取得过无数次胜利。然而，在太阳圆盘陨落以后，雷克顿被困在了沙漠之下，慢慢地，在世界变迁的同时，雷克顿丧失了理智。现在他重获自由，但却被一个执念吞噬：找到并杀死他的哥哥内瑟斯，因为他坚信是内瑟斯害他经受了数百年黑暗束缚。</s-tab-pane>\n        </s-tab-body>\n      </s-tab>\n        '.replace(/^ {8}/gm,"").trim(),code2:'\n        <s-tab tab-position="left" v-model="selected1">\n        <s-tab-head>\n          <s-tab-item name="暗影岛">\n            暗影岛\n          </s-tab-item>\n          <s-tab-item name="裁决之地">裁决之地</s-tab-item>\n          <s-tab-item name="艾欧尼亚">艾欧尼亚</s-tab-item>\n        </s-tab-head>\n        <s-tab-body>\n          <s-tab-pane name="暗影岛">\n            <p>这片被诅咒的土地原本养育着一个高贵、开悟的文明，它的盟友和使节将此处称为福光岛。然而，在一千多年前，一场前所未有的魔法灾难撕碎了物质与精神领域之间的屏障，让二者发生了融合效应……顷刻间就毁灭了所有生命。\n如今，一团恶毒的黑雾永久地萦绕着这片群岛，就连土地本身也被恶毒的巫术污染。任何凡人如果胆敢踏上这片凄凉的海岸，就会被渐渐偷走生命力，继而引来永不知足、猎食成性的死灵。\n那些在黑雾中殒命的灵魂会遭受诅咒，永世栖息于这片噩梦般的土地。更可怕的是，暗影岛的力量每一年都在逐渐变强，让最强大的幽灵在符文之地上侵扰得越来越远。</p>\n          </s-tab-pane>\n          <s-tab-pane name="裁决之地">\n            <p>在凶险海域环绕中，诸多同盟省份在一片被称为“初生之土”的庞大群岛上组成了艾欧尼亚。追寻万物的平衡是这里长久以来的文化基调，因此物质与精神领域之间的界限也在这里若有若无，在野外的森林和山脉中尤为如此。虽然这片土地上的魔力可能变幻无常，栖息着的生物也可能危险而神奇，但在过去的几百年中，艾欧尼亚的居民一直过着富足的生活。习武的僧院、各省的民兵团、甚至就连艾欧尼亚这片土地本身，都已经足够保护当地的居民。但那一切都在十二年前结束了，因为那一年，诺克萨斯出兵攻打了“初生之土”。一望无际的帝国大军在艾欧尼亚肆虐，艾欧尼亚人经过多年的苦战才以巨大的代价击败敌人。如今的艾欧尼亚正处于脆弱的和平中。对于那场战争的不同应对，让这片土地产生了分裂——有一些团体，例如朔极的武僧和均衡教派，想要回归与世隔绝的和平以及田园牧歌的传统。另一些比较激进的派系，例如纳沃利兄弟会和影流，则主张对这片土地的魔法进行军事化改造，建立一个统一的国家，强大到足以对诺克萨斯实施打击报复。艾欧尼亚的命运正悬在微妙的平衡中，几乎无人愿意使其倒向任何一边，但所有人都能感到脚下的土地在蠢动不安。</p>\n          </s-tab-pane>\n          <s-tab-pane name="班德尔城">\n            <p>约德尔人的故乡究竟在何处？对于这个问题人们众说纷纭，不过有一些凡人声称自己穿过了无形的传送门，进入了超越物质领域的奇异魔法世界。他们都描述了一个魔法奔放的地方，鲁莽蛮横的人会被无数的奇观带入歧途，最后迷失在梦境中，永远无法返回……\n在班德尔城，任何约德尔人以外的种族都会感到自己的全部感官得到了强化。城中所见无不色彩斑斓，食物与水的味道让人经年沉醉——只要尝过一次，就终身难忘。这里日光溶溶，春水不休，每一株植物都会结出累累硕果。或许这些描述中有一部分属实，或许全都是假的——因为没有任何两个讲述者能够对所见所闻达成一致。</p>\n          </s-tab-pane>\n        </s-tab-body>\n      </s-tab>\n      '.replace(/^ {8}/gm,"").trim()}},components:{"s-tab":o,"s-tab-head":r,"s-tab-item":u,"s-tab-body":d,"s-tab-pane":Object(i.a)(m,(function(){return(0,this._self._c)("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}]},[this._t("default")],2)}),[],!1,null,"00f8caec",null).exports,"s-icon":n(140).a}},p=(n(459),Object(i.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("基础用法")]),t._v(" "),e("s-card",{scopedSlots:t._u([{key:"code",fn:function(){return[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",{staticClass:"vue"},[t._v(t._s(t.code1))])])]},proxy:!0}])},[e("s-tab",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[e("s-tab-head",[e("s-tab-item",{attrs:{name:"x",disabled:""}},[t._v("麦林炮手")]),t._v(" "),e("s-tab-item",{attrs:{name:"bee"}},[t._v("\n             法外狂徒\n            "),e("s-icon",{attrs:{slot:"icon",name:"heart",color:"#BF827E"},slot:"icon"})],1),t._v(" "),e("s-tab-item",{attrs:{name:"flower"}},[t._v("\n             暗夜猎手\n            "),e("s-icon",{attrs:{slot:"icon",name:"flower",color:"plum"},slot:"icon"})],1),t._v(" "),e("s-tab-item",{attrs:{name:"grass"}},[t._v("\n            放逐之刃\n            "),e("s-icon",{attrs:{slot:"icon",name:"shamrock",color:"#409EFF"},slot:"icon"})],1),t._v(" "),e("s-tab-item",{attrs:{name:"herb"}},[t._v("\n            光辉女郎\n            "),e("s-icon",{attrs:{slot:"icon",name:"clover",color:"#E6A4A5"},slot:"icon"})],1),t._v(" "),e("s-tab-item",{attrs:{name:"tree"}},[t._v("\n            荒漠屠夫\n             "),e("s-icon",{attrs:{slot:"icon",name:"star-fill",color:"#E3CBA8"},slot:"icon"})],1)],1),t._v(" "),e("s-tab-body",[e("s-tab-pane",{attrs:{name:"x"}}),t._v(" "),e("s-tab-pane",{attrs:{name:"bee"}},[t._v("他与崔斯特曾是赌局搭档，后被崔斯特出卖给祖安高官后入狱，越狱后誓要向昔日的盟友—崔斯特复仇。格雷福斯拥有非常独特的霰弹枪机制和装弹机制，他的普攻可以造成范围伤害并且能被阻挡，在使用完两发霰弹之后需要一定的时间装填子弹，他的技能爆发非常可观，是一个持续输出和爆发能力兼备的AD英雄。")]),t._v(" "),e("s-tab-pane",{attrs:{name:"flower"}},[t._v("她是一个伤害十分恐怖的偏中后期的射手，拥有着整个游戏中最强大的伤害方式（百分比真实伤害），这就决定了薇恩是个不折不扣的前排杀手，不管对方的坦克有多少血量多高护甲，在薇恩面前都无法支撑；除此之外薇恩还拥有很高的机动性，是一个非常能秀的英雄。薇恩的前期较弱，如何安稳的渡过对线期是一个很大的问题。而且十分考验玩家对于输出手法的把控；对玩家的要求极高。且自身防御力非常低下，没有任何AOE的手段，是一个需要大量时间才能玩好的英雄")]),t._v(" "),e("s-tab-pane",{attrs:{name:"grass"}},[t._v("一度担任诺克萨斯军队剑士长的锐雯，曾通过自己信念的力量和野蛮的行事风格在军中不断晋升，因此获得了一把传奇的符文之刃和自己的战团作为奖赏——然而在艾欧尼亚的前线上，锐雯对祖国的信仰遭到了考验，并最终粉碎。她切断了与帝国的一切关联，在分崩离析的世界中找寻自己的归宿，即使纷飞的谣言传说着诺克萨斯已经重铸。如今，锁链加身的她被迫回到诺克萨斯，即将在曾经的祖国接受审判……")]),t._v(" "),e("s-tab-pane",{attrs:{name:"herb"}},[t._v("拉克珊娜·冕卫，是一位年轻而强大的光魔法师。她出身自德玛西亚，一个魔法被视为禁忌的国家。只要一提起魔法，人们总是带着恐惧和怀疑。于是在成长过程中，她一直被迫隐瞒自己的力量，时刻提心吊胆，害怕一旦被人发现之后就要面临放逐的命运。但是，她也慢慢学会了接受这份神奇的力量，暗中为她的家园做出贡献。")]),t._v(" "),e("s-tab-pane",{attrs:{name:"tree"}},[t._v("雷克顿是一位来自恕瑞玛炙热沙漠中的面目可怖、野蛮狂怒的飞升者。他曾经是帝国最受尊敬的英雄，带领军队取得过无数次胜利。然而，在太阳圆盘陨落以后，雷克顿被困在了沙漠之下，慢慢地，在世界变迁的同时，雷克顿丧失了理智。现在他重获自由，但却被一个执念吞噬：找到并杀死他的哥哥内瑟斯，因为他坚信是内瑟斯害他经受了数百年黑暗束缚。")])],1)],1)],1),t._v(" "),e("h3",[t._v("垂直标签")]),t._v(" "),e("s-card",{scopedSlots:t._u([{key:"code",fn:function(){return[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",{staticClass:"vue"},[t._v(t._s(t.code2))])])]},proxy:!0}])},[e("p",[t._v("当前选中的标签是： "),e("span",{staticClass:"highlight"},[t._v(t._s(t.selected1))])]),t._v(" "),e("s-tab",{attrs:{"tab-position":"left"},model:{value:t.selected1,callback:function(e){t.selected1=e},expression:"selected1"}},[e("s-tab-head",[e("s-tab-item",{attrs:{name:"暗影岛"}},[t._v("\n            暗影岛\n          ")]),t._v(" "),e("s-tab-item",{attrs:{name:"裁决之地"}},[t._v("裁决之地")]),t._v(" "),e("s-tab-item",{attrs:{name:"艾欧尼亚"}},[t._v("艾欧尼亚")])],1),t._v(" "),e("s-tab-body",[e("s-tab-pane",{attrs:{name:"暗影岛"}},[e("p",[t._v("这片被诅咒的土地原本养育着一个高贵、开悟的文明，它的盟友和使节将此处称为福光岛。然而，在一千多年前，一场前所未有的魔法灾难撕碎了物质与精神领域之间的屏障，让二者发生了融合效应……顷刻间就毁灭了所有生命。\n如今，一团恶毒的黑雾永久地萦绕着这片群岛，就连土地本身也被恶毒的巫术污染。任何凡人如果胆敢踏上这片凄凉的海岸，就会被渐渐偷走生命力，继而引来永不知足、猎食成性的死灵。\n那些在黑雾中殒命的灵魂会遭受诅咒，永世栖息于这片噩梦般的土地。更可怕的是，暗影岛的力量每一年都在逐渐变强，让最强大的幽灵在符文之地上侵扰得越来越远。")])]),t._v(" "),e("s-tab-pane",{attrs:{name:"裁决之地"}},[e("p",[t._v("在凶险海域环绕中，诸多同盟省份在一片被称为“初生之土”的庞大群岛上组成了艾欧尼亚。追寻万物的平衡是这里长久以来的文化基调，因此物质与精神领域之间的界限也在这里若有若无，在野外的森林和山脉中尤为如此。虽然这片土地上的魔力可能变幻无常，栖息着的生物也可能危险而神奇，但在过去的几百年中，艾欧尼亚的居民一直过着富足的生活。习武的僧院、各省的民兵团、甚至就连艾欧尼亚这片土地本身，都已经足够保护当地的居民。但那一切都在十二年前结束了，因为那一年，诺克萨斯出兵攻打了“初生之土”。一望无际的帝国大军在艾欧尼亚肆虐，艾欧尼亚人经过多年的苦战才以巨大的代价击败敌人。如今的艾欧尼亚正处于脆弱的和平中。对于那场战争的不同应对，让这片土地产生了分裂——有一些团体，例如朔极的武僧和均衡教派，想要回归与世隔绝的和平以及田园牧歌的传统。另一些比较激进的派系，例如纳沃利兄弟会和影流，则主张对这片土地的魔法进行军事化改造，建立一个统一的国家，强大到足以对诺克萨斯实施打击报复。艾欧尼亚的命运正悬在微妙的平衡中，几乎无人愿意使其倒向任何一边，但所有人都能感到脚下的土地在蠢动不安。")])]),t._v(" "),e("s-tab-pane",{attrs:{name:"班德尔城"}},[e("p",[t._v("约德尔人的故乡究竟在何处？对于这个问题人们众说纷纭，不过有一些凡人声称自己穿过了无形的传送门，进入了超越物质领域的奇异魔法世界。他们都描述了一个魔法奔放的地方，鲁莽蛮横的人会被无数的奇观带入歧途，最后迷失在梦境中，永远无法返回……\n在班德尔城，任何约德尔人以外的种族都会感到自己的全部感官得到了强化。城中所见无不色彩斑斓，食物与水的味道让人经年沉醉——只要尝过一次，就终身难忘。这里日光溶溶，春水不休，每一株植物都会结出累累硕果。或许这些描述中有一部分属实，或许全都是假的——因为没有任何两个讲述者能够对所见所闻达成一致。")])])],1)],1)],1)],1)}),[],!1,null,"5ade24ae",null));e.default=p.exports}}]);