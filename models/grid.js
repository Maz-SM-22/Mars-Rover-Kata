class Grid {
    constructor(width, length) {
        this.width = 10; 
        this.length = 10
    }
}

class Position {
    constructor(x, y) {
        this.x = x; 
        this.y = y
    }
}

class Obstacle {
    constructor(x, y) {             //  Check this later. Might need refactoring. 
        this.x = x; 
        this.y = y
    }
}

module.exports = Grid, Position, Obstacle; 