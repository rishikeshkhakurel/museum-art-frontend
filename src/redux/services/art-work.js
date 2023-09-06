import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import httpConfig from '../../common/http-config';

export const ArtWorkApis = createApi({
  reducerPath: 'ArtWorkApis',
  baseQuery: fetchBaseQuery({
    baseUrl: httpConfig.BASE_URL,
  }),
  tagTypes: ["edit-artwork","delete-artwork","add-artwork"],
  endpoints: (builder) => ({
    getArtWork: builder.query({
      query: (page) => ({
        url: `/artwork?page=${page}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ["edit-artwork","delete-artwork","add-artwork"],
    }),
    searchArtWork: builder.mutation({
      query: ({ search, page }) => ({
        url: `/artwork/search?query=${search}&page=${page}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetArtWorkQuery,
  useSearchArtWorkMutation,
} = ArtWorkApis;
