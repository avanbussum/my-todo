"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Patient.js":
/*!*******************************!*\
  !*** ./components/Patient.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\nvar _this = undefined;\n\n\nvar Task = function(param) {\n    var firstName = param.firstName, lastName = param.lastName, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-[#031956] text-[#b6c7db] flex w-[70%] rounded-[15px] mb-[10px] flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between w-full p-[20px] text-xl\",\n                    children: firstName\n                }, void 0, false, {\n                    fileName: \"/home/avanbuss/my-todo/client/components/Patient.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/Patient.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-[#031956] text-[#b6c7db] flex w-[70%] rounded-[15px] mb-[10px] flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between w-full text-xl\",\n                    children: lastName\n                }, void 0, false, {\n                    fileName: \"/home/avanbuss/my-todo/client/components/Patient.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/Patient.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsFillTrashFill, {\n                onClick: onClick,\n                className: \"text-2xl cursor-pointer ml-10\"\n            }, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/Patient.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/avanbuss/my-todo/client/components/Patient.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhdGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUFnRDtBQUVoRCxJQUFNQyxJQUFJLEdBQUcsZ0JBQW9DO1FBQWxDQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLE9BQU8sU0FBUEEsT0FBTztJQUN6QyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsOEJBQThCOzswQkFDM0MsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyRUFBMkU7MEJBQ3hGLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsMkRBQTJEOzhCQUN2RUosU0FBUzs7Ozs7eUJBQ047Ozs7O3FCQUNGOzBCQUNOLDhEQUFDRyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkVBQTJFOzBCQUN4Riw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGtEQUFtRDs4QkFDL0RILFFBQVE7Ozs7O3lCQUNMOzs7OztxQkFDRjswQkFDTiw4REFBQ0gsMkRBQWU7Z0JBQ2RJLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJFLFNBQVMsRUFBQywrQkFBK0I7Ozs7O3FCQUN6Qzs7Ozs7O2FBQ0UsQ0FDUDtDQUNGO0FBbkJLTCxLQUFBQSxJQUFJO0FBcUJWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGF0aWVudC5qcz83NzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJzRmlsbFRyYXNoRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuXG5jb25zdCBUYXNrID0gKHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBvbkNsaWNrfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgYmctWyMwMzE5NTZdIHRleHQtWyNiNmM3ZGJdIGZsZXggdy1bNzAlXSByb3VuZGVkLVsxNXB4XSBtYi1bMTBweF0gZmxleC0xJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcC1bMjBweF0gdGV4dC14bCc+XG4gICAgICAgICAge2ZpcnN0TmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgYmctWyMwMzE5NTZdIHRleHQtWyNiNmM3ZGJdIGZsZXggdy1bNzAlXSByb3VuZGVkLVsxNXB4XSBtYi1bMTBweF0gZmxleC0xJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgIHRleHQteGwnPlxuICAgICAgICAgIHtsYXN0TmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCc0ZpbGxUcmFzaEZpbGxcbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBjdXJzb3ItcG9pbnRlciBtbC0xMCdcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza1xuIl0sIm5hbWVzIjpbIkJzRmlsbFRyYXNoRmlsbCIsIlRhc2siLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Patient.js\n"));

/***/ })

});