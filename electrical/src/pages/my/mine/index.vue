<template>
  <div class="main">
      <div class="header">
        <image class="bgImg" src="/static/images/logBg.png"></image>
        <div class="user">
            <div class="user-head">
                <image class="bgImgs" src="/static/images/logBg.jpg"></image>
            </div>
            <div class="user-msg">
                <div class="user-name"> Lxx </div>
                <p>邀请码: ******
                  <span>复制</span>
                </p>
            </div>
        </div>
      </div>
      <div class="section">
          <div class="order">
              <h3>我的订单</h3>
              <div class="order-status">
                  <span @click="obligation(index)" v-for="(item,index) in navStatus" :key='index'>
                      <image :src='item.img'></image>
                      <p>{{item.txt}}</p>
                  </span>
              </div>
          </div>
          <ul class="list">
              <li  @click="mycoupon">
                <div class="title">
                    <image src="/static/images/yhj.png"></image>
                    <span>我的优惠卷</span>
                </div>
                <image src="/static/images/jt.png"></image>
              </li>
              <li  @click="myaddress">
                <div class="title">
                    <image src="/static/images/dz.png"></image>
                    <span>收货地址</span>
                </div>
                <image src="/static/images/jt.png"></image>
              </li>
              <li @click="services">
                <div class="title" >
                    <image src="/static/images/kf.png"></image>
                    <span>联系客服</span>
                </div>
                <image src="/static/images/jt.png"></image>
              </li>
              <li @click="authentication">
                <div class="title">
                    <image src="/static/images/sm.png"></image>
                    <span>实名认证</span>
                </div>
                <image src="/static/images/jt.png"></image>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      navStatus: [
        { img:'/static/images/dfk.png',txt: '待付款'},
        { img:'/static/images/dfh.png',txt: '待发货'},
        { img:'/static/images/dsh.png',txt: '待收货'}
      ]
    }
  },
  computed:{

  },
  methods:{
      obligation(i) {
        wx.navigateTo({
          url:'/pages/my/obligation/main?index='+i
        })
      },
      mycoupon() {
        wx.navigateTo({
          url: '/pages/my/coupon/main'
        })
      },
      myaddress() {
        wx.navigateTo({
          url: '/pages/my/myaddress/main'
        })
      },
      services() {
        wx.navigateTo({
          url: '/pages/my/CustomerService/main'
        })
      },
      authentication() {
        wx.navigateTo({
          url: '/pages/my/realname/main'
        })
      }
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
    .main {
      width: 100%;
      height: 100%;
      background:#f3f7f7;
      position: fixed;
      display: flex;
      flex-direction: column;
      .header {
        width: 100%;
        height: 110px;
        position: relative;
        .bgImg {
          width:100%;
          height:100%;
          position:absolute;
          top:0;
          left:0;
          z-index:-999;
          display:inline-block;
          overflow:hidden;
        }
        .user {
          color: #fff;
          display: flex;
          .user-head {
            width:128rpx;
            height:128rpx;
            margin:38rpx;
            border-radius:50%;
            background: #fff;
            image {
              width:128rpx;
              height:128rpx;
              border-radius:50%;

            }
          }
          .user-msg {
            margin:22rpx 20rpx 0;
            .user-name {
              font-size:40rpx;
              line-height:2;
            }
            p {
              font-size:28rpx;
              span {
                margin-left:10rpx;
                line-height:2;
                font-size:20rpx;
                background:#35cdd0;
                color:#fff;
                padding:6rpx 10rpx;
                box-sizing:border-box;
                border-radius:10rpx;
                opacity:.7239;
                display: inline-block;
              }
            }
          }
        }
      }
      .section {
        width: 100%;
        flex: 1;
        position:absolute;
        top:180rpx;
        .order {
          width:96%;
          margin:0 2%;
          height:220rpx;
          background:#fff;
          border-radius:10rpx;
          h3 {
            line-height:2;
            padding-left:20rpx;
            box-sizing:border-box;
            font-size: 22px;
          }
          .order-status {
              display:flex;
              justify-content:space-around;
              span {
                position: relative;
                image {
                  width: 40px;
                  height: 40px;
                  box-sizing: border-box;
                  display:inline-block;
                  overflow:hidden;
                }
                p {
                  font-size:24rpx;
                  color:#70757d;
                  text-align:center;
                }
              }
          }
        }
        .list {
          width: 96%;
          margin: 0 2%;
          margin-top: 10px;
          background: #fff;
          li {
            display: flex;
            height: 48px;
            justify-content: space-between;
            .title {
              display: flex;
              image {
                width: 18px;
                height: 18px;
                margin: 15px;
                display:inline-block;
                overflow:hidden;
              }
              span {
                font-size: 14px;
                margin:15px 15px 0 0;
              }
            }
            image {
              width: 8px;
              height: 12px;
              margin: 17px 18px 0 0;
              display:inline-block;
              overflow:hidden;
            }
          }
        }
      }
    }
</style>