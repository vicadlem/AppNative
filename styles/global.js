import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({

    contenedor: {
        flex: 1,
    },

    contenido: {
        flexDirection: 'colum',
        justifyContent: 'center',
        marginHorzontal: '2.5%',
        flex: 1

    },
    titulo: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF'
    },
    input: {
        backgroundColor: '#FFF',
        marginBottom: 20
    },
    boton: {
        backgroundColor: '#28303B'
    },
    botonTexto: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#FFF'
    },
    enlace: {
        color: '#FFF',
        marginTop: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase'
    },
    scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    },
    headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
    },

});

export default globalStyles;


