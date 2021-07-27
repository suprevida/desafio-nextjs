self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/pokeapi.tsx":
/*!*******************************!*\
  !*** ./pages/api/pokeapi.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POKE_API_URL": function() { return /* binding */ POKE_API_URL; }
/* harmony export */ });
/* harmony import */ var _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();


var POKE_API_URL = 'https://pokeapi.co/api/v2/type/15/';

var IpApi = function IpApi() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setLoading(true);

    function getApi() {
      return _getApi.apply(this, arguments);
    }

    function _getApi() {
      _getApi = (0,_home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res, json;
        return _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(POKE_API_URL);

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                setData(json);
                setLoading(false);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getApi.apply(this, arguments);
    }

    getApi();
  }, []);
  return {
    data: data,
    loading: loading,
    POKE_API_URL: POKE_API_URL
  };
};

_s(IpApi, "zRvvAK96aYqko2QYrTyuOCE8lvM=");

_c = IpApi;
/* harmony default export */ __webpack_exports__["default"] = (IpApi);

var _c;

$RefreshReg$(_c, "IpApi");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3Bva2VhcGkudHN4Il0sIm5hbWVzIjpbIlBPS0VfQVBJX1VSTCIsIklwQXBpIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0QXBpIiwiZmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRyxvQ0FBckI7O0FBRVAsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNNQywrQ0FBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQ1hDLElBRFc7QUFBQSxNQUNMQyxPQURLOztBQUFBLG1CQUVZRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGcEI7QUFBQSxNQUVYRyxPQUZXO0FBQUEsTUFFRkMsVUFGRTs7QUFJbEJDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxjQUFVLENBQUMsSUFBRCxDQUFWOztBQURjLGFBRUNFLE1BRkQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1RBRWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDb0JDLEtBQUssQ0FBQ1QsWUFBRCxDQUR6Qjs7QUFBQTtBQUNRVSxtQkFEUjtBQUFBO0FBQUEsdUJBRXFCQSxHQUFHLENBQUNDLElBQUosRUFGckI7O0FBQUE7QUFFUUEsb0JBRlI7QUFHRVAsdUJBQU8sQ0FBQ08sSUFBRCxDQUFQO0FBQ0FMLDBCQUFVLENBQUMsS0FBRCxDQUFWOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRmM7QUFBQTtBQUFBOztBQVFkRSxVQUFNO0FBQ1AsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVlBLFNBQU87QUFBRUwsUUFBSSxFQUFKQSxJQUFGO0FBQVFFLFdBQU8sRUFBUEEsT0FBUjtBQUFpQkwsZ0JBQVksRUFBWkE7QUFBakIsR0FBUDtBQUNELENBakJEOztHQUFNQyxLOztLQUFBQSxLO0FBbUJOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJiZGY2ZWU2MjNjOTRmZTkxOWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgUE9LRV9BUElfVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvdHlwZS8xNS8nXG5cbmNvbnN0IElwQXBpID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFwaSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFBPS0VfQVBJX1VSTCk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldERhdGEoanNvbik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0QXBpKClcbiAgfSwgW10pXG5cbiAgXG4gIHJldHVybiB7IGRhdGEsIGxvYWRpbmcsIFBPS0VfQVBJX1VSTCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElwQXBpXG4iXSwic291cmNlUm9vdCI6IiJ9