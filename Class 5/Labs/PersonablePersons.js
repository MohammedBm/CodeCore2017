// Create two person objects with an "age" attribute and a "name" attribute. Then, add a "greet" method to both people. The method should accept a person as a parameter and outputs the following:
//
// "Hello, [name1]. I am [name2]. Pleased to meet you." if person1 is older than person2.
//
// "Yo [name2]. I'm totally [name1]. Wsup!." if person2 is older than person1.
//
//
// let person1 = {
//   age:23,
//   name:"Mohammed"
// }
//
// let person2 = {
//   age:25,
//   name:"OP"
// }

let person = function(age, name) {
    this.age = age;
    this.name = name;
    this.greet = function(newPerson) {
        if (this.age < newPerson.age) {
            console.log(`Hello, ${newPerson.name }. I am ${ this.name} Pleased to meet you.`)
        } else {
            console.log(`Yo ${newPerson.name } I'm totally ${ this.name}. Wsup! `);
        }
    }
}
let person1 = new person(25, "mohammed")
let person2 = new person(26, "Braden")
let person3 = new person(10, "young")

person1.greet(person2);
person2.greet(person1);
person3.greet(person1)
