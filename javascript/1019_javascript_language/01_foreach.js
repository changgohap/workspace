// step1 
const colors = ['red', 'green', 'blue']

const printClr = function(color) {
    console.log(color)
}

colors.forEach(printClr)

// step2
colors.forEach(function (color) {
    console.log(color)
})

// step3

colors.forEach((color) => {
    console.log(color)
})