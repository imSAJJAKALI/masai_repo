import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];
import db from "../fixtures/seedDatabase.json";
import postData from "../fixtures/postData.json";

data.forEach(({ submission_link: url, id }) => {
  describe("Library Management", () => {
    let acc_score = 1;
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("GET request is made on homepage to fetch the books data", () => {
      cy.intercept("GET", "**/books", db).as("getRequest");
      cy.visit(url);
      cy.wait("@getRequest").then(({ request, response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body.length).to.eq(6);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("All the response from the server should be displayed on home page", () => {
      cy.intercept("GET", "**/books", db).as("getRequest");
      cy.visit(url);
      cy.wait("@getRequest").then(() => {
        cy.get("[data-testid=book-list]").children().should("have.length", 6);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Correct page name should be displayed on the navbar on homepage", () => {
      cy.visit(url);
      cy.get("[data-testid=page-name]").should("have.text", "Home Page");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Correct page name should be displayed on the navbar on add-book page", () => {
      cy.visit(`${url}add-book`);
      cy.get("[data-testid=page-name]").should("have.text", "Add New Book");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Form should be present to take book details on add-book page", () => {
      cy.visit(`${url}add-book`);
      cy.get("form").should("exist");
      cy.get("input.book-name").should("exist");
      cy.get("input.book-image").should("exist");
      cy.get("input.book-author").should("exist");
      cy.get("input.book-chapter").should("exist");
      cy.get("input.book-quantity").should("exist");
      cy.get("button.submit-form").should("exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("User should be able to add new book to the database", () => {
      cy.intercept("GET", "**/books", db).as("getRequest");
      cy.visit(`${url}add-book`);
      cy.intercept("POST", "**/books**", postData).as("postRequest");
      cy.get("input.book-name").type("Shoe-9");
      cy.get("input.book-image").type(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPQQL2RxlJlPLeIMtK80ttEj8YNhwohIYqM6NlKS6PUtyASHzc-f_e2tPs6t5cfjxJ3U&usqp=CAU"
      );
      cy.get("input.book-author").type("Test Author");
      cy.get("input.book-chapter").type(5);
      cy.get("input.book-quantity").type(5);
      cy.get("button.submit-form")
        .click()
        .then(() => {
          cy.wait("@postRequest").then(({ request, response }) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body.name).to.eq(postData.name);
            expect(response.body.image).to.eq(postData.image);
            expect(response.body.author).to.eq(postData.author);
            expect(response.body.chapter).to.eq(postData.chapter);
            expect(response.body.quantity).to.eq(postData.quantity);
          });
        });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Patch request should be made and DOM should be updated when increase quantity button is clicked", () => {
      cy.intercept("GET", "**/books", db).as("getRequest");
      cy.intercept("PATCH", "**/books/1", {
        ...db[0],
        quantity: db[0].quantity + 1,
      }).as("patchRequest");
      cy.visit(url);
      cy.wait("@getRequest");
      cy.get("[data-testid=increase-quantity]").eq(0).click();
      cy.wait("@patchRequest");
      cy.get(".book-quantity")
        .eq(0)
        .should("have.text", db[0].quantity + 1);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Patch request should be made and DOM should be updated when decrease quantity button is clicked", () => {
      cy.intercept("GET", "**/books", db).as("getRequest");
      cy.intercept("PATCH", "**/books/2", {
        ...db[1],
        quantity: db[1].quantity - 1,
      }).as("patchRequest");
      cy.visit(url);
      cy.wait("@getRequest");
      cy.get("[data-testid=decrease-quantity]").eq(1).click();
      cy.wait("@patchRequest");
      cy.get(".book-quantity")
        .eq(1)
        .should("have.text", db[1].quantity - 1);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Increase quantity button should be disabled when quantity reaches 10", () => {
      cy.intercept("GET", "**/books", db).as("getRequest");
      cy.intercept("PATCH", "**/books/2", {
        ...db[1],
        quantity: 10,
      }).as("patchRequest");
      cy.visit(url);
      cy.wait("@getRequest");
      cy.get("[data-testid=increase-quantity]").eq(1).click({ force: true });
      cy.wait("@patchRequest").then(() => {
        cy.get("[data-testid=increase-quantity]").eq(1).should("be.disabled");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Decrease quantity button should be disabled when quantity reaches 0", () => {
      cy.intercept("GET", "**/books", db).as("getRequest");
      cy.intercept("PATCH", "**/books/1", {
        ...db[1],
        quantity: 0,
      }).as("patchRequest");
      cy.visit(url);
      cy.wait("@getRequest");
      cy.get("[data-testid=decrease-quantity]").eq(0).click({ force: true });
      cy.wait("@patchRequest").then(() => {
        cy.wait(2000);
        cy.get("[data-testid=decrease-quantity]").eq(0).should("be.disabled");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Delete request should be made and DOM should be updated when delete button is clicked", () => {
      cy.intercept("GET", "**/books", db).as("getRequest");
      cy.intercept("DELETE", "**/books/2", {}).as("deleteRequest");
      cy.visit(url);
      cy.wait("@getRequest");
      cy.get("[data-testid=delete-button]").eq(1).click();
      cy.wait("@deleteRequest").then(() => {
        cy.get("[data-testid=book-list").children().should("have.length", 5);
        cy.get(".book-name")
          .eq(1)
          .should("not.have.text", "Backend Developement");
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      //////////// Do not change this
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      ////////////////
    });
  });
});
