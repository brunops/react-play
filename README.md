#React play

Independent React experiments. Write in commonjs, es6, ... anything, and play with it.

##Creating a new project

1. Create an app folder in `src/appX`
2. Create a `appX/appX.html` (should have a `script` tag including `appX.js`) and `appX/appX.js` files
3. Edit `webpack.config.js` and add a new entry point to `appX` (this can probably be removed later on by reading `src/` folder but ¯\_(ツ)_/¯)
4. See "Usage for development" on how to run it
5. Access `http://localhost:8080/appX.html` to see the result

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
