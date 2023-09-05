import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import httpConfig from '../../common/http-config';

export const ArtistApis = createApi({
  reducerPath: 'ArtistApis',
  baseQuery: fetchBaseQuery({
    baseUrl: httpConfig.BASE_URL,
  }),
  endpoints: (builder) => ({
    getArtist: builder.mutation({
      query: (page) => ({
        url: `/artist?page=${page}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    searchArtist: builder.mutation({
      query: ({search, page}) => ({
        url: `/artist/search?query=${search}&page=${page}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),

  }),
});

export const { useGetArtistMutation, useSearchArtistMutation } = ArtistApis;
