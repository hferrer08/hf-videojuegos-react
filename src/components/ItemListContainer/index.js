import React from "react";
import {useEffect, useState} from 'react';
import traerDatos from "../../data/data";
import Spinner from "../Spinner";
import ItemList from "../ItemList";


function ItemListContainer(){

    const [data,setData]=useState([])
    const[loading, setLoading]=useState(true)
  
    useEffect(()=>{
      traerDatos
      .then((resp)=>setData(resp))
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
  
  
    },[])

    return (
        <div>
                
        {loading ? <Spinner></Spinner> :  <ItemList productos={data} />}
 
        </div>
        
)
}

export default ItemListContainer