const express = require('express');

const PORT =  5000;
const authRouter = require('./routes/authRouter.js');
const userRouter = require('./routes/userRouter.js'); 
const articleRouter = require('./routes/postsRouter.js'); 
require("dotenv").config();

const cookieParser = require('cookie-parser');
const {initDb} = require('./db/db.js');
const server = express();

/* server.use(
    cors({
        credentials: true, 
        origin: "http://localhost:3000"
    })
);
 */
 
server.use(function(req, res, next) { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "PROPFIND, PROPPATCH, COPY, MOVE, DELETE, MKCOL, LOCK, UNLOCK, PUT, GETLIB, VERSION-CONTROL, CHECKIN, CHECKOUT, UNCHECKOUT, REPORT, UPDATE, CANCELUPLOAD, HEAD, OPTIONS, GET, POST");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Overwrite, Destination, Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Max-Age", 86400);
  next();
});

server.use(cookieParser());

 server.use(express.json());
server.use('/auth', authRouter);
server.use('/user', userRouter);
server.use('/article', articleRouter);

server.use(async function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});
const start = async () => {
  try {
    await initDb();
  
    server.listen(PORT,  () => console.log(`server is running on port  ${PORT}`))
  } catch (e) {
    console.log(e)

  } 
}
start();