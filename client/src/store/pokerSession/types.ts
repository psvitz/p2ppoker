
export enum ParticipantTypes{
  Player,
  Observer,
  Admin
}

export interface PokerSessionState {
  participants: Participant[]
}

export interface Participant {
  id: string
  name: string
  mode:ParticipantTypes
}

// Use `const enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum PokerSessionActions {
  FETCH_REQUEST = '@@pokerSession/FETCH_REQUEST',
  FETCH_SUCCESS = '@@pokerSession/FETCH_SUCCESS',
  FETCH_ERROR = '@@pokerSession/FETCH_ERROR',
  SELECT_HERO = '@@pokerSession/SELECT_HERO',
  SELECTED = '@@pokerSession/SELECTED'
}