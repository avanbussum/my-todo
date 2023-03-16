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

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./components/Task.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar TodoList = function(param) {\n    var tasks = param.tasks, input1 = param.input1, input2 = param.input2, setInput = param.setInput, addTask = param.addTask, deleteTask = param.deleteTask;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[70%] bg-[#354ea3] py-4 px-9 rounded-[30px] overflow-y-scroll\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 6,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl bolder text-white pb-8\",\n                children: \"What's up, Alex!\"\n            }, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 7,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-3 text-[#7d99e9]\",\n                children: \"TODAY'S TASKS\"\n            }, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 10,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex items-center justify-center gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]\",\n                        placeholder: \"Patient First Name\",\n                        // take input from the form here\n                        value: input1,\n                        onChange: function(e) {\n                            return setInput(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                        lineNumber: 12,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]\",\n                        placeholder: \"Patient First Name\",\n                        // take input from the form here\n                        value: input2,\n                        onChange: function(e) {\n                            return setInput(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoMdAddCircle, {\n                        // Add an onClick method\n                        onClick: addTask,\n                        className: \"text-[#ea0aff] text-[50px] cursor-pointer ml-[20px] mb-[10px]\"\n                    }, void 0, false, {\n                        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 11,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: tasks.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        taskText: item.taskText,\n                        onClick: deleteTask(item.id)\n                    }, item.id, false, {\n                        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 32,\n                columnNumber: 3\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n        lineNumber: 5,\n        columnNumber: 78\n    }, _this);\n};\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9MaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUE2QjtBQUNKO0FBQ3FCO0FBRTlDLElBQU1HLFFBQVEsR0FBRztRQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTt5QkFBTSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsaUVBQWlFOzswQkFDM0osOERBQUNYLCtDQUFNOzs7O3FCQUFHOzBCQUNWLDhEQUFDWSxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsaUNBQWlDOzBCQUFDLGtCQUVoRDs7Ozs7cUJBQUs7MEJBQ0wsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7MEJBQUMsZUFBa0I7Ozs7O3FCQUFNOzBCQUM3RCw4REFBQ0UsTUFBSTtnQkFBQ0YsU0FBUyxFQUFDLHdDQUF3Qzs7a0NBQ3RELDhEQUFDRyxPQUFLO3dCQUNKSCxTQUFTLEVBQUMsMkZBQTJGO3dCQUNyR0ksV0FBVyxFQUFDLG9CQUFvQjt3QkFDaEMsZ0NBQWdDO3dCQUNoQ0MsS0FBSyxFQUFFWCxNQUFNO3dCQUNiWSxRQUFRLEVBQUVDLFNBQUFBLENBQUM7bUNBQUlYLFFBQVEsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzt5QkFBQTs7Ozs7NkJBQ3ZDO2tDQUNGLDhEQUFDRixPQUFLO3dCQUNKSCxTQUFTLEVBQUMsMkZBQTJGO3dCQUNyR0ksV0FBVyxFQUFDLG9CQUFvQjt3QkFDaEMsZ0NBQWdDO3dCQUNoQ0MsS0FBSyxFQUFFVixNQUFNO3dCQUNiVyxRQUFRLEVBQUVDLFNBQUFBLENBQUM7bUNBQUlYLFFBQVEsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzt5QkFBQTs7Ozs7NkJBQ3ZDO2tDQUNGLDhEQUFDZCx5REFBYTt3QkFDWix3QkFBd0I7d0JBQ3hCa0IsT0FBTyxFQUFFWixPQUFPO3dCQUNoQkcsU0FBUyxFQUFDLCtEQUErRDs7Ozs7NkJBQ3pFOzs7Ozs7cUJBQ0c7MEJBQ1AsOERBQUNVLElBQUU7MEJBRUFqQixLQUFLLENBQUNrQixHQUFHLENBQUNDLFNBQUFBLElBQUk7eUNBQ2IsOERBQUN0Qiw2Q0FBSTt3QkFFSHVCLFFBQVEsRUFBRUQsSUFBSSxDQUFDQyxRQUFRO3dCQUN2QkosT0FBTyxFQUFFWCxVQUFVLENBQUNjLElBQUksQ0FBQ0UsRUFBRSxDQUFDO3VCQUZ2QkYsSUFBSSxDQUFDRSxFQUFFOzs7OzZCQUlaO2lCQUNILENBQUM7Ozs7O3FCQUNDOzs7Ozs7YUFDRDtDQUFBO0FBdENBdEIsS0FBQUEsUUFBUTtBQXdDZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZG9MaXN0LmpzPzkwNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcidcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcbmltcG9ydCB7IElvTWRBZGRDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbydcblxuY29uc3QgVG9kb0xpc3QgPSAoe3Rhc2tzLCBpbnB1dDEsIGlucHV0Miwgc2V0SW5wdXQsIGFkZFRhc2ssIGRlbGV0ZVRhc2t9KSA9PiA8ZGl2IGNsYXNzTmFtZT0ndy1bNzAlXSBiZy1bIzM1NGVhM10gcHktNCBweC05IHJvdW5kZWQtWzMwcHhdIG92ZXJmbG93LXktc2Nyb2xsJz5cbiAgPE5hdmJhciAvPlxuICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBib2xkZXIgdGV4dC13aGl0ZSBwYi04Jz5cbiAgICBXaGF0JmFwb3M7cyB1cCwgQWxleCFcbiAgPC9oMj5cbiAgPGRpdiBjbGFzc05hbWU9J3B5LTMgdGV4dC1bIzdkOTllOV0nPlRPREFZJmFwb3M7UyBUQVNLUzwvZGl2PlxuICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zJz5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1bMTBweF0gdy1mdWxsIHAtWzEwcHhdIGJvcmRlci1ub25lIG91dGxpbmUtbm9uZSBiZy1bIzAzMTk1Nl0gdGV4dC13aGl0ZSBtYi1bMTBweF0nXG4gICAgICBwbGFjZWhvbGRlcj0nUGF0aWVudCBGaXJzdCBOYW1lJ1xuICAgICAgLy8gdGFrZSBpbnB1dCBmcm9tIHRoZSBmb3JtIGhlcmVcbiAgICAgIHZhbHVlPXtpbnB1dDF9XG4gICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgLz5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1bMTBweF0gdy1mdWxsIHAtWzEwcHhdIGJvcmRlci1ub25lIG91dGxpbmUtbm9uZSBiZy1bIzAzMTk1Nl0gdGV4dC13aGl0ZSBtYi1bMTBweF0nXG4gICAgICBwbGFjZWhvbGRlcj0nUGF0aWVudCBGaXJzdCBOYW1lJ1xuICAgICAgLy8gdGFrZSBpbnB1dCBmcm9tIHRoZSBmb3JtIGhlcmVcbiAgICAgIHZhbHVlPXtpbnB1dDJ9XG4gICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgLz5cbiAgICA8SW9NZEFkZENpcmNsZVxuICAgICAgLy8gQWRkIGFuIG9uQ2xpY2sgbWV0aG9kXG4gICAgICBvbkNsaWNrPXthZGRUYXNrfVxuICAgICAgY2xhc3NOYW1lPSd0ZXh0LVsjZWEwYWZmXSB0ZXh0LVs1MHB4XSBjdXJzb3ItcG9pbnRlciBtbC1bMjBweF0gbWItWzEwcHhdJ1xuICAgIC8+XG4gIDwvZm9ybT5cbiAgPHVsPlxuICAgIHsvKiBMb29wIHRocm91Z2ggYWxsIHRhc2tzIGhlcmUgdXNpbmcgdGhlIFRhc2sgY29tcG9uZW50ICovfVxuICAgIHt0YXNrcy5tYXAoaXRlbSA9PiAoXG4gICAgICA8VGFza1xuICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgIHRhc2tUZXh0PXtpdGVtLnRhc2tUZXh0fVxuICAgICAgICBvbkNsaWNrPXtkZWxldGVUYXNrKGl0ZW0uaWQpfVxuICAgICAgICAvL29uQ2xpY2sgZGVsZXRlXG4gICAgICAvPlxuICAgICkpfVxuICA8L3VsPlxuPC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0Il0sIm5hbWVzIjpbIk5hdmJhciIsIlRhc2siLCJJb01kQWRkQ2lyY2xlIiwiVG9kb0xpc3QiLCJ0YXNrcyIsImlucHV0MSIsImlucHV0MiIsInNldElucHV0IiwiYWRkVGFzayIsImRlbGV0ZVRhc2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpdGVtIiwidGFza1RleHQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList.js\n"));

/***/ })

});