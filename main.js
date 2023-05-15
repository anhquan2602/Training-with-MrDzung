let map = {}

function insert(x) {
    map[x] = true
}

function find(x) {
    return map[x]
}

function del(x) {
    delete map[x]
}

insert(1)
insert(2)
insert(3)
del(1)
console.log(find(1))


map = {}

function findMap(arr, k) {

    for (let i = 0; i < arr.length; i++) {
        if (map[k - arr[i]] == true) {
            return true;
        } else {
            map[arr[i]] = true;
        }
    }
    return false;
}

console.log(findMap([1, 2, 3, 4, 5], 9))