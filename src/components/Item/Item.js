import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto, cantCarrito, setCantCarrito, stock}) => {
return (
    <>
    <div>
        <h3>{producto.title}</h3>
        <img className="img-thumbnail"src={producto.image}> alt="" </img>
        <div>{producto.precio}</div>
        <ItemCount setCantCarrito={setCantCarrito} cantCarrito={cantCarrito} stock={stock}> </ItemCount>
        





    </div>
    
    
    
    </>
)

}