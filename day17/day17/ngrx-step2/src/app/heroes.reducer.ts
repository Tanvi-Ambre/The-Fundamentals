import { Action } from "@ngrx/store";

export function heroesReducer(state:Array<string> = ['Here They Come '], action : Action){
    switch(action.type){
        case 'AVENGERS' :
            return state = ['Ironman', 'Black Widow', 'Scarlet Witch'];
        case 'JUSTICELEAGUE' : 
            return state = ['Batman', 'Wonder Women', 'Superman', 'Flash'] 
        default : 
            return state
    }
}