<template>
    <div class="myorder">
        <div class="head">
            <span v-for="(item,index) in nav" :key='index'>{{item}}</span>
        </div>
        <div class="main">
            <div class="unorder">
                <image src="/static/images/wudingdan.png"></image>
                <p>暂时没有订单┗|｀O′|┛ 嗷~~</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            nav: ['全部','待付款','待发货','待收货']
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .myorder {
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction:column;
        background:#f3f7f7;
        .head {
            width:100%;
            height:80rpx;
            background:#fff;
            line-height:80rpx;
            display:flex;
            justify-content:space-around;
            align-items:center;
            box-sizing:border-box;
            font-size:30rpx;
            text-align: center;
            position:fixed;
            top:0;
            left:0;
            span {
                width: 25%;
                height: 100%;
                display: inline-block;
            }
            &.active {
                border-bottom: 2px solid #12dbe9;
            }
        }
        .main {
            width: 100%;
            flex: 1;
            background:#f3f7f7;
            .unorder {
                width:100%;
                height:100%;
                margin-top:100rpx;
                margin:0 auto;
                text-align:center;
                font-size:32rpx;
                color:#999;
                image {
                    width:276rpx;
                    height:276rpx;
                    border-radius:50%;
                    margin-top:300rpx;
                    display:inline-block;
                    overflow:hidden;
                }
            }
        }
    }
</style>