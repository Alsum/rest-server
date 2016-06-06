# rest-server

Nodejs App provide back-end restful server.

### Version
1.0

### Demo
* node modules used
```sh
   "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "jsonwebtoken": "^5.7.0",
    "morgan": "~1.6.1",
    "passport": "^0.3.2",
    "passport-facebook": "^2.1.0",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.0.0",
    "serve-favicon": "~2.3.0"
  }
```


* After download files

* Enter this Directory
```sh
$ cd rest-server-passport
```
```sh
app.js  bin  config.js  models  node_modules  npm-debug.log  package.json  public  README.md  routes  views
```

```sh
* make sure that you have mongo istalled in your machine
```
* Now you are ready to run this application

```sh
$ npm start
```

```sh
> rest-server@0.0.0 start ~/rest-server-passport
> node ./bin/www

Connected correctly to server

```

* to start using app you can use [postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)

    then start register user by http://localhost:3000/users/register
