// // function findBig(arr, a) {
// //     let count = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] > a) {
// //             count = count + 1;
// //         }
// //     }
// //     return count;
// // }

// // console.log(findBig([8, 12, 5, 7], 6))

// function findA(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {}
// }

// console.log(findA([5, 5, 8]))






// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         let check = (n % i == 0);
//         if (check) {
//             return false
//         }
//     }
//     return true
// }

// // [2, 3, 5, 8, 12]
// // [1, 4, 6, 2, 10]

// // i = 0 [2]
// // Kiem tra 2 co trong mang kia khong

// function checkDuplication(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (findA(arr2, arr1[i])) {
//             return true
//         }
//     }
//     return false
// }

// function call(n) {
//     console.log(n)
//     if (n < 1) {
//         return
//     }
//     call(n - 1)
// }

// call(10)

// function sum(n) {
//     let result = 0;
//     for (let i = 0; i < n; i++) {
//         result += i;
//     }
//     return result
// }

// function recursiveCall(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n + recursiveCall(n - 1)
// }

// console.log(recursiveCall(10))


class Person {

    constructor(hairColor, skinColor) {
        this.hairColor = hairColor;
        this.skinColor = skinColor;
    }

    setHairColor(color) {
        this.hairColor = color;
    }

    setSkinColor(color) {
        this.skinColor = color;
    }

}


const quan = new Person("Đỏ", "Vàng");

const thang = new Person("Black", "Vàng");



class Node {

    constructor(value) {
        this.value = value
    }

    setLeft(left) {
        this.left = left
    }

    setRight(right) {
        this.right = right
    }

    getLeft() {
        return this.left
    }

    getRight() {
        return this.right
    }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

node1.setLeft(node2)
node1.setRight(node3)
node2.setLeft(node4)
node3.setLeft(node5)
node3.setRight(node6)
node5.setLeft(node7)


function max(a, b) {
    return a > b ? a : b
}

function deepth(node) {
    console.log(node)
    if (node.left == undefined && node.right == undefined) {
        return 1;
    } else if (node.left == undefined) {
        return 1 + deepth(node.left)
    } else if (node.right == undefined) {
        return 1 + deepth(node.right)
    } else {
        console.log("[node left]", node)
        return 1 + deepth(node.left)
            // return 1 + max(deepth(node.left), deepth(node.right))
    }

}



// [1,2,4,8]
// k  = 11

function count(arr, m) {
    if (arr.length < 4) {
        return false
    }
    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = i + 1; j < arr.length - 2; j++) {
            for (let k = j + 1; k < arr.length - 1; k++) {
                for (let x = k + 1; x < arr.length; x++) {
                    if (arr[i] + arr[j] + arr[k] + arr[x] == m) {
                        return true;
                    }
                }

            }
        }
    }
    return false;
}

console.log(count([1, 2, 3, 8, 11, 4], 10));

function smallDeficit(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    if (arr.length > 2) {
        for (let i = 0; i < arr.length; i++) {
            if (0 < arr[i] < smallest) {
                secondSmallest = smallest;
                smallest = arr[i];
            } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
                secondSmallest = arr[i];
            }
        }

        return secondSmallest - smallest;
    }
}

const numbers = [-1, 4, 3, 2, 1];
console.log(smallDeficit(numbers)); // Output: 2


function findBalance(arr) {
    let sumleft = 0;
    let sumright = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrTempLeft = arr.splice(0, arr[i]);
        for (let x = 0; x < arrTempLeft; x++) {
            sumleft += arrTempLeft[x];
        }
        let arrTempRight = arr.splice(arr[i], arr.length);
        for (let y = 0; y < arrTempRight; y++) {
            sumright += arrTempLeft[y];
        }
        if (sumleft == sumright) {
            return "Yes"
        }
    }
    return "No"
}
console.log(findBalance([6, 2, 0, 0]))