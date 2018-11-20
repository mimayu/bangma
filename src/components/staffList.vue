<template>
 
  <div class="roster">
    <dl class="">
      <dt>D</dt>
        <dd><span class="name">董春华</span> 13817527029 <span class="arrow-pic"><img  src="../assets/img/Copy2x.png"></span></dd>
      <dt>L</dt>
        <dd><span class="name">董春华</span> 13817527029 <span class="arrow-pic"><img  src="../assets/img/Copy2x.png"></span></dd>
        <dd><span class="name">董春华</span> 13817527029 <span class="arrow-pic"><img  src="../assets/img/Copy2x.png"></span></dd>
    </dl>
  </div>

</template>

<script>

export default {
  name: 'record',
  data () {
    return {
      // msg: '我是hello word'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .roster dt,.roster dd{
    border-bottom: solid 1px #C6C6C6; padding-left: 10px;
  }
  .roster dt{
      color: #9C9C9C; font-size: 12px; line-height: 16px;  
  }
   .roster dd{
      color: #191F25; font-size: 16px; line-height: 44px; 
      .name{ display: inline-block; margin-right:20px; }
      .arrow-pic{ display: inline-block;  float: right; margin-right:10px; }
      .arrow-pic img{width: 8px; height: 14px;}
   }
</style>
