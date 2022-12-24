const { expect } = require("chai");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../index");

//Assertion Style
chai.should();
chai.use(chaiHttp);

let idUser = '63a5450ea6e1d7da09319f65'
let test_name = "Rash";
let test_surname = "Fernandez";
let test_country = "US";
let test_city = "San Francisco";
let test_biography = "Docente Universitario  con más de 10 años de experiencia";
let test_network = "https://coinmarketcap.com/currencies/page-network/"

describe("Tutor Controller API", () => {
  /**
   * Test's the GET route /api/tutors
   */
  describe("List's tutor's", () => {
    it("It should GET /api/tutors", async function () {
      chai
        .request(server)
        .get("/api/tutors")
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });

  /**
   * Test's the POST route /api/tutors
   */

  describe("Create new profile tutor", () => {
    it("It should POST /api/tutors", async function () {
      chai
        .request(server)
        .post("/api/tutors/"+idUser)
        .send({
          name: test_name,
          surname: test_surname,
          country: test_country,
          city: test_city,
          biography: test_biography,
          network: test_network
        })
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });

  describe("Search tutor by id user", () => {
    it("It should GET /api/tutors", async function () {
      chai
        .request(server)
        .get("/api/tutors/view/"+idUser)
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });

});
