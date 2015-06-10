System.register(['aurelia-framework', 'aurelia-logging-console'], function (_export) {
    'use strict';

    var LogManager, ConsoleAppender;

    _export('configure', configure);

    function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging();

        aurelia.start().then(function (a) {
            return a.setRoot();
        });
    }

    return {
        setters: [function (_aureliaFramework) {
            LogManager = _aureliaFramework.LogManager;
        }, function (_aureliaLoggingConsole) {
            ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7eUJBR2dCLFNBQVM7O0FBQWxCLGFBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUMvQixlQUFPLENBQUMsR0FBRyxDQUNSLHFCQUFxQixFQUFFLENBQ3ZCLGtCQUFrQixFQUFFLENBQUM7O0FBRXhCLGVBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO21CQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7U0FBQSxDQUFDLENBQUM7S0FDMUM7Ozs7MkNBVE8sVUFBVTs7cURBQ1YsZUFBZSIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4uL0F1cmVsaWEvIn0=