import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import main from '../main';
// import onboarding from '../onboarding';
import session from '../session';

export const store = createStore(
  combineReducers({
    // ...main.reducers,
    // ...onboarding.reducers,
    ...session.reducers,
  }),
  applyMiddleware(thunkMiddleware)
);