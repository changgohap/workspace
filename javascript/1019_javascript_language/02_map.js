// forEach + return

const numbers = [1, 2, 3, 4, 5]


// step1 
const doubleEle = function (number) {
    return number * 2
}

const newArr = numbers.map(doubleEle)
console.log(newArr)

// step2
const newArry = numbers.map(function (number) { 
    return number * 2
})

//step3

const newArry2 = numbers.map((number) => {
    return number * 12
})