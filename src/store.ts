import {configureStore} from "@reduxjs/toolkit";
import {deckOfCardsApi} from "./services/cards";
import {setupListeners} from "@reduxjs/toolkit/query/react";


export const store = configureStore({
    reducer: {
        [deckOfCardsApi.reducerPath]: deckOfCardsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(deckOfCardsApi.middleware),
});

setupListeners(store.dispatch);
