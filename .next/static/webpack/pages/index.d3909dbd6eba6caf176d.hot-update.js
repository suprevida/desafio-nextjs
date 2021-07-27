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
  var _this = this;

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
    }, this), data === null || data === void 0 ? void 0 : data.map(function (pokedex) {
      var _pokedex$pokemon;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon = pokedex.pokemon) === null || _pokedex$pokemon === void 0 ? void 0 : _pokedex$pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 30
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJQb2tlQXBpIiwiZGF0YSIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwicG9rZW1vbiIsIm1hcCIsInUiLCJwb2tlZGV4IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGlCQUNEQyxxREFBTyxFQUROO0FBQUEsTUFDckJDLElBRHFCLFlBQ3JCQSxJQURxQjtBQUFBLE1BQ2RDLE9BRGMsWUFDZEEsT0FEYyxFQUU3QjtBQUNBOzs7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQSxNQUFNSSxNQUFNLEdBQUdKLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFSyxPQUFOLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQVA7QUFBQSxHQUFsQixDQUFmO0FBRUEsc0JBQ0U7QUFBQSw4QkFHR04sT0FBTyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhkLEVBSUdELElBSkgsYUFJR0EsSUFKSCx1QkFJR0EsSUFBSSxDQUFFTSxHQUFOLENBQVUsVUFBQUUsT0FBTztBQUFBOztBQUFBLDBCQUFLO0FBQUEsa0JBQUtBLE9BQUwsYUFBS0EsT0FBTCwyQ0FBS0EsT0FBTyxDQUFFSCxPQUFkLHFEQUFLLGlCQUFrQkk7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFMO0FBQUEsS0FBakIsQ0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEO0tBaEJ1QlgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMzkwOWRiZDZlYmE2Y2FmMTc2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSXBBcGkgZnJvbSAnLi9hcGkvaXBhcGknO1xuaW1wb3J0IFBva2VBcGkgZnJvbSAnLi9hcGkvcG9rZWFwaSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEgLCBsb2FkaW5nIH0gPSAgUG9rZUFwaSgpO1xuICAvLyBjb25zdCB7IGlwIH0gPSBJcEFwaSgpO1xuICAvLyBjb25zdCBnZXRSZWdpb24gPSBpcD8ucmVnaW9uTmFtZTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3QgZmlsdGVyID0gZGF0YT8ucG9rZW1vbi5tYXAoKHUpID0+IHUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEhlbGxvIFdvcmxkXG4gICAgICB7Lyoge2dldFJlZ2lvbn0gKi99XG4gICAgICB7bG9hZGluZyAmJiA8aDE+TG9hZGluZy4uLjwvaDE+fVxuICAgICAge2RhdGE/Lm1hcChwb2tlZGV4ID0+ICg8aDE+e3Bva2VkZXg/LnBva2Vtb24/Lm5hbWV9PC9oMT4pKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==