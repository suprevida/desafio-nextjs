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
    className: "card-boz",
    style: {
      backgroundImage: `url(${bgImg})`
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "top",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bottom",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "bolder",
          children: ["R$", price, ",00"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "btn btn-dark",
          children: "Add to cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card); // {name} {description}

/***/ }),

/***/ "./pages/components/Cart/Cart.tsx":
/*!****************************************!*\
  !*** ./pages/components/Cart/Cart.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/alyson/dev/desafio-nextjs/pages/components/Cart/Cart.tsx";


const Cart = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "cart",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "Buys"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "footer d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "m-0",
          children: "Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "bolder m-0",
          children: "R$ 150,00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        children: "Purchase"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);
{
  /* <div className="col">
  <div className="cart">
   <div className="title">
     <h2>CART</h2>
   </div>
   <div className="item d-flex mb-5">
     <p>Nome</p>
     <span className="ms-5">preço</span>
   </div>
   <div className="purchase">
     <h3>TOTAL</h3>
     <p>R$xxxx,00</p>
     <button className="btn btn-success">Purchase</button>
   </div>
  </div>
  </div> */
}

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
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Cart/Cart */ "./pages/components/Cart/Cart.tsx");


var _jsxFileName = "/home/alyson/dev/desafio-nextjs/pages/index.tsx";



