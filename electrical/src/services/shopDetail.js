import request from '@/utils/request';

//商品详情信息
export let shopDel = params => {
    // let data=JSON.stringify(params).replace(/\"/g, "").replace(/\{/g,"").replace(/\}/g,"");
    return request.post(`/api/open/product/info/1.0.0?pid=${params.pid}`);
}

//商品详情提示
export let shopRemind = params => {
    return request.post(`/api/open/shipping/templates/info/1.0.0?sstid=${params.sstid}`);
}

//商品详情选择
export let shopChoose= params => {
    return request.post(`/api/open/product/sku/attrs/1.0.0?pid=${params.pid}`);
}

//商品详情图
export let shopPic = params => {
    return request.post(`/api/open/product/detailPicture/1.0.0?pid=${params.pid}&basePid=${params.basePid}&userIdentity=${params.userIdentity}`);
}

//商品详情底部弹框
export let shopBounce = params => {
    return request.post(`/api/open/product/sku/query/1?pid=${params.pid}&vids=${params.vids}`);
}

export let productCouponList = params => {
    return request.post(`/api/open/product/coupon/productCouponList/1.0.0?pid=${params.pid}&bid=${params.bid}&uid=${params.uid}&usiid=${params.usiid}`);
}

//购买信息
export let buyShop = params => {
    return request.post(`/api/open/order/prepare/1.0.0?orderChannel=${params.orderChannel}&skuPidNums=${params.skuPidNums}`);
}


export let getCanvas = params => {
    return request.post(`/api/open/product/info/1.0.0?pid=${params.pid}`);
}