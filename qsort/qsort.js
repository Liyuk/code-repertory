// 严版
function qsort(arr, low, high) {
    var pivot;
    if (low < high) {
        pivot = partition(arr, low, high);
        qsort(arr, low, pivot - 1);
        qsort(arr, pivot + 1, high);
    }
    return arr;
}

// partition one
function partition(arr, low, high) {
    var pivot = arr[low];
    while (low <= high) {
        while (low <= high && arr[high] > pivot) {
            high--;
        }
        swap(arr, low, high);
        while (low <= high && arr[low] < pivot) {
            low++;
        }
        swap(arr, low, high);
    }
    return low;
}

// partition two
function partition(arr, low, high) {
    var pivot = arr[low],
        tmp = 0;
    var i = low,
        j = high + 1;
    while (true) {
        while (arr[++i] < pivot && i <= high);
        while (arr[--j] > pivot);
        if (i >= j) {
            break;
        }
        swap(arr, i, j);
    }
    arr[low] = arr[j];
    arr[j] = pivot;
    return j;
};

// es6
const qsort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const left = arr.filter((e, i) => e < arr[0] && i !== 0);
    const right = arr.filter((e, i) => e > arr[0] && i !== 0);
    return [...quickSort(left), arr[0], ...quickSort(right)];
}


// 标准答案
function qsort(arr, low, high) {
    var i = l,
        j = r,
        pivot = arr[l];
    while (i < j) {
        while (i < j && arr[j] > pivot) j--;
        if (i < j) {
            arr[i++] = arr[j];
        }
        while (i < j && arr[i] < pivot) i++;
        if (i < j) {
            arr[j--] = arr[i];
        }
    }
    arr[j] = pivot;
    if (l < i) qsort(arr, l, i - 1);
    if (r > i) qsort(arr, i + 1, r);
}

// 两头交换
function qsort(arr, low, hgih) {
    if (l < r) {
        var i = l,
            j = r,
            pivot = arr[(i + j) >> 1];
        while (i <= j) {
            while (arr[i] < pivot) i++;
            while (arr[j] > pivot) j--;
            if (i <= j) {
                swap(arr, i, j);
                j--;
                i++;
            }
        }
    }
    qsort(arr, l, j);
    qsort(arr, i, r);
}