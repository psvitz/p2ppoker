
export interface Room{
  id: string
  name: string
}


export interface RoomsState{
  rooms:Room[]
}



// Use `const enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export const enum RoomsActions {
    FETCH_REQUEST = '@@rooms/FETCH_REQUEST',
    FETCH_SUCCESS = '@@rooms/FETCH_SUCCESS',
    FETCH_ERROR = '@@rooms/FETCH_ERROR',
    SELECT_HERO = '@@rooms/SELECT_HERO',
    SELECTED = '@@rooms/SELECTED'
  }