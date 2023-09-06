import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import httpConfig from '../../common/http-config';

export const ArtistApis = createApi({
  reducerPath: 'ArtistApis',
  baseQuery: fetchBaseQuery({
    baseUrl: httpConfig.BASE_URL,
  }),
  tagTypes: ["edit-artist","delete-artist","add-artist"],
  endpoints: (builder) => ({
    getArtist: builder.query({
      query: (page) => ({
        url: `/artist?page=${page}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ["edit-artist","delete-artist","add-artist"],
    }),
    getArtistbyId: builder.query({
      query: (id) => ({
        url: `/artist/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    searchArtist: builder.mutation({
      query: ({ search, page }) => ({
        url: `/artist/search?query=${search}&page=${page}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    addArtist: builder.mutation({
      query: (value) => ({
        url: `/artist/add`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: value,
      }),
      invalidatesTags: ["add-artist"],
    }),
    deleteArtist: builder.mutation({
      query: (id) => ({
        url: `/artist/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ["delete-artist"],
    }),
    editArtist: builder.mutation({
      query: (value) => ({
        url: `/artist/edit`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: value,
      }),
      invalidatesTags: ["edit-artist"],
    }),
  }),
});

export const {
  useGetArtistQuery,
  useSearchArtistMutation,
  useAddArtistMutation,
  useDeleteArtistMutation,
  useEditArtistMutation,
  useGetArtistbyIdQuery
} = ArtistApis;
