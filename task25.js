



function capitalizeFirstLetter(str) {

    let arr = str.split('')
    arr[0]= arr[0].toUpperCase()
    return arr.join('')
}

(capitalizeFirstLetter('пример строки'))