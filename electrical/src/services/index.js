import request from '@/utils/request';
//精选好物
export let Goothing = params => {
    console.log("params...", params)
    return request.post('/api/open/page/home/list/1.0.0', params);
}