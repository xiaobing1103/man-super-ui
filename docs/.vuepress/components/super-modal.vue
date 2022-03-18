<template>
  <div>
    <s-card>
       <s-button @click="clickHandler" icon="gift-fill">点我</s-button>
      <s-button @click="clickHandler2" icon="discovery" style="margin-left:30px;background:#91AD70" >点我</s-button>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </s-card>
  </div>
</template>
<script>
import Vue from "vue";
import ModalPlugin from "../../../src/plugins/modal";
import Button from '../../../src/button/button'
import VueHighlightJS from 'vue-highlightjs'

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

Vue.use(ModalPlugin);
export default {
  data() {
    return {
      code: `
        <s-button @click="clickHandler" icon="gift-fill">点我</s-button>
        import Vue from "vue";
        import ModalPlugin from "../../../src/plugins/modal";

        Vue.use(ModalPlugin);
        export default {
          methods: {
            clickHandler () {
              let func1 = () => {
                this.$toast({
                  message: '你点击了确认',
                  duration: 1500,
                  type:'success' })
              }
              let func2 = () => {
                this.$toast({
                  message: '你点击了取消',
                  duration: 1500 })
              }
              let func3 = () => {
                this.$toast({
                  message: '你没有触发任何操作',
                  duration: 2500,
                  type:'error'})
              }
              this.$modal({
                title: '模态框',
                content: '模态框内容',
                btnConfig: {
                  'confirmText': '确认',
                  'confirmCallback': func1,
                  'cancelText': '取消',
                  'cancelCallback': func2,
                  'cancelModalCallback': func3
                } 
              })
          }
        }
    `.replace(/^ {8}/gm, "").trim()
    };
  },
  components:{
    's-button':Button
  },
  methods: {
     clickHandler () {
      let func1 = () => {
        this.$toast({
          message: '你点击了确认',
          duration: 1500,
          type:'success'})
      }
      let func2 = () => {
        this.$toast({
          message: '你点击了取消',
          duration: 1500 })
      }
      let func3 = () => {
        this.$toast({
          message: '你没有触发任何操作',
          duration: 2500,
          type: 'error' })
      }
      this.$modal({
        title: '模态框',
        content: '模态框内容?',
        btnConfig: {
          'confirmText': '确认',
          'confirmCallback': func1,
          'cancelText': '取消',
          'cancelCallback': func2,
          'cancelModalCallback': func3
        } 
      })
    },
     clickHandler2 () {
      let func3 = () => {
        this.$toast({
          message: '你没有触发任何操作',
          duration: 2500,
          type: 'error' })
      }
      this.$modal({
        title: '更换颜色的模态框内容',
        content: '<p style="color:#ffa500;margin:0;padding:0">模态框内容?</p>',
        enableContentHtml: true,
        btnConfig: {
          'confirmText': '确认',
          'confirmCallback': ()=>{
            this.$toast({
              message: '你点击了确认',
              duration: 1500 })
            },
            'cancelModalCallback': func3
        } 
      })
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

