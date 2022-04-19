import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, AntDesign, Entypo } from '@expo/vector-icons';

import { COLORS } from '../shared/constants';

import Dashboard from './Dashboard';
import Gerenciamento from './Gerenciamento';
import Relatorios from './Relatorios';
import Login from './Login';
import Comodo from './Comodo';

import type {
  DashboardStackParamsList,
  TabParamsList,
  GerenciamentoStackParamsList,
  RelatoriosStackParamsList,
  InitialStackParamsList,
} from '../shared/types';

const HeaderTitle = ({ title }: { title: string }) => (
  <Text
    style={{ textTransform: 'uppercase', fontSize: 28, fontWeight: 'bold' }}>
    {title}
  </Text>
);

const DashboardStack = createNativeStackNavigator<DashboardStackParamsList>();
const DashboardRoute = () => (
  <DashboardStack.Navigator
    screenOptions={{
      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle: ({ children }) => <HeaderTitle title={children} />,
    }}>
    <DashboardStack.Screen name="Dashboard" component={Dashboard} />
  </DashboardStack.Navigator>
);

const GereciamentoStack =
  createNativeStackNavigator<GerenciamentoStackParamsList>();
const GerenciamentoRoute = () => (
  <GereciamentoStack.Navigator
    screenOptions={{
      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle: ({ children }) => <HeaderTitle title={children} />,
    }}>
    <GereciamentoStack.Screen name="Gerenciamento" component={Gerenciamento} />
    <GereciamentoStack.Screen name="Cômodo" component={Comodo} />
  </GereciamentoStack.Navigator>
);

const RelatoriosStack = createNativeStackNavigator<RelatoriosStackParamsList>();
const RelatoriosRoute = () => (
  <RelatoriosStack.Navigator
    screenOptions={{
      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle: ({ children }) => <HeaderTitle title={children} />,
    }}>
    <RelatoriosStack.Screen name="Relatórios" component={Relatorios} />
  </RelatoriosStack.Navigator>
);

const Tab = createBottomTabNavigator<TabParamsList>();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        elevation: 0,
        paddingHorizontal: 30,
        borderTopWidth: 0,
      },
      tabBarLabelStyle: { textTransform: 'uppercase', fontWeight: 'bold' },
      tabBarActiveTintColor: COLORS.BLUE,
      headerShown: false,
      headerTintColor: COLORS.BLUE,
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({ focused }) => {
        const ICON_COLOR = focused ? COLORS.BLUE : COLORS.GRAY_2;
        if (route.name === 'DashboardRoute') {
          return <Foundation name="home" size={20} color={ICON_COLOR} />;
        }
        if (route.name === 'GerenciamentoRoute') {
          return <Entypo name="menu" size={20} color={ICON_COLOR} />;
        }
        return <AntDesign name="barschart" size={20} color={ICON_COLOR} />;
      },
    })}>
    <Tab.Screen
      options={{ title: 'Dashboard' }}
      name="DashboardRoute"
      component={DashboardRoute}
    />
    <Tab.Screen
      options={{ title: 'Gerenciamento' }}
      name="GerenciamentoRoute"
      component={GerenciamentoRoute}
    />
    <Tab.Screen
      options={{ title: 'Relatórios' }}
      name="RelatóriosRoute"
      component={RelatoriosRoute}
    />
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
