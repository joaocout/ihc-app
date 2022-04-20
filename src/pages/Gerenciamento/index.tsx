import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import type { GerenciamentoStackParamsList } from '../../shared/types';
import { COLORS } from '../../shared/constants';

const SOFA_ICON = require('../../../assets/sofa.png');
const CAMA_ICON = require('../../../assets/cama.png');

type GerenciamentoProps = NativeStackScreenProps<
  GerenciamentoStackParamsList,
  'Gerenciamento'
>;

const Gerenciamento = ({ navigation }: GerenciamentoProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Aqui estão listados os cômodos que possuem nosso sistema instalado.
    </Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate('Cômodo', { title: 'SALA DE ESTAR', type: 1 })
      }>
      <Image source={SOFA_ICON} />
      <View style={{ marginLeft: 15 }}>
        <Text style={{ color: COLORS.WHITE, fontWeight: 'bold' }}>
          SALA DE ESTAR
        </Text>
        <Text style={{ color: COLORS.WHITE }}>3 aparelhos ligados</Text>
        <Text style={{ color: COLORS.WHITE }}>MÉDIA DE CONSUMO: 3.3 kWh</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate('Cômodo', { title: 'QUARTO DO VÍTOR', type: 2 })
      }>
      <Image source={CAMA_ICON} />
      <View style={{ marginLeft: 15 }}>
        <Text style={{ color: COLORS.WHITE, fontWeight: 'bold' }}>
          QUARTO DO VÍTOR
        </Text>
        <Text style={{ color: COLORS.WHITE }}>Nenhum aparelho ligado</Text>
        <Text style={{ color: COLORS.WHITE }}>MÉDIA DE CONSUMO: 0 kWh</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => null}>
      <Text style={styles.textBottom}>
        Caso deseje que nosso sistema seja instalado em outros cômodos, entre em
        contato conosco por aqui.
      </Text>
    </TouchableOpacity>
  </View>
);

export default Gerenciamento;
