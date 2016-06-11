angular.module("app")
    .directive('square', function() {
    return {
        link: function(scope, element, attributes){
            element.addClass(attributes.myPass);

        }
    }
});