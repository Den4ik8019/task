
// Напишите функцию, которая проверит, является ли строка палиндромом.

// (Для того, чтобы решить эту задачу, надо загуглить что такое палиндромом)

//let isPalindrom = (str) => str === str.split('').reverse().join('');



// function isPalindrom(str) {
//     let arr = str.toLowerCase().split('').reduce(function (acc, item) {
//         if (item !== ' ') {
//             acc.push(item)
//         }
//         return acc
//     }, [])
//     let reversedStr = str.toLowerCase().split('').reverse().reduce(function (acc, item) {
//         if (item !== ' ') {
//             acc.push(item)
//         }
//         return acc
//     }, [])
//     return arr.join() === reversedStr.join()

// };
// console.log(isPalindrom("Аргентина манит негра"));
// console.log(isPalindrom("10101")); //true



function isPalindrom(str) {
    str = str.split(" ").join("").toLowerCase();
  
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
    
  

    // let isPalindrom = (str) => {
    //     let reversedStr = str.split('').reverse().join('')
    //     console.log(reversedStr);
    //     return str === reversedStr
    // }
    
