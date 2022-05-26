// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


  describe("User Onboarding App", () => {

    // reset state before every test
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    })
    
    //inputs
    const firstNameInput = () => cy.get(`input[name="first_name"]`);
    const lastNameInput = () => cy.get(`input[name="last_name"]`);
    const emailInput = () => cy.get(`input[name="email"]`);
    const passwordInput = () => cy.get(`input[name="password"]`);
    const roleInput = () => cy.get("select");
    const beefInput = () => cy.get(`input[value="beef"]`);
    const chickenInput = () => cy.get(`input[value="chicken"]`);
    const vegetarianInput = () => cy.get(`input[value="vegetarian"]`);
    const termsCheckbox = () => cy.get(`input[name="terms"]`);
    const button = () => cy.get("button");

    it("sanity test", () => {

      expect(2 + 2).to.equal(4);

    })

    it("Elements we need are showing", () => {
      firstNameInput().should("exist");
      lastNameInput().should("exist");
      emailInput().should("exist");
      passwordInput().should("exist");
      roleInput().should("exist");
      beefInput().should("exist");
      chickenInput().should("exist");
      vegetarianInput().should("exist");
      termsCheckbox().should("exist");
      button().should("exist");

    })

    describe("testing inputs", () => {
      
      it("Test first name input", () => {
        firstNameInput()
          .should("have.value", "")
          .type("Tim")
          .should("have.value", "Tim")
      })

      it("Test last name input", () => {
        lastNameInput()
          .should("have.value", "")
          .type("Sansone")
          .should("have.value", "Sansone");
      })
  
      it("Test email input", () => {
        
        emailInput()
          .should("have.value", "")
          .type("tim.sansone@gmail.com")
          .should("have.value", "tim.sansone@gmail.com");
      })

      it("Test password input", () => {
        passwordInput()
          .should("have.value", "")
          .type("abc123")
          .should("have.value", "abc123");
      })

      it("Test role input", () => {
        roleInput().select("Captain");
        cy.contains("Captain");
        roleInput().select("Mate");
        cy.contains("Mate");
        roleInput().select("Bosun");
        cy.contains("Bosun");
        roleInput().select("Diver");
        cy.contains("Diver");
      })

      it("Test if user can select an inflight meal", () => {
        beefInput().should("not.be.checked").check().should("be.checked");
        chickenInput().should("not.be.checked").check().should("be.checked");
        vegetarianInput().should("not.be.checked").check().should("be.checked");
      })

      it("Test if user can check terms of service", () => {
        termsCheckbox()
          .should("not.be.checked")
          .click()
          .should("be.checked");
      })

    })
    
    describe("Test if user can submit the form, display the entry, and delete the entry", () => {

      it("Navigate to the page", () => {
        cy.visit("http://localhost:3000");
        cy.contains("The Directory");
      })

      it("Submit the form, view entry, delete entry", () => {
        firstNameInput().type("Tim");
        lastNameInput().type("Sansone");
        emailInput().type("tim.sansone@gmail.com");
        roleInput().select("Bosun");
        beefInput().check();
        termsCheckbox().check();
        button().click();
 
        // check if new user is displayed in user card
        cy.contains("Name: Tim Sansone");
        cy.contains("Email: tim.sansone@gmail.com");
        cy.contains("Role: bosun");
        cy.contains("Inflight Meal: beef");

        // click "remove" and check to see that user card is removed
        cy.get(".user > button").click();
        cy.get("user").should("not.exist");

      })

    })

    describe("Test form validation", () => {
      
      it("Check if button is disabled/not disabled appropriately", () => {
        button().should("be.disabled");
        firstNameInput().type("Tim");
        lastNameInput().type("Sansone");
        emailInput().type("tim.sansone@gmail.com");
        roleInput().select("Bosun");
        beefInput().check();
        termsCheckbox().check();
        button().should("not.be.disabled");
      })

      it("Check for error messages for incomplete or incorrect inputs", () => {
        firstNameInput().type("Tim").clear();
        cy.contains("Please enter your first name");
        lastNameInput().type("Sansone").clear();
        cy.contains("Please enter your last name");
        emailInput().type("tim sansone's email");
        cy.contains("Please enter a valid email");
        emailInput().clear();
        cy.contains("Please enter your email");
        roleInput().select("Mate").select("-- Select A Role --");
        cy.contains("Please select a role");
        vegetarianInput().check();
        cy.contains("Please select a meat option");
        termsCheckbox().check().uncheck();
        cy.contains("Please accept the Terms and Conditions");
        
      })

    })

  })