function Home() {
  const {
    data,
    loading
  } = (0,_api_pokeapi__WEBPACK_IMPORTED_MODULE_1__.default)();
  const filter = data === null || data === void 0 ? void 0 : data.pokemon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container overflow-hidden",
      children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "my-5 text-uppercase text-bold olhaqui"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex flex-row justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-9",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row g-3",
            children: filter === null || filter === void 0 ? void 0 : filter.map(pokedex => {
              var _pokedex$pokemon, _pokedex$pokemon2, _pokedex$pokemon3, _pokedex$pokemon4, _pokedex$pokemon5;

              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
                  name: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon2 = pokedex.pokemon) === null || _pokedex$pokemon2 === void 0 ? void 0 : _pokedex$pokemon2.name,
                  type: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon3 = pokedex.pokemon) === null || _pokedex$pokemon3 === void 0 ? void 0 : _pokedex$pokemon3.url,
                  imgUrl: pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon4 = pokedex.pokemon) === null || _pokedex$pokemon4 === void 0 ? void 0 : _pokedex$pokemon4.url,
                  price: `${(pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon5 = pokedex.pokemon) === null || _pokedex$pokemon5 === void 0 ? void 0 : _pokedex$pokemon5.name.length) * 25}`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, this)
              }, pokedex === null || pokedex === void 0 ? void 0 : (_pokedex$pokemon = pokedex.pokemon) === null || _pokedex$pokemon === void 0 ? void 0 : _pokedex$pokemon.name, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 19
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNhZmlvLW5leHRqcy8uL3BhZ2VzL2FwaS9wb2tlYXBpLnRzeCIsIndlYnBhY2s6Ly9kZXNhZmlvLW5leHRqcy8uL3BhZ2VzL2NvbXBvbmVudHMvQ2FyZHMvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZGVzYWZpby1uZXh0anMvLi9wYWdlcy9jb21wb25lbnRzL0NhcnQvQ2FydC50c3giLCJ3ZWJwYWNrOi8vZGVzYWZpby1uZXh0anMvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVzYWZpby1uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Rlc2FmaW8tbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kZXNhZmlvLW5leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBPS0VfQVBJX1VSTCIsIklwQXBpIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0QXBpIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiQ2FyZCIsIm5hbWUiLCJpbWdVcmwiLCJwcmljZSIsImJnSW1nIiwic2V0QmdpbWciLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZ2V0VXJsIiwidXJsIiwicmVzcG9uc2UiLCJheGlvcyIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwidHlwZXMiLCJtYXAiLCJ1IiwidHlwZSIsImJhY2tncm91bmRJbWFnZSIsIkNhcnQiLCJIb21lIiwiUG9rZUFwaSIsImZpbHRlciIsInBva2Vtb24iLCJwb2tlZGV4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUcsa0NBQXJCOztBQUVQLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFB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Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBQT0tFX0FQSV9VUkwgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi90eXBlLzMnXG5cbmNvbnN0IElwQXBpID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFwaSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFBPS0VfQVBJX1VSTCk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldERhdGEoanNvbik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0QXBpKClcbiAgfSwgW10pXG5cbiAgXG4gIHJldHVybiB7IGRhdGEsIGxvYWRpbmcsIFBPS0VfQVBJX1VSTCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElwQXBpXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5cbnR5cGUgU2V0dGluZ3M9IHtcbiAgbmFtZTogc3RyaW5nLFxuICB0eXBlOiBzdHJpbmcsXG4gIGltZ1VybDogc3RyaW5nLFxuICBwcmljZTogc3RyaW5nXG59XG5cbmNvbnN0IENhcmQgPSAoe25hbWUsIGltZ1VybCwgcHJpY2V9OiBTZXR0aW5ncykgPT4ge1xuICBjb25zdCBbIGJnSW1nLCBzZXRCZ2ltZ10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgWyBkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXJsKHVybCl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgICAgc2V0QmdpbWcocmVzcG9uc2UuZGF0YS5zcHJpdGVzLmZyb250X2RlZmF1bHQpO1xuICAgICAgc2V0RGVzY3JpcHRpb24ocmVzcG9uc2UuZGF0YS50eXBlcy5tYXAoKHUpID0+IHU/LnR5cGUubmFtZSkpO1xuICAgIH1cbiAgICBnZXRVcmwoaW1nVXJsKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm96XCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmdJbWd9KWAgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgICAgICAgPGgzPntuYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9sZGVyXCI+UiR7cHJpY2V9LDAwPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCI+QWRkIHRvIGNhcnQ8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG5cbi8vIHtuYW1lfSB7ZGVzY3JpcHRpb259ICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQ2FydCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICA8aDI+Q2FydDwvaDI+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJ1eXNcIj5cblxuICAgICAgPC9kaXY+XG4gICAgICA8aHIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibS0wXCI+VG90YWw8L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYm9sZGVyIG0tMFwiPlIkIDE1MCwwMDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uPlB1cmNoYXNlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydFxuXG5cbnsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuPGRpdiBjbGFzc05hbWU9XCJjYXJ0XCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICA8aDI+Q0FSVDwvaDI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gZC1mbGV4IG1iLTVcIj5cbiAgICA8cD5Ob21lPC9wPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1zLTVcIj5wcmXDp288L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cInB1cmNoYXNlXCI+XG4gICAgPGgzPlRPVEFMPC9oMz5cbiAgICA8cD5SJHh4eHgsMDA8L3A+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5QdXJjaGFzZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuPC9kaXY+ICovfSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSXBBcGkgZnJvbSAnLi9hcGkvaXBhcGknO1xuaW1wb3J0IFBva2VBcGkgZnJvbSAnLi9hcGkvcG9rZWFwaSc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQ2FyZHMvQ2FyZCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuL2NvbXBvbmVudHMvQ2FydC9DYXJ0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEgLCBsb2FkaW5nIH0gPSAgUG9rZUFwaSgpO1xuICBjb25zdCBmaWx0ZXIgPSBkYXRhPy5wb2tlbW9uO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIHtsb2FkaW5nICYmIDxoMT5Mb2FkaW5nLi4uPC9oMT59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LWJvbGQgb2xoYXF1aVwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICA8Q2FydCAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTNcIj5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyPy5tYXAocG9rZWRleCA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCIga2V5PXtwb2tlZGV4Py5wb2tlbW9uPy5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkIG5hbWU9e3Bva2VkZXg/LnBva2Vtb24/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICB0eXBlPXtwb2tlZGV4Py5wb2tlbW9uPy51cmx9XG4gICAgICAgICAgICAgICAgICBpbWdVcmw9e3Bva2VkZXg/LnBva2Vtb24/LnVybH1cbiAgICAgICAgICAgICAgICAgIHByaWNlPXtgJHtwb2tlZGV4Py5wb2tlbW9uPy5uYW1lLmxlbmd0aCAqIDI1fWB9Lz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9