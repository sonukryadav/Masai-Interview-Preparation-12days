/* eslint-disable */ /**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import * as Types from '../../app/services/types.generated';

import { api } from 'app/services/baseApi';
module.hot?.accept();
export type GetPostsQueryVariables = Types.Exact<{
  skip?: Types.Maybe<Types.Scalars['Int']>;
  take?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Post' }
    & Pick<Types.Post, 'id' | 'title' | 'status'>
  )>>> }
);


export const GetPostsDocument = `
    query GetPosts($skip: Int = 0, $take: Int = 10) {
  posts(skip: $skip, take: $take) {
    id
    title
    status
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  overrideExisting: module.hot?.status() === "apply",
  endpoints: (build) => ({
    GetPosts: build.query<GetPostsQuery, GetPostsQueryVariables | void>({
      query: (variables) => ({ document: GetPostsDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetPostsQuery, useLazyGetPostsQuery } = injectedRtkApi;

