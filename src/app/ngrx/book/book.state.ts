import {BookModel} from '../../models/book.model';

export interface BookState{
  listBooks: BookModel[];
  isFetchingListBook: boolean;
  isFetchingListBookSuccess: boolean;
  isFetchingListBookError: any;
  book: BookModel | null;
}
