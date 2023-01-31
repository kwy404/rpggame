class NPC{
    constructor({y,x,name}){
        this.y = y
        this.x = x
        this.name = name
    }
    iaMovement(){

    }
}

const npcs = [
    new NPC({
        x: 3,
        y: 2,
        name: 'Jonas'
    }),
    new NPC({
        x: 3,
        y: 6,
        name: 'Marta'
    }),
    new NPC({
        x: 0,
        y: 6,
        name: 'Mariana'
    })
];


export default npcs;