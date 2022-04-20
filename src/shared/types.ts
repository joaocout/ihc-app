import { int32ARGBColor } from 'react-native-svg';

export type TabParamsList = {
  DashboardRoute: undefined;
  GerenciamentoRoute: undefined;
  RelatóriosRoute: undefined;
};

export type DashboardStackParamsList = {
  Dashboard: undefined;
};

export type GerenciamentoStackParamsList = {
  Gerenciamento: undefined;
  Cômodo: {
    title: string;
    type: number;
  };
};

export type RelatoriosStackParamsList = {
  Relatórios: undefined;
};

export type InitialStackParamsList = {
  Login: undefined;
  TabNavigator: undefined;
};
