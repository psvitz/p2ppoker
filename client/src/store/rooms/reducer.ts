import { Reducer } from 'redux'
import { RoomsState, RoomsActions } from './types';

// Type-safe initialState!
const initialState: RoomsState = {
  rooms: []
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<RoomsState> = (state = initialState, action) => {
  switch (action.type) {
    case RoomsActions.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case RoomsActions.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case RoomsActions.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as roomsReducer }