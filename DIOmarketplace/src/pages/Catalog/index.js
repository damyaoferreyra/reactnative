import React, { useState } from 'react';
import { View } from 'react-native';
import FloatingCart from '../../components/FloatingCart';

import FeatherIcon from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';

import {
  Container,
  PriceContainer,
  ProductImage,
  ProductContainer,
  ProductList,
  Product,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from './styles';

export default function App() {
  const [products, setProducts] = useState([
    {
      id: '1',
      title: 'Assinatura trimestral',
      image_url:
        'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
      price: 150,
    },
  ]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton onPress={() => {}}>
                  <ProductButtonText>Adicionar</ProductButtonText>
                  <FeatherIcon size={30} name="plus-circle" color="#d1d7d9" />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
}
