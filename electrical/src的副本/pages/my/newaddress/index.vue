<template>
    <form class="newaddress" @submit="formSubmit" report-submit>
        <div class="message">
            <div class="receiving">
                <input type="text" placeholder="收货人" v-model="current.consignee">
                <image src="/static/images/lt.svg"></image>
            </div>
            <div class="phone-number">
                <input type="text" placeholder="手机号码" v-model="current.consigneePhone">
                <label>
                    <span>+ 86</span>
                    <image src="/static/images/lt.svg"></image>
                </label>
            </div>
            <div class="receiving">
                <picker mode="region" 
                        @change="changeRegin" 
                        
                        >
                    <view>
                        <input class="pikers"  v-model="region" placeholder="所在地区"/>
                    </view>
                </picker>
                <image src="/static/images/lt.svg"></image>
            </div>
            <div class="detail-address">
                <textarea name="" id="" cols="30" rows="10" v-model="current.address"
                placeholder="详细地址:如道路、门牌号、小区、楼栋号、单元室等"></textarea>
            </div>
        </div>
        <div class="title">
            <div class="cont">
                <span>标签</span>
                <div class="tags">
                    <span v-for="(item,index) in tags" :key='index' 
                    @click="pitch(index)" :class="ind===index?'active':null">{{item}}</span>
                </div>
            </div>
            <div class="default">
                <span>设置默认地址</span>
                <switch :checked="checked" @change="stautsChange" />
            </div>
        </div>
        <button form-type="submit">保存</button>
    </form>
</template>
<script>
import { mapState,mapMutations,mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
           region: null,
           tags: ['家','公司','学校','其它'],
           ind: null,
           checked: false
        }
    },
    computed:{
        ...mapState({
            current: state => state.index.current
        })
    },
    methods:{
        ...mapActions({
            createNew: 'index/createNew'
        }),
        ...mapMutations({
            updateState: 'index/updateState'
        }),
        changeRegin(e) {
            const {code,value} = e.mp.detail
            console.log(code)
            console.log(e.target.value)
            this.region = e.target.value
            this.current.provinceId = code[0]
            this.current.cityId = code[1]
            this.current.areaId = code[2]
            this.current.provinceName = value[0]
            this.current.cityName = value[1]
            this.current.areaName = value[2]
        },
        pitch(index) {
            this.ind = index
            this.current.addressTag = index
        },
        async formSubmit(e) {

            // 判断收获人是否为空
            if(!this.current.consignee) {
                wx.showToast({
                    title: '请输入收货人姓名', //提示的内容
                    icon: 'none' //图标
                })
                return false
            }
             // 判断手机号是否符合规范
            if(!/^1(3|4|5|7|8)\d{9}$/.test(this.current.consigneePhone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.consigneePhone)) {
                wx.showToast({
                    title: '请输入手机或座机', //提示的内容
                    icon: 'none'  //图标
                })
                return false
            }
            // 判断详细地址是否为空
            if(!this.current.address) {
                wx.showToast({
                    title: '请输入详细的地址', //提示的内容
                    icon: 'none' //图标
                })
                return false
            }
            let data = await this.createNew(this.current)
            console.log('data...',data)
        },
        stautsChange() {
            this.checked = !this.checked
            if(this.checked) {
                this.current.state = 0
            } else {
                this.current.state = 1
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .newaddress {
        width:100%;
        height:100%;
        background:#f3f7f7;
        font-family:PingFangSC-Regular;
        .message {
            width:100%;
            display:flex;
            flex-direction:column;
            background:#fff;
            margin-bottom: 10px;
            div {
                width: 351px;
                height: 45px;
                margin:0 auto;
                display:flex;
                line-height: 45px;
                border-bottom: 1px solid #f6f6f6;
                font-size: 14px;
                align-items: center;
                picker {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items:center;
                    justify-content: space-between;
                    .pikers {
                        height: 100%;
                        flex: 1;
                        margin-left: 20px;
                    }
                }
                input {
                    flex:1;
                    height:45px;
                    padding-left:5px;
                    width:100%;
                }
                image {
                    width: 5px;
                    height: 9px;
                }
                label {
                    display:flex;
                    align-items:center;
                    color:#9ca0a5;
                }
            }
            .detail-address {
                height:88px;
                font-weight:400;
                line-height:20px;
                font-size:14px;
                border-bottom:0;
                textarea {
                    width:616rpx;
                    height:176rpx;
                    margin:26rpx 10rpx;
                }
            }
        }
        .title {
            width:100%;
            height:286rpx;
            background:#fff;
            .cont {
                width:702rpx;
                margin:0 auto;
                border-bottom:2rpx solid #f6f6f6;
                span {
                    font-size:28rpx;
                    font-weight:400;
                    color:#323a45;
                    margin-left:10rpx;
                    height:62rpx;
                    line-height:62rpx;
                }
                .tags {
                    width:702rpx;
                    height:134rpx;
                    margin:0 auto;
                    display:flex;
                    span {
                        width:132rpx;
                        height:52rpx;
                        border-radius:300rpx;
                        margin:2rpx 14rpx;
                        border:2rpx solid #bbb;
                        font-size:30rpx;
                        line-height:52rpx;
                        text-align:center;
                        color:#323a45;
                         &.active {
                        background: #33d6c5;
                        color: #fff;
                    }
                    }
                   
                }
            }
            .default {
                display:flex;
                width:702rpx;
                margin:0 auto;
                height:90rpx;
                line-height:90rpx;
                font-size:28rpx;
                span {
                    margin-left:10rpx;
                    flex:1;
                }
            }
        }
        button {
            width: 90%;
            background: #33d6c5;
            color: #fff;
        }
    }
</style>