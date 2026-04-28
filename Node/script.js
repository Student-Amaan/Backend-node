let n = 5;

for(let i = 0; i<=n; i++){
    console.log("Hello Aman", i)
}

console.log("bye bye")


console.log(process.argv)

let args = process.argv

for(let i=2; i<=args.length; i++){
    console.log('Hello & welcom', args[i])
}

const math = require('./Fruits')
console.log(math)