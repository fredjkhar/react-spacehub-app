const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const GithubStrategy = require( 'passport-github2' ).Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID ='212783671280-k847659pqiliaq8ugorbfqp4vmtdm2sl.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const GITHUB_CLIENT_ID = 'b44d086a7e5379144830';
const GITHUB_CLIENT_SECRET = 'a10c65529a855d76b2cd63e8eb8a575034761f82';


passport.use(new GithubStrategy({
  clientID:     GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback",
},
function(accessToken, refreshToken, profile, done) {
  done(null, profile)
}
));

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