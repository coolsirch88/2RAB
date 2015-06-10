System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-router'], function (_export) {
    'use strict';

    var inject, HttpClient, Router, Index;

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
            Index = (function () {
                function Index(http, router) {
                    _classCallCheck(this, _Index);

                    this.heading = 'Games';
                    this.games = [];
                    this.url = '/api/games';
                    this.gameName = '';

                    this.http = http;
                    this.http = http.configure(function (x) {
                        x.withHeader('Content-Type', 'application/json');
                    });
                    this.router = router;
                }

                var _Index = Index;

                _createClass(_Index, [{
                    key: 'activate',
                    value: function activate() {
                        var _this = this;

                        return this.http.get(this.url).then(function (response) {
                            _this.games = response.content;
                            console.log(_this.games);
                        });
                    }
                }, {
                    key: 'createGame',
                    value: function createGame() {
                        var _this2 = this;

                        var value = { 'Name': '' + this.gameName, 'CurrentPlayers': null, 'Leader': null, 'Id': null };
                        return this.http.post(this.url, value).then(function (response) {
                            return _this2.http.get(_this2.url);
                        }).then(function (response) {
                            _this2.games = response.content;
                            var index = _this2.games.length;
                            while (index-- && _this2.games[index].Name != _this2.gameName);
                            _this2.router.navigate('game/' + _this2.games[index].Id + '/config');
                        });
                    }
                }]);

                Index = inject(HttpClient, Router)(Index) || Index;
                return Index;
            })();

            _export('Index', Index);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29DQUthLEtBQUs7Ozs7Ozs7O3VDQUxWLE1BQU07OzRDQUNOLFVBQVU7O29DQUNWLE1BQU07OztBQUdELGlCQUFLO0FBTUgseUJBTkYsS0FBSyxDQU1GLElBQUksRUFBRSxNQUFNLEVBQUM7Ozt5QkFMekIsT0FBTyxHQUFHLE9BQU87eUJBQ2pCLEtBQUssR0FBRyxFQUFFO3lCQUNWLEdBQUcsR0FBRyxZQUFZO3lCQUNsQixRQUFRLEdBQUcsRUFBRTs7QUFHVCx3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUM1Qix5QkFBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztxQkFDcEQsQ0FBQyxDQUFDO0FBQ0gsd0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2lCQUN4Qjs7NkJBWlEsS0FBSzs7OzsyQkFjTixvQkFBRTs7O0FBQ04sK0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUM1QyxrQ0FBSyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUM5QixtQ0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFLLEtBQUssQ0FBQyxDQUFDO3lCQUMzQixDQUFDLENBQUM7cUJBQ047OzsyQkFFUyxzQkFBRTs7O0FBQ1IsNEJBQUksS0FBSyxHQUFHLEVBQUMsTUFBTSxPQUFLLElBQUksQ0FBQyxRQUFRLEFBQUUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDN0YsK0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUc7QUFDbkQsbUNBQU8sT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssR0FBRyxDQUFDLENBQUM7eUJBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUc7QUFDZixtQ0FBSyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUM5QixnQ0FBSSxLQUFLLEdBQUcsT0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzlCLG1DQUFNLEtBQUssRUFBRSxJQUFJLE9BQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFLLFFBQVEsRUFBRTtBQUMxRCxtQ0FBSyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBQyxPQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLENBQUM7eUJBQ2hFLENBQUMsQ0FBQztxQkFDTjs7O0FBL0JRLHFCQUFLLEdBRGpCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQ2QsS0FBSyxLQUFMLEtBQUs7dUJBQUwsS0FBSzs7OzZCQUFMLEtBQUsiLCJmaWxlIjoiZ2FtZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLi9BdXJlbGlhLyJ9