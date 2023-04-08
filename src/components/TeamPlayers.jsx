import React from "react";
import Empty from "./Empty";
import GetPlayers from "./GetPlayers";

const TeamPlayer = () => {
  const players = [undefined]
  return (

   
    <>
      
   {(players != null ) ? <GetPlayers/> :<Empty page={'Team'}/>   }
      
    </>
  );
};

export default TeamPlayer;
