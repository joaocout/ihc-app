import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import ProgressBar from '../../components';

// import type { StackParamsList } from '../../shared/types';

const CONFIG_ICON = require('../../../assets/config-icon.png');

// type DashBoardProps = NativeStackScreenProps<StackParamsList, 'Dashboard'>;

const VALUE_1 = Math.random();
const VALUE_2 = Math.random();

const Dashboard = () => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={[styles.text, { flex: 0.75 }]}>
        Consumo estimado neste mês em reais (até hoje)
      </Text>
      <TouchableOpacity onPress={() => null}>
        <Image source={CONFIG_ICON} />
      </TouchableOpacity>
    </View>
    <ProgressBar text="R$ 123,50" progress={VALUE_1} />
    <View style={styles.textContainer}>
      <Text style={[styles.text, { flex: 0.75 }]}>
        Consumo estimado agora em kWh (última hora)
      </Text>
      <TouchableOpacity onPress={() => null}>
        <Image source={CONFIG_ICON} />
      </TouchableOpacity>
    </View>
    <ProgressBar text="5,5 kWh" progress={VALUE_2} />
  </View>
);
export default Dashboard;
