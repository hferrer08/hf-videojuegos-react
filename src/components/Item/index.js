
import React from "react"
import './Item.css';

function Item({ id, image, name, precio }){
    
    function cargarDetalles(){
        console.log('UserID'+id)
    }


    return (
    
        <div>
            <img className="imgCard" src={image} />
            
             <p className="text-muted">Nombre: {name} </p>
             <p className="text-white"> ID: {id} </p>
             <p className="text-white">Precio: {precio} </p>
            <button className="btn btn-outline-primary" onClick={cargarDetalles}> Cargar Detalles </button>
        </div>
        

    

)


}

export default Item