import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { PokerSessionState } from './pokerSession/types';
import { RoomsState } from './rooms/types';
import { pokerSessionReducer } from './pokerSession/reducer';
import { roomsReducer } from './rooms/reducer';

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export interface ApplicationState {
  pokerSession: PokerSessionState
  rooms: RoomsState
}

export const rootReducer = combineReducers<ApplicationState>({
  pokerSession: pokerSessionReducer,
  rooms: roomsReducer
})