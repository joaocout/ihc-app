import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 50,
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  text: {
    textAlign: 'center',
    marginBottom: 50,
    color: COLORS.GRAY_1,
  },

  button: {
    backgroundColor: COLORS.BLUE,
    borderRadius: 15,
    marginBottom: 50,
    minWidth: 205,
    minHeight: 45,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },

  input: {
    alignSelf: 'stretch',
    borderColor: COLORS.BLUE,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 25,
    minHeight: 45,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
  },

  textExtra: { color: COLORS.BLUE, textAlign: 'center' },
});
