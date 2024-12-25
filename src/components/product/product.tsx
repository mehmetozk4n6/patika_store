/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './product.style';

export type ProductProps = {
  title: string;
  imgURL: string;
  price: string;
  inStock: boolean;
};

const Product = ({title, imgURL, price, inStock}: ProductProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imgURL}} style={styles.productImage} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        {!inStock && <Text style={styles.inStock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default Product;
