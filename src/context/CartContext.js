import { useState, createContext } from "react";

export const CartContext = React.createContext([])
export default function CartCustomContext({children}){
const [cart, setCart] = useState([])

const addCartItem = (producto, cantidad) => {
    console.log(cantidad);
    console.log(producto.cantidad)
    const productInCart = cart.find((productInCart)=> productInCart.id === producto.id)
    console.log(productInCart)
    if(productInCart){
        const newCart = cart.map((productInCart) =>{
            if(productInCart.id === producto.id){
                return {...productInCart, quantity: producto.cantidad + productInCart.cantidad}
            }else{
                return productInCart
            }
        });
        setCart(newCart)
    }else{
        const listaActualizada = [...cart,producto]
        setCart(listaActualizada)
        console.log("Lista actualizada: ", listaActualizada)
    }
}
const removeItem =(id) => {
    const newCart = cart.filter((producto)=> producto.id !== id)
    setCart(newCart)
}

const removeAll =()=>{
    setCart([])
}

return(
    <CartContext.Provider value={{addCartItem, removeItem, removeAll, cartData: cart}}>
        {children}
    </CartContext.Provider>
)


}