
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getExample: Example;
};

export type Example = {
  __typename?: 'Example';
  content?: Maybe<Scalars['String']>;
};

export type GetExampleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExampleQuery = (
  { __typename?: 'Query' }
  & { getExample: (
    { __typename?: 'Example' }
    & Pick<Example, 'content'>
  ) }
);


export const GetExampleDocument = gql`
  query getExample {
    getExample {
      content
    }
}
`;
export type GetExampleQueryResult = Apollo.QueryResult<GetExampleQuery, GetExampleQueryVariables>;
