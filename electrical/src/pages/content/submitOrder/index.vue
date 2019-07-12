<template>
  <div class="wrap">
    <header>
            <p>订单中包含海外购商品，海关要求必须提供真实姓名和身份证号进行实名认证，且实名人与支付人必须一致，错误信息可能导致无法清关，平台保证您的信息安全，绝不对外泄露！</p>
            <div class="address">
                <div class="add_info">
                   <div class="info">
                        <h3><b>zs</b><b>1354646464</b></h3>
                        <div>
                            <img src="/static/images/locationIcon.png" class="add_icon" alt="">
                            <span>河北省秦皇岛市山海关区嘻嘻嘻嘻嘻嘻嘻嘻寻寻寻寻寻寻</span>
                        </div>
                   </div>
                   <div class="arrow" @click="address"><img src="/static/images/jt.png" alt=""></div>
                </div>
                <ul>
                    <li v-for="(item,index) in list" :key="index" ></li>
                </ul>
            </div>
            <div class="save_per">
                <span>保存人</span>
                <span>330324199408130218</span>
            </div>
    </header>  
    <div class="wrap_cont">
      <div class="wrap_cont_box_data_div">
        <img class="wrap_cont_box_data_div_img" alt />
        <div class="wrap_cont_box_data_div_title">
          <p>4包 尤妮佳 moony 拉拉裤XL38男宝</p>
          <p class="wrap_cont_box_data_div_title_g">规格：默认</p>
          <p class="wrap_cont_box_data_div_title_m">
            <span>￥319</span>
            <span>x1</span>
          </p>
        </div>
      </div>
      <div class="wrap_cont_box_bottom">
        <div class="wrap_cont_box_bottom_way">
          <div class="wrap_cont_box_bottom_way_left">发货方式</div>
          <div class="wrap_cont_box_bottom_way_right">快递(baoyou)：0 元</div>
        </div>
        <div class="wrap_cont_box_bottom_aggr">
          <div class="wrap_cont_box_bottom_aggr_left">订单总计</div>
          <div class="wrap_cont_box_bottom_aggr_right">￥ 19</div>
        </div>
        <div class="wrap_cont_box_bottom_favor">
          <div class="wrap_cont_box_bottom_favor_left">优惠券</div>
          <div class="wrap_cont_box_bottom_favor_right">></div>
        </div>
        <div class="wrap_cont_box_bottom_wx">
          <div class="wrap_cont_box_bottom_wx_left">微信支付</div>
          <div class="wrap_cont_box_bottom_wx_right">
            <icon type="success" color="rgb(0,255,255)" />
          </div>
        </div>
      </div>
    </div>
    <div class="wrap_bot">
      <div class="wrap_bot_left">
        <div class="wrap_bot_left_l">
          总计 ￥
          <span>19</span>
        </div>
        <div class="wrap_bot_left_r">微信支付</div>
      </div>
      <button class="wrap_bot_btn">去支付</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            }]
    }
  },
  methods: {
    address(){
      wx.navigateTo({
          url: "/pages/my/myaddress/main"
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  position: relative;
}
header{
    width: 100%;
    height: 238px;
    background: #f3f7f7;
    p{
        width: 100%;
        height: 68px;
        padding: 10px;
        box-sizing: border-box;
        background: #fff6f6;
        color: #484848;
        font-size: 12px;
    }
    .address{
        width: 95%;
        height: 100px;
        margin: 10px;
        background: #fff;
        border-radius: 5px;
        position:relative;
        .add_info{
            height: 80px;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            box-sizing: border-box;
            .info{
                width: 307px; 
                h3{
                    display: flex;
                    margin-bottom: 10px;
                    >b:nth-child(1){
                        margin-right: 10px;
                    }
                }
                >div{
                    display: flex;
                    img{
                        width: 14px;
                        height: 14px;
                        margin-right: 5px;
                    }
                    span{
                        flex: 1;
                    }
                }
            }
            .arrow{
                height: 100%;
                display: flex;
                align-items: center;
                >img{
                   width: 14px;
                   height: 14px;
                }
            }
        }
        ul{
            width: 100%;
            display: flex;
            position:absolute;
            overflow:hidden;
            left:-21rpx;
            bottom:2rpx;
            margin-left:22rpx;
            li{
                display:inline-block;
                padding:0 10rpx;
                background:#fc5d7b;
                border:4rpx solid #fc5d7b;
                color:#333;
                transform:skew(-50deg);
                margin-right: 6px;
            }
        }
    }
}
.wrap_head {
  width: 100%;
  height: 190rpx;
  background: #ececec;
}
.wrap_head_top {
  width: 100%;
  height: 1rpx;
}
.wrap_head_active {
  width: 94%;
  height: 150rpx;
  margin-left: 3%;
  margin-top: 20rpx;
  background: #fff;
  border-radius: 6rpx;
}
.wrap_head_active_title {
  width: 100%;
  display: flex;
}
.wrap_head_active_title span {
  font-size: 32rpx;
  font-weight: 900;
  margin: 20rpx 20rpx 0 20rpx;
}
.wrap_head_active_city {
  width: 100%;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 10rpx solid blue;
  padding-bottom: 20rpx;
}
.wrap_head_active_city_left {
  height: 60rpx;
  display: flex;
  align-items: center;
}
icon {
  margin: 0 20rpx;
}
.wrap_head_active_city_right {
  margin-right: 20rpx;
  font-size: 36rpx;
}
.wrap_cont_box_data_div {
  width: 100%;
  height: auto;
  display: flex;
  font-size: 28rpx;
  margin-top: 20rpx;
}
.wrap_cont_box_data_div_img {
  width: 25%;
  height: 184rpx;
  background: blue;
  margin: 0 3%;
}
.wrap_cont_box_data_div_title_g {
  font-size: 25rpx;
  color: #999da2;
  margin: 40rpx 0;
}
.wrap_cont_box_data_div_title_m {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.wrap_cont_box_bottom {
  width: 100%;
  height: auto;
}
.wrap_cont_box_bottom_way {
  margin-top: 10rpx;
  width: 94%;
  height: 100rpx;
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_cont_box_bottom_aggr {
  width: 94%;
  height: 100rpx;
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_cont_box_bottom_favor {
  width: 94%;
  height: 100rpx;
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_cont_box_bottom_wx {
  width: 94%;
  height: 100rpx;
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_bot {
  width: 100%;
  height: 120rpx;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 2rpx solid #333;
  display: flex;
}
.wrap_bot_left {
  width: 75%;
  height: 120rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_bot_btn {
  width: 25%;
  height: 120rpx;
  border: 0;
  background: blue;
  font-size: 36rpx;
  border-radius: 0;
  line-height: 120rpx;
  color: #fff;
}
.wrap_bot_left_l {
  color: #333;
  margin-left: 3%;
}
.wrap_bot_left_l span {
  font-size: 48rpx;
}
.wrap_bot_left_r {
  margin-right: 3%;
}
</style>
