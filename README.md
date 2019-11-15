# Online Library App

This a sample app made to get clear idea about angular topics. Following are the angular topics covered from this app

  - Services
  - Routing
  - Observables
  - Http Requests
  - Jwt Authentication and Role based Autorization
  - Iterceptors
  - Guards
  - Custom Directives
  - Reactive forms and their validations
  - Templates

This app will not have db implementation. Book details are fetched from json data in the file *server/db/index.js*.
### Tech

* Angular 8 - HTML enhanced for web apps!
* Bootstrap 4 - great UI boilerplate for modern web apps
* Node.js - evented I/O for the backend
* Express - fast node.js network app framework

***Fun Fact :*** This app follows new web stack i.e., MEAN minus M stack 😂😂  
Only **E**xpress, **A**ngular & **N**ode, no **M**ongodb 😜😜 
### Installation

Clone the repo 
```sh
$ git clone https://github.com/dattugvs/Online-Library.git
```
Installing dependecies at client side and server side (angular & node dependencies)
```sh
$ cd client
$ npm install
$ cd ..
$ cd server
$ npm install
```

### Run the App
In this app the server and client should run seperately.
Server runs at port 5000
Angular app runs at port 4200 (default port for ng new <Ang_App_Name>)

First Start server (node & express)
```sh
$ cd server
$ npm start
```

Next run client (angular app) in seperate command prompt
```sh
$ cd client
$ ng serve --open
```
### App Work Flow

Since this is an sample app mainly focussed on angular topics, db implementation is not made. so signup will not really add the info.

- Signin and signup pages uses Reactive forms and validation concepts
- Any one can browse books in the */browse* route
- But to view book details i.e., *book/:bookid* route the person should be logged in
- Upload book  *upload* route applicable only to admins

### Credentials to use in app
***User role***
```sh
email : user@user
password : user
```
***Admin role***
```sh
email : admin@admin
password : admin
```


