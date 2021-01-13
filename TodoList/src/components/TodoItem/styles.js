import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  padding: 5px;
  borderBottomWidth: 1px;
  paddingTop: 10px;
`;

export const Name = styled.Text`
  padding: 5px;
  flex: 2;
`;

export const IconButton = styled(Icon.Button)`
  background: white;
`;
