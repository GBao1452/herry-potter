import {createReducer, on} from '@ngrx/store';
import {BookState} from './book.state';
import * as BookActions from './book.actions';

export const initialState : BookState = {
  listBooks: [],
  isFetchingListBook: false,
  isFetchingListBookSuccess: false,
  isFetchingListBookError: '',
  book: null,
}

export const bookReducer = createReducer(
  initialState,

  on(BookActions.fetchListBooks, (state : BookState) => {
    return <BookState>{
      ...state,
      listBooks: [],
      isFetchingListBook: true,
    }
  }),
  on(BookActions.fetchListBooksSuccess, (state : BookState, {listBooks}) => {
    return <BookState>{
      ...state,
      listBooks: listBooks,
      isFetchingListBook: false,
      isFetchingListBookSuccess: true,
    }
  }),
  on(BookActions.fetchListBooksError, (state : BookState, {error}) => {
    return <BookState>{
      ...state,
      isFetchingListBook: false,
      isFetchingListBookError: error.messages,

    }
  })
);
