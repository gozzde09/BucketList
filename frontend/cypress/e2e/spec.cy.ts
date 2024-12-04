describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
  });

  it("should render the title", () => {
    cy.contains("h1", "BucketList").should("be.visible");
  });
});
