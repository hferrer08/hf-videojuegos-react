import React from "react";
import './ItemList.css';
import Item from '../Item/Item.js'



const itemList = (props) => {

return(
    <>
<div  className="col-md-4 bg-secondary d-flex p2 m2 flex-column " >
 {props.productos.map(producto => <Item producto={producto} key={producto.id} stock={Math.floor(Math.random() *15)} setCantCarrito={props.setCantCarrito} cantCarrito={props.cantCarrito}  />)}

</div>

</>
)


}
export default itemList