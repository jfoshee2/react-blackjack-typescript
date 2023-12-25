import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "./constants";
import {Cards, Deck} from "./types";


export const deckOfCardsApi = createApi({
    reducerPath: 'deckOfCardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getNewDeck: build.query<Deck, string>({
            query: (param) => `new/shuffle/?deck_count=${param}`,
        }),
        drawInitialCardsFromDeck: build.query<Cards, string>({
            query: (param) => `${param}/draw/?count=4`,
        }),
        drawCardFromDeck: build.query<Cards, string>({
            query: (param) => `${param}/draw/?count=1`,
        }),
    }),
});

export const {
    useGetNewDeckQuery,
    useDrawInitialCardsFromDeckQuery,
    useDrawCardFromDeckQuery
} = deckOfCardsApi;
