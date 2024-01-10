function moveZeros(array) {
    arr = array.reduce(function (acc, item, index) {
        if (item !== 0) {
            acc.unshift(item)
        } else {
            acc.push(item)
        }
        return acc
    }, [])
    return arr
};
console.log(moveZeros(['a', 0, 'b', 0, 'd']));  // [false,1,1,2,1,3,"a",0,0]
