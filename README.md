# noSQL: Fitness Tracker

### [Launch the Application](safe-eyrie-4508)

## Table of Contents
- [Overview](#Overview)
- [Getting Started](#Getting)
    * [Prerequisites](#Prerequisites)
    * [Installation](#Installation)
- [Application Functionality and Appearance](#Application)
    * [Landing Page]()
    * [Add Exercise Forms](#Add)
    * [Dashboard](#Dashboard)

## Overview
The applications allows a user to view create and track daily workouts by logging multiple exercises in a workout on a given day.

The application's backend uses Mongo database with a Mongoose schema and handles routes with Express.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Node.js - There are installers and packages for all the common operating systems which can be downloaded [here](nodejs.org/)

### Installation

1. Clone the repository
   ```sh
   git clone git@github.com:pdxbellasaurus/17UofOfitnessTracker.git
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. Add seed data
   ```sh
   npm run seeds
   ```
4. Start the server
   ```sh
   npm start
   ```
5. Go to your web browser and go to web address
   ```
   localhost:3000
   ```
## Application Functionality and Appearance

When the user loads the page, they will be given the option to create a new workout or continue with their last workout.

The user is able to:

  * Add exercises to the current workout plan or add add new exercises to a new workout plan from the landing page.

  * View the combined weight of multiple exercises and the the total duration of each workout from the past seven workouts on the dashboard `/stats` page.

#### The following images show the web application's appearance and functionality: 

#### Landing Page

![Home](https://user-images.githubusercontent.com/74746211/119219410-52b11900-ba9a-11eb-8f83-95f1e80ea81f.PNG)

#### Add Exercise Forms

![Add_Workout](https://user-images.githubusercontent.com/74746211/119219431-6eb4ba80-ba9a-11eb-9c70-36728e495814.PNG)

#### Dashboard

![Dashboard](https://user-images.githubusercontent.com/74746211/119219414-5775cd00-ba9a-11eb-9b36-d3c096175276.PNG)

---------------------------

Week 17 Homework - 17UofOfitnessTracker

© 2021 PDXbellasaurus :sauropod:
