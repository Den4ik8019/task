// Напишите функцию removeDuplicate(str), которая возвращает строку,
//  очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.

// function removeDuplicate(str) {
//   return
// };

// removeDuplicate("вишня, груша, слива, груша"); // "вишня, груша, слива"
// removeDuplicate("redev, redev, str"); // "redev, str"


let str = ("вишня,груша,слива,груша")

function removeDuplicate(str) {
    let str1 = str.split(',')
    let str2 = str1.reduce(function (acc, item) {
        if(!acc.includes(item)){
              acc.push(item)
        }
      return acc
    }, [])

    return str2
};
console.log(removeDuplicate(str));
