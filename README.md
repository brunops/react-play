#React play

Independent React experiments. Write in commonjs, es6, ... anything, and play with it.

##Creating a new project

1. Create an app folder in `src/appX`
2. Create a `appX/appX.html` (should have a `script` tag including `appX.js`) and `appX/appX.js` files (note that folder name must be the same as the javascript file to be automatically picked up by webpack config)
3. See "Usage for development" on how to run it
4. Access `http://localhost:8080/appX.html` to see the result

##Usage

```sh
npm install
npm start
```

Go to `http://localhost:8080/`

##For development

One tab:
```sh
webpack -w
```

Another tab:
```sh
npm run watch
```

Go to `http://localhost:8080/`

##License

MIT
