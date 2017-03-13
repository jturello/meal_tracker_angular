Epicodus Angular2 Code Review - Create an Angular2 App with at Least One Pipe

#### Description/Assignment:
Create a website where the user can log (create, update, and view) entries with information about their meals. Each entry has the following fields:  meal name, meal description, and associated calories. The Edit Entry component is hidden until the user clicks on an entry. When the use clicks the update button and the update is processed the Edit Entry component becomes hidden again until another entry is selected/clicked.

#### By James Turello

## Setup/Installation Instructions/Requirements

 * Clone the git repository,
 * From a terminal window cd into the project's root directory ('meal_tracker_angular'),
 * Run the following commands in the terminal window
   * npm install
   * bower install
   * gulp build
   * gulp serve
 * Enter `localhost:3000` in your browser to run the app.

##### *Notes*:

 1. npm, bower, and gulp were installed globally on the machine where this code was developed,
 2. This project is configured to transpile .ts files to ES5. To change, modify the "target" option in file tsconfig.json in the project root directory.

## Known Bugs/Issues

Unit and integration tests have not been created for this project. This has been added to the project backlog.

## Technologies Used

Angular2, Typescript, npm (Node Package Manager) 3.10.3, gulp 3.9.1, bower 1.7.9, tested on Chrome 52.0.2743.116 (64-bit)(Mac)

### License

This software is available for use under the MIT license.

Copyright (c) 2016 - James Turello
