## __VAR vs LET vs CONST__ -
__VAR__ was there from the begining of the JavaScript and __LET__ and __CONST__ where introduced in the `ES6 version` of JavaScript to fulfill or overcome the limitations of __var__.

## __Scope__ -
A __scope__ is a cretain region of a program where a defined variable exist and can be recoganised and beyond that can't be recoganised.

    Types-
    1. Global scope -

    2. Block scope - let and const are block socpe. block is represented as 

    {
      let a = 5;
      const b = 15;
      var x = 10;

      console.log(b); ----------- it will print 10, and let and const are only accessable in this block;
    }
    console.log(a); ----------- it will not print 5 and throws a refrence error a is not defined;

    console.log(x); ---------- it will print 10;


    3. Functional scope - var is function scope.


### __Variable shadowing__ - 
So, in JS the into of let and const in ES6 along with block scoping allows __Variable shadowing__. While shadowing a variable it should not cross the boundary of the scope. We can shadow var variable by using let but not vise versa, and even if we are doing in it is called illigal shadowing and throws an error variable is already defined.

    function test() {
      var a = "Hello";
      let b = "Bye";
      if (true) {
        let a = "Hi"; ---------------------// Here the value of variable a ("Hello") is going to overshadow by ("Hi")
        console.log(a);   -----------------// But as it is in block scope it will only be accessable indise this block

        var b = "Goodbye"; ----------------// it will not overshadow as it is an illigal shadowing.
        console.log(b); -------------------// will throw an error variable is already defined.
      }
    
      console.log(a);  --------------------// outside of that block it will remain ("Hello")
    }

     res:-  Hi
            Hello


### __Declaration___ - 
#### __Declaration___ - 
__var__ can be re-daclaration but __let__ and __const__ can't.
    
    var a;
    var a;  ------------// Can

    let b;
    let b;  ------------// Can't

    const a;
    const a;  ------------// Can't

#### __Declaration without initialisation___ - 
We can declare __var__ and __let__ without initialising but can't decleare __const__.
    
    let a;
    var b;
    const c; ---------------// It will thow an error "Missing initialiser in const variable"

#### __Re-Initialisation___ - 
We can re-initialise __var__ and __let__ but can't re-initialise __const__.

    var a = 6;
    a = 5;  ------------// Can

    let b = 4;
    b = 5;  ------------// Can

    const c = 5;
    c = 4  ------------// Can't. Error- "Assignment to a constant variable"


#### __Hoisting__ - 
During the creation phase JS moves the `variable` and `function` declaration to the top of the code and this is known as hoisting. 

`Example -`

    1. VAR -
    
      * var count; ----// After Hosting
      
      console.log(count); -------// It checks if the variable existed or not. So, as it existed (*) it shows undefined.
      var count = 1;


    2. LET & const - Yes, here also hosting occurs but the variables are stored in the *Temporal Dead Zone so it throws an error.

      * let count; --------// After Hosting
      * const count; ------// After Hosting
      
      console.log(count); ---------// Error-"Can't access 'count' before initialisation"
      let count = 1;

_`Note - In hoisting var doesn't gives any warning just shows undefined. Unlike var, let and const are also hosted but gives a warning "Can't access 'count' before initialisation"`_

* __Temporal Dead Zone__ is the time b/w the declaration and initialisation of let and const variables. It is a term to describe the state where variables are in the scope but they are not yet decleared.
