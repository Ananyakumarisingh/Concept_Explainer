# Closures
###  Lexical Scope?
A scope refers to the current context of your code it can be rither globally or locally defined and with the ES6 version of JS we also have the block scope.

A lexical scope in js means that a variable defined outside a function can be accessible inside of another function defined after a veriable declaration but the oppoiste is not true. The variable defined inside the function will not be accessible outside that function.

    1.  let name = 'Ananya';                    // global scope
        function local() {
                                                // local scope
            console.log(name);                   // Ananya
        }

        local();

    2.  function local() {
        let name = 'Ananya';
        }
            console.log(name);                   // Error: name is not defined.

        local();

    3. function getName(){
            var name = 'Ananya';

            function display() {
                console.log(name);                // Ananya
            };

            display();
        };

        getName();

### Closures ?
A __closure__ is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

        1.  function makeFun() {
                var name = 'Ananya';
                function displayName() {
                    console.log(name);                              // Ananya
                };
                return displayName;
            }

            var myFnc = makeFun();
            myFnc();
