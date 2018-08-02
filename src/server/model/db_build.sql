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
delivery_time VARCHAR,
traking_number VARCHAR
);

insert into users(username, email, password, address, m_pesa, phone)values('salalm','sas','sdcdsc','dcsdc','sddc', '123456');
insert into items(title, description, image)values('jewellery','sas','https://wallpaperbrowse.com/media/images/4052451-images.jpg' );
insert into orders(item_id, user_id, quantity, status, traking_number,delivery_time)values(1,1,1,'Pending','1','2018-07-16'),(1,1,1,'Recieved','2','2018-07-16'),(1,1,1,'Sent','3','2018-07-16');



COMMIT;
