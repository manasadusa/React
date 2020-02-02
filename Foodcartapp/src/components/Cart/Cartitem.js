import React from 'react'

export default function Cartitem({item, value}) {
    
    const {id,title,img,price,total,count}=item;
    const {increment , decrement, removeItem}=value;
    return (
       <div className="row my-1 text-capitalize text-center">
            <div className=" col-10 mx-auto col-lg-2">
    <img  src={img} style={{width:"5rem",height:"5rem"}} className="img-fluid" alt="product"/>
               
            </div>

            <div className=" col-10 mx-auto col-lg-2">
               
            <span>item: </span>  {title}
              </div>
              
            <div className=" col-10 mx-auto col-lg-2">
               
              <span>Rs.</span> {price}
              </div>
              
            <div className="col-10 mx-auto col-lg-2">

                     <p  onClick={()=>{ decrement(id) }}>
                           <p>delete 1 item</p>
                     </p>
                  <strong>
                  {count}</strong>                 <p  onClick={()=>{  increment(id)}}>
                        <strong>add 1 item</strong>
                     </p>
                 
                  
               
               
               </div>
               
            <div className=" col-10 mx-auto col-lg-2" onClick={()=> removeItem(id)}>
                  <strong >Remove item</strong>
               
              </div>
            <div className=" col-10 mx-auto col-lg-2">
                  <strong>Total: Rs. {total}</strong>
               
              </div>
            
       </div>
    )
}
