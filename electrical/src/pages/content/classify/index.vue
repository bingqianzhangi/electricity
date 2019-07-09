<template>
  <div class='wrap'>
    <view class="section section_gap">
      <scroll-view class="scroll-view_W" scroll-x>
        <view id="green" class="scroll-view-item_W">今日推荐</view>
        <view v-for='item in list' :key='item.sortId' @click="btn(item.cid,item.childs
        )">{{item.cname}}</view>
      </scroll-view>
    </view>
    <Tab :children='children'  :cid='cid' />
  </div>
</template>
<script>
  import Tab from '../../../components/tab';
  import { mapState, mapActions, mapMutations } from "vuex";
  export default {
    data() {
      return {
        children: [],
        cid: 0
      };
    },
    components: {
      Tab
    },
    computed: {
      ...mapState({
        list: state => state.tab.list
      })
    },
    methods: {
      ...mapActions({
        Tab: "tab/Tab"
      }),
      btn(id, childs) {
        this.children = childs;
        this.cid=id
        
      }
    },
    mounted() {
      this.Tab();
      
    },
    onShow() {
    },

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
    color: #484848;
    box-sizing: border-box;
    margin: 0 20rpx;

  }
</style>