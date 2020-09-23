# Symbols

Symbols are primitive type datatype which are always different when created even if they are given same identifier. All symbols have different reference. Otherwise all other primitive datatypes have same reference if their value is same i.e., stored in heap.

<pre>

// Symbols
const sym1 =  Symbol('My identifier');
const sym2 =  Symbol('My identifier');
// console.log('Symbol is ', sym1);
// console.log('Type of Symbol is ', typeof sym1);
console.log(sym1 === sym2);       // false

const a = "this is";
const b = "this is";

console.log(a === b);       // true
console.log(null === null);         // true
console.log(undefined === undefined);       // true

const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');                        // (k1 === k2) => false

myObj = {};
myObj[k1] = "Stefan";
myObj[k2] = "Damon";
myObj["name"] = "Good boy"
myObj[4] = "Good int"


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // !! ALERT !!: cannot do this to get Damon because it is same as myObj["k2"]


// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key])
}

console.log(JSON.stringify(myObj));

</pre>