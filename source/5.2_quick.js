/**
 * @desc   分片
 * @param  {Array}  arr  待分片的数组
 * @param  {Number} low  分片比较的下界
 * @param  {Number} high 分片比较的上界
 * @return {Array}
 */
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        };
    };

    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];

    return i+1;
};

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

    let low = 0;
    let high = arr.length - 1;
    let pivot;
    let stack = [low, high];

    while (stack.length) {
        high = stack.pop();
        low = stack.pop();
        pivot = partition(arr, low, high);

        if (low < pivot - 1) {
            stack.push(low);
            stack.push(pivot - 1);
        };

        if (pivot + 1 < high) {
            stack.push(pivot + 1);
            stack.push(high);
        };
    };

    return arr;
};
