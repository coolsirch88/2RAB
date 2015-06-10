System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-router'], function (_export) {
    'use strict';

    var inject, HttpClient, Router, Config;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            Config = (function () {
                function Config(http, router) {
                    _classCallCheck(this, _Config);

                    this.heading = 'Game Options';
                    this.game = {};
                    this.url = '/api/games/';

                    this.http = http;
                    this.http = http.configure(function (x) {
                        x.withHeader('Content-Type', 'application/json');
                    });
                    this.router = router;
                }

                var _Config = Config;

                _createClass(_Config, [{
                    key: 'activate',
                    value: function activate(params) {
                        var _this = this;

                        console.log(params);
                        console.log(this.url + params.id);
                        this.heading = this.heading + ' ' + params.id;
                        return this.http.get(this.url + params.id).then(function (response) {
                            _this.game = response.content;
                            console.log(_this.game);
                            _this.heading = 'Options for ' + _this.game.Name;
                        });
                    }
                }, {
                    key: 'cancelGame',
                    value: function cancelGame() {
                        var _this2 = this;

                        console.log(this.game.Id);
                        return this.http['delete'](this.url + this.game.Id).then(function (response) {
                            _this2.router.navigateToRoute('index');
                        });
                    }
                }]);

                Config = inject(HttpClient, Router)(Config) || Config;
                return Config;
            })();

            _export('Config', Config);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvQ0FLYSxNQUFNOzs7Ozs7Ozt1Q0FMWCxNQUFNOzs0Q0FDTixVQUFVOztvQ0FDVixNQUFNOzs7QUFHRCxrQkFBTTtBQUtKLHlCQUxGLE1BQU0sQ0FLSCxJQUFJLEVBQUUsTUFBTSxFQUFDOzs7eUJBSnpCLE9BQU8sR0FBRyxjQUFjO3lCQUN4QixJQUFJLEdBQUcsRUFBRTt5QkFDVCxHQUFHLEdBQUcsYUFBYTs7QUFHZix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUM1Qix5QkFBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztxQkFDcEQsQ0FBQyxDQUFDO0FBQ0gsd0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2lCQUN4Qjs7OEJBWFEsTUFBTTs7OzsyQkFhUCxrQkFBQyxNQUFNLEVBQUM7OztBQUNaLCtCQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLCtCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLDRCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDOUMsK0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ3hELGtDQUFLLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBQzdCLG1DQUFPLENBQUMsR0FBRyxDQUFDLE1BQUssSUFBSSxDQUFDLENBQUM7QUFDdkIsa0NBQUssT0FBTyxHQUFHLGNBQWMsR0FBRyxNQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ2xELENBQUMsQ0FBQztxQkFDTjs7OzJCQUVTLHNCQUFFOzs7QUFDUiwrQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLCtCQUFPLElBQUksQ0FBQyxJQUFJLFVBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzlELG1DQUFLLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ3hDLENBQUMsQ0FBQztxQkFDTjs7O0FBN0JRLHNCQUFNLEdBRGxCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQ2QsTUFBTSxLQUFOLE1BQU07dUJBQU4sTUFBTTs7OzhCQUFOLE1BQU0iLCJmaWxlIjoiZ2FtZS9jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi4vQXVyZWxpYS8ifQ==