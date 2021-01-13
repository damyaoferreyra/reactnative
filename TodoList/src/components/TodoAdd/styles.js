import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
`;

export const SearchField = styled.TextInput`
  borderBottomColor: black;
  borderBottomWidth: 1px;
  flex: 1;
`;

export const IconButton = styled(Icon)`
  padding: 5px;
`;
