import React from 'react';

const Cart = (props) => {
    const data = props.dataPassed
    
    
  
 
const totals = data.reduce((total,data)=>total + parseFloat(data.salary ) , 0);
 
    return (
        <div>
            <h1>Team Player</h1>
          {
             data.map(dt =>(
              <div>
                  <h2>name : {dt.name}</h2>
                  <h4>salary : {dt.salary}</h4>

                

              </div>   
             )
             )
          } 
            <h3>total : {totals} </h3>
        </div>
    );
};

export default Cart;