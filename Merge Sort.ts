const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(`original: ${numbers}`)

function mergeSort(arr: number[]): number[] {
    if (arr.length === 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}


function merge(left: number[], right: number[]): number[] {
    const result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        const leftValue = left[leftIndex]
        const rightValue = right[rightIndex]
        if (leftValue < rightValue) {
            result.push(leftValue)
            leftIndex++
        } else {
            result.push(rightValue)
            rightIndex++
        }
    }
    const remainingLeft = left.slice(leftIndex)
    const remainingRight = right.slice(rightIndex)
    const remaining = remainingLeft.concat(remainingRight)
    return result.concat(remaining)
}

const sort = mergeSort(numbers)
console.log(`mergeSort: ${sort}`)



