import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import * as BookEffects from './ngrx/book/book.effects';
import {bookReducer} from './ngrx/book/book.reducers';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideStore({
        book: bookReducer
    }), provideAnimationsAsync(),
    provideEffects(BookEffects),
    provideHttpClient(),
    provideAnimationsAsync()]
};
