self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/ipapi.tsx":
/*!*****************************!*\
  !*** ./pages/api/ipapi.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IP_API_URL": function() { return /* binding */ IP_API_URL; }
/* harmony export */ });
/* harmony import */ var _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();


var IP_API_URL = 'http://ip-api.com/json/?query=&fields=status,country,regionName,query';

var IpApi = function IpApi() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      ip = _useState[0],
      setIp = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loadingIp = _useState2[0],
      setLoading = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setLoading(true);

    function getIp() {
      return _getIp.apply(this, arguments);
    }

    function _getIp() {
      _getIp = (0,_home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res, json;
        return _home_alyson_dev_desafio_nextjs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(IP_API_URL);

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                setIp(json);
                setLoading(false);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getIp.apply(this, arguments);
    }

    getIp();
  }, []);
  return {
    ip: ip,
    loadingIp: loadingIp,
    IP_API_URL: IP_API_URL
  };
};

_s(IpApi, "GNmpXxFzto1Y9vdOuwR8BHwPpLI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2lwYXBpLnRzeCJdLCJuYW1lcyI6WyJJUF9BUElfVVJMIiwiSXBBcGkiLCJ1c2VTdGF0ZSIsImlwIiwic2V0SXAiLCJsb2FkaW5nSXAiLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0SXAiLCJmZXRjaCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsVUFBVSxHQUFHLHVFQUFuQjs7QUFFUCxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUMsSUFBRCxDQURWO0FBQUEsTUFDWEMsRUFEVztBQUFBLE1BQ1BDLEtBRE87O0FBQUEsbUJBRWNGLCtDQUFRLENBQUMsS0FBRCxDQUZ0QjtBQUFBLE1BRVhHLFNBRlc7QUFBQSxNQUVBQyxVQUZBOztBQUlsQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RELGNBQVUsQ0FBQyxJQUFELENBQVY7O0FBRGMsYUFFQ0UsS0FGRDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxVEFFZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNvQkMsS0FBSyxDQUFDVCxVQUFELENBRHpCOztBQUFBO0FBQ1FVLG1CQURSO0FBQUE7QUFBQSx1QkFFcUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUZyQjs7QUFBQTtBQUVRQSxvQkFGUjtBQUdFUCxxQkFBSyxDQUFDTyxJQUFELENBQUw7QUFDQUwsMEJBQVUsQ0FBQyxLQUFELENBQVY7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGYztBQUFBO0FBQUE7O0FBUWRFLFNBQUs7QUFDTixHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0EsU0FBTztBQUFFTCxNQUFFLEVBQUZBLEVBQUY7QUFBTUUsYUFBUyxFQUFUQSxTQUFOO0FBQWlCTCxjQUFVLEVBQVZBO0FBQWpCLEdBQVA7QUFDRCxDQWhCRDs7R0FBTUMsSzs7S0FBQUEsSztBQWtCTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNThjOGU5MGZhNDRiNmU3MzI5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IElQX0FQSV9VUkwgPSAnaHR0cDovL2lwLWFwaS5jb20vanNvbi8/cXVlcnk9JmZpZWxkcz1zdGF0dXMsY291bnRyeSxyZWdpb25OYW1lLHF1ZXJ5J1xuXG5jb25zdCBJcEFwaSA9ICgpID0+IHtcbiAgY29uc3QgW2lwLCBzZXRJcF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmdJcCwgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0SXAoKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChJUF9BUElfVVJMKTtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0SXAoanNvbik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0SXAoKVxuICB9LCBbXSlcblxuICByZXR1cm4geyBpcCwgbG9hZGluZ0lwLCBJUF9BUElfVVJMIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXBBcGlcbiJdLCJzb3VyY2VSb290IjoiIn0=