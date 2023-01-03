import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap } from "rxjs";

import { PostModel } from "../../models/post/post-model";
import { CardFeatureStoreActions } from ".";
import { Injectable } from "@angular/core";
import { PostService } from "../../services/post/post-service";


@Injectable({ providedIn: 'root' })
export class CardEffects {

    constructor(
        private action$: Actions,
        private postService: PostService) { }

    getCards$: Observable<Action> = createEffect(() => {
        return this.action$.pipe(
            ofType(CardFeatureStoreActions.CardsActionTypes.GET_CARDS),
            switchMap(() => this.postService.getAllPosts().pipe(
                map((cards: PostModel[]) => { 
                    console.log(cards);
                    return new CardFeatureStoreActions.GetCardsSuccess(cards['result']);
                }),
                catchError((err: string) => of(new CardFeatureStoreActions.GetCardsError(err)))
            ))
        )
    })

    // addCard$: Observable<CardActions> = createEffect(() => this.action$.pipe(
    //     ofType<CardFeatureStoreActions.AddCard>(CardFeatureStoreActions.CardsActionTypes.ADD_CARD),
    //     switchMap(action => this.postService.addOnePost(action.payload).pipe(
    //         map(card => {
    //             return new CardFeatureStoreActions.AddCardSuccess(card)
    //         }),
    //         catchError((err: string) => of(new CardFeatureStoreActions.AddCardError(err)))
    //     ))
    // ))

    deleteCard$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType<CardFeatureStoreActions.DeleteCard>(CardFeatureStoreActions.CardsActionTypes.DELETE_CARD),
        switchMap(action => this.postService.deleteOnePost(action.payload).pipe(
            map(() => {
                return new CardFeatureStoreActions.DeleteCardSuccess(action.payload)
            }),
            catchError((err: string) => of(new CardFeatureStoreActions.DeleteCardError(err)))
        ))
    ))
}