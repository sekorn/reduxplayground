var redux = require('redux');

console.log('staring redux example');

var stateDefault = {
  showCompleted: false,
  searchText: "",
  todos: []
};

var reducer = (state = stateDefault, action) => {
  // ES5 Code
  //state = state || {name: 'Anonymous'};

  return state;
};

var store = redux.createStore(reducer);

console.log('currentState', store.getState());
