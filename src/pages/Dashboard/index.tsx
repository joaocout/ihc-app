import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import type { StackParamsList } from '../../shared/types';

type DashBoardProps = NativeStackScreenProps<StackParamsList, 'Dashboard'>;

const Dashboard = ({ navigation }: DashBoardProps) => (
  <View style={styles.container}>
    <Text>Dashboard</Text>
    <Button
      title="Gerenciamento"
      onPress={() => navigation.navigate('Gerenciamento')}
    />
  </View>
);

export default Dashboard;
