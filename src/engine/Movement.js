import worldMap from "./WorldMap";
import useKeypress from 'react-use-keypress';

//Validate move to top on map
const moveTop = (player,setPlayer,npcs) => {
    if(worldMap[player.y - 1][player.x] !== -1 && worldMap.length > player.y - 1 && !npcs.find(n => n.x === player.x && player.y - 1 === n.y)){
       setPlayer({x: player.x, y: player.y - 1, name: player.name})
    }
}

//Validate move to left on map
const moveLeft = (player,setPlayer,npcs) => {
    if(worldMap[player.y][player.x - 1] !== -1 && player.x > 0 && !npcs.find(n => n.x === player.x - 1 && n.y === player.y)){
        setPlayer({x: player.x - 1, y: player.y, name: player.name})
    }
}

//Validate move to right on map
const moveRight = (player,setPlayer,npcs) => {
    if(worldMap[player.y][player.x + 1] !== -1 && player.x + 1 < 8 && !npcs.find(n => n.x === player.x + 1 && n.y === player.y)){
        setPlayer({x: player.x + 1, y: player.y, name: player.name})
    }
}

//Validate move to bottom on map
const moveBottom = (player,setPlayer,npcs) => {
    if(worldMap[player.y + 1][player.x] !== -1 && worldMap.length > player.y + 1 && !npcs.find(n => n.x === player.x && player.y + 1 === n.y)){
        setPlayer({x: player.x, y: player.y + 1, name: player.name})
    }
}


const move = {
    'w': (player,setPlayer, npcs) => moveTop(player,setPlayer, npcs),
    's': (player,setPlayer, npcs) => moveBottom(player,setPlayer, npcs),
    'a': (player,setPlayer, npcs) => moveLeft(player,setPlayer, npcs),
    'd': (player,setPlayer, npcs) => moveRight(player,setPlayer, npcs)
}

const Movement = ({player, setPlayer, npcs}) => {
    return <>
    {
        useKeypress(['w', 's', 'a', 'd'], (event) => {
            //Move player call function
            try {
                const keyPress = event.key
                if(move[keyPress.toLowerCase()]){
                    move[keyPress.toLowerCase()](player,setPlayer, npcs);
                }
            } catch (error) {
                console.error(`You cant move to ${player.y}:${player.x}`)
            }
        })
    }
    </>
}

export default Movement;