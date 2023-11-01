"use strict";

var _jsxFileName = "/home/vetalstar/\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B/sync_files/Dokumenti/programmirovanije/zmeja/tornado_parcel/static/jsx_src/app.jsx";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(function () {
  var _React = React,
    useEffect = _React.useEffect,
    useState = _React.useState;
  var _RTK = RTK,
    configureStore = _RTK.configureStore,
    createAsyncThunk = _RTK.createAsyncThunk,
    createEntityAdapter = _RTK.createEntityAdapter,
    createSlice = _RTK.createSlice;
  var _ReactRedux = ReactRedux,
    Provider = _ReactRedux.Provider,
    useSelector = _ReactRedux.useSelector,
    useDispatch = _ReactRedux.useDispatch;
  var _ReactRouterDOM = ReactRouterDOM,
    createHashRouter = _ReactRouterDOM.createHashRouter,
    RouterProvider = _ReactRouterDOM.RouterProvider,
    Link = _ReactRouterDOM.Link,
    useNavigate = _ReactRouterDOM.useNavigate;
  var PARCEL_SIZES = ['XS', 'S', 'M', 'L', 'XL'];
  var LOCKER_STATES = ['OK', 'ON_MAINTENANCE', 'FAILED'];

  // #region redux
  var fetch_lockers = createAsyncThunk('lockers/fetch_lockers', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var record_l;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("/api/locker").then(function (res) {
            return res.json();
          });
        case 2:
          record_l = _context.sent;
          return _context.abrupt("return", record_l);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  var add_new_locker = createAsyncThunk('lockers/add_1_locker', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
      var _ref4, record_data, navigate, new_rec_id;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _slicedToArray(_ref2, 2), record_data = _ref4[0], navigate = _ref4[1];
            _context2.next = 3;
            return fetch("/api/locker", {
              method: "POST",
              body: JSON.stringify(record_data)
            }).then(function (res) {
              return res.json();
            });
          case 3:
            new_rec_id = _context2.sent;
            return _context2.abrupt("return", [Object.assign({
              id: new_rec_id
            }, record_data), navigate]);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  var delete_locker = createAsyncThunk('lockers/delete_locker', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(record_id) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("/api/locker", {
              method: "DELETE",
              body: JSON.stringify(record_id)
            });
          case 2:
            return _context3.abrupt("return", record_id);
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }());
  var locker_adapter = createEntityAdapter();
  var locker_slice = createSlice({
    name: 'lockers',
    initialState: locker_adapter.getInitialState({
      status: 'idle'
      // error: null
    }),

    reducers: {},
    extraReducers: function extraReducers(builder) {
      builder.addCase(fetch_lockers.fulfilled, function (state, action) {
        state.status = 'succeeded';
        locker_adapter.upsertMany(state, action.payload);
      }).addCase(add_new_locker.fulfilled, locker_adapter.removeOne);
    }
  });
  var _locker_adapter$getSe = locker_adapter.getSelectors(function (state) {
      return state.lockers;
    }),
    select_all_lockers = _locker_adapter$getSe.selectAll,
    select_locker_by_id = _locker_adapter$getSe.selectById;
  var store = configureStore({
    reducer: {
      lockers: locker_slice.reducer
    }
  });
  // #endregion

  // #region react
  var root = /*#__PURE__*/React.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/lockers",
    className: "btn btn-primary",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "View Lockers"), "\xA0", /*#__PURE__*/React.createElement(Link, {
    to: "/parcels",
    className: "btn btn-primary",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "View Parcels")));
  function LockersList() {
    var _this = this;
    var dispatch = useDispatch();
    var lockers_status = useSelector(function (state) {
      return state.lockers.status;
    });
    var lockers_list = useSelector(select_all_lockers);
    useEffect(function () {
      if (lockers_status === 'idle') {
        dispatch(fetch_lockers());
      }
    }, [lockers_status, dispatch]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement(Link, {
      to: "/",
      className: "btn btn-primary",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }, "Home"))), /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, "Lockers"))), /*#__PURE__*/React.createElement("table", {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 25
      }
    }, /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 29
      }
    }, "Full Address"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 29
      }
    }, "Capacity XS"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 29
      }
    }, "Capacity S"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 29
      }
    }, "Capacity M"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 29
      }
    }, "Capacity L"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 29
      }
    }, "Capacity XL"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    }, "Status"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }))), /*#__PURE__*/React.createElement("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }
    }, lockers_list.map(function (locker_r) {
      return /*#__PURE__*/React.createElement("tr", {
        key: locker_r.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 33
        }
      }, /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 37
        }
      }, locker_r.full_address), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 37
        }
      }, locker_r.capacity_xs), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 37
        }
      }, locker_r.capacity_s), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 37
        }
      }, locker_r.capacity_m), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 37
        }
      }, locker_r.capacity_l), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 37
        }
      }, locker_r.capacity_xl), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 37
        }
      }, locker_r.status), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 37
        }
      }, /*#__PURE__*/React.createElement(Link, {
        to: "/",
        className: "btn btn-primary",
        role: "button",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 41
        }
      }, "Edit"), "\xA0", /*#__PURE__*/React.createElement("button", {
        type: "button",
        "class": "btn btn-danger",
        onClick: function onClick(e) {
          return dispatch(delete_locker(locker_r.id));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 41
        }
      }, "Delete")));
    }))), /*#__PURE__*/React.createElement(Link, {
      to: "/lockers/add",
      className: "btn btn-primary",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }, "Add Locker"));
  }
  function LockersAdd() {
    var _this2 = this;
    var dispatch = useDispatch();
    var navigate = useNavigate();
    var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      lockerAddress = _useState2[0],
      setLockerAddress = _useState2[1];
    var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      lockerCapacityXS = _useState4[0],
      setLockerCapacityXS = _useState4[1];
    var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      lockerCapacityS = _useState6[0],
      setLockerCapacityS = _useState6[1];
    var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      lockerCapacityM = _useState8[0],
      setLockerCapacityM = _useState8[1];
    var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      lockerCapacityL = _useState10[0],
      setLockerCapacityL = _useState10[1];
    var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      lockerCapacityXL = _useState12[0],
      setLockerCapacityXL = _useState12[1];
    var _useState13 = useState('ON_MAINTENANCE'),
      _useState14 = _slicedToArray(_useState13, 2),
      lockerState = _useState14[0],
      setLockerState = _useState14[1];
    function ok_click() {
      dispatch(add_new_locker([{
        full_address: lockerAddress,
        capacity_xs: lockerCapacityXS,
        capacity_s: lockerCapacityS,
        capacity_m: lockerCapacityM,
        capacity_l: lockerCapacityL,
        capacity_xl: lockerCapacityXL,
        status: lockerState
      }, navigate]));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 25
      }
    }, "Add Locker"))), /*#__PURE__*/React.createElement("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_full_address",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }, "Full Address"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "locker_full_address",
      value: lockerAddress,
      onChange: function onChange(e) {
        return setLockerAddress(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_xs",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 25
      }
    }, "Capacity XS"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "locker_capacity_xs",
      type: "number",
      value: lockerCapacityXS,
      onChange: function onChange(e) {
        return setLockerCapacityXS(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_s",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 25
      }
    }, "Capacity S"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "locker_capacity_s",
      type: "number",
      value: lockerCapacityS,
      onChange: function onChange(e) {
        return setLockerCapacityS(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_m",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 25
      }
    }, "Capacity M"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "locker_capacity_m",
      type: "number",
      value: lockerCapacityM,
      onChange: function onChange(e) {
        return setLockerCapacityM(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_l",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 25
      }
    }, "Capacity L"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "locker_capacity_l",
      type: "number",
      value: lockerCapacityL,
      onChange: function onChange(e) {
        return setLockerCapacityL(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_xl",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 25
      }
    }, "Capacity XL"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "locker_capacity_xl",
      type: "number",
      value: lockerCapacityXL,
      onChange: function onChange(e) {
        return setLockerCapacityXL(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 21
      }
    }, "State", /*#__PURE__*/React.createElement("select", {
      className: "form-select",
      "aria-label": "State",
      value: lockerState,
      onChange: function onChange(e) {
        return setLockerState(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 25
      }
    }, LOCKER_STATES.map(function (code) {
      return /*#__PURE__*/React.createElement("option", {
        value: code,
        key: code,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 37
        }
      }, code);
    }))), /*#__PURE__*/React.createElement(Link, {
      to: "/lockers",
      className: "btn btn-secondary",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 21
      }
    }, "Cancel"), "\xA0", /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: ok_click,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 21
      }
    }, "Create")));
  }
  // #endregion

  var router = createHashRouter([{
    path: "/",
    element: root
  }, {
    path: "lockers",
    element: /*#__PURE__*/React.createElement(LockersList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 22
      }
    })
  }, {
    path: "lockers/add",
    element: /*#__PURE__*/React.createElement(LockersAdd, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 22
      }
    })
  }, {
    path: "parcels",
    element: /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 22
      }
    }, "Hello par! ", /*#__PURE__*/React.createElement(Link, {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 38
      }
    }, "home"), " ")
  }]);
  ReactDOM.createRoot(document.getElementById('react_parcel_root')).render( /*#__PURE__*/React.createElement(React.StrictMode, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, "Tornado Parcel"), /*#__PURE__*/React.createElement(Provider, {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(RouterProvider, {
    router: router,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 17
    }
  }))));
})();
//# sourceMappingURL=app.js.map