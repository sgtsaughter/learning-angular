# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Running Database

Run `mongod`

## Running Backend Server

cd into backend directory where server.js lives
Run `npm run dev`

##Installation 

Clone the repo 
```
git clone git@github.com:sgtsaughter/learning-angular.git
```

cd into root directory and run 

```
npm install
```

Download and install mongodb 
https://www.mongodb.com/download-center?initial=true#community

This next part is optional.  If you want a visual tool for mongoDB that will let you easily view, create, delete, databases and database tables download and install Robo 3T
https://robomongo.org/

Run the frontend application: 
Run `ng serve --open`

Run the backend applicaiton: 
Run `npm run dev`

Run the database server:
Run `mongod`

Configuring the database in Robo 3T: 

Open the Robo 3T application 

Find the ip and port that the database server is running on by reading the output of your console after you ran the `mongodb` command (Probably will be localhost:27017)

Click File -> Connect

##Mobile App
Steps to make this web application an android mobile application for the first time.  

Download and install cordova 

Run `npm install -g cordova` 
note: you may have to run `sudo npm install -g cordova`

In the root of the app run `cordova create mobile`

A new directory will be created called mobile.  Go into that directory and delete a folder called www. Then create a new directory called www and create symlink between www and the dist folder. Do this by running the following commands

`cd mobile`

`rm -rf www`

`ln -s ../dist www`

This will update the www with any changes in the dist folder.  Whenever we make changes to the web application we'll need to run 

`npm build` 

to have these changes also apply to the mobile app. 

In the www/index.html file, update the  base tag by changing the href from "/" to "./" because for the mobile app this will no longer be taken from the root directory.  It will be in a sub directory on an android device

In the mobile directory, 

Run `cordova platform add android`
This will add all cordova plugins for android adk. 

In the mobile/config.xml change 

`<content src="/index.html" />`

to

`<content src="/todo-list/index.html" />`

Connect your phone to your computer (make sure you have Developer Options enabled on
your android device) and run 

`cordova run android`

This should build and launch the app on your phone. 

## Mobile Development Workflow (After initial setup)
Make changes to the application 

Run `npm build`

Attach your phone via USB

Run `cordova run android`


## TODO:
Reorganize the directory structure better (eg. Add all components to a components folder, add serivces directory, etc.)  
Make sure app still runs after directory reorganization

Add installation guide for MEAN stack 

Figure out what this app will do 

Add a links to vidoes and articles used as learning references to help build this app.

Add websocket features.  Make auto update content feature to db-character page, so that when one user is viewing that page, and another user creates a new character, it will automatically display on the first user's page.  

Or make this awesome chat feature if it's easy to impliment. 
https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1