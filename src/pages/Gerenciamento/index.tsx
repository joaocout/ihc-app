import React from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import type { StackParamsList } from '../../shared/types';

type GerenciamentoProps = NativeStackScreenProps<
  StackParamsList,
  'Gerenciamento'
>;

const Gerenciamento = ({ navigation }: GerenciamentoProps) => (
  <View style={styles.container}>
    <Text>Gerenciamento</Text>
    <Button
      title="Relatórios"
      onPress={() => navigation.navigate('Relatórios')}
    />
  </View>
);

export default Gerenciamento;
