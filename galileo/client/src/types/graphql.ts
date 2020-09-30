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
  getAtom: Atom;
};

export type Atom = {
  __typename?: 'Atom';
  href?: Maybe<Scalars['String']>;
};

export type GetAtomQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAtomQuery = (
  { __typename?: 'Query' }
  & { getAtom: (
    { __typename?: 'Atom' }
    & Pick<Atom, 'href'>
  ) }
);


export const GetAtomDocument = gql`
    query getAtom {
  getAtom {
    href
  }
}
    `;
export type GetAtomQueryResult = Apollo.QueryResult<GetAtomQuery, GetAtomQueryVariables>;