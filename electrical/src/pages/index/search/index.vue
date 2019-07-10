<template>
  <div>
    <div class="box">
      <div class="top">
        <input type="text" placeholder="搜索" />
        <img src="../../../../static/images/searchimg.png" alt />
       
      </div>
       <span class="cencel">取消</span>
        </div>
      <!-- <div class="top-history">
        <p>历史搜索</p>
        <img src="../../../../static/images/del.jpg" alt />
      </div> -->
        <div>
            <ul>
                <li>综合</li>
                <li>最新</li>
                <li>价格</li>
            </ul>
            <div class="main">
                <div class="main-box">
                     <div class="main-img"></div>
                     <div>
                         <p>魅力股东会发生过后的数据</p>
                         <p>￥19.9</p>
                     </div>
                </div>
               
            </div>
        </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.box {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  background: #dadada;
  align-items: center;
}
.top {
  width: 300px;
  height: 30px;
  border-radius: 6px;
  background: #ccc;
  display: flex;
  margin-left: 3%;
  justify-content: space-between;
  position: relative;
}
.top input {
  margin-left: 4%;
  height: 30px;
  line-height: 30px;
  margin-left: 16%
}
.top img {
  width: 20px;
  height: 20px;
  position: absolute;
  margin-top: 1%;
  left: 6%;
  
}

.cencel{
  color: #b7b5b8;
  display: inline-block;
  text-align: center;
  width: 60px;
  font-size: 14px;
}
.top-history {
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  line-height: 38px;
  padding-left: 3%;
  margin-top: 3%;
  position: relative;
}
.top-history p {
  color: #c1c1c1;
}
.top-history img {
  width: 20px;
  height: 24px;
  position: absolute;
  right: 10%;
}
ul{
    width:100%;
    height: 50px;line-height: 50px;
    display: flex;text-align: center;

}
ul li{
    list-style: none;
    width: 33%;
}
</style>
