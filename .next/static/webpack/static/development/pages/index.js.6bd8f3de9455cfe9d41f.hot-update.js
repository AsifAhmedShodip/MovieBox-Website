webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationBar */ "./components/NavigationBar.js");
var _jsxFileName = "D:\\Codes\\React\\MovieBox-Website\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(_NavigationBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/NavBarItems.js":
/*!***********************************!*\
  !*** ./components/NavBarItems.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBarItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/esm/InputGroup.js");
var _jsxFileName = "D:\\Codes\\React\\MovieBox-Website\\components\\NavBarItems.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import SignInModal from '../Authentication/SignInModal'
//import * as functions from '../utils/functions'




function NavBarItems(props) {
  _s();

  const {
    0: userName,
    1: setUserName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); //let location = useLocation()

  const onFormSubmit = event => {
    event.preventDefault();

    if (search) {
      window.location = '/search/' + search;
    }
  }; // const showSignInModal = () => {
  // 	return <SignInModal />
  // }


  const SearchBox = () => {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      inline: true,
      onSubmit: onFormSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 4
      }
    }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }
    }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Prepend, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "outline-secondary",
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx("i", {
      class: "fa fa-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 8
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
      type: "text",
      placeholder: "Search",
      className: "mr-sm-2 search-box",
      value: search,
      onChange: e => setSearch(e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 6
      }
    })));
  };

  if (props.currentUser) {
    functions.getUsername(props.currentUser.uid, name => setUserName(name));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 4
      }
    }, __jsx(SearchBox, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }
    }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
      href: "/news",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }
    }, "News"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }
    }, userName), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
      onClick: () => _firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().signOut(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }, "Log Out"));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 3
    }
  }, __jsx(SearchBox, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }
  }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    href: "/news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }
  }, "News"));
}

_s(NavBarItems, "f1jdptz13OPDILwOi5cD4XRsYyM=");

_c = NavBarItems;

var _c;

$RefreshReg$(_c, "NavBarItems");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _NavBarItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBarItems */ "./components/NavBarItems.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/logo.png */ "./images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Codes\\React\\MovieBox-Website\\components\\NavigationBar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 //import { AuthContext } from '../context/AuthProvider'

 //import './NavigationBar.css'

function NavigationBar() {
  _s();

  const [navbarColor, setNavbarColor] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('navbar-transparent');
  const currentUser = null; //useContext(AuthContext)

  const updateNavbarColor = () => {
    if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
      setNavbarColor('navbar-color');
    } else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
      setNavbarColor('navbar-transparent');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    collapseOnSelect: true,
    expand: "lg",
    className: "navbar-dark bg-dark",
    fixed: "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Brand, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, __jsx("img", {
    className: "main-logo",
    src: _images_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  })), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Collapse, {
    id: "responsive-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_NavBarItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentUser: currentUser,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 8
    }
  }))))));
}

_s(NavigationBar, "hGZbP2LlUEKglctsQXzp1WlxIGg=");

_c = NavigationBar;
/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

var _c;

