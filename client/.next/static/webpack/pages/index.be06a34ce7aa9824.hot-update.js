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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_WrongNetworkMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WrongNetworkMessage */ \"./components/WrongNetworkMessage.js\");\n/* harmony import */ var _components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ConnectWalletButton */ \"./components/ConnectWalletButton.js\");\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var _backend_build_contracts_PatientContract_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../backend/build/contracts/PatientContract.json */ \"../backend/build/contracts/PatientContract.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* \nconst patients = [\n  { id: 0, patientText: 'clean', isDeleted: false }, \n  { id: 1, patientText: 'food', isDeleted: false }, \n  { id: 2, patientText: 'water', isDeleted: true }\n]\n*/ function Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false), correctNetwork = ref[0], setCorrectNetwork = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false), isUserLoggedIn = ref1[0], setIsUserLoggedIn = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), currentAccount = ref2[0], setCurrentAccount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), firstName = ref3[0], setfirstName = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"), lastName = ref4[0], setLastName = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]), patients = ref5[0], setPatients = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        connectWallet();\n        getAllPatients();\n    }, []);\n    // Calls Metamask to connect wallet on clicking Connect Wallet button\n    var connectWallet = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum1, accounts;\n            return _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum1 = window.ethereum;\n                        if (ethereum1) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum1.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 7:\n                        accounts = _ctx.sent;\n                        console.log(\"Found account\", accounts[0]);\n                        setIsUserLoggedIn(true);\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Just gets all the patients from the contract\n    var getAllPatients = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, PatientContract, allPatients;\n            return _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!ethereum) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        PatientContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_5__.PatientContractAddress, _backend_build_contracts_PatientContract_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 7;\n                        return PatientContract.getMyPatients();\n                    case 7:\n                        allPatients = _ctx.sent;\n                        console.log(allPatients);\n                        setPatients(allPatients);\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            console.log(\"ethereum object does not exist!\");\n                        }\n                    case 13:\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    15\n                ]\n            ]);\n        }));\n        return function getAllPatients() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Add patients from front-end onto the blockchain\n    var addPatient = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var patient, ethereum1, provider, signer, PatientContract;\n            return _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        patient = {\n                            patientText: firstName,\n                            lastName: lastName,\n                            isDeleted: false\n                        };\n                        try {\n                            ethereum1 = window.ethereum;\n                            if (ethereum1) {\n                                provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(ethereum1);\n                                signer = provider.getSigner();\n                                PatientContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_5__.PatientContractAddress, _backend_build_contracts_PatientContract_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                                PatientContract.addPatient(patient.patientText, patient.isDeleted).then(function(res) {\n                                    setPatients((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(patients).concat([\n                                        patient\n                                    ]));\n                                    console.log(\"Added patient\");\n                                }).catch(function(err) {\n                                    console.log(err);\n                                });\n                            } else {\n                                console.log(\"ethereum object does not exist!\");\n                            }\n                        } catch (error) {\n                            console.log(error);\n                        }\n                        setfirstName(\"\");\n                        setlastName(\"\");\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addPatient(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Remove patients from front-end by filtering it out on our \"back-end\" / blockchain smart contract\n    var deletePatient = function(key) {\n        return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, PatientContract, deletePatientTx, allPatients;\n            return _home_avanbuss_my_todo_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!ethereum) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        PatientContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_5__.PatientContractAddress, _backend_build_contracts_PatientContract_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 7;\n                        return PatientContract.deletePatient(key, true);\n                    case 7:\n                        deletePatientTx = _ctx.sent;\n                        console.log(\"succesfully deleted\", deletePatientTx);\n                        _ctx.next = 11;\n                        return PatientContract.getMyPatients();\n                    case 11:\n                        allPatients = _ctx.sent;\n                        setPatients(allPatients);\n                        _ctx.next = 16;\n                        break;\n                    case 15:\n                        {\n                            console.log(\"ethereum object does not exist!\");\n                        }\n                    case 16:\n                        _ctx.next = 21;\n                        break;\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    18\n                ]\n            ]);\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-[#97b5fe] h-screen w-screen flex justify-center py-6\",\n        children: !isUserLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            connectWallet: connectWallet\n        }, void 0, false, {\n            fileName: \"/home/avanbuss/my-todo/client/pages/index.js\",\n            lineNumber: 145,\n            columnNumber: 26\n        }, this) :  true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            patients: patients,\n            firstName: firstName,\n            setfirstName: setfirstName,\n            lastName: lastName,\n            setlastName: setlastName,\n            addPatient: addPatient,\n            deletePatient: deletePatient\n        }, void 0, false, {\n            fileName: \"/home/avanbuss/my-todo/client/pages/index.js\",\n            lineNumber: 146,\n            columnNumber: 42\n        }, this) : /*#__PURE__*/ 0\n    }, void 0, false, {\n        fileName: \"/home/avanbuss/my-todo/client/pages/index.js\",\n        lineNumber: 144,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"a7sW+qFnvy3SB4g3HPxoFvvUwYc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDckUsS0FBOEIsaUJBQUcsOERBQUNuQiw0REFBUTtZQUFDaUIsUUFBUSxFQUFFQSxRQUFRO1lBQUVKLFNBQVMsRUFBRUEsU0FBUztZQUFFQyxZQUFZLEVBQUVBLFlBQVk7WUFBRUMsUUFBUSxFQUFFQSxRQUFRO1lBQUVrQyxXQUFXLEVBQUVBLFdBQVc7WUFBRVgsVUFBVSxFQUFFQSxVQUFVO1lBQUVZLGFBQWEsRUFBRUEsYUFBYTs7Ozs7Z0JBQUcsaUJBQ3hOLENBQXVCOzs7OztZQUNuQixDQUNQO0NBQ0Y7R0F0SXVCNUMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdyb25nTmV0d29ya01lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Xcm9uZ05ldHdvcmtNZXNzYWdlJ1xuaW1wb3J0IENvbm5lY3RXYWxsZXRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Db25uZWN0V2FsbGV0QnV0dG9uJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnXG5pbXBvcnQgeyBQYXRpZW50Q29udHJhY3RBZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IFBhdGllbnRBYmkgZnJvbSAnLi4vLi4vYmFja2VuZC9idWlsZC9jb250cmFjdHMvUGF0aWVudENvbnRyYWN0Lmpzb24nXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG4vKiBcbmNvbnN0IHBhdGllbnRzID0gW1xuICB7IGlkOiAwLCBwYXRpZW50VGV4dDogJ2NsZWFuJywgaXNEZWxldGVkOiBmYWxzZSB9LCBcbiAgeyBpZDogMSwgcGF0aWVudFRleHQ6ICdmb29kJywgaXNEZWxldGVkOiBmYWxzZSB9LCBcbiAgeyBpZDogMiwgcGF0aWVudFRleHQ6ICd3YXRlcicsIGlzRGVsZXRlZDogdHJ1ZSB9XG5dXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY29ycmVjdE5ldHdvcmssIHNldENvcnJlY3ROZXR3b3JrXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNVc2VyTG9nZ2VkSW4sIHNldElzVXNlckxvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRmaXJzdE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwYXRpZW50cywgc2V0UGF0aWVudHNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25uZWN0V2FsbGV0KClcbiAgICBnZXRBbGxQYXRpZW50cygpXG4gIH0sIFtdKVxuICBcbiAgLy8gQ2FsbHMgTWV0YW1hc2sgdG8gY29ubmVjdCB3YWxsZXQgb24gY2xpY2tpbmcgQ29ubmVjdCBXYWxsZXQgYnV0dG9uXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhbWFzayBub3QgZGV0ZWN0ZWQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIGxldCBjaGFpbklkID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX2NoYWluSWQnfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQgdG8gY2hhaW46ICcsIGNoYWluSWQpXG4gICAgICAvLyBjb25zdCBnYW5hY2hlQ2hhaW5JZCA9ICc1Nzc3J1xuICAgICAgLy8gaWYoY2hhaW5JZCAhPT0gZ2FuYWNoZUNoYWluSWQpIHtcbiAgICAgIC8vICAgYWxlcnQoJ3lvdSBhcmUgbm90IGNvbm5lY3RlZCB0byB0aGUgZ2FuYWNoZSB0ZXN0bmV0IScpXG4gICAgICAvLyAgIHNldENvcnJlY3ROZXR3b3JrKGZhbHNlKVxuICAgICAgLy8gICByZXR1cm5cbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIHNldENvcnJlY3ROZXR3b3JrKHRydWUpXG4gICAgICAvLyB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cyd9KVxuICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIGFjY291bnQnLCBhY2NvdW50c1swXSlcbiAgICAgIHNldElzVXNlckxvZ2dlZEluKHRydWUpXG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBKdXN0IGdldHMgYWxsIHRoZSBwYXRpZW50cyBmcm9tIHRoZSBjb250cmFjdFxuICBjb25zdCBnZXRBbGxQYXRpZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgICBjb25zdCBQYXRpZW50Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgIFBhdGllbnRDb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgUGF0aWVudEFiaS5hYmksXG4gICAgICAgICAgc2lnbmVyXG4gICAgICAgIClcbiAgICAgICAgbGV0IGFsbFBhdGllbnRzID0gYXdhaXQgUGF0aWVudENvbnRyYWN0LmdldE15UGF0aWVudHMoKVxuICAgICAgICBjb25zb2xlLmxvZyhhbGxQYXRpZW50cylcbiAgICAgICAgc2V0UGF0aWVudHMoYWxsUGF0aWVudHMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZXRoZXJldW0gb2JqZWN0IGRvZXMgbm90IGV4aXN0IScpXG4gICAgICB9XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYXRpZW50cyBmcm9tIGZyb250LWVuZCBvbnRvIHRoZSBibG9ja2NoYWluXG4gIGNvbnN0IGFkZFBhdGllbnQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBwYXRpZW50ID0ge1xuICAgICAgcGF0aWVudFRleHQ6IGZpcnN0TmFtZSwgbGFzdE5hbWUsXG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgICBjb25zdCBQYXRpZW50Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgIFBhdGllbnRDb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgUGF0aWVudEFiaS5hYmksXG4gICAgICAgICAgc2lnbmVyXG4gICAgICAgIClcblxuICAgICAgICBQYXRpZW50Q29udHJhY3QuYWRkUGF0aWVudChwYXRpZW50LnBhdGllbnRUZXh0LCBwYXRpZW50LmlzRGVsZXRlZClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBzZXRQYXRpZW50cyhbLi4ucGF0aWVudHMsIHBhdGllbnRdKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRlZCBwYXRpZW50JylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2V0aGVyZXVtIG9iamVjdCBkb2VzIG5vdCBleGlzdCEnKVxuICAgICAgfVxuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICAgIHNldGZpcnN0TmFtZSgnJylcbiAgICBzZXRsYXN0TmFtZSgnJylcbiAgfVxuXG4gIC8vIFJlbW92ZSBwYXRpZW50cyBmcm9tIGZyb250LWVuZCBieSBmaWx0ZXJpbmcgaXQgb3V0IG9uIG91ciBcImJhY2stZW5kXCIgLyBibG9ja2NoYWluIHNtYXJ0IGNvbnRyYWN0XG4gIGNvbnN0IGRlbGV0ZVBhdGllbnQgPSBrZXkgPT4gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICAgIGNvbnN0IFBhdGllbnRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgUGF0aWVudENvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgICBQYXRpZW50QWJpLmFiaSxcbiAgICAgICAgICBzaWduZXJcbiAgICAgICAgKVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVBhdGllbnRUeCA9IGF3YWl0IFBhdGllbnRDb250cmFjdC5kZWxldGVQYXRpZW50KGtleSwgdHJ1ZSlcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc2Z1bGx5IGRlbGV0ZWQnLCBkZWxldGVQYXRpZW50VHgpXG4gICAgICAgIFxuICAgICAgICBsZXQgYWxsUGF0aWVudHMgPSBhd2FpdCBQYXRpZW50Q29udHJhY3QuZ2V0TXlQYXRpZW50cygpXG4gICAgICAgIHNldFBhdGllbnRzKGFsbFBhdGllbnRzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2V0aGVyZXVtIG9iamVjdCBkb2VzIG5vdCBleGlzdCEnKVxuICAgICAgfVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1bIzk3YjVmZV0gaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBweS02Jz5cbiAgICAgIHshaXNVc2VyTG9nZ2VkSW4gPyA8Q29ubmVjdFdhbGxldEJ1dHRvbiBjb25uZWN0V2FsbGV0PXtjb25uZWN0V2FsbGV0fS8+IDpcbiAgICAgICAgJ2lzIHRoaXMgdGhlIGNvcnJlY3QgbmV0d29yaz8nID8gPFRvZG9MaXN0IHBhdGllbnRzPXtwYXRpZW50c30gZmlyc3ROYW1lPXtmaXJzdE5hbWV9IHNldGZpcnN0TmFtZT17c2V0Zmlyc3ROYW1lfSBsYXN0TmFtZT17bGFzdE5hbWV9IHNldGxhc3ROYW1lPXtzZXRsYXN0TmFtZX0gYWRkUGF0aWVudD17YWRkUGF0aWVudH0gZGVsZXRlUGF0aWVudD17ZGVsZXRlUGF0aWVudH0vPiA6IFxuICAgICAgPFdyb25nTmV0d29ya01lc3NhZ2UgLz59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIldyb25nTmV0d29ya01lc3NhZ2UiLCJDb25uZWN0V2FsbGV0QnV0dG9uIiwiVG9kb0xpc3QiLCJQYXRpZW50Q29udHJhY3RBZGRyZXNzIiwiUGF0aWVudEFiaSIsImV0aGVycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImNvcnJlY3ROZXR3b3JrIiwic2V0Q29ycmVjdE5ldHdvcmsiLCJpc1VzZXJMb2dnZWRJbiIsInNldElzVXNlckxvZ2dlZEluIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImZpcnN0TmFtZSIsInNldGZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJwYXRpZW50cyIsInNldFBhdGllbnRzIiwiY29ubmVjdFdhbGxldCIsImdldEFsbFBhdGllbnRzIiwiZXRoZXJldW0iLCJhY2NvdW50cyIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJzaWduZXIiLCJQYXRpZW50Q29udHJhY3QiLCJhbGxQYXRpZW50cyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiYWJpIiwiZ2V0TXlQYXRpZW50cyIsImFkZFBhdGllbnQiLCJlIiwicGF0aWVudCIsInByZXZlbnREZWZhdWx0IiwicGF0aWVudFRleHQiLCJpc0RlbGV0ZWQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsInNldGxhc3ROYW1lIiwiZGVsZXRlUGF0aWVudCIsImtleSIsImRlbGV0ZVBhdGllbnRUeCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});