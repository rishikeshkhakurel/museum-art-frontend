import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./slices/loading";
import { ArtistApis } from "./services/artist";

const store = configureStore({
    reducer: {
        loading: loadingSlice.reducer,
        [ArtistApis.reducerPath]: ArtistApis.reducer,


    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        ArtistApis.middleware,
    )
});

export default store;