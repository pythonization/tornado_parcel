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
    _fetch_m = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(url, fetch_params, _ref) {
      var return_json, result;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            return_json = _ref.return_json;
            _context9.next = 3;
            return fetch(url, fetch_params);
          case 3:
            result = _context9.sent;
            if (!(result.status == 400)) {
              _context9.next = 10;
              break;
            }
            _context9.t0 = Error;
            _context9.next = 8;
            return result.text();
          case 8:
            _context9.t1 = _context9.sent;
            throw (0, _context9.t0)(_context9.t1);
          case 10:
            if (!(result.status != 200)) {
              _context9.next = 12;
              break;
            }
            throw Error('Wrong status code (and this is not validation error)');
          case 12:
            if (!return_json) {
              _context9.next = 16;
              break;
            }
            _context9.next = 15;
            return result.json();
          case 15:
            result = _context9.sent;
          case 16:
            return _context9.abrupt("return", result);
          case 17:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _fetch_m.apply(this, arguments);
  }
  function set_error_msg(state, action) {
    state.error = action.error.message;
  }
  function alert_error(state, action) {
    alert(action.error.message);
  }

  // #region lockers
  var fetch_lockers = createAsyncThunk('lockers/fetch_lockers', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var record_l;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch_m2("/api/locker", {}, {
            return_json: true
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
            return fetch_m2("/api/locker", {
              method: "POST",
              body: JSON.stringify(record_data)
            }, {
              return_json: true
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
            return fetch_m2("/api/locker", {
              method: "DELETE",
              body: JSON.stringify(record_id)
            }, {});
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
      status: 'idle',
      error: null
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
      }).addCase(delete_locker.fulfilled, locker_adapter.removeOne).addCase(add_new_locker.rejected, set_error_msg).addCase(update_locker.rejected, set_error_msg).addCase(delete_locker.rejected, alert_error);
    }
  });
  var _locker_adapter$getSe = locker_adapter.getSelectors(function (state) {
      return state.lockers;
    }),
    select_all_lockers = _locker_adapter$getSe.selectAll,
    select_locker_by_id = _locker_adapter$getSe.selectById;
  // #endregion

  // #region parcel
  var fetch_parcels = createAsyncThunk('parcels/fetch_parcels', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var record_l;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return fetch_m2("/api/parcel", {}, {
            return_json: true
          });
        case 2:
          record_l = _context5.sent;
          return _context5.abrupt("return", record_l);
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  var add_new_parcel = createAsyncThunk('parcels/add_1_parcel', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref11) {
      var _ref13, record_data, navigate, new_rec_id;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _ref13 = _slicedToArray(_ref11, 2), record_data = _ref13[0], navigate = _ref13[1];
            _context6.next = 3;
            return fetch_m2("/api/parcel", {
              method: "POST",
              body: JSON.stringify(record_data)
            }, {
              return_json: true
            });
          case 3:
            new_rec_id = _context6.sent;
            return _context6.abrupt("return", [Object.assign({
              id: new_rec_id
            }, record_data), navigate]);
          case 5:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x7) {
      return _ref12.apply(this, arguments);
    };
  }());
  var update_parcel = createAsyncThunk('parcels/update_parcel', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref14) {
      var _ref16, record_data, navigate;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _ref16 = _slicedToArray(_ref14, 2), record_data = _ref16[0], navigate = _ref16[1];
            _context7.next = 3;
            return fetch_m2("/api/parcel", {
              method: "PUT",
              body: JSON.stringify(record_data)
            }, {});
          case 3:
            return _context7.abrupt("return", [record_data, navigate]);
          case 4:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x8) {
      return _ref15.apply(this, arguments);
    };
  }());
  var delete_parcel = createAsyncThunk('parcels/delete_parcel', /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(record_id) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return fetch_m2("/api/parcel", {
              method: "DELETE",
              body: JSON.stringify(record_id)
            }, {});
          case 2:
            return _context8.abrupt("return", record_id);
          case 3:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x9) {
      return _ref17.apply(this, arguments);
    };
  }());
  var parcel_adapter = createEntityAdapter();
  var parcel_slice = createSlice({
    name: 'parcels',
    initialState: parcel_adapter.getInitialState({
      status: 'idle',
      error: null
    }),
    reducers: {},
    extraReducers: function extraReducers(builder) {
      builder.addCase(fetch_parcels.fulfilled, function (state, action) {
        state.status = 'succeeded';
        parcel_adapter.upsertMany(state, action.payload);
      }).addCase(add_new_parcel.fulfilled, function (state, action) {
        state.error = null;
        var _action$payload3 = _slicedToArray(action.payload, 2),
          rec_with_id = _action$payload3[0],
          navigate = _action$payload3[1];
        parcel_adapter.addOne(state, rec_with_id);
        navigate('/parcels');
      }).addCase(update_parcel.fulfilled, function (state, action) {
        state.error = null;
        var _action$payload4 = _slicedToArray(action.payload, 2),
          parcel_r = _action$payload4[0],
          navigate = _action$payload4[1];
        parcel_adapter.setOne(state, parcel_r);
        navigate('/parcels');
      }).addCase(delete_parcel.fulfilled, parcel_adapter.removeOne).addCase(add_new_parcel.rejected, set_error_msg).addCase(update_parcel.rejected, set_error_msg).addCase(delete_parcel.rejected, alert_error);
    }
  });
  var _parcel_adapter$getSe = parcel_adapter.getSelectors(function (state) {
      return state.parcels;
    }),
    select_all_parcels = _parcel_adapter$getSe.selectAll,
    select_parcel_by_id = _parcel_adapter$getSe.selectById;
  // #endregion

  var store = configureStore({
    reducer: {
      lockers: locker_slice.reducer,
      parcels: parcel_slice.reducer
    }
  });
  // #endregion

  // #region react
  var root = /*#__PURE__*/React.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/lockers",
    className: "btn btn-primary",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }, "View Lockers"), "\xA0", /*#__PURE__*/React.createElement(Link, {
    to: "/parcels",
    className: "btn btn-primary",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, "View Parcels")));

  // #region lockers
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
        lineNumber: 272,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement(Link, {
      to: "/",
      className: "btn btn-primary",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 25
      }
    }, "Home"))), /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 25
      }
    }, "Lockers"))), /*#__PURE__*/React.createElement("table", {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 25
      }
    }, /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 29
      }
    }, "Full Address"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 29
      }
    }, "Capacity XS"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 29
      }
    }, "Capacity S"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 29
      }
    }, "Capacity M"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 29
      }
    }, "Capacity L"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 29
      }
    }, "Capacity XL"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 29
      }
    }, "Status"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 29
      }
    }))), /*#__PURE__*/React.createElement("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 21
      }
    }, lockers_list.map(function (locker_r) {
      return /*#__PURE__*/React.createElement("tr", {
        key: locker_r.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 33
        }
      }, /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 37
        }
      }, locker_r.full_address), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 37
        }
      }, locker_r.capacity_xs), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 37
        }
      }, locker_r.capacity_s), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 37
        }
      }, locker_r.capacity_m), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 37
        }
      }, locker_r.capacity_l), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 37
        }
      }, locker_r.capacity_xl), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 37
        }
      }, locker_r.status), /*#__PURE__*/React.createElement("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 37
        }
      }, /*#__PURE__*/React.createElement(Link, {
        to: "/lockers/edit/".concat(locker_r.id),
        className: "btn btn-primary",
        role: "button",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
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
          lineNumber: 314,
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
        lineNumber: 329,
        columnNumber: 17
      }
    }, "Add Locker"));
  }
  function LockersForm(_ref18) {
    var _this2 = this;
    var initial_values = _ref18.initial_values,
      create_ok_bt_action = _ref18.create_ok_bt_action,
      header_txt = _ref18.header_txt,
      save_bt_txt = _ref18.save_bt_txt;
    var dispatch = useDispatch();
    var lockers_error = useSelector(function (state) {
      return state.lockers.error;
    });
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
        capacity_xs: parseInt(lockerCapacityXS),
        capacity_s: parseInt(lockerCapacityS),
        capacity_m: parseInt(lockerCapacityM),
        capacity_l: parseInt(lockerCapacityL),
        capacity_xl: parseInt(lockerCapacityXL),
        status: lockerState
      }));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 25
      }
    }, header_txt))), /*#__PURE__*/React.createElement("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_full_address",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
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
        lineNumber: 384,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_xs",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
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
        lineNumber: 393,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_s",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
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
        lineNumber: 403,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_m",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
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
        lineNumber: 412,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_l",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
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
        lineNumber: 421,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "locker_capacity_xl",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
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
        lineNumber: 430,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
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
        lineNumber: 438,
        columnNumber: 25
      }
    }, LOCKER_STATES.map(function (code) {
      return /*#__PURE__*/React.createElement("option", {
        value: code,
        key: code,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 37
        }
      }, code);
    }))), lockers_error && /*#__PURE__*/React.createElement("div", {
      className: "alert alert-warning",
      role: "alert",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 25
      }
    }, lockers_error), /*#__PURE__*/React.createElement(Link, {
      to: "/lockers",
      className: "btn btn-secondary",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 21
      }
    }, "Cancel"), "\xA0", /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: ok_click,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
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
        lineNumber: 488,
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
    if (!initial_values) {
      return /*#__PURE__*/React.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 20
        }
      }, "Locker does not exist");
    }
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
        lineNumber: 512,
        columnNumber: 13
      }
    });
  }
  function LockerName(_ref19) {
    var locker_id = _ref19.locker_id;
    var locker_r = useSelector(function (state) {
      return select_locker_by_id(state, locker_id);
    });
    return locker_r ? locker_r.full_address : '?';
  }
  // #endregion

  // #region parcels
  function ParcelsList() {
    var _this3 = this;
    var dispatch = useDispatch();
    var lockers_status = useSelector(function (state) {
      return state.lockers.status;
    });
    var parcels_status = useSelector(function (state) {
      return state.parcels.status;
    });
    var parcels_list = useSelector(select_all_parcels);
    useEffect(function () {
      if (lockers_status === 'idle') {
        // parcels need lockers data too
        dispatch(fetch_lockers());
      }
      if (parcels_status === 'idle') {
        dispatch(fetch_parcels());
      }
    }, [lockers_status, parcels_status, dispatch]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement(Link, {
      to: "/",
      className: "btn btn-primary",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 25
      }
    }, "Home"))), /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 25
      }
    }, "Parcels"))), /*#__PURE__*/React.createElement("table", {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 25
      }
    }, /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 29
      }
    }, "Sender full name"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 29
      }
    }, "Sender phone"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 29
      }
    }, "Sender email"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 29
      }
    }, "Receiver full name"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 29
      }
    }, "Receiver phone"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 29
      }
    }, "Receiver email"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 29
      }
    }, "Size"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 29
      }
    }, "Current locker"), /*#__PURE__*/React.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573,
        columnNumber: 29
      }
    }))), /*#__PURE__*/React.createElement("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 21
      }
    }, parcels_list.map(function (parcel_r) {
      return /*#__PURE__*/React.createElement("tr", {
        key: parcel_r.id,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 33
        }
      }, /*#__PURE__*/React.createElement("td", {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 37
        }
      }, parcel_r.sender_full_name), /*#__PURE__*/React.createElement("td", {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 37
        }
      }, parcel_r.sender_phone), /*#__PURE__*/React.createElement("td", {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 37
        }
      }, parcel_r.sender_email), /*#__PURE__*/React.createElement("td", {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 37
        }
      }, parcel_r.receiver_full_name), /*#__PURE__*/React.createElement("td", {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 37
        }
      }, parcel_r.receiver_phone), /*#__PURE__*/React.createElement("td", {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 37
        }
      }, parcel_r.receiver_email), /*#__PURE__*/React.createElement("td", {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 37
        }
      }, parcel_r.size), /*#__PURE__*/React.createElement("td", {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587,
          columnNumber: 37
        }
      }, /*#__PURE__*/React.createElement(LockerName, {
        locker_id: parcel_r.locker_now_id,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588,
          columnNumber: 41
        }
      })), /*#__PURE__*/React.createElement("td", {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 37
        }
      }, /*#__PURE__*/React.createElement(Link, {
        to: "/parcels/edit/".concat(parcel_r.id),
        className: "btn btn-primary",
        role: "button",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 41
        }
      }, "Edit"), "\xA0", /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-danger",
        onClick: function onClick(e) {
          return dispatch(delete_parcel(parcel_r.id));
        },
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 41
        }
      }, "Delete")));
    }))), /*#__PURE__*/React.createElement(Link, {
      to: "/parcels/add",
      className: "btn btn-primary",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610,
        columnNumber: 17
      }
    }, "Add Parcel"));
  }
  function ParcelsForm(_ref20) {
    var _this4 = this;
    var initial_values = _ref20.initial_values,
      create_ok_bt_action = _ref20.create_ok_bt_action,
      header_txt = _ref20.header_txt,
      save_bt_txt = _ref20.save_bt_txt;
    var dispatch = useDispatch();
    var lockers_list = useSelector(select_all_lockers);
    var parcels_error = useSelector(function (state) {
      return state.parcels.error;
    });
    var _useState15 = useState(initial_values.sender_full_name),
      _useState16 = _slicedToArray(_useState15, 2),
      parcelSName = _useState16[0],
      setParcelSName = _useState16[1];
    var _useState17 = useState(initial_values.sender_phone),
      _useState18 = _slicedToArray(_useState17, 2),
      parcelSPhone = _useState18[0],
      setParcelSPhone = _useState18[1];
    var _useState19 = useState(initial_values.sender_email),
      _useState20 = _slicedToArray(_useState19, 2),
      parcelSEmail = _useState20[0],
      setParcelSEmail = _useState20[1];
    var _useState21 = useState(initial_values.receiver_full_name),
      _useState22 = _slicedToArray(_useState21, 2),
      parcelRName = _useState22[0],
      setParcelRName = _useState22[1];
    var _useState23 = useState(initial_values.receiver_phone),
      _useState24 = _slicedToArray(_useState23, 2),
      parcelRPhone = _useState24[0],
      setParcelRPhone = _useState24[1];
    var _useState25 = useState(initial_values.receiver_email),
      _useState26 = _slicedToArray(_useState25, 2),
      parcelREmail = _useState26[0],
      setParcelREmail = _useState26[1];
    var _useState27 = useState(initial_values.size),
      _useState28 = _slicedToArray(_useState27, 2),
      parcelSize = _useState28[0],
      setParcelSize = _useState28[1];
    var _useState29 = useState(initial_values.locker_now_id),
      _useState30 = _slicedToArray(_useState29, 2),
      parcelLockerNowId = _useState30[0],
      setParcelLockerNowId = _useState30[1];
    function ok_click() {
      dispatch(create_ok_bt_action({
        sender_full_name: parcelSName,
        sender_phone: parcelSPhone,
        sender_email: parcelSEmail,
        receiver_full_name: parcelRName,
        receiver_phone: parcelRPhone,
        receiver_email: parcelREmail,
        size: parcelSize,
        locker_now_id: parseInt(parcelLockerNowId)
      }));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 25
      }
    }, header_txt))), /*#__PURE__*/React.createElement("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 665,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "sender_full_name",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 25
      }
    }, "Sender full name"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "sender_full_name",
      value: parcelSName,
      onChange: function onChange(e) {
        return setParcelSName(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "sender_phone",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 25
      }
    }, "Sender phone"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "sender_phone",
      value: parcelSPhone,
      onChange: function onChange(e) {
        return setParcelSPhone(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "sender_email",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 25
      }
    }, "Sender email"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "sender_email",
      value: parcelSEmail,
      onChange: function onChange(e) {
        return setParcelSEmail(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "receiver_full_name",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 25
      }
    }, "Receiver full name"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "receiver_full_name",
      value: parcelRName,
      onChange: function onChange(e) {
        return setParcelRName(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "receiver_phone",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 25
      }
    }, "Receiver phone"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "receiver_phone",
      value: parcelRPhone,
      onChange: function onChange(e) {
        return setParcelRPhone(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "receiver_email",
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712,
        columnNumber: 25
      }
    }, "Receiver email"), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "receiver_email",
      value: parcelREmail,
      onChange: function onChange(e) {
        return setParcelREmail(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 715,
        columnNumber: 25
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 21
      }
    }, "Size", /*#__PURE__*/React.createElement("select", {
      className: "form-select",
      "aria-label": "Size",
      value: parcelSize,
      onChange: function onChange(e) {
        return setParcelSize(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 25
      }
    }, PARCEL_SIZES.map(function (code) {
      return /*#__PURE__*/React.createElement("option", {
        value: code,
        key: code,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726,
          columnNumber: 37
        }
      }, code);
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 21
      }
    }, "Current Locker", /*#__PURE__*/React.createElement("select", {
      className: "form-select",
      "aria-label": "Current Locker",
      value: parcelLockerNowId,
      onChange: function onChange(e) {
        return setParcelLockerNowId(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 25
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: false,
      key: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 737,
        columnNumber: 29
      }
    }, "Not selected"), lockers_list.map(function (locker_r) {
      return /*#__PURE__*/React.createElement("option", {
        value: locker_r.id,
        key: locker_r.id,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742,
          columnNumber: 37
        }
      }, locker_r.full_address);
    }))), parcels_error && /*#__PURE__*/React.createElement("div", {
      className: "alert alert-warning",
      role: "alert",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752,
        columnNumber: 25
      }
    }, parcels_error), /*#__PURE__*/React.createElement(Link, {
      to: "/parcels",
      className: "btn btn-secondary",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 757,
        columnNumber: 21
      }
    }, "Cancel"), "\xA0", /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: ok_click,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 761,
        columnNumber: 21
      }
    }, save_bt_txt)));
  }
  function ParcelsAdd() {
    var navigate = useNavigate();
    var initial_values = {
      sender_full_name: '',
      sender_phone: '+371',
      sender_email: '',
      receiver_full_name: '',
      receiver_phone: '+371',
      receiver_email: '',
      size: 'XS',
      locker_now_id: false
    };
    function create_ok_bt_action(values) {
      return add_new_parcel([values, navigate]);
    }
    return /*#__PURE__*/React.createElement(ParcelsForm, {
      initial_values: initial_values,
      create_ok_bt_action: create_ok_bt_action,
      header_txt: "Add Parcel",
      save_bt_txt: "Create",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 790,
        columnNumber: 13
      }
    });
  }
  function ParcelsEdit() {
    var navigate = useNavigate();
    var _useParams2 = useParams(),
      parcel_id = _useParams2.parcel_id;
    var initial_values = useSelector(function (state) {
      return select_parcel_by_id(state, parcel_id);
    });
    if (!initial_values) {
      return /*#__PURE__*/React.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 803,
          columnNumber: 20
        }
      }, "Parcel does not exist");
    }
    function create_ok_bt_action(values) {
      values.id = parcel_id;
      return update_parcel([values, navigate]);
    }
    return /*#__PURE__*/React.createElement(ParcelsForm, {
      initial_values: initial_values,
      create_ok_bt_action: create_ok_bt_action,
      header_txt: "Edit Parcel",
      save_bt_txt: "Update",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 814,
        columnNumber: 13
      }
    });
  }
  // #endregion

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
        lineNumber: 833,
        columnNumber: 22
      }
    })
  }, {
    path: "lockers/add",
    element: /*#__PURE__*/React.createElement(LockersAdd, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 837,
        columnNumber: 22
      }
    })
  }, {
    path: "lockers/edit/:locker_id",
    element: /*#__PURE__*/React.createElement(LockersEdit, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 841,
        columnNumber: 22
      }
    })
  }, {
    path: "parcels",
    element: /*#__PURE__*/React.createElement(ParcelsList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 846,
        columnNumber: 22
      }
    })
  }, {
    path: "parcels/add",
    element: /*#__PURE__*/React.createElement(ParcelsAdd, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 850,
        columnNumber: 22
      }
    })
  }, {
    path: "parcels/edit/:parcel_id",
    element: /*#__PURE__*/React.createElement(ParcelsEdit, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 22
      }
    })
  }]);
  ReactDOM.createRoot(document.getElementById('react_parcel_root')).render( /*#__PURE__*/React.createElement(React.StrictMode, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862,
      columnNumber: 13
    }
  }, "Tornado Parcel"), /*#__PURE__*/React.createElement(Provider, {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(RouterProvider, {
    router: router,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865,
      columnNumber: 17
    }
  }))));
})();
//# sourceMappingURL=app.js.map