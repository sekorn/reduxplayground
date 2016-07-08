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

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'You are a moron'
});
console.log(store.getState());
