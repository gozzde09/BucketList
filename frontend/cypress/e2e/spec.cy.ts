describe("template spec", () => {
  // before(() => {
  //   cy.exec("npm run dev");
  //   cy.wait(5000);
  // });
  // it("passes", () => {
  //   cy.visit("http://localhost:5173/");
  // });

  it("should render the title", () => {
    cy.contains("h1", "Bucket List").should("be.visible");
  });
});
