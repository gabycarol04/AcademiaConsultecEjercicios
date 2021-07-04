app.component('componenteImplicito', {
    templateUrl:'../componente-implicito.html'
 });


//CODIGO DE LA CLASE
/* function BankComponent($scope){
    var ctrl = this;
    $scope.changeValue = function(){
        console.log("Se ejecuto botón del componente");
        ctrl.testValue = ctrl.testValue + '?';
    }
}
app.component('bankComponent', {
    templateUrl:'./bank-component.html',
    bindings: {
        testValue: '@',
        //entrada: '=',
        //salida: '&'
    },
    controller: BankComponent
    // controller: function($scope){
    //    console.log("Se ejecuto botón del componente")
    //}
}); */