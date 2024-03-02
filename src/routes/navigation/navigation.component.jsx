import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react';
import './navigation.styles.scss'

import CartIcon from '../../components/cart-icon/cart-icon.components';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import CrwnLogo from '../../assets/crown.svg?react'
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../context/cart.context';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    {/* <img src='crown.svg' /> */}
                    <CrwnLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />    
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;