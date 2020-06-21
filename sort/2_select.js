/**
 * @desc   选择排序
 * @sort   升序排序
 * @param  {Array} arr
 * @return {Array}
 */
function select( arr ) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    let len = arr.length;

    // 外层循环需要进行 len - 1 趟排序
    for (let i = 0; i < len - 1; i++) {
       let min = i;

       // 内层循环从未排序的数组元素中比较出最小的一个
       for (let j = i + 1; j < len; j++) {
           if (arr[min] > arr[j]) {
               min = j;
           };
       };

       // 将其放在排序后的数组元素的最后
       [arr[min], arr[i]] = [arr[i], arr[min]];
   };

   return arr;
};
