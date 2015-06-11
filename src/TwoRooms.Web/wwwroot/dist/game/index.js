System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-router', '../helpers/userHelper'], function (_export) {
    'use strict';

    var inject, HttpClient, Router, UserHelper, Index;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_helpersUserHelper) {
            UserHelper = _helpersUserHelper.UserHelper;
        }],
        execute: function () {
            Index = (function () {
                function Index(http, router, user) {
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
                    this.user = user;
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

                        console.log('User Creating Game:' + this.user.userId);
                        var value = { 'Name': '' + this.gameName, 'CurrentPlayers': null, 'Leader': { 'Id': '' + this.user.userId, 'Name': '', 'Card': null }, 'Id': null };
                        console.log(value);
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

                Index = inject(HttpClient, Router, UserHelper)(Index) || Index;
                return Index;
            })();

            _export('Index', Index);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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