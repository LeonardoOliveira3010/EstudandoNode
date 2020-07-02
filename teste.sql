    CREATE TABLE usuarios(
        nome VARCHAR(50),
        email VARCHAR(100),
        idade INT
    );

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Carlos Rodrigues", 
    "carlos@outlook.com", 
    49
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Rafael", 
    "rafael@outlook.com", 
    32
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Milena Carla", 
    "carlos@outlook.com", 
    26
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Julia Pereira", 
    "carlos@outlook.com", 
    20
);

DELETE FROM usuarios WHERE nome = 'Rafael'

UPDATE usuarios SET nome = 'Teste' WHERE nome = 'Leonardo Oliveira'

