// function findK(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == k) {
//             return i;
//         }
//     }
//     return -1;
// }
// let a = []
// console.log(findK([1, 2, 3, 4], 3))


// class Student {
//     constructor() {
//         this.data = {};
//     }

//     inputScore(name, score) {
//         this.data[name] = score
//     }

//     getScore(name) {
//         return this.data[name]
//     }

//     interate() {
//         for (const key in this.data) {
//             console.log(key, this.data[key])
//         }
//     }
// }

// student = new Student()

// student.inputScore("A", 12)
// student.inputScore("B", 7)
// student.inputScore("Z", 5)
// console.log(student.getScore("A"))
// student.interate()


// student1 = new Student()
// student1.inputScore("A", 5)
// console.log(student1.getScore("A"))




// function input(data, name, score) {
//     data[name] = score
// }

// function output(data, name) {
//     return data[name]
// }

// data = {}
// input(data, "A", 9)
// input(data, "B", 3)

// for (const key in data) {
//     console.log(key, data[key])
// }

// console.log(output(data, "A"))

// Bai 1: Viet class quan nhap hang theo ma ,so luong, gia.
// Nhap theo ma , so luong, gia
// Tra ve 1 ma san pham co so luong bao nhieu
// Tra ve 1 ma san pham co so luong nhieu nhat
// Tra ve 1 ma san pham co gia thap nhat

class Store {
    constructor() {
        this.quantity = {};
        this.price = {}
    }

    input(code, quantity, price) {
        this.quantity[code] = quantity // so luong hang hoa
        this.price[code] = price // gia tri hang hoa
    }

    // tìm số lượng theo tên
    getQuantityByCode(code) {
        return this.quantity[code];
    }

    // tìm giá theo tên
    getPriceByCode(code) {
        return this.price[code];
    }

    // add thêm số lượng
    addMoreQuan(code, quan) {
        if (this.quantity[code] > 0) {
            this.quantity[code] += quan
        }
        return this.quantity[code];
    }

    updatePrice(code, newPrice) {
        if (this.price[code] > 0) {
            this.price[code] = newPrice
        }
        return this.price[code]
    }

    buy(code, quan) {
        if (this.quantity[code] > 0) {
            this.quantity[code] = this.quantity[code] - quan
        }
        return this.quantity[code]
    }

    getMaxQuantity() {
        let max = Number.MIN_SAFE_INTEGER;
        let newCode
        for (const code in this.quantity) {
            if (this.quantity[code] > max) {
                max = this.quantity[code]
                newCode = code
            }
        }
        return newCode
    }
    getLowestPrice() {
        let low = Number.MAX_SAFE_INTEGER;
        let newCode
        for (const code in this.price) {
            if (this.price[code] < low) {
                low = this.price[code]
                newCode = code
            }
        }
        return newCode;
    }
}

let store = new Store()
store.input("Banh", 10, 40)
store.input("Keo", 20, 5)
store.input("Sua", 30, 10)
store.input("Banh my", 15, 10)

store.addMoreQuan("Keo", 20)

store.updatePrice("Keo", 20)

store.buy("Keo", 10)
console.log(store.getQuantityByCode("Keo"));
console.log(store.getPriceByCode("Keo"))