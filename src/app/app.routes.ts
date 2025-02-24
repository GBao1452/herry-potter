import { Routes } from '@angular/router';
    import { HomeComponent } from './pages/home/home.component';
    import { BookDetailsComponent } from './pages/book-details/book-details.component';

    export const routes: Routes = [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "book-details/:number",
        component: BookDetailsComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
    ];
