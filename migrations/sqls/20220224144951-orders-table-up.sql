/* Replace with your SQL commands */

CREATE TABLE orders (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    status VARCHAR(50) NOT NULL,
    user_id BIGINT REFERENCES users(id) NOT NULL
);
