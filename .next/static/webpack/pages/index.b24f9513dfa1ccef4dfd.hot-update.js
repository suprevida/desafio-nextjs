self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_ipapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/ipapi */ "./pages/api/ipapi.tsx");
/* harmony import */ var _api_pokeapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/pokeapi */ "./pages/api/pokeapi.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/alyson/dev/desafio-nextjs/pages/index.tsx";


function Home() {
  var _this = this;

  var _PokeApi = (0,_api_pokeapi__WEBPACK_IMPORTED_MODULE_2__.default)(),
      data = _PokeApi.data;

  var _IpApi = (0,_api_ipapi__WEBPACK_IMPORTED_MODULE_1__.default)(),
      ip = _IpApi.ip;

  console.log(ip);
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Hello World", ip === null || ip === void 0 ? void 0 : ip.map(function (u) {
      /*#__PURE__*/
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: u === null || u === void 0 ? void 0 : u.country
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJQb2tlQXBpIiwiZGF0YSIsIklwQXBpIiwiaXAiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidSIsImNvdW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxpQkFDWkMscURBQU8sRUFESztBQUFBLE1BQ3JCQyxJQURxQixZQUNyQkEsSUFEcUI7O0FBQUEsZUFFZEMsbURBQUssRUFGUztBQUFBLE1BRXJCQyxFQUZxQixVQUVyQkEsRUFGcUI7O0FBSTdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLHNCQUNFO0FBQUEsOEJBRUdFLEVBRkgsYUFFR0EsRUFGSCx1QkFFR0EsRUFBRSxDQUFFRyxHQUFKLENBQVEsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2Q7QUFBQTtBQUFBLGtCQUFLQSxDQUFMLGFBQUtBLENBQUwsdUJBQUtBLENBQUMsQ0FBRUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0QsS0FGQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7S0FmdUJULEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjI0Zjk1MTNkZmExY2NlZjRkZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IElwQXBpIGZyb20gJy4vYXBpL2lwYXBpJztcbmltcG9ydCBQb2tlQXBpIGZyb20gJy4vYXBpL3Bva2VhcGknXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBQb2tlQXBpKCk7XG4gIGNvbnN0IHsgaXAgfSA9IElwQXBpKCk7XG5cbiAgY29uc29sZS5sb2coaXApO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgSGVsbG8gV29ybGRcbiAgICAgIHtpcD8ubWFwKCh1KSA9PiB7XG4gICAgICAgIDxoMT57dT8uY291bnRyeX08L2gxPlxuICAgICAgfSl9XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==