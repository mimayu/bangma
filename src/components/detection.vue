<template>
  <div class="detection">
    <Tabs value="name1">
        <TabPane label="基检未约" name="name1">
            <detectionList></detectionList>
        </TabPane>
        <TabPane label="基检预约" name="name2">
          <detectionList></detectionList>
        </TabPane>
        <TabPane label="基检确认" name="name3">
          <detectionList></detectionList>
        </TabPane>
        <TabPane label="基检取消" name="name4">
          <detectionList></detectionList>
        </TabPane>
    </Tabs>
    <footerNav></footerNav>

  </div>
</template>

<script>
import footerNav from './modPage/footerNav' // 引入login.vue组件
import detectionList from './modPage/detectionList' // 引入login.vue组件

export default {
  name: 'detection',
  data () {
    return {
    //   msg: '我是hello word'
    }
  },
    components: {
    'footerNav': footerNav,
    'detectionList':detectionList
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
