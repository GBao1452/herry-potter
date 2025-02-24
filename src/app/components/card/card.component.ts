import {Component, Input} from '@angular/core';
import {BookModel} from '../../models/book.model';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule,MatDividerModule, MatButtonModule, RouterLink ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() book!: BookModel
}
