class Grid {
    constructor(width, length) {
        this.width = 10; 
        this.length = 10
    }
}

class Obstacle {
    constructor(x, y) {             //  Check this later. Might need refactoring. 
        this.x = x; 
        this.y = y
    }
}

module.exports = Grid, Obstacle; 