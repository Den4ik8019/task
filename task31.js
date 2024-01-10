// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

let str = "Сила тяжести приложена к центру масс тела";
function cutString(str, n) {
    let arr = str.split(' ')
   let deletarr= arr.splice(n)
    return arr.join(' ')
};
console.log(cutString(str, 5));  // "Сила тяжести приложена к центру"
console.log( cutString(str, 1));; // "Сила"