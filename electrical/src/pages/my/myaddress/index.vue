<template>
    <div class="myaddress">
        <button @click="newaddress">新增收货地址</button>
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

        }
    },
    computed:{

    },
    methods:{
        newaddress() {
            wx.navigateTo({
                url: '/pages/my/newaddress/main'
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .myaddress {
        width: 100%;
        height: 100%;
        padding: 20px 0;
        background: #f3f7f7;
        button {
            width: 90%;
            background: #33d6c5;
            color: #fff;
        }
    }
</style>