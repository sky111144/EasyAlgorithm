/**
 * @desc   快速排序
 * @sort   升序排序
 * @param  {Array} arr
 * @return {Array}
 */
function quick( arr ) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    let less = [];
    let pivotList = [];
    let more = [];
    let result = [];
    let length = arr.length;

    if (length <= 1) {
        return arr;
    };

    let pivot = arr[0];
    for (let i = 0; i < length; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else if (arr[i] > pivot) {
            more.push(arr[i]);
        } else {
            pivotList.push(arr[i]);
        };
    };

    less = quick(less);
    more = quick(more);
    result = result.concat(less, pivotList, more);

    return result;
};
