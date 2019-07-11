import request from '@/utils/request';
//精选好物&轮播图
export let Goothing = params => {
    return request.post('/api/open/page/home/list/1.0.0', params);
}
//为你精选
export let products = params => {
    return request.post('/api/open/page/home/products/1.0.0', params);
}
//首页标签
export let labelquery = params => {
    console.log('124567',params)
    return request.post(`https://upapi.jinaup.com/api/open/sepcial/query/1.0.0?siid=${params.siid}`);
}

