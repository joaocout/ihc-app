import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000A0',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    padding: 30,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  sectionContainer: {
    marginTop: 30,
  },

  sectionTitle: {
    color: COLORS.GRAY_1,
    fontWeight: '500',
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  radioButtonIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: COLORS.GRAY_2,
    marginRight: 30,
  },

  radioButtonText: {
    flexShrink: 1,
    fontSize: 12,
    color: COLORS.GRAY_1,
  },

  smallText: {
    fontSize: 12,
    color: COLORS.GRAY_1,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    borderColor: COLORS.BLUE,
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    flex: 0.75,
    textAlign: 'center',
  },

  afterInputText: {
    color: COLORS.GRAY_1,
    fontSize: 12,
    flexShrink: 1,
    marginLeft: 10,
  },

  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE,
    borderRadius: 10,
    minWidth: 205,
    paddingVertical: 12,
    paddingHorizontal: 45,
  },

  buttonText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});
