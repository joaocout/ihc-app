import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, Image, View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

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

const Comodo = ({ navigation, route }: ComodoProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState(1);

  useEffect(() => {
    navigation.setOptions({ title: route.params.title });
    setType(route.params.type);
  }, []);

  return (
    <ScrollView>
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
        {type === 1 ? (
          <View style={styles.miniContainer}>
            <Image source={TELEVISION_ICON} />
            <Text style={styles.mediumNumber}>28%</Text>
            <Text style={styles.textMiniContainer}>de energia do cômodo</Text>
          </View>
        ) : null}
        <View style={styles.miniContainer}>
          <Image source={AR_ICON} />
          <Text style={styles.mediumNumber}>{type === 1 ? '50%' : '25%'}</Text>
          <Text style={styles.textMiniContainer}>de energia do cômodo</Text>
        </View>
        <View style={styles.miniContainer}>
          <Image source={LAMPADA_ICON} />
          <Text style={styles.mediumNumber}>{type === 1 ? '22%' : '10%'}</Text>
          <Text style={styles.textMiniContainer}>de energia do cômodo</Text>
        </View>
        {type === 2 ? (
          <View style={styles.miniContainer}>
            <FontAwesome name="shower" size={50} color="black" />
            <Text style={styles.mediumNumber}>60%</Text>
            <Text style={styles.textMiniContainer}>de energia do cômodo</Text>
          </View>
        ) : null}
        {type === 2 ? (
          <View style={styles.miniContainer}>
            <MaterialIcons name="computer" size={70} color="black" />
            <Text style={styles.mediumNumber}>5%</Text>
            <Text style={styles.textMiniContainer}>de energia do cômodo</Text>
          </View>
        ) : null}
        <ConfigModal
          visible={modalVisible}
          dismiss={() => setModalVisible(false)}
          changeUnit={() => null}
        />
      </View>
    </ScrollView>
  );
};

export default Comodo;
