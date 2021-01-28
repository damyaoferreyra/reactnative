// interceptador do redux do carrinho
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import formatValue from '../../../utils/formatValue';
import { addToCartSucess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  // verificar se o produto já está na lista
  const productExists = yield select((state) =>
    state.cart.find((product) => product.id === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (productExists) {
    // disparar actions para atualizar a quantidade no carrinho
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatValue(response.data.price),
    };

    yield put(addToCartSucess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
