import { Action } from "@ngrx/store";
import { PostModel } from "../../models/post/post-model";

export enum CardsActionTypes {

    GET_CARDS = 'GET_CARDS',
    GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS',
    GET_CARDS_ERROR = 'GET_CARDS_ERROR',

    ADD_CARD = 'ADD_CARD',
    ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS',
    ADD_CARD_ERROR = 'ADD_CARD_ERROR',

    DELETE_CARD = 'DELETE_CARD',
    DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS',
    DELETE_CARD_ERROR = 'DELETE_CARD_ERROR'
}

// Get Cards
export class GetCards implements Action {
    readonly type = CardsActionTypes.GET_CARDS;
}

// Get Cards Success
export class GetCardsSuccess implements Action {
    readonly type = CardsActionTypes.GET_CARDS_SUCCESS;

    constructor(public payload: PostModel[]) { }
}

// Get Cards Error
export class GetCardsError implements Action {
    readonly type = CardsActionTypes.GET_CARDS_ERROR;

    constructor(public payload: string) { }
}

// Add Card
export class AddCard implements Action {
    readonly type = CardsActionTypes.ADD_CARD;

    constructor(public payload: PostModel) { };
}

// Add Card Success
export class AddCardSuccess implements Action {
    readonly type = CardsActionTypes.ADD_CARD_SUCCESS;

    constructor(public payload: PostModel) { };
}

// Add Card Error
export class AddCardError implements Action {
    readonly type = CardsActionTypes.ADD_CARD_ERROR;

    constructor(public payload: string) { };
}

// Delete Card
export class DeleteCard implements Action {
    readonly type = CardsActionTypes.DELETE_CARD;

    constructor(public payload: number) { };
}

// Delete Card Success
export class DeleteCardSuccess implements Action {
    readonly type = CardsActionTypes.DELETE_CARD_SUCCESS;

    constructor(public payload: number) { };
}

// Delete Card Error 
export class DeleteCardError implements Action {
    readonly type = CardsActionTypes.DELETE_CARD_ERROR;

    constructor(public payload: string) { };
}

export type CardActions =
    | GetCards
    | GetCardsSuccess
    | GetCardsError
    | AddCard
    | AddCardSuccess
    | AddCardError
    | DeleteCard
    | DeleteCardSuccess
    | DeleteCardError
