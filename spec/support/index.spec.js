const parser = require('../../controllers/inputParser'); 
const controls = require('../../services/controls'); 
const { Rover, directions } = require('../../models/rover'); 
const position = require('../../models/position'); 
const { Grid, Obstacle } = require('../../models/grid'); 
const game = require('../../services/game'); 

describe('User input', ()=>{
    it('Parse user input correctly', ()=> {
        expect(parser.parseUserInput('MMRMMLM')).toEqual(['M', 'M', 'R', 'M', 'M', 'L', 'M']); 
    })
});

describe('Update rover position', ()=> {
    it('Move rover forward', ()=> {
        expect(controls.move(new Rover())).toEqual(new position(0, 1)); 
    })
    it('Turn rover right', ()=> {
        expect(controls.rotateRight(new Rover())).toEqual(directions.E);  
    })
    // it('Move rover right', ()=> {
    //     expect(someFunction()).toEqual(); 
    // })
    it('Turn rover left', ()=> {
        expect(controls.rotateLeft(new Rover())).toEqual(directions.W); 
    })
})

describe('Executing rover', ()=> {
    it('Execute rover command', ()=> {
        let testRover = new Rover; 
        testRover.position = new position(2, 3); 
        expect(controls.execute(parser.parseUserInput('MMRMMLM'))).toEqual(testRover);
    })
})

describe('Create obstacles', ()=> {
    it('Add obstacles to grid', ()=> {
        let testGrid = new Grid(10, 10);
        game.createObstacles(testGrid);
        expect(testGrid.obstacles.length).toEqual(3);
    })
})