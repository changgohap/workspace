const products = [
    { name : 'cucumber', type : 'vegetable'},
    { name : 'banana', type : 'fruit'},
    { name : 'carrot', type : 'vegetable'},
    { name : 'apple', type : 'fruit'},
]

const fruitFilter = function (product) {
    return product.type === 'fruit'
}

const newArry = products.filter(fruitFilter)

console.log(newArry)

//step2

const newArry2 = products.filter( (product) => { 
    return product.type = 'vegetable'})
console.log(newArry2)