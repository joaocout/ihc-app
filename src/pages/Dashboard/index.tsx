import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import type { StackParamsList } from '../../shared/types';

type DashBoardProps = NativeStackScreenProps<StackParamsList, 'Dashboard'>;

const Dashboard = ({ navigation }: DashBoardProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>Consumo estimado neste mês em reais</Text>
    <Text onPress={()=> navigation.navigate('Login')}>Login</Text>
  </View>
);

export default Dashboard;
