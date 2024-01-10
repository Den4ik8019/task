
// Напишите функцию, которая возвращает сумму двух наименьших положительных чисел,
//  учитывая массив из минимум 4 положительных чисел.

function sumMin(array) {
    let arr = array.sort((a, b) => a - b).filter((item) => item > 0)
    if (arr.length > 4) {
        return arr[0] + arr[1]
    }
};
console.log(sumMin([12, 423, 54, 1235, 3, 15, 2, 52]));  // 5
