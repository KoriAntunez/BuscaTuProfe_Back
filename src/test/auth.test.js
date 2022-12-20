/*
npm install chai --save-dev
npm install chai-http --save-dev
npm install mocha --save-dev
*/

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../index");

//Assertion Style
chai.should();
chai.use(chaiHttp);

// User credentials for the test
var test_name = "Kori";
var test_surname = "Antunez";
var test_email = "kori.antunez@gmail.com";
var test_password = "12345678";
var word = Math.random() * (99 - 11);

describe("Auth Controller API", () => {
  /**
   * Test the POST route /api/auth/signup
   */

  describe("Register new user", () => {
    it("It should POST /api/auth/signup", async function () {
      var random = word.toString();

      chai
        .request(server)
        .post("/api/auth/signup")
        .send({
          name: test_name,
          surname: test_surname,
          email: random + "@gmail.com",
          password: test_password,
        })
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });

  describe("Register existing user", () => {
    it("It should POST /api/auth/signup", async function () {
      var random = word.toString();

      chai
        .request(server)
        .post("/api/auth/signup")
        .send({
          name: test_name,
          surname: test_surname,
          email: test_email,
          password: test_password,
        })
        .end((err, response) => {
          response.should.have.status(400);
        });
    });
  });

  /**
   * Test's the POST route /api/auth/signin
   */

  describe("Login with existing user", () => {
    it("It should POST /api/auth/signin", async function () {
      chai
        .request(server)
        .post("/api/auth/signin")
        .send({
          email: test_email,
          password: test_password,
        })
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });

  describe("Login with not existing user", () => {
    it("It should POST /api/auth/signin", async function () {
      var random = word.toString();

      chai
        .request(server)
        .post("/api/auth/signin")
        .send({
          email: random + "@gmail.com",
          password: random,
        })
        .end((err, response) => {
          response.should.have.status(400);
        });
    });
  });

  describe("Login with password does not match", () => {
    it("It should POST /api/auth/signin", async function () {
      var random = word.toString();

      chai
        .request(server)
        .post("/api/auth/signin")
        .send({
          email: test_email,
          password: random,
        })
        .end((err, response) => {
          response.should.have.status(400);
        });
    });
  });
});
