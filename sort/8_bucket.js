/**
 * @desc   桶排序
 * @sort   升序排序
 * @param  {Array} arr
 * @return {Array}
 */
function bucket ( arr ) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    let max = Math.max.apply(Math, arr);
    let min = Math.min.apply(Math, arr);
    let len = arr.length
    let bucket = [];
    let result = [];

    // 遍历原数组，将数组元素归入相应桶内
    for(let i = 0; i < len; i++){
       index = parseInt(( arr[i] - min ) / len );
       bucket[index] = !bucket[index] ? [] : bucket[index];
       bucket[index].push( arr[i] );
    };

    // 根据计数数组输出排序后的数组
    for(let j = 0; j < bucket.length; j++){
        if (!!bucket[j]) {
            // 桶排序内部需要使用其他排序来给桶排列
            bucket[j].sort((a, b) => a - b);
            result = result.concat( bucket[j] );
        };
    };

    return result;
};
