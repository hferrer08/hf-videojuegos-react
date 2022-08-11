import Item from "../Item";

function ItemList({productos}){

    return (
        <div>
            {productos.map((producto) => {
                return (
                    <Item key={producto.id} 
                    id={producto.id}
                     image={producto.image}
                      name={producto.nombre}
                       precio={producto.precio}>
                       
                    </Item>
                
            
                );
                        
                })} 
            </div>  
    );     
            
}
       
export default ItemList

 