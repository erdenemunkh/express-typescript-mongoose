import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import { json } from "body-parser";
import { todoRouter } from "./routes/todo";
import { dbconfig } from "./config/dbconfig";

const app = express();

app.use(json());
app.use("/api", todoRouter);

// mongoose.connect(
//   dbconfig.connectionString,
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   } as ConnectOptions,
//   () => {
//     console.log("db success");
//   }
// );

mongoose
  .connect(dbconfig.connectionString, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("Mongoose connection done"))
  .catch((e) => {
    console.log("Mongoose connection error", e);
  });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
  console.log(
    "Mongoose default connection open to " + dbconfig.connectionString
  );
});

app.get("/api", (req, res) => {
  res.status(200).send({ message: "Welcome to REST API" });
});

app.listen(4000, () => {
  console.log("server is listening on 4000 port");
});
