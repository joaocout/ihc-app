import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 40,
  },

  textContainer: {
    marginVertical: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },

  text: {
    color: COLORS.GRAY_1,
  },
});
