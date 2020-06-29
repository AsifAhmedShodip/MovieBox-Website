webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _NavBarItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBarItems */ "./components/NavBarItems.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/logo.png */ "./images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Codes\\React\\MovieBox-Website\\components\\NavigationBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 //import { AuthContext } from '../context/AuthProvider'

 //import './NavigationBar.css'

const updateNavbarColor = () => {
  if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
    setNavbarColor('navbar-color');
  } else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
    setNavbarColor('navbar-transparent');
  }
};

function NavigationBar() {
  // const [ navbarColor, setNavbarColor ] = React.useState('navbar-color')
  // const currentUser = null //useContext(AuthContext)
  // useEffect(() => {
  // 	window.addEventListener('scroll', updateNavbarColor)
  // 	return function cleanup() {
  // 		window.removeEventListener('scroll', updateNavbarColor)
  // 	}
  // }, [])
  return __jsx("nav", {
    class: "navbar navbar-expand-lg navbar-color",
    className: "jsx-607776640",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx("a", {
    class: "navbar-brand",
    href: "#",
    className: "jsx-607776640",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, "Navbar"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "607776640",
    __self: this
  }, "navbar-color.jsx-607776640{background-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2Rlc1xcUmVhY3RcXE1vdmllQm94LVdlYnNpdGVcXGNvbXBvbmVudHNcXE5hdmlnYXRpb25CYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNLLEFBRzhCLHVCQUN4QiIsImZpbGUiOiJEOlxcQ29kZXNcXFJlYWN0XFxNb3ZpZUJveC1XZWJzaXRlXFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJ1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnXHJcblxyXG5pbXBvcnQgTmF2QmFySXRlbXMgZnJvbSAnLi9OYXZCYXJJdGVtcydcclxuXHJcbi8vaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhQcm92aWRlcidcclxuXHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL2ltYWdlcy9sb2dvLnBuZydcclxuLy9pbXBvcnQgJy4vTmF2aWdhdGlvbkJhci5jc3MnXHJcblxyXG5jb25zdCB1cGRhdGVOYXZiYXJDb2xvciA9ICgpID0+IHtcclxuXHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDM5OSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDM5OSkge1xyXG5cdFx0c2V0TmF2YmFyQ29sb3IoJ25hdmJhci1jb2xvcicpXHJcblx0fSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDwgNDAwIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIDwgNDAwKSB7XHJcblx0XHRzZXROYXZiYXJDb2xvcignbmF2YmFyLXRyYW5zcGFyZW50JylcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25CYXIoKSB7XHJcblx0Ly8gY29uc3QgWyBuYXZiYXJDb2xvciwgc2V0TmF2YmFyQ29sb3IgXSA9IFJlYWN0LnVzZVN0YXRlKCduYXZiYXItY29sb3InKVxyXG5cclxuXHQvLyBjb25zdCBjdXJyZW50VXNlciA9IG51bGwgLy91c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG5cclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZU5hdmJhckNvbG9yKVxyXG5cdC8vIFx0cmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XHJcblx0Ly8gXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVOYXZiYXJDb2xvcilcclxuXHQvLyBcdH1cclxuXHQvLyB9LCBbXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItY29sb3JcIj5cclxuXHRcdFx0PGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxyXG5cdFx0XHRcdE5hdmJhclxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdG5hdmJhci1jb2xvciB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHQ8L25hdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYXJcclxuIl19 */\n/*@ sourceURL=D:\\\\Codes\\\\React\\\\MovieBox-Website\\\\components\\\\NavigationBar.js */"));
}

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanMiXSwibmFtZXMiOlsidXBkYXRlTmF2YmFyQ29sb3IiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJzZXROYXZiYXJDb2xvciIsIk5hdmlnYXRpb25CYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0NBSUE7O0NBR0E7O0FBRUEsTUFBTUEsaUJBQWlCLEdBQUcsTUFBTTtBQUMvQixNQUFJQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXpCLEdBQXFDLEdBQXJDLElBQTRDRixRQUFRLENBQUNHLElBQVQsQ0FBY0QsU0FBZCxHQUEwQixHQUExRSxFQUErRTtBQUM5RUUsa0JBQWMsQ0FBQyxjQUFELENBQWQ7QUFDQSxHQUZELE1BRU8sSUFBSUosUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUF6QixHQUFxQyxHQUFyQyxJQUE0Q0YsUUFBUSxDQUFDRyxJQUFULENBQWNELFNBQWQsR0FBMEIsR0FBMUUsRUFBK0U7QUFDckZFLGtCQUFjLENBQUMsb0JBQUQsQ0FBZDtBQUNBO0FBQ0QsQ0FORDs7QUFRQSxTQUFTQyxhQUFULEdBQXlCO0FBQ3hCO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUNDO0FBQUssU0FBSyxFQUFDLHNDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsU0FBSyxFQUFDLGNBQVQ7QUFBd0IsUUFBSSxFQUFDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBQUE7QUFBQTtBQUFBLDg4RUFERDtBQWNBOztLQTFCUUEsYTtBQTRCTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjIyM2I4ZWFkNmE3NzY3OWI3M2MzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdidcclxuXHJcbmltcG9ydCBOYXZCYXJJdGVtcyBmcm9tICcuL05hdkJhckl0ZW1zJ1xyXG5cclxuLy9pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aFByb3ZpZGVyJ1xyXG5cclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28ucG5nJ1xyXG4vL2ltcG9ydCAnLi9OYXZpZ2F0aW9uQmFyLmNzcydcclxuXHJcbmNvbnN0IHVwZGF0ZU5hdmJhckNvbG9yID0gKCkgPT4ge1xyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMzk5IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMzk5KSB7XHJcblx0XHRzZXROYXZiYXJDb2xvcignbmF2YmFyLWNvbG9yJylcclxuXHR9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPCA0MDAgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPCA0MDApIHtcclxuXHRcdHNldE5hdmJhckNvbG9yKCduYXZiYXItdHJhbnNwYXJlbnQnKVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkJhcigpIHtcclxuXHQvLyBjb25zdCBbIG5hdmJhckNvbG9yLCBzZXROYXZiYXJDb2xvciBdID0gUmVhY3QudXNlU3RhdGUoJ25hdmJhci1jb2xvcicpXHJcblxyXG5cdC8vIGNvbnN0IGN1cnJlbnRVc2VyID0gbnVsbCAvL3VzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcblxyXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlTmF2YmFyQ29sb3IpXHJcblx0Ly8gXHRyZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcclxuXHQvLyBcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZU5hdmJhckNvbG9yKVxyXG5cdC8vIFx0fVxyXG5cdC8vIH0sIFtdKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1jb2xvclwiPlxyXG5cdFx0XHQ8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcblx0XHRcdFx0TmF2YmFyXHJcblx0XHRcdDwvYT5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0bmF2YmFyLWNvbG9yIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdDwvbmF2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9