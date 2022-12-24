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


describe("Service Controller API", () => {
  /**
   * Test's the GET route /api/services
   */
  describe("List's all service's", () => {
    it("It should GET /api/services", async function () {
      chai
        .request(server)
        .get("/api/services")
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });

  /**
   * Test's the POST route /api/users
   */

  describe("Update user", () => {
    it("It should POST /api/services", async function () {
      chai
        .request(server)
        .post("/api/services/"+idUser)
        .send({
          title: 'Developer',
          description: 'This description',
          image: '',
          price: '20',
          quanty_max: '3',
          tutor_id: '63a69ec27386f9b683b0e4fd'
        })
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });

  /**
   * Test's the GET route /api/services
   */
  describe("Search service's by id", () => {
    it("It should GET /api/services", async function () {
      chai
        .request(server)
        .get("/api/services/"+idUser)
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });

  describe("Update service", () => {
    it("It should PUT /api/services", async function () {
      chai
        .request(server)
        .put("/api/services/"+idUser)
        .send({
          title: 'Java Developer',
          description: 'This description',
          image: '',
          price: '30',
          quanty_max: '3',
          tutor_id: '63a69ec27386f9b683b0e4fd'
        })
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });


});
