let arr = []

function insert(x) {
    arr.push(x);
}

function find(x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return true
        }
    }
    return false
}

function del(x) {

}

insert(1)
insert(2)
insert(3)
console.log(find(1))