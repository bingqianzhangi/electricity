<template>
  <div>
    <canvas style="width: 320px; height: 520px;" canvas-id="canvas"></canvas>
  </div>
</template>


<script>
import { mapState } from 'vuex';
  const userInfo = {
    avatar: '',
    name: '积纳有品小程序'
  }
  const qrCode = 'https://upapi.jinaup.com/static/image/QRCode.png';
  const toBase64 = 'https://upapi.jinaup.com/api/open/product/image/to/base64/1.0.0';
//   const info = {
//     result: {
//       "pid": 37253,
//       "basePid": 37085,
//       "cid": 270,
//       "cName": null,
//       "bid": 15121,
//       "bName": null,
//       "title": "【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶",
//       "shortTitle": "BY-HEALTH 汤臣倍健 牛乳钙片压片糖果 60片/瓶",
//       "description": null,
//       "importType": 3,
//       "origin": "",
//       "unitMeasure": null,
//       "unitMeasureValue": null,
//       "weight": 0,
//       "barCode": "",
//       "country": "中国",
//       "isFreeShipping": 0,
//       "isPresell": 0,
//       "isFreeTax": 1,
//       mainImgUrl: "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
//       "mainImgWidth": null,
//       "mainImgHeight": null,
//       "isSelf": 1,
//       "isNew": 1,
//       "isHot": 0,
//       "isRecommend": 0,
//       "deliveryCode": 0,
//       "productType": 0,
//       "marketPrice": 98.00,
//       "supplyPrice": 44.00,
//       "wholesalePrice": 0.00,
//       "salesPrice": 59.00,
//       "storePrice": 98.00,
//       "commissionAmount": 0.00,
//       "isSowing": 0,
//       "sowingPrice": 0.00,
//       "originalPid": 0,
//       "productAscription": 1,
//       "sstid": null,
//       "limitedNumber": -1,
//       "state": 1,
//       "authState": 1,
//       "userIdentity": 2,
//       "uid": 51,
//       "uName": null,
//       "usiid": 0,
//       "swid": 51,
//       "settlementMethod": 1,
//       "deductionPoints": 0,
//       "productionDateStr": null,
//       "productionDate": null,
//       "sortId": 1000,
//       "totalSales": 0,
//       "customerService": "kefuchannelimid_719280",
//       "createTime": 1555563891000,
//       "updateTime": 1561459552000,
//       "productStatisticsVo": null,
//       "productPictureVoList": null,
//       "supplierProductPictureVoList": [{
//         "ppid": 686204,
//         "pid": 37253,
//         "imgType": 1,
//         "imgUrl": "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
//         "imgWidth": null,
//         "imgHeight": null,
//         "sortId": 1,
//         "state": 1,
//         "createTime": 1555563892000,
//         "updateTime": 1555583277000
//       }, {
//         "ppid": 686205,
//         "pid": 37253,
//         "imgType": 1,
//         "imgUrl": "http://haitao.nos.netease.com/1a2258a19de84c938a95cde3ea88e5331525954377012jh0hu4u413298.jpg",
//         "imgWidth": null,
//         "imgHeight": null,
//         "sortId": 2,
//         "state": 1,
//         "createTime": 1555563892000,
//         "updateTime": 1555583277000
//       }, {
//         "ppid": 686206,
//         "pid": 37253,
//         "imgType": 1,
//         "imgUrl": "http://haitao.nos.netease.com/76bd5456369c43438655b43e88b6a20e1525954377917jh0hu5ja13299.jpg",
//         "imgWidth": null,
//         "imgHeight": null,
//         "sortId": 3,
//         "state": 1,
//         "createTime": 1555563892000,
//         "updateTime": 1555583277000
//       }],
//       "estimatedTax": 0,
//       "warehouseVo": null,
//       "shippingTemplatesVo": null,
//       "supplierProductSkuVoList": [{
//         "skuKey": "3fc66ce52418393b2b1ba2d81d1ecb56",
//         "pid": 37253,
//         "uid": 51,
//         "supplierSkuId": "20011732490",
//         "skuName": "默认",
//         "store": 4,
//         "marketPrice": 98.00,
//         "supplyPrice": 44.00,
//         "wholesalePrice": 0.00,
//         "salesPrice": 59.00,
//         "storePrice": 98.00,
//         "commissionAmount": 0.00,
//         "attributeValueJson": "[{\"aid\":1,\"aname\":\"规格\",\"pid\":37253,\"valueVo\":{\"aid\":1,\"pid\":37253,\"vid\":1,\"vname\":\"默认\"}}]",
//         "swid": 11133,
//         "state": 1,
//         "barCode": "",
//         "createTime": 1555924728000,
//         "updateTime": 1562119774000,
//         "pids": null,
//         "object": null,
//         "splitOrder": null,
//         "taxRate": 0.0000
//       }],
//       "productSeckillInfoVoList": null,
//       "seckillProductInfoVoList": null,
//       "productGroupInfoVoList": null,
//       "attributeNameVoList": null,
//       "buyNum": null,
//       "discountAmount": null,
//       "memberDiscountPrice": 7.45,
//       "vipPrice": 51.55,
//       "earnMoney": 7.45,
//       "seckillEarnMoney": null,
//       "skuKey": null,
//       "seckillStartTime": null,
//       "seckillEndTime": null,
//       "productSkuVo": null,
//       "shareUrl": "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
//       "xcxShareUrl": "/pages/go2detail/main?id=37253&fromInviteCode=2TWHAR5",
//       "xcxFriendShareUrl": "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
//       "cooperationType": 1,
//       "totalStock": 4,
//       "seckillPrice": null,
//       "originalPrice": null,
//       "periodValue": null,
//       "purchaserName": null
//     },
//     "message": "成功",
//     "systemTime": 1562912526734,
//     "res_code": 1
//   }
  export default {
    computed: {
        ...mapState({
            canvasList:state=>state.shopDetail.canvasList
        }),
    },
    mounted() {
      // 获取canvas
      var context = wx.createCanvasContext('canvas');
      // 绘制白色背景
      context.rect(0, 0, 320, 520);
      // 绘制用户名和头像
      context.drawImage(this.canvasList.mainImgUrl, 0, 0, 40, 40, 20, 12, 40, 40);
      context.save();
      context.setFontSize(12);
      context.fillText(`${userInfo.name}分享给你一个商品`, 60, 26)
      context.fillText(`邀请码: ${this.canvasList.customerService}`, 60, 46)
      context.restore();
      // 绘制商品大图和标题
      context.save();
      context.setFontSize(12);
      // 计算多行文本，自动换行
      let row = 0, pos = 0;
      for (let i=0; i<this.canvasList.title.length; i++){
        let str = this.canvasList.title.slice(pos, i);
        if (context.measureText(str).width > 266 && context.measureText(str).width < 280){
          context.fillText(this.canvasList.title.slice(pos, i), 20, 350+15*row);
          row++;
          pos = i;
        }
      }
      if (pos < this.canvasList.title.length){
        context.fillText(this.canvasList.title.slice(pos, this.canvasList.title.length), 20, 350+15*row);
      }
      context.restore();
      // 拿到图片的宽高
      wx.getImageInfo({
        src: this.canvasList.mainImgUrl, //图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径,
        complete: res => {
          console.log('res...', res);
          let rx, ry, rw, rh;
          if (res.width/res.height > 220/260){
            ry = 0;
            rh = res.height;
            rw = res.height/260*220;
            rx = (res.width - rw)/2;
          }else{
            rx = 0;
            rw = res.width;
            rh = res.height/220*260;
            ry = (res.height - rh)/2;
          }
          context.drawImage(this.canvasList.mainImgUrl, 0, 0, res.width, res.height, 50, 80, 220, 260);
          context.draw(true, ()=>{
            // 生成图片
            wx.canvasToTempFilePath({
              canvasId: 'canvas',
              quality: 1,
              fileType: 'jpg',
              complete: res=>{
                console.log('tmpFile...', res);
                // 预览一下
                wx.previewImage({
                  urls: [res.tempFilePath] //需要预览的图片链接列表,
                });
                // 保存到本地
              }
            })
          });
        }
      });
      // 绘制二维码
      context.save();
      context.setFontSize(15);
      context.fillText('长按识别二维码访问', 20, 480);
      context.restore();
      context.drawImage(qrCode, 0, 0, 1000, 1000, 200, 400, 90, 90);
      // 绘制商品价格
      context.save();
      context.setFontSize(10);
      context.setFillStyle('#ff0000');
      context.fillText('￥', 20, 450);
      context.setFontSize(18);
      context.fillText(this.canvasList.salesPrice, 30, 450);
      context.setFontSize(10);
      context.setFillStyle('#999');
      // info.result.marketPrice = '88888.888888';
      context.fillText(`￥${this.canvasList.marketPrice}`, 155-context.measureText(`￥${this.canvasList.marketPrice}`).width, 450);
      context.restore();
      context.draw();
    },
  }
  //添加?
  
</script>


<style lang="scss" scoped>
  canvas {
    width: 100%;
    border: 1px solid #000;
  }
</style>