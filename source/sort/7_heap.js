/**
 * @desc   堆化：将数组构建成堆的形态
 * @param  {Array}  arr 待调整的数组
 * @param  {Number} i   待调整二叉树的顶部节点
 * @param  {Number} len 待调整的数组大小
 * @return {void}
 */
function heapify(arr,  i,  len) {
    // 先取出当前元素 i
    let tmp = arr[i];

    // 从 i 节点的左子节点开始，也就是 2i+1 处开始
    for(let k = i * 2 + 1; k < len; k = k * 2 + 1){
        // 找出左子节点、右子节点中的最大值的下标
        if (k + 1 < len && arr[k] < arr[k + 1]) {
            k++;
        }

        // 如果子节点大于父节点，将子节点值赋给父节点（不用进行交换）
        if (arr[k] > tmp) {
            arr[i] = arr[k];
            i = k;
        } else {
            break;
        }
    }

    // 将 tmp 值放到最终的位置
    arr[i] = tmp;
}

/**
 * @desc   堆排序
 * @sort   升序排序
 * @param  {Array}  arr 待调整的数组
 * @return {Array}
 */
function heapSort(arr) {
    // 检验：非数组、空数组直接结束函数调用。
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr.length === 0) {
       return [];
    }

    if (arr.length === 1) {
        return arr;
    };

    // 构建大顶堆
    for (let i = parseInt(arr.length/2 - 1); i >= 0; i--) {
        // 从第一个非叶子节点从下至上，从右至左调整结构
        heapify(arr, i, arr.length);
    }

    // 堆排序
    for (let j = arr.length - 1; j > 0; j--) {
        // 交换堆顶元素与末尾元素
        [arr[0], arr[j]] = [arr[j], arr[0]];

        // 重新对堆进行调整
        heapify(arr, 0, j);
    }

    return arr;
}
