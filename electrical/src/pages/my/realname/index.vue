<template>
  <div class="real-name">
    <div class="top">
      <view class="section">
        <p>真实姓名</p>
        <input placeholder="请输入身份证姓名" auto-focus />
      </view>
      <view class="section">
        <p>身份证号</p>
        <input placeholder="请输入身份证号" auto-focus />
      </view>
    </div>
    <div class="data">
        <h1>
            上传身份证照片
            <span>
                (图片png、jpg,大小不超过5M)
            </span>
        </h1>
    </div>
    <view class="btn-area">
      <button form-type="submit">保存</button>
    </view>                                                        
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.real-name {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f3f7f7;
  position: relative;
}
.top {
  border-bottom: 1rpx solid #eee;
  background: #fff;
}
.section {
  width: 100%;
  height: 100rpx;
  align-items: center;
  display: flex;
}
.section p {
  width: 150rpx;
  margin-left: 26rpx;
  font-size: 32rpx;
  font-weight: 700;
}
.section input {
  height: 100rpx;
  flex: 1;
  padding-left: 20rpx;
  font-size: 32rpx;
}
.data {
  width: 100%;
  height: 340rpx;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 15rpx;
}
</style>