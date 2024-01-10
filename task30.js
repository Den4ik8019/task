
// Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.

function alphabetize(str) {
    let arr = str.split('').sort().join('');
    return arr
};

alphabetize("Europe"); // "Eeopru"
alphabetize("redev"); // "deerv"