// Напишите функцию replaceAll(find, replace, str), 
// которая заменяет в строке str все вхождение подстроки find на подстроку replace.



const str = 'abc def def lom abc abc def';
function replaceAll(find, replace, str) {
    let arr = str.split(' ').reduce(function (acc, item) {
        if (find == item) {
            acc.push(replace)
        } else {
            acc.push(item)
        } return acc
    }, [])
    return arr.join(' ')
};
console.log(replaceAll('abc', 'x', str));  