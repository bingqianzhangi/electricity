<template> 
    <div class="wrap_type">
        <div class="content">
            <div class="choose_type">
                <div>
                    <block v-for="(item,index) in chooseList" :key="item.aid">
                        <span>{{item.aname}}</span>
                    </block>
                </div>
                <span class="close" @click="close">X</span>
            </div>
            <dl>
                <dt><img :src="mainImgUrl" alt=""></dt>
                <dd>
                    <h4><span>￥</span><b>{{salesPrice}}</b></h4>
                    <p><span>库存：</span><b>{{type.store}}</b></p>
                </dd>
            </dl>
            <div class="type_data">
                <div class="data" v-if="chooseList">
                    <span>{{chooseList[0].aname}}</span>
                    <div>
                        <block v-for="(v,i) in chooseList[0].attributeValueRelationVoList" :key="i">
                            <span :class="i==defaul?'active':''" @click="defaulType(i,v)">{{v.vname}}</span>
                        </block>
                    </div>
                </div>
                <div class="data" v-if="chooseList.length>=1 && chooseList[1]">
                    <span>{{chooseList[1].aname}}</span>
                    <div>
                        <block v-for="(v,i) in chooseList[1].attributeValueRelationVoList" :key="i">
                            <span :class="i==size?'active':''" @click="sizeType(i,v)">{{v.vname}}</span>
                        </block>
                    </div>
                </div>
                <div class="data" v-if="chooseList.length>=2 && chooseList[2]">
                    <span>{{chooseList[2].aname}}</span>
                    <div>
                        <block v-for="(v,i) in chooseList[2].attributeValueRelationVoList" :key="i">
                            <span :class="i==color?'active':''" @click="colorType(i,v)">{{v.vname}}</span>
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
import { mapActions, mapState } from 'vuex';
export default {
    props: ["hasShow", "chooseList", "salesPrice", "mainImgUrl", "pid","list"],
    data() {
        return {
            num:1,
            defaul:0,
            size:0,
            color:0,
            flag: true
        }
    },
    computed: {
        ...mapState({
            type:state=>state.shopDetail.type
        })
    },
    methods: {
        ...mapActions({
            getBounce:'shopDetail/getBounce'
        }),
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
        },
        defaulType(i,item) {
            console.log('qq',item.vid)
            // this.list[0]=item.vid;
            // console.log('qq1111',this.list[0])
            console.log('ffff',this.list.splice(0,1,item.vid))
            console.log('ffff111',this.list)
            this.defaul = i;
            this.getBounce({
                pid:item.pid,
                vids:'['+this.list+']'
            })
        },
        sizeType(i,item) {
            this.size = i;
            this.list[1]=item.vid;
            console.log('hhshshhs',this.list)
            this.getBounce({
                pid:item.pid,
                vids:'['+this.list[1]+']'
            })
        },
        // colorType(i,item){
        //     this.color = i;
        //     this.size=true,
        //     // this.getBounce({
        //     //     pid:item.pid,
        //     //     vids:'['+item.vid+']'
        //     // })
        // }
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
            display: flex;
        }
    }
}
.type_data{
    width: 100%;
    .data{
        margin-top: 20px;
        >span{
            color: rgb(153,157,162);
            font-size: 14px;
        }
        >div{  
            display: flex;
            flex-wrap: wrap;
            >span{
                padding: 2px 8px;
                border: 1px solid rgb(153,157,162);
                border-radius: 5px;
                margin: 10px 10px 0;
                font-size: 12px;
            }
            .active {
                background: rgb(51, 214, 197);
                color: #fff;
                border: none;
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