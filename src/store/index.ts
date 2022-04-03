import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from '../sagas/mySaga';
import {rooReducer} from './reducers';
import {ActionType} from './actions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rooReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const action = (type: ActionType) => store.dispatch({type});

export {store};
