import { createContext, useState, useEffect } from "react";

const addCardItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // if found increment the quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem 
        );
    }
    // return new array with modified cartItems / new cart item
    return [...cartItems, {...productToAdd, quantity: 1}] ;
    
};

const removeCartItem = (cartItems, productToRemove) => {
    // find if product exist
    if(productToRemove.quantity === 1) {
        return cartItems.filter((item) => item.id !== productToRemove.id);
    } else // if found decrement the quantity 
    {
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem 
        );
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}