# Interview Questions

1. How does the this keyword relate to the lexical scope in JS?


2. What is callback function in js and how it works?



3. Difference between synchronus and asynchronus middlewares?



4. Create a nodeJs app that uses chalk module to display colorful text message in console



5. How can you emit an event with data from the client to their server in scoekt.io? Demostrate with code?



6. Create a mongodb collection using nodejs ans insert a new document into collection



7. Which type of db is typically use for transaction app such as banking system or an e-commerce website?



8. what are the main components of a HTTP request in nodejs



9. Benifits of using react



10. How can we handle browser window resize events using useEffect in react



11. How does the use of strict mode affect hosting behaviour in JavaScript? Are there any differences in hosting between strict mode and non stick mode



12. How can you optimise the performance of a loop in JavaScript, and what are some best practices to keep in mind?


13. If you are given an integer value, how can you create a button for pagination using the same use an example to demonstrate


14. How can you use socket IO to create a chat application


15. How do you use environment variable in Express application


16. How can you view the details of an installed external node module in NodeJS application


17. How can you handle disconnection on client in socket IO


18. How does destructuring work in nested object or array in JavaScript, and what Syntax is used to access deeply nested values


19. How does redis pub/sub publisher/subscriber work, and what are some use case for it


20. What is the difference between req.query and req.param


21. What are the main components of an http request in nodeJS


22. How can you use object shorthand Syntax with class in JavaScript


23. What does the this keyword relate to lexical scope in JavaScript


24. Given an array of objects representing books write a function that returns a new array of objects with each book's title author and publication year. Use 
destructuring to extract these properties from each object.


25. How can you search for a available external node module in npm registry


26. Can you explain the middle where concept in Express using an example


27. Can you use both query and parents in the same http request in nodejs


28. How does variable shadowing works in JS? Which type of variable shadowing is more prone to shadowing and why? Impliment it with an example to explain.


29. Error handling Middleware function (404 / Global).


30. Difference between query and body parameters in Nodejs.


31. Difference between query and body parameters in Nodejs.


32. What is the value of this in callback function to an event listener.


33. req.query  vs  req.params.


34. How can you use the 'this' keyword to referance an object properties with its own methods in JS?



34. How can you use the 'this' keyword to referance an object properties with its own methods in JS?


35. Write a statement that declares a variable str and assign a string value to it also write an expression that uses the map() method to return a new array containing the ASC|| code for each character in string variable

        let str = "Hello, World!";
        let asciiCodes = Array.from(str).map((char) => char.charCodeAt(0));

        console.log(asciiCodes);
In the code snippet above, we first declare the variable str and assign it the value "Hello, World!".

We then use the Array.from() method to convert the string str into an array of individual characters. This allows us to apply the map() method to iterate over each character.

Within the map() method, we use an arrow function (char) => char.charCodeAt(0) to retrieve the ASCII code for each character. The char.charCodeAt(0) function returns the ASCII code for the character at index 0.

The map() method applies this arrow function to each character in the array, resulting in a new array called asciiCodes that contains the ASCII codes for each character in the original string.

Finally, we log the asciiCodes array to the console, which will display an array of ASCII codes corresponding to the characters in the str variable.



36. Advantage of using express.


37. What is short-circuit evaluation in JS, and how does it relate to relational operation?



38. What is the value "this" in a callback function passed to an event listener?


39. How can you avoid variable shadowing when using var, let and const in JS?


40. How can you join a room in socket.io?


41. How can you listen incomming connection on a socket.io?


42. How can you search for available ext node modules in the npm registry?


43. What is Time logger middleware and what is its purpose?


44. Can you use object shorthand syntax to declare a method in an object? If so how?


45. How you use cookies in an express application?


46. How does MW deffer from API gateway?


47. Restful API.


48. Are there any potential pitfalls to be aware of when using destructuring in JS, such as unexpexted behaviour/error?


49. Explain event bubblint and event.stop progation() using this html code.

        <div class="outer">
                <div class="inner">
                        <button>Click</button>
                </div>
        </div>


50. Write a function to validate a user's credentails against a mongoDB collection of user, using the library 'bcrypt'

## 1.  What is non-blocking vs blocking?
## 2. What is throughput?
## 3. what is the difference between readFile and readFileSync
## 4. How can you make a network request using http module?
## 5. How to create a web server without express?
## 6. What is libuv?
## 7. What are the different phases involved in event loop?
## • The Node.js Event Loop, Timers, and process.nextTick()
## • Don't Block the Event Loop (or the Worker Pool)
## 8. What are timers in Node.js?
## 9. What is NVM? how do you use it?
## 10. What is common.js? how is it different from es modules?
## 11. How does the crypto module work?
## 12. What are web sockets?
## 13. What are microservices?
## 14. Creating a CLI based app using Node.js and publish it
## 15. How does express work?
## 16. What are routes?
## 17. What are Middlewares?
## 18. What is MVC framework?
## 19. How do you do validations?
## 20. How do you do static routing?
## 21. What are some templating engines?
## 22. How do you manage sessions in express?
## 23. How do you manage cookies with express?
## 24. What are common libraries you work with express?
## 25. What is CORS?
## 26. What is testing?
## 27. What is unit testing?
## 28. What is functional testing?
## 29. What is HTTPS? what is the difference between HTTP and HTTPS?
## 30. What is SSL/TLS?
## 31. What is OWASP?
## 32. What is the difference between SQL and NoSQL databases?
## 33. What are some common queries in SQL?
## 34. How do you do joins in SQL?
## 35. How do you use lookup in mongodb?
## 36. What is CAP theorem?
## 37. What is indexing?
## 38. What is DB replication?
## 39. What is PACELC?
## 40. What is Normalization / Denormalization?
## 41. What is Entity Relationship Model? ( ER Model )
# Nodejs
## 1. What are Models?
## 2. Explain why mongoose does not return a promise but has a .then
## 3. What are aggregation pipelines with mongoose?
## 4. I'm using an arrow function for a virtual, middleware, getter/setter, or method and the value of this is wrong. Why?
## 5. Should I create/destroy a new connection for each database operation?
## 6. My query/update seems to execute twice. Why is this happening?
## 7. How do you create indexes with mongoose
## 8. What are pre and post hooks?
## 9. What is Authentication?
## 10. What is Authorization?
## 11. How do you do role-based authentication?
## 12. What is hashing?
## 13. What is encryption?
## 14. How is hashing and encryption different?
## 15. What is salt?
## 16. What is JWT?
## 17. How is JWT different and list the pros and cons of using JWT tokens?
## 18. What are the different ways to manage authentication?
## 19. What is cookie-based auth?
## 20. What is session management?
## 21. What is OAuth
## 22. What is REST api?
## 23. What is gRPC?
## 24. What is GraphQL?
## 25. What is HTTP
## 26. What is a web socket?
## 27. What is Caching?
## 28. What are ways to cache on the backend?
## 29. What is LRU cache?
## 30. What is Redis? Why do we use it?
## 31. How can we implement caching on frontend?
## 32. What is a CDN?
## 33. What is DNS?
## 34. How does the internet work?
## 35. How do Browsers work?
## 36. What is a stateless backend?
## 37. What is the client server model?
## 38. What is HTTP vs HTTPS?
## 40. What is availability?
## 41. What is latency?
## 42. What is rate-limiting?
## 43. What are the different ways to do rate limits?
## 44. What is a load balancer?
## 45. Describe how you design an API?
## 46. What is a horizontal and vertical scaling?
## 47. How do you build a system which is reliable?