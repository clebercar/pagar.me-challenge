# Payment Service Provider 

Pagar.me Challenge to create a Payment Service Provider(PSP)

## Requirements
- Docker (https://docs.docker.com/docker-for-windows/install/)
- Docker-compose (https://docs.docker.com/compose/install/)

## Get started

Clone and access the project folder:

```bash
git clone https://github.com/clebercar/pagar.me-challenge.git
cd pagar.me-challenge
```

Duplicate and rename the .env-example file to .env and the .env.test.example to .env.test.

- .env-example .env
- .env.test.example .env.test

Start the application with docker-compose.

- docker-compose up --build

Run migrations
```
docker exec -it app-psp yarn sequelize db:migrations
```

You can now access the project from port 3000

- http://localhost:3000

## Run tests

```
docker exec -it app-psp yarn test
```

## Routes 

### Create Users

- Method: POST
- URI
    ```
    /api/v1/users
    ```
- Parameters
    - name 
    - email 
    - password_hash

### Authentication
- Method: POST
- URI
    ```
    /api/v1/auth
    ```
- Parameters
  - email 
  - password 

### Create Transactions
- Method: POST
- URI
    ```
    /api/v1/transactions
    ```
- Parameters
  - value 
  - description 
  - payment_type
  - card_number 
  - name_on_card 
  - expiration_date 
  - cvv
### Lists all user transactions
- Method: GET
- URI
    ```
    /api/v1/transactions
    ```
### Changing payable for paid
- Method: GET
- URI
    ```
    /api/v1/payables/change-payables-to-paid
    ```
### List user balances
- Method: GET
- URI
    ```
    /api/v1/payables/change-payables-to-paid
    ```