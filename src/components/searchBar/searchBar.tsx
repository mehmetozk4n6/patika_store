import {TextInput} from 'react-native';
import React from 'react';
import {styles} from './searchBar.style';

type Props = {
  text: string;
  onChangeText: (value: string) => void;
};

const SearchBar = ({text, onChangeText}: Props) => {
  return (
    <TextInput
      placeholder="Ara ..."
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    />
  );
};

export default SearchBar;
