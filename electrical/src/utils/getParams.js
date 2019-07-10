export let getParams = id => {
    var arr = id.split('&');// [type=1]
    var obj = {};
    arr.forEach(function (item) {
        obj[item.split('=')[0]] = item.split('=')[1];
    })
    return obj;
}