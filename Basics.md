# Console: 
The console object provides access to the browser's debugging console (e.g. the Console in Chrome). The specifics of how it works varies from browser to browser. <br>
The console object can be accessed from any global object like window.console but it can be referenced as simply console.<br>
**Console** is an **object** and **log** is a **method of console**. <br>

1. **console.log():** Print the given statement. *e.g., console.log("Hello Console")*<br>
2. **console.table():** Create a table of given object in the method. *e.g., obj = {name: 'Sam'} console.table(obj)*<br>
3. **console.warn():** Given the warning with the message given as an argument. *e.g., console.warn("This is a warning!")*<br>
4. **console.time():** Start the time. *e.g., console.time("Your Code took")*<br>
5. **console.timeEnd():** return the end time. *e.g., console.timeEnd("Your code took")*<br>
6. **console.assert():** check whether the result is true or not. If not then return an assertion error. *e.g., console.assert("500<150, 'age>150 is not possible')*<br>
7. **console.error():** Return an error with a message. *e.g., console.error("This is an error")*<br>
8. **console.clear():** Clear the console.<br>

# Type of Variables:
1. **const:** It need to be assigned or initialised at the time of declaration only otherwise it will through an error. It cannot be reassigned. e.g., <br>
*const name = "tom"; <br>
const name = "jerry"; ===> Error (re-declaring and re-assigning a constant variable).*

2. **let:** It has a block level scope. It cannot be re-declared in a block or but can be reassigned. e.g., <br>
*let name = "tom"; <br>
{ let name = "jerry";<br>
 name = "pengiun"; <br>
 console.log(name);}<br>
 console.log(name); ===> Output is:  "pengiun" "tom".*

3. **var:** It is a global variable which can be reassigned. If it is reassigned in any block then the value of global variable will change. e.g.,<br>
 *var name = "tom"; <br>
 { name = "jerry";} <br>
 console.log(name) ===> Output of name after coming out of block is "jerry".*

# Rules for creating Javacript Variable:
1. Cannot be a number
2. Can start with a letter, number, underscore or $.
3. Case Sensitive. 

# Type of datatypes:
1. **Primitive Datatype:** Memory allocation in Stack. THese are base datatype.
    - Numbers
    - Strings
    - Boolean
    - Null: Return object datatype but is a primitive datatype.
    - Undefined
    - Symbol: These are recently introduced in ES6.
2. **Reference Datatype:** Memory allocation in Heap (Dynamic Memory). These are Object datatype.
    - Arrays
    - Object literals
    - Functions
    - Dates

# Type Conversion: *Explicit Conversion of datatypes* 
1. **to String:**
    - String(20) => "20"
    - String([1,2,3,4]).length => 7
    - String(true) => "true"
    - x.toString() => "x"
2. **to Number:**
    - Number("20") => 20
    - parseInt("20.648") => 20
    - parseFloat("20.648") => 20.648
    - x.toFixed(2) = 20.64
    - Number("872y8") => NaN
    - Number(array) => NaN

### Type Coercion: *Implicit Conversion of datatypes* 
1. "213" + 74 => 21374

# 
