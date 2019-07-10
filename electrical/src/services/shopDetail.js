import request from '@/utils/request';

//商品详情信息
export let shopDel = params => {
    console.log('dafafa',params)
    return request.post('/api/open/product/info/1.0.0', params);
}

//商品详情提示
export let shopRemind = params => {
    return request.post('/api/open/shipping/templates/info/1.0.0', params);
}

//商品详情选择
export let shopChoose= params => {
    return request.post('/api/open/product/sku/attrs/1.0.0', params);
}

//商品详情图
export let shopPic = params => {
    return request.post('/api/open/product/detailPicture/1.0.0', params);
}

//商品详情底部弹框
export let shopBounce = (id, params) => {
    return request.post('/api/open/product/sku/query/'+id, params);
}