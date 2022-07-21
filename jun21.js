function count_all_divisions(arr, n) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % n == 0) {
            count++
        }
    }
    return count
}
console.log(count_all_divisions([1, 5, 7, 8], 1))