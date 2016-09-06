# Random Dobbelen

> Multiplayer Random Dice Game with React (and FeathersJS.)

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/MemoryGame; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).


var x = []

for (var i=0; i<6; ++i){
  var randomNr = Math.floor((Math.random()*6)+1);
  x.push(randomNr);
}

var y = x.map(function(nr){
  if (nr == 1 || nr == 5) {
  return nr
  } else {
  return Math.floor((Math.random()*6)+1)
  }
});

var z = y.map(function(nr){
  if (nr == 1 || nr == 5) {
  return nr
  } else {
  return Math.floor((Math.random()*6)+1)
  }
});


function count(beurt,cijfer) {
  var count = 0;
  for(var i = 0; i < x.length; ++i){
      if(beurt[i] == cijfer)
          count++;
  }
  return count;
}

function checkDead(x,y) {
  if (count(x,5) == count(y,5) && count(x,1) == count(y,1)) {
    return true
  } else {
    return false
  }
}
