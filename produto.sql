DROP TABLE IF EXISTS `produto`

CREATE TABLE `produto` (
    `cod_produto` INT PRIMARY KEY AUTO_INCREMENT,
    `nome_produto` VARCHAR(60),
    `preco_produto` FLOAT
)

INSERT INTO `produto` (`nome_produto`, `preco_produto`) 
    VALUES ("exemplo01", 10.50), ("exemplo02", 15.25);