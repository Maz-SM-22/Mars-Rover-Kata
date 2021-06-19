const grid = require('./grid'); 

const directions = {
    N: 'N', 
    E: 'E', 
    S: 'S',  
    W: 'W'
}

class Rover {
    constructor() {
        this.position = grid.Position(0, 0); 
        this.direction = directions.N
    }
}

module.exports = Rover; 