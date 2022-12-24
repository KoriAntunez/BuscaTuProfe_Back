const { expect } = require("chai");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../index");

//Assertion Style
chai.should();
chai.use(chaiHttp);

let idUser = '6394082b39d3726e7ced769e'
var test_name = "Rash";
var test_surname = "Fernandez";
var test_email = "rash.fernandez@gmail.com";
var test_password = "rashFer123";


describe("User Controller API", () => {
  /**
   * Test's the GET route /api/services
   */
  describe("List's all service's", () => {
    it("It should GET /api/users", async function () {
      chai
        .request(server)
        .get("/api/users")
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });

  /**
   * Test's the PUT route /api/users
   */

  describe("Update user", () => {
    it("It should PUT /api/users", async function () {
      chai
        .request(server)
        .put("/api/users/"+idUser)
        .send({
          name: test_name,
          surname: test_surname,
          email: test_email,
          password: test_password,
        })
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });


});
