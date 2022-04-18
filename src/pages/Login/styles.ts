import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 50,
    alignItems: 'center'
  },

  text: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    marginBottom: 50,
    color: COLORS.GRAY_1
  },

  button: {
      backgroundColor: COLORS.BLUE,
      borderRadius: 15,
      marginBottom: 50,
      width: 205,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },

    textButton: {color: COLORS.WHITE, fontWeight: 'bold'},

    input: {
        borderColor: COLORS.BLUE,
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 25,
        width: 320,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
      },

      textExtra:{color: COLORS.BLUE}
});
