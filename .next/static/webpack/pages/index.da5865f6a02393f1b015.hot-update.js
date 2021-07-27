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
/* harmony import */ var _api_pokeapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/pokeapi */ "./pages/api/pokeapi.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/alyson/dev/desafio-nextjs/pages/index.tsx";

function Home() {
  var _data$pokemon,
      _this = this;

  var _PokeApi = (0,_api_pokeapi__WEBPACK_IMPORTED_MODULE_1__.default)(),
      data = _PokeApi.data,
      loading = _PokeApi.loading; // const { ip } = IpApi();
  // const getRegion = ip?.regionName;


  console.log(data);
  var filter = data === null || data === void 0 ? void 0 : data.pokemon.map(function (u) {
    return u;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Hello World", loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }, this), data === null || data === void 0 ? void 0 : (_data$pokemon = data.pokemon) === null || _data$pokemon === void 0 ? void 0 : _data$pokemon.map(function (pokedex) {
      var _pokedex$pokemon;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon = pokedex.pokemon) === null || _pokedex$pokemon === void 0 ? void 0 : _pokedex$pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 39
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJQb2tlQXBpIiwiZGF0YSIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwicG9rZW1vbiIsIm1hcCIsInUiLCJwb2tlZGV4IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBO0FBQUE7O0FBQUEsaUJBQ0RDLHFEQUFPLEVBRE47QUFBQSxNQUNyQkMsSUFEcUIsWUFDckJBLElBRHFCO0FBQUEsTUFDZEMsT0FEYyxZQUNkQSxPQURjLEVBRTdCO0FBQ0E7OztBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLE1BQU1JLE1BQU0sR0FBR0osSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVLLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBUDtBQUFBLEdBQWxCLENBQWY7QUFFQSxzQkFDRTtBQUFBLDhCQUdHTixPQUFPLGlCQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSGQsRUFJR0QsSUFKSCxhQUlHQSxJQUpILHdDQUlHQSxJQUFJLENBQUVLLE9BSlQsa0RBSUcsY0FBZUMsR0FBZixDQUFtQixVQUFBRSxPQUFPO0FBQUE7O0FBQUEsMEJBQUs7QUFBQSxrQkFBS0EsT0FBTCxhQUFLQSxPQUFMLDJDQUFLQSxPQUFPLENBQUVILE9BQWQscURBQUssaUJBQWtCSTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUw7QUFBQSxLQUExQixDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7S0FoQnVCWCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRhNTg2NWY2YTAyMzkzZjFiMDE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBJcEFwaSBmcm9tICcuL2FwaS9pcGFwaSc7XG5pbXBvcnQgUG9rZUFwaSBmcm9tICcuL2FwaS9wb2tlYXBpJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSAsIGxvYWRpbmcgfSA9ICBQb2tlQXBpKCk7XG4gIC8vIGNvbnN0IHsgaXAgfSA9IElwQXBpKCk7XG4gIC8vIGNvbnN0IGdldFJlZ2lvbiA9IGlwPy5yZWdpb25OYW1lO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zdCBmaWx0ZXIgPSBkYXRhPy5wb2tlbW9uLm1hcCgodSkgPT4gdSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgSGVsbG8gV29ybGRcbiAgICAgIHsvKiB7Z2V0UmVnaW9ufSAqL31cbiAgICAgIHtsb2FkaW5nICYmIDxoMT5Mb2FkaW5nLi4uPC9oMT59XG4gICAgICB7ZGF0YT8ucG9rZW1vbj8ubWFwKHBva2VkZXggPT4gKDxoMT57cG9rZWRleD8ucG9rZW1vbj8ubmFtZX08L2gxPikpfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9