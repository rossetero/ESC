import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://escbackend.onrender.com/api/v1/" }),
  endpoints: (builder) => ({
    addRecord: builder.mutation({
      query: (data) => ({
        url: "records/addRecord",
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const { useAddRecordMutation } = api
