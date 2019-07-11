    
<template> 
    <div class="wrap_type">
        <div class="content">
            <div class="choose_type">
                <div>
                    <span>默认</span>
                    <span>尺码</span>
                    <span>颜色</span>
                </div>
                <span class="close" @click="close">X</span>
            </div>
            <dl>
                <dt><img src="https://h5.jinaup.com/product_img/1.jpg" alt=""></dt>
                <dd>
                    <h4><span>￥</span><b>344</b></h4>
                    <p><span>库存：</span><b></b></p>
                </dd>
            </dl>
            <div class="type_data">
                <div class="data">
                    <span>默认</span>
                    <div>
                        <block>
                            <span>jjjjjj</span>
                            <span>jjjjjj</span>
                            <span>jjjjjj</span>
                        </block>
                    </div>
                </div>
            </div>
            <div class="sum">
                <span>数量</span>
                <div>
                    <span @click="del">-</span>
                    <b>{{num}}</b>
                    <span @click="add">+</span>
                </div>
            </div>
        </div>
        <button @click="sure">确定</button>
    </div>
</template>

<script>
export default {
    props:['hasShow'],
    data() {
        return {
            num:0,
            flag: true
        }
    },
    methods: {
        close(){
            this.$emit('closeShow');
        },
        add(){
            this.num++;
        },
        del(){
            this.num <= 0 ? 0 : this.num--;
        },
        sure(){
            this.$emit('closeShow');
        }
    },
}
</script>

<style lang="scss" scoped>
.wrap_type{
    width: 100%;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
}   
.content{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
}
.choose_type{
    width: 100%;
    display: flex;
    justify-content: space-between;
    >div{
        span{
            margin-right: 10px;
        }
    }
}
dl{
    width: 100%;
    height: 80px;
    display: flex;
    margin: 10px 0;
    dt{
        width: 80px;
        height: 80px;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    dd{
        flex: 1;
        h4{
            display: flex;
            margin: 5px 0 8px 0;
        }
        p{
            color: rgb(153,157,162);
        }
    }
}
.type_data{
    width: 100%;
    .data{
        margin-top: 20px;
        >span{
            color: rgb(153,157,162);
        }
        >div{  
            display: flex;
            flex-wrap: wrap;
            >span{
                padding: 2px 10px;
                border: 1px solid rgb(153,157,162);
                border-radius: 5px;
                margin: 10px 10px 0;
                font-size: 14px;
            }
        }
    }
}
.sum{
    width: 100%;
    height: 30px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >span{
        color: rgb(153,157,162);
    }
    >div{
        display: flex;
        >span,b{
            width: 25px;
            height: 25px;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 25px;
        }
        b{
            width: 35px;
        }
    }
}
button{
    background: linear-gradient(217deg,#f86367,#fb2579);
    color: #fff;
}
</style>