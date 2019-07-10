<template>
  <div>
    <view class='main'>
      <view v-for='item in childrens' :key='item.sortId'>
        <img :src="item.imgUrl">
        <label for="">{{item.cname}}</label>
      </view>
    </view>

    <view class='tabr'>
      <view>综合</view>
      <view>最新</view>
      <view class='_li'>
        <view>价格</view>
        <label class='addActive' for="">△</label>
        <label class='pri_bottom' for="">▽</label>
      </view>
    </view>

    <view class='dls'>
      <view class='_dl' v-for='(item,index) in list' :key='index' >
        <view class='_dt'>
          <label for="">
            <img :src="item.mainImgUrl" alt="">
          </label>
        </view>
        <view class='_dd'>
          <view class='_h3'>{{item.title}}</view>
          <view class='coupon'>
            <label for="">包税</label>
          </view>
          <view class='price'>
            <view class='h4'>
              <label for="">￥</label>
              <label for="">{{item.salesPrice}}</label>
            </view>
            <label class='_span' for="">￥{{item.vipPrice}}</label>
            <label class='_right' for="">赚￥{{item.earnMoney}}</label>
          </view>
        </view>
      </view>
     
    </view>
  </div>
</template>
<script>
  import { mapState, mapActions, mapMutations } from "vuex";
  export default {
    props: ['childrens', 'cid'],
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        list: state => state.tab.Lists
      })
    },
    onShow() {

    },
    methods: {
      ...mapActions({
        Lists: "tab/getTabList"
      }),
    },
    mounted() {
      console.log('cid', this.cid)
      this.Lists(
         this.cid
      );
    },
  }
</script>
<style>
  .main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }

  .main view {
    width: 25%;
    display: inline-block;
    padding: 20rpx;
    box-sizing: border-box;
    text-align: center;
  }

  .main view img {
    width: 100rpx;
    height: 100rpx;

  }

  .main view label {
    font-size: 24rpx;
    display: block;
    padding: 12rpx 0;
    box-sizing: border-box;
  }

  .tabr {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    margin-top: 10rpx;

  }

  .tabr view {
    font-size: 26rpx;
    font-weight: 400;
  }

  ._li {
    position: relative;
  }

  .addActive {
    position: absolute;
    right: -25rpx;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-width: 10rpx;
    border-style: solid dashed dashed;
    top: 19rpx;
    border-color: transparent transparent #fc5d7b
  }

  .pri_bottom {
    position: absolute;
    right: -25rpx;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-width: 10rpx;
    border-style: solid dashed dashed;
    top: 49rpx;
    border-color: #d8d8d8 transparent transparent
  }

  .dls {
    flex: 1;
    width: 100%;
    height: 100%;
    background: #f3f7f7;
    padding: 18rpx 10rpx 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
  }

  ._dl {
    width: 48%;
    background: #fff;
    border-radius: 10rpx;
    display: flex;
    flex-direction: column;
    margin: 8rpx 1%;
    padding: 10rpx 20rpx;
    box-sizing: border-box
  }

  ._dt {
    padding: 60rpx 46rpx 30rpx 28rpx;
    box-sizing: border-box
  }

  ._dt img {
    width: 152px;
    height: 152px;
    display: inline-block;
    overflow: hidden;
    background-size: 100% 100%;
  }

  ._dl table {
    display: block;
    width: 295rpx;
    height: 277rpx;
  }

  ._h3 {
    font-size: 24rpx;
    padding-left: 10rpx;
    color: #323a45;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  ._dd {
    width: 100%;
    flex: 1
  }

  .coupon {
    width: 100%;
    display: flex;
    padding-left: 12rpx;
    padding-top: 20rpx;
    box-sizing: border-box;

  }

  .coupon label {
    display: block;
    padding: 0 10rpx;
    box-sizing: border-box;
    color: #fc5d7b;
    border: 2rpx solid #fc5d7b;
    border-radius: 6rpx;
    font-size: 20rpx
  }

  .price {
    width: 100%;
  }

  ._span {
    font-size: 22rpx;
    display: inline-block;
    color: #a87831;
    padding: 5rpx;
    box-sizing: border-box
  }

  ._right {
    background: #ffe8ed;
    color: #fc5d7b;
    margin-left: 10rpx;
    font-size: 22rpx;
    display: inline-block;
    padding: 5rpx;
    box-sizing: border-box
  }

  .h4 {
    display: flex;
    align-items: flex-end;
    padding-left: 6rpx
  }

  .h4 label:nth-child(1) {
    color: #fc5d7b;
    font-size: 28rpx
  }

  .h4 label:nth-child(2) {
    color: #fc5d7b;
    font-size: 36rpx
  }
</style>