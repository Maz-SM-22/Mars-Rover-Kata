let rover = require('../models/rover'); 

exports.move = (rover)=> {
    if(rover.direction==='N') {
        rover.y += 1; 
    } else if (rover.direction==='E') {
        rover.x += 1; 
    } else if (rover.direction==='S') {
        rover.y -= 1; 
    } else if (rover.direction==='W') {
        rover.x -= 1; 
    }
    return rover.position; 
}

// if => Check the direction 
// if N y+1,  