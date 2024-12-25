/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SearchBar from './src/components/searchBar';
import Products from './src/components/products';

function App(): React.JSX.Element {
  const [text, setText] = useState('');

  const onChangeText = (value: string) => {
    setText(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <SearchBar text={text} onChangeText={onChangeText} />
      <Products text={text} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: 'purple',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
