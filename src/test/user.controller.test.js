let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

//Assertion Style
chai.should();
chai.use(chaiHttp);


describe('User Controller API', () => {
    describe("List's user's", () => {
        it('It should GET /api/users', async function () {
    
          chai.request(server)
            .get("/api/users")
            .end((err, response) => {
              response.should.have.status(200);
            })
        })
      })
})