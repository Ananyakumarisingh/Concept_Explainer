# SQL

## SQL PART 1
## __Introduction__

## Installation

- https://dev.mysql.com/doc/workbench/en/wb-installing-windows.html
- https://www.dataquest.io/blog/install-mysql-windows/
- https://www.notion.so/MySQL-Installation-b7032c49c6dc4489886df3d8d0b50dff

## Notes

- <a href="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-24/1.1_introduction_to_tables_and_databases__587221.pdf">1.1_introduction_to_tables_and_databases_.pdf</a> 

__SQL ZOO__

SQLZoo is __a well established online platform (since 1999) for writing and running SQL queries against a live database__. This means you can see the actual result of your query without having to scrupulously check your query matches a solution — it's the result that matters.

<a href="https://sqlzoo.net/wiki/SQL_Tutorial">https://sqlzoo.net/wiki/SQL_Tutorial</a> 

__DrawSQL__

For understanding tables you can also use this tool
- <a href="https://drawsql.app/teams/masai/diagrams/example">drawsql.app https://drawsql.app/teams/masai/diagrams/example</a> 


----
## SQL PART 2

## __Notes__
- <a href="https://interviewhandbook.notion.site/1-2-SQL-CRUD-1a88d513182240bf9901530ba0ff6f53">2.1 SQL CRUD</a> 
- <a href="https://interviewhandbook.notion.site/2-1-SQL-Where-operators-Count-cec5c058d8174204abade60986221e71">Where, Operators, Count</a> 
- <a href="https://interviewhandbook.notion.site/2-2-SQL-Order-by-Like-Distinct-aggregate-avg-sum-e53cadb00ad54c8d89b9d4551e580720">2.2 SQL ( Order by, Like, Distinct, aggregate -avg,sum )</a> 
- <a href="https://interviewhandbook.notion.site/2-3-SQL-Math-operators-min-max-grouping-11cef432bd7a4c8d93fb5af3e09a381d">2.3 SQL ( Math operators, min max, grouping )</a> 


----
## SQL PART 3

## __Notes__
- <a href="https://interviewhandbook.notion.site/3-1-SQL-Having-Join-bed4b1fc968f44e8bc90d7568275b1e5">3.1 SQL (Having, Join)</a> 
<!-- - <a href="https://interviewhandbook.notion.site/2-1-SQL-Where-operators-Count-cec5c058d8174204abade60986221e71">3.2 SQL Lecture ( Sub queries, Different Joins, Aggregations, Relationships )</a>  -->
- <a href="https://interviewhandbook.notion.site/3-3-SQL-Lecture-Unions-Case-When-IF-91d8a3c2df444462939d77dabbe58162">3.3 SQL Lecture ( Unions, Case When, IF )</a> 
- <a href="https://dev.mysql.com/doc/mysql-tutorial-excerpt/5.7/en/">Documentation Link</a> 

----
## SQL PART 4

## __Notes__

__4.1 SQL with Sequelize Express__

Materials Needed:

- A computer with Node.js and Express.js installed
- A SQL database (e.g. MySQL, PostgreSQL, SQLite)
- An ORM library, such as Sequelize or TypeORM

<a href="https://sequelize.org/docs/v6/getting-started/">Sequelize Documentation</a>

`Example of Setup :` To run this example successfully, you need to install the following packages:
- sequelize
- mysql2
You can use “npm install sequelize mysql2” in the command line to install the packages.


        const express = require('express');
        const Sequelize = require('sequelize');

        const app = express();
        const sequelize = new Sequelize('database', 'username', 'password', {
            host: 'localhost',
            dialect: 'mysql',
        });

`Example of creating a model:`


        const User = sequelize.define('user', {
            name: Sequelize.STRING,
            email: Sequelize.STRING
        });

`Example of making a query:`

        app.get('/users', async (req, res) => {
            const users = await User.findAll();
            res.json(users);
        });

Step by step process of creating a basic user_database table in our DB using sequelize:
1. For this setup, we need to install sequelize & mysql2 packages.
2. Then we have to open our SQL workbench and create a database to work with.
3. Later, we use the same database in our code to create a connection. const { Sequelize, DataTypes } = require("sequelize");

        // 1. replace the 'users_db' with the database name you've created using mysql workbench
        // 2. replace 'root' with your mysql workbench username
        // 3. replce "password@123" with your mysql workbench password.
        const sequelize = new Sequelize("users_db", "root", "Password@123", {
            host: "localhost",
            dialect: "mysql",
        });

        // 4. In this step we are creating a connection between our sql database and our js file.
        sequelize
        .authenticate()
        .then(() => {
            console.log("Connection has been established successfully.");
        })
        .catch((error) => {
            console.error("Unable to connect to the database: ", error);
        });

        // 5. Use the following code snippet to create a new user table in your database.
        const User = sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        });
        // 6. In this step we are synchronizing our table format with the table in our database and creating a new table called users in our db.
        // sequelize
        //   .sync()
        //   .then(() => {
        //     console.log("User table created successfully!");
        //   })
        //   .catch((error) => {
        //     console.error("Unable to create table : ", error);
        //   });
        // 7. Use the following code snippet to create a new record
        // sequelize
        //   .sync()
        //   .then(() => {
        //     User.create({
        //       name: "chaitanya",
        //       email: "chaitanya.makala@masaischool.com",
        //     })
        //       .then((res) => {
        //         console.log(res);
        //       })
        //       .catch((error) => {
        //         console.error("Failed to create a new record : ", error);
        //       });
        //   })
        //   .catch((error) => {
        //     console.error("Unable to create new record : ", error);
        //   });

        // 8. Use the following code snippet to read the table contents
        // sequelize
        //   .sync()
        //   .then(() => {
        //     User.findAll()
        //       .then((res) => {
        //         console.log(res);
        //       })
        //       .catch((error) => {
        //         console.error("Failed to retrieve data : ", error);
        //       });
        //   })
        //   .catch((error) => {
        //     console.error("Unable to read table : ", error);
        //   });

## (LIVE)

## <a href="https://interviewhandbook.notion.site/4-1-SQL-with-Sequelize-Express-1a30d5a45ba5434e91f0c9159dfdea98">__Notes__</a> 

__Before working with the code you ahve to run npm install:-__ 
- sequelize.zip (Downloads/15-06-2023_21:30/31)