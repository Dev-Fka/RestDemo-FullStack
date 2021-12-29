# RestDemo-FullStack
This Repo containing two side , RestDemo project is a Java,Spring Boot ,postgresql RestAPI services project.RestDemo Front-End project is a Front-End project.
Using React,NextJS,Bootstrap libraries.Front-End project dont use our back-end service.!

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.
> Back-End Project deploy on Heroku,Front-End Project hosted on netlify.com
Two links for Back-End and Front-End projects demo :

[Back-end](https://restapi-demo-heroku.herokuapp.com/api/persons)
[Front-end](https://master--mydemofrontendapp.netlify.app/)

## Prerequisites
1. For Back-End Project download Java SDK,PostgreSQL Database.And open RestDemo project an Java IDE with change the application.properties files settings.(For Your postgresql setting)
And run the project .You see data on Localhost:8080/api/persons.
2. For Front-End project you need NodeJs.And open projects and use that command in projects folder. npm run install.This command install all dependencies your computer.For the end,
use that npm run dev and you see project on your browser Localhost:3000 .

## API ENDPOİNTS
 My endpoints style :
 1. api/persons/-->GET request list all
 2. api/persons/{id}-->GET request list one person 
 3. api/persons/-->POST create user
 4. api/persons/{id}-->PUT request update person
 5. api/persons/{id}-->DELETE request delete person
 -----------------------------------------
 1. api/persons/tasks-->GET all tasks with persons
 2. api/persons/{id}-->GET one task with task id.
 3. api/persons/{id}/tasks-->POST create task for specified person(use person id for create task)
 4. api/persons/{id}/tasks-->PUT uptade task
 5. api/persons/{id}/tasks-->DELETE delete task.
 6. api/persons/{id}/tasks-->GET specified user tasks.
 -----------------------------------------
 ## Which Frameworks-Library use for this projects?
 1. For Rest Service , using Java 11,Jpa,Maven,Spring boot,Postgresql DB.
 2. For Front-end project using, React,Nextjs,React Hook,Bootstrap.
 
 ## Deployment 
 1. Back-End service on Heroku.Create a heroku postgres DB.Create a app on Heroku server.And change application.properties settings for Heroku DB.And use github for deploy your projects.
 2. Front-End project on Netlify.You need again github auth.And create a deploy project on netlify.And select the github repo and deploy.
 
 ## What Can be add for next?
 Maybe add user auth.
 
