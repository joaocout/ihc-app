import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";

import ProgressBar from "../../components/ProgressBar";
import ConfigModal from "../../components/ConfigModal";
import { COLORS } from "../../shared/constants";

const VALUE_1 = Math.random();
const VALUE_2 = Math.random();

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { flex: 0.75 }]}>
          Consumo estimado neste mês em reais (até hoje)
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Entypo name="cog" size={20} color={COLORS.GRAY_1} />
        </TouchableOpacity>
      </View>
      <ProgressBar text="R$ 123,50" progress={VALUE_1} />
      <View style={styles.textContainer}>
        <Text style={[styles.text, { flex: 0.75 }]}>
          Consumo estimado agora em kWh (última hora)
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Entypo name="cog" size={20} color={COLORS.GRAY_1} />
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
