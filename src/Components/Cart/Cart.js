import React from 'react';

const Cart = (props) => {
    const data = props.dataPassed
    
    
  
 
const totals = data.reduce((total,data)=>total + parseFloat(data.salary ) , 0);
 
    return (
        <div>
          {
             data.map(dt =>(
              <div>
                  <h1>name : {dt.name}</h1>
                  <h3>salary : {dt.salary}</h3>

                

              </div>   
             )
             )
          } 
            <h1>total : {totals} </h1>
        </div>
    );
};

export default Cart;