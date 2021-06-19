const { Rover, directions } = require('../models/rover');
const parser = require('../controllers/inputParser'); 

exports.move = (rover)=> {                  // Avoid inappropriate intimacy (Code smell)
    switch(rover.direction) {
        case 'N': 
            rover.position.y += 1;  
            return rover.position;
        case 'E': 
            rover.position.x += 1; 
            return rover.position;
        case 'S':
            rover.position.y -= 1;
            return rover.position;
        case 'W': 
            rover.position.x -= 1; 
            return rover.position;
        default:
            throw Error('Rover has crashed!'); 
    }
}

exports.rotateRight = (rover)=> {
    switch(rover.direction) {
        case 'N': 
            rover.direction = directions.E;  
            return rover.direction;
        case 'E': 
            rover.direction = directions.S;  
            return rover.direction;
        case 'S':
            rover.direction = directions.W;  
            return rover.direction;
        case 'W': 
            rover.direction = directions.N;  
            return rover.direction;
        default:
            throw Error('Rover has crashed!'); 
    }
}

exports.rotateLeft = (rover)=> {
    switch(rover.direction) {
        case 'N': 
            rover.direction = directions.W;  
            return rover.direction;
        case 'E': 
            rover.direction = directions.N;  
            return rover.direction;
        case 'S':
            rover.direction = directions.E;  
            return rover.direction;
        case 'W': 
            rover.direction = directions.S;  
            return rover.direction;
        default:
            throw Error('Rover has crashed!'); 
    }
}

exports.execute = (parsedInput)=> {
    let rover = new Rover();
    for(let item of parsedInput) {
        switch(item) {
            case 'M': 
                this.move(rover); 
            case 'L': 
                this.rotateLeft(rover); 
            case 'R': 
                this.rotateRight(rover); 
            default: 
                throw Error('Rover has crashed!'); 
        }
    }
    return rover; 
}
// execute => if 'M' => move, if 'L' => rotateLeft, 