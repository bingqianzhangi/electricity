<template>
    <div class="wrap_order">
        <header>
            <p>订单中包含海外购商品，海关要求必须提供真实姓名和身份证号进行实名认证，且实名人与支付人必须一致，错误信息可能导致无法清关，平台保证您的信息安全，绝不对外泄露！</p>
            <div class="address">
                <div class="add_info">
                   <div class="info">
                        <h3><b>zs</b><b>1354646464</b></h3>
                        <div>
                            <img src="/static/images/locationIcon.png" class="add_icon" alt="">
                            <span>河北省秦皇岛市山海关区嘻嘻嘻嘻嘻嘻嘻嘻寻寻寻寻寻寻</span>
                        </div>
                   </div>
                   <div class="arrow"><img src="/static/images/jt.png" alt=""></div>
                </div>
                <ul>
                    <li v-for="(item,index) in list" :key="index" :style="item.bg"></li>
                </ul>
            </div>
            <div class="save_per">
                <span>保存人</span>
                <span>330324199408130218</span>
            </div>
        </header>       
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            },{
                bg:'#5d9afc'
            },{
                bg:'#fc5d7b'
            }]
        }
    }
}
</script>

<style lang="scss" scoped >
.wrap_order{
    width: 100%;
    height: 100%;
} 
header{
    width: 100%;
    height: 238px;
    background: #f3f7f7;
    p{
        width: 100%;
        height: 68px;
        padding: 10px;
        box-sizing: border-box;
        background: #fff6f6;
        color: #484848;
        font-size: 12px;
    }
    .address{
        width: 95%;
        height: 100px;
        margin: 10px;
        background: #fff;
        border-radius: 5px;
        .add_info{
            height: 80px;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            box-sizing: border-box;
            .info{
                width: 307px; 
                h3{
                    display: flex;
                    margin-bottom: 10px;
                    >b:nth-child(1){
                        margin-right: 10px;
                    }
                }
                >div{
                    display: flex;
                    img{
                        width: 14px;
                        height: 14px;
                        margin-right: 5px;
                    }
                    span{
                        flex: 1;
                    }
                }
            }
            .arrow{
                height: 100%;
                display: flex;
                align-items: center;
                >img{
                   width: 14px;
                   height: 14px;
                }
            }
        }
        ul{
            width: 100%;
            height: 4px;
            display: flex;
            li{
                display:inline-block;
                padding:0 10rpx;
                background:#fc5d7b;
                border:4rpx solid #fc5d7b;
                color:#333;
                transform:skew(-50deg);
            }
        }
    }
}
</style>