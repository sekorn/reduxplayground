var redux = require('redux');

console.log('staring redux example');

var stateDefault = {
  showCompleted: false,
  searchText: "no search text entered",
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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
})
// unsubscribe();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'You are a moron'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'cat'
});
