# LLD

## LLD1 Pre class -

## __OOPS Concepts__

__Inheritance__

The ability of acquiring all the properties and behaviors of the parent object by a child object is termed as inheritance. This is a unique feature in object-oriented programming languages which facilitates re-usability of the code of the parent class by the derived class. In JavaScript, __extends__ keyword is used to serve the purpose of inheritance.

Unlike old-school constructor functions where the __new__ operator does the initialization of __this__ to a newly allocated object, __this__ isn't automatically initialized for a class defined by the __extends__ keyword, i.e., the sub-classes.

Therefore, running the above code will give an error:

Uncaught Reference Error: Must call super constructor in derived class before accessing 'this' or returning from derived constructor


    class Car{

      constructor(n,b){

          this.name=n
          this.brand=b
      }

      showDetails(){
          console.log(`${this.name} ${this.brand}`)
      }
    }
    var car1 = new SUV('Duster','Renault')

    Step 1.

    class SUV extends Car{

    }

    Step 2.

    class SUV extends Car{

      constructor(x,y)
    {
        super(x,y)

    }
    }

    Step 3.

    class SUV extends Car{

      constructor(x,y)
    {
        super()
        this.myCar=x
        this.myBrand=y
    }
    }

    Step 4.

    class SUV extends Car{

      constructor(x,y,b)
    {
        super(x,y)
        this.buyer=b

    }
    }

__Multilevel Inheritance__

    class Car {
      constructor(n, b) {
        this.name = n;
        this.brand = b;
      }

      showDetails() {
        console.log(`${this.name} ${this.brand}`);
      }
    }

    class SUV extends Car {
      constructor(x, y) {
        super(x, y);

        this.buyer = 'swanand';
      }
    }

    class miniSUV extends SUV {
      constructor(x, y) {
        super(x, y);
        this.type = 'mini-suv';
      }
    }

    //var car1 = new SUV('duster', 'renault');

    //console.log(car1);

    var car2 = new miniSUV('duster', 'renault');

    console.log(car2);

__Encapsulation__

Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object. Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.

OOPs restrict direct access to its methods and variables by encapsulating the code and data together. There are two ways of encapsulation in Javascript:

Class fields are public by default, but private class members can be created by using a hash # prefix. The privacy encapsulation of these class features is enforced by JavaScript itself.

Private instance fields Private instance fields are declared with # names (pronounced "hash names"), which are identifiers prefixed with #. The # is a part of the name itself. Private fields are accessible on the class constructor from inside the class declaration itself. They are used for declaration of field names as well as for accessing a field's value.

It is a syntax error to refer to # names from out of scope. It is also a syntax error to refer to private fields that were not declared before they were called, or to attempt to remove declared fields with delete.

Making data members private using var keyword. Set the data using setter methods and get that data using getter methods. We can manage read and write access of object’s properties by using encapsulation.

Read Only Access : If we declare getter methods only then it facilitates the read only access. Write Only Access : If we declare setter methods only then it facilitates the write only access. Read & Write Access : If we declare both getter and setter methods then it facilitates both read and write access.

Why should Encapsulation to be used ?

Flexibility: It’s more flexible and easy to change the encapsulated code with new set of requirements. For example, if the requirement for adding/removing the project of a employee changes, we can easily update the logic in the setter method () or provided methods.

Reusability: Encapsulated code can be reused throughout the application or across multiple applications.

Maintainability: When application code is encapsulated in separate units (classes, interfaces, methods, getters/setters etc) so it’s easy to change or update a part of the application without affecting other parts, thus reducing the effort and time of the developer.

Testability: For an encapsulated class writing unit tests are easier as the member variables are not scattered all around, thus reducing the time and effort of the tester as well.

