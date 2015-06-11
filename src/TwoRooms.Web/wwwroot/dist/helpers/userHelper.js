System.register([], function (_export) {
    'use strict';

    var UserHelper;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function createUserId() {
        var today = new Date();
        var tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        console.log(tomorrow.toUTCString());
        var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 3 | 8;
            return v.toString(16);
        });
        console.log(id);
        var cookieString = 'userid=' + id + '; expires=' + tomorrow.toUTCString() + '; path=/';
        console.log(cookieString);
        document.cookie = cookieString;
        return id;
    }
    return {
        setters: [],
        execute: function () {
            UserHelper = (function () {
                function UserHelper() {
                    _classCallCheck(this, UserHelper);

                    this.id = '';
                    var name = 'userid=';
                    console.log(document.cookie);
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') c = c.substring(1);
                        if (c.indexOf(name) == 0) this.id = c.substring(name.length, c.length);
                    }
                    if (this.id == '') {
                        this.id = createUserId();
                    }
                }

                _createClass(UserHelper, [{
                    key: 'configure',
                    value: function configure(fn) {
                        fn();
                    }
                }, {
                    key: 'userId',
                    get: function () {
                        return this.id;
                    }
                }]);

                return UserHelper;
            })();

            _export('UserHelper', UserHelper);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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