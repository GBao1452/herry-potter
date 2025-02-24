import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject, Inject} from '@angular/core';
import * as BookActions from './book.actions';
import {catchError, exhaustMap, map, mergeMap, of} from 'rxjs';
import {BookService} from '../../services/Book/book.service';

export const loadActors = createEffect(
  (actions$ = inject(Actions), bookService = inject(BookService)) => {
    return actions$.pipe(
      ofType(BookActions.fetchListBooks),
      mergeMap (() => bookService.getAllBooks().pipe(
        map((books: any) => BookActions.fetchListBooksSuccess({ listBooks: books })),

        catchError(( error: any)  => of(BookActions.fetchListBooksError({error})))
      )),
    )
  },
  { functional: true }
);
