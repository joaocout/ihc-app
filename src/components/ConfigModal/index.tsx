import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
} from 'react-native';
import { COLORS } from '../../shared/constants';

import { styles } from './styles';

type ConfigModalProps = {
  visible: boolean;
  dismiss: () => void;
  changeUnit: () => void;
};

const radioButtonText = [
  'kWh (energia gasta)',
  'R$ (gasto em dinheiro)',
  'kg de CO2 (emissão de gás carbônico)',
];

const ConfigModal = ({ visible, dismiss, changeUnit }: ConfigModalProps) => {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.background}>
          <TouchableWithoutFeedback onPress={() => null}>
            <View style={styles.container}>
              <Text style={styles.title}>
                PERSONALIZAR EXIBIÇÃO DO CONSUMO MENSAL
              </Text>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Unidade de medida</Text>
                {radioButtonText.map((item, index) => (
                  <View key={item} style={styles.radioButtonContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedButton(index);
                        changeUnit(index);
                      }}>
                      <View
                        style={[
                          styles.radioButtonIcon,
                          {
                            borderWidth: selectedButton === index ? 0 : 1,
                            backgroundColor:
                              selectedButton === index
                                ? COLORS.BLUE
                                : undefined,
                          },
                        ]}
                      />
                    </TouchableOpacity>
                    <Text style={styles.radioButtonText}>{item}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Limite</Text>
                <Text style={[styles.smallText, { marginVertical: 12 }]}>
                  Defina aqui um limite mensal de gasto energético. Te
                  notificaremos quando esse limite for atingido.
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="00,00"
                    placeholderTextColor={COLORS.GRAY_2}
                    keyboardType="number-pad"
                  />
                  <Text style={styles.afterInputText}>reais</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={dismiss}>
                <Text style={styles.buttonText}>Pronto</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ConfigModal;
