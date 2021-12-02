import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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

            const Token = await AsyncStorage.getItem('user-token')

            // Definindo uma constante pra receber a resposta da requisição.
            const Resposta = await api.get('/Projetos', {
                headers: {
                    Authorization: 'Bearer ' + Token
                }
            });

            if (Resposta.status === 200) {

                // Com a função console.warn() é possível mostrar alertas na tela do dispositivo mobile
                // Console.warn(resposta.data[0])
                // Recebe o corpo da resposta.
                const DadosApi = Resposta.data;

                // Atualiza o state listaEventos com este corpo da requisição.
                // console.warn("eeeeeeeee")
                // console.warn(Resposta.data)
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

            <View style={styles.Fundo}>
                <View style={styles.Container}>

                    <View style={styles.Box_tiutlo}>
                        <Text style={styles.Titulo}>
                            {'Projetos'.toUpperCase()}
                        </Text>
                    </View>

                    <FlatList
                        data={this.state.ListaProjetos}
                        keyExtractor={item => item.idProjeto}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>

        );
    }

    renderItem = ({ item }) => (
        // console.warn(item)
        <View>



            <View style={styles.ListarDiv}>
                <View style={styles.Box_Projeto}>
                    <Text style={styles.ListagemNome}>
                        {item.nomeProjeto.toUpperCase()}
                    </Text>
                </View>

                <Text style={styles.ListagemTema}>
                    {'Tema: ' + item.idTemaNavigation.nomeTema}
                </Text>
                
                <Text style={styles.ListagemDescricao}>
                    {'Descrição: ' + item.descricao}
                </Text>
                
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

    Box_tiutlo: {
        alignItems: 'center'
    },

    Fundo: {
        flex: 1,
        backgroundColor: '#E0EDF5'
    },

    Container: {
        flex: 1,
        marginLeft: 35,
        marginRight: 35
    },

    Titulo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 36,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },

    Listagem: {
        color: 'black',
        borderColor: '#494F8F',
        fontWeight: 'bold'
    },

    Box_Projeto: {
        alignItems: 'flex-end',
        // backgroundColor
        backgroundColor: '#494F8F'
    },

    ListagemNome: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 8,
        margin: 3
    },

    ListagemTema: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 8,
        marginTop: 8
    },

    ListagemDescricao: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 8,
        marginTop: 18,
        marginBottom: 10
    },

    ListagemExemplo: {
        color: 'black',
        marginLeft: 10,
        fontSize: 12,
        marginBottom: 32
    },

    ListarDiv: {
        borderColor: '#494F8F',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 20
        // alignItems: 'flex-end'
    },

})
