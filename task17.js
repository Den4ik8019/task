// function toSnakeCase(str) {
//   return
// };

// toSnakeCase("redevCourses") // "redev_courses"
// toSnakeCase("yellowStoneField") // "yellow_stone_field"

function toSnakeCase(str) {

  let arr = str.split('')
  let arr1 = arr.map(function (item, index) {
    if (item.toUpperCase() === item) {
      return "_" + item.toLowerCase()
    }
    return item.toLowerCase()
  })
  return arr1.join('')
};

console.log(toSnakeCase("yellowStoneField"));




let arr12 = 'kfldjhgktrj'



 
console.log( arr12.join()); 

arr.splice(0,0,'yte,',dsjif)