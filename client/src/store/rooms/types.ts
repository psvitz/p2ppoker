import { Participant } from "../pokerSession/types";

export interface Room {
  id: string
  name: string
  participants: Participant[]
}


export interface RoomsState {
  rooms: Room[]
}



// Use `const enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum RoomsActions {
  MAKE_ROOM = '@@rooms/MAKE_ROOM',
  JOIN_ROOM = '@@rooms/JOIN_ROOM',
  UPDATE_ROOM = '@@rooms/UPDATE_ROOM',
  GET_ROOMS = '@@rooms/GET_ROOMS'
}