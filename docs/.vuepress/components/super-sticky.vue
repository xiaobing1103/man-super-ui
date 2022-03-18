<template>
   <div >
    <s-card>
      <s-sticky :offset-top="top" :offset-left="0">
        <div class="box">向下滚动~~</div>
      </s-sticky>

      <template v-slot:code>
        <pre v-highlightjs>
          <code class="vue">{{code}}</code>
          </pre>
        </template>
    </s-card>
  </div>
</template>
<script>
import Sticky from '../../../src/sticky/sticky'
export default {
  data(){
    return {
      cont:'',
      top:54,
      code: `
      <s-sticky :offset-top="top">
          <div class="box">向下滚动~</div>
        </s-sticky>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
  components:{
      's-sticky':Sticky
  }
  
}
</script>
<style lang="scss" scoped>
.box{
    width:400px;
    height: 50px;
    color: white;
    background:#409EFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
</style>

