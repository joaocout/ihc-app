import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },

  text: {
    color: COLORS.GRAY_1,
  },

  bigNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 15,
    // borderBottomWidth: 5,
    // includeFontPadding: false,
  },

  underLine: {
    fontSize: 80,
    fontWeight: 'bold',
    alignSelf: 'center',
    lineHeight: 10,
  },

  textExtra: {
    color: COLORS.BLUE,
    textAlign: 'center',
  },

  mediumNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  textMiniContainer: {
    color: COLORS.GRAY_1,
  },

  miniContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: COLORS.GRAY_3,
    padding: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
});
