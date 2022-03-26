/* Replace with your SQL commands */

CREATE TABLE order_products(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    quantity BIGINT NOT NULL,
    order_id BIGINT REFERENCES orders(id) NOT NULL,
    product_id BIGINT REFERENCES products(id) NOT NULL
);