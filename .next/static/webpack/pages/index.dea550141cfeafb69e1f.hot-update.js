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
/* harmony import */ var _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _api_ipapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/ipapi */ "./pages/api/ipapi.tsx");
/* harmony import */ var _api_pokeapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/pokeapi */ "./pages/api/pokeapi.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/alyson/dev/desafio-nextjs/pages/index.tsx";


function Home() {
  return _Home.apply(this, arguments);
}
_c2 = Home;

function _Home() {
  _Home = (0,_home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var _yield$PokeApi, data, loading, _yield$IpApi, ip, getRegion;

    return _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_api_pokeapi__WEBPACK_IMPORTED_MODULE_4__.default)();

          case 2:
            _yield$PokeApi = _context.sent;
            data = _yield$PokeApi.data;
            loading = _yield$PokeApi.loading;
            _context.next = 7;
            return (0,_api_ipapi__WEBPACK_IMPORTED_MODULE_3__.default)();

          case 7:
            _yield$IpApi = _context.sent;
            ip = _yield$IpApi.ip;
            getRegion = ip === null || ip === void 0 ? void 0 : ip.country;
            console.log(getRegion);
            return _context.abrupt("return", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: ["Hello World", loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                children: "Loading..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 18
              }, this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 5
            }, this));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _Home.apply(this, arguments);
}

_c = Home;

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJQb2tlQXBpIiwiZGF0YSIsImxvYWRpbmciLCJJcEFwaSIsImlwIiwiZ2V0UmVnaW9uIiwiY291bnRyeSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBR2UsU0FBZUEsSUFBOUI7QUFBQTtBQUFBO01BQThCQSxJOzs7Z1RBQWY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ29CQyxxREFBTyxFQUQzQjs7QUFBQTtBQUFBO0FBQ0xDLGdCQURLLGtCQUNMQSxJQURLO0FBQ0VDLG1CQURGLGtCQUNFQSxPQURGO0FBQUE7QUFBQSxtQkFFUUMsbURBQUssRUFGYjs7QUFBQTtBQUFBO0FBRUxDLGNBRkssZ0JBRUxBLEVBRks7QUFJUEMscUJBSk8sR0FJS0QsRUFKTCxhQUlLQSxFQUpMLHVCQUlLQSxFQUFFLENBQUVFLE9BSlQ7QUFNYkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxTQUFaO0FBTmEsMERBUVg7QUFBQSx3Q0FFR0gsT0FBTyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBSCxHQUF5QixJQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztLQUFlSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRlYTU1MDE0MWNmZWFmYjY5ZTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBJcEFwaSBmcm9tICcuL2FwaS9pcGFwaSc7XG5pbXBvcnQgUG9rZUFwaSBmcm9tICcuL2FwaS9wb2tlYXBpJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSAsIGxvYWRpbmcgfSA9IGF3YWl0IFBva2VBcGkoKTtcbiAgY29uc3QgeyBpcCB9ID0gYXdhaXQgSXBBcGkoKTtcblxuICBjb25zdCBnZXRSZWdpb24gPSBpcD8uY291bnRyeTtcblxuICBjb25zb2xlLmxvZyhnZXRSZWdpb24pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBIZWxsbyBXb3JsZFxuICAgICAge2xvYWRpbmcgPyA8aDE+TG9hZGluZy4uLjwvaDE+IDogbnVsbH1cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9