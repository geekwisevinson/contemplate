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