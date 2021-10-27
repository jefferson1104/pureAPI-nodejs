<div align="center">
  <h1>Node.js API without frameworks</h1>
  <br>
  <br>
  <p align="center">
    <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
    <img alt="Node" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  </p>
</div>

# About this project
This API was built with Node.js without the use of frameworks, an app with native javascript functionality.

# Structure
- **database**: location where our files that will simulate a database are kept.
- **src**: location where all the application's source code is.
- **src/entities**: location where the application's entities will be kept, to validate data.
- **src/repostiries**: location where you access database data.
- **src/services**: place where all the logic and business rules of the application are located.
- **src/factories**: to generate instances with dependency injection pattern and so on.
- **testscript**: File to test the api routes.

# How to run this project
```bash
# Clone this repository
$ git clone https://github.com/jefferson1104/pureAPI-nodejs.git

# Access project directory
$ cd diretoriodoprojeto
$ code . 

# Install all dependencies
$ yarn

# Run application
$ yarn start

# Test the application, open a new terminal next to the project's root directory and run
$ sh script.sh
```
> #### CONTENT CREATION AND EXPLANATION GUIDE:
> https://www.youtube.com/watch?v=NxHY14rMPvc&ab_channel=ErickWendel