$RefreshReg$(_c, "NavigationBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhckl0ZW1zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdkJhckl0ZW1zIiwicHJvcHMiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJvbkZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJTZWFyY2hCb3giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjdXJyZW50VXNlciIsImZ1bmN0aW9ucyIsImdldFVzZXJuYW1lIiwidWlkIiwibmFtZSIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJOYXZpZ2F0aW9uQmFyIiwibmF2YmFyQ29sb3IiLCJzZXROYXZiYXJDb2xvciIsIlJlYWN0IiwidXBkYXRlTmF2YmFyQ29sb3IiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ2hDLFNBQ0MsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQ7QUFLQSxDQU5EOztLQUFNRCxNO0FBUVNBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw4REFBRDtBQUFRLG9CQUFnQixNQUF4QjtBQUF5QixVQUFNLEVBQUMsSUFBaEM7QUFBcUMsYUFBUyxFQUFDLHFCQUEvQztBQUFxRSxTQUFLLEVBQUMsS0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsOERBQUQsQ0FBUSxLQUFSO0FBQWMsUUFBSSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLE9BQUcsRUFBRVMsdURBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBS0MsTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBZSxxQkFBYyx1QkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELEVBTUMsTUFBQyw4REFBRCxDQUFRLFFBQVI7QUFBaUIsTUFBRSxFQUFDLHVCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFEO0FBQWEsZUFBVyxFQUFFckIsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FORCxDQURELENBREQsQ0FERDtBQWtCQTs7R0F0Q1FRLGE7O0tBQUFBLGE7QUF3Q01BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42YmQ4ZjNkZTk0NTVjZmU5ZDQxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmlnYXRpb25CYXInXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PE5hdmJhciAvPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UnXHJcbi8vaW1wb3J0IFNpZ25Jbk1vZGFsIGZyb20gJy4uL0F1dGhlbnRpY2F0aW9uL1NpZ25Jbk1vZGFsJ1xyXG4vL2ltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tICcuLi91dGlscy9mdW5jdGlvbnMnXHJcblxyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnXHJcbmltcG9ydCB7IEZvcm0sIEZvcm1Db250cm9sLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFySXRlbXMocHJvcHMpIHtcclxuXHRjb25zdCBbIHVzZXJOYW1lLCBzZXRVc2VyTmFtZSBdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgWyBzZWFyY2gsIHNldFNlYXJjaCBdID0gdXNlU3RhdGUoJycpXHJcblxyXG5cdC8vbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG5cclxuXHRjb25zdCBvbkZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHRcdGlmIChzZWFyY2gpIHtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uID0gJy9zZWFyY2gvJyArIHNlYXJjaFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gY29uc3Qgc2hvd1NpZ25Jbk1vZGFsID0gKCkgPT4ge1xyXG5cdC8vIFx0cmV0dXJuIDxTaWduSW5Nb2RhbCAvPlxyXG5cdC8vIH1cclxuXHJcblx0Y29uc3QgU2VhcmNoQm94ID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEZvcm0gaW5saW5lIG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9PlxyXG5cdFx0XHRcdDxJbnB1dEdyb3VwPlxyXG5cdFx0XHRcdFx0PElucHV0R3JvdXAuUHJlcGVuZD5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibXItc20tMiBzZWFyY2gtYm94XCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlYXJjaH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0lucHV0R3JvdXA+XHJcblx0XHRcdDwvRm9ybT5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGlmIChwcm9wcy5jdXJyZW50VXNlcikge1xyXG5cdFx0ZnVuY3Rpb25zLmdldFVzZXJuYW1lKHByb3BzLmN1cnJlbnRVc2VyLnVpZCwgKG5hbWUpID0+IHNldFVzZXJOYW1lKG5hbWUpKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxTZWFyY2hCb3ggLz5cclxuXHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9uZXdzXCI+TmV3czwvTmF2Lkxpbms+XHJcblx0XHRcdFx0PE5hdi5MaW5rPnt1c2VyTmFtZX08L05hdi5MaW5rPlxyXG5cdFx0XHRcdDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpfT5Mb2cgT3V0PC9OYXYuTGluaz5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxTZWFyY2hCb3ggLz5cclxuXHRcdFx0PE5hdi5MaW5rIGhyZWY9XCIvbmV3c1wiPk5ld3M8L05hdi5MaW5rPlxyXG5cdFx0XHR7LyogPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgdG89e3sgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLCBzZWFyY2g6ICc/bG9naW49dHJ1ZScgfX0+U2lnbiBJbjwvTGluaz4gKi99XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdidcclxuXHJcbmltcG9ydCBOYXZCYXJJdGVtcyBmcm9tICcuL05hdkJhckl0ZW1zJ1xyXG5cclxuLy9pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aFByb3ZpZGVyJ1xyXG5cclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28ucG5nJ1xyXG4vL2ltcG9ydCAnLi9OYXZpZ2F0aW9uQmFyLmNzcydcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25CYXIoKSB7XHJcblx0Y29uc3QgWyBuYXZiYXJDb2xvciwgc2V0TmF2YmFyQ29sb3IgXSA9IFJlYWN0LnVzZVN0YXRlKCduYXZiYXItdHJhbnNwYXJlbnQnKVxyXG5cclxuXHRjb25zdCBjdXJyZW50VXNlciA9IG51bGwgLy91c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG5cclxuXHRjb25zdCB1cGRhdGVOYXZiYXJDb2xvciA9ICgpID0+IHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMzk5IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMzk5KSB7XHJcblx0XHRcdHNldE5hdmJhckNvbG9yKCduYXZiYXItY29sb3InKVxyXG5cdFx0fSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDwgNDAwIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIDwgNDAwKSB7XHJcblx0XHRcdHNldE5hdmJhckNvbG9yKCduYXZiYXItdHJhbnNwYXJlbnQnKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVOYXZiYXJDb2xvcilcclxuXHRcdHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlTmF2YmFyQ29sb3IpXHJcblx0XHR9XHJcblx0fSwgW10pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT0nbmF2YmFyLWRhcmsgYmctZGFyaycgZml4ZWQ9XCJ0b3BcIj5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cIm1haW4tbG9nb1wiIHNyYz17bG9nb30gLz5cclxuXHRcdFx0XHRcdDwvTmF2YmFyLkJyYW5kPlxyXG5cclxuXHRcdFx0XHRcdDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxyXG5cdFx0XHRcdFx0PE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiPlxyXG5cdFx0XHRcdFx0XHQ8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2QmFySXRlbXMgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L05hdj5cclxuXHRcdFx0XHRcdDwvTmF2YmFyLkNvbGxhcHNlPlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L05hdmJhcj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=