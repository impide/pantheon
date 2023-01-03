import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CardFeatureStoreActions } from './core/store/profil-cards-store';
import { CardFeatureStoreState } from './core/store/profil-cards-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pantheon-project';

  constructor(private store: Store<CardFeatureStoreState.State>) {
    this.store.dispatch(new CardFeatureStoreActions.GetCards())
  }
}