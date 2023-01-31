import { useState, useEffect } from "react";
import Movement from "./Movement"; 
import npcs from "./Npcs";

function Player() {
    //My char on the map
    const [player, setPlayer] = useState({
        x: 2,
        y: 1,
        name: 'kaway'
    })
    return (
      <>
        {/* Movement componet, but is a function. idk what hell */}
        <Movement
        player={player}
        npcs={npcs}
        setPlayer={setPlayer}
        />
        {/* Npcs on the map */}
        {npcs.map(npc => (
          <div 
          npc='true'
          position={`${npc.y}:${npc.x}`}
          style={{
            left: `calc(${npc.x + 1}px * 10)`,
            top: `calc(${npc.y + 1}px * 10)`
          }}
          className="bloco player npc">
            <span>{ npc.name }</span>
          </div>
        ))}
        <div
        npc='false'
        position={`${player.y}:${player.x}`}
        style={{
          left: `calc(${player.x + 1}px * 10)`,
          top: `calc(${player.y + 1}px * 10)`
        }}
        className="bloco player">
          <span>{ player.name }</span>
        </div>
      </> 
    );
}
  
export default Player;
  