const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    // spy();
    // expect(spy).toHaveBeenCalled();

    spy('jayant', 29);
    expect(spy).toHaveBeenCalledWith('jayant', 29);
  });

  it('should call saveUser with user object', () => {
    var email = "codejayant@gmail.com"
    var password = '12345';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});