# __CI-CD__

## __Intro__
__CI/CD__ stands for __Continuous Integration/Continuous Deployment__. It is a set of practices and tools that are used by software development teams to automate the process of building, testing, and deploying software changes.

__Continuous Integration__ refers to the process of automatically building and testing code changes whenever they are made. This ensures that new code is integrated with the existing codebase without causing any errors or conflicts. Continuous Deployment refers to the process of automatically deploying code changes to production servers after they have been tested and approved.

__GitHub Actions__ is a CI/CD tool that is integrated into the GitHub platform. It allows developers to automate their software development workflows by defining custom actions that can be triggered by events, such as code changes, pull requests, or issues.

__GitHub Actions can be used for a variety of tasks:__

- Building and testing code: Developers can use GitHub Actions to automatically build and test their code changes whenever they are made, ensuring that the code is always in a functional state.
- Deploying applications: Developers can use GitHub Actions to automatically deploy their applications to production servers whenever new code changes are made and tested.
- Automating code reviews: Developers can use GitHub Actions to automatically run code review tools, such as linters and style checkers, on their code changes, ensuring that the code meets the team's standards and best practices.
- YAML (short for "YAML Ain't Markup Language") is a human-readable data serialization language that is commonly used for configuration files. YML is a file extension that is often used for YAML files. YAML files are used in many software applications, including CI/CD tools like GitHub Actions, to define configuration and workflows.

To learn YAML, you should understand its syntax, keywords, and structure. Here are some key concepts to keep in mind:

