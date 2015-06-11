System.register(['aurelia-framework', './helpers/userHelper'], function (_export) {
    'use strict';

    var inject, UserHelper, Welcome;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_helpersUserHelper) {
            UserHelper = _helpersUserHelper.UserHelper;
        }],
        execute: function () {
            Welcome = (function () {
                function Welcome(user) {
                    _classCallCheck(this, _Welcome);

                    this.user = user;
                }

                var _Welcome = Welcome;

                _createClass(_Welcome, [{
                    key: 'activate',
                    value: function activate() {
                        console.log(this.user.userId);
                    }
                }]);

                Welcome = inject(UserHelper)(Welcome) || Welcome;
                return Welcome;
            })();

            _export('Welcome', Welcome);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUlhLE9BQU87Ozs7Ozs7O3VDQUpaLE1BQU07OzRDQUNOLFVBQVU7OztBQUdMLG1CQUFPO0FBQ0wseUJBREYsT0FBTyxDQUNKLElBQUksRUFBQzs7O0FBQ2Isd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjs7K0JBSFEsT0FBTzs7OzsyQkFLUixvQkFBRTtBQUNOLCtCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ2pDOzs7QUFQUSx1QkFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sT0FBTyxLQUFQLE9BQU87dUJBQVAsT0FBTzs7OytCQUFQLE9BQU8iLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9BdXJlbGlhLyJ9