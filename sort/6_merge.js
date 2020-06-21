/**
 * @desc   归并
 * @param  {Array} left
 * @param  {Array} right
 * @return {Array}
 */
function mergeArray( left, right ) {
    let result = [];

    while ( left.length > 0 && right.length > 0 ) {
        if ( left[0] < right[0] ) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        };
    };

    return result.concat(left,right);
};

/**
 * @desc   归并排序
 * @sort   升序排序
 * @param  {Array} arr
 * @return {Array}
 */
function merge( arr ) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    let length = arr.length;
    if ( length <= 1 ) {
        return arr;
    };

    let middle = Math.floor(length/2);
    let left = merge(arr.slice(0,middle));
    let right = merge(arr.slice(middle,length));

    return mergeArray(left, right);
};
