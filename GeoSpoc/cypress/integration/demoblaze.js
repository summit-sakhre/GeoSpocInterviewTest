/// <reference types="Cypress" />

import objects from '../integration/Objects/objects'

describe('Interview Demo', function(){

    beforeEach(function(){
        cy.fixture('TestData').then(function(UserCredential){
            this.Credential = UserCredential
        })
      })
    
      var Objects = new objects()

    it('Signup Screen', function(){
        cy.visit(Cypress.env('url'))
        Objects.getSignup().click()
        cy.wait(2000)
        Objects.getSignupUsername().type(this.Credential.username)
        Objects.getSignupPassword().type(this.Credential.password)
        Objects.getRegister().click()
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('This user already exist.');
         })   
         Objects.getSignupClose().click()
         cy.wait(2000)
         Objects.getLogin().click()
         cy.wait(2000)
         Objects.getLoginUsername().type(this.Credential.username)
         Objects.getLoginPassword().type(this.Credential.password)
         Objects.getLoginButtonSuccessfull().click()
         cy.wait(2000)
         Objects.getLogout().click()
         cy.wait(2000)
    })

    it('Placing Order', function(){
        Objects.getLogin().click({force: true})
        cy.wait(2000)
        Objects.getLoginUsername().type(this.Credential.username)
        Objects.getLoginPassword().type(this.Credential.password)
        Objects.getLoginButtonSuccessfull().click()
        cy.wait(2000)
        Objects.getContact().click({force: true})
        cy.wait(2000)
        Objects.getRecipientEmail().type(this.Credential.email)
        Objects.getRecipientName().type(this.Credential.username)
        Objects.getMessage().type(this.Credential.text)
        Objects.getContactBoxClose().click()
        Objects.getCategory().then(function (catagories){
            const ActualData = catagories.text().trim()
            cy.log(ActualData)
            expect(ActualData.includes(this.Credential.catagorey)).to.be.true
          })
        Objects.getProductDiscription().then(function (product){
            const ActualData = product.text().trim()
            cy.log(ActualData)
            expect(ActualData.includes(this.Credential.product)).to.be.true
          })
          Objects.getProduct().click()
          Objects.getAddProducttoCart().click()
          cy.wait(2000)
          cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Product added.');
         })
         Objects.getCart().click()
         cy.get(2000)
         Objects.getVerifyCart().should('have.text', this.Credential.product)
         Objects.getCheckout().click()
         cy.wait(2000)
         Objects.getBillingName().type(this.Credential.username)
         Objects.getBillingCountry().type(this.Credential.username)
         Objects.getBillingCity().type(this.Credential.password)
         Objects.getBillingCardNumber().type(this.Credential.cardNo)
         Objects.getBillingCardMonth().type(this.Credential.cardNo)
         Objects.getBillingCardYear().type(this.Credential.cardNo)
         Objects.getProceed().click()
         Objects.getConfirmOrder().click()
         Objects.getLogout().click({force: true})
    })
})