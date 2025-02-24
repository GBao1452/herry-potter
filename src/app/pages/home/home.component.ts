import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {BookState} from '../../ngrx/book/book.state';
import {BookModel} from '../../models/book.model';
import * as BookActions from '../../ngrx/book/book.actions';
import {BookService} from '../../services/Book/book.service';
import {CardComponent} from '../../components/card/card.component';
import {NavComponent} from '../../components/nav/nav.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CardComponent, NavComponent, RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  book$!: Observable<BookModel[]>;

  constructor(private store: Store<{book: BookState }> ,
                private bookService: BookService) {
    this.store.dispatch(BookActions.fetchListBooks());
    this.book$ = this.store.select('book', 'listBooks')
  }
  ngOnInit() {
    this.book$.subscribe((data) => {
      console.log(data);
    })
  }
}
