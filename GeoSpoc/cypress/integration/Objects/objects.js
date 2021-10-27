class objects{

    getSignup(){
        return cy.get('#signin2')
    }

    getSignupUsername(){
        return cy.get('#sign-username')
    }

    getSignupPassword(){
        return cy.get('#sign-password')
    }

    getRegister(){
        return cy.get('button[onclick="register()"]')
    }

    getSignupClose(){
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }

    getLogin(){
        return cy.get('#login2')
    }

    getLoginUsername(){
        return cy.get('#loginusername')
    }

    getLoginPassword(){
        return cy.get('#loginpassword')
    }

    getLoginButtonSuccessfull(){
        return cy.get('button[onclick="logIn()"]')
    }

    getLogout(){
        return cy.get('#logout2')
    }

    getContact(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    getRecipientEmail(){
        return cy.get('#recipient-email')
    }

    getRecipientName(){
        return cy.get('#recipient-name')
    }

    getMessage(){
        return cy.get('#message-text')
    }

    getContactBoxClose(){
        return cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }

    getCategory(){
        return cy.get('#contcont > :nth-child(1) > .col-lg-3')
    }

    getProductDiscription(){
        return cy.get(':nth-child(1) > .card > .card-block')
    }

    getProduct(){
        return cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
    }

    getAddProducttoCart(){
        return cy.get('.col-sm-12 > .btn')
    }

    getCart(){
        return cy.get('#cartur')
    }

    getVerifyCart(){
        return cy.get('#tbodyid > :nth-child(1) > :nth-child(2)')
    }

    getCheckout(){
        return cy.get('.col-lg-1 > .btn')
    }

    getBillingName(){
        return cy.get('#name')
    }

    getBillingCountry(){
        return cy.get('#country')
    }

    getBillingCity(){
        return cy.get('#city')
    }

    getBillingCardNumber(){
        return cy.get('#card')
    }

    getBillingCardMonth(){
        return cy.get('#month')
    }

    getBillingCardYear(){
        return cy.get('#year')
    }

    getProceed(){
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    getConfirmOrder(){
        return cy.get('.confirm')
    }
}
export default objects;