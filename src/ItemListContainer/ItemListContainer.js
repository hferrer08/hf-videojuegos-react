import React from 'react'
import traerDatos from '../data/data'
import itemList from '../components/ItemList/ItemList'
import { useEffect, useState } from 'react'

export const ItemListContainer = ({setCantCarrito, cantCarrito}) => {

    const[data,setData] = useState([])
    /* const[loading,setLoading] = useState(true) */

    useEffect(()=>{
        traerDatos
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
      },[])
      
      const traerDatos = new Promise((resolve, reject)=> {
        let condition = true
        if(condition){
            setTimeout(() => {
                resolve(data)
            },2000);
                
            
        }else{
            reject(console.log("No existen datos"))
        }
    })

    









return (<>


<ItemList productos={data} setCantCarrito={setCantCarrito} cantCarrito={cantCarrito}>

</ItemList>




</>

    
)
}