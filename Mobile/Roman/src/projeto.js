import AsyncStorage from '@react-native-async-storage/async-storage';
import { Component } from 'react';
import api from './services/api';

export default class Projetos extends Component{
    constructor(Props){
        super(Props);
        this.state = {
            ListaProjetos: []
        };
    }
}

BuscarProjetos = async () => {
    // Definindo uma constante pra receber a resposta da requisição.
    const Resposta = await api.get('/Projetos');

    // Com a função console.warn() é possível mostrar alertas na tela do dispositivo mobile
    // Console.warn(resposta.data[0])
    // Recebe o corpo da resposta.
    const DadosApi = Resposta.data;

    // Atualiza o state listaEventos com este corpo da requisição.
    this.setState({ListaProjetos: DadosApi});
};

