angular.module('pokemonBattle', [])
 
  .controller('MainCtrl', [
    '$scope',
    function($scope){
     $scope.teamOne = [];
     $scope.teamTwo = [];
      $scope.addPokemon = function(){
        console.log($scope.pokemon);
       if($scope.team = "Team 1"){
          $scope.teamOne.push({
          title: $scope.team,
          pokemonName: $scope.pokemon,
          picture: $scope.pokemon + ".png"
        });
       console.log("here3");
       console.log($scope.teamOne[0]);
       }
       else{
        $scope.teamTwo.push({
          title: $scope.team,
          pokemonName: $scope.pokemon,
          picture: $scope.pokemon + ".png"
        });
       console.log("here3");
       console.log($scope.teamTwo[0]);
       }
      };
  }
]);
