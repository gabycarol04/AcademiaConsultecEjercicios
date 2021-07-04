/* app.component('componenteImplicito', {
    templateUrl: '../componente-implicito.html'
}); */

app.component('componenteImplicito', {
    templateUrl:'../componente-implicito.html'
    /* bindings: {
        testValue: '@',
        //entrada: '=',
        //salida: '&'
    },
    controller: BankComponent */
    /* controller: function($scope){
        console.log("Se ejecuto botón del componente")
    } */
 });



//Funciones
/* function BankComponent($scope){
    var ctrl = this;
    $scope.changeValue = function(){
        console.log("Se ejecuto botón del componente");
        ctrl.testValue = ctrl.testValue + '?';
    }
}
 */ 