import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./utils";
import { getAllFiles } from "./file";
import path from "path";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
    const repoUrl = req.body.repoUrl; // repo url from the request body
    const id = generate(); // generate a random id
    await simpleGit().clone(repoUrl,path.join(__dirname,'output/${id}'));

    const files = getAllFiles(path.join(__dirname,'output/${id}'));

    
    res.json({
        id:id
    })
})
app.listen(3000);
console.log("Server started on port 3000");