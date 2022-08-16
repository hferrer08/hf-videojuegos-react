import React from "react";
import { useState , useEffect} from "react";

function ItemCount ({stock, initial, addON}){


    let [cantidad, setCantidad] = useState(parseInt(initial))
   let stockDisponible = stock >1 ? true : false

    function restarCantidad(){
        if(cantidad <= initial){
            alert("La cantidad minima a pedir es: " +cantidad)
        }else{
            setCantidad(
                cantidad= cantidad-1
            )
        }
    }
    function sumarCantidad(){
        if(cantidad >= stock){
            alert("La cantidad maxima no puede superar al stock: " +stock)
        }else{
            setCantidad(
                cantidad= cantidad+1
            )
        }
    }

    //function addON(){
       // if(!stockDisponible){
      //      alert("No queda stock disponible")
      //  }else{
     //       console.log(cantidad)
     //   }
 //   }
  return(
    <div className="card col-md-3">
  <div className="card-body shadow">
    <div className="row"> 
  <button onClick={sumarCantidad} type="button" className="btn btn-outline-primary">+</button>
  <p> {cantidad} </p>
  <button onClick={restarCantidad} type="button" className="btn btn-outline-warning">-</button>
  </div>
  <div className="row"> 
  <button onClick={(evt)=>{
    addON(cantidad)
  }} type="button" disabled={!stockDisponible} className="btn btn-success">Agregar al carrito</button>
  </div>
  </div>
</div>
  )


}

export default ItemCount