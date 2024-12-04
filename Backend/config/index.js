const dotenv = require("dotenv");
dotenv.config();
const { MONGO_URL, PORT, JWT_SECRET } = process.env; 

const Config = { MONGO_URL, PORT, JWT_SECRET };
module.exports = Config;