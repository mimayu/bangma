<template>
  <div id="quote">
    <Tabs type="card">
      <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">
        <section class="list-box">
          <ul class="left-box">
            <li v-for="item in goods">{{item}}</li>
          </ul>
          <ul class="right-box">
            <li v-for="item in details">
              <h3>卫生间</h3>
              <section class="info">
                <h4>立邦底材体系之墙面涂刷基层界面剂及造毛处理</h4>
                <p>单价：￥25   单位：m</p>
                <span class="price">小计
                  <b class="red" v-show="item.count > 0">{{getSinglePrice(item.price,item.count)}}</b>
                  <b class="red" v-show="item.count <= 0">0</b>
                </span>
                <section class="price-edit">
                  <a class="minus" @click="minusCart(item)">-</a>
                  <span>{{item.count}}</span>
                  <a class="add" @click="addCart(item)">+</a>
                </section>
              </section>
              </li>
            </ul>
          </section>
        </TabPane>
        <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
        <div class="footer"> 
          工程总价：<b>￥1200</b>
          <a>保存并打印</a>
        </div>
    </Tabs>
  </div>
</template>

<script>
import { getQutoe } from '@/server';
import footerNav from '../components/modPage/footerNav'
import homePage from '../components/modPage/homePage' // 引入login.vue组件
export default {
  name: 'quotation',
  components: {
    'footerNav': footerNav,
    'homePage': homePage,
  },
  created() {
    this.getQuote();
  },
  data(){
    return {
      tabs: 1,
      goods: ['厨房报价', '卫生间', '卫生洁具', '厨房报价', '卫生间', '卫生洁具', '厨房报价', '卫生间', '卫生洁具', '厨房报价', '卫生间', '卫生洁具'],
      details: [{
        'title': '卫生间',
        'brief': '立邦底材体系之墙面涂刷基层界面剂及造毛处理',
        'price': '25',
        'count': 0
      }]
    }
  },
  methods: {
    handleTabsAdd () {
        this.tabs ++;
    },
    getQuote() {
      let params = {
        iCustomerId: 1,
        iMode: 1
      }
      getQutoe(params).then(
        res => {
          console.log('res', res);
        }
      )
    },
    addCart(item) {
      item.count ++;
    },
    minusCart(item) {
      if(item.count == 0) {
        return;
      }
      item.count --;
    },
    getSinglePrice(price, count) {
      console.log(price, count)
      return price * count
    },
    getTotalPrice(price, count) {
      console.log(price, count)
      return price * count
    }
  }
}
</script>

<style scoped lang="less">
.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{border:0!important;}
.list-box{
  display:flex;
  // li{position:relative;}
}
.left-box{
  width:100px;
  li{
    height:60px; line-height:60px;font-size: 16px; text-align:center;
    color: #393837;background: #F7F8F9;border-bottom:1px solid #fff;
    &.active{
              color: #1E97FF;background: #fff;
            }
    }
}
.right-box{
  li{margin-bottom:15px;margin-left:10px}
}
h3{
  background: #F6F6F6;height:30px;line-height:30px;margin-bottom:10px;
}
.price-edit{
  position:absolute;right:10px; width:105px;bottom:0;
  // display:flex;
  a{
    flex:1;width:23px;height:23px; border-radius:13px; text-align:center;
    line-height:18px;border:2px solid #F7F8F9;padding:0;display:inline-block;    vertical-align: middle;
  }
  span{
    flex:2;font-size:12px; color:#000; background:#F7F8F9;border-radius:13px;     vertical-align: middle;
    text-align:center;line-height:23px;display:inline-block;padding:0 10px;
    }
  .add{
    background:#1E97FF;color:#fff;
  }
  .minus{
    color:gray;
  }
}
.price{font-size: 16px;color: #FF5C12;}
.info{
  position:relative;padding:10px ;
  &:before{
    width:5px;display:inline-block;content:"";position:absolute;left:0;top:0;
    background: #1E97FF;height:100%;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
  }
}
.footer{
  background:#333; color:#fff; font-size:13px;position:relative;
  position:fixed;left:0;bottom:0;width:100%;height:50px;line-height:50px; text-indent:15px;
  a{
    position:absolute;background: #FF5C12;width:130px;text-align:center; color:#fff; font-size:18px;
    right:0;
  }
}
</style>
