import React from 'react';

const PlayerDataShow = (props) => {
   const data = props.PlayerData;
   const {id,name,img,email,gender,salary} = data;
   const handelClick = props.dataPass;
  
  //  const style={
  //    border:"1px solid red",
  //    margin:"20px",
  //    padding:"20px"
  //  }

  // dubble click handel


  
    return (
      // style={style}
      // div ar modde bosbe
        <div className="container">
          
         <img src={img} alt=""/>
          <h1>Name : {name}</h1> 
          <h4>Player Email : {email}</h4> 
          <h4>salary : {salary}</h4>
          {/* <h1>gender:{gender}</h1> */}
          <button onClick={() => handelClick(data)} className="buttonHandel" >Add Player</button>
          
         
        </div>
    );
};

export default PlayerDataShow;