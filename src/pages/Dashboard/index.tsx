import React, { useState, useEffect } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { View, Text } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { useNavigation } from '@react-navigation/native';
import formatValue from '../../utils/formatValue';
import { useCart } from '../../hooks/cart';
import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

export interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const Dashboard: React.FC = () => {
  const { addToCart } = useCart();
  const navigation = useNavigation();

  const [products, setProducts] = useState<Product[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');
      const produtos = response.data;
      setProducts(produtos);
    }
    loadProducts();
    setTimeout(() => {
      setIsVisible(true);
    }, 3500);
  }, []);

  function handleAddToCart(item: Product): void {
    addToCart(item);
  }

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ShimmerPlaceHolder
                autoRun
                style={{ height: 122, width: 122, alignItems: 'center' }}
                visible={isVisible}
              >
                <ProductImage source={{ uri: item.image_url }} />
              </ShimmerPlaceHolder>
              <ShimmerPlaceHolder
                autoRun
                style={{ height: 20, width: 80, marginTop: 10 }}
                visible={isVisible}
              >
                <ProductTitle
                  style={{ fontWeight: 'bold', alignItems: 'center' }}
                >
                  {item.title}
                </ProductTitle>
              </ShimmerPlaceHolder>
              <PriceContainer>
                <ShimmerPlaceHolder
                  autoRun
                  style={{ height: 15, width: 60 }}
                  visible={isVisible}
                >
                  <ProductPrice>{formatValue(item.price)}</ProductPrice>
                </ShimmerPlaceHolder>

                <ShimmerPlaceHolder
                  autoRun
                  style={{ height: 15, width: 15 }}
                  visible={isVisible}
                >
                  <ProductButton
                    testID={`add-to-cart-${item.id}`}
                    onPress={() => handleAddToCart(item)}
                  >
                    <FeatherIcon size={20} name="plus" color="#757575" />
                  </ProductButton>
                </ShimmerPlaceHolder>
              </PriceContainer>
              <ShimmerPlaceHolder
                autoRun
                style={{
                  height: 15,
                  width: 90,
                  alignItems: 'center',
                  marginTop: 12,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                visible={isVisible}
              >
                <ProductButton
                  style={{ marginTop: 10, alignItems: 'center' }}
                  onPress={
                    () =>
                      navigation.navigate('Info', {
                        products: item,
                      })
                    // eslint-disable-next-line react/jsx-curly-newline
                  }
                >
                  <Text>Mais Informacoes</Text>
                </ProductButton>
              </ShimmerPlaceHolder>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
