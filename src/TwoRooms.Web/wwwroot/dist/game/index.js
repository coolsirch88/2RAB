System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
    'use strict';

    var inject, HttpClient, Index;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            Index = (function () {
                function Index(http) {
                    _classCallCheck(this, _Index);

                    this.heading = 'Games';
                    this.games = [];
                    this.url = '/api/games';
                    this.gameName = '';

                    this.http = http;
                    this.http = http.configure(function (x) {
                        x.withHeader('Content-Type', 'application/json');
                    });
                }

                var _Index = Index;

                _createClass(_Index, [{
                    key: 'activate',
                    value: function activate() {
                        var _this = this;

                        return this.http.get(this.url).then(function (response) {
                            _this.games = response.content;
                        });
                    }
                }, {
                    key: 'createGame',
                    value: function createGame() {
                        var _this2 = this;

                        alert('' + this.gameName + '!');
                        var value = { 'Name': '' + this.gameName, 'CurrentPlayers': null, 'Leader': null, 'Id': null };
                        return this.http.post(this.url, value).then(function (response) {
                            alert('success');
                            _this2.games.push(_this2.gameName);
                        });
                    }
                }]);

                Index = inject(HttpClient)(Index) || Index;
                return Index;
            })();

            _export('Index', Index);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUlhLEtBQUs7Ozs7Ozs7O3VDQUpWLE1BQU07OzRDQUNOLFVBQVU7OztBQUdMLGlCQUFLO0FBTUgseUJBTkYsS0FBSyxDQU1GLElBQUksRUFBQzs7O3lCQUxqQixPQUFPLEdBQUcsT0FBTzt5QkFDakIsS0FBSyxHQUFHLEVBQUU7eUJBQ1YsR0FBRyxHQUFHLFlBQVk7eUJBQ2xCLFFBQVEsR0FBRyxFQUFFOztBQUdULHdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQzVCLHlCQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO3FCQUNwRCxDQUFDLENBQUM7aUJBQ047OzZCQVhRLEtBQUs7Ozs7MkJBYU4sb0JBQUU7OztBQUNOLCtCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDNUMsa0NBQUssS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7eUJBQ2pDLENBQUMsQ0FBQztxQkFDTjs7OzJCQUVTLHNCQUFFOzs7QUFDUiw2QkFBSyxNQUFJLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQztBQUMzQiw0QkFBSSxLQUFLLEdBQUcsRUFBQyxNQUFNLE9BQUssSUFBSSxDQUFDLFFBQVEsQUFBRSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUM3RiwrQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBRztBQUNuRCxpQ0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pCLG1DQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBSyxRQUFRLENBQUMsQ0FBQzt5QkFDbEMsQ0FBQyxDQUFDO3FCQUNOOzs7QUExQlEscUJBQUssR0FEakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLEtBQUssS0FBTCxLQUFLO3VCQUFMLEtBQUs7Ozs2QkFBTCxLQUFLIiwiZmlsZSI6ImdhbWUvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vQXVyZWxpYS8ifQ==