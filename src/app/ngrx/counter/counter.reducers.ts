import {createReducer, on} from '@ngrx/store';
import * as CounterActions from './counter.actions';
import {CounterState} from './counter.state';
import {state} from '@angular/animations';

export const initialState:  CounterState = {
  count: 0
}
export const counterReducer = createReducer(
  initialState,
  on(CounterActions.plus, (state) => {
    return <CounterState> {
      count :state.count +1
    }
  }),
  on(CounterActions.minus, (state) => {
    return <CounterState> {
      count: state.count < 1 ? 0 : state.count - 1
    }
  }),
  on(CounterActions.reset, (state) => {
    return <CounterState> {
      count :0
    }
  })
)
