﻿(function() {
	App.directive('myMenu',
	    function () {
	        return {
	        	restrict: "AEC",
	            templateUrl: 'site/templates/menu.html',
	            link: function($scope, $element, $attributes) {
    				window.setTimeout(function(){

						$('#main-menu').smartmenus();
						$('#Tests-button').sidr({
							name: 'tests-menu',
							side: 'left' // By default
						});
						$('#About-button').sidr({
							name: 'about-menu',
							side: 'left'
						});

					}, 0001);	
    				scope.$watch()
	                // do what you want here.
	            }
	        };

	    var test =  function () {

				return this;    	
			};


	    });

	App.directive('ngElementReady', [function() {
	        return { //directive to execute all menu scripts.
	            priority: -1000, // a low number so this directive loads after all other directives have loaded. 
	            restrict: "A", // attribute only

	        };
	    }]);


})();