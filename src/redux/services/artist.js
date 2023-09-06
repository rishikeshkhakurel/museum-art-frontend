import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import httpConfig from '../../common/http-config';

export const ArtistApis = createApi({
  reducerPath: 'ArtistApis',
  baseQuery: fetchBaseQuery({
    baseUrl: httpConfig.BASE_URL,
  }),
  tagTypes: ["add-artist", "edit-artist", "delete-artist"],
  endpoints: (builder) => ({
    getArtist: builder.query({
      query: (page) => ({
        url: `/artist?page=${page}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ["artist"],
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
      invalidatesTags: ["artist"],
    }),
    deleteArtist: builder.mutation({
      query: (id) => ({
        url: `/artist/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ["artist"],
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
      invalidatesTags: ["artist"],
    }),

  }),
});

export const { useGetArtistQuery, useSearchArtistMutation, useAddArtistMutation, useDeleteArtistMutation, useEditArtistMutation } = ArtistApis;
