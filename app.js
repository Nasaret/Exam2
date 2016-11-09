(function(){

	var app = angular.module('exam2', []);
	app.controller('appController', function(){
		this.personne = {
			name:"Tian Bao",
			age: 2 ,
			skills: ['Manger', 'Jouer'],
			image : 'img/panda.jpg'
		};
	});

	app.directive('header', function(){
		return {
			restrict: 'AE',
			templateUrl: 'paritials/common/header.html'
		}
	})
	app.directive('footer', function(){
		return {
			restrict: 'AE',
			templateUrl: 'paritials/common/footer.html'
		}
	})

	app.directive('home', function(){
		return {
			restrict: 'AE',
			templateUrl: 'paritials/home.html'
		}
	})
})();



/*

  var object = {
    name : "Tian Bao",
    age : 2,
    skills : ['Manger', 'Jouer'],
    image : 'img/panda.jpg'
  };
})();
*/
