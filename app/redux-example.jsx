var redux = require('redux');

console.log('staring redux example');

// Name Reducer and action generators
// -------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name  // same as name: name
  }
}

// Hobbies Reducer and action generators
// -------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  }
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movies Reducer and actions generators
// -------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
};

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());
  document.getElementById('app').innerHTML = state.name;

});
//unsubscribe();

var currentState = store.getState();

store.dispatch(changeName('Scott'));
store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));
store.dispatch(removeHobby(2));
store.dispatch(addMovie('Better Off Dead', 'Comedy'));
store.dispatch(addMovie('Mad Max','Action'));
store.dispatch(removeMovie(1));
store.dispatch(changeName('Emily'));
