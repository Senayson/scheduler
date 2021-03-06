# Interview Scheduler

The Interview Scheduler app is a react app designed to enable a user to book an appointment, cancel an appointment and edit an appointment with an available interviewer. It enables the user to view weekly available spots and select an appropriate time for their interview.

The app is predominately based on the React javascript library. It as well utilizes CSS for styling and a Postgresql database.

The app uses a continuous integration process using CircleCI and the client server is hosted on Netlify. The API server is hosted on Heroku.

## Running the Client server
https://61c99906b5f4a2f4f36c7e0b--jovial-goodall-a35eb8.netlify.app

## Running the API server
http://senayscheduler.herokuapp.com/api/days



## Setup on Local Host

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Views

!["View of app with empty appointment slot"](https://github.com/Senayson/scheduler/blob/master/docs/Empty%20app.png?raw=true)
!["User creating an appointment"](https://github.com/Senayson/scheduler/blob/master/docs/Create%20app.png?raw=true)
!["View of app with an appointment created"](https://github.com/Senayson/scheduler/blob/master/docs/App%20Created.png?raw=true)
