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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./components/Task.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar TodoList = function(param) {\n    var tasks = param.tasks, input = param.input, setInput = param.setInput, addTask = param.addTask, deleteTask = param.deleteTask;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[70%] bg-[#354ea3] py-4 px-9 rounded-[30px] overflow-y-scroll\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 6,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl bolder text-white pb-8\",\n                children: \"What's up, Alex!\"\n            }, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 7,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-3 text-[#7d99e9]\",\n                children: \"TODAY'S TASKS\"\n            }, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 10,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex items-center justify-center gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]\",\n                        placeholder: \"Patient First Name\",\n                        // take input from the form here\n                        value: input,\n                        onChange: function(e) {\n                            return setInput(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                        lineNumber: 12,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]\",\n                        placeholder: \"Patient First Name\",\n                        // take input from the form here\n                        value: input,\n                        onChange: function(e) {\n                            return setInput(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoMdAddCircle, {\n                        // Add an onClick method\n                        onClick: addTask,\n                        className: \"text-[#ea0aff] text-[50px] cursor-pointer ml-[20px] mb-[10px]\"\n                    }, void 0, false, {\n                        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 11,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: tasks.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        taskText: item.taskText,\n                        onClick: deleteTask(item.id)\n                    }, item.id, false, {\n                        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n                lineNumber: 32,\n                columnNumber: 3\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/avanbuss/my-todo/client/components/TodoList.js\",\n        lineNumber: 5,\n        columnNumber: 69\n    }, _this);\n};\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9MaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUE2QjtBQUNKO0FBQ3FCO0FBRTlDLElBQU1HLFFBQVEsR0FBRztRQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsVUFBVSxTQUFWQSxVQUFVO3lCQUFNLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpRUFBaUU7OzBCQUNsSiw4REFBQ1YsK0NBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUNXLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxpQ0FBaUM7MEJBQUMsa0JBRWhEOzs7OztxQkFBSzswQkFDTCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjswQkFBQyxlQUFrQjs7Ozs7cUJBQU07MEJBQzdELDhEQUFDRSxNQUFJO2dCQUFDRixTQUFTLEVBQUMsd0NBQXdDOztrQ0FDdEQsOERBQUNMLE9BQUs7d0JBQ0pLLFNBQVMsRUFBQywyRkFBMkY7d0JBQ3JHRyxXQUFXLEVBQUMsb0JBQW9CO3dCQUNoQyxnQ0FBZ0M7d0JBQ2hDQyxLQUFLLEVBQUVULEtBQUs7d0JBQ1pVLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzttQ0FBSVYsUUFBUSxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO3lCQUFBOzs7Ozs2QkFDdkM7a0NBQ0YsOERBQUNULE9BQUs7d0JBQ0pLLFNBQVMsRUFBQywyRkFBMkY7d0JBQ3JHRyxXQUFXLEVBQUMsb0JBQW9CO3dCQUNoQyxnQ0FBZ0M7d0JBQ2hDQyxLQUFLLEVBQUVULEtBQUs7d0JBQ1pVLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzttQ0FBSVYsUUFBUSxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO3lCQUFBOzs7Ozs2QkFDdkM7a0NBQ0YsOERBQUNaLHlEQUFhO3dCQUNaLHdCQUF3Qjt3QkFDeEJnQixPQUFPLEVBQUVYLE9BQU87d0JBQ2hCRyxTQUFTLEVBQUMsK0RBQStEOzs7Ozs2QkFDekU7Ozs7OztxQkFDRzswQkFDUCw4REFBQ1MsSUFBRTswQkFFQWYsS0FBSyxDQUFDZ0IsR0FBRyxDQUFDQyxTQUFBQSxJQUFJO3lDQUNiLDhEQUFDcEIsNkNBQUk7d0JBRUhxQixRQUFRLEVBQUVELElBQUksQ0FBQ0MsUUFBUTt3QkFDdkJKLE9BQU8sRUFBRVYsVUFBVSxDQUFDYSxJQUFJLENBQUNFLEVBQUUsQ0FBQzt1QkFGdkJGLElBQUksQ0FBQ0UsRUFBRTs7Ozs2QkFJWjtpQkFDSCxDQUFDOzs7OztxQkFDQzs7Ozs7O2FBQ0Q7Q0FBQTtBQXRDQXBCLEtBQUFBLFFBQVE7QUF3Q2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC5qcz85MDZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snXG5pbXBvcnQgeyBJb01kQWRkQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXG5cbmNvbnN0IFRvZG9MaXN0ID0gKHt0YXNrcywgaW5wdXQsIHNldElucHV0LCBhZGRUYXNrLCBkZWxldGVUYXNrfSkgPT4gPGRpdiBjbGFzc05hbWU9J3ctWzcwJV0gYmctWyMzNTRlYTNdIHB5LTQgcHgtOSByb3VuZGVkLVszMHB4XSBvdmVyZmxvdy15LXNjcm9sbCc+XG4gIDxOYXZiYXIgLz5cbiAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgYm9sZGVyIHRleHQtd2hpdGUgcGItOCc+XG4gICAgV2hhdCZhcG9zO3MgdXAsIEFsZXghXG4gIDwvaDI+XG4gIDxkaXYgY2xhc3NOYW1lPSdweS0zIHRleHQtWyM3ZDk5ZTldJz5UT0RBWSZhcG9zO1MgVEFTS1M8L2Rpdj5cbiAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyc+XG4gICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9J3JvdW5kZWQtWzEwcHhdIHctZnVsbCBwLVsxMHB4XSBib3JkZXItbm9uZSBvdXRsaW5lLW5vbmUgYmctWyMwMzE5NTZdIHRleHQtd2hpdGUgbWItWzEwcHhdJ1xuICAgICAgcGxhY2Vob2xkZXI9J1BhdGllbnQgRmlyc3QgTmFtZSdcbiAgICAgIC8vIHRha2UgaW5wdXQgZnJvbSB0aGUgZm9ybSBoZXJlXG4gICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgLz5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1bMTBweF0gdy1mdWxsIHAtWzEwcHhdIGJvcmRlci1ub25lIG91dGxpbmUtbm9uZSBiZy1bIzAzMTk1Nl0gdGV4dC13aGl0ZSBtYi1bMTBweF0nXG4gICAgICBwbGFjZWhvbGRlcj0nUGF0aWVudCBGaXJzdCBOYW1lJ1xuICAgICAgLy8gdGFrZSBpbnB1dCBmcm9tIHRoZSBmb3JtIGhlcmVcbiAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgIG9uQ2hhbmdlPXtlID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAvPlxuICAgIDxJb01kQWRkQ2lyY2xlXG4gICAgICAvLyBBZGQgYW4gb25DbGljayBtZXRob2RcbiAgICAgIG9uQ2xpY2s9e2FkZFRhc2t9XG4gICAgICBjbGFzc05hbWU9J3RleHQtWyNlYTBhZmZdIHRleHQtWzUwcHhdIGN1cnNvci1wb2ludGVyIG1sLVsyMHB4XSBtYi1bMTBweF0nXG4gICAgLz5cbiAgPC9mb3JtPlxuICA8dWw+XG4gICAgey8qIExvb3AgdGhyb3VnaCBhbGwgdGFza3MgaGVyZSB1c2luZyB0aGUgVGFzayBjb21wb25lbnQgKi99XG4gICAge3Rhc2tzLm1hcChpdGVtID0+IChcbiAgICAgIDxUYXNrXG4gICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgdGFza1RleHQ9e2l0ZW0udGFza1RleHR9XG4gICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVRhc2soaXRlbS5pZCl9XG4gICAgICAgIC8vb25DbGljayBkZWxldGVcbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvdWw+XG48L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3QiXSwibmFtZXMiOlsiTmF2YmFyIiwiVGFzayIsIklvTWRBZGRDaXJjbGUiLCJUb2RvTGlzdCIsInRhc2tzIiwiaW5wdXQiLCJzZXRJbnB1dCIsImFkZFRhc2siLCJkZWxldGVUYXNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsIml0ZW0iLCJ0YXNrVGV4dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.js\n"));

/***/ })

});