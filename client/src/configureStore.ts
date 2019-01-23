import { Store, createStore, applyMiddleware } from 'redux'
// If you use react-router, don't forget to pass in your history type.
import { History } from 'history'

import { ApplicationState, rootReducer } from './store'

// export default function configureStore(
//     history: History,
//     initialState: ApplicationState
//   ): Store<ApplicationState> {

//     const store = null;
//     return store
// }