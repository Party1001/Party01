//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [99, 6, 44, 2];
console.log(`original: ${numbers}`)
//arr = [2, 6, 44, 99]
//stack


function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1) {
    if (left > right) { //  4 > 3
        return arr
    }
    const pivot = right //pivot = 3
    const partitionIndex = partition(arr, pivot, left, right) //partitionIndex = 3
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1,)
}

function partition(arr: number[], pivot: number, left: number, right: number) {
    const pivotValue = arr[pivot]
    let partitionIndex = left
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex)
            partitionIndex++
        }
    }
    swap(arr, right, partitionIndex)
    return partitionIndex
}


function swap(arr: number[], index1: number, index2: number) {
    const holding = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = holding
}

quickSort(numbers)
console.log(`quickSort: ${numbers}`)
