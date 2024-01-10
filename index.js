// Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

// Если функции передана правильная строка PIN, верните true, иначе верните false.

function correctPin(str) {
    arr = str.split('')
    arr1= arr.map(function(item,index,array){
      let pincode= parseInt(item)
     return pincode 
    })
   
return arr2
};

console.log(correctPin("5569"));; //true
correctPin("556711"); //true
correctPin("12312312"); //false
correctPin("qqqq"); //false