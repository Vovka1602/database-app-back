import express from "express";
import mysql from "mysql2";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"16022004As.",
    database:"бд_магазин"
})

app.get("/", (req, res) => {
    res.json("welcome");
})

app.get("/products", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    })
}) 

app.listen(8000, () => {
    console.log("Connected to backend");
})