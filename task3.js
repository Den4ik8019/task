// В этом небольшом задании вам дана строка чисел, разделенных пробелами,
//  и вы должны вернуть самое большое и самое маленькое число.



// function list(str) {
//   return
// };

// list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"); //"-123 666"
// list("-16 12 -100 5 100 12"); //"-100 100"
// list("-1 2 3 4 -6 66 10"); //"-100 100"
// ```


let list = ("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6")
function numberPush(list) {
    let recgStr = list.split(' ')
    let bigNumb = Math.max(...recgStr)
    let smallNumb = Math.min(...recgStr)
    let num = `${bigNumb}  ${smallNumb} `
    return num
}
console.log(numberPush(list));




