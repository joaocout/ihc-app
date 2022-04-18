import React from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import { COLORS } from '../../shared/constants';

import type { StackParamsList } from '../../shared/types';

type LoginProps = NativeStackScreenProps<StackParamsList, 'Login'>;

const Login = ({ navigation }: LoginProps) => (
  <KeyboardAvoidingView behavior="position" style={styles.container}>
    <Text style={styles.text}>
      Para que o login seja mais fácil e seguro, permita o acesso à câmera e
      entre utilizando o código QR que deixamos na sua casa :)
    </Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Dashboard')}>
      <Text style={styles.textButton}>LER CÓDIGO</Text>
    </TouchableOpacity>
    <Text style={styles.text}>
      Caso prefira, você também pode entrar usando o usuário e senha que nossos
      técnicos te passaram.
    </Text>
    <TextInput
      style={styles.input}
      placeholder="USUÁRIO"
      placeholderTextColor={COLORS.GRAY_2}
    />
    <TextInput
      style={styles.input}
      placeholder="SENHA"
      placeholderTextColor={COLORS.GRAY_2}
    />
    <TouchableOpacity
      style={[styles.button, { marginBottom: 25 }]}
      onPress={() => navigation.navigate('Dashboard')}>
      <Text style={styles.textButton}>ENTRAR</Text>
    </TouchableOpacity>
    <Text style={styles.textExtra}>Esqueci minha senha</Text>
  </KeyboardAvoidingView>
);

export default Login;
