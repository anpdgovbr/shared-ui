import * as E from "react";
import ne, { isValidElement as Zr, cloneElement as eo, Children as El, useState as Sr, useCallback as ti, useEffect as Kt, useRef as wl, createContext as Cl, useMemo as Ol } from "react";
import Rl from "@emotion/styled";
import { Global as Pl, ThemeContext as Ts, keyframes as nr, css as Es } from "@emotion/react";
import * as kl from "react-dom";
import Vr from "react-dom";
import Dt from "classnames";
function Ml(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wr = { exports: {} }, lr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri;
function $l() {
  if (ri) return lr;
  ri = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var l in i)
        l !== "key" && (s[l] = i[l]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: o,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return lr.Fragment = t, lr.jsx = r, lr.jsxs = r, lr;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi;
function Nl() {
  return oi || (oi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === $ ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case p:
          return "Fragment";
        case C:
          return "Profiler";
        case S:
          return "StrictMode";
        case v:
          return "Suspense";
        case O:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case y:
            return "Portal";
          case w:
            return (x.displayName || "Context") + ".Provider";
          case R:
            return (x._context.displayName || "Context") + ".Consumer";
          case b:
            var A = x.render;
            return x = x.displayName, x || (x = A.displayName || A.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case D:
            return A = x.displayName || null, A !== null ? A : e(x.type) || "Memo";
          case M:
            A = x._payload, x = x._init;
            try {
              return e(x(A));
            } catch {
            }
        }
      return null;
    }
    function t(x) {
      return "" + x;
    }
    function r(x) {
      try {
        t(x);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var z = A.error, W = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return z.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), t(x);
      }
    }
    function o(x) {
      if (x === p) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === M)
        return "<...>";
      try {
        var A = e(x);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var x = B.A;
      return x === null ? null : x.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(x) {
      if (f.call(x, "key")) {
        var A = Object.getOwnPropertyDescriptor(x, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function l(x, A) {
      function z() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: z,
        configurable: !0
      });
    }
    function c() {
      var x = e(this.type);
      return I[x] || (I[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function u(x, A, z, W, U, L, Y, K) {
      return z = L.ref, x = {
        $$typeof: h,
        type: x,
        key: A,
        props: L,
        _owner: U
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function d(x, A, z, W, U, L, Y, K) {
      var G = A.children;
      if (G !== void 0)
        if (W)
          if (N(G)) {
            for (W = 0; W < G.length; W++)
              m(G[W]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(G);
      if (f.call(A, "key")) {
        G = e(x);
        var Q = Object.keys(A).filter(function(J) {
          return J !== "key";
        });
        W = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", H[G + W] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          G,
          Q,
          G
        ), H[G + W] = !0);
      }
      if (G = null, z !== void 0 && (r(z), G = "" + z), a(A) && (r(A.key), G = "" + A.key), "key" in A) {
        z = {};
        for (var q in A)
          q !== "key" && (z[q] = A[q]);
      } else z = A;
      return G && l(
        z,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), u(
        x,
        G,
        L,
        U,
        i(),
        z,
        Y,
        K
      );
    }
    function m(x) {
      typeof x == "object" && x !== null && x.$$typeof === h && x._store && (x._store.validated = 1);
    }
    var g = ne, h = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), w = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), B = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, f = Object.prototype.hasOwnProperty, N = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var j, I = {}, V = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), X = k(o(s)), H = {};
    cr.Fragment = p, cr.jsx = function(x, A, z, W, U) {
      var L = 1e4 > B.recentlyCreatedOwnerStacks++;
      return d(
        x,
        A,
        z,
        !1,
        W,
        U,
        L ? Error("react-stack-top-frame") : V,
        L ? k(o(x)) : X
      );
    }, cr.jsxs = function(x, A, z, W, U) {
      var L = 1e4 > B.recentlyCreatedOwnerStacks++;
      return d(
        x,
        A,
        z,
        !0,
        W,
        U,
        L ? Error("react-stack-top-frame") : V,
        L ? k(o(x)) : X
      );
    };
  }()), cr;
}
var ni;
function jl() {
  return ni || (ni = 1, process.env.NODE_ENV === "production" ? Wr.exports = $l() : Wr.exports = Nl()), Wr.exports;
}
var T = jl();
const ii = (e) => e, Il = () => {
  let e = ii;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ii;
    }
  };
}, ws = Il();
function at(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => r.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function ee(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : at(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function on(...e) {
  return e.reduce((t, r) => r == null ? t : function(...i) {
    t.apply(this, i), r.apply(this, i);
  }, () => {
  });
}
var Ur = { exports: {} }, Hr = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function Al() {
  if (si) return se;
  si = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function w(v) {
    if (typeof v == "object" && v !== null) {
      var O = v.$$typeof;
      switch (O) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case o:
            case s:
            case i:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case d:
                case y:
                case h:
                case a:
                  return v;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function b(v) {
    return w(v) === u;
  }
  return se.AsyncMode = c, se.ConcurrentMode = u, se.ContextConsumer = l, se.ContextProvider = a, se.Element = t, se.ForwardRef = d, se.Fragment = o, se.Lazy = y, se.Memo = h, se.Portal = r, se.Profiler = s, se.StrictMode = i, se.Suspense = m, se.isAsyncMode = function(v) {
    return b(v) || w(v) === c;
  }, se.isConcurrentMode = b, se.isContextConsumer = function(v) {
    return w(v) === l;
  }, se.isContextProvider = function(v) {
    return w(v) === a;
  }, se.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, se.isForwardRef = function(v) {
    return w(v) === d;
  }, se.isFragment = function(v) {
    return w(v) === o;
  }, se.isLazy = function(v) {
    return w(v) === y;
  }, se.isMemo = function(v) {
    return w(v) === h;
  }, se.isPortal = function(v) {
    return w(v) === r;
  }, se.isProfiler = function(v) {
    return w(v) === s;
  }, se.isStrictMode = function(v) {
    return w(v) === i;
  }, se.isSuspense = function(v) {
    return w(v) === m;
  }, se.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === o || v === u || v === s || v === i || v === m || v === g || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === h || v.$$typeof === a || v.$$typeof === l || v.$$typeof === d || v.$$typeof === S || v.$$typeof === C || v.$$typeof === R || v.$$typeof === p);
  }, se.typeOf = w, se;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ai;
function _l() {
  return ai || (ai = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function w(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === o || F === u || F === s || F === i || F === m || F === g || typeof F == "object" && F !== null && (F.$$typeof === y || F.$$typeof === h || F.$$typeof === a || F.$$typeof === l || F.$$typeof === d || F.$$typeof === S || F.$$typeof === C || F.$$typeof === R || F.$$typeof === p);
    }
    function b(F) {
      if (typeof F == "object" && F !== null) {
        var ie = F.$$typeof;
        switch (ie) {
          case t:
            var fe = F.type;
            switch (fe) {
              case c:
              case u:
              case o:
              case s:
              case i:
              case m:
                return fe;
              default:
                var Oe = fe && fe.$$typeof;
                switch (Oe) {
                  case l:
                  case d:
                  case y:
                  case h:
                  case a:
                    return Oe;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var v = c, O = u, D = l, M = a, P = t, $ = d, B = o, f = y, N = h, k = r, j = s, I = i, V = m, X = !1;
    function H(F) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(F) || b(F) === c;
    }
    function x(F) {
      return b(F) === u;
    }
    function A(F) {
      return b(F) === l;
    }
    function z(F) {
      return b(F) === a;
    }
    function W(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function U(F) {
      return b(F) === d;
    }
    function L(F) {
      return b(F) === o;
    }
    function Y(F) {
      return b(F) === y;
    }
    function K(F) {
      return b(F) === h;
    }
    function G(F) {
      return b(F) === r;
    }
    function Q(F) {
      return b(F) === s;
    }
    function q(F) {
      return b(F) === i;
    }
    function J(F) {
      return b(F) === m;
    }
    ae.AsyncMode = v, ae.ConcurrentMode = O, ae.ContextConsumer = D, ae.ContextProvider = M, ae.Element = P, ae.ForwardRef = $, ae.Fragment = B, ae.Lazy = f, ae.Memo = N, ae.Portal = k, ae.Profiler = j, ae.StrictMode = I, ae.Suspense = V, ae.isAsyncMode = H, ae.isConcurrentMode = x, ae.isContextConsumer = A, ae.isContextProvider = z, ae.isElement = W, ae.isForwardRef = U, ae.isFragment = L, ae.isLazy = Y, ae.isMemo = K, ae.isPortal = G, ae.isProfiler = Q, ae.isStrictMode = q, ae.isSuspense = J, ae.isValidElementType = w, ae.typeOf = b;
  }()), ae;
}
var li;
function Cs() {
  return li || (li = 1, process.env.NODE_ENV === "production" ? Hr.exports = Al() : Hr.exports = _l()), Hr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zo, ci;
function Dl() {
  if (ci) return zo;
  ci = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function o(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zo = i() ? Object.assign : function(s, a) {
    for (var l, c = o(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var m in l)
        t.call(l, m) && (c[m] = l[m]);
      if (e) {
        u = e(l);
        for (var g = 0; g < u.length; g++)
          r.call(l, u[g]) && (c[u[g]] = l[u[g]]);
      }
    }
    return c;
  }, zo;
}
var Lo, ui;
function wn() {
  if (ui) return Lo;
  ui = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Lo = e, Lo;
}
var Vo, di;
function Os() {
  return di || (di = 1, Vo = Function.call.bind(Object.prototype.hasOwnProperty)), Vo;
}
var Wo, pi;
function Bl() {
  if (pi) return Wo;
  pi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ wn(), r = {}, o = /* @__PURE__ */ Os();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (o(s, d)) {
          var m;
          try {
            if (typeof s[d] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = s[d](a, d, c, l, null, t);
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var h = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Wo = i, Wo;
}
var Uo, fi;
function Fl() {
  if (fi) return Uo;
  fi = 1;
  var e = Cs(), t = Dl(), r = /* @__PURE__ */ wn(), o = /* @__PURE__ */ Os(), i = /* @__PURE__ */ Bl(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Uo = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(x) {
      var A = x && (u && x[u] || x[d]);
      if (typeof A == "function")
        return A;
    }
    var g = "<<anonymous>>", h = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: R(),
      arrayOf: w,
      element: b(),
      elementType: v(),
      instanceOf: O,
      node: $(),
      objectOf: M,
      oneOf: D,
      oneOfType: P,
      shape: f,
      exact: N
    };
    function y(x, A) {
      return x === A ? x !== 0 || 1 / x === 1 / A : x !== x && A !== A;
    }
    function p(x, A) {
      this.message = x, this.data = A && typeof A == "object" ? A : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function S(x) {
      if (process.env.NODE_ENV !== "production")
        var A = {}, z = 0;
      function W(L, Y, K, G, Q, q, J) {
        if (G = G || g, q = q || K, J !== r) {
          if (c) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = G + ":" + K;
            !A[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), A[ie] = !0, z++);
          }
        }
        return Y[K] == null ? L ? Y[K] === null ? new p("The " + Q + " `" + q + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new p("The " + Q + " `" + q + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : x(Y, K, G, Q, q);
      }
      var U = W.bind(null, !1);
      return U.isRequired = W.bind(null, !0), U;
    }
    function C(x) {
      function A(z, W, U, L, Y, K) {
        var G = z[W], Q = I(G);
        if (Q !== x) {
          var q = V(G);
          return new p(
            "Invalid " + L + " `" + Y + "` of type " + ("`" + q + "` supplied to `" + U + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return S(A);
    }
    function R() {
      return S(a);
    }
    function w(x) {
      function A(z, W, U, L, Y) {
        if (typeof x != "function")
          return new p("Property `" + Y + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var K = z[W];
        if (!Array.isArray(K)) {
          var G = I(K);
          return new p("Invalid " + L + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an array."));
        }
        for (var Q = 0; Q < K.length; Q++) {
          var q = x(K, Q, U, L, Y + "[" + Q + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return S(A);
    }
    function b() {
      function x(A, z, W, U, L) {
        var Y = A[z];
        if (!l(Y)) {
          var K = I(Y);
          return new p("Invalid " + U + " `" + L + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(x);
    }
    function v() {
      function x(A, z, W, U, L) {
        var Y = A[z];
        if (!e.isValidElementType(Y)) {
          var K = I(Y);
          return new p("Invalid " + U + " `" + L + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(x);
    }
    function O(x) {
      function A(z, W, U, L, Y) {
        if (!(z[W] instanceof x)) {
          var K = x.name || g, G = H(z[W]);
          return new p("Invalid " + L + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return S(A);
    }
    function D(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function A(z, W, U, L, Y) {
        for (var K = z[W], G = 0; G < x.length; G++)
          if (y(K, x[G]))
            return null;
        var Q = JSON.stringify(x, function(J, F) {
          var ie = V(F);
          return ie === "symbol" ? String(F) : F;
        });
        return new p("Invalid " + L + " `" + Y + "` of value `" + String(K) + "` " + ("supplied to `" + U + "`, expected one of " + Q + "."));
      }
      return S(A);
    }
    function M(x) {
      function A(z, W, U, L, Y) {
        if (typeof x != "function")
          return new p("Property `" + Y + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var K = z[W], G = I(K);
        if (G !== "object")
          return new p("Invalid " + L + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an object."));
        for (var Q in K)
          if (o(K, Q)) {
            var q = x(K, Q, U, L, Y + "." + Q, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return S(A);
    }
    function P(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var A = 0; A < x.length; A++) {
        var z = x[A];
        if (typeof z != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + X(z) + " at index " + A + "."
          ), a;
      }
      function W(U, L, Y, K, G) {
        for (var Q = [], q = 0; q < x.length; q++) {
          var J = x[q], F = J(U, L, Y, K, G, r);
          if (F == null)
            return null;
          F.data && o(F.data, "expectedType") && Q.push(F.data.expectedType);
        }
        var ie = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new p("Invalid " + K + " `" + G + "` supplied to " + ("`" + Y + "`" + ie + "."));
      }
      return S(W);
    }
    function $() {
      function x(A, z, W, U, L) {
        return k(A[z]) ? null : new p("Invalid " + U + " `" + L + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return S(x);
    }
    function B(x, A, z, W, U) {
      return new p(
        (x || "React class") + ": " + A + " type `" + z + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function f(x) {
      function A(z, W, U, L, Y) {
        var K = z[W], G = I(K);
        if (G !== "object")
          return new p("Invalid " + L + " `" + Y + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var Q in x) {
          var q = x[Q];
          if (typeof q != "function")
            return B(U, L, Y, Q, V(q));
          var J = q(K, Q, U, L, Y + "." + Q, r);
          if (J)
            return J;
        }
        return null;
      }
      return S(A);
    }
    function N(x) {
      function A(z, W, U, L, Y) {
        var K = z[W], G = I(K);
        if (G !== "object")
          return new p("Invalid " + L + " `" + Y + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        var Q = t({}, z[W], x);
        for (var q in Q) {
          var J = x[q];
          if (o(x, q) && typeof J != "function")
            return B(U, L, Y, q, V(J));
          if (!J)
            return new p(
              "Invalid " + L + " `" + Y + "` key `" + q + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(z[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var F = J(K, q, U, L, Y + "." + q, r);
          if (F)
            return F;
        }
        return null;
      }
      return S(A);
    }
    function k(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(k);
          if (x === null || l(x))
            return !0;
          var A = m(x);
          if (A) {
            var z = A.call(x), W;
            if (A !== x.entries) {
              for (; !(W = z.next()).done; )
                if (!k(W.value))
                  return !1;
            } else
              for (; !(W = z.next()).done; ) {
                var U = W.value;
                if (U && !k(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(x, A) {
      return x === "symbol" ? !0 : A ? A["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && A instanceof Symbol : !1;
    }
    function I(x) {
      var A = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : j(A, x) ? "symbol" : A;
    }
    function V(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var A = I(x);
      if (A === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return A;
    }
    function X(x) {
      var A = V(x);
      switch (A) {
        case "array":
        case "object":
          return "an " + A;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + A;
        default:
          return A;
      }
    }
    function H(x) {
      return !x.constructor || !x.constructor.name ? g : x.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, Uo;
}
var Ho, mi;
function zl() {
  if (mi) return Ho;
  mi = 1;
  var e = /* @__PURE__ */ wn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ho = function() {
    function o(a, l, c, u, d, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    o.isRequired = o;
    function i() {
      return o;
    }
    var s = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: i,
      element: o,
      elementType: o,
      instanceOf: i,
      node: o,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ho;
}
var hi;
function Ll() {
  if (hi) return Ur.exports;
  if (hi = 1, process.env.NODE_ENV !== "production") {
    var e = Cs(), t = !0;
    Ur.exports = /* @__PURE__ */ Fl()(e.isElement, t);
  } else
    Ur.exports = /* @__PURE__ */ zl()();
  return Ur.exports;
}
var Vl = /* @__PURE__ */ Ll();
const n = /* @__PURE__ */ Ml(Vl);
function Rs(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Rs(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function oe() {
  for (var e, t, r = 0, o = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Rs(e)) && (o && (o += " "), o += t);
  return o;
}
function Ce(e, t, r = void 0) {
  const o = {};
  for (const i in e) {
    const s = e[i];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, r && r[u] && (a += " " + r[u]));
    }
    o[i] = a;
  }
  return o;
}
var qr = { exports: {} }, de = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gi;
function Wl() {
  if (gi) return de;
  gi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function y(p) {
    if (typeof p == "object" && p !== null) {
      var S = p.$$typeof;
      switch (S) {
        case e:
          switch (p = p.type, p) {
            case r:
            case i:
            case o:
            case c:
            case u:
            case g:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case l:
                case m:
                case d:
                  return p;
                case s:
                  return p;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return de.ContextConsumer = s, de.ContextProvider = a, de.Element = e, de.ForwardRef = l, de.Fragment = r, de.Lazy = m, de.Memo = d, de.Portal = t, de.Profiler = i, de.StrictMode = o, de.Suspense = c, de.SuspenseList = u, de.isContextConsumer = function(p) {
    return y(p) === s;
  }, de.isContextProvider = function(p) {
    return y(p) === a;
  }, de.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, de.isForwardRef = function(p) {
    return y(p) === l;
  }, de.isFragment = function(p) {
    return y(p) === r;
  }, de.isLazy = function(p) {
    return y(p) === m;
  }, de.isMemo = function(p) {
    return y(p) === d;
  }, de.isPortal = function(p) {
    return y(p) === t;
  }, de.isProfiler = function(p) {
    return y(p) === i;
  }, de.isStrictMode = function(p) {
    return y(p) === o;
  }, de.isSuspense = function(p) {
    return y(p) === c;
  }, de.isSuspenseList = function(p) {
    return y(p) === u;
  }, de.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === i || p === o || p === c || p === u || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === d || p.$$typeof === a || p.$$typeof === s || p.$$typeof === l || p.$$typeof === h || p.getModuleId !== void 0);
  }, de.typeOf = y, de;
}
var pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function Ul() {
  return yi || (yi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var S = p.$$typeof;
        switch (S) {
          case t:
            switch (p = p.type, p) {
              case o:
              case s:
              case i:
              case u:
              case d:
              case h:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case l:
                  case c:
                  case g:
                  case m:
                    return p;
                  case a:
                    return p;
                  default:
                    return S;
                }
            }
          case r:
            return S;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    pe.ContextConsumer = a, pe.ContextProvider = l, pe.Element = t, pe.ForwardRef = c, pe.Fragment = o, pe.Lazy = g, pe.Memo = m, pe.Portal = r, pe.Profiler = s, pe.StrictMode = i, pe.Suspense = u, pe.SuspenseList = d, pe.isContextConsumer = function(p) {
      return e(p) === a;
    }, pe.isContextProvider = function(p) {
      return e(p) === l;
    }, pe.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, pe.isForwardRef = function(p) {
      return e(p) === c;
    }, pe.isFragment = function(p) {
      return e(p) === o;
    }, pe.isLazy = function(p) {
      return e(p) === g;
    }, pe.isMemo = function(p) {
      return e(p) === m;
    }, pe.isPortal = function(p) {
      return e(p) === r;
    }, pe.isProfiler = function(p) {
      return e(p) === s;
    }, pe.isStrictMode = function(p) {
      return e(p) === i;
    }, pe.isSuspense = function(p) {
      return e(p) === u;
    }, pe.isSuspenseList = function(p) {
      return e(p) === d;
    }, pe.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === o || p === s || p === i || p === u || p === d || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === m || p.$$typeof === l || p.$$typeof === a || p.$$typeof === c || p.$$typeof === y || p.getModuleId !== void 0);
    }, pe.typeOf = e;
  }()), pe;
}
var bi;
function Hl() {
  return bi || (bi = 1, process.env.NODE_ENV === "production" ? qr.exports = /* @__PURE__ */ Wl() : qr.exports = /* @__PURE__ */ Ul()), qr.exports;
}
var Zt = /* @__PURE__ */ Hl();
function et(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ps(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || Zt.isValidElementType(e) || !et(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ps(e[r]);
  }), t;
}
function _e(e, t, r = {
  clone: !0
}) {
  const o = r.clone ? {
    ...e
  } : e;
  return et(e) && et(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ E.isValidElement(t[i]) || Zt.isValidElementType(t[i]) ? o[i] = t[i] : et(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && et(e[i]) ? o[i] = _e(e[i], t[i], r) : r.clone ? o[i] = et(t[i]) ? Ps(t[i]) : t[i] : o[i] = t[i];
  }), o;
}
function Tr(e, t) {
  return t ? _e(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const xt = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function vi(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, i) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(o.match(s)?.[1] || 0) - +(i.match(s)?.[1] || 0);
  });
  return r.length ? r.reduce((o, i) => {
    const s = t[i];
    return delete o[i], o[i] = s, o;
  }, {
    ...t
  }) : t;
}
function ql(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Yl(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : at(18, `(${t})`));
    return null;
  }
  const [, o, i] = r, s = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(i).up(s);
}
function Gl(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function r(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const o = {}, i = (s) => (r(o, s), o);
  return r(i), {
    ...e,
    containerQueries: i
  };
}
const bo = {
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
}, xi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${bo[e]}px)`
}, Kl = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : bo[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Qe(e, t, r) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const s = o.breakpoints || xi;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = o.breakpoints || xi;
    return Object.keys(t).reduce((a, l) => {
      if (ql(s.keys, l)) {
        const c = Yl(o.containerQueries ? o : Kl, l);
        c && (a[c] = r(t[l], l));
      } else if (Object.keys(s.values || bo).includes(l)) {
        const c = s.up(l);
        a[c] = r(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function ks(e = {}) {
  return e.keys?.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {}) || {};
}
function nn(e, t) {
  return e.reduce((r, o) => {
    const i = r[o];
    return (!i || Object.keys(i).length === 0) && delete r[o], r;
  }, t);
}
function Xl(e, ...t) {
  const r = ks(e), o = [r, ...t].reduce((i, s) => _e(i, s), {});
  return nn(Object.keys(r), o);
}
function Jl(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((i, s) => {
    s < e.length && (r[i] = !0);
  }) : o.forEach((i) => {
    e[i] != null && (r[i] = !0);
  }), r;
}
function qo({
  values: e,
  breakpoints: t,
  base: r
}) {
  const o = r || Jl(e, t), i = Object.keys(o);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function vo(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const o = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function no(e, t, r, o = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || o : i = vo(e, r) || o, t && (i = t(i, o, e)), i;
}
function Pe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: o,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = vo(c, o) || {};
    return Qe(a, l, (m) => {
      let g = no(u, i, m);
      return m === g && typeof m == "string" && (g = no(u, i, `${t}${m === "default" ? "" : ee(m)}`, m)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: xt
  } : {}, s.filterProps = [t], s;
}
function Ql(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Zl = {
  m: "margin",
  p: "padding"
}, ec = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Si = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, tc = Ql((e) => {
  if (e.length > 2)
    if (Si[e])
      e = Si[e];
    else
      return [e];
  const [t, r] = e.split(""), o = Zl[t], i = ec[r] || "";
  return Array.isArray(i) ? i.map((s) => o + s) : [o + i];
}), xo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], So = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], rc = [...xo, ...So];
function Ir(e, t, r, o) {
  const i = vo(e, t, !0) ?? r;
  return typeof i == "number" || typeof i == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${s}.`), typeof i == "string" ? i.startsWith("var(") && s === 0 ? 0 : i.startsWith("var(") && s === 1 ? i : `calc(${s} * ${i})` : i * s) : Array.isArray(i) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[a];
    return s >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function To(e) {
  return Ir(e, "spacing", 8, "spacing");
}
function Bt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function oc(e, t) {
  return (r) => e.reduce((o, i) => (o[i] = Bt(t, r), o), {});
}
function nc(e, t, r, o) {
  if (!t.includes(r))
    return null;
  const i = tc(r), s = oc(i, o), a = e[r];
  return Qe(e, a, s);
}
function Ms(e, t) {
  const r = To(e.theme);
  return Object.keys(e).map((o) => nc(e, t, o, r)).reduce(Tr, {});
}
function Te(e) {
  return Ms(e, xo);
}
Te.propTypes = process.env.NODE_ENV !== "production" ? xo.reduce((e, t) => (e[t] = xt, e), {}) : {};
Te.filterProps = xo;
function Ee(e) {
  return Ms(e, So);
}
Ee.propTypes = process.env.NODE_ENV !== "production" ? So.reduce((e, t) => (e[t] = xt, e), {}) : {};
Ee.filterProps = So;
process.env.NODE_ENV !== "production" && rc.reduce((e, t) => (e[t] = xt, e), {});
function Eo(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((s) => {
    o[s] = i;
  }), o), {}), r = (o) => Object.keys(o).reduce((i, s) => t[s] ? Tr(i, t[s](o)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, r.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), r;
}
function qe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Je(e, t) {
  return Pe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ic = Je("border", qe), sc = Je("borderTop", qe), ac = Je("borderRight", qe), lc = Je("borderBottom", qe), cc = Je("borderLeft", qe), uc = Je("borderColor"), dc = Je("borderTopColor"), pc = Je("borderRightColor"), fc = Je("borderBottomColor"), mc = Je("borderLeftColor"), hc = Je("outline", qe), gc = Je("outlineColor"), wo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ir(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (o) => ({
      borderRadius: Bt(t, o)
    });
    return Qe(e, e.borderRadius, r);
  }
  return null;
};
wo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: xt
} : {};
wo.filterProps = ["borderRadius"];
Eo(ic, sc, ac, lc, cc, uc, dc, pc, fc, mc, wo, hc, gc);
const Co = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ir(e.theme, "spacing", 8, "gap"), r = (o) => ({
      gap: Bt(t, o)
    });
    return Qe(e, e.gap, r);
  }
  return null;
};
Co.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: xt
} : {};
Co.filterProps = ["gap"];
const Oo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ir(e.theme, "spacing", 8, "columnGap"), r = (o) => ({
      columnGap: Bt(t, o)
    });
    return Qe(e, e.columnGap, r);
  }
  return null;
};
Oo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: xt
} : {};
Oo.filterProps = ["columnGap"];
const Ro = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ir(e.theme, "spacing", 8, "rowGap"), r = (o) => ({
      rowGap: Bt(t, o)
    });
    return Qe(e, e.rowGap, r);
  }
  return null;
};
Ro.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: xt
} : {};
Ro.filterProps = ["rowGap"];
const yc = Pe({
  prop: "gridColumn"
}), bc = Pe({
  prop: "gridRow"
}), vc = Pe({
  prop: "gridAutoFlow"
}), xc = Pe({
  prop: "gridAutoColumns"
}), Sc = Pe({
  prop: "gridAutoRows"
}), Tc = Pe({
  prop: "gridTemplateColumns"
}), Ec = Pe({
  prop: "gridTemplateRows"
}), wc = Pe({
  prop: "gridTemplateAreas"
}), Cc = Pe({
  prop: "gridArea"
});
Eo(Co, Oo, Ro, yc, bc, vc, xc, Sc, Tc, Ec, wc, Cc);
function Qt(e, t) {
  return t === "grey" ? t : e;
}
const Oc = Pe({
  prop: "color",
  themeKey: "palette",
  transform: Qt
}), Rc = Pe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Qt
}), Pc = Pe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Qt
});
Eo(Oc, Rc, Pc);
function Ve(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const kc = Pe({
  prop: "width",
  transform: Ve
}), Cn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const o = e.theme?.breakpoints?.values?.[r] || bo[r];
      return o ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Ve(r)
      };
    };
    return Qe(e, e.maxWidth, t);
  }
  return null;
};
Cn.filterProps = ["maxWidth"];
const Mc = Pe({
  prop: "minWidth",
  transform: Ve
}), $c = Pe({
  prop: "height",
  transform: Ve
}), Nc = Pe({
  prop: "maxHeight",
  transform: Ve
}), jc = Pe({
  prop: "minHeight",
  transform: Ve
});
Pe({
  prop: "size",
  cssProperty: "width",
  transform: Ve
});
Pe({
  prop: "size",
  cssProperty: "height",
  transform: Ve
});
const Ic = Pe({
  prop: "boxSizing"
});
Eo(kc, Cn, Mc, $c, Nc, jc, Ic);
const Ar = {
  // borders
  border: {
    themeKey: "borders",
    transform: qe
  },
  borderTop: {
    themeKey: "borders",
    transform: qe
  },
  borderRight: {
    themeKey: "borders",
    transform: qe
  },
  borderBottom: {
    themeKey: "borders",
    transform: qe
  },
  borderLeft: {
    themeKey: "borders",
    transform: qe
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
    transform: qe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: wo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Qt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Qt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Qt
  },
  // spacing
  p: {
    style: Ee
  },
  pt: {
    style: Ee
  },
  pr: {
    style: Ee
  },
  pb: {
    style: Ee
  },
  pl: {
    style: Ee
  },
  px: {
    style: Ee
  },
  py: {
    style: Ee
  },
  padding: {
    style: Ee
  },
  paddingTop: {
    style: Ee
  },
  paddingRight: {
    style: Ee
  },
  paddingBottom: {
    style: Ee
  },
  paddingLeft: {
    style: Ee
  },
  paddingX: {
    style: Ee
  },
  paddingY: {
    style: Ee
  },
  paddingInline: {
    style: Ee
  },
  paddingInlineStart: {
    style: Ee
  },
  paddingInlineEnd: {
    style: Ee
  },
  paddingBlock: {
    style: Ee
  },
  paddingBlockStart: {
    style: Ee
  },
  paddingBlockEnd: {
    style: Ee
  },
  m: {
    style: Te
  },
  mt: {
    style: Te
  },
  mr: {
    style: Te
  },
  mb: {
    style: Te
  },
  ml: {
    style: Te
  },
  mx: {
    style: Te
  },
  my: {
    style: Te
  },
  margin: {
    style: Te
  },
  marginTop: {
    style: Te
  },
  marginRight: {
    style: Te
  },
  marginBottom: {
    style: Te
  },
  marginLeft: {
    style: Te
  },
  marginX: {
    style: Te
  },
  marginY: {
    style: Te
  },
  marginInline: {
    style: Te
  },
  marginInlineStart: {
    style: Te
  },
  marginInlineEnd: {
    style: Te
  },
  marginBlock: {
    style: Te
  },
  marginBlockStart: {
    style: Te
  },
  marginBlockEnd: {
    style: Te
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
    style: Co
  },
  rowGap: {
    style: Ro
  },
  columnGap: {
    style: Oo
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
    transform: Ve
  },
  maxWidth: {
    style: Cn
  },
  minWidth: {
    transform: Ve
  },
  height: {
    transform: Ve
  },
  maxHeight: {
    transform: Ve
  },
  minHeight: {
    transform: Ve
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
function Ac(...e) {
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((o) => r.size === Object.keys(o).length);
}
function _c(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dc() {
  function e(r, o, i, s) {
    const a = {
      [r]: o,
      theme: i
    }, l = s[r];
    if (!l)
      return {
        [r]: o
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: d,
      style: m
    } = l;
    if (o == null)
      return null;
    if (u === "typography" && o === "inherit")
      return {
        [r]: o
      };
    const g = vo(i, u) || {};
    return m ? m(a) : Qe(a, o, (y) => {
      let p = no(g, d, y);
      return y === p && typeof y == "string" && (p = no(g, d, `${r}${y === "default" ? "" : ee(y)}`, y)), c === !1 ? p : {
        [c]: p
      };
    });
  }
  function t(r) {
    const {
      sx: o,
      theme: i = {},
      nested: s
    } = r || {};
    if (!o)
      return null;
    const a = i.unstable_sxConfig ?? Ar;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = ks(i.breakpoints), m = Object.keys(d);
      let g = d;
      return Object.keys(u).forEach((h) => {
        const y = _c(u[h], i);
        if (y != null)
          if (typeof y == "object")
            if (a[h])
              g = Tr(g, e(h, y, i, a));
            else {
              const p = Qe({
                theme: i
              }, y, (S) => ({
                [h]: S
              }));
              Ac(p, y) ? g[h] = t({
                sx: y,
                theme: i,
                nested: !0
              }) : g = Tr(g, p);
            }
          else
            g = Tr(g, e(h, y, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": vi(i, nn(m, g))
      } : vi(i, nn(m, g));
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const bt = Dc();
bt.filterProps = ["sx"];
const Bc = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = e?.theme?.unstable_sxConfig ?? Ar;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function On(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: o,
    otherProps: i
  } = Bc(r);
  let s;
  return Array.isArray(t) ? s = [o, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return et(l) ? {
      ...o,
      ...l
    } : o;
  } : s = {
    ...o,
    ...t
  }, {
    ...i,
    sx: s
  };
}
function Fc(e) {
  for (var t = 0, r, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var zc = {
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
};
function Lc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Vc = /[A-Z]|^ms/g, Wc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $s = function(t) {
  return t.charCodeAt(1) === 45;
}, Ti = function(t) {
  return t != null && typeof t != "boolean";
}, Yo = /* @__PURE__ */ Lc(function(e) {
  return $s(e) ? e : e.replace(Vc, "-$&").toLowerCase();
}), Ei = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Wc, function(o, i, s) {
          return ht = {
            name: i,
            styles: s,
            next: ht
          }, i;
        });
  }
  return zc[t] !== 1 && !$s(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function io(e, t, r) {
  if (r == null)
    return "";
  var o = r;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return ht = {
          name: i.name,
          styles: i.styles,
          next: ht
        }, i.name;
      var s = r;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            ht = {
              name: a.name,
              styles: a.styles,
              next: ht
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return Uc(e, t, r);
    }
  }
  var c = r;
  return c;
}
function Uc(e, t, r) {
  var o = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      o += io(e, t, r[i]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object") {
        var l = a;
        Ti(l) && (o += Yo(s) + ":" + Ei(s, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var c = 0; c < a.length; c++)
          Ti(a[c]) && (o += Yo(s) + ":" + Ei(s, a[c]) + ";");
      else {
        var u = io(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            o += Yo(s) + ":" + u + ";";
            break;
          }
          default:
            o += s + "{" + u + "}";
        }
      }
    }
  return o;
}
var wi = /label:\s*([^\s;{]+)\s*(;|$)/g, ht;
function Hc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  ht = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    o = !1, i += io(r, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += io(r, t, e[l]), o) {
      var c = s;
      i += c[l];
    }
  wi.lastIndex = 0;
  for (var u = "", d; (d = wi.exec(i)) !== null; )
    u += "-" + d[1];
  var m = Fc(i) + u;
  return {
    name: m,
    styles: i,
    next: ht
  };
}
function qc(e) {
  return e == null || Object.keys(e).length === 0;
}
function Rn(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, o = typeof t == "function" ? (i) => t(qc(i) ? r : i) : t;
  return /* @__PURE__ */ T.jsx(Pl, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (Rn.propTypes = {
  defaultTheme: n.object,
  styles: n.oneOfType([n.array, n.string, n.object, n.func])
});
/**
 * @mui/styled-engine v7.3.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ns(e, t) {
  const r = Rl(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...o);
  } : r;
}
function Yc(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ci = [];
function gt(e) {
  return Ci[0] = e, Hc(Ci);
}
const Gc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, o) => r.val - o.val), t.reduce((r, o) => ({
    ...r,
    [o.key]: o.val
  }), {});
};
function Kc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
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
    unit: r = "px",
    step: o = 5,
    ...i
  } = e, s = Gc(t), a = Object.keys(s);
  function l(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - o / 100}${r})`;
  }
  function u(g, h) {
    const y = a.indexOf(h);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : h) - o / 100}${r})`;
  }
  function d(g) {
    return a.indexOf(g) + 1 < a.length ? u(g, a[a.indexOf(g) + 1]) : l(g);
  }
  function m(g) {
    const h = a.indexOf(g);
    return h === 0 ? l(a[1]) : h === a.length - 1 ? c(a[h]) : u(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: m,
    unit: r,
    ...i
  };
}
const Xc = {
  borderRadius: 4
};
function js(e = 8, t = To({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Jc(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Po(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: o = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, l = Kc(r), c = js(i);
  let u = _e({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: c,
    shape: {
      ...Xc,
      ...s
    }
  }, a);
  return u = Gl(u), u.applyStyles = Jc, u = t.reduce((d, m) => _e(d, m), u), u.unstable_sxConfig = {
    ...Ar,
    ...a?.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return bt({
      sx: m,
      theme: this
    });
  }, u;
}
function Qc(e) {
  return Object.keys(e).length === 0;
}
function Pn(e = null) {
  const t = E.useContext(Ts);
  return !t || Qc(t) ? e : t;
}
const Zc = Po();
function ko(e = Zc) {
  return Pn(e);
}
function Go(e) {
  const t = gt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function kn({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const o = ko(r), i = t && o[t] || o;
  let s = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => Go(typeof a == "function" ? a(i) : a)) : s = Go(s)), /* @__PURE__ */ T.jsx(Rn, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: n.object,
  /**
   * @ignore
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool]),
  /**
   * @ignore
   */
  themeId: n.string
});
function eu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: o = "MuiBox-root",
    generateClassName: i
  } = e, s = Ns("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(bt);
  return /* @__PURE__ */ E.forwardRef(function(c, u) {
    const d = ko(r), {
      className: m,
      component: g = "div",
      ...h
    } = On(c);
    return /* @__PURE__ */ T.jsx(s, {
      as: g,
      ref: u,
      className: oe(m, i ? i(o) : o),
      theme: t && d[t] || d,
      ...h
    });
  });
}
const tu = {
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
function be(e, t, r = "Mui") {
  const o = tu[t];
  return o ? `${r}-${o}` : `${ws.generate(e)}-${t}`;
}
function he(e, t, r = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = be(e, i, r);
  }), o;
}
function Is(e, t = "") {
  return e.displayName || e.name || t;
}
function Oi(e, t, r) {
  const o = Is(t);
  return e.displayName || (o !== "" ? `${r}(${o})` : r);
}
function ru(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Is(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Zt.ForwardRef:
          return Oi(e, e.render, "ForwardRef");
        case Zt.Memo:
          return Oi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function As(e) {
  const {
    variants: t,
    ...r
  } = e, o = {
    variants: t,
    style: gt(r),
    isProcessed: !0
  };
  return o.style === r || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = gt(i.style));
  }), o;
}
const ou = Po();
function Ko(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function jt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function nu(e) {
  return e ? (t, r) => r[e] : null;
}
function iu(e, t, r) {
  e.theme = lu(e.theme) ? r : e.theme[t] || e.theme;
}
function to(e, t, r) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((i) => to(e, i, r));
  if (Array.isArray(o?.variants)) {
    let i;
    if (o.isProcessed)
      i = r ? jt(o.style, r) : o.style;
    else {
      const {
        variants: s,
        ...a
      } = o;
      i = r ? jt(gt(a), r) : a;
    }
    return _s(e, o.variants, [i], r);
  }
  return o?.isProcessed ? r ? jt(gt(o.style), r) : o.style : r ? jt(gt(o), r) : o;
}
function _s(e, t, r = [], o = void 0) {
  let i;
  e: for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    if (typeof a.props == "function") {
      if (i ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !a.props(i))
        continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && e.ownerState?.[l] !== a.props[l])
          continue e;
    typeof a.style == "function" ? (i ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(o ? jt(gt(a.style(i)), o) : a.style(i))) : r.push(o ? jt(gt(a.style), o) : a.style);
  }
  return r;
}
function Ds(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ou,
    rootShouldForwardProp: o = Ko,
    slotShouldForwardProp: i = Ko
  } = e;
  function s(l) {
    iu(l, t, r);
  }
  return (l, c = {}) => {
    Yc(l, (O) => O.filter((D) => D !== bt));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: m,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = nu(Bs(d)),
      ...y
    } = c, p = u && u.startsWith("Mui") || d ? "components" : "custom", S = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), C = g || !1;
    let R = Ko;
    d === "Root" || d === "root" ? R = o : d ? R = i : cu(l) && (R = void 0);
    const w = Ns(l, {
      shouldForwardProp: R,
      label: au(u, d),
      ...y
    }), b = (O) => {
      if (O.__emotion_real === O)
        return O;
      if (typeof O == "function")
        return function(M) {
          return to(M, O, M.theme.modularCssLayers ? p : void 0);
        };
      if (et(O)) {
        const D = As(O);
        return function(P) {
          return D.variants ? to(P, D, P.theme.modularCssLayers ? p : void 0) : P.theme.modularCssLayers ? jt(D.style, p) : D.style;
        };
      }
      return O;
    }, v = (...O) => {
      const D = [], M = O.map(b), P = [];
      if (D.push(s), u && h && P.push(function(N) {
        const j = N.theme.components?.[u]?.styleOverrides;
        if (!j)
          return null;
        const I = {};
        for (const V in j)
          I[V] = to(N, j[V], N.theme.modularCssLayers ? "theme" : void 0);
        return h(N, I);
      }), u && !S && P.push(function(N) {
        const j = N.theme?.components?.[u]?.variants;
        return j ? _s(N, j, [], N.theme.modularCssLayers ? "theme" : void 0) : null;
      }), C || P.push(bt), Array.isArray(M[0])) {
        const f = M.shift(), N = new Array(D.length).fill(""), k = new Array(P.length).fill("");
        let j;
        j = [...N, ...f, ...k], j.raw = [...N, ...f.raw, ...k], D.unshift(j);
      }
      const $ = [...D, ...M, ...P], B = w(...$);
      return l.muiName && (B.muiName = l.muiName), process.env.NODE_ENV !== "production" && (B.displayName = su(u, d, l)), B;
    };
    return w.withConfig && (v.withConfig = w.withConfig), v;
  };
}
function su(e, t, r) {
  return e ? `${e}${ee(t || "")}` : `Styled(${ru(r)})`;
}
function au(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Bs(t || "Root")}`), r;
}
function lu(e) {
  for (const t in e)
    return !1;
  return !0;
}
function cu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Bs(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const uu = Ds();
function Rr(e, t, r = !1) {
  const o = {
    ...t
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = i;
      if (s === "components" || s === "slots")
        o[s] = {
          ...e[s],
          ...o[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const a = e[s], l = t[s];
        if (!l)
          o[s] = a || {};
        else if (!a)
          o[s] = l;
        else {
          o[s] = {
            ...l
          };
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              const u = c;
              o[s][u] = Rr(a[u], l[u], r);
            }
        }
      } else s === "className" && r && t.className ? o.className = oe(e?.className, t?.className) : s === "style" && r && t.style ? o.style = {
        ...e?.style,
        ...t?.style
      } : o[s] === void 0 && (o[s] = e[s]);
    }
  return o;
}
function du(e) {
  const {
    theme: t,
    name: r,
    props: o
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? o : Rr(t.components[r].defaultProps, o);
}
function pu({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: o
}) {
  let i = ko(r);
  return o && (i = i[o] || i), du({
    theme: i,
    name: t,
    props: e
  });
}
const lt = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function fu(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Mn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), fu(e, t, r);
}
function mu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function vt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return vt(mu(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : at(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : at(10, i));
  } else
    o = o.split(",");
  return o = o.map((s) => parseFloat(s)), {
    type: r,
    values: o,
    colorSpace: i
  };
}
const hu = (e) => {
  const t = vt(e);
  return t.values.slice(0, 3).map((r, o) => t.type.includes("hsl") && o !== 0 ? `${r}%` : r).join(" ");
}, hr = (e, t) => {
  try {
    return hu(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Mo(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${r} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function Fs(e) {
  e = vt(e);
  const {
    values: t
  } = e, r = t[0], o = t[1] / 100, i = t[2] / 100, s = o * Math.min(i, 1 - i), a = (u, d = (u + r / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Mo({
    type: l,
    values: c
  });
}
function sn(e) {
  e = vt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? vt(Fs(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ri(e, t) {
  const r = sn(e), o = sn(t);
  return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
function so(e, t) {
  return e = vt(e), t = Mn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Mo(e);
}
function Pt(e, t, r) {
  try {
    return so(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function $o(e, t) {
  if (e = vt(e), t = Mn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Mo(e);
}
function le(e, t, r) {
  try {
    return $o(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function No(e, t) {
  if (e = vt(e), t = Mn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Mo(e);
}
function ce(e, t, r) {
  try {
    return No(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function gu(e, t = 0.15) {
  return sn(e) > 0.5 ? $o(e, t) : No(e, t);
}
function Yr(e, t, r) {
  try {
    return gu(e, t);
  } catch {
    return e;
  }
}
const yu = "exact-prop: ​";
function jo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [yu]: (t) => {
      const r = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const $n = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && ($n.displayName = "ThemeContext");
function Nn() {
  const e = E.useContext($n);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e;
}
const bu = typeof Symbol == "function" && Symbol.for, vu = bu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function xu(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...t
  };
}
function ao(e) {
  const {
    children: t,
    theme: r
  } = e, o = Nn();
  process.env.NODE_ENV !== "production" && o === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = E.useMemo(() => {
    const s = o === null ? {
      ...r
    } : xu(o, r);
    return s != null && (s[vu] = o !== null), s;
  }, [r, o]);
  return /* @__PURE__ */ T.jsx($n.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ao.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: n.oneOfType([n.object, n.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (ao.propTypes = jo(ao.propTypes));
const zs = /* @__PURE__ */ E.createContext();
function Ls({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ T.jsx(zs.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Ls.propTypes = {
  children: n.node,
  value: n.bool
});
const jn = () => E.useContext(zs) ?? !1, Vs = /* @__PURE__ */ E.createContext(void 0);
function Ws({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ T.jsx(Vs.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Ws.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * @ignore
   */
  value: n.object
});
function Su(e) {
  const {
    theme: t,
    name: r,
    props: o
  } = e;
  if (!t || !t.components || !t.components[r])
    return o;
  const i = t.components[r];
  return i.defaultProps ? Rr(i.defaultProps, o, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? Rr(i, o, t.components.mergeClassNameAndStyle) : o;
}
function Tu({
  props: e,
  name: t
}) {
  const r = E.useContext(Vs);
  return Su({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let Pi = 0;
function Eu(e) {
  const [t, r] = E.useState(e), o = e || t;
  return E.useEffect(() => {
    t == null && (Pi += 1, r(`mui-${Pi}`));
  }, [t]), o;
}
const wu = {
  ...E
}, ki = wu.useId;
function Io(e) {
  if (ki !== void 0) {
    const t = ki();
    return e ?? t;
  }
  return Eu(e);
}
function Cu(e) {
  const t = Pn(), r = Io() || "", {
    modularCssLayers: o
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !o || t !== null ? i = "" : typeof o == "string" ? i = o.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, lt(() => {
    const s = document.querySelector("head");
    if (!s)
      return;
    const a = s.firstChild;
    if (i) {
      if (a && a.hasAttribute?.("data-mui-layer-order") && a.getAttribute("data-mui-layer-order") === r)
        return;
      const l = document.createElement("style");
      l.setAttribute("data-mui-layer-order", r), l.textContent = i, s.prepend(l);
    } else
      s.querySelector(`style[data-mui-layer-order="${r}"]`)?.remove();
  }, [i, r]), i ? /* @__PURE__ */ T.jsx(kn, {
    styles: i
  }) : null;
}
const Mi = {};
function $i(e, t, r, o = !1) {
  return E.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof r == "function") {
      const s = r(i), a = e ? {
        ...t,
        [e]: s
      } : s;
      return o ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, o]);
}
function Pr(e) {
  const {
    children: t,
    theme: r,
    themeId: o
  } = e, i = Pn(Mi), s = Nn() || Mi;
  process.env.NODE_ENV !== "production" && (i === null && typeof r == "function" || o && i && !i[o] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = $i(o, i, r), l = $i(o, s, r, !0), c = (o ? a[o] : a).direction === "rtl", u = Cu(a);
  return /* @__PURE__ */ T.jsx(ao, {
    theme: l,
    children: /* @__PURE__ */ T.jsx(Ts.Provider, {
      value: a,
      children: /* @__PURE__ */ T.jsx(Ls, {
        value: c,
        children: /* @__PURE__ */ T.jsxs(Ws, {
          value: o ? a[o].components : a.components,
          children: [u, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Pr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: n.oneOfType([n.func, n.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: n.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Pr.propTypes = jo(Pr.propTypes));
const Ni = {
  theme: void 0
};
function Ou(e) {
  let t, r;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== r) && (Ni.theme = i.theme, s = As(e(Ni)), t = s, r = i.theme), s;
  };
}
const In = "mode", An = "color-scheme", Ru = "data-color-scheme";
function Pu(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: i = In,
    colorSchemeStorageKey: s = An,
    attribute: a = Ru,
    colorSchemeNode: l = "document.documentElement",
    nonce: c
  } = e || {};
  let u = "", d = a;
  if (a === "class" && (d = ".%s"), a === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const g = d.substring(1);
    u += `${l}.classList.remove('${g}'.replace('%s', light), '${g}'.replace('%s', dark));
      ${l}.classList.add('${g}'.replace('%s', colorScheme));`;
  }
  const m = d.match(/\[([^\]]+)\]/);
  if (m) {
    const [g, h] = m[1].split("=");
    h || (u += `${l}.removeAttribute('${g}'.replace('%s', light));
      ${l}.removeAttribute('${g}'.replace('%s', dark));`), u += `
      ${l}.setAttribute('${g}'.replace('%s', colorScheme), ${h ? `${h}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${l}.setAttribute('${d}', colorScheme);`;
  return /* @__PURE__ */ T.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? c : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || '${t}';
  const dark = localStorage.getItem('${s}-dark') || '${o}';
  const light = localStorage.getItem('${s}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function ku() {
}
const Mu = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!t)
      return r;
    let o;
    try {
      o = t.localStorage.getItem(e);
    } catch {
    }
    return o || r;
  },
  set: (r) => {
    if (t)
      try {
        t.localStorage.setItem(e, r);
      } catch {
      }
  },
  subscribe: (r) => {
    if (!t)
      return ku;
    const o = (i) => {
      const s = i.newValue;
      i.key === e && r(s);
    };
    return t.addEventListener("storage", o), () => {
      t.removeEventListener("storage", o);
    };
  }
});
function Xo() {
}
function ji(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Us(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function $u(e) {
  return Us(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Nu(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: o,
    supportedColorSchemes: i = [],
    modeStorageKey: s = In,
    colorSchemeStorageKey: a = An,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: c = Mu,
    noSsr: u = !1
  } = e, d = i.join(","), m = i.length > 1, g = E.useMemo(() => c?.({
    key: s,
    storageWindow: l
  }), [c, s, l]), h = E.useMemo(() => c?.({
    key: `${a}-light`,
    storageWindow: l
  }), [c, a, l]), y = E.useMemo(() => c?.({
    key: `${a}-dark`,
    storageWindow: l
  }), [c, a, l]), [p, S] = E.useState(() => {
    const M = g?.get(t) || t, P = h?.get(r) || r, $ = y?.get(o) || o;
    return {
      mode: M,
      systemMode: ji(M),
      lightColorScheme: P,
      darkColorScheme: $
    };
  }), [C, R] = E.useState(u || !m);
  E.useEffect(() => {
    R(!0);
  }, []);
  const w = $u(p), b = E.useCallback((M) => {
    S((P) => {
      if (M === P.mode)
        return P;
      const $ = M ?? t;
      return g?.set($), {
        ...P,
        mode: $,
        systemMode: ji($)
      };
    });
  }, [g, t]), v = E.useCallback((M) => {
    M ? typeof M == "string" ? M && !d.includes(M) ? console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`) : S((P) => {
      const $ = {
        ...P
      };
      return Us(P, (B) => {
        B === "light" && (h?.set(M), $.lightColorScheme = M), B === "dark" && (y?.set(M), $.darkColorScheme = M);
      }), $;
    }) : S((P) => {
      const $ = {
        ...P
      }, B = M.light === null ? r : M.light, f = M.dark === null ? o : M.dark;
      return B && (d.includes(B) ? ($.lightColorScheme = B, h?.set(B)) : console.error(`\`${B}\` does not exist in \`theme.colorSchemes\`.`)), f && (d.includes(f) ? ($.darkColorScheme = f, y?.set(f)) : console.error(`\`${f}\` does not exist in \`theme.colorSchemes\`.`)), $;
    }) : S((P) => (h?.set(r), y?.set(o), {
      ...P,
      lightColorScheme: r,
      darkColorScheme: o
    }));
  }, [d, h, y, r, o]), O = E.useCallback((M) => {
    p.mode === "system" && S((P) => {
      const $ = M?.matches ? "dark" : "light";
      return P.systemMode === $ ? P : {
        ...P,
        systemMode: $
      };
    });
  }, [p.mode]), D = E.useRef(O);
  return D.current = O, E.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const M = (...$) => D.current(...$), P = window.matchMedia("(prefers-color-scheme: dark)");
    return P.addListener(M), M(P), () => {
      P.removeListener(M);
    };
  }, [m]), E.useEffect(() => {
    if (m) {
      const M = g?.subscribe((B) => {
        (!B || ["light", "dark", "system"].includes(B)) && b(B || t);
      }) || Xo, P = h?.subscribe((B) => {
        (!B || d.match(B)) && v({
          light: B
        });
      }) || Xo, $ = y?.subscribe((B) => {
        (!B || d.match(B)) && v({
          dark: B
        });
      }) || Xo;
      return () => {
        M(), P(), $();
      };
    }
  }, [v, b, d, t, l, m, g, h, y]), {
    ...p,
    mode: C ? p.mode : void 0,
    systemMode: C ? p.systemMode : void 0,
    colorScheme: C ? w : void 0,
    setMode: b,
    setColorScheme: v
  };
}
const ju = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Iu(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: o = In,
    colorSchemeStorageKey: i = An,
    disableTransitionOnChange: s = !1,
    defaultColorScheme: a,
    resolveTheme: l
  } = e, c = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, u = /* @__PURE__ */ E.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const d = () => E.useContext(u) || c, m = {}, g = {};
  function h(C) {
    const {
      children: R,
      theme: w,
      modeStorageKey: b = o,
      colorSchemeStorageKey: v = i,
      disableTransitionOnChange: O = s,
      storageManager: D,
      storageWindow: M = typeof window > "u" ? void 0 : window,
      documentNode: P = typeof document > "u" ? void 0 : document,
      colorSchemeNode: $ = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: B = !1,
      disableStyleSheetGeneration: f = !1,
      defaultMode: N = "system",
      forceThemeRerender: k = !1,
      noSsr: j
    } = C, I = E.useRef(!1), V = Nn(), X = E.useContext(u), H = !!X && !B, x = E.useMemo(() => w || (typeof r == "function" ? r() : r), [w]), A = x[t], z = A || x, {
      colorSchemes: W = m,
      components: U = g,
      cssVarPrefix: L
    } = z, Y = Object.keys(W).filter((Me) => !!W[Me]).join(","), K = E.useMemo(() => Y.split(","), [Y]), G = typeof a == "string" ? a : a.light, Q = typeof a == "string" ? a : a.dark, q = W[G] && W[Q] ? N : W[z.defaultColorScheme]?.palette?.mode || z.palette?.mode, {
      mode: J,
      setMode: F,
      systemMode: ie,
      lightColorScheme: fe,
      darkColorScheme: Oe,
      colorScheme: Ue,
      setColorScheme: $e
    } = Nu({
      supportedColorSchemes: K,
      defaultLightColorScheme: G,
      defaultDarkColorScheme: Q,
      modeStorageKey: b,
      colorSchemeStorageKey: v,
      defaultMode: q,
      storageManager: D,
      storageWindow: M,
      noSsr: j
    });
    let ke = J, ge = Ue;
    H && (ke = X.mode, ge = X.colorScheme), process.env.NODE_ENV !== "production" && k && !z.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Re = ge || z.defaultColorScheme;
    z.vars && !k && (Re = z.defaultColorScheme);
    const me = E.useMemo(() => {
      const Me = z.generateThemeVars?.() || z.vars, ue = {
        ...z,
        components: U,
        colorSchemes: W,
        cssVarPrefix: L,
        vars: Me
      };
      if (typeof ue.generateSpacing == "function" && (ue.spacing = ue.generateSpacing()), Re) {
        const je = W[Re];
        je && typeof je == "object" && Object.keys(je).forEach((Ie) => {
          je[Ie] && typeof je[Ie] == "object" ? ue[Ie] = {
            ...ue[Ie],
            ...je[Ie]
          } : ue[Ie] = je[Ie];
        });
      }
      return l ? l(ue) : ue;
    }, [z, Re, U, W, L]), Z = z.colorSchemeSelector;
    lt(() => {
      if (ge && $ && Z && Z !== "media") {
        const Me = Z;
        let ue = Z;
        if (Me === "class" && (ue = ".%s"), Me === "data" && (ue = "[data-%s]"), Me?.startsWith("data-") && !Me.includes("%s") && (ue = `[${Me}="%s"]`), ue.startsWith("."))
          $.classList.remove(...K.map((je) => ue.substring(1).replace("%s", je))), $.classList.add(ue.substring(1).replace("%s", ge));
        else {
          const je = ue.replace("%s", ge).match(/\[([^\]]+)\]/);
          if (je) {
            const [Ie, Ot] = je[1].split("=");
            Ot || K.forEach((De) => {
              $.removeAttribute(Ie.replace(ge, De));
            }), $.setAttribute(Ie, Ot ? Ot.replace(/"|'/g, "") : "");
          } else
            $.setAttribute(ue, ge);
        }
      }
    }, [ge, Z, $, K]), E.useEffect(() => {
      let Me;
      if (O && I.current && P) {
        const ue = P.createElement("style");
        ue.appendChild(P.createTextNode(ju)), P.head.appendChild(ue), window.getComputedStyle(P.body), Me = setTimeout(() => {
          P.head.removeChild(ue);
        }, 1);
      }
      return () => {
        clearTimeout(Me);
      };
    }, [ge, O, P]), E.useEffect(() => (I.current = !0, () => {
      I.current = !1;
    }), []);
    const wt = E.useMemo(() => ({
      allColorSchemes: K,
      colorScheme: ge,
      darkColorScheme: Oe,
      lightColorScheme: fe,
      mode: ke,
      setColorScheme: $e,
      setMode: process.env.NODE_ENV === "production" ? F : (Me) => {
        me.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), F(Me);
      },
      systemMode: ie
    }), [K, ge, Oe, fe, ke, $e, F, ie, me.colorSchemeSelector]);
    let pt = !0;
    (f || z.cssVariables === !1 || H && V?.cssVarPrefix === L) && (pt = !1);
    const Ct = /* @__PURE__ */ T.jsxs(E.Fragment, {
      children: [/* @__PURE__ */ T.jsx(Pr, {
        themeId: A ? t : void 0,
        theme: me,
        children: R
      }), pt && /* @__PURE__ */ T.jsx(Rn, {
        styles: me.generateStyleSheets?.() || []
      })]
    });
    return H ? Ct : /* @__PURE__ */ T.jsx(u.Provider, {
      value: wt,
      children: Ct
    });
  }
  process.env.NODE_ENV !== "production" && (h.propTypes = {
    /**
     * The component tree.
     */
    children: n.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: n.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: n.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: n.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: n.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: n.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: n.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: n.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: n.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: n.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: n.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: n.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: n.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: n.object
  });
  const y = typeof a == "string" ? a : a.light, p = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: h,
    useColorScheme: d,
    getInitColorSchemeScript: (C) => Pu({
      colorSchemeStorageKey: i,
      defaultLightColorScheme: y,
      defaultDarkColorScheme: p,
      modeStorageKey: o,
      ...C
    })
  };
}
function Au(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const i = o[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...o.slice(1))})` : `, ${i}`;
  }
  return (o, ...i) => `var(--${e ? `${e}-` : ""}${o}${t(...i)})`;
}
const Ii = (e, t, r, o = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = r : i && typeof i == "object" && (i[s] = r) : i && typeof i == "object" && (i[s] || (i[s] = o.includes(s) ? [] : {}), i = i[s]);
  });
}, _u = (e, t, r) => {
  function o(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!r || r && !r([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  o(e);
}, Du = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Jo(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: o
  } = t || {}, i = {}, s = {}, a = {};
  return _u(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(l, c))) {
        const d = `--${r ? `${r}-` : ""}${l.join("-")}`, m = Du(l, c);
        Object.assign(i, {
          [d]: m
        }), Ii(s, l, `var(${d})`, u), Ii(a, l, `var(${d}, ${m})`, u);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: s,
    varsWithDefaults: a
  };
}
function Bu(e, t = {}) {
  const {
    getSelector: r = C,
    disableCssColorScheme: o,
    colorSchemeSelector: i,
    enableContrastVars: s
  } = t, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: d,
    css: m,
    varsWithDefaults: g
  } = Jo(u, t);
  let h = g;
  const y = {}, {
    [c]: p,
    ...S
  } = a;
  if (Object.entries(S || {}).forEach(([b, v]) => {
    const {
      vars: O,
      css: D,
      varsWithDefaults: M
    } = Jo(v, t);
    h = _e(h, M), y[b] = {
      css: D,
      vars: O
    };
  }), p) {
    const {
      css: b,
      vars: v,
      varsWithDefaults: O
    } = Jo(p, t);
    h = _e(h, O), y[c] = {
      css: b,
      vars: v
    };
  }
  function C(b, v) {
    let O = i;
    if (i === "class" && (O = ".%s"), i === "data" && (O = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (O = `[${i}="%s"]`), b) {
      if (O === "media")
        return e.defaultColorScheme === b ? ":root" : {
          [`@media (prefers-color-scheme: ${a[b]?.palette?.mode || b})`]: {
            ":root": v
          }
        };
      if (O)
        return e.defaultColorScheme === b ? `:root, ${O.replace("%s", String(b))}` : O.replace("%s", String(b));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let b = {
        ...d
      };
      return Object.entries(y).forEach(([, {
        vars: v
      }]) => {
        b = _e(b, v);
      }), b;
    },
    generateStyleSheets: () => {
      const b = [], v = e.defaultColorScheme || "light";
      function O(P, $) {
        Object.keys($).length && b.push(typeof P == "string" ? {
          [P]: {
            ...$
          }
        } : P);
      }
      O(r(void 0, {
        ...m
      }), m);
      const {
        [v]: D,
        ...M
      } = y;
      if (D) {
        const {
          css: P
        } = D, $ = a[v]?.palette?.mode, B = !o && $ ? {
          colorScheme: $,
          ...P
        } : {
          ...P
        };
        O(r(v, {
          ...B
        }), B);
      }
      return Object.entries(M).forEach(([P, {
        css: $
      }]) => {
        const B = a[P]?.palette?.mode, f = !o && B ? {
          colorScheme: B,
          ...$
        } : {
          ...$
        };
        O(r(P, {
          ...f
        }), f);
      }), s && b.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), b;
    }
  };
}
function Fu(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const zu = Po(), Lu = uu("div", {
  name: "MuiStack",
  slot: "Root"
});
function Vu(e) {
  return pu({
    props: e,
    name: "MuiStack",
    defaultTheme: zu
  });
}
function Wu(e, t) {
  const r = E.Children.toArray(e).filter(Boolean);
  return r.reduce((o, i, s) => (o.push(i), s < r.length - 1 && o.push(/* @__PURE__ */ E.cloneElement(t, {
    key: `separator-${s}`
  })), o), []);
}
const Uu = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Hu = ({
  ownerState: e,
  theme: t
}) => {
  let r = {
    display: "flex",
    flexDirection: "column",
    ...Qe({
      theme: t
    }, qo({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (o) => ({
      flexDirection: o
    }))
  };
  if (e.spacing) {
    const o = To(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = qo({
      values: e.direction,
      base: i
    }), a = qo({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const g = u > 0 ? s[d[u - 1]] : "column";
        s[c] = g;
      }
    }), r = _e(r, Qe({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: Bt(o, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Uu(u ? s[u] : e.direction)}`]: Bt(o, c)
      }
    }));
  }
  return r = Xl(t.breakpoints, r), r;
};
function qu(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Lu,
    useThemeProps: r = Vu,
    componentName: o = "MuiStack"
  } = e, i = () => Ce({
    root: ["root"]
  }, (c) => be(o, c), {}), s = t(Hu), a = /* @__PURE__ */ E.forwardRef(function(c, u) {
    const d = r(c), m = On(d), {
      component: g = "div",
      direction: h = "column",
      spacing: y = 0,
      divider: p,
      children: S,
      className: C,
      useFlexGap: R = !1,
      ...w
    } = m, b = {
      direction: h,
      spacing: y,
      useFlexGap: R
    }, v = i();
    return /* @__PURE__ */ T.jsx(s, {
      as: g,
      ownerState: b,
      ref: u,
      className: oe(v.root, C),
      ...w,
      children: p ? Wu(S, p) : S
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: n.node,
    direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
    divider: n.node,
    spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
  }), a;
}
const kr = {
  black: "#000",
  white: "#fff"
}, Yu = {
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
}, Wt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ut = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ur = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ht = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, qt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Yt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Hs() {
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
      paper: kr.white,
      default: kr.white
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
const qs = Hs();
function Ys() {
  return {
    text: {
      primary: kr.white,
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
      active: kr.white,
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
const an = Ys();
function Ai(e, t, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = No(e.main, i) : t === "dark" && (e.dark = $o(e.main, s)));
}
function _i(e, t, r, o, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[r] || (t.hasOwnProperty(o) ? t[r] = t[o] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Gu(e = "light") {
  return e === "dark" ? {
    main: Ht[200],
    light: Ht[50],
    dark: Ht[400]
  } : {
    main: Ht[700],
    light: Ht[400],
    dark: Ht[800]
  };
}
function Ku(e = "light") {
  return e === "dark" ? {
    main: Wt[200],
    light: Wt[50],
    dark: Wt[400]
  } : {
    main: Wt[500],
    light: Wt[300],
    dark: Wt[700]
  };
}
function Xu(e = "light") {
  return e === "dark" ? {
    main: Ut[500],
    light: Ut[300],
    dark: Ut[700]
  } : {
    main: Ut[700],
    light: Ut[400],
    dark: Ut[800]
  };
}
function Ju(e = "light") {
  return e === "dark" ? {
    main: qt[400],
    light: qt[300],
    dark: qt[700]
  } : {
    main: qt[700],
    light: qt[500],
    dark: qt[900]
  };
}
function Qu(e = "light") {
  return e === "dark" ? {
    main: Yt[400],
    light: Yt[300],
    dark: Yt[700]
  } : {
    main: Yt[800],
    light: Yt[500],
    dark: Yt[900]
  };
}
function Zu(e = "light") {
  return e === "dark" ? {
    main: ur[400],
    light: ur[300],
    dark: ur[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ur[500],
    dark: ur[900]
  };
}
function ed(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function _n(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: o = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || Gu(t), l = e.secondary || Ku(t), c = e.error || Xu(t), u = e.info || Ju(t), d = e.success || Qu(t), m = e.warning || Zu(t);
  function g(S) {
    if (i)
      return ed(S);
    const C = Ri(S, an.text.primary) >= r ? an.text.primary : qs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = Ri(S, C);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${C} on ${S}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const h = ({
    color: S,
    name: C,
    mainShade: R = 500,
    lightShade: w = 300,
    darkShade: b = 700
  }) => {
    if (S = {
      ...S
    }, !S.main && S[R] && (S.main = S[R]), !S.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : at(11, C ? ` (${C})` : "", R));
    if (typeof S.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(S.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : at(12, C ? ` (${C})` : "", JSON.stringify(S.main)));
    return i ? (_i(i, S, "light", w, o), _i(i, S, "dark", b, o)) : (Ai(S, "light", w, o), Ai(S, "dark", b, o)), S.contrastText || (S.contrastText = g(S.main)), S;
  };
  let y;
  return t === "light" ? y = Hs() : t === "dark" && (y = Ys()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), _e({
    // A collection of common colors.
    common: {
      ...kr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Yu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...y
  }, s);
}
function td(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [i, s] = o;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function rd(e, t) {
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
    ...t
  };
}
function od(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Di = {
  textTransform: "uppercase"
}, Bi = '"Roboto", "Helvetica", "Arial", sans-serif';
function Gs(e, t) {
  const {
    fontFamily: r = Bi,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: d,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = o / 14, h = d || ((S) => `${S / c * g}rem`), y = (S, C, R, w, b) => ({
    fontFamily: r,
    fontWeight: S,
    fontSize: h(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Bi ? {
      letterSpacing: `${od(w / C)}em`
    } : {},
    ...b,
    ...u
  }), p = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, Di),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, Di),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return _e({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...p
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const nd = 0.2, id = 0.14, sd = 0.12;
function ye(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${nd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${id})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${sd})`].join(",");
}
const ad = ["none", ye(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ye(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ye(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ye(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ye(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ye(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ye(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ye(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ye(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ye(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ye(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ye(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ye(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ye(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ye(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ye(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ye(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ye(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ye(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ye(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ye(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ye(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ye(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ye(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ld = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, cd = {
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
function Fi(e) {
  return `${Math.round(e)}ms`;
}
function ud(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function dd(e) {
  const t = {
    ...ld,
    ...e.easing
  }, r = {
    ...cd,
    ...e.duration
  };
  return {
    getAutoHeightDuration: ud,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Fi(a)} ${l} ${typeof c == "string" ? c : Fi(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const pd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function fd(e) {
  return et(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ks(e = {}) {
  const t = {
    ...e
  };
  function r(o) {
    const i = Object.entries(o);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !fd(l) || a.startsWith("unstable_") ? delete o[a] : et(l) && (o[a] = {
        ...l
      }, r(o[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function zi(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const md = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let o = 0; o < t.length; o += 1)
    r += +t[o];
  return r;
};
function hd(e) {
  Object.assign(e, {
    alpha(t, r) {
      const o = this || e;
      return o.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : o.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : so(t, md(r));
    },
    lighten(t, r) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #fff ${zi(r)})` : No(t, r);
    },
    darken(t, r) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #000 ${zi(r)})` : $o(t, r);
    }
  });
}
function ln(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: o = {},
    spacing: i,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    colorSpace: u,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : at(20));
  const m = _n({
    ...s,
    colorSpace: u
  }), g = Po(e);
  let h = _e(g, {
    mixins: rd(g.breakpoints, o),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ad.slice(),
    typography: Gs(m, l),
    transitions: dd(a),
    zIndex: {
      ...pd
    }
  });
  if (h = _e(h, d), h = t.reduce((y, p) => _e(y, p), h), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (S, C) => {
      let R;
      for (R in S) {
        const w = S[R];
        if (y.includes(R) && Object.keys(w).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const b = be("", R);
            console.error([`MUI: The \`${C}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(S, null, 2), "", `Instead, you need to use the '&.${b}' syntax:`, JSON.stringify({
              root: {
                [`&.${b}`]: w
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          S[R] = {};
        }
      }
    };
    Object.keys(h.components).forEach((S) => {
      const C = h.components[S].styleOverrides;
      C && S.startsWith("Mui") && p(C, S);
    });
  }
  return h.unstable_sxConfig = {
    ...Ar,
    ...d?.unstable_sxConfig
  }, h.unstable_sx = function(p) {
    return bt({
      sx: p,
      theme: this
    });
  }, h.toRuntimeSource = Ks, hd(h), h;
}
function cn(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const gd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = cn(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Xs(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Js(e) {
  return e === "dark" ? gd : [];
}
function yd(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: o,
    colorSpace: i,
    ...s
  } = e, a = _n({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...Xs(a.mode),
      ...r
    },
    overlays: o || Js(a.mode),
    ...s
  };
}
function bd(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const vd = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], xd = (e) => (t, r) => {
  const o = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return vd(e.cssVarPrefix).forEach((l) => {
        a[l] = r[l], delete r[l];
      }), s === "media" ? {
        [o]: r,
        "@media (prefers-color-scheme: dark)": {
          [o]: a
        }
      } : s ? {
        [s.replace("%s", t)]: a,
        [`${o}, ${s.replace("%s", t)}`]: r
      } : {
        [o]: {
          ...r,
          ...a
        }
      };
    }
    if (s && s !== "media")
      return `${o}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [o]: r
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return o;
};
function Sd(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function _(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function gr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Fs(e);
}
function it(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = hr(gr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Td(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ze = (e) => {
  try {
    return e();
  } catch {
  }
}, Ed = (e = "mui") => Au(e);
function Qo(e, t, r, o, i) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const s = i === "dark" ? "dark" : "light";
  if (!o) {
    t[i] = yd({
      ...r,
      palette: {
        mode: s,
        ...r?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...l
  } = ln({
    ...o,
    palette: {
      mode: s,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[i] = {
    ...r,
    palette: a,
    opacity: {
      ...Xs(s),
      ...r?.opacity
    },
    overlays: r?.overlays || Js(s)
  }, l;
}
function wd(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = bd,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, m = Object.keys(r)[0], g = o || (r.light && m !== "light" ? "light" : m), h = Ed(s), {
    [g]: y,
    light: p,
    dark: S,
    ...C
  } = r, R = {
    ...C
  };
  let w = y;
  if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (w = !0), !w)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : at(21, g));
  let b;
  a && (b = "oklch");
  const v = Qo(b, R, w, d, g);
  p && !R.light && Qo(b, R, p, void 0, "light"), S && !R.dark && Qo(b, R, S, void 0, "dark");
  let O = {
    defaultColorScheme: g,
    ...v,
    cssVarPrefix: s,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: h,
    colorSchemes: R,
    font: {
      ...td(v.typography),
      ...v.font
    },
    spacing: Td(d.spacing)
  };
  Object.keys(O.colorSchemes).forEach((B) => {
    const f = O.colorSchemes[B].palette, N = (j) => {
      const I = j.split("-"), V = I[1], X = I[2];
      return h(j, f[V][X]);
    };
    f.mode === "light" && (_(f.common, "background", "#fff"), _(f.common, "onBackground", "#000")), f.mode === "dark" && (_(f.common, "background", "#000"), _(f.common, "onBackground", "#fff"));
    function k(j, I, V) {
      if (b) {
        let X;
        return j === Pt && (X = `transparent ${((1 - V) * 100).toFixed(0)}%`), j === le && (X = `#000 ${(V * 100).toFixed(0)}%`), j === ce && (X = `#fff ${(V * 100).toFixed(0)}%`), `color-mix(in ${b}, ${I}, ${X})`;
      }
      return j(I, V);
    }
    if (Sd(f, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), f.mode === "light") {
      _(f.Alert, "errorColor", k(le, f.error.light, 0.6)), _(f.Alert, "infoColor", k(le, f.info.light, 0.6)), _(f.Alert, "successColor", k(le, f.success.light, 0.6)), _(f.Alert, "warningColor", k(le, f.warning.light, 0.6)), _(f.Alert, "errorFilledBg", N("palette-error-main")), _(f.Alert, "infoFilledBg", N("palette-info-main")), _(f.Alert, "successFilledBg", N("palette-success-main")), _(f.Alert, "warningFilledBg", N("palette-warning-main")), _(f.Alert, "errorFilledColor", Ze(() => f.getContrastText(f.error.main))), _(f.Alert, "infoFilledColor", Ze(() => f.getContrastText(f.info.main))), _(f.Alert, "successFilledColor", Ze(() => f.getContrastText(f.success.main))), _(f.Alert, "warningFilledColor", Ze(() => f.getContrastText(f.warning.main))), _(f.Alert, "errorStandardBg", k(ce, f.error.light, 0.9)), _(f.Alert, "infoStandardBg", k(ce, f.info.light, 0.9)), _(f.Alert, "successStandardBg", k(ce, f.success.light, 0.9)), _(f.Alert, "warningStandardBg", k(ce, f.warning.light, 0.9)), _(f.Alert, "errorIconColor", N("palette-error-main")), _(f.Alert, "infoIconColor", N("palette-info-main")), _(f.Alert, "successIconColor", N("palette-success-main")), _(f.Alert, "warningIconColor", N("palette-warning-main")), _(f.AppBar, "defaultBg", N("palette-grey-100")), _(f.Avatar, "defaultBg", N("palette-grey-400")), _(f.Button, "inheritContainedBg", N("palette-grey-300")), _(f.Button, "inheritContainedHoverBg", N("palette-grey-A100")), _(f.Chip, "defaultBorder", N("palette-grey-400")), _(f.Chip, "defaultAvatarColor", N("palette-grey-700")), _(f.Chip, "defaultIconColor", N("palette-grey-700")), _(f.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), _(f.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), _(f.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), _(f.LinearProgress, "primaryBg", k(ce, f.primary.main, 0.62)), _(f.LinearProgress, "secondaryBg", k(ce, f.secondary.main, 0.62)), _(f.LinearProgress, "errorBg", k(ce, f.error.main, 0.62)), _(f.LinearProgress, "infoBg", k(ce, f.info.main, 0.62)), _(f.LinearProgress, "successBg", k(ce, f.success.main, 0.62)), _(f.LinearProgress, "warningBg", k(ce, f.warning.main, 0.62)), _(f.Skeleton, "bg", b ? k(Pt, f.text.primary, 0.11) : `rgba(${N("palette-text-primaryChannel")} / 0.11)`), _(f.Slider, "primaryTrack", k(ce, f.primary.main, 0.62)), _(f.Slider, "secondaryTrack", k(ce, f.secondary.main, 0.62)), _(f.Slider, "errorTrack", k(ce, f.error.main, 0.62)), _(f.Slider, "infoTrack", k(ce, f.info.main, 0.62)), _(f.Slider, "successTrack", k(ce, f.success.main, 0.62)), _(f.Slider, "warningTrack", k(ce, f.warning.main, 0.62));
      const j = b ? k(le, f.background.default, 0.6825) : Yr(f.background.default, 0.8);
      _(f.SnackbarContent, "bg", j), _(f.SnackbarContent, "color", Ze(() => b ? an.text.primary : f.getContrastText(j))), _(f.SpeedDialAction, "fabHoverBg", Yr(f.background.paper, 0.15)), _(f.StepConnector, "border", N("palette-grey-400")), _(f.StepContent, "border", N("palette-grey-400")), _(f.Switch, "defaultColor", N("palette-common-white")), _(f.Switch, "defaultDisabledColor", N("palette-grey-100")), _(f.Switch, "primaryDisabledColor", k(ce, f.primary.main, 0.62)), _(f.Switch, "secondaryDisabledColor", k(ce, f.secondary.main, 0.62)), _(f.Switch, "errorDisabledColor", k(ce, f.error.main, 0.62)), _(f.Switch, "infoDisabledColor", k(ce, f.info.main, 0.62)), _(f.Switch, "successDisabledColor", k(ce, f.success.main, 0.62)), _(f.Switch, "warningDisabledColor", k(ce, f.warning.main, 0.62)), _(f.TableCell, "border", k(ce, k(Pt, f.divider, 1), 0.88)), _(f.Tooltip, "bg", k(Pt, f.grey[700], 0.92));
    }
    if (f.mode === "dark") {
      _(f.Alert, "errorColor", k(ce, f.error.light, 0.6)), _(f.Alert, "infoColor", k(ce, f.info.light, 0.6)), _(f.Alert, "successColor", k(ce, f.success.light, 0.6)), _(f.Alert, "warningColor", k(ce, f.warning.light, 0.6)), _(f.Alert, "errorFilledBg", N("palette-error-dark")), _(f.Alert, "infoFilledBg", N("palette-info-dark")), _(f.Alert, "successFilledBg", N("palette-success-dark")), _(f.Alert, "warningFilledBg", N("palette-warning-dark")), _(f.Alert, "errorFilledColor", Ze(() => f.getContrastText(f.error.dark))), _(f.Alert, "infoFilledColor", Ze(() => f.getContrastText(f.info.dark))), _(f.Alert, "successFilledColor", Ze(() => f.getContrastText(f.success.dark))), _(f.Alert, "warningFilledColor", Ze(() => f.getContrastText(f.warning.dark))), _(f.Alert, "errorStandardBg", k(le, f.error.light, 0.9)), _(f.Alert, "infoStandardBg", k(le, f.info.light, 0.9)), _(f.Alert, "successStandardBg", k(le, f.success.light, 0.9)), _(f.Alert, "warningStandardBg", k(le, f.warning.light, 0.9)), _(f.Alert, "errorIconColor", N("palette-error-main")), _(f.Alert, "infoIconColor", N("palette-info-main")), _(f.Alert, "successIconColor", N("palette-success-main")), _(f.Alert, "warningIconColor", N("palette-warning-main")), _(f.AppBar, "defaultBg", N("palette-grey-900")), _(f.AppBar, "darkBg", N("palette-background-paper")), _(f.AppBar, "darkColor", N("palette-text-primary")), _(f.Avatar, "defaultBg", N("palette-grey-600")), _(f.Button, "inheritContainedBg", N("palette-grey-800")), _(f.Button, "inheritContainedHoverBg", N("palette-grey-700")), _(f.Chip, "defaultBorder", N("palette-grey-700")), _(f.Chip, "defaultAvatarColor", N("palette-grey-300")), _(f.Chip, "defaultIconColor", N("palette-grey-300")), _(f.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), _(f.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), _(f.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), _(f.LinearProgress, "primaryBg", k(le, f.primary.main, 0.5)), _(f.LinearProgress, "secondaryBg", k(le, f.secondary.main, 0.5)), _(f.LinearProgress, "errorBg", k(le, f.error.main, 0.5)), _(f.LinearProgress, "infoBg", k(le, f.info.main, 0.5)), _(f.LinearProgress, "successBg", k(le, f.success.main, 0.5)), _(f.LinearProgress, "warningBg", k(le, f.warning.main, 0.5)), _(f.Skeleton, "bg", b ? k(Pt, f.text.primary, 0.13) : `rgba(${N("palette-text-primaryChannel")} / 0.13)`), _(f.Slider, "primaryTrack", k(le, f.primary.main, 0.5)), _(f.Slider, "secondaryTrack", k(le, f.secondary.main, 0.5)), _(f.Slider, "errorTrack", k(le, f.error.main, 0.5)), _(f.Slider, "infoTrack", k(le, f.info.main, 0.5)), _(f.Slider, "successTrack", k(le, f.success.main, 0.5)), _(f.Slider, "warningTrack", k(le, f.warning.main, 0.5));
      const j = b ? k(ce, f.background.default, 0.985) : Yr(f.background.default, 0.98);
      _(f.SnackbarContent, "bg", j), _(f.SnackbarContent, "color", Ze(() => b ? qs.text.primary : f.getContrastText(j))), _(f.SpeedDialAction, "fabHoverBg", Yr(f.background.paper, 0.15)), _(f.StepConnector, "border", N("palette-grey-600")), _(f.StepContent, "border", N("palette-grey-600")), _(f.Switch, "defaultColor", N("palette-grey-300")), _(f.Switch, "defaultDisabledColor", N("palette-grey-600")), _(f.Switch, "primaryDisabledColor", k(le, f.primary.main, 0.55)), _(f.Switch, "secondaryDisabledColor", k(le, f.secondary.main, 0.55)), _(f.Switch, "errorDisabledColor", k(le, f.error.main, 0.55)), _(f.Switch, "infoDisabledColor", k(le, f.info.main, 0.55)), _(f.Switch, "successDisabledColor", k(le, f.success.main, 0.55)), _(f.Switch, "warningDisabledColor", k(le, f.warning.main, 0.55)), _(f.TableCell, "border", k(le, k(Pt, f.divider, 1), 0.68)), _(f.Tooltip, "bg", k(Pt, f.grey[700], 0.92));
    }
    it(f.background, "default"), it(f.background, "paper"), it(f.common, "background"), it(f.common, "onBackground"), it(f, "divider"), Object.keys(f).forEach((j) => {
      const I = f[j];
      j !== "tonalOffset" && I && typeof I == "object" && (I.main && _(f[j], "mainChannel", hr(gr(I.main))), I.light && _(f[j], "lightChannel", hr(gr(I.light))), I.dark && _(f[j], "darkChannel", hr(gr(I.dark))), I.contrastText && _(f[j], "contrastTextChannel", hr(gr(I.contrastText))), j === "text" && (it(f[j], "primary"), it(f[j], "secondary")), j === "action" && (I.active && it(f[j], "active"), I.selected && it(f[j], "selected")));
    });
  }), O = t.reduce((B, f) => _e(B, f), O);
  const D = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: xd(O),
    enableContrastVars: a
  }, {
    vars: M,
    generateThemeVars: P,
    generateStyleSheets: $
  } = Bu(O, D);
  return O.vars = M, Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([B, f]) => {
    O[B] = f;
  }), O.generateThemeVars = P, O.generateStyleSheets = $, O.generateSpacing = function() {
    return js(d.spacing, To(this));
  }, O.getColorSchemeSelector = Fu(c), O.spacing = O.generateSpacing(), O.shouldSkipGeneratingVar = l, O.unstable_sxConfig = {
    ...Ar,
    ...d?.unstable_sxConfig
  }, O.unstable_sx = function(f) {
    return bt({
      sx: f,
      theme: this
    });
  }, O.toRuntimeSource = Ks, O;
}
function Li(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: _n({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ao(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: o = !1,
    colorSchemes: i = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r?.mode,
    ...a
  } = e, l = s || "light", c = i?.[l], u = {
    ...i,
    ...r ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return ln(e, ...t);
    let d = r;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const m = ln({
      ...e,
      palette: d
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, Li(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, Li(m, "light", u.light)), m;
  }
  return !r && !("light" in u) && l === "light" && (u.light = !0), wd({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof o != "boolean" && o
  }, ...t);
}
const Dn = Ao(), tt = "$$material";
function _r() {
  const e = ko(Dn);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[tt] || e;
}
function Qs(e) {
  return /* @__PURE__ */ T.jsx(kn, {
    ...e,
    defaultTheme: Dn,
    themeId: tt
  });
}
process.env.NODE_ENV !== "production" && (Qs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function Cd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Vt = (e) => Cd(e) && e !== "classes", te = Ds({
  themeId: tt,
  defaultTheme: Dn,
  rootShouldForwardProp: Vt
});
function Zs(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ T.jsx(Qs, {
        styles: typeof e == "function" ? (o) => e({
          theme: o,
          ...r
        }) : e
      })
    );
  };
}
function Od() {
  return On;
}
const xe = Ou;
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function Se(e) {
  return Tu(e);
}
function Rd(e) {
  return be("MuiSvgIcon", e);
}
he("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Pd = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ee(t)}`, `fontSize${ee(r)}`]
  };
  return Ce(i, Rd, o);
}, kd = te("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ee(r.color)}`], t[`fontSize${ee(r.fontSize)}`]];
  }
})(xe(({
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
      props: (t) => !t.hasSvgAsChild,
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
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
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
}))), lo = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: m,
    viewBox: g = "0 0 24 24",
    ...h
  } = o, y = /* @__PURE__ */ E.isValidElement(i) && i.type === "svg", p = {
    ...o,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: g,
    hasSvgAsChild: y
  }, S = {};
  d || (S.viewBox = g);
  const C = Pd(p);
  return /* @__PURE__ */ T.jsxs(kd, {
    as: l,
    className: oe(C.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r,
    ...S,
    ...h,
    ...y && i.props,
    ownerState: p,
    children: [y ? i.props.children : i, m ? /* @__PURE__ */ T.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (lo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
lo.muiName = "SvgIcon";
function Ne(e, t) {
  function r(o, i) {
    return /* @__PURE__ */ T.jsx(lo, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = lo.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(r));
}
function Md(e, t = 166) {
  let r;
  function o(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return o.clear = () => {
    clearTimeout(r);
  }, o;
}
function Ge(e) {
  return e && e.ownerDocument || document;
}
function Ft(e) {
  return Ge(e).defaultView || window;
}
function Vi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ea(e) {
  const {
    controlled: t,
    default: r,
    name: o,
    state: i = "value"
  } = e, {
    current: s
  } = E.useRef(t !== void 0), [a, l] = E.useState(r), c = s ? t : a;
  if (process.env.NODE_ENV !== "production") {
    E.useEffect(() => {
      s !== (t !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${i} state of ${o} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [i, o, t]);
    const {
      current: d
    } = E.useRef(r);
    E.useEffect(() => {
      !s && !Object.is(d, r) && console.error([`MUI: A component is changing the default ${i} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const u = E.useCallback((d) => {
    s || l(d);
  }, []);
  return [c, u];
}
function yt(e) {
  const t = E.useRef(e);
  return lt(() => {
    t.current = e;
  }), E.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Le(...e) {
  const t = E.useRef(void 0), r = E.useCallback((o) => {
    const i = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const a = s, l = a(o);
        return typeof l == "function" ? l : () => {
          a(null);
        };
      }
      return s.current = o, () => {
        s.current = null;
      };
    });
    return () => {
      i.forEach((s) => s?.());
    };
  }, e);
  return E.useMemo(() => e.every((o) => o == null) ? null : (o) => {
    t.current && (t.current(), t.current = void 0), o != null && (t.current = r(o));
  }, e);
}
function $d(e, t) {
  const r = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && r >= 65 && r <= 90 && typeof t == "function";
}
function Nd(e, t) {
  if (!e)
    return t;
  function r(a, l) {
    const c = {};
    return Object.keys(l).forEach((u) => {
      $d(u, l[u]) && typeof a[u] == "function" && (c[u] = (...d) => {
        a[u](...d), l[u](...d);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const l = typeof t == "function" ? t(a) : t, c = typeof e == "function" ? e({
        ...a,
        ...l
      }) : e, u = oe(a?.className, l?.className, c?.className), d = r(c, l);
      return {
        ...l,
        ...c,
        ...d,
        ...!!u && {
          className: u
        },
        ...l?.style && c?.style && {
          style: {
            ...l.style,
            ...c.style
          }
        },
        ...l?.sx && c?.sx && {
          sx: [...Array.isArray(l.sx) ? l.sx : [l.sx], ...Array.isArray(c.sx) ? c.sx : [c.sx]]
        }
      };
    };
  const o = t, i = r(e, o), s = oe(o?.className, e?.className);
  return {
    ...t,
    ...e,
    ...i,
    ...!!s && {
      className: s
    },
    ...o?.style && e?.style && {
      style: {
        ...o.style,
        ...e.style
      }
    },
    ...o?.sx && e?.sx && {
      sx: [...Array.isArray(o.sx) ? o.sx : [o.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
const ta = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle"), jd = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutline"), Id = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z"
}), "Sync"), Wi = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33m-7.14-.94 2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64z"
}), "SyncDisabled");
function St(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function Ad(e) {
  return typeof e.main == "string";
}
function _d(e, t = []) {
  if (!Ad(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function ct(e = []) {
  return ([, t]) => t && _d(t, e);
}
const Tt = n.oneOfType([n.func, n.object]);
function Dd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Bd(e, t, r, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Dd(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ra = St(n.elementType, Bd);
function co(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Ui = {};
function oa(e, t) {
  const r = E.useRef(Ui);
  return r.current === Ui && (r.current = e(t)), r;
}
class uo {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new uo();
  }
  static use() {
    const t = oa(uo.create).current, [r, o] = E.useState(!1);
    return t.shouldMount = r, t.setShouldMount = o, E.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = zd(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function Fd() {
  return uo.use();
}
function zd() {
  let e, t;
  const r = new Promise((o, i) => {
    e = o, t = i;
  });
  return r.resolve = e, r.reject = t, r;
}
function un() {
  return un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, un.apply(null, arguments);
}
function na(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.indexOf(o) !== -1) continue;
    r[o] = e[o];
  }
  return r;
}
function dn(e, t) {
  return dn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, dn(e, t);
}
function ia(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, dn(e, t);
}
const Hi = {
  disabled: !1
};
var Ld = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]);
const po = ne.createContext(null);
var Vd = function(t) {
  return t.scrollTop;
}, yr = "unmounted", $t = "exited", Nt = "entering", Xt = "entered", pn = "exiting", nt = /* @__PURE__ */ function(e) {
  ia(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = i, l = a && !a.isMounting ? o.enter : o.appear, c;
    return s.appearStatus = null, o.in ? l ? (c = $t, s.appearStatus = Nt) : c = Xt : o.unmountOnExit || o.mountOnEnter ? c = yr : c = $t, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === yr ? {
      status: $t
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Nt && a !== Xt && (s = Nt) : (a === Nt || a === Xt) && (s = pn);
    }
    this.updateStatus(!1, s);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, r.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Nt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Vr.findDOMNode(this);
          a && Vd(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === $t && this.setState({
      status: yr
    });
  }, r.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Vr.findDOMNode(this), l], u = c[0], d = c[1], m = this.getTimeouts(), g = l ? m.appear : m.enter;
    if (!i && !a || Hi.disabled) {
      this.safeSetState({
        status: Xt
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Nt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(g, function() {
        s.safeSetState({
          status: Xt
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Vr.findDOMNode(this);
    if (!s || Hi.disabled) {
      this.safeSetState({
        status: $t
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: pn
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: $t
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, r.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Vr.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === yr)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = na(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ne.createElement(po.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : ne.cloneElement(ne.Children.only(a), l))
    );
  }, t;
}(ne.Component);
nt.contextType = po;
nt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, r, o, i, s) {
      var a = e[t];
      return n.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, o, i, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = Ld;
    t.addEndListener || (r = r.isRequired);
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
      i[s - 1] = arguments[s];
    return r.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function Gt() {
}
nt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Gt,
  onEntering: Gt,
  onEntered: Gt,
  onExit: Gt,
  onExiting: Gt,
  onExited: Gt
};
nt.UNMOUNTED = yr;
nt.EXITED = $t;
nt.ENTERING = Nt;
nt.ENTERED = Xt;
nt.EXITING = pn;
function Wd(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bn(e, t) {
  var r = function(s) {
    return t && Zr(s) ? t(s) : s;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && El.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = r(i);
  }), o;
}
function Ud(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var o = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (o[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (o[c])
      for (a = 0; a < o[c].length; a++) {
        var u = o[c][a];
        l[o[c][a]] = r(u);
      }
    l[c] = r(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = r(i[a]);
  return l;
}
function It(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Hd(e, t) {
  return Bn(e.children, function(r) {
    return eo(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: It(r, "appear", e),
      enter: It(r, "enter", e),
      exit: It(r, "exit", e)
    });
  });
}
function qd(e, t, r) {
  var o = Bn(e.children), i = Ud(t, o);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (Zr(a)) {
      var l = s in t, c = s in o, u = t[s], d = Zr(u) && !u.props.in;
      c && (!l || d) ? i[s] = eo(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: It(a, "exit", e),
        enter: It(a, "enter", e)
      }) : !c && l && !d ? i[s] = eo(a, {
        in: !1
      }) : c && l && Zr(u) && (i[s] = eo(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: It(a, "exit", e),
        enter: It(a, "enter", e)
      }));
    }
  }), i;
}
var Yd = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Gd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Fn = /* @__PURE__ */ function(e) {
  ia(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = s.handleExited.bind(Wd(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Hd(i, l) : qd(i, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(i, s) {
    var a = Bn(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = un({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = na(i, ["component", "childFactory"]), c = this.state.contextValue, u = Yd(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ ne.createElement(po.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ne.createElement(po.Provider, {
      value: c
    }, /* @__PURE__ */ ne.createElement(s, l, u));
  }, t;
}(ne.Component);
Fn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: n.func
} : {};
Fn.defaultProps = Gd;
const Kd = [];
function Xd(e) {
  E.useEffect(e, Kd);
}
class _o {
  static create() {
    return new _o();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function Jt() {
  const e = oa(_o.create).current;
  return Xd(e.disposeEffect), e;
}
function sa(e) {
  const {
    className: t,
    classes: r,
    pulsate: o = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, m] = E.useState(!1), g = oe(t, r.ripple, r.rippleVisible, o && r.ripplePulsate), h = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, y = oe(r.child, d && r.childLeaving, o && r.childPulsate);
  return !l && !d && m(!0), E.useEffect(() => {
    if (!l && c != null) {
      const p = setTimeout(c, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ T.jsx("span", {
    className: g,
    style: h,
    children: /* @__PURE__ */ T.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (sa.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const He = he("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), fn = 550, Jd = 80, Qd = nr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Zd = nr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ep = nr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, tp = te("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), rp = te(sa, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${He.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Qd};
    animation-duration: ${fn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${He.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${He.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${He.childLeaving} {
    opacity: 0;
    animation-name: ${Zd};
    animation-duration: ${fn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${He.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ep};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, aa = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...l
  } = o, [c, u] = E.useState([]), d = E.useRef(0), m = E.useRef(null);
  E.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const g = E.useRef(!1), h = Jt(), y = E.useRef(null), p = E.useRef(null), S = E.useCallback((b) => {
    const {
      pulsate: v,
      rippleX: O,
      rippleY: D,
      rippleSize: M,
      cb: P
    } = b;
    u(($) => [...$, /* @__PURE__ */ T.jsx(rp, {
      classes: {
        ripple: oe(s.ripple, He.ripple),
        rippleVisible: oe(s.rippleVisible, He.rippleVisible),
        ripplePulsate: oe(s.ripplePulsate, He.ripplePulsate),
        child: oe(s.child, He.child),
        childLeaving: oe(s.childLeaving, He.childLeaving),
        childPulsate: oe(s.childPulsate, He.childPulsate)
      },
      timeout: fn,
      pulsate: v,
      rippleX: O,
      rippleY: D,
      rippleSize: M
    }, d.current)]), d.current += 1, m.current = P;
  }, [s]), C = E.useCallback((b = {}, v = {}, O = () => {
  }) => {
    const {
      pulsate: D = !1,
      center: M = i || v.pulsate,
      fakeElement: P = !1
      // For test purposes
    } = v;
    if (b?.type === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    b?.type === "touchstart" && (g.current = !0);
    const $ = P ? null : p.current, B = $ ? $.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let f, N, k;
    if (M || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      f = Math.round(B.width / 2), N = Math.round(B.height / 2);
    else {
      const {
        clientX: j,
        clientY: I
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      f = Math.round(j - B.left), N = Math.round(I - B.top);
    }
    if (M)
      k = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), k % 2 === 0 && (k += 1);
    else {
      const j = Math.max(Math.abs(($ ? $.clientWidth : 0) - f), f) * 2 + 2, I = Math.max(Math.abs(($ ? $.clientHeight : 0) - N), N) * 2 + 2;
      k = Math.sqrt(j ** 2 + I ** 2);
    }
    b?.touches ? y.current === null && (y.current = () => {
      S({
        pulsate: D,
        rippleX: f,
        rippleY: N,
        rippleSize: k,
        cb: O
      });
    }, h.start(Jd, () => {
      y.current && (y.current(), y.current = null);
    })) : S({
      pulsate: D,
      rippleX: f,
      rippleY: N,
      rippleSize: k,
      cb: O
    });
  }, [i, S, h]), R = E.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), w = E.useCallback((b, v) => {
    if (h.clear(), b?.type === "touchend" && y.current) {
      y.current(), y.current = null, h.start(0, () => {
        w(b, v);
      });
      return;
    }
    y.current = null, u((O) => O.length > 0 ? O.slice(1) : O), m.current = v;
  }, [h]);
  return E.useImperativeHandle(r, () => ({
    pulsate: R,
    start: C,
    stop: w
  }), [R, C, w]), /* @__PURE__ */ T.jsx(tp, {
    className: oe(He.root, s.root, a),
    ref: p,
    ...l,
    children: /* @__PURE__ */ T.jsx(Fn, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (aa.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
function op(e) {
  return be("MuiButtonBase", e);
}
const np = he("MuiButtonBase", ["root", "disabled", "focusVisible"]), ip = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: o,
    classes: i
  } = e, a = Ce({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, op, i);
  return r && o && (a.root += ` ${o}`), a;
}, sp = te("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${np.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Dr = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: m = !1,
    focusRipple: g = !1,
    focusVisibleClassName: h,
    LinkComponent: y = "a",
    onBlur: p,
    onClick: S,
    onContextMenu: C,
    onDragLeave: R,
    onFocus: w,
    onFocusVisible: b,
    onKeyDown: v,
    onKeyUp: O,
    onMouseDown: D,
    onMouseLeave: M,
    onMouseUp: P,
    onTouchEnd: $,
    onTouchMove: B,
    onTouchStart: f,
    tabIndex: N = 0,
    TouchRippleProps: k,
    touchRippleRef: j,
    type: I,
    ...V
  } = o, X = E.useRef(null), H = Fd(), x = Le(H.ref, j), [A, z] = E.useState(!1);
  u && A && z(!1), E.useImperativeHandle(i, () => ({
    focusVisible: () => {
      z(!0), X.current.focus();
    }
  }), []);
  const W = H.shouldMount && !d && !u;
  E.useEffect(() => {
    A && g && !d && H.pulsate();
  }, [d, g, A, H]);
  const U = st(H, "start", D, m), L = st(H, "stop", C, m), Y = st(H, "stop", R, m), K = st(H, "stop", P, m), G = st(H, "stop", (Z) => {
    A && Z.preventDefault(), M && M(Z);
  }, m), Q = st(H, "start", f, m), q = st(H, "stop", $, m), J = st(H, "stop", B, m), F = st(H, "stop", (Z) => {
    co(Z.target) || z(!1), p && p(Z);
  }, !1), ie = yt((Z) => {
    X.current || (X.current = Z.currentTarget), co(Z.target) && (z(!0), b && b(Z)), w && w(Z);
  }), fe = () => {
    const Z = X.current;
    return c && c !== "button" && !(Z.tagName === "A" && Z.href);
  }, Oe = yt((Z) => {
    g && !Z.repeat && A && Z.key === " " && H.stop(Z, () => {
      H.start(Z);
    }), Z.target === Z.currentTarget && fe() && Z.key === " " && Z.preventDefault(), v && v(Z), Z.target === Z.currentTarget && fe() && Z.key === "Enter" && !u && (Z.preventDefault(), S && S(Z));
  }), Ue = yt((Z) => {
    g && Z.key === " " && A && !Z.defaultPrevented && H.stop(Z, () => {
      H.pulsate(Z);
    }), O && O(Z), S && Z.target === Z.currentTarget && fe() && Z.key === " " && !Z.defaultPrevented && S(Z);
  });
  let $e = c;
  $e === "button" && (V.href || V.to) && ($e = y);
  const ke = {};
  $e === "button" ? (ke.type = I === void 0 ? "button" : I, ke.disabled = u) : (!V.href && !V.to && (ke.role = "button"), u && (ke["aria-disabled"] = u));
  const ge = Le(r, X), Re = {
    ...o,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: g,
    tabIndex: N,
    focusVisible: A
  }, me = ip(Re);
  return /* @__PURE__ */ T.jsxs(sp, {
    as: $e,
    className: oe(me.root, l),
    ownerState: Re,
    onBlur: F,
    onClick: S,
    onContextMenu: L,
    onFocus: ie,
    onKeyDown: Oe,
    onKeyUp: Ue,
    onMouseDown: U,
    onMouseLeave: G,
    onMouseUp: K,
    onDragLeave: Y,
    onTouchEnd: q,
    onTouchMove: J,
    onTouchStart: Q,
    ref: ge,
    tabIndex: u ? -1 : N,
    type: I,
    ...ke,
    ...V,
    children: [a, W ? /* @__PURE__ */ T.jsx(aa, {
      ref: x,
      center: s,
      ...k
    }) : null]
  });
});
function st(e, t, r, o = !1) {
  return yt((i) => (r && r(i), o || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (Dr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Tt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ra,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
function ap(e) {
  return be("MuiCircularProgress", e);
}
he("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const mt = 44, mn = nr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, hn = nr`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, lp = typeof mn != "string" ? Es`
        animation: ${mn} 1.4s linear infinite;
      ` : null, cp = typeof hn != "string" ? Es`
        animation: ${hn} 1.4s ease-in-out infinite;
      ` : null, up = (e) => {
  const {
    classes: t,
    variant: r,
    color: o,
    disableShrink: i
  } = e, s = {
    root: ["root", r, `color${ee(o)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ee(r)}`, i && "circleDisableShrink"]
  };
  return Ce(s, ap, t);
}, dp = te("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ee(r.color)}`]];
  }
})(xe(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: lp || {
      animation: `${mn} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), pp = te("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), fp = te("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ee(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(xe(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: cp || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${hn} 1.4s ease-in-out infinite`
    }
  }]
}))), zn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: s = "primary",
    disableShrink: a = !1,
    size: l = 40,
    style: c,
    thickness: u = 3.6,
    value: d = 0,
    variant: m = "indeterminate",
    ...g
  } = o, h = {
    ...o,
    color: s,
    disableShrink: a,
    size: l,
    thickness: u,
    value: d,
    variant: m
  }, y = up(h), p = {}, S = {}, C = {};
  if (m === "determinate") {
    const R = 2 * Math.PI * ((mt - u) / 2);
    p.strokeDasharray = R.toFixed(3), C["aria-valuenow"] = Math.round(d), p.strokeDashoffset = `${((100 - d) / 100 * R).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ T.jsx(dp, {
    className: oe(y.root, i),
    style: {
      width: l,
      height: l,
      ...S,
      ...c
    },
    ownerState: h,
    ref: r,
    role: "progressbar",
    ...C,
    ...g,
    children: /* @__PURE__ */ T.jsx(pp, {
      className: y.svg,
      ownerState: h,
      viewBox: `${mt / 2} ${mt / 2} ${mt} ${mt}`,
      children: /* @__PURE__ */ T.jsx(fp, {
        className: y.circle,
        style: p,
        ownerState: h,
        cx: mt,
        cy: mt,
        r: (mt - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (zn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: St(n.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: n.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: n.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: n.oneOf(["determinate", "indeterminate"])
});
function mp(e) {
  return be("MuiIconButton", e);
}
const qi = he("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), hp = (e) => {
  const {
    classes: t,
    disabled: r,
    color: o,
    edge: i,
    size: s,
    loading: a
  } = e, l = {
    root: ["root", a && "loading", r && "disabled", o !== "default" && `color${ee(o)}`, i && `edge${ee(i)}`, `size${ee(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Ce(l, mp, t);
}, gp = te(Dr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${ee(r.color)}`], r.edge && t[`edge${ee(r.edge)}`], t[`size${ee(r.size)}`]];
  }
})(xe(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), xe(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${qi.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${qi.loading}`]: {
    color: "transparent"
  }
}))), yp = te("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), la = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium",
    id: m,
    loading: g = null,
    loadingIndicator: h,
    ...y
  } = o, p = Io(m), S = h ?? /* @__PURE__ */ T.jsx(zn, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), C = {
    ...o,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    loading: g,
    loadingIndicator: S,
    size: d
  }, R = hp(C);
  return /* @__PURE__ */ T.jsxs(gp, {
    id: g ? p : m,
    className: oe(R.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c || g,
    ref: r,
    ...y,
    ownerState: C,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: R.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ T.jsx(yp, {
        className: R.loadingIndicator,
        ownerState: C,
        children: g && S
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (la.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: St(n.node, (e) => E.Children.toArray(e.children).some((r) => /* @__PURE__ */ E.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function bp(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ca(e, t, r, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !bp(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ir = St(n.element, ca);
ir.isRequired = St(n.element.isRequired, ca);
function Br(e) {
  return parseInt(E.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
const ua = (e) => e.scrollTop;
function fo(e, t) {
  const {
    timeout: r,
    easing: o,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o),
    delay: i.transitionDelay
  };
}
function gn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const vp = {
  entering: {
    opacity: 1,
    transform: gn(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Zo = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Mr = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    addEndListener: o,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: m,
    onExited: g,
    onExiting: h,
    style: y,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = nt,
    ...C
  } = t, R = Jt(), w = E.useRef(), b = _r(), v = E.useRef(null), O = Le(v, Br(s), r), D = (j) => (I) => {
    if (j) {
      const V = v.current;
      I === void 0 ? j(V) : j(V, I);
    }
  }, M = D(d), P = D((j, I) => {
    ua(j);
    const {
      duration: V,
      delay: X,
      easing: H
    } = fo({
      style: y,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let x;
    p === "auto" ? (x = b.transitions.getAutoHeightDuration(j.clientHeight), w.current = x) : x = V, j.style.transition = [b.transitions.create("opacity", {
      duration: x,
      delay: X
    }), b.transitions.create("transform", {
      duration: Zo ? x : x * 0.666,
      delay: X,
      easing: H
    })].join(","), c && c(j, I);
  }), $ = D(u), B = D(h), f = D((j) => {
    const {
      duration: I,
      delay: V,
      easing: X
    } = fo({
      style: y,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    let H;
    p === "auto" ? (H = b.transitions.getAutoHeightDuration(j.clientHeight), w.current = H) : H = I, j.style.transition = [b.transitions.create("opacity", {
      duration: H,
      delay: V
    }), b.transitions.create("transform", {
      duration: Zo ? H : H * 0.666,
      delay: Zo ? V : V || H * 0.333,
      easing: X
    })].join(","), j.style.opacity = 0, j.style.transform = gn(0.75), m && m(j);
  }), N = D(g), k = (j) => {
    p === "auto" && R.start(w.current || 0, j), o && o(v.current, j);
  };
  return /* @__PURE__ */ T.jsx(S, {
    appear: i,
    in: l,
    nodeRef: v,
    onEnter: P,
    onEntered: $,
    onEntering: M,
    onExit: f,
    onExited: N,
    onExiting: B,
    addEndListener: k,
    timeout: p === "auto" ? null : p,
    ...C,
    children: (j, {
      ownerState: I,
      ...V
    }) => /* @__PURE__ */ E.cloneElement(s, {
      style: {
        opacity: 0,
        transform: gn(0.75),
        visibility: j === "exited" && !l ? "hidden" : void 0,
        ...vp[j],
        ...y,
        ...s.props.style
      },
      ref: O,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (Mr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: ir.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
Mr && (Mr.muiSupportAuto = !0);
function ut(e, t, r, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
var Fe = "top", Ke = "bottom", Xe = "right", ze = "left", Ln = "auto", Fr = [Fe, Ke, Xe, ze], er = "start", $r = "end", xp = "clippingParents", da = "viewport", dr = "popper", Sp = "reference", Yi = /* @__PURE__ */ Fr.reduce(function(e, t) {
  return e.concat([t + "-" + er, t + "-" + $r]);
}, []), pa = /* @__PURE__ */ [].concat(Fr, [Ln]).reduce(function(e, t) {
  return e.concat([t, t + "-" + er, t + "-" + $r]);
}, []), Tp = "beforeRead", Ep = "read", wp = "afterRead", Cp = "beforeMain", Op = "main", Rp = "afterMain", Pp = "beforeWrite", kp = "write", Mp = "afterWrite", $p = [Tp, Ep, wp, Cp, Op, Rp, Pp, kp, Mp];
function ot(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function We(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function zt(e) {
  var t = We(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ye(e) {
  var t = We(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Vn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = We(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Np(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var o = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !Ye(s) || !ot(s) || (Object.assign(s.style, o), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function jp(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var i = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : r[o]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Ye(i) || !ot(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Ip = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Np,
  effect: jp,
  requires: ["computeStyles"]
};
function rt(e) {
  return e.split("-")[0];
}
var At = Math.max, mo = Math.min, tr = Math.round;
function yn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fa() {
  return !/^((?!chrome|android).)*safari/i.test(yn());
}
function rr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var o = e.getBoundingClientRect(), i = 1, s = 1;
  t && Ye(e) && (i = e.offsetWidth > 0 && tr(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && tr(o.height) / e.offsetHeight || 1);
  var a = zt(e) ? We(e) : window, l = a.visualViewport, c = !fa() && r, u = (o.left + (c && l ? l.offsetLeft : 0)) / i, d = (o.top + (c && l ? l.offsetTop : 0)) / s, m = o.width / i, g = o.height / s;
  return {
    width: m,
    height: g,
    top: d,
    right: u + m,
    bottom: d + g,
    left: u,
    x: u,
    y: d
  };
}
function Wn(e) {
  var t = rr(e), r = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: o
  };
}
function ma(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Vn(r)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function dt(e) {
  return We(e).getComputedStyle(e);
}
function Ap(e) {
  return ["table", "td", "th"].indexOf(ot(e)) >= 0;
}
function Et(e) {
  return ((zt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Do(e) {
  return ot(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Vn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Et(e)
  );
}
function Gi(e) {
  return !Ye(e) || // https://github.com/popperjs/popper-core/issues/837
  dt(e).position === "fixed" ? null : e.offsetParent;
}
function _p(e) {
  var t = /firefox/i.test(yn()), r = /Trident/i.test(yn());
  if (r && Ye(e)) {
    var o = dt(e);
    if (o.position === "fixed")
      return null;
  }
  var i = Do(e);
  for (Vn(i) && (i = i.host); Ye(i) && ["html", "body"].indexOf(ot(i)) < 0; ) {
    var s = dt(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function zr(e) {
  for (var t = We(e), r = Gi(e); r && Ap(r) && dt(r).position === "static"; )
    r = Gi(r);
  return r && (ot(r) === "html" || ot(r) === "body" && dt(r).position === "static") ? t : r || _p(e) || t;
}
function Un(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Er(e, t, r) {
  return At(e, mo(t, r));
}
function Dp(e, t, r) {
  var o = Er(e, t, r);
  return o > r ? r : o;
}
function ha() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ga(e) {
  return Object.assign({}, ha(), e);
}
function ya(e, t) {
  return t.reduce(function(r, o) {
    return r[o] = e, r;
  }, {});
}
var Bp = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ga(typeof t != "number" ? t : ya(t, Fr));
};
function Fp(e) {
  var t, r = e.state, o = e.name, i = e.options, s = r.elements.arrow, a = r.modifiersData.popperOffsets, l = rt(r.placement), c = Un(l), u = [ze, Xe].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = Bp(i.padding, r), g = Wn(s), h = c === "y" ? Fe : ze, y = c === "y" ? Ke : Xe, p = r.rects.reference[d] + r.rects.reference[c] - a[c] - r.rects.popper[d], S = a[c] - r.rects.reference[c], C = zr(s), R = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, w = p / 2 - S / 2, b = m[h], v = R - g[d] - m[y], O = R / 2 - g[d] / 2 + w, D = Er(b, O, v), M = c;
    r.modifiersData[o] = (t = {}, t[M] = D, t.centerOffset = D - O, t);
  }
}
function zp(e) {
  var t = e.state, r = e.options, o = r.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || ma(t.elements.popper, i) && (t.elements.arrow = i));
}
const Lp = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Fp,
  effect: zp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function or(e) {
  return e.split("-")[1];
}
var Vp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wp(e, t) {
  var r = e.x, o = e.y, i = t.devicePixelRatio || 1;
  return {
    x: tr(r * i) / i || 0,
    y: tr(o * i) / i || 0
  };
}
function Ki(e) {
  var t, r = e.popper, o = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, g = a.x, h = g === void 0 ? 0 : g, y = a.y, p = y === void 0 ? 0 : y, S = typeof d == "function" ? d({
    x: h,
    y: p
  }) : {
    x: h,
    y: p
  };
  h = S.x, p = S.y;
  var C = a.hasOwnProperty("x"), R = a.hasOwnProperty("y"), w = ze, b = Fe, v = window;
  if (u) {
    var O = zr(r), D = "clientHeight", M = "clientWidth";
    if (O === We(r) && (O = Et(r), dt(O).position !== "static" && l === "absolute" && (D = "scrollHeight", M = "scrollWidth")), O = O, i === Fe || (i === ze || i === Xe) && s === $r) {
      b = Ke;
      var P = m && O === v && v.visualViewport ? v.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[D]
      );
      p -= P - o.height, p *= c ? 1 : -1;
    }
    if (i === ze || (i === Fe || i === Ke) && s === $r) {
      w = Xe;
      var $ = m && O === v && v.visualViewport ? v.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[M]
      );
      h -= $ - o.width, h *= c ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: l
  }, u && Vp), f = d === !0 ? Wp({
    x: h,
    y: p
  }, We(r)) : {
    x: h,
    y: p
  };
  if (h = f.x, p = f.y, c) {
    var N;
    return Object.assign({}, B, (N = {}, N[b] = R ? "0" : "", N[w] = C ? "0" : "", N.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + p + "px)" : "translate3d(" + h + "px, " + p + "px, 0)", N));
  }
  return Object.assign({}, B, (t = {}, t[b] = R ? p + "px" : "", t[w] = C ? h + "px" : "", t.transform = "", t));
}
function Up(e) {
  var t = e.state, r = e.options, o = r.gpuAcceleration, i = o === void 0 ? !0 : o, s = r.adaptive, a = s === void 0 ? !0 : s, l = r.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: rt(t.placement),
    variation: or(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ki(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ki(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Hp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Up,
  data: {}
};
var Gr = {
  passive: !0
};
function qp(e) {
  var t = e.state, r = e.instance, o = e.options, i = o.scroll, s = i === void 0 ? !0 : i, a = o.resize, l = a === void 0 ? !0 : a, c = We(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Gr);
  }), l && c.addEventListener("resize", r.update, Gr), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Gr);
    }), l && c.removeEventListener("resize", r.update, Gr);
  };
}
const Yp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: qp,
  data: {}
};
var Gp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ro(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Gp[t];
  });
}
var Kp = {
  start: "end",
  end: "start"
};
function Xi(e) {
  return e.replace(/start|end/g, function(t) {
    return Kp[t];
  });
}
function Hn(e) {
  var t = We(e), r = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: o
  };
}
function qn(e) {
  return rr(Et(e)).left + Hn(e).scrollLeft;
}
function Xp(e, t) {
  var r = We(e), o = Et(e), i = r.visualViewport, s = o.clientWidth, a = o.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = fa();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l + qn(e),
    y: c
  };
}
function Jp(e) {
  var t, r = Et(e), o = Hn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = At(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = At(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -o.scrollLeft + qn(e), c = -o.scrollTop;
  return dt(i || r).direction === "rtl" && (l += At(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Yn(e) {
  var t = dt(e), r = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + o);
}
function ba(e) {
  return ["html", "body", "#document"].indexOf(ot(e)) >= 0 ? e.ownerDocument.body : Ye(e) && Yn(e) ? e : ba(Do(e));
}
function wr(e, t) {
  var r;
  t === void 0 && (t = []);
  var o = ba(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = We(o), a = i ? [s].concat(s.visualViewport || [], Yn(o) ? o : []) : o, l = t.concat(a);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(wr(Do(a)))
  );
}
function bn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Qp(e, t) {
  var r = rr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ji(e, t, r) {
  return t === da ? bn(Xp(e, r)) : zt(t) ? Qp(t, r) : bn(Jp(Et(e)));
}
function Zp(e) {
  var t = wr(Do(e)), r = ["absolute", "fixed"].indexOf(dt(e).position) >= 0, o = r && Ye(e) ? zr(e) : e;
  return zt(o) ? t.filter(function(i) {
    return zt(i) && ma(i, o) && ot(i) !== "body";
  }) : [];
}
function ef(e, t, r, o) {
  var i = t === "clippingParents" ? Zp(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], l = s.reduce(function(c, u) {
    var d = Ji(e, u, o);
    return c.top = At(d.top, c.top), c.right = mo(d.right, c.right), c.bottom = mo(d.bottom, c.bottom), c.left = At(d.left, c.left), c;
  }, Ji(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function va(e) {
  var t = e.reference, r = e.element, o = e.placement, i = o ? rt(o) : null, s = o ? or(o) : null, a = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, c;
  switch (i) {
    case Fe:
      c = {
        x: a,
        y: t.y - r.height
      };
      break;
    case Ke:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Xe:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case ze:
      c = {
        x: t.x - r.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? Un(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case er:
        c[u] = c[u] - (t[d] / 2 - r[d] / 2);
        break;
      case $r:
        c[u] = c[u] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return c;
}
function Nr(e, t) {
  t === void 0 && (t = {});
  var r = t, o = r.placement, i = o === void 0 ? e.placement : o, s = r.strategy, a = s === void 0 ? e.strategy : s, l = r.boundary, c = l === void 0 ? xp : l, u = r.rootBoundary, d = u === void 0 ? da : u, m = r.elementContext, g = m === void 0 ? dr : m, h = r.altBoundary, y = h === void 0 ? !1 : h, p = r.padding, S = p === void 0 ? 0 : p, C = ga(typeof S != "number" ? S : ya(S, Fr)), R = g === dr ? Sp : dr, w = e.rects.popper, b = e.elements[y ? R : g], v = ef(zt(b) ? b : b.contextElement || Et(e.elements.popper), c, d, a), O = rr(e.elements.reference), D = va({
    reference: O,
    element: w,
    placement: i
  }), M = bn(Object.assign({}, w, D)), P = g === dr ? M : O, $ = {
    top: v.top - P.top + C.top,
    bottom: P.bottom - v.bottom + C.bottom,
    left: v.left - P.left + C.left,
    right: P.right - v.right + C.right
  }, B = e.modifiersData.offset;
  if (g === dr && B) {
    var f = B[i];
    Object.keys($).forEach(function(N) {
      var k = [Xe, Ke].indexOf(N) >= 0 ? 1 : -1, j = [Fe, Ke].indexOf(N) >= 0 ? "y" : "x";
      $[N] += f[j] * k;
    });
  }
  return $;
}
function tf(e, t) {
  t === void 0 && (t = {});
  var r = t, o = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, l = r.flipVariations, c = r.allowedAutoPlacements, u = c === void 0 ? pa : c, d = or(o), m = d ? l ? Yi : Yi.filter(function(y) {
    return or(y) === d;
  }) : Fr, g = m.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  g.length === 0 && (g = m);
  var h = g.reduce(function(y, p) {
    return y[p] = Nr(e, {
      placement: p,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[rt(p)], y;
  }, {});
  return Object.keys(h).sort(function(y, p) {
    return h[y] - h[p];
  });
}
function rf(e) {
  if (rt(e) === Ln)
    return [];
  var t = ro(e);
  return [Xi(e), t, Xi(t)];
}
function of(e) {
  var t = e.state, r = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, l = a === void 0 ? !0 : a, c = r.fallbackPlacements, u = r.padding, d = r.boundary, m = r.rootBoundary, g = r.altBoundary, h = r.flipVariations, y = h === void 0 ? !0 : h, p = r.allowedAutoPlacements, S = t.options.placement, C = rt(S), R = C === S, w = c || (R || !y ? [ro(S)] : rf(S)), b = [S].concat(w).reduce(function(U, L) {
      return U.concat(rt(L) === Ln ? tf(t, {
        placement: L,
        boundary: d,
        rootBoundary: m,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: p
      }) : L);
    }, []), v = t.rects.reference, O = t.rects.popper, D = /* @__PURE__ */ new Map(), M = !0, P = b[0], $ = 0; $ < b.length; $++) {
      var B = b[$], f = rt(B), N = or(B) === er, k = [Fe, Ke].indexOf(f) >= 0, j = k ? "width" : "height", I = Nr(t, {
        placement: B,
        boundary: d,
        rootBoundary: m,
        altBoundary: g,
        padding: u
      }), V = k ? N ? Xe : ze : N ? Ke : Fe;
      v[j] > O[j] && (V = ro(V));
      var X = ro(V), H = [];
      if (s && H.push(I[f] <= 0), l && H.push(I[V] <= 0, I[X] <= 0), H.every(function(U) {
        return U;
      })) {
        P = B, M = !1;
        break;
      }
      D.set(B, H);
    }
    if (M)
      for (var x = y ? 3 : 1, A = function(L) {
        var Y = b.find(function(K) {
          var G = D.get(K);
          if (G)
            return G.slice(0, L).every(function(Q) {
              return Q;
            });
        });
        if (Y)
          return P = Y, "break";
      }, z = x; z > 0; z--) {
        var W = A(z);
        if (W === "break") break;
      }
    t.placement !== P && (t.modifiersData[o]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const nf = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: of,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Qi(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Zi(e) {
  return [Fe, Xe, Ke, ze].some(function(t) {
    return e[t] >= 0;
  });
}
function sf(e) {
  var t = e.state, r = e.name, o = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = Nr(t, {
    elementContext: "reference"
  }), l = Nr(t, {
    altBoundary: !0
  }), c = Qi(a, o), u = Qi(l, i, s), d = Zi(c), m = Zi(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const af = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sf
};
function lf(e, t, r) {
  var o = rt(e), i = [ze, Fe].indexOf(o) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * i, [ze, Xe].indexOf(o) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function cf(e) {
  var t = e.state, r = e.options, o = e.name, i = r.offset, s = i === void 0 ? [0, 0] : i, a = pa.reduce(function(d, m) {
    return d[m] = lf(m, t.rects, s), d;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
const uf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: cf
};
function df(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = va({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const pf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: df,
  data: {}
};
function ff(e) {
  return e === "x" ? "y" : "x";
}
function mf(e) {
  var t = e.state, r = e.options, o = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, l = a === void 0 ? !1 : a, c = r.boundary, u = r.rootBoundary, d = r.altBoundary, m = r.padding, g = r.tether, h = g === void 0 ? !0 : g, y = r.tetherOffset, p = y === void 0 ? 0 : y, S = Nr(t, {
    boundary: c,
    rootBoundary: u,
    padding: m,
    altBoundary: d
  }), C = rt(t.placement), R = or(t.placement), w = !R, b = Un(C), v = ff(b), O = t.modifiersData.popperOffsets, D = t.rects.reference, M = t.rects.popper, P = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, $ = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, f = {
    x: 0,
    y: 0
  };
  if (O) {
    if (s) {
      var N, k = b === "y" ? Fe : ze, j = b === "y" ? Ke : Xe, I = b === "y" ? "height" : "width", V = O[b], X = V + S[k], H = V - S[j], x = h ? -M[I] / 2 : 0, A = R === er ? D[I] : M[I], z = R === er ? -M[I] : -D[I], W = t.elements.arrow, U = h && W ? Wn(W) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ha(), Y = L[k], K = L[j], G = Er(0, D[I], U[I]), Q = w ? D[I] / 2 - x - G - Y - $.mainAxis : A - G - Y - $.mainAxis, q = w ? -D[I] / 2 + x + G + K + $.mainAxis : z + G + K + $.mainAxis, J = t.elements.arrow && zr(t.elements.arrow), F = J ? b === "y" ? J.clientTop || 0 : J.clientLeft || 0 : 0, ie = (N = B?.[b]) != null ? N : 0, fe = V + Q - ie - F, Oe = V + q - ie, Ue = Er(h ? mo(X, fe) : X, V, h ? At(H, Oe) : H);
      O[b] = Ue, f[b] = Ue - V;
    }
    if (l) {
      var $e, ke = b === "x" ? Fe : ze, ge = b === "x" ? Ke : Xe, Re = O[v], me = v === "y" ? "height" : "width", Z = Re + S[ke], wt = Re - S[ge], pt = [Fe, ze].indexOf(C) !== -1, Ct = ($e = B?.[v]) != null ? $e : 0, Me = pt ? Z : Re - D[me] - M[me] - Ct + $.altAxis, ue = pt ? Re + D[me] + M[me] - Ct - $.altAxis : wt, je = h && pt ? Dp(Me, Re, ue) : Er(h ? Me : Z, Re, h ? ue : wt);
      O[v] = je, f[v] = je - Re;
    }
    t.modifiersData[o] = f;
  }
}
const hf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: mf,
  requiresIfExists: ["offset"]
};
function gf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function yf(e) {
  return e === We(e) || !Ye(e) ? Hn(e) : gf(e);
}
function bf(e) {
  var t = e.getBoundingClientRect(), r = tr(t.width) / e.offsetWidth || 1, o = tr(t.height) / e.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function vf(e, t, r) {
  r === void 0 && (r = !1);
  var o = Ye(t), i = Ye(t) && bf(t), s = Et(t), a = rr(e, i, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !r) && ((ot(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Yn(s)) && (l = yf(t)), Ye(t) ? (c = rr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = qn(s))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function xf(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!r.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || i(s);
  }), o;
}
function Sf(e) {
  var t = xf(e);
  return $p.reduce(function(r, o) {
    return r.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function Tf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ef(e) {
  var t = e.reduce(function(r, o) {
    var i = r[o.name];
    return r[o.name] = i ? Object.assign({}, i, o, {
      options: Object.assign({}, i.options, o.options),
      data: Object.assign({}, i.data, o.data)
    }) : o, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var es = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ts() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function wf(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, o = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? es : i;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, es, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], g = !1, h = {
      state: d,
      setOptions: function(C) {
        var R = typeof C == "function" ? C(d.options) : C;
        p(), d.options = Object.assign({}, s, d.options, R), d.scrollParents = {
          reference: zt(l) ? wr(l) : l.contextElement ? wr(l.contextElement) : [],
          popper: wr(c)
        };
        var w = Sf(Ef([].concat(o, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(b) {
          return b.enabled;
        }), y(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var C = d.elements, R = C.reference, w = C.popper;
          if (ts(R, w)) {
            d.rects = {
              reference: vf(R, zr(w), d.options.strategy === "fixed"),
              popper: Wn(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function($) {
              return d.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var b = 0; b < d.orderedModifiers.length; b++) {
              if (d.reset === !0) {
                d.reset = !1, b = -1;
                continue;
              }
              var v = d.orderedModifiers[b], O = v.fn, D = v.options, M = D === void 0 ? {} : D, P = v.name;
              typeof O == "function" && (d = O({
                state: d,
                options: M,
                name: P,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Tf(function() {
        return new Promise(function(S) {
          h.forceUpdate(), S(d);
        });
      }),
      destroy: function() {
        p(), g = !0;
      }
    };
    if (!ts(l, c))
      return h;
    h.setOptions(u).then(function(S) {
      !g && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function y() {
      d.orderedModifiers.forEach(function(S) {
        var C = S.name, R = S.options, w = R === void 0 ? {} : R, b = S.effect;
        if (typeof b == "function") {
          var v = b({
            state: d,
            name: C,
            instance: h,
            options: w
          }), O = function() {
          };
          m.push(v || O);
        }
      });
    }
    function p() {
      m.forEach(function(S) {
        return S();
      }), m = [];
    }
    return h;
  };
}
var Cf = [Yp, pf, Hp, Ip, uf, nf, hf, Lp, af], Of = /* @__PURE__ */ wf({
  defaultModifiers: Cf
});
function Rf(e) {
  return typeof e == "string";
}
function xa(e, t, r) {
  return e === void 0 || Rf(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Sa(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    r[o] = e[o];
  }), r;
}
function rs(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Ta(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const h = oe(r?.className, s, i?.className, o?.className), y = {
      ...r?.style,
      ...i?.style,
      ...o?.style
    }, p = {
      ...r,
      ...i,
      ...o
    };
    return h.length > 0 && (p.className = h), Object.keys(y).length > 0 && (p.style = y), {
      props: p,
      internalRef: void 0
    };
  }
  const a = Sa({
    ...i,
    ...o
  }), l = rs(o), c = rs(i), u = t(a), d = oe(u?.className, r?.className, s, i?.className, o?.className), m = {
    ...u?.style,
    ...r?.style,
    ...i?.style,
    ...o?.style
  }, g = {
    ...u,
    ...r,
    ...c,
    ...l
  };
  return d.length > 0 && (g.className = d), Object.keys(m).length > 0 && (g.style = m), {
    props: g,
    internalRef: u.ref
  };
}
function Ea(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function wa(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : Ea(r, o), {
    props: l,
    internalRef: c
  } = Ta({
    ...s,
    externalSlotProps: a
  }), u = Le(c, a?.ref, e.additionalProps?.ref);
  return xa(t, {
    ...l,
    ref: u
  }, o);
}
function Pf(e) {
  return typeof e == "function" ? e() : e;
}
const jr = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    children: o,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = E.useState(null), c = Le(/* @__PURE__ */ E.isValidElement(o) ? Br(o) : null, r);
  if (lt(() => {
    s || l(Pf(i) || document.body);
  }, [i, s]), lt(() => {
    if (a && !s)
      return Vi(r, a), () => {
        Vi(r, null);
      };
  }, [r, a, s]), s) {
    if (/* @__PURE__ */ E.isValidElement(o)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ E.cloneElement(o, u);
    }
    return o;
  }
  return a && /* @__PURE__ */ kl.createPortal(o, a);
});
process.env.NODE_ENV !== "production" && (jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ut, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (jr.propTypes = jo(jr.propTypes));
function kf(e) {
  return be("MuiPopper", e);
}
he("MuiPopper", ["root"]);
function Mf(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function ho(e) {
  return typeof e == "function" ? e() : e;
}
function Bo(e) {
  return e.nodeType !== void 0;
}
function $f(e) {
  return !Bo(e);
}
const Nf = (e) => {
  const {
    classes: t
  } = e;
  return Ce({
    root: ["root"]
  }, kf, t);
}, jf = {}, If = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    anchorEl: o,
    children: i,
    direction: s,
    disablePortal: a,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: d,
    popperRef: m,
    slotProps: g = {},
    slots: h = {},
    TransitionProps: y,
    // @ts-ignore internal logic
    ownerState: p,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...S
  } = t, C = E.useRef(null), R = Le(C, r), w = E.useRef(null), b = Le(w, m), v = E.useRef(b);
  lt(() => {
    v.current = b;
  }, [b]), E.useImperativeHandle(m, () => w.current, []);
  const O = Mf(u, s), [D, M] = E.useState(O), [P, $] = E.useState(ho(o));
  E.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), E.useEffect(() => {
    o && $(ho(o));
  }, [o]), lt(() => {
    if (!P || !c)
      return;
    const j = (X) => {
      M(X.placement);
    };
    if (process.env.NODE_ENV !== "production" && P && Bo(P) && P.nodeType === 1) {
      const X = P.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && X.top === 0 && X.left === 0 && X.right === 0 && X.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let I = [{
      name: "preventOverflow",
      options: {
        altBoundary: a
      }
    }, {
      name: "flip",
      options: {
        altBoundary: a
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: X
      }) => {
        j(X);
      }
    }];
    l != null && (I = I.concat(l)), d && d.modifiers != null && (I = I.concat(d.modifiers));
    const V = Of(P, C.current, {
      placement: O,
      ...d,
      modifiers: I
    });
    return v.current(V), () => {
      V.destroy(), v.current(null);
    };
  }, [P, a, l, c, d, O]);
  const B = {
    placement: D
  };
  y !== null && (B.TransitionProps = y);
  const f = Nf(t), N = h.root ?? "div", k = wa({
    elementType: N,
    externalSlotProps: g.root,
    externalForwardedProps: S,
    additionalProps: {
      role: "tooltip",
      ref: R
    },
    ownerState: t,
    className: f.root
  });
  return /* @__PURE__ */ T.jsx(N, {
    ...k,
    children: typeof i == "function" ? i(B) : i
  });
}), Ca = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    anchorEl: o,
    children: i,
    container: s,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: m = "bottom",
    popperOptions: g = jf,
    popperRef: h,
    style: y,
    transition: p = !1,
    slotProps: S = {},
    slots: C = {},
    ...R
  } = t, [w, b] = E.useState(!0), v = () => {
    b(!1);
  }, O = () => {
    b(!0);
  };
  if (!c && !d && (!p || w))
    return null;
  let D;
  if (s)
    D = s;
  else if (o) {
    const $ = ho(o);
    D = $ && Bo($) ? Ge($).body : Ge(null).body;
  }
  const M = !d && c && (!p || w) ? "none" : void 0, P = p ? {
    in: d,
    onEnter: v,
    onExited: O
  } : void 0;
  return /* @__PURE__ */ T.jsx(jr, {
    disablePortal: l,
    container: D,
    children: /* @__PURE__ */ T.jsx(If, {
      anchorEl: o,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: r,
      open: p ? !w : d,
      placement: m,
      popperOptions: g,
      popperRef: h,
      slotProps: S,
      slots: C,
      ...R,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: M,
        ...y
      },
      TransitionProps: P,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ca.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: St(n.oneOfType([ut, n.object, n.func]), (e) => {
    if (e.open) {
      const t = ho(e.anchorEl);
      if (t && Bo(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || $f(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ut, n.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: n.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Tt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const Af = te(Ca, {
  name: "MuiPopper",
  slot: "Root"
})({}), Gn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = jn(), i = Se({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: a,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: d,
    keepMounted: m,
    modifiers: g,
    open: h,
    placement: y,
    popperOptions: p,
    popperRef: S,
    transition: C,
    slots: R,
    slotProps: w,
    ...b
  } = i, v = R?.root ?? l?.Root, O = {
    anchorEl: s,
    container: u,
    disablePortal: d,
    keepMounted: m,
    modifiers: g,
    open: h,
    placement: y,
    popperOptions: p,
    popperRef: S,
    transition: C,
    ...b
  };
  return /* @__PURE__ */ T.jsx(Af, {
    as: a,
    direction: o ? "rtl" : "ltr",
    slots: {
      root: v
    },
    slotProps: w ?? c,
    ...O,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (Gn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: n.oneOfType([ut, n.object, n.func]),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ut, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Tt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
function ve(e, t) {
  const {
    className: r,
    elementType: o,
    ownerState: i,
    externalForwardedProps: s,
    internalForwardedProps: a,
    shouldForwardComponentProp: l = !1,
    ...c
  } = t, {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...g
  } = s, h = d[e] || o, y = Ea(m[e], i), {
    props: {
      component: p,
      ...S
    },
    internalRef: C
  } = Ta({
    className: r,
    ...c,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: y
  }), R = Le(C, y?.ref, t.ref), w = e === "root" ? p || u : p, b = xa(h, {
    ...e === "root" && !u && !d[e] && a,
    ...e !== "root" && !d[e] && a,
    ...S,
    ...w && !l && {
      as: w
    },
    ...w && l && {
      component: w
    },
    ref: R
  }, i);
  return [h, b];
}
function _f(e) {
  return be("MuiTooltip", e);
}
const we = he("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Df(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Bf = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: o,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !r && "popperInteractive", o && "popperArrow"],
    tooltip: ["tooltip", o && "tooltipArrow", i && "touch", `tooltipPlacement${ee(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Ce(a, _f, t);
}, Ff = te(Gn, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose];
  }
})(xe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${we.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${we.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${we.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${we.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${we.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${we.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${we.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${we.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), zf = te("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${ee(r.placement.split("-")[0])}`]];
  }
})(xe(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${we.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${we.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${we.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${we.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${Df(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${we.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${we.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${we.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${we.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${we.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${we.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${we.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${we.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${we.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${we.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Lf = te("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(xe(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let Kr = !1;
const os = new _o();
let pr = {
  x: 0,
  y: 0
};
function Xr(e, t) {
  return (r, ...o) => {
    t && t(r, ...o), e(r, ...o);
  };
}
const Oa = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: i = !1,
    children: s,
    classes: a,
    components: l = {},
    componentsProps: c = {},
    describeChild: u = !1,
    disableFocusListener: d = !1,
    disableHoverListener: m = !1,
    disableInteractive: g = !1,
    disableTouchListener: h = !1,
    enterDelay: y = 100,
    enterNextDelay: p = 0,
    enterTouchDelay: S = 700,
    followCursor: C = !1,
    id: R,
    leaveDelay: w = 0,
    leaveTouchDelay: b = 1500,
    onClose: v,
    onOpen: O,
    open: D,
    placement: M = "bottom",
    PopperComponent: P,
    PopperProps: $ = {},
    slotProps: B = {},
    slots: f = {},
    title: N,
    TransitionComponent: k,
    TransitionProps: j,
    ...I
  } = o, V = /* @__PURE__ */ E.isValidElement(s) ? s : /* @__PURE__ */ T.jsx("span", {
    children: s
  }), X = _r(), H = jn(), [x, A] = E.useState(), [z, W] = E.useState(null), U = E.useRef(!1), L = g || C, Y = Jt(), K = Jt(), G = Jt(), Q = Jt(), [q, J] = ea({
    controlled: D,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let F = q;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: re
    } = E.useRef(D !== void 0);
    E.useEffect(() => {
      x && x.disabled && !re && N !== "" && x.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [N, x, re]);
  }
  const ie = Io(R), fe = E.useRef(), Oe = yt(() => {
    fe.current !== void 0 && (document.body.style.WebkitUserSelect = fe.current, fe.current = void 0), Q.clear();
  });
  E.useEffect(() => Oe, [Oe]);
  const Ue = (re) => {
    os.clear(), Kr = !0, J(!0), O && !F && O(re);
  }, $e = yt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (re) => {
      os.start(800 + w, () => {
        Kr = !1;
      }), J(!1), v && F && v(re), Y.start(X.transitions.duration.shortest, () => {
        U.current = !1;
      });
    }
  ), ke = (re) => {
    U.current && re.type !== "touchstart" || (x && x.removeAttribute("title"), K.clear(), G.clear(), y || Kr && p ? K.start(Kr ? p : y, () => {
      Ue(re);
    }) : Ue(re));
  }, ge = (re) => {
    K.clear(), G.start(w, () => {
      $e(re);
    });
  }, [, Re] = E.useState(!1), me = (re) => {
    co(re.target) || (Re(!1), ge(re));
  }, Z = (re) => {
    x || A(re.currentTarget), co(re.target) && (Re(!0), ke(re));
  }, wt = (re) => {
    U.current = !0;
    const ft = V.props;
    ft.onTouchStart && ft.onTouchStart(re);
  }, pt = (re) => {
    wt(re), G.clear(), Y.clear(), Oe(), fe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(S, () => {
      document.body.style.WebkitUserSelect = fe.current, ke(re);
    });
  }, Ct = (re) => {
    V.props.onTouchEnd && V.props.onTouchEnd(re), Oe(), G.start(b, () => {
      $e(re);
    });
  };
  E.useEffect(() => {
    if (!F)
      return;
    function re(ft) {
      ft.key === "Escape" && $e(ft);
    }
    return document.addEventListener("keydown", re), () => {
      document.removeEventListener("keydown", re);
    };
  }, [$e, F]);
  const Me = Le(Br(V), A, r);
  !N && N !== 0 && (F = !1);
  const ue = E.useRef(), je = (re) => {
    const ft = V.props;
    ft.onMouseMove && ft.onMouseMove(re), pr = {
      x: re.clientX,
      y: re.clientY
    }, ue.current && ue.current.update();
  }, Ie = {}, Ot = typeof N == "string";
  u ? (Ie.title = !F && Ot && !m ? N : null, Ie["aria-describedby"] = F ? ie : null) : (Ie["aria-label"] = Ot ? N : null, Ie["aria-labelledby"] = F && !Ot ? ie : null);
  const De = {
    ...Ie,
    ...I,
    ...V.props,
    className: oe(I.className, V.props.className),
    onTouchStart: wt,
    ref: Me,
    ...C ? {
      onMouseMove: je
    } : {}
  };
  process.env.NODE_ENV !== "production" && (De["data-mui-internal-clone-element"] = !0, E.useEffect(() => {
    x && !x.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [x]));
  const sr = {};
  h || (De.onTouchStart = pt, De.onTouchEnd = Ct), m || (De.onMouseOver = Xr(ke, De.onMouseOver), De.onMouseLeave = Xr(ge, De.onMouseLeave), L || (sr.onMouseOver = ke, sr.onMouseLeave = ge)), d || (De.onFocus = Xr(Z, De.onFocus), De.onBlur = Xr(me, De.onBlur), L || (sr.onFocus = Z, sr.onBlur = me)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const Rt = {
    ...o,
    isRtl: H,
    arrow: i,
    disableInteractive: L,
    placement: M,
    PopperComponentProp: P,
    touch: U.current
  }, ar = typeof B.popper == "function" ? B.popper(Rt) : B.popper, fl = E.useMemo(() => {
    let re = [{
      name: "arrow",
      enabled: !!z,
      options: {
        element: z,
        padding: 4
      }
    }];
    return $.popperOptions?.modifiers && (re = re.concat($.popperOptions.modifiers)), ar?.popperOptions?.modifiers && (re = re.concat(ar.popperOptions.modifiers)), {
      ...$.popperOptions,
      ...ar?.popperOptions,
      modifiers: re
    };
  }, [z, $.popperOptions, ar?.popperOptions]), Fo = Bf(Rt), ml = typeof B.transition == "function" ? B.transition(Rt) : B.transition, Lr = {
    slots: {
      popper: l.Popper,
      transition: l.Transition ?? k,
      tooltip: l.Tooltip,
      arrow: l.Arrow,
      ...f
    },
    slotProps: {
      arrow: B.arrow ?? c.arrow,
      popper: {
        ...$,
        ...ar ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: B.tooltip ?? c.tooltip,
      transition: {
        ...j,
        ...ml ?? c.transition
      }
    }
  }, [hl, gl] = ve("popper", {
    elementType: Ff,
    externalForwardedProps: Lr,
    ownerState: Rt,
    className: oe(Fo.popper, $?.className)
  }), [yl, bl] = ve("transition", {
    elementType: Mr,
    externalForwardedProps: Lr,
    ownerState: Rt
  }), [vl, xl] = ve("tooltip", {
    elementType: zf,
    className: Fo.tooltip,
    externalForwardedProps: Lr,
    ownerState: Rt
  }), [Sl, Tl] = ve("arrow", {
    elementType: Lf,
    className: Fo.arrow,
    externalForwardedProps: Lr,
    ownerState: Rt,
    ref: W
  });
  return /* @__PURE__ */ T.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ E.cloneElement(V, De), /* @__PURE__ */ T.jsx(hl, {
      as: P ?? Gn,
      placement: M,
      anchorEl: C ? {
        getBoundingClientRect: () => ({
          top: pr.y,
          left: pr.x,
          right: pr.x,
          bottom: pr.y,
          width: 0,
          height: 0
        })
      } : x,
      popperRef: ue,
      open: x ? F : !1,
      id: ie,
      transition: !0,
      ...sr,
      ...gl,
      popperOptions: fl,
      children: ({
        TransitionProps: re
      }) => /* @__PURE__ */ T.jsx(yl, {
        timeout: X.transitions.duration.shorter,
        ...re,
        ...bl,
        children: /* @__PURE__ */ T.jsxs(vl, {
          ...xl,
          children: [N, i ? /* @__PURE__ */ T.jsx(Sl, {
            ...Tl
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Oa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: n.bool,
  /**
   * Tooltip reference element.
   */
  children: ir.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Arrow: n.elementType,
    Popper: n.elementType,
    Tooltip: n.elementType,
    Transition: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    arrow: n.object,
    popper: n.object,
    tooltip: n.object,
    transition: n.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: n.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: n.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: n.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: n.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: n.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: n.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: n.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: n.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: n.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: n.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: n.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: n.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: n.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    arrow: n.oneOfType([n.func, n.object]),
    popper: n.oneOfType([n.func, n.object]),
    tooltip: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    arrow: n.elementType,
    popper: n.elementType,
    tooltip: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: n.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: n.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object
});
function ns(e) {
  return String(parseFloat(e)).length === String(e).length;
}
function Vf(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function kt(e) {
  return parseFloat(e);
}
function Wf(e) {
  return (t, r) => {
    const o = Vf(t);
    if (o === r)
      return t;
    let i = kt(t);
    o !== "px" && (o === "em" || o === "rem") && (i = kt(t) * kt(e));
    let s = i;
    if (r !== "px")
      if (r === "em")
        s = i / kt(e);
      else if (r === "rem")
        s = i / kt(e);
      else
        return t;
    return parseFloat(s.toFixed(5)) + r;
  };
}
function Uf({
  size: e,
  grid: t
}) {
  const r = e - e % t, o = r + t;
  return e - r < o - e ? r : o;
}
function Hf({
  lineHeight: e,
  pixels: t,
  htmlFontSize: r
}) {
  return t / (e * r);
}
function qf({
  cssProperty: e,
  min: t,
  max: r,
  unit: o = "rem",
  breakpoints: i = [600, 900, 1200],
  transform: s = null
}) {
  const a = {
    [e]: `${t}${o}`
  }, l = (r - t) / i[i.length - 1];
  return i.forEach((c) => {
    let u = t + l * c;
    s !== null && (u = s(u)), a[`@media (min-width:${c}px)`] = {
      [e]: `${Math.round(u * 1e4) / 1e4}${o}`
    };
  }), a;
}
function Yf(e, t = {}) {
  const {
    breakpoints: r = ["sm", "md", "lg"],
    disableAlign: o = !1,
    factor: i = 2,
    variants: s = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = t, a = {
    ...e
  };
  a.typography = {
    ...a.typography
  };
  const l = a.typography, c = Wf(l.htmlFontSize), u = r.map((d) => a.breakpoints.values[d]);
  return s.forEach((d) => {
    const m = l[d];
    if (!m)
      return;
    const g = parseFloat(c(m.fontSize, "rem"));
    if (g <= 1)
      return;
    const h = g, y = 1 + (h - 1) / i;
    let {
      lineHeight: p
    } = m;
    if (!ns(p) && !o)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : at(6));
    ns(p) || (p = parseFloat(c(p, "rem")) / parseFloat(g));
    let S = null;
    o || (S = (C) => Uf({
      size: C,
      grid: Hf({
        pixels: 4,
        lineHeight: p,
        htmlFontSize: l.htmlFontSize
      })
    })), l[d] = {
      ...m,
      ...qf({
        cssProperty: "fontSize",
        min: y,
        max: h,
        unit: "rem",
        breakpoints: u,
        transform: S
      })
    };
  }), a;
}
function Gf({
  theme: e,
  ...t
}) {
  const r = tt in e ? e[tt] : void 0;
  return /* @__PURE__ */ T.jsx(Pr, {
    ...t,
    themeId: r ? tt : void 0,
    theme: r || e
  });
}
const Jr = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (n.string, n.string, n.string, n.string, n.string, n.oneOf(["dark", "light", "system"]), n.string, n.string);
const {
  CssVarsProvider: Kf
} = Iu({
  themeId: tt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Ao({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Jr.colorSchemeStorageKey,
  modeStorageKey: Jr.modeStorageKey,
  defaultColorScheme: {
    light: Jr.defaultLightColorScheme,
    dark: Jr.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Gs(e.palette, e.typography)
    };
    return t.unstable_sx = function(o) {
      return bt({
        sx: o,
        theme: this
      });
    }, t;
  }
}), Xf = Kf;
function Jf({
  theme: e,
  ...t
}) {
  const r = E.useMemo(() => {
    if (typeof e == "function")
      return e;
    const o = tt in e ? e[tt] : e;
    return "colorSchemes" in o ? null : "vars" in o ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ T.jsx(Gf, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ T.jsx(Xf, {
    theme: e,
    ...t
  });
}
function Tg({
  onSync: e,
  syncInterval: t = 3e4,
  maxErrorCount: r = 3,
  syncAnimationDuration: o = 3e3,
  successDuration: i = 3e3,
  errorDuration: s = 3e3,
  tooltipEnabled: a = !0,
  resetTrigger: l,
  disabled: c = !1,
  size: u = "medium"
  // Valor padrão conforme GovBR
}) {
  const d = _r(), [m, g] = Sr("idle"), [h, y] = Sr(!0), [p, S] = Sr(0), C = nr`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `, R = ti(
    (P, $) => {
      setTimeout(() => g(P), o), setTimeout(() => g("idle"), o + $);
    },
    [o]
  ), w = ti(async () => {
    g("loading");
    try {
      await e(), R("success", i), S(0);
    } catch (P) {
      R("error", s), S(($) => $ + 1), console.error(P);
    }
  }, [e, R, i, s]);
  Kt(() => {
    if (!h) return;
    const P = setInterval(w, t);
    return () => clearInterval(P);
  }, [h, w, t]), Kt(() => {
    c && (y(!1), g("critical-error"));
  }, [c]), Kt(() => {
    c || (y(!0), g("idle"));
  }, [c]), Kt(() => {
    p >= r && (y(!1), g("critical-error"));
  }, [p, r]), Kt(() => {
    if (!h) return;
    const P = setInterval(w, t);
    return () => clearInterval(P);
  }, [h, w, t, l]);
  const b = () => {
    y((P) => !P), h || (S(0), g("idle"));
  }, v = () => {
    if (!h) return /* @__PURE__ */ T.jsx(Wi, {});
    switch (m) {
      case "success":
        return /* @__PURE__ */ T.jsx(ta, {});
      case "error":
        return /* @__PURE__ */ T.jsx(jd, {});
      case "critical-error":
        return /* @__PURE__ */ T.jsx(Wi, {});
      default:
        return /* @__PURE__ */ T.jsx(Id, {});
    }
  }, O = (P) => {
    const $ = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(P);
    return $ ? `${parseInt($[1], 16)}, ${parseInt($[2], 16)}, ${parseInt($[3], 16)}` : "19, 81, 180";
  }, D = () => {
    switch (m) {
      case "success":
        return d.palette.success.main;
      // GovBR green-cool-vivid-50
      case "error":
        return d.palette.error.main;
      // GovBR red-vivid-50
      case "critical-error":
        return d.palette.grey[600];
      // GovBR gray-30
      default:
        return d.palette.primary.main;
    }
  };
  let M = "";
  return a && (c ? M = "Sincronização desabilitada" : m === "critical-error" ? M = "Sincronização com erro crítico. Clique para tentar reativar." : h ? M = "Sincronização automática ativada. Clique para desativar." : M = "Sincronização automática desativada. Clique para ativar."), /* @__PURE__ */ T.jsx(Oa, { title: M, children: /* @__PURE__ */ T.jsx(
    la,
    {
      size: u,
      disabled: c || m === "loading",
      "aria-label": "Auto Sync",
      onClick: b,
      sx: {
        marginLeft: d.spacing(1),
        // Usar spacing do tema
        color: D(),
        // Animação de loading usando as transições do GovBR
        animation: m === "loading" ? `${C} 1s ${d.transitions.easing.easeInOut} infinite` : "none",
        // Hover personalizado para este componente (sobrescreve o padrão)
        "&:hover:not(:disabled)": {
          backgroundImage: `linear-gradient(rgba(${O(D())}, 0.16), rgba(${O(D())}, 0.16))`
        }
      },
      children: v()
    }
  ) });
}
const Qf = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Zf(e) {
  return be("MuiAvatar", e);
}
he("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const em = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: o
  } = e;
  return Ce({
    root: ["root", r, o && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Zf, t);
}, tm = te("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
  }
})(xe(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: e.typography.fontFamily,
  fontSize: e.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [{
    props: {
      variant: "rounded"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius
    }
  }, {
    props: {
      variant: "square"
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: !0
    },
    style: {
      color: (e.vars || e).palette.background.default,
      ...e.vars ? {
        backgroundColor: e.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: e.palette.grey[400],
        ...e.applyStyles("dark", {
          backgroundColor: e.palette.grey[600]
        })
      }
    }
  }]
}))), rm = te("img", {
  name: "MuiAvatar",
  slot: "Img"
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
}), om = te(Qf, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function nm({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: o
}) {
  const [i, s] = E.useState(!1);
  return E.useEffect(() => {
    if (!r && !o)
      return;
    s(!1);
    let a = !0;
    const l = new Image();
    return l.onload = () => {
      a && s("loaded");
    }, l.onerror = () => {
      a && s("error");
    }, l.crossOrigin = e, l.referrerPolicy = t, l.src = r, o && (l.srcset = o), () => {
      a = !1;
    };
  }, [e, t, r, o]), i;
}
const Ra = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: i,
    children: s,
    className: a,
    component: l = "div",
    slots: c = {},
    slotProps: u = {},
    imgProps: d,
    sizes: m,
    src: g,
    srcSet: h,
    variant: y = "circular",
    ...p
  } = o;
  let S = null;
  const C = {
    ...o,
    component: l,
    variant: y
  }, R = nm({
    ...d,
    ...typeof u.img == "function" ? u.img(C) : u.img,
    src: g,
    srcSet: h
  }), w = g || h, b = w && R !== "error";
  C.colorDefault = !b, delete C.ownerState;
  const v = em(C), [O, D] = ve("root", {
    ref: r,
    className: oe(v.root, a),
    elementType: tm,
    externalForwardedProps: {
      slots: c,
      slotProps: u,
      component: l,
      ...p
    },
    ownerState: C
  }), [M, P] = ve("img", {
    className: v.img,
    elementType: rm,
    externalForwardedProps: {
      slots: c,
      slotProps: {
        img: {
          ...d,
          ...u.img
        }
      }
    },
    additionalProps: {
      alt: i,
      src: g,
      srcSet: h,
      sizes: m
    },
    ownerState: C
  }), [$, B] = ve("fallback", {
    className: v.fallback,
    elementType: om,
    externalForwardedProps: {
      slots: c,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: C
  });
  return b ? S = /* @__PURE__ */ T.jsx(M, {
    ...P
  }) : s || s === 0 ? S = s : w && i ? S = i[0] : S = /* @__PURE__ */ T.jsx($, {
    ...B
  }), /* @__PURE__ */ T.jsx(O, {
    ...D,
    children: S
  });
});
process.env.NODE_ENV !== "production" && (Ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: n.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: n.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: n.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    fallback: n.oneOfType([n.func, n.object]),
    img: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    fallback: n.elementType,
    img: n.elementType,
    root: n.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: n.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: n.oneOfType([n.oneOf(["circular", "rounded", "square"]), n.string])
});
const go = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (go.displayName = "ListContext");
function im(e) {
  return be("MuiList", e);
}
he("MuiList", ["root", "padding", "dense", "subheader"]);
const sm = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: o,
    subheader: i
  } = e;
  return Ce({
    root: ["root", !r && "padding", o && "dense", i && "subheader"]
  }, im, t);
}, am = te("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), Pa = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u,
    ...d
  } = o, m = E.useMemo(() => ({
    dense: l
  }), [l]), g = {
    ...o,
    component: a,
    dense: l,
    disablePadding: c
  }, h = sm(g);
  return /* @__PURE__ */ T.jsx(go.Provider, {
    value: m,
    children: /* @__PURE__ */ T.jsxs(am, {
      as: a,
      className: oe(h.root, s),
      ref: r,
      ownerState: g,
      ...d,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Pa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function ka(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function en(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function is(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function Ma(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function fr(e, t, r, o, i, s) {
  let a = !1, l = i(e, t, t ? r : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = o ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Ma(l, s) || c)
      l = i(e, l, r);
    else
      return l.focus(), !0;
  }
  return !1;
}
const $a = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: m = "selectedMenu",
    ...g
  } = t, h = E.useRef(null), y = E.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  lt(() => {
    i && h.current.focus();
  }, [i]), E.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (w, {
      direction: b
    }) => {
      const v = !h.current.style.width;
      if (w.clientHeight < h.current.clientHeight && v) {
        const O = `${ka(Ft(w))}px`;
        h.current.style[b === "rtl" ? "paddingLeft" : "paddingRight"] = O, h.current.style.width = `calc(100% + ${O})`;
      }
      return h.current;
    }
  }), []);
  const p = (w) => {
    const b = h.current, v = w.key;
    if (w.ctrlKey || w.metaKey || w.altKey) {
      d && d(w);
      return;
    }
    const D = Ge(b).activeElement;
    if (v === "ArrowDown")
      w.preventDefault(), fr(b, D, u, c, en);
    else if (v === "ArrowUp")
      w.preventDefault(), fr(b, D, u, c, is);
    else if (v === "Home")
      w.preventDefault(), fr(b, null, u, c, en);
    else if (v === "End")
      w.preventDefault(), fr(b, null, u, c, is);
    else if (v.length === 1) {
      const M = y.current, P = v.toLowerCase(), $ = performance.now();
      M.keys.length > 0 && ($ - M.lastTime > 500 ? (M.keys = [], M.repeating = !0, M.previousKeyMatched = !0) : M.repeating && P !== M.keys[0] && (M.repeating = !1)), M.lastTime = $, M.keys.push(P);
      const B = D && !M.repeating && Ma(D, M);
      M.previousKeyMatched && (B || fr(b, D, !1, c, en, M)) ? w.preventDefault() : M.previousKeyMatched = !1;
    }
    d && d(w);
  }, S = Le(h, r);
  let C = -1;
  E.Children.forEach(a, (w, b) => {
    if (!/* @__PURE__ */ E.isValidElement(w)) {
      C === b && (C += 1, C >= a.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Zt.isFragment(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (m === "selectedMenu" && w.props.selected || C === -1) && (C = b), C === b && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (C += 1, C >= a.length && (C = -1));
  });
  const R = E.Children.map(a, (w, b) => {
    if (b === C) {
      const v = {};
      return s && (v.autoFocus = !0), w.props.tabIndex === void 0 && m === "selectedMenu" && (v.tabIndex = 0), /* @__PURE__ */ E.cloneElement(w, v);
    }
    return w;
  });
  return /* @__PURE__ */ T.jsx(Pa, {
    role: "menu",
    ref: S,
    className: l,
    onKeyDown: p,
    tabIndex: i ? 0 : -1,
    ...g,
    children: R
  });
});
process.env.NODE_ENV !== "production" && ($a.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function lm(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Na(e, t, r, o) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = lm(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function ja(e, t, r, o) {
  return e[t] === void 0 ? null : Na(e, t, r, o);
}
function vn() {
  return null;
}
ja.isRequired = Na;
vn.isRequired = vn;
const Ia = process.env.NODE_ENV === "production" ? vn : ja;
function cm(e) {
  return typeof e == "string";
}
function um(e) {
  const t = Ge(e);
  return t.body === e ? Ft(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Cr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ss(e) {
  return parseInt(Ft(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function dm(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || o;
}
function as(e, t, r, o, i) {
  const s = [t, r, ...o];
  [].forEach.call(e.children, (a) => {
    const l = !s.includes(a), c = !dm(a);
    l && c && Cr(a, i);
  });
}
function tn(e, t) {
  let r = -1;
  return e.some((o, i) => t(o) ? (r = i, !0) : !1), r;
}
function pm(e, t) {
  const r = [], o = e.container;
  if (!t.disableScrollLock) {
    if (um(o)) {
      const a = ka(Ft(o));
      r.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${ss(o) + a}px`;
      const l = Ge(o).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        r.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${ss(c) + a}px`;
      });
    }
    let s;
    if (o.parentNode instanceof DocumentFragment)
      s = Ge(o).body;
    else {
      const a = o.parentElement, l = Ft(o);
      s = a?.nodeName === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : o;
    }
    r.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function fm(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class mm {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Cr(t.modalRef, !1);
    const i = fm(r);
    as(r, t.mount, t.modalRef, i, !0);
    const s = tn(this.containers, (a) => a.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, r) {
    const o = tn(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    i.restore || (i.restore = pm(i, r));
  }
  remove(t, r = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = tn(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(o, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Cr(t.modalRef, r), as(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Cr(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const hm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function gm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function ym(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function bm(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || ym(e));
}
function vm(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(hm)).forEach((o, i) => {
    const s = gm(o);
    s === -1 || !bm(o) || (s === 0 ? t.push(o) : r.push({
      documentOrder: i,
      tabIndex: s,
      node: o
    }));
  }), r.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function xm() {
  return !0;
}
function yo(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = vm,
    isEnabled: a = xm,
    open: l
  } = e, c = E.useRef(!1), u = E.useRef(null), d = E.useRef(null), m = E.useRef(null), g = E.useRef(null), h = E.useRef(!1), y = E.useRef(null), p = Le(Br(t), y), S = E.useRef(null);
  E.useEffect(() => {
    !l || !y.current || (h.current = !r);
  }, [r, l]), E.useEffect(() => {
    if (!l || !y.current)
      return;
    const w = Ge(y.current);
    return y.current.contains(w.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), h.current && y.current.focus()), () => {
      i || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [l]), E.useEffect(() => {
    if (!l || !y.current)
      return;
    const w = Ge(y.current), b = (D) => {
      S.current = D, !(o || !a() || D.key !== "Tab") && w.activeElement === y.current && D.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, v = () => {
      const D = y.current;
      if (D === null)
        return;
      if (!w.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (D.contains(w.activeElement) || o && w.activeElement !== u.current && w.activeElement !== d.current)
        return;
      if (w.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!h.current)
        return;
      let M = [];
      if ((w.activeElement === u.current || w.activeElement === d.current) && (M = s(y.current)), M.length > 0) {
        const P = !!(S.current?.shiftKey && S.current?.key === "Tab"), $ = M[0], B = M[M.length - 1];
        typeof $ != "string" && typeof B != "string" && (P ? B.focus() : $.focus());
      } else
        D.focus();
    };
    w.addEventListener("focusin", v), w.addEventListener("keydown", b, !0);
    const O = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && v();
    }, 50);
    return () => {
      clearInterval(O), w.removeEventListener("focusin", v), w.removeEventListener("keydown", b, !0);
    };
  }, [r, o, i, a, l, s]);
  const C = (w) => {
    m.current === null && (m.current = w.relatedTarget), h.current = !0, g.current = w.target;
    const b = t.props.onFocus;
    b && b(w);
  }, R = (w) => {
    m.current === null && (m.current = w.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ T.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ T.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: R,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: p,
      onFocus: C
    }), /* @__PURE__ */ T.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: R,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (yo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: ir,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (yo.propTypes = jo(yo.propTypes));
const Sm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Aa = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = _r(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: m,
    onEntering: g,
    onExit: h,
    onExited: y,
    onExiting: p,
    style: S,
    timeout: C = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = nt,
    ...w
  } = t, b = E.useRef(null), v = Le(b, Br(l), r), O = (k) => (j) => {
    if (k) {
      const I = b.current;
      j === void 0 ? k(I) : k(I, j);
    }
  }, D = O(g), M = O((k, j) => {
    ua(k);
    const I = fo({
      style: S,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    k.style.webkitTransition = o.transitions.create("opacity", I), k.style.transition = o.transitions.create("opacity", I), d && d(k, j);
  }), P = O(m), $ = O(p), B = O((k) => {
    const j = fo({
      style: S,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    k.style.webkitTransition = o.transitions.create("opacity", j), k.style.transition = o.transitions.create("opacity", j), h && h(k);
  }), f = O(y), N = (k) => {
    s && s(b.current, k);
  };
  return /* @__PURE__ */ T.jsx(R, {
    appear: a,
    in: u,
    nodeRef: b,
    onEnter: M,
    onEntered: P,
    onEntering: D,
    onExit: B,
    onExited: f,
    onExiting: $,
    addEndListener: N,
    timeout: C,
    ...w,
    children: (k, {
      ownerState: j,
      ...I
    }) => /* @__PURE__ */ E.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: k === "exited" && !u ? "hidden" : void 0,
        ...Sm[k],
        ...S,
        ...l.props.style
      },
      ref: v,
      ...I
    })
  });
});
process.env.NODE_ENV !== "production" && (Aa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: ir.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function Tm(e) {
  return be("MuiBackdrop", e);
}
he("MuiBackdrop", ["root", "invisible"]);
const Em = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return Ce({
    root: ["root", r && "invisible"]
  }, Tm, t);
}, wm = te("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), _a = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: s,
    component: a = "div",
    invisible: l = !1,
    open: c,
    components: u = {},
    componentsProps: d = {},
    slotProps: m = {},
    slots: g = {},
    TransitionComponent: h,
    transitionDuration: y,
    ...p
  } = o, S = {
    ...o,
    component: a,
    invisible: l
  }, C = Em(S), R = {
    transition: h,
    root: u.Root,
    ...g
  }, w = {
    ...d,
    ...m
  }, b = {
    component: a,
    slots: R,
    slotProps: w
  }, [v, O] = ve("root", {
    elementType: wm,
    externalForwardedProps: b,
    className: oe(C.root, s),
    ownerState: S
  }), [D, M] = ve("transition", {
    elementType: Aa,
    externalForwardedProps: b,
    ownerState: S
  });
  return /* @__PURE__ */ T.jsx(D, {
    in: c,
    timeout: y,
    ...p,
    ...M,
    children: /* @__PURE__ */ T.jsx(v, {
      "aria-hidden": !0,
      ...O,
      classes: C,
      ref: r,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (_a.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function Cm(e) {
  return typeof e == "function" ? e() : e;
}
function Om(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ls = () => {
}, Qr = new mm();
function Rm(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: l,
    onClose: c,
    open: u,
    rootRef: d
  } = e, m = E.useRef({}), g = E.useRef(null), h = E.useRef(null), y = Le(h, d), [p, S] = E.useState(!u), C = Om(l);
  let R = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (R = !1);
  const w = () => Ge(g.current), b = () => (m.current.modalRef = h.current, m.current.mount = g.current, m.current), v = () => {
    Qr.mount(b(), {
      disableScrollLock: o
    }), h.current && (h.current.scrollTop = 0);
  }, O = yt(() => {
    const j = Cm(t) || w().body;
    Qr.add(b(), j), h.current && v();
  }), D = () => Qr.isTopModal(b()), M = yt((j) => {
    g.current = j, j && (u && D() ? v() : h.current && Cr(h.current, R));
  }), P = E.useCallback(() => {
    Qr.remove(b(), R);
  }, [R]);
  E.useEffect(() => () => {
    P();
  }, [P]), E.useEffect(() => {
    u ? O() : (!C || !i) && P();
  }, [u, P, C, i, O]);
  const $ = (j) => (I) => {
    j.onKeyDown?.(I), !(I.key !== "Escape" || I.which === 229 || // Wait until IME is settled.
    !D()) && (r || (I.stopPropagation(), c && c(I, "escapeKeyDown")));
  }, B = (j) => (I) => {
    j.onClick?.(I), I.target === I.currentTarget && c && c(I, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const I = Sa(e);
      delete I.onTransitionEnter, delete I.onTransitionExited;
      const V = {
        ...I,
        ...j
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...V,
        onKeyDown: $(V),
        ref: y
      };
    },
    getBackdropProps: (j = {}) => {
      const I = j;
      return {
        "aria-hidden": !0,
        ...I,
        onClick: B(I),
        open: u
      };
    },
    getTransitionProps: () => {
      const j = () => {
        S(!1), s && s();
      }, I = () => {
        S(!0), a && a(), i && P();
      };
      return {
        onEnter: on(j, l?.props.onEnter ?? ls),
        onExited: on(I, l?.props.onExited ?? ls)
      };
    },
    rootRef: y,
    portalRef: M,
    isTopModal: D,
    exited: p,
    hasTransition: C
  };
}
function Pm(e) {
  return be("MuiModal", e);
}
he("MuiModal", ["root", "hidden", "backdrop"]);
const km = (e) => {
  const {
    open: t,
    exited: r,
    classes: o
  } = e;
  return Ce({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, Pm, o);
}, Mm = te("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(xe(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), $m = te(_a, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Da = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = $m,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: m,
    components: g = {},
    componentsProps: h = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: p = !1,
    disableEscapeKeyDown: S = !1,
    disablePortal: C = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: w = !1,
    hideBackdrop: b = !1,
    keepMounted: v = !1,
    onClose: O,
    onTransitionEnter: D,
    onTransitionExited: M,
    open: P,
    slotProps: $ = {},
    slots: B = {},
    // eslint-disable-next-line react/prop-types
    theme: f,
    ...N
  } = o, k = {
    ...o,
    closeAfterTransition: c,
    disableAutoFocus: y,
    disableEnforceFocus: p,
    disableEscapeKeyDown: S,
    disablePortal: C,
    disableRestoreFocus: R,
    disableScrollLock: w,
    hideBackdrop: b,
    keepMounted: v
  }, {
    getRootProps: j,
    getBackdropProps: I,
    getTransitionProps: V,
    portalRef: X,
    isTopModal: H,
    exited: x,
    hasTransition: A
  } = Rm({
    ...k,
    rootRef: r
  }), z = {
    ...k,
    exited: x
  }, W = km(z), U = {};
  if (u.props.tabIndex === void 0 && (U.tabIndex = "-1"), A) {
    const {
      onEnter: q,
      onExited: J
    } = V();
    U.onEnter = q, U.onExited = J;
  }
  const L = {
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...B
    },
    slotProps: {
      ...h,
      ...$
    }
  }, [Y, K] = ve("root", {
    ref: r,
    elementType: Mm,
    externalForwardedProps: {
      ...L,
      ...N,
      component: m
    },
    getSlotProps: j,
    ownerState: z,
    className: oe(l, W?.root, !z.open && z.exited && W?.hidden)
  }), [G, Q] = ve("backdrop", {
    ref: s?.ref,
    elementType: i,
    externalForwardedProps: L,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (q) => I({
      ...q,
      onClick: (J) => {
        q?.onClick && q.onClick(J);
      }
    }),
    className: oe(s?.className, W?.backdrop),
    ownerState: z
  });
  return !v && !P && (!A || x) ? null : /* @__PURE__ */ T.jsx(jr, {
    ref: X,
    container: d,
    disablePortal: C,
    children: /* @__PURE__ */ T.jsxs(Y, {
      ...K,
      children: [!b && i ? /* @__PURE__ */ T.jsx(G, {
        ...Q
      }) : null, /* @__PURE__ */ T.jsx(yo, {
        disableEnforceFocus: p,
        disableAutoFocus: y,
        disableRestoreFocus: R,
        isEnabled: H,
        open: P,
        children: /* @__PURE__ */ E.cloneElement(u, U)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Da.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: ir.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ut, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Nm(e) {
  return be("MuiPaper", e);
}
he("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const jm = (e) => {
  const {
    square: t,
    elevation: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${r}`]
  };
  return Ce(s, Nm, i);
}, Im = te("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(xe(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Ba = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiPaper"
  }), i = _r(), {
    className: s,
    component: a = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...d
  } = o, m = {
    ...o,
    component: a,
    elevation: l,
    square: c,
    variant: u
  }, g = jm(m);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ T.jsx(Im, {
    as: a,
    ownerState: m,
    className: oe(g.root, s),
    ref: r,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": i.vars.overlays?.[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${so("#fff", cn(l))}, ${so("#fff", cn(l))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ba.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: St(Ia, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
function Am(e) {
  return be("MuiPopover", e);
}
he("MuiPopover", ["root", "paper"]);
function cs(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function us(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function ds(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function br(e) {
  return typeof e == "function" ? e() : e;
}
const _m = (e) => {
  const {
    classes: t
  } = e;
  return Ce({
    root: ["root"],
    paper: ["paper"]
  }, Am, t);
}, Dm = te(Da, {
  name: "MuiPopover",
  slot: "Root"
})({}), Fa = te(Ba, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), za = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: u,
    className: d,
    container: m,
    elevation: g = 8,
    marginThreshold: h = 16,
    open: y,
    PaperProps: p = {},
    // TODO: remove in v7
    slots: S = {},
    slotProps: C = {},
    transformOrigin: R = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w,
    // TODO: remove in v7
    transitionDuration: b = "auto",
    TransitionProps: v = {},
    // TODO: remove in v7
    disableScrollLock: O = !1,
    ...D
  } = o, M = E.useRef(), P = {
    ...o,
    anchorOrigin: a,
    anchorReference: c,
    elevation: g,
    marginThreshold: h,
    transformOrigin: R,
    TransitionComponent: w,
    transitionDuration: b,
    TransitionProps: v
  }, $ = _m(P), B = E.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const q = br(s), J = q && q.nodeType === 1 ? q : Ge(M.current).body, F = J.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ie = J.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ie.top === 0 && ie.left === 0 && ie.right === 0 && ie.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: F.top + cs(F, a.vertical),
      left: F.left + us(F, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), f = E.useCallback((q) => ({
    vertical: cs(q, R.vertical),
    horizontal: us(q, R.horizontal)
  }), [R.horizontal, R.vertical]), N = E.useCallback((q) => {
    const J = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, F = f(J);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ds(F)
      };
    const ie = B();
    let fe = ie.top - F.vertical, Oe = ie.left - F.horizontal;
    const Ue = fe + J.height, $e = Oe + J.width, ke = Ft(br(s)), ge = ke.innerHeight - h, Re = ke.innerWidth - h;
    if (h !== null && fe < h) {
      const me = fe - h;
      fe -= me, F.vertical += me;
    } else if (h !== null && Ue > ge) {
      const me = Ue - ge;
      fe -= me, F.vertical += me;
    }
    if (process.env.NODE_ENV !== "production" && J.height > ge && J.height && ge && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${J.height - ge}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), h !== null && Oe < h) {
      const me = Oe - h;
      Oe -= me, F.horizontal += me;
    } else if ($e > Re) {
      const me = $e - Re;
      Oe -= me, F.horizontal += me;
    }
    return {
      top: `${Math.round(fe)}px`,
      left: `${Math.round(Oe)}px`,
      transformOrigin: ds(F)
    };
  }, [s, c, B, f, h]), [k, j] = E.useState(y), I = E.useCallback(() => {
    const q = M.current;
    if (!q)
      return;
    const J = N(q);
    J.top !== null && q.style.setProperty("top", J.top), J.left !== null && (q.style.left = J.left), q.style.transformOrigin = J.transformOrigin, j(!0);
  }, [N]);
  E.useEffect(() => (O && window.addEventListener("scroll", I), () => window.removeEventListener("scroll", I)), [s, O, I]);
  const V = () => {
    I();
  }, X = () => {
    j(!1);
  };
  E.useEffect(() => {
    y && I();
  }), E.useImperativeHandle(i, () => y ? {
    updatePosition: () => {
      I();
    }
  } : null, [y, I]), E.useEffect(() => {
    if (!y)
      return;
    const q = Md(() => {
      I();
    }), J = Ft(br(s));
    return J.addEventListener("resize", q), () => {
      q.clear(), J.removeEventListener("resize", q);
    };
  }, [s, y, I]);
  let H = b;
  const x = {
    slots: {
      transition: w,
      ...S
    },
    slotProps: {
      transition: v,
      paper: p,
      ...C
    }
  }, [A, z] = ve("transition", {
    elementType: Mr,
    externalForwardedProps: x,
    ownerState: P,
    getSlotProps: (q) => ({
      ...q,
      onEntering: (J, F) => {
        q.onEntering?.(J, F), V();
      },
      onExited: (J) => {
        q.onExited?.(J), X();
      }
    }),
    additionalProps: {
      appear: !0,
      in: y
    }
  });
  b === "auto" && !A.muiSupportAuto && (H = void 0);
  const W = m || (s ? Ge(br(s)).body : void 0), [U, {
    slots: L,
    slotProps: Y,
    ...K
  }] = ve("root", {
    ref: r,
    elementType: Dm,
    externalForwardedProps: {
      ...x,
      ...D
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: S.backdrop
      },
      slotProps: {
        backdrop: Nd(typeof C.backdrop == "function" ? C.backdrop(P) : C.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: y
    },
    ownerState: P,
    className: oe($.root, d)
  }), [G, Q] = ve("paper", {
    ref: M,
    className: $.paper,
    elementType: Fa,
    externalForwardedProps: x,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: g,
      style: k ? void 0 : {
        opacity: 0
      }
    },
    ownerState: P
  });
  return /* @__PURE__ */ T.jsx(U, {
    ...K,
    ...!cm(U) && {
      slots: L,
      slotProps: Y,
      disableScrollLock: O
    },
    children: /* @__PURE__ */ T.jsx(A, {
      ...z,
      timeout: H,
      children: /* @__PURE__ */ T.jsx(G, {
        ...Q,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (za.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Tt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: St(n.oneOfType([ut, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = br(e.anchorEl);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ut, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Ia,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: ra
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object
});
function Bm(e) {
  return be("MuiMenu", e);
}
he("MuiMenu", ["root", "paper", "list"]);
const Fm = {
  vertical: "top",
  horizontal: "right"
}, zm = {
  vertical: "top",
  horizontal: "left"
}, Lm = (e) => {
  const {
    classes: t
  } = e;
  return Ce({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Bm, t);
}, Vm = te(za, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Wm = te(Fa, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Um = te($a, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), La = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: s,
    className: a,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: u,
    open: d,
    PaperProps: m = {},
    PopoverClasses: g,
    transitionDuration: h = "auto",
    TransitionProps: {
      onEntering: y,
      ...p
    } = {},
    variant: S = "selectedMenu",
    slots: C = {},
    slotProps: R = {},
    ...w
  } = o, b = jn(), v = {
    ...o,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: y,
    PaperProps: m,
    transitionDuration: h,
    TransitionProps: p,
    variant: S
  }, O = Lm(v), D = i && !l && d, M = E.useRef(null), P = (H, x) => {
    M.current && M.current.adjustStyleForScrollbar(H, {
      direction: b ? "rtl" : "ltr"
    }), y && y(H, x);
  }, $ = (H) => {
    H.key === "Tab" && (H.preventDefault(), u && u(H, "tabKeyDown"));
  };
  let B = -1;
  E.Children.map(s, (H, x) => {
    /* @__PURE__ */ E.isValidElement(H) && (process.env.NODE_ENV !== "production" && Zt.isFragment(H) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), H.props.disabled || (S === "selectedMenu" && H.props.selected || B === -1) && (B = x));
  });
  const f = {
    slots: C,
    slotProps: {
      list: c,
      transition: p,
      paper: m,
      ...R
    }
  }, N = wa({
    elementType: C.root,
    externalSlotProps: R.root,
    ownerState: v,
    className: [O.root, a]
  }), [k, j] = ve("paper", {
    className: O.paper,
    elementType: Wm,
    externalForwardedProps: f,
    shouldForwardComponentProp: !0,
    ownerState: v
  }), [I, V] = ve("list", {
    className: oe(O.list, c.className),
    elementType: Um,
    shouldForwardComponentProp: !0,
    externalForwardedProps: f,
    getSlotProps: (H) => ({
      ...H,
      onKeyDown: (x) => {
        $(x), H.onKeyDown?.(x);
      }
    }),
    ownerState: v
  }), X = typeof f.slotProps.transition == "function" ? f.slotProps.transition(v) : f.slotProps.transition;
  return /* @__PURE__ */ T.jsx(Vm, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: b ? "right" : "left"
    },
    transformOrigin: b ? Fm : zm,
    slots: {
      root: C.root,
      paper: k,
      backdrop: C.backdrop,
      ...C.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: C.transition
      }
    },
    slotProps: {
      root: N,
      paper: j,
      backdrop: typeof R.backdrop == "function" ? R.backdrop(v) : R.backdrop,
      transition: {
        ...X,
        onEntering: (...H) => {
          P(...H), X?.onEntering?.(...H);
        }
      }
    },
    open: d,
    ref: r,
    transitionDuration: h,
    ownerState: v,
    ...w,
    classes: g,
    children: /* @__PURE__ */ T.jsx(I, {
      actions: M,
      autoFocus: i && (B === -1 || l),
      autoFocusItem: D,
      variant: S,
      ...V,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (La.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([ut, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    list: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    list: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
const ps = he("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), fs = he("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function Hm(e) {
  return be("MuiTypography", e);
}
he("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const qm = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Ym = Od(), Gm = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: o,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${ee(t)}`, r && "gutterBottom", o && "noWrap", i && "paragraph"]
  };
  return Ce(l, Hm, a);
}, Km = te("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${ee(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(xe(({
  theme: e
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(e.typography).filter(([t, r]) => t !== "inherit" && r && typeof r == "object").map(([t, r]) => ({
    props: {
      variant: t
    },
    style: r
  })), ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${ee(t)}`
    },
    style: {
      color: (e.vars || e).palette.text[t]
    }
  })), {
    props: ({
      ownerState: t
    }) => t.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), ms = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, _t = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    color: o,
    ...i
  } = Se({
    props: t,
    name: "MuiTypography"
  }), s = !qm[o], a = Ym({
    ...i,
    ...s && {
      color: o
    }
  }), {
    align: l = "inherit",
    className: c,
    component: u,
    gutterBottom: d = !1,
    noWrap: m = !1,
    paragraph: g = !1,
    variant: h = "body1",
    variantMapping: y = ms,
    ...p
  } = a, S = {
    ...a,
    align: l,
    color: o,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: m,
    paragraph: g,
    variant: h,
    variantMapping: y
  }, C = u || (g ? "p" : y[h] || ms[h]) || "span", R = Gm(S);
  return /* @__PURE__ */ T.jsx(Km, {
    as: C,
    ref: r,
    className: oe(R.root, c),
    ...p,
    ownerState: S,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (_t.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: n.object
});
const hs = he("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function Xm(e) {
  return be("MuiMenuItem", e);
}
const mr = he("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Jm = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, Qm = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: o,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = Ce({
    root: ["root", r && "dense", t && "disabled", !i && "gutters", o && "divider", s && "selected"]
  }, Xm, a);
  return {
    ...a,
    ...c
  };
}, Zm = te(Dr, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Jm
})(xe(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${mr.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${mr.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${mr.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${mr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${mr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${ps.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ps.inset}`]: {
    marginLeft: 52
  },
  [`& .${hs.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${hs.inset}`]: {
    paddingLeft: 36
  },
  [`& .${fs.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${fs.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Va = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: m,
    className: g,
    ...h
  } = o, y = E.useContext(go), p = E.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: c
  }), [y.dense, a, c]), S = E.useRef(null);
  lt(() => {
    i && (S.current ? S.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const C = {
    ...o,
    dense: p.dense,
    divider: l,
    disableGutters: c
  }, R = Qm(o), w = Le(S, r);
  let b;
  return o.disabled || (b = m !== void 0 ? m : -1), /* @__PURE__ */ T.jsx(go.Provider, {
    value: p,
    children: /* @__PURE__ */ T.jsx(Zm, {
      ref: w,
      role: d,
      tabIndex: b,
      component: s,
      focusVisibleClassName: oe(R.focusVisible, u),
      className: oe(R.root, g),
      ...h,
      ownerState: C,
      classes: R
    })
  });
});
process.env.NODE_ENV !== "production" && (Va.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: n.bool,
  /**
   * @ignore
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  role: n.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number
});
function eh(e) {
  return be("MuiIcon", e);
}
he("MuiIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const th = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ee(t)}`, `fontSize${ee(r)}`]
  };
  return Ce(i, eh, o);
}, rh = te("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ee(r.color)}`], t[`fontSize${ee(r.fontSize)}`]];
  }
})(xe(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  // Chrome fix for https://issues.chromium.org/issues/41375697
  // To remove at some point.
  overflow: "hidden",
  display: "inline-block",
  // allow overflow hidden to take action
  textAlign: "center",
  // support non-square icon
  flexShrink: 0,
  variants: [{
    props: {
      fontSize: "inherit"
    },
    style: {
      fontSize: "inherit"
    }
  }, {
    props: {
      fontSize: "small"
    },
    style: {
      fontSize: e.typography.pxToRem(20)
    }
  }, {
    props: {
      fontSize: "medium"
    },
    style: {
      fontSize: e.typography.pxToRem(24)
    }
  }, {
    props: {
      fontSize: "large"
    },
    style: {
      fontSize: e.typography.pxToRem(36)
    }
  }, {
    props: {
      color: "action"
    },
    style: {
      color: (e.vars || e).palette.action.active
    }
  }, {
    props: {
      color: "disabled"
    },
    style: {
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: void 0
    }
  }, ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Kn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiIcon"
  }), {
    baseClassName: i = "material-icons",
    className: s,
    color: a = "inherit",
    component: l = "span",
    fontSize: c = "medium",
    ...u
  } = o, d = {
    ...o,
    baseClassName: i,
    color: a,
    component: l,
    fontSize: c
  }, m = th(d);
  return /* @__PURE__ */ T.jsx(rh, {
    as: l,
    className: oe(
      i,
      // Prevent the translation of the text content.
      // The font relies on the exact text content to render the icon.
      "notranslate",
      m.root,
      s
    ),
    ownerState: d,
    "aria-hidden": !0,
    ref: r,
    ...u
  });
});
process.env.NODE_ENV !== "production" && (Kn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The base class applied to the icon. Defaults to 'material-icons', but can be changed to any
   * other base class that suits the icon font you're using (for example material-icons-rounded, fas, etc).
   * @default 'material-icons'
   */
  baseClassName: n.string,
  /**
   * The name of the icon font ligature.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
Kn.muiName = "Icon";
const Wa = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
}), "Person"), oh = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), "KeyboardArrowDown"), nh = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), "KeyboardArrowUp");
function ih(e) {
  return be("MuiButton", e);
}
const Mt = he("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Ua = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Ua.displayName = "ButtonGroupContext");
const Ha = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ha.displayName = "ButtonGroupButtonContext");
const sh = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: o,
    size: i,
    variant: s,
    loading: a,
    loadingPosition: l,
    classes: c
  } = e, u = {
    root: ["root", a && "loading", s, `${s}${ee(t)}`, `size${ee(i)}`, `${s}Size${ee(i)}`, `color${ee(t)}`, r && "disableElevation", o && "fullWidth", a && `loadingPosition${ee(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${ee(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${ee(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = Ce(u, ih, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, qa = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], ah = te(Dr, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ee(r.color)}`], t[`size${ee(r.size)}`], t[`${r.variant}Size${ee(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Mt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Mt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Mt.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Mt.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(ct()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[o].main,
        "--variant-outlinedColor": (e.vars || e).palette[o].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[o].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[o].contrastText,
        "--variant-containedBg": (e.vars || e).palette[o].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[o].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[o].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Mt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Mt.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Mt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), lh = te("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${ee(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...qa]
})), ch = te("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${ee(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...qa]
})), uh = te("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), gs = te("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Ya = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = E.useContext(Ua), i = E.useContext(Ha), s = Rr(o, t), a = Se({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: m = !1,
    disableElevation: g = !1,
    disableFocusRipple: h = !1,
    endIcon: y,
    focusVisibleClassName: p,
    fullWidth: S = !1,
    id: C,
    loading: R = null,
    loadingIndicator: w,
    loadingPosition: b = "center",
    size: v = "medium",
    startIcon: O,
    type: D,
    variant: M = "text",
    ...P
  } = a, $ = Io(C), B = w ?? /* @__PURE__ */ T.jsx(zn, {
    "aria-labelledby": $,
    color: "inherit",
    size: 16
  }), f = {
    ...a,
    color: c,
    component: u,
    disabled: m,
    disableElevation: g,
    disableFocusRipple: h,
    fullWidth: S,
    loading: R,
    loadingIndicator: B,
    loadingPosition: b,
    size: v,
    type: D,
    variant: M
  }, N = sh(f), k = (O || R && b === "start") && /* @__PURE__ */ T.jsx(lh, {
    className: N.startIcon,
    ownerState: f,
    children: O || /* @__PURE__ */ T.jsx(gs, {
      className: N.loadingIconPlaceholder,
      ownerState: f
    })
  }), j = (y || R && b === "end") && /* @__PURE__ */ T.jsx(ch, {
    className: N.endIcon,
    ownerState: f,
    children: y || /* @__PURE__ */ T.jsx(gs, {
      className: N.loadingIconPlaceholder,
      ownerState: f
    })
  }), I = i || "", V = typeof R == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: N.loadingWrapper,
      style: {
        display: "contents"
      },
      children: R && /* @__PURE__ */ T.jsx(uh, {
        className: N.loadingIndicator,
        ownerState: f,
        children: B
      })
    })
  ) : null;
  return /* @__PURE__ */ T.jsxs(ah, {
    ownerState: f,
    className: oe(o.className, N.root, d, I),
    component: u,
    disabled: m || R,
    focusRipple: !h,
    focusVisibleClassName: oe(N.focusVisible, p),
    ref: r,
    type: D,
    id: R ? $ : C,
    ...P,
    classes: N,
    children: [k, b !== "end" && V, l, b === "end" && V, j]
  });
});
process.env.NODE_ENV !== "production" && (Ya.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: n.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
function Ga(e) {
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
function xn({
  children: e,
  circle: t,
  block: r,
  inverted: o,
  loading: i,
  clearBlock: s,
  color: a,
  className: l,
  sx: c,
  ...u
}) {
  const d = Ga(a), m = {
    // Se for circular, o padding horizontal é 0, senão é 3
    px: t ? 0 : 3,
    // Se for circular, aplica todos os estilos de círculo
    ...t && {
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
  return /* @__PURE__ */ T.jsx(
    Ya,
    {
      className: Dt(
        "br-button",
        d,
        {
          circle: t,
          block: r,
          inverted: o,
          loading: i,
          [`auto-${s}`]: !!s
        },
        l
      ),
      sx: { ...m, ...c },
      ...u,
      children: e
    }
  );
}
function Eg({
  name: e,
  src: t,
  alt: r,
  menuItems: o = [],
  onNavigate: i,
  size: s = "medium",
  color: a = "default",
  className: l = ""
}) {
  const [c, u] = Sr(null), d = !!c, m = (v) => {
    o.length > 0 && u(v.currentTarget);
  }, g = () => {
    u(null);
  }, h = (v) => {
    i?.(v), g();
  }, y = { small: 32, medium: 40, large: 48 }, p = {
    default: "var(--color-primary-lighten-01)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)"
  }, S = y[s] ?? 40, C = {
    width: S,
    height: S,
    bgcolor: p[a] ?? p.default,
    fontSize: S * 0.5
  }, R = {
    p: "var(--spacing-scale-base)",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "var(--text-color-primary)",
    minHeight: S + 16,
    // altura mínima baseada no avatar + padding
    fontSize: s === "small" ? "0.875rem" : s === "large" ? "1.125rem" : "1rem"
  }, b = e ? ((v) => v.split(" ").map((O) => O[0]).join("").toUpperCase().slice(0, 2))(e) : /* @__PURE__ */ T.jsx(Wa, { fontSize: "inherit" });
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsxs(
      xn,
      {
        className: l,
        onClick: m,
        "aria-controls": d ? "avatar-menu" : void 0,
        "aria-haspopup": o.length > 0,
        "aria-expanded": d,
        sx: R,
        children: [
          /* @__PURE__ */ T.jsx(Ra, { src: t, alt: r || e, sx: C, children: b }),
          /* @__PURE__ */ T.jsxs("span", { children: [
            "Olá, ",
            /* @__PURE__ */ T.jsx("strong", { children: e || "Usuário" })
          ] }),
          o.length > 0 && (d ? /* @__PURE__ */ T.jsx(nh, {}) : /* @__PURE__ */ T.jsx(oh, {}))
        ]
      }
    ),
    /* @__PURE__ */ T.jsx(
      La,
      {
        id: "avatar-menu",
        anchorEl: c,
        open: d,
        onClose: g,
        slotProps: {
          list: { "aria-labelledby": "avatar-button" }
        },
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
        children: o.map((v) => /* @__PURE__ */ T.jsxs(Va, { onClick: () => v.href && h(v.href), children: [
          v.icon && /* @__PURE__ */ T.jsx(Kn, { sx: { mr: 1.5 }, children: v.icon }),
          v.label
        ] }, v.href))
      }
    )
  ] });
}
function wg({ items: e, onNavigate: t, className: r, ...o }) {
  const i = (s, a) => {
    s.preventDefault(), t(a);
  };
  return /* @__PURE__ */ T.jsx("nav", { className: Dt("br-breadcrumb", r), "aria-label": "Breadcrumb", ...o, children: /* @__PURE__ */ T.jsx("ul", { className: "crumb-list", children: e.map((s, a) => /* @__PURE__ */ T.jsx("li", { className: "crumb", children: s.href ? /* @__PURE__ */ T.jsx(
    "a",
    {
      className: "crumb-link",
      href: s.href,
      onClick: (l) => i(l, s.href),
      children: s.label
    }
  ) : /* @__PURE__ */ T.jsx("span", { className: "crumb-active", "aria-current": "page", children: s.label }) }, a)) }) });
}
function dh({
  id: e,
  label: t,
  status: r,
  indeterminate: o = !1,
  hiddenLabel: i = !1,
  className: s,
  disabled: a,
  ...l
}) {
  const c = wl(null);
  Kt(() => {
    c.current && (c.current.indeterminate = o);
  }, [o]);
  const u = Dt(
    "br-checkbox",
    r,
    {
      disabled: a,
      "hidden-label": i
    },
    s
  );
  return /* @__PURE__ */ T.jsxs("div", { className: u, children: [
    /* @__PURE__ */ T.jsx("input", { ref: c, id: e, type: "checkbox", disabled: a, ...l }),
    /* @__PURE__ */ T.jsx("label", { htmlFor: e, children: t })
  ] });
}
const Or = qu({
  createStyledComponent: te("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => Se({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Or.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
  /**
   * Add an element between each child.
   */
  divider: n.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: n.bool
});
var ph = (e) => e.type === "checkbox", vr = (e) => e instanceof Date, Xn = (e) => e == null;
const Ka = (e) => typeof e == "object";
var Lt = (e) => !Xn(e) && !Array.isArray(e) && Ka(e) && !vr(e), fh = (e) => Lt(e) && e.target ? ph(e.target) ? e.target.checked : e.target.value : e, mh = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, hh = (e, t) => e.has(mh(t)), gh = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Lt(t) && t.hasOwnProperty("isPrototypeOf");
}, yh = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Xa(e) {
  let t;
  const r = Array.isArray(e), o = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(yh && (e instanceof Blob || o)) && (r || Lt(e)))
    if (t = r ? [] : Object.create(Object.getPrototypeOf(e)), !r && !gh(e))
      t = e;
    else
      for (const i in e)
        e.hasOwnProperty(i) && (t[i] = Xa(e[i]));
  else
    return e;
  return t;
}
var Ja = (e) => /^\w*$/.test(e), Sn = (e) => e === void 0, bh = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Qa = (e) => bh(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Be = (e, t, r) => {
  if (!t || !Lt(e))
    return r;
  const o = (Ja(t) ? [t] : Qa(t)).reduce((i, s) => Xn(i) ? i : i[s], e);
  return Sn(o) || o === e ? Sn(e[t]) ? r : e[t] : o;
}, rn = (e) => typeof e == "boolean", ys = (e, t, r) => {
  let o = -1;
  const i = Ja(t) ? [t] : Qa(t), s = i.length, a = s - 1;
  for (; ++o < s; ) {
    const l = i[o];
    let c = r;
    if (o !== a) {
      const u = e[l];
      c = Lt(u) || Array.isArray(u) ? u : isNaN(+i[o + 1]) ? {} : [];
    }
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return;
    e[l] = c, e = e[l];
  }
};
const bs = {
  BLUR: "blur",
  CHANGE: "change"
}, vs = {
  all: "all"
}, Za = ne.createContext(null);
Za.displayName = "HookFormContext";
const Jn = () => ne.useContext(Za);
var vh = (e, t, r, o = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(i, s, {
      get: () => {
        const a = s;
        return t._proxyFormState[a] !== vs.all && (t._proxyFormState[a] = !o || vs.all), r && (r[a] = !0), e[a];
      }
    });
  return i;
};
const el = typeof window < "u" ? ne.useLayoutEffect : ne.useEffect;
function xh(e) {
  const t = Jn(), { control: r = t.control, disabled: o, name: i, exact: s } = e || {}, [a, l] = ne.useState(r._formState), c = ne.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return el(() => r._subscribe({
    name: i,
    formState: c.current,
    exact: s,
    callback: (u) => {
      !o && l({
        ...r._formState,
        ...u
      });
    }
  }), [i, o, s]), ne.useEffect(() => {
    c.current.isValid && r._setValid(!0);
  }, [r]), ne.useMemo(() => vh(a, r, c.current, !1), [a, r]);
}
var Sh = (e) => typeof e == "string", Th = (e, t, r, o, i) => Sh(e) ? Be(r, e, i) : Array.isArray(e) ? e.map((s) => Be(r, s)) : r, xs = (e) => Xn(e) || !Ka(e);
function tl(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (xs(e) || xs(t))
    return e === t;
  if (vr(e) && vr(t))
    return e.getTime() === t.getTime();
  const o = Object.keys(e), i = Object.keys(t);
  if (o.length !== i.length)
    return !1;
  if (r.has(e) || r.has(t))
    return !0;
  r.add(e), r.add(t);
  for (const s of o) {
    const a = e[s];
    if (!i.includes(s))
      return !1;
    if (s !== "ref") {
      const l = t[s];
      if (vr(a) && vr(l) || Lt(a) && Lt(l) || Array.isArray(a) && Array.isArray(l) ? !tl(a, l, r) : a !== l)
        return !1;
    }
  }
  return !0;
}
function Eh(e) {
  const t = Jn(), { control: r = t.control, name: o, defaultValue: i, disabled: s, exact: a, compute: l } = e || {}, c = ne.useRef(i), u = ne.useRef(l), d = ne.useRef(void 0);
  u.current = l;
  const m = ne.useMemo(() => r._getWatch(o, c.current), [r, o]), [g, h] = ne.useState(u.current ? u.current(m) : m);
  return el(() => r._subscribe({
    name: o,
    formState: {
      values: !0
    },
    exact: a,
    callback: (y) => {
      if (!s) {
        const p = Th(o, r._names, y.values || r._formValues, !1, c.current);
        if (u.current) {
          const S = u.current(p);
          tl(S, d.current) || (h(S), d.current = S);
        } else
          h(p);
      }
    }
  }), [r, s, o, a]), ne.useEffect(() => r._removeUnmounted()), g;
}
function wh(e) {
  const t = Jn(), { name: r, disabled: o, control: i = t.control, shouldUnregister: s, defaultValue: a } = e, l = hh(i._names.array, r), c = ne.useMemo(() => Be(i._formValues, r, Be(i._defaultValues, r, a)), [i, r, a]), u = Eh({
    control: i,
    name: r,
    defaultValue: c,
    exact: !0
  }), d = xh({
    control: i,
    name: r,
    exact: !0
  }), m = ne.useRef(e), g = ne.useRef(i.register(r, {
    ...e.rules,
    value: u,
    ...rn(e.disabled) ? { disabled: e.disabled } : {}
  }));
  m.current = e;
  const h = ne.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Be(d.errors, r)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Be(d.dirtyFields, r)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Be(d.touchedFields, r)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Be(d.validatingFields, r)
    },
    error: {
      enumerable: !0,
      get: () => Be(d.errors, r)
    }
  }), [d, r]), y = ne.useCallback((R) => g.current.onChange({
    target: {
      value: fh(R),
      name: r
    },
    type: bs.CHANGE
  }), [r]), p = ne.useCallback(() => g.current.onBlur({
    target: {
      value: Be(i._formValues, r),
      name: r
    },
    type: bs.BLUR
  }), [r, i._formValues]), S = ne.useCallback((R) => {
    const w = Be(i._fields, r);
    w && R && (w._f.ref = {
      focus: () => R.focus && R.focus(),
      select: () => R.select && R.select(),
      setCustomValidity: (b) => R.setCustomValidity(b),
      reportValidity: () => R.reportValidity()
    });
  }, [i._fields, r]), C = ne.useMemo(() => ({
    name: r,
    value: u,
    ...rn(o) || d.disabled ? { disabled: d.disabled || o } : {},
    onChange: y,
    onBlur: p,
    ref: S
  }), [r, o, d.disabled, y, p, S, u]);
  return ne.useEffect(() => {
    const R = i._options.shouldUnregister || s;
    i.register(r, {
      ...m.current.rules,
      ...rn(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const w = (b, v) => {
      const O = Be(i._fields, b);
      O && O._f && (O._f.mount = v);
    };
    if (w(r, !0), R) {
      const b = Xa(Be(i._options.defaultValues, r));
      ys(i._defaultValues, r, b), Sn(Be(i._formValues, r)) && ys(i._formValues, r, b);
    }
    return !l && i.register(r), () => {
      (l ? R && !i._state.action : R) ? i.unregister(r) : w(r, !1);
    };
  }, [r, i, l, s]), ne.useEffect(() => {
    i._setDisabledField({
      disabled: o,
      name: r
    });
  }, [o, r, i]), ne.useMemo(() => ({
    field: C,
    formState: d,
    fieldState: h
  }), [C, d, h]);
}
const rl = (e) => e.render(wh(e)), Ch = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), Oh = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), Rh = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
}), "Lock"), Ph = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), "Visibility"), kh = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), "VisibilityOff"), ol = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"
}), "Error"), Mh = {
  None: null,
  Person: /* @__PURE__ */ T.jsx(Wa, {}),
  Search: /* @__PURE__ */ T.jsx(Ch, {}),
  Email: /* @__PURE__ */ T.jsx(Oh, {}),
  Lock: /* @__PURE__ */ T.jsx(Rh, {}),
  Visibility: /* @__PURE__ */ T.jsx(Ph, {}),
  VisibilityOff: /* @__PURE__ */ T.jsx(kh, {}),
  Error: /* @__PURE__ */ T.jsx(ol, { fontSize: "small", style: { verticalAlign: "middle", marginRight: "4px" } })
};
function $h({
  name: e,
  control: t,
  rules: r,
  required: o,
  ...i
}) {
  const s = o ? {
    ...r,
    required: typeof o == "string" ? o : "Campo obrigatório"
  } : r;
  return /* @__PURE__ */ T.jsx(
    rl,
    {
      name: e,
      control: t,
      rules: s,
      render: ({ field: a, fieldState: l }) => /* @__PURE__ */ T.jsxs(Or, { children: [
        /* @__PURE__ */ T.jsx(
          dh,
          {
            ...i,
            id: e,
            ...a,
            checked: !!a.value,
            status: l.error ? "invalid" : i.status
          }
        ),
        l.error && /* @__PURE__ */ T.jsxs("span", { className: Dt("feedback", "invalid"), role: "alert", children: [
          Mh.Error,
          l.error.message
        ] })
      ] })
    }
  );
}
$h.displayName = "GovBRFormCheckbox";
const Nh = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}), "Info"), jh = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"
}), "Warning"), nl = ({
  govbrSize: e = "medium",
  status: t = void 0,
  error: r = !1,
  clearBlock: o,
  id: i,
  label: s = "",
  feedbackMessage: a = "",
  helperText: l = "",
  disabled: c = !1,
  highlight: u = !1,
  inline: d,
  startIcon: m,
  endButtonIcon: g,
  onEndButtonClick: h,
  className: y = "br-input",
  placeholder: p,
  ...S
}) => {
  const C = Ga(), R = i ? `${i}-feedback` : void 0, w = r ? "danger" : t, b = {
    success: /* @__PURE__ */ T.jsx(ta, { fontSize: "small" }),
    danger: /* @__PURE__ */ T.jsx(ol, { fontSize: "small" }),
    info: /* @__PURE__ */ T.jsx(Nh, { fontSize: "small" }),
    warning: /* @__PURE__ */ T.jsx(jh, { fontSize: "small" })
  };
  return /* @__PURE__ */ T.jsxs(
    "div",
    {
      className: Dt(
        "br-input",
        e,
        w,
        C,
        { [`auto-${o}`]: !!o },
        { "input-highlight": u, "input-inline": d },
        y
      ),
      children: [
        d ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx("div", { className: "input-label", children: /* @__PURE__ */ T.jsx("label", { htmlFor: i, className: "text-nowrap", children: s }) }),
          /* @__PURE__ */ T.jsx("div", { className: "input-content", children: /* @__PURE__ */ T.jsxs("div", { className: "input-group", children: [
            m && /* @__PURE__ */ T.jsx("div", { className: "input-icon", children: m }),
            /* @__PURE__ */ T.jsx(
              "input",
              {
                id: i,
                placeholder: p,
                disabled: c,
                "aria-describedby": R,
                className: y,
                ...S
              }
            ),
            g && /* @__PURE__ */ T.jsx(xn, { circle: !0, onClick: h, children: g })
          ] }) })
        ] }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          s && /* @__PURE__ */ T.jsx("label", { htmlFor: i, children: s }),
          /* @__PURE__ */ T.jsxs("div", { className: "input-group", children: [
            m && /* @__PURE__ */ T.jsx("div", { className: "input-icon", children: m }),
            /* @__PURE__ */ T.jsx(
              "input",
              {
                id: i,
                placeholder: p,
                disabled: c,
                "aria-describedby": R,
                className: y,
                ...S
              }
            ),
            g && /* @__PURE__ */ T.jsx(xn, { circle: !0, onClick: h, children: g })
          ] })
        ] }),
        (a || l) && /* @__PURE__ */ T.jsxs(
          "span",
          {
            className: Dt("feedback", w),
            role: "alert",
            id: R,
            style: {
              display: "inline-block",
              width: "auto",
              marginTop: "0.25rem",
              padding: "0.2rem var(--spacing-scale-2x)",
              lineHeight: "1.2"
            },
            children: [
              w && b[w],
              " ",
              a ?? l
            ]
          }
        )
      ]
    }
  );
};
nl.displayName = "GovBRInput";
function Cg({
  name: e,
  control: t,
  rules: r,
  required: o,
  label: i,
  ...s
}) {
  return /* @__PURE__ */ T.jsx(
    rl,
    {
      name: e,
      control: t,
      rules: r,
      render: ({ field: a, fieldState: l }) => /* @__PURE__ */ T.jsx(
        nl,
        {
          ...s,
          ...a,
          label: i,
          required: o,
          status: l.error ? "danger" : void 0,
          feedbackMessage: l.error?.message
        }
      )
    }
  );
}
const il = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (il.displayName = "FormControlContext");
function Qn() {
  return E.useContext(il);
}
function Ih(e) {
  return be("PrivateSwitchBase", e);
}
he("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Ah = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: o,
    edge: i
  } = e, s = {
    root: ["root", r && "checked", o && "disabled", i && `edge${ee(i)}`],
    input: ["input"]
  };
  return Ce(s, Ih, t);
}, _h = te(Dr, {
  name: "MuiSwitchBase"
})({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), Dh = te("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: Vt
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), Zn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    autoFocus: o,
    checked: i,
    checkedIcon: s,
    defaultChecked: a,
    disabled: l,
    disableFocusRipple: c = !1,
    edge: u = !1,
    icon: d,
    id: m,
    inputProps: g,
    inputRef: h,
    name: y,
    onBlur: p,
    onChange: S,
    onFocus: C,
    readOnly: R,
    required: w = !1,
    tabIndex: b,
    type: v,
    value: O,
    slots: D = {},
    slotProps: M = {},
    ...P
  } = t, [$, B] = ea({
    controlled: i,
    default: !!a,
    name: "SwitchBase",
    state: "checked"
  }), f = Qn(), N = (L) => {
    C && C(L), f && f.onFocus && f.onFocus(L);
  }, k = (L) => {
    p && p(L), f && f.onBlur && f.onBlur(L);
  }, j = (L) => {
    if (L.nativeEvent.defaultPrevented)
      return;
    const Y = L.target.checked;
    B(Y), S && S(L, Y);
  };
  let I = l;
  f && typeof I > "u" && (I = f.disabled);
  const V = v === "checkbox" || v === "radio", X = {
    ...t,
    checked: $,
    disabled: I,
    disableFocusRipple: c,
    edge: u
  }, H = Ah(X), x = {
    slots: D,
    slotProps: {
      input: g,
      ...M
    }
  }, [A, z] = ve("root", {
    ref: r,
    elementType: _h,
    className: H.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...x,
      component: "span",
      ...P
    },
    getSlotProps: (L) => ({
      ...L,
      onFocus: (Y) => {
        L.onFocus?.(Y), N(Y);
      },
      onBlur: (Y) => {
        L.onBlur?.(Y), k(Y);
      }
    }),
    ownerState: X,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !c,
      disabled: I,
      role: void 0,
      tabIndex: null
    }
  }), [W, U] = ve("input", {
    ref: h,
    elementType: Dh,
    className: H.input,
    externalForwardedProps: x,
    getSlotProps: (L) => ({
      ...L,
      onChange: (Y) => {
        L.onChange?.(Y), j(Y);
      }
    }),
    ownerState: X,
    additionalProps: {
      autoFocus: o,
      checked: i,
      defaultChecked: a,
      disabled: I,
      id: V ? m : void 0,
      name: y,
      readOnly: R,
      required: w,
      tabIndex: b,
      type: v,
      ...v === "checkbox" && O === void 0 ? {} : {
        value: O
      }
    }
  });
  return /* @__PURE__ */ T.jsxs(A, {
    ...z,
    children: [/* @__PURE__ */ T.jsx(W, {
      ...U
    }), $ ? s : d]
  });
});
process.env.NODE_ENV !== "production" && (Zn.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: n.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * @ignore
   */
  defaultChecked: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: n.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Tt,
  /*
   * @ignore
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: n.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    input: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * The input component prop `type`.
   */
  type: n.string.isRequired,
  /**
   * The value of the component.
   */
  value: n.any
});
const Bh = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), Fh = Ne(/* @__PURE__ */ T.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), zh = te("span", {
  name: "MuiRadioButtonIcon",
  shouldForwardProp: Vt
})({
  position: "relative",
  display: "flex"
}), Lh = te(Bh, {
  name: "MuiRadioButtonIcon"
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), Vh = te(Fh, {
  name: "MuiRadioButtonIcon"
})(xe(({
  theme: e
}) => ({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeIn,
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: !0
    },
    style: {
      transform: "scale(1)",
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeOut,
        duration: e.transitions.duration.shortest
      })
    }
  }]
})));
function ei(e) {
  const {
    checked: t = !1,
    classes: r = {},
    fontSize: o
  } = e, i = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ T.jsxs(zh, {
    className: r.root,
    ownerState: i,
    children: [/* @__PURE__ */ T.jsx(Lh, {
      fontSize: o,
      className: r.background,
      ownerState: i
    }), /* @__PURE__ */ T.jsx(Vh, {
      fontSize: o,
      className: r.dot,
      ownerState: i
    })]
  });
}
process.env.NODE_ENV !== "production" && (ei.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: n.oneOf(["small", "medium"])
});
const sl = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (sl.displayName = "RadioGroupContext");
function Wh() {
  return E.useContext(sl);
}
function Uh(e) {
  return be("MuiRadio", e);
}
const Ss = he("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), Hh = (e) => {
  const {
    classes: t,
    color: r,
    size: o
  } = e, i = {
    root: ["root", `color${ee(r)}`, o !== "medium" && `size${ee(o)}`]
  };
  return {
    ...t,
    ...Ce(i, Uh, t)
  };
}, qh = te(Zn, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size !== "medium" && t[`size${ee(r.size)}`], t[`color${ee(r.color)}`]];
  }
})(xe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${Ss.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: {
      color: "default",
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${Ss.checked}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
function Yh(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Gh = /* @__PURE__ */ T.jsx(ei, {
  checked: !0
}), Kh = /* @__PURE__ */ T.jsx(ei, {}), al = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiRadio"
  }), {
    checked: i,
    checkedIcon: s = Gh,
    color: a = "primary",
    icon: l = Kh,
    name: c,
    onChange: u,
    size: d = "medium",
    className: m,
    disabled: g,
    disableRipple: h = !1,
    slots: y = {},
    slotProps: p = {},
    inputProps: S,
    ...C
  } = o, R = Qn();
  let w = g;
  R && typeof w > "u" && (w = R.disabled), w ??= !1;
  const b = {
    ...o,
    disabled: w,
    disableRipple: h,
    color: a,
    size: d
  }, v = Hh(b), O = Wh();
  let D = i;
  const M = on(u, O && O.onChange);
  let P = c;
  O && (typeof D > "u" && (D = Yh(O.value, o.value)), typeof P > "u" && (P = O.name));
  const $ = p.input ?? S, [B, f] = ve("root", {
    ref: r,
    elementType: qh,
    className: oe(v.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: y,
      slotProps: p,
      ...C
    },
    getSlotProps: (N) => ({
      ...N,
      onChange: (k, ...j) => {
        N.onChange?.(k, ...j), M(k, ...j);
      }
    }),
    ownerState: b,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ E.cloneElement(l, {
        fontSize: l.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ E.cloneElement(s, {
        fontSize: s.props.fontSize ?? d
      }),
      disabled: w,
      name: P,
      checked: D,
      slots: y,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof $ == "function" ? $(b) : $
      }
    }
  });
  return /* @__PURE__ */ T.jsx(B, {
    ...f,
    classes: v
  });
});
process.env.NODE_ENV !== "production" && (al.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: n.node,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: Tt,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    input: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: n.any
});
function Xh({
  name: e,
  value: t,
  label: r,
  helpText: o,
  text: i,
  disabled: s,
  checked: a,
  error: l,
  valid: c,
  onChange: u
}) {
  return /* @__PURE__ */ T.jsxs(
    Or,
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
        /* @__PURE__ */ T.jsxs(
          Or,
          {
            sx: {
              // Reset específico para container de labels
              margin: 0,
              padding: 0,
              gap: 0
            },
            children: [
              /* @__PURE__ */ T.jsx(
                _t,
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
                  children: r
                }
              ),
              /* @__PURE__ */ T.jsx(
                _t,
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
                  children: o
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ T.jsxs(
          Or,
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
              /* @__PURE__ */ T.jsx(
                al,
                {
                  disabled: s,
                  checked: a,
                  onChange: u,
                  value: t,
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
                    ...l && {
                      color: "#D04F4F",
                      // var(--danger)
                      "&.Mui-checked": {
                        color: "#D04F4F"
                      }
                    },
                    ...c && !l && {
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
              /* @__PURE__ */ T.jsx(
                _t,
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
                    color: s ? "rgba(0, 0, 0, 0.38)" : "#333",
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    fontFamily: "inherit",
                    // Respeita fonte do tema
                    // Comportamento de clique
                    userSelect: "none",
                    cursor: s ? "not-allowed" : "pointer",
                    // Espaçamento similar ao GovBR-DS
                    paddingLeft: "8px",
                    // Reset de possíveis transformações
                    textTransform: "none",
                    textDecoration: "none",
                    letterSpacing: "normal"
                  },
                  onClick: () => {
                    !s && u && u();
                  },
                  children: i
                }
              )
            ]
          }
        )
      ]
    }
  );
}
Xh.displayName = "GovBRRadio";
function Jh({
  variant: e = "internal",
  emphasis: t,
  density: r,
  circle: o = !1,
  block: i = !1,
  inverted: s = !1,
  className: a,
  iconUrl: l,
  ...c
}) {
  const u = Dt(
    "br-sign-in",
    t,
    r,
    {
      circle: o,
      block: i,
      inverted: s
    },
    a
  ), d = () => {
    switch (e) {
      case "external-image":
        return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          "Entrar com ",
          /* @__PURE__ */ T.jsx(
            "img",
            {
              src: l || "https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png",
              alt: "gov.br"
            }
          )
        ] });
      case "external-text":
        return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          "Entrar com ",
          /* @__PURE__ */ T.jsx("span", { className: "text-black", children: "gov.br" })
        ] });
      case "internal":
      default:
        return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx("i", { className: "fas fa-user", "aria-hidden": "true" }),
          !o && "Entrar"
        ] });
    }
  };
  return /* @__PURE__ */ T.jsx("button", { type: "button", className: u, ...c, children: d() });
}
Jh.displayName = "GovBRSignIn";
const Qh = he("MuiBox", ["root"]), Zh = Ao(), ll = eu({
  themeId: tt,
  defaultTheme: Zh,
  defaultClassName: Qh.root,
  generateClassName: ws.generate
});
process.env.NODE_ENV !== "production" && (ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function eg(e) {
  return be("MuiFormControlLabel", e);
}
const xr = he("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function tg({
  props: e,
  states: t,
  muiFormControl: r
}) {
  return t.reduce((o, i) => (o[i] = e[i], r && typeof e[i] > "u" && (o[i] = r[i]), o), {});
}
const rg = (e) => {
  const {
    classes: t,
    disabled: r,
    labelPlacement: o,
    error: i,
    required: s
  } = e, a = {
    root: ["root", r && "disabled", `labelPlacement${ee(o)}`, i && "error", s && "required"],
    label: ["label", r && "disabled"],
    asterisk: ["asterisk", i && "error"]
  };
  return Ce(a, eg, t);
}, og = te("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${xr.label}`]: t.label
    }, t.root, t[`labelPlacement${ee(r.labelPlacement)}`]];
  }
})(xe(({
  theme: e
}) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${xr.disabled}`]: {
    cursor: "default"
  },
  [`& .${xr.label}`]: {
    [`&.${xr.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: "start"
    },
    style: {
      flexDirection: "row-reverse",
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: "top"
    },
    style: {
      flexDirection: "column-reverse"
    }
  }, {
    props: {
      labelPlacement: "bottom"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      labelPlacement: t
    }) => t === "start" || t === "top" || t === "bottom",
    style: {
      marginLeft: 16
      // used for row presentation of radio/checkbox
    }
  }]
}))), ng = te("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(xe(({
  theme: e
}) => ({
  [`&.${xr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), cl = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: i,
    className: s,
    componentsProps: a = {},
    control: l,
    disabled: c,
    disableTypography: u,
    inputRef: d,
    label: m,
    labelPlacement: g = "end",
    name: h,
    onChange: y,
    required: p,
    slots: S = {},
    slotProps: C = {},
    value: R,
    ...w
  } = o, b = Qn(), v = c ?? l.props.disabled ?? b?.disabled, O = p ?? l.props.required, D = {
    disabled: v,
    required: O
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((j) => {
    typeof l.props[j] > "u" && typeof o[j] < "u" && (D[j] = o[j]);
  });
  const M = tg({
    props: o,
    muiFormControl: b,
    states: ["error"]
  }), P = {
    ...o,
    disabled: v,
    labelPlacement: g,
    required: O,
    error: M.error
  }, $ = rg(P), B = {
    slots: S,
    slotProps: {
      ...a,
      ...C
    }
  }, [f, N] = ve("typography", {
    elementType: _t,
    externalForwardedProps: B,
    ownerState: P
  });
  let k = m;
  return k != null && k.type !== _t && !u && (k = /* @__PURE__ */ T.jsx(f, {
    component: "span",
    ...N,
    className: oe($.label, N?.className),
    children: k
  })), /* @__PURE__ */ T.jsxs(og, {
    className: oe($.root, s),
    ownerState: P,
    ref: r,
    ...w,
    children: [/* @__PURE__ */ E.cloneElement(l, D), O ? /* @__PURE__ */ T.jsxs("div", {
      children: [k, /* @__PURE__ */ T.jsxs(ng, {
        ownerState: P,
        "aria-hidden": !0,
        className: $.asterisk,
        children: [" ", "*"]
      })]
    }) : k]
  });
});
process.env.NODE_ENV !== "production" && (cl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The props used for each slot inside.
   * @default {}
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: n.shape({
    typography: n.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: n.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: n.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Tt,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: n.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: n.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: n.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    typography: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    typography: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component.
   */
  value: n.any
});
function ig(e) {
  return be("MuiSwitch", e);
}
const Ae = he("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), sg = (e) => {
  const {
    classes: t,
    edge: r,
    size: o,
    color: i,
    checked: s,
    disabled: a
  } = e, l = {
    root: ["root", r && `edge${ee(r)}`, `size${ee(o)}`],
    switchBase: ["switchBase", `color${ee(i)}`, s && "checked", a && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, c = Ce(l, ig, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...c
  };
}, ag = te("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.edge && t[`edge${ee(r.edge)}`], t[`size${ee(r.size)}`]];
  }
})({
  display: "inline-flex",
  width: 58,
  height: 38,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${Ae.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Ae.switchBase}`]: {
        padding: 4,
        [`&.${Ae.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), lg = te(Zn, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.switchBase, {
      [`& .${Ae.input}`]: t.input
    }, r.color !== "default" && t[`color${ee(r.color)}`]];
  }
})(xe(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  transition: e.transitions.create(["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${Ae.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${Ae.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${Ae.checked} + .${Ae.track}`]: {
    opacity: 0.5
  },
  [`&.${Ae.disabled} + .${Ae.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${Ae.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), xe(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(ct(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ae.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Ae.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${Ae.checked} + .${Ae.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), cg = te("span", {
  name: "MuiSwitch",
  slot: "Track"
})(xe(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: e.transitions.create(["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
  opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
}))), ug = te("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(xe(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), ul = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const o = Se({
    props: t,
    name: "MuiSwitch"
  }), {
    className: i,
    color: s = "primary",
    edge: a = !1,
    size: l = "medium",
    sx: c,
    slots: u = {},
    slotProps: d = {},
    ...m
  } = o, g = {
    ...o,
    color: s,
    edge: a,
    size: l
  }, h = sg(g), y = {
    slots: u,
    slotProps: d
  }, [p, S] = ve("root", {
    className: oe(h.root, i),
    elementType: ag,
    externalForwardedProps: y,
    ownerState: g,
    additionalProps: {
      sx: c
    }
  }), [C, R] = ve("thumb", {
    className: h.thumb,
    elementType: ug,
    externalForwardedProps: y,
    ownerState: g
  }), w = /* @__PURE__ */ T.jsx(C, {
    ...R
  }), [b, v] = ve("track", {
    className: h.track,
    elementType: cg,
    externalForwardedProps: y,
    ownerState: g
  });
  return /* @__PURE__ */ T.jsxs(p, {
    ...S,
    children: [/* @__PURE__ */ T.jsx(lg, {
      type: "checkbox",
      icon: w,
      checkedIcon: w,
      ref: r,
      ownerState: g,
      ...m,
      classes: {
        ...h,
        root: h.switchBase
      },
      slots: {
        ...u.switchBase && {
          root: u.switchBase
        },
        ...u.input && {
          input: u.input
        }
      },
      slotProps: {
        ...d.switchBase && {
          root: typeof d.switchBase == "function" ? d.switchBase(g) : d.switchBase
        },
        input: {
          role: "switch"
        },
        ...d.input && {
          input: typeof d.input == "function" ? d.input(g) : d.input
        }
      }
    }), /* @__PURE__ */ T.jsx(b, {
      ...v
    })]
  });
});
process.env.NODE_ENV !== "production" && (ul.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: n.node,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: Tt,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    input: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    switchBase: n.oneOfType([n.func, n.object]),
    thumb: n.oneOfType([n.func, n.object]),
    track: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType,
    switchBase: n.elementType,
    thumb: n.elementType,
    track: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: n.any
});
const dg = {
  small: { width: 40, height: 24, thumb: 16, translateX: 16 },
  medium: { width: 52, height: 30, thumb: 22, translateX: 22 },
  large: { width: 64, height: 36, thumb: 28, translateX: 28 }
}, Og = ({
  checked: e,
  onChange: t,
  label: r,
  disabled: o = !1,
  size: i = "medium",
  labelPlacement: s = "end",
  textEnabled: a,
  textDisabled: l,
  strictGovBr: c = !1,
  className: u,
  ...d
}) => {
  const { width: m, height: g, thumb: h, translateX: y } = dg[i], p = s === "top", S = s === "start", C = e ? a : l;
  return /* @__PURE__ */ T.jsxs(
    ll,
    {
      className: u,
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px"
      },
      ...d,
      children: [
        /* @__PURE__ */ T.jsx(
          cl,
          {
            label: r,
            labelPlacement: s,
            control: /* @__PURE__ */ T.jsx(
              ul,
              {
                checked: e,
                onChange: t,
                disabled: o,
                disableRipple: !0,
                sx: {
                  width: m,
                  height: g,
                  padding: 0,
                  "& .MuiSwitch-switchBase": {
                    padding: 0,
                    margin: `${(g - h) / 2}px`,
                    transitionDuration: "200ms",
                    "&.Mui-checked": {
                      transform: `translateX(${y}px)`,
                      "& .MuiSwitch-thumb": {
                        backgroundColor: c ? "#1351b4" : "#5992ed"
                      },
                      "& + .MuiSwitch-track": {
                        backgroundColor: "#ffffff",
                        opacity: 1
                      }
                    }
                  },
                  "& .MuiSwitch-thumb": {
                    width: h,
                    height: h,
                    borderRadius: "50%",
                    backgroundColor: "#cccccc",
                    boxShadow: "none",
                    "&::before, &::after": {
                      content: "none"
                    }
                  },
                  "& .MuiSwitch-track": {
                    width: m,
                    height: g,
                    borderRadius: 30,
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    border: c ? "1px solid #1351b4" : "1px solid #ccccccff",
                    boxSizing: "border-box"
                  }
                }
              }
            ),
            sx: {
              display: "inline-flex",
              alignItems: p ? "flex-start" : "center",
              flexDirection: p ? "column" : S ? "row-reverse" : "row",
              gap: p ? "4px" : "8px",
              margin: 0,
              "& .MuiTypography-root": {
                color: c ? "#1351b4" : "#333333",
                fontFamily: 'Rawline, "Open Sans", sans-serif',
                // cspell:disable-line
                fontSize: "16px",
                marginTop: "18px"
              }
            }
          }
        ),
        C && /* @__PURE__ */ T.jsx(
          _t,
          {
            sx: {
              color: c ? "#1351b4" : "#333333",
              fontFamily: 'Rawline, "Open Sans", sans-serif',
              // cspell:disable-line
              fontSize: "16px",
              marginTop: "18px"
            },
            children: C
          }
        )
      ]
    }
  );
};
let Tn = Ao({
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
Tn = Yf(Tn);
const En = typeof Zs({}) == "function", pg = (e, t) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), fg = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), dl = (e, t = !1) => {
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([s, a]) => {
    const l = e.getColorSchemeSelector(s);
    l.startsWith("@") ? r[l] = {
      ":root": {
        colorScheme: a.palette?.mode
      }
    } : r[l.replace(/\s*&/, "")] = {
      colorScheme: a.palette?.mode
    };
  });
  let o = {
    html: pg(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...fg(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...r
  };
  const i = e.components?.MuiCssBaseline?.styleOverrides;
  return i && (o = [o, i]), o;
}, oo = "mui-ecs", mg = (e) => {
  const t = dl(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${oo})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([o, i]) => {
    const s = e.getColorSchemeSelector(o);
    s.startsWith("@") ? r[s] = {
      [`:root:not(:has(.${oo}))`]: {
        colorScheme: i.palette?.mode
      }
    } : r[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${oo}))`]: {
        colorScheme: i.palette?.mode
      }
    };
  }), t;
}, hg = Zs(En ? ({
  theme: e,
  enableColorScheme: t
}) => dl(e, t) : ({
  theme: e
}) => mg(e));
function pl(e) {
  const t = Se({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: o = !1
  } = t;
  return /* @__PURE__ */ T.jsxs(E.Fragment, {
    children: [En && /* @__PURE__ */ T.jsx(hg, {
      enableColorScheme: o
    }), !En && !o && /* @__PURE__ */ T.jsx("span", {
      className: oo,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (pl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: n.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: n.bool
});
const gg = Cl({
  mode: "theme",
  toggle: () => {
  }
});
function Rg({ children: e }) {
  const [t, r] = Sr("theme"), o = Ol(
    () => ({
      mode: t,
      toggle: () => r((i) => i === "theme" ? "css" : "theme")
    }),
    [t]
  );
  return /* @__PURE__ */ T.jsx(gg.Provider, { value: o, children: /* @__PURE__ */ T.jsxs(Jf, { theme: Tn, children: [
    /* @__PURE__ */ T.jsx(pl, {}),
    e
  ] }) });
}
export {
  Tg as AutoSyncButton,
  Eg as GovBRAvatar,
  wg as GovBRBreadcrumb,
  xn as GovBRButton,
  dh as GovBRCheckbox,
  $h as GovBRFormCheckbox,
  Cg as GovBRFormInput,
  nl as GovBRInput,
  Xh as GovBRRadio,
  Jh as GovBRSignIn,
  Og as GovBRSwitch,
  Rg as GovBRThemeProvider,
  Tn as govbrTheme,
  Mh as iconMap,
  Ga as mapMuiColorToGovbrClass,
  dg as sizeMap
};
