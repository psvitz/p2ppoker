import { Reducer } from 'redux'
import { Room, RoomsState, RoomsActions } from './types';


// Type-safe initialState!
const initialState: RoomsState = {
  rooms: [{id:"1", name:"Test", participants:[]}]
} 

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<RoomsState> = (state = initialState, action) => {
  switch (action.type) {
    case RoomsActions.GET_ROOMS:{
      return {...state};
    }
    case RoomsActions.MAKE_ROOM: {
      var newState = {...state};
      //newStat.rooms.push({ id:"-1", name:action});
      return { ...state }
    }
    case RoomsActions.JOIN_ROOM: {
      return { ...state, loading: false, data: action.payload }
    }
    case RoomsActions.UPDATE_ROOM:{
      let newState = {...state};
      //newState.rooms.reduce(x=>x.i)
      return newState;
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as roomsReducer }