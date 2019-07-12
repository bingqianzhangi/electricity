<template>
    <div class="wrap_detail">
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000" v-if="detailList.supplierProductPictureVoList.length">
            <block v-for="(item,index) in detailList.supplierProductPictureVoList" :key="item.sortId">
                <swiper-item>
                    <image :src="item.imgUrl" class="slide-image"/>
                </swiper-item>
            </block>
        </swiper>
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000" v-else>
            <swiper-item>
                <image :src="detailList.mainImgUrl" class="slide-image"/>
            </swiper-item>
        </swiper>
        <div class="price_box">
            <div class="price">
                <h5><span>￥</span><b>{{detailList.salesPrice}}</b></h5>
                <div><span>{{detailList.vipPrice}}</span><img src="/static/images/黑卡@2x.png" alt="" class="vip"></div>
            </div>
            <div class="share">分享赚<span>{{detailList.earnMoney}}</span></div>
        </div>
        <div class="shop_cont">
            <p>{{detailList.title}}</p>
            <span>快递包邮</span>
        </div>
        <div class="choose_type">
            <div class="type">
                <span>选择</span>
                <div>
                    <div class="type_name">
                        <block v-for="(item,index) in chooseList" :key="item.aid">
                            <span>{{item.aname}}</span>
                        </block>
                    </div>
                    <div class="type_params" @click="buy">
                        <span>{{type.skuName || ''}}</span>
                        <img src="/static/images/jt.png" class="arrow" alt="">
                    </div>                 
                </div>
            </div>
            <div class="explain" v-if="detailList.description==''?false:true">
                <span>说明</span>
                <div>
                    <span>{{detailList.description}}</span>
                </div>
            </div>
            <div class="explain" v-if="remind==''?false:true">
                <span>提示</span>
                <div>
                    <span>{{remind}}</span>
                </div>
            </div>
        </div>
        <div class="pic_detail">
            <block v-for="(item,index) in picList" :key="item.pid">
                <img :src="item.imgUrl" alt="" :style="{height:item.imgHeight+'rpx'}">
            </block>
        </div>
        <div class="footer_btns">
            <button class="share_btn" @click="share">分享赚<span>{{detailList.earnMoney}}</span></button>
            <button class="buy_btn" @click="handBuy">立即购买</button>
        </div>
        <div class="type_mack" v-if="show">
            <Type 
            :hasShow="show" 
            :chooseList="chooseList"
            :salesPrice="detailList.salesPrice"
            :mainImgUrl="detailList.mainImgUrl"
            :pid="detailList.pid"
            :list="list"
            @closeShow="close" />
        </div>
    </div>
</template>

<script>
import Type  from '@/components/type.vue'
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            show:false,
            list:[]
        }
    },
    components: {
        Type
    },
    computed: {
        ...mapState({
            detailList:state=>state.shopDetail.detailList,
            chooseList:state=>state.shopDetail.chooseList,
            picList:state=>state.shopDetail.picList,
            remind:state=>state.shopDetail.remind,
            type:state=>state.shopDetail.type
        }),
    },
    methods: {
        ...mapActions({
            getRemind:'shopDetail/getRemind',
            getBounce:'shopDetail/getBounce'
        }),
        buy(){
            this.show = true;
            console.log('11',this.chooseList)
            let arr=this.chooseList.map((item,index)=>{
                return item.attributeValueRelationVoList[0].vid;
            })
            this.list=arr;
            this.getBounce({
                pid:this.chooseList[0].attributeValueRelationVoList[0].pid,
                vids:'['+arr+']'
            })
        },
        close(){
            this.show=false;
        },
        handBuy(){
            wx.navigateTo({
                url: "/pages/content/submitOrder/main"
            });
        },
        share(){
            wx.navigateTo({
                url: "/pages/content/canavs/main"
            });
        }   
    },
    async onShow() {
        console.log('idii',typeof this.detailList.sstid)
        console.log('idii',this.detailList.sstid)
        this.getRemind({sstid:this.detailList.sstid})
    }
}
</script>

<style lang="scss" scoped>
.wrap_detail{
    width: 100%;
    height: 100%;
}
.swiper {
    width: 100%;
    height: 320px;
    .slide-image{
        width: 100%;
        height: 100%;
    }
}
.price_box{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    box-sizing: border-box;
    .price{
        width: 120px; 
        display: flex;
        align-items: center;
        h5{
            display: flex;
            color: rgb(252,93,123);
            margin-right: 10px;
            span{
                font-size: 16px;
                margin-top: 5px;
            }
            b{
                font-size: 22px;
            }
        }
        >div{
            margin-top: 4px;
            span{
                color: rgb(199,143,51);
                font-size: 16px;
            }
            .vip{
                width: 20px;
                height: 10px;
                margin-left: 5px;
            }
        }
    }
    .share{
        width: 80px;
        height: 25px;
        color: rgb(252,93,123);
        border: 1px solid rgb(252,93,123);
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
        font-size: 14px;
        text-align: center;
        line-height: 25px;
    }
}
.shop_cont{
    width: 100%;
    height: 86px;
    padding: 10px;
    box-sizing: border-box;
    >p{
        color: #323a45;
        font-size: 18px;
        margin-bottom: 6px;
    }
    >span{
        color: #999da2;
        font-size: 14px;
    }
}
.choose_type{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    margin-bottom: 10px;
    .type{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        color: #676767;
        >div{
            flex: 1;
            display: flex;
            justify-content: space-between;
            margin-left: 5px;
            .type_name{
                span{
                    margin-right: 8px;
                }
            }
            .type_params{
                span{
                    margin-left: 8px;
                }
                .arrow{
                    width: 10px;
                    height: 10px;
                }
            }
        }
    }
    .explain{
        width: 100%;
        height: 43px;
        display: flex;
        align-items: center;
        >span{
            width: 30px;
            color: #676767;
        }
        >div{
            flex: 1;
            margin-left: 5px;
            span{
                color: #fc5d7b;
            }
        }
    }
}
.pic_detail{
    width: 100%;
    margin-bottom: 50px;
    img{
        width: 100%;
    }
}
.footer_btns{
    width: 100%;
    height: 50px;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    margin-top: 10px;
    button{
        width:50%;
        border-radius: 0;
        color: #fff;
        font-size: 18px;
    }
    .share_btn{
        background: linear-gradient(217deg,#f86367,#fb2579);
    }
    .buy_btn{
        background: linear-gradient(217deg,#f86367,#fb2579);
    }
}
.type_mack{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>