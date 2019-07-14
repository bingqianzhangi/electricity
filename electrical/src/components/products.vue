<template>
  <div>
    <div class="main-sift">
      <div class="main-sift-box">
        <div class="main-sift-left">
          <h1>精选好物</h1>
          <span class="main-sift-span"></span>
          <span>等你来抢</span>
        </div>
      </div>
      <div class="main-sift-dl-box">
        <div
          class="main-sift-dl"
          v-for="(item,index) in product"
          :key="index"
          @click="shopDetail(item.productVo.jumpUrl)"
        >
          <div class="main-sift-dl-img">
            <img :src="item.productVo.mainImgUrl" alt />
          </div>
          <div class="main-sift-dl-text">
            <p class="main-sift-dl-text" style="fontSize:12px">{{item.productVo.title}}</p>
            <ul>
              <li>包邮</li>
              <li>包税</li>
            </ul>
            <div class="main-sift-money">
              <span class="main-sift-money1">￥</span>
              <h1>{{item.productVo.salesPrice}}</h1>
              <span class="main-sift-money2">${{item.productVo.vipPrice}}</span>
              <img src="../../static/images/黑卡@2x.png" alt />
              <div>赚￥{{item.productVo.earnMoney}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { getParams } from "@/utils/getParams";

export default {
  computed: {
    ...mapState({
      product: state => state.index.productlist,
      detailList: state => state.shopDetail.detailList
    })
  },
  methods: {
    ...mapActions({
      productData: "index/Foryou",
      getDetail: "shopDetail/getDetail",
      getChoose: "shopDetail/getChoose",
      getPic: "shopDetail/getPic",
      getRemind: "shopDetail/getRemind"
    }),
    shopDetail(id) {
      let pId = getParams(id).businessId;
      this.getDetail({ pid: pId });
      this.getChoose({ pid: pId });
      this.getPic({ pid: pId, basePid: "36482", userIdentity: "2" });
      this.getRemind({ sstid: this.detailList.sstid });
      wx.navigateTo({ url: "/pages/content/shopDetail/main" });
    }
  },
  mounted() {
    this.productData();
  }
};
</script>

<style scoped>
.main-sift-dl-box {
  padding-left: 3%;
  box-sizing: border-box;
}
.main-sift-dl-text ul {
  display: flex;
  margin: 8% 0;
}
.main-sift-dl-text ul li {
  list-style: none;
  width: 34px;
  height: 20px;
  border: 1px solid #c3788c;
  color: #c3788c;
  text-align: center;
  margin-left: 3%;
  font-size: 12px;
  line-height: 20px;
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
  margin-top: 6%;
  padding-left: 2%;
  box-sizing: border-box;
}
.main-sift-money1 {
  color: #e16982;
  font-size: 18px;
}
.main-sift-money h1 {
  font-size: 22px;
  color: #df5577;
}
.main-sift-money2 {
  color: #938c62;
  margin-top: 2%;
  font-size: 10px;
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
  color: #df5577;
  /* width: 70px; */
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  margin-top: 6%;
  margin-left: 4%;
  text-align: center;
}
.main-sift-box {
  width: 100%;
}
.main-sift-left {
  display: flex;
}
.main-sift-box {
  width: 100%;
  display: flex;
  padding-left: 3%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
}
.main-sift-left {
  display: flex;
  height: 40px;
  line-height: 40px;
  width: 84%;
}
.main-sift-left h1 {
  font-size: 20px;
}
.main-sift-span {
  display: inline-block;
  width: 3px;
  height: 26px;
  background: #cdcdcf;
  margin-top: 3%;
  margin: 3%;
}
.main-sift-dl-img img {
  width: 90%;
  height: 86%;
}
.main-sift-dl-img {
  width: 125px;
  height: 135px;
}
.main-sift-dl {
  width: 100%;
  display: flex;
  height: 143px;
  margin-top: 2%;
}

.main-sift-dl-text {
  width: 60%;
  margin-left: 2%;
}
.main-sift-dl-text p {
  width: 100%;
  word-wrap: break-word;
  word-break: normal;
  line-height: 26px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.main-sift-dl-text {
  font-size: 14px;
}
</style>
