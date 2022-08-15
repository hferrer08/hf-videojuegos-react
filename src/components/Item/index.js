
import React from "react"
import './Item.css';
import {Link} from 'react-router-dom'

function Item({ id, image, name, precio }){
    
    
    return (
    
        <div>
            <img className="imgCard" src={image} />
            
             <p className="text-muted">Nombre: {name} </p>
             <p className="text-white"> ID: {id} </p>
             <p className="text-white">Precio: {precio} </p>
            
            <Link to={`/detalle/${id}`}>
            <button className="btn btn-outline-primary"> Ver Detalles </button>
            </Link>
        </div>
        

    

)


}

export default Item