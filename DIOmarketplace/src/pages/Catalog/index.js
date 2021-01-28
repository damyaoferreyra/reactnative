import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import FloatingCart from '../../components/FloatingCart';
import * as CartActions from '../../store/modules/cart/actions';

import FeatherIcon from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';

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
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');
      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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
                <ProductButton
                  onPress={() => {
                    handleAddToCart(item.id);
                  }}
                >
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
