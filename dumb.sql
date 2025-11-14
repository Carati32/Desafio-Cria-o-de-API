CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE livro(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	titulo VARCHAR(200),
    autor VARCHAR(100),
    ano_publicacao INT,
    isbn VARCHAR(20),
    disponivel BOOLEAN DEFAULT TRUE
);

SELECT * FROM livro;


INSERT INTO livro (titulo, autor, ano_publicacao, isbn, disponivel) VALUES
('O Senhor dos Anéis: A Sociedade do Anel', 'J.R.R. Tolkien', 1954, '9780261103573', TRUE),
('1984', 'George Orwell', 1949, '9780451524935', TRUE),
('Dom Casmurro', 'Machado de Assis', 1899, '9788533613400', TRUE),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943, '9780156013987', TRUE),
('A Culpa é das Estrelas', 'John Green', 2012, '9780142424179', TRUE),
('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 1997, '9780439708180', TRUE),
('O Código Da Vinci', 'Dan Brown', 2003, '9780385504201', TRUE),
('A Menina que Roubava Livros', 'Markus Zusak', 2005, '9780375842207', TRUE),
('Orgulho e Preconceito', 'Jane Austen', 1813, '9780141439518', TRUE),
('Moby Dick', 'Herman Melville', 1851, '9781503280786', TRUE);
