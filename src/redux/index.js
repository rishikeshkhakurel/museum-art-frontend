import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./slices/loading";
import { ArtistApis } from "./services/artist";
import { ArtWorkApis } from "./services/art-work";

const store = configureStore({
    reducer: {
        loading: loadingSlice.reducer,
        [ArtistApis.reducerPath]: ArtistApis.reducer,
        [ArtWorkApis.reducerPath]: ArtWorkApis.reducer,


    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        ArtistApis.middleware,
        ArtWorkApis.middleware,
    )
});

export default store;