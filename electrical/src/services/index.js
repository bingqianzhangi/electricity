import request from '@/utils/request';
//精选好物
export let Goothing = params => {
    return request.post('/api/open/page/home/list/1.0.0', params);
}
//为你精选
export let products = params => {
    return request.post('/api/open/page/home/products/1.0.0', params);
}
//tab切换

// https://upapi.jinaup.com/api/open/product/category/sub/1
//https://upapi.jinaup.com/
export let TabList = params => {
    return request.post('/api/open/product/category/query/1.0.0');
}

// https://upapi.jinaup.com/api/open/product/category/productList/1.0.0
//tab列表

export let getTab=params=>{
    console.log('params',params)
    return request.post(`/api/open/product/category/productList/1.0.0?pageIndex=${params.pageIndex}&cid=${params.cid}&sortType=${params.sortType}`);
}