<template>
  <div>
    <div class="top-ipt">
      <img src="../../../static/images/search.png" alt @click="search" />
    </div>
    <div class="top-nav">
      <scroll-view class="scroll-view_W" scroll-x>
        <view id="green" class="scroll-view-item_W">今日推荐</view>
        <view
          v-for="(item,index) in lists"
          :class="{active:index==isShow}"
          :key="item.sortId"
          @click="btn(item.cid,item.childs)"
        >{{item.cname}}</view>
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
  computed: {
    ...mapState({
      list: state => state.index.tablist,
      lists: state => state.tab.list
    })
  },
  methods: {
    btn(id) {
      wx.navigateTo({
        url: `/pages/content/classify/main?cid=${id}`
      });
    },
    search() {
      wx.navigateTo({
        url: "/pages/index/search/main"
      });
    },
    ...mapActions({
      Tabs: "tab/Tab"
    })
  },
  onShow() {
    // this.Tabchange()
  },
  created() {},
  mounted() {
    this.Tabs();
  }
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
  height: 42px;
  line-height: 42px;

  padding-left: 3%;
  box-sizing: border-box;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
}

.scroll-view_W {
  width: 100%;
  display: flex;
  white-space: nowrap;
  height: 100rpx;
  background: #fff;
  line-height: 94rpx;
}

.scroll-view_W view {
  font-weight: 500;
  font-size: 32rpx;
  display: inline-block;
  height: 100rpx;
  text-align: center;
  box-sizing: border-box;
  margin: 0 20rpx;
}

.active {
  border-bottom: 6rpx solid #56d2bf;
  color: #56d2bf;
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
</style>
