// Напишите функцию isUpperCase(str, character), которая определяет, 
// в каком регистре написан символ строки в указанной позиции. 

// Если он написан в верхнем регистре - возвращать true, если в нижнем – false.
// Можно же просто по вернуть чет типо str[character] === str[character].toUpperCase(). 
// Под character тут понимается индекс
function isUpperCase(str, character) {
 return  str[character] === str[character].toUpperCase()
    
}
console.log(isUpperCase('tasks JavaScript', 6));; // true
