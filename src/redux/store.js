import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers'


export function configureStore() {
    return createStore(
        rootReducers,
        composeWithDevTools(applyMiddleware(
            thunkMiddleware,
        ),),
        
    )
}
