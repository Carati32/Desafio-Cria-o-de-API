import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
const pool = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senai",
  database: "biblioteca",
});



const app = express();
app.use(express.json());
app.use(cors());


app.get("/livros", async (req, res) => {
  const [results] = await pool.query("SELECT * FROM livro");
  res.send(results);
});
app.get("/livros/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await pool.query("SELECT * FROM livro WHERE id=?", id);
        if (results.length === 0) {
            return res.status(404).json({ erro: "Livro não encontrado" });
        }
        res.status(200).send(results); 
    } catch (error) {
        console.error(error);    }
});

app.post("/livros", async (req, res) => {
  try {
    const { body } = req;
    const [results] = await pool.query(
      "INSERT INTO livro (titulo, autor, ano_publicacao, isbn, disponivel) VALUES (?, ?, ?, ?, ?)",
      [body.titulo, body.autor, body.ano_publicacao, body.isbn, body.disponivel]
    );

    const [livroCriado] = await pool.query(
      "Select * from livro WHERE id=?",
      results.insertId
    );
    console.log('Livro cadastrado bcom sucesso!')
    return res.status(201).json(livroCriado);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/livros/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await pool.query(
      "DELETE FROM livro WHERE id=?",
      id
    );
    res.status(200).send("Livro removido com sucesso!", results);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "Livro não encontrado" });

  }
});

app.put("/livros/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const [results] = await pool.query(
      "UPDATE livro SET `titulo` = ?, `autor` = ?, `ano_publicacao` = ?,  `isbn` = ?,  `disponivel` = ? WHERE id = ?; ",
      [body.titulo, body.autor, body.ano_publicacao, body.isbn, body.disponivel, id]
    );
    res.status(200).send("Livro atualizado com sucesso!", results);
  } catch (error) {
    console.log(error);
  }
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });