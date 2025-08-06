import * as T from "react";
import oe, { forwardRef as Rl, useContext as kl, isValidElement as xn, cloneElement as Sn, Children as Ml, useState as Ir, useCallback as Fi, useEffect as nr, useRef as $l, createContext as Nl, useMemo as Il } from "react";
import * as Al from "react-dom";
import an from "react-dom";
function ba(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cn = { exports: {} }, xr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li;
function jl() {
  if (Li) return xr;
  Li = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      s = {};
      for (var c in o)
        c !== "key" && (s[c] = o[c]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return xr.Fragment = t, xr.jsx = r, xr.jsxs = r, xr;
}
var Sr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function _l() {
  return zi || (zi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === I ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case f:
          return "Fragment";
        case w:
          return "Profiler";
        case x:
          return "StrictMode";
        case h:
          return "Suspense";
        case C:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case y:
            return "Portal";
          case E:
            return (S.displayName || "Context") + ".Provider";
          case P:
            return (S._context.displayName || "Context") + ".Consumer";
          case v:
            var _ = S.render;
            return S = S.displayName, S || (S = _.displayName || _.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case k:
            return _ = S.displayName || null, _ !== null ? _ : e(S.type) || "Memo";
          case $:
            _ = S._payload, S = S._init;
            try {
              return e(S(_));
            } catch {
            }
        }
      return null;
    }
    function t(S) {
      return "" + S;
    }
    function r(S) {
      try {
        t(S);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var L = _.error, W = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return L.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), t(S);
      }
    }
    function n(S) {
      if (S === f) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === $)
        return "<...>";
      try {
        var _ = e(S);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var S = F.A;
      return S === null ? null : S.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(S) {
      if (p.call(S, "key")) {
        var _ = Object.getOwnPropertyDescriptor(S, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function c(S, _) {
      function L() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: L,
        configurable: !0
      });
    }
    function l() {
      var S = e(this.type);
      return A[S] || (A[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function u(S, _, L, W, U, z, Y, K) {
      return L = z.ref, S = {
        $$typeof: g,
        type: S,
        key: _,
        props: z,
        _owner: U
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function d(S, _, L, W, U, z, Y, K) {
      var G = _.children;
      if (G !== void 0)
        if (W)
          if (j(G)) {
            for (W = 0; W < G.length; W++)
              m(G[W]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(G);
      if (p.call(_, "key")) {
        G = e(S);
        var Z = Object.keys(_).filter(function(J) {
          return J !== "key";
        });
        W = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", H[G + W] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          G,
          Z,
          G
        ), H[G + W] = !0);
      }
      if (G = null, L !== void 0 && (r(L), G = "" + L), a(_) && (r(_.key), G = "" + _.key), "key" in _) {
        L = {};
        for (var q in _)
          q !== "key" && (L[q] = _[q]);
      } else L = _;
      return G && c(
        L,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), u(
        S,
        G,
        z,
        U,
        o(),
        L,
        Y,
        K
      );
    }
    function m(S) {
      typeof S == "object" && S !== null && S.$$typeof === g && S._store && (S._store.validated = 1);
    }
    var b = oe, g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), E = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), F = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = Object.prototype.hasOwnProperty, j = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var B, A = {}, V = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), X = N(n(s)), H = {};
    Sr.Fragment = f, Sr.jsx = function(S, _, L, W, U) {
      var z = 1e4 > F.recentlyCreatedOwnerStacks++;
      return d(
        S,
        _,
        L,
        !1,
        W,
        U,
        z ? Error("react-stack-top-frame") : V,
        z ? N(n(S)) : X
      );
    }, Sr.jsxs = function(S, _, L, W, U) {
      var z = 1e4 > F.recentlyCreatedOwnerStacks++;
      return d(
        S,
        _,
        L,
        !0,
        W,
        U,
        z ? Error("react-stack-top-frame") : V,
        z ? N(n(S)) : X
      );
    };
  }()), Sr;
}
var Vi;
function Dl() {
  return Vi || (Vi = 1, process.env.NODE_ENV === "production" ? cn.exports = jl() : cn.exports = _l()), cn.exports;
}
var O = Dl();
const Wi = (e) => e, Bl = () => {
  let e = Wi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Wi;
    }
  };
}, Fl = Bl();
function bt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function ee(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : bt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function No(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
var ln = { exports: {} }, un = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui;
function Ll() {
  if (Ui) return le;
  Ui = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function E(h) {
    if (typeof h == "object" && h !== null) {
      var C = h.$$typeof;
      switch (C) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case n:
            case s:
            case o:
            case m:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case y:
                case g:
                case a:
                  return h;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function v(h) {
    return E(h) === u;
  }
  return le.AsyncMode = l, le.ConcurrentMode = u, le.ContextConsumer = c, le.ContextProvider = a, le.Element = t, le.ForwardRef = d, le.Fragment = n, le.Lazy = y, le.Memo = g, le.Portal = r, le.Profiler = s, le.StrictMode = o, le.Suspense = m, le.isAsyncMode = function(h) {
    return v(h) || E(h) === l;
  }, le.isConcurrentMode = v, le.isContextConsumer = function(h) {
    return E(h) === c;
  }, le.isContextProvider = function(h) {
    return E(h) === a;
  }, le.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, le.isForwardRef = function(h) {
    return E(h) === d;
  }, le.isFragment = function(h) {
    return E(h) === n;
  }, le.isLazy = function(h) {
    return E(h) === y;
  }, le.isMemo = function(h) {
    return E(h) === g;
  }, le.isPortal = function(h) {
    return E(h) === r;
  }, le.isProfiler = function(h) {
    return E(h) === s;
  }, le.isStrictMode = function(h) {
    return E(h) === o;
  }, le.isSuspense = function(h) {
    return E(h) === m;
  }, le.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === s || h === o || h === m || h === b || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === x || h.$$typeof === w || h.$$typeof === P || h.$$typeof === f);
  }, le.typeOf = E, le;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function zl() {
  return Hi || (Hi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function E(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === u || R === s || R === o || R === m || R === b || typeof R == "object" && R !== null && (R.$$typeof === y || R.$$typeof === g || R.$$typeof === a || R.$$typeof === c || R.$$typeof === d || R.$$typeof === x || R.$$typeof === w || R.$$typeof === P || R.$$typeof === f);
    }
    function v(R) {
      if (typeof R == "object" && R !== null) {
        var ie = R.$$typeof;
        switch (ie) {
          case t:
            var se = R.type;
            switch (se) {
              case l:
              case u:
              case n:
              case s:
              case o:
              case m:
                return se;
              default:
                var xe = se && se.$$typeof;
                switch (xe) {
                  case c:
                  case d:
                  case y:
                  case g:
                  case a:
                    return xe;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var h = l, C = u, k = c, $ = a, M = t, I = d, F = n, p = y, j = g, N = r, B = s, A = o, V = m, X = !1;
    function H(R) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(R) || v(R) === l;
    }
    function S(R) {
      return v(R) === u;
    }
    function _(R) {
      return v(R) === c;
    }
    function L(R) {
      return v(R) === a;
    }
    function W(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function U(R) {
      return v(R) === d;
    }
    function z(R) {
      return v(R) === n;
    }
    function Y(R) {
      return v(R) === y;
    }
    function K(R) {
      return v(R) === g;
    }
    function G(R) {
      return v(R) === r;
    }
    function Z(R) {
      return v(R) === s;
    }
    function q(R) {
      return v(R) === o;
    }
    function J(R) {
      return v(R) === m;
    }
    ue.AsyncMode = h, ue.ConcurrentMode = C, ue.ContextConsumer = k, ue.ContextProvider = $, ue.Element = M, ue.ForwardRef = I, ue.Fragment = F, ue.Lazy = p, ue.Memo = j, ue.Portal = N, ue.Profiler = B, ue.StrictMode = A, ue.Suspense = V, ue.isAsyncMode = H, ue.isConcurrentMode = S, ue.isContextConsumer = _, ue.isContextProvider = L, ue.isElement = W, ue.isForwardRef = U, ue.isFragment = z, ue.isLazy = Y, ue.isMemo = K, ue.isPortal = G, ue.isProfiler = Z, ue.isStrictMode = q, ue.isSuspense = J, ue.isValidElementType = E, ue.typeOf = v;
  }()), ue;
}
var qi;
function va() {
  return qi || (qi = 1, process.env.NODE_ENV === "production" ? un.exports = Ll() : un.exports = zl()), un.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var po, Yi;
function Vl() {
  if (Yi) return po;
  Yi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return po = o() ? Object.assign : function(s, a) {
    for (var c, l = n(s), u, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var m in c)
        t.call(c, m) && (l[m] = c[m]);
      if (e) {
        u = e(c);
        for (var b = 0; b < u.length; b++)
          r.call(c, u[b]) && (l[u[b]] = c[u[b]]);
      }
    }
    return l;
  }, po;
}
var mo, Gi;
function ti() {
  if (Gi) return mo;
  Gi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return mo = e, mo;
}
var ho, Ki;
function xa() {
  return Ki || (Ki = 1, ho = Function.call.bind(Object.prototype.hasOwnProperty)), ho;
}
var go, Xi;
function Wl() {
  if (Xi) return go;
  Xi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ti(), r = {}, n = /* @__PURE__ */ xa();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(s, a, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (n(s, d)) {
          var m;
          try {
            if (typeof s[d] != "function") {
              var b = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            m = s[d](a, d, l, c, null, t);
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + c + " type: " + m.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, go = o, go;
}
var yo, Ji;
function Ul() {
  if (Ji) return yo;
  Ji = 1;
  var e = va(), t = Vl(), r = /* @__PURE__ */ ti(), n = /* @__PURE__ */ xa(), o = /* @__PURE__ */ Wl(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return yo = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(S) {
      var _ = S && (u && S[u] || S[d]);
      if (typeof _ == "function")
        return _;
    }
    var b = "<<anonymous>>", g = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: P(),
      arrayOf: E,
      element: v(),
      elementType: h(),
      instanceOf: C,
      node: I(),
      objectOf: $,
      oneOf: k,
      oneOfType: M,
      shape: p,
      exact: j
    };
    function y(S, _) {
      return S === _ ? S !== 0 || 1 / S === 1 / _ : S !== S && _ !== _;
    }
    function f(S, _) {
      this.message = S, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function x(S) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, L = 0;
      function W(z, Y, K, G, Z, q, J) {
        if (G = G || b, q = q || K, J !== r) {
          if (l) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = G + ":" + K;
            !_[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ie] = !0, L++);
          }
        }
        return Y[K] == null ? z ? Y[K] === null ? new f("The " + Z + " `" + q + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new f("The " + Z + " `" + q + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : S(Y, K, G, Z, q);
      }
      var U = W.bind(null, !1);
      return U.isRequired = W.bind(null, !0), U;
    }
    function w(S) {
      function _(L, W, U, z, Y, K) {
        var G = L[W], Z = A(G);
        if (Z !== S) {
          var q = V(G);
          return new f(
            "Invalid " + z + " `" + Y + "` of type " + ("`" + q + "` supplied to `" + U + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return x(_);
    }
    function P() {
      return x(a);
    }
    function E(S) {
      function _(L, W, U, z, Y) {
        if (typeof S != "function")
          return new f("Property `" + Y + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var K = L[W];
        if (!Array.isArray(K)) {
          var G = A(K);
          return new f("Invalid " + z + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an array."));
        }
        for (var Z = 0; Z < K.length; Z++) {
          var q = S(K, Z, U, z, Y + "[" + Z + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return x(_);
    }
    function v() {
      function S(_, L, W, U, z) {
        var Y = _[L];
        if (!c(Y)) {
          var K = A(Y);
          return new f("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(S);
    }
    function h() {
      function S(_, L, W, U, z) {
        var Y = _[L];
        if (!e.isValidElementType(Y)) {
          var K = A(Y);
          return new f("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(S);
    }
    function C(S) {
      function _(L, W, U, z, Y) {
        if (!(L[W] instanceof S)) {
          var K = S.name || b, G = H(L[W]);
          return new f("Invalid " + z + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return x(_);
    }
    function k(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function _(L, W, U, z, Y) {
        for (var K = L[W], G = 0; G < S.length; G++)
          if (y(K, S[G]))
            return null;
        var Z = JSON.stringify(S, function(J, R) {
          var ie = V(R);
          return ie === "symbol" ? String(R) : R;
        });
        return new f("Invalid " + z + " `" + Y + "` of value `" + String(K) + "` " + ("supplied to `" + U + "`, expected one of " + Z + "."));
      }
      return x(_);
    }
    function $(S) {
      function _(L, W, U, z, Y) {
        if (typeof S != "function")
          return new f("Property `" + Y + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var K = L[W], G = A(K);
        if (G !== "object")
          return new f("Invalid " + z + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an object."));
        for (var Z in K)
          if (n(K, Z)) {
            var q = S(K, Z, U, z, Y + "." + Z, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return x(_);
    }
    function M(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var _ = 0; _ < S.length; _++) {
        var L = S[_];
        if (typeof L != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + X(L) + " at index " + _ + "."
          ), a;
      }
      function W(U, z, Y, K, G) {
        for (var Z = [], q = 0; q < S.length; q++) {
          var J = S[q], R = J(U, z, Y, K, G, r);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && Z.push(R.data.expectedType);
        }
        var ie = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new f("Invalid " + K + " `" + G + "` supplied to " + ("`" + Y + "`" + ie + "."));
      }
      return x(W);
    }
    function I() {
      function S(_, L, W, U, z) {
        return N(_[L]) ? null : new f("Invalid " + U + " `" + z + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return x(S);
    }
    function F(S, _, L, W, U) {
      return new f(
        (S || "React class") + ": " + _ + " type `" + L + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function p(S) {
      function _(L, W, U, z, Y) {
        var K = L[W], G = A(K);
        if (G !== "object")
          return new f("Invalid " + z + " `" + Y + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var Z in S) {
          var q = S[Z];
          if (typeof q != "function")
            return F(U, z, Y, Z, V(q));
          var J = q(K, Z, U, z, Y + "." + Z, r);
          if (J)
            return J;
        }
        return null;
      }
      return x(_);
    }
    function j(S) {
      function _(L, W, U, z, Y) {
        var K = L[W], G = A(K);
        if (G !== "object")
          return new f("Invalid " + z + " `" + Y + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        var Z = t({}, L[W], S);
        for (var q in Z) {
          var J = S[q];
          if (n(S, q) && typeof J != "function")
            return F(U, z, Y, q, V(J));
          if (!J)
            return new f(
              "Invalid " + z + " `" + Y + "` key `" + q + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(L[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var R = J(K, q, U, z, Y + "." + q, r);
          if (R)
            return R;
        }
        return null;
      }
      return x(_);
    }
    function N(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(N);
          if (S === null || c(S))
            return !0;
          var _ = m(S);
          if (_) {
            var L = _.call(S), W;
            if (_ !== S.entries) {
              for (; !(W = L.next()).done; )
                if (!N(W.value))
                  return !1;
            } else
              for (; !(W = L.next()).done; ) {
                var U = W.value;
                if (U && !N(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(S, _) {
      return S === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function A(S) {
      var _ = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : B(_, S) ? "symbol" : _;
    }
    function V(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var _ = A(S);
      if (_ === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function X(S) {
      var _ = V(S);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function H(S) {
      return !S.constructor || !S.constructor.name ? b : S.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, yo;
}
var bo, Zi;
function Hl() {
  if (Zi) return bo;
  Zi = 1;
  var e = /* @__PURE__ */ ti();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, bo = function() {
    function n(a, c, l, u, d, m) {
      if (m !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, bo;
}
var Qi;
function ql() {
  if (Qi) return ln.exports;
  if (Qi = 1, process.env.NODE_ENV !== "production") {
    var e = va(), t = !0;
    ln.exports = /* @__PURE__ */ Ul()(e.isElement, t);
  } else
    ln.exports = /* @__PURE__ */ Hl()();
  return ln.exports;
}
var Yl = /* @__PURE__ */ ql();
const i = /* @__PURE__ */ ba(Yl);
function Sa(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Sa(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ne() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Sa(e)) && (n && (n += " "), n += t);
  return n;
}
function $e(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const s = e[o];
    let a = "", c = !0;
    for (let l = 0; l < s.length; l += 1) {
      const u = s[l];
      u && (a += (c === !0 ? "" : " ") + t(u), c = !1, r && r[u] && (a += " " + r[u]));
    }
    n[o] = a;
  }
  return n;
}
var dn = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var es;
function Gl() {
  if (es) return ge;
  es = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function y(f) {
    if (typeof f == "object" && f !== null) {
      var x = f.$$typeof;
      switch (x) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case l:
            case u:
            case b:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case c:
                case m:
                case d:
                  return f;
                case s:
                  return f;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ge.ContextConsumer = s, ge.ContextProvider = a, ge.Element = e, ge.ForwardRef = c, ge.Fragment = r, ge.Lazy = m, ge.Memo = d, ge.Portal = t, ge.Profiler = o, ge.StrictMode = n, ge.Suspense = l, ge.SuspenseList = u, ge.isContextConsumer = function(f) {
    return y(f) === s;
  }, ge.isContextProvider = function(f) {
    return y(f) === a;
  }, ge.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, ge.isForwardRef = function(f) {
    return y(f) === c;
  }, ge.isFragment = function(f) {
    return y(f) === r;
  }, ge.isLazy = function(f) {
    return y(f) === m;
  }, ge.isMemo = function(f) {
    return y(f) === d;
  }, ge.isPortal = function(f) {
    return y(f) === t;
  }, ge.isProfiler = function(f) {
    return y(f) === o;
  }, ge.isStrictMode = function(f) {
    return y(f) === n;
  }, ge.isSuspense = function(f) {
    return y(f) === l;
  }, ge.isSuspenseList = function(f) {
    return y(f) === u;
  }, ge.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === l || f === u || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === d || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === g || f.getModuleId !== void 0);
  }, ge.typeOf = y, ge;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts;
function Kl() {
  return ts || (ts = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var x = f.$$typeof;
        switch (x) {
          case t:
            switch (f = f.type, f) {
              case n:
              case s:
              case o:
              case u:
              case d:
              case g:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case c:
                  case l:
                  case b:
                  case m:
                    return f;
                  case a:
                    return f;
                  default:
                    return x;
                }
            }
          case r:
            return x;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    ye.ContextConsumer = a, ye.ContextProvider = c, ye.Element = t, ye.ForwardRef = l, ye.Fragment = n, ye.Lazy = b, ye.Memo = m, ye.Portal = r, ye.Profiler = s, ye.StrictMode = o, ye.Suspense = u, ye.SuspenseList = d, ye.isContextConsumer = function(f) {
      return e(f) === a;
    }, ye.isContextProvider = function(f) {
      return e(f) === c;
    }, ye.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, ye.isForwardRef = function(f) {
      return e(f) === l;
    }, ye.isFragment = function(f) {
      return e(f) === n;
    }, ye.isLazy = function(f) {
      return e(f) === b;
    }, ye.isMemo = function(f) {
      return e(f) === m;
    }, ye.isPortal = function(f) {
      return e(f) === r;
    }, ye.isProfiler = function(f) {
      return e(f) === s;
    }, ye.isStrictMode = function(f) {
      return e(f) === o;
    }, ye.isSuspense = function(f) {
      return e(f) === u;
    }, ye.isSuspenseList = function(f) {
      return e(f) === d;
    }, ye.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === n || f === s || f === o || f === u || f === d || typeof f == "object" && f !== null && (f.$$typeof === b || f.$$typeof === m || f.$$typeof === c || f.$$typeof === a || f.$$typeof === l || f.$$typeof === y || f.getModuleId !== void 0);
    }, ye.typeOf = e;
  }()), ye;
}
var rs;
function Xl() {
  return rs || (rs = 1, process.env.NODE_ENV === "production" ? dn.exports = /* @__PURE__ */ Gl() : dn.exports = /* @__PURE__ */ Kl()), dn.exports;
}
var cr = /* @__PURE__ */ Xl();
function ut(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ea(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || cr.isValidElementType(e) || !ut(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ea(e[r]);
  }), t;
}
function Ve(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return ut(e) && ut(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ T.isValidElement(t[o]) || cr.isValidElementType(t[o]) ? n[o] = t[o] : ut(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && ut(e[o]) ? n[o] = Ve(e[o], t[o], r) : r.clone ? n[o] = ut(t[o]) ? Ea(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Ar(e, t) {
  return t ? Ve(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const kt = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.string, i.object, i.array]) : {};
function ns(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(n.match(s)?.[1] || 0) - +(o.match(s)?.[1] || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const s = t[o];
    return delete n[o], n[o] = s, n;
  }, {
    ...t
  }) : t;
}
function Jl(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Zl(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : bt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(s);
}
function Ql(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function r(s, a) {
    s.up = (...c) => t(e.breakpoints.up(...c), a), s.down = (...c) => t(e.breakpoints.down(...c), a), s.between = (...c) => t(e.breakpoints.between(...c), a), s.only = (...c) => t(e.breakpoints.only(...c), a), s.not = (...c) => {
      const l = t(e.breakpoints.not(...c), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (s) => (r(n, s), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Wn = {
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
}, os = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Wn[e]}px)`
}, eu = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Wn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function st(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || os;
    return t.reduce((a, c, l) => (a[s.up(s.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || os;
    return Object.keys(t).reduce((a, c) => {
      if (Jl(s.keys, c)) {
        const l = Zl(n.containerQueries ? n : eu, c);
        l && (a[l] = r(t[c], c));
      } else if (Object.keys(s.values || Wn).includes(c)) {
        const l = s.up(c);
        a[l] = r(t[c], c);
      } else {
        const l = c;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Ta(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function Io(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function tu(e, ...t) {
  const r = Ta(e), n = [r, ...t].reduce((o, s) => Ve(o, s), {});
  return Io(Object.keys(r), n);
}
function ru(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((o, s) => {
    s < e.length && (r[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (r[o] = !0);
  }), r;
}
function vo({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || ru(e, t), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let s;
  return o.reduce((a, c, l) => (Array.isArray(e) ? (a[c] = e[l] != null ? e[l] : e[s], s = l) : typeof e == "object" ? (a[c] = e[c] != null ? e[c] : e[s], s = c) : a[c] = e, a), {});
}
function Un(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function kn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Un(e, r) || n, t && (o = t(o, n, e)), o;
}
function Re(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = Un(l, n) || {};
    return st(a, c, (m) => {
      let b = kn(u, o, m);
      return m === b && typeof m == "string" && (b = kn(u, o, `${t}${m === "default" ? "" : ee(m)}`, m)), r === !1 ? b : {
        [r]: b
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: kt
  } : {}, s.filterProps = [t], s;
}
function nu(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const ou = {
  m: "margin",
  p: "padding"
}, iu = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, is = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, su = nu((e) => {
  if (e.length > 2)
    if (is[e])
      e = is[e];
    else
      return [e];
  const [t, r] = e.split(""), n = ou[t], o = iu[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), Hn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], qn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], au = [...Hn, ...qn];
function Kr(e, t, r, n) {
  const o = Un(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), typeof o == "string" ? o.startsWith("var(") && s === 0 ? 0 : o.startsWith("var(") && s === 1 ? o : `calc(${s} * ${o})` : o * s) : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return s >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Yn(e) {
  return Kr(e, "spacing", 8, "spacing");
}
function Ut(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function cu(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Ut(t, r), n), {});
}
function lu(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = su(r), s = cu(o, n), a = e[r];
  return st(e, a, s);
}
function wa(e, t) {
  const r = Yn(e.theme);
  return Object.keys(e).map((n) => lu(e, t, n, r)).reduce(Ar, {});
}
function Te(e) {
  return wa(e, Hn);
}
Te.propTypes = process.env.NODE_ENV !== "production" ? Hn.reduce((e, t) => (e[t] = kt, e), {}) : {};
Te.filterProps = Hn;
function we(e) {
  return wa(e, qn);
}
we.propTypes = process.env.NODE_ENV !== "production" ? qn.reduce((e, t) => (e[t] = kt, e), {}) : {};
we.filterProps = qn;
process.env.NODE_ENV !== "production" && au.reduce((e, t) => (e[t] = kt, e), {});
function Gn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? Ar(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function et(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function it(e, t) {
  return Re({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const uu = it("border", et), du = it("borderTop", et), fu = it("borderRight", et), pu = it("borderBottom", et), mu = it("borderLeft", et), hu = it("borderColor"), gu = it("borderTopColor"), yu = it("borderRightColor"), bu = it("borderBottomColor"), vu = it("borderLeftColor"), xu = it("outline", et), Su = it("outlineColor"), Kn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Kr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Ut(t, n)
    });
    return st(e, e.borderRadius, r);
  }
  return null;
};
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: kt
} : {};
Kn.filterProps = ["borderRadius"];
Gn(uu, du, fu, pu, mu, hu, gu, yu, bu, vu, Kn, xu, Su);
const Xn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Kr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Ut(t, n)
    });
    return st(e, e.gap, r);
  }
  return null;
};
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: kt
} : {};
Xn.filterProps = ["gap"];
const Jn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Kr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Ut(t, n)
    });
    return st(e, e.columnGap, r);
  }
  return null;
};
Jn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: kt
} : {};
Jn.filterProps = ["columnGap"];
const Zn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Kr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Ut(t, n)
    });
    return st(e, e.rowGap, r);
  }
  return null;
};
Zn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: kt
} : {};
Zn.filterProps = ["rowGap"];
const Eu = Re({
  prop: "gridColumn"
}), Tu = Re({
  prop: "gridRow"
}), wu = Re({
  prop: "gridAutoFlow"
}), Cu = Re({
  prop: "gridAutoColumns"
}), Ou = Re({
  prop: "gridAutoRows"
}), Pu = Re({
  prop: "gridTemplateColumns"
}), Ru = Re({
  prop: "gridTemplateRows"
}), ku = Re({
  prop: "gridTemplateAreas"
}), Mu = Re({
  prop: "gridArea"
});
Gn(Xn, Jn, Zn, Eu, Tu, wu, Cu, Ou, Pu, Ru, ku, Mu);
function sr(e, t) {
  return t === "grey" ? t : e;
}
const $u = Re({
  prop: "color",
  themeKey: "palette",
  transform: sr
}), Nu = Re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: sr
}), Iu = Re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: sr
});
Gn($u, Nu, Iu);
function Ke(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Au = Re({
  prop: "width",
  transform: Ke
}), ri = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || Wn[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ke(r)
      };
    };
    return st(e, e.maxWidth, t);
  }
  return null;
};
ri.filterProps = ["maxWidth"];
const ju = Re({
  prop: "minWidth",
  transform: Ke
}), _u = Re({
  prop: "height",
  transform: Ke
}), Du = Re({
  prop: "maxHeight",
  transform: Ke
}), Bu = Re({
  prop: "minHeight",
  transform: Ke
});
Re({
  prop: "size",
  cssProperty: "width",
  transform: Ke
});
Re({
  prop: "size",
  cssProperty: "height",
  transform: Ke
});
const Fu = Re({
  prop: "boxSizing"
});
Gn(Au, ri, ju, _u, Du, Bu, Fu);
const Xr = {
  // borders
  border: {
    themeKey: "borders",
    transform: et
  },
  borderTop: {
    themeKey: "borders",
    transform: et
  },
  borderRight: {
    themeKey: "borders",
    transform: et
  },
  borderBottom: {
    themeKey: "borders",
    transform: et
  },
  borderLeft: {
    themeKey: "borders",
    transform: et
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
    transform: et
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Kn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: sr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: sr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: sr
  },
  // spacing
  p: {
    style: we
  },
  pt: {
    style: we
  },
  pr: {
    style: we
  },
  pb: {
    style: we
  },
  pl: {
    style: we
  },
  px: {
    style: we
  },
  py: {
    style: we
  },
  padding: {
    style: we
  },
  paddingTop: {
    style: we
  },
  paddingRight: {
    style: we
  },
  paddingBottom: {
    style: we
  },
  paddingLeft: {
    style: we
  },
  paddingX: {
    style: we
  },
  paddingY: {
    style: we
  },
  paddingInline: {
    style: we
  },
  paddingInlineStart: {
    style: we
  },
  paddingInlineEnd: {
    style: we
  },
  paddingBlock: {
    style: we
  },
  paddingBlockStart: {
    style: we
  },
  paddingBlockEnd: {
    style: we
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
    style: Xn
  },
  rowGap: {
    style: Zn
  },
  columnGap: {
    style: Jn
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
    transform: Ke
  },
  maxWidth: {
    style: ri
  },
  minWidth: {
    transform: Ke
  },
  height: {
    transform: Ke
  },
  maxHeight: {
    transform: Ke
  },
  minHeight: {
    transform: Ke
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
function Lu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function zu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vu() {
  function e(r, n, o, s) {
    const a = {
      [r]: n,
      theme: o
    }, c = s[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: u,
      transform: d,
      style: m
    } = c;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const b = Un(o, u) || {};
    return m ? m(a) : st(a, n, (y) => {
      let f = kn(b, d, y);
      return y === f && typeof y == "string" && (f = kn(b, d, `${r}${y === "default" ? "" : ee(y)}`, y)), l === !1 ? f : {
        [l]: f
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: s
    } = r || {};
    if (!n)
      return null;
    const a = o.unstable_sxConfig ?? Xr;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(o);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const d = Ta(o.breakpoints), m = Object.keys(d);
      let b = d;
      return Object.keys(u).forEach((g) => {
        const y = zu(u[g], o);
        if (y != null)
          if (typeof y == "object")
            if (a[g])
              b = Ar(b, e(g, y, o, a));
            else {
              const f = st({
                theme: o
              }, y, (x) => ({
                [g]: x
              }));
              Lu(f, y) ? b[g] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : b = Ar(b, f);
            }
          else
            b = Ar(b, e(g, y, o, a));
      }), !s && o.modularCssLayers ? {
        "@layer sx": ns(o, Io(m, b))
      } : ns(o, Io(m, b));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return t;
}
const Ht = Vu();
Ht.filterProps = ["sx"];
const Wu = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = e?.theme?.unstable_sxConfig ?? Xr;
  return Object.keys(e).forEach((n) => {
    r[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
  }), t;
};
function Ca(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = Wu(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...a) => {
    const c = t(...a);
    return ut(c) ? {
      ...n,
      ...c
    } : n;
  } : s = {
    ...n,
    ...t
  }, {
    ...o,
    sx: s
  };
}
function Mn() {
  return Mn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mn.apply(null, arguments);
}
function Uu(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Hu(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var qu = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Hu(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Uu(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ze = "-ms-", $n = "-moz-", ae = "-webkit-", Oa = "comm", ni = "rule", oi = "decl", Yu = "@import", Pa = "@keyframes", Gu = "@layer", Ku = Math.abs, Qn = String.fromCharCode, Xu = Object.assign;
function Ju(e, t) {
  return Be(e, 0) ^ 45 ? (((t << 2 ^ Be(e, 0)) << 2 ^ Be(e, 1)) << 2 ^ Be(e, 2)) << 2 ^ Be(e, 3) : 0;
}
function Ra(e) {
  return e.trim();
}
function Zu(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, r) {
  return e.replace(t, r);
}
function Ao(e, t) {
  return e.indexOf(t);
}
function Be(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fr(e, t, r) {
  return e.slice(t, r);
}
function ct(e) {
  return e.length;
}
function ii(e) {
  return e.length;
}
function fn(e, t) {
  return t.push(e), e;
}
function Qu(e, t) {
  return e.map(t).join("");
}
var eo = 1, lr = 1, ka = 0, Ye = 0, Me = 0, mr = "";
function to(e, t, r, n, o, s, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: eo, column: lr, length: a, return: "" };
}
function Er(e, t) {
  return Xu(to("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ed() {
  return Me;
}
function td() {
  return Me = Ye > 0 ? Be(mr, --Ye) : 0, lr--, Me === 10 && (lr = 1, eo--), Me;
}
function Xe() {
  return Me = Ye < ka ? Be(mr, Ye++) : 0, lr++, Me === 10 && (lr = 1, eo++), Me;
}
function dt() {
  return Be(mr, Ye);
}
function En() {
  return Ye;
}
function Jr(e, t) {
  return Fr(mr, e, t);
}
function Lr(e) {
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
function Ma(e) {
  return eo = lr = 1, ka = ct(mr = e), Ye = 0, [];
}
function $a(e) {
  return mr = "", e;
}
function Tn(e) {
  return Ra(Jr(Ye - 1, jo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rd(e) {
  for (; (Me = dt()) && Me < 33; )
    Xe();
  return Lr(e) > 2 || Lr(Me) > 3 ? "" : " ";
}
function nd(e, t) {
  for (; --t && Xe() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return Jr(e, En() + (t < 6 && dt() == 32 && Xe() == 32));
}
function jo(e) {
  for (; Xe(); )
    switch (Me) {
      // ] ) " '
      case e:
        return Ye;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && jo(Me);
        break;
      // (
      case 40:
        e === 41 && jo(e);
        break;
      // \
      case 92:
        Xe();
        break;
    }
  return Ye;
}
function od(e, t) {
  for (; Xe() && e + Me !== 57; )
    if (e + Me === 84 && dt() === 47)
      break;
  return "/*" + Jr(t, Ye - 1) + "*" + Qn(e === 47 ? e : Xe());
}
function id(e) {
  for (; !Lr(dt()); )
    Xe();
  return Jr(e, Ye);
}
function sd(e) {
  return $a(wn("", null, null, null, [""], e = Ma(e), 0, [0], e));
}
function wn(e, t, r, n, o, s, a, c, l) {
  for (var u = 0, d = 0, m = a, b = 0, g = 0, y = 0, f = 1, x = 1, w = 1, P = 0, E = "", v = o, h = s, C = n, k = E; x; )
    switch (y = P, P = Xe()) {
      // (
      case 40:
        if (y != 108 && Be(k, m - 1) == 58) {
          Ao(k += ce(Tn(P), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        k += Tn(P);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        k += rd(y);
        break;
      // \
      case 92:
        k += nd(En() - 1, 7);
        continue;
      // /
      case 47:
        switch (dt()) {
          case 42:
          case 47:
            fn(ad(od(Xe(), En()), t, r), l);
            break;
          default:
            k += "/";
        }
        break;
      // {
      case 123 * f:
        c[u++] = ct(k) * w;
      // } ; \0
      case 125 * f:
      case 59:
      case 0:
        switch (P) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + d:
            w == -1 && (k = ce(k, /\f/g, "")), g > 0 && ct(k) - m && fn(g > 32 ? as(k + ";", n, r, m - 1) : as(ce(k, " ", "") + ";", n, r, m - 2), l);
            break;
          // @ ;
          case 59:
            k += ";";
          // { rule/at-rule
          default:
            if (fn(C = ss(k, t, r, u, d, o, c, E, v = [], h = [], m), s), P === 123)
              if (d === 0)
                wn(k, t, C, C, v, s, m, c, h);
              else
                switch (b === 99 && Be(k, 3) === 110 ? 100 : b) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    wn(e, C, C, n && fn(ss(e, C, C, 0, 0, o, c, E, o, v = [], m), h), o, h, m, c, n ? v : h);
                    break;
                  default:
                    wn(k, C, C, C, [""], h, 0, c, h);
                }
        }
        u = d = g = 0, f = w = 1, E = k = "", m = a;
        break;
      // :
      case 58:
        m = 1 + ct(k), g = y;
      default:
        if (f < 1) {
          if (P == 123)
            --f;
          else if (P == 125 && f++ == 0 && td() == 125)
            continue;
        }
        switch (k += Qn(P), P * f) {
          // &
          case 38:
            w = d > 0 ? 1 : (k += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (ct(k) - 1) * w, w = 1;
            break;
          // @
          case 64:
            dt() === 45 && (k += Tn(Xe())), b = dt(), d = m = ct(E = k += id(En())), P++;
            break;
          // -
          case 45:
            y === 45 && ct(k) == 2 && (f = 0);
        }
    }
  return s;
}
function ss(e, t, r, n, o, s, a, c, l, u, d) {
  for (var m = o - 1, b = o === 0 ? s : [""], g = ii(b), y = 0, f = 0, x = 0; y < n; ++y)
    for (var w = 0, P = Fr(e, m + 1, m = Ku(f = a[y])), E = e; w < g; ++w)
      (E = Ra(f > 0 ? b[w] + " " + P : ce(P, /&\f/g, b[w]))) && (l[x++] = E);
  return to(e, t, r, o === 0 ? ni : c, l, u, d);
}
function ad(e, t, r) {
  return to(e, t, r, Oa, Qn(ed()), Fr(e, 2, -2), 0);
}
function as(e, t, r, n) {
  return to(e, t, r, oi, Fr(e, 0, n), Fr(e, n + 1, -1), n);
}
function ar(e, t) {
  for (var r = "", n = ii(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function cd(e, t, r, n) {
  switch (e.type) {
    case Gu:
      if (e.children.length) break;
    case Yu:
    case oi:
      return e.return = e.return || e.value;
    case Oa:
      return "";
    case Pa:
      return e.return = e.value + "{" + ar(e.children, n) + "}";
    case ni:
      e.value = e.props.join(",");
  }
  return ct(r = ar(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ld(e) {
  var t = ii(e);
  return function(r, n, o, s) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, s) || "";
    return a;
  };
}
function ud(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Na(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var dd = function(t, r, n) {
  for (var o = 0, s = 0; o = s, s = dt(), o === 38 && s === 12 && (r[n] = 1), !Lr(s); )
    Xe();
  return Jr(t, Ye);
}, fd = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Lr(o)) {
      case 0:
        o === 38 && dt() === 12 && (r[n] = 1), t[n] += dd(Ye - 1, r, n);
        break;
      case 2:
        t[n] += Tn(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = dt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += Qn(o);
    }
  while (o = Xe());
  return t;
}, pd = function(t, r) {
  return $a(fd(Ma(t), r));
}, cs = /* @__PURE__ */ new WeakMap(), md = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !cs.get(n)) && !o) {
      cs.set(t, !0);
      for (var s = [], a = pd(r, s), c = n.props, l = 0, u = 0; l < a.length; l++)
        for (var d = 0; d < c.length; d++, u++)
          t.props[u] = s[l] ? a[l].replace(/&\f/g, c[d]) : c[d] + " " + a[l];
    }
  }
}, hd = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ia(e, t) {
  switch (Ju(e, t)) {
    // color-adjust
    case 5103:
      return ae + "print-" + e + e;
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
      return ae + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + $n + e + ze + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ae + e + ze + e + e;
    // order
    case 6165:
      return ae + e + ze + "flex-" + e + e;
    // align-items
    case 5187:
      return ae + e + ce(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + ze + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ae + e + ze + "flex-item-" + ce(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return ae + e + ze + "flex-line-pack" + ce(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return ae + e + ze + ce(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ae + e + ze + ce(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ae + "box-" + ce(e, "-grow", "") + ae + e + ze + ce(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ae + ce(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    // cursor
    case 6187:
      return ce(ce(ce(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ce(e, /(image-set\([^]*)/, ae + "$1$`$1");
    // justify-content
    case 4968:
      return ce(ce(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + ze + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
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
      if (ct(e) - 1 - t > 6) switch (Be(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Be(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ce(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + $n + (Be(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Ao(e, "stretch") ? Ia(ce(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Be(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Be(e, ct(e) - 3 - (~Ao(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ce(e, ":", ":" + ae) + e;
        // (inline-)?fl(e)x
        case 101:
          return ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ae + (Be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + ze + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Be(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ae + e + ze + ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ae + e + ze + ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ae + e + ze + ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ae + e + ze + e + e;
  }
  return e;
}
var gd = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case oi:
      t.return = Ia(t.value, t.length);
      break;
    case Pa:
      return ar([Er(t, {
        value: ce(t.value, "@", "@" + ae)
      })], o);
    case ni:
      if (t.length) return Qu(t.props, function(s) {
        switch (Zu(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ar([Er(t, {
              props: [ce(s, /:(read-\w+)/, ":" + $n + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return ar([Er(t, {
              props: [ce(s, /:(plac\w+)/, ":" + ae + "input-$1")]
            }), Er(t, {
              props: [ce(s, /:(plac\w+)/, ":" + $n + "$1")]
            }), Er(t, {
              props: [ce(s, /:(plac\w+)/, ze + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, yd = [gd], bd = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var x = f.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || yd, s = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(f) {
      for (var x = f.getAttribute("data-emotion").split(" "), w = 1; w < x.length; w++)
        s[x[w]] = !0;
      c.push(f);
    }
  );
  var l, u = [md, hd];
  {
    var d, m = [cd, ud(function(f) {
      d.insert(f);
    })], b = ld(u.concat(o, m)), g = function(x) {
      return ar(sd(x), b);
    };
    l = function(x, w, P, E) {
      d = P, g(x ? x + "{" + w.styles + "}" : w.styles), E && (y.inserted[w.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new qu({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: l
  };
  return y.sheet.hydrate(c), y;
}, pn = { exports: {} }, de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function vd() {
  if (ls) return de;
  ls = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function E(h) {
    if (typeof h == "object" && h !== null) {
      var C = h.$$typeof;
      switch (C) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case n:
            case s:
            case o:
            case m:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case y:
                case g:
                case a:
                  return h;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function v(h) {
    return E(h) === u;
  }
  return de.AsyncMode = l, de.ConcurrentMode = u, de.ContextConsumer = c, de.ContextProvider = a, de.Element = t, de.ForwardRef = d, de.Fragment = n, de.Lazy = y, de.Memo = g, de.Portal = r, de.Profiler = s, de.StrictMode = o, de.Suspense = m, de.isAsyncMode = function(h) {
    return v(h) || E(h) === l;
  }, de.isConcurrentMode = v, de.isContextConsumer = function(h) {
    return E(h) === c;
  }, de.isContextProvider = function(h) {
    return E(h) === a;
  }, de.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, de.isForwardRef = function(h) {
    return E(h) === d;
  }, de.isFragment = function(h) {
    return E(h) === n;
  }, de.isLazy = function(h) {
    return E(h) === y;
  }, de.isMemo = function(h) {
    return E(h) === g;
  }, de.isPortal = function(h) {
    return E(h) === r;
  }, de.isProfiler = function(h) {
    return E(h) === s;
  }, de.isStrictMode = function(h) {
    return E(h) === o;
  }, de.isSuspense = function(h) {
    return E(h) === m;
  }, de.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === s || h === o || h === m || h === b || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === x || h.$$typeof === w || h.$$typeof === P || h.$$typeof === f);
  }, de.typeOf = E, de;
}
var fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function xd() {
  return us || (us = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function E(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === u || R === s || R === o || R === m || R === b || typeof R == "object" && R !== null && (R.$$typeof === y || R.$$typeof === g || R.$$typeof === a || R.$$typeof === c || R.$$typeof === d || R.$$typeof === x || R.$$typeof === w || R.$$typeof === P || R.$$typeof === f);
    }
    function v(R) {
      if (typeof R == "object" && R !== null) {
        var ie = R.$$typeof;
        switch (ie) {
          case t:
            var se = R.type;
            switch (se) {
              case l:
              case u:
              case n:
              case s:
              case o:
              case m:
                return se;
              default:
                var xe = se && se.$$typeof;
                switch (xe) {
                  case c:
                  case d:
                  case y:
                  case g:
                  case a:
                    return xe;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var h = l, C = u, k = c, $ = a, M = t, I = d, F = n, p = y, j = g, N = r, B = s, A = o, V = m, X = !1;
    function H(R) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(R) || v(R) === l;
    }
    function S(R) {
      return v(R) === u;
    }
    function _(R) {
      return v(R) === c;
    }
    function L(R) {
      return v(R) === a;
    }
    function W(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function U(R) {
      return v(R) === d;
    }
    function z(R) {
      return v(R) === n;
    }
    function Y(R) {
      return v(R) === y;
    }
    function K(R) {
      return v(R) === g;
    }
    function G(R) {
      return v(R) === r;
    }
    function Z(R) {
      return v(R) === s;
    }
    function q(R) {
      return v(R) === o;
    }
    function J(R) {
      return v(R) === m;
    }
    fe.AsyncMode = h, fe.ConcurrentMode = C, fe.ContextConsumer = k, fe.ContextProvider = $, fe.Element = M, fe.ForwardRef = I, fe.Fragment = F, fe.Lazy = p, fe.Memo = j, fe.Portal = N, fe.Profiler = B, fe.StrictMode = A, fe.Suspense = V, fe.isAsyncMode = H, fe.isConcurrentMode = S, fe.isContextConsumer = _, fe.isContextProvider = L, fe.isElement = W, fe.isForwardRef = U, fe.isFragment = z, fe.isLazy = Y, fe.isMemo = K, fe.isPortal = G, fe.isProfiler = Z, fe.isStrictMode = q, fe.isSuspense = J, fe.isValidElementType = E, fe.typeOf = v;
  }()), fe;
}
var ds;
function Sd() {
  return ds || (ds = 1, process.env.NODE_ENV === "production" ? pn.exports = vd() : pn.exports = xd()), pn.exports;
}
var xo, fs;
function Ed() {
  if (fs) return xo;
  fs = 1;
  var e = Sd(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = o;
  function a(y) {
    return e.isMemo(y) ? o : s[y.$$typeof] || t;
  }
  var c = Object.defineProperty, l = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, b = Object.prototype;
  function g(y, f, x) {
    if (typeof f != "string") {
      if (b) {
        var w = m(f);
        w && w !== b && g(y, w, x);
      }
      var P = l(f);
      u && (P = P.concat(u(f)));
      for (var E = a(y), v = a(f), h = 0; h < P.length; ++h) {
        var C = P[h];
        if (!r[C] && !(x && x[C]) && !(v && v[C]) && !(E && E[C])) {
          var k = d(f, C);
          try {
            c(y, C, k);
          } catch {
          }
        }
      }
    }
    return y;
  }
  return xo = g, xo;
}
Ed();
var Td = !0;
function Aa(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var si = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Td === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ai = function(t, r, n) {
  si(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function wd(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Cd = {
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
}, Od = /[A-Z]|^ms/g, Pd = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ja = function(t) {
  return t.charCodeAt(1) === 45;
}, ps = function(t) {
  return t != null && typeof t != "boolean";
}, So = /* @__PURE__ */ Na(function(e) {
  return ja(e) ? e : e.replace(Od, "-$&").toLowerCase();
}), ms = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Pd, function(n, o, s) {
          return lt = {
            name: o,
            styles: s,
            next: lt
          }, o;
        });
  }
  return Cd[t] !== 1 && !ja(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function zr(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return lt = {
          name: o.name,
          styles: o.styles,
          next: lt
        }, o.name;
      var s = r;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            lt = {
              name: a.name,
              styles: a.styles,
              next: lt
            }, a = a.next;
        var c = s.styles + ";";
        return c;
      }
      return Rd(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = lt, u = r(e);
        return lt = l, zr(e, t, u);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var m = t[d];
  return m !== void 0 ? m : d;
}
function Rd(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += zr(e, t, r[o]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += s + "{" + t[c] + "}" : ps(c) && (n += So(s) + ":" + ms(s, c) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var l = 0; l < a.length; l++)
          ps(a[l]) && (n += So(s) + ":" + ms(s, a[l]) + ";");
      else {
        var u = zr(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            n += So(s) + ":" + u + ";";
            break;
          }
          default:
            n += s + "{" + u + "}";
        }
      }
    }
  return n;
}
var hs = /label:\s*([^\s;{]+)\s*(;|$)/g, lt;
function Zr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  lt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, o += zr(r, t, s);
  else {
    var a = s;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += zr(r, t, e[c]), n) {
      var l = s;
      o += l[c];
    }
  hs.lastIndex = 0;
  for (var u = "", d; (d = hs.exec(o)) !== null; )
    u += "-" + d[1];
  var m = wd(o) + u;
  return {
    name: m,
    styles: o,
    next: lt
  };
}
var kd = function(t) {
  return t();
}, _a = T.useInsertionEffect ? T.useInsertionEffect : !1, Da = _a || kd, gs = _a || T.useLayoutEffect, Ba = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ bd({
    key: "css"
  }) : null
);
Ba.Provider;
var ci = function(t) {
  return /* @__PURE__ */ Rl(function(r, n) {
    var o = kl(Ba);
    return t(r, o, n);
  });
}, Qr = /* @__PURE__ */ T.createContext({}), li = {}.hasOwnProperty, _o = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Md = function(t, r) {
  var n = {};
  for (var o in r)
    li.call(r, o) && (n[o] = r[o]);
  return n[_o] = t, n;
}, $d = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return si(r, n, o), Da(function() {
    return ai(r, n, o);
  }), null;
}, Nd = /* @__PURE__ */ ci(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[_o], s = [n], a = "";
  typeof e.className == "string" ? a = Aa(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var c = Zr(s, void 0, T.useContext(Qr));
  a += t.key + "-" + c.name;
  var l = {};
  for (var u in e)
    li.call(e, u) && u !== "css" && u !== _o && (l[u] = e[u]);
  return l.className = a, r && (l.ref = r), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement($d, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ T.createElement(o, l));
}), Id = Nd, ys = function(t, r) {
  var n = arguments;
  if (r == null || !li.call(r, "css"))
    return T.createElement.apply(void 0, n);
  var o = n.length, s = new Array(o);
  s[0] = Id, s[1] = Md(t, r);
  for (var a = 2; a < o; a++)
    s[a] = n[a];
  return T.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ys || (ys = {}));
var Ad = /* @__PURE__ */ ci(function(e, t) {
  var r = e.styles, n = Zr([r], void 0, T.useContext(Qr)), o = T.useRef();
  return gs(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", s), a.hydrate([l])), o.current = [a, c], function() {
      a.flush();
    };
  }, [t]), gs(function() {
    var s = o.current, a = s[0], c = s[1];
    if (c) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && ai(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function ui() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Zr(t);
}
function hr() {
  var e = ui.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var jd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _d = /* @__PURE__ */ Na(
  function(e) {
    return jd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Dd = _d, Bd = function(t) {
  return t !== "theme";
}, bs = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Dd : Bd;
}, vs = function(t, r, n) {
  var o;
  if (r) {
    var s = r.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Fd = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return si(r, n, o), Da(function() {
    return ai(r, n, o);
  }), null;
}, Ld = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, s, a;
  r !== void 0 && (s = r.label, a = r.target);
  var c = vs(t, r, n), l = c || bs(o), u = !l("as");
  return function() {
    var d = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && m.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      m.push.apply(m, d);
    else {
      var b = d[0];
      m.push(b[0]);
      for (var g = d.length, y = 1; y < g; y++)
        m.push(d[y], b[y]);
    }
    var f = ci(function(x, w, P) {
      var E = u && x.as || o, v = "", h = [], C = x;
      if (x.theme == null) {
        C = {};
        for (var k in x)
          C[k] = x[k];
        C.theme = T.useContext(Qr);
      }
      typeof x.className == "string" ? v = Aa(w.registered, h, x.className) : x.className != null && (v = x.className + " ");
      var $ = Zr(m.concat(h), w.registered, C);
      v += w.key + "-" + $.name, a !== void 0 && (v += " " + a);
      var M = u && c === void 0 ? bs(E) : l, I = {};
      for (var F in x)
        u && F === "as" || M(F) && (I[F] = x[F]);
      return I.className = v, P && (I.ref = P), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Fd, {
        cache: w,
        serialized: $,
        isStringTag: typeof E == "string"
      }), /* @__PURE__ */ T.createElement(E, I));
    });
    return f.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = o, f.__emotion_styles = m, f.__emotion_forwardProp = c, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + a;
      }
    }), f.withComponent = function(x, w) {
      var P = e(x, Mn({}, r, w, {
        shouldForwardProp: vs(f, w, !0)
      }));
      return P.apply(void 0, m);
    }, f;
  };
}, zd = [
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
], Do = Ld.bind(null);
zd.forEach(function(e) {
  Do[e] = Do(e);
});
function Vd(e) {
  return e == null || Object.keys(e).length === 0;
}
function di(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(Vd(o) ? r : o) : t;
  return /* @__PURE__ */ O.jsx(Ad, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (di.propTypes = {
  defaultTheme: i.object,
  styles: i.oneOfType([i.array, i.string, i.object, i.func])
});
/**
 * @mui/styled-engine v7.3.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Wd(e, t) {
  const r = Do(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Ud(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const xs = [];
function Ct(e) {
  return xs[0] = e, Zr(xs);
}
const Hd = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function qd(e) {
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
    step: n = 5,
    ...o
  } = e, s = Hd(t), a = Object.keys(s);
  function c(b) {
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r})`;
  }
  function l(b) {
    return `@media (max-width:${(typeof t[b] == "number" ? t[b] : b) - n / 100}${r})`;
  }
  function u(b, g) {
    const y = a.indexOf(g);
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : g) - n / 100}${r})`;
  }
  function d(b) {
    return a.indexOf(b) + 1 < a.length ? u(b, a[a.indexOf(b) + 1]) : c(b);
  }
  function m(b) {
    const g = a.indexOf(b);
    return g === 0 ? c(a[1]) : g === a.length - 1 ? l(a[g]) : u(b, a[a.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: c,
    down: l,
    between: u,
    only: d,
    not: m,
    unit: r,
    ...o
  };
}
const Yd = {
  borderRadius: 4
};
function Fa(e = 8, t = Yn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Gd(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let n = r.getColorSchemeSelector(e);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function ro(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {},
    ...a
  } = e, c = qd(r), l = Fa(o);
  let u = Ve({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...Yd,
      ...s
    }
  }, a);
  return u = Ql(u), u.applyStyles = Gd, u = t.reduce((d, m) => Ve(d, m), u), u.unstable_sxConfig = {
    ...Xr,
    ...a?.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return Ht({
      sx: m,
      theme: this
    });
  }, u;
}
function Kd(e) {
  return Object.keys(e).length === 0;
}
function fi(e = null) {
  const t = T.useContext(Qr);
  return !t || Kd(t) ? e : t;
}
const Xd = ro();
function pi(e = Xd) {
  return fi(e);
}
function Eo(e) {
  const t = Ct(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function mi({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = pi(r), o = t && n[t] || n;
  let s = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => Eo(typeof a == "function" ? a(o) : a)) : s = Eo(s)), /* @__PURE__ */ O.jsx(di, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: i.object,
  /**
   * @ignore
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool]),
  /**
   * @ignore
   */
  themeId: i.string
});
const Jd = {
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
function Oe(e, t, r = "Mui") {
  const n = Jd[t];
  return n ? `${r}-${n}` : `${Fl.generate(e)}-${t}`;
}
function Ee(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Oe(e, o, r);
  }), n;
}
function La(e, t = "") {
  return e.displayName || e.name || t;
}
function Ss(e, t, r) {
  const n = La(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Zd(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return La(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case cr.ForwardRef:
          return Ss(e, e.render, "ForwardRef");
        case cr.Memo:
          return Ss(e, e.type, "memo");
        default:
          return;
      }
  }
}
function za(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Ct(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Ct(o.style));
  }), n;
}
const Qd = ro();
function To(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function zt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function ef(e) {
  return e ? (t, r) => r[e] : null;
}
function tf(e, t, r) {
  e.theme = of(e.theme) ? r : e.theme[t] || e.theme;
}
function Cn(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => Cn(e, o, r));
  if (Array.isArray(n?.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? zt(n.style, r) : n.style;
    else {
      const {
        variants: s,
        ...a
      } = n;
      o = r ? zt(Ct(a), r) : a;
    }
    return Va(e, n.variants, [o], r);
  }
  return n?.isProcessed ? r ? zt(Ct(n.style), r) : n.style : r ? zt(Ct(n), r) : n;
}
function Va(e, t, r = [], n = void 0) {
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    if (typeof a.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !a.props(o))
        continue;
    } else
      for (const c in a.props)
        if (e[c] !== a.props[c] && e.ownerState?.[c] !== a.props[c])
          continue e;
    typeof a.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(n ? zt(Ct(a.style(o)), n) : a.style(o))) : r.push(n ? zt(Ct(a.style), n) : a.style);
  }
  return r;
}
function Wa(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Qd,
    rootShouldForwardProp: n = To,
    slotShouldForwardProp: o = To
  } = e;
  function s(c) {
    tf(c, t, r);
  }
  return (c, l = {}) => {
    Ud(c, (C) => C.filter((k) => k !== Ht));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: m,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = ef(Ua(d)),
      ...y
    } = l, f = u && u.startsWith("Mui") || d ? "components" : "custom", x = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), w = b || !1;
    let P = To;
    d === "Root" || d === "root" ? P = n : d ? P = o : sf(c) && (P = void 0);
    const E = Wd(c, {
      shouldForwardProp: P,
      label: nf(u, d),
      ...y
    }), v = (C) => {
      if (C.__emotion_real === C)
        return C;
      if (typeof C == "function")
        return function($) {
          return Cn($, C, $.theme.modularCssLayers ? f : void 0);
        };
      if (ut(C)) {
        const k = za(C);
        return function(M) {
          return k.variants ? Cn(M, k, M.theme.modularCssLayers ? f : void 0) : M.theme.modularCssLayers ? zt(k.style, f) : k.style;
        };
      }
      return C;
    }, h = (...C) => {
      const k = [], $ = C.map(v), M = [];
      if (k.push(s), u && g && M.push(function(j) {
        const B = j.theme.components?.[u]?.styleOverrides;
        if (!B)
          return null;
        const A = {};
        for (const V in B)
          A[V] = Cn(j, B[V], j.theme.modularCssLayers ? "theme" : void 0);
        return g(j, A);
      }), u && !x && M.push(function(j) {
        const B = j.theme?.components?.[u]?.variants;
        return B ? Va(j, B, [], j.theme.modularCssLayers ? "theme" : void 0) : null;
      }), w || M.push(Ht), Array.isArray($[0])) {
        const p = $.shift(), j = new Array(k.length).fill(""), N = new Array(M.length).fill("");
        let B;
        B = [...j, ...p, ...N], B.raw = [...j, ...p.raw, ...N], k.unshift(B);
      }
      const I = [...k, ...$, ...M], F = E(...I);
      return c.muiName && (F.muiName = c.muiName), process.env.NODE_ENV !== "production" && (F.displayName = rf(u, d, c)), F;
    };
    return E.withConfig && (h.withConfig = E.withConfig), h;
  };
}
function rf(e, t, r) {
  return e ? `${e}${ee(t || "")}` : `Styled(${Zd(r)})`;
}
function nf(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Ua(t || "Root")}`), r;
}
function of(e) {
  for (const t in e)
    return !1;
  return !0;
}
function sf(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ua(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const af = Wa();
function Vr(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const s = o;
      if (s === "components" || s === "slots")
        n[s] = {
          ...e[s],
          ...n[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const a = e[s], c = t[s];
        if (!c)
          n[s] = a || {};
        else if (!a)
          n[s] = c;
        else {
          n[s] = {
            ...c
          };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const u = l;
              n[s][u] = Vr(a[u], c[u], r);
            }
        }
      } else s === "className" && r && t.className ? n.className = ne(e?.className, t?.className) : s === "style" && r && t.style ? n.style = {
        ...e?.style,
        ...t?.style
      } : n[s] === void 0 && (n[s] = e[s]);
    }
  return n;
}
function cf(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Vr(t.components[r].defaultProps, n);
}
function lf({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = pi(r);
  return n && (o = o[n] || o), cf({
    theme: o,
    name: t,
    props: e
  });
}
const vt = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function uf(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function hi(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), uf(e, t, r);
}
function df(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Pt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Pt(df(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : bt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : bt(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const ff = (e) => {
  const t = Pt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Rr = (e, t) => {
  try {
    return ff(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function no(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Ha(e) {
  e = Pt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), a = (u, d = (u + r / 30) % 12) => o - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), no({
    type: c,
    values: l
  });
}
function Bo(e) {
  e = Pt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Pt(Ha(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Es(e, t) {
  const r = Bo(e), n = Bo(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Nn(e, t) {
  return e = Pt(e), t = hi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, no(e);
}
function _t(e, t, r) {
  try {
    return Nn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function oo(e, t) {
  if (e = Pt(e), t = hi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return no(e);
}
function pe(e, t, r) {
  try {
    return oo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function io(e, t) {
  if (e = Pt(e), t = hi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return no(e);
}
function me(e, t, r) {
  try {
    return io(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function pf(e, t = 0.15) {
  return Bo(e) > 0.5 ? oo(e, t) : io(e, t);
}
function mn(e, t, r) {
  try {
    return pf(e, t);
  } catch {
    return e;
  }
}
const mf = "exact-prop: ​";
function so(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [mf]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const gi = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (gi.displayName = "ThemeContext");
function yi() {
  const e = T.useContext(gi);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e;
}
const hf = typeof Symbol == "function" && Symbol.for, gf = hf ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function yf(e, t) {
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
function In(e) {
  const {
    children: t,
    theme: r
  } = e, n = yi();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = T.useMemo(() => {
    const s = n === null ? {
      ...r
    } : yf(n, r);
    return s != null && (s[gf] = n !== null), s;
  }, [r, n]);
  return /* @__PURE__ */ O.jsx(gi.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (In.propTypes = {
  /**
   * Your component tree.
   */
  children: i.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: i.oneOfType([i.object, i.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (In.propTypes = so(In.propTypes));
const qa = /* @__PURE__ */ T.createContext();
function Ya({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ O.jsx(qa.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Ya.propTypes = {
  children: i.node,
  value: i.bool
});
const bi = () => T.useContext(qa) ?? !1, Ga = /* @__PURE__ */ T.createContext(void 0);
function Ka({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ O.jsx(Ga.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Ka.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: i.node,
  /**
   * @ignore
   */
  value: i.object
});
function bf(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Vr(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Vr(o, n, t.components.mergeClassNameAndStyle) : n;
}
function vf({
  props: e,
  name: t
}) {
  const r = T.useContext(Ga);
  return bf({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let Ts = 0;
function xf(e) {
  const [t, r] = T.useState(e), n = e || t;
  return T.useEffect(() => {
    t == null && (Ts += 1, r(`mui-${Ts}`));
  }, [t]), n;
}
const Sf = {
  ...T
}, ws = Sf.useId;
function ao(e) {
  if (ws !== void 0) {
    const t = ws();
    return e ?? t;
  }
  return xf(e);
}
function Ef(e) {
  const t = fi(), r = ao() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, vt(() => {
    const s = document.querySelector("head");
    if (!s)
      return;
    const a = s.firstChild;
    if (o) {
      if (a && a.hasAttribute?.("data-mui-layer-order") && a.getAttribute("data-mui-layer-order") === r)
        return;
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", r), c.textContent = o, s.prepend(c);
    } else
      s.querySelector(`style[data-mui-layer-order="${r}"]`)?.remove();
  }, [o, r]), o ? /* @__PURE__ */ O.jsx(mi, {
    styles: o
  }) : null;
}
const Cs = {};
function Os(e, t, r, n = !1) {
  return T.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const s = r(o), a = e ? {
        ...t,
        [e]: s
      } : s;
      return n ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, n]);
}
function Wr(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = fi(Cs), s = yi() || Cs;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Os(n, o, r), c = Os(n, s, r, !0), l = (n ? a[n] : a).direction === "rtl", u = Ef(a);
  return /* @__PURE__ */ O.jsx(In, {
    theme: c,
    children: /* @__PURE__ */ O.jsx(Qr.Provider, {
      value: a,
      children: /* @__PURE__ */ O.jsx(Ya, {
        value: l,
        children: /* @__PURE__ */ O.jsxs(Ka, {
          value: n ? a[n].components : a.components,
          children: [u, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Wr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: i.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: i.oneOfType([i.func, i.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: i.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Wr.propTypes = so(Wr.propTypes));
const Ps = {
  theme: void 0
};
function Tf(e) {
  let t, r;
  return function(o) {
    let s = t;
    return (s === void 0 || o.theme !== r) && (Ps.theme = o.theme, s = za(e(Ps)), t = s, r = o.theme), s;
  };
}
const vi = "mode", xi = "color-scheme", wf = "data-color-scheme";
function Cf(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = vi,
    colorSchemeStorageKey: s = xi,
    attribute: a = wf,
    colorSchemeNode: c = "document.documentElement",
    nonce: l
  } = e || {};
  let u = "", d = a;
  if (a === "class" && (d = ".%s"), a === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const b = d.substring(1);
    u += `${c}.classList.remove('${b}'.replace('%s', light), '${b}'.replace('%s', dark));
      ${c}.classList.add('${b}'.replace('%s', colorScheme));`;
  }
  const m = d.match(/\[([^\]]+)\]/);
  if (m) {
    const [b, g] = m[1].split("=");
    g || (u += `${c}.removeAttribute('${b}'.replace('%s', light));
      ${c}.removeAttribute('${b}'.replace('%s', dark));`), u += `
      ${c}.setAttribute('${b}'.replace('%s', colorScheme), ${g ? `${g}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${c}.setAttribute('${d}', colorScheme);`;
  return /* @__PURE__ */ O.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${s}-dark') || '${n}';
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
function Of() {
}
const Pf = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!t)
      return r;
    let n;
    try {
      n = t.localStorage.getItem(e);
    } catch {
    }
    return n || r;
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
      return Of;
    const n = (o) => {
      const s = o.newValue;
      o.key === e && r(s);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function wo() {
}
function Rs(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Xa(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Rf(e) {
  return Xa(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function kf(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: s = vi,
    colorSchemeStorageKey: a = xi,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    storageManager: l = Pf,
    noSsr: u = !1
  } = e, d = o.join(","), m = o.length > 1, b = T.useMemo(() => l?.({
    key: s,
    storageWindow: c
  }), [l, s, c]), g = T.useMemo(() => l?.({
    key: `${a}-light`,
    storageWindow: c
  }), [l, a, c]), y = T.useMemo(() => l?.({
    key: `${a}-dark`,
    storageWindow: c
  }), [l, a, c]), [f, x] = T.useState(() => {
    const $ = b?.get(t) || t, M = g?.get(r) || r, I = y?.get(n) || n;
    return {
      mode: $,
      systemMode: Rs($),
      lightColorScheme: M,
      darkColorScheme: I
    };
  }), [w, P] = T.useState(u || !m);
  T.useEffect(() => {
    P(!0);
  }, []);
  const E = Rf(f), v = T.useCallback(($) => {
    x((M) => {
      if ($ === M.mode)
        return M;
      const I = $ ?? t;
      return b?.set(I), {
        ...M,
        mode: I,
        systemMode: Rs(I)
      };
    });
  }, [b, t]), h = T.useCallback(($) => {
    $ ? typeof $ == "string" ? $ && !d.includes($) ? console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`) : x((M) => {
      const I = {
        ...M
      };
      return Xa(M, (F) => {
        F === "light" && (g?.set($), I.lightColorScheme = $), F === "dark" && (y?.set($), I.darkColorScheme = $);
      }), I;
    }) : x((M) => {
      const I = {
        ...M
      }, F = $.light === null ? r : $.light, p = $.dark === null ? n : $.dark;
      return F && (d.includes(F) ? (I.lightColorScheme = F, g?.set(F)) : console.error(`\`${F}\` does not exist in \`theme.colorSchemes\`.`)), p && (d.includes(p) ? (I.darkColorScheme = p, y?.set(p)) : console.error(`\`${p}\` does not exist in \`theme.colorSchemes\`.`)), I;
    }) : x((M) => (g?.set(r), y?.set(n), {
      ...M,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [d, g, y, r, n]), C = T.useCallback(($) => {
    f.mode === "system" && x((M) => {
      const I = $?.matches ? "dark" : "light";
      return M.systemMode === I ? M : {
        ...M,
        systemMode: I
      };
    });
  }, [f.mode]), k = T.useRef(C);
  return k.current = C, T.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const $ = (...I) => k.current(...I), M = window.matchMedia("(prefers-color-scheme: dark)");
    return M.addListener($), $(M), () => {
      M.removeListener($);
    };
  }, [m]), T.useEffect(() => {
    if (m) {
      const $ = b?.subscribe((F) => {
        (!F || ["light", "dark", "system"].includes(F)) && v(F || t);
      }) || wo, M = g?.subscribe((F) => {
        (!F || d.match(F)) && h({
          light: F
        });
      }) || wo, I = y?.subscribe((F) => {
        (!F || d.match(F)) && h({
          dark: F
        });
      }) || wo;
      return () => {
        $(), M(), I();
      };
    }
  }, [h, v, d, t, c, m, b, g, y]), {
    ...f,
    mode: w ? f.mode : void 0,
    systemMode: w ? f.systemMode : void 0,
    colorScheme: w ? E : void 0,
    setMode: v,
    setColorScheme: h
  };
}
const Mf = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function $f(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = vi,
    colorSchemeStorageKey: o = xi,
    disableTransitionOnChange: s = !1,
    defaultColorScheme: a,
    resolveTheme: c
  } = e, l = {
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
  }, u = /* @__PURE__ */ T.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const d = () => T.useContext(u) || l, m = {}, b = {};
  function g(w) {
    const {
      children: P,
      theme: E,
      modeStorageKey: v = n,
      colorSchemeStorageKey: h = o,
      disableTransitionOnChange: C = s,
      storageManager: k,
      storageWindow: $ = typeof window > "u" ? void 0 : window,
      documentNode: M = typeof document > "u" ? void 0 : document,
      colorSchemeNode: I = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: F = !1,
      disableStyleSheetGeneration: p = !1,
      defaultMode: j = "system",
      forceThemeRerender: N = !1,
      noSsr: B
    } = w, A = T.useRef(!1), V = yi(), X = T.useContext(u), H = !!X && !F, S = T.useMemo(() => E || (typeof r == "function" ? r() : r), [E]), _ = S[t], L = _ || S, {
      colorSchemes: W = m,
      components: U = b,
      cssVarPrefix: z
    } = L, Y = Object.keys(W).filter((Ie) => !!W[Ie]).join(","), K = T.useMemo(() => Y.split(","), [Y]), G = typeof a == "string" ? a : a.light, Z = typeof a == "string" ? a : a.dark, q = W[G] && W[Z] ? j : W[L.defaultColorScheme]?.palette?.mode || L.palette?.mode, {
      mode: J,
      setMode: R,
      systemMode: ie,
      lightColorScheme: se,
      darkColorScheme: xe,
      colorScheme: Ze,
      setColorScheme: je
    } = kf({
      supportedColorSchemes: K,
      defaultLightColorScheme: G,
      defaultDarkColorScheme: Z,
      modeStorageKey: v,
      colorSchemeStorageKey: h,
      defaultMode: q,
      storageManager: k,
      storageWindow: $,
      noSsr: B
    });
    let Ne = J, ve = Ze;
    H && (Ne = X.mode, ve = X.colorScheme), process.env.NODE_ENV !== "production" && N && !L.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Pe = ve || L.defaultColorScheme;
    L.vars && !N && (Pe = L.defaultColorScheme);
    const be = T.useMemo(() => {
      const Ie = L.generateThemeVars?.() || L.vars, he = {
        ...L,
        components: U,
        colorSchemes: W,
        cssVarPrefix: z,
        vars: Ie
      };
      if (typeof he.generateSpacing == "function" && (he.spacing = he.generateSpacing()), Pe) {
        const De = W[Pe];
        De && typeof De == "object" && Object.keys(De).forEach((Le) => {
          De[Le] && typeof De[Le] == "object" ? he[Le] = {
            ...he[Le],
            ...De[Le]
          } : he[Le] = De[Le];
        });
      }
      return c ? c(he) : he;
    }, [L, Pe, U, W, z]), Q = L.colorSchemeSelector;
    vt(() => {
      if (ve && I && Q && Q !== "media") {
        const Ie = Q;
        let he = Q;
        if (Ie === "class" && (he = ".%s"), Ie === "data" && (he = "[data-%s]"), Ie?.startsWith("data-") && !Ie.includes("%s") && (he = `[${Ie}="%s"]`), he.startsWith("."))
          I.classList.remove(...K.map((De) => he.substring(1).replace("%s", De))), I.classList.add(he.substring(1).replace("%s", ve));
        else {
          const De = he.replace("%s", ve).match(/\[([^\]]+)\]/);
          if (De) {
            const [Le, At] = De[1].split("=");
            At || K.forEach((We) => {
              I.removeAttribute(Le.replace(ve, We));
            }), I.setAttribute(Le, At ? At.replace(/"|'/g, "") : "");
          } else
            I.setAttribute(he, ve);
        }
      }
    }, [ve, Q, I, K]), T.useEffect(() => {
      let Ie;
      if (C && A.current && M) {
        const he = M.createElement("style");
        he.appendChild(M.createTextNode(Mf)), M.head.appendChild(he), window.getComputedStyle(M.body), Ie = setTimeout(() => {
          M.head.removeChild(he);
        }, 1);
      }
      return () => {
        clearTimeout(Ie);
      };
    }, [ve, C, M]), T.useEffect(() => (A.current = !0, () => {
      A.current = !1;
    }), []);
    const Nt = T.useMemo(() => ({
      allColorSchemes: K,
      colorScheme: ve,
      darkColorScheme: xe,
      lightColorScheme: se,
      mode: Ne,
      setColorScheme: je,
      setMode: process.env.NODE_ENV === "production" ? R : (Ie) => {
        be.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), R(Ie);
      },
      systemMode: ie
    }), [K, ve, xe, se, Ne, je, R, ie, be.colorSchemeSelector]);
    let Et = !0;
    (p || L.cssVariables === !1 || H && V?.cssVarPrefix === z) && (Et = !1);
    const It = /* @__PURE__ */ O.jsxs(T.Fragment, {
      children: [/* @__PURE__ */ O.jsx(Wr, {
        themeId: _ ? t : void 0,
        theme: be,
        children: P
      }), Et && /* @__PURE__ */ O.jsx(di, {
        styles: be.generateStyleSheets?.() || []
      })]
    });
    return H ? It : /* @__PURE__ */ O.jsx(u.Provider, {
      value: Nt,
      children: It
    });
  }
  process.env.NODE_ENV !== "production" && (g.propTypes = {
    /**
     * The component tree.
     */
    children: i.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: i.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: i.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: i.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: i.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: i.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: i.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: i.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: i.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: i.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: i.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: i.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: i.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: i.object
  });
  const y = typeof a == "string" ? a : a.light, f = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: g,
    useColorScheme: d,
    getInitColorSchemeScript: (w) => Cf({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: y,
      defaultDarkColorScheme: f,
      modeStorageKey: n,
      ...w
    })
  };
}
function Nf(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const ks = (e, t, r, n = []) => {
  let o = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = n.includes(s) ? [] : {}), o = o[s]);
  });
}, If = (e, t, r) => {
  function n(o, s = [], a = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || r && !r([...s, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...s, c], Array.isArray(l) ? [...a, c] : a) : t([...s, c], l, a));
    });
  }
  n(e);
}, Af = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Co(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, s = {}, a = {};
  return If(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const d = `--${r ? `${r}-` : ""}${c.join("-")}`, m = Af(c, l);
        Object.assign(o, {
          [d]: m
        }), ks(s, c, `var(${d})`, u), ks(a, c, `var(${d}, ${m})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: a
  };
}
function jf(e, t = {}) {
  const {
    getSelector: r = w,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: s
  } = t, {
    colorSchemes: a = {},
    components: c,
    defaultColorScheme: l = "light",
    ...u
  } = e, {
    vars: d,
    css: m,
    varsWithDefaults: b
  } = Co(u, t);
  let g = b;
  const y = {}, {
    [l]: f,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([v, h]) => {
    const {
      vars: C,
      css: k,
      varsWithDefaults: $
    } = Co(h, t);
    g = Ve(g, $), y[v] = {
      css: k,
      vars: C
    };
  }), f) {
    const {
      css: v,
      vars: h,
      varsWithDefaults: C
    } = Co(f, t);
    g = Ve(g, C), y[l] = {
      css: v,
      vars: h
    };
  }
  function w(v, h) {
    let C = o;
    if (o === "class" && (C = ".%s"), o === "data" && (C = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (C = `[${o}="%s"]`), v) {
      if (C === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${a[v]?.palette?.mode || v})`]: {
            ":root": h
          }
        };
      if (C)
        return e.defaultColorScheme === v ? `:root, ${C.replace("%s", String(v))}` : C.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let v = {
        ...d
      };
      return Object.entries(y).forEach(([, {
        vars: h
      }]) => {
        v = Ve(v, h);
      }), v;
    },
    generateStyleSheets: () => {
      const v = [], h = e.defaultColorScheme || "light";
      function C(M, I) {
        Object.keys(I).length && v.push(typeof M == "string" ? {
          [M]: {
            ...I
          }
        } : M);
      }
      C(r(void 0, {
        ...m
      }), m);
      const {
        [h]: k,
        ...$
      } = y;
      if (k) {
        const {
          css: M
        } = k, I = a[h]?.palette?.mode, F = !n && I ? {
          colorScheme: I,
          ...M
        } : {
          ...M
        };
        C(r(h, {
          ...F
        }), F);
      }
      return Object.entries($).forEach(([M, {
        css: I
      }]) => {
        const F = a[M]?.palette?.mode, p = !n && F ? {
          colorScheme: F,
          ...I
        } : {
          ...I
        };
        C(r(M, {
          ...p
        }), p);
      }), s && v.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), v;
    }
  };
}
function _f(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Df = ro(), Bf = af("div", {
  name: "MuiStack",
  slot: "Root"
});
function Ff(e) {
  return lf({
    props: e,
    name: "MuiStack",
    defaultTheme: Df
  });
}
function Lf(e, t) {
  const r = T.Children.toArray(e).filter(Boolean);
  return r.reduce((n, o, s) => (n.push(o), s < r.length - 1 && n.push(/* @__PURE__ */ T.cloneElement(t, {
    key: `separator-${s}`
  })), n), []);
}
const zf = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Vf = ({
  ownerState: e,
  theme: t
}) => {
  let r = {
    display: "flex",
    flexDirection: "column",
    ...st({
      theme: t
    }, vo({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (n) => ({
      flexDirection: n
    }))
  };
  if (e.spacing) {
    const n = Yn(t), o = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), s = vo({
      values: e.direction,
      base: o
    }), a = vo({
      values: e.spacing,
      base: o
    });
    typeof s == "object" && Object.keys(s).forEach((l, u, d) => {
      if (!s[l]) {
        const b = u > 0 ? s[d[u - 1]] : "column";
        s[l] = b;
      }
    }), r = Ve(r, st({
      theme: t
    }, a, (l, u) => e.useFlexGap ? {
      gap: Ut(n, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${zf(u ? s[u] : e.direction)}`]: Ut(n, l)
      }
    }));
  }
  return r = tu(t.breakpoints, r), r;
};
function Wf(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Bf,
    useThemeProps: r = Ff,
    componentName: n = "MuiStack"
  } = e, o = () => $e({
    root: ["root"]
  }, (l) => Oe(n, l), {}), s = t(Vf), a = /* @__PURE__ */ T.forwardRef(function(l, u) {
    const d = r(l), m = Ca(d), {
      component: b = "div",
      direction: g = "column",
      spacing: y = 0,
      divider: f,
      children: x,
      className: w,
      useFlexGap: P = !1,
      ...E
    } = m, v = {
      direction: g,
      spacing: y,
      useFlexGap: P
    }, h = o();
    return /* @__PURE__ */ O.jsx(s, {
      as: b,
      ownerState: v,
      ref: u,
      className: ne(h.root, w),
      ...E,
      children: f ? Lf(x, f) : x
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: i.node,
    direction: i.oneOfType([i.oneOf(["column-reverse", "column", "row-reverse", "row"]), i.arrayOf(i.oneOf(["column-reverse", "column", "row-reverse", "row"])), i.object]),
    divider: i.node,
    spacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
    sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
  }), a;
}
const Ur = {
  black: "#000",
  white: "#fff"
}, Uf = {
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
}, Jt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Zt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Tr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Qt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, er = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, tr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Ja() {
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
      paper: Ur.white,
      default: Ur.white
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
const Za = Ja();
function Qa() {
  return {
    text: {
      primary: Ur.white,
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
      active: Ur.white,
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
const Fo = Qa();
function Ms(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = io(e.main, o) : t === "dark" && (e.dark = oo(e.main, s)));
}
function $s(e, t, r, n, o) {
  const s = o.light || o, a = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Hf(e = "light") {
  return e === "dark" ? {
    main: Qt[200],
    light: Qt[50],
    dark: Qt[400]
  } : {
    main: Qt[700],
    light: Qt[400],
    dark: Qt[800]
  };
}
function qf(e = "light") {
  return e === "dark" ? {
    main: Jt[200],
    light: Jt[50],
    dark: Jt[400]
  } : {
    main: Jt[500],
    light: Jt[300],
    dark: Jt[700]
  };
}
function Yf(e = "light") {
  return e === "dark" ? {
    main: Zt[500],
    light: Zt[300],
    dark: Zt[700]
  } : {
    main: Zt[700],
    light: Zt[400],
    dark: Zt[800]
  };
}
function Gf(e = "light") {
  return e === "dark" ? {
    main: er[400],
    light: er[300],
    dark: er[700]
  } : {
    main: er[700],
    light: er[500],
    dark: er[900]
  };
}
function Kf(e = "light") {
  return e === "dark" ? {
    main: tr[400],
    light: tr[300],
    dark: tr[700]
  } : {
    main: tr[800],
    light: tr[500],
    dark: tr[900]
  };
}
function Xf(e = "light") {
  return e === "dark" ? {
    main: Tr[400],
    light: Tr[300],
    dark: Tr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Tr[500],
    dark: Tr[900]
  };
}
function Jf(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Si(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...s
  } = e, a = e.primary || Hf(t), c = e.secondary || qf(t), l = e.error || Yf(t), u = e.info || Gf(t), d = e.success || Kf(t), m = e.warning || Xf(t);
  function b(x) {
    if (o)
      return Jf(x);
    const w = Es(x, Fo.text.primary) >= r ? Fo.text.primary : Za.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const P = Es(x, w);
      P < 3 && console.error([`MUI: The contrast ratio of ${P}:1 for ${w} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const g = ({
    color: x,
    name: w,
    mainShade: P = 500,
    lightShade: E = 300,
    darkShade: v = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[P] && (x.main = x[P]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${P}\` property.` : bt(11, w ? ` (${w})` : "", P));
    if (typeof x.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(x.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : bt(12, w ? ` (${w})` : "", JSON.stringify(x.main)));
    return o ? ($s(o, x, "light", E, n), $s(o, x, "dark", v, n)) : (Ms(x, "light", E, n), Ms(x, "dark", v, n)), x.contrastText || (x.contrastText = b(x.main)), x;
  };
  let y;
  return t === "light" ? y = Ja() : t === "dark" && (y = Qa()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ve({
    // A collection of common colors.
    common: {
      ...Ur
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Uf,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: b,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...y
  }, s);
}
function Zf(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, s] = n;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function Qf(e, t) {
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
function ep(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ns = {
  textTransform: "uppercase"
}, Is = '"Roboto", "Helvetica", "Arial", sans-serif';
function ec(e, t) {
  const {
    fontFamily: r = Is,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: d,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = n / 14, g = d || ((x) => `${x / l * b}rem`), y = (x, w, P, E, v) => ({
    fontFamily: r,
    fontWeight: x,
    fontSize: g(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Is ? {
      letterSpacing: `${ep(E / w)}em`
    } : {},
    ...v,
    ...u
  }), f = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, Ns),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, Ns),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ve({
    htmlFontSize: l,
    pxToRem: g,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...f
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const tp = 0.2, rp = 0.14, np = 0.12;
function Se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${tp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${rp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${np})`].join(",");
}
const op = ["none", Se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ip = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, sp = {
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
function As(e) {
  return `${Math.round(e)}ms`;
}
function ap(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function cp(e) {
  const t = {
    ...ip,
    ...e.easing
  }, r = {
    ...sp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: ap,
    create: (o = ["all"], s = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (b) => typeof b == "string", m = (b) => !Number.isNaN(parseFloat(b));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : As(a)} ${c} ${typeof l == "string" ? l : As(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const lp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function up(e) {
  return ut(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function tc(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let s = 0; s < o.length; s++) {
      const [a, c] = o[s];
      !up(c) || a.startsWith("unstable_") ? delete n[a] : ut(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function js(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const dp = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function fp(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : Nn(t, dp(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${js(r)})` : io(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${js(r)})` : oo(t, r);
    }
  });
}
function Lo(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: s = {},
    transitions: a = {},
    typography: c = {},
    shape: l,
    colorSpace: u,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : bt(20));
  const m = Si({
    ...s,
    colorSpace: u
  }), b = ro(e);
  let g = Ve(b, {
    mixins: Qf(b.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: op.slice(),
    typography: ec(m, c),
    transitions: cp(a),
    zIndex: {
      ...lp
    }
  });
  if (g = Ve(g, d), g = t.reduce((y, f) => Ve(y, f), g), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (x, w) => {
      let P;
      for (P in x) {
        const E = x[P];
        if (y.includes(P) && Object.keys(E).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Oe("", P);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${P}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: E
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[P] = {};
        }
      }
    };
    Object.keys(g.components).forEach((x) => {
      const w = g.components[x].styleOverrides;
      w && x.startsWith("Mui") && f(w, x);
    });
  }
  return g.unstable_sxConfig = {
    ...Xr,
    ...d?.unstable_sxConfig
  }, g.unstable_sx = function(f) {
    return Ht({
      sx: f,
      theme: this
    });
  }, g.toRuntimeSource = tc, fp(g), g;
}
function zo(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const pp = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = zo(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function rc(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function nc(e) {
  return e === "dark" ? pp : [];
}
function mp(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...s
  } = e, a = Si({
    ...t,
    colorSpace: o
  });
  return {
    palette: a,
    opacity: {
      ...rc(a.mode),
      ...r
    },
    overlays: n || nc(a.mode),
    ...s
  };
}
function hp(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const gp = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], yp = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let s = o;
  if (o === "class" && (s = ".%s"), o === "data" && (s = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (s = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return gp(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
      }), s === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : s ? {
        [s.replace("%s", t)]: a,
        [`${n}, ${s.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (s && s !== "media")
      return `${n}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return n;
};
function bp(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function D(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function kr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ha(e);
}
function ht(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Rr(kr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function vp(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const at = (e) => {
  try {
    return e();
  } catch {
  }
}, xp = (e = "mui") => Nf(e);
function Oo(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const s = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = mp({
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
    ...c
  } = Lo({
    ...n,
    palette: {
      mode: s,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: a,
    opacity: {
      ...rc(s),
      ...r?.opacity
    },
    overlays: r?.overlays || nc(s)
  }, c;
}
function Sp(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: c = hp,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, m = Object.keys(r)[0], b = n || (r.light && m !== "light" ? "light" : m), g = xp(s), {
    [b]: y,
    light: f,
    dark: x,
    ...w
  } = r, P = {
    ...w
  };
  let E = y;
  if ((b === "dark" && !("dark" in r) || b === "light" && !("light" in r)) && (E = !0), !E)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${b}\` option is either missing or invalid.` : bt(21, b));
  let v;
  a && (v = "oklch");
  const h = Oo(v, P, E, d, b);
  f && !P.light && Oo(v, P, f, void 0, "light"), x && !P.dark && Oo(v, P, x, void 0, "dark");
  let C = {
    defaultColorScheme: b,
    ...h,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: g,
    colorSchemes: P,
    font: {
      ...Zf(h.typography),
      ...h.font
    },
    spacing: vp(d.spacing)
  };
  Object.keys(C.colorSchemes).forEach((F) => {
    const p = C.colorSchemes[F].palette, j = (B) => {
      const A = B.split("-"), V = A[1], X = A[2];
      return g(B, p[V][X]);
    };
    p.mode === "light" && (D(p.common, "background", "#fff"), D(p.common, "onBackground", "#000")), p.mode === "dark" && (D(p.common, "background", "#000"), D(p.common, "onBackground", "#fff"));
    function N(B, A, V) {
      if (v) {
        let X;
        return B === _t && (X = `transparent ${((1 - V) * 100).toFixed(0)}%`), B === pe && (X = `#000 ${(V * 100).toFixed(0)}%`), B === me && (X = `#fff ${(V * 100).toFixed(0)}%`), `color-mix(in ${v}, ${A}, ${X})`;
      }
      return B(A, V);
    }
    if (bp(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      D(p.Alert, "errorColor", N(pe, p.error.light, 0.6)), D(p.Alert, "infoColor", N(pe, p.info.light, 0.6)), D(p.Alert, "successColor", N(pe, p.success.light, 0.6)), D(p.Alert, "warningColor", N(pe, p.warning.light, 0.6)), D(p.Alert, "errorFilledBg", j("palette-error-main")), D(p.Alert, "infoFilledBg", j("palette-info-main")), D(p.Alert, "successFilledBg", j("palette-success-main")), D(p.Alert, "warningFilledBg", j("palette-warning-main")), D(p.Alert, "errorFilledColor", at(() => p.getContrastText(p.error.main))), D(p.Alert, "infoFilledColor", at(() => p.getContrastText(p.info.main))), D(p.Alert, "successFilledColor", at(() => p.getContrastText(p.success.main))), D(p.Alert, "warningFilledColor", at(() => p.getContrastText(p.warning.main))), D(p.Alert, "errorStandardBg", N(me, p.error.light, 0.9)), D(p.Alert, "infoStandardBg", N(me, p.info.light, 0.9)), D(p.Alert, "successStandardBg", N(me, p.success.light, 0.9)), D(p.Alert, "warningStandardBg", N(me, p.warning.light, 0.9)), D(p.Alert, "errorIconColor", j("palette-error-main")), D(p.Alert, "infoIconColor", j("palette-info-main")), D(p.Alert, "successIconColor", j("palette-success-main")), D(p.Alert, "warningIconColor", j("palette-warning-main")), D(p.AppBar, "defaultBg", j("palette-grey-100")), D(p.Avatar, "defaultBg", j("palette-grey-400")), D(p.Button, "inheritContainedBg", j("palette-grey-300")), D(p.Button, "inheritContainedHoverBg", j("palette-grey-A100")), D(p.Chip, "defaultBorder", j("palette-grey-400")), D(p.Chip, "defaultAvatarColor", j("palette-grey-700")), D(p.Chip, "defaultIconColor", j("palette-grey-700")), D(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), D(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), D(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), D(p.LinearProgress, "primaryBg", N(me, p.primary.main, 0.62)), D(p.LinearProgress, "secondaryBg", N(me, p.secondary.main, 0.62)), D(p.LinearProgress, "errorBg", N(me, p.error.main, 0.62)), D(p.LinearProgress, "infoBg", N(me, p.info.main, 0.62)), D(p.LinearProgress, "successBg", N(me, p.success.main, 0.62)), D(p.LinearProgress, "warningBg", N(me, p.warning.main, 0.62)), D(p.Skeleton, "bg", v ? N(_t, p.text.primary, 0.11) : `rgba(${j("palette-text-primaryChannel")} / 0.11)`), D(p.Slider, "primaryTrack", N(me, p.primary.main, 0.62)), D(p.Slider, "secondaryTrack", N(me, p.secondary.main, 0.62)), D(p.Slider, "errorTrack", N(me, p.error.main, 0.62)), D(p.Slider, "infoTrack", N(me, p.info.main, 0.62)), D(p.Slider, "successTrack", N(me, p.success.main, 0.62)), D(p.Slider, "warningTrack", N(me, p.warning.main, 0.62));
      const B = v ? N(pe, p.background.default, 0.6825) : mn(p.background.default, 0.8);
      D(p.SnackbarContent, "bg", B), D(p.SnackbarContent, "color", at(() => v ? Fo.text.primary : p.getContrastText(B))), D(p.SpeedDialAction, "fabHoverBg", mn(p.background.paper, 0.15)), D(p.StepConnector, "border", j("palette-grey-400")), D(p.StepContent, "border", j("palette-grey-400")), D(p.Switch, "defaultColor", j("palette-common-white")), D(p.Switch, "defaultDisabledColor", j("palette-grey-100")), D(p.Switch, "primaryDisabledColor", N(me, p.primary.main, 0.62)), D(p.Switch, "secondaryDisabledColor", N(me, p.secondary.main, 0.62)), D(p.Switch, "errorDisabledColor", N(me, p.error.main, 0.62)), D(p.Switch, "infoDisabledColor", N(me, p.info.main, 0.62)), D(p.Switch, "successDisabledColor", N(me, p.success.main, 0.62)), D(p.Switch, "warningDisabledColor", N(me, p.warning.main, 0.62)), D(p.TableCell, "border", N(me, N(_t, p.divider, 1), 0.88)), D(p.Tooltip, "bg", N(_t, p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      D(p.Alert, "errorColor", N(me, p.error.light, 0.6)), D(p.Alert, "infoColor", N(me, p.info.light, 0.6)), D(p.Alert, "successColor", N(me, p.success.light, 0.6)), D(p.Alert, "warningColor", N(me, p.warning.light, 0.6)), D(p.Alert, "errorFilledBg", j("palette-error-dark")), D(p.Alert, "infoFilledBg", j("palette-info-dark")), D(p.Alert, "successFilledBg", j("palette-success-dark")), D(p.Alert, "warningFilledBg", j("palette-warning-dark")), D(p.Alert, "errorFilledColor", at(() => p.getContrastText(p.error.dark))), D(p.Alert, "infoFilledColor", at(() => p.getContrastText(p.info.dark))), D(p.Alert, "successFilledColor", at(() => p.getContrastText(p.success.dark))), D(p.Alert, "warningFilledColor", at(() => p.getContrastText(p.warning.dark))), D(p.Alert, "errorStandardBg", N(pe, p.error.light, 0.9)), D(p.Alert, "infoStandardBg", N(pe, p.info.light, 0.9)), D(p.Alert, "successStandardBg", N(pe, p.success.light, 0.9)), D(p.Alert, "warningStandardBg", N(pe, p.warning.light, 0.9)), D(p.Alert, "errorIconColor", j("palette-error-main")), D(p.Alert, "infoIconColor", j("palette-info-main")), D(p.Alert, "successIconColor", j("palette-success-main")), D(p.Alert, "warningIconColor", j("palette-warning-main")), D(p.AppBar, "defaultBg", j("palette-grey-900")), D(p.AppBar, "darkBg", j("palette-background-paper")), D(p.AppBar, "darkColor", j("palette-text-primary")), D(p.Avatar, "defaultBg", j("palette-grey-600")), D(p.Button, "inheritContainedBg", j("palette-grey-800")), D(p.Button, "inheritContainedHoverBg", j("palette-grey-700")), D(p.Chip, "defaultBorder", j("palette-grey-700")), D(p.Chip, "defaultAvatarColor", j("palette-grey-300")), D(p.Chip, "defaultIconColor", j("palette-grey-300")), D(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), D(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), D(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), D(p.LinearProgress, "primaryBg", N(pe, p.primary.main, 0.5)), D(p.LinearProgress, "secondaryBg", N(pe, p.secondary.main, 0.5)), D(p.LinearProgress, "errorBg", N(pe, p.error.main, 0.5)), D(p.LinearProgress, "infoBg", N(pe, p.info.main, 0.5)), D(p.LinearProgress, "successBg", N(pe, p.success.main, 0.5)), D(p.LinearProgress, "warningBg", N(pe, p.warning.main, 0.5)), D(p.Skeleton, "bg", v ? N(_t, p.text.primary, 0.13) : `rgba(${j("palette-text-primaryChannel")} / 0.13)`), D(p.Slider, "primaryTrack", N(pe, p.primary.main, 0.5)), D(p.Slider, "secondaryTrack", N(pe, p.secondary.main, 0.5)), D(p.Slider, "errorTrack", N(pe, p.error.main, 0.5)), D(p.Slider, "infoTrack", N(pe, p.info.main, 0.5)), D(p.Slider, "successTrack", N(pe, p.success.main, 0.5)), D(p.Slider, "warningTrack", N(pe, p.warning.main, 0.5));
      const B = v ? N(me, p.background.default, 0.985) : mn(p.background.default, 0.98);
      D(p.SnackbarContent, "bg", B), D(p.SnackbarContent, "color", at(() => v ? Za.text.primary : p.getContrastText(B))), D(p.SpeedDialAction, "fabHoverBg", mn(p.background.paper, 0.15)), D(p.StepConnector, "border", j("palette-grey-600")), D(p.StepContent, "border", j("palette-grey-600")), D(p.Switch, "defaultColor", j("palette-grey-300")), D(p.Switch, "defaultDisabledColor", j("palette-grey-600")), D(p.Switch, "primaryDisabledColor", N(pe, p.primary.main, 0.55)), D(p.Switch, "secondaryDisabledColor", N(pe, p.secondary.main, 0.55)), D(p.Switch, "errorDisabledColor", N(pe, p.error.main, 0.55)), D(p.Switch, "infoDisabledColor", N(pe, p.info.main, 0.55)), D(p.Switch, "successDisabledColor", N(pe, p.success.main, 0.55)), D(p.Switch, "warningDisabledColor", N(pe, p.warning.main, 0.55)), D(p.TableCell, "border", N(pe, N(_t, p.divider, 1), 0.68)), D(p.Tooltip, "bg", N(_t, p.grey[700], 0.92));
    }
    ht(p.background, "default"), ht(p.background, "paper"), ht(p.common, "background"), ht(p.common, "onBackground"), ht(p, "divider"), Object.keys(p).forEach((B) => {
      const A = p[B];
      B !== "tonalOffset" && A && typeof A == "object" && (A.main && D(p[B], "mainChannel", Rr(kr(A.main))), A.light && D(p[B], "lightChannel", Rr(kr(A.light))), A.dark && D(p[B], "darkChannel", Rr(kr(A.dark))), A.contrastText && D(p[B], "contrastTextChannel", Rr(kr(A.contrastText))), B === "text" && (ht(p[B], "primary"), ht(p[B], "secondary")), B === "action" && (A.active && ht(p[B], "active"), A.selected && ht(p[B], "selected")));
    });
  }), C = t.reduce((F, p) => Ve(F, p), C);
  const k = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: yp(C),
    enableContrastVars: a
  }, {
    vars: $,
    generateThemeVars: M,
    generateStyleSheets: I
  } = jf(C, k);
  return C.vars = $, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([F, p]) => {
    C[F] = p;
  }), C.generateThemeVars = M, C.generateStyleSheets = I, C.generateSpacing = function() {
    return Fa(d.spacing, Yn(this));
  }, C.getColorSchemeSelector = _f(l), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = c, C.unstable_sxConfig = {
    ...Xr,
    ...d?.unstable_sxConfig
  }, C.unstable_sx = function(p) {
    return Ht({
      sx: p,
      theme: this
    });
  }, C.toRuntimeSource = tc, C;
}
function _s(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Si({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ei(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r?.mode,
    ...a
  } = e, c = s || "light", l = o?.[c], u = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Lo(e, ...t);
    let d = r;
    "palette" in e || u[c] && (u[c] !== !0 ? d = u[c].palette : c === "dark" && (d = {
      mode: "dark"
    }));
    const m = Lo({
      ...e,
      palette: d
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, _s(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, _s(m, "light", u.light)), m;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), Sp({
    ...a,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Ti = Ei(), yt = "$$material";
function en() {
  const e = pi(Ti);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[yt] || e;
}
function oc(e) {
  return /* @__PURE__ */ O.jsx(mi, {
    ...e,
    defaultTheme: Ti,
    themeId: yt
  });
}
process.env.NODE_ENV !== "production" && (oc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool])
});
function Ep(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Xt = (e) => Ep(e) && e !== "classes", re = Wa({
  themeId: yt,
  defaultTheme: Ti,
  rootShouldForwardProp: Xt
});
function ic(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ O.jsx(oc, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
function Tp() {
  return Ca;
}
const Fe = Tf;
process.env.NODE_ENV !== "production" && (i.node, i.object.isRequired);
function ke(e) {
  return vf(e);
}
function wp(e) {
  return Oe("MuiSvgIcon", e);
}
Ee("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Cp = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ee(t)}`, `fontSize${ee(r)}`]
  };
  return $e(o, wp, n);
}, Op = re("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ee(r.color)}`], t[`fontSize${ee(r.fontSize)}`]];
  }
})(Fe(({
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
}))), An = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: a = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: m,
    viewBox: b = "0 0 24 24",
    ...g
  } = n, y = /* @__PURE__ */ T.isValidElement(o) && o.type === "svg", f = {
    ...n,
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: b,
    hasSvgAsChild: y
  }, x = {};
  d || (x.viewBox = b);
  const w = Cp(f);
  return /* @__PURE__ */ O.jsxs(Op, {
    as: c,
    className: ne(w.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r,
    ...x,
    ...g,
    ...y && o.props,
    ownerState: f,
    children: [y ? o.props.children : o, m ? /* @__PURE__ */ O.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (An.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: i.oneOfType([i.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: i.oneOfType([i.oneOf(["inherit", "large", "medium", "small"]), i.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: i.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: i.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: i.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: i.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: i.string
});
An.muiName = "SvgIcon";
function _e(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ O.jsx(An, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = An.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(r));
}
function Pp(e, t = 166) {
  let r;
  function n(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function rt(e) {
  return e && e.ownerDocument || document;
}
function qt(e) {
  return rt(e).defaultView || window;
}
function Ds(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function sc(e) {
  const {
    controlled: t,
    default: r,
    name: n,
    state: o = "value"
  } = e, {
    current: s
  } = T.useRef(t !== void 0), [a, c] = T.useState(r), l = s ? t : a;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      s !== (t !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${o} state of ${n} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [o, n, t]);
    const {
      current: d
    } = T.useRef(r);
    T.useEffect(() => {
      !s && !Object.is(d, r) && console.error([`MUI: A component is changing the default ${o} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const u = T.useCallback((d) => {
    s || c(d);
  }, []);
  return [l, u];
}
function Ot(e) {
  const t = T.useRef(e);
  return vt(() => {
    t.current = e;
  }), T.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Ge(...e) {
  const t = T.useRef(void 0), r = T.useCallback((n) => {
    const o = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const a = s, c = a(n);
        return typeof c == "function" ? c : () => {
          a(null);
        };
      }
      return s.current = n, () => {
        s.current = null;
      };
    });
    return () => {
      o.forEach((s) => s?.());
    };
  }, e);
  return T.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
function Rp(e, t) {
  const r = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && r >= 65 && r <= 90 && typeof t == "function";
}
function kp(e, t) {
  if (!e)
    return t;
  function r(a, c) {
    const l = {};
    return Object.keys(c).forEach((u) => {
      Rp(u, c[u]) && typeof a[u] == "function" && (l[u] = (...d) => {
        a[u](...d), c[u](...d);
      });
    }), l;
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const c = typeof t == "function" ? t(a) : t, l = typeof e == "function" ? e({
        ...a,
        ...c
      }) : e, u = ne(a?.className, c?.className, l?.className), d = r(l, c);
      return {
        ...c,
        ...l,
        ...d,
        ...!!u && {
          className: u
        },
        ...c?.style && l?.style && {
          style: {
            ...c.style,
            ...l.style
          }
        },
        ...c?.sx && l?.sx && {
          sx: [...Array.isArray(c.sx) ? c.sx : [c.sx], ...Array.isArray(l.sx) ? l.sx : [l.sx]]
        }
      };
    };
  const n = t, o = r(e, n), s = ne(n?.className, e?.className);
  return {
    ...t,
    ...e,
    ...o,
    ...!!s && {
      className: s
    },
    ...n?.style && e?.style && {
      style: {
        ...n.style,
        ...e.style
      }
    },
    ...n?.sx && e?.sx && {
      sx: [...Array.isArray(n.sx) ? n.sx : [n.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
const ac = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle"), Mp = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutline"), $p = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z"
}), "Sync"), Bs = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33m-7.14-.94 2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64z"
}), "SyncDisabled");
function Mt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Np(e) {
  return typeof e.main == "string";
}
function Ip(e, t = []) {
  if (!Np(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Rt(e = []) {
  return ([, t]) => t && Ip(t, e);
}
const gr = i.oneOfType([i.func, i.object]);
function Ap(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function jp(e, t, r, n, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof s == "function" && !Ap(s) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const cc = Mt(i.elementType, jp);
function jn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Fs = {};
function lc(e, t) {
  const r = T.useRef(Fs);
  return r.current === Fs && (r.current = e(t)), r;
}
class _n {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new _n();
  }
  static use() {
    const t = lc(_n.create).current, [r, n] = T.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, T.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = Dp(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function _p() {
  return _n.use();
}
function Dp() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function uc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Vo(e, t) {
  return Vo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Vo(e, t);
}
function dc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vo(e, t);
}
const Ls = {
  disabled: !1
};
var Bp = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.shape({
  enter: i.number,
  exit: i.number,
  appear: i.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && i.oneOfType([i.string, i.shape({
  enter: i.string,
  exit: i.string,
  active: i.string
}), i.shape({
  enter: i.string,
  enterDone: i.string,
  enterActive: i.string,
  exit: i.string,
  exitDone: i.string,
  exitActive: i.string
})]);
const Dn = oe.createContext(null);
var Fp = function(t) {
  return t.scrollTop;
}, Mr = "unmounted", Ft = "exited", Lt = "entering", or = "entered", Wo = "exiting", mt = /* @__PURE__ */ function(e) {
  dc(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var a = o, c = a && !a.isMounting ? n.enter : n.appear, l;
    return s.appearStatus = null, n.in ? c ? (l = Ft, s.appearStatus = Lt) : l = or : n.unmountOnExit || n.mountOnEnter ? l = Mr : l = Ft, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var a = o.in;
    return a && s.status === Mr ? {
      status: Ft
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Lt && a !== or && (s = Lt) : (a === Lt || a === or) && (s = Wo);
    }
    this.updateStatus(!1, s);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, s, a, c;
    return s = a = c = o, o != null && typeof o != "number" && (s = o.exit, a = o.enter, c = o.appear !== void 0 ? o.appear : a), {
      exit: s,
      enter: a,
      appear: c
    };
  }, r.updateStatus = function(o, s) {
    if (o === void 0 && (o = !1), s !== null)
      if (this.cancelNextCallback(), s === Lt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : an.findDOMNode(this);
          a && Fp(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Ft && this.setState({
      status: Mr
    });
  }, r.performEnter = function(o) {
    var s = this, a = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [an.findDOMNode(this), c], u = l[0], d = l[1], m = this.getTimeouts(), b = c ? m.appear : m.enter;
    if (!o && !a || Ls.disabled) {
      this.safeSetState({
        status: or
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Lt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(b, function() {
        s.safeSetState({
          status: or
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, s = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : an.findDOMNode(this);
    if (!s || Ls.disabled) {
      this.safeSetState({
        status: Ft
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: Wo
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Ft
        }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, r.setNextCallback = function(o) {
    var s = this, a = !0;
    return this.nextCallback = function(c) {
      a && (a = !1, s.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : an.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], d = l[1];
      this.props.addEndListener(u, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === Mr)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var c = uc(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ oe.createElement(Dn.Provider, {
        value: null
      }, typeof a == "function" ? a(o, c) : oe.cloneElement(oe.Children.only(a), c))
    );
  }, t;
}(oe.Component);
mt.contextType = Dn;
mt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: i.shape({
    current: typeof Element > "u" ? i.any : function(e, t, r, n, o, s) {
      var a = e[t];
      return i.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, s);
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
  children: i.oneOfType([i.func.isRequired, i.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: i.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: i.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: i.bool,
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
  appear: i.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: i.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: i.bool,
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
    var r = Bp;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      o[s - 1] = arguments[s];
    return r.apply(void 0, [t].concat(o));
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
  addEndListener: i.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: i.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: i.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: i.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: i.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: i.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: i.func
} : {};
function rr() {
}
mt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: rr,
  onEntering: rr,
  onEntered: rr,
  onExit: rr,
  onExiting: rr,
  onExited: rr
};
mt.UNMOUNTED = Mr;
mt.EXITED = Ft;
mt.ENTERING = Lt;
mt.ENTERED = or;
mt.EXITING = Wo;
function Lp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wi(e, t) {
  var r = function(s) {
    return t && xn(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ml.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function zp(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (n[s] = o, o = []) : o.push(s);
  var a, c = {};
  for (var l in t) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var u = n[l][a];
        c[n[l][a]] = r(u);
      }
    c[l] = r(l);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function Vt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Vp(e, t) {
  return wi(e.children, function(r) {
    return Sn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Vt(r, "appear", e),
      enter: Vt(r, "enter", e),
      exit: Vt(r, "exit", e)
    });
  });
}
function Wp(e, t, r) {
  var n = wi(e.children), o = zp(t, n);
  return Object.keys(o).forEach(function(s) {
    var a = o[s];
    if (xn(a)) {
      var c = s in t, l = s in n, u = t[s], d = xn(u) && !u.props.in;
      l && (!c || d) ? o[s] = Sn(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Vt(a, "exit", e),
        enter: Vt(a, "enter", e)
      }) : !l && c && !d ? o[s] = Sn(a, {
        in: !1
      }) : l && c && xn(u) && (o[s] = Sn(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Vt(a, "exit", e),
        enter: Vt(a, "enter", e)
      }));
    }
  }), o;
}
var Up = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Hp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ci = /* @__PURE__ */ function(e) {
  dc(t, e);
  function t(n, o) {
    var s;
    s = e.call(this, n, o) || this;
    var a = s.handleExited.bind(Lp(s));
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
  }, t.getDerivedStateFromProps = function(o, s) {
    var a = s.children, c = s.handleExited, l = s.firstRender;
    return {
      children: l ? Vp(o, c) : Wp(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, s) {
    var a = wi(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(c) {
      var l = Mn({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, s = o.component, a = o.childFactory, c = uc(o, ["component", "childFactory"]), l = this.state.contextValue, u = Up(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, s === null ? /* @__PURE__ */ oe.createElement(Dn.Provider, {
      value: l
    }, u) : /* @__PURE__ */ oe.createElement(Dn.Provider, {
      value: l
    }, /* @__PURE__ */ oe.createElement(s, c, u));
  }, t;
}(oe.Component);
Ci.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: i.any,
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
  children: i.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: i.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: i.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: i.bool,
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
  childFactory: i.func
} : {};
Ci.defaultProps = Hp;
const qp = [];
function Yp(e) {
  T.useEffect(e, qp);
}
class co {
  static create() {
    return new co();
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
function ir() {
  const e = lc(co.create).current;
  return Yp(e.disposeEffect), e;
}
function fc(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: u
  } = e, [d, m] = T.useState(!1), b = ne(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + o
  }, y = ne(r.child, d && r.childLeaving, n && r.childPulsate);
  return !c && !d && m(!0), T.useEffect(() => {
    if (!c && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ O.jsx("span", {
    className: b,
    style: g,
    children: /* @__PURE__ */ O.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (fc.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object.isRequired,
  className: i.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: i.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: i.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: i.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: i.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: i.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: i.number,
  /**
   * exit delay
   */
  timeout: i.number.isRequired
});
const Qe = Ee("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Uo = 550, Gp = 80, Kp = hr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Xp = hr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Jp = hr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Zp = re("span", {
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
}), Qp = re(fc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Qe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Kp};
    animation-duration: ${Uo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Qe.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Qe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Qe.childLeaving} {
    opacity: 0;
    animation-name: ${Xp};
    animation-duration: ${Uo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Qe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jp};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, pc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: a,
    ...c
  } = n, [l, u] = T.useState([]), d = T.useRef(0), m = T.useRef(null);
  T.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const b = T.useRef(!1), g = ir(), y = T.useRef(null), f = T.useRef(null), x = T.useCallback((v) => {
    const {
      pulsate: h,
      rippleX: C,
      rippleY: k,
      rippleSize: $,
      cb: M
    } = v;
    u((I) => [...I, /* @__PURE__ */ O.jsx(Qp, {
      classes: {
        ripple: ne(s.ripple, Qe.ripple),
        rippleVisible: ne(s.rippleVisible, Qe.rippleVisible),
        ripplePulsate: ne(s.ripplePulsate, Qe.ripplePulsate),
        child: ne(s.child, Qe.child),
        childLeaving: ne(s.childLeaving, Qe.childLeaving),
        childPulsate: ne(s.childPulsate, Qe.childPulsate)
      },
      timeout: Uo,
      pulsate: h,
      rippleX: C,
      rippleY: k,
      rippleSize: $
    }, d.current)]), d.current += 1, m.current = M;
  }, [s]), w = T.useCallback((v = {}, h = {}, C = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: $ = o || h.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = h;
    if (v?.type === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    v?.type === "touchstart" && (b.current = !0);
    const I = M ? null : f.current, F = I ? I.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let p, j, N;
    if ($ || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      p = Math.round(F.width / 2), j = Math.round(F.height / 2);
    else {
      const {
        clientX: B,
        clientY: A
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      p = Math.round(B - F.left), j = Math.round(A - F.top);
    }
    if ($)
      N = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), N % 2 === 0 && (N += 1);
    else {
      const B = Math.max(Math.abs((I ? I.clientWidth : 0) - p), p) * 2 + 2, A = Math.max(Math.abs((I ? I.clientHeight : 0) - j), j) * 2 + 2;
      N = Math.sqrt(B ** 2 + A ** 2);
    }
    v?.touches ? y.current === null && (y.current = () => {
      x({
        pulsate: k,
        rippleX: p,
        rippleY: j,
        rippleSize: N,
        cb: C
      });
    }, g.start(Gp, () => {
      y.current && (y.current(), y.current = null);
    })) : x({
      pulsate: k,
      rippleX: p,
      rippleY: j,
      rippleSize: N,
      cb: C
    });
  }, [o, x, g]), P = T.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), E = T.useCallback((v, h) => {
    if (g.clear(), v?.type === "touchend" && y.current) {
      y.current(), y.current = null, g.start(0, () => {
        E(v, h);
      });
      return;
    }
    y.current = null, u((C) => C.length > 0 ? C.slice(1) : C), m.current = h;
  }, [g]);
  return T.useImperativeHandle(r, () => ({
    pulsate: P,
    start: w,
    stop: E
  }), [P, w, E]), /* @__PURE__ */ O.jsx(Zp, {
    className: ne(Qe.root, s.root, a),
    ref: f,
    ...c,
    children: /* @__PURE__ */ O.jsx(Ci, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (pc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string
});
function em(e) {
  return Oe("MuiButtonBase", e);
}
const tm = Ee("MuiButtonBase", ["root", "disabled", "focusVisible"]), rm = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = $e({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, em, o);
  return r && n && (a.root += ` ${n}`), a;
}, nm = re("button", {
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
  [`&.${tm.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), tn = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: a,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: m = !1,
    focusRipple: b = !1,
    focusVisibleClassName: g,
    LinkComponent: y = "a",
    onBlur: f,
    onClick: x,
    onContextMenu: w,
    onDragLeave: P,
    onFocus: E,
    onFocusVisible: v,
    onKeyDown: h,
    onKeyUp: C,
    onMouseDown: k,
    onMouseLeave: $,
    onMouseUp: M,
    onTouchEnd: I,
    onTouchMove: F,
    onTouchStart: p,
    tabIndex: j = 0,
    TouchRippleProps: N,
    touchRippleRef: B,
    type: A,
    ...V
  } = n, X = T.useRef(null), H = _p(), S = Ge(H.ref, B), [_, L] = T.useState(!1);
  u && _ && L(!1), T.useImperativeHandle(o, () => ({
    focusVisible: () => {
      L(!0), X.current.focus();
    }
  }), []);
  const W = H.shouldMount && !d && !u;
  T.useEffect(() => {
    _ && b && !d && H.pulsate();
  }, [d, b, _, H]);
  const U = gt(H, "start", k, m), z = gt(H, "stop", w, m), Y = gt(H, "stop", P, m), K = gt(H, "stop", M, m), G = gt(H, "stop", (Q) => {
    _ && Q.preventDefault(), $ && $(Q);
  }, m), Z = gt(H, "start", p, m), q = gt(H, "stop", I, m), J = gt(H, "stop", F, m), R = gt(H, "stop", (Q) => {
    jn(Q.target) || L(!1), f && f(Q);
  }, !1), ie = Ot((Q) => {
    X.current || (X.current = Q.currentTarget), jn(Q.target) && (L(!0), v && v(Q)), E && E(Q);
  }), se = () => {
    const Q = X.current;
    return l && l !== "button" && !(Q.tagName === "A" && Q.href);
  }, xe = Ot((Q) => {
    b && !Q.repeat && _ && Q.key === " " && H.stop(Q, () => {
      H.start(Q);
    }), Q.target === Q.currentTarget && se() && Q.key === " " && Q.preventDefault(), h && h(Q), Q.target === Q.currentTarget && se() && Q.key === "Enter" && !u && (Q.preventDefault(), x && x(Q));
  }), Ze = Ot((Q) => {
    b && Q.key === " " && _ && !Q.defaultPrevented && H.stop(Q, () => {
      H.pulsate(Q);
    }), C && C(Q), x && Q.target === Q.currentTarget && se() && Q.key === " " && !Q.defaultPrevented && x(Q);
  });
  let je = l;
  je === "button" && (V.href || V.to) && (je = y);
  const Ne = {};
  je === "button" ? (Ne.type = A === void 0 ? "button" : A, Ne.disabled = u) : (!V.href && !V.to && (Ne.role = "button"), u && (Ne["aria-disabled"] = u));
  const ve = Ge(r, X), Pe = {
    ...n,
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: b,
    tabIndex: j,
    focusVisible: _
  }, be = rm(Pe);
  return /* @__PURE__ */ O.jsxs(nm, {
    as: je,
    className: ne(be.root, c),
    ownerState: Pe,
    onBlur: R,
    onClick: x,
    onContextMenu: z,
    onFocus: ie,
    onKeyDown: xe,
    onKeyUp: Ze,
    onMouseDown: U,
    onMouseLeave: G,
    onMouseUp: K,
    onDragLeave: Y,
    onTouchEnd: q,
    onTouchMove: J,
    onTouchStart: Z,
    ref: ve,
    tabIndex: u ? -1 : j,
    type: A,
    ...Ne,
    ...V,
    children: [a, W ? /* @__PURE__ */ O.jsx(pc, {
      ref: S,
      center: s,
      ...N
    }) : null]
  });
});
function gt(e, t, r, n = !1) {
  return Ot((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (tn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: gr,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: i.bool,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: cc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: i.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: i.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: i.string,
  /**
   * @ignore
   */
  href: i.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: i.elementType,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onContextMenu: i.func,
  /**
   * @ignore
   */
  onDragLeave: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * @ignore
   */
  onMouseDown: i.func,
  /**
   * @ignore
   */
  onMouseLeave: i.func,
  /**
   * @ignore
   */
  onMouseUp: i.func,
  /**
   * @ignore
   */
  onTouchEnd: i.func,
  /**
   * @ignore
   */
  onTouchMove: i.func,
  /**
   * @ignore
   */
  onTouchStart: i.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @default 0
   */
  tabIndex: i.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: i.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: i.oneOfType([i.func, i.shape({
    current: i.shape({
      pulsate: i.func.isRequired,
      start: i.func.isRequired,
      stop: i.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: i.oneOfType([i.oneOf(["button", "reset", "submit"]), i.string])
});
function om(e) {
  return Oe("MuiCircularProgress", e);
}
Ee("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const wt = 44, Ho = hr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, qo = hr`
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
`, im = typeof Ho != "string" ? ui`
        animation: ${Ho} 1.4s linear infinite;
      ` : null, sm = typeof qo != "string" ? ui`
        animation: ${qo} 1.4s ease-in-out infinite;
      ` : null, am = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, s = {
    root: ["root", r, `color${ee(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ee(r)}`, o && "circleDisableShrink"]
  };
  return $e(s, om, t);
}, cm = re("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ee(r.color)}`]];
  }
})(Fe(({
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
    style: im || {
      animation: `${Ho} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Rt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), lm = re("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), um = re("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ee(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(Fe(({
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
    style: sm || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${qo} 1.4s ease-in-out infinite`
    }
  }]
}))), Oi = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: s = "primary",
    disableShrink: a = !1,
    size: c = 40,
    style: l,
    thickness: u = 3.6,
    value: d = 0,
    variant: m = "indeterminate",
    ...b
  } = n, g = {
    ...n,
    color: s,
    disableShrink: a,
    size: c,
    thickness: u,
    value: d,
    variant: m
  }, y = am(g), f = {}, x = {}, w = {};
  if (m === "determinate") {
    const P = 2 * Math.PI * ((wt - u) / 2);
    f.strokeDasharray = P.toFixed(3), w["aria-valuenow"] = Math.round(d), f.strokeDashoffset = `${((100 - d) / 100 * P).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ O.jsx(cm, {
    className: ne(y.root, o),
    style: {
      width: c,
      height: c,
      ...x,
      ...l
    },
    ownerState: g,
    ref: r,
    role: "progressbar",
    ...w,
    ...b,
    children: /* @__PURE__ */ O.jsx(lm, {
      className: y.svg,
      ownerState: g,
      viewBox: `${wt / 2} ${wt / 2} ${wt} ${wt}`,
      children: /* @__PURE__ */ O.jsx(um, {
        className: y.circle,
        style: f,
        ownerState: g,
        cx: wt,
        cy: wt,
        r: (wt - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Oi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Mt(i.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: i.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: i.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: i.oneOf(["determinate", "indeterminate"])
});
function dm(e) {
  return Oe("MuiIconButton", e);
}
const zs = Ee("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), fm = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: s,
    loading: a
  } = e, c = {
    root: ["root", a && "loading", r && "disabled", n !== "default" && `color${ee(n)}`, o && `edge${ee(o)}`, `size${ee(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return $e(c, dm, t);
}, pm = re(tn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${ee(r.color)}`], r.edge && t[`edge${ee(r.edge)}`], t[`size${ee(r.size)}`]];
  }
})(Fe(({
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
})), Fe(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Rt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Rt()).map(([t]) => ({
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
  [`&.${zs.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${zs.loading}`]: {
    color: "transparent"
  }
}))), mm = re("span", {
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
})), mc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: s,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: d = "medium",
    id: m,
    loading: b = null,
    loadingIndicator: g,
    ...y
  } = n, f = ao(m), x = g ?? /* @__PURE__ */ O.jsx(Oi, {
    "aria-labelledby": f,
    color: "inherit",
    size: 16
  }), w = {
    ...n,
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    loading: b,
    loadingIndicator: x,
    size: d
  }, P = fm(w);
  return /* @__PURE__ */ O.jsxs(pm, {
    id: b ? f : m,
    className: ne(P.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l || b,
    ref: r,
    ...y,
    ownerState: w,
    children: [typeof b == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ O.jsx("span", {
      className: P.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ O.jsx(mm, {
        className: P.loadingIndicator,
        ownerState: w,
        children: b && x
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (mc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Mt(i.node, (e) => T.Children.toArray(e.children).some((r) => /* @__PURE__ */ T.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: i.oneOfType([i.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: i.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: i.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: i.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: i.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium", "large"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function hm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function hc(e, t, r, n, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = s.type;
  return typeof l == "function" && !hm(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const yr = Mt(i.element, hc);
yr.isRequired = Mt(i.element.isRequired, hc);
function rn(e) {
  return parseInt(T.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
const gc = (e) => e.scrollTop;
function Bn(e, t) {
  const {
    timeout: r,
    easing: n,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: o.transitionDelay
  };
}
function Yo(e) {
  return `scale(${e}, ${e ** 2})`;
}
const gm = {
  entering: {
    opacity: 1,
    transform: Yo(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Po = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Hr = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: s,
    easing: a,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: d,
    onExit: m,
    onExited: b,
    onExiting: g,
    style: y,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = mt,
    ...w
  } = t, P = ir(), E = T.useRef(), v = en(), h = T.useRef(null), C = Ge(h, rn(s), r), k = (B) => (A) => {
    if (B) {
      const V = h.current;
      A === void 0 ? B(V) : B(V, A);
    }
  }, $ = k(d), M = k((B, A) => {
    gc(B);
    const {
      duration: V,
      delay: X,
      easing: H
    } = Bn({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let S;
    f === "auto" ? (S = v.transitions.getAutoHeightDuration(B.clientHeight), E.current = S) : S = V, B.style.transition = [v.transitions.create("opacity", {
      duration: S,
      delay: X
    }), v.transitions.create("transform", {
      duration: Po ? S : S * 0.666,
      delay: X,
      easing: H
    })].join(","), l && l(B, A);
  }), I = k(u), F = k(g), p = k((B) => {
    const {
      duration: A,
      delay: V,
      easing: X
    } = Bn({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let H;
    f === "auto" ? (H = v.transitions.getAutoHeightDuration(B.clientHeight), E.current = H) : H = A, B.style.transition = [v.transitions.create("opacity", {
      duration: H,
      delay: V
    }), v.transitions.create("transform", {
      duration: Po ? H : H * 0.666,
      delay: Po ? V : V || H * 0.333,
      easing: X
    })].join(","), B.style.opacity = 0, B.style.transform = Yo(0.75), m && m(B);
  }), j = k(b), N = (B) => {
    f === "auto" && P.start(E.current || 0, B), n && n(h.current, B);
  };
  return /* @__PURE__ */ O.jsx(x, {
    appear: o,
    in: c,
    nodeRef: h,
    onEnter: M,
    onEntered: I,
    onEntering: $,
    onExit: p,
    onExited: j,
    onExiting: F,
    addEndListener: N,
    timeout: f === "auto" ? null : f,
    ...w,
    children: (B, {
      ownerState: A,
      ...V
    }) => /* @__PURE__ */ T.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Yo(0.75),
        visibility: B === "exited" && !c ? "hidden" : void 0,
        ...gm[B],
        ...y,
        ...s.props.style
      },
      ref: C,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (Hr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: yr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
Hr && (Hr.muiSupportAuto = !0);
function xt(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
var He = "top", nt = "bottom", ot = "right", qe = "left", Pi = "auto", nn = [He, nt, ot, qe], ur = "start", qr = "end", ym = "clippingParents", yc = "viewport", wr = "popper", bm = "reference", Vs = /* @__PURE__ */ nn.reduce(function(e, t) {
  return e.concat([t + "-" + ur, t + "-" + qr]);
}, []), bc = /* @__PURE__ */ [].concat(nn, [Pi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ur, t + "-" + qr]);
}, []), vm = "beforeRead", xm = "read", Sm = "afterRead", Em = "beforeMain", Tm = "main", wm = "afterMain", Cm = "beforeWrite", Om = "write", Pm = "afterWrite", Rm = [vm, xm, Sm, Em, Tm, wm, Cm, Om, Pm];
function pt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Je(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yt(e) {
  var t = Je(e).Element;
  return e instanceof t || e instanceof Element;
}
function tt(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ri(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function km(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, s = t.elements[r];
    !tt(s) || !pt(s) || (Object.assign(s.style, n), Object.keys(o).forEach(function(a) {
      var c = o[a];
      c === !1 ? s.removeAttribute(a) : s.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Mm(e) {
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
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), c = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !tt(o) || !pt(o) || (Object.assign(o.style, c), Object.keys(s).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const $m = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: km,
  effect: Mm,
  requires: ["computeStyles"]
};
function ft(e) {
  return e.split("-")[0];
}
var Wt = Math.max, Fn = Math.min, dr = Math.round;
function Go() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vc() {
  return !/^((?!chrome|android).)*safari/i.test(Go());
}
function fr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, s = 1;
  t && tt(e) && (o = e.offsetWidth > 0 && dr(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && dr(n.height) / e.offsetHeight || 1);
  var a = Yt(e) ? Je(e) : window, c = a.visualViewport, l = !vc() && r, u = (n.left + (l && c ? c.offsetLeft : 0)) / o, d = (n.top + (l && c ? c.offsetTop : 0)) / s, m = n.width / o, b = n.height / s;
  return {
    width: m,
    height: b,
    top: d,
    right: u + m,
    bottom: d + b,
    left: u,
    x: u,
    y: d
  };
}
function ki(e) {
  var t = fr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function xc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Ri(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function St(e) {
  return Je(e).getComputedStyle(e);
}
function Nm(e) {
  return ["table", "td", "th"].indexOf(pt(e)) >= 0;
}
function $t(e) {
  return ((Yt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function lo(e) {
  return pt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ri(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $t(e)
  );
}
function Ws(e) {
  return !tt(e) || // https://github.com/popperjs/popper-core/issues/837
  St(e).position === "fixed" ? null : e.offsetParent;
}
function Im(e) {
  var t = /firefox/i.test(Go()), r = /Trident/i.test(Go());
  if (r && tt(e)) {
    var n = St(e);
    if (n.position === "fixed")
      return null;
  }
  var o = lo(e);
  for (Ri(o) && (o = o.host); tt(o) && ["html", "body"].indexOf(pt(o)) < 0; ) {
    var s = St(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function on(e) {
  for (var t = Je(e), r = Ws(e); r && Nm(r) && St(r).position === "static"; )
    r = Ws(r);
  return r && (pt(r) === "html" || pt(r) === "body" && St(r).position === "static") ? t : r || Im(e) || t;
}
function Mi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function jr(e, t, r) {
  return Wt(e, Fn(t, r));
}
function Am(e, t, r) {
  var n = jr(e, t, r);
  return n > r ? r : n;
}
function Sc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ec(e) {
  return Object.assign({}, Sc(), e);
}
function Tc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var jm = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ec(typeof t != "number" ? t : Tc(t, nn));
};
function _m(e) {
  var t, r = e.state, n = e.name, o = e.options, s = r.elements.arrow, a = r.modifiersData.popperOffsets, c = ft(r.placement), l = Mi(c), u = [qe, ot].indexOf(c) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = jm(o.padding, r), b = ki(s), g = l === "y" ? He : qe, y = l === "y" ? nt : ot, f = r.rects.reference[d] + r.rects.reference[l] - a[l] - r.rects.popper[d], x = a[l] - r.rects.reference[l], w = on(s), P = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, E = f / 2 - x / 2, v = m[g], h = P - b[d] - m[y], C = P / 2 - b[d] / 2 + E, k = jr(v, C, h), $ = l;
    r.modifiersData[n] = (t = {}, t[$] = k, t.centerOffset = k - C, t);
  }
}
function Dm(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || xc(t.elements.popper, o) && (t.elements.arrow = o));
}
const Bm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: _m,
  effect: Dm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function pr(e) {
  return e.split("-")[1];
}
var Fm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Lm(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: dr(r * o) / o || 0,
    y: dr(n * o) / o || 0
  };
}
function Us(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, b = a.x, g = b === void 0 ? 0 : b, y = a.y, f = y === void 0 ? 0 : y, x = typeof d == "function" ? d({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = x.x, f = x.y;
  var w = a.hasOwnProperty("x"), P = a.hasOwnProperty("y"), E = qe, v = He, h = window;
  if (u) {
    var C = on(r), k = "clientHeight", $ = "clientWidth";
    if (C === Je(r) && (C = $t(r), St(C).position !== "static" && c === "absolute" && (k = "scrollHeight", $ = "scrollWidth")), C = C, o === He || (o === qe || o === ot) && s === qr) {
      v = nt;
      var M = m && C === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[k]
      );
      f -= M - n.height, f *= l ? 1 : -1;
    }
    if (o === qe || (o === He || o === nt) && s === qr) {
      E = ot;
      var I = m && C === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[$]
      );
      g -= I - n.width, g *= l ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: c
  }, u && Fm), p = d === !0 ? Lm({
    x: g,
    y: f
  }, Je(r)) : {
    x: g,
    y: f
  };
  if (g = p.x, f = p.y, l) {
    var j;
    return Object.assign({}, F, (j = {}, j[v] = P ? "0" : "", j[E] = w ? "0" : "", j.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", j));
  }
  return Object.assign({}, F, (t = {}, t[v] = P ? f + "px" : "", t[E] = w ? g + "px" : "", t.transform = "", t));
}
function zm(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, c = r.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: ft(t.placement),
    variation: pr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Us(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Us(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Vm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zm,
  data: {}
};
var hn = {
  passive: !0
};
function Wm(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, s = o === void 0 ? !0 : o, a = n.resize, c = a === void 0 ? !0 : a, l = Je(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, hn);
  }), c && l.addEventListener("resize", r.update, hn), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, hn);
    }), c && l.removeEventListener("resize", r.update, hn);
  };
}
const Um = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Wm,
  data: {}
};
var Hm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function On(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Hm[t];
  });
}
var qm = {
  start: "end",
  end: "start"
};
function Hs(e) {
  return e.replace(/start|end/g, function(t) {
    return qm[t];
  });
}
function $i(e) {
  var t = Je(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Ni(e) {
  return fr($t(e)).left + $i(e).scrollLeft;
}
function Ym(e, t) {
  var r = Je(e), n = $t(e), o = r.visualViewport, s = n.clientWidth, a = n.clientHeight, c = 0, l = 0;
  if (o) {
    s = o.width, a = o.height;
    var u = vc();
    (u || !u && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: c + Ni(e),
    y: l
  };
}
function Gm(e) {
  var t, r = $t(e), n = $i(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Wt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Wt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -n.scrollLeft + Ni(e), l = -n.scrollTop;
  return St(o || r).direction === "rtl" && (c += Wt(r.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Ii(e) {
  var t = St(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function wc(e) {
  return ["html", "body", "#document"].indexOf(pt(e)) >= 0 ? e.ownerDocument.body : tt(e) && Ii(e) ? e : wc(lo(e));
}
function _r(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = wc(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Je(n), a = o ? [s].concat(s.visualViewport || [], Ii(n) ? n : []) : n, c = t.concat(a);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(_r(lo(a)))
  );
}
function Ko(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Km(e, t) {
  var r = fr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function qs(e, t, r) {
  return t === yc ? Ko(Ym(e, r)) : Yt(t) ? Km(t, r) : Ko(Gm($t(e)));
}
function Xm(e) {
  var t = _r(lo(e)), r = ["absolute", "fixed"].indexOf(St(e).position) >= 0, n = r && tt(e) ? on(e) : e;
  return Yt(n) ? t.filter(function(o) {
    return Yt(o) && xc(o, n) && pt(o) !== "body";
  }) : [];
}
function Jm(e, t, r, n) {
  var o = t === "clippingParents" ? Xm(e) : [].concat(t), s = [].concat(o, [r]), a = s[0], c = s.reduce(function(l, u) {
    var d = qs(e, u, n);
    return l.top = Wt(d.top, l.top), l.right = Fn(d.right, l.right), l.bottom = Fn(d.bottom, l.bottom), l.left = Wt(d.left, l.left), l;
  }, qs(e, a, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Cc(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? ft(n) : null, s = n ? pr(n) : null, a = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case He:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case nt:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ot:
      l = {
        x: t.x + t.width,
        y: c
      };
      break;
    case qe:
      l = {
        x: t.x - r.width,
        y: c
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? Mi(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case ur:
        l[u] = l[u] - (t[d] / 2 - r[d] / 2);
        break;
      case qr:
        l[u] = l[u] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return l;
}
function Yr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, c = r.boundary, l = c === void 0 ? ym : c, u = r.rootBoundary, d = u === void 0 ? yc : u, m = r.elementContext, b = m === void 0 ? wr : m, g = r.altBoundary, y = g === void 0 ? !1 : g, f = r.padding, x = f === void 0 ? 0 : f, w = Ec(typeof x != "number" ? x : Tc(x, nn)), P = b === wr ? bm : wr, E = e.rects.popper, v = e.elements[y ? P : b], h = Jm(Yt(v) ? v : v.contextElement || $t(e.elements.popper), l, d, a), C = fr(e.elements.reference), k = Cc({
    reference: C,
    element: E,
    placement: o
  }), $ = Ko(Object.assign({}, E, k)), M = b === wr ? $ : C, I = {
    top: h.top - M.top + w.top,
    bottom: M.bottom - h.bottom + w.bottom,
    left: h.left - M.left + w.left,
    right: M.right - h.right + w.right
  }, F = e.modifiersData.offset;
  if (b === wr && F) {
    var p = F[o];
    Object.keys(I).forEach(function(j) {
      var N = [ot, nt].indexOf(j) >= 0 ? 1 : -1, B = [He, nt].indexOf(j) >= 0 ? "y" : "x";
      I[j] += p[B] * N;
    });
  }
  return I;
}
function Zm(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, s = r.rootBoundary, a = r.padding, c = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? bc : l, d = pr(n), m = d ? c ? Vs : Vs.filter(function(y) {
    return pr(y) === d;
  }) : nn, b = m.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  b.length === 0 && (b = m);
  var g = b.reduce(function(y, f) {
    return y[f] = Yr(e, {
      placement: f,
      boundary: o,
      rootBoundary: s,
      padding: a
    })[ft(f)], y;
  }, {});
  return Object.keys(g).sort(function(y, f) {
    return g[y] - g[f];
  });
}
function Qm(e) {
  if (ft(e) === Pi)
    return [];
  var t = On(e);
  return [Hs(e), t, Hs(t)];
}
function eh(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, s = o === void 0 ? !0 : o, a = r.altAxis, c = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, d = r.boundary, m = r.rootBoundary, b = r.altBoundary, g = r.flipVariations, y = g === void 0 ? !0 : g, f = r.allowedAutoPlacements, x = t.options.placement, w = ft(x), P = w === x, E = l || (P || !y ? [On(x)] : Qm(x)), v = [x].concat(E).reduce(function(U, z) {
      return U.concat(ft(z) === Pi ? Zm(t, {
        placement: z,
        boundary: d,
        rootBoundary: m,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: f
      }) : z);
    }, []), h = t.rects.reference, C = t.rects.popper, k = /* @__PURE__ */ new Map(), $ = !0, M = v[0], I = 0; I < v.length; I++) {
      var F = v[I], p = ft(F), j = pr(F) === ur, N = [He, nt].indexOf(p) >= 0, B = N ? "width" : "height", A = Yr(t, {
        placement: F,
        boundary: d,
        rootBoundary: m,
        altBoundary: b,
        padding: u
      }), V = N ? j ? ot : qe : j ? nt : He;
      h[B] > C[B] && (V = On(V));
      var X = On(V), H = [];
      if (s && H.push(A[p] <= 0), c && H.push(A[V] <= 0, A[X] <= 0), H.every(function(U) {
        return U;
      })) {
        M = F, $ = !1;
        break;
      }
      k.set(F, H);
    }
    if ($)
      for (var S = y ? 3 : 1, _ = function(z) {
        var Y = v.find(function(K) {
          var G = k.get(K);
          if (G)
            return G.slice(0, z).every(function(Z) {
              return Z;
            });
        });
        if (Y)
          return M = Y, "break";
      }, L = S; L > 0; L--) {
        var W = _(L);
        if (W === "break") break;
      }
    t.placement !== M && (t.modifiersData[n]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const th = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: eh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ys(e, t, r) {
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
function Gs(e) {
  return [He, ot, nt, qe].some(function(t) {
    return e[t] >= 0;
  });
}
function rh(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = Yr(t, {
    elementContext: "reference"
  }), c = Yr(t, {
    altBoundary: !0
  }), l = Ys(a, n), u = Ys(c, o, s), d = Gs(l), m = Gs(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const nh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: rh
};
function oh(e, t, r) {
  var n = ft(e), o = [qe, He].indexOf(n) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = s[0], c = s[1];
  return a = a || 0, c = (c || 0) * o, [qe, ot].indexOf(n) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function ih(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, s = o === void 0 ? [0, 0] : o, a = bc.reduce(function(d, m) {
    return d[m] = oh(m, t.rects, s), d;
  }, {}), c = a[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const sh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ih
};
function ah(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Cc({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const ch = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ah,
  data: {}
};
function lh(e) {
  return e === "x" ? "y" : "x";
}
function uh(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, s = o === void 0 ? !0 : o, a = r.altAxis, c = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, d = r.altBoundary, m = r.padding, b = r.tether, g = b === void 0 ? !0 : b, y = r.tetherOffset, f = y === void 0 ? 0 : y, x = Yr(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: d
  }), w = ft(t.placement), P = pr(t.placement), E = !P, v = Mi(w), h = lh(v), C = t.modifiersData.popperOffsets, k = t.rects.reference, $ = t.rects.popper, M = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, I = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, p = {
    x: 0,
    y: 0
  };
  if (C) {
    if (s) {
      var j, N = v === "y" ? He : qe, B = v === "y" ? nt : ot, A = v === "y" ? "height" : "width", V = C[v], X = V + x[N], H = V - x[B], S = g ? -$[A] / 2 : 0, _ = P === ur ? k[A] : $[A], L = P === ur ? -$[A] : -k[A], W = t.elements.arrow, U = g && W ? ki(W) : {
        width: 0,
        height: 0
      }, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Sc(), Y = z[N], K = z[B], G = jr(0, k[A], U[A]), Z = E ? k[A] / 2 - S - G - Y - I.mainAxis : _ - G - Y - I.mainAxis, q = E ? -k[A] / 2 + S + G + K + I.mainAxis : L + G + K + I.mainAxis, J = t.elements.arrow && on(t.elements.arrow), R = J ? v === "y" ? J.clientTop || 0 : J.clientLeft || 0 : 0, ie = (j = F?.[v]) != null ? j : 0, se = V + Z - ie - R, xe = V + q - ie, Ze = jr(g ? Fn(X, se) : X, V, g ? Wt(H, xe) : H);
      C[v] = Ze, p[v] = Ze - V;
    }
    if (c) {
      var je, Ne = v === "x" ? He : qe, ve = v === "x" ? nt : ot, Pe = C[h], be = h === "y" ? "height" : "width", Q = Pe + x[Ne], Nt = Pe - x[ve], Et = [He, qe].indexOf(w) !== -1, It = (je = F?.[h]) != null ? je : 0, Ie = Et ? Q : Pe - k[be] - $[be] - It + I.altAxis, he = Et ? Pe + k[be] + $[be] - It - I.altAxis : Nt, De = g && Et ? Am(Ie, Pe, he) : jr(g ? Ie : Q, Pe, g ? he : Nt);
      C[h] = De, p[h] = De - Pe;
    }
    t.modifiersData[n] = p;
  }
}
const dh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: uh,
  requiresIfExists: ["offset"]
};
function fh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ph(e) {
  return e === Je(e) || !tt(e) ? $i(e) : fh(e);
}
function mh(e) {
  var t = e.getBoundingClientRect(), r = dr(t.width) / e.offsetWidth || 1, n = dr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function hh(e, t, r) {
  r === void 0 && (r = !1);
  var n = tt(t), o = tt(t) && mh(t), s = $t(t), a = fr(e, o, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((pt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(s)) && (c = ph(t)), tt(t) ? (l = fr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Ni(s))), {
    x: a.left + c.scrollLeft - l.x,
    y: a.top + c.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function gh(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(c) {
      if (!r.has(c)) {
        var l = t.get(c);
        l && o(l);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || o(s);
  }), n;
}
function yh(e) {
  var t = gh(e);
  return Rm.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function bh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function vh(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Ks = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Xs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function xh(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, s = o === void 0 ? Ks : o;
  return function(c, l, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ks, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], b = !1, g = {
      state: d,
      setOptions: function(w) {
        var P = typeof w == "function" ? w(d.options) : w;
        f(), d.options = Object.assign({}, s, d.options, P), d.scrollParents = {
          reference: Yt(c) ? _r(c) : c.contextElement ? _r(c.contextElement) : [],
          popper: _r(l)
        };
        var E = yh(vh([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = E.filter(function(v) {
          return v.enabled;
        }), y(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!b) {
          var w = d.elements, P = w.reference, E = w.popper;
          if (Xs(P, E)) {
            d.rects = {
              reference: hh(P, on(E), d.options.strategy === "fixed"),
              popper: ki(E)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(I) {
              return d.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var v = 0; v < d.orderedModifiers.length; v++) {
              if (d.reset === !0) {
                d.reset = !1, v = -1;
                continue;
              }
              var h = d.orderedModifiers[v], C = h.fn, k = h.options, $ = k === void 0 ? {} : k, M = h.name;
              typeof C == "function" && (d = C({
                state: d,
                options: $,
                name: M,
                instance: g
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: bh(function() {
        return new Promise(function(x) {
          g.forceUpdate(), x(d);
        });
      }),
      destroy: function() {
        f(), b = !0;
      }
    };
    if (!Xs(c, l))
      return g;
    g.setOptions(u).then(function(x) {
      !b && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function y() {
      d.orderedModifiers.forEach(function(x) {
        var w = x.name, P = x.options, E = P === void 0 ? {} : P, v = x.effect;
        if (typeof v == "function") {
          var h = v({
            state: d,
            name: w,
            instance: g,
            options: E
          }), C = function() {
          };
          m.push(h || C);
        }
      });
    }
    function f() {
      m.forEach(function(x) {
        return x();
      }), m = [];
    }
    return g;
  };
}
var Sh = [Um, ch, Vm, $m, sh, th, dh, Bm, nh], Eh = /* @__PURE__ */ xh({
  defaultModifiers: Sh
});
function Th(e) {
  return typeof e == "string";
}
function Oc(e, t, r) {
  return e === void 0 || Th(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Pc(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Js(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Rc(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const g = ne(r?.className, s, o?.className, n?.className), y = {
      ...r?.style,
      ...o?.style,
      ...n?.style
    }, f = {
      ...r,
      ...o,
      ...n
    };
    return g.length > 0 && (f.className = g), Object.keys(y).length > 0 && (f.style = y), {
      props: f,
      internalRef: void 0
    };
  }
  const a = Pc({
    ...o,
    ...n
  }), c = Js(n), l = Js(o), u = t(a), d = ne(u?.className, r?.className, s, o?.className, n?.className), m = {
    ...u?.style,
    ...r?.style,
    ...o?.style,
    ...n?.style
  }, b = {
    ...u,
    ...r,
    ...l,
    ...c
  };
  return d.length > 0 && (b.className = d), Object.keys(m).length > 0 && (b.style = m), {
    props: b,
    internalRef: u.ref
  };
}
function kc(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Mc(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...s
  } = e, a = o ? {} : kc(r, n), {
    props: c,
    internalRef: l
  } = Rc({
    ...s,
    externalSlotProps: a
  }), u = Ge(l, a?.ref, e.additionalProps?.ref);
  return Oc(t, {
    ...c,
    ref: u
  }, n);
}
function wh(e) {
  return typeof e == "function" ? e() : e;
}
const Gr = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: s = !1
  } = t, [a, c] = T.useState(null), l = Ge(/* @__PURE__ */ T.isValidElement(n) ? rn(n) : null, r);
  if (vt(() => {
    s || c(wh(o) || document.body);
  }, [o, s]), vt(() => {
    if (a && !s)
      return Ds(r, a), () => {
        Ds(r, null);
      };
  }, [r, a, s]), s) {
    if (/* @__PURE__ */ T.isValidElement(n)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ T.cloneElement(n, u);
    }
    return n;
  }
  return a && /* @__PURE__ */ Al.createPortal(n, a);
});
process.env.NODE_ENV !== "production" && (Gr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: i.node,
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
  container: i.oneOfType([xt, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool
});
process.env.NODE_ENV !== "production" && (Gr.propTypes = so(Gr.propTypes));
function Ch(e) {
  return Oe("MuiPopper", e);
}
Ee("MuiPopper", ["root"]);
function Oh(e, t) {
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
function Ln(e) {
  return typeof e == "function" ? e() : e;
}
function uo(e) {
  return e.nodeType !== void 0;
}
function Ph(e) {
  return !uo(e);
}
const Rh = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"]
  }, Ch, t);
}, kh = {}, Mh = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    direction: s,
    disablePortal: a,
    modifiers: c,
    open: l,
    placement: u,
    popperOptions: d,
    popperRef: m,
    slotProps: b = {},
    slots: g = {},
    TransitionProps: y,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, w = T.useRef(null), P = Ge(w, r), E = T.useRef(null), v = Ge(E, m), h = T.useRef(v);
  vt(() => {
    h.current = v;
  }, [v]), T.useImperativeHandle(m, () => E.current, []);
  const C = Oh(u, s), [k, $] = T.useState(C), [M, I] = T.useState(Ln(n));
  T.useEffect(() => {
    E.current && E.current.forceUpdate();
  }), T.useEffect(() => {
    n && I(Ln(n));
  }, [n]), vt(() => {
    if (!M || !l)
      return;
    const B = (X) => {
      $(X.placement);
    };
    if (process.env.NODE_ENV !== "production" && M && uo(M) && M.nodeType === 1) {
      const X = M.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && X.top === 0 && X.left === 0 && X.right === 0 && X.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let A = [{
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
        B(X);
      }
    }];
    c != null && (A = A.concat(c)), d && d.modifiers != null && (A = A.concat(d.modifiers));
    const V = Eh(M, w.current, {
      placement: C,
      ...d,
      modifiers: A
    });
    return h.current(V), () => {
      V.destroy(), h.current(null);
    };
  }, [M, a, c, l, d, C]);
  const F = {
    placement: k
  };
  y !== null && (F.TransitionProps = y);
  const p = Rh(t), j = g.root ?? "div", N = Mc({
    elementType: j,
    externalSlotProps: b.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: P
    },
    ownerState: t,
    className: p.root
  });
  return /* @__PURE__ */ O.jsx(j, {
    ...N,
    children: typeof o == "function" ? o(F) : o
  });
}), $c = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: s,
    direction: a = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: d,
    placement: m = "bottom",
    popperOptions: b = kh,
    popperRef: g,
    style: y,
    transition: f = !1,
    slotProps: x = {},
    slots: w = {},
    ...P
  } = t, [E, v] = T.useState(!0), h = () => {
    v(!1);
  }, C = () => {
    v(!0);
  };
  if (!l && !d && (!f || E))
    return null;
  let k;
  if (s)
    k = s;
  else if (n) {
    const I = Ln(n);
    k = I && uo(I) ? rt(I).body : rt(null).body;
  }
  const $ = !d && l && (!f || E) ? "none" : void 0, M = f ? {
    in: d,
    onEnter: h,
    onExited: C
  } : void 0;
  return /* @__PURE__ */ O.jsx(Gr, {
    disablePortal: c,
    container: k,
    children: /* @__PURE__ */ O.jsx(Mh, {
      anchorEl: n,
      direction: a,
      disablePortal: c,
      modifiers: u,
      ref: r,
      open: f ? !E : d,
      placement: m,
      popperOptions: b,
      popperRef: g,
      slotProps: x,
      slots: w,
      ...P,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: $,
        ...y
      },
      TransitionProps: M,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && ($c.propTypes = {
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
  anchorEl: Mt(i.oneOfType([xt, i.object, i.func]), (e) => {
    if (e.open) {
      const t = Ln(e.anchorEl);
      if (t && uo(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Ph(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: i.oneOfType([i.node, i.func]),
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
  container: i.oneOfType([xt, i.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: i.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: i.arrayOf(i.shape({
    data: i.object,
    effect: i.func,
    enabled: i.bool,
    fn: i.func,
    name: i.any,
    options: i.object,
    phase: i.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: i.arrayOf(i.string),
    requiresIfExists: i.arrayOf(i.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: i.shape({
    modifiers: i.array,
    onFirstUpdate: i.func,
    placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: i.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: gr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: i.bool
});
const $h = re($c, {
  name: "MuiPopper",
  slot: "Root"
})({}), Ai = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = bi(), o = ke({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: a,
    components: c,
    componentsProps: l,
    container: u,
    disablePortal: d,
    keepMounted: m,
    modifiers: b,
    open: g,
    placement: y,
    popperOptions: f,
    popperRef: x,
    transition: w,
    slots: P,
    slotProps: E,
    ...v
  } = o, h = P?.root ?? c?.Root, C = {
    anchorEl: s,
    container: u,
    disablePortal: d,
    keepMounted: m,
    modifiers: b,
    open: g,
    placement: y,
    popperOptions: f,
    popperRef: x,
    transition: w,
    ...v
  };
  return /* @__PURE__ */ O.jsx($h, {
    as: a,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: h
    },
    slotProps: E ?? l,
    ...C,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (Ai.propTypes = {
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
  anchorEl: i.oneOfType([xt, i.object, i.func]),
  /**
   * Popper render function or node.
   */
  children: i.oneOfType([i.node, i.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: i.shape({
    root: i.oneOfType([i.func, i.object])
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
  container: i.oneOfType([xt, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: i.arrayOf(i.shape({
    data: i.object,
    effect: i.func,
    enabled: i.bool,
    fn: i.func,
    name: i.any,
    options: i.object,
    phase: i.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: i.arrayOf(i.string),
    requiresIfExists: i.arrayOf(i.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: i.shape({
    modifiers: i.array,
    onFirstUpdate: i.func,
    placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: i.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: gr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: i.bool
});
function Ae(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: s,
    internalForwardedProps: a,
    shouldForwardComponentProp: c = !1,
    ...l
  } = t, {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...b
  } = s, g = d[e] || n, y = kc(m[e], o), {
    props: {
      component: f,
      ...x
    },
    internalRef: w
  } = Rc({
    className: r,
    ...l,
    externalForwardedProps: e === "root" ? b : void 0,
    externalSlotProps: y
  }), P = Ge(w, y?.ref, t.ref), E = e === "root" ? f || u : f, v = Oc(g, {
    ...e === "root" && !u && !d[e] && a,
    ...e !== "root" && !d[e] && a,
    ...x,
    ...E && !c && {
      as: E
    },
    ...E && c && {
      component: E
    },
    ref: P
  }, o);
  return [g, v];
}
function Nh(e) {
  return Oe("MuiTooltip", e);
}
const Ce = Ee("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Ih(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ah = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: o,
    placement: s
  } = e, a = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", o && "touch", `tooltipPlacement${ee(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return $e(a, Nh, t);
}, jh = re(Ai, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose];
  }
})(Fe(({
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
      [`&[data-popper-placement*="bottom"] .${Ce.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Ce.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Ce.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Ce.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${Ce.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ce.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ce.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ce.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), _h = re("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${ee(r.placement.split("-")[0])}`]];
  }
})(Fe(({
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
  [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Ce.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Ce.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${Ih(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ce.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ce.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Dh = re("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(Fe(({
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
let gn = !1;
const Zs = new co();
let Cr = {
  x: 0,
  y: 0
};
function yn(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const Nc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: s,
    classes: a,
    components: c = {},
    componentsProps: l = {},
    describeChild: u = !1,
    disableFocusListener: d = !1,
    disableHoverListener: m = !1,
    disableInteractive: b = !1,
    disableTouchListener: g = !1,
    enterDelay: y = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: x = 700,
    followCursor: w = !1,
    id: P,
    leaveDelay: E = 0,
    leaveTouchDelay: v = 1500,
    onClose: h,
    onOpen: C,
    open: k,
    placement: $ = "bottom",
    PopperComponent: M,
    PopperProps: I = {},
    slotProps: F = {},
    slots: p = {},
    title: j,
    TransitionComponent: N,
    TransitionProps: B,
    ...A
  } = n, V = /* @__PURE__ */ T.isValidElement(s) ? s : /* @__PURE__ */ O.jsx("span", {
    children: s
  }), X = en(), H = bi(), [S, _] = T.useState(), [L, W] = T.useState(null), U = T.useRef(!1), z = b || w, Y = ir(), K = ir(), G = ir(), Z = ir(), [q, J] = sc({
    controlled: k,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let R = q;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: te
    } = T.useRef(k !== void 0);
    T.useEffect(() => {
      S && S.disabled && !te && j !== "" && S.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [j, S, te]);
  }
  const ie = ao(P), se = T.useRef(), xe = Ot(() => {
    se.current !== void 0 && (document.body.style.WebkitUserSelect = se.current, se.current = void 0), Z.clear();
  });
  T.useEffect(() => xe, [xe]);
  const Ze = (te) => {
    Zs.clear(), gn = !0, J(!0), C && !R && C(te);
  }, je = Ot(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (te) => {
      Zs.start(800 + E, () => {
        gn = !1;
      }), J(!1), h && R && h(te), Y.start(X.transitions.duration.shortest, () => {
        U.current = !1;
      });
    }
  ), Ne = (te) => {
    U.current && te.type !== "touchstart" || (S && S.removeAttribute("title"), K.clear(), G.clear(), y || gn && f ? K.start(gn ? f : y, () => {
      Ze(te);
    }) : Ze(te));
  }, ve = (te) => {
    K.clear(), G.start(E, () => {
      je(te);
    });
  }, [, Pe] = T.useState(!1), be = (te) => {
    jn(te.target) || (Pe(!1), ve(te));
  }, Q = (te) => {
    S || _(te.currentTarget), jn(te.target) && (Pe(!0), Ne(te));
  }, Nt = (te) => {
    U.current = !0;
    const Tt = V.props;
    Tt.onTouchStart && Tt.onTouchStart(te);
  }, Et = (te) => {
    Nt(te), G.clear(), Y.clear(), xe(), se.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Z.start(x, () => {
      document.body.style.WebkitUserSelect = se.current, Ne(te);
    });
  }, It = (te) => {
    V.props.onTouchEnd && V.props.onTouchEnd(te), xe(), G.start(v, () => {
      je(te);
    });
  };
  T.useEffect(() => {
    if (!R)
      return;
    function te(Tt) {
      Tt.key === "Escape" && je(Tt);
    }
    return document.addEventListener("keydown", te), () => {
      document.removeEventListener("keydown", te);
    };
  }, [je, R]);
  const Ie = Ge(rn(V), _, r);
  !j && j !== 0 && (R = !1);
  const he = T.useRef(), De = (te) => {
    const Tt = V.props;
    Tt.onMouseMove && Tt.onMouseMove(te), Cr = {
      x: te.clientX,
      y: te.clientY
    }, he.current && he.current.update();
  }, Le = {}, At = typeof j == "string";
  u ? (Le.title = !R && At && !m ? j : null, Le["aria-describedby"] = R ? ie : null) : (Le["aria-label"] = At ? j : null, Le["aria-labelledby"] = R && !At ? ie : null);
  const We = {
    ...Le,
    ...A,
    ...V.props,
    className: ne(A.className, V.props.className),
    onTouchStart: Nt,
    ref: Ie,
    ...w ? {
      onMouseMove: De
    } : {}
  };
  process.env.NODE_ENV !== "production" && (We["data-mui-internal-clone-element"] = !0, T.useEffect(() => {
    S && !S.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [S]));
  const br = {};
  g || (We.onTouchStart = Et, We.onTouchEnd = It), m || (We.onMouseOver = yn(Ne, We.onMouseOver), We.onMouseLeave = yn(ve, We.onMouseLeave), z || (br.onMouseOver = Ne, br.onMouseLeave = ve)), d || (We.onFocus = yn(Q, We.onFocus), We.onBlur = yn(be, We.onBlur), z || (br.onFocus = Q, br.onBlur = be)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const jt = {
    ...n,
    isRtl: H,
    arrow: o,
    disableInteractive: z,
    placement: $,
    PopperComponentProp: M,
    touch: U.current
  }, vr = typeof F.popper == "function" ? F.popper(jt) : F.popper, bl = T.useMemo(() => {
    let te = [{
      name: "arrow",
      enabled: !!L,
      options: {
        element: L,
        padding: 4
      }
    }];
    return I.popperOptions?.modifiers && (te = te.concat(I.popperOptions.modifiers)), vr?.popperOptions?.modifiers && (te = te.concat(vr.popperOptions.modifiers)), {
      ...I.popperOptions,
      ...vr?.popperOptions,
      modifiers: te
    };
  }, [L, I.popperOptions, vr?.popperOptions]), fo = Ah(jt), vl = typeof F.transition == "function" ? F.transition(jt) : F.transition, sn = {
    slots: {
      popper: c.Popper,
      transition: c.Transition ?? N,
      tooltip: c.Tooltip,
      arrow: c.Arrow,
      ...p
    },
    slotProps: {
      arrow: F.arrow ?? l.arrow,
      popper: {
        ...I,
        ...vr ?? l.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: F.tooltip ?? l.tooltip,
      transition: {
        ...B,
        ...vl ?? l.transition
      }
    }
  }, [xl, Sl] = Ae("popper", {
    elementType: jh,
    externalForwardedProps: sn,
    ownerState: jt,
    className: ne(fo.popper, I?.className)
  }), [El, Tl] = Ae("transition", {
    elementType: Hr,
    externalForwardedProps: sn,
    ownerState: jt
  }), [wl, Cl] = Ae("tooltip", {
    elementType: _h,
    className: fo.tooltip,
    externalForwardedProps: sn,
    ownerState: jt
  }), [Ol, Pl] = Ae("arrow", {
    elementType: Dh,
    className: fo.arrow,
    externalForwardedProps: sn,
    ownerState: jt,
    ref: W
  });
  return /* @__PURE__ */ O.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ T.cloneElement(V, We), /* @__PURE__ */ O.jsx(xl, {
      as: M ?? Ai,
      placement: $,
      anchorEl: w ? {
        getBoundingClientRect: () => ({
          top: Cr.y,
          left: Cr.x,
          right: Cr.x,
          bottom: Cr.y,
          width: 0,
          height: 0
        })
      } : S,
      popperRef: he,
      open: S ? R : !1,
      id: ie,
      transition: !0,
      ...br,
      ...Sl,
      popperOptions: bl,
      children: ({
        TransitionProps: te
      }) => /* @__PURE__ */ O.jsx(El, {
        timeout: X.transitions.duration.shorter,
        ...te,
        ...Tl,
        children: /* @__PURE__ */ O.jsxs(wl, {
          ...Cl,
          children: [j, o ? /* @__PURE__ */ O.jsx(Ol, {
            ...Pl
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Nc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: i.bool,
  /**
   * Tooltip reference element.
   */
  children: yr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Arrow: i.elementType,
    Popper: i.elementType,
    Tooltip: i.elementType,
    Transition: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    arrow: i.object,
    popper: i.object,
    tooltip: i.object,
    transition: i.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: i.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: i.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: i.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: i.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: i.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: i.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: i.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: i.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: i.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: i.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: i.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: i.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: i.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: i.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    arrow: i.oneOfType([i.func, i.object]),
    popper: i.oneOfType([i.func, i.object]),
    tooltip: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    arrow: i.elementType,
    popper: i.elementType,
    tooltip: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: i.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: i.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: i.object
});
function Qs(e) {
  return String(parseFloat(e)).length === String(e).length;
}
function Bh(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Dt(e) {
  return parseFloat(e);
}
function Fh(e) {
  return (t, r) => {
    const n = Bh(t);
    if (n === r)
      return t;
    let o = Dt(t);
    n !== "px" && (n === "em" || n === "rem") && (o = Dt(t) * Dt(e));
    let s = o;
    if (r !== "px")
      if (r === "em")
        s = o / Dt(e);
      else if (r === "rem")
        s = o / Dt(e);
      else
        return t;
    return parseFloat(s.toFixed(5)) + r;
  };
}
function Lh({
  size: e,
  grid: t
}) {
  const r = e - e % t, n = r + t;
  return e - r < n - e ? r : n;
}
function zh({
  lineHeight: e,
  pixels: t,
  htmlFontSize: r
}) {
  return t / (e * r);
}
function Vh({
  cssProperty: e,
  min: t,
  max: r,
  unit: n = "rem",
  breakpoints: o = [600, 900, 1200],
  transform: s = null
}) {
  const a = {
    [e]: `${t}${n}`
  }, c = (r - t) / o[o.length - 1];
  return o.forEach((l) => {
    let u = t + c * l;
    s !== null && (u = s(u)), a[`@media (min-width:${l}px)`] = {
      [e]: `${Math.round(u * 1e4) / 1e4}${n}`
    };
  }), a;
}
function Wh(e, t = {}) {
  const {
    breakpoints: r = ["sm", "md", "lg"],
    disableAlign: n = !1,
    factor: o = 2,
    variants: s = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = t, a = {
    ...e
  };
  a.typography = {
    ...a.typography
  };
  const c = a.typography, l = Fh(c.htmlFontSize), u = r.map((d) => a.breakpoints.values[d]);
  return s.forEach((d) => {
    const m = c[d];
    if (!m)
      return;
    const b = parseFloat(l(m.fontSize, "rem"));
    if (b <= 1)
      return;
    const g = b, y = 1 + (g - 1) / o;
    let {
      lineHeight: f
    } = m;
    if (!Qs(f) && !n)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : bt(6));
    Qs(f) || (f = parseFloat(l(f, "rem")) / parseFloat(b));
    let x = null;
    n || (x = (w) => Lh({
      size: w,
      grid: zh({
        pixels: 4,
        lineHeight: f,
        htmlFontSize: c.htmlFontSize
      })
    })), c[d] = {
      ...m,
      ...Vh({
        cssProperty: "fontSize",
        min: y,
        max: g,
        unit: "rem",
        breakpoints: u,
        transform: x
      })
    };
  }), a;
}
function Uh({
  theme: e,
  ...t
}) {
  const r = yt in e ? e[yt] : void 0;
  return /* @__PURE__ */ O.jsx(Wr, {
    ...t,
    themeId: r ? yt : void 0,
    theme: r || e
  });
}
const bn = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (i.string, i.string, i.string, i.string, i.string, i.oneOf(["dark", "light", "system"]), i.string, i.string);
const {
  CssVarsProvider: Hh
} = $f({
  themeId: yt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Ei({
    cssVariables: !0
  }),
  colorSchemeStorageKey: bn.colorSchemeStorageKey,
  modeStorageKey: bn.modeStorageKey,
  defaultColorScheme: {
    light: bn.defaultLightColorScheme,
    dark: bn.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: ec(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return Ht({
        sx: n,
        theme: this
      });
    }, t;
  }
}), qh = Hh;
function Yh({
  theme: e,
  ...t
}) {
  const r = T.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = yt in e ? e[yt] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ O.jsx(Uh, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ O.jsx(qh, {
    theme: e,
    ...t
  });
}
function nb({
  onSync: e,
  syncInterval: t = 3e4,
  maxErrorCount: r = 3,
  syncAnimationDuration: n = 3e3,
  successDuration: o = 3e3,
  errorDuration: s = 3e3,
  tooltipEnabled: a = !0,
  resetTrigger: c,
  disabled: l = !1,
  size: u = "medium"
  // Valor padrão conforme GovBR
}) {
  const d = en(), [m, b] = Ir("idle"), [g, y] = Ir(!0), [f, x] = Ir(0), w = hr`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `, P = Fi(
    (M, I) => {
      setTimeout(() => b(M), n), setTimeout(() => b("idle"), n + I);
    },
    [n]
  ), E = Fi(async () => {
    b("loading");
    try {
      await e(), P("success", o), x(0);
    } catch (M) {
      P("error", s), x((I) => I + 1), console.error(M);
    }
  }, [e, P, o, s]);
  nr(() => {
    if (!g) return;
    const M = setInterval(E, t);
    return () => clearInterval(M);
  }, [g, E, t]), nr(() => {
    l && (y(!1), b("critical-error"));
  }, [l]), nr(() => {
    l || (y(!0), b("idle"));
  }, [l]), nr(() => {
    f >= r && (y(!1), b("critical-error"));
  }, [f, r]), nr(() => {
    if (!g) return;
    const M = setInterval(E, t);
    return () => clearInterval(M);
  }, [g, E, t, c]);
  const v = () => {
    y((M) => !M), g || (x(0), b("idle"));
  }, h = () => {
    if (!g) return /* @__PURE__ */ O.jsx(Bs, {});
    switch (m) {
      case "success":
        return /* @__PURE__ */ O.jsx(ac, {});
      case "error":
        return /* @__PURE__ */ O.jsx(Mp, {});
      case "critical-error":
        return /* @__PURE__ */ O.jsx(Bs, {});
      default:
        return /* @__PURE__ */ O.jsx($p, {});
    }
  }, C = (M) => {
    const I = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(M);
    return I ? `${parseInt(I[1], 16)}, ${parseInt(I[2], 16)}, ${parseInt(I[3], 16)}` : "19, 81, 180";
  }, k = () => {
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
  let $ = "";
  return a && (l ? $ = "Sincronização desabilitada" : m === "critical-error" ? $ = "Sincronização com erro crítico. Clique para tentar reativar." : g ? $ = "Sincronização automática ativada. Clique para desativar." : $ = "Sincronização automática desativada. Clique para ativar."), /* @__PURE__ */ O.jsx(Nc, { title: $, children: /* @__PURE__ */ O.jsx(
    mc,
    {
      size: u,
      disabled: l || m === "loading",
      "aria-label": "Auto Sync",
      onClick: v,
      sx: {
        marginLeft: d.spacing(1),
        // Usar spacing do tema
        color: k(),
        // Animação de loading usando as transições do GovBR
        animation: m === "loading" ? `${w} 1s ${d.transitions.easing.easeInOut} infinite` : "none",
        // Hover personalizado para este componente (sobrescreve o padrão)
        "&:hover:not(:disabled)": {
          backgroundImage: `linear-gradient(rgba(${C(k())}, 0.16), rgba(${C(k())}, 0.16))`
        }
      },
      children: h()
    }
  ) });
}
const Gh = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Kh(e) {
  return Oe("MuiAvatar", e);
}
Ee("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Xh = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return $e({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Kh, t);
}, Jh = re("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
  }
})(Fe(({
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
}))), Zh = re("img", {
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
}), Qh = re(Gh, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function eg({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: n
}) {
  const [o, s] = T.useState(!1);
  return T.useEffect(() => {
    if (!r && !n)
      return;
    s(!1);
    let a = !0;
    const c = new Image();
    return c.onload = () => {
      a && s("loaded");
    }, c.onerror = () => {
      a && s("error");
    }, c.crossOrigin = e, c.referrerPolicy = t, c.src = r, n && (c.srcset = n), () => {
      a = !1;
    };
  }, [e, t, r, n]), o;
}
const Ic = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: o,
    children: s,
    className: a,
    component: c = "div",
    slots: l = {},
    slotProps: u = {},
    imgProps: d,
    sizes: m,
    src: b,
    srcSet: g,
    variant: y = "circular",
    ...f
  } = n;
  let x = null;
  const w = {
    ...n,
    component: c,
    variant: y
  }, P = eg({
    ...d,
    ...typeof u.img == "function" ? u.img(w) : u.img,
    src: b,
    srcSet: g
  }), E = b || g, v = E && P !== "error";
  w.colorDefault = !v, delete w.ownerState;
  const h = Xh(w), [C, k] = Ae("root", {
    ref: r,
    className: ne(h.root, a),
    elementType: Jh,
    externalForwardedProps: {
      slots: l,
      slotProps: u,
      component: c,
      ...f
    },
    ownerState: w
  }), [$, M] = Ae("img", {
    className: h.img,
    elementType: Zh,
    externalForwardedProps: {
      slots: l,
      slotProps: {
        img: {
          ...d,
          ...u.img
        }
      }
    },
    additionalProps: {
      alt: o,
      src: b,
      srcSet: g,
      sizes: m
    },
    ownerState: w
  }), [I, F] = Ae("fallback", {
    className: h.fallback,
    elementType: Qh,
    externalForwardedProps: {
      slots: l,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: w
  });
  return v ? x = /* @__PURE__ */ O.jsx($, {
    ...M
  }) : s || s === 0 ? x = s : E && o ? x = o[0] : x = /* @__PURE__ */ O.jsx(I, {
    ...F
  }), /* @__PURE__ */ O.jsx(C, {
    ...k,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (Ic.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: i.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: i.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: i.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    fallback: i.oneOfType([i.func, i.object]),
    img: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    fallback: i.elementType,
    img: i.elementType,
    root: i.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: i.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: i.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: i.oneOfType([i.oneOf(["circular", "rounded", "square"]), i.string])
});
const zn = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (zn.displayName = "ListContext");
function tg(e) {
  return Oe("MuiList", e);
}
Ee("MuiList", ["root", "padding", "dense", "subheader"]);
const rg = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return $e({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, tg, t);
}, ng = re("ul", {
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
}), Ac = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: s,
    component: a = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u,
    ...d
  } = n, m = T.useMemo(() => ({
    dense: c
  }), [c]), b = {
    ...n,
    component: a,
    dense: c,
    disablePadding: l
  }, g = rg(b);
  return /* @__PURE__ */ O.jsx(zn.Provider, {
    value: m,
    children: /* @__PURE__ */ O.jsxs(ng, {
      as: a,
      className: ne(g.root, s),
      ref: r,
      ownerState: b,
      ...d,
      children: [u, o]
    })
  });
});
process.env.NODE_ENV !== "production" && (Ac.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: i.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: i.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function jc(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Ro(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function ea(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function _c(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function Or(e, t, r, n, o, s) {
  let a = !1, c = o(e, t, t ? r : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = n ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !_c(c, s) || l)
      c = o(e, c, r);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Dc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: n,
    autoFocus: o = !1,
    autoFocusItem: s = !1,
    children: a,
    className: c,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: m = "selectedMenu",
    ...b
  } = t, g = T.useRef(null), y = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  vt(() => {
    o && g.current.focus();
  }, [o]), T.useImperativeHandle(n, () => ({
    adjustStyleForScrollbar: (E, {
      direction: v
    }) => {
      const h = !g.current.style.width;
      if (E.clientHeight < g.current.clientHeight && h) {
        const C = `${jc(qt(E))}px`;
        g.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = C, g.current.style.width = `calc(100% + ${C})`;
      }
      return g.current;
    }
  }), []);
  const f = (E) => {
    const v = g.current, h = E.key;
    if (E.ctrlKey || E.metaKey || E.altKey) {
      d && d(E);
      return;
    }
    const k = rt(v).activeElement;
    if (h === "ArrowDown")
      E.preventDefault(), Or(v, k, u, l, Ro);
    else if (h === "ArrowUp")
      E.preventDefault(), Or(v, k, u, l, ea);
    else if (h === "Home")
      E.preventDefault(), Or(v, null, u, l, Ro);
    else if (h === "End")
      E.preventDefault(), Or(v, null, u, l, ea);
    else if (h.length === 1) {
      const $ = y.current, M = h.toLowerCase(), I = performance.now();
      $.keys.length > 0 && (I - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && M !== $.keys[0] && ($.repeating = !1)), $.lastTime = I, $.keys.push(M);
      const F = k && !$.repeating && _c(k, $);
      $.previousKeyMatched && (F || Or(v, k, !1, l, Ro, $)) ? E.preventDefault() : $.previousKeyMatched = !1;
    }
    d && d(E);
  }, x = Ge(g, r);
  let w = -1;
  T.Children.forEach(a, (E, v) => {
    if (!/* @__PURE__ */ T.isValidElement(E)) {
      w === v && (w += 1, w >= a.length && (w = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && cr.isFragment(E) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), E.props.disabled || (m === "selectedMenu" && E.props.selected || w === -1) && (w = v), w === v && (E.props.disabled || E.props.muiSkipListHighlight || E.type.muiSkipListHighlight) && (w += 1, w >= a.length && (w = -1));
  });
  const P = T.Children.map(a, (E, v) => {
    if (v === w) {
      const h = {};
      return s && (h.autoFocus = !0), E.props.tabIndex === void 0 && m === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ T.cloneElement(E, h);
    }
    return E;
  });
  return /* @__PURE__ */ O.jsx(Ac, {
    role: "menu",
    ref: x,
    className: c,
    onKeyDown: f,
    tabIndex: o ? 0 : -1,
    ...b,
    children: P
  });
});
process.env.NODE_ENV !== "production" && (Dc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: i.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function og(e) {
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
function Bc(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const s = og(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Fc(e, t, r, n) {
  return e[t] === void 0 ? null : Bc(e, t, r, n);
}
function Xo() {
  return null;
}
Fc.isRequired = Bc;
Xo.isRequired = Xo;
const Lc = process.env.NODE_ENV === "production" ? Xo : Fc;
function ig(e) {
  return typeof e == "string";
}
function sg(e) {
  const t = rt(e);
  return t.body === e ? qt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Dr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ta(e) {
  return parseInt(qt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function ag(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function ra(e, t, r, n, o) {
  const s = [t, r, ...n];
  [].forEach.call(e.children, (a) => {
    const c = !s.includes(a), l = !ag(a);
    c && l && Dr(a, o);
  });
}
function ko(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function cg(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (sg(n)) {
      const a = jc(qt(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${ta(n) + a}px`;
      const c = rt(n).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${ta(l) + a}px`;
      });
    }
    let s;
    if (n.parentNode instanceof DocumentFragment)
      s = rt(n).body;
    else {
      const a = n.parentElement, c = qt(n);
      s = a?.nodeName === "HTML" && c.getComputedStyle(a).overflowY === "scroll" ? a : n;
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
      property: c
    }) => {
      s ? a.style.setProperty(c, s) : a.style.removeProperty(c);
    });
  };
}
function lg(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class ug {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Dr(t.modalRef, !1);
    const o = lg(r);
    ra(r, t.mount, t.modalRef, o, !0);
    const s = ko(this.containers, (a) => a.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = ko(this.containers, (s) => s.modals.includes(t)), o = this.containers[n];
    o.restore || (o.restore = cg(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = ko(this.containers, (a) => a.modals.includes(t)), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(n, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Dr(t.modalRef, r), ra(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Dr(a.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const dg = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function fg(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function pg(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function mg(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || pg(e));
}
function hg(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(dg)).forEach((n, o) => {
    const s = fg(n);
    s === -1 || !mg(n) || (s === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: s,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function gg() {
  return !0;
}
function Vn(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = hg,
    isEnabled: a = gg,
    open: c
  } = e, l = T.useRef(!1), u = T.useRef(null), d = T.useRef(null), m = T.useRef(null), b = T.useRef(null), g = T.useRef(!1), y = T.useRef(null), f = Ge(rn(t), y), x = T.useRef(null);
  T.useEffect(() => {
    !c || !y.current || (g.current = !r);
  }, [r, c]), T.useEffect(() => {
    if (!c || !y.current)
      return;
    const E = rt(y.current);
    return y.current.contains(E.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), g.current && y.current.focus()), () => {
      o || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [c]), T.useEffect(() => {
    if (!c || !y.current)
      return;
    const E = rt(y.current), v = (k) => {
      x.current = k, !(n || !a() || k.key !== "Tab") && E.activeElement === y.current && k.shiftKey && (l.current = !0, d.current && d.current.focus());
    }, h = () => {
      const k = y.current;
      if (k === null)
        return;
      if (!E.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (k.contains(E.activeElement) || n && E.activeElement !== u.current && E.activeElement !== d.current)
        return;
      if (E.activeElement !== b.current)
        b.current = null;
      else if (b.current !== null)
        return;
      if (!g.current)
        return;
      let $ = [];
      if ((E.activeElement === u.current || E.activeElement === d.current) && ($ = s(y.current)), $.length > 0) {
        const M = !!(x.current?.shiftKey && x.current?.key === "Tab"), I = $[0], F = $[$.length - 1];
        typeof I != "string" && typeof F != "string" && (M ? F.focus() : I.focus());
      } else
        k.focus();
    };
    E.addEventListener("focusin", h), E.addEventListener("keydown", v, !0);
    const C = setInterval(() => {
      E.activeElement && E.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval(C), E.removeEventListener("focusin", h), E.removeEventListener("keydown", v, !0);
    };
  }, [r, n, o, a, c, s]);
  const w = (E) => {
    m.current === null && (m.current = E.relatedTarget), g.current = !0, b.current = E.target;
    const v = t.props.onFocus;
    v && v(E);
  }, P = (E) => {
    m.current === null && (m.current = E.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ O.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ O.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: P,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: f,
      onFocus: w
    }), /* @__PURE__ */ O.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: P,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Vn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: yr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: i.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: i.func,
  /**
   * If `true`, focus is locked.
   */
  open: i.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Vn.propTypes = so(Vn.propTypes));
const yg = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, zc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = en(), o = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: d,
    onEntered: m,
    onEntering: b,
    onExit: g,
    onExited: y,
    onExiting: f,
    style: x,
    timeout: w = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = mt,
    ...E
  } = t, v = T.useRef(null), h = Ge(v, rn(c), r), C = (N) => (B) => {
    if (N) {
      const A = v.current;
      B === void 0 ? N(A) : N(A, B);
    }
  }, k = C(b), $ = C((N, B) => {
    gc(N);
    const A = Bn({
      style: x,
      timeout: w,
      easing: l
    }, {
      mode: "enter"
    });
    N.style.webkitTransition = n.transitions.create("opacity", A), N.style.transition = n.transitions.create("opacity", A), d && d(N, B);
  }), M = C(m), I = C(f), F = C((N) => {
    const B = Bn({
      style: x,
      timeout: w,
      easing: l
    }, {
      mode: "exit"
    });
    N.style.webkitTransition = n.transitions.create("opacity", B), N.style.transition = n.transitions.create("opacity", B), g && g(N);
  }), p = C(y), j = (N) => {
    s && s(v.current, N);
  };
  return /* @__PURE__ */ O.jsx(P, {
    appear: a,
    in: u,
    nodeRef: v,
    onEnter: $,
    onEntered: M,
    onEntering: k,
    onExit: F,
    onExited: p,
    onExiting: I,
    addEndListener: j,
    timeout: w,
    ...E,
    children: (N, {
      ownerState: B,
      ...A
    }) => /* @__PURE__ */ T.cloneElement(c, {
      style: {
        opacity: 0,
        visibility: N === "exited" && !u ? "hidden" : void 0,
        ...yg[N],
        ...x,
        ...c.props.style
      },
      ref: h,
      ...A
    })
  });
});
process.env.NODE_ENV !== "production" && (zc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: yr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function bg(e) {
  return Oe("MuiBackdrop", e);
}
Ee("MuiBackdrop", ["root", "invisible"]);
const vg = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return $e({
    root: ["root", r && "invisible"]
  }, bg, t);
}, xg = re("div", {
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
}), Vc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: s,
    component: a = "div",
    invisible: c = !1,
    open: l,
    components: u = {},
    componentsProps: d = {},
    slotProps: m = {},
    slots: b = {},
    TransitionComponent: g,
    transitionDuration: y,
    ...f
  } = n, x = {
    ...n,
    component: a,
    invisible: c
  }, w = vg(x), P = {
    transition: g,
    root: u.Root,
    ...b
  }, E = {
    ...d,
    ...m
  }, v = {
    component: a,
    slots: P,
    slotProps: E
  }, [h, C] = Ae("root", {
    elementType: xg,
    externalForwardedProps: v,
    className: ne(w.root, s),
    ownerState: x
  }), [k, $] = Ae("transition", {
    elementType: zc,
    externalForwardedProps: v,
    ownerState: x
  });
  return /* @__PURE__ */ O.jsx(k, {
    in: l,
    timeout: y,
    ...f,
    ...$,
    children: /* @__PURE__ */ O.jsx(h, {
      "aria-hidden": !0,
      ...C,
      classes: w,
      ref: r,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Vc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    root: i.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: i.bool,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: i.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function Sg(e) {
  return typeof e == "function" ? e() : e;
}
function Eg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const na = () => {
}, vn = new ug();
function Tg(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: c,
    onClose: l,
    open: u,
    rootRef: d
  } = e, m = T.useRef({}), b = T.useRef(null), g = T.useRef(null), y = Ge(g, d), [f, x] = T.useState(!u), w = Eg(c);
  let P = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (P = !1);
  const E = () => rt(b.current), v = () => (m.current.modalRef = g.current, m.current.mount = b.current, m.current), h = () => {
    vn.mount(v(), {
      disableScrollLock: n
    }), g.current && (g.current.scrollTop = 0);
  }, C = Ot(() => {
    const B = Sg(t) || E().body;
    vn.add(v(), B), g.current && h();
  }), k = () => vn.isTopModal(v()), $ = Ot((B) => {
    b.current = B, B && (u && k() ? h() : g.current && Dr(g.current, P));
  }), M = T.useCallback(() => {
    vn.remove(v(), P);
  }, [P]);
  T.useEffect(() => () => {
    M();
  }, [M]), T.useEffect(() => {
    u ? C() : (!w || !o) && M();
  }, [u, M, w, o, C]);
  const I = (B) => (A) => {
    B.onKeyDown?.(A), !(A.key !== "Escape" || A.which === 229 || // Wait until IME is settled.
    !k()) && (r || (A.stopPropagation(), l && l(A, "escapeKeyDown")));
  }, F = (B) => (A) => {
    B.onClick?.(A), A.target === A.currentTarget && l && l(A, "backdropClick");
  };
  return {
    getRootProps: (B = {}) => {
      const A = Pc(e);
      delete A.onTransitionEnter, delete A.onTransitionExited;
      const V = {
        ...A,
        ...B
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
        onKeyDown: I(V),
        ref: y
      };
    },
    getBackdropProps: (B = {}) => {
      const A = B;
      return {
        "aria-hidden": !0,
        ...A,
        onClick: F(A),
        open: u
      };
    },
    getTransitionProps: () => {
      const B = () => {
        x(!1), s && s();
      }, A = () => {
        x(!0), a && a(), o && M();
      };
      return {
        onEnter: No(B, c?.props.onEnter ?? na),
        onExited: No(A, c?.props.onExited ?? na)
      };
    },
    rootRef: y,
    portalRef: $,
    isTopModal: k,
    exited: f,
    hasTransition: w
  };
}
function wg(e) {
  return Oe("MuiModal", e);
}
Ee("MuiModal", ["root", "hidden", "backdrop"]);
const Cg = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return $e({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, wg, n);
}, Og = re("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(Fe(({
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
}))), Pg = re(Vc, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Wc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = Pg,
    BackdropProps: s,
    classes: a,
    className: c,
    closeAfterTransition: l = !1,
    children: u,
    container: d,
    component: m,
    components: b = {},
    componentsProps: g = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: w = !1,
    disableRestoreFocus: P = !1,
    disableScrollLock: E = !1,
    hideBackdrop: v = !1,
    keepMounted: h = !1,
    onClose: C,
    onTransitionEnter: k,
    onTransitionExited: $,
    open: M,
    slotProps: I = {},
    slots: F = {},
    // eslint-disable-next-line react/prop-types
    theme: p,
    ...j
  } = n, N = {
    ...n,
    closeAfterTransition: l,
    disableAutoFocus: y,
    disableEnforceFocus: f,
    disableEscapeKeyDown: x,
    disablePortal: w,
    disableRestoreFocus: P,
    disableScrollLock: E,
    hideBackdrop: v,
    keepMounted: h
  }, {
    getRootProps: B,
    getBackdropProps: A,
    getTransitionProps: V,
    portalRef: X,
    isTopModal: H,
    exited: S,
    hasTransition: _
  } = Tg({
    ...N,
    rootRef: r
  }), L = {
    ...N,
    exited: S
  }, W = Cg(L), U = {};
  if (u.props.tabIndex === void 0 && (U.tabIndex = "-1"), _) {
    const {
      onEnter: q,
      onExited: J
    } = V();
    U.onEnter = q, U.onExited = J;
  }
  const z = {
    slots: {
      root: b.Root,
      backdrop: b.Backdrop,
      ...F
    },
    slotProps: {
      ...g,
      ...I
    }
  }, [Y, K] = Ae("root", {
    ref: r,
    elementType: Og,
    externalForwardedProps: {
      ...z,
      ...j,
      component: m
    },
    getSlotProps: B,
    ownerState: L,
    className: ne(c, W?.root, !L.open && L.exited && W?.hidden)
  }), [G, Z] = Ae("backdrop", {
    ref: s?.ref,
    elementType: o,
    externalForwardedProps: z,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (q) => A({
      ...q,
      onClick: (J) => {
        q?.onClick && q.onClick(J);
      }
    }),
    className: ne(s?.className, W?.backdrop),
    ownerState: L
  });
  return !h && !M && (!_ || S) ? null : /* @__PURE__ */ O.jsx(Gr, {
    ref: X,
    container: d,
    disablePortal: w,
    children: /* @__PURE__ */ O.jsxs(Y, {
      ...K,
      children: [!v && o ? /* @__PURE__ */ O.jsx(G, {
        ...Z
      }) : null, /* @__PURE__ */ O.jsx(Vn, {
        disableEnforceFocus: f,
        disableAutoFocus: y,
        disableRestoreFocus: P,
        isEnabled: H,
        open: M,
        children: /* @__PURE__ */ T.cloneElement(u, U)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Wc.propTypes = {
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
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * A single child content element.
   */
  children: yr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: i.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Backdrop: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
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
  container: i.oneOfType([xt, i.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: i.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: i.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: i.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function Rg(e) {
  return Oe("MuiPaper", e);
}
Ee("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const kg = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return $e(s, Rg, o);
}, Mg = re("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(Fe(({
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
}))), Uc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiPaper"
  }), o = en(), {
    className: s,
    component: a = "div",
    elevation: c = 1,
    square: l = !1,
    variant: u = "elevation",
    ...d
  } = n, m = {
    ...n,
    component: a,
    elevation: c,
    square: l,
    variant: u
  }, b = kg(m);
  return process.env.NODE_ENV !== "production" && o.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ O.jsx(Mg, {
    as: a,
    ownerState: m,
    className: ne(b.root, s),
    ref: r,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[c],
        ...o.vars && {
          "--Paper-overlay": o.vars.overlays?.[c]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Nn("#fff", zo(c))}, ${Nn("#fff", zo(c))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Uc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Mt(Lc, (e) => {
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
  square: i.bool,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: i.oneOfType([i.oneOf(["elevation", "outlined"]), i.string])
});
function $g(e) {
  return Oe("MuiPopover", e);
}
Ee("MuiPopover", ["root", "paper"]);
function oa(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function ia(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function sa(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function $r(e) {
  return typeof e == "function" ? e() : e;
}
const Ng = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"],
    paper: ["paper"]
  }, $g, t);
}, Ig = re(Wc, {
  name: "MuiPopover",
  slot: "Root"
})({}), Hc = re(Uc, {
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
}), qc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: c,
    anchorReference: l = "anchorEl",
    children: u,
    className: d,
    container: m,
    elevation: b = 8,
    marginThreshold: g = 16,
    open: y,
    PaperProps: f = {},
    // TODO: remove in v7
    slots: x = {},
    slotProps: w = {},
    transformOrigin: P = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: E,
    // TODO: remove in v7
    transitionDuration: v = "auto",
    TransitionProps: h = {},
    // TODO: remove in v7
    disableScrollLock: C = !1,
    ...k
  } = n, $ = T.useRef(), M = {
    ...n,
    anchorOrigin: a,
    anchorReference: l,
    elevation: b,
    marginThreshold: g,
    transformOrigin: P,
    TransitionComponent: E,
    transitionDuration: v,
    TransitionProps: h
  }, I = Ng(M), F = T.useCallback(() => {
    if (l === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (c || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), c;
    const q = $r(s), J = q && q.nodeType === 1 ? q : rt($.current).body, R = J.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ie = J.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ie.top === 0 && ie.left === 0 && ie.right === 0 && ie.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: R.top + oa(R, a.vertical),
      left: R.left + ia(R, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, c, l]), p = T.useCallback((q) => ({
    vertical: oa(q, P.vertical),
    horizontal: ia(q, P.horizontal)
  }), [P.horizontal, P.vertical]), j = T.useCallback((q) => {
    const J = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, R = p(J);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: sa(R)
      };
    const ie = F();
    let se = ie.top - R.vertical, xe = ie.left - R.horizontal;
    const Ze = se + J.height, je = xe + J.width, Ne = qt($r(s)), ve = Ne.innerHeight - g, Pe = Ne.innerWidth - g;
    if (g !== null && se < g) {
      const be = se - g;
      se -= be, R.vertical += be;
    } else if (g !== null && Ze > ve) {
      const be = Ze - ve;
      se -= be, R.vertical += be;
    }
    if (process.env.NODE_ENV !== "production" && J.height > ve && J.height && ve && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${J.height - ve}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && xe < g) {
      const be = xe - g;
      xe -= be, R.horizontal += be;
    } else if (je > Pe) {
      const be = je - Pe;
      xe -= be, R.horizontal += be;
    }
    return {
      top: `${Math.round(se)}px`,
      left: `${Math.round(xe)}px`,
      transformOrigin: sa(R)
    };
  }, [s, l, F, p, g]), [N, B] = T.useState(y), A = T.useCallback(() => {
    const q = $.current;
    if (!q)
      return;
    const J = j(q);
    J.top !== null && q.style.setProperty("top", J.top), J.left !== null && (q.style.left = J.left), q.style.transformOrigin = J.transformOrigin, B(!0);
  }, [j]);
  T.useEffect(() => (C && window.addEventListener("scroll", A), () => window.removeEventListener("scroll", A)), [s, C, A]);
  const V = () => {
    A();
  }, X = () => {
    B(!1);
  };
  T.useEffect(() => {
    y && A();
  }), T.useImperativeHandle(o, () => y ? {
    updatePosition: () => {
      A();
    }
  } : null, [y, A]), T.useEffect(() => {
    if (!y)
      return;
    const q = Pp(() => {
      A();
    }), J = qt($r(s));
    return J.addEventListener("resize", q), () => {
      q.clear(), J.removeEventListener("resize", q);
    };
  }, [s, y, A]);
  let H = v;
  const S = {
    slots: {
      transition: E,
      ...x
    },
    slotProps: {
      transition: h,
      paper: f,
      ...w
    }
  }, [_, L] = Ae("transition", {
    elementType: Hr,
    externalForwardedProps: S,
    ownerState: M,
    getSlotProps: (q) => ({
      ...q,
      onEntering: (J, R) => {
        q.onEntering?.(J, R), V();
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
  v === "auto" && !_.muiSupportAuto && (H = void 0);
  const W = m || (s ? rt($r(s)).body : void 0), [U, {
    slots: z,
    slotProps: Y,
    ...K
  }] = Ae("root", {
    ref: r,
    elementType: Ig,
    externalForwardedProps: {
      ...S,
      ...k
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: kp(typeof w.backdrop == "function" ? w.backdrop(M) : w.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: y
    },
    ownerState: M,
    className: ne(I.root, d)
  }), [G, Z] = Ae("paper", {
    ref: $,
    className: I.paper,
    elementType: Hc,
    externalForwardedProps: S,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: b,
      style: N ? void 0 : {
        opacity: 0
      }
    },
    ownerState: M
  });
  return /* @__PURE__ */ O.jsx(U, {
    ...K,
    ...!ig(U) && {
      slots: z,
      slotProps: Y,
      disableScrollLock: C
    },
    children: /* @__PURE__ */ O.jsx(_, {
      ...L,
      timeout: H,
      children: /* @__PURE__ */ O.jsx(G, {
        ...Z,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (qc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: gr,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Mt(i.oneOfType([xt, i.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = $r(e.anchorEl);
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
  anchorOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: i.shape({
    left: i.number.isRequired,
    top: i.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: i.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: i.object,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([xt, i.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Lc,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: i.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: i.shape({
    component: cc
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    paper: i.elementType,
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
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
  transformOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: i.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: i.object
});
function Ag(e) {
  return Oe("MuiMenu", e);
}
Ee("MuiMenu", ["root", "paper", "list"]);
const jg = {
  vertical: "top",
  horizontal: "right"
}, _g = {
  vertical: "top",
  horizontal: "left"
}, Dg = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Ag, t);
}, Bg = re(qc, {
  shouldForwardProp: (e) => Xt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Fg = re(Hc, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Lg = re(Dc, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Yc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: s,
    className: a,
    disableAutoFocusItem: c = !1,
    MenuListProps: l = {},
    onClose: u,
    open: d,
    PaperProps: m = {},
    PopoverClasses: b,
    transitionDuration: g = "auto",
    TransitionProps: {
      onEntering: y,
      ...f
    } = {},
    variant: x = "selectedMenu",
    slots: w = {},
    slotProps: P = {},
    ...E
  } = n, v = bi(), h = {
    ...n,
    autoFocus: o,
    disableAutoFocusItem: c,
    MenuListProps: l,
    onEntering: y,
    PaperProps: m,
    transitionDuration: g,
    TransitionProps: f,
    variant: x
  }, C = Dg(h), k = o && !c && d, $ = T.useRef(null), M = (H, S) => {
    $.current && $.current.adjustStyleForScrollbar(H, {
      direction: v ? "rtl" : "ltr"
    }), y && y(H, S);
  }, I = (H) => {
    H.key === "Tab" && (H.preventDefault(), u && u(H, "tabKeyDown"));
  };
  let F = -1;
  T.Children.map(s, (H, S) => {
    /* @__PURE__ */ T.isValidElement(H) && (process.env.NODE_ENV !== "production" && cr.isFragment(H) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), H.props.disabled || (x === "selectedMenu" && H.props.selected || F === -1) && (F = S));
  });
  const p = {
    slots: w,
    slotProps: {
      list: l,
      transition: f,
      paper: m,
      ...P
    }
  }, j = Mc({
    elementType: w.root,
    externalSlotProps: P.root,
    ownerState: h,
    className: [C.root, a]
  }), [N, B] = Ae("paper", {
    className: C.paper,
    elementType: Fg,
    externalForwardedProps: p,
    shouldForwardComponentProp: !0,
    ownerState: h
  }), [A, V] = Ae("list", {
    className: ne(C.list, l.className),
    elementType: Lg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: p,
    getSlotProps: (H) => ({
      ...H,
      onKeyDown: (S) => {
        I(S), H.onKeyDown?.(S);
      }
    }),
    ownerState: h
  }), X = typeof p.slotProps.transition == "function" ? p.slotProps.transition(h) : p.slotProps.transition;
  return /* @__PURE__ */ O.jsx(Bg, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: v ? "right" : "left"
    },
    transformOrigin: v ? jg : _g,
    slots: {
      root: w.root,
      paper: N,
      backdrop: w.backdrop,
      ...w.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: w.transition
      }
    },
    slotProps: {
      root: j,
      paper: B,
      backdrop: typeof P.backdrop == "function" ? P.backdrop(h) : P.backdrop,
      transition: {
        ...X,
        onEntering: (...H) => {
          M(...H), X?.onEntering?.(...H);
        }
      }
    },
    open: d,
    ref: r,
    transitionDuration: g,
    ownerState: h,
    ...E,
    classes: b,
    children: /* @__PURE__ */ O.jsx(A, {
      actions: $,
      autoFocus: o && (F === -1 || c),
      autoFocusItem: k,
      variant: x,
      ...V,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (Yc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: i.oneOfType([xt, i.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: i.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: i.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: i.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: i.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: i.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    list: i.oneOfType([i.func, i.object]),
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    list: i.elementType,
    paper: i.elementType,
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: i.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
const aa = Ee("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), ca = Ee("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function zg(e) {
  return Oe("MuiTypography", e);
}
Ee("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Vg = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Wg = Tp(), Ug = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, e.align !== "inherit" && `align${ee(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return $e(c, zg, a);
}, Hg = re("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${ee(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(Fe(({
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
  })), ...Object.entries(e.palette).filter(Rt()).map(([t]) => ({
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
}))), la = {
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
}, Pn = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = ke({
    props: t,
    name: "MuiTypography"
  }), s = !Vg[n], a = Wg({
    ...o,
    ...s && {
      color: n
    }
  }), {
    align: c = "inherit",
    className: l,
    component: u,
    gutterBottom: d = !1,
    noWrap: m = !1,
    paragraph: b = !1,
    variant: g = "body1",
    variantMapping: y = la,
    ...f
  } = a, x = {
    ...a,
    align: c,
    color: n,
    className: l,
    component: u,
    gutterBottom: d,
    noWrap: m,
    paragraph: b,
    variant: g,
    variantMapping: y
  }, w = u || (b ? "p" : y[g] || la[g]) || "span", P = Ug(x);
  return /* @__PURE__ */ O.jsx(Hg, {
    as: w,
    ref: r,
    className: ne(P.root, l),
    ...f,
    ownerState: x,
    style: {
      ...c !== "inherit" && {
        "--Typography-textAlign": c
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: i.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: i.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: i.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: i.bool,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: i.oneOfType([i.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), i.string]),
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
  variantMapping: i.object
});
const ua = Ee("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function qg(e) {
  return Oe("MuiMenuItem", e);
}
const Pr = Ee("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Yg = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, Gg = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: n,
    disableGutters: o,
    selected: s,
    classes: a
  } = e, l = $e({
    root: ["root", r && "dense", t && "disabled", !o && "gutters", n && "divider", s && "selected"]
  }, qg, a);
  return {
    ...a,
    ...l
  };
}, Kg = re(tn, {
  shouldForwardProp: (e) => Xt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Yg
})(Fe(({
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
  [`&.${Pr.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Pr.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Pr.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Pr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Pr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${aa.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${aa.inset}`]: {
    marginLeft: 52
  },
  [`& .${ua.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${ua.inset}`]: {
    paddingLeft: 36
  },
  [`& .${ca.root}`]: {
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
      [`& .${ca.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Gc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: s = "li",
    dense: a = !1,
    divider: c = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: m,
    className: b,
    ...g
  } = n, y = T.useContext(zn), f = T.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: l
  }), [y.dense, a, l]), x = T.useRef(null);
  vt(() => {
    o && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [o]);
  const w = {
    ...n,
    dense: f.dense,
    divider: c,
    disableGutters: l
  }, P = Gg(n), E = Ge(x, r);
  let v;
  return n.disabled || (v = m !== void 0 ? m : -1), /* @__PURE__ */ O.jsx(zn.Provider, {
    value: f,
    children: /* @__PURE__ */ O.jsx(Kg, {
      ref: E,
      role: d,
      tabIndex: v,
      component: s,
      focusVisibleClassName: ne(P.focusVisible, u),
      className: ne(P.root, b),
      ...g,
      ownerState: w,
      classes: P
    })
  });
});
process.env.NODE_ENV !== "production" && (Gc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: i.bool,
  /**
   * @ignore
   */
  disabled: i.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: i.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: i.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: i.string,
  /**
   * @ignore
   */
  role: i.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @default 0
   */
  tabIndex: i.number
});
function Xg(e) {
  return Oe("MuiIcon", e);
}
Ee("MuiIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Jg = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ee(t)}`, `fontSize${ee(r)}`]
  };
  return $e(o, Xg, n);
}, Zg = re("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ee(r.color)}`], t[`fontSize${ee(r.fontSize)}`]];
  }
})(Fe(({
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
  }, ...Object.entries(e.palette).filter(Rt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), ji = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiIcon"
  }), {
    baseClassName: o = "material-icons",
    className: s,
    color: a = "inherit",
    component: c = "span",
    fontSize: l = "medium",
    ...u
  } = n, d = {
    ...n,
    baseClassName: o,
    color: a,
    component: c,
    fontSize: l
  }, m = Jg(d);
  return /* @__PURE__ */ O.jsx(Zg, {
    as: c,
    className: ne(
      o,
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
process.env.NODE_ENV !== "production" && (ji.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The base class applied to the icon. Defaults to 'material-icons', but can be changed to any
   * other base class that suits the icon font you're using (for example material-icons-rounded, fas, etc).
   * @default 'material-icons'
   */
  baseClassName: i.string,
  /**
   * The name of the icon font ligature.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'inherit'
   */
  color: i.oneOfType([i.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: i.oneOfType([i.oneOf(["inherit", "large", "medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
ji.muiName = "Icon";
const Kc = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
}), "Person"), Qg = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), "KeyboardArrowDown"), ey = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), "KeyboardArrowUp");
function ty(e) {
  return Oe("MuiButton", e);
}
const Bt = Ee("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Xc = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Xc.displayName = "ButtonGroupContext");
const Jc = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Jc.displayName = "ButtonGroupButtonContext");
const ry = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: s,
    loading: a,
    loadingPosition: c,
    classes: l
  } = e, u = {
    root: ["root", a && "loading", s, `${s}${ee(t)}`, `size${ee(o)}`, `${s}Size${ee(o)}`, `color${ee(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${ee(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${ee(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ee(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = $e(u, ty, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, Zc = [{
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
}], ny = re(tn, {
  shouldForwardProp: (e) => Xt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ee(r.color)}`], t[`size${ee(r.size)}`], t[`${r.variant}Size${ee(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(Fe(({
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
    [`&.${Bt.disabled}`]: {
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
        [`&.${Bt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Bt.disabled}`]: {
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
        [`&.${Bt.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Rt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
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
        [`&.${Bt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Bt.disabled}`]: {
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
        [`&.${Bt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), oy = re("span", {
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
  }, ...Zc]
})), iy = re("span", {
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
  }, ...Zc]
})), sy = re("span", {
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
})), da = re("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Qc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = T.useContext(Xc), o = T.useContext(Jc), s = Vr(n, t), a = ke({
    props: s,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: d,
    disabled: m = !1,
    disableElevation: b = !1,
    disableFocusRipple: g = !1,
    endIcon: y,
    focusVisibleClassName: f,
    fullWidth: x = !1,
    id: w,
    loading: P = null,
    loadingIndicator: E,
    loadingPosition: v = "center",
    size: h = "medium",
    startIcon: C,
    type: k,
    variant: $ = "text",
    ...M
  } = a, I = ao(w), F = E ?? /* @__PURE__ */ O.jsx(Oi, {
    "aria-labelledby": I,
    color: "inherit",
    size: 16
  }), p = {
    ...a,
    color: l,
    component: u,
    disabled: m,
    disableElevation: b,
    disableFocusRipple: g,
    fullWidth: x,
    loading: P,
    loadingIndicator: F,
    loadingPosition: v,
    size: h,
    type: k,
    variant: $
  }, j = ry(p), N = (C || P && v === "start") && /* @__PURE__ */ O.jsx(oy, {
    className: j.startIcon,
    ownerState: p,
    children: C || /* @__PURE__ */ O.jsx(da, {
      className: j.loadingIconPlaceholder,
      ownerState: p
    })
  }), B = (y || P && v === "end") && /* @__PURE__ */ O.jsx(iy, {
    className: j.endIcon,
    ownerState: p,
    children: y || /* @__PURE__ */ O.jsx(da, {
      className: j.loadingIconPlaceholder,
      ownerState: p
    })
  }), A = o || "", V = typeof P == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ O.jsx("span", {
      className: j.loadingWrapper,
      style: {
        display: "contents"
      },
      children: P && /* @__PURE__ */ O.jsx(sy, {
        className: j.loadingIndicator,
        ownerState: p,
        children: F
      })
    })
  ) : null;
  return /* @__PURE__ */ O.jsxs(ny, {
    ownerState: p,
    className: ne(n.className, j.root, d, A),
    component: u,
    disabled: m || P,
    focusRipple: !g,
    focusVisibleClassName: ne(j.focusVisible, f),
    ref: r,
    type: k,
    id: P ? I : w,
    ...M,
    classes: j,
    children: [N, v !== "end" && V, c, v === "end" && V, B]
  });
});
process.env.NODE_ENV !== "production" && (Qc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * Element placed after the children.
   */
  endIcon: i.node,
  /**
   * @ignore
   */
  focusVisibleClassName: i.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: i.string,
  /**
   * @ignore
   */
  id: i.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: i.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: i.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: i.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium", "large"]), i.string]),
  /**
   * Element placed before the children.
   */
  startIcon: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @ignore
   */
  type: i.oneOfType([i.oneOf(["button", "reset", "submit"]), i.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: i.oneOfType([i.oneOf(["contained", "outlined", "text"]), i.string])
});
var Mo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var fa;
function ay() {
  return fa || (fa = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", a = 0; a < arguments.length; a++) {
          var c = arguments[a];
          c && (s = o(s, n(c)));
        }
        return s;
      }
      function n(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return r.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var a = "";
        for (var c in s)
          t.call(s, c) && s[c] && (a = o(a, c));
        return a;
      }
      function o(s, a) {
        return a ? s ? s + " " + a : s + a : s;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(Mo)), Mo.exports;
}
var cy = ay();
const Gt = /* @__PURE__ */ ba(cy);
function el(e) {
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
function Jo({
  children: e,
  circle: t,
  block: r,
  inverted: n,
  loading: o,
  clearBlock: s,
  color: a,
  className: c,
  sx: l,
  ...u
}) {
  const d = el(a), m = {
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
  return /* @__PURE__ */ O.jsx(
    Qc,
    {
      className: Gt(
        "br-button",
        d,
        {
          circle: t,
          block: r,
          inverted: n,
          loading: o,
          [`auto-${s}`]: !!s
        },
        c
      ),
      sx: { ...m, ...l },
      ...u,
      children: e
    }
  );
}
function ob({
  name: e,
  src: t,
  alt: r,
  menuItems: n = [],
  onNavigate: o,
  size: s = "medium",
  color: a = "default",
  className: c = ""
}) {
  const [l, u] = Ir(null), d = !!l, m = (h) => {
    n.length > 0 && u(h.currentTarget);
  }, b = () => {
    u(null);
  }, g = (h) => {
    o?.(h), b();
  }, y = { small: 32, medium: 40, large: 48 }, f = {
    default: "var(--color-primary-lighten-01)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)"
  }, x = y[s] ?? 40, w = {
    width: x,
    height: x,
    bgcolor: f[a] ?? f.default,
    fontSize: x * 0.5
  }, P = {
    p: "var(--spacing-scale-base)",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "var(--text-color-primary)",
    minHeight: x + 16,
    // altura mínima baseada no avatar + padding
    fontSize: s === "small" ? "0.875rem" : s === "large" ? "1.125rem" : "1rem"
  }, v = e ? ((h) => h.split(" ").map((C) => C[0]).join("").toUpperCase().slice(0, 2))(e) : /* @__PURE__ */ O.jsx(Kc, { fontSize: "inherit" });
  return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    /* @__PURE__ */ O.jsxs(
      Jo,
      {
        className: c,
        onClick: m,
        "aria-controls": d ? "avatar-menu" : void 0,
        "aria-haspopup": n.length > 0,
        "aria-expanded": d,
        sx: P,
        children: [
          /* @__PURE__ */ O.jsx(Ic, { src: t, alt: r || e, sx: w, children: v }),
          /* @__PURE__ */ O.jsxs("span", { children: [
            "Olá, ",
            /* @__PURE__ */ O.jsx("strong", { children: e || "Usuário" })
          ] }),
          n.length > 0 && (d ? /* @__PURE__ */ O.jsx(ey, {}) : /* @__PURE__ */ O.jsx(Qg, {}))
        ]
      }
    ),
    /* @__PURE__ */ O.jsx(
      Yc,
      {
        id: "avatar-menu",
        anchorEl: l,
        open: d,
        onClose: b,
        slotProps: {
          list: { "aria-labelledby": "avatar-button" }
        },
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
        children: n.map((h) => /* @__PURE__ */ O.jsxs(Gc, { onClick: () => h.href && g(h.href), children: [
          h.icon && /* @__PURE__ */ O.jsx(ji, { sx: { mr: 1.5 }, children: h.icon }),
          h.label
        ] }, h.href))
      }
    )
  ] });
}
function ib({ items: e, onNavigate: t, className: r, ...n }) {
  const o = (s, a) => {
    s.preventDefault(), t(a);
  };
  return /* @__PURE__ */ O.jsx("nav", { className: Gt("br-breadcrumb", r), "aria-label": "Breadcrumb", ...n, children: /* @__PURE__ */ O.jsx("ul", { className: "crumb-list", children: e.map((s, a) => /* @__PURE__ */ O.jsx("li", { className: "crumb", children: s.href ? /* @__PURE__ */ O.jsx(
    "a",
    {
      className: "crumb-link",
      href: s.href,
      onClick: (c) => o(c, s.href),
      children: s.label
    }
  ) : /* @__PURE__ */ O.jsx("span", { className: "crumb-active", "aria-current": "page", children: s.label }) }, a)) }) });
}
function ly({
  id: e,
  label: t,
  status: r,
  indeterminate: n = !1,
  hiddenLabel: o = !1,
  className: s,
  disabled: a,
  ...c
}) {
  const l = $l(null);
  nr(() => {
    l.current && (l.current.indeterminate = n);
  }, [n]);
  const u = Gt(
    "br-checkbox",
    r,
    {
      disabled: a,
      "hidden-label": o
    },
    s
  );
  return /* @__PURE__ */ O.jsxs("div", { className: u, children: [
    /* @__PURE__ */ O.jsx("input", { ref: l, id: e, type: "checkbox", disabled: a, ...c }),
    /* @__PURE__ */ O.jsx("label", { htmlFor: e, children: t })
  ] });
}
const Br = Wf({
  createStyledComponent: re("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => ke({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Br.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: i.oneOfType([i.oneOf(["column-reverse", "column", "row-reverse", "row"]), i.arrayOf(i.oneOf(["column-reverse", "column", "row-reverse", "row"])), i.object]),
  /**
   * Add an element between each child.
   */
  divider: i.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: i.bool
});
var uy = (e) => e.type === "checkbox", Nr = (e) => e instanceof Date, _i = (e) => e == null;
const tl = (e) => typeof e == "object";
var Kt = (e) => !_i(e) && !Array.isArray(e) && tl(e) && !Nr(e), dy = (e) => Kt(e) && e.target ? uy(e.target) ? e.target.checked : e.target.value : e, fy = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, py = (e, t) => e.has(fy(t)), my = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Kt(t) && t.hasOwnProperty("isPrototypeOf");
}, hy = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function rl(e) {
  let t;
  const r = Array.isArray(e), n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(hy && (e instanceof Blob || n)) && (r || Kt(e)))
    if (t = r ? [] : Object.create(Object.getPrototypeOf(e)), !r && !my(e))
      t = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (t[o] = rl(e[o]));
  else
    return e;
  return t;
}
var nl = (e) => /^\w*$/.test(e), Zo = (e) => e === void 0, gy = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ol = (e) => gy(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ue = (e, t, r) => {
  if (!t || !Kt(e))
    return r;
  const n = (nl(t) ? [t] : ol(t)).reduce((o, s) => _i(o) ? o : o[s], e);
  return Zo(n) || n === e ? Zo(e[t]) ? r : e[t] : n;
}, $o = (e) => typeof e == "boolean", pa = (e, t, r) => {
  let n = -1;
  const o = nl(t) ? [t] : ol(t), s = o.length, a = s - 1;
  for (; ++n < s; ) {
    const c = o[n];
    let l = r;
    if (n !== a) {
      const u = e[c];
      l = Kt(u) || Array.isArray(u) ? u : isNaN(+o[n + 1]) ? {} : [];
    }
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return;
    e[c] = l, e = e[c];
  }
};
const ma = {
  BLUR: "blur",
  CHANGE: "change"
}, ha = {
  all: "all"
}, il = oe.createContext(null);
il.displayName = "HookFormContext";
const Di = () => oe.useContext(il);
var yy = (e, t, r, n = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(o, s, {
      get: () => {
        const a = s;
        return t._proxyFormState[a] !== ha.all && (t._proxyFormState[a] = !n || ha.all), r && (r[a] = !0), e[a];
      }
    });
  return o;
};
const sl = typeof window < "u" ? oe.useLayoutEffect : oe.useEffect;
function by(e) {
  const t = Di(), { control: r = t.control, disabled: n, name: o, exact: s } = e || {}, [a, c] = oe.useState(r._formState), l = oe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return sl(() => r._subscribe({
    name: o,
    formState: l.current,
    exact: s,
    callback: (u) => {
      !n && c({
        ...r._formState,
        ...u
      });
    }
  }), [o, n, s]), oe.useEffect(() => {
    l.current.isValid && r._setValid(!0);
  }, [r]), oe.useMemo(() => yy(a, r, l.current, !1), [a, r]);
}
var vy = (e) => typeof e == "string", xy = (e, t, r, n, o) => vy(e) ? Ue(r, e, o) : Array.isArray(e) ? e.map((s) => Ue(r, s)) : r, ga = (e) => _i(e) || !tl(e);
function al(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (ga(e) || ga(t))
    return e === t;
  if (Nr(e) && Nr(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length)
    return !1;
  if (r.has(e) || r.has(t))
    return !0;
  r.add(e), r.add(t);
  for (const s of n) {
    const a = e[s];
    if (!o.includes(s))
      return !1;
    if (s !== "ref") {
      const c = t[s];
      if (Nr(a) && Nr(c) || Kt(a) && Kt(c) || Array.isArray(a) && Array.isArray(c) ? !al(a, c, r) : a !== c)
        return !1;
    }
  }
  return !0;
}
function Sy(e) {
  const t = Di(), { control: r = t.control, name: n, defaultValue: o, disabled: s, exact: a, compute: c } = e || {}, l = oe.useRef(o), u = oe.useRef(c), d = oe.useRef(void 0);
  u.current = c;
  const m = oe.useMemo(() => r._getWatch(n, l.current), [r, n]), [b, g] = oe.useState(u.current ? u.current(m) : m);
  return sl(() => r._subscribe({
    name: n,
    formState: {
      values: !0
    },
    exact: a,
    callback: (y) => {
      if (!s) {
        const f = xy(n, r._names, y.values || r._formValues, !1, l.current);
        if (u.current) {
          const x = u.current(f);
          al(x, d.current) || (g(x), d.current = x);
        } else
          g(f);
      }
    }
  }), [r, s, n, a]), oe.useEffect(() => r._removeUnmounted()), b;
}
function Ey(e) {
  const t = Di(), { name: r, disabled: n, control: o = t.control, shouldUnregister: s, defaultValue: a } = e, c = py(o._names.array, r), l = oe.useMemo(() => Ue(o._formValues, r, Ue(o._defaultValues, r, a)), [o, r, a]), u = Sy({
    control: o,
    name: r,
    defaultValue: l,
    exact: !0
  }), d = by({
    control: o,
    name: r,
    exact: !0
  }), m = oe.useRef(e), b = oe.useRef(o.register(r, {
    ...e.rules,
    value: u,
    ...$o(e.disabled) ? { disabled: e.disabled } : {}
  }));
  m.current = e;
  const g = oe.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Ue(d.errors, r)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Ue(d.dirtyFields, r)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Ue(d.touchedFields, r)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Ue(d.validatingFields, r)
    },
    error: {
      enumerable: !0,
      get: () => Ue(d.errors, r)
    }
  }), [d, r]), y = oe.useCallback((P) => b.current.onChange({
    target: {
      value: dy(P),
      name: r
    },
    type: ma.CHANGE
  }), [r]), f = oe.useCallback(() => b.current.onBlur({
    target: {
      value: Ue(o._formValues, r),
      name: r
    },
    type: ma.BLUR
  }), [r, o._formValues]), x = oe.useCallback((P) => {
    const E = Ue(o._fields, r);
    E && P && (E._f.ref = {
      focus: () => P.focus && P.focus(),
      select: () => P.select && P.select(),
      setCustomValidity: (v) => P.setCustomValidity(v),
      reportValidity: () => P.reportValidity()
    });
  }, [o._fields, r]), w = oe.useMemo(() => ({
    name: r,
    value: u,
    ...$o(n) || d.disabled ? { disabled: d.disabled || n } : {},
    onChange: y,
    onBlur: f,
    ref: x
  }), [r, n, d.disabled, y, f, x, u]);
  return oe.useEffect(() => {
    const P = o._options.shouldUnregister || s;
    o.register(r, {
      ...m.current.rules,
      ...$o(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const E = (v, h) => {
      const C = Ue(o._fields, v);
      C && C._f && (C._f.mount = h);
    };
    if (E(r, !0), P) {
      const v = rl(Ue(o._options.defaultValues, r));
      pa(o._defaultValues, r, v), Zo(Ue(o._formValues, r)) && pa(o._formValues, r, v);
    }
    return !c && o.register(r), () => {
      (c ? P && !o._state.action : P) ? o.unregister(r) : E(r, !1);
    };
  }, [r, o, c, s]), oe.useEffect(() => {
    o._setDisabledField({
      disabled: n,
      name: r
    });
  }, [n, r, o]), oe.useMemo(() => ({
    field: w,
    formState: d,
    fieldState: g
  }), [w, d, g]);
}
const cl = (e) => e.render(Ey(e)), Ty = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), wy = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), Cy = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
}), "Lock"), Oy = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), "Visibility"), Py = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), "VisibilityOff"), ll = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"
}), "Error"), Ry = {
  None: null,
  Person: /* @__PURE__ */ O.jsx(Kc, {}),
  Search: /* @__PURE__ */ O.jsx(Ty, {}),
  Email: /* @__PURE__ */ O.jsx(wy, {}),
  Lock: /* @__PURE__ */ O.jsx(Cy, {}),
  Visibility: /* @__PURE__ */ O.jsx(Oy, {}),
  VisibilityOff: /* @__PURE__ */ O.jsx(Py, {}),
  Error: /* @__PURE__ */ O.jsx(ll, { fontSize: "small", style: { verticalAlign: "middle", marginRight: "4px" } })
};
function ky({
  name: e,
  control: t,
  rules: r,
  required: n,
  ...o
}) {
  const s = n ? {
    ...r,
    required: typeof n == "string" ? n : "Campo obrigatório"
  } : r;
  return /* @__PURE__ */ O.jsx(
    cl,
    {
      name: e,
      control: t,
      rules: s,
      render: ({ field: a, fieldState: c }) => /* @__PURE__ */ O.jsxs(Br, { children: [
        /* @__PURE__ */ O.jsx(
          ly,
          {
            ...o,
            id: e,
            ...a,
            checked: !!a.value,
            status: c.error ? "invalid" : o.status
          }
        ),
        c.error && /* @__PURE__ */ O.jsxs("span", { className: Gt("feedback", "invalid"), role: "alert", children: [
          Ry.Error,
          c.error.message
        ] })
      ] })
    }
  );
}
ky.displayName = "GovBRFormCheckbox";
const My = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}), "Info"), $y = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"
}), "Warning"), ul = ({
  govbrSize: e = "medium",
  status: t = void 0,
  error: r = !1,
  clearBlock: n,
  id: o,
  label: s = "",
  feedbackMessage: a = "",
  helperText: c = "",
  disabled: l = !1,
  highlight: u = !1,
  inline: d,
  startIcon: m,
  endButtonIcon: b,
  onEndButtonClick: g,
  className: y = "br-input",
  placeholder: f,
  ...x
}) => {
  const w = el(), P = o ? `${o}-feedback` : void 0, E = r ? "danger" : t, v = {
    success: /* @__PURE__ */ O.jsx(ac, { fontSize: "small" }),
    danger: /* @__PURE__ */ O.jsx(ll, { fontSize: "small" }),
    info: /* @__PURE__ */ O.jsx(My, { fontSize: "small" }),
    warning: /* @__PURE__ */ O.jsx($y, { fontSize: "small" })
  };
  return /* @__PURE__ */ O.jsxs(
    "div",
    {
      className: Gt(
        "br-input",
        e,
        E,
        w,
        { [`auto-${n}`]: !!n },
        { "input-highlight": u, "input-inline": d },
        y
      ),
      children: [
        d ? /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
          /* @__PURE__ */ O.jsx("div", { className: "input-label", children: /* @__PURE__ */ O.jsx("label", { htmlFor: o, className: "text-nowrap", children: s }) }),
          /* @__PURE__ */ O.jsx("div", { className: "input-content", children: /* @__PURE__ */ O.jsxs("div", { className: "input-group", children: [
            m && /* @__PURE__ */ O.jsx("div", { className: "input-icon", children: m }),
            /* @__PURE__ */ O.jsx(
              "input",
              {
                id: o,
                placeholder: f,
                disabled: l,
                "aria-describedby": P,
                className: y,
                ...x
              }
            ),
            b && /* @__PURE__ */ O.jsx(Jo, { circle: !0, onClick: g, children: b })
          ] }) })
        ] }) : /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
          s && /* @__PURE__ */ O.jsx("label", { htmlFor: o, children: s }),
          /* @__PURE__ */ O.jsxs("div", { className: "input-group", children: [
            m && /* @__PURE__ */ O.jsx("div", { className: "input-icon", children: m }),
            /* @__PURE__ */ O.jsx(
              "input",
              {
                id: o,
                placeholder: f,
                disabled: l,
                "aria-describedby": P,
                className: y,
                ...x
              }
            ),
            b && /* @__PURE__ */ O.jsx(Jo, { circle: !0, onClick: g, children: b })
          ] })
        ] }),
        (a || c) && /* @__PURE__ */ O.jsxs(
          "span",
          {
            className: Gt("feedback", E),
            role: "alert",
            id: P,
            style: {
              display: "inline-block",
              width: "auto",
              marginTop: "0.25rem",
              padding: "0.2rem var(--spacing-scale-2x)",
              lineHeight: "1.2"
            },
            children: [
              E && v[E],
              " ",
              a ?? c
            ]
          }
        )
      ]
    }
  );
};
ul.displayName = "GovBRInput";
function sb({
  name: e,
  control: t,
  rules: r,
  required: n,
  label: o,
  ...s
}) {
  return /* @__PURE__ */ O.jsx(
    cl,
    {
      name: e,
      control: t,
      rules: r,
      render: ({ field: a, fieldState: c }) => /* @__PURE__ */ O.jsx(
        ul,
        {
          ...s,
          ...a,
          label: o,
          required: n,
          status: c.error ? "danger" : void 0,
          feedbackMessage: c.error?.message
        }
      )
    }
  );
}
const dl = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (dl.displayName = "FormControlContext");
function fl() {
  return T.useContext(dl);
}
function Ny(e) {
  return Oe("PrivateSwitchBase", e);
}
Ee("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Iy = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: n,
    edge: o
  } = e, s = {
    root: ["root", r && "checked", n && "disabled", o && `edge${ee(o)}`],
    input: ["input"]
  };
  return $e(s, Ny, t);
}, Ay = re(tn, {
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
}), jy = re("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: Xt
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
}), pl = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    autoFocus: n,
    checked: o,
    checkedIcon: s,
    defaultChecked: a,
    disabled: c,
    disableFocusRipple: l = !1,
    edge: u = !1,
    icon: d,
    id: m,
    inputProps: b,
    inputRef: g,
    name: y,
    onBlur: f,
    onChange: x,
    onFocus: w,
    readOnly: P,
    required: E = !1,
    tabIndex: v,
    type: h,
    value: C,
    slots: k = {},
    slotProps: $ = {},
    ...M
  } = t, [I, F] = sc({
    controlled: o,
    default: !!a,
    name: "SwitchBase",
    state: "checked"
  }), p = fl(), j = (z) => {
    w && w(z), p && p.onFocus && p.onFocus(z);
  }, N = (z) => {
    f && f(z), p && p.onBlur && p.onBlur(z);
  }, B = (z) => {
    if (z.nativeEvent.defaultPrevented)
      return;
    const Y = z.target.checked;
    F(Y), x && x(z, Y);
  };
  let A = c;
  p && typeof A > "u" && (A = p.disabled);
  const V = h === "checkbox" || h === "radio", X = {
    ...t,
    checked: I,
    disabled: A,
    disableFocusRipple: l,
    edge: u
  }, H = Iy(X), S = {
    slots: k,
    slotProps: {
      input: b,
      ...$
    }
  }, [_, L] = Ae("root", {
    ref: r,
    elementType: Ay,
    className: H.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...S,
      component: "span",
      ...M
    },
    getSlotProps: (z) => ({
      ...z,
      onFocus: (Y) => {
        z.onFocus?.(Y), j(Y);
      },
      onBlur: (Y) => {
        z.onBlur?.(Y), N(Y);
      }
    }),
    ownerState: X,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !l,
      disabled: A,
      role: void 0,
      tabIndex: null
    }
  }), [W, U] = Ae("input", {
    ref: g,
    elementType: jy,
    className: H.input,
    externalForwardedProps: S,
    getSlotProps: (z) => ({
      ...z,
      onChange: (Y) => {
        z.onChange?.(Y), B(Y);
      }
    }),
    ownerState: X,
    additionalProps: {
      autoFocus: n,
      checked: o,
      defaultChecked: a,
      disabled: A,
      id: V ? m : void 0,
      name: y,
      readOnly: P,
      required: E,
      tabIndex: v,
      type: h,
      ...h === "checkbox" && C === void 0 ? {} : {
        value: C
      }
    }
  });
  return /* @__PURE__ */ O.jsxs(_, {
    ...L,
    children: [/* @__PURE__ */ O.jsx(W, {
      ...U
    }), I ? s : d]
  });
});
process.env.NODE_ENV !== "production" && (pl.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: i.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: i.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * @ignore
   */
  defaultChecked: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: i.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: i.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: gr,
  /*
   * @ignore
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: i.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    input: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * The input component prop `type`.
   */
  type: i.string.isRequired,
  /**
   * The value of the component.
   */
  value: i.any
});
const _y = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), Dy = _e(/* @__PURE__ */ O.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), By = re("span", {
  name: "MuiRadioButtonIcon",
  shouldForwardProp: Xt
})({
  position: "relative",
  display: "flex"
}), Fy = re(_y, {
  name: "MuiRadioButtonIcon"
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), Ly = re(Dy, {
  name: "MuiRadioButtonIcon"
})(Fe(({
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
function Bi(e) {
  const {
    checked: t = !1,
    classes: r = {},
    fontSize: n
  } = e, o = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ O.jsxs(By, {
    className: r.root,
    ownerState: o,
    children: [/* @__PURE__ */ O.jsx(Fy, {
      fontSize: n,
      className: r.background,
      ownerState: o
    }), /* @__PURE__ */ O.jsx(Ly, {
      fontSize: n,
      className: r.dot,
      ownerState: o
    })]
  });
}
process.env.NODE_ENV !== "production" && (Bi.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: i.oneOf(["small", "medium"])
});
const ml = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (ml.displayName = "RadioGroupContext");
function zy() {
  return T.useContext(ml);
}
function Vy(e) {
  return Oe("MuiRadio", e);
}
const ya = Ee("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), Wy = (e) => {
  const {
    classes: t,
    color: r,
    size: n
  } = e, o = {
    root: ["root", `color${ee(r)}`, n !== "medium" && `size${ee(n)}`]
  };
  return {
    ...t,
    ...$e(o, Vy, t)
  };
}, Uy = re(pl, {
  shouldForwardProp: (e) => Xt(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size !== "medium" && t[`size${ee(r.size)}`], t[`color${ee(r.color)}`]];
  }
})(Fe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${ya.disabled}`]: {
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
  }, ...Object.entries(e.palette).filter(Rt()).map(([t]) => ({
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
  })), ...Object.entries(e.palette).filter(Rt()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${ya.checked}`]: {
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
function Hy(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const qy = /* @__PURE__ */ O.jsx(Bi, {
  checked: !0
}), Yy = /* @__PURE__ */ O.jsx(Bi, {}), hl = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = ke({
    props: t,
    name: "MuiRadio"
  }), {
    checked: o,
    checkedIcon: s = qy,
    color: a = "primary",
    icon: c = Yy,
    name: l,
    onChange: u,
    size: d = "medium",
    className: m,
    disabled: b,
    disableRipple: g = !1,
    slots: y = {},
    slotProps: f = {},
    inputProps: x,
    ...w
  } = n, P = fl();
  let E = b;
  P && typeof E > "u" && (E = P.disabled), E ??= !1;
  const v = {
    ...n,
    disabled: E,
    disableRipple: g,
    color: a,
    size: d
  }, h = Wy(v), C = zy();
  let k = o;
  const $ = No(u, C && C.onChange);
  let M = l;
  C && (typeof k > "u" && (k = Hy(C.value, n.value)), typeof M > "u" && (M = C.name));
  const I = f.input ?? x, [F, p] = Ae("root", {
    ref: r,
    elementType: Uy,
    className: ne(h.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: y,
      slotProps: f,
      ...w
    },
    getSlotProps: (j) => ({
      ...j,
      onChange: (N, ...B) => {
        j.onChange?.(N, ...B), $(N, ...B);
      }
    }),
    ownerState: v,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ T.cloneElement(c, {
        fontSize: c.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ T.cloneElement(s, {
        fontSize: s.props.fontSize ?? d
      }),
      disabled: E,
      name: M,
      checked: k,
      slots: y,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof I == "function" ? I(v) : I
      }
    }
  });
  return /* @__PURE__ */ O.jsx(F, {
    ...p,
    classes: h
  });
});
process.env.NODE_ENV !== "production" && (hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: i.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: i.node,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: gr,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: i.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    input: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: i.any
});
function Gy({
  name: e,
  value: t,
  label: r,
  helpText: n,
  text: o,
  disabled: s,
  checked: a,
  error: c,
  valid: l,
  onChange: u
}) {
  return /* @__PURE__ */ O.jsxs(
    Br,
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
        /* @__PURE__ */ O.jsxs(
          Br,
          {
            sx: {
              // Reset específico para container de labels
              margin: 0,
              padding: 0,
              gap: 0
            },
            children: [
              /* @__PURE__ */ O.jsx(
                Pn,
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
              /* @__PURE__ */ O.jsx(
                Pn,
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
        /* @__PURE__ */ O.jsxs(
          Br,
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
              /* @__PURE__ */ O.jsx(
                hl,
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
                    ...c && {
                      color: "#D04F4F",
                      // var(--danger)
                      "&.Mui-checked": {
                        color: "#D04F4F"
                      }
                    },
                    ...l && !c && {
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
              /* @__PURE__ */ O.jsx(
                Pn,
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
                  children: o
                }
              )
            ]
          }
        )
      ]
    }
  );
}
Gy.displayName = "GovBRRadio";
function Ky({
  variant: e = "internal",
  emphasis: t,
  density: r,
  circle: n = !1,
  block: o = !1,
  inverted: s = !1,
  className: a,
  iconUrl: c,
  ...l
}) {
  const u = Gt(
    "br-sign-in",
    t,
    r,
    {
      circle: n,
      block: o,
      inverted: s
    },
    a
  ), d = () => {
    switch (e) {
      case "external-image":
        return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
          "Entrar com ",
          /* @__PURE__ */ O.jsx(
            "img",
            {
              src: c || "https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png",
              alt: "gov.br"
            }
          )
        ] });
      case "external-text":
        return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
          "Entrar com ",
          /* @__PURE__ */ O.jsx("span", { className: "text-black", children: "gov.br" })
        ] });
      case "internal":
      default:
        return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
          /* @__PURE__ */ O.jsx("i", { className: "fas fa-user", "aria-hidden": "true" }),
          !n && "Entrar"
        ] });
    }
  };
  return /* @__PURE__ */ O.jsx("button", { type: "button", className: u, ...l, children: d() });
}
Ky.displayName = "GovBRSignIn";
let Qo = Ei({
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
Qo = Wh(Qo);
const ei = typeof ic({}) == "function", Xy = (e, t) => ({
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
}), Jy = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), gl = (e, t = !1) => {
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([s, a]) => {
    const c = e.getColorSchemeSelector(s);
    c.startsWith("@") ? r[c] = {
      ":root": {
        colorScheme: a.palette?.mode
      }
    } : r[c.replace(/\s*&/, "")] = {
      colorScheme: a.palette?.mode
    };
  });
  let n = {
    html: Xy(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...Jy(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...r
  };
  const o = e.components?.MuiCssBaseline?.styleOverrides;
  return o && (n = [n, o]), n;
}, Rn = "mui-ecs", Zy = (e) => {
  const t = gl(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${Rn})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, o]) => {
    const s = e.getColorSchemeSelector(n);
    s.startsWith("@") ? r[s] = {
      [`:root:not(:has(.${Rn}))`]: {
        colorScheme: o.palette?.mode
      }
    } : r[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Rn}))`]: {
        colorScheme: o.palette?.mode
      }
    };
  }), t;
}, Qy = ic(ei ? ({
  theme: e,
  enableColorScheme: t
}) => gl(e, t) : ({
  theme: e
}) => Zy(e));
function yl(e) {
  const t = ke({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ O.jsxs(T.Fragment, {
    children: [ei && /* @__PURE__ */ O.jsx(Qy, {
      enableColorScheme: n
    }), !ei && !n && /* @__PURE__ */ O.jsx("span", {
      className: Rn,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (yl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: i.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: i.bool
});
const eb = Nl({
  mode: "theme",
  toggle: () => {
  }
});
function ab({ children: e }) {
  const [t, r] = Ir("theme"), n = Il(
    () => ({
      mode: t,
      toggle: () => r((o) => o === "theme" ? "css" : "theme")
    }),
    [t]
  );
  return /* @__PURE__ */ O.jsx(eb.Provider, { value: n, children: /* @__PURE__ */ O.jsxs(Yh, { theme: Qo, children: [
    /* @__PURE__ */ O.jsx(yl, {}),
    e
  ] }) });
}
export {
  nb as AutoSyncButton,
  ob as GovBRAvatar,
  ib as GovBRBreadcrumb,
  Jo as GovBRButton,
  ly as GovBRCheckbox,
  ky as GovBRFormCheckbox,
  sb as GovBRFormInput,
  ul as GovBRInput,
  Gy as GovBRRadio,
  Ky as GovBRSignIn,
  ab as GovBRThemeProvider,
  Qo as govbrTheme,
  Ry as iconMap,
  el as mapMuiColorToGovbrClass
};
