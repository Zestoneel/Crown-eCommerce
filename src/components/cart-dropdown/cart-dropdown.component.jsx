import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>Your cart is empty.</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
