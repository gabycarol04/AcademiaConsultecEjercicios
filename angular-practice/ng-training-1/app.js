angular.module("invoice", [])
.controller('InvoiceController', function InvoiceController(){
    this.qty = 1;
    this.cost =2;
    
    this.currency = 'EUR';
    this.curOption = ['USD', 'EUR', 'CNY']

    this.usdForeign = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
    }

    this.total = function total(outCurr) {
        console.log("Funcion total");
        return this.convertCurrency(this.qty * this.cost, this.currency, outCurr);
    };
    this.convertCurrency = function convertCurrency(amount, currency, outCurr) {
        console.log("Funcion convertCurrency");
        return amount * this.usdForeign[outCurr] / this.usdForeign[currency];
    };

    this.pay = function pay(){
        window.alert('Thanks!');
        console.log("Gracias por su compra");
    };
});