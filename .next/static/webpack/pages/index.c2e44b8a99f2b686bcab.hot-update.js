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
  var filter = data.pokemon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Hello World", loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }, this), filter === null || filter === void 0 ? void 0 : filter.map(function (pokedex) {
      var _pokedex$pokemon;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon = pokedex.pokemon) === null || _pokedex$pokemon === void 0 ? void 0 : _pokedex$pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 32
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJQb2tlQXBpIiwiZGF0YSIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwicG9rZW1vbiIsIm1hcCIsInBva2VkZXgiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsaUJBQ0RDLHFEQUFPLEVBRE47QUFBQSxNQUNyQkMsSUFEcUIsWUFDckJBLElBRHFCO0FBQUEsTUFDZEMsT0FEYyxZQUNkQSxPQURjLEVBRTdCO0FBQ0E7OztBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLE1BQU1JLE1BQU0sR0FBR0osSUFBSSxDQUFDSyxPQUFwQjtBQUVBLHNCQUNFO0FBQUEsOEJBR0dKLE9BQU8saUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIZCxFQUlHRyxNQUpILGFBSUdBLE1BSkgsdUJBSUdBLE1BQU0sQ0FBRUUsR0FBUixDQUFZLFVBQUFDLE9BQU87QUFBQTs7QUFBQSwwQkFBSztBQUFBLGtCQUFLQSxPQUFMLGFBQUtBLE9BQUwsMkNBQUtBLE9BQU8sQ0FBRUYsT0FBZCxxREFBSyxpQkFBa0JHO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBTDtBQUFBLEtBQW5CLENBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDtLQWhCdUJWLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzJlNDRiOGE5OWYyYjY4NmJjYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IElwQXBpIGZyb20gJy4vYXBpL2lwYXBpJztcbmltcG9ydCBQb2tlQXBpIGZyb20gJy4vYXBpL3Bva2VhcGknXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhICwgbG9hZGluZyB9ID0gIFBva2VBcGkoKTtcbiAgLy8gY29uc3QgeyBpcCB9ID0gSXBBcGkoKTtcbiAgLy8gY29uc3QgZ2V0UmVnaW9uID0gaXA/LnJlZ2lvbk5hbWU7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IGZpbHRlciA9IGRhdGEucG9rZW1vbjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBIZWxsbyBXb3JsZFxuICAgICAgey8qIHtnZXRSZWdpb259ICovfVxuICAgICAge2xvYWRpbmcgJiYgPGgxPkxvYWRpbmcuLi48L2gxPn1cbiAgICAgIHtmaWx0ZXI/Lm1hcChwb2tlZGV4ID0+ICg8aDE+e3Bva2VkZXg/LnBva2Vtb24/Lm5hbWV9PC9oMT4pKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==