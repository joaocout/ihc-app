import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { styles } from './styles';

import { COLORS } from '../../shared/constants';
import ConfigModal from '../../components/ConfigModal';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Relatorios = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [icon1Selected, seticon1Selected] = useState(false);
  const [icon2Selected, seticon2Selected] = useState(false);
  const [icon3Selected, seticon3Selected] = useState(false);
  const [icon4Selected, seticon4Selected] = useState(false);

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
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.chartTitle}>
              Consumo registrado nos últimos meses
            </Text>
            <TouchableOpacity>
              <Entypo
                style={{ margin: 4 }}
                name="export"
                size={15}
                color="black"
              />
            </TouchableOpacity>
          </View>
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.chartTitle}>
              Consumo registrado nos últimos dias
            </Text>
            <TouchableOpacity>
              <Entypo
                style={{ margin: 4 }}
                name="export"
                size={15}
                color="black"
              />
            </TouchableOpacity>
          </View>
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
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.background}>
          <View style={styles.modalCustom}>
            <Text
              style={[
                styles.descriptionText,
                { alignSelf: 'center', marginTop: 20, marginHorizontal: 10 },
              ]}>
              Selecione os cômodos e as datas desejados
            </Text>
            <View style={styles.boxComodities}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() => seticon1Selected(!icon1Selected)}>
                  <FontAwesome
                    style={[
                      styles.icons,
                      { borderWidth: icon1Selected ? 2 : 0 },
                    ]}
                    name="bed"
                    size={48}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => seticon2Selected(!icon2Selected)}>
                  <MaterialCommunityIcons
                    style={[
                      styles.icons,
                      { borderWidth: icon2Selected ? 2 : 0 },
                    ]}
                    name="silverware-fork-knife"
                    size={48}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() => seticon3Selected(!icon3Selected)}>
                  <FontAwesome
                    style={[
                      styles.icons,
                      { borderWidth: icon3Selected ? 2 : 0 },
                    ]}
                    name="bath"
                    size={48}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => seticon4Selected(!icon4Selected)}>
                  <FontAwesome
                    style={[
                      styles.icons,
                      { borderWidth: icon4Selected ? 2 : 0 },
                    ]}
                    name="television"
                    size={48}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Data de início"
              placeholderTextColor={COLORS.GRAY_2}
            />
            <TextInput
              style={styles.input}
              placeholder="Data final"
              placeholderTextColor={COLORS.GRAY_2}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.button}>
              <Text style={styles.buttonText}>Gerar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Relatorios;
