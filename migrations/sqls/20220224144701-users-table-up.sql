/* Replace with your SQL commands */

CREATE TABLE users(
 	id BIGSERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);