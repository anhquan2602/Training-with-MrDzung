let arr = [1, 2, 4]
let k = 2

function find(arr, k) {
    console.log("Enter function")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            return true
        }
    }
    return false
}

function findMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

let result1 = find([1, 2, 3, 6, 7], 6)
console.log(result1)
console.log(findMax([4, 1, 4, 5, 9, -1]))

/*
1. Tim min
*/
function findMin(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return i;
}



/*
2. Tinh tong cac so trong mang
*/
function tinhTong(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    printf("Tong cua mang la: %d", sum);

    return 0;

}


/*
3. Tim so lon thu 2 trong mang
*/

function timSoLonThuHai(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return i;
}

/* tìm số lớn thứ 2 trong mảng*/
function findMaxIndex(arr) {
    if (arr.length == 0) {
        return -1
    }
    let maxIndex = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[maxIndex] < arr[i]) {
            maxIndex = i;
        }
    }
    return maxIndex
}

let result = findMaxIndex([2, 3, 6, 5, 1])
console.log("Max index", result)

function findMax2(arr) {
    let maxIndex = findMaxIndex(arr);
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max && i != maxIndex) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax2([2, 3, 6, 5, 1]))



class Student {
    constructor() {
        this.data = {};
    }

    inputScore(name, score) {
        this.data[name] = score
    }

    getScore(name) {
        return this.data[name]
    }

    interate() {
        for (const key in this.data) {
            console.log(key, this.data[key])
        }
    }
}

student = new Student()

student.inputScore("A", 12)
student.inputScore("B", 7)
student.inputScore("Z", 5)
console.log(student.getScore("A"))
student.interate()


student1 = new Student()
student1.inputScore("A", 5)
console.log(student1.getScore("A"))