'use strict';

angular.module('jsheroApp')
	.controller('MainCtrl',['$scope','Game','Songs',function ($scope,game,songs) {
		var song = songs.find(0);
		$scope.start = function() {
			$('audio').attr('src',song.url)
            if($('.player_audio').paused != false)
            	$('audio').get(0).play();
            else
            	$('audio').get(0).pause();
		}

		$("audio").bind('timeupdate', function() {
			game.updateCurrentDisplay(this.currentTime,song.touchkeys);
		});

		$(window).keypress(function(e) {
			if(e.charCode == 97) {
				$scope.score = game.hit(0,$scope.score)
			} else if (e.charCode == 122) {
				$scope.score = game.hit(1,$scope.score)
			} else if (e.charCode == 101) {
				$scope.score = game.hit(2,$scope.score)
			} else if (e.charCode == 114) {
				$scope.score = game.hit(3,$scope.score)
			}
		});

		$scope.score = 0;
  }]);

