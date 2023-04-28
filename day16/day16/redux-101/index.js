const redux = require("redux");
const createStore = redux.createStore;

// Action Type
const ADD_HERO = "ADD_HERO";
const ADD_MOVIE = "ADD_MOVIE";

// Action Dispatcher
function addHero(){
    return {
        type : ADD_HERO,
        info : "This is my First Redux Action"
    }
};
function addMovie(){
    return {
        type : ADD_MOVIE,
        info : "This is my Second Redux Action"
    }
};

// default / initial state of the application
const initialHeroState = {
    heroes : 0
};
const initialMovieState = {
    movies : 0
};

let heroReducer = function( state = initialHeroState, action ){
    console.log("Hero Reducer Called");
    switch(action.type){
        case ADD_HERO : return {
            ...state,
            heroes : state.heroes + 1
        }
        default : return state
    }
};
let movieReducer = function( state = initialMovieState, action ){
    console.log("Movie Reducer Called");
    switch(action.type){
        case ADD_MOVIE : return {
            ...state,
            movies : state.movies + 1
        }
        default : return state
    }
};

// Combine reducers
const rootReducer = redux.combineReducers({
    hero : heroReducer,
    movies : movieReducer
})

const store = createStore( rootReducer );

console.log(store.getState());

const unsubscribe = store.subscribe(function(){
    console.log("State Updated", store.getState());
})

store.dispatch( addHero() );
store.dispatch( addHero() );
store.dispatch( addHero() );
store.dispatch( addHero() );

store.dispatch( addMovie() );
store.dispatch( addMovie() );
store.dispatch( addMovie() );
store.dispatch( addMovie() );

unsubscribe();
