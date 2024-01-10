// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.



function strip(str) {
  let arr = str.split(' ')
  arr1 = arr.reduce(function (acc, item) {
    if (item !== '') {
      acc.push(item)
    }
    return acc
  }, [])
  return arr1.join(' ')
};
(strip("    Pasha is  a   good   boy"));; // "Pasha is a good boy"