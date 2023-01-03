import { CardActions, CardsActionTypes } from "./action";
import { CardAdapter, initialState, State } from "./state";

export function cardReducer(state = initialState, action: CardActions): State {
    switch (action.type) {
        // Get Cards
        case CardsActionTypes.GET_CARDS:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: true,
                error: null
            };
        // Get Cards Success
        case CardsActionTypes.GET_CARDS_SUCCESS:
            return CardAdapter.setAll(action.payload , {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: null
            })
        // Get Cards Error
        case CardsActionTypes.GET_CARDS_ERROR:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: action.payload
            };
        // Add Card
        case CardsActionTypes.ADD_CARD:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: true,
                error: null
            };
        // Add Card Success
        case CardsActionTypes.ADD_CARD_SUCCESS:
            return CardAdapter.addOne(action.payload, {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: null
            });
        // Add Card Error
        case CardsActionTypes.ADD_CARD_ERROR:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: action.payload
            };
        // Delete Card
        case CardsActionTypes.DELETE_CARD:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: true,
                error: null
            };
        // Delete Card Success
        case CardsActionTypes.DELETE_CARD_SUCCESS:
            return CardAdapter.removeOne(action.payload, {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: null
            });
        // Delete Card Error
        case CardsActionTypes.DELETE_CARD_ERROR:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}