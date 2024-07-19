import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResumeState } from "../Store/reducers/ResumeReducer";
export interface File {
  user: string;
  filename: string;
  filepath: string;
  isPublic: boolean;
  data: any;
}

export const resumeApi = createApi({
  reducerPath: 'resumeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    submitResume: builder.mutation<void, ResumeState>({
      query: (resumeData) => ({
        url: '/resume',
        method: 'POST',
        body: resumeData,
      }),
    }),
  }),
});
export const { useSubmitResumeMutation } = resumeApi;

