System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
    'use strict';

    var inject, HttpClient, Game;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            Game = (function () {
                function Game(http) {
                    _classCallCheck(this, _Game);

                    this.heading = 'Game';
                    this.game = {};
                    this.url = '/api/games/';

                    this.http = http;
                    this.http = http.configure(function (x) {
                        x.withHeader('Content-Type', 'application/json');
                    });
                }

                var _Game = Game;

                _createClass(_Game, [{
                    key: 'activate',
                    value: function activate(params) {
                        var _this = this;

                        console.log(params);
                        console.log(this.url + params.id);
                        this.heading = this.heading + ' ' + params.id;
                        return this.http.get(this.url + params.id).then(function (response) {
                            _this.game = response.content;
                            console.log(_this.game);
                            _this.heading = _this.game.Name;
                        });
                    }
                }]);

                Game = inject(HttpClient)(Game) || Game;
                return Game;
            })();

            _export('Game', Game);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NEJBSWEsSUFBSTs7Ozs7Ozs7dUNBSlQsTUFBTTs7NENBQ04sVUFBVTs7O0FBR0wsZ0JBQUk7QUFLRix5QkFMRixJQUFJLENBS0QsSUFBSSxFQUFDOzs7eUJBSmpCLE9BQU8sR0FBRyxNQUFNO3lCQUNoQixJQUFJLEdBQUcsRUFBRTt5QkFDVCxHQUFHLEdBQUcsYUFBYTs7QUFHZix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUM1Qix5QkFBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztxQkFDcEQsQ0FBQyxDQUFDO2lCQUNOOzs0QkFWUSxJQUFJOzs7OzJCQVlMLGtCQUFDLE1BQU0sRUFBQzs7O0FBQ1osK0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsK0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEMsNEJBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUM5QywrQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDeEQsa0NBQUssSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDN0IsbUNBQU8sQ0FBQyxHQUFHLENBQUMsTUFBSyxJQUFJLENBQUMsQ0FBQztBQUN2QixrQ0FBSyxPQUFPLEdBQUcsTUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUNqQyxDQUFDLENBQUM7cUJBQ047OztBQXJCUSxvQkFBSSxHQURoQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sSUFBSSxLQUFKLElBQUk7dUJBQUosSUFBSTs7OzRCQUFKLElBQUkiLCJmaWxlIjoiZ2FtZS9nYW1lLmpzIiwic291cmNlUm9vdCI6Ii4uL0F1cmVsaWEvIn0=