import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { styles } from './styles';

import type { GerenciamentoStackParamsList } from '../../shared/types';
import { COLORS } from '../../shared/constants';

type DeviceType = 'tv' | 'ac' | 'light' | 'other' | 'shower' | 'pc';

type Device = {
  title: string;
  energy: number;
  active: boolean;
  type: DeviceType;
};
const initialState: Array<Device> = [
  { title: 'Televisão', energy: 0.28, active: true, type: 'tv' },
  { title: 'Ar Condicionado', energy: 0.5, active: true, type: 'ac' },
  { title: 'Lâmpada 1', energy: 0.5, active: true, type: 'light' },
];

const initialState2: Array<Device> = [
  { title: 'Ar Condicionado', energy: 0.25, active: true, type: 'ac' },
  { title: 'Lâmpada 1', energy: 0.1, active: true, type: 'light' },
  { title: 'Chuveiro', energy: 0.6, active: true, type: 'shower' },
  { title: 'Computador', energy: 0.05, active: true, type: 'pc' },
];

const icon = {
  tv: () => <Entypo name="tv" size={40} color="black" />,
  ac: () => (
    <MaterialCommunityIcons
      name="air-conditioner"
      size={40}
      color={COLORS.BLACK}
    />
  ),
  light: () => <Entypo name="light-bulb" size={40} color={COLORS.BLACK} />,
  shower: () => <FontAwesome name="shower" size={40} color="black" />,
  other: () => <View />,
  pc: () => <MaterialIcons name="computer" size={40} color="black" />,
};

type ComodoProps = NativeStackScreenProps<
  GerenciamentoStackParamsList,
  'Cômodo'
>;

// const TELEVISION_ICON = require('../../../assets/television.png');
// const AR_ICON = require('../../../assets/ar-condicionado.png');
// const LAMPADA_ICON = require('../../../assets/lampada.png');

const Comodo = ({ navigation, route }: ComodoProps) => {
  const { type } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [devices, setDevices] = useState(
    type === 1 ? initialState : initialState2,
  );

  const TOTAL_ENERGY = devices.reduce((acc, curr) => {
    if (curr.active) {
      return acc + curr.energy;
    }
    return acc;
  }, 0);

  useEffect(() => {
    navigation.setOptions({ title: route.params.title });
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
            <Text style={[styles.text, { flexShrink: 1, marginRight: 15 }]}>
              Caso deseje, toque no ícone ao lado para adicionar novos aparelhos
              a este cômodo.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Entypo name="circle-with-plus" size={30} color={COLORS.BLUE} />
            </TouchableOpacity>
          </View>
          <Text style={styles.bigNumber}>
            {devices.reduce((acc, curr) => {
              if (curr.active) {
                return acc + 1;
              }
              return acc;
            }, 0)}
          </Text>
          <Text style={[styles.text, { textAlign: 'center', marginTop: -15 }]}>
            aparelhos ativados no momento. {'\n'}
          </Text>
          <Text
            style={[styles.text, { marginBottom: 15, textAlign: 'center' }]}>
            Toque nos aparelhos para ativá-los ou desativá-los:
          </Text>
        </View>
        {devices.map((item) => (
          <TouchableOpacity
            key={item.title}
            onPress={() => {
              const newDeviceList = devices.map((device) => {
                if (device === item) {
                  return { ...device, active: !device.active };
                }
                return device;
              });
              setDevices(newDeviceList);
            }}>
            <View
              style={[
                styles.miniContainer,
                !item.active
                  ? {
                      backgroundColor: COLORS.WHITE,
                      borderWidth: 1,
                      borderColor: COLORS.GRAY_2,
                    }
                  : {},
              ]}>
              {icon[item.type]()}
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
                  {item.title}
                </Text>
                {item.active ? (
                  <Text style={styles.textMiniContainer}>
                    <Text
                      style={[styles.mediumNumber, { color: COLORS.BLACK }]}>
                      {((item.energy / TOTAL_ENERGY) * 100).toFixed(1)}%
                    </Text>{' '}
                    do gasto energético detectado no cômodo
                  </Text>
                ) : (
                  <Text style={styles.textMiniContainer}>
                    Aparelho desativado
                  </Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <AddDeviceModal
        visible={modalVisible}
        dismiss={() => setModalVisible(false)}
        addDevice={(device) => setDevices([...devices, device])}
      />
    </View>
  );
};

type AddDeviceModalProps = {
  dismiss: () => void;
  visible: boolean;
  addDevice: (device: Device) => void;
};

const AddDeviceModal = ({
  dismiss,
  visible,
  addDevice,
}: AddDeviceModalProps) => {
  const radioButtonTypes: Array<DeviceType> = [
    'ac',
    'light',
    'other',
    'pc',
    'shower',
    'tv',
  ];

  const radioButtonText = {
    ac: 'Ar condicionado',
    light: 'Lâmpada',
    other: 'Outros',
    pc: 'Computador',
    shower: 'Chuveiro',
    tv: 'Televisão',
  };

  const [selectedType, setSelectedType] = useState<DeviceType>('ac');
  const [newDeviceName, setNewDeviceName] = useState('');

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={dismiss}>
        <View
          style={{
            backgroundColor: '#000000A0',
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 30,
          }}>
          <TouchableWithoutFeedback onPress={() => null}>
            <View
              style={{
                backgroundColor: COLORS.WHITE,
                borderRadius: 15,
                padding: 30,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}>
                Adicionar novos aparelhos
              </Text>
              <Text
                style={{
                  color: COLORS.GRAY_1,
                  fontWeight: '500',
                  marginTop: 30,
                }}>
                Selecione um tipo para o seu novo aparelho:
              </Text>
              {radioButtonTypes.map((item) => (
                <View
                  key={item}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 12,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedType(item);
                    }}>
                    <View
                      style={[
                        {
                          height: 20,
                          width: 20,
                          borderRadius: 10,
                          borderColor: COLORS.GRAY_2,
                          marginRight: 30,
                        },
                        {
                          borderWidth: selectedType === item ? 0 : 1,
                          backgroundColor:
                            selectedType === item ? COLORS.BLUE : undefined,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      flexShrink: 1,
                      fontSize: 12,
                      color: COLORS.GRAY_1,
                    }}>
                    {radioButtonText[item]}
                  </Text>
                </View>
              ))}
              <Text
                style={{
                  color: COLORS.GRAY_1,
                  fontWeight: '500',
                  marginTop: 30,
                  marginBottom: 12,
                }}>
                Atribua um nome ao seu novo aparelho:
              </Text>
              <TextInput
                style={{
                  borderColor: COLORS.BLUE,
                  borderWidth: 2,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  borderRadius: 10,
                }}
                onChangeText={(text) => setNewDeviceName(text)}
                placeholder="Aparelho..."
                placeholderTextColor={COLORS.GRAY_2}
              />
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.BLUE,
                  borderRadius: 10,
                  minWidth: 205,
                  paddingVertical: 12,
                  paddingHorizontal: 45,
                  marginTop: 30,
                }}
                onPress={() => {
                  addDevice({
                    title: newDeviceName,
                    energy: Math.min(Math.random(), 0.5),
                    active: true,
                    type: selectedType,
                  });
                  dismiss();
                }}>
                <Text
                  style={{
                    color: COLORS.WHITE,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}>
                  Adicionar
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Comodo;
