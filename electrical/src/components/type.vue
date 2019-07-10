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
        <dt>
          <img :src="mainImgUrl" alt />
        </dt>
        <dd>
          <h4>
            <span>￥</span>
            <b>{{salesPrice}}</b>
          </h4>
          <p>
            <span>库存：</span>
            <b></b>
          </p>
        </dd>
      </dl>
      <div class="type_data">
        <div class="data">
          <span>默认</span>
          <div>
            <block
              v-for="(item,index) in chooseList[0].attributeValueRelationVoList"
              :key="item.vid"
            >
              <span :class="index==ind?'active':''" @click="style(index)">{{item.vname}}</span>
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
import { mapActions, mapState } from "vuex";

export default {
  props: ["hasShow", "chooseList", "salesPrice", "mainImgUrl", "pid"],
  data() {
    return {
      num: 0,
      flag: true,
      ind: 0
    };
  },
  mounted() {
    // ...mapActions({
    //     getBounce:shopDetail.getBounce
    // })
  },
  methods: {
    close() {
      this.$emit("closeShow");
    },
    add() {
      this.num++;
      console.log(this.chooseList[0].attributeValueRelationVoList);
    },
    del() {
      this.num <= 0 ? 0 : this.num--;
    },
    sure() {
      this.$emit("closeShow");
    },
    style(i) {
      this.ind = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap_type {
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
}
.content {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
}
.choose_type {
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    span {
      margin-right: 10px;
    }
  }

  .content {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .choose_type {
    width: 100%;

    span {
      margin-right: 10px;
    }
  }

  dl {
    width: 100%;
    height: 80px;
    display: flex;
    margin: 10px 0;

    dt {
      width: 80px;
      height: 80px;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      > span {
        padding: 2px 8px;
        border: 1px solid rgb(153, 157, 162);
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

  .type_data {
    width: 100%;

    .data {
      margin-top: 20px;

      > span {
        color: rgb(153, 157, 162);
      }

      > div {
        display: flex;
        flex-wrap: wrap;

        > span {
          padding: 2px 10px;
          border: 1px solid rgb(153, 157, 162);
          border-radius: 5px;
          margin: 10px 10px 0;
          font-size: 14px;
        }
      }
    }
  }

  .sum {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      color: rgb(153, 157, 162);
    }

    > div {
      display: flex;

      > span,
      b {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 25px;
      }

      b {
        width: 35px;
      }
    }
  }
}
button {
  background: linear-gradient(217deg, #f86367, #fb2579);
  color: #fff;
}
</style>