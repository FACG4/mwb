BEGIN;

DROP TABLE IF EXISTS users, items, orders CASCADE;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(20) UNIQUE NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
phone VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(100),
address TEXT,
m_pesa VARCHAR
);

CREATE TABLE items(
id SERIAL PRIMARY KEY,
title VARCHAR(100),
description TEXT,
image VARCHAR
);

CREATE TABLE orders(
id SERIAL PRIMARY KEY,
item_id INTEGER REFERENCES items(id),
user_id INTEGER REFERENCES users(id),
quantity INTEGER,
status VARCHAR,
delivery_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
traking_number VARCHAR
);

insert into users(username, email, password, address, m_pesa, phone)values('salalm','sas','sdcdsc','dcsdc','sddc', '123456');
insert into items(title, description, image)values('jewellery1','sas','http://www.supercutekawaii.com/wp-content/uploads/maqaroon.jpg' );
insert into items(title, description, image)values('jewellery2','sas','https://static.webshopapp.com/shops/064485/files/159239609/262x276x1/kaya-jewellery-cute-little-bracelet-for-kids-twink.jpg' );
insert into items(title, description, image)values('jewellery3','sas','https://cdn.shopify.com/s/files/1/1048/0248/products/tb2tp9hafxxxxbdxpxxxxxxxxxx__136491545_grande.jpeg' );
insert into items(title, description, image)values('jewellery4','sas','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnv5ZnDGl8e_psgzqxwGMeIkWuhwefMnU-woLwj9xkU0YzJgQQSw' );
insert into items(title, description, image)values('jewellery4','sas','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnv5ZnDGl8e_psgzqxwGMeIkWuhwefMnU-woLwj9xkU0YzJgQQSw' );
insert into orders(item_id, user_id, quantity, status, traking_number)values(1,1,1,'Pending','1'),(2,1,1,'Recieved','1'),(3,1,1,'Sent','1'),(4,1,1,'Sent','1');
  -- (2,1,1,'Recieved','2',now()),(3,1,1,'Sent','3',now()),(4,1,5,'Pending','3',now()),(4,1,5,'Pending','3',now());



COMMIT;
