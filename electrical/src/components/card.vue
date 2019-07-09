<template>
  <div>
    <div>
      <div class="swiper">
        <swiper
          class="cont"
          @change="switchItem('switchItem',$event)"
          :current="currentTab"
          circular="true"
          skip-hidden-item-layout="true"
          :indicator-dots="indicatorDots"
          :autoplay="autoplay"
          :interval="interval"
        >
          <swiper-item v-for="(item,index) in list[0].items" :key="index">
            <img :src="item.imgUrl" class="swiper" />
          </swiper-item>
        </swiper>
      </div>
      <div class="top-img">
        <div class="top-top">
          <div class="top-left">
            <img :src="list[1].items[0].imgUrl" alt />
          </div>
          <div class="top-right">
            <div class="top-right-img">
              <img :src="list[1].items[1].imgUrl" alt />
            </div>
            <div class="data-img">
              <img :src="list[1].items[2].imgUrl" alt />
            </div>
          </div>
        </div>
        <div class="top-bottom">
          <img :src="list[3].pictUrl" alt />
        </div>
      </div>
      <div class="main-sift">
        <div class="main-sift-box">
          <div class="main-sift-left">
            <h1>精选好物</h1>
            <span class="main-sift-span"></span>
            <span>等你来抢</span>
          </div>
          <div class="main-sift-right">
            <span>更多></span>
          </div>
        </div>
        <div class="main-sift-goods">
          <div class="main-sift-every" v-for="(item,index) in list[4].items" :key="index">
            <img :src="item.imgUrl" class="main-sift-every-img" />
            <div class="main-sift-every-div">{{item.title}}</div>
            <h2>${{item.salesPrice}}</h2>
          </div>
          <div class="top-bottom">
            <img :src="list[5].pictUrl" alt />
          </div>
        </div>
      </div>
      <div class="main-sift">
        <div class="main-sift-box">
          <div class="main-sift-left">
            <h1>精选好物</h1>
            <span class="main-sift-span"></span>
            <span>等你来抢</span>
          </div>
          <div class="main-sift-right">
            <span>更多></span>
          </div>
        </div>
        <div class="main-sift-goods">
          <div class="main-sift-every" v-for="(item,index) in list[6].items" :key="index">
            <img :src="item.imgUrl" class="main-sift-every-img" />
            <div class="main-sift-every-div">{{item.title}}</div>
            <h2>${{item.salesPrice}}</h2>
          </div>
          <div class="top-bottom">
            <img :src="list[7].pictUrl" alt />
          </div>
        </div>
      </div>
      <div class="main-sift">
        <div class="main-sift-box">
          <div class="main-sift-left">
            <h1>精选好物</h1>
            <span class="main-sift-span"></span>
            <span>等你来抢</span>
          </div>
          <div class="main-sift-right">
            <span>更多></span>
          </div>
        </div>
        <div class="main-sift-goods">
          <div class="main-sift-every" v-for="(item,index) in list[8].items" :key="index">
            <img :src="item.imgUrl" class="main-sift-every-img" />
            <div class="main-sift-every-div">{{item.title}}</div>
            <h2>${{item.salesPrice}}</h2>
          </div>
          <div class="top-bottom">
            <img :src="list[9].pictUrl" alt />
          </div>
        </div>
      </div>
      <div class="main-sift">
        <div class="main-sift-box">
          <div class="main-sift-left">
            <h1>精选好物</h1>
            <span class="main-sift-span"></span>
            <span>等你来抢</span>
          </div>
          <div class="main-sift-right">
            <span>更多></span>
          </div>
        </div>
        <div class="main-sift-goods">
          <div class="main-sift-every" v-for="(item,index) in list[10].items" :key="index">
            <img :src="item.imgUrl" class="main-sift-every-img" />
            <div class="main-sift-every-div">{{item.title}}</div>
            <h2>${{item.salesPrice}}</h2>
          </div>
          <div class="top-bottom">
            <img :src="list[11].pictUrl" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="main-sift">
      <div class="main-sift-box">
        <div class="main-sift-left">
          <h1>精选好物</h1>
          <span class="main-sift-span"></span>
          <span>等你来抢</span>
        </div>
        <div class="main-sift-right">
          <span>更多></span>
        </div>
      </div>
      <div class="main-sift-goods">
        <div class="main-sift-every" v-for="(item,index) in list[12].items" :key="index">
          <img :src="item.imgUrl" class="main-sift-every-img" />
          <div class="main-sift-every-div">{{item.title}}</div>
          <h2>${{item.salesPrice}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      currentTab: "0",
      indicatorDots: true,
      autoplay: true,
      interval: 3000
    };
  },
  props: [],
  computed: {
    ...mapState({
      list: state => state.index.list
    })
  },
  methods: {
    ...mapActions({
      Goothing: "index/Index"
    }),
    switchTab: function(prompt, res) {
      let oIndex = res.mp.currentTarget.dataset.current;
      this.currentTab = oIndex;
    },
    switchItem: function(prompt, res) {
      let oIndex = res.mp.detail.current;
      this.currentTab = oIndex;
    }
  },
  mounted() {
    this.Goothing();
  }
};
</script>

<style scoped>
.top-right-img img {
  width: 100%;
  height: 100%;
}
.top-left img {
  width: 100%;
  height: 100%;
}
.data-img img {
  width: 100%;
  height: 100%;
}
.main-sift {
  margin-top: 4%;
}
.main-sift-box {
  width: 100%;
  display: flex;
  padding-left: 3%;
  height: 40px;
  line-height: 40px;
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
  width: 31%;
  height: 218px;
  margin-left: 2%;
  margin-top: 2%;
}
.main-sift-every-img {
  width: 100%;
  height: 128px;
}
.main-sift-every-div {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 16px;
  line-height: 24px;
  padding-left: 2%;
  overflow: hidden;
  margin-top: 2%;
  height: 48px;
}
.main-sift-every h2 {
  color: #e16982;
}
.top-bottom {
  width: 94%;
  height: 110px;
  border-radius: 22px;
  margin-top: 1%;
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
/*轮播图内容*/
.cont {
  width: 96%;
  height: 153px;
  padding-top: 12px;
  font-size: 14px;
}
.cont swiper-item {
  width: auto;
  height: 100%;
  background-color: #5fd9a6;
  border: 1px solid #ebebeb;
  text-align: center;
  font-size: 25px;
  box-sizing: border-box;
}
.swiper {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
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
</style>
