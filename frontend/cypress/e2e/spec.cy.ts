describe("template spec", () => {
  // before(() => {
  //   cy.exec("npm run dev");
  //   cy.wait(5000);
  // });
  // it("passes", () => {
  //   cy.visit("http://localhost:5173/");
  // });
  cy.contains("h2", "Bucket List").should("be.visible");
});
