import {createAction} from '@ngrx/store';

export const plus = createAction('[Counter] Plus');

export const minus = createAction('[Counter] Minus');

export const reset = createAction('[Counter] Reset');
