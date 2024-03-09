import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addCardItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found increment the quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find if product exist
  if (productToRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  } // if found decrement the quantity
  else {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const removeProduct = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCardItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearProductFromCart = (cartItems, productToClear) => {
  const newCartItems = removeProduct(cartItems, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
