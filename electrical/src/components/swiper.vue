<template>
    <swiper v-if="swiperList.length > 0" :indicator-dots="indicatorDots" autoplay="true" circular="true" interval="2000" class="swiper">
        <block v-for="(item, index) in swiperList" :key="index" >
          <swiper-item>
            <image :src="item.imgUrl" mode="scaleToFill" @click="clcikImg(item)" />
          </swiper-item>
        </block>
    </swiper>   
</template>

<script>
import { mapState ,mapActions } from 'vuex'
export default {
    data () {
        return {
            indicatorDots: true
        }
    },
    methods:{
        ...mapActions({
            getBannerData:'index/Query'
        }),
        clcikImg(item){
            this.getBannerData({siid:item.contentValue})
            wx.navigateTo({ url: "/pages/content/bannerDetail/main" });
        }
    },
    computed:{
        ...mapState({
            swiperList:state=>state.index.swiperList[0].items
        })
    },
}
</script>

<style scoped lang="scss">
    .swiper{
        padding:0 15rpx;
        margin:15rpx 0;
        height:300rpx;
        swiper-item{
            border-radius:10rpx;
            overflow: hidden;
            image{
                width:100%;
                height:100%;
            }
        }
    }
</style>
