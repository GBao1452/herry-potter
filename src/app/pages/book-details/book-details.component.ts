import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/book.model';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/Book/book.service';
import {Store} from '@ngrx/store';
import {BookState} from '../../ngrx/book/book.state';
import * as BookActions from '../../ngrx/book/book.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent{currentBook!: BookModel | undefined;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {
    const number = Number(this.activatedRoute.snapshot.params['number']);

    this.bookService.viewDetail(number).subscribe((book) => {
      this.currentBook = book;
    });
  }}
