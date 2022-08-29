# express-practice

I'm following [this](https://www.youtube.com/watch?v=vAV4Vy4jfkc) tutorial to get a first impression on SOLID and express.

## Getting started

- Clone the repo
   ```sh
   git clone https://github.com/FelipeLimaMarques/express-practice.git
   ```
- Install packages
   ```sh
   npm install
   ```
- Run
   ```sh
   npm start
   ```
   
## Trying it out

There are two endpoints, a `GET /` and a `POST /users`.
`POST` receives a body with `name`, `email` and `password`.
No database was used.
You can use [mailtrap](https://mailtrap.io/) to receive a email after you create a user.
