//con replace encontraba solo la primera palabra 
const string = "JavaScipt es maravilloso, con JavaScipt puedo crear el futuro de la web";
const replaceString = string.replace("JavaScipt", "Python");
console.log(replaceString);

//replaceAll 
const string = "JavaScipt es maravilloso, con JavaScipt puedo crear el futuro de la web";
const replaceString2 = string.replaceAll("JavaScipt", "Python");
console.log(replaceString2);

//metodos privados, se pueden utilizar dentro de las clases

class Message {
    show(val) {
        console.log(val);
    };
    get #add(val) {
        //...
    }
}

const message = new Message();
message.show("Hola!");

//promise any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));


//

class anyClass {
    constructor(element) {
        this.ref = new weakRef(element)
    }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);




