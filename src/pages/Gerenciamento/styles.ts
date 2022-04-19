import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  text: {
    textAlign: 'center',
    color: COLORS.GRAY_1,
    marginVertical: 50,
  },

  textBottom: {
    textAlign: 'center',
    color: COLORS.BLUE,
  },

  bigNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    alignSelf: 'center',
    borderBottomWidth: 5,
    includeFontPadding: false,
  },

  underLine: {
    fontSize: 80,
    fontWeight: 'bold',
    alignSelf: 'center',
    lineHeight: 10,
  },

  textExtra: { color: COLORS.BLUE, textAlign: 'center' },

  mediumNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },

  textMiniContainer: {
    paddingVertical: 25,
    textAlign: 'center',
    color: COLORS.GRAY_1,
  },

  miniContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    marginHorizontal: 40,
  },

  button: {
    backgroundColor: COLORS.BLUE,
    borderRadius: 15,
    marginBottom: 30,
    minWidth: 340,
    minHeight: 100,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textButton: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