- YAML files use indentation to indicate the structure of data. Blocks of data are indented with spaces or tabs.
- YAML files use key-value pairs to define data. Keys are separated from their values by a colon and a space.
- YAML files can use arrays, which are lists of values that are denoted by a hyphen followed by a space.
- YAML files can use comments, which start with a pound sign (#) and continue until the end of the line.

        # This is a YAML file
        title: Website Name
        description: A website for sharing content
        tags:
        - technology
        - innovation
        - creativity
    In this example, we have defined a title, a description, and an array of tags for a website. Note how each key-value pair is indented with two spaces, and the tags array is denoted by a hyphen followed by a space.

Here are some additional syntax examples and keywords:

- Strings are denoted by a sequence of characters, and can be enclosed in double quotes or single quotes. For example: `name: "John Smith"`
- Numbers are denoted by their numeric value. For example: `age: 30`
- Booleans are denoted by the words `true` or `false`. For example: `is_active: true`
Null values are denoted by the word `null`. For example: `email: null`
Objects (also known as maps or dictionaries) are denoted by key-value pairs that are indented beneath a parent key. For example:

        person:
        name: John Smith
        age: 30
        address:
            street: 123 Main St.
            city: Anytown
            state: CA

    In this example, we have defined an object for a person, with sub-objects for their name and address.

- Arrays are denoted by a hyphen and a space followed by a value. For example:
yamlCopy code
fruits:
  - apple
  - banana
  - orange

    In this example, we have defined an array of fruits.

__Enable GitHub Actions:__

To enable GitHub Actions for your repository, go to the "Actions" tab in your repository and click the green "set up a workflow yourself" button. This will create a new file in the `.github/workflows` directory of your repository.

1. Comments: Use the `#` character to add comments in your YAML file. Comments can be added at the beginning of a line or at the end of a line of code.

        # This is a comment

2. Key-value pairs: Use key-value pairs to set configuration options for your workflow, jobs, and steps. A key-value pair consists of a key (left-hand side of a colon) and a value (right-hand side of a colon).

        key: value

3. Lists: Use lists to define a sequence of items in YAML. A list is enclosed in square brackets and each item is separated by a comma.

        - item1
        - item2
        - item3

4. Maps: Use maps to define a collection of key-value pairs in YAML. A map is enclosed in curly braces and each key-value pair is separated by a colon.

        key1: value1
        key2: value2
        key3: value3

5. Variables: Use variables to store and reference values in your YAML file. Variables are defined using the ${{ }} syntax.

        ${{ variables.my_variable }}

6. Expressions: Use expressions to perform dynamic evaluation of values in your YAML file. Expressions are enclosed in ${{ }} and can include variables, functions, and operators.

        ${{ env.MY_ENV_VAR || 'default' }}

7. Conditional statements: Use conditional statements to execute different actions based on the outcome of a test. Conditional statements are written using the `if` and `else` keywords.

        if: ${{ github.event_name == 'push' }}
        run: echo "This workflow was triggered by a push event."
        else:
        run: echo "This workflow was triggered by a pull request event."

These are just a few examples of the YAML syntax elements you can use in GitHub Actions. Familiarizing yourself with these syntax elements is key to creating effective and powerful workflows.

8. Hello World Workflow: This YAML file defines a simple workflow that runs a single job with a single step that prints "Hello, World!" to the console.

        name: Hello World
        on: [push]
        jobs:
        build:
            runs-on: ubuntu-latest
            steps:
            - name: Say Hello
                run: echo "Hello, World!"

Build and Test a Node.js Application: This YAML file defines a workflow that builds and tests a Node.js application using the `npm` package manager.

        name: Node.js CI
        on: [push]
        jobs:
        build:
            runs-on: ubuntu-latest
            steps:
            - uses: actions/checkout@v2
            - name: Use Node.js ${{ matrix.node-version }}
                uses: actions/setup-node@v2
                with:
                node-version: ${{ matrix.node-version }}
            - run: npm install
            - run: npm run build
            - run: npm test

Build and Deploy a Docker Image to AWS ECR: This YAML file defines a workflow that builds a Docker image and deploys it to an Amazon Elastic Container Registry (ECR) repository. __( Its okay you are not aware of docker, this is just an example )__

        name: Build and Deploy Docker Image
        on:
        push:
            branches:
            - main
        jobs:
        build-and-deploy:
            runs-on: ubuntu-latest
            steps:
            - name: Checkout code
                uses: actions/checkout@v2
            - name: Build Docker image
                run: docker build -t my-image .
            - name: Login to AWS ECR
                uses: aws-actions/amazon-ecr-login@v1
                with:
                registry: aws_account_id.dkr.ecr.region.amazonaws.com
            - name: Push Docker image to ECR
                run: |
                docker tag my-image:latest aws_account_id.dkr.ecr.region.amazonaws.com/my-repo:latest
                docker push aws_account_id.dkr.ecr.region.amazonaws.com/my-repo:latest

__Keywords__
1. `name`: Defines the name of the workflow, job, or step.
2. `on`: Specifies the events that trigger the workflow, such as `push`, `pull_request`, `schedule`, or `workflow_dispatch`.
3. `jobs`: Defines one or more jobs that run as part of the workflow. Each job includes one or more steps.
4. `steps`: Defines a sequence of actions that make up a job. Each step is a command that is executed in the environment defined by the runs-on property.
5. `runs-on`: Specifies the type of machine or operating system that the job runs on, such as ubuntu-latest, windows-latest, or macos-latest.
6. `env`: Defines environment variables that are available to the workflow, job, or step.
7. `if`: Defines a conditional expression that determines whether the step or job runs based on the outcome of a test.
8. `uses`: Specifies an action or Docker container that is used as a step in the job.
9. `with`: Provides additional input parameters or options for the step or action.
10. `id`: Defines a unique identifier for a job or step, which can be used to reference the job or step in other parts of the YAML file.

__Applications for Github Actions__
1. `Define your workflow`: Use YAML to define your workflow, including the triggers that will start the workflow, the jobs that will be executed, and the steps that make up each job.
2. `Configure your environment`: Use YAML to specify the environment that your code will run in, including the operating system, programming language, and other dependencies.
3. `Build and test your code`: Use YAML to define the steps for building and testing your code, including any unit tests or integration tests.
4. `Deploy your code`: Use YAML to define the steps for deploying your code to a production environment or another deployment target.
5. `Automate release management`: Use YAML to automate the process of creating and publishing new releases of your code, including creating changelogs, tagging releases, and publishing artifacts.
6. `Manage dependencies`: Use YAML to manage dependencies for your code, including installing packages or libraries and configuring your build environment.
7. `Manage secrets and credentials`: Use YAML to securely manage secrets and credentials for your workflow, including API keys, access tokens, and other sensitive information.
8. `Customize the user interface`: Use YAML to customize the user interface of your workflow, including defining labels and icons for your jobs and steps.
9. `Trigger notifications and alerts`: Use YAML to configure notifications and alerts for your workflow, including sending email notifications, posting to chat channels, and triggering other external services.
10. `Integrate with external services`: Use YAML to integrate with external services, such as databases, messaging systems, and other APIs.