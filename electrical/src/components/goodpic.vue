<template>
  <div>
    <div class="top-bottom">
      <img :src="message.pictUrl" alt />
    </div>
  </div>
</template>
<script>
export default {
  props: ["message"],
  components: {}
};
</script>
<style scoped>
.top-bottom {
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  border-radius: 22px;
}
.top-bottom img {
  height: 100%;
  width: 96%;
  border-radius: 22px;
}
</style>