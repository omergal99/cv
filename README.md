# My portfolio cv

WebLink: https://omergal99.github.io/cv/#/

All my projects I made, Some with Server and DB, with Responsive design also about myself :)

## Explanation - work with Redux Hooks

### USE Node version v12.13.0
### USE Node version v12.13.0

Im use yarn so we need to install it:
### `npm i -g yarn` or not globaly: `npm i yarn`

After that install node modules:
### `yarn`

And then we can run the App:
### `yarn start`

-----

For upload to gh-pages: (https://create-react-app.dev/docs/deployment)

In package.json - set homepage:
`"homepage": "https://omergal99.github.io/cv"`

Install gh-pages npm
`yarn add gh-pages`

add this to package.json scripts:
"predeploy": "yarn build",
"deploy": "gh-pages -b gh-pages -d build",

do:
`npm run deploy`

and then you can change the deploy script to this:
"deploy": "gh-pages -d build"
