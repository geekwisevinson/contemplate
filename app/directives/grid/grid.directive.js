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
