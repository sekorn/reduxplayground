var redux = require('redux');

console.log('staring redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  // ES5 Code
  //state = state || {name: 'Anonymous'};

  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
