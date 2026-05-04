// let arr1 = [1,2,3]
// let arr2 = [1,2,3,3]

// arr1.sayHello = () =>{
//     console.log("hello I am arr 1")
// }
// arr2.sayHello = () =>{
//     console.log("hello I am arr 2")
// }
            // Factory function not good
//  function factoryfnc(name, age) {
//     let person = {
//         name: name,
//         age: age,
//         talk(){
//             `hellow I am a ${name} function`
//         }

//     }

//     return person;
    
// }

// let p1 = factoryfnc("aman", 24)
// let p2 = factoryfnc("danish", 22)

//                  New Operator against factory function

// constractor doesn't return any things and start with capital

// function Person(name,age){
//     this.name = name;
//     this.age = age;

// }

// Person.prototype.talk = function () {
//     console.log(`Hi my name is ${this.name}`);
// }

// let p1 = new Person("aman" , 25)
// let p2 = new Person("danish" , 15)


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi this is my ${this.name}`);
    }
}

let p1 = new Person("aman", 24)
let p2 = new Person("danish", 22)

