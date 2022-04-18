import React from 'react';
import { View, Text, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import type { StackParamsList } from '../../shared/types';
import { COLORS } from '../../shared/constants';

type LoginBoardProps = NativeStackScreenProps<StackParamsList, 'Login'>;

const Login = ({ navigation }: LoginBoardProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Para que o login seja mais fácil e seguro, permita o acesso à câmera e
      entre utilizando o código QR que deixamos na sua casa :)
    </Text>
    <TouchableOpacity style={styles.button}
     onPress={()=>navigation.navigate('Dashboard')}>
        <Text style={styles.textButton}>LER CÓDIGO</Text>
    </TouchableOpacity>
    <Text style={styles.text}>
    Caso prefira, você também pode entrar usando o usuário e senha que nossos técnicos te passaram.
    </Text>
    <TextInput style={styles.input} placeholder='USUÁRIO'></TextInput>
    <TextInput style={styles.input} placeholder='SENHA'></TextInput>
    <TouchableOpacity style={[styles.button, {marginBottom: 25}]}
     onPress={()=>navigation.navigate('Dashboard')}>
        <Text style={styles.textButton}>ENTRAR</Text>
    </TouchableOpacity>
    <Text style={styles.textExtra}>Esqueci minha senha</Text>
  </View>
);

export default Login;
