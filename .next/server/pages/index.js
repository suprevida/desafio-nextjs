(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/api/pokeapi.tsx":
/*!*******************************!*\
  !*** ./pages/api/pokeapi.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POKE_API_URL": function() { return /* binding */ POKE_API_URL; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const POKE_API_URL = 'https://pokeapi.co/api/v2/type/15/';

const IpApi = () => {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLoading(true);

    async function getApi() {
      const res = await fetch(POKE_API_URL);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }

    getApi();
  }, []);
  return {
    data,
    loading,
    POKE_API_URL
  };
};

/* harmony default export */ __webpack_exports__["default"] = (IpApi);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_pokeapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/pokeapi */ "./pages/api/pokeapi.tsx");

var _jsxFileName = "/home/alyson/dev/desafio-nextjs/pages/index.tsx";

function Home() {
  const {
    data,
    loading
  } = (0,_api_pokeapi__WEBPACK_IMPORTED_MODULE_1__.default)(); // const { ip } = IpApi();
  // const getRegion = ip?.regionName;

  console.log(data);
  const filter = data.pokemon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Hello World", loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }, this), filter === null || filter === void 0 ? void 0 : filter.map(pokedex => {
      var _pokedex$pokemon;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon = pokedex.pokemon) === null || _pokedex$pokemon === void 0 ? void 0 : _pokedex$pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 32
      }, this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNhZmlvLW5leHRqcy8uL3BhZ2VzL2FwaS9wb2tlYXBpLnRzeCIsIndlYnBhY2s6Ly9kZXNhZmlvLW5leHRqcy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZXNhZmlvLW5leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGVzYWZpby1uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJQT0tFX0FQSV9VUkwiLCJJcEFwaSIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImdldEFwaSIsInJlcyIsImZldGNoIiwianNvbiIsIkhvbWUiLCJQb2tlQXBpIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsInBva2Vtb24iLCJtYXAiLCJwb2tlZGV4IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsWUFBWSxHQUFHLG9DQUFyQjs7QUFFUCxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUNsQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUFHLGtEQUFTLENBQUMsTUFBTTtBQUNkRCxjQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLG1CQUFlRSxNQUFmLEdBQXdCO0FBQ3RCLFlBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNWLFlBQUQsQ0FBdkI7QUFDQSxZQUFNVyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRSxJQUFKLEVBQW5CO0FBQ0FSLGFBQU8sQ0FBQ1EsSUFBRCxDQUFQO0FBQ0FMLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0Q7O0FBQ0RFLFVBQU07QUFDUCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBWUEsU0FBTztBQUFFTixRQUFGO0FBQVFHLFdBQVI7QUFBaUJMO0FBQWpCLEdBQVA7QUFDRCxDQWpCRDs7QUFtQkEsK0RBQWVDLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFHZSxTQUFTVyxJQUFULEdBQWdCO0FBQzdCLFFBQU07QUFBRVYsUUFBRjtBQUFTRztBQUFULE1BQXNCUSxxREFBTyxFQUFuQyxDQUQ2QixDQUU3QjtBQUNBOztBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWWIsSUFBWjtBQUNBLFFBQU1jLE1BQU0sR0FBR2QsSUFBSSxDQUFDZSxPQUFwQjtBQUVBLHNCQUNFO0FBQUEsOEJBR0daLE9BQU8saUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIZCxFQUlHVyxNQUpILGFBSUdBLE1BSkgsdUJBSUdBLE1BQU0sQ0FBRUUsR0FBUixDQUFZQyxPQUFPO0FBQUE7O0FBQUEsMEJBQUs7QUFBQSxrQkFBS0EsT0FBTCxhQUFLQSxPQUFMLDJDQUFLQSxPQUFPLENBQUVGLE9BQWQscURBQUssaUJBQWtCRztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUw7QUFBQSxLQUFuQixDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQsQzs7Ozs7Ozs7Ozs7QUN0QkQsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgUE9LRV9BUElfVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvdHlwZS8xNS8nXG5cbmNvbnN0IElwQXBpID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFwaSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFBPS0VfQVBJX1VSTCk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldERhdGEoanNvbik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0QXBpKClcbiAgfSwgW10pXG5cbiAgXG4gIHJldHVybiB7IGRhdGEsIGxvYWRpbmcsIFBPS0VfQVBJX1VSTCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElwQXBpXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBJcEFwaSBmcm9tICcuL2FwaS9pcGFwaSc7XG5pbXBvcnQgUG9rZUFwaSBmcm9tICcuL2FwaS9wb2tlYXBpJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSAsIGxvYWRpbmcgfSA9ICBQb2tlQXBpKCk7XG4gIC8vIGNvbnN0IHsgaXAgfSA9IElwQXBpKCk7XG4gIC8vIGNvbnN0IGdldFJlZ2lvbiA9IGlwPy5yZWdpb25OYW1lO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zdCBmaWx0ZXIgPSBkYXRhLnBva2Vtb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgSGVsbG8gV29ybGRcbiAgICAgIHsvKiB7Z2V0UmVnaW9ufSAqL31cbiAgICAgIHtsb2FkaW5nICYmIDxoMT5Mb2FkaW5nLi4uPC9oMT59XG4gICAgICB7ZmlsdGVyPy5tYXAocG9rZWRleCA9PiAoPGgxPntwb2tlZGV4Py5wb2tlbW9uPy5uYW1lfTwvaDE+KSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=