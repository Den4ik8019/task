// Ваша задача написать функцию, которая принимает в качестве параметра строку
// и увеличивает каждую "букву" строки на число позиции, которую она занимает.

// Например:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


let str = "abcd"


function strAccum(str) {


          
    let arr = str.toLowerCase().split("");
    let arr1 = arr.map(function (item, index) {

        return (item[0].toUpperCase()) + (item.repeat(index));

    })

    return arr1.join("-")
}

console.log(strAccum(str));








