# Objects
Object have properties and methods. It has states and behavior.

# Constructor
It is a kind of template through which we can create an object.
<pre>
var name;

function constructor(name){
    this.name = name;
    console.log(`"Hey! $(name).`);
}

person1 = new constructor("Jerry"); 
console.log(person1);        \\ Hey! Jerry. and constructor {name: "Jerry"}
</pre> 


# Object Prototype
Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.
A link is made between the object instance and its prototype (its __proto__ property, which is derived from the prototype property on the constructor), and the properties and methods are found by walking up the chain of prototypes.

<pre>
obj = {
    name: "Jerry",
    Channel: "CN"
}

function Obj(name){
    this.name = name;
}
Obj.prototype.setname = function(name){
    this.name = name;
}

Obj.prototype.getName = function(){
    return this.name;
}

let obj2 = new Obj("Tom");
console.log(obj2)     // Tom
console.log(obj)
</pre>
**In this, __proto__ prototype of obj object will contain all the methods, functions, properties created by obj.**

# Prototype Inheritance

<pre>
const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates tom object
let tom = Object.create(proto);
tom.name = "tom";
tom.role = "Programmer";
// tom.changeName("tom2")
// console.log(tom)

// This also creates tom object
const harry1 = Object.create(proto, {
    name: { value: "tom", writable: true },   // writable is used for calling changeName function.
    role: { value: "Programmer" },
});
harry1.changeName("Tom2")
// console.log(tom1)

// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let TomObj = new Employee("Tom", 345099, 87);
console.log(TomObj.slogan())

// Programmer    
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);      // Inheritance from Employee constructor
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let jerry = new Programmer("Jerry", 2315125, 1, "Javascript");
console.log(jerry);
</pre>