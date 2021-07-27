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
      data = _PokeApi.data,
      loading = _PokeApi.loading;

  var _IpApi = (0,_api_ipapi__WEBPACK_IMPORTED_MODULE_1__.default)(),
      ip = _IpApi.ip,
      loadingIp = _IpApi.loadingIp;

  var getRegion = ip === null || ip === void 0 ? void 0 : ip.regionName;
  console.log(getRegion);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Hello World", getRegion, loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 18
    }, this) : null, loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "your ip address"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 18
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJQb2tlQXBpIiwiZGF0YSIsImxvYWRpbmciLCJJcEFwaSIsImlwIiwibG9hZGluZ0lwIiwiZ2V0UmVnaW9uIiwicmVnaW9uTmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQSxpQkFDREMscURBQU8sRUFETjtBQUFBLE1BQ3JCQyxJQURxQixZQUNyQkEsSUFEcUI7QUFBQSxNQUNkQyxPQURjLFlBQ2RBLE9BRGM7O0FBQUEsZUFFRkMsbURBQUssRUFGSDtBQUFBLE1BRXJCQyxFQUZxQixVQUVyQkEsRUFGcUI7QUFBQSxNQUVoQkMsU0FGZ0IsVUFFaEJBLFNBRmdCOztBQUk3QixNQUFNQyxTQUFTLEdBQUdGLEVBQUgsYUFBR0EsRUFBSCx1QkFBR0EsRUFBRSxDQUFFRyxVQUF0QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUNBLHNCQUNFO0FBQUEsOEJBRUdBLFNBRkgsRUFHR0osT0FBTyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILEdBQXlCLElBSG5DLEVBSUdBLE9BQU8sZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxHQUE4QixJQUp4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEO0tBaEJ1QkgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOTQ0MTVmZWZjOTc1MTA3ZGM2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSXBBcGkgZnJvbSAnLi9hcGkvaXBhcGknO1xuaW1wb3J0IFBva2VBcGkgZnJvbSAnLi9hcGkvcG9rZWFwaSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEgLCBsb2FkaW5nIH0gPSAgUG9rZUFwaSgpO1xuICBjb25zdCB7IGlwICwgbG9hZGluZ0lwIH0gPSBJcEFwaSgpO1xuXG4gIGNvbnN0IGdldFJlZ2lvbiA9IGlwPy5yZWdpb25OYW1lO1xuXG4gIGNvbnNvbGUubG9nKGdldFJlZ2lvbik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEhlbGxvIFdvcmxkXG4gICAgICB7Z2V0UmVnaW9ufVxuICAgICAge2xvYWRpbmcgPyA8aDE+TG9hZGluZy4uLjwvaDE+IDogbnVsbH1cbiAgICAgIHtsb2FkaW5nID8gPGgxPnlvdXIgaXAgYWRkcmVzczwvaDE+IDogbnVsbH1cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9