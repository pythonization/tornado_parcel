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
    useNavigate = _ReactRouterDOM.useNavigate,
    useParams = _ReactRouterDOM.useParams;
  var PARCEL_SIZES = ['XS', 'S', 'M', 'L', 'XL'];
  var LOCKER_STATES = ['OK', 'ON_MAINTENANCE', 'FAILED'];
  function fetch_m2(_x, _x2, _x3) {
    return _fetch_m.apply(this, arguments);
  } // #region redux
  function _fetch_m() {
    _fetch_m = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url, fetch_params, _ref) {
      var return_json, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            return_json = _ref.return_json;
            _context5.next = 3;
            return fetch(url, fetch_params);
          case 3:
            result = _context5.sent;
            if (!(result.status != 200)) {
              _context5.next = 6;
              break;
            }
            throw Error('Wrong status code');
          case 6:
            return _context5.abrupt("return", result);
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _fetch_m.apply(this, arguments);
  }
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
      var _ref5, record_data, navigate, new_rec_id;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _ref5 = _slicedToArray(_ref3, 2), record_data = _ref5[0], navigate = _ref5[1];
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
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  var update_locker = createAsyncThunk('lockers/update_locker', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref6) {
      var _ref8, record_data, navigate;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref8 = _slicedToArray(_ref6, 2), record_data = _ref8[0], navigate = _ref8[1];
            _context3.next = 3;
            return fetch_m2("/api/locker", {
              method: "PUT",
              body: JSON.stringify(record_data)
            }, {});
          case 3:
            return _context3.abrupt("return", [record_data, navigate]);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x5) {
      return _ref7.apply(this, arguments);
    };
  }());
  var delete_locker = createAsyncThunk('lockers/delete_locker', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(record_id) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("/api/locker", {
              method: "DELETE",
              body: JSON.stringify(record_id)
            });
          case 2:
            return _context4.abrupt("return", record_id);
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x6) {
      return _ref9.apply(this, arguments);
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
      }).addCase(add_new_locker.fulfilled, function (state, action) {
        var _action$payload = _slicedToArray(action.payload, 2),
          rec_with_id = _action$payload[0],
          navigate = _action$payload[1];
        locker_adapter.addOne(state, rec_with_id);
        navigate('/lockers');
      }).addCase(update_locker.fulfilled, function (state, action) {
        var _action$payload2 = _slicedToArray(action.payload, 2),
          locker_r = _action$payload2[0],
          navigate = _action$payload2[1];
        locker_adapter.setOne(state, locker_r);
        navigate('/lockers');
      }).addCase(delete_locker.fulfilled, locker_adapter.removeOne);
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
      lineNumber: 120,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/lockers",
    className: "btn btn-primary",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, "View Lockers"), "\xA0", /*#__PURE__*/React.createElement(Link, {
    to: "/parcels",
    className: "btn btn-primary",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
        lineNumber: 147,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement(Link, {
      to: "/",
      className: "btn btn-primary",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 25
      }
    }, "Home"))), /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 25
      }
    }, "Lockers"))), /*#__PURE__*/React.createElement("table", {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 25
      }
    }, /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 29
      }
    }, "Full Address"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 29
      }
    }, "Capacity XS"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }
    }, "Capacity S"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 29
      }
    }, "Capacity M"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 29
      }
    }, "Capacity L"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 29
      }
    }, "Capacity XL"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    }, "Status"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 29
      }
    }))), /*#__PURE__*/React.createElement("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 21
      }
    }, lockers_list.map(function (locker_r) {
      return /*#__PURE__*/React.createElement("tr", {
        key: locker_r.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 33
        }
      }, /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 37
        }
      }, locker_r.full_address), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 37
        }
      }, locker_r.capacity_xs), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 37
        }
      }, locker_r.capacity_s), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 37
        }
      }, locker_r.capacity_m), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 37
        }
      }, locker_r.capacity_l), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 37
        }
      }, locker_r.capacity_xl), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 37
        }
      }, locker_r.status), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 37
        }
      }, /*#__PURE__*/React.createElement(Link, {
        to: "/lockers/edit/".concat(locker_r.id),
        className: "btn btn-primary",
        role: "button",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 41
        }
      }, "Edit"), "\xA0", /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-danger",
        onClick: function onClick(e) {
          return dispatch(delete_locker(locker_r.id));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
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
        lineNumber: 204,
        columnNumber: 17
      }
    }, "Add Locker"));
  }
  function LockersForm(_ref10) {
    var _this2 = this;
    var initial_values = _ref10.initial_values,
      create_ok_bt_action = _ref10.create_ok_bt_action,
      header_txt = _ref10.header_txt,
      save_bt_txt = _ref10.save_bt_txt;
    var dispatch = useDispatch();
    var _useState = useState(initial_values.full_address),
      _useState2 = _slicedToArray(_useState, 2),
      lockerAddress = _useState2[0],
      setLockerAddress = _useState2[1];
    var _useState3 = useState(initial_values.capacity_xs),
      _useState4 = _slicedToArray(_useState3, 2),
      lockerCapacityXS = _useState4[0],
      setLockerCapacityXS = _useState4[1];
    var _useState5 = useState(initial_values.capacity_s),
      _useState6 = _slicedToArray(_useState5, 2),
      lockerCapacityS = _useState6[0],
      setLockerCapacityS = _useState6[1];
    var _useState7 = useState(initial_values.capacity_m),
      _useState8 = _slicedToArray(_useState7, 2),
      lockerCapacityM = _useState8[0],
      setLockerCapacityM = _useState8[1];
    var _useState9 = useState(initial_values.capacity_l),
      _useState10 = _slicedToArray(_useState9, 2),
      lockerCapacityL = _useState10[0],
      setLockerCapacityL = _useState10[1];
    var _useState11 = useState(initial_values.capacity_xl),
      _useState12 = _slicedToArray(_useState11, 2),
      lockerCapacityXL = _useState12[0],
      setLockerCapacityXL = _useState12[1];
    var _useState13 = useState(initial_values.status),
      _useState14 = _slicedToArray(_useState13, 2),
      lockerState = _useState14[0],
      setLockerState = _useState14[1];
    function ok_click() {
      dispatch(create_ok_bt_action({
        full_address: lockerAddress,
        capacity_xs: lockerCapacityXS,
        capacity_s: lockerCapacityS,
        capacity_m: lockerCapacityM,
        capacity_l: lockerCapacityL,
        capacity_xl: lockerCapacityXL,
        status: lockerState
      }));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 25
      }
    }, header_txt))), /*#__PURE__*/React.createElement("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_full_address",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
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
        lineNumber: 255,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_xs",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
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
        lineNumber: 264,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_s",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
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
        lineNumber: 274,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_m",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
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
        lineNumber: 283,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_l",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
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
        lineNumber: 292,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_xl",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
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
        lineNumber: 301,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
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
        lineNumber: 309,
        columnNumber: 25
      }
    }, LOCKER_STATES.map(function (code) {
      return /*#__PURE__*/React.createElement("option", {
        value: code,
        key: code,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
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
        lineNumber: 320,
        columnNumber: 21
      }
    }, "Cancel"), "\xA0", /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: ok_click,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 21
      }
    }, save_bt_txt)));
  }
  function LockersAdd() {
    var navigate = useNavigate();
    var initial_values = {
      full_address: '',
      capacity_xs: 0,
      capacity_s: 0,
      capacity_m: 0,
      capacity_l: 0,
      capacity_xl: 0,
      status: 'ON_MAINTENANCE'
    };
    function create_ok_bt_action(values) {
      return add_new_locker([values, navigate]);
    }
    return /*#__PURE__*/React.createElement(LockersForm, {
      initial_values: initial_values,
      create_ok_bt_action: create_ok_bt_action,
      header_txt: "Add Locker",
      save_bt_txt: "Create",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 13
      }
    });
  }
  function LockersEdit() {
    var navigate = useNavigate();
    var _useParams = useParams(),
      locker_id = _useParams.locker_id;
    var initial_values = useSelector(function (state) {
      return select_locker_by_id(state, locker_id);
    });
    function create_ok_bt_action(values) {
      values.id = locker_id;
      return update_locker([values, navigate]);
    }
    return /*#__PURE__*/React.createElement(LockersForm, {
      initial_values: initial_values,
      create_ok_bt_action: create_ok_bt_action,
      header_txt: "Edit Locker",
      save_bt_txt: "Update",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 13
      }
    });
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
        lineNumber: 389,
        columnNumber: 22
      }
    })
  }, {
    path: "lockers/add",
    element: /*#__PURE__*/React.createElement(LockersAdd, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 22
      }
    })
  }, {
    path: "lockers/edit/:locker_id",
    element: /*#__PURE__*/React.createElement(LockersEdit, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 22
      }
    })
  }, {
    path: "parcels",
    element: /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 22
      }
    }, "Hello par! ", /*#__PURE__*/React.createElement(Link, {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 38
      }
    }, "home"), " ")
  }]);
  ReactDOM.createRoot(document.getElementById('react_parcel_root')).render( /*#__PURE__*/React.createElement(React.StrictMode, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 13
    }
  }, "Tornado Parcel"), /*#__PURE__*/React.createElement(Provider, {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(RouterProvider, {
    router: router,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 17
    }
  }))));
})();
//# sourceMappingURL=app.js.map