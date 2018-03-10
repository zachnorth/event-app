# event-app
CSCI 3308 Team Project: Event Web Application

#### To start the application:
 
 1. Make sure that you have NodeJS installed, you can check by opening up a terminal and typing `node` and `npm`. If you do not have NodeJS, it can be downloaded [here](https://nodejs.org/en/download/).
 2. Make sure that you have an Elasticsearch server specified in the config.json found at `./lib/config.json` and that you can connect to it.
 3. Run `npm install` to install the required dependencies.
 4. Finally run `node bin/www` to start the server. 
 5. By default the server will start on port 3000. You can then access the site by navigating to `localhost:3000` in a browser. If port 3000 is in use, add PORT=NUMBER to the beginning of the startup command. Example: `PORT=6969 node bin/www`. 
 6. You can also use Nodemon to automaticly restart the server if a file is updated. You can install Nodemon by running `npm install nodemon -g`. The server can then be started by running `nodemon` in the terminal.

#### Project structure:

The project is divided up into three sections: the database, back end, and front end. 
All the front end code can be found in the `public` folder. 
The back end and database code can be found in the `lib`  and `routes` folder.

The back end is what connects the database to the front end. 
The primary means of doing this is by providing endpoints that the front end can pull data from. 
The front end can then pull this data and display it on the page. 