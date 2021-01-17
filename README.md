## Project Intro
This graffiti wall was a project for a mini-hackathon held by Mintbean. I was interested to learn how to draw graphics, build an app that allows for artwork creation, and lay a foundation for possible future game development projects.

## About the Developer
Lani graduated from Stanford University with a B. S. in Industrial Engineering and a M.A. in Sociology with a focus on "Organizations, Business and the Economy." She worked in real estate private equity investing in New York for several years and grew determined to help modernize the industry. She joined a startup in San Francisco building an online investment marketplace and became a product manager. She later joined a B2B SaaS company selling a CRM, an end-user portal, and investment management products. In her Product Management roles, Lani enjoyed deciding which products to build and why, but she grew increasingly interested in how to build the products, which led her to software engineering.


## Deployment
https://gloryleilani.github.io/graffiti-wall/

## Contents
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Future Features](#future)
* [Installation](#installation)
* [License](#license)

## <a name="tech-stack"></a>Technologies
* JavaScript
* React
* HTML
* CSS
* HTML5 Canvas API for graphics display

## <a name="features"></a>Features

#### Landing Page
Users are brought to a webpage built in React containing a blank brick wall to draw on.

#### Painting options
Users can select a paint color from a palette including a custom color picker and select a brush size (spray paint can's nozzle tip size). Users can also select from a number of brick wall background patterns.

#### Save and discard options
Users can choose to save and download their artwork locally or discard their artwork and start over.

![alt text](https://media.giphy.com/media/v8FWlhDKRMOjvJt5Jh/giphy.gif "Erase canvas")

## <a name="future"></a>The Future of Graffiti Wall
Possible future features:
* Ability to undo the last paint stroke.
* Ability to use stencils.
* Ability to change the background to a coloring page 
* Ability to fill shapes with colors or patterns.
* Ability to erase.

The goal would be to make this a more fully-featured drawing app so that a user (e.g. a young person) could 
do things they wish. The "future features" list above was inspired by a 9 year-old's feedback while she was 
using the mvp product.

## <a name="installation"></a>Installation
To run Graffiti Wall on your own machine: 

Clone or fork this repo:
```
https://github.com/gloryleilani/canvas-react
```

Install Create-React-App

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

##### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

Run npm install gh-pages --save-dev 

Add to package.json file: 

Within top section:
    "homepage": "https://gloryleilani.github.io/graffiti-wall/"

Within the scripts section: 
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"

Run npm build

Run npm run deploy

##### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## <a name="license"></a>License
The MIT License (MIT) Copyright (c) 2016 Agne Klimaite

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

