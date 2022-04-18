import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    minHeight: 54,
    backgroundColor: COLORS.GRAY_3,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  innerContainer: {
    minHeight: 54,
    backgroundColor: COLORS.BLUE,
    position: 'absolute',
    left: 0,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  text: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});
