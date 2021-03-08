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
          <h1>PlayerName : {name}</h1> 
          <h1>Player Email : {email}</h1> 
          <h1>salary : {salary}</h1>
          <h1>gender:{gender}</h1>
          <button onClick={() => handelClick(data)}>Add Player</button>
        </div>
    );
};

export default PlayerDataShow;