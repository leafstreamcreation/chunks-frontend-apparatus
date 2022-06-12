import express from "express";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(logger("dev"));

const safeList = [ process.env.ORIGIN ];

app.use(
    cors({
      credentials: true,
      origin: function (origin, callback) {
        if (safeList.indexOf(origin) !== -1 || (process.env.DEV)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      }
    })
);
    
app.use(helmet());
    
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
    res.status(200).send("Ping");
});
    
export default app;
//express server with routes for each CLI command

//boiler starts empty, or populated via seed file name argument

//boiler logic:
//does it bubble? or does it boil all at once just before push?

//bubbling pro/con
// pro: maximum readiness to send update
// pro: less RAM footprint
// pro: faster on average than boiling all at once 
// no cons

//bubbling workflow:
//receive a create, update, or delete operation
//check: if operation has and id, find other ops with that id and sum them: create + delete annihilate, update name overwrites old ones, update history combines with other history updates 

