<template>
  <div class="wrap">
    <view class="section section_gap">
      <scroll-view class="scroll-view_W" scroll-x>
        <view id="green" class="scroll-view-item_W">今日推荐</view>
        <view
          v-for="(item,index) in list"
          :class="{active:index==isShow}"
          :key="item.sortId"
          @click="btn(index,item.cid,item.childs
        )"
        >{{item.cname}}</view>
      </scroll-view>
    </view>
    <Tab :childrens="children" :cid="cid" :optionsId='optionsId' />
  </div>
</template>
<script>
import Tab from "../../../components/tab";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      children: [],
      cid: 1,
      isShow: 0,
      optionsId:1
    };
  },
  components: {
    Tab
  },
  computed: {
    ...mapState({
      list: state => state.tab.list,
      lists: state => state.tab.Lists
    })
  },
  methods: {
    ...mapActions({
      Tabs: "tab/Tab",
      Lists: "tab/getTabList"
    }),
    btn(index, id, childs) {
      this.isShow = index;
      this.children = childs;
      this.cid = id;
      // console.log(this.children)
      this.Lists({
        pageIndex: 1,
        cid: this.cid,
        sortType: 1
      });
    }
  },
  mounted() {
    this.Tabs();
  },
  onShow() {},
  onLoad: function(options) {
    this.optionsId=options.cid
    // this.Tabs(options)
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
}

.section {
  width: 100%;
  height: 55px;
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
</style>