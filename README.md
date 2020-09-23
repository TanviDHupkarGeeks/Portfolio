# Ruta's Photography

## Getting Started

This website was created with the intention of sharing a portfolio.

## Getting Started
 
### Prerequisites

- [Vanilla JavaScript](https://www.javascript.com/)
- [Sass](https://sass-lang.com/)

View the `package.json` files for more specific configurations.

## Running Sass

After installing the npm packages, at `./docs` run

```
$ npm run sass
```

And leave it running during the development.

### Running Locally

Just run server.js to serve the back-end.

```
$ node server.js
```

Then you can start writing your code.

It requires [Node.js](https://nodejs.org/en/) and 
[Express](https://expressjs.com/) to work.

### Running on GitHub Pages

1. Go to your repository at GitHub and click at `Settings`
2. Go to the `GitHub Pages` section
3. At `Source`, change the folder to `/docs`
4. Save it

The website will be served at `https://USERNAME.github.io/REPOSITORY-NAME`

## Built With

- Vanilla JavaScript - interface
- Sass - css preprocessor

## Write up

I started the project by writting the `server.js` file to server the project 
locally. It uses express, so at the root folder, I just ran

```
$ npm i express
```

Then, I created a directory called `docs` and started writting the code in it.
First the HTML structure, then the JS scripts. Both at `index.html` and
`index.js`.

Then, I introduced `Sass`, with npm, by running

```
$ npm i node-sass
```

Then added the `sass` script at `package.json`.

After everything is just, it just has to be pushed to GitHub.

```
$ git add .
$ git commit -m "YOUR COMMIT MESSAGE"
$ git push -u origin master
```
