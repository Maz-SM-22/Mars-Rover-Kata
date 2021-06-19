const parser = require('../../controllers/inputParser'); 
const controls = require('../../services/controls'); 
const { Rover, directions } = require('../../models/rover'); 
const position = require('../../models/position'); 

describe('User input', ()=>{
    it('Parse user input correctly', ()=> {
        console.log(directions.W); 
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