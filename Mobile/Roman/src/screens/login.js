import React, { Component } from 'react';
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
            email : "",
            senha : ""
        }
    }

    RealizarLogin = async () => {
        const resposta = await api.post('/Login',{
            email: this.state.email,
            senha: this.state.senha,
        });

        const token = resposta.data.token;
        await AsyncStorage.setItem('user-token', token);
        // console.warn(token)
        // console.warn(this.state.email, this.state.senha)
    };


    render(){
        return(
            // style={styles.Fundo}
            <View style={styles.Fundologin}>
              
                <Image 
                source={require('../../assets/img/Logo.png')} 
                style={styles.Imglogin}/>
                
                <View style={styles.Boxform}>
                <TextInput 
                style={styles.Inputlogin}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={email => this.setState({email})}
                ></TextInput>
                
                <TextInput 
                style={styles.Inputlogin}
                placeholder="Senha"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={senha => this.setState({senha})}
                ></TextInput>

                <TouchableOpacity
                style={styles.Botaologin}
                onPress={this.RealizarLogin}
                ><Text style={styles.Legenda}>Entrar</Text></TouchableOpacity>
                </View>

{/* 
                <TextInput
                style={styles.Inputlogin}
                placeholder="Email"
                placeholderTextColor="#000"
                keyboardType="email-address"
                onChangeText={Email => this.setState({Email})}
              />
                <TextInput
                style={styles.inputLogin}
                placeholder="Senha"
                placeholderTextColor="#000"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={Senha => this.setState({Senha})}
              />

              <TouchableOpacity>
              styles={styles.Botaologin}
              onPress={this.RealizarLogin}
              <Text style={styles.Textologin}>Entrar</Text>
              </TouchableOpacity> */}
            </View>
        )
    }
    

}

const styles = StyleSheet.create({
    // conteúdo da main
    Fundologin: {
      flex: 1,  
      backgroundColor: '#E0EDF5',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    // estilo dos ícones da tabBar
    Inputlogin: {
      width: 306,
      height: 41,
      borderWidth: 3,
      borderColor: '#494F8F',
      borderRadius: 10,
      fontFamily: 'Roboto'
    },

    Botaologin:{
        backgroundColor: '#494F8F',
        width: 282,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    Legenda:{
        color: 'white',
        textTransform: 'uppercase',
        // fontfam
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },

    Boxform:{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 250
    },
  });
  