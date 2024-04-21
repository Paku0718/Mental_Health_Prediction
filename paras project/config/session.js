const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const dotenv = require('dotenv');

dotenv.config();

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: 'sessions',
});

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
    // secure: process.env.NODE_ENV === 'production', // ensure the browser only sends the cookie over HTTPS.
    httpOnly: true, // ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.
    sameSite: 'strict' // protection against cross-site request forgery attacks.
  }
});

module.exports = sessionMiddleware;
