// console.log('hello, javascript')

// 선언식은 밑처럼 호이스팅(끌어올려지는)현상이 발생할 수 있으므로 표현식을 쓰는것이 좋음
console.log(add(2,7))
function add(num1, num2) {
    return num1 + num2
}


const sub = function (num1, num2) {
    return num1 = num2
}

console.log(sub(2,7))

/*const greeting = function (name = 'Anonymous') {
    return `Hi ${name}`
}

console.log(greeting())*/

// greeting 함수 arrow function 표현

const greeting = function (name) {
    return `Hi ${name}`
}

// 1단계 (제일 많이 쓰임)
const greeting = (name) =>{
    return `Hi ${name}`
}

// 2단계
const greeting = name => {
    return `Hi ${name}`
}

//3단계

const greeting = name => `Hi ${name}`
