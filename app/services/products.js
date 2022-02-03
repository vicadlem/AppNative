import { gql } from '@apollo/client';

export const getProducts = gql`
query obtenerProductos($input: EmprendiIDInput) {
    obtenerProductos(input: $input) {
        nombre
        id
    }
}
`;