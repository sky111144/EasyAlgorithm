/**
 * @desc   基数排序
 * @sort   升序排序
 * @param  {Array} arr
 * @return {Array}
 */
function base( arr ) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    // 基数排序使用数组建立频率分布表，对零和负数进行排序，需要特殊处理一下。
    let min = Math.min.apply(Math, arr);
    if (min <= 0) {
        arr = arr.map(item => item + 1 - min);
    };

    let maxDigit = Math.max.apply(Math, arr).toString().length;
    let quenes = [];
    let mod = 10;
    let dev = 1;

    for(let b = 0; b < maxDigit; b++, dev *= 10, mod *= 10){
        // 将对应元素分配到对应的桶内
        for(let i = 0, len = arr.length; i < len; i++){
            let bucket = parseInt( (arr[i] % mod) / dev );
            quenes[bucket] = !quenes[bucket] ? [] : quenes[bucket];
            quenes[bucket].push( arr[i] );
        };

        // 输出本趟排序结果
        let index = 0;
        for(let j = 0; j < quenes.length; j++){
            if (!!quenes[j]) {
                for(let k = 0, len = quenes[j].length; k < len; k++){
                    arr[index++] = quenes[j].shift();
                };
            };
        };
    };

    if (min <= 0) {
        arr = arr.map(item => item + min - 1);
    };

    return arr;
};
