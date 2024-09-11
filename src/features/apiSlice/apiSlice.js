import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["books", "book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getBook: builder.query({
      query: (bookId) => `/books/${bookId}`,
      providesTags:(result, error, arg)=>[
        {type:'video',id:arg}
      ]
    }),
    // mutable Function
   addBook: builder.mutation({
    query: (data)=>({
        url:'/books',
        method:"POST",
        body:data
    }),
    invalidatesTags:["books"]
   }),
   editBook: builder.mutation({
    query: ({id, data})=>({
        url:`/books/${id}`,
        method:"PATCH",
        body:data
    }),
    invalidatesTags: (result, error, arg)=> ["books",{type:"book", tag:arg.id}]
   }),
   deleteBook: builder.mutation({
    query: (id)=>({
        url:`/books/${id}`,
        method:"delete",
    }),
    invalidatesTags: (result, error, arg)=> ["books",{type:"book", tag:arg.id}]
   })
  }),
});
export const { useGetBooksQuery,
     useGetBookQuery,
      useAddBookMutation,
    useEditBookMutation,
    useDeleteBookMutation
    } =apiSlice