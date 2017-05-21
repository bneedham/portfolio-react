# Portfolio-React

This is a simple static portfolio site starter built using [create-react-app](https://github.com/facebookincubator/create-react-app) and [styled-components](https://github.com/styled-components/styled-components).

![aframe-react-boilerplate](http://dralacreative.com/portfolio-react-screenshot.png)

Everything inside the `components` directory is a `styled-components` component... only style there, no content in those components. Yes, I like separation of concerns... for maintainability.

Two things to notice in there. Firstly `components/global-styles.js` is for global styles only... on the body or declaring fonts. Secondly
`components/style-utils.js` is for style variables like colors and breakpoints for use in other `styled-components`.

The styles are *mobile first*, meaning you style for mobile, then only override styles as the screen gets wider.

The MockData component is jast a placeholder I made using [mockaroo.com](https://mockaroo.com/), and [loremflickr.com](http://loremflickr.com/).

To see this app working with my own portfolio data, check out [dralacreative.com](http://dralacreative.com/).



***

## Installation

To get started:

```bash
npm install
npm start
```


***

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

***

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
