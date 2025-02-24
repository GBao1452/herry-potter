import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
