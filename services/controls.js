const directions = require('../models/rover');
let rover = require('../models/rover'); 

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

exports.rotateRight = ()=> {
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

exports.rotateLeft = ()=> {
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