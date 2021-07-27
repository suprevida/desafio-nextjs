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
  var _PokeApi = (0,_api_pokeapi__WEBPACK_IMPORTED_MODULE_2__.default)(),
      data = _PokeApi.data;

  var _IpApi = (0,_api_ipapi__WEBPACK_IMPORTED_MODULE_1__.default)(),
      ip = _IpApi.ip;

  console.log(ip);
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Hello World", ip.map(function (u) {
      u === null || u === void 0 ? void 0 : u.country;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJQb2tlQXBpIiwiZGF0YSIsIklwQXBpIiwiaXAiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidSIsImNvdW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQSxpQkFDWkMscURBQU8sRUFESztBQUFBLE1BQ3JCQyxJQURxQixZQUNyQkEsSUFEcUI7O0FBQUEsZUFFZEMsbURBQUssRUFGUztBQUFBLE1BRXJCQyxFQUZxQixVQUVyQkEsRUFGcUI7O0FBSTdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLHNCQUNFO0FBQUEsOEJBRUdFLEVBQUUsQ0FBQ0csR0FBSCxDQUFPLFVBQUNDLENBQUQsRUFBTztBQUNiQSxPQUFDLFNBQUQsSUFBQUEsQ0FBQyxXQUFELFlBQUFBLENBQUMsQ0FBRUMsT0FBSDtBQUNELEtBRkEsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEO0tBZnVCVCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxYjJjZmQ0MDI2ZmVhZTE4OGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBJcEFwaSBmcm9tICcuL2FwaS9pcGFwaSc7XG5pbXBvcnQgUG9rZUFwaSBmcm9tICcuL2FwaS9wb2tlYXBpJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gUG9rZUFwaSgpO1xuICBjb25zdCB7IGlwIH0gPSBJcEFwaSgpO1xuXG4gIGNvbnNvbGUubG9nKGlwKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEhlbGxvIFdvcmxkXG4gICAgICB7aXAubWFwKCh1KSA9PiB7XG4gICAgICAgIHU/LmNvdW50cnlcbiAgICAgIH0pfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=