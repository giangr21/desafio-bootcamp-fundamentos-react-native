/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line react/jsx-one-expression-per-line
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import {
  InfoContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from './styles';
import formatValue from '../../utils/formatValue';

const Info: React.FC = () => {
  const route = useRoute();
  const { products } = route.params;
  return (
    <InfoContainer>
      <ProductTitle style={{marginTop: 5}}>{products.title}</ProductTitle>
      <ProductImage source={{ uri: products.image_url }} />
      <ProductDescription>{products.description}</ProductDescription>
      <View>
        <ProductPrice>
          <Text>Preço:</Text>
          {'   '}
          {formatValue(products.price)}
        </ProductPrice>
      </View>
    </InfoContainer>
  );
};

export default Info;
