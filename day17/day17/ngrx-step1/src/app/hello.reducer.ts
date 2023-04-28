import { Action } from '@ngrx/store';

export function helloReducer( state : string = "Hello", action : Action ){
    console.log("Initial Reducer Call ", action.type, state);
    switch(action.type){
        case 'HINDI' : 
            return state = 'Namaste';
        case 'KANNADA' :
            return state = 'Namaskara';
        case 'MARATHI' :
            return state = 'Namaskaar';
        case 'TELUGU' :
            return state = 'Namaskaramu';
        case 'GUJARATI' :
            return state = 'Jai Shree Krishna';
        case 'TAMIL' :
            return state = 'Vanakkam';
        case 'ODIYA' :
            return state = 'Juhar';
        default : 
            return state
    }
}