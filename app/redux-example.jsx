var redux = require('redux');
var axios = require('axios');

console.log('staring redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore.jsx').configure();

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a target="_blank" href="'+ state.map.url + '">View Your Location</a>'
  }

});
//unsubscribe();

var currentState = store.getState();

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Scott'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie('Better Off Dead', 'Comedy'));
store.dispatch(actions.addMovie('Mad Max','Action'));
store.dispatch(actions.removeMovie(1));
store.dispatch(actions.changeName('Emily'));
