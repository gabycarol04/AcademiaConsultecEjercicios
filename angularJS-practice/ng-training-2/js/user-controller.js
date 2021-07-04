/* app.controller('UserController', ['$scope', function($scope){
    $scope.aula = "Las Tablas";
}]); */
app.controller('UserController', function($scope){

    //Parte 1: con Scope
    $scope.aula = "Programadores";
    $scope.languages = ['HTML', 'JS', 'TS', 'PYTHON', 'PHP'];
});