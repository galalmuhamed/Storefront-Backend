## Tables

```
CREATE TABLE users(
id BIGSERIAL NOT NULL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
password VARCHAR(100) NOT NULL
);

CREATE TABLE products (
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
price BIGINT NOT NUll
);

CREATE TABLE orders (
id BIGSERIAL NOT NULL PRIMARY KEY,
status VARCHAR(50) NOT NULL,
user_id BIGINT REFERENCES users(id) NOT NULL
);

CREATE TABLE order_products(
id BIGSERIAL NOT NULL PRIMARY KEY,
quantity BIGINT NOT NULL,
order_id BIGINT REFERENCES orders(id) NOT NULL,
product_id BIGINT REFERENCES products(id) NOT NULL
);

```

## Routes

```
Users Routes

[GET] http://localhost:5000/users [token required]
[POST] http://localhost:5000/users
    {
        "first_name":"galal",
        "last_name":"mohamed",
        "password":"pass"
    }
[GET] http://localhost:5000/users/1 [token required]

Products Routes

[GET] http://localhost:5000/products
[Post] http://localhost:5000/products [token required]
    {
        "name":"Iphone 13",
        "price":1000
    }
[GET] http://localhost:5000/products/1

Orders Routes

[GET] http://localhost:5000/orders [token required]
    {
        "user_id":"1"
    }
[POST] http://localhost:5000/orders [token required]
    {
        "user_id":"1",
    }
[GET] http://localhost:5000/orders/1  [token required]
    {
        "user_id":"1"
    }
[POST] http://localhost:5000/orders/1/product [token require]
    {
        "quantity":10,
        "product_id":"1",
        "user_id":"1" // to authorized user
    }

Popular Products Routes

[GET] http://localhost:5000/popularProducts

```
