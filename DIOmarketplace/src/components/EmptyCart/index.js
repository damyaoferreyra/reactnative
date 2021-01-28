import React from 'react';
// import FeatherIcon from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';
import { Container, EmptyCartContainer, EmptyCartText } from './styles';
import emptyCartAnimation from '../../../EmptyCartAnimations.json';

export default function EmptyCart() {
  return (
    <Container>
      <EmptyCartContainer>
        <LottieView
          source={emptyCartAnimation}
          resizeMode="contain"
          autoPlay
          loop
        />
      </EmptyCartContainer>
      {/* <FeatherIcon name="slash" size={30} color="#f3f9" /> */}
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </Container>
  );
}
