# Functions
A __function__ is a code snippet that can be called by other code or by itself, or a variable that refers to the function. When a function is called, arguments are passed to the function as input, and the function can optionally return a value. A function in JavaScript is also an object.

- ### Types of function - 
1. Anonymous function
2. Named function
3. Inner function
1. Recursive function
1. IIFE

### 1. What is function __Declarations__?
A declaratin of a function. It can also be called __function Defination__ or __function Statement__.

`Example -`

    function square(num) {
        return num * num;
    }

    consoel.log(square(5));              // 25

### 2. What is function __Expression__?
When you store a function inside of a veriable it is called function expression.

`Example -`
    
    const square = function(num) {              // as this function has no name it is know as *anonymous function
        return num * num;
    }

    consoel.log(square(5));              // 25

__`Anonymous function`__ `is a function which has no name and it can be assigned to a variable or can be passed as a *callback function.`

__`Callback function`__ `is a function which has no name and it can be assigned to a variable or can be passed as a *callback.`

### 3. What is __First class__ functions?
In a language where a function can be treated like a veriable there functions are called first class functions. In these cases function can be passed into another functions and can be used, manipulated, returned from those, and basically everything that a variable can do a function can also do.

`Example -`

    function square(num) {
        return num * num;
    }
    
    function display_square(fn) {
        consoel.log("square is : " + fn(5));              // Square is 25
    }

    display_square(square)

### 4. What is __IIFE__?
IIFE means immediately invoked function expressions 

`Example -`

    1.  (function square(num) {
            return num * num;
        })(5);                                // 25
    
    
    2.  (function (x) {
            return (function (y) {
                consoel.log(x);               // 1
                consoel.log(y);               // 2
                consoel.log(x * y);           // 2
            })(2);
        })(1);                                


### 5. What is function __scope__?

    1.  // The following variables are defined in the global scope
        const num1 = 20;
        const num2 = 3;
        const name = "Roadside coder";

        // This function is defined in the global scope
        function multiply() {
        return num1 * num2;
        }

        console.log(multiply());                 // 60

        // A nested function example
        function getScore() {
        const num1 = 2;
        const num2 = 3;

        function add() {
            return `${name} scored ${num1 + num2}`;
        }

        return add();
        }

        console.log(getScore());                 // "Roadside coder scored 5"
    
    2.  Output based question -
        for (let i=1; i<5; i++) {
            setTimeout(function () {
                console.log(i);                 // 1, after 1sec 2, after 1sec 3, after 1sec 4
            }, i * 1000); 
        };
        
        for (var i=1; i<5; i++) {               // var doesn't has a block scope so it will print
            setTimeout(function () {
                console.log(i);                 // 5, after 1sec 5, after 1sec 5, after 1sec 5
            }, i * 1000);
        };

### 6. What is function __hoisting__?
Functions are hoisted completely and it is copied to the scope. So it doesn't matter if we call before or after declaring it. It's still going to work.

- Globle scope -    

        functionName();

        function functionName() {
            console.log("Roadside coder");              // Roadside coder
        };

- function scope -    

        functionName();

        function functionName() {
            console.log(x);                             // x is defined in the local varible and it is called before exicution and it is var variable so it will print "undefined".
            var x = 5;
            console.log("Roadside coder");              // Roadside coder
        };

- function and global scope -    

        var x = 15;
        functionName();

        function functionName() {
            console.log(x);                             // x will print "undefined". *Why?
            var x = 5;
            console.log("Roadside coder");              // Roadside coder
        };

        *Why? - In the given example 1st it is going to hoist the global variable, then the local variables on top of global scope. So, it is going to return undefined.


### 7. Params VS Arguments?
__Params__ - The variable accepted by the function at the time of declaration is called __params__ or __parameter__.

__Arguments__ - The values passed at the time of calling or invoking the function are called __argumnets__.


    function square(num) {              // params
        console.log(num * num);
    };

    square(5);                  // arguments

