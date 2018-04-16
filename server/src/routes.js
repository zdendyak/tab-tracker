const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  // Authentication API
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    // AuthenticationControllerPolicy.login,
    AuthenticationController.login)

  // Songs Apis
  app.get('/songs',
    SongsController.index)
  app.post('/songs',
    SongsController.post)
}
