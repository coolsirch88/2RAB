System.register([], function (_export) {
    'use strict';

    var GameRouter;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            GameRouter = (function () {
                function GameRouter() {
                    _classCallCheck(this, GameRouter);

                    this.heading = 'Game';
                }

                _createClass(GameRouter, [{
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.map([{ route: ['', 'index'], moduleId: './index', nav: true, title: 'Game Index' }]);

                        this.router = router;
                    }
                }]);

                return GameRouter;
            })();

            _export('GameRouter', GameRouter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2FtZVJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxVQUFVOzs7Ozs7Ozs7QUFBVixzQkFBVTt5QkFBVixVQUFVOzBDQUFWLFVBQVU7O3lCQUNuQixPQUFPLEdBQUcsTUFBTTs7OzZCQURQLFVBQVU7OzJCQUdKLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDM0IsOEJBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFlBQVksRUFBRSxDQUNsRixDQUFDLENBQUM7O0FBRUgsNEJBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3FCQUN4Qjs7O3VCQVRRLFVBQVU7OztrQ0FBVixVQUFVIiwiZmlsZSI6ImdhbWUvZ2FtZVJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIuLi9BdXJlbGlhLyJ9