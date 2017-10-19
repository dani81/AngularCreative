angular.module('pokemonBattle', [])
 
  .controller('MainCtrl', [
    '$scope',
    function($scope){
     $scope.teamOne = [];
     $scope.teamTwo = [];
      $scope.addPokemon = function(){
        console.log($scope.pokemon);
       if($scope.team == "Team 1"){
          $scope.teamOne.push({
          
          pokemonName: $scope.pokemon,
          picture: "pictures/" + $scope.pokemon + ".png"
        });
       console.log("Team1");
       console.log($scope.teamOne[0]);
       }
       else{
        $scope.teamTwo.push({
          
          pokemonName: $scope.pokemon,
          picture: "pictures/" + $scope.pokemon + ".png"
        });
       console.log("Team2");
       console.log($scope.teamTwo[0]);
       }
      };
  }
]);
