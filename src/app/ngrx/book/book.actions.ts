import {createAction, props} from '@ngrx/store';
import {BookModel} from '../../models/book.model';


export const fetchListBooks = createAction('[Book] Fetch List Books');
export const fetchListBooksSuccess = createAction('[Book] Fetch List Books Success', props<{ listBooks: BookModel[] }>());
export const fetchListBooksError = createAction('[Book] Fetch List Books Error', props<{ error: any }>());


