<template>
  <div>
    <div class="main-sift-goods">
      <div class="main-sift-every" v-for="(item,i) in message" :key="i">
        <img :src="item.imgUrl" class="main-sift-every-img" />
        <div class="main-sift-every-div">{{item.title}}</div>
        <h2>￥{{item.salesPrice}}</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["message"],
  components: {}
};
</script>

<style scoped>
.main-sift {
  margin-top: 4%;
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
  margin-top: 3%;
  margin: 3%;
  background: #ccc;
}
.main-sift-right span {
  color: #eb97a7;
}
.main-sift-goods {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.main-sift-every {
  width: 30%;
  height: 200px;
  margin-left: 2%;
  margin-top: 2%;
}
.main-sift-every-img {
  width: 100%;
  height: 120px;
}
.main-sift-every-div {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
  line-height: 20px;
  padding-left: 2%;
  overflow: hidden;
  margin-top: 2%;
  height: 40px;
  box-sizing: border-box;
  color: #80759d;
}
.main-sift-every h2 {
  color: #e16982;
  margin-top: 1%;
  text-indent: 2%;
  font-size: 14px;
}
.top-bottom {
  width: 94%;
  height: 110px;
  border-radius: 22px;
}
.top-bottom img {
  height: 100%;
  width: 100%;
  border-radius: 22px;
}
.top-nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
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
/*轮播图导航 */
.tab {
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  padding: 10px 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  box-sizing: border-box;
}
.nav {
  text-align: center;
  flex: 1;
  font-weight: 600;
  box-sizing: border-box;
}
.nav:nth-of-type(odd) {
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
}
.nav.active {
  color: #16cc80;
}
</style>
