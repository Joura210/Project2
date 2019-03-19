# ![Image of logo](BudgetApp/public/assets/images/favicon.png) Building Blocks

This app helps parents build today’s kids into tomorrow’s money responsible adults. 

## Table of contents

* [About this project](#about-this-project)
* [Project requirements](#project-requirements)
* [Live](#live)
* [Structure of the project](#structure-of-the-project)
* [Logo](#logo)
* [Screenshots](#screenshots)
* [Technologies used to create app](#technologies-used)
* [How to use the app](#how-to-use-app)
* [Form input validation](#form-input-validation)
* [Future enhancements](#future-enhancements)
* [Project contributers](#project-contributers)

## <a name="about-this-project"></a> About this project
Building Blocks is an app to helps parents to teach fiscally responsible kids.  Teaching kids at an early age to learn the benefits of reaching financial goals and teach the value of working hard. 

## <a name="project-requirements"></a> Project requirements

* Must use at least two APIs
* Use a Node and Express Web Server;
* Be backed by a MySQL Database an ORM (not necessarily Sequelize);
* Have both GET and POST routes for retrieving and adding new data;
* Be deployed using Heroku (with Data);
* Utilize at least one new library, package, or technology that we haven’t discussed;
* Have a polished frontend / UI;
* Have folder structure that meets MVC Paradigm;
* Meet good quality coding standards (indentation, scoping, naming).
* Must not expose sensitive API key information on the server

## <a name="live"></a> Live
App is available live through GitHub pages and Heroku

## <a name="structure-of-the-project"></a> Structure of the project
<ul>
<li>BudgetApp</li>
<li>config</li>
    <ol>config.json</ol>
<li>controller</li>
    <ol>app-controller.js</ol>
<li>models</li>
    <ol>index.js</ol>
    <ol>kid.js</ol>
    <ol>parent.js</ol>
    <ol>schema.sql</ol>
    <ol>task.js</ol>
<li>public</li>
    <ol>assets</ol>
    <ul> images</ul>
    <ul> styles</ul>
    <ol>js</ol>
    <ul>kid.html</ul>
    <ul>landing.html</ul>
    <ul>parent.html</ul>
<li>server.js</li>


## <a name="logo"></a> Logo
We created our own unique logo using Hatchful.shopify. Hatchful.shopify is a free logo making site, that provides many different style types to make it your own.

![Image of logo](BudgetApp/public/assets/images/pinterest_profile_image.png)


## <a name="screenshots"></a> Screenshots
Images of Building Blocks site


## <a name="technologies-used"></a> Technologies used to create the app
<li>HTML5</li>
<li>CSS</li>
<li>Heroku</li>
<li>Javascript</li>
<li>JQuery (https://jquery.com/)</li>
<li>Handlebars</li>
<li>Node JS</li>
<li>Express</li>
<li>Sequel</li>
<li>Passport</li>


## <a name="how-to-use-app"></a> How to use app
<li>To start a parent logs into application creating a user name, email and password.</li>
<li>The parent will then set up the child task page.</li>
<li></li>
<li></li>
<li></li>

## <a name="form-input-validation"></a> Form input validation
<li>The app uses form input validation for the user information to check or validate the following:</li>

<ul>The user has entered a value for every field (that is, all fields are required.).</ul>
<ul>This ensures that there are no empty or null values when the form is submitted.</ul> 
<ul>If the user tries to add information when there is an empty or null value.</ul>
<ul>The user enters name, email and creates password.</ul>
<ul>User information is sent to  for storage.</ul>

## <a name="future-enhancements"></a> Future enhancements
<li>Provide different options for kids to earned money.</li>
<li>Add new application division for ages 13-18 teaching about credit cards, debt and using credit to your advantage.</li>

## <a name="project-contributers"></a> Project contributers
<ol>Kyle - front end, handlebars, html, css</ol>
<ol>Angela - front end, styling, logo, read me</ol>
<ol>Michael - back end, routes, api's, user authentication</ol>
<ol>Jorge - back end, database, project leader </ol>