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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_WrongNetworkMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WrongNetworkMessage */ \"./components/WrongNetworkMessage.js\");\n/* harmony import */ var _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ConnectWalletButton */ \"./components/ConnectWalletButton.js\");\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var _backend_build_contracts_TaskContract_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../backend/build/contracts/TaskContract.json */ \"../backend/build/contracts/TaskContract.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* \nconst tasks = [\n  { id: 0, taskText: 'clean', isDeleted: false }, \n  { id: 1, taskText: 'food', isDeleted: false }, \n  { id: 2, taskText: 'water', isDeleted: true }\n]\n*/ function Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false), correctNetwork = ref[0], setCorrectNetwork = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false), isUserLoggedIn = ref1[0], setIsUserLoggedIn = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), currentAccount = ref2[0], setCurrentAccount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), input1 = ref3[0], setInput1 = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]), tasks = ref4[0], setTasks = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        connectWallet();\n        getAllTasks();\n    }, []);\n    // Calls Metamask to connect wallet on clicking Connect Wallet button\n    var connectWallet = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum1, accounts;\n            return _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum1 = window.ethereum;\n                        if (ethereum1) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum1.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 7:\n                        accounts = _ctx.sent;\n                        console.log(\"Found account\", accounts[0]);\n                        setIsUserLoggedIn(true);\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Just gets all the tasks from the contract\n    var getAllTasks = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, TaskContract, allTasks;\n            return _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!ethereum) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        TaskContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_5__.TaskContractAddress, _backend_build_contracts_TaskContract_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 7;\n                        return TaskContract.getMyTasks();\n                    case 7:\n                        allTasks = _ctx.sent;\n                        console.log(allTasks);\n                        setTasks(allTasks);\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            console.log(\"ethereum object does not exist!\");\n                        }\n                    case 13:\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    15\n                ]\n            ]);\n        }));\n        return function getAllTasks() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Add tasks from front-end onto the blockchain\n    var addTask = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var task, ethereum1, provider, signer, TaskContract;\n            return _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        task = {\n                            taskText: input,\n                            isDeleted: false\n                        };\n                        try {\n                            ethereum1 = window.ethereum;\n                            if (ethereum1) {\n                                provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(ethereum1);\n                                signer = provider.getSigner();\n                                TaskContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_5__.TaskContractAddress, _backend_build_contracts_TaskContract_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                                TaskContract.addTask(task.taskText, task.isDeleted).then(function(res) {\n                                    setTasks((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(tasks).concat([\n                                        task\n                                    ]));\n                                    console.log(\"Added task\");\n                                }).catch(function(err) {\n                                    console.log(err);\n                                });\n                            } else {\n                                console.log(\"ethereum object does not exist!\");\n                            }\n                        } catch (error) {\n                            console.log(error);\n                        }\n                        setInput(\"\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addTask(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Remove tasks from front-end by filtering it out on our \"back-end\" / blockchain smart contract\n    var deleteTask = function(key) {\n        return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, TaskContract, deleteTaskTx, allTasks;\n            return _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!ethereum) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        TaskContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_5__.TaskContractAddress, _backend_build_contracts_TaskContract_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 7;\n                        return TaskContract.deleteTask(key, true);\n                    case 7:\n                        deleteTaskTx = _ctx.sent;\n                        console.log(\"succesfully deleted\", deleteTaskTx);\n                        _ctx.next = 11;\n                        return TaskContract.getMyTasks();\n                    case 11:\n                        allTasks = _ctx.sent;\n                        setTasks(allTasks);\n                        _ctx.next = 16;\n                        break;\n                    case 15:\n                        {\n                            console.log(\"ethereum object does not exist!\");\n                        }\n                    case 16:\n                        _ctx.next = 21;\n                        break;\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    18\n                ]\n            ]);\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-[#97b5fe] h-screen w-screen flex justify-center py-6\",\n        children: !isUserLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            connectWallet: connectWallet\n        }, void 0, false, {\n            fileName: \"/home/avanbuss/my-todo/client/pages/index.js\",\n            lineNumber: 143,\n            columnNumber: 26\n        }, this) :  true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            tasks: tasks,\n            input1: input1,\n            setInput1: setInput1,\n            input2: input2,\n            setInput2: setInput1,\n            addTask: addTask,\n            deleteTask: deleteTask\n        }, void 0, false, {\n            fileName: \"/home/avanbuss/my-todo/client/pages/index.js\",\n            lineNumber: 144,\n            columnNumber: 42\n        }, this) : /*#__PURE__*/ 0\n    }, void 0, false, {\n        fileName: \"/home/avanbuss/my-todo/client/pages/index.js\",\n        lineNumber: 142,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"M0Mw1ZdCX11maRAQ3FQvXY1gUgA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBRWEsVUFBVSxFQUFFQSxVQUFVOzs7OztnQkFBRyxpQkFDbEwsQ0FBdUI7Ozs7O1lBQ25CLENBQ1A7Q0FDRjtHQXBJdUIzQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3JvbmdOZXR3b3JrTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL1dyb25nTmV0d29ya01lc3NhZ2UnXG5pbXBvcnQgQ29ubmVjdFdhbGxldEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRCdXR0b24nXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvTGlzdCdcbmltcG9ydCB7IFRhc2tDb250cmFjdEFkZHJlc3MgfSBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgVGFza0FiaSBmcm9tICcuLi8uLi9iYWNrZW5kL2J1aWxkL2NvbnRyYWN0cy9UYXNrQ29udHJhY3QuanNvbidcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbi8qIFxuY29uc3QgdGFza3MgPSBbXG4gIHsgaWQ6IDAsIHRhc2tUZXh0OiAnY2xlYW4nLCBpc0RlbGV0ZWQ6IGZhbHNlIH0sIFxuICB7IGlkOiAxLCB0YXNrVGV4dDogJ2Zvb2QnLCBpc0RlbGV0ZWQ6IGZhbHNlIH0sIFxuICB7IGlkOiAyLCB0YXNrVGV4dDogJ3dhdGVyJywgaXNEZWxldGVkOiB0cnVlIH1cbl1cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjb3JyZWN0TmV0d29yaywgc2V0Q29ycmVjdE5ldHdvcmtdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1VzZXJMb2dnZWRJbiwgc2V0SXNVc2VyTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtpbnB1dDEsIHNldElucHV0MV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbm5lY3RXYWxsZXQoKVxuICAgIGdldEFsbFRhc2tzKClcbiAgfSwgW10pXG4gIFxuICAvLyBDYWxscyBNZXRhbWFzayB0byBjb25uZWN0IHdhbGxldCBvbiBjbGlja2luZyBDb25uZWN0IFdhbGxldCBidXR0b25cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnl7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01ldGFtYXNrIG5vdCBkZXRlY3RlZCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gbGV0IGNoYWluSWQgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfY2hhaW5JZCd9KVxuICAgICAgLy8gY29uc29sZS5sb2coJ2Nvbm5lY3RlZCB0byBjaGFpbjogJywgY2hhaW5JZClcbiAgICAgIC8vIGNvbnN0IGdhbmFjaGVDaGFpbklkID0gJzU3NzcnXG4gICAgICAvLyBpZihjaGFpbklkICE9PSBnYW5hY2hlQ2hhaW5JZCkge1xuICAgICAgLy8gICBhbGVydCgneW91IGFyZSBub3QgY29ubmVjdGVkIHRvIHRoZSBnYW5hY2hlIHRlc3RuZXQhJylcbiAgICAgIC8vICAgc2V0Q29ycmVjdE5ldHdvcmsoZmFsc2UpXG4gICAgICAvLyAgIHJldHVyblxuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgc2V0Q29ycmVjdE5ldHdvcmsodHJ1ZSlcbiAgICAgIC8vIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ30pXG4gICAgICBjb25zb2xlLmxvZygnRm91bmQgYWNjb3VudCcsIGFjY291bnRzWzBdKVxuICAgICAgc2V0SXNVc2VyTG9nZ2VkSW4odHJ1ZSlcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgZ2V0cyBhbGwgdGhlIHRhc2tzIGZyb20gdGhlIGNvbnRyYWN0XG4gIGNvbnN0IGdldEFsbFRhc2tzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICAgIGNvbnN0IFRhc2tDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgVGFza0NvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgICBUYXNrQWJpLmFiaSxcbiAgICAgICAgICBzaWduZXJcbiAgICAgICAgKVxuICAgICAgICBsZXQgYWxsVGFza3MgPSBhd2FpdCBUYXNrQ29udHJhY3QuZ2V0TXlUYXNrcygpXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuICAgICAgICBzZXRUYXNrcyhhbGxUYXNrcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdldGhlcmV1bSBvYmplY3QgZG9lcyBub3QgZXhpc3QhJylcbiAgICAgIH1cbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRhc2tzIGZyb20gZnJvbnQtZW5kIG9udG8gdGhlIGJsb2NrY2hhaW5cbiAgY29uc3QgYWRkVGFzayA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHRhc2sgPSB7XG4gICAgICB0YXNrVGV4dDogaW5wdXQsXG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgICBjb25zdCBUYXNrQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgIFRhc2tDb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgVGFza0FiaS5hYmksXG4gICAgICAgICAgc2lnbmVyXG4gICAgICAgIClcblxuICAgICAgICBUYXNrQ29udHJhY3QuYWRkVGFzayh0YXNrLnRhc2tUZXh0LCB0YXNrLmlzRGVsZXRlZClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBzZXRUYXNrcyhbLi4udGFza3MsIHRhc2tdKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRlZCB0YXNrJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2V0aGVyZXVtIG9iamVjdCBkb2VzIG5vdCBleGlzdCEnKVxuICAgICAgfVxuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICAgIHNldElucHV0KCcnKVxuICB9XG5cbiAgLy8gUmVtb3ZlIHRhc2tzIGZyb20gZnJvbnQtZW5kIGJ5IGZpbHRlcmluZyBpdCBvdXQgb24gb3VyIFwiYmFjay1lbmRcIiAvIGJsb2NrY2hhaW4gc21hcnQgY29udHJhY3RcbiAgY29uc3QgZGVsZXRlVGFzayA9IGtleSA9PiBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSlcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgICAgY29uc3QgVGFza0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICBUYXNrQ29udHJhY3RBZGRyZXNzLFxuICAgICAgICAgIFRhc2tBYmkuYWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApXG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFza1R4ID0gYXdhaXQgVGFza0NvbnRyYWN0LmRlbGV0ZVRhc2soa2V5LCB0cnVlKVxuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzZnVsbHkgZGVsZXRlZCcsIGRlbGV0ZVRhc2tUeClcbiAgICAgICAgXG4gICAgICAgIGxldCBhbGxUYXNrcyA9IGF3YWl0IFRhc2tDb250cmFjdC5nZXRNeVRhc2tzKClcbiAgICAgICAgc2V0VGFza3MoYWxsVGFza3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZXRoZXJldW0gb2JqZWN0IGRvZXMgbm90IGV4aXN0IScpXG4gICAgICB9XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLVsjOTdiNWZlXSBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTYnPlxuICAgICAgeyFpc1VzZXJMb2dnZWRJbiA/IDxDb25uZWN0V2FsbGV0QnV0dG9uIGNvbm5lY3RXYWxsZXQ9e2Nvbm5lY3RXYWxsZXR9Lz4gOlxuICAgICAgICAnaXMgdGhpcyB0aGUgY29ycmVjdCBuZXR3b3JrPycgPyA8VG9kb0xpc3QgdGFza3M9e3Rhc2tzfSBpbnB1dDE9e2lucHV0MX0gc2V0SW5wdXQxPXtzZXRJbnB1dDF9IGlucHV0Mj17aW5wdXQyfSBzZXRJbnB1dDI9e3NldElucHV0MX0gYWRkVGFzaz17YWRkVGFza30gZGVsZXRlVGFzaz17ZGVsZXRlVGFza30vPiA6IFxuICAgICAgPFdyb25nTmV0d29ya01lc3NhZ2UgLz59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIldyb25nTmV0d29ya01lc3NhZ2UiLCJDb25uZWN0V2FsbGV0QnV0dG9uIiwiVG9kb0xpc3QiLCJUYXNrQ29udHJhY3RBZGRyZXNzIiwiVGFza0FiaSIsImV0aGVycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImNvcnJlY3ROZXR3b3JrIiwic2V0Q29ycmVjdE5ldHdvcmsiLCJpc1VzZXJMb2dnZWRJbiIsInNldElzVXNlckxvZ2dlZEluIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImlucHV0MSIsInNldElucHV0MSIsInRhc2tzIiwic2V0VGFza3MiLCJjb25uZWN0V2FsbGV0IiwiZ2V0QWxsVGFza3MiLCJldGhlcmV1bSIsImFjY291bnRzIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJwcm92aWRlciIsInNpZ25lciIsIlRhc2tDb250cmFjdCIsImFsbFRhc2tzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJnZXRNeVRhc2tzIiwiYWRkVGFzayIsImUiLCJ0YXNrIiwicHJldmVudERlZmF1bHQiLCJ0YXNrVGV4dCIsImlucHV0IiwiaXNEZWxldGVkIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJzZXRJbnB1dCIsImRlbGV0ZVRhc2siLCJrZXkiLCJkZWxldGVUYXNrVHgiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dDIiLCJzZXRJbnB1dDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});