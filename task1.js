// Напиши функцию, которая принимает массив объектов с полями name и age и возвращает новый массив,
//  в котором каждый объект имеет дополнительное поле greeting, 
//  содержащее строку вида "Привет, {name} ({age})!".



let user = [{ name: 'denis', age: 28, }, { name: 'kolja', age: 34, }]

function username(arr) {
    let arr1 = arr.map(function (item, index, array) {
        item.greating = `Привет, ${item.name} (${item.age})!`
        return item
    })
 return arr1
}
console.log(username(user));







