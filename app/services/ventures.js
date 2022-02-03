import {gql} from '@apollo/client';

export const getVentures = gql`
    query obtenerEmprendimientos($input: CategoIDInput) {
        obtenerEmprendimientos(input: $input) {
            nombre
            id
            CedJuridica
            categoria
            telCelular
            distrito
            direccion
            email
            descripcion
            archivosMultimedia
        }
    }
`;