// centraliza todos os reducers disponiveis na aplicacao
import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
  cart,
});
