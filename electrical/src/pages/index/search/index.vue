<template>
  <div>
    <div class="box" scroll-y @scroll="listscroll">
      <div class="top">
        <input v-model="text" placeholder="搜索" type="text" @input="updateinput" @confirm="submit" />
        <img src="../../../../static/images/searchimg.png" alt />
      </div>
      <span class="cencel" @click="cencel">取消</span>
    </div>
    <div v-if="flag">
      <div class="top-history">
        <p>历史搜索</p>
        <img src="../../../../static/images/del.jpg" alt @click="del" />
      </div>
      <div class="top-search-box">
        <span
          @click="golist(item)"
          v-for="(item,index) in history"
          :key="index"
          class="top-search-text"
        >{{item}}</span>
      </div>
    </div>

    <div v-else>
      <ul>
        <li @click="updateall">综合</li>
        <li @click="updatenew">最新</li>
        <li @click="updateprices('asc')">价格</li>
      </ul>
      <div class="none" v-if="flags">
        <span @click="updateprices('desc')">价格从高到低</span>
        <span @click="updateprices('asc')">价格从低到高</span>
      </div>
      <div class="main">
        <div class="main-box" v-for="(item,index) in searchlist" :key="index">
          <div class="main-img">
            <img :src="item.mainImgUrl" alt />
          </div>

          <div class="space-box">
            <p class="space-show">{{item.shortTitle}}</p>
            <p class="spaceprice">
              ￥{{item.salesPrice}}
              <span class="newprice">￥23.5</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      queryWord: "",
      queryType: 0,
      querySort: "asc",
      pageIndex: 1,
      arr: [],
      text: "",
      flag: true,
      flags: false,
      history: ""
    };
  },
  computed: {
    ...mapState({
      searchlist: state => state.index.searchlist //搜索数据
    })
  },
  onShow() {
    this.history = wx.getStorageSync("history");
    console.log("111", this.history);
  },
  methods: {
    ...mapActions({
      getsearchlist: "index/getsearchlist"
    }),
    del() {
      wx.clearStorage();
      this.history = "";
      //  this.history = wx.getStorageSync("history");
    },
    cencel(e) {
      this.flag = true;
      let that = this;
      that.text = "";
      this.history = wx.getStorageSync("history");
    },
    updateinput(e) {
      this.text = e.target.value;
      console.log(this.text);
    },
    updateall() {
      (this.queryWord = this.text),
        (this.queryType = 0),
        (this.querySort = "asc"),
        (this.pageIndex = 1);
      this.getlist(
        this.queryWord,
        this.queryType,
        this.querySort,
        this.pageIndex
      );
    },
    async updatenew() {
      (this.queryWord = this.text),
        (this.queryType = 1),
        (this.querySort = "asc"),
        (this.pageIndex = 1);
      await this.getlist(
        this.queryWord,
        this.queryType,
        this.querySort,
        this.pageIndex
      );
    },
    golist(item) {
      this.queryWord = item;
      this.queryType = 0;
      this.querySort = "asc";
      this.pageIndex = 1;
      this.getlist(
        this.queryWord,
        this.queryType,
        this.querySort,
        this.pageIndex
      );
      this.flag = false;
      this.text = item;
    },
    submit() {
      //输入值按下enter进行搜索
      this.arr.push(this.text);
      wx.setStorage({
        //本地存储
        key: "history",
        data: this.arr
      });
      this.queryWord = this.text;
      this.queryType = 0;
      this.querySort = "asc";
      this.pageIndex = 1;
      this.getlist(
        this.queryWord,
        this.queryType,
        this.querySort,
        this.pageIndex
      );
      this.flag = false;
    },
    updateprices(sort) {
      this.flags = !this.flags;
      this.queryType = 2;
      this.querySort = sort;
      this.pageIndex = 1;
      // console.log("this.queryType", this.queryType);
      this.getlist(
        this.queryWord,
        this.queryType,
        this.querySort,
        this.pageIndex
      );
    },
    getlist(queryWord, queryType, querySort, pageIndex) {
      this.getsearchlist({
        queryWord,
        queryType,
        querySort,
        pageIndex
      });
    },
    listscroll(e) {}
  }
};
</script>

<style scoped>
.top-search-box {
  width: 100%;
  height: 20px;
  line-height: 20px;
  padding-left: 3%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.top-search-text {
  display: inline-block;
  background: #f5f5f3;
  text-align: center;
  margin-left: 1%;
  color: #454346;
  padding: 5px 20px;
  border-radius: 6px;
  margin-bottom: 12px;
}
.none {
  position: absolute;
  right: 2%;
  background: white;
}
.none span {
  display: block;
  height: 30px;
  line-height: 30px;
}
.space-box {
  background: white;
}
.newprice {
  color: #8e7b5b;
  display: inline-block;
  width: 10px;
  text-align: center;
  font-size: 12px;
}
.spaceprice {
  color: #ec6a82;
  font-size: 20px;
}
.space-show {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.main-img {
  width: 100%;
  height: 203px;
  background: white;
  display: flex;
  justify-content: center;
}
.main-img img {
  width: 94%;
  height: 60%;
  margin-top: 26%;
}
.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #f2f8f8;
  padding-top: 4%;
  flex-wrap: wrap;
}
.main-box {
  width: 48%;
  margin-left: 0.6%;
  margin-top: 2%;
}
.box {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  background: #f9f9f9;
  align-items: center;
}
.top {
  width: 300px;
  height: 30px;
  border-radius: 6px;
  background: #ededed;
  display: flex;
  margin-left: 3%;
  justify-content: space-between;
  position: relative;
}
.top input {
  margin-left: 4%;
  height: 30px;
  line-height: 30px;
  margin-left: 16%;
}
.top img {
  width: 20px;
  height: 20px;
  position: absolute;
  margin-top: 1%;
  left: 6%;
}

.cencel {
  color: #b7b5b8;
  display: inline-block;
  text-align: center;
  width: 60px;
  font-size: 14px;
}
.top-history {
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  line-height: 38px;
  padding-left: 3%;
  margin-top: 3%;
  position: relative;
}
.top-history p {
  color: #c1c1c1;
}
.top-history img {
  width: 20px;
  height: 24px;
  position: absolute;
  right: 10%;
}
ul {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  text-align: center;
}
ul li {
  list-style: none;
  width: 33%;
  color: #77747b;
  font-size: 14px;
}
</style>
