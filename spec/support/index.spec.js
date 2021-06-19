const parser = require('../../controllers/inputParser'); 
const controls = require('../../services/controls'); 
const rover = require('../../models/rover'); 
const position = require('../../models/Position'); 

describe('User input', ()=>{
    it('Parse user input correctly', ()=> {
        expect(parser.parseUserInput('MMRMMLM')).toEqual(['M', 'M', 'R', 'M', 'M', 'L', 'M']); 
    })
});

describe('Update rover position', ()=> {
    it('Move rover forward', ()=> {
        expect(controls.move(new rover())).toEqual(new position(0, 1)); 
    })
    // it('Turn rover right', ()=> {
    //     expect(someFunction()).toEqual(); 
    // })
    // it('Move rover right', ()=> {
    //     expect(someFunction()).toEqual(); 
    // })
    // it('Turn rover left', ()=> {
    //     expect(someFunction()).toEqual(); 
    // })
})