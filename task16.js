// // Напишите функцию, которая принимает строковый параметр и меняет буквы в словах в обратном порядке.
//  Все пробелы в строке должны быть сохранены.

// // Например:

// // This is an example! -> sihT si na !elpmaxe


let str = "This is an example!"

function replaceMent(str) {
    let arr2 = []
    let arr = str.split(' ')


    let arr1 = arr.map(function (item) {
        return item.split('').reverse().join('')
    })
    return arr1.join(' ')
}
console.log(replaceMent(str)); 