Data Hiding: The caller of the methods will have no idea about the internal logic of the class as the member variables are not visible to the caller function. Caller only knows the parameters which are to be passed to the setter method (or any method) for getting initialized with that value. For e.g


    class ClassWithPrivateField {
      #privateField;

      constructor() {
        this.#privateField = 42;
      }
    }

    class SubClass extends ClassWithPrivateField {
      #subPrivateField;

      constructor() {
        super();
        this.#subPrivateField = 23;
      }
    }

    let x = new ClassWithPrivateField();
    console.log('x:', x.privateField);

__Abstraction__

An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.

Points to remember We cannot create an instance of Abstract Class. It reduces the duplication of code.

    /there is no way to mark a class as abstract in ES6,
    //however you can force a class to behave line one by
    //	- forcing derived classes to override a method
    //	- causing the base class's contructor to throw an error so that it
    //			is never used to create instances of the base type*
    // *Be careful, as this will cause problems if you do need derived classes
    // 	to call super() contructor

    class Employee {
      constructor() {
        if(this.constructor == Employee) {
          throw new Error(" Object of Abstract Class cannot be created");
        }
      }
      display(){
        throw new Error("Abstract Method has no implementation");
      }
    }

    class Manager extends Employee {
      display(){
      //super.display();
      console.log("I am a Manager");
      }
    }

    //var emp = new Employee;
    var mang=new Manager();
    mang.display();

__Polymorphism__

As JavaScript has a mechanism to support the OOPS paradigm, Polymorphism is one of the basic principles which is supported by it. As object-oriented programming concepts revolve mainly around objects the objects can behave differently in different scenarios. Polymorphism is nothing but one type but many forms. One type of object can behave differently depending upon the runtime scenario. Polymorphism uses the concept of Inheritance to achieve this. In polymorphism, multiple objects will have the same method but different implementation and depending upon the user preference the corresponding object will be selected and the method corresponding to that object will be executed.

<img src="https://user-images.githubusercontent.com/32398003/163924897-7da0cc3e-c1bd-4999-b0b3-e22051ae9bde.png"/>


    class Vehicle {
      run() {
        console.log( " Vehicle is running " );
      }
    }

    class Car extends Vehicle {
      run() {
        console.log( " Car is running " );
      }
    }

    class Truck extends Vehicle {
      run() {
        console.log( " Truck is running " );
      }
    }

    var v1 = new Vehicle();
    var v2 = new Car();
    var v3 = new Truck();
    console.log( v1 );
    v1.run();
    console.log( v2 );
    v2.run();
    console.log( v3 );
    v3.run();

Here, we have one parent class Vehicle and two child classes Car and Truck. All the classes have method run() with the same name, but depending upon the reference passed the corresponding run() method will be called.

__UML Diagrams__

UML (Unified Modeling Language) diagrams are graphical representations used in software engineering to model and communicate the design of software systems. The UML is a standard notation that is used to visually describe the design of a system and its components, including classes, objects, interfaces, and relationships between them. The goal of UML is to provide a common language for software engineers to use when discussing and designing software systems.



UML diagrams are used to capture the structure of a system, including the components, their relationships, and the behavior of the system. The UML provides a wide range of diagram types, each with its own specific purpose. Some of the most common UML diagram types include:

1. __Class diagrams:__ Class diagrams show the classes in a system, the attributes of each class, and the relationships between classes. Class diagrams are used to represent the structure of an object-oriented system.
Untitled

2. __Activity diagrams:__ Activity diagrams show the flow of activities within a system. They are used to model the behavior of a system, including the flow of control and the decisions that are made.
Untitled

__SOLID Principles__
Adhering to the __SOLID__ principles in coding helps to avoid a number of common issues, such as tight coupling of components, untestable code, duplication, and an inability to resolve problems without creating new ones. By following these principles, code becomes more maintainable, extensible, and easy to understand. It also leads to code that is modular, focused on specific features, and easily testable.

The SOLID principles consist of five design principles:

- the Single Responsibility Principle (SRP),
- the Open Closed Principle (OCP),
- the Liskov Substitution Principle (LSP),
- the Interface Segregation Principle (ISP), and
- the Dependency Inversion Principle (DIP).

These principles dictate that each class should have a

