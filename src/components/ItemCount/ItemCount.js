import React from "react";
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    console.log (stock)
    let [cantidad,setCantidad] = useState(parseInt(initial));

    let stockDisponible = true

    if(stock>=1){
        stockDisponible = true
    }else{
        stockDisponible = false
    }

    function restarCantidad(){
       
            if (cantidad == 1){
                alert("La cantidad minima es 1")
            }else{
                setCantidad(cantidad = cantidad - 1)
                
            }
            
        
    }

    function sumarCantidad(){
        if(cantidad>= stock){
            alert("No se puede solicitar una cantidad mayor al stock "+stock)
        }else{
            setCantidad(cantidad ++)
        }
    }

 



function addOn(){
    if(stockDisponible == false){
        alert("No hay stock disponible")
    }else{
        console.log(cantidad)
    }
}




    return(
    <div  className="col-md-4 bg-secondary d-flex p2 m2 flex-column bordesRedondeados" >
        <button onClick={sumarCantidad} className="bordesRedondeados" > +</button >
        <h1> {cantidad } </h1>
        <button onClick={restarCantidad}   className="bordesRedondeados"> -</button >
      
        <h2> En stock : {stock} </h2>
        <button onClick={addOn} disabled={!stockDisponible} className="btn btn-primary bordesRedondeados" > Agregar al carrito</button >
    </div>
    
    
    );
    
    
    }
    export default ItemCount;