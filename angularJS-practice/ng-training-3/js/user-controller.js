app.controller('UserController', function($scope){

    //Ciclo de vida
        //Este on init no existe en html xq es algo propio de javsascript
        this.$onInit = function() {
            console.log("Este metodo se ejecuta de forma automatica al construirse el controlador");
        }
        this.$onDestroy = function() {
            console.log("Este metodo se ejecuta de forma automatica al destruirse el controlador");
        }

    //Parte 1: Ocultar etiqueta con ng-if
    $scope.isShow = true;
    $scope.Hide = function(){
        $scope.isShow = !$scope.isShow;
    }
});