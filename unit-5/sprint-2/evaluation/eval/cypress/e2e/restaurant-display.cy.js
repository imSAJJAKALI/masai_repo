import data from "../../submissionData.json";

const getAuthStore = (win) => win.store.getState().authReducer;
const getRestaurantStore = (win) => win.store.getState().restaurantReducer;

import page1 from "../fixtures/page1.json";
import page5 from "../fixtures/page5.json";
import page12 from "../fixtures/page12.json";

// const data = [{ submission_link: "http://localhost:3000", id: "shantilal" }];

data.forEach(({ submission_link: url, id }) => {
  describe("book store", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);

      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });

      cy.window().its("store").should("exist");

      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Check Initial Redux Store Structure for Restaurants`, () => {
      cy.window()
        .then(getRestaurantStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          restaurants: [],
          totalPages: 0,
        })

        .then(() => {
          acc_score += 1;
        });
    });

    it(`Check Initial Redux Store Structure for Authentication`, () => {
      cy.window()
        .then(getAuthStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          isAuth: false,
          token: "",
        })

        .then(() => {
          acc_score += 1;
        });
    });

    it(`Get request should be made for restaurants when home page loads`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "**/getrestaurants?**").as("getRestaurants");
      cy.wait("@getRestaurants").should((res) => {
        expect(res.status, "successful GET").to.equal(200);
        expect(res.url, "get url").to.contain("getrestaurants");
        expect(res.url, "get url").to.contain("page=1");
        expect(res.url, "get url").to.contain("limit=9");
      });

      cy.get("@getRestaurants")
        .its("response.body.data")
        .should("have.length", 9);

      cy.get("@getRestaurants")
        .its("response.body.totalPages")
        .should("eq", 12);

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`Restaurants state in store should update when restaurants loads on homepage`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "**/getrestaurants?**").as("getRestaurants");

      cy.window()
        .then(getRestaurantStore)
        .its("restaurants")
        .should("have.length", 0);

      cy.wait("@getRestaurants");
      cy.wait(1000);

      cy.window()
        .then(getRestaurantStore)
        .its("restaurants")
        .should("have.length", 9);

      cy.window().then(getRestaurantStore).its("totalPages").should("eq", 12);

      cy.then(() => (acc_score += 2));
    });

    it(`Loading indicator should be there while homepage data is loading`, () => {
      cy.url().should("eq", url);

      cy.intercept("GET", "**/getrestaurants?**", async (req) => {
        req.reply((res) => {
          res.setDelay(1000);
        });
      }).as("getRestaurants");

      cy.get(".loading_indicator")
        .should("exist")
        .and("have.text", "Loading...");

      cy.wait("@getRestaurants");

      cy.get(".restaurants_wrapper").should("exist");

      cy.then(() => (acc_score += 1));
    });

    it(`All restaurants should be displayed on home page`, () => {
      cy.get(".loading_indicator").should("not.exist");

      cy.get(".restaurants_wrapper").children().should("have.length", 9);

      cy.get(".restaurant_card").should("have.length", 9);

      cy.get(".restaurant_card").each((child, index) => {
        cy.get(".image").should("have.attr", "src", page1[index].image);
        cy.wrap(child).find(".name").should("contain", page1[index].name);
        cy.wrap(child).find(".type").should("contain", page1[index].type);
        cy.wrap(child)
          .find(".votes")
          .should("contain", page1[index].number_of_votes);
        cy.wrap(child)
          .find(".price")
          .should("contain", page1[index].price_starts_from);
        cy.wrap(child).find(".rating").should("contain", page1[index].rating);
      });

      cy.then(() => (acc_score += 2));
    });

    it(`All pagination buttons should be displayed on home page`, () => {
      cy.get(".pagination_wrapper").children().should("have.length", 12);

      cy.then(() => (acc_score += 1));
    });

    it(`Current button should be disabled for current page`, () => {
      cy.get(".pagination_wrapper").children().should("have.length", 12);

      cy.get(".pagination_wrapper")
        .children()
        .eq(0)
        .should("be.disabled")
        .and("have.css", "backgroundColor", "rgb(255, 0, 0)");

      cy.get(".pagination_wrapper").children().eq(3).click();
      cy.get(".pagination_wrapper")
        .children()
        .eq(3)
        .should("be.disabled")
        .and("have.css", "backgroundColor", "rgb(255, 0, 0)");

      cy.get(".pagination_wrapper").children().eq(6).click();
      cy.get(".pagination_wrapper")
        .children()
        .eq(6)
        .should("be.disabled")
        .and("have.css", "backgroundColor", "rgb(255, 0, 0)");

      cy.then(() => (acc_score += 1));
    });

    it(`All restaurants should be displayed on home page for 5th page`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "**/getrestaurants?**").as("getRestaurants");

      cy.wait("@getRestaurants");

      cy.get(".pagination_wrapper").children().eq(4).click();

      cy.wait("@getRestaurants").should((res) => {
        expect(res.status, "successful GET").to.equal(200);
        expect(res.url, "get url").to.contain("getrestaurants");
        expect(res.url, "get url").to.contain("page=5");
        expect(res.url, "get url").to.contain("limit=9");
      });

      cy.get(".restaurants_wrapper").children().should("have.length", 9);

      cy.get(".restaurant_card").should("have.length", 9);

      cy.get(".restaurant_card").each((child, index) => {
        cy.get(".image").should("have.attr", "src", page5[index].image);
        cy.wrap(child).find(".name").should("contain", page5[index].name);
        cy.wrap(child).find(".type").should("contain", page5[index].type);
        cy.wrap(child)
          .find(".votes")
          .should("contain", page5[index].number_of_votes);
        cy.wrap(child)
          .find(".price")
          .should("contain", page5[index].price_starts_from);
        cy.wrap(child).find(".rating").should("contain", page5[index].rating);
      });

      cy.then(() => (acc_score += 2));
    });

    it(`All restaurants should be displayed on home page for last page`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "**/getrestaurants?**").as("getRestaurants");

      cy.wait("@getRestaurants");

      cy.get(".pagination_wrapper").children().last().click();

      cy.wait("@getRestaurants").should((res) => {
        expect(res.status, "successful GET").to.equal(200);
        expect(res.url, "get url").to.contain("getrestaurants");
        expect(res.url, "get url").to.contain("page=12");
        expect(res.url, "get url").to.contain("limit=9");
      });

      cy.get(".restaurants_wrapper").children().should("have.length", 1);

      cy.get(".restaurant_card").should("have.length", 1);

      cy.get(".restaurant_card").each((child, index) => {
        cy.get(".image").should("have.attr", "src", page12[index].image);
        cy.wrap(child).find(".name").should("contain", page12[index].name);
        cy.wrap(child).find(".type").should("contain", page12[index].type);
        cy.wrap(child)
          .find(".votes")
          .should("contain", page12[index].number_of_votes);
        cy.wrap(child)
          .find(".price")
          .should("contain", page12[index].price_starts_from);
        cy.wrap(child).find(".rating").should("contain", page12[index].rating);
      });

      cy.then(() => (acc_score += 2));
    });

    it(`user is redirected to login page while visiting restaurant/:id, without authentication `, () => {
      cy.visit(`${url}restaurant/5`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });

      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.then(() => (acc_score += 2));
    });

    it(`On Login the store authReducer state should update accordingly`, () => {
      cy.window().then(getAuthStore).its("isAuth").should("equal", false);
      cy.window().then(getAuthStore).its("token").should("equal", "");

      cy.intercept("POST", "**/api/login").as("login");

      cy.visit(`${url}login`);
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", true);

      cy.then(() => (acc_score += 2));
    });

    it("Check 1 for /restaurant/:id (dynamic route) if it working fine after login", () => {
      cy.intercept("GET", "**/getrestaurants/*").as("getSingleRestaurant");

      cy.window()
        .its("store")
        .invoke("dispatch", { type: "LOGIN_SUCCESS", payload: "token" });

      cy.wait(1000);
      cy.get(".restaurants_wrapper").should("exist").children().first().click();

      cy.url().should("eq", url + "restaurant/1");

      cy.wait("@getSingleRestaurant");

      cy.get(".restaurant_single_card").within(() => {
        cy.get(".image").should("have.attr", "src", page1[0].image);
        cy.get(".name").should("contain", page1[0].name);
        cy.get(".type").should("contain", page1[0].type);
        cy.get(".votes").should("contain", page1[0].number_of_votes);
        cy.get(".price").should("contain", page1[0].price_starts_from);
        cy.get(".rating").should("contain", page1[0].rating);
      });

      cy.then(() => (acc_score += 2));
    });

    it("Check 2 for /restaurant/:id (dynamic route) if it working fine ", () => {
      cy.intercept("GET", "**/getrestaurants/*").as("getSingleRestaurant");
      cy.wait(1000);
      cy.window()
        .its("store")
        .invoke("dispatch", { type: "LOGIN_SUCCESS", payload: "token" });

      cy.wait(1000);
      cy.get(".restaurants_wrapper").should("exist").children().eq(5).click();

      cy.url().should("eq", url + "restaurant/6");

      cy.wait("@getSingleRestaurant");

      cy.get(".restaurant_single_card").within(() => {
        cy.get(".image").should("have.attr", "src", page1[5].image);
        cy.get(".name").should("contain", page1[5].name);
        cy.get(".type").should("contain", page1[5].type);
        cy.get(".votes").should("contain", page1[5].number_of_votes);
        cy.get(".price").should("contain", page1[5].price_starts_from);
        cy.get(".rating").should("contain", page1[5].rating);
      });

      cy.then(() => (acc_score += 1));
    });

    it("On booking restaurant a success message should show", () => {
      cy.intercept("GET", "**/getrestaurants/*").as("getSingleRestaurant");
      cy.wait(1000);
      cy.window()
        .its("store")
        .invoke("dispatch", { type: "LOGIN_SUCCESS", payload: "token" });
      cy.wait(1000);

      cy.get(".restaurants_wrapper").should("exist").children().eq(2).click();

      cy.url().should("eq", url + "restaurant/3");

      cy.get(".success_msg").should("not.exist");
      cy.get(".go_back").should("not.exist");

      cy.wait("@getSingleRestaurant");

      cy.get(".book_now_btn").should("exist").click();

      cy.get(".success_msg").should(
        "have.text",
        "Restaurant Booked Successfully !!"
      );

      cy.get(".book_now_btn").should("not.exist");

      cy.get(".go_back").should("exist").and("have.attr", "href", "/");

      cy.then(() => (acc_score += 2));
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
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
      //////////////////
    });
  });
});
