const { Rover, directions } = require('../models/rover');
const parser = require('../controllers/inputParser'); 
const position = require('../models/position'); 

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
            throw Error('Rover crashed moving forward!'); 
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
            throw Error('Rover crashed rotating right!'); 
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
            throw Error('Rover crashed rotating left!'); 
    }
}

exports.execute = (parsedInput)=> {
    let rover = new Rover();
    for(let item of parsedInput) {
        switch(item) {
            case 'M': 
                this.move(rover);
                break;  
            case 'L': 
                this.rotateLeft(rover); 
                break; 
            case 'R': 
                this.rotateRight(rover); 
                break; 
            default: 
                throw Error('Rover has crashed!'); 
        }
    }
    return rover; 
}