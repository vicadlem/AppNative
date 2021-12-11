/**
 * Make gql queries and mutations here
 */

import {gql} from '@apollo/client';

export const getCategories = gql`
  query {
    obtenerCategorias {
      nombre
      id
    }
  }
`;
