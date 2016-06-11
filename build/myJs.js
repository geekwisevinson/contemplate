angular.module('app',['ui.router']);
angular.module('app')
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'states/home/home.html'
            })
            .state('home.child',{
                url:'/child',
                templateUrl: "states/home/child/child.html"
            })
    }
);

angular.module('app').controller('main_controller',main_controller);




function main_controller ($scope,$window,window_dimensions,$timeout,Grid){
    $window.main_scope = $scope;
    $scope.window_dimensions =window_dimensions;
    $scope.Grid=Grid;
    $scope.get_window_height = window_dimensions.get_window_height;
    $scope.get_window_width = window_dimensions.get_window_width;
    $scope.get_window_ratio = window_dimensions.get_window_ratio;
    $scope.update_dimensions = function(){

        window_dimensions.get_window_width();
        window_dimensions.get_window_height();
        window_dimensions.get_window_ratio();
        $scope.$digest();
    };

    $timeout(function(){
     $scope.update_dimensions();
    },20)





}
function grid50($scope,window_dimensions){


$scope.sizeo=Math.floor(window_dimensions.ww*.49) +'px';



}
angular.module('app')
    .directive('grid',function(window_dimensions,$timeout){
        return {
            restrict:'A',
            link: {post:function(scope, element, attributes){
                var getww = function(){
                    return (window_dimensions.ww/attributes.grid)+ 'px';
                };
                console.log(element[0]);
                console.log(window_dimensions.ww);

                element[0].style.border = '1px solid black';
                element[0].style.display = 'inline-block';
                element[0].setAttribute("ng-style",{width:(window_dimensions.ww+'px')});

            }}
        }
    });

angular.module("app")
    .directive('square', function() {
    return {
        link: function(scope, element, attributes){
            element.addClass(attributes.myPass);

        }
    }
});
angular.module('app')
    .service('Grid',function(window_dimensions){



        return{
            one:function(){
                return{
                    display:'inline-block',
                    border:'1px solid black',
                    width:'100%'
                }
            },
            two:function(){
                return{
                    display:'inline-block',
                    border:'1px solid black',
                    width:'50%'
                }
            },
            three:function(){
                return{
                    display:'inline-block',
                    border:'1px solid black',
                    width:'50%'
                }
            },
            four:function(){
                return{
                    display:'inline-block',
                    border:'1px solid black',
                    width:(window_dimensions.ww/4) + 'px'
                }
            }
        }
    });
angular.module('app').service('window_dimensions',function($window) {
        return {
            window_width: Math.max($window.document.body.clientWidth, $window.innerWidth || 0),
            window_height: Math.max($window.document.body.clientHeight, $window.innerHeight || 0),
            window_ratio: 0,
            get_window_width: function () {
                this.window_width = Math.max($window.document.body.clientWidth || 0);
                return Math.max($window.document.body.clientWidth || 0);
            },
            get_window_height: function () {
                this.window_height = Math.max($window.document.body.offsetHeight, $window.innerHeight || 0);
                return Math.max($window.document.body.offsetHeight, $window.innerHeight || 0);
            },
            get_window_ratio: function () {
                if (this.window_width > this.window_height) {
                    this.window_ratio = [1,(this.window_width/this.window_height)];
                    return [1,(this.window_width/this.window_height)];
                } else {
                    this.window_ratio = [(this.window_height/this.window_width),1];
                    return [(this.window_height/this.window_width),1];
                }

            }
        }
}
);