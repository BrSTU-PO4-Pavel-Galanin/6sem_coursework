CREATE TABLE `GameResults` (
    `code` INT NOT NULL AUTO_INCREMENT ,
    `date` DATE NOT NULL ,
    `player1` VARCHAR(120) NOT NULL ,
    `player2` VARCHAR(120) NOT NULL ,
    `player1_damage` INT NOT NULL ,
    `player2_damage` INT NOT NULL ,
    PRIMARY KEY (`code`)
) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci; 
