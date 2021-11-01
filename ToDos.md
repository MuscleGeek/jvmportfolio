
fontawesome cndnjs library link
https://cdnjs.com/libraries/font-awesome

bootstrap 
npm i react-typical  -> Words on movement
Alternative
npm i --save-dev @types/react-typical

npm i rxjs
Reactive Extensions Library for JavaScript
RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code

npm i axios
Used for Promise operations (CRUD)

npm i axios react-toastify
Messaging or alerts via axios

npm i react-owl-carousel
Package for carousels
When we are going to start the project lets paste this in index.html
<link
    rel="stylesheet"
    type="text/css"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
/>
<link
    rel="stylesheet"
    type="text/css"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<link
    href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember"
    rel="stylesheet"
    type="text/css"
/>


/*MUST for Owl Carousel among others*/
<link rel="stylesheet" href="owlcarousel/owl.carousel.min.css">
<link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css">

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>


--------------Backend---------
We need to initialize json package from root project ..%NAME_PROJECT%
$npm i init 

----<PACKAGES>CORS DotEnv Express Nodemailer Nodemon </PACKAGES>----
--Description packages---
Concurrently: It a package which can run multiple script simultaneously.

CORS: It is a mechanism which enables controlled access to resources located outside the given domain.
    --So definitely, the calls would be used to add middleeware to the application---

DotEnv:Allow you to separate secrets from the source code. All it does is hiding all of the secrets inside the Env(Environment) file and then ignore the Env file and when you want to deploy the application on GitHub.

Express: Actually, the Express is in NodeJS module, which allows for easy routing, right?

NodeMailer: It enable us to send a message directly to the e-mail box.

NodeMon: Node Monitor watches the application whenever there is any changes on the application. It is going to help restart the application "romantically".

$npm i concurrently cors dotenv express nodemailer nodemon  

----Add this scripts object with the following block @package.json---
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
  },

----CREATE .env and server.js file-------
Create the two files into root project.

----RUN SERVER---
After config .env and server.js, we need to up to the server listening to the port 5000---
$npm run server

-------------CREATING ROUTE------
1.Make folder into root project and lets name it as "route"
2.Into route folder we need to create an jsx file named "contactRoute.jsx"


--Add the following line into package.json.(fron-end aka client)-----(must be added after 1st line)
"proxy": "http://localhost:5000",


----GIVE AUTH GMAIL TO APPS---
We need to grant access to apps to use gmail auth. So we need to add our app to our gmail auth. Lets go to next link:
We need to ask to "Grant access secureless apps" switch on "Yes". 

https://myaccount.google.com/lesssecureapps

//import this for the react-toastify in the app.jsx
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/React-Toastify.css';



---Git---
Get root project path
$git init
$git .add
$git commit -am "porftfolio alpha version"
$heroku git:remote -a jvmporfolio

