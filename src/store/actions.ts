export enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  ASYNC_INCREMENT = 'ASYNC_INCREMENT',
  ASYNC_DECREMENT = 'ASYNC_DECREMENT',
}

interface IIncrementAction {
  type: ActionType.INCREMENT;
}

interface IDecrementAction {
  type: ActionType.DECREMENT;
}

interface IAsyncIncrementAction {
  type: ActionType.ASYNC_INCREMENT;
}

interface IAsyncDEcrementAction {
  type: ActionType.ASYNC_DECREMENT;
}

export type ICounterActions =
  | IIncrementAction
  | IDecrementAction
  | IAsyncIncrementAction
  | IAsyncDEcrementAction;
