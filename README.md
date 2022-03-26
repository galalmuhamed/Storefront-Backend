# Storefront Backend ? Project

To Get Starting This App:

1. install all project dependencies with `npm install`

2. Set up Database

   1. Create user
      - `CREATE USER galal WITH ENCRYPTED PASSWORD 'password';`
   2. Create Database we need two databases for dev and test
      - `CREATE DATABASE ecommerce_app;`
      - `CREATE DATABASE ecommerce_app_test;`
   3. To give database to me
      - `ALTER DATABASE ecommerce_app OWNER TO galal;`
      - `ALTER DATABASE ecommerce_app_test OWNER TO galal;`
   4. Create Tables
      - `npm run migrations`

3. My Enviroment Variables

```
    PORT=5000
    ENV=dev
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5432
    POSTGRES_DB=ecommerce_app
    POSTGRES_DB_TEST= ecommerce_app_test
    POSTGRES_USER=galal
    POSTGRES_PASSWORD=password
    BCRYPT_PASSWORD=this-is-strongest-password
    SALT_ROUNDS=10
    TOKEN_SECRET=helloworld32141
```

4. server work on port: `5000` , database work on port `5432`

5. to start server

   - `node dist/server`
   - `npm run watch`

6. Testing
   - `npm run test`
