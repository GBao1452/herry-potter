import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parser} from '@angular/compiler';
import {map, Observable} from 'rxjs';
import {BookModel} from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }
  getAllBooks(){
    return this.httpClient.get<BookModel[]>('https://potterapi-fedeperin.vercel.app/en/books');
  };
  viewDetail(number: number): Observable<BookModel | undefined> {
    return this.getAllBooks().pipe(
      map((books) => books.find((book: BookModel) => book.number === number))
    );
  }
}
