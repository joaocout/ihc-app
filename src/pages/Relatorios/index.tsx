import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { styles } from './styles';

import { COLORS } from '../../shared/constants';
import ConfigModal from '../../components/ConfigModal';

const Relatorios = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.descriptionText}>
          Aqui você encontra alguns relatórios e pode também gerar novos
          relatórios personalizados, caso deseje.
        </Text>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>
            Consumo registrado nos últimos meses
          </Text>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 60} // from react-native
            height={220}
            chartConfig={{
              propsForLabels: {
                fontWeight: 'bold',
              },
              propsForDots: { stroke: COLORS.BLUE },
              backgroundColor: '#1cc910',
              backgroundGradientFrom: COLORS.GRAY_3,
              backgroundGradientTo: COLORS.GRAY_3,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: () => COLORS.BLUE,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              margin: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>
            Consumo registrado nos últimos dias
          </Text>
          <LineChart
            data={{
              labels: ['8/4', '9/4', '10/4', '11/4', '12/4'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 60} // from react-native
            height={220}
            chartConfig={{
              propsForLabels: {
                fontWeight: 'bold',
              },
              propsForDots: { stroke: COLORS.BLUE },
              backgroundColor: '#1cc910',
              backgroundGradientFrom: COLORS.GRAY_3,
              backgroundGradientTo: COLORS.GRAY_3,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: () => COLORS.BLUE,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              margin: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.button}>
          <Text style={styles.buttonText}>Gerar novos relatórios</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <Text style={{ textAlign: 'center', color: COLORS.BLUE }}>
            Estimativas incorretas?
            {'\n'}
            Reporte o problema clicando aqui, um dos nossos técnicos te ajudará
            a resolver :)
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <ConfigModal
        visible={modalVisible}
        dismiss={() => setModalVisible(false)}
        changeUnit={() => null}
      />
    </View>
  );
};

export default Relatorios;
