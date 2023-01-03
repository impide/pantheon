import { EntitySelectors, EntityState } from "@ngrx/entity/src/models";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostModel } from "../../models/post/post-model";
import { CardAdapter, State } from "./state";

// 1 - Call the Store we want use
export const getCardState = createFeatureSelector<State>('card');

// 2 - Create the Entity and retrieve the todo lists and length (Method are given here)
export const {selectAll: selectAllCard}: EntitySelectors<PostModel, EntityState<PostModel>> = CardAdapter.getSelectors();

// 3 - Create Other Selectors
export const lastUpdate = (state: State) => state.lastUpdate;
export const loading = (state: State) => state.loading;
export const error = (state: State) => state.error;

// 4 - Export Selectors
export const selectAll = createSelector(getCardState, selectAllCard);
export const selectLastUpdate = createSelector(getCardState, lastUpdate);
export const selectLoading = createSelector(getCardState, loading);
export const selectError = createSelector(getCardState, error);