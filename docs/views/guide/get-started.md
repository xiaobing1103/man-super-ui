---
title: '快速上手'
---
# 快速上手

```vue
<template>
  <div id="app">
    <s-button type="primary">点击报名</s-button>
  </div>
</template>

<script>
import {Button} from 'man-super-ui'
import 'man-super-ui/dist/super.css'


export default {
  name: 'app',
  components: {
    's-button':Button
  }
}
</script>

```
<ClientOnly>
  <super-img/>
</ClientOnly>