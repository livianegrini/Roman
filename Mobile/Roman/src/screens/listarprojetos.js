import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from '../services/api'

export default class Projetos extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            ListaProjetos: []
        };
    }


    BuscarProjetos = async () => {

        try {

            const Token = await AsyncStorage.getItem('Usuario-Token')

            // Definindo uma constante pra receber a resposta da requisição.
            const Resposta = await api.get('/Projetos', {
                Headers: {
                    Authorization: 'Bearer ' + Token
                }
            });

            if (Resposta.status === 200) {

                // Com a função console.warn() é possível mostrar alertas na tela do dispositivo mobile
                // Console.warn(resposta.data[0])
                // Recebe o corpo da resposta.
                const DadosApi = Resposta.data;

                // Atualiza o state listaEventos com este corpo da requisição.
                this.setState({ ListaProjetos: DadosApi });
            }

        } catch (error) {
            console.warn(error);
        }

    };

    // quando o componente é renderizado
    componentDidMount() {
        // invoca a função abaixo
        this.BuscarProjetos();
    }

    render() {
        return (

            <View style={styles.Container}>
                <Text style={styles.Titulo}>
                    {'Projetos'.toUpperCase()}
                </Text>

                <View>
                    <Text style={styles.Listagem}>
                        {'Nome do Projeto'.toUpperCase()}
                    </Text>
                    <Text style={styles.Listagem}>
                        {'Tema do Projeto'.toUpperCase()}
                    </Text>
                    <Text style={styles.Listagem}>
                        {'Descrição:'.toUpperCase()}
                    </Text>
                    <Text style={styles.Listagem}>
                        {'Exemplo'.toUpperCase()}
                    </Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({


    Container: {
        flex: 1,
        backgroundColor: '#E0EDF5',
        marginLeft: 35,
        marginRight: 35
    },

    Titulo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 36,
        borderColor: 'black',
        alignItems: 'center'
    },

    Listagem: {
        color: 'black',
        borderColor: '#494F8F',

    }

})


