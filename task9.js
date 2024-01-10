// Функция simple, в качестве параметра принимающая строку слов, возвращает длину самого короткого слова.

// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function simple(str) {
    let arr = str.split(' ')
let arr1= arr.map(function(item,index){
    return item.length
})
return Math.min(...arr1)
};
console.log(simple("qwe qwer qq"));  // 1
console.log( simple("qwwwwe awdad asdasd wqdqw") );// 5
console.log(simple("qwd ww qweqwe ww"));  // 2