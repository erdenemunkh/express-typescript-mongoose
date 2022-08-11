const expect = require("chai").expect;
const request = require("request");
let base_url = "http://app:4000";
//"http://localhost:3030";

it("Main page content", function (done) {
  request(`${base_url}/api`, function (error, response, body) {
    console.log(error);
    console.log(error, "err");
    console.log(body);
    var jsonData = JSON.parse(body);

    expect(jsonData).to.property("message").equal("Welcome to REST API");
    done();
  });
});
