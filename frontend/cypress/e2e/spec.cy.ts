describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("should render the title", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("h1", "BucketList").should("be.visible");
  });
});
