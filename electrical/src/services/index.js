import request from '@/utils/request';
//精选好物&轮播图
export let Goothing = params => {
    return request.post('/api/open/page/home/list/1.0.0', params);
}
//为你精选
export let products = params => {
    return request.post('/api/open/page/home/products/1.0.0', params);
}
//tab切换
export let Tab = params => {
    return request.post('/api/open/product/category/sub/1', params);
}
//搜索
export let search = params => {
    return request.post(`/api/open/search/query/1.0.0?queryWord=${params.queryWord}&queryType=${params.queryType}&querySort=${params.querySort}&pageIndex=${params.pageIndex}`);
}
//首页标签
export let labelquery = params => {
    console.log('124567',params)
    return request.post('https://upapi.jinaup.com/api/open/sepcial/query/1.0.0', params);
}

