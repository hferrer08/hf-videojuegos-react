
import React from "react"
import './Item.css';

function Item({ id, image, name, precio }){
    
    return (
    
        <div>
            <img className="imgCard" src={image} />
            
             <p className="text-muted">Nombre: {name} </p>
             <p className="text-white"> ID: {id} </p>
             <p className="text-white">Precio: {precio} </p>
            
        </div>
        

    

)


}

export default Item