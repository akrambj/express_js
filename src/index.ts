import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from the server");
});

app.listen(PORT, () => {
    console.log("hello from the server runnning on port", PORT);
})