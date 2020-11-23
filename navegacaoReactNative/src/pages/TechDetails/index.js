import React from 'react';
import { useRoute } from '@react-navigation/native';
// import { Container, Title } from './styles';
import { WebView } from 'react-native-webview';

export default function TechDetails() {
  const route = useRoute();
  const { tech } = route.params;

  return (
    // <Container>
    //  <Title> {tech.id} </Title>
    // </Container>
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://www.google.com/search?q=${tech.id}` }}
    />
  );
}
