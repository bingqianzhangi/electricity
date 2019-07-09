<template>
  <div class="box">
    <div class="img">
      <img
        src="https://jnup.oss-cn-beijing.aliyuncs.com/topic/c2fdb55dd90bd0c634adc69a92181fd9.jpg"
        alt
      >
      <scroll-view class='scroll-view-vertical' scroll-y="true" @scroll="viewScroll">
             <h4>大牌化妆品小样专区</h4>
      </scroll-view> 
    </div>
    <scroll-view scroll-y="true" style="height: 600px" >
      <div class="cap">
        <p class="left">
          <span class="xian"></span>
          <span class="dian"></span>
        </p>
        <p class="font">
          <span>大牌化妆品小样专区</span>
        </p>
        <p class="right">
          <span class="dian"></span>
          <span class="xian"></span>
        </p>
      </div>
      <div class="menu">
        <ul class="ul">
          <li>
            <div class="menu-left">
              <img
                src="http://haitao.nos.netease.com/2f4e333d71dc4d428f30e77c282c092f1560506032485jwvx00uo11727.jpg"
                alt
              >
            </div>
            <div class="menu-right">
              <p class="left-font">雅诗兰黛 鲜活亮采果萃水30ml(清爽型)</p>
              <div class="right-box">
                <span class="price">¥ 49.9</span>
                <span class="profit">赚 ¥3.92</span>
              </div>
            </div>
          </li>
          <li>
            <div class="menu-left">
              <img
                src="http://haitao.nos.netease.com/2f4e333d71dc4d428f30e77c282c092f1560506032485jwvx00uo11727.jpg"
                alt
              >
            </div>
            <div class="menu-right">
              <p class="left-font">雅诗兰黛 鲜活亮采果萃水30ml(清爽型)</p>
              <div class="right-box">
                <span class="price">¥ 49.9</span>
                <span class="profit">赚 ¥3.92</span>
              </div>
            </div>
          </li>
          <li>
            <div class="menu-left">
              <img
                src="http://haitao.nos.netease.com/2f4e333d71dc4d428f30e77c282c092f1560506032485jwvx00uo11727.jpg"
                alt
              >
            </div>
            <div class="menu-right">
              <p class="left-font">雅诗兰黛 鲜活亮采果萃水30ml(清爽型)</p>
              <div class="right-box">
                <span class="price">¥ 49.9</span>
                <span class="profit">赚 ¥3.92</span>
              </div>
            </div>
          </li>
          <li>
            <div class="menu-left">
              <img
                src="http://haitao.nos.netease.com/2f4e333d71dc4d428f30e77c282c092f1560506032485jwvx00uo11727.jpg"
                alt
              >
            </div>
            <div class="menu-right">
              <p class="left-font">雅诗兰黛 鲜活亮采果萃水30ml(清爽型)</p>
              <div class="right-box">
                <span class="price">¥ 49.9</span>
                <span class="profit">赚 ¥3.92</span>
              </div>
            </div>
          </li>
          <li>
            <div class="menu-left">
              <img
                src="http://haitao.nos.netease.com/2f4e333d71dc4d428f30e77c282c092f1560506032485jwvx00uo11727.jpg"
                alt
              >
            </div>
            <div class="menu-right">
              <p class="left-font">雅诗兰黛 鲜活亮采果萃水30ml(清爽型)</p>
              <div class="right-box">
                <span class="price">¥ 49.9</span>
                <span class="profit">赚 ¥3.92</span>
              </div>
            </div>
          </li>
          <li>
            <div class="menu-left">
              <img
                src="http://haitao.nos.netease.com/2f4e333d71dc4d428f30e77c282c092f1560506032485jwvx00uo11727.jpg"
                alt
              >
            </div>
            <div class="menu-right">
              <p class="left-font">雅诗兰黛 鲜活亮采果萃水30ml(清爽型)</p>
              <div class="right-box">
                <span class="price">¥ 49.9</span>
                <span class="profit">赚 ¥3.92</span>
              </div>
            </div>
          </li>
          <li>
            <div class="menu-left">
              <img
                src="http://haitao.nos.netease.com/2f4e333d71dc4d428f30e77c282c092f1560506032485jwvx00uo11727.jpg"
                alt
              >
            </div>
            <div class="menu-right">
              <p class="left-font">雅诗兰黛 鲜活亮采果萃水30ml(清爽型)</p>
              <div class="right-box">
                <span class="price">¥ 49.9</span>
                <span class="profit">赚 ¥3.92</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
        top: 0
    };
  },
  methods:{
      // viewScroll (e) {
      //       console.log(e)      
      //       this.top = e.mp.detail.scrollTop;            
      //   }
  }
}
</script>

<style scoped>
div {
  width: 100%;
}
.box {
  width: 100%;
  height: 100%;
  background: #f3f7f7;
}
.img {
  width: 100%;
}
.img img {
  width: 100%;
  height: 341px;
}
.menus {
  width: 100%;
  height: 92rpx;
  line-height: 92rpx;
  display: flex;
  white-space: nowrap;
  border-bottom: 2rpx solid #ececec;
  justify-content: space-between;
  background: #fff;
  color: orangered;
}

.scllo {
  height: 100vh;
  box-sizing: border-box;
}
.cap {
  width: 100%;
  display: flex;
  height: 150rpx;
  box-sizing: border-box;
  padding: 0 150rpx;
  justify-content: space-between;
}
.font {
  width: 300rpx;
  height: 50rpx;
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #484848;
  line-height: 50rpx;
  text-align: center;
  margin-top: 50rpx;
  box-sizing: border-box;
}
.font span {
  margin-right: 8rpx;
}
.left {
  display: flex;
}
.right {
  display: flex;
}
.xian {
  width: 68rpx;
  height: 2rpx;
  background: #484848;
  margin: 72rpx 0 0;
}

.dian {
  width: 14rpx;
  height: 14rpx;
  background: #484848;
  margin: 66rpx 0 0;
  transform: rotate(45deg);
}
.menu {
  width: 100%;
}
.ul {
  width: 100%;
}
.ul li {
  display: flex;
  height: 282rpx;
  background: #fff;
  border-radius: 10rpx;
  margin-top: 20rpx;
}
.menu-left {
  padding: 20rpx;
  width: 240rpx;
  height: 240rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8rpx;
}
.menu-left img {
  max-width: 100%;
  max-height: 100%;
}
.menu-right {
  flex: 1;
  box-sizing: border-box;
  padding: 20rpx;
}
.left-font {
  display: block;
  color: #323a45;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 40rpx;
}
.right-box {
  height: 120rpx;
  box-sizing: border-box;
  padding-top: 80rpx;
}
.price {
  color: #fc5d7b;
  margin-right: 20rpx;
}
.profit {
  padding: 0 6rpx;
  border-radius: 6rpx;
  font-size: 24rpx;
  background-color: #ffe8ed;
  color: #fc5d7b;
}
.stickyClass{
    position: sticky;
    top: 0 
}
.scroll-view-vertical {
    width:100%;
    height:92rpx;
    line-height:92rpx;
    display:flex;
    white-space:nowrap;
    border-bottom:2rpx solid #ececec;
    justify-content:space-between;
    background:#fff;
}
.audio-fixed {
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 750rpx;        
}
</style>
