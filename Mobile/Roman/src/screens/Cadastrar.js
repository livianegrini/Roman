import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Cadastrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Titulo: "",
            Descricao: "",
            idTema: 0
        }
    }

    // Cadastrarprojeto = () =>{
    //     const resposta = await api.post('/Projetos',{
    //         Titulo: this.state.Titulo,
    //         Descricao: this.state.Descricao,
    //         idTema: this.state.idTema
    //     }), await AsyncStorage.getItem();

    //     if (condition) {

    //     }
    //     console.warn('')
    // }

    render() {
        return (
            <View style={styles.Fundo}>
                <Image
                    source={require('../../assets/img/Logo.png')}
                // style={styles.ImgCadastrar} 
                />
                <View style={styles.Box_Form}>
                    <View style={styles.Box_Titulo}>
                        <Text>Novo Projeto</Text>
                    </View>
                    <TextInput
                        placeholder="Nome do Projeto"
                        style={styles.InputCadastro}
                    />
                    {/* <Picker
                        selectedValue={selectedValue}
                        // style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker> */}
                    <TextInput
                        placeholder="Descrição do Projeto"
                        style={styles.InputCadastro}
                    />

                    <TouchableOpacity
                        style={styles.BotaoCadastro}
                        onPress={this.Cadastrar}
                    ><Text style={styles.Legenda}>Cadastrar</Text></TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    Fundo:{
        flex: 1,
        backgroundColor:'#E0EDF5',
        alignItems: 'center'
    },
    Box_Form: {
        alignItems:'center',
        justifyContent: 'space-around',
        flex: 0.75,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#494F8F'
        // height: '100%'
    },

    InputCadastro: {
        width: 306,
        borderColor: '#494F8F',
        borderWidth: 3,
        backgroundColor: 'white',
        borderRadius: 10
    },

    BotaoCadastro:{
        backgroundColor: '#494F8F',
        width: 282,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    Box_Titulo:{
        backgroundColor:'#494F8F',
        alignItems: 'center',
        justifyContent: 'center',
        width: 346,
        height: 69  
    }
})
