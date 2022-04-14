const passport = require('passport');

const LocalStrategy = require('./strategy/local.strategy');

passport.use(LocalStrategy);
