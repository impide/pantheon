import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { PostModel } from "../../models/post/post-model";

export interface State extends EntityState<PostModel> {
    lastUpdate: string;
    loading: boolean;
    error: string;
}

export const CardAdapter: EntityAdapter<PostModel> = createEntityAdapter<PostModel>();

const defaultCardsLists = {
    lastUpdate: new Date().toString(),
    loading: false,
    error: null
}

export const initialState: State = CardAdapter.getInitialState(defaultCardsLists);