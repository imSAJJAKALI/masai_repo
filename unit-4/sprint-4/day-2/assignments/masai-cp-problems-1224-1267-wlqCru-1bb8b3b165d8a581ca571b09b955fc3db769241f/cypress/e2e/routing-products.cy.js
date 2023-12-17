/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Movie Search App", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
    });

    it("Check if movie search is working properly", () => {
      cy.clock()
      cy.intercept("GET", `${server_url}movies?q=s`).as("getMovies");
      cy.visit(url);
      cy.get('[data-testid="search_key"]').type("s");
      cy.tick(1000)
      cy.wait("@getMovies");
  
      cy.get('[data-testid="movie_results"]')
        .children()
        .should("have.length", 2);
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check if debouncing in search is working properly", () => {
      cy.clock()
      cy.intercept("GET", `${server_url}movies?q=man`).as("getMovies");
      cy.visit(url);
      cy.get('[data-testid="search_key"]').type("man");
      cy.get('[data-testid="movie_results"]')
      .children()
      .should("have.length", 0);

      cy.tick(1000)
      cy.wait("@getMovies");
      cy.get('[data-testid="movie_results"]')
        .children()
        .should("have.length", 6);
        
      cy.then(() => {
        acc_score += 3;
      });
    });


    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
