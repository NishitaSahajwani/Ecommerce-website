const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./confi/database")


//config

dotenv.config({path:"backend/confi/config.env"});

//connectin to databse

connectDatabase();

app.listen(3000)