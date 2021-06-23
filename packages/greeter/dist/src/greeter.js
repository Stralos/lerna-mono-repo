"use strict";
exports.__esModule = true;
exports.greeter = void 0;
function greeter(user) {
    var name = user.name, lastName = user.lastName;
    return "Hello, " + name + " " + lastName + ", how are you ?";
}
exports.greeter = greeter;
