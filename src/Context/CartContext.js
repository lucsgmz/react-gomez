import React, { createContext, useState} from 'react'

export const DataContext = createContext([]);


export default function CartContext({children}) {

    const [cart, setCart] = useState([]);

    const addProduct = (item, count) =>{
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, count: count});
        setCart(newCart)
    }
    console.log('carrito' , cart);

    const clearCart = () => setCart([])

    const isInCart = (id) => {
       return cart.find(product => product.id === id) ? true : false
      };

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <DataContext.Provider value = {{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        cart
    }}>
        {children}
    </DataContext.Provider>
  )
}
