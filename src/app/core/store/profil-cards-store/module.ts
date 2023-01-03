import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cardReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { CardEffects } from './effect';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot({ card: cardReducer }),
        EffectsModule.forRoot([CardEffects]),
    ],
    providers: []
})
export class CardFeatureStoreModule { }