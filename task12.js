// В данной задаче Вам нужно удалить из одного массива все элементы второго массива.

// Например:

// arrayDiff([1,2],[1]) ==> [2]
// arrayDiff([1,2,2,2,3,4],[2,3]) ==> [1,4]


// deletedItems.push()



function arrayDiff(arr){
  let arr1 = arr.filter(function(item,index,array){
    return !arr.includes(arr[item])

  })
return arr1
}


 console.log(arrayDiff([1,2],[1])); 

