BEGIN;
DROP TABLE IF EXISTS users, items, orders;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(20) UNIQUE NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(100),
address TEXT,
mPesaNumber VARCHAR
);

CREATE TABLE items(
id SERIAL PRIMARY KEY,
title VARCHAR(100),
description TEXT,
image VARCHAR
);

CREATE TABLE orders(
id SERIAL PRIMARY KEY,
itemID INTEGER REFERENCES items(id),
userID INTEGER REFERENCES users(id),
quantity INTEGER,
status VARCHAR,
deliveryTime TIMESTAMP,
trakingNumber VARCHAR
);

insert into users(username, email, password, address, mPesaNumber)values('salalm','sas','sdcdsc','dcsdc','sddc');
insert into items(title, description, image)values('jewellery','sas','https://wallpaperbrowse.com/media/images/4052451-images.jpg' );
insert into orders(itemID, userID, quantity, status, trakingNumber)values(1,1,1,'sallam','1');
insert into orders(itemID, userID, quantity, status, trakingNumber)values(1,1,1,'israa','2');
insert into orders(itemID, userID, quantity, status, trakingNumber)values(1,1,1,'Ramy','3');


COMMIT;
