<template>
  <div class="allUser">
    <filtrate></filtrate>
    <detectionList></detectionList>
    <!-- <h1>{{ msg }}</h1> -->
    <footerNav></footerNav>

  </div>
</template>

<script>
import footerNav from "./modPage/footerNav"; // 引入页脚
import filtrate from "./modPage/filtrate"; // 筛选
import detectionList from "./modPage/detectionList"; // 引入用户列表

export default {
  name: "allUser",
  data() {
    return {
      // msg: '我是hello word'
      a: "1"
    };
  },
  created: function() {
    this.getCompanyInfo();
    // this.fetchData();
  },
  components: {
    filtrate: filtrate,
    detectionList: detectionList,
    footerNav: footerNav
  },
  methods: {
    aa() {
      console.log("22");
    },
    getCompanyInfo() {
      let scope = this;
      // header("Access-Control-Allow-Origin:*");
      axios
        .get("http://crm.fanxinfuwu.com/ajax/my/?account_uid=2&iStatus=1")
        // .header('content-type')
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(111)

          console.log(error);
          //  console.log(error.response.headers);
        });
    },
    getImg: function() {
      var that = this;
      this.$http({
        //调用接口
        method: "GET",
        url: "http://crm.fanxinfuwu.com/ajax/my/?account_uid=2&iStatus=1" //this指data
      }).then(
        function(response) {
          //接口返回数据
          // this.imgList=response.data;
        },
        function(error) {}
      );
    },
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      getPost('http://crm.fanxinfuwu.com/ajax/my/?account_uid=2&iStatus=1', (err, get) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allUser {
  background-color: #f6f6f6;
}
.header_btn {
  height: 44px;
  line-height: 44px;
  background-color: #f6f6f6;
  padding: 0 10px;
}
.header_btn img {
  width: 14px;
  height: 7px;
}
.header_btn .search {
  float: right;
}
.header_btn .search img {
  width: 15px;
  height: 16px;
}
.order {
  background: #fff;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
