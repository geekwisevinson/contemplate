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