/**
 * @desc   插入排序
 * @sort   升序排序
 * @param  {Array}  arr
 * @param  {Number} gap
 * @return {Array}
 */
function insert (arr, gap) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    let len = arr.length;

    for (let i = gap; i < len; i++) {
        let tmp = arr[i];

        let j;
        for (j = i - gap; j >= 0; j -= gap) {
            if (tmp < arr[j]) {
                arr[j+gap] = arr[j];
            } else {
                break;
            };
        };

        arr[j+gap] = tmp;
    };

    return arr;
};

/**
 * @desc   希尔排序
 * @sort   升序排序
 * @param  {Array} arr
 * @return {Array}
 */
function shell( arr ) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    let len = arr.length;
    let gap = 0;

    while (gap < len/3) {
        gap = 3 * gap + 1;
    };

    for (; gap > 0; gap = Math.floor((gap-1)/3)) {
        console.log(gap);
        arr = insert(arr, gap);
    };

    return arr;
}

console.log(shell([43,9986,4564897,12,-856,-89,-77,-45,55,44,55,66,1,2,3,1,2,3]));
