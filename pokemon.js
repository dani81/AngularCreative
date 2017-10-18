angular.module('pokemonBattle', [])
.controller('MainCtrl', [
  '$scope',
  $scope.posts = {};
  function($scope)
  {
    $scope.addPokemon = function(){
      if($scope.formContent === '') { return; } 
      $scope.posts.push({ 
        team: $scope.team, pokemon: $scope.pokemon, position: $scope.position 
      }); 
      $scope.formContent = '';
    }
  }
  ]);
