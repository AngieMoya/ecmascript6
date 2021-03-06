// operador de reposo que extrae las propiedades de un objeto que aun no se ha construido

const obj = {
    nombre: "Angie",
    age: 23,
    country: "CO"
};

let {nombre, ...all} = obj;
console.log(nombre, all);

//propiedades de propagacion, unir elementos de objetos a un nuevo objeto

const obj = {
    nombre: "Angie",
    age: 23
}

const obj1 ={
    ...obj,
    country: "CO"
}

console.log(obj1);

// promise.finally

const helloWorld = () => {
    return new promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test error"))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizó"))
//no se ejecuta, revisar!

// como se puede agrupar bloques de regex y acceder a cada uno de ellos

const regexData =/([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-04-20");
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);