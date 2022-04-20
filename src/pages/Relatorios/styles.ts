import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },

  scrollContainer: {
    paddingHorizontal: 30,
  },

  contentContainer: {
    paddingVertical: 20,
  },

  descriptionText: {
    color: COLORS.GRAY_1,
  },

  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  chartTitle: {
    fontWeight: 'bold',
    color: COLORS.GRAY_1,
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    alignSelf: 'center',
    backgroundColor: COLORS.BLUE,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginVertical: 30,
  },

  buttonText: {
    color: COLORS.WHITE,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  supportText: {
    textAlign: 'center',
    color: COLORS.BLUE,
  },
});
