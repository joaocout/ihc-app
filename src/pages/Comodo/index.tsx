import React, { useState } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import ConfigModal from '../../components/ConfigModal';

import type { GerenciamentoStackParamsList } from '../../shared/types';

type ComodoProps = NativeStackScreenProps<
  GerenciamentoStackParamsList,
  'Cômodo'
>;

const TELEVISION_ICON = require('../../../assets/television.png');
const AR_ICON = require('../../../assets/ar-condicionado.png');
const LAMPADA_ICON = require('../../../assets/lampada.png');

const Comodo = ({ navigation }: ComodoProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.mediumNumber}>+</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Quanditade de dispositivos consumindo energia no momento:
        </Text>
        <Text style={styles.bigNumber}>3</Text>
      </View>
      <View style={styles.miniContainer}>
        <Image source={TELEVISION_ICON} />
        <Text style={styles.mediumNumber}>28%</Text>
        <Text style={styles.textMiniContainer}>de energia do cômodo</Text>
      </View>
      <View style={styles.miniContainer}>
        <Image source={AR_ICON} />
        <Text style={styles.mediumNumber}>50%</Text>
        <Text style={styles.textMiniContainer}>de energia do cômodo</Text>
      </View>
      <View style={styles.miniContainer}>
        <Image source={LAMPADA_ICON} />
        <Text style={styles.mediumNumber}>22%</Text>
        <Text style={styles.textMiniContainer}>de energia do cômodo</Text>
      </View>
      <ConfigModal
        visible={modalVisible}
        dismiss={() => setModalVisible(false)}
        changeUnit={() => null}
      />
    </View>
  );
};

export default Comodo;
