const position = require('./position'); 

const directions = {
    N: 'N', 
    E: 'E', 
    S: 'S',  
    W: 'W'
}

class Rover {
    constructor() {
        this.position = new position(0, 0); 
        this.direction = directions.N
    }
}

module.exports = { Rover, directions }; 