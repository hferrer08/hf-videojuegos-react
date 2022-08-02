import React from "react";
import './ItemList.css';



const itemList = (props) => {

return(
<div  className="col-md-4 bg-secondary d-flex p2 m2 flex-column bordesRedondeados" >
  <h3> {props.desc}</h3>

</div>


)


}
export default itemList