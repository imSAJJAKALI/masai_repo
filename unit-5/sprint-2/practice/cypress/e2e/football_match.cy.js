import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];

const getAuthStore = (win) => win.store.getState().authReducer;
const getMatchStore = (win) => win.store.getState().matchReducer;
const getWatchListStore = (win) => win.store.getState().watchListReducer;

data.forEach(({ submission_link: url, id }) => {
  describe("Football Match", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
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

    it(`Check Initial Redux Store Structure for Matches`, () => {
      cy.window()
        .then(getMatchStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          matches: [],
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Check Initial Redux Store Structure for WatchList`, () => {
      cy.window()
        .then(getWatchListStore)
        .should("deep.equal", {
          watchList: [],
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Get request should be made for matches when home page loads`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/matches*").as("matches");
      cy.wait("@matches").should((xhr) => {
        expect(xhr.status, "successful GET").to.equal(200);
      });
      cy.get("@matches")
        .its("response.body")
        .its("length")
        .should("be.gte", 10);
      cy.then(() => (acc_score += 1));
    });

    it(`isLoading should update accordingly while making request`, () => {
      cy.server();
      cy.route("GET", "/matches*").as("matches");

      cy.window().then(getMatchStore).its("isLoading").should("eq", false);

      cy.wait("@matches");
      cy.wait(1000).then(() => {
        cy.window().then(getMatchStore).its("isLoading").should("eq", false);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`Matches state in store should update when matches loads on homepage`, () => {
      cy.server();
      cy.route("GET", "/matches*").as("matches");

      cy.window().then(getMatchStore).its("matches").should("have.length", 0);

      cy.wait("@matches");
      cy.wait(1000);

      cy.window()
        .then(getMatchStore)
        .its("matches")
        .its("length")
        .should("be.gte", 10);
      cy.then(() => (acc_score += 2));
    });

    it(`All matches should be displayed on home page`, () => {
      cy.get("[data-testid=match-list]")
        .children()
        .its("length")
        .should("be.gte", 10);
      cy.get(".match-card").its("length").should("be.gte", 10);
      cy.get(".competition-name")
        .eq(0)
        .should("have.text", "UEFA Champions League");
      cy.get(".match-year").eq(3).should("have.text", "2015");
      cy.get(".team-1").eq(2).should("have.text", "Borussia Dortmund - 1");
      cy.get(".team-2").eq(4).should("have.text", "Hertha BSC - 0");
      cy.then(() => (acc_score += 1));
    });

    it(`On sorting matches ascending data should render in UI accordingly`, () => {
      cy.get("[data-testid=sort-asc]").click();
      cy.wait(2000);
      cy.get(".match-year").then((res) => {
        let sort = true;
        for (let i = 1; i < res.length; i++) {
          if (+res[i - 1].childNodes[0].data > +res[i].childNodes[0].data) {
            sort = false;
            break;
          }
        }
        expect(sort).to.eq(true);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`On sorting matches ascending data should update in store accordingly`, () => {
      cy.get("[data-testid=sort-asc]").click();
      cy.wait(2000);
      cy.window()
        .then(getMatchStore)
        .its("matches")
        .then((res) => {
          let sort = true;
          for (let i = 1; i < res.length; i++) {
            if (+res[i - 1] > +res[i]) {
              sort = false;
              break;
            }
          }
          expect(sort).to.eq(true);
        });
      cy.then(() => (acc_score += 1));
    });

    it(`On sorting product descending data should render in UI accordingly`, () => {
      cy.get("[data-testid=sort-desc]").click();
      cy.wait(2000);
      cy.get(".match-year").then((res) => {
        let sort = true;
        for (let i = 1; i < res.length; i++) {
          if (+res[i - 1].childNodes[0].data < +res[i].childNodes[0].data) {
            sort = false;
            break;
          }
        }
        expect(sort).to.eq(true);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`On sorting matches descending data should update in store accordingly`, () => {
      cy.get("[data-testid=sort-desc]").click();
      cy.wait(2000);
      cy.window()
        .then(getMatchStore)
        .its("matches")
        .then((res) => {
          let sort = true;
          for (let i = 1; i < res.length; i++) {
            if (+res[i - 1] < +res[i]) {
              sort = false;
              break;
            }
          }
          expect(sort).to.eq(true);
        });
      cy.then(() => (acc_score += 1));
    });

    it(`Pagination should work and data is updated in UI as per page number`, () => {
      cy.get("[data-testid=next-page]").click();
      cy.get("[data-testid=next-page]").click();
      cy.get("[data-testid=next-page]").click();
      cy.wait(2000);
      cy.get("[data-testid=page-number]").should("have.text", "Page No. 4");
      cy.get("[data-testid=match-list]")
        .children()
        .its("length")
        .should("be.eq", 10);
      cy.get(".match-card").its("length").should("be.eq", 10);
      cy.get(".competition-name")
        .eq(0)
        .should("have.text", "English Premier League");
      cy.get(".match-year").eq(3).should("have.text", "2012");
      cy.get(".team-1").eq(2).should("have.text", "Manchester United - 2");
      cy.get(".team-2").eq(4).should("have.text", "Tottenham Hotspur - 1");

      cy.get("[data-testid=previous-page]").click();
      cy.get("[data-testid=previous-page]").click();
      cy.get("[data-testid=previous-page]").click();
      cy.wait(2000);
      cy.get("[data-testid=page-number]").should("have.text", "Page No. 1");
      cy.get("[data-testid=match-list]")
        .children()
        .its("length")
        .should("be.eq", 10);
      cy.get(".match-card").its("length").should("be.eq", 10);
      cy.get(".competition-name")
        .eq(0)
        .should("have.text", "UEFA Champions League");
      cy.get(".match-year").eq(3).should("have.text", "2015");
      cy.get(".team-1").eq(2).should("have.text", "Borussia Dortmund - 1");
      cy.get(".team-2").eq(4).should("have.text", "Hertha BSC - 0");
      cy.then(() => (acc_score += 2));
    });

    it(`Pagination should work and data is updated in store as per page number`, () => {
      cy.get("[data-testid=next-page]").click();
      cy.get("[data-testid=next-page]").click();
      cy.get("[data-testid=next-page]").click();
      cy.wait(2000);
      cy.window()
        .then(getMatchStore)
        .its("matches")
        .then((res) => {
          expect(res[0].competition).to.equal("English Premier League");
          expect(res[3].year).to.equal(2012);
          expect(res[2].team1).to.equal("Manchester United");
          expect(res[4].team2).to.equal("Tottenham Hotspur");
        });

      cy.get("[data-testid=previous-page]").click();
      cy.get("[data-testid=previous-page]").click();
      cy.get("[data-testid=previous-page]").click();
      cy.wait(2000);
      cy.window()
        .then(getMatchStore)
        .its("matches")
        .then((res) => {
          expect(res[0].competition).to.equal("UEFA Champions League");
          expect(res[3].year).to.equal(2015);
          expect(res[2].team1).to.equal("Borussia Dortmund");
          expect(res[4].team2).to.equal("Hertha BSC");
        });

      cy.then(() => (acc_score += 2));
    });

    it(`Sorting and pagination should work together`, () => {
      cy.get("[data-testid=next-page]").click();
      cy.get("[data-testid=next-page]").click();
      cy.get("[data-testid=next-page]").click();
      cy.wait(2000);
      cy.get("[data-testid=sort-asc]").click();
      cy.wait(2000);
      cy.window()
        .then(getMatchStore)
        .its("matches")
        .then((res) => {
          let sort = true;
          for (let i = 1; i < res.length; i++) {
            if (+res[i - 1] > +res[i]) {
              sort = false;
              break;
            }
          }
          expect(sort).to.eq(true);
        });

      cy.wait(2000);
      cy.window()
        .then(getMatchStore)
        .its("matches")
        .then((res) => {
          expect(res[0].competition).to.equal("English Premier League");
          expect(res[9].year).to.equal(2012);
          expect(res[2].team1).to.equal("Norwich City");
          expect(res[4].team2).to.equal("Wigan Athletic");
        });
      cy.then(() => (acc_score += 2));
    });

    it(`On clicking watchList, the match should be added to the watchList store`, () => {
      cy.get(".add-to-watchlist").eq(0).click();
      cy.get(".add-to-watchlist").eq(2).click();

      cy.window()
        .then(getWatchListStore)
        .its("watchList")
        .should("have.length", 2);

      cy.get(".add-to-watchlist").eq(1).click();
      cy.get(".add-to-watchlist").eq(3).click();

      cy.window()
        .then(getWatchListStore)
        .its("watchList")
        .should("have.length", 4);

      cy.window()
        .then(getWatchListStore)
        .its("watchList")
        .then((res) => {
          expect(res[0].competition).to.equal("UEFA Champions League");
          expect(res[1].year).to.equal(2011);
          expect(res[2].team1).to.equal("APOEL Nikosia");
          expect(res[3].team2).to.equal("Hannover 96");
        });

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

    it(`user is redirected to login page while visiting "/watch-list", without authentication`, () => {
      cy.intercept("POST", "**/api/login").as("login");
      cy.visit(`${url}watch-list`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });

      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", true);

      cy.then(() => (acc_score += 1));
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
