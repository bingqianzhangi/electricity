<template>
    <div class="wrap_detail">
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
            <block>
                <swiper-item>
                    <image src="http://pic37.nipic.com/20140113/8800276_184927469000_2.png" class="slide-image" />
                </swiper-item>
            </block>
        </swiper>
        <div class="price_box">
            <div class="price">
                <h5><span>￥</span><b>87</b></h5>
                <div><span>77.08</span><img src="/static/images/黑卡@2x.png" alt="" class="vip"></div>
            </div>
            <div class="share">分享赚<span>8.94</span></div>
        </div>
        <div class="shop_cont">
            <p>商品内容的撒谎从瘦身大V你的SVN度搜是你的SVN才第三次是从速度快VC</p>
            <span>快递包邮</span>
        </div>
        <div class="choose_type">
            <div class="type">
                <span>选择</span>
                <div>
                    <div class="type_name">
                        <block>
                            <span>默认</span>
                            <span>尺码</span>
                            <span>颜色</span>
                        </block>
                    </div>
                    <div class="type_params">
                        <span>jy</span>
                        <span>xl</span>
                        <span>银灰色</span>
                        <img src="/static/images/jt.png" class="arrow" alt="">
                    </div>
                </div>
            </div>
            <div class="explain">
                <span>说明</span>
                <div>
                    <span>新品上市 全新升级</span>
                </div>
            </div>
        </div>
        <div class="pic_detail">
            <block>
                <img src="https://h5.jinaup.com/product_img/1.jpg" alt="">
            </block>
        </div>
        <div class="footer_btns">
            <button class="share_btn">分享赚<span>11.1</span></button>
            <button class="buy_btn" @click="buy">立即购买</button>
        </div>
        <div class="type_mack">
            <Type />
        </div>
    </div>
</template>

<script>
    import Type from '@/components/type.vue'

    export default {
        data() {
            return {
                show: false
            }
        },
        components: {
            Type
        },
        methods: {
            buy() {
                this.show = true;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrap_detail {
        width: 100%;
        height: 100%;
    }

    .swiper {
        width: 100%;
        height: 320px;

        .slide-image {
            width: 100%;
            height: 100%;
        }
    }

    .price_box {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        padding-left: 15px;
        box-sizing: border-box;

        .price {
            width: 120px;
            display: flex;
            align-items: center;

            h5 {
                display: flex;
                color: rgb(252, 93, 123);
                margin-right: 10px;

                span {
                    font-size: 16px;
                    margin-top: 5px;
                }

                b {
                    font-size: 22px;
                }
            }

            >div {
                span {
                    color: rgb(199, 143, 51);
                    font-size: 16px;
                }

                .vip {
                    width: 20px;
                    height: 10px;
                    margin-left: 5px;
                }
            }
        }

        .share {
            width: 80px;
            height: 25px;
            color: rgb(252, 93, 123);
            border: 1px solid rgb(252, 93, 123);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            font-size: 14px;
            text-align: center;
            line-height: 25px;
        }
    }

    .shop_cont {
        width: 100%;
        height: 86px;
        padding: 10px;
        box-sizing: border-box;

        p {
            color: #323a45;
            font-size: 18px;
        }

        span {
            color: #999da2;
            font-size: 14px;
            margin: 10px 0;
        }
    }

    .choose_type {
        width: 100%;
        height: 86px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 14px;

        .type {
            width: 100%;
            height: 43px;
            display: flex;
            align-items: center;
            color: #676767;

            >div {
                flex: 1;
                display: flex;
                justify-content: space-between;
                margin-left: 5px;

                .type_name {
                    span {
                        margin-right: 8px;
                    }
                }

                .type_params {
                    span {
                        margin-left: 8px;
                    }

                    .arrow {
                        width: 10px;
                        height: 10px;
                    }
                }
            }
        }

        .explain {
            width: 100%;
            height: 43px;
            display: flex;
            align-items: center;

            span {
                color: #676767;
            }

            >div {
                margin-left: 5px;

                span {
                    color: #fc5d7b;
                }
            }
        }
    }

    .pic_detail {
        margin-bottom: 50px;
    }

    .footer_btns {
        width: 100%;
        height: 50px;
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        margin-top: 10px;

        button {
            width: 50%;
            border-radius: 0;
            color: #fff;
            font-size: 18px;
        }

        .share_btn {
            background: linear-gradient(217deg, #f86367, #fb2579);
        }

        .buy_btn {
            background: linear-gradient(217deg, #f86367, #fb2579);
        }
    }

    .type_mack {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        position: fixed;
        left: 0;
        bottom: 0;
    }
</style>