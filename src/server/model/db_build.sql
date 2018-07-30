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
trackingNumber VARCHAR
);

 


COMMIT;
