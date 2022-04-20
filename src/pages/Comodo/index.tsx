import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { styles } from './styles';

import ConfigModal from '../../components/ConfigModal';

import type { GerenciamentoStackParamsList } from '../../shared/types';
import { COLORS } from '../../shared/constants';

type ComodoProps = NativeStackScreenProps<
  GerenciamentoStackParamsList,
  'Cômodo'
>;

// const TELEVISION_ICON = require('../../../assets/television.png');
// const AR_ICON = require('../../../assets/ar-condicionado.png');
// const LAMPADA_ICON = require('../../../assets/lampada.png');

const Comodo = ({ navigation, route }: ComodoProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState(1);

  useEffect(() => {
    navigation.setOptions({ title: route.params.title });
    setType(route.params.type);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 30,
          backgroundColor: COLORS.WHITE,
        }}>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[styles.text, { flexShrink: 1 }]}>
              Quanditade de dispositivos conectados no nosso sistema, e
              consumindo energia no momento:
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Entypo name="circle-with-plus" size={20} color={COLORS.GRAY_1} />
            </TouchableOpacity>
          </View>
          <Text style={styles.bigNumber}>{type === 1 ? '3' : '4'}</Text>
        </View>
        {type === 1 ? (
          <View style={[styles.miniContainer]}>
            <Entypo name="tv" size={40} color="black" />
            <View
              style={{
                marginLeft: 15,
                justifyContent: 'center',
                flexShrink: 1,
              }}>
              <Text
                style={{
                  color: COLORS.BLACK,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Televisão
              </Text>
              <Text style={styles.textMiniContainer}>
                <Text style={[styles.mediumNumber, { color: COLORS.BLACK }]}>
                  28%
                </Text>{' '}
                do gasto energético detectado no cômodo
              </Text>
            </View>
          </View>
        ) : null}
        <View style={[styles.miniContainer]}>
          <MaterialCommunityIcons
            name="air-conditioner"
            size={40}
            color={COLORS.BLACK}
          />
          <View
            style={{ marginLeft: 15, justifyContent: 'center', flexShrink: 1 }}>
            <Text
              style={{
                color: COLORS.BLACK,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Ar Condicionado
            </Text>
            <Text style={styles.textMiniContainer}>
              <Text style={[styles.mediumNumber, { color: COLORS.BLACK }]}>
                {type === 1 ? '50%' : '25%'}
              </Text>{' '}
              ^ do gasto energético detectado no cômodo
            </Text>
          </View>
        </View>
        <View style={styles.miniContainer}>
          <Entypo name="light-bulb" size={40} color={COLORS.BLACK} />
          <View
            style={{
              marginLeft: 15,
              flexShrink: 1,
              justifyContent: 'center',
            }}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.BLACK }}>
              Lâmpada 1
            </Text>
            <Text style={styles.textMiniContainer}>
              <Text style={[styles.mediumNumber, { color: COLORS.BLACK }]}>
                {type === 1 ? '22%' : '10%'}
              </Text>{' '}
              do gasto energético detectado no cômodo
            </Text>
          </View>
        </View>
        {type === 2 ? (
          <View style={styles.miniContainer}>
            <FontAwesome name="shower" size={40} color="black" />
            <View
              style={{
                flexShrink: 1,
                justifyContent: 'center',
                marginLeft: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: COLORS.BLACK,
                }}>
                Chuveiro
              </Text>
              <Text style={styles.textMiniContainer}>
                <Text style={[styles.mediumNumber, { color: COLORS.BLACK }]}>
                  60%
                </Text>{' '}
                do gasto energético detectado no cômodo
              </Text>
            </View>
          </View>
        ) : null}
        {type === 2 ? (
          <View style={styles.miniContainer}>
            <MaterialIcons name="computer" size={40} color="black" />
            <View
              style={{
                flexShrink: 1,
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: COLORS.BLACK,
                }}>
                Computador
              </Text>
              <Text style={styles.textMiniContainer}>
                <Text style={[styles.mediumNumber, { color: COLORS.BLACK }]}>
                  5%
                </Text>{' '}
                do gasto energético detectado no cômodo
              </Text>
            </View>
          </View>
        ) : null}
        <ConfigModal
          visible={modalVisible}
          dismiss={() => setModalVisible(false)}
          changeUnit={() => null}
        />
      </ScrollView>
    </View>
  );
};

export default Comodo;
