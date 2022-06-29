const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID ='212783671280-k847659pqiliaq8ugorbfqp4vmtdm2sl.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';



passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user,done) => {
    done(null,user)
});

passport.deserializeUser((user,done) => {
    done(null,user)
});