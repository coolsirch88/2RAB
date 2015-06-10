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
                        config.map([{ route: ['', 'index'], moduleId: './index', nav: true, title: 'Game Index', name: 'index' }, { route: [':id/config'], moduleId: './config', nav: false, title: 'Game Options' }, { route: [':id', 'game/:id'], moduleId: './game', nav: false, title: 'Game' }]);

                        this.router = router;
                    }
                }]);

                return GameRouter;
            })();

            _export('GameRouter', GameRouter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2FtZVJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxVQUFVOzs7Ozs7Ozs7QUFBVixzQkFBVTt5QkFBVixVQUFVOzBDQUFWLFVBQVU7O3lCQUNuQixPQUFPLEdBQUcsTUFBTTs7OzZCQURQLFVBQVU7OzJCQUdKLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDM0IsOEJBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLEVBQy9GLEVBQUUsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUMsRUFDaEYsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUksUUFBUSxFQUFFLFFBQVEsRUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FDcEYsQ0FBQyxDQUFDOztBQUVILDRCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztxQkFDeEI7Ozt1QkFYUSxVQUFVOzs7a0NBQVYsVUFBVSIsImZpbGUiOiJnYW1lL2dhbWVSb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiLi4vQXVyZWxpYS8ifQ==