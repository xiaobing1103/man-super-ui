<template>
  <div>
    <h3>基础用法</h3>
    <s-card>
      <s-collapse v-model="selected1" style="max-width:600px">
        <s-collapse-item title="迅捷斥候·提莫" name="1">
          <div>他是负责瓦罗兰大陆的班德尔城安全的侦察兵首领，也是班德尔城最富盛名的特种部队之一“主舰斥候队”一员，因为长相可爱深受玩家喜爱，伴随的还有极高的阵亡率，以及成名的提百万称号。</div>
        </s-collapse-item>
        <s-collapse-item title="黑暗之女·安妮" name="2">
          <div>安妮是一个拥有超高爆发能力的AP英雄，QWR的高伤害能够瞬间让敌人蒸发；又加上被动技能“嗜火”的存在，再搭配其他技能，安妮就可以拥有各种各样的控制手段，是游戏中不可多得的输出与控制兼备的AP法师。</div>
        </s-collapse-item>
        <s-collapse-item title="影流之镰·凯隐" name="3">
          <div>凯隐是修炼暗影魔法的佼佼者。他战斗的意义，是为了实现自己真正的命运。有朝一日能够率领影流教派，开创艾欧尼亚霸业的新世代。。</div>
        </s-collapse-item>
        <s-collapse-item title="虚空之女·卡莎" name="4">
          <div>卡莎在虚空中受困多年，靠着自己强大的意志，与一身由虚空生物化成的皮肤艰难地共存。
            卡莎可以利用虚空索敌来追踪落单的敌人，然后使用大招突进再配合无情瓢泼的艾卡西亚暴雨，迅速完成击杀</div>
        </s-collapse-item>
      </s-collapse>
      <p>你当前选择了&nbsp;<span class="highlight">{{ selected1 }}</span></p>

      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{ code1 }}</code></pre>
      </template>
    </s-card>



    <h3 style="margin-top:60px">手风琴效果</h3>
    <s-card>
      <s-collapse v-model="selected2" accordion style="max-width:600px;">
        <s-collapse-item title="均衡教派" name="1">
          <div>
            均衡教派是一个以维护艾欧尼亚神圣平衡为己任的团体。教派的信徒们行走于精神与物质两个世界之中，协调两界之间的冲突，而且有必要的时候，也会使用强制力介入。在对诺克萨斯战争期间，均衡教派的人被迫离流离失所，而夺走他们自古传承的庙堂的，正是曾经的均衡信徒，劫
          </div>
        </s-collapse-item>
        <s-collapse-item title="艾欧尼亚" name="2">
          <div>
            在凶险海域环绕中，诸多同盟省份在一片被称为“初生之土”的庞大群岛上组成了艾欧尼亚。追寻万物的平衡是这里长久以来的文化基调，因此物质与精神领域之间的界限也在这里若有若无，在野外的森林和山脉中尤为如此。虽然这片土地上的魔力可能变幻无常，栖息着的生物也可能危险而神奇，但在过去的几百年中，艾欧尼亚的居民一直过着富足的生活。习武的僧院、各省的民兵团、甚至就连艾欧尼亚这片土地本身，都已经足够保护当地的居民。但那一切都在十二年前结束了，因为那一年，诺克萨斯出兵攻打了“初生之土”。一望无际的帝国大军在艾欧尼亚肆虐，艾欧尼亚人经过多年的苦战才以巨大的代价击败敌人。如今的艾欧尼亚正处于脆弱的和平中。对于那场战争的不同应对，让这片土地产生了分裂——有一些团体，例如朔极的武僧和均衡教派，想要回归与世隔绝的和平以及田园牧歌的传统。另一些比较激进的派系，例如纳沃利兄弟会和影流，则主张对这片土地的魔法进行军事化改造，建立一个统一的国家，强大到足以对诺克萨斯实施打击报复。艾欧尼亚的命运正悬在微妙的平衡中，几乎无人愿意使其倒向任何一边，但所有人都能感到脚下的土地在蠢动不安
          </div>
        </s-collapse-item>
        <s-collapse-item title="诺克萨斯" name="3">
          <div>诺克萨斯是一个威名震天的强大帝国。在诺克萨斯境外的人眼中，它拥兵自重、血腥野蛮、欲壑难填，但对于那些看透它好战外表的人来说，这里的社会氛围实际上超乎寻常地包容。人民的所有特长和天赋都会得到尊重和受到培养的机会。
            古代诺克西人是残暴的野蛮人部落联合，他们占领了一座古城，并将其建成了现在的帝国中心。当时的诺克萨斯面临着来自各方的威胁，所以他们与所有敌人都激烈交锋，睚眦必报，不胜不归，最终让帝国的版图连年扩张。这一段艰难求生的历史让诺克萨斯人从骨子里感到骄傲自豪，也因此重视力量胜过一切。当然，力量可以通过许多不同的形式表现。
            无论社会立场、身世背景、祖国故乡和个人财富如何，任何人都可能在诺克萨斯获得权力、地位、和尊敬，只要他们能够表现出必要的能力。能够使用魔法的人会被高看一眼，帝国甚至会主动寻觅这类人，让他们的特殊天赋得到锻炼并最高效地为帝国所用。
            虽然诺克萨斯有贤能统治的政治理想，但老一辈贵族家庭依然在帝国的心脏把持着相当大的权力，有人担心诺克萨斯最大的威胁并非来自敌人，而是来自内部</div>
        </s-collapse-item>
      </s-collapse>
      <p>你当前选择了&nbsp;<span class="highlight">{{ selected2 }}</span></p>

      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{ code2 }}</code></pre>
      </template>
    </s-card>

  </div>
</template>
<script>
import Collapse from "../../../src/collapse/collapse";
import CollapseItem from "../../../src/collapse/collapse-item";
export default {
  data() {
    return {
      selected1: ["1", "2"],
      selected2: "3",
      code1: `
        <s-collapse v-model="selected1" style="max-width:600px">
          <s-collapse-item title="迅捷斥候·提莫" name="1">
            <div>他是负责瓦罗兰大陆的班德尔城安全的侦察兵首领，也是班德尔城最富盛名的特种部队之一“主舰斥候队”一员，因为长相可爱深受玩家喜爱，伴随的还有极高的阵亡率，以及成名的提百万称号。</div>
          </s-collapse-item>
          <s-collapse-item title="黑暗之女·安妮" name="2">
            <div>安妮是一个拥有超高爆发能力的AP英雄，QWR的高伤害能够瞬间让敌人蒸发；又加上被动技能“嗜火”的存在，再搭配其他技能，安妮就可以拥有各种各样的控制手段，是游戏中不可多得的输出与控制兼备的AP法师。</div>
          </s-collapse-item>
          <s-collapse-item title="影流之镰·凯隐" name="3">
            <div>凯隐是修炼暗影魔法的佼佼者。他战斗的意义，是为了实现自己真正的命运。有朝一日能够率领影流教派，开创艾欧尼亚霸业的新世代。。</div>
          </s-collapse-item>
          <s-collapse-item title="虚空之女·卡莎" name="4">
            <div>卡莎在虚空中受困多年，靠着自己强大的意志，与一身由虚空生物化成的皮肤艰难地共存。
卡莎可以利用虚空索敌来追踪落单的敌人，然后使用大招突进再配合无情瓢泼的艾卡西亚暴雨，迅速完成击杀</div>
          </s-collapse-item>
        </s-collapse>
       `.replace(/^ {8}/gm, "").trim(),
      code2: `
        <s-collapse v-model="selected2" accordion style="max-width:600px;">
        <s-collapse-item title="均衡教派" name="1">
          <div>
            均衡教派是一个以维护艾欧尼亚神圣平衡为己任的团体。教派的信徒们行走于精神与物质两个世界之中，协调两界之间的冲突，而且有必要的时候，也会使用强制力介入。在对诺克萨斯战争期间，均衡教派的人被迫离流离失所，而夺走他们自古传承的庙堂的，正是曾经的均衡信徒，劫
          </div>
        </s-collapse-item>
        <s-collapse-item title="艾欧尼亚" name="2">
          <div>
            在凶险海域环绕中，诸多同盟省份在一片被称为“初生之土”的庞大群岛上组成了艾欧尼亚。追寻万物的平衡是这里长久以来的文化基调，因此物质与精神领域之间的界限也在这里若有若无，在野外的森林和山脉中尤为如此。虽然这片土地上的魔力可能变幻无常，栖息着的生物也可能危险而神奇，但在过去的几百年中，艾欧尼亚的居民一直过着富足的生活。习武的僧院、各省的民兵团、甚至就连艾欧尼亚这片土地本身，都已经足够保护当地的居民。但那一切都在十二年前结束了，因为那一年，诺克萨斯出兵攻打了“初生之土”。一望无际的帝国大军在艾欧尼亚肆虐，艾欧尼亚人经过多年的苦战才以巨大的代价击败敌人。如今的艾欧尼亚正处于脆弱的和平中。对于那场战争的不同应对，让这片土地产生了分裂——有一些团体，例如朔极的武僧和均衡教派，想要回归与世隔绝的和平以及田园牧歌的传统。另一些比较激进的派系，例如纳沃利兄弟会和影流，则主张对这片土地的魔法进行军事化改造，建立一个统一的国家，强大到足以对诺克萨斯实施打击报复。艾欧尼亚的命运正悬在微妙的平衡中，几乎无人愿意使其倒向任何一边，但所有人都能感到脚下的土地在蠢动不安
          </div>
        </s-collapse-item>
        <s-collapse-item title="诺克萨斯" name="3">
          <div>诺克萨斯是一个威名震天的强大帝国。在诺克萨斯境外的人眼中，它拥兵自重、血腥野蛮、欲壑难填，但对于那些看透它好战外表的人来说，这里的社会氛围实际上超乎寻常地包容。人民的所有特长和天赋都会得到尊重和受到培养的机会。
            古代诺克西人是残暴的野蛮人部落联合，他们占领了一座古城，并将其建成了现在的帝国中心。当时的诺克萨斯面临着来自各方的威胁，所以他们与所有敌人都激烈交锋，睚眦必报，不胜不归，最终让帝国的版图连年扩张。这一段艰难求生的历史让诺克萨斯人从骨子里感到骄傲自豪，也因此重视力量胜过一切。当然，力量可以通过许多不同的形式表现。
            无论社会立场、身世背景、祖国故乡和个人财富如何，任何人都可能在诺克萨斯获得权力、地位、和尊敬，只要他们能够表现出必要的能力。能够使用魔法的人会被高看一眼，帝国甚至会主动寻觅这类人，让他们的特殊天赋得到锻炼并最高效地为帝国所用。
            虽然诺克萨斯有贤能统治的政治理想，但老一辈贵族家庭依然在帝国的心脏把持着相当大的权力，有人担心诺克萨斯最大的威胁并非来自敌人，而是来自内部</div>
        </s-collapse-item>
      </s-collapse>
       `.replace(/^ {8}/gm, "").trim()
    };

  },
  components: {
    "s-collapse": Collapse,
    "s-collapse-item": CollapseItem
  }
};
</script>
<style lang="scss" scoped>
.highlight {
  color: #3ba0e9;
  font-weight: bold;
}
</style>