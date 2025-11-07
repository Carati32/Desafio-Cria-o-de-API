CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE livro(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	titulo VARCHAR(200) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    ano_publicacao INT,
    isbn VARCHAR(20),
    disponivel BOOLEAN DEFAULT TRUE
);

SELECT * FROM livro