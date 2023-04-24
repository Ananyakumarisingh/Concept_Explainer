## __MAP, FILTER and REDUCE__ -

### __map ?__ -
The map method is used to create a new array from existing one by appling a function to each one of elements of the array.

`How it works -`

    const nums = [1,2,3,4,5];
    
    const multiplyThree = num.map((curr, i, arr) => {                    [[ curr = the current element, i = index, arr = the array; ]]
    
      return curr * 3;
      or,
      return curr * 3+i;
    
    });

    console.log(multiplyThree); ---------//  [3,6,9,12,15];
    or,
    console.log(multiplyThree); ---------//  [3,7,11,15,19];

- _`Note - Polyfill is a technique to provide modern JavaScript features to older browsers that do not support them natively. In other words, polyfills allow developers to use newer JavaScript syntax and functionality without worrying about browser compatibility issues.`_ 

__`Polyfill for map -`__

    Array.phototype.myMap = function (cb) {
      let temp = [];
      
      for (let i=0; i < this.length; i++) {                  //  this refers to the array on which we are working on.
        temp.push(cb(this[i], i, this));                     //  this[i] => array[i], i => index, this => array;
      }

      return temp;
    }

    ----- How it works ------
    const nums = [1,2,3,4,5];
    
    const multiplyThree = num.myMap((curr, i, arr) => {                    [[ curr = the current element, i = index, arr = the array; ]]
      return curr * 3;
      or,
      return curr * 3+i;
    });
    console.log(multiplyThree); ---------//  [3,6,9,12,15];
    or,
    console.log(multiplyThree); ---------//  [3,7,11,15,19];

### __filter ?__ -
The __filter__ method takes each element from the array and applies a conditional statement against it, if the conditional statement returns true the element gets pushed into the output array and if returns false it doesn't. In short filter return only those elements which fulfills the conditional statement.

`How it works -`

    const nums = [1,2,3,4];
    const moreThanTwo = num.filter((curr, i, arr) => {                    [[ curr = the current element, i = index, arr = the array; ]]
      return curr > 2;
      
    });

    console.log(multiplyThree); ---------//  [3,4];

`Polyfill for filter -`

    Array.phototype.myFilter = function (cb) {
      let temp = [];
      
      for (let i=0; i < this.length; i++) {                  //  this refers to the array on which we are working on.
        if(cb(this[i], i, this)){
          temp.push();                             //  this[i] => array[i], i => index, this => array;
        }
      }

      return temp;
    }

    ----- How it works ------

    const nums = [1,2,3,4];
    const moreThanTwo = num.myFilter((curr, i, arr) => {                    [[ curr = the current element, i = index, arr = the array; ]]
      return curr > 2;
      
    });

    console.log(multiplyThree); ---------//  [3,4];

### __reduce ?__ -
__reduce__ method reduces the array of values down to just one value. It takes two parameters the callback function and the initial value.

`How it works -`

    const nums = [1,2,3,4];

    const sum = num.reduce((acc, curr, i, arr) => {                [[ acc = the accumulator it is the result of the previous accumulation currently it is the initialiser = 0,
                                                                      curr = the current element, i = index, arr = the array; ]]
      return acc + curr;
      
    },0);                                                         [[ I have taken the initial value as 0 ]]

    console.log(multiplyThree); ---------//  [10];

`Polyfill for reduce -`

    Array.phototype.myReduce = function (cb, initialValue) {
      let accumulator = initialValue;             // if we miss to take the initial value then the accumulator automatically takes the 1st element of the array as the initial
                                                     value and 2nd element as the current value.
      for (let i=0; i < this.length; i++) {                //  this refers to the array on which we are working on.

        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];             //  curr => this[i], i => index, this => array : curr => this[i] --> if it does 
                                                                                                 not has the accumulator

      }

      return accumulator;
    }

    ----- How it works ------

    const nums = [1,2,3,4];
    const sum = num.myReduce((acc, curr, i, arr) => {              [[ acc = the accumulator it is the result of the previous accumulation currently it is the initialiser = 0,
                                                                      curr = the current element, i = index, arr = the array; ]]
      return acc + curr;
      
    },0);                                                           [[ I have taken the initial value as 0 ]]

    console.log(multiplyThree);     ---------//  [10];

## __map V/S forEach__

                                   _map_                                            |                                  _forEach_
    - It performs the operation on a new array and doesn't modifies the existing    |
      array.                                                                        |  - It performs the operation on the same array. 
                                                                                    |
    - const mapResult = arr.map((el) => {                                           |  - const forEachResult = arr.forEach((el,i) => {
        return el + 2;                                                              |      return arr[i] = el + 2;
      });                                                                           |    });
      console.log(mapResult);        // It returns a new array by adding 2 to it.   |    console.log(forEachResult);           // It returns undefined.
                                                                                    |    console.log(arr);               // It returns the values after modifing it.
                                                                                    |
    - As it returns an new array so we can chain it like .filter or something.      |  - As forEach does return an array so we can't modifie it.
      const mapResult = arr.map((el) => {                                           |
        return el + 2;                                                              |
      }).filter();                 // and we can perform any operation here.        |   


### Question 1?
`let students = [`

  `{ name: "Ananya", rollNo: 31, marks: 80},`

  `{ name: "Jenny", rollNo: 15, marks: 69},`
  
  `{ name: "Sakshi", rollNo: 16, marks: 35},`
  
  `{ name: "Choti", rollNo: 7, marks: 55}`

`];`

1. Return only the name students in capital.

        - let names=[];
          for(let i=0; i<students.length; i++) {
            names.push(students[i].name.tpUppercase);
          }
          console.log(names);

        - const names = students.map((el) => el.name.tpUppercase);
          console.log(names);
        
2. Return only the details of those students who scored more than 60 marks.

        - const details = students.filter((el) => el.marks > 60);
          console.log(details);

3. Return only the details of those students who scored more than 60 marks and rollNo more than 15.

        - const details = students.filter((el) => el.marks > 60 && rollNo > 15);
          console.log(details);

4. Sum of marks of all the students.

        - const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
          console.log(sum);

5. Return only the name students who scored more than 60 marks.

        - const names = students.filter((el) => el.marks > 60).map((el)=> el.name);
          console.log(names);

5. Return total marks for students who scored more than 60 marks after 20 marks have been added to those who scored less than 60.

       - const totalmarks = students.map((el) =>{
            if (el.marks < 60)  el.marks += 20;
            return el;
          }).filter((el) => el.marks > 60).reduce((acc, curr) => acc + curr.marks, 0);

          <!-- console.log(marks); -->
          console.log(totalmarks)
