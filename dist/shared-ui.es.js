import * as ee from "react";
import oe, { forwardRef as fo, useContext as po, useState as mo, useRef as ho, useEffect as go } from "react";
import { Button as yo, Avatar as bo, Menu as vo, MenuItem as So, Icon as xo, Stack as Ur, Typography as Yr, Radio as wo } from "@mui/material";
import { Person as Co, KeyboardArrowUp as To, KeyboardArrowDown as Eo } from "@mui/icons-material";
function bn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fr = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function ko() {
  if (kt) return Ke;
  kt = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var s in o)
        s !== "key" && (i[s] = o[s]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Ke.Fragment = r, Ke.jsx = t, Ke.jsxs = t, Ke;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Oo() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === c ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case l:
          return "Fragment";
        case w:
          return "Profiler";
        case b:
          return "StrictMode";
        case v:
          return "Suspense";
        case N:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case y:
            return "Portal";
          case C:
            return (d.displayName || "Context") + ".Provider";
          case A:
            return (d._context.displayName || "Context") + ".Consumer";
          case k:
            var S = d.render;
            return d = d.displayName, d || (d = S.displayName || S.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case $:
            return S = d.displayName || null, S !== null ? S : e(d.type) || "Memo";
          case q:
            S = d._payload, d = d._init;
            try {
              return e(d(S));
            } catch {
            }
        }
      return null;
    }
    function r(d) {
      return "" + d;
    }
    function t(d) {
      try {
        r(d);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var R = S.error, P = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return R.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), r(d);
      }
    }
    function n(d) {
      if (d === l) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === q)
        return "<...>";
      try {
        var S = e(d);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var d = _.A;
      return d === null ? null : d.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(d) {
      if (L.call(d, "key")) {
        var S = Object.getOwnPropertyDescriptor(d, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function s(d, S) {
      function R() {
        ae || (ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: R,
        configurable: !0
      });
    }
    function u() {
      var d = e(this.type);
      return le[d] || (le[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function f(d, S, R, P, M, j, F, B) {
      return R = j.ref, d = {
        $$typeof: x,
        type: d,
        key: S,
        props: j,
        _owner: M
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function p(d, S, R, P, M, j, F, B) {
      var I = S.children;
      if (I !== void 0)
        if (P)
          if (V(I)) {
            for (P = 0; P < I.length; P++)
              m(I[P]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(I);
      if (L.call(S, "key")) {
        I = e(d);
        var D = Object.keys(S).filter(function(ue) {
          return ue !== "key";
        });
        P = 0 < D.length ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}", Be[I + P] || (D = 0 < D.length ? "{" + D.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          I,
          D,
          I
        ), Be[I + P] = !0);
      }
      if (I = null, R !== void 0 && (t(R), I = "" + R), a(S) && (t(S.key), I = "" + S.key), "key" in S) {
        R = {};
        for (var z in S)
          z !== "key" && (R[z] = S[z]);
      } else R = S;
      return I && s(
        R,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), f(
        d,
        I,
        j,
        M,
        o(),
        R,
        F,
        B
      );
    }
    function m(d) {
      typeof d == "object" && d !== null && d.$$typeof === x && d._store && (d._store.validated = 1);
    }
    var h = oe, x = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), C = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), c = Symbol.for("react.client.reference"), _ = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, V = Array.isArray, se = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(d) {
        return d();
      }
    };
    var ae, le = {}, he = h["react-stack-bottom-frame"].bind(
      h,
      i
    )(), $e = se(n(i)), Be = {};
    Xe.Fragment = l, Xe.jsx = function(d, S, R, P, M) {
      var j = 1e4 > _.recentlyCreatedOwnerStacks++;
      return p(
        d,
        S,
        R,
        !1,
        P,
        M,
        j ? Error("react-stack-top-frame") : he,
        j ? se(n(d)) : $e
      );
    }, Xe.jsxs = function(d, S, R, P, M) {
      var j = 1e4 > _.recentlyCreatedOwnerStacks++;
      return p(
        d,
        S,
        R,
        !0,
        P,
        M,
        j ? Error("react-stack-top-frame") : he,
        j ? se(n(d)) : $e
      );
    };
  }()), Xe;
}
var _t;
function _o() {
  return _t || (_t = 1, process.env.NODE_ENV === "production" ? fr.exports = ko() : fr.exports = Oo()), fr.exports;
}
var E = _o();
const At = (e) => e, Ao = () => {
  let e = At;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = At;
    }
  };
}, Ro = Ao();
function _e(e, ...r) {
  const t = new URL(`https://mui.com/production-error/?code=${e}`);
  return r.forEach((n) => t.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${t} for the full message.`;
}
function Ne(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : _e(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var dr = { exports: {} }, pr = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function $o() {
  if (Rt) return G;
  Rt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function C(v) {
    if (typeof v == "object" && v !== null) {
      var N = v.$$typeof;
      switch (N) {
        case r:
          switch (v = v.type, v) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case p:
                case y:
                case x:
                case a:
                  return v;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  function k(v) {
    return C(v) === f;
  }
  return G.AsyncMode = u, G.ConcurrentMode = f, G.ContextConsumer = s, G.ContextProvider = a, G.Element = r, G.ForwardRef = p, G.Fragment = n, G.Lazy = y, G.Memo = x, G.Portal = t, G.Profiler = i, G.StrictMode = o, G.Suspense = m, G.isAsyncMode = function(v) {
    return k(v) || C(v) === u;
  }, G.isConcurrentMode = k, G.isContextConsumer = function(v) {
    return C(v) === s;
  }, G.isContextProvider = function(v) {
    return C(v) === a;
  }, G.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }, G.isForwardRef = function(v) {
    return C(v) === p;
  }, G.isFragment = function(v) {
    return C(v) === n;
  }, G.isLazy = function(v) {
    return C(v) === y;
  }, G.isMemo = function(v) {
    return C(v) === x;
  }, G.isPortal = function(v) {
    return C(v) === t;
  }, G.isProfiler = function(v) {
    return C(v) === i;
  }, G.isStrictMode = function(v) {
    return C(v) === o;
  }, G.isSuspense = function(v) {
    return C(v) === m;
  }, G.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === f || v === i || v === o || v === m || v === h || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === x || v.$$typeof === a || v.$$typeof === s || v.$$typeof === p || v.$$typeof === b || v.$$typeof === w || v.$$typeof === A || v.$$typeof === l);
  }, G.typeOf = C, G;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function Po() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function C(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === f || O === i || O === o || O === m || O === h || typeof O == "object" && O !== null && (O.$$typeof === y || O.$$typeof === x || O.$$typeof === a || O.$$typeof === s || O.$$typeof === p || O.$$typeof === b || O.$$typeof === w || O.$$typeof === A || O.$$typeof === l);
    }
    function k(O) {
      if (typeof O == "object" && O !== null) {
        var xe = O.$$typeof;
        switch (xe) {
          case r:
            var ur = O.type;
            switch (ur) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case m:
                return ur;
              default:
                var Et = ur && ur.$$typeof;
                switch (Et) {
                  case s:
                  case p:
                  case y:
                  case x:
                  case a:
                    return Et;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var v = u, N = f, $ = s, q = a, W = r, c = p, _ = n, L = y, V = x, se = t, ae = i, le = o, he = m, $e = !1;
    function Be(O) {
      return $e || ($e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(O) || k(O) === u;
    }
    function d(O) {
      return k(O) === f;
    }
    function S(O) {
      return k(O) === s;
    }
    function R(O) {
      return k(O) === a;
    }
    function P(O) {
      return typeof O == "object" && O !== null && O.$$typeof === r;
    }
    function M(O) {
      return k(O) === p;
    }
    function j(O) {
      return k(O) === n;
    }
    function F(O) {
      return k(O) === y;
    }
    function B(O) {
      return k(O) === x;
    }
    function I(O) {
      return k(O) === t;
    }
    function D(O) {
      return k(O) === i;
    }
    function z(O) {
      return k(O) === o;
    }
    function ue(O) {
      return k(O) === m;
    }
    H.AsyncMode = v, H.ConcurrentMode = N, H.ContextConsumer = $, H.ContextProvider = q, H.Element = W, H.ForwardRef = c, H.Fragment = _, H.Lazy = L, H.Memo = V, H.Portal = se, H.Profiler = ae, H.StrictMode = le, H.Suspense = he, H.isAsyncMode = Be, H.isConcurrentMode = d, H.isContextConsumer = S, H.isContextProvider = R, H.isElement = P, H.isForwardRef = M, H.isFragment = j, H.isLazy = F, H.isMemo = B, H.isPortal = I, H.isProfiler = D, H.isStrictMode = z, H.isSuspense = ue, H.isValidElementType = C, H.typeOf = k;
  }()), H;
}
var Pt;
function vn() {
  return Pt || (Pt = 1, process.env.NODE_ENV === "production" ? pr.exports = $o() : pr.exports = Po()), pr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Gr, Mt;
function Mo() {
  if (Mt) return Gr;
  Mt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Gr = o() ? Object.assign : function(i, a) {
    for (var s, u = n(i), f, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var m in s)
        r.call(s, m) && (u[m] = s[m]);
      if (e) {
        f = e(s);
        for (var h = 0; h < f.length; h++)
          t.call(s, f[h]) && (u[f[h]] = s[f[h]]);
      }
    }
    return u;
  }, Gr;
}
var Hr, It;
function mt() {
  if (It) return Hr;
  It = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hr = e, Hr;
}
var qr, Nt;
function Sn() {
  return Nt || (Nt = 1, qr = Function.call.bind(Object.prototype.hasOwnProperty)), qr;
}
var Kr, jt;
function Io() {
  if (jt) return Kr;
  jt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = /* @__PURE__ */ mt(), t = {}, n = /* @__PURE__ */ Sn();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var m;
          try {
            if (typeof i[p] != "function") {
              var h = Error(
                (u || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = i[p](a, p, u, s, null, r);
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var x = f ? f() : "";
            e(
              "Failed " + s + " type: " + m.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Kr = o, Kr;
}
var Xr, Ft;
function No() {
  if (Ft) return Xr;
  Ft = 1;
  var e = vn(), r = Mo(), t = /* @__PURE__ */ mt(), n = /* @__PURE__ */ Sn(), o = /* @__PURE__ */ Io(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Xr = function(s, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(d) {
      var S = d && (f && d[f] || d[p]);
      if (typeof S == "function")
        return S;
    }
    var h = "<<anonymous>>", x = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: A(),
      arrayOf: C,
      element: k(),
      elementType: v(),
      instanceOf: N,
      node: c(),
      objectOf: q,
      oneOf: $,
      oneOfType: W,
      shape: L,
      exact: V
    };
    function y(d, S) {
      return d === S ? d !== 0 || 1 / d === 1 / S : d !== d && S !== S;
    }
    function l(d, S) {
      this.message = d, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function b(d) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, R = 0;
      function P(j, F, B, I, D, z, ue) {
        if (I = I || h, z = z || B, ue !== t) {
          if (u) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = I + ":" + B;
            !S[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[xe] = !0, R++);
          }
        }
        return F[B] == null ? j ? F[B] === null ? new l("The " + D + " `" + z + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new l("The " + D + " `" + z + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : d(F, B, I, D, z);
      }
      var M = P.bind(null, !1);
      return M.isRequired = P.bind(null, !0), M;
    }
    function w(d) {
      function S(R, P, M, j, F, B) {
        var I = R[P], D = le(I);
        if (D !== d) {
          var z = he(I);
          return new l(
            "Invalid " + j + " `" + F + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return b(S);
    }
    function A() {
      return b(a);
    }
    function C(d) {
      function S(R, P, M, j, F) {
        if (typeof d != "function")
          return new l("Property `" + F + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var B = R[P];
        if (!Array.isArray(B)) {
          var I = le(B);
          return new l("Invalid " + j + " `" + F + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected an array."));
        }
        for (var D = 0; D < B.length; D++) {
          var z = d(B, D, M, j, F + "[" + D + "]", t);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return b(S);
    }
    function k() {
      function d(S, R, P, M, j) {
        var F = S[R];
        if (!s(F)) {
          var B = le(F);
          return new l("Invalid " + M + " `" + j + "` of type " + ("`" + B + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(d);
    }
    function v() {
      function d(S, R, P, M, j) {
        var F = S[R];
        if (!e.isValidElementType(F)) {
          var B = le(F);
          return new l("Invalid " + M + " `" + j + "` of type " + ("`" + B + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(d);
    }
    function N(d) {
      function S(R, P, M, j, F) {
        if (!(R[P] instanceof d)) {
          var B = d.name || h, I = Be(R[P]);
          return new l("Invalid " + j + " `" + F + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return b(S);
    }
    function $(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function S(R, P, M, j, F) {
        for (var B = R[P], I = 0; I < d.length; I++)
          if (y(B, d[I]))
            return null;
        var D = JSON.stringify(d, function(ue, O) {
          var xe = he(O);
          return xe === "symbol" ? String(O) : O;
        });
        return new l("Invalid " + j + " `" + F + "` of value `" + String(B) + "` " + ("supplied to `" + M + "`, expected one of " + D + "."));
      }
      return b(S);
    }
    function q(d) {
      function S(R, P, M, j, F) {
        if (typeof d != "function")
          return new l("Property `" + F + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var B = R[P], I = le(B);
        if (I !== "object")
          return new l("Invalid " + j + " `" + F + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected an object."));
        for (var D in B)
          if (n(B, D)) {
            var z = d(B, D, M, j, F + "." + D, t);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return b(S);
    }
    function W(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var S = 0; S < d.length; S++) {
        var R = d[S];
        if (typeof R != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + $e(R) + " at index " + S + "."
          ), a;
      }
      function P(M, j, F, B, I) {
        for (var D = [], z = 0; z < d.length; z++) {
          var ue = d[z], O = ue(M, j, F, B, I, t);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && D.push(O.data.expectedType);
        }
        var xe = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new l("Invalid " + B + " `" + I + "` supplied to " + ("`" + F + "`" + xe + "."));
      }
      return b(P);
    }
    function c() {
      function d(S, R, P, M, j) {
        return se(S[R]) ? null : new l("Invalid " + M + " `" + j + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return b(d);
    }
    function _(d, S, R, P, M) {
      return new l(
        (d || "React class") + ": " + S + " type `" + R + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function L(d) {
      function S(R, P, M, j, F) {
        var B = R[P], I = le(B);
        if (I !== "object")
          return new l("Invalid " + j + " `" + F + "` of type `" + I + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var D in d) {
          var z = d[D];
          if (typeof z != "function")
            return _(M, j, F, D, he(z));
          var ue = z(B, D, M, j, F + "." + D, t);
          if (ue)
            return ue;
        }
        return null;
      }
      return b(S);
    }
    function V(d) {
      function S(R, P, M, j, F) {
        var B = R[P], I = le(B);
        if (I !== "object")
          return new l("Invalid " + j + " `" + F + "` of type `" + I + "` " + ("supplied to `" + M + "`, expected `object`."));
        var D = r({}, R[P], d);
        for (var z in D) {
          var ue = d[z];
          if (n(d, z) && typeof ue != "function")
            return _(M, j, F, z, he(ue));
          if (!ue)
            return new l(
              "Invalid " + j + " `" + F + "` key `" + z + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(R[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var O = ue(B, z, M, j, F + "." + z, t);
          if (O)
            return O;
        }
        return null;
      }
      return b(S);
    }
    function se(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(se);
          if (d === null || s(d))
            return !0;
          var S = m(d);
          if (S) {
            var R = S.call(d), P;
            if (S !== d.entries) {
              for (; !(P = R.next()).done; )
                if (!se(P.value))
                  return !1;
            } else
              for (; !(P = R.next()).done; ) {
                var M = P.value;
                if (M && !se(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(d, S) {
      return d === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function le(d) {
      var S = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : ae(S, d) ? "symbol" : S;
    }
    function he(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var S = le(d);
      if (S === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function $e(d) {
      var S = he(d);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function Be(d) {
      return !d.constructor || !d.constructor.name ? h : d.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Xr;
}
var Jr, Bt;
function jo() {
  if (Bt) return Jr;
  Bt = 1;
  var e = /* @__PURE__ */ mt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Jr = function() {
    function n(a, s, u, f, p, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Jr;
}
var Dt;
function Fo() {
  if (Dt) return dr.exports;
  if (Dt = 1, process.env.NODE_ENV !== "production") {
    var e = vn(), r = !0;
    dr.exports = /* @__PURE__ */ No()(e.isElement, r);
  } else
    dr.exports = /* @__PURE__ */ jo()();
  return dr.exports;
}
var Bo = /* @__PURE__ */ Fo();
const T = /* @__PURE__ */ bn(Bo);
function xn(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = xn(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function ht() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = xn(e)) && (n && (n += " "), n += r);
  return n;
}
function wn(e, r, t = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let u = 0; u < i.length; u += 1) {
      const f = i[u];
      f && (a += (s === !0 ? "" : " ") + r(f), s = !1, t && t[f] && (a += " " + t[f]));
    }
    n[o] = a;
  }
  return n;
}
var mr = { exports: {} }, K = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function Do() {
  if (zt) return K;
  zt = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), x = Symbol.for("react.client.reference");
  function y(l) {
    if (typeof l == "object" && l !== null) {
      var b = l.$$typeof;
      switch (b) {
        case e:
          switch (l = l.type, l) {
            case t:
            case o:
            case n:
            case u:
            case f:
            case h:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case a:
                case s:
                case m:
                case p:
                  return l;
                case i:
                  return l;
                default:
                  return b;
              }
          }
        case r:
          return b;
      }
    }
  }
  return K.ContextConsumer = i, K.ContextProvider = a, K.Element = e, K.ForwardRef = s, K.Fragment = t, K.Lazy = m, K.Memo = p, K.Portal = r, K.Profiler = o, K.StrictMode = n, K.Suspense = u, K.SuspenseList = f, K.isContextConsumer = function(l) {
    return y(l) === i;
  }, K.isContextProvider = function(l) {
    return y(l) === a;
  }, K.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, K.isForwardRef = function(l) {
    return y(l) === s;
  }, K.isFragment = function(l) {
    return y(l) === t;
  }, K.isLazy = function(l) {
    return y(l) === m;
  }, K.isMemo = function(l) {
    return y(l) === p;
  }, K.isPortal = function(l) {
    return y(l) === r;
  }, K.isProfiler = function(l) {
    return y(l) === o;
  }, K.isStrictMode = function(l) {
    return y(l) === n;
  }, K.isSuspense = function(l) {
    return y(l) === u;
  }, K.isSuspenseList = function(l) {
    return y(l) === f;
  }, K.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === t || l === o || l === n || l === u || l === f || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === p || l.$$typeof === a || l.$$typeof === i || l.$$typeof === s || l.$$typeof === x || l.getModuleId !== void 0);
  }, K.typeOf = y, K;
}
var X = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function zo() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var b = l.$$typeof;
        switch (b) {
          case r:
            switch (l = l.type, l) {
              case n:
              case i:
              case o:
              case f:
              case p:
              case x:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case s:
                  case u:
                  case h:
                  case m:
                    return l;
                  case a:
                    return l;
                  default:
                    return b;
                }
            }
          case t:
            return b;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), x = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    X.ContextConsumer = a, X.ContextProvider = s, X.Element = r, X.ForwardRef = u, X.Fragment = n, X.Lazy = h, X.Memo = m, X.Portal = t, X.Profiler = i, X.StrictMode = o, X.Suspense = f, X.SuspenseList = p, X.isContextConsumer = function(l) {
      return e(l) === a;
    }, X.isContextProvider = function(l) {
      return e(l) === s;
    }, X.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === r;
    }, X.isForwardRef = function(l) {
      return e(l) === u;
    }, X.isFragment = function(l) {
      return e(l) === n;
    }, X.isLazy = function(l) {
      return e(l) === h;
    }, X.isMemo = function(l) {
      return e(l) === m;
    }, X.isPortal = function(l) {
      return e(l) === t;
    }, X.isProfiler = function(l) {
      return e(l) === i;
    }, X.isStrictMode = function(l) {
      return e(l) === o;
    }, X.isSuspense = function(l) {
      return e(l) === f;
    }, X.isSuspenseList = function(l) {
      return e(l) === p;
    }, X.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === f || l === p || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === m || l.$$typeof === s || l.$$typeof === a || l.$$typeof === u || l.$$typeof === y || l.getModuleId !== void 0);
    }, X.typeOf = e;
  }()), X;
}
var Lt;
function Wo() {
  return Lt || (Lt = 1, process.env.NODE_ENV === "production" ? mr.exports = /* @__PURE__ */ Do() : mr.exports = /* @__PURE__ */ zo()), mr.exports;
}
var wr = /* @__PURE__ */ Wo();
function Ee(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Cn(e) {
  if (/* @__PURE__ */ ee.isValidElement(e) || wr.isValidElementType(e) || !Ee(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Cn(e[t]);
  }), r;
}
function de(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return Ee(e) && Ee(r) && Object.keys(r).forEach((o) => {
    /* @__PURE__ */ ee.isValidElement(r[o]) || wr.isValidElementType(r[o]) ? n[o] = r[o] : Ee(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ee(e[o]) ? n[o] = de(e[o], r[o], t) : t.clone ? n[o] = Ee(r[o]) ? Cn(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
function rr(e, r) {
  return r ? de(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Re = process.env.NODE_ENV !== "production" ? T.oneOfType([T.number, T.string, T.object, T.array]) : {};
function Vt(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const i = /min-width:\s*([0-9.]+)/;
    return +(n.match(i)?.[1] || 0) - +(o.match(i)?.[1] || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function Lo(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function Vo(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : _e(18, `(${r})`));
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Uo(e) {
  const r = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function t(i, a) {
    i.up = (...s) => r(e.breakpoints.up(...s), a), i.down = (...s) => r(e.breakpoints.down(...s), a), i.between = (...s) => r(e.breakpoints.between(...s), a), i.only = (...s) => r(e.breakpoints.only(...s), a), i.not = (...s) => {
      const u = r(e.breakpoints.not(...s), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const Or = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Ut = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Or[e]}px)`
}, Yo = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : Or[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function Se(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Ut;
    return r.reduce((a, s, u) => (a[i.up(i.keys[u])] = t(r[u]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Ut;
    return Object.keys(r).reduce((a, s) => {
      if (Lo(i.keys, s)) {
        const u = Vo(n.containerQueries ? n : Yo, s);
        u && (a[u] = t(r[s], s));
      } else if (Object.keys(i.values || Or).includes(s)) {
        const u = i.up(s);
        a[u] = t(r[s], s);
      } else {
        const u = s;
        a[u] = r[u];
      }
      return a;
    }, {});
  }
  return t(r);
}
function Tn(e = {}) {
  return e.keys?.reduce((t, n) => {
    const o = e.up(n);
    return t[o] = {}, t;
  }, {}) || {};
}
function it(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function Go(e, ...r) {
  const t = Tn(e), n = [t, ...r].reduce((o, i) => de(o, i), {});
  return it(Object.keys(t), n);
}
function Ho(e, r) {
  if (typeof e != "object")
    return {};
  const t = {}, n = Object.keys(r);
  return Array.isArray(e) ? n.forEach((o, i) => {
    i < e.length && (t[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (t[o] = !0);
  }), t;
}
function Qr({
  values: e,
  breakpoints: r,
  base: t
}) {
  const n = t || Ho(e, r), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((a, s, u) => (Array.isArray(e) ? (a[s] = e[u] != null ? e[u] : e[i], i = u) : typeof e == "object" ? (a[s] = e[s] != null ? e[s] : e[i], i = s) : a[s] = e, a), {});
}
function _r(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Cr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = _r(e, t) || n, r && (o = r(o, n, e)), o;
}
function ne(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const s = a[r], u = a.theme, f = _r(u, n) || {};
    return Se(a, s, (m) => {
      let h = Cr(f, o, m);
      return m === h && typeof m == "string" && (h = Cr(f, o, `${r}${m === "default" ? "" : Ne(m)}`, m)), t === !1 ? h : {
        [t]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Re
  } : {}, i.filterProps = [r], i;
}
function qo(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Ko = {
  m: "margin",
  p: "padding"
}, Xo = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Yt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Jo = qo((e) => {
  if (e.length > 2)
    if (Yt[e])
      e = Yt[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Ko[r], o = Xo[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Ar = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Rr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Qo = [...Ar, ...Rr];
function ar(e, r, t, n) {
  const o = _r(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : typeof s == "string" && s.startsWith("var(") ? `calc(-1 * ${s})` : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function $r(e) {
  return ar(e, "spacing", 8, "spacing");
}
function je(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function Zo(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = je(r, t), n), {});
}
function ei(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = Jo(t), i = Zo(o, n), a = e[t];
  return Se(e, a, i);
}
function En(e, r) {
  const t = $r(e.theme);
  return Object.keys(e).map((n) => ei(e, r, n, t)).reduce(rr, {});
}
function re(e) {
  return En(e, Ar);
}
re.propTypes = process.env.NODE_ENV !== "production" ? Ar.reduce((e, r) => (e[r] = Re, e), {}) : {};
re.filterProps = Ar;
function te(e) {
  return En(e, Rr);
}
te.propTypes = process.env.NODE_ENV !== "production" ? Rr.reduce((e, r) => (e[r] = Re, e), {}) : {};
te.filterProps = Rr;
process.env.NODE_ENV !== "production" && Qo.reduce((e, r) => (e[r] = Re, e), {});
function Pr(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? rr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function be(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ve(e, r) {
  return ne({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const ri = ve("border", be), ti = ve("borderTop", be), ni = ve("borderRight", be), oi = ve("borderBottom", be), ii = ve("borderLeft", be), ai = ve("borderColor"), si = ve("borderTopColor"), ci = ve("borderRightColor"), li = ve("borderBottomColor"), ui = ve("borderLeftColor"), fi = ve("outline", be), di = ve("outlineColor"), Mr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = ar(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: je(r, n)
    });
    return Se(e, e.borderRadius, t);
  }
  return null;
};
Mr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Re
} : {};
Mr.filterProps = ["borderRadius"];
Pr(ri, ti, ni, oi, ii, ai, si, ci, li, ui, Mr, fi, di);
const Ir = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = ar(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: je(r, n)
    });
    return Se(e, e.gap, t);
  }
  return null;
};
Ir.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Re
} : {};
Ir.filterProps = ["gap"];
const Nr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = ar(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: je(r, n)
    });
    return Se(e, e.columnGap, t);
  }
  return null;
};
Nr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Re
} : {};
Nr.filterProps = ["columnGap"];
const jr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = ar(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: je(r, n)
    });
    return Se(e, e.rowGap, t);
  }
  return null;
};
jr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Re
} : {};
jr.filterProps = ["rowGap"];
const pi = ne({
  prop: "gridColumn"
}), mi = ne({
  prop: "gridRow"
}), hi = ne({
  prop: "gridAutoFlow"
}), gi = ne({
  prop: "gridAutoColumns"
}), yi = ne({
  prop: "gridAutoRows"
}), bi = ne({
  prop: "gridTemplateColumns"
}), vi = ne({
  prop: "gridTemplateRows"
}), Si = ne({
  prop: "gridTemplateAreas"
}), xi = ne({
  prop: "gridArea"
});
Pr(Ir, Nr, jr, pi, mi, hi, gi, yi, bi, vi, Si, xi);
function Ue(e, r) {
  return r === "grey" ? r : e;
}
const wi = ne({
  prop: "color",
  themeKey: "palette",
  transform: Ue
}), Ci = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ue
}), Ti = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ue
});
Pr(wi, Ci, Ti);
function ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ei = ne({
  prop: "width",
  transform: ge
}), gt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      const n = e.theme?.breakpoints?.values?.[t] || Or[t];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ge(t)
      };
    };
    return Se(e, e.maxWidth, r);
  }
  return null;
};
gt.filterProps = ["maxWidth"];
const ki = ne({
  prop: "minWidth",
  transform: ge
}), Oi = ne({
  prop: "height",
  transform: ge
}), _i = ne({
  prop: "maxHeight",
  transform: ge
}), Ai = ne({
  prop: "minHeight",
  transform: ge
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: ge
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: ge
});
const Ri = ne({
  prop: "boxSizing"
});
Pr(Ei, gt, ki, Oi, _i, Ai, Ri);
const sr = {
  // borders
  border: {
    themeKey: "borders",
    transform: be
  },
  borderTop: {
    themeKey: "borders",
    transform: be
  },
  borderRight: {
    themeKey: "borders",
    transform: be
  },
  borderBottom: {
    themeKey: "borders",
    transform: be
  },
  borderLeft: {
    themeKey: "borders",
    transform: be
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: be
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Mr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ue
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ue
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ue
  },
  // spacing
  p: {
    style: te
  },
  pt: {
    style: te
  },
  pr: {
    style: te
  },
  pb: {
    style: te
  },
  pl: {
    style: te
  },
  px: {
    style: te
  },
  py: {
    style: te
  },
  padding: {
    style: te
  },
  paddingTop: {
    style: te
  },
  paddingRight: {
    style: te
  },
  paddingBottom: {
    style: te
  },
  paddingLeft: {
    style: te
  },
  paddingX: {
    style: te
  },
  paddingY: {
    style: te
  },
  paddingInline: {
    style: te
  },
  paddingInlineStart: {
    style: te
  },
  paddingInlineEnd: {
    style: te
  },
  paddingBlock: {
    style: te
  },
  paddingBlockStart: {
    style: te
  },
  paddingBlockEnd: {
    style: te
  },
  m: {
    style: re
  },
  mt: {
    style: re
  },
  mr: {
    style: re
  },
  mb: {
    style: re
  },
  ml: {
    style: re
  },
  mx: {
    style: re
  },
  my: {
    style: re
  },
  margin: {
    style: re
  },
  marginTop: {
    style: re
  },
  marginRight: {
    style: re
  },
  marginBottom: {
    style: re
  },
  marginLeft: {
    style: re
  },
  marginX: {
    style: re
  },
  marginY: {
    style: re
  },
  marginInline: {
    style: re
  },
  marginInlineStart: {
    style: re
  },
  marginInlineEnd: {
    style: re
  },
  marginBlock: {
    style: re
  },
  marginBlockStart: {
    style: re
  },
  marginBlockEnd: {
    style: re
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ir
  },
  rowGap: {
    style: jr
  },
  columnGap: {
    style: Nr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ge
  },
  maxWidth: {
    style: gt
  },
  minWidth: {
    transform: ge
  },
  height: {
    transform: ge
  },
  maxHeight: {
    transform: ge
  },
  minHeight: {
    transform: ge
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function $i(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Pi(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Mi() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, s = i[t];
    if (!s)
      return {
        [t]: n
      };
    const {
      cssProperty: u = t,
      themeKey: f,
      transform: p,
      style: m
    } = s;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const h = _r(o, f) || {};
    return m ? m(a) : Se(a, n, (y) => {
      let l = Cr(h, p, y);
      return y === l && typeof y == "string" && (l = Cr(h, p, `${t}${y === "default" ? "" : Ne(y)}`, y)), u === !1 ? l : {
        [u]: l
      };
    });
  }
  function r(t) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = t || {};
    if (!n)
      return null;
    const a = o.unstable_sxConfig ?? sr;
    function s(u) {
      let f = u;
      if (typeof u == "function")
        f = u(o);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const p = Tn(o.breakpoints), m = Object.keys(p);
      let h = p;
      return Object.keys(f).forEach((x) => {
        const y = Pi(f[x], o);
        if (y != null)
          if (typeof y == "object")
            if (a[x])
              h = rr(h, e(x, y, o, a));
            else {
              const l = Se({
                theme: o
              }, y, (b) => ({
                [x]: b
              }));
              $i(l, y) ? h[x] = r({
                sx: y,
                theme: o,
                nested: !0
              }) : h = rr(h, l);
            }
          else
            h = rr(h, e(x, y, o, a));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Vt(o, it(m, h))
      } : Vt(o, it(m, h));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return r;
}
const Ge = Mi();
Ge.filterProps = ["sx"];
const Ii = (e) => {
  const r = {
    systemProps: {},
    otherProps: {}
  }, t = e?.theme?.unstable_sxConfig ?? sr;
  return Object.keys(e).forEach((n) => {
    t[n] ? r.systemProps[n] = e[n] : r.otherProps[n] = e[n];
  }), r;
};
function Ni(e) {
  const {
    sx: r,
    ...t
  } = e, {
    systemProps: n,
    otherProps: o
  } = Ii(t);
  let i;
  return Array.isArray(r) ? i = [n, ...r] : typeof r == "function" ? i = (...a) => {
    const s = r(...a);
    return Ee(s) ? {
      ...n,
      ...s
    } : n;
  } : i = {
    ...n,
    ...r
  }, {
    ...o,
    sx: i
  };
}
function at() {
  return at = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, at.apply(null, arguments);
}
function ji(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Fi(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Bi = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fi(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = ji(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), fe = "-ms-", Tr = "-moz-", U = "-webkit-", kn = "comm", yt = "rule", bt = "decl", Di = "@import", On = "@keyframes", zi = "@layer", Wi = Math.abs, Fr = String.fromCharCode, Li = Object.assign;
function Vi(e, r) {
  return ce(e, 0) ^ 45 ? (((r << 2 ^ ce(e, 0)) << 2 ^ ce(e, 1)) << 2 ^ ce(e, 2)) << 2 ^ ce(e, 3) : 0;
}
function _n(e) {
  return e.trim();
}
function Ui(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function Y(e, r, t) {
  return e.replace(r, t);
}
function st(e, r) {
  return e.indexOf(r);
}
function ce(e, r) {
  return e.charCodeAt(r) | 0;
}
function tr(e, r, t) {
  return e.slice(r, t);
}
function Ce(e) {
  return e.length;
}
function vt(e) {
  return e.length;
}
function hr(e, r) {
  return r.push(e), e;
}
function Yi(e, r) {
  return e.map(r).join("");
}
var Br = 1, He = 1, An = 0, me = 0, ie = 0, qe = "";
function Dr(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Br, column: He, length: a, return: "" };
}
function Je(e, r) {
  return Li(Dr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Gi() {
  return ie;
}
function Hi() {
  return ie = me > 0 ? ce(qe, --me) : 0, He--, ie === 10 && (He = 1, Br--), ie;
}
function ye() {
  return ie = me < An ? ce(qe, me++) : 0, He++, ie === 10 && (He = 1, Br++), ie;
}
function ke() {
  return ce(qe, me);
}
function br() {
  return me;
}
function cr(e, r) {
  return tr(qe, e, r);
}
function nr(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Rn(e) {
  return Br = He = 1, An = Ce(qe = e), me = 0, [];
}
function $n(e) {
  return qe = "", e;
}
function vr(e) {
  return _n(cr(me - 1, ct(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qi(e) {
  for (; (ie = ke()) && ie < 33; )
    ye();
  return nr(e) > 2 || nr(ie) > 3 ? "" : " ";
}
function Ki(e, r) {
  for (; --r && ye() && !(ie < 48 || ie > 102 || ie > 57 && ie < 65 || ie > 70 && ie < 97); )
    ;
  return cr(e, br() + (r < 6 && ke() == 32 && ye() == 32));
}
function ct(e) {
  for (; ye(); )
    switch (ie) {
      // ] ) " '
      case e:
        return me;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ct(ie);
        break;
      // (
      case 40:
        e === 41 && ct(e);
        break;
      // \
      case 92:
        ye();
        break;
    }
  return me;
}
function Xi(e, r) {
  for (; ye() && e + ie !== 57; )
    if (e + ie === 84 && ke() === 47)
      break;
  return "/*" + cr(r, me - 1) + "*" + Fr(e === 47 ? e : ye());
}
function Ji(e) {
  for (; !nr(ke()); )
    ye();
  return cr(e, me);
}
function Qi(e) {
  return $n(Sr("", null, null, null, [""], e = Rn(e), 0, [0], e));
}
function Sr(e, r, t, n, o, i, a, s, u) {
  for (var f = 0, p = 0, m = a, h = 0, x = 0, y = 0, l = 1, b = 1, w = 1, A = 0, C = "", k = o, v = i, N = n, $ = C; b; )
    switch (y = A, A = ye()) {
      // (
      case 40:
        if (y != 108 && ce($, m - 1) == 58) {
          st($ += Y(vr(A), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        $ += vr(A);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        $ += qi(y);
        break;
      // \
      case 92:
        $ += Ki(br() - 1, 7);
        continue;
      // /
      case 47:
        switch (ke()) {
          case 42:
          case 47:
            hr(Zi(Xi(ye(), br()), r, t), u);
            break;
          default:
            $ += "/";
        }
        break;
      // {
      case 123 * l:
        s[f++] = Ce($) * w;
      // } ; \0
      case 125 * l:
      case 59:
      case 0:
        switch (A) {
          // \0 }
          case 0:
          case 125:
            b = 0;
          // ;
          case 59 + p:
            w == -1 && ($ = Y($, /\f/g, "")), x > 0 && Ce($) - m && hr(x > 32 ? Ht($ + ";", n, t, m - 1) : Ht(Y($, " ", "") + ";", n, t, m - 2), u);
            break;
          // @ ;
          case 59:
            $ += ";";
          // { rule/at-rule
          default:
            if (hr(N = Gt($, r, t, f, p, o, s, C, k = [], v = [], m), i), A === 123)
              if (p === 0)
                Sr($, r, N, N, k, i, m, s, v);
              else
                switch (h === 99 && ce($, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Sr(e, N, N, n && hr(Gt(e, N, N, 0, 0, o, s, C, o, k = [], m), v), o, v, m, s, n ? k : v);
                    break;
                  default:
                    Sr($, N, N, N, [""], v, 0, s, v);
                }
        }
        f = p = x = 0, l = w = 1, C = $ = "", m = a;
        break;
      // :
      case 58:
        m = 1 + Ce($), x = y;
      default:
        if (l < 1) {
          if (A == 123)
            --l;
          else if (A == 125 && l++ == 0 && Hi() == 125)
            continue;
        }
        switch ($ += Fr(A), A * l) {
          // &
          case 38:
            w = p > 0 ? 1 : ($ += "\f", -1);
            break;
          // ,
          case 44:
            s[f++] = (Ce($) - 1) * w, w = 1;
            break;
          // @
          case 64:
            ke() === 45 && ($ += vr(ye())), h = ke(), p = m = Ce(C = $ += Ji(br())), A++;
            break;
          // -
          case 45:
            y === 45 && Ce($) == 2 && (l = 0);
        }
    }
  return i;
}
function Gt(e, r, t, n, o, i, a, s, u, f, p) {
  for (var m = o - 1, h = o === 0 ? i : [""], x = vt(h), y = 0, l = 0, b = 0; y < n; ++y)
    for (var w = 0, A = tr(e, m + 1, m = Wi(l = a[y])), C = e; w < x; ++w)
      (C = _n(l > 0 ? h[w] + " " + A : Y(A, /&\f/g, h[w]))) && (u[b++] = C);
  return Dr(e, r, t, o === 0 ? yt : s, u, f, p);
}
function Zi(e, r, t) {
  return Dr(e, r, t, kn, Fr(Gi()), tr(e, 2, -2), 0);
}
function Ht(e, r, t, n) {
  return Dr(e, r, t, bt, tr(e, 0, n), tr(e, n + 1, -1), n);
}
function Ye(e, r) {
  for (var t = "", n = vt(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function ea(e, r, t, n) {
  switch (e.type) {
    case zi:
      if (e.children.length) break;
    case Di:
    case bt:
      return e.return = e.return || e.value;
    case kn:
      return "";
    case On:
      return e.return = e.value + "{" + Ye(e.children, n) + "}";
    case yt:
      e.value = e.props.join(",");
  }
  return Ce(t = Ye(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function ra(e) {
  var r = vt(e);
  return function(t, n, o, i) {
    for (var a = "", s = 0; s < r; s++)
      a += e[s](t, n, o, i) || "";
    return a;
  };
}
function ta(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Pn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var na = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = ke(), o === 38 && i === 12 && (t[n] = 1), !nr(i); )
    ye();
  return cr(r, me);
}, oa = function(r, t) {
  var n = -1, o = 44;
  do
    switch (nr(o)) {
      case 0:
        o === 38 && ke() === 12 && (t[n] = 1), r[n] += na(me - 1, t, n);
        break;
      case 2:
        r[n] += vr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = ke() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      // fallthrough
      default:
        r[n] += Fr(o);
    }
  while (o = ye());
  return r;
}, ia = function(r, t) {
  return $n(oa(Rn(r), t));
}, qt = /* @__PURE__ */ new WeakMap(), aa = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !qt.get(n)) && !o) {
      qt.set(r, !0);
      for (var i = [], a = ia(t, i), s = n.props, u = 0, f = 0; u < a.length; u++)
        for (var p = 0; p < s.length; p++, f++)
          r.props[f] = i[u] ? a[u].replace(/&\f/g, s[p]) : s[p] + " " + a[u];
    }
  }
}, sa = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Mn(e, r) {
  switch (Vi(e, r)) {
    // color-adjust
    case 5103:
      return U + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return U + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + Tr + e + fe + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return U + e + fe + e + e;
    // order
    case 6165:
      return U + e + fe + "flex-" + e + e;
    // align-items
    case 5187:
      return U + e + Y(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + fe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return U + e + fe + "flex-item-" + Y(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return U + e + fe + "flex-line-pack" + Y(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return U + e + fe + Y(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return U + e + fe + Y(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return U + "box-" + Y(e, "-grow", "") + U + e + fe + Y(e, "grow", "positive") + e;
    // transition
    case 4554:
      return U + Y(e, /([^-])(transform)/g, "$1" + U + "$2") + e;
    // cursor
    case 6187:
      return Y(Y(Y(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Y(e, /(image-set\([^]*)/, U + "$1$`$1");
    // justify-content
    case 4968:
      return Y(Y(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + fe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(e, /(.+)-inline(.+)/, U + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ce(e) - 1 - r > 6) switch (ce(e, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ce(e, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Y(e, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + Tr + (ce(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~st(e, "stretch") ? Mn(Y(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ce(e, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ce(e, Ce(e) - 3 - (~st(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Y(e, ":", ":" + U) + e;
        // (inline-)?fl(e)x
        case 101:
          return Y(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + U + (ce(e, 14) === 45 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + fe + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ce(e, r + 11)) {
        // vertical-l(r)
        case 114:
          return U + e + fe + Y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return U + e + fe + Y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return U + e + fe + Y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return U + e + fe + e + e;
  }
  return e;
}
var ca = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case bt:
      r.return = Mn(r.value, r.length);
      break;
    case On:
      return Ye([Je(r, {
        value: Y(r.value, "@", "@" + U)
      })], o);
    case yt:
      if (r.length) return Yi(r.props, function(i) {
        switch (Ui(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ye([Je(r, {
              props: [Y(i, /:(read-\w+)/, ":" + Tr + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Ye([Je(r, {
              props: [Y(i, /:(plac\w+)/, ":" + U + "input-$1")]
            }), Je(r, {
              props: [Y(i, /:(plac\w+)/, ":" + Tr + "$1")]
            }), Je(r, {
              props: [Y(i, /:(plac\w+)/, fe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, la = [ca], ua = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(l) {
      var b = l.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || la, i = {}, a, s = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(l) {
      for (var b = l.getAttribute("data-emotion").split(" "), w = 1; w < b.length; w++)
        i[b[w]] = !0;
      s.push(l);
    }
  );
  var u, f = [aa, sa];
  {
    var p, m = [ea, ta(function(l) {
      p.insert(l);
    })], h = ra(f.concat(o, m)), x = function(b) {
      return Ye(Qi(b), h);
    };
    u = function(b, w, A, C) {
      p = A, x(b ? b + "{" + w.styles + "}" : w.styles), C && (y.inserted[w.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new Bi({
      key: t,
      container: a,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return y.sheet.hydrate(s), y;
}, fa = !0;
function da(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var In = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  fa === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, pa = function(r, t, n) {
  In(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ma(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var ha = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ga = /[A-Z]|^ms/g, ya = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Nn = function(r) {
  return r.charCodeAt(1) === 45;
}, Kt = function(r) {
  return r != null && typeof r != "boolean";
}, Zr = /* @__PURE__ */ Pn(function(e) {
  return Nn(e) ? e : e.replace(ga, "-$&").toLowerCase();
}), Xt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ya, function(n, o, i) {
          return Te = {
            name: o,
            styles: i,
            next: Te
          }, o;
        });
  }
  return ha[r] !== 1 && !Nn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function or(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return Te = {
          name: o.name,
          styles: o.styles,
          next: Te
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Te = {
              name: a.name,
              styles: a.styles,
              next: Te
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return ba(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var u = Te, f = t(e);
        return Te = u, or(e, r, f);
      }
      break;
    }
  }
  var p = t;
  if (r == null)
    return p;
  var m = r[p];
  return m !== void 0 ? m : p;
}
function ba(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += or(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object") {
        var s = a;
        r != null && r[s] !== void 0 ? n += i + "{" + r[s] + "}" : Kt(s) && (n += Zr(i) + ":" + Xt(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
        for (var u = 0; u < a.length; u++)
          Kt(a[u]) && (n += Zr(i) + ":" + Xt(i, a[u]) + ";");
      else {
        var f = or(e, r, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Zr(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Jt = /label:\s*([^\s;{]+)\s*(;|$)/g, Te;
function jn(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Te = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += or(t, r, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += or(t, r, e[s]), n) {
      var u = i;
      o += u[s];
    }
  Jt.lastIndex = 0;
  for (var f = "", p; (p = Jt.exec(o)) !== null; )
    f += "-" + p[1];
  var m = ma(o) + f;
  return {
    name: m,
    styles: o,
    next: Te
  };
}
var va = function(r) {
  return r();
}, Sa = ee.useInsertionEffect ? ee.useInsertionEffect : !1, xa = Sa || va, Fn = /* @__PURE__ */ ee.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ua({
    key: "css"
  }) : null
);
Fn.Provider;
var wa = function(r) {
  return /* @__PURE__ */ fo(function(t, n) {
    var o = po(Fn);
    return r(t, o, n);
  });
}, Bn = /* @__PURE__ */ ee.createContext({}), Ca = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ta = /* @__PURE__ */ Pn(
  function(e) {
    return Ca.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ea = Ta, ka = function(r) {
  return r !== "theme";
}, Qt = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Ea : ka;
}, Zt = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Oa = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return In(t, n, o), xa(function() {
    return pa(t, n, o);
  }), null;
}, _a = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var s = Zt(r, t, n), u = s || Qt(o), f = !u("as");
  return function() {
    var p = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      var h = p[0];
      m.push(h[0]);
      for (var x = p.length, y = 1; y < x; y++)
        m.push(p[y], h[y]);
    }
    var l = wa(function(b, w, A) {
      var C = f && b.as || o, k = "", v = [], N = b;
      if (b.theme == null) {
        N = {};
        for (var $ in b)
          N[$] = b[$];
        N.theme = ee.useContext(Bn);
      }
      typeof b.className == "string" ? k = da(w.registered, v, b.className) : b.className != null && (k = b.className + " ");
      var q = jn(m.concat(v), w.registered, N);
      k += w.key + "-" + q.name, a !== void 0 && (k += " " + a);
      var W = f && s === void 0 ? Qt(C) : u, c = {};
      for (var _ in b)
        f && _ === "as" || W(_) && (c[_] = b[_]);
      return c.className = k, A && (c.ref = A), /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement(Oa, {
        cache: w,
        serialized: q,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ ee.createElement(C, c));
    });
    return l.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", l.defaultProps = r.defaultProps, l.__emotion_real = l, l.__emotion_base = o, l.__emotion_styles = m, l.__emotion_forwardProp = s, Object.defineProperty(l, "toString", {
      value: function() {
        return "." + a;
      }
    }), l.withComponent = function(b, w) {
      var A = e(b, at({}, t, w, {
        shouldForwardProp: Zt(l, w, !0)
      }));
      return A.apply(void 0, m);
    }, l;
  };
}, Aa = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], lt = _a.bind(null);
Aa.forEach(function(e) {
  lt[e] = lt(e);
});
/**
 * @mui/styled-engine v7.2.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ra(e, r) {
  const t = lt(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function $a(e, r) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}
const en = [];
function Ie(e) {
  return en[0] = e, jn(en);
}
const Pa = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function Ma(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5,
    ...o
  } = e, i = Pa(r), a = Object.keys(i);
  function s(h) {
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t})`;
  }
  function u(h) {
    return `@media (max-width:${(typeof r[h] == "number" ? r[h] : h) - n / 100}${t})`;
  }
  function f(h, x) {
    const y = a.indexOf(x);
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t}) and (max-width:${(y !== -1 && typeof r[a[y]] == "number" ? r[a[y]] : x) - n / 100}${t})`;
  }
  function p(h) {
    return a.indexOf(h) + 1 < a.length ? f(h, a[a.indexOf(h) + 1]) : s(h);
  }
  function m(h) {
    const x = a.indexOf(h);
    return x === 0 ? s(a[1]) : x === a.length - 1 ? u(a[x]) : f(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: u,
    between: f,
    only: p,
    not: m,
    unit: t,
    ...o
  };
}
const Ia = {
  borderRadius: 4
};
function Dn(e = 8, r = $r({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function Na(e, r) {
  const t = this;
  if (t.vars) {
    if (!t.colorSchemes?.[e] || typeof t.getColorSchemeSelector != "function")
      return {};
    let n = t.getColorSchemeSelector(e);
    return n === "&" ? r : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: r
    });
  }
  return t.palette.mode === e ? r : {};
}
function zr(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = Ma(t), u = Dn(o);
  let f = de({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...Ia,
      ...i
    }
  }, a);
  return f = Uo(f), f.applyStyles = Na, f = r.reduce((p, m) => de(p, m), f), f.unstable_sxConfig = {
    ...sr,
    ...a?.unstable_sxConfig
  }, f.unstable_sx = function(m) {
    return Ge({
      sx: m,
      theme: this
    });
  }, f;
}
function ja(e) {
  return Object.keys(e).length === 0;
}
function Fa(e = null) {
  const r = ee.useContext(Bn);
  return !r || ja(r) ? e : r;
}
const Ba = zr();
function Da(e = Ba) {
  return Fa(e);
}
const za = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Wr(e, r, t = "Mui") {
  const n = za[r];
  return n ? `${t}-${n}` : `${Ro.generate(e)}-${r}`;
}
function Wa(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = Wr(e, o, t);
  }), n;
}
function zn(e, r = "") {
  return e.displayName || e.name || r;
}
function rn(e, r, t) {
  const n = zn(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function La(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return zn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case wr.ForwardRef:
          return rn(e, e.render, "ForwardRef");
        case wr.Memo:
          return rn(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Wn(e) {
  const {
    variants: r,
    ...t
  } = e, n = {
    variants: r,
    style: Ie(t),
    isProcessed: !0
  };
  return n.style === t || r && r.forEach((o) => {
    typeof o.style != "function" && (o.style = Ie(o.style));
  }), n;
}
const Va = zr();
function et(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Me(e, r) {
  return r && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${r}{${String(e.styles)}}`), e;
}
function Ua(e) {
  return e ? (r, t) => t[e] : null;
}
function Ya(e, r, t) {
  e.theme = qa(e.theme) ? t : e.theme[r] || e.theme;
}
function xr(e, r, t) {
  const n = typeof r == "function" ? r(e) : r;
  if (Array.isArray(n))
    return n.flatMap((o) => xr(e, o, t));
  if (Array.isArray(n?.variants)) {
    let o;
    if (n.isProcessed)
      o = t ? Me(n.style, t) : n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      o = t ? Me(Ie(a), t) : a;
    }
    return Ln(e, n.variants, [o], t);
  }
  return n?.isProcessed ? t ? Me(Ie(n.style), t) : n.style : t ? Me(Ie(n), t) : n;
}
function Ln(e, r, t = [], n = void 0) {
  let o;
  e: for (let i = 0; i < r.length; i += 1) {
    const a = r[i];
    if (typeof a.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !a.props(o))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && e.ownerState?.[s] !== a.props[s])
          continue e;
    typeof a.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, t.push(n ? Me(Ie(a.style(o)), n) : a.style(o))) : t.push(n ? Me(Ie(a.style), n) : a.style);
  }
  return t;
}
function Vn(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Va,
    rootShouldForwardProp: n = et,
    slotShouldForwardProp: o = et
  } = e;
  function i(s) {
    Ya(s, r, t);
  }
  return (s, u = {}) => {
    $a(s, (N) => N.filter(($) => $ !== Ge));
    const {
      name: f,
      slot: p,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Ua(Un(p)),
      ...y
    } = u, l = f && f.startsWith("Mui") || p ? "components" : "custom", b = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), w = h || !1;
    let A = et;
    p === "Root" || p === "root" ? A = n : p ? A = o : Ka(s) && (A = void 0);
    const C = Ra(s, {
      shouldForwardProp: A,
      label: Ha(f, p),
      ...y
    }), k = (N) => {
      if (N.__emotion_real === N)
        return N;
      if (typeof N == "function")
        return function(q) {
          return xr(q, N, q.theme.modularCssLayers ? l : void 0);
        };
      if (Ee(N)) {
        const $ = Wn(N);
        return function(W) {
          return $.variants ? xr(W, $, W.theme.modularCssLayers ? l : void 0) : W.theme.modularCssLayers ? Me($.style, l) : $.style;
        };
      }
      return N;
    }, v = (...N) => {
      const $ = [], q = N.map(k), W = [];
      if ($.push(i), f && x && W.push(function(V) {
        const ae = V.theme.components?.[f]?.styleOverrides;
        if (!ae)
          return null;
        const le = {};
        for (const he in ae)
          le[he] = xr(V, ae[he], V.theme.modularCssLayers ? "theme" : void 0);
        return x(V, le);
      }), f && !b && W.push(function(V) {
        const ae = V.theme?.components?.[f]?.variants;
        return ae ? Ln(V, ae, [], V.theme.modularCssLayers ? "theme" : void 0) : null;
      }), w || W.push(Ge), Array.isArray(q[0])) {
        const L = q.shift(), V = new Array($.length).fill(""), se = new Array(W.length).fill("");
        let ae;
        ae = [...V, ...L, ...se], ae.raw = [...V, ...L.raw, ...se], $.unshift(ae);
      }
      const c = [...$, ...q, ...W], _ = C(...c);
      return s.muiName && (_.muiName = s.muiName), process.env.NODE_ENV !== "production" && (_.displayName = Ga(f, p, s)), _;
    };
    return C.withConfig && (v.withConfig = C.withConfig), v;
  };
}
function Ga(e, r, t) {
  return e ? `${e}${Ne(r || "")}` : `Styled(${La(t)})`;
}
function Ha(e, r) {
  let t;
  return process.env.NODE_ENV !== "production" && e && (t = `${e}-${Un(r || "Root")}`), t;
}
function qa(e) {
  for (const r in e)
    return !1;
  return !0;
}
function Ka(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Un(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Xa = Vn();
function Er(e, r, t = !1) {
  const n = {
    ...r
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], s = r[i];
        if (!s)
          n[i] = a || {};
        else if (!a)
          n[i] = s;
        else {
          n[i] = {
            ...s
          };
          for (const u in a)
            if (Object.prototype.hasOwnProperty.call(a, u)) {
              const f = u;
              n[i][f] = Er(a[f], s[f], t);
            }
        }
      } else i === "className" && t && r.className ? n.className = ht(e?.className, r?.className) : i === "style" && t && r.style ? n.style = {
        ...e?.style,
        ...r?.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function Ja(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : Er(r.components[t].defaultProps, n);
}
function Qa({
  props: e,
  name: r,
  defaultTheme: t,
  themeId: n
}) {
  let o = Da(t);
  return n && (o = o[n] || o), Ja({
    theme: o,
    name: r,
    props: e
  });
}
function Za(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function St(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Za(e, r, t);
}
function es(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ae(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ae(es(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : _e(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : _e(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const rs = (e) => {
  const r = Ae(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, Ze = (e, r) => {
  try {
    return rs(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function Lr(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function Yn(e) {
  e = Ae(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (f, p = (f + t / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let s = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", u.push(r[3])), Lr({
    type: s,
    values: u
  });
}
function ut(e) {
  e = Ae(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Ae(Yn(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function tn(e, r) {
  const t = ut(e), n = ut(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function ts(e, r) {
  return e = Ae(e), r = St(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Lr(e);
}
function gr(e, r, t) {
  try {
    return ts(e, r);
  } catch {
    return e;
  }
}
function xt(e, r) {
  if (e = Ae(e), r = St(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Lr(e);
}
function J(e, r, t) {
  try {
    return xt(e, r);
  } catch {
    return e;
  }
}
function wt(e, r) {
  if (e = Ae(e), r = St(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Lr(e);
}
function Q(e, r, t) {
  try {
    return wt(e, r);
  } catch {
    return e;
  }
}
function ns(e, r = 0.15) {
  return ut(e) > 0.5 ? xt(e, r) : wt(e, r);
}
function yr(e, r, t) {
  try {
    return ns(e, r);
  } catch {
    return e;
  }
}
const os = /* @__PURE__ */ ee.createContext(void 0);
process.env.NODE_ENV !== "production" && (T.node, T.object);
function is(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? Er(o.defaultProps, n, r.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Er(o, n, r.components.mergeClassNameAndStyle) : n;
}
function as({
  props: e,
  name: r
}) {
  const t = ee.useContext(os);
  return is({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
const nn = {
  theme: void 0
};
function ss(e) {
  let r, t;
  return function(o) {
    let i = r;
    return (i === void 0 || o.theme !== t) && (nn.theme = o.theme, i = Wn(e(nn)), r = i, t = o.theme), i;
  };
}
function cs(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const on = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, a) => {
    a === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, ls = (e, r, t) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, u]) => {
      (!t || t && !t([...i, s])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, s], Array.isArray(u) ? [...a, s] : a) : r([...i, s], u, a));
    });
  }
  n(e);
}, us = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function rt(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, a = {};
  return ls(
    e,
    (s, u, f) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(s, u))) {
        const p = `--${t ? `${t}-` : ""}${s.join("-")}`, m = us(s, u);
        Object.assign(o, {
          [p]: m
        }), on(i, s, `var(${p})`, f), on(a, s, `var(${p}, ${m})`, f);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function fs(e, r = {}) {
  const {
    getSelector: t = b,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = r, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...u
  } = e, {
    vars: f,
    css: p,
    varsWithDefaults: m
  } = rt(u, r);
  let h = m;
  const x = {}, {
    [s]: y,
    ...l
  } = i;
  if (Object.entries(l || {}).forEach(([C, k]) => {
    const {
      vars: v,
      css: N,
      varsWithDefaults: $
    } = rt(k, r);
    h = de(h, $), x[C] = {
      css: N,
      vars: v
    };
  }), y) {
    const {
      css: C,
      vars: k,
      varsWithDefaults: v
    } = rt(y, r);
    h = de(h, v), x[s] = {
      css: C,
      vars: k
    };
  }
  function b(C, k) {
    let v = o;
    if (o === "class" && (v = ".%s"), o === "data" && (v = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (v = `[${o}="%s"]`), C) {
      if (v === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${i[C]?.palette?.mode || C})`]: {
            ":root": k
          }
        };
      if (v)
        return e.defaultColorScheme === C ? `:root, ${v.replace("%s", String(C))}` : v.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let C = {
        ...f
      };
      return Object.entries(x).forEach(([, {
        vars: k
      }]) => {
        C = de(C, k);
      }), C;
    },
    generateStyleSheets: () => {
      const C = [], k = e.defaultColorScheme || "light";
      function v(q, W) {
        Object.keys(W).length && C.push(typeof q == "string" ? {
          [q]: {
            ...W
          }
        } : q);
      }
      v(t(void 0, {
        ...p
      }), p);
      const {
        [k]: N,
        ...$
      } = x;
      if (N) {
        const {
          css: q
        } = N, W = i[k]?.palette?.mode, c = !n && W ? {
          colorScheme: W,
          ...q
        } : {
          ...q
        };
        v(t(k, {
          ...c
        }), c);
      }
      return Object.entries($).forEach(([q, {
        css: W
      }]) => {
        const c = i[q]?.palette?.mode, _ = !n && c ? {
          colorScheme: c,
          ...W
        } : {
          ...W
        };
        v(t(q, {
          ..._
        }), _);
      }), C;
    }
  };
}
function ds(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const ps = zr(), ms = Xa("div", {
  name: "MuiStack",
  slot: "Root"
});
function hs(e) {
  return Qa({
    props: e,
    name: "MuiStack",
    defaultTheme: ps
  });
}
function gs(e, r) {
  const t = ee.Children.toArray(e).filter(Boolean);
  return t.reduce((n, o, i) => (n.push(o), i < t.length - 1 && n.push(/* @__PURE__ */ ee.cloneElement(r, {
    key: `separator-${i}`
  })), n), []);
}
const ys = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], bs = ({
  ownerState: e,
  theme: r
}) => {
  let t = {
    display: "flex",
    flexDirection: "column",
    ...Se({
      theme: r
    }, Qr({
      values: e.direction,
      breakpoints: r.breakpoints.values
    }), (n) => ({
      flexDirection: n
    }))
  };
  if (e.spacing) {
    const n = $r(r), o = Object.keys(r.breakpoints.values).reduce((u, f) => ((typeof e.spacing == "object" && e.spacing[f] != null || typeof e.direction == "object" && e.direction[f] != null) && (u[f] = !0), u), {}), i = Qr({
      values: e.direction,
      base: o
    }), a = Qr({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((u, f, p) => {
      if (!i[u]) {
        const h = f > 0 ? i[p[f - 1]] : "column";
        i[u] = h;
      }
    }), t = de(t, Se({
      theme: r
    }, a, (u, f) => e.useFlexGap ? {
      gap: je(n, u)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${ys(f ? i[f] : e.direction)}`]: je(n, u)
      }
    }));
  }
  return t = Go(r.breakpoints, t), t;
};
function vs(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: r = ms,
    useThemeProps: t = hs,
    componentName: n = "MuiStack"
  } = e, o = () => wn({
    root: ["root"]
  }, (u) => Wr(n, u), {}), i = r(bs), a = /* @__PURE__ */ ee.forwardRef(function(u, f) {
    const p = t(u), m = Ni(p), {
      component: h = "div",
      direction: x = "column",
      spacing: y = 0,
      divider: l,
      children: b,
      className: w,
      useFlexGap: A = !1,
      ...C
    } = m, k = {
      direction: x,
      spacing: y,
      useFlexGap: A
    }, v = o();
    return /* @__PURE__ */ E.jsx(i, {
      as: h,
      ownerState: k,
      ref: f,
      className: ht(v.root, w),
      ...C,
      children: l ? gs(b, l) : b
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: T.node,
    direction: T.oneOfType([T.oneOf(["column-reverse", "column", "row-reverse", "row"]), T.arrayOf(T.oneOf(["column-reverse", "column", "row-reverse", "row"])), T.object]),
    divider: T.node,
    spacing: T.oneOfType([T.arrayOf(T.oneOfType([T.number, T.string])), T.number, T.object, T.string]),
    sx: T.oneOfType([T.arrayOf(T.oneOfType([T.func, T.object, T.bool])), T.func, T.object])
  }), a;
}
const ir = {
  black: "#000",
  white: "#fff"
}, Ss = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, De = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ze = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Qe = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, We = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Le = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ve = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Gn() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: ir.white,
      default: ir.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const xs = Gn();
function Hn() {
  return {
    text: {
      primary: ir.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: ir.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const an = Hn();
function sn(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = wt(e.main, o) : r === "dark" && (e.dark = xt(e.main, i)));
}
function ws(e = "light") {
  return e === "dark" ? {
    main: We[200],
    light: We[50],
    dark: We[400]
  } : {
    main: We[700],
    light: We[400],
    dark: We[800]
  };
}
function Cs(e = "light") {
  return e === "dark" ? {
    main: De[200],
    light: De[50],
    dark: De[400]
  } : {
    main: De[500],
    light: De[300],
    dark: De[700]
  };
}
function Ts(e = "light") {
  return e === "dark" ? {
    main: ze[500],
    light: ze[300],
    dark: ze[700]
  } : {
    main: ze[700],
    light: ze[400],
    dark: ze[800]
  };
}
function Es(e = "light") {
  return e === "dark" ? {
    main: Le[400],
    light: Le[300],
    dark: Le[700]
  } : {
    main: Le[700],
    light: Le[500],
    dark: Le[900]
  };
}
function ks(e = "light") {
  return e === "dark" ? {
    main: Ve[400],
    light: Ve[300],
    dark: Ve[700]
  } : {
    main: Ve[800],
    light: Ve[500],
    dark: Ve[900]
  };
}
function Os(e = "light") {
  return e === "dark" ? {
    main: Qe[400],
    light: Qe[300],
    dark: Qe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Qe[500],
    dark: Qe[900]
  };
}
function Ct(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || ws(r), a = e.secondary || Cs(r), s = e.error || Ts(r), u = e.info || Es(r), f = e.success || ks(r), p = e.warning || Os(r);
  function m(l) {
    const b = tn(l, an.text.primary) >= t ? an.text.primary : xs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = tn(l, b);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${b} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return b;
  }
  const h = ({
    color: l,
    name: b,
    mainShade: w = 500,
    lightShade: A = 300,
    darkShade: C = 700
  }) => {
    if (l = {
      ...l
    }, !l.main && l[w] && (l.main = l[w]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : _e(11, b ? ` (${b})` : "", w));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : _e(12, b ? ` (${b})` : "", JSON.stringify(l.main)));
    return sn(l, "light", A, n), sn(l, "dark", C, n), l.contrastText || (l.contrastText = m(l.main)), l;
  };
  let x;
  return r === "light" ? x = Gn() : r === "dark" && (x = Hn()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), de({
    // A collection of common colors.
    common: {
      ...ir
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Ss,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, o);
}
function _s(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function As(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function Rs(e) {
  return Math.round(e * 1e5) / 1e5;
}
const cn = {
  textTransform: "uppercase"
}, ln = '"Roboto", "Helvetica", "Arial", sans-serif';
function $s(e, r) {
  const {
    fontFamily: t = ln,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p,
    ...m
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, x = p || ((b) => `${b / u * h}rem`), y = (b, w, A, C, k) => ({
    fontFamily: t,
    fontWeight: b,
    fontSize: x(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: A,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === ln ? {
      letterSpacing: `${Rs(C / w)}em`
    } : {},
    ...k,
    ...f
  }), l = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, cn),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, cn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return de({
    htmlFontSize: u,
    pxToRem: x,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...l
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Ps = 0.2, Ms = 0.14, Is = 0.12;
function Z(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ps})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ms})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Is})`].join(",");
}
const Ns = ["none", Z(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Z(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Z(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Z(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Z(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Z(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Z(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Z(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Z(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Z(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Z(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Z(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Z(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Z(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Z(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Z(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Z(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Z(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Z(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Z(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Z(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Z(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Z(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Z(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], js = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Fs = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function un(e) {
  return `${Math.round(e)}ms`;
}
function Bs(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function Ds(e) {
  const r = {
    ...js,
    ...e.easing
  }, t = {
    ...Fs,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Bs,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: s = r.easeInOut,
        delay: u = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (h) => typeof h == "string", m = (h) => !Number.isNaN(parseFloat(h));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(s) || console.error('MUI: Argument "easing" must be a string.'), !m(u) && !p(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : un(a)} ${s} ${typeof u == "string" ? u : un(u)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const zs = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Ws(e) {
  return Ee(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function qn(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !Ws(s) || a.startsWith("unstable_") ? delete n[a] : Ee(s) && (n[a] = {
        ...s
      }, t(n[a]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ft(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: u,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : _e(20));
  const p = Ct(i), m = zr(e);
  let h = de(m, {
    mixins: As(m.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ns.slice(),
    typography: $s(p, s),
    transitions: Ds(a),
    zIndex: {
      ...zs
    }
  });
  if (h = de(h, f), h = r.reduce((x, y) => de(x, y), h), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (l, b) => {
      let w;
      for (w in l) {
        const A = l[w];
        if (x.includes(w) && Object.keys(A).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = Wr("", w);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(l, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: A
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          l[w] = {};
        }
      }
    };
    Object.keys(h.components).forEach((l) => {
      const b = h.components[l].styleOverrides;
      b && l.startsWith("Mui") && y(b, l);
    });
  }
  return h.unstable_sxConfig = {
    ...sr,
    ...f?.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return Ge({
      sx: y,
      theme: this
    });
  }, h.toRuntimeSource = qn, h;
}
function Ls(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const Vs = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = Ls(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function Kn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Xn(e) {
  return e === "dark" ? Vs : [];
}
function Us(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    ...o
  } = e, i = Ct(r);
  return {
    palette: i,
    opacity: {
      ...Kn(i.mode),
      ...t
    },
    overlays: n || Xn(i.mode),
    ...o
  };
}
function Ys(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Gs = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Hs = (e) => (r, t) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const a = {};
      return Gs(e.cssVarPrefix).forEach((s) => {
        a[s] = t[s], delete t[s];
      }), i === "media" ? {
        [n]: t,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", r)]: a,
        [`${n}, ${i.replace("%s", r)}`]: t
      } : {
        [n]: {
          ...t,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(r))}`;
  } else if (r) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [n]: t
        }
      };
    if (i)
      return i.replace("%s", String(r));
  }
  return n;
};
function qs(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function g(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function er(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Yn(e);
}
function Oe(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = Ze(er(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ks(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const we = (e) => {
  try {
    return e();
  } catch {
  }
}, Xs = (e = "mui") => cs(e);
function tt(e, r, t, n) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const o = n === "dark" ? "dark" : "light";
  if (!t) {
    e[n] = Us({
      ...r,
      palette: {
        mode: o,
        ...r?.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = ft({
    ...t,
    palette: {
      mode: o,
      ...r?.palette
    }
  });
  return e[n] = {
    ...r,
    palette: i,
    opacity: {
      ...Kn(o),
      ...r?.opacity
    },
    overlays: r?.overlays || Xn(o)
  }, a;
}
function Js(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Ys,
    colorSchemeSelector: s = t.light && t.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...f
  } = e, p = Object.keys(t)[0], m = n || (t.light && p !== "light" ? "light" : p), h = Xs(i), {
    [m]: x,
    light: y,
    dark: l,
    ...b
  } = t, w = {
    ...b
  };
  let A = x;
  if ((m === "dark" && !("dark" in t) || m === "light" && !("light" in t)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : _e(21, m));
  const C = tt(w, A, f, m);
  y && !w.light && tt(w, y, void 0, "light"), l && !w.dark && tt(w, l, void 0, "dark");
  let k = {
    defaultColorScheme: m,
    ...C,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: u,
    getCssVar: h,
    colorSchemes: w,
    font: {
      ..._s(C.typography),
      ...C.font
    },
    spacing: Ks(f.spacing)
  };
  Object.keys(k.colorSchemes).forEach((W) => {
    const c = k.colorSchemes[W].palette, _ = (L) => {
      const V = L.split("-"), se = V[1], ae = V[2];
      return h(L, c[se][ae]);
    };
    if (c.mode === "light" && (g(c.common, "background", "#fff"), g(c.common, "onBackground", "#000")), c.mode === "dark" && (g(c.common, "background", "#000"), g(c.common, "onBackground", "#fff")), qs(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      g(c.Alert, "errorColor", J(c.error.light, 0.6)), g(c.Alert, "infoColor", J(c.info.light, 0.6)), g(c.Alert, "successColor", J(c.success.light, 0.6)), g(c.Alert, "warningColor", J(c.warning.light, 0.6)), g(c.Alert, "errorFilledBg", _("palette-error-main")), g(c.Alert, "infoFilledBg", _("palette-info-main")), g(c.Alert, "successFilledBg", _("palette-success-main")), g(c.Alert, "warningFilledBg", _("palette-warning-main")), g(c.Alert, "errorFilledColor", we(() => c.getContrastText(c.error.main))), g(c.Alert, "infoFilledColor", we(() => c.getContrastText(c.info.main))), g(c.Alert, "successFilledColor", we(() => c.getContrastText(c.success.main))), g(c.Alert, "warningFilledColor", we(() => c.getContrastText(c.warning.main))), g(c.Alert, "errorStandardBg", Q(c.error.light, 0.9)), g(c.Alert, "infoStandardBg", Q(c.info.light, 0.9)), g(c.Alert, "successStandardBg", Q(c.success.light, 0.9)), g(c.Alert, "warningStandardBg", Q(c.warning.light, 0.9)), g(c.Alert, "errorIconColor", _("palette-error-main")), g(c.Alert, "infoIconColor", _("palette-info-main")), g(c.Alert, "successIconColor", _("palette-success-main")), g(c.Alert, "warningIconColor", _("palette-warning-main")), g(c.AppBar, "defaultBg", _("palette-grey-100")), g(c.Avatar, "defaultBg", _("palette-grey-400")), g(c.Button, "inheritContainedBg", _("palette-grey-300")), g(c.Button, "inheritContainedHoverBg", _("palette-grey-A100")), g(c.Chip, "defaultBorder", _("palette-grey-400")), g(c.Chip, "defaultAvatarColor", _("palette-grey-700")), g(c.Chip, "defaultIconColor", _("palette-grey-700")), g(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), g(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), g(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), g(c.LinearProgress, "primaryBg", Q(c.primary.main, 0.62)), g(c.LinearProgress, "secondaryBg", Q(c.secondary.main, 0.62)), g(c.LinearProgress, "errorBg", Q(c.error.main, 0.62)), g(c.LinearProgress, "infoBg", Q(c.info.main, 0.62)), g(c.LinearProgress, "successBg", Q(c.success.main, 0.62)), g(c.LinearProgress, "warningBg", Q(c.warning.main, 0.62)), g(c.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.11)`), g(c.Slider, "primaryTrack", Q(c.primary.main, 0.62)), g(c.Slider, "secondaryTrack", Q(c.secondary.main, 0.62)), g(c.Slider, "errorTrack", Q(c.error.main, 0.62)), g(c.Slider, "infoTrack", Q(c.info.main, 0.62)), g(c.Slider, "successTrack", Q(c.success.main, 0.62)), g(c.Slider, "warningTrack", Q(c.warning.main, 0.62));
      const L = yr(c.background.default, 0.8);
      g(c.SnackbarContent, "bg", L), g(c.SnackbarContent, "color", we(() => c.getContrastText(L))), g(c.SpeedDialAction, "fabHoverBg", yr(c.background.paper, 0.15)), g(c.StepConnector, "border", _("palette-grey-400")), g(c.StepContent, "border", _("palette-grey-400")), g(c.Switch, "defaultColor", _("palette-common-white")), g(c.Switch, "defaultDisabledColor", _("palette-grey-100")), g(c.Switch, "primaryDisabledColor", Q(c.primary.main, 0.62)), g(c.Switch, "secondaryDisabledColor", Q(c.secondary.main, 0.62)), g(c.Switch, "errorDisabledColor", Q(c.error.main, 0.62)), g(c.Switch, "infoDisabledColor", Q(c.info.main, 0.62)), g(c.Switch, "successDisabledColor", Q(c.success.main, 0.62)), g(c.Switch, "warningDisabledColor", Q(c.warning.main, 0.62)), g(c.TableCell, "border", Q(gr(c.divider, 1), 0.88)), g(c.Tooltip, "bg", gr(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      g(c.Alert, "errorColor", Q(c.error.light, 0.6)), g(c.Alert, "infoColor", Q(c.info.light, 0.6)), g(c.Alert, "successColor", Q(c.success.light, 0.6)), g(c.Alert, "warningColor", Q(c.warning.light, 0.6)), g(c.Alert, "errorFilledBg", _("palette-error-dark")), g(c.Alert, "infoFilledBg", _("palette-info-dark")), g(c.Alert, "successFilledBg", _("palette-success-dark")), g(c.Alert, "warningFilledBg", _("palette-warning-dark")), g(c.Alert, "errorFilledColor", we(() => c.getContrastText(c.error.dark))), g(c.Alert, "infoFilledColor", we(() => c.getContrastText(c.info.dark))), g(c.Alert, "successFilledColor", we(() => c.getContrastText(c.success.dark))), g(c.Alert, "warningFilledColor", we(() => c.getContrastText(c.warning.dark))), g(c.Alert, "errorStandardBg", J(c.error.light, 0.9)), g(c.Alert, "infoStandardBg", J(c.info.light, 0.9)), g(c.Alert, "successStandardBg", J(c.success.light, 0.9)), g(c.Alert, "warningStandardBg", J(c.warning.light, 0.9)), g(c.Alert, "errorIconColor", _("palette-error-main")), g(c.Alert, "infoIconColor", _("palette-info-main")), g(c.Alert, "successIconColor", _("palette-success-main")), g(c.Alert, "warningIconColor", _("palette-warning-main")), g(c.AppBar, "defaultBg", _("palette-grey-900")), g(c.AppBar, "darkBg", _("palette-background-paper")), g(c.AppBar, "darkColor", _("palette-text-primary")), g(c.Avatar, "defaultBg", _("palette-grey-600")), g(c.Button, "inheritContainedBg", _("palette-grey-800")), g(c.Button, "inheritContainedHoverBg", _("palette-grey-700")), g(c.Chip, "defaultBorder", _("palette-grey-700")), g(c.Chip, "defaultAvatarColor", _("palette-grey-300")), g(c.Chip, "defaultIconColor", _("palette-grey-300")), g(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), g(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), g(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), g(c.LinearProgress, "primaryBg", J(c.primary.main, 0.5)), g(c.LinearProgress, "secondaryBg", J(c.secondary.main, 0.5)), g(c.LinearProgress, "errorBg", J(c.error.main, 0.5)), g(c.LinearProgress, "infoBg", J(c.info.main, 0.5)), g(c.LinearProgress, "successBg", J(c.success.main, 0.5)), g(c.LinearProgress, "warningBg", J(c.warning.main, 0.5)), g(c.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.13)`), g(c.Slider, "primaryTrack", J(c.primary.main, 0.5)), g(c.Slider, "secondaryTrack", J(c.secondary.main, 0.5)), g(c.Slider, "errorTrack", J(c.error.main, 0.5)), g(c.Slider, "infoTrack", J(c.info.main, 0.5)), g(c.Slider, "successTrack", J(c.success.main, 0.5)), g(c.Slider, "warningTrack", J(c.warning.main, 0.5));
      const L = yr(c.background.default, 0.98);
      g(c.SnackbarContent, "bg", L), g(c.SnackbarContent, "color", we(() => c.getContrastText(L))), g(c.SpeedDialAction, "fabHoverBg", yr(c.background.paper, 0.15)), g(c.StepConnector, "border", _("palette-grey-600")), g(c.StepContent, "border", _("palette-grey-600")), g(c.Switch, "defaultColor", _("palette-grey-300")), g(c.Switch, "defaultDisabledColor", _("palette-grey-600")), g(c.Switch, "primaryDisabledColor", J(c.primary.main, 0.55)), g(c.Switch, "secondaryDisabledColor", J(c.secondary.main, 0.55)), g(c.Switch, "errorDisabledColor", J(c.error.main, 0.55)), g(c.Switch, "infoDisabledColor", J(c.info.main, 0.55)), g(c.Switch, "successDisabledColor", J(c.success.main, 0.55)), g(c.Switch, "warningDisabledColor", J(c.warning.main, 0.55)), g(c.TableCell, "border", J(gr(c.divider, 1), 0.68)), g(c.Tooltip, "bg", gr(c.grey[700], 0.92));
    }
    Oe(c.background, "default"), Oe(c.background, "paper"), Oe(c.common, "background"), Oe(c.common, "onBackground"), Oe(c, "divider"), Object.keys(c).forEach((L) => {
      const V = c[L];
      L !== "tonalOffset" && V && typeof V == "object" && (V.main && g(c[L], "mainChannel", Ze(er(V.main))), V.light && g(c[L], "lightChannel", Ze(er(V.light))), V.dark && g(c[L], "darkChannel", Ze(er(V.dark))), V.contrastText && g(c[L], "contrastTextChannel", Ze(er(V.contrastText))), L === "text" && (Oe(c[L], "primary"), Oe(c[L], "secondary")), L === "action" && (V.active && Oe(c[L], "active"), V.selected && Oe(c[L], "selected")));
    });
  }), k = r.reduce((W, c) => de(W, c), k);
  const v = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Hs(k)
  }, {
    vars: N,
    generateThemeVars: $,
    generateStyleSheets: q
  } = fs(k, v);
  return k.vars = N, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([W, c]) => {
    k[W] = c;
  }), k.generateThemeVars = $, k.generateStyleSheets = q, k.generateSpacing = function() {
    return Dn(f.spacing, $r(this));
  }, k.getColorSchemeSelector = ds(s), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = a, k.unstable_sxConfig = {
    ...sr,
    ...f?.unstable_sxConfig
  }, k.unstable_sx = function(c) {
    return Ge({
      sx: c,
      theme: this
    });
  }, k.toRuntimeSource = qn, k;
}
function fn(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: Ct({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function Jn(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t?.mode,
    ...a
  } = e, s = i || "light", u = o?.[s], f = {
    ...o,
    ...t ? {
      [s]: {
        ...typeof u != "boolean" && u,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return ft(e, ...r);
    let p = t;
    "palette" in e || f[s] && (f[s] !== !0 ? p = f[s].palette : s === "dark" && (p = {
      mode: "dark"
    }));
    const m = ft({
      ...e,
      palette: p
    }, ...r);
    return m.defaultColorScheme = s, m.colorSchemes = f, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: m.palette
    }, fn(m, "dark", f.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: m.palette
    }, fn(m, "light", f.light)), m;
  }
  return !t && !("light" in f) && s === "light" && (f.light = !0), Js({
    ...a,
    colorSchemes: f,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...r);
}
const Qs = Jn(), Zs = "$$material";
function ec(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const rc = (e) => ec(e) && e !== "classes", Qn = Vn({
  themeId: Zs,
  defaultTheme: Qs,
  rootShouldForwardProp: rc
}), tc = ss;
process.env.NODE_ENV !== "production" && (T.node, T.object.isRequired);
function Zn(e) {
  return as(e);
}
function nc(e) {
  return Wr("MuiSvgIcon", e);
}
Wa("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const oc = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, o = {
    root: ["root", r !== "inherit" && `color${Ne(r)}`, `fontSize${Ne(t)}`]
  };
  return wn(o, nc, n);
}, ic = Qn("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${Ne(t.color)}`], r[`fontSize${Ne(t.fontSize)}`]];
  }
})(tc(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (r) => !r.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, r]) => r && r.main).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars ?? e).palette?.[r]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), kr = /* @__PURE__ */ ee.forwardRef(function(r, t) {
  const n = Zn({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: u = "medium",
    htmlColor: f,
    inheritViewBox: p = !1,
    titleAccess: m,
    viewBox: h = "0 0 24 24",
    ...x
  } = n, y = /* @__PURE__ */ ee.isValidElement(o) && o.type === "svg", l = {
    ...n,
    color: a,
    component: s,
    fontSize: u,
    instanceFontSize: r.fontSize,
    inheritViewBox: p,
    viewBox: h,
    hasSvgAsChild: y
  }, b = {};
  p || (b.viewBox = h);
  const w = oc(l);
  return /* @__PURE__ */ E.jsxs(ic, {
    as: s,
    className: ht(w.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: t,
    ...b,
    ...x,
    ...y && o.props,
    ownerState: l,
    children: [y ? o.props.children : o, m ? /* @__PURE__ */ E.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (kr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: T.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * @ignore
   */
  className: T.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: T.oneOfType([T.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), T.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: T.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: T.oneOfType([T.oneOf(["inherit", "large", "medium", "small"]), T.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: T.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: T.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: T.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: T.oneOfType([T.arrayOf(T.oneOfType([T.func, T.object, T.bool])), T.func, T.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: T.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: T.string
});
kr.muiName = "SvgIcon";
function Vr(e, r) {
  function t(n, o) {
    return /* @__PURE__ */ E.jsx(kr, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${r}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (t.displayName = `${r}Icon`), t.muiName = kr.muiName, /* @__PURE__ */ ee.memo(/* @__PURE__ */ ee.forwardRef(t));
}
const ac = Vr(/* @__PURE__ */ E.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle");
var nt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var dn;
function sc() {
  return dn || (dn = 1, function(e) {
    (function() {
      var r = {}.hasOwnProperty;
      function t() {
        for (var i = "", a = 0; a < arguments.length; a++) {
          var s = arguments[a];
          s && (i = o(i, n(s)));
        }
        return i;
      }
      function n(i) {
        if (typeof i == "string" || typeof i == "number")
          return i;
        if (typeof i != "object")
          return "";
        if (Array.isArray(i))
          return t.apply(null, i);
        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
          return i.toString();
        var a = "";
        for (var s in i)
          r.call(i, s) && i[s] && (a = o(a, s));
        return a;
      }
      function o(i, a) {
        return a ? i ? i + " " + a : i + a : i;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  }(nt)), nt.exports;
}
var cc = sc();
const Fe = /* @__PURE__ */ bn(cc);
function eo(e) {
  switch (e) {
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    case "success":
      return "success";
    case "warning":
      return "warning";
    // O GovBR não possui 'info' explicitamente, mas pode ser tratado conforme necessidade.
    case "info":
      return "info";
    // O padrão GovBR utiliza 'danger' no lugar de 'error'.
    case "error":
      return "danger";
    default:
      return "";
  }
}
const dt = ({
  children: e,
  circle: r,
  block: t,
  inverted: n,
  loading: o,
  clearBlock: i,
  color: a,
  className: s,
  sx: u,
  ...f
}) => {
  const p = eo(a), m = {
    // Se for circular, o padding horizontal é 0, senão é 3
    px: r ? 0 : 3,
    // Se for circular, aplica todos os estilos de círculo
    ...r && {
      width: "var(--button-size)",
      height: "var(--button-size)",
      minWidth: "var(--button-size)",
      minHeight: "var(--button-size)",
      padding: 0,
      borderRadius: "50%",
      // <- O borderRadius para o círculo
      lineHeight: 1
    }
  };
  return /* @__PURE__ */ E.jsx(
    yo,
    {
      className: Fe(
        "br-button",
        p,
        {
          circle: r,
          block: t,
          inverted: n,
          loading: o,
          [`auto-${i}`]: !!i
        },
        s
      ),
      sx: { ...m, ...u },
      ...f,
      children: e
    }
  );
}, Fc = ({
  name: e,
  src: r,
  alt: t,
  menuItems: n = [],
  onNavigate: o,
  size: i = "medium",
  color: a = "default",
  className: s = ""
}) => {
  const [u, f] = mo(null), p = !!u, m = (C) => {
    n.length > 0 && f(C.currentTarget);
  }, h = () => {
    f(null);
  }, x = (C) => {
    o?.(C), h();
  }, y = { small: 32, medium: 40, large: 48, xl: 56 }, l = {
    default: "var(--color-primary-lighten-01)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)"
  }, b = {
    width: y[i] ?? 40,
    height: y[i] ?? 40,
    bgcolor: l[a] ?? l.default,
    fontSize: (y[i] ?? 40) * 0.5
  }, A = e ? ((C) => C.split(" ").map((k) => k[0]).join("").toUpperCase().slice(0, 2))(e) : /* @__PURE__ */ E.jsx(Co, { fontSize: "inherit" });
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxs(
      dt,
      {
        className: s,
        onClick: m,
        "aria-controls": p ? "avatar-menu" : void 0,
        "aria-haspopup": n.length > 0,
        "aria-expanded": p,
        sx: {
          p: "var(--spacing-scale-base)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          borderRadius: "4px",
          textTransform: "none",
          color: "var(--text-color-primary)"
        },
        children: [
          /* @__PURE__ */ E.jsx(bo, { src: r, alt: t || e, sx: b, children: A }),
          /* @__PURE__ */ E.jsxs("span", { children: [
            "Olá, ",
            /* @__PURE__ */ E.jsx("strong", { children: e || "Usuário" })
          ] }),
          n.length > 0 && (p ? /* @__PURE__ */ E.jsx(To, {}) : /* @__PURE__ */ E.jsx(Eo, {}))
        ]
      }
    ),
    /* @__PURE__ */ E.jsx(
      vo,
      {
        id: "avatar-menu",
        anchorEl: u,
        open: p,
        onClose: h,
        slotProps: {
          list: { "aria-labelledby": "avatar-button" }
        },
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
        children: n.map((C) => /* @__PURE__ */ E.jsxs(So, { onClick: () => x(C.href), children: [
          C.icon && /* @__PURE__ */ E.jsx(xo, { sx: { mr: 1.5 }, children: C.icon }),
          C.label
        ] }, C.href))
      }
    )
  ] });
}, Bc = ({
  items: e,
  onNavigate: r,
  className: t,
  ...n
}) => {
  const o = (i, a) => {
    i.preventDefault(), r(a);
  };
  return /* @__PURE__ */ E.jsx("nav", { className: Fe("br-breadcrumb", t), "aria-label": "Breadcrumb", ...n, children: /* @__PURE__ */ E.jsx("ul", { className: "crumb-list", children: e.map((i, a) => /* @__PURE__ */ E.jsx("li", { className: "crumb", children: i.href ? /* @__PURE__ */ E.jsx(
    "a",
    {
      className: "crumb-link",
      href: i.href,
      onClick: (s) => o(s, i.href),
      children: i.label
    }
  ) : /* @__PURE__ */ E.jsx("span", { className: "crumb-active", "aria-current": "page", children: i.label }) }, a)) }) });
};
var lc = (e) => e.type === "checkbox", uc = (e) => e instanceof Date, ro = (e) => e == null;
const fc = (e) => typeof e == "object";
var lr = (e) => !ro(e) && !Array.isArray(e) && fc(e) && !uc(e), dc = (e) => lr(e) && e.target ? lc(e.target) ? e.target.checked : e.target.value : e, pc = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, mc = (e, r) => e.has(pc(r)), hc = (e) => {
  const r = e.constructor && e.constructor.prototype;
  return lr(r) && r.hasOwnProperty("isPrototypeOf");
}, gc = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function to(e) {
  let r;
  const t = Array.isArray(e), n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    r = new Date(e);
  else if (!(gc && (e instanceof Blob || n)) && (t || lr(e)))
    if (r = t ? [] : {}, !t && !hc(e))
      r = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (r[o] = to(e[o]));
  else
    return e;
  return r;
}
var no = (e) => /^\w*$/.test(e), pt = (e) => e === void 0, yc = (e) => Array.isArray(e) ? e.filter(Boolean) : [], oo = (e) => yc(e.replace(/["|']|\]/g, "").split(/\.|\[/)), pe = (e, r, t) => {
  if (!r || !lr(e))
    return t;
  const n = (no(r) ? [r] : oo(r)).reduce((o, i) => ro(o) ? o : o[i], e);
  return pt(n) || n === e ? pt(e[r]) ? t : e[r] : n;
}, ot = (e) => typeof e == "boolean", pn = (e, r, t) => {
  let n = -1;
  const o = no(r) ? [r] : oo(r), i = o.length, a = i - 1;
  for (; ++n < i; ) {
    const s = o[n];
    let u = t;
    if (n !== a) {
      const f = e[s];
      u = lr(f) || Array.isArray(f) ? f : isNaN(+o[n + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = u, e = e[s];
  }
};
const mn = {
  BLUR: "blur",
  CHANGE: "change"
}, hn = {
  all: "all"
}, io = oe.createContext(null);
io.displayName = "HookFormContext";
const Tt = () => oe.useContext(io);
var bc = (e, r, t, n = !0) => {
  const o = {
    defaultValues: r._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const a = i;
        return r._proxyFormState[a] !== hn.all && (r._proxyFormState[a] = !n || hn.all), t && (t[a] = !0), e[a];
      }
    });
  return o;
};
const ao = typeof window < "u" ? ee.useLayoutEffect : ee.useEffect;
function vc(e) {
  const r = Tt(), { control: t = r.control, disabled: n, name: o, exact: i } = e || {}, [a, s] = oe.useState(t._formState), u = oe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return ao(() => t._subscribe({
    name: o,
    formState: u.current,
    exact: i,
    callback: (f) => {
      !n && s({
        ...t._formState,
        ...f
      });
    }
  }), [o, n, i]), oe.useEffect(() => {
    u.current.isValid && t._setValid(!0);
  }, [t]), oe.useMemo(() => bc(a, t, u.current, !1), [a, t]);
}
var Sc = (e) => typeof e == "string", xc = (e, r, t, n, o) => Sc(e) ? pe(t, e, o) : Array.isArray(e) ? e.map((i) => pe(t, i)) : t;
function wc(e) {
  const r = Tt(), { control: t = r.control, name: n, defaultValue: o, disabled: i, exact: a } = e || {}, s = oe.useRef(o), [u, f] = oe.useState(t._getWatch(n, s.current));
  return ao(() => t._subscribe({
    name: n,
    formState: {
      values: !0
    },
    exact: a,
    callback: (p) => !i && f(xc(n, t._names, p.values || t._formValues, !1, s.current))
  }), [n, t, i, a]), oe.useEffect(() => t._removeUnmounted()), u;
}
function Cc(e) {
  const r = Tt(), { name: t, disabled: n, control: o = r.control, shouldUnregister: i } = e, a = mc(o._names.array, t), s = wc({
    control: o,
    name: t,
    defaultValue: pe(o._formValues, t, pe(o._defaultValues, t, e.defaultValue)),
    exact: !0
  }), u = vc({
    control: o,
    name: t,
    exact: !0
  }), f = oe.useRef(e), p = oe.useRef(o.register(t, {
    ...e.rules,
    value: s,
    ...ot(e.disabled) ? { disabled: e.disabled } : {}
  })), m = oe.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!pe(u.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!pe(u.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!pe(u.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!pe(u.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => pe(u.errors, t)
    }
  }), [u, t]), h = oe.useCallback((b) => p.current.onChange({
    target: {
      value: dc(b),
      name: t
    },
    type: mn.CHANGE
  }), [t]), x = oe.useCallback(() => p.current.onBlur({
    target: {
      value: pe(o._formValues, t),
      name: t
    },
    type: mn.BLUR
  }), [t, o._formValues]), y = oe.useCallback((b) => {
    const w = pe(o._fields, t);
    w && b && (w._f.ref = {
      focus: () => b.focus && b.focus(),
      select: () => b.select && b.select(),
      setCustomValidity: (A) => b.setCustomValidity(A),
      reportValidity: () => b.reportValidity()
    });
  }, [o._fields, t]), l = oe.useMemo(() => ({
    name: t,
    value: s,
    ...ot(n) || u.disabled ? { disabled: u.disabled || n } : {},
    onChange: h,
    onBlur: x,
    ref: y
  }), [t, n, u.disabled, h, x, y, s]);
  return oe.useEffect(() => {
    const b = o._options.shouldUnregister || i;
    o.register(t, {
      ...f.current.rules,
      ...ot(f.current.disabled) ? { disabled: f.current.disabled } : {}
    });
    const w = (A, C) => {
      const k = pe(o._fields, A);
      k && k._f && (k._f.mount = C);
    };
    if (w(t, !0), b) {
      const A = to(pe(o._options.defaultValues, t));
      pn(o._defaultValues, t, A), pt(pe(o._formValues, t)) && pn(o._formValues, t, A);
    }
    return !a && o.register(t), () => {
      (a ? b && !o._state.action : b) ? o.unregister(t) : w(t, !1);
    };
  }, [t, o, a, i]), oe.useEffect(() => {
    o._setDisabledField({
      disabled: n,
      name: t
    });
  }, [n, t, o]), oe.useMemo(() => ({
    field: l,
    formState: u,
    fieldState: m
  }), [l, u, m]);
}
const so = (e) => e.render(Cc(e)), co = Vr(/* @__PURE__ */ E.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"
}), "Error"), Tc = Vr(/* @__PURE__ */ E.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}), "Info"), Ec = Vr(/* @__PURE__ */ E.jsx("path", {
  d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"
}), "Warning"), lo = ({
  govbrSize: e = "medium",
  status: r = void 0,
  clearBlock: t,
  id: n,
  label: o = "",
  feedbackMessage: i = "",
  helperText: a = "",
  disabled: s = !1,
  highlight: u = !1,
  inline: f,
  startIcon: p,
  endButtonIcon: m,
  onEndButtonClick: h,
  className: x = "br-input",
  placeholder: y,
  ...l
}) => {
  const b = eo(), w = n ? `${n}-feedback` : void 0, A = {
    success: /* @__PURE__ */ E.jsx(ac, { fontSize: "small" }),
    danger: /* @__PURE__ */ E.jsx(co, { fontSize: "small" }),
    info: /* @__PURE__ */ E.jsx(Tc, { fontSize: "small" }),
    warning: /* @__PURE__ */ E.jsx(Ec, { fontSize: "small" })
  };
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: Fe(
        "br-input",
        e,
        r,
        b,
        { [`auto-${t}`]: !!t },
        { "input-highlight": u, "input-inline": f },
        x
      ),
      children: [
        f ? /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          /* @__PURE__ */ E.jsx("div", { className: "input-label", children: /* @__PURE__ */ E.jsx("label", { htmlFor: n, className: "text-nowrap", children: o }) }),
          /* @__PURE__ */ E.jsx("div", { className: "input-content", children: /* @__PURE__ */ E.jsxs("div", { className: "input-group", children: [
            p && /* @__PURE__ */ E.jsx("div", { className: "input-icon", children: p }),
            /* @__PURE__ */ E.jsx(
              "input",
              {
                id: n,
                placeholder: y,
                disabled: s,
                "aria-describedby": w,
                className: x,
                ...l
              }
            ),
            m && /* @__PURE__ */ E.jsx(dt, { circle: !0, onClick: h, children: m })
          ] }) })
        ] }) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          o && /* @__PURE__ */ E.jsx("label", { htmlFor: n, children: o }),
          /* @__PURE__ */ E.jsxs("div", { className: "input-group", children: [
            p && /* @__PURE__ */ E.jsx("div", { className: "input-icon", children: p }),
            /* @__PURE__ */ E.jsx(
              "input",
              {
                id: n,
                placeholder: y,
                disabled: s,
                "aria-describedby": w,
                className: x,
                ...l
              }
            ),
            m && /* @__PURE__ */ E.jsx(dt, { circle: !0, onClick: h, children: m })
          ] })
        ] }),
        (i || a) && /* @__PURE__ */ E.jsxs(
          "span",
          {
            className: Fe("feedback", r),
            role: "alert",
            id: w,
            style: {
              display: "inline-block",
              width: "auto",
              marginTop: "0.25rem",
              padding: "0.2rem var(--spacing-scale-2x)",
              lineHeight: "1.2"
            },
            children: [
              r && A[r],
              " ",
              i ?? a
            ]
          }
        )
      ]
    }
  );
};
lo.displayName = "GovBRInput";
function Dc({
  name: e,
  control: r,
  rules: t,
  required: n,
  label: o,
  ...i
}) {
  const a = n ? {
    ...t,
    required: typeof n == "string" ? n : "Campo obrigatório"
  } : t;
  return /* @__PURE__ */ E.jsx(
    so,
    {
      name: e,
      control: r,
      rules: a,
      render: ({ field: s, fieldState: u }) => /* @__PURE__ */ E.jsx(
        lo,
        {
          ...s,
          ...i,
          required: typeof n == "boolean" ? n : !0,
          label: /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
            o,
            (a?.required || u.error?.type === "required") && /* @__PURE__ */ E.jsx("span", { style: { color: "var(--danger)" }, children: " *" })
          ] }),
          status: u.error ? "danger" : i.status,
          feedbackMessage: u.error?.message ?? i.feedbackMessage
        }
      )
    }
  );
}
const zc = ({
  variant: e = "internal",
  emphasis: r,
  density: t,
  circle: n = !1,
  block: o = !1,
  inverted: i = !1,
  className: a,
  ...s
}) => {
  const u = Fe(
    "br-sign-in",
    r,
    t,
    {
      circle: n,
      block: o,
      inverted: i
    },
    a
  ), f = () => {
    switch (e) {
      case "external-image":
        return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          "Entrar com ",
          /* @__PURE__ */ E.jsx(
            "img",
            {
              src: "https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png",
              alt: "gov.br"
            }
          )
        ] });
      case "external-text":
        return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          "Entrar com ",
          /* @__PURE__ */ E.jsx("span", { className: "text-black", children: "gov.br" })
        ] });
      case "internal":
      default:
        return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          /* @__PURE__ */ E.jsx("i", { className: "fas fa-user", "aria-hidden": "true" }),
          !n && "Entrar"
        ] });
    }
  };
  return /* @__PURE__ */ E.jsx("button", { type: "button", className: u, ...s, children: f() });
}, kc = ({
  id: e,
  label: r,
  status: t,
  indeterminate: n = !1,
  hiddenLabel: o = !1,
  className: i,
  disabled: a,
  ...s
}) => {
  const u = ho(null);
  go(() => {
    u.current && (u.current.indeterminate = n);
  }, [n]);
  const f = Fe(
    "br-checkbox",
    t,
    {
      disabled: a,
      "hidden-label": o
    },
    i
  );
  return /* @__PURE__ */ E.jsxs("div", { className: f, children: [
    /* @__PURE__ */ E.jsx("input", { ref: u, id: e, type: "checkbox", disabled: a, ...s }),
    /* @__PURE__ */ E.jsx("label", { htmlFor: e, children: r })
  ] });
}, uo = vs({
  createStyledComponent: Qn("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => Zn({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (uo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: T.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: T.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: T.oneOfType([T.oneOf(["column-reverse", "column", "row-reverse", "row"]), T.arrayOf(T.oneOf(["column-reverse", "column", "row-reverse", "row"])), T.object]),
  /**
   * Add an element between each child.
   */
  divider: T.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: T.oneOfType([T.arrayOf(T.oneOfType([T.number, T.string])), T.number, T.object, T.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: T.oneOfType([T.arrayOf(T.oneOfType([T.func, T.object, T.bool])), T.func, T.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: T.bool
});
const Oc = {
  Error: /* @__PURE__ */ E.jsx(co, { fontSize: "small", style: { verticalAlign: "middle", marginRight: "4px" } })
};
function Wc({
  name: e,
  control: r,
  rules: t,
  required: n,
  ...o
}) {
  const i = n ? {
    ...t,
    required: typeof n == "string" ? n : "Campo obrigatório"
  } : t;
  return /* @__PURE__ */ E.jsx(
    so,
    {
      name: e,
      control: r,
      rules: i,
      render: ({ field: a, fieldState: s }) => /* @__PURE__ */ E.jsxs(uo, { children: [
        /* @__PURE__ */ E.jsx(
          kc,
          {
            ...o,
            id: e,
            ...a,
            checked: !!a.value,
            status: s.error ? "invalid" : o.status
          }
        ),
        s.error && /* @__PURE__ */ E.jsxs("span", { className: Fe("feedback", "invalid"), role: "alert", children: [
          Oc.Error,
          s.error.message
        ] })
      ] })
    }
  );
}
const Lc = ({
  name: e,
  value: r,
  label: t,
  helpText: n,
  text: o,
  disabled: i,
  checked: a,
  error: s,
  valid: u,
  onChange: f
}) => /* @__PURE__ */ E.jsxs(
  Ur,
  {
    spacing: 1,
    sx: {
      // Reset completo para evitar herança
      margin: 0,
      padding: 0,
      border: "none",
      outline: "none",
      boxSizing: "border-box",
      // Neutralizar possíveis estilos herdados
      fontSize: "inherit",
      fontFamily: "inherit",
      lineHeight: "inherit",
      color: "inherit",
      backgroundColor: "transparent"
    },
    children: [
      /* @__PURE__ */ E.jsxs(
        Ur,
        {
          sx: {
            // Reset específico para container de labels
            margin: 0,
            padding: 0,
            gap: 0
          },
          children: [
            /* @__PURE__ */ E.jsx(
              Yr,
              {
                className: "br-label",
                sx: {
                  // Reset tipografia para evitar herança
                  margin: 0,
                  padding: 0,
                  fontSize: "1rem",
                  fontWeight: 500,
                  lineHeight: 1.25,
                  color: "#333"
                },
                children: t
              }
            ),
            /* @__PURE__ */ E.jsx(
              Yr,
              {
                className: "br-text-small",
                sx: {
                  // Reset tipografia para help text
                  margin: 0,
                  padding: 0,
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: "#666"
                },
                children: n
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ E.jsxs(
        Ur,
        {
          direction: "row",
          alignItems: "flex-start",
          spacing: 0,
          sx: {
            // Reset para container do radio
            margin: 0,
            padding: 0,
            minHeight: "auto",
            position: "relative"
          },
          children: [
            /* @__PURE__ */ E.jsx(
              wo,
              {
                disabled: i,
                checked: a,
                onChange: f,
                value: r,
                name: e,
                sx: {
                  // Cores baseadas no CSS GovBR-DS
                  color: "#ccc",
                  // --border-color padrão
                  "&.Mui-checked": {
                    color: "#1351B4"
                    // --selected (azul GovBR)
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                    // Tamanho normal
                    // SVG rendering otimizado para parecer mais fino
                    "& path": {
                      strokeWidth: "1px"
                      // Stroke mais fino para o contorno
                    },
                    "& circle": {
                      strokeWidth: "1px"
                      // Stroke mais fino para o círculo
                    },
                    // Forçar anti-aliasing e suavização
                    filter: "contrast(0.95)",
                    WebkitFontSmoothing: "antialiased"
                  },
                  // Padding similar ao GovBR-DS - com reset explícito
                  padding: "2px",
                  margin: 0,
                  // Reset completo do botão
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  // Alinhamento vertical com o texto
                  marginTop: "-2px",
                  // Ajuste fino para alinhar com primeira linha do texto
                  // Hover baseado no GovBR-DS
                  "&:hover:not(.Mui-disabled)": {
                    backgroundColor: "rgba(19, 81, 180, 0.08)"
                    // var(--hover) sem CSS var
                  },
                  // Focus baseado no GovBR-DS
                  "&.Mui-focusVisible": {
                    outline: "none",
                    boxShadow: "0 0 0 2px #F29F05"
                    // var(--focus)
                  },
                  // Estados de validação
                  ...s && {
                    color: "#D04F4F",
                    // var(--danger)
                    "&.Mui-checked": {
                      color: "#D04F4F"
                    }
                  },
                  ...u && !s && {
                    color: "#168821",
                    // var(--success)
                    "&.Mui-checked": {
                      color: "#168821"
                    }
                  },
                  // Disabled baseado no GovBR-DS
                  "&.Mui-disabled": {
                    color: "rgba(0, 0, 0, 0.26)",
                    opacity: 0.6
                  }
                }
              }
            ),
            /* @__PURE__ */ E.jsx(
              Yr,
              {
                className: "br-text",
                sx: {
                  // Reset completo da tipografia
                  margin: 0,
                  padding: 0,
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  // Tipografia baseada no CSS GovBR-DS - valores explícitos
                  color: i ? "rgba(0, 0, 0, 0.38)" : "#333",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  fontFamily: "inherit",
                  // Respeita fonte do tema
                  // Comportamento de clique
                  userSelect: "none",
                  cursor: i ? "not-allowed" : "pointer",
                  // Espaçamento similar ao GovBR-DS
                  paddingLeft: "8px",
                  // Reset de possíveis transformações
                  textTransform: "none",
                  textDecoration: "none",
                  letterSpacing: "normal"
                },
                onClick: () => {
                  !i && f && f();
                },
                children: o
              }
            )
          ]
        }
      )
    ]
  }
);
function gn(e) {
  return String(parseFloat(e)).length === String(e).length;
}
function _c(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Pe(e) {
  return parseFloat(e);
}
function Ac(e) {
  return (r, t) => {
    const n = _c(r);
    if (n === t)
      return r;
    let o = Pe(r);
    n !== "px" && (n === "em" || n === "rem") && (o = Pe(r) * Pe(e));
    let i = o;
    if (t !== "px")
      if (t === "em")
        i = o / Pe(e);
      else if (t === "rem")
        i = o / Pe(e);
      else
        return r;
    return parseFloat(i.toFixed(5)) + t;
  };
}
function Rc({
  size: e,
  grid: r
}) {
  const t = e - e % r, n = t + r;
  return e - t < n - e ? t : n;
}
function $c({
  lineHeight: e,
  pixels: r,
  htmlFontSize: t
}) {
  return r / (e * t);
}
function Pc({
  cssProperty: e,
  min: r,
  max: t,
  unit: n = "rem",
  breakpoints: o = [600, 900, 1200],
  transform: i = null
}) {
  const a = {
    [e]: `${r}${n}`
  }, s = (t - r) / o[o.length - 1];
  return o.forEach((u) => {
    let f = r + s * u;
    i !== null && (f = i(f)), a[`@media (min-width:${u}px)`] = {
      [e]: `${Math.round(f * 1e4) / 1e4}${n}`
    };
  }), a;
}
function Mc(e, r = {}) {
  const {
    breakpoints: t = ["sm", "md", "lg"],
    disableAlign: n = !1,
    factor: o = 2,
    variants: i = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = r, a = {
    ...e
  };
  a.typography = {
    ...a.typography
  };
  const s = a.typography, u = Ac(s.htmlFontSize), f = t.map((p) => a.breakpoints.values[p]);
  return i.forEach((p) => {
    const m = s[p];
    if (!m)
      return;
    const h = parseFloat(u(m.fontSize, "rem"));
    if (h <= 1)
      return;
    const x = h, y = 1 + (x - 1) / o;
    let {
      lineHeight: l
    } = m;
    if (!gn(l) && !n)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : _e(6));
    gn(l) || (l = parseFloat(u(l, "rem")) / parseFloat(h));
    let b = null;
    n || (b = (w) => Rc({
      size: w,
      grid: $c({
        pixels: 4,
        lineHeight: l,
        htmlFontSize: s.htmlFontSize
      })
    })), s[p] = {
      ...m,
      ...Pc({
        cssProperty: "fontSize",
        min: y,
        max: x,
        unit: "rem",
        breakpoints: f,
        transform: b
      })
    };
  }), a;
}
let yn = Jn({
  // 1. Paleta de Cores (Palette)
  palette: {
    primary: {
      main: "#1351B4",
      // govbr: blue-warm-vivid-70
      light: "#5992ed",
      // govbr: blue-warm-vivid-40
      dark: "#0c326f",
      // govbr: blue-warm-vivid-80 (ajustado para ser um escuro mais profundo)
      contrastText: "#fff"
      // Cor do texto para contraste com a cor primária
    },
    secondary: {
      main: "#FFD200",
      // govbr: yellow-vivid-20 (adaptado para o seu secondary)
      light: "#ffe396",
      // govbr: yellow-vivid-10
      dark: "#ddaa01",
      // govbr: yellow-vivid-30 (um pouco mais escuro que o main)
      contrastText: "#333"
      // govbr: gray-80 ou color-secondary-08
    },
    success: {
      main: "#168821",
      // govbr: green-cool-vivid-50
      light: "#70e17b",
      // govbr: green-cool-vivid-20
      dark: "#154c21",
      // govbr: green-cool-vivid-70
      contrastText: "#fff"
    },
    warning: {
      main: "#F29F05",
      // govbr: orange-vivid-30 (ajustado para o seu warning)
      light: "#ffbc78",
      // govbr: orange-vivid-20
      dark: "#c05600",
      // govbr: orange-vivid-50
      contrastText: "#333"
    },
    info: {
      main: "#007FA3",
      // govbr: blue-cool-vivid-50
      light: "#59b9de",
      // govbr: blue-cool-vivid-30
      dark: "#074b69",
      // govbr: blue-cool-vivid-70
      contrastText: "#fff"
    },
    error: {
      main: "#D04F4F",
      // govbr: red-vivid-50 (ajustado para o seu danger)
      light: "#fd8ba0",
      // govbr: red-cool-vivid-30
      dark: "#b21d38",
      // govbr: red-cool-vivid-60
      contrastText: "#fff"
    },
    // Adicionando cores neutras baseadas no gray do GovBR-DS
    grey: {
      50: "#fcfcfc",
      // gray-1
      100: "#f8f8f8",
      // gray-2
      200: "#f6f6f6",
      // gray-3
      300: "#f0f0f0",
      // gray-5
      400: "#e6e6e6",
      // gray-10
      500: "#ccc",
      // gray-20
      600: "#adadad",
      // gray-30
      700: "#888",
      // gray-40
      800: "#757575",
      // gray-50
      900: "#333",
      // gray-80
      A100: "#1b1b1b"
      // gray-90 (usado para o mais escuro)
    },
    text: {
      primary: "#333",
      // govbr: gray-80
      secondary: "#555",
      // govbr: gray-70
      disabled: "rgba(0, 0, 0, 0.38)"
      // Padrão MUI, pode ser ajustado
    },
    background: {
      default: "#fff",
      // govbr: pure-0 ou background-light
      paper: "#f8f8f8"
      // govbr: gray-2 ou background-alternative
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      // Padrão MUI, pode ser ajustado
      hover: "rgba(var(--interactive-rgb),0.16)",
      // Usando a variável CSS do hover
      selected: "rgba(var(--blue-warm-vivid-50-rgb),1)",
      // govbr: selected
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      focus: "rgba(var(--gold-vivid-40-rgb),1)"
      // govbr: focus-color
    }
  },
  // 2. Tipografia (Typography)
  typography: {
    fontFamily: '"Rawline", "Raleway", sans-serif',
    fontSize: 14,
    // govbr: font-size-scale-base
    fontWeightLight: 300,
    // govbr: font-weight-light
    fontWeightRegular: 400,
    // govbr: font-weight-regular
    fontWeightMedium: 500,
    // govbr: font-weight-medium
    fontWeightBold: 700,
    // govbr: font-weight-bold
    h1: {
      fontSize: "2.036rem",
      // govbr: font-size-scale-up-04 (29.036px / 14px)
      fontWeight: 500,
      // govbr: font-weight-medium
      lineHeight: 1.15,
      // govbr: font-line-height-low
      marginBottom: "1.714rem",
      // govbr: spacing-scale-2xh (24px / 14px)
      "@media (min-width:576px)": {
        fontSize: "2.986rem",
        // govbr: font-size-scale-up-06 (41.804px / 14px)
        fontWeight: 300,
        // govbr: font-weight-light
        marginBottom: "2.857rem"
        // govbr: spacing-scale-4x (40px / 14px)
      }
    },
    h2: {
      fontSize: "1.728rem",
      // govbr: font-size-scale-up-03 (24.192px / 14px)
      fontWeight: 600,
      // govbr: font-weight-semi-bold
      lineHeight: 1.15,
      // govbr: font-line-height-low
      marginBottom: "1.714rem",
      // govbr: spacing-scale-2xh
      marginTop: "2rem",
      // govbr: spacing-scale-3xh (28px / 14px)
      paddingBottom: "1.714rem",
      // govbr: spacing-scale-2xh
      "@media (min-width:576px)": {
        fontSize: "2.488rem",
        // govbr: font-size-scale-up-05 (34.832px / 14px)
        fontWeight: 400
        // govbr: font-weight-regular
      }
    },
    h3: {
      fontSize: "1.44rem",
      // govbr: font-size-scale-up-02 (20.16px / 14px)
      fontWeight: 700,
      // govbr: font-weight-bold
      lineHeight: 1.15,
      // govbr: font-line-height-low
      marginBottom: "1.714rem",
      // govbr: spacing-scale-2xh
      marginTop: "2rem",
      // govbr: spacing-scale-3xh
      "@media (min-width:576px)": {
        fontSize: "2.036rem",
        // govbr: font-size-scale-up-04
        fontWeight: 500
        // govbr: font-weight-medium
      }
    },
    h4: {
      fontSize: "1.2rem",
      // govbr: font-size-scale-up-01 (16.8px / 14px)
      fontWeight: 700,
      // govbr: font-weight-bold
      lineHeight: 1.15,
      // govbr: font-line-height-low
      marginBottom: "1.714rem",
      // govbr: spacing-scale-2xh
      marginTop: "1.142rem",
      // govbr: spacing-scale-2x (16px / 14px)
      "@media (min-width:576px)": {
        fontSize: "1.728rem",
        // govbr: font-size-scale-up-03
        fontWeight: 600,
        // govbr: font-weight-semi-bold
        marginTop: "2rem"
        // govbr: spacing-scale-3xh
      }
    },
    h5: {
      fontSize: "1rem",
      // govbr: font-size-scale-base
      fontWeight: 800,
      // govbr: font-weight-extra-bold
      lineHeight: 1.15,
      // govbr: font-line-height-low
      marginBottom: "1.142rem",
      // govbr: spacing-scale-2x
      marginTop: "1.142rem",
      // govbr: spacing-scale-2x
      paddingBottom: "0.571rem",
      // govbr: spacing-scale-base (8px / 14px)
      textTransform: "uppercase",
      "@media (min-width:576px)": {
        fontSize: "1.44rem",
        // govbr: font-size-scale-up-02
        fontWeight: 700,
        // govbr: font-weight-bold
        marginTop: "2rem"
        // govbr: spacing-scale-3xh
      }
    },
    h6: {
      fontSize: "0.833rem",
      // govbr: font-size-scale-down-01 (11.662px / 14px)
      fontWeight: 800,
      // govbr: font-weight-extra-bold
      lineHeight: 1.15,
      // govbr: font-line-height-low
      marginBottom: "1.142rem",
      // govbr: spacing-scale-2x
      marginTop: "1.142rem",
      // govbr: spacing-scale-2x
      paddingBottom: "0.571rem",
      // govbr: spacing-scale-base
      textTransform: "uppercase",
      "@media (min-width:576px)": {
        fontSize: "1.2rem",
        // govbr: font-size-scale-up-01
        fontWeight: 800,
        // govbr: font-weight-extra-bold
        marginTop: "2rem"
        // govbr: spacing-scale-3xh
      }
    },
    body1: {
      fontSize: "1rem",
      // govbr: font-size-scale-base
      fontWeight: 400,
      // govbr: font-weight-regular
      lineHeight: 1.45,
      // govbr: font-line-height-medium
      marginBottom: "1.142rem"
      // govbr: spacing-scale-2x
    }
    // Adicione outras variantes de texto conforme necessário
  },
  // 3. Espaçamento (Spacing) - O MUI usa múltiplos de 8px por padrão, então vamos mapear.
  spacing: (e) => ({
    0: 0,
    0.5: 4,
    1: 8,
    1.5: 12,
    2: 16,
    2.5: 20,
    3: 24,
    3.5: 28,
    4: 32,
    4.5: 36,
    5: 40,
    5.5: 44,
    6: 48,
    6.5: 52,
    7: 56,
    7.5: 60,
    8: 64,
    8.5: 68,
    9: 72,
    9.5: 76,
    10: 80,
    10.5: 84
  })[e] ?? e * 8,
  // 4. Quebras de Layout (Breakpoints)
  breakpoints: {
    values: {
      xs: 0,
      // govbr: grid-breakpoint-xs
      sm: 576,
      // govbr: grid-breakpoint-sm
      md: 992,
      // govbr: grid-breakpoint-md
      lg: 1280,
      // govbr: grid-breakpoint-lg
      xl: 1600
      // govbr: grid-breakpoint-xl
    }
  },
  // 5. Sombras (Shadows)
  shadows: [
    "none",
    "0px 1px 6px rgba(0, 0, 0, 0.16)",
    "0px 3px 6px rgba(0, 0, 0, 0.16)",
    "0px 6px 6px rgba(0, 0, 0, 0.16)",
    "0px 9px 6px rgba(0, 0, 0, 0.16)",
    ...Array(20).fill("none")
  ],
  // Cast para any para evitar erro de tipo com menos de 25 sombras
  // 6. Formas (Shape - para border-radius)
  shape: {
    borderRadius: 4
    // govbr: surface-rounder-sm. Use uma unidade base e multiplique
    // Defina outras formas aqui se necessário (ex: para elementos específicos)
  },
  // 7. Transições (Transitions)
  transitions: {
    easing: {
      easeIn: "cubic-bezier(0.42,0,1,1)",
      // govbr: animation-ease-in
      easeOut: "cubic-bezier(0,0,0.58,1)",
      // govbr: animation-ease-out
      easeInOut: "cubic-bezier(0.42,0,0.58,1)"
      // govbr: animation-ease-in-out
    },
    duration: {
      shortest: 100,
      // Aproximado
      shorter: 150,
      // Aproximado
      short: 200,
      // Aproximado
      standard: 300,
      // govbr: duration-fast (300ms)
      complex: 500,
      // govbr: duration-moderate (500ms)
      enteringScreen: 800,
      // govbr: duration-slow (800ms)
      leavingScreen: 1e3
      // govbr: duration-very-slow (1000ms)
    }
  },
  // 8. Sobrescritas de Componentes (Component Overrides)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100em",
          // govbr: button-radius
          height: "40px",
          // govbr: button-medium
          fontSize: "1.2rem",
          // govbr: font-size-scale-up-01
          fontWeight: 600,
          // govbr: font-weight-semi-bold
          padding: "0 24px",
          // govbr: spacing-scale-3x
          textTransform: "none",
          // Remove uppercase padrão do MUI
          "&:focus": {
            outline: "none"
          },
          "&.Mui-focusVisible": {
            outlineColor: "#F29F05",
            // govbr: focus-color-light (gold-vivid-40)
            outlineOffset: "4px",
            // govbr: focus-offset
            outlineStyle: "dashed",
            // govbr: focus-style
            outlineWidth: "4px"
            // govbr: focus-width
          },
          "&:hover": {
            backgroundImage: "linear-gradient(rgba(var(--interactive-rgb),0.16),rgba(var(--interactive-rgb),0.16))"
          },
          "&:active": {
            backgroundImage: "linear-gradient(rgba(var(--interactive-rgb),0.45),rgba(var(--interactive-rgb),0.45))"
          }
        },
        containedPrimary: {
          backgroundColor: "#1351B4",
          // govbr: interactive-light
          color: "#fff",
          // govbr: color-dark (para contraste)
          "&:hover": {
            backgroundColor: "#1351B4"
            // Manter a cor base e aplicar o hover effect
          }
        },
        outlinedPrimary: {
          borderColor: "#1351B4",
          // govbr: interactive
          color: "#1351B4",
          // govbr: interactive
          "&:hover": {
            backgroundColor: "transparent"
            // Manter a cor base e aplicar o hover effect
          }
        },
        containedSecondary: {
          backgroundColor: "var(--background-light)",
          border: "1px solid var(--interactive)",
          color: "var(--interactive)",
          "&:hover": {
            backgroundImage: "linear-gradient(rgba(var(--interactive-rgb),0.16),rgba(var(--interactive-rgb),0.16))"
          },
          "&:active": {
            backgroundImage: "linear-gradient(rgba(var(--interactive-rgb),0.45),rgba(var(--interactive-rgb),0.45))"
          }
        },
        textPrimary: {
          color: "#1351B4"
          // govbr: interactive
        },
        // Adicione outros estilos para variantes e tamanhos (small, large) conforme GovBR-DS
        sizeSmall: {
          height: "32px"
          // govbr: button-small
        },
        sizeLarge: {
          height: "48px"
          // govbr: button-large
        }
      }
    },
    MuiInputBase: {
      // Para todos os inputs (TextField, Select, etc.)
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          // govbr: background-light
          borderColor: "#ccc",
          // govbr: border-color-alternative
          borderRadius: "4px",
          // govbr: surface-rounder-sm
          borderStyle: "solid",
          // govbr: border-style
          borderWidth: "1px",
          // govbr: border-width
          color: "#757575",
          // govbr: color-light (para o texto do input)
          fontSize: "1.2rem",
          // govbr: font-size-scale-up-01
          fontWeight: 500,
          // govbr: font-weight-medium
          height: "40px",
          // govbr: input-medium
          padding: "0 16px",
          // govbr: spacing-scale-2x
          "&:hover": {
            backgroundImage: "linear-gradient(rgba(var(--gray-80-rgb),0.16),rgba(var(--gray-80-rgb),0.16))"
            // Usar gray-80 para o hover em inputs neutros
          },
          "&.Mui-focused": {
            borderColor: "#F29F05",
            // govbr: focus-color-light (gold-vivid-40)
            boxShadow: "0 0 0 2px #F29F05",
            // govbr: focus-width, focus-offset
            outline: "none"
          },
          "&.Mui-error": {
            borderColor: "#D04F4F",
            // govbr: danger
            borderWidth: "2px"
          },
          "&.Mui-disabled": {
            cursor: "not-allowed",
            opacity: 0.45
            // govbr: disabled
          }
        }
      }
    },
    MuiInputLabel: {
      // Labels para inputs
      styleOverrides: {
        root: {
          color: "#333",
          // govbr: color (text-color)
          fontSize: "1rem",
          // govbr: font-size-scale-base
          fontWeight: 600,
          // govbr: font-weight-semi-bold
          marginBottom: "4px"
          // govbr: spacing-scale-half
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#ccc",
          // govbr: gray-20 (cor da borda antes de checked)
          "&.Mui-checked": {
            color: "#1351B4"
            // govbr: selected (para o ícone de checked)
          },
          "&.Mui-disabled": {
            color: "rgba(57,57,57,.1)"
            // govbr: flatpickr-day.flatpickr-disabled
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#ccc",
          // govbr: gray-20
          "&.Mui-checked": {
            color: "#1351B4"
            // govbr: selected
          },
          "&.Mui-disabled": {
            color: "rgba(57,57,57,.1)"
            // govbr: flatpickr-day.flatpickr-disabled
          }
        }
      }
    },
    MuiLinearProgress: {
      // Exemplo para barras de progresso
      styleOverrides: {
        root: {
          backgroundColor: "#e6e6e6"
          // govbr: gray-10 (track color)
        },
        bar: {
          backgroundColor: "#1351B4"
          // govbr: primary
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#155bcb",
          // govbr: color-info
          borderRadius: "4px",
          // govbr: surface-rounder-sm
          boxShadow: "0 3px 6px rgba(0,0,0,.16)",
          // govbr: br-tooltip box-shadow
          color: "#fff",
          // govbr: color-secondary-01
          fontSize: "0.833rem",
          // govbr: font-size-scale-down-01
          fontWeight: 500,
          // govbr: font-weight-medium
          maxWidth: "240px",
          padding: "16px"
          // govbr: spacing-scale-2x
        },
        arrow: {
          color: "#155bcb"
          // govbr: color-info
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          // Aplicar foco padrão do GovBR-DS
          "&.Mui-focusVisible": {
            outlineColor: "#F29F05",
            // govbr: focus-color-light (gold-vivid-40)
            outlineOffset: "4px",
            // govbr: focus-offset
            outlineStyle: "dashed",
            // govbr: focus-style
            outlineWidth: "4px"
            // govbr: focus-width
          },
          // Hover effect padrão do GovBR-DS
          "&:hover:not(:disabled)": {
            backgroundImage: "linear-gradient(rgba(19, 81, 180, 0.16), rgba(19, 81, 180, 0.16))"
          },
          // Transições suaves
          transition: "all 0.3s ease-in-out"
        },
        sizeSmall: {
          width: "32px",
          height: "32px",
          padding: "4px",
          "& .MuiSvgIcon-root": {
            fontSize: "1rem"
            // 16px
          }
        },
        sizeMedium: {
          width: "40px",
          height: "40px",
          padding: "8px",
          "& .MuiSvgIcon-root": {
            fontSize: "1.25rem"
            // 20px
          }
        },
        sizeLarge: {
          width: "48px",
          height: "48px",
          padding: "12px",
          "& .MuiSvgIcon-root": {
            fontSize: "1.5rem"
            // 24px
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#0076d6",
          // govbr: blue-vivid-50 (interactive-light no body)
          textDecoration: "none",
          "&:hover": {
            backgroundImage: "linear-gradient(rgba(0,118,214,0.16),rgba(0,118,214,0.16))"
            // Usar RGB do interactive-light com hover opacity
          },
          "&:focus-visible": {
            outlineColor: "#F29F05",
            // govbr: focus-color-light
            outlineOffset: "4px",
            // govbr: focus-offset
            outlineStyle: "dashed",
            // govbr: focus-style
            outlineWidth: "4px"
            // govbr: focus-width
          }
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "collapse",
          width: "100%",
          "& th": {
            backgroundColor: "#f0f0f0",
            // govbr: background-alternative (gray-5)
            fontWeight: 600,
            // govbr: table-th-font-weight
            padding: "16px 24px",
            // govbr: table-row-size (spacing-scale-2x) e table-padding (spacing-scale-3x)
            textAlign: "left"
          },
          "& td": {
            fontWeight: 500,
            // govbr: table-font-weight
            padding: "16px 24px",
            // govbr: table-row-size e table-padding
            borderBottom: "1px solid #e6e6e6"
            // govbr: table-border-width, table-border-style, table-border-color
          },
          "& tr:hover td": {
            backgroundImage: "linear-gradient(rgba(51,51,51,0.16),rgba(51,51,51,0.16))"
            // Usar gray-80-rgb (color-rgb) com hover opacity
          },
          "& tr.Mui-selected": {
            backgroundColor: "#4a77b4",
            // govbr: selected (blue-warm-50)
            color: "#fff",
            // govbr: color-dark
            "& td": {
              color: "#fff"
            }
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // Estilo padrão para parágrafos
          // Mapeando p do CSS, que é body1 por padrão no MUI
          marginBottom: "var(--spacing-scale-2x)",
          marginTop: 0,
          "& a": {
            textDecoration: "underline"
          }
        },
        // Mapeamento para as variantes de texto do GovBR-DS (se precisar além dos H1-H6)
        body1: {
          // Exemplo para o body1 do MUI (que é o padrão do <p>)
          fontSize: "var(--font-size-scale-base)",
          fontWeight: "var(--font-weight-regular)",
          lineHeight: "var(--font-line-height-medium)",
          // Adicione breakpoints se o body1 tiver tamanhos diferentes em telas maiores
          "@media (min-width:576px)": {
            // Se o body1 mudar em sm, como o <p> no CSS do GovBR-DS
            // fontSize: 'var(--font-size-scale-up-01)',
          }
        },
        // Você pode continuar mapeando outras variantes de texto aqui, como body2, caption, etc.
        // Exemplo para um texto pequeno do GovBR-DS (text-down-01)
        caption: {
          fontSize: "var(--font-size-scale-down-01)",
          fontWeight: "var(--font-weight-regular)",
          lineHeight: "var(--font-line-height-medium)"
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          // Baseado em .br-switch
          minHeight: "var(--switch-height-medium)",
          // Ex: 30px
          // Ajuste para posicionamento da label se necessário
          // Estilos para MuiSwitch-sizeSmall
          "&.MuiSwitch-sizeSmall": {
            "& .MuiSwitch-track": {
              height: "var(--switch-height-small)",
              // 24px
              width: "var(--switch-width-small)"
              // 40px
            },
            "& .MuiSwitch-thumb": {
              height: "var(--switch-toggle-small)",
              // 16px
              width: "var(--switch-toggle-small)",
              // 16px
              "&:after": {
                fontSize: "var(--switch-icon-small)"
                // 8px
              }
            }
          },
          // Estilos para MuiSwitch-sizeLarge
          "&.MuiSwitch-sizeLarge": {
            "& .MuiSwitch-track": {
              height: "var(--switch-height-large)",
              // 36px
              width: "var(--switch-width-large)"
              // 64px
            },
            "& .MuiSwitch-thumb": {
              height: "var(--switch-toggle-large)",
              // 28px
              width: "var(--switch-toggle-large)",
              // 28px
              "&:after": {
                fontSize: "var(--switch-icon-large)"
                // 16px
              }
            }
          },
          // Estilos de foco (.Mui-focusVisible)
          "&.Mui-focusVisible": {
            "& .MuiSwitch-track": {
              borderColor: "var(--focus) !important",
              // Bordas
              boxShadow: "0 0 0 var(--surface-width-md) var(--focus)",
              // Sombra de foco
              outline: "none"
            }
          },
          // Estiliza o estado checked
          "&.Mui-checked": {
            // Mova checked para dentro de root
            "& .MuiSwitch-thumb": {
              backgroundColor: "var(--on)",
              // Cor do "toggle" quando on
              "&:after": {
                content: '"\\f00c"'
                // Icone de "check" para on
              }
            }
            // Note: O track do GovBR-DS não muda de cor substancialmente no checked, apenas o thumb
          },
          // Estiliza o estado disabled
          "&.Mui-disabled": {
            // Mova disabled para dentro de root
            cursor: "not-allowed",
            opacity: "var(--disabled)",
            // 0.45
            "& *": {
              pointerEvents: "none"
            }
          },
          // Mova os estilos de hover para cá, dentro de root
          "&:hover": {
            "& .MuiSwitch-track": {
              backgroundImage: "linear-gradient(rgba(var(--interactive-rgb),var(--hover)),rgba(var(--interactive-rgb),var(--hover)))"
            },
            // E para o estado checked no hover
            // Aqui você deve usar &.Mui-checked para combinar com o hover
            "&.Mui-checked .MuiSwitch-track": {
              backgroundImage: "linear-gradient(rgba(var(--on-rgb),var(--hover)),rgba(var(--on-rgb),var(--hover)))"
            }
          }
        },
        // Eles devem estar aninhados dentro de 'root' ou em seus próprios slots (thumb, track, se aplicável)
        thumb: {
          // Este é um slot válido, pode permanecer
          backgroundColor: "var(--off)",
          // Cor do "toggle" quando off
          height: "var(--switch-toggle-medium)",
          // Ex: 22px
          width: "var(--switch-toggle-medium)",
          // Ex: 22px
          transition: "all .3s ease-in-out",
          "&:after": {
            // Ícone de "X" ou "check" dentro do thumb
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            fontFamily: "Font Awesome\\ 5 Free,sans-serif",
            fontSize: "var(--switch-icon-medium)",
            // Ex: 12px
            fontWeight: "var(--font-weight-black)",
            // 900
            color: "var(--color-dark)",
            // Cor do ícone
            content: '"\\f00d"'
            // Icone de "X" para off
          }
        },
        track: {
          // Este é um slot válido, pode permanecer
          backgroundColor: "var(--background-light)",
          // Cor do fundo da trilha
          border: "1px solid var(--border-color)",
          // Borda da trilha
          borderRadius: "100em",
          height: "var(--switch-height-medium)",
          // Ex: 30px
          width: "var(--switch-width-medium)",
          // Ex: 52px
          opacity: 1
          // Remover opacidade padrão do MUI
        }
        // ... (resto do seu código)
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--background)",
          // govbr: background
          boxShadow: "var(--surface-shadow-sm)",
          color: "var(--color)",
          marginBottom: "var(--spacing-scale-2x)",
          // Adicionar estilos para variações .h-fixed
          // É mais complexo fazer diretamente no MuiCard, pode precisar de uma prop customizada ou um componente wrapper.
          // Exemplo (conceitual):
          // '&.h-fixed': {
          //   '& .MuiCardContent-root': {
          //     maxHeight: 'var(--card-height-fixed)',
          //     overflowY: 'auto',
          //   },
          // },
          "&:hover": {
            // O GovBR-DS usa background-image linear-gradient com rgba do color-rgb
            backgroundImage: "linear-gradient(rgba(var(--color-rgb),var(--hover)),rgba(var(--color-rgb),var(--hover)))",
            backgroundColor: "transparent"
            // Remover background-color padrão do MUI no hover
          }
        }
        // Estilos para as áreas do Card
        // As classes do GovBR-DS são .card-header, .card-content, .card-footer
        // No MUI, são MuiCardHeader, MuiCardContent, MuiCardActions ou MuiCardMedia
        // Você pode aplicar padding aqui, ou no componente específico (MuiCardContent, MuiCardHeader)
        // para maior controle. Exemplo:
        // MuiCardContent: {
        //   root: {
        //     padding: 'var(--card-padding)',
        //     '&:last-child': {
        //       paddingBottom: 'var(--card-padding)', // Garante que o último elemento tenha padding inferior
        //     },
        //   },
        // },
        // MuiCardHeader: {
        //   root: {
        //     padding: 'var(--card-padding) var(--card-padding) 0',
        //   },
        // },
        // MuiCardActions: { // Ou um div dentro do card para footer
        //   root: {
        //     padding: '0 var(--card-padding) var(--card-padding)',
        //   },
        // },
        // Estilo para o hover
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "var(--border-color)",
          borderStyle: "solid",
          borderWidth: 0,
          borderTopWidth: "var(--surface-width-sm)",
          // Default
          display: "block",
          margin: "var(--spacing-scale-2x) 0",
          // Baseado em hr do GovBR-DS
          // Variações de tamanho e estilo
          "&.MuiDivider-light": {
            // Para sm
            borderTopWidth: "var(--surface-width-sm)"
            // 1px
          },
          "&.MuiDivider-middle": {
            // Para md
            borderTopWidth: "var(--surface-width-md)"
            // 2px
          },
          "&.MuiDivider-heavy": {
            // Para lg
            borderTopWidth: "var(--surface-width-lg)"
            // 4px
          },
          "&.MuiDivider-flexItem": {
            // Para vertical (MuiDivider-vertical)
            borderRightWidth: "var(--surface-width-sm)",
            borderTopWidth: 0,
            alignSelf: "stretch"
            // Para ocupar a altura total
          },
          "&.MuiDivider-dashed": {
            borderStyle: "dashed"
          }
        }
        // O MuiDivider-withChildren do MUI é para conteúdo no meio
        // O GovBR-DS usa .br-divider.content
        // &::before e &::after são usados para as linhas.
        // Pode ser necessário usar uma prop customizada no MUI para ativar esse estilo ou
        // um componente wrapper para MuiDivider.
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--background)",
          // Adicionar box-shadow quando a lista for usada como dropdown/menu,
          // o que geralmente é feito via um MuiPopover ou MuiMenu.
          // Aqui é mais genérico, então cuidado para não aplicar em todas as listas.
          // box-shadow: 'var(--select-shadow)', // ou var(--surface-shadow-md)
          margin: 0,
          padding: 0,
          listStyle: "none",
          // Estilo para .br-list.horizontal
          "&.horizontal": {
            display: "flex",
            flexWrap: "wrap"
          }
          // Estilos para .br-menu (background-submenu)
          // Em um MuiMenu/MuiPopover, pode-se usar paperProps para customizar o Paper que envolve a lista.
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--background)",
          border: 0,
          color: "var(--color)",
          display: "block",
          // ou flex, dependendo do conteúdo
          fontWeight: "var(--font-weight-regular)",
          // Padrão
          padding: "var(--spacing-scale-base) var(--spacing-scale-2x)",
          // Ex: 8px 16px (item-padding)
          textAlign: "left",
          width: "100%",
          // Estilos para .br-item.selected, .br-item.active
          "&.Mui-selected": {
            backgroundColor: "var(--selected)",
            color: "var(--color-dark)",
            "& .MuiListItemText-primary": {
              // Se usar ListItemText
              color: "var(--color-dark)"
            },
            "& .MuiListItemText-secondary": {
              color: "var(--color-dark)"
            }
          },
          "&.Mui-focusVisible": {
            outlineColor: "var(--focus)",
            outlineOffset: "calc(var(--focus-width) * -1)",
            // -4px para o br-item
            outlineStyle: "var(--focus-style)",
            outlineWidth: "var(--focus-width)"
          },
          "&:hover": {
            backgroundImage: "linear-gradient(rgba(var(--color-rgb),var(--hover)),rgba(var(--color-rgb),var(--hover)))",
            backgroundColor: "transparent"
          },
          // Estilos para .br-item[data-toggle]
          cursor: "pointer"
          // Adicione aqui estilos para MuiListItemText, MuiListItemIcon se usados dentro
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          // Baseado em .br-breadcrumb
          display: "inline-grid",
          fontSize: "var(--font-size-scale-down-01)",
          fontWeight: "var(--font-weight-medium)",
          minHeight: "var(--spacing-scale-7x)",
          // 56px
          position: "relative"
        },
        li: {
          // Estilos para cada item (crumb)
          alignItems: "center",
          display: "flex",
          height: "var(--spacing-scale-5x)",
          // 40px
          // Estilos para o ícone separador do GovBR-DS
          // O MUI usa MuiBreadcrumbs-separator.
          "& .MuiBreadcrumbs-separator": {
            color: "var(--border-color)",
            fontSize: "var(--icon-size-sm)",
            marginRight: "-6px"
            // Espaçamento negativo do GovBR-DS
          },
          "& a": {
            maxWidth: "180px",
            overflow: "hidden",
            textDecoration: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            margin: "0 var(--spacing-scale-base)"
            // 8px para cada lado
          },
          "&:last-child span": {
            // Para o último item, que é o ativo
            fontWeight: "var(--font-weight-medium)",
            margin: "0 var(--spacing-scale-2x) 0 var(--spacing-scale-base)",
            // 16px 0 0 8px
            whiteSpace: "nowrap"
          }
        },
        separator: {
          // Já configurado acima dentro do li
        }
        // Estilos para menus mobile do breadcrumb (br-card dentro)
        // Isso seria mais complexo e provavelmente exigiria um slot customizado ou um componente wrapper.
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Baseado em .br-header
          backgroundColor: "var(--background)",
          boxShadow: "var(--surface-shadow-sm)",
          padding: "var(--header-padding-medium) 0",
          // 16px 0
          position: "relative",
          display: "flex",
          // MUI já é flex por padrão
          flexDirection: "column",
          // Para alinhar header-top e header-bottom
          // Se tiver data-sticky
          '&[data-sticky="true"]': {
            position: "sticky",
            top: 0,
            zIndex: "var(--z-index-layer-2)",
            transition: "all .15s ease",
            // Transição do GovBR-DS
            // Estilos para logo, menu-trigger, title em data-sticky
            "& .MuiTypography-h6": {
              // Exemplo para o título
              transition: "all .15s ease"
            },
            "& .MuiButtonBase-root": {
              // Para botões como menu-trigger
              transition: "all .15s ease"
            }
            // ... e outros elementos que fazem transição ao ficar sticky
          }
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          // Mapeando a estrutura interna do .br-header
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // Para header-bottom padrão
          // Para header-top e header-bottom separadamente, talvez precise de divs internas ou prop 'variant'
          // Exemplo para um `header-top` (justify-content-flex-end)
          "&.MuiToolbar-gutters:first-of-type": {
            // Assumindo o primeiro toolbar é o top
            justifyContent: "flex-end"
          },
          // Exemplo para um `header-bottom` (justify-content-space-between)
          "&.MuiToolbar-gutters:last-of-type": {
            // Assumindo o último toolbar é o bottom
            justifyContent: "space-between",
            marginTop: "var(--header-padding-small)"
            // 8px
          }
        }
      }
    }
  }
});
yn = Mc(yn);
export {
  Fc as GovBRAvatar,
  Bc as GovBRBreadcrumb,
  dt as GovBRButton,
  kc as GovBRCheckbox,
  Wc as GovBRFormCheckbox,
  Dc as GovBRFormInput,
  lo as GovBRInput,
  Lc as GovBRRadio,
  zc as GovBRSignIn,
  yn as govbrTheme,
  eo as mapMuiColorToGovbrClass
};
