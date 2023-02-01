const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(`original: ${numbers}`)

function bubleSort(arr: number[]) { // O(n^2)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let hold = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = hold
            }
        }
    }
}

bubleSort(numbers)
console.log(`bubleSort: ${numbers}`)