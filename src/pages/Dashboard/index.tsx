import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import type { StackParamsList } from '../../shared/types';
import { COLORS } from '../../shared/constants';

const CONFIG_ICON = require('../../../assets/config-icon.png');

type DashBoardProps = NativeStackScreenProps<StackParamsList, 'Dashboard'>;

const ProgressBar: React.FC<{ text: string; progress: number }> = ({
  text,
  progress,
}) => (
  <View
    style={{
      minHeight: 54,
      backgroundColor: COLORS.GRAY_3,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    }}>
    <View
      style={{
        minHeight: 54,
        backgroundColor: COLORS.BLUE,
        position: 'absolute',
        width: `${progress * 100}%`,
        left: 0,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}
    />
    <Text style={{ color: 'white', fontWeight: 'bold' }}>{text}</Text>
  </View>
);

const Dashboard = ({ navigation }: DashBoardProps) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={[styles.text, { flex: 0.75 }]}>
        Consumo estimado neste mês em reais (até hoje)
      </Text>
      <TouchableOpacity onPress={() => null}>
        <Image source={CONFIG_ICON} />
      </TouchableOpacity>
    </View>
    <ProgressBar text="R$ 123,50" progress={0.67} />
    <View style={styles.textContainer}>
      <Text style={[styles.text, { flex: 0.75 }]}>
        Consumo estimado neste mês em reais (até hoje)
      </Text>
      <TouchableOpacity onPress={() => null}>
        <Image source={CONFIG_ICON} />
      </TouchableOpacity>
    </View>
    <ProgressBar text="R$ 123,50" progress={0.67} />
    <Text onPress={() => navigation.navigate('Login')}>Login</Text>
  </View>
);

export default Dashboard;
