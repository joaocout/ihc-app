import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "./Dashboard";
import Gerenciamento from "./Gerenciamento";
import Relatorios from "./Relatorios";
import Login from "./Login";

import type {
  DashboardStackParamsList,
  TabParamsList,
  GerenciamentoStackParamsList,
  RelatoriosStackParamsList,
  InitialStackParamsList,
} from "../shared/types";

const DashboardStack = createNativeStackNavigator<DashboardStackParamsList>();
const DashboardRoute = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen name="Dashboard" component={Dashboard} />
  </DashboardStack.Navigator>
);

const GereciamentoStack =
  createNativeStackNavigator<GerenciamentoStackParamsList>();
const GerenciamentoRoute = () => (
  <GereciamentoStack.Navigator>
    <GereciamentoStack.Screen name="Gerenciamento" component={Gerenciamento} />
  </GereciamentoStack.Navigator>
);

const RelatoriosStack = createNativeStackNavigator<RelatoriosStackParamsList>();
const RelatoriosRoute = () => (
  <RelatoriosStack.Navigator>
    <RelatoriosStack.Screen name="Relatórios" component={Relatorios} />
  </RelatoriosStack.Navigator>
);

const Tab = createBottomTabNavigator<TabParamsList>();
const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="DashboardRoute" component={DashboardRoute} />
    <Tab.Screen name="GerenciamentoRoute" component={GerenciamentoRoute} />
    <Tab.Screen name="RelatóriosRoute" component={RelatoriosRoute} />
  </Tab.Navigator>
);

const InitialStack = createNativeStackNavigator<InitialStackParamsList>();

const InitialRoute = () => (
  <InitialStack.Navigator screenOptions={{ headerShown: false }}>
    <InitialStack.Screen name="Login" component={Login} />
    <InitialStack.Screen name="TabNavigator" component={TabNavigator} />
  </InitialStack.Navigator>
);

const Entry = () => (
  <NavigationContainer>
    <InitialRoute />
  </NavigationContainer>
);

export default Entry;
