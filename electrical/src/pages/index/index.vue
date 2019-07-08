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
    <products></products>
  </div>
</template>
<script>
import card from "@/components/card";
import products from "@/components/products";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },

  components: { card, products },

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
}
.top-right {
  width: 52%;
  height: 196px;
  margin-left: 1%;
}
.top-right div {
  width: 100%;
  height: 48%;
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
</style>
