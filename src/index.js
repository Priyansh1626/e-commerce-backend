require("./db/conn");
require("dotenv").config();
const userRouter = require("./routers/users");
const productRouter = require("./routers/products");
const paymentRouter = require("./routers/payment");
const port = process.env.PORT || 8000;
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors({
    // origin: ["http://localhost:3000"],
    origin: ["https://64c2c114426c24006f77a9b9--helpful-cascaron-8a2d87.netlify.app"],
    credentials: true,
}));

app.enable('trust proxy');
app.use(express.json());
app.use(cookieParser());

app.use(userRouter);
app.use(productRouter);
app.use(paymentRouter);


app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})
