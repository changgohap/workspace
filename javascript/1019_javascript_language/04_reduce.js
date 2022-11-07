const numbers = [90, 80, 70, 100]

// 총합

const sumNum = numbers.reduce(function (result, number) {
    return result + number 
},0)

console.log(sumNum)

const avgNum2 = numbers.reduce((result, number) => {
    return result + number 
},0) / numbers.length