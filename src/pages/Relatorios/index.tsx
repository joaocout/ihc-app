import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { styles } from './styles';

import { COLORS } from '../../shared/constants';

const Relatorios = () => (
  <View style={styles.container}>
    <ScrollView style={{ paddingHorizontal: 30 }}>
      <Text style={{ color: COLORS.GRAY_1, marginTop: 20 }}>
        Aqui você encontra alguns Relatórios
        {'\n'} e pode também gerar um personalizado de sua residência.
      </Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: COLORS.GRAY_1,
            textTransform: 'uppercase',
            fontSize: 16,
            textAlign: 'center',
          }}>
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
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: COLORS.GRAY_1,
            textTransform: 'uppercase',
            fontSize: 16,
            textAlign: 'center',
          }}>
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
    </ScrollView>
  </View>
);

export default Relatorios;
