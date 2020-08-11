/**
 * @desc   插入排序
 * @sort   升序排序
 * @param  {Array} arr
 * @return {Array}
 */
function insert ( arr ) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let tmp = arr[i];

        let j;
        for (j = i - 1; j >= 0; j--) {
            if (tmp < arr[j]) {
                arr[j+1] = arr[j];
            } else {
                break;
            };
        };

        // 插入取出的数组元素
        arr[j+1] = tmp;
    };

    return arr;
}

console.log(insert([78,78,-797,9,456,46,-13,54,12,1546,2]));
