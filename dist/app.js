"use strict";

var _controller = require("./core/controller");

var _controller2 = _interopRequireDefault(_controller);

var _events = require("./core/events");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = {
    init: function init() {
        _controller2.default.init();
        _events2.default.on("app-loaded", function () {
            console.log("app loaded");
        });
        _events2.default.emit("app-loaded");
    },
    cacheDOM: function cacheDOM() {},
    execute: function execute() {}
};

window._CustomProductViewApp = App;

App.init();