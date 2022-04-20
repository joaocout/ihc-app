import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import ProgressBar from '../../components/ProgressBar';
import ConfigModal from '../../components/ConfigModal';
import { COLORS } from '../../shared/constants';

import type { DashboardStackParamsList } from '../../shared/types';

const VALUE_1 = Math.min(Math.max(Math.random(), 0.1), 0.9);
const VALUE_2 = Math.min(Math.max(Math.random(), 0.1), 0.9);

type DashboardProps = NativeStackScreenProps<
  DashboardStackParamsList,
  'Dashboard'
>;

function mudaUnidadeMedida(unidade: number, valor: number) {
  switch (unidade) {
    case 0:
      return 'kWz ' + (valor * 100).toFixed(2).toString();
    case 1:
      return 'R$ ' + (valor * 100 * 9.5).toFixed(2).toString();
    case 2:
      return 'kg/CO2 ' + (valor * 100 * 0.233).toFixed(2).toString();
    default:
      return '';
  }
}

const Dashboard = ({ navigation }: DashboardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [unidadeMedida1, setunidadeMedida1] = useState(0); //0=kWz - 1=R$ - 2=kg de CO2
  const [unidadeMedida2, setunidadeMedida2] = useState(0); //0=kWz - 1=R$ - 2=kg de CO2

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { flex: 0.75 }]}>
          Consumo estimado neste mês em reais (até hoje)
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Entypo name="cog" size={20} color={COLORS.GRAY_1} />
        </TouchableOpacity>
      </View>
      <ProgressBar
        text={mudaUnidadeMedida(unidadeMedida1, VALUE_1)}
        progress={VALUE_1}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.text, { flex: 0.75 }]}>
          Consumo estimado agora em kWh (última hora)
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Entypo name="cog" size={20} color={COLORS.GRAY_1} />
        </TouchableOpacity>
      </View>
      <ProgressBar
        text={mudaUnidadeMedida(unidadeMedida2, VALUE_2)}
        progress={VALUE_2}
      />
      <TouchableOpacity onPress={() => null}>
        <Text style={styles.linkText}>
          Estimativas incorretas?
          {'\n'}
          Reporte o problema clicando aqui, um dos nossos técnicos te ajudará a
          resolver :)
        </Text>
      </TouchableOpacity>
      <ConfigModal
        visible={modalVisible}
        dismiss={() => setModalVisible(false)}
        changeUnit={(index) => setunidadeMedida1(index, VALUE_1)}
      />
      <ConfigModal
        visible={modalVisible2}
        dismiss={() => setModalVisible2(false)}
        changeUnit={(index) => setunidadeMedida2(index, VALUE_2)}
      />
    </View>
  );
};

export default Dashboard;
