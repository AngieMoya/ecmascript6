//object.entries permite devolver la clave y los valores de una matriz
 const data ={
     frontend:"Oscar",
     backend:"Isabel",
     design:"Ana",
 }
//regresa un arreglo que contiene arreglos con las claves y valores del objeto
 const entries = Object.entries(data);
 console.log(entries);
 console.log(entries.length);

//object.values devuelve los valores de un objeto a un arreglo
const data = {
    frontend:"Oscar",
    backend:"Isabel",
    design:"Ana",
}

//regresa un arreglo con los valores del objeto

const values = Object.values(data);
console.log(values);
console.log(values.length);

// pasa como parametro la cantidad de caracteres y los caracteres que desea agregar

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, " -----"));

//Async await

const helloworld = () => {
    return new promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    })
};

const helloAsync = async () => {
    const hello = await helloworld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloworld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction(); //no me ejecuta, revisar!