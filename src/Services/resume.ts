import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface File {
  user: string;
  filename: string;
  filepath: string;
  isPublic: boolean;
  data: any;
}

export const resumeApi = createApi({
  reducerPath: 'resumeApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
      submitResume: builder.mutation({
          query: (resume) => ({
              url: '/resume',
              method: 'POST',
              body: resume,
          }),
      }),
  }),
});
export const { useSubmitResumeMutation } = resumeApi;

