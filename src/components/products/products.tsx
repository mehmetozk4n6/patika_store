/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList} from 'react-native';
import {styles} from './products.style';
import {products} from '../../data/products';
import Product from '../product';

type Props = {
  text: string;
};

const Products = ({text}: Props) => {
  return (
    <FlatList
      data={products.filter(product => product.title.includes(text))}
      renderItem={item => {
        const product = item.item;
        return <Product {...product} />;
      }}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

export default Products;
