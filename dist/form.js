"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initForm = initForm;
var _validate = _interopRequireDefault(require("validate.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function initForm(form, constraints, onSubmit) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = Object.fromEntries(new FormData(form).entries());
    var errors = (0, _validate["default"])(data, formConstraints);
    if (errors) for (var fieldName in errors) {
      form.elements[fieldName].closest(".field").querySelector(".help").textContent = errors[fieldName].join(". ");
    } else {
      onSubmit(data);
    }
    return false;
  });
}