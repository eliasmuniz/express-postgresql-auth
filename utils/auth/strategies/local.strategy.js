const { Strategy } = require('passport-local');

const AuthService = require('./../../../services/auth.service');
const service = new AuthService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      const user = await service.getUser(email, password);
      done(null, user); // no hay error -> null, y devolvemos el usuario
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
