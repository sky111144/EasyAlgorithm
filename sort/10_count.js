/**
 * @desc   计数排序
 * @sort   升序排序
 * @param  {Array} arr
 * @return {Array}
 */
function count ( arr ) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    // 计数排序使用数组建立频率分布表，对负数进行排序，需要特殊处理一下。
    let min = Math.min.apply(Math, arr);
    if (min < 0) {
        arr = arr.map(item => item + 1 - min);
    };

    let max = Math.max.apply(Math, arr);
    let count = [];
    let result = [];

    // 建立计数数组
    for(let j = 0; j < max + 1; j++){
        count.push(0);
    };

    // 遍历原数组，形成原数组元素的频数分布
    arr.forEach((item) => count[item] += 1);

    // 根据计数数组输出排序后的数组
    for (let l = 0; l < count.length; l++) {
        for (let m = 0; m < count[l]; m++) {
            result.push(l);
        };
    };

    if (min < 0) {
        result = result.map(item => item + min - 1);
    };

    return result;
};
