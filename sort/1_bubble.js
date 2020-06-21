/**
 * @desc   冒泡排序
 * @sort   升序排序
 * @param  {Array} arr
 * @return {Array}
 */
function bubble ( arr ) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    let len = arr.length;

    // 外层循环负责控制排序的趟数
    for (let i = 0; i < len - 1; i++) {

       // 内层循环负责执行一趟排序
       for (let j = 0; j < len - 1 - i; j++) {
          if (arr[j + 1] < arr[j]) {
              [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
          };
       };

    };

    return arr;
};
