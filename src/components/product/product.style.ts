import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 2.5,
    width: Dimensions.get('window').width / 2.5,
    margin: 10,
  },
  productImage: {
    flex: 1,
  },
  subContainer: {
    padding: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: 'gray',
  },
  inStock: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
