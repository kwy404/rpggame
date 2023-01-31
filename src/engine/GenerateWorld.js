import Tiles from "./Tiles";
import worldMap from "./WorldMap"
import Player from "./Players";

function GenerateWorld() {
    return (
      <>
        <Player/>
       { worldMap.map((y, yS) => (
            y.map((tile, x) => (
                <div
                key={`${yS}:${x}`}
                position={`${yS}:${x}`}
                className={`bloco bloco--${Tiles[tile]}`}>
                
                </div>
            ))
       )) }
      </>
    );
}
  
export default GenerateWorld;
  