//profundidad en matrices

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

//me permite mapear cada elemento, pasarlo a una foncion y aplanarlo segun el resultado

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//me permite eliminar los espacios de un string

let hello = "          hello World";
console.log(hello);
console.log(hello.trimStart());

let hello = "hello World        ";
console.log(hello);
console.log(hello.trimEnd());

//

try{

} catch{
    error
}

//fromEntries

let entries = [["name", "Angie"], ["age", 23]];

//nos regresa un objeto con clave y valor de cada uno de los arreglos que estan en entries
console.log(Object.fromEntries(entries));


//objeto de tipo simbolo

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
