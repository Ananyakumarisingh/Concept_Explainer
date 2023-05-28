// function func(params) {
//   console.log('clg1');
//   return function() {
//     console.log('clg2');
//     params();
//     return function() {
//       console.log('clg4');
//       return 'clg5';
//     }
    
//   }
// }

// func(function(){
//   console.log('clg3');
// })()();


// const sum = new Function('a', 'b', 'return a + b');
// console.log(sum(2, 6));
// const num = [1,2,3,4,5,6,8];
// const max = Math.max.apply(null, num);
// console.log(max)

// function Person () {
//   console.log(this)
// }

// Person()

// var func1 = function func2() {
//     console.log("clg");
// }

// func1();
// func2();

var arr = ["Aman", "Ankush", "Nru", "Char", "Al"];

var newArr = arr.map(function(el) {
    if (el[0] === "A")   return el;
});

console.log(newArr)