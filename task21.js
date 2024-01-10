
// Представьте, что Вы и Ваши друзья решили создать команду мечты.
//  У этой команды должно быть крутое секретное имя, которое содержит зашифрованную информацию о ней.
//   Например, это могут быть первые буквы имен его членов в верхнем регистре, отсортированные по алфавиту. 
//   Ваша задача - написать функцию createDreamTeam (members), которая возвращает имя созданной команды (строку)
//    на основе имен ее участников (Array). Удачи!

// Имена участников должны быть строками. Значения другого типа следует игнорировать. 
// В случае неправильного типа членов функция должна возвращать false.

// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) // 'ADMM';
// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) // 'LOO';

// function createDreamTeam(arr) {
//     let arr2 = arr.every(function (item, index) {
//         if (typeof item !== 'string') {
//             return true
//         }
//     })
//     if (arr2) {
//         return false
//     }
//     let arr1 = arr.reduce(function (acc, item, index, array) {
        
//         if (typeof item === 'string') {
//             acc[0]+item[0]

//         }
//         console.log( acc[0]+item[0]);
//         return acc
//     }, )

//    // return arr1
// }


// let arr2 =arr.map(function(item,index){
// return arr2.push(item[0])    
// })






function createDreamTeam(arr) {
    let arr2 = arr.every(function (item, index) {
        if (typeof item !== 'string') {
            return true
        }
    })
    if (arr2) {
        return false
    }
    let arr1 = arr.reduce(function (acc, item, index, array) {
        if (typeof item === 'string') {
            acc.push(item[0])
        }
        return acc
    }, [])

    return arr1.join('')
}
 console.log(createDreamTeam([ 'Ann', 'Dmitry', 'Max'])); 

// //console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])); 

// //console.log(createDreamTeam([1111, 22, null])); 


// function createDreamTeam(arr) {
//     let isEveryIteimStr = arr.every(function (item) {
//       if (typeof item !== "string") {
//         return true;
//       }
//     });
//     if (isEveryIteimStr) {
//       return false;
//     }
//     let abbreviation = arr.reduce((acc, str) => acc + str[0], '')
  
//     return abbreviation;
//   }
//   console.log(createDreamTeam(["Ann", "Dmitry", "Max"]));
  