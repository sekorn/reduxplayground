var redux = require('redux');

console.log('staring redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  // ES5 Code
  //state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      default:
        return state;
  }

  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Snoogins'
});

console.log('name should be snoogins', store.getState());
