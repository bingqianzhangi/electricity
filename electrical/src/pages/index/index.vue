<template>
  <div>首页
    <p onClick="handletab" >今日推荐</p>
  </div>
</template>

<script>


export default {
  data () {
    return {
      
    }
  },

  components: {

  },

  methods: {
    handletab(){
      console.log(1),
      wx.navigateTo({
        url:'pages/classify/main'
      })
    }
  },

  created () {
    
  }
}
</script>

<style scoped>

</style>
