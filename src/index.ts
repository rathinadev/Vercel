import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./utils";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
    const repoUrl = req.body.repoUrl; // repo url from the request body
    const id = generate(); // generate a random id
    await simpleGit().clone(repoUrl,'output/${id}');


    res.json({})
})
app.listen(3000);
console.log("Server started on port 3000");