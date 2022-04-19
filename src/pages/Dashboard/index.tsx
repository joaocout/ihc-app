import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import ProgressBar from "../../components/ProgressBar";
import ConfigModal from "../../components/ConfigModal";
import { DashboardStackParamsList } from "../../shared/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const CONFIG_ICON = require("../../../assets/config-icon.png");

const VALUE_1 = Math.random();
const VALUE_2 = Math.random();

type DashboardProps = NativeStackScreenProps<
  DashboardStackParamsList,
  "Dashboard"
>;

const Dashboard = ({ navigation }: DashboardProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { flex: 0.75 }]}>
          Consumo estimado neste mês em reais (até hoje)
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={CONFIG_ICON} />
        </TouchableOpacity>
      </View>
      <ProgressBar text="R$ 123,50" progress={VALUE_1} />
      <View style={styles.textContainer}>
        <Text style={[styles.text, { flex: 0.75 }]}>
          Consumo estimado agora em kWh (última hora)
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={CONFIG_ICON} />
        </TouchableOpacity>
      </View>
      <ProgressBar text="5,5 kWh" progress={VALUE_2} />
      <TouchableOpacity onPress={() => null}>
        <Text style={styles.linkText}>
          Estimativas incorretas?
          {"\n"}
          Reporte o problema clicando aqui, um dos nossos técnicos te ajudará a
          resolver :)
        </Text>
      </TouchableOpacity>
      <ConfigModal
        visible={modalVisible}
        dismiss={() => setModalVisible(false)}
      />
    </View>
  );
};

export default Dashboard;
