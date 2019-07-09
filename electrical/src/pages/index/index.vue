<template>
  <div>
    <div class="top-ipt">
      <img src="../../../static/images/search.png" alt />
    </div>
    <div class="top-nav">
      <scroll-view scroll-x class="scroll-header">
        <span>今日推荐</span>
        <span>今日推荐</span>
        <span>今日推荐</span>
        <span>今日推荐</span>
        <span>今日推荐</span>
      </scroll-view>
    </div>
    <card></card>
    <div class="main-sift">
      <div class="main-sift-box">
        <div class="main-sift-left">
          <h1>精选好物</h1>
          <span class="main-sift-span"></span>
          <span>等你来抢</span>
        </div>
      </div>
      <div class="main-sift-dl-box">
        <div class="main-sift-dl">
          <div class="main-sift-dl-img"></div>
          <div class="main-sift-dl-text">
            <p>54454ffdgfdgfdgdfgfdgdfgdfg5464646</p>
            <ul>
              <li>包邮</li>
              <li>包税</li>
            </ul>
            <div class="main-sift-money">
              <span class="main-sift-money1">$</span>
              <h1>40.8</h1>
              <span class="main-sift-money2">$35.44</span>
              <img src="../../../static/images/黄金会员-v1@2x.png" alt />
              <div>赚￥3.82</div>
            </div>
          </div>
        </div>
        <div class="main-sift-dl">
          <div class="main-sift-dl-img"></div>
          <div class="main-sift-dl-text">
            <p>544545464646</p>
            <ul>
              <li>包邮</li>
              <li>包税</li>
            </ul>
            <div class="main-sift-money">
              <span class="main-sift-money1">$</span>
              <h1>40.8</h1>
              <span class="main-sift-money2">$35.44</span>
              <img src="../../../static/images/黄金会员-v1@2x.png" alt />
              <div>赚￥3.82</div>
            </div>
          </div>
        </div>
        <div class="main-sift-dl">
          <div class="main-sift-dl-img"></div>
          <div class="main-sift-dl-text">
            <p>544545464646</p>
            <ul>
              <li>包邮</li>
              <li>包税</li>
            </ul>
            <div class="main-sift-money">
              <span class="main-sift-money1">$</span>
              <h1>40.8</h1>
              <span class="main-sift-money2">$35.44</span>
              <img src="../../../static/images/黄金会员-v1@2x.png" alt />
              <div>赚￥3.82</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import products from "@/components/products";
export default {
  data() {
    return {};
  },

  components: { card ,products},



  methods: {
    handletab(){
      console.log(1),
      wx.navigateTo({
        url:'pages/classify/main'
      })
    }
  },

  created() {}
};
</script>

<style scoped>
.top-ipt {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
.top-ipt img {
  height: 30px;
  line-height: 30px;
  width: 94%;
}
.top-nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 3%;
}

.scroll-header {
  display: flex;
  white-space: nowrap;
}
.scroll-header span {
  height: 50px;
  width: 74px;
  display: inline-block;
}

.container {
  flex: 1;
}
/*第二功能模块*/
.section-two {
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #fff;
}

.top-img {
  width: 100%;
  margin-top: 4%;
  padding-left: 3%;
}
.top-top {
  display: flex;
}
.top-left {
  width: 40%;
  height: 196px;
  background: lawngreen;
}
.top-right {
  width: 52%;
  height: 196px;
  margin-left: 1%;
}
.top-right div {
  width: 100%;
  height: 48%;
  background: red;
}
.top-right div:nth-child(2) {
  width: 100%;
  height: 48%;
  background: red;
  margin-top: 3%;
}
.top-bottom {
  width: 94%;
  height: 110px;
  background: antiquewhite;
  /* padding-left: 3%; */
  border-radius: 20px;
  margin-top: 1%;
}
.top-right-img {
  margin-top: 0px;
}

.main-sift-every h2 {
  color: #e16982;
}
.main-sift-dl-box {
  width: 100%;
  /* display: flex; */
  padding-left: 3%;
}
.main-sift-dl {
  width: 100%;
  display: flex;
  height: 143px;
  margin-top: 2%;
}
.main-sift-dl-img {
  width: 34%;
  height: 136px;
  background: red;
}
.main-sift-dl-text {
  width: 60%;
  margin-left: 2%;
}
.main-sift-dl-text p {
  font-size: 18px;
  width: 100%;
  word-wrap: break-word;
  word-break: normal;
  /* flex-wrap: wrap; */
}
.main-sift-dl-text ul {
  display: flex;
  margin: 6% 0;
}
.main-sift-dl-text ul li {
  list-style: none;
  width: 34px;
  height: 20px;
  border: 1px solid #c3788c;
  color: #c3788c;
  text-align: center;
  margin-left: 3%;
}
.main-sift-dl-text ul li:nth-child(2) {
  list-style: none;
  width: 34px;
  height: 20px;
  border: 1px solid #c3788c;
  color: #c3788c;
  text-align: center;
  margin-left: 5%;
}
.main-sift-money {
  width: 100%;
  display: flex;
  height: 30px;
  line-height: 30px;
  margin-top: 3%;
  padding-left: 2%;
}
.main-sift-money1 {
  color: #e16982;
  font-size: 18px;
}
.main-sift-money h1 {
  font-size: 24px;
  color: #e16982;
}
.main-sift-money2 {
  color: #938c62;
  margin-top: 2%;
  font-size: 14px;
  margin-left: 3%;
}
.main-sift-money img {
  width: 24px;
  height: 12px;
  margin-top: 6%;
  margin-left: 3%;
}
.main-sift-money div {
  background: #ffe3ee;
  color: #d87991;
  width: 56px;
  height: 16px;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4%;
  margin-left: 4%;
}
</style>
