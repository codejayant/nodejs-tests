const expect = require('expect');
const utils = require('./utils');


describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
    
      expect(res).toBe(44).toBeA('number');
    });
  });
  
  it('should async add two numbers', (done) => {
    utils.asyncAdd(3, 4, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });
  
  it('should square number', () => {
    var square = utils.square(7);
  
    expect(square).toBe(49).toBeA('number');
  });
  
  it('should async square a number', (done) => {
    utils.asyncSquare(5, (square) => {
      expect(square).toBe(25).toBeA('number');
      done();
    });
  });
})


it('should have first and last name are set', () => {
  var user = {
    age: 29,
    address: 'san francisco'
  };
  var res = utils.setName(user, 'jayant sarkar');
  // expect(res.firstName).toBe('jayant');
  // expect(res.lastName).toBe('sarkar');
  expect(res).toInclude({
    firstName: 'jayant',
    lastName: 'sarkar'
  });
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
  expect({name: 'Jayant'}).toNotEqual({name: 'jayant'});
  expect([2, 3, 4]).toInclude(3);
  expect({
    name: 'jayant',
    age: 29,
    address: 'san francisco'
  }).toInclude({
    age: 29
  });
});