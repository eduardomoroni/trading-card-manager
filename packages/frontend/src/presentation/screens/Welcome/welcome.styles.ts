import { StyleSheet } from 'react-native';
import { Metrics } from '../../constants';

export const WelcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECE9DE',
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: Metrics.screenWidth - 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
