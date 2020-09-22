# OOPS from ES6

console.log("this is Tutorial31.js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }

    static add(a, b){                    // no need to create object for static method.
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){     // no need to create object for static method.
        return a * b;
    }
}

// harry = new Employee("Tom", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
jerry = new Programmer("Jerry", 3, "Lays", "Go", "Rohan420")
console.log(jerry)
console.log(jerry.favoriteLanguage())
console.log(Programmer.multiply(5, 7));


