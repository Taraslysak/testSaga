import {combineReducers} from 'redux';
import {ActionType, ICounterActions} from './actions';

const counterReducer = (state: number = 0, action: ICounterActions) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return (state += 1);
    case ActionType.DECREMENT:
      return (state -= 1);
    default:
      return state;
  }
};

export const rooReducer = combineReducers({counter: counterReducer});

export type RootState = ReturnType<typeof rooReducer>;
