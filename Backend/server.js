const database = require("./config/database");
const express = require("express");
const Config = require("./config");
const bodyParser = require("body-parser");
const inventoryRoutes = require("./routes/inventoryRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(cors({
  origin: 'https://inventory-management-puce-rho.vercel.app',
  credentials: true
}));
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use("/uploads", express.static("uploads"));

 // OUR ROUTES
 app.use("/api/inventory", inventoryRoutes);
 app.use("/api/suppliers", supplierRoutes);


const PORT = Config.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API is running!");
  });

app.listen(PORT, () => {
  database();
  console.log(`Server is running on localhost:${PORT}`);
}); 