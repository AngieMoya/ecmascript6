function newFunction(name, age, country) {
  var name = name || "Oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// ESMAScript6 

function newFunction2(name="Oscar", age=32, country = "MX"){
    console.log(name, age, country);
}

newFunction2();
newFunction2("Angie", 23, "CO");

let hello = "hello";
let world = "world";
let epicphrase = hello + ' ' + world;
console.log(epicphrase);

//ECMAScript6
let epicphrase2 = `${hello} ${world}`;
console.log(epicphrase2);


let phrase = "esta es la primera frase \n" + "segunda frase del texto.";

// ECMAScript6
let phrase2 = `esta es la primera frase
segunda frase del texto.`;

console.log(phrase);
console.log(phrase2);


let person = {
    "nombre" : "Angie",
    "age" : "23",
    "country":"CO"
}

console.log(person.nombre, person.age);

//destructuring

let {nombre, age} = person;
console.log( nombre, age);

// array destructuring

let team1 = ["Erik", "Maximiliano", "Angie"];
let team2 = ["Pepe", "Pablito", "Paulina"];

let team = ["Francisco",...team1,...team2];
console.log(team);


let nombre = "Angie";
let age = 23;

//ES5 
obj = {nombre: nombre, age: age};

//ES6

obj2 = {nombre, age};
console.log(obj2)

//arrow functions

const names =[
  {name:"Oscar", age:"32"},
  {name: "Yesica", age:"27"}
]

let listOfName = names.map(function(item){
  console.log(item.name)
});

let listOfName2 = names.map(item => console.log(item.name))

let listOfName3 = (nombre, age, country) => {
  //...
}

let listOfName4 = nombre => {
  //...
}

const square = num => num * num;

//promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log("hola"))
  .catch(error => console.log(error));

// clases, módulos y generadores

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator.calculator();
console.log(calc.sum(2,2));

//importando y exportando

import {hello} from "./module";

hello();

//generators

function* helloWorld() {
  if(true) {
    yield "Hello, ";
  }
  if(true){
    yield "World";
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


