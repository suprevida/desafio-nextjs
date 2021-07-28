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

const POKE_API_URL = 'https://pokeapi.co/api/v2/type/3';

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

/***/ "./pages/components/Cards/Card.tsx":
/*!*****************************************!*\
  !*** ./pages/components/Cards/Card.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/alyson/dev/desafio-nextjs/pages/components/Cards/Card.tsx";



const Card = ({
  name,
  imgUrl,
  price
}) => {
  const {
    0: bgImg,
    1: setBgimg
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: description,
    1: setDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    async function getUrl(url) {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);
      setBgimg(response.data.sprites.front_default);
      setDescription(response.data.types.map(u => u === null || u === void 0 ? void 0 : u.type.name));
    }

    getUrl(imgUrl);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card",
      style: {
        backgroundImage: `url(${bgImg})`
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "rate",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-uppercase pb-2",
            children: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-uppercase pb-2",
            children: ["R$ ", price, ",00"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "btn btn-dark",
            children: "Add to cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

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
/* harmony import */ var _components_Cards_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Cards/Card */ "./pages/components/Cards/Card.tsx");


var _jsxFileName = "/home/alyson/dev/desafio-nextjs/pages/index.tsx";


function Home() {
  const {
    data,
    loading
  } = (0,_api_pokeapi__WEBPACK_IMPORTED_MODULE_1__.default)();
  const filter = data === null || data === void 0 ? void 0 : data.pokemon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "my-5 text-uppercase text-bold",
          children: "Pokemons for sale!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "d-flex flex-row justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "cart",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "title",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: "CART"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "item d-flex mb-5",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "Nome"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "ms-5",
                  children: "pre\xE7o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "purchase",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  children: "TOTAL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "R$xxxx,00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "btn btn-success",
                  children: "Purchase"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-9 d-flex flex-wrap justify-content-between gap-1",
            children: filter === null || filter === void 0 ? void 0 : filter.map(pokedex => {
              var _pokedex$pokemon, _pokedex$pokemon2, _pokedex$pokemon3, _pokedex$pokemon4, _pokedex$pokemon5;

              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-md-2 mb-2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
                  name: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon2 = pokedex.pokemon) === null || _pokedex$pokemon2 === void 0 ? void 0 : _pokedex$pokemon2.name,
                  type: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon3 = pokedex.pokemon) === null || _pokedex$pokemon3 === void 0 ? void 0 : _pokedex$pokemon3.url,
                  imgUrl: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon4 = pokedex.pokemon) === null || _pokedex$pokemon4 === void 0 ? void 0 : _pokedex$pokemon4.url,
                  price: `${(pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon5 = pokedex.pokemon) === null || _pokedex$pokemon5 === void 0 ? void 0 : _pokedex$pokemon5.name.length) * 25}`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 19
                }, this)
              }, pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon = pokedex.pokemon) === null || _pokedex$pokemon === void 0 ? void 0 : _pokedex$pokemon.name, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 19
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNhZmlvLW5leHRqcy8uL3BhZ2VzL2FwaS9wb2tlYXBpLnRzeCIsIndlYnBhY2s6Ly9kZXNhZmlvLW5leHRqcy8uL3BhZ2VzL2NvbXBvbmVudHMvQ2FyZHMvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZGVzYWZpby1uZXh0anMvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVzYWZpby1uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Rlc2FmaW8tbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kZXNhZmlvLW5leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBPS0VfQVBJX1VSTCIsIklwQXBpIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0QXBpIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiQ2FyZCIsIm5hbWUiLCJpbWdVcmwiLCJwcmljZSIsImJnSW1nIiwic2V0QmdpbWciLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZ2V0VXJsIiwidXJsIiwicmVzcG9uc2UiLCJheGlvcyIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwidHlwZXMiLCJtYXAiLCJ1IiwidHlwZSIsImJhY2tncm91bmRJbWFnZSIsIkhvbWUiLCJQb2tlQXBpIiwiZmlsdGVyIiwicG9rZW1vbiIsInBva2VkZXgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLFlBQVksR0FBRyxrQ0FBckI7O0FBRVAsTUFBTUMsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLElBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVD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QUE7O0FBQUEsa0NBQ2xCO0FBQUsseUJBQVMsRUFBQyxlQUFmO0FBQUEsdUNBQ0EsOERBQUMsMkRBQUQ7QUFBTSxzQkFBSSxFQUFFQSxPQUFGLGFBQUVBLE9BQUYsNENBQUVBLE9BQU8sQ0FBRUQsT0FBWCxzREFBRSxrQkFBa0JyQixJQUE5QjtBQUNBLHNCQUFJLEVBQUVzQixPQUFGLGFBQUVBLE9BQUYsNENBQUVBLE9BQU8sQ0FBRUQsT0FBWCxzREFBRSxrQkFBa0JiLEdBRHhCO0FBRUEsd0JBQU0sRUFBRWMsT0FBRixhQUFFQSxPQUFGLDRDQUFFQSxPQUFPLENBQUVELE9BQVgsc0RBQUUsa0JBQWtCYixHQUYxQjtBQUdBLHVCQUFLLEVBQUcsR0FBRSxDQUFBYyxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLGlDQUFBQSxPQUFPLENBQUVELE9BQVQsd0VBQWtCckIsSUFBbEIsQ0FBdUJ1QixNQUF2QixJQUFnQyxFQUFHO0FBSDdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxpQkFBb0NELE9BQXBDLGFBQW9DQSxPQUFwQywyQ0FBb0NBLE9BQU8sQ0FBRUQsT0FBN0MscURBQW9DLGlCQUFrQnJCLElBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRGtCO0FBQUEsYUFBbkI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF3Q0QsQzs7Ozs7Ozs7Ozs7QUN2REQsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgUE9LRV9BUElfVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvdHlwZS8zJ1xuXG5jb25zdCBJcEFwaSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBcGkoKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChQT0tFX0FQSV9VUkwpO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBzZXREYXRhKGpzb24pO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGdldEFwaSgpXG4gIH0sIFtdKVxuXG4gIFxuICByZXR1cm4geyBkYXRhLCBsb2FkaW5nLCBQT0tFX0FQSV9VUkwgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJcEFwaVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuXG50eXBlIFNldHRpbmdzPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgdHlwZTogc3RyaW5nLFxuICBpbWdVcmw6IHN0cmluZyxcbiAgcHJpY2U6IHN0cmluZ1xufVxuXG5jb25zdCBDYXJkID0gKHtuYW1lLCBpbWdVcmwsIHByaWNlfTogU2V0dGluZ3MpID0+IHtcbiAgY29uc3QgWyBiZ0ltZywgc2V0QmdpbWddID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFsgZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVybCh1cmwpe1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICAgIHNldEJnaW1nKHJlc3BvbnNlLmRhdGEuc3ByaXRlcy5mcm9udF9kZWZhdWx0KTtcbiAgICAgIHNldERlc2NyaXB0aW9uKHJlc3BvbnNlLmRhdGEudHlwZXMubWFwKCh1KSA9PiB1Py50eXBlLm5hbWUpKTtcbiAgICB9XG4gICAgZ2V0VXJsKGltZ1VybClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2JnSW1nfSlgIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPGgzPntuYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSBwYi0yXCI+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgcGItMlwiPlxuICAgICAgICAgICAgICBSJCB7cHJpY2V9LDAwXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJcEFwaSBmcm9tICcuL2FwaS9pcGFwaSc7XG5pbXBvcnQgUG9rZUFwaSBmcm9tICcuL2FwaS9wb2tlYXBpJztcbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9DYXJkcy9DYXJkJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEgLCBsb2FkaW5nIH0gPSAgUG9rZUFwaSgpO1xuICBjb25zdCBmaWx0ZXIgPSBkYXRhPy5wb2tlbW9uO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2xvYWRpbmcgJiYgPGgxPkxvYWRpbmcuLi48L2gxPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTUgdGV4dC11cHBlcmNhc2UgdGV4dC1ib2xkXCI+UG9rZW1vbnMgZm9yIHNhbGUhPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5DQVJUPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBkLWZsZXggbWItNVwiPlxuICAgICAgICAgICAgICAgIDxwPk5vbWU8L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXMtNVwiPnByZcOnbzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyY2hhc2VcIj5cbiAgICAgICAgICAgICAgICA8aDM+VE9UQUw8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlIkeHh4eCwwMDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlB1cmNoYXNlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05IGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWJldHdlZW4gZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyPy5tYXAocG9rZWRleCA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIG1iLTJcIiBrZXk9e3Bva2VkZXg/LnBva2Vtb24/Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPENhcmQgbmFtZT17cG9rZWRleD8ucG9rZW1vbj8ubmFtZX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9e3Bva2VkZXg/LnBva2Vtb24/LnVybH1cbiAgICAgICAgICAgICAgICAgIGltZ1VybD17cG9rZWRleD8ucG9rZW1vbj8udXJsfVxuICAgICAgICAgICAgICAgICAgcHJpY2U9e2Ake3Bva2VkZXg/LnBva2Vtb24/Lm5hbWUubGVuZ3RoICogMjV9YH0vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9