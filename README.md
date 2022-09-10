# Coding Exercise for Sportradar

### Introduction

You are working for a sports data company. You are requested to develop a simple application that simulates a result of 3 football matches:

- Germany vs Poland
- Brazil vs Mexico
- Argentina vs Uruguay

User can start, finish and restart a simulation.

### Requirements

1. User needs to be presented current result of all 3 matches, total goals counter as well as Start/Finish/Restart button.
2. Each simulation takes 90 seconds (unless manually finished by the user before 90 seconds elapses).
3. User needs to click on Start button to start the simulation.
4. Before 90 seconds elapses user can manually finish the simulation by clicking Finish button. If simulation hasn’t been manually
   finished, it’s automatically stopped after 90 seconds.
5. Every 10 seconds random team scores exactly 1 goal. First goal is scored at the 10th second, last goal is scored at the 90th second.
6. When a simulation is finished, user can restart it using Restart button. Then the results are reset and the simulation starts again.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