- single responsibility,
- software components should be open to extension but closed to modification,
- objects of a superclass should be replaceable with objects of its subclasses,
- interfaces should be specific to clients, and
- high-level modules should not depend on low-level modules, but instead depend on abstractions.

## __<a href="https://merciful-socks-8ed.notion.site/LLD-1-OOPs-959e3475a3664ba88e95aac5192afe7a">Notion LIVE class LLD1</a>__

----

## LLD2 Pre class -

## __Design Patterns__

All developers aim to create efficient and reusable code. In complex applications, the code structure is crucial to avoid redundant code and ensure efficient performance. However, enhancing an existing system and adding new features can be difficult as the developer must have a comprehensive understanding of the relationships and hierarchy between entities. To allow for future adaptability, the code must be updated in a manner that is flexible to change. Design patterns offer a structured solution to common design problems in software development and can be viewed as flexible templates that can be tailored to specific design needs. For example, an ice-cream factory serves as a base for producing different types of ice creams, similar to how a design pattern acts as a template for various design problems.

## __Structure of design patterns__
- __Pattern name:__ This is an identification step that describes a design problem.
- __Intent__: This step describes the use case of the particular design pattern.
- __Motivation__: This step illustrates the problem and talks about the inner components in the pattern to solve the problem.
- __Structure__: This step visualizes the structure using a graphical representation of the classes in the pattern.
- __Consequences__: This step describes the trade-offs of a particular pattern.
- __Implementation__: This step illustrates an example of code in any popular programming language.

## __Advantages of design patterns__

The following are some of the advantages of using design patterns:

- They provide correct and efficient solutions since - they have been derived and optimized by various experienced programmers over time.

- They are generic templates that can be modified and used for solving different problems.

- They can provide a clean and elegant solution to a large problem by avoiding repetition in the code.

- They provide a template on which the developers can build upon. This allows developers to spend less time on code structure and more on the overall quality of the solution.

- Creational Design Patterns
  - Factory
  - Singleton
  - Constructor
  - Prototype
  - Abstract

- Structural Design Patterns
  - Decorator
  - Facade
  - Adaptor

- Behavioral Design Patterns
  - Observer

- Architecture Design Patterns
  - MVC
  - MVVM

__Creational Design Patterns__

These patterns offer a way to create objects in a specific situation while concealing the actual creation process. The traditional method of object creation can become complicated in project design. Creational design patterns offer a flexible solution by giving control over the object creation process, allowing for the selection of objects that are needed for a specific use case.

__Structural Design Patterns__

These patterns focus on the composition and relationships between classes and objects. They enable the addition of new functionality to objects without affecting the rest of the system. As a result, when changes are made to some parts of the structure, the entire system does not need to be altered.

__Behavioral Design Patterns__

These patterns deal with the communication between disparate objects within a system. They simplify communication and ensure that information is synchronized between objects.

__Architectural Design Patterns__

These patterns are used to address architectural issues within a given context in software architecture.

Design patterns play a crucial role in the organization of applications and are a valuable tool for developers. In subsequent lessons, we will examine the most commonly used design patterns so that you can respond confidently to interview questions and implement them in your work.

__Resources__ <a href="https://github.com/prasadgujar/low-level-design-primer">Other resources</a>

## __<a href="https://interviewhandbook.notion.site/7-1-Design-Patterns-18128935c32843cdad41d078afc137b1">Notion LIVE class LLD2</a>__


## Notion LLD PSC
- __<a href="https://wealthy-fir-ede.notion.site/Design-Patterns-983811ad2db34db996da95c010678c7c">Link 1</a>__

- __<a href="https://wealthy-fir-ede.notion.site/LLD-for-a-Parking-Lot-afceebdee5e84d9e89267f0703a53f71">Link 2</a>__

- __<a href="https://wealthy-fir-ede.notion.site/LLD-for-Payment-Tracking-App-Splitwise-1df1b3c8afbb41d6803071ed61bf245c">Link 3</a>__
