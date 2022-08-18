
import {React, useContext} from 'react'
import ItemCount from "../ItemCount";
import { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


export default function ItemDetails({nombre, image, id, precio, stock, initial}){
      const [finishState, setFinish] = useState(false);
      const [cantidadItem, setCantidad] = useState(0);
      const {addToCart} = useContext(CartContext)
      
      const OnAdd = (cantidadAAgregar) => {
            setFinish(true)
            setCantidad(cantidadAAgregar)
            addToCart

      }
   
    return (
        <>
        <div>
        <img className="imgCard" src={image} />
           <p className="text-white">{id}</p> 
           <p className="text-white">{nombre}</p> 
           <p className="text-white">{precio}</p> 

        </div>  

     <ItemCount addON={OnAdd} stock={stock} initial={initial} />
      {finishState && <Link to={`/cart`}>Finalizar Compra</Link>}      
     </>
    );         


    


}

