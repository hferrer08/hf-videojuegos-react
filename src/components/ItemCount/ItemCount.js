import React from "react";
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    let cantidad = 1;
    const [cantidadStock,setCantidadStock] = useState(parseInt(initial));

    let stockDisponible = true

    if(stockDisponible >=1){
        stockDisponible = true
    }else{
        stockDisponible = false
    }

    function restarCantidad(){
        setCantidadStock(
            cantidad = cantidad -1
        )
    }

    function sumarCantidad(){
        if(cantidad>= stock){
            alert("No se puede solicitar una cantidad mayor al stock "+stock)
        }else{
            setCantidadStock(cantidadStock ++)
        }
    }

 



function addOn(){
    if(stockDisponible == true){
        alert("No hay stock disponible")
    }else{
        console.log(cantidad)
    }
}




    return(
    <div  className="col-md-4 bg-secondary d-flex p2 m2 flex-column bordesRedondeados" >
        <button onCLick={sumarCantidad} className="bordesRedondeados"  onClick={()=> console.log("Click")}> +</button >
        <p> {Cantidad} </p>
        <button onCLick={restarCantidad}   className="bordesRedondeados"> -</button >
      <button onClick={addOn} disabled={!stockDisponible} className="btn btn-primary bordesRedondeados" > Agregar al carrito</button >
    </div>
    
    
    )
    
    
    }
    export default ItemCount