<template>
  <div id="quote">
  <Tabs type="card">
        <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">

          <section>
            <ul class="left-box">
              <li>厨房报价</li>
              <li>卫生间</li>
              <li>卫生洁具</li>
              <li>厨房报价</li>
              <li>卫生间</li>
              <li>卫生洁具</li>
              <li>厨房报价</li>
              <li>卫生间</li>
              <li>卫生洁具</li>
              <li>厨房报价</li>
              <li>卫生间</li>
              <li>卫生洁具</li>
            </ul>
            <ul class="right-box">
              <li>

              </li>
            </ul>
          </section>
        </TabPane>
        <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
    </Tabs>
  </div>
</template>

<script>
import footerNav from '../components/modPage/footerNav'
import homePage from '../components/modPage/homePage' // 引入login.vue组件
export default {
  name: 'home',
  components: {
    'footerNav': footerNav,
    'homePage': homePage,
  },
  data(){
       return {
                tabs: 3
            }
  },
   methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
}
</script>

<style scoped lang="less">

</style>
