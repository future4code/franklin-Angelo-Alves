import express from "express";

import { AddressInfo } from "net";
import { productRouter } from "./router/productRouter";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.get("/ping", (req, res) => {
    res.send("Pong!")
})

app.use('/products', productRouter)