// store/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // путь в store для RTK Query
  baseQuery: fetchBaseQuery({ baseUrl: 'https://my-json-server.typicode.com' }),
  endpoints: (builder) => ({
    sendFormData: builder.mutation({
      query: (data) => ({
        url: '/formData',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSendFormDataMutation } = apiSlice;