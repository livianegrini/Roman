import React ,{ Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Email : "",
            Senha : ""
        }
    }

    RealizarLogin = async () => {
        const resposta = await api.post('/Login',{
            Email: this.state.Email,
            Senha: this.state.Senha,
        });

        const token = resposta.data.token;
        await AsyncStorage.setItem('user-token', token)
        console.warn(token)
    };


    render(){
        return(
            <View>
                <TextInput
                style={styles.inputLogin}
                placeholder="username"
                placeholderTextColor="#000"
                keyboardType="email-address"
                // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
                onChangeText={email => this.setState({email})}
              />
              <Text>Teste</Text>
            </View>
        );
    }

}
