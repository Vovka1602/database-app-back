import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "16022004As.",
    database: "бд_магазин"
})

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL connected');
});

app.get('/execute-query', (req, res) => {
    const { query } = req.query; // Assuming query parameter contains the SQL query
    if (!query) {
        return res.status(400).json({ error: 'Missing query parameter' });
    }
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Server error: Failed to execute query' });
        }
        res.json(result);
    });
});

app.listen(8000, () => {
    console.log("Connected to backend");
})