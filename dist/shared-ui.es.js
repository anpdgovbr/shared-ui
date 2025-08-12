import * as T from "react";
import oe, { forwardRef as jl, useContext as _l, isValidElement as Tn, cloneElement as wn, Children as Dl, useState as _r, useCallback as Ui, useEffect as sr, useRef as Bl, createContext as Fl, useMemo as Ll } from "react";
import * as zl from "react-dom";
import un from "react-dom";
function Ta(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dn = { exports: {} }, Er = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function Vl() {
  if (Hi) return Er;
  Hi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var c in i)
        c !== "key" && (s[c] = i[c]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return Er.Fragment = t, Er.jsx = r, Er.jsxs = r, Er;
}
var Tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qi;
function Wl() {
  return qi || (qi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === I ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case f:
          return "Fragment";
        case w:
          return "Profiler";
        case x:
          return "StrictMode";
        case h:
          return "Suspense";
        case O:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case b:
            return "Portal";
          case S:
            return (E.displayName || "Context") + ".Provider";
          case P:
            return (E._context.displayName || "Context") + ".Consumer";
          case v:
            var D = E.render;
            return E = E.displayName, E || (E = D.displayName || D.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case k:
            return D = E.displayName || null, D !== null ? D : e(E.type) || "Memo";
          case N:
            D = E._payload, E = E._init;
            try {
              return e(E(D));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function r(E) {
      try {
        t(E);
        var D = !1;
      } catch {
        D = !0;
      }
      if (D) {
        D = console;
        var L = D.error, W = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return L.call(
          D,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), t(E);
      }
    }
    function n(E) {
      if (E === f) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === N)
        return "<...>";
      try {
        var D = e(E);
        return D ? "<" + D + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var E = B.A;
      return E === null ? null : E.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(E) {
      if (p.call(E, "key")) {
        var D = Object.getOwnPropertyDescriptor(E, "key").get;
        if (D && D.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function c(E, D) {
      function L() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          D
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: L,
        configurable: !0
      });
    }
    function l() {
      var E = e(this.type);
      return _[E] || (_[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function u(E, D, L, W, U, z, Y, K) {
      return L = z.ref, E = {
        $$typeof: g,
        type: E,
        key: D,
        props: z,
        _owner: U
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function d(E, D, L, W, U, z, Y, K) {
      var G = D.children;
      if (G !== void 0)
        if (W)
          if (A(G)) {
            for (W = 0; W < G.length; W++)
              m(G[W]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(G);
      if (p.call(D, "key")) {
        G = e(E);
        var Z = Object.keys(D).filter(function(J) {
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
      if (G = null, L !== void 0 && (r(L), G = "" + L), a(D) && (r(D.key), G = "" + D.key), "key" in D) {
        L = {};
        for (var q in D)
          q !== "key" && (L[q] = D[q]);
      } else L = D;
      return G && c(
        L,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), u(
        E,
        G,
        z,
        U,
        i(),
        L,
        Y,
        K
      );
    }
    function m(E) {
      typeof E == "object" && E !== null && E.$$typeof === g && E._store && (E._store.validated = 1);
    }
    var y = oe, g = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), S = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), B = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = Object.prototype.hasOwnProperty, A = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var j, _ = {}, V = y.react_stack_bottom_frame.bind(
      y,
      s
    )(), X = M(n(s)), H = {};
    Tr.Fragment = f, Tr.jsx = function(E, D, L, W, U) {
      var z = 1e4 > B.recentlyCreatedOwnerStacks++;
      return d(
        E,
        D,
        L,
        !1,
        W,
        U,
        z ? Error("react-stack-top-frame") : V,
        z ? M(n(E)) : X
      );
    }, Tr.jsxs = function(E, D, L, W, U) {
      var z = 1e4 > B.recentlyCreatedOwnerStacks++;
      return d(
        E,
        D,
        L,
        !0,
        W,
        U,
        z ? Error("react-stack-top-frame") : V,
        z ? M(n(E)) : X
      );
    };
  }()), Tr;
}
var Yi;
function Ul() {
  return Yi || (Yi = 1, process.env.NODE_ENV === "production" ? dn.exports = Vl() : dn.exports = Wl()), dn.exports;
}
var C = Ul();
const Gi = (e) => e, Hl = () => {
  let e = Gi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Gi;
    }
  };
}, wa = Hl();
function vt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function ee(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : vt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _o(...e) {
  return e.reduce((t, r) => r == null ? t : function(...i) {
    t.apply(this, i), r.apply(this, i);
  }, () => {
  });
}
var fn = { exports: {} }, pn = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function ql() {
  if (Ki) return le;
  Ki = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function S(h) {
    if (typeof h == "object" && h !== null) {
      var O = h.$$typeof;
      switch (O) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case n:
            case s:
            case i:
            case m:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case b:
                case g:
                case a:
                  return h;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function v(h) {
    return S(h) === u;
  }
  return le.AsyncMode = l, le.ConcurrentMode = u, le.ContextConsumer = c, le.ContextProvider = a, le.Element = t, le.ForwardRef = d, le.Fragment = n, le.Lazy = b, le.Memo = g, le.Portal = r, le.Profiler = s, le.StrictMode = i, le.Suspense = m, le.isAsyncMode = function(h) {
    return v(h) || S(h) === l;
  }, le.isConcurrentMode = v, le.isContextConsumer = function(h) {
    return S(h) === c;
  }, le.isContextProvider = function(h) {
    return S(h) === a;
  }, le.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, le.isForwardRef = function(h) {
    return S(h) === d;
  }, le.isFragment = function(h) {
    return S(h) === n;
  }, le.isLazy = function(h) {
    return S(h) === b;
  }, le.isMemo = function(h) {
    return S(h) === g;
  }, le.isPortal = function(h) {
    return S(h) === r;
  }, le.isProfiler = function(h) {
    return S(h) === s;
  }, le.isStrictMode = function(h) {
    return S(h) === i;
  }, le.isSuspense = function(h) {
    return S(h) === m;
  }, le.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === s || h === i || h === m || h === y || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === x || h.$$typeof === w || h.$$typeof === P || h.$$typeof === f);
  }, le.typeOf = S, le;
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
var Xi;
function Yl() {
  return Xi || (Xi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function S(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === u || R === s || R === i || R === m || R === y || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === g || R.$$typeof === a || R.$$typeof === c || R.$$typeof === d || R.$$typeof === x || R.$$typeof === w || R.$$typeof === P || R.$$typeof === f);
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
              case i:
              case m:
                return se;
              default:
                var Se = se && se.$$typeof;
                switch (Se) {
                  case c:
                  case d:
                  case b:
                  case g:
                  case a:
                    return Se;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var h = l, O = u, k = c, N = a, $ = t, I = d, B = n, p = b, A = g, M = r, j = s, _ = i, V = m, X = !1;
    function H(R) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(R) || v(R) === l;
    }
    function E(R) {
      return v(R) === u;
    }
    function D(R) {
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
      return v(R) === b;
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
      return v(R) === i;
    }
    function J(R) {
      return v(R) === m;
    }
    ue.AsyncMode = h, ue.ConcurrentMode = O, ue.ContextConsumer = k, ue.ContextProvider = N, ue.Element = $, ue.ForwardRef = I, ue.Fragment = B, ue.Lazy = p, ue.Memo = A, ue.Portal = M, ue.Profiler = j, ue.StrictMode = _, ue.Suspense = V, ue.isAsyncMode = H, ue.isConcurrentMode = E, ue.isContextConsumer = D, ue.isContextProvider = L, ue.isElement = W, ue.isForwardRef = U, ue.isFragment = z, ue.isLazy = Y, ue.isMemo = K, ue.isPortal = G, ue.isProfiler = Z, ue.isStrictMode = q, ue.isSuspense = J, ue.isValidElementType = S, ue.typeOf = v;
  }()), ue;
}
var Ji;
function Ca() {
  return Ji || (Ji = 1, process.env.NODE_ENV === "production" ? pn.exports = ql() : pn.exports = Yl()), pn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var yo, Zi;
function Gl() {
  if (Zi) return yo;
  Zi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
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
  return yo = i() ? Object.assign : function(s, a) {
    for (var c, l = n(s), u, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var m in c)
        t.call(c, m) && (l[m] = c[m]);
      if (e) {
        u = e(c);
        for (var y = 0; y < u.length; y++)
          r.call(c, u[y]) && (l[u[y]] = c[u[y]]);
      }
    }
    return l;
  }, yo;
}
var bo, Qi;
function ii() {
  if (Qi) return bo;
  Qi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return bo = e, bo;
}
var vo, es;
function Oa() {
  return es || (es = 1, vo = Function.call.bind(Object.prototype.hasOwnProperty)), vo;
}
var xo, ts;
function Kl() {
  if (ts) return xo;
  ts = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ii(), r = {}, n = /* @__PURE__ */ Oa();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (n(s, d)) {
          var m;
          try {
            if (typeof s[d] != "function") {
              var y = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            m = s[d](a, d, l, c, null, t);
          } catch (b) {
            m = b;
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
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, xo = i, xo;
}
var So, rs;
function Xl() {
  if (rs) return So;
  rs = 1;
  var e = Ca(), t = Gl(), r = /* @__PURE__ */ ii(), n = /* @__PURE__ */ Oa(), i = /* @__PURE__ */ Kl(), s = function() {
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
  return So = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(E) {
      var D = E && (u && E[u] || E[d]);
      if (typeof D == "function")
        return D;
    }
    var y = "<<anonymous>>", g = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: P(),
      arrayOf: S,
      element: v(),
      elementType: h(),
      instanceOf: O,
      node: I(),
      objectOf: N,
      oneOf: k,
      oneOfType: $,
      shape: p,
      exact: A
    };
    function b(E, D) {
      return E === D ? E !== 0 || 1 / E === 1 / D : E !== E && D !== D;
    }
    function f(E, D) {
      this.message = E, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function x(E) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, L = 0;
      function W(z, Y, K, G, Z, q, J) {
        if (G = G || y, q = q || K, J !== r) {
          if (l) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = G + ":" + K;
            !D[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), D[ie] = !0, L++);
          }
        }
        return Y[K] == null ? z ? Y[K] === null ? new f("The " + Z + " `" + q + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new f("The " + Z + " `" + q + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : E(Y, K, G, Z, q);
      }
      var U = W.bind(null, !1);
      return U.isRequired = W.bind(null, !0), U;
    }
    function w(E) {
      function D(L, W, U, z, Y, K) {
        var G = L[W], Z = _(G);
        if (Z !== E) {
          var q = V(G);
          return new f(
            "Invalid " + z + " `" + Y + "` of type " + ("`" + q + "` supplied to `" + U + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return x(D);
    }
    function P() {
      return x(a);
    }
    function S(E) {
      function D(L, W, U, z, Y) {
        if (typeof E != "function")
          return new f("Property `" + Y + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var K = L[W];
        if (!Array.isArray(K)) {
          var G = _(K);
          return new f("Invalid " + z + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an array."));
        }
        for (var Z = 0; Z < K.length; Z++) {
          var q = E(K, Z, U, z, Y + "[" + Z + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return x(D);
    }
    function v() {
      function E(D, L, W, U, z) {
        var Y = D[L];
        if (!c(Y)) {
          var K = _(Y);
          return new f("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(E);
    }
    function h() {
      function E(D, L, W, U, z) {
        var Y = D[L];
        if (!e.isValidElementType(Y)) {
          var K = _(Y);
          return new f("Invalid " + U + " `" + z + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(E);
    }
    function O(E) {
      function D(L, W, U, z, Y) {
        if (!(L[W] instanceof E)) {
          var K = E.name || y, G = H(L[W]);
          return new f("Invalid " + z + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return x(D);
    }
    function k(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function D(L, W, U, z, Y) {
        for (var K = L[W], G = 0; G < E.length; G++)
          if (b(K, E[G]))
            return null;
        var Z = JSON.stringify(E, function(J, R) {
          var ie = V(R);
          return ie === "symbol" ? String(R) : R;
        });
        return new f("Invalid " + z + " `" + Y + "` of value `" + String(K) + "` " + ("supplied to `" + U + "`, expected one of " + Z + "."));
      }
      return x(D);
    }
    function N(E) {
      function D(L, W, U, z, Y) {
        if (typeof E != "function")
          return new f("Property `" + Y + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var K = L[W], G = _(K);
        if (G !== "object")
          return new f("Invalid " + z + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an object."));
        for (var Z in K)
          if (n(K, Z)) {
            var q = E(K, Z, U, z, Y + "." + Z, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return x(D);
    }
    function $(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var D = 0; D < E.length; D++) {
        var L = E[D];
        if (typeof L != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + X(L) + " at index " + D + "."
          ), a;
      }
      function W(U, z, Y, K, G) {
        for (var Z = [], q = 0; q < E.length; q++) {
          var J = E[q], R = J(U, z, Y, K, G, r);
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
      function E(D, L, W, U, z) {
        return M(D[L]) ? null : new f("Invalid " + U + " `" + z + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return x(E);
    }
    function B(E, D, L, W, U) {
      return new f(
        (E || "React class") + ": " + D + " type `" + L + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function p(E) {
      function D(L, W, U, z, Y) {
        var K = L[W], G = _(K);
        if (G !== "object")
          return new f("Invalid " + z + " `" + Y + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var Z in E) {
          var q = E[Z];
          if (typeof q != "function")
            return B(U, z, Y, Z, V(q));
          var J = q(K, Z, U, z, Y + "." + Z, r);
          if (J)
            return J;
        }
        return null;
      }
      return x(D);
    }
    function A(E) {
      function D(L, W, U, z, Y) {
        var K = L[W], G = _(K);
        if (G !== "object")
          return new f("Invalid " + z + " `" + Y + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        var Z = t({}, L[W], E);
        for (var q in Z) {
          var J = E[q];
          if (n(E, q) && typeof J != "function")
            return B(U, z, Y, q, V(J));
          if (!J)
            return new f(
              "Invalid " + z + " `" + Y + "` key `" + q + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(L[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var R = J(K, q, U, z, Y + "." + q, r);
          if (R)
            return R;
        }
        return null;
      }
      return x(D);
    }
    function M(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(M);
          if (E === null || c(E))
            return !0;
          var D = m(E);
          if (D) {
            var L = D.call(E), W;
            if (D !== E.entries) {
              for (; !(W = L.next()).done; )
                if (!M(W.value))
                  return !1;
            } else
              for (; !(W = L.next()).done; ) {
                var U = W.value;
                if (U && !M(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(E, D) {
      return E === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
    }
    function _(E) {
      var D = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : j(D, E) ? "symbol" : D;
    }
    function V(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var D = _(E);
      if (D === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return D;
    }
    function X(E) {
      var D = V(E);
      switch (D) {
        case "array":
        case "object":
          return "an " + D;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + D;
        default:
          return D;
      }
    }
    function H(E) {
      return !E.constructor || !E.constructor.name ? y : E.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, So;
}
var Eo, ns;
function Jl() {
  if (ns) return Eo;
  ns = 1;
  var e = /* @__PURE__ */ ii();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Eo = function() {
    function n(a, c, l, u, d, m) {
      if (m !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function i() {
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
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Eo;
}
var os;
function Zl() {
  if (os) return fn.exports;
  if (os = 1, process.env.NODE_ENV !== "production") {
    var e = Ca(), t = !0;
    fn.exports = /* @__PURE__ */ Xl()(e.isElement, t);
  } else
    fn.exports = /* @__PURE__ */ Jl()();
  return fn.exports;
}
var Ql = /* @__PURE__ */ Zl();
const o = /* @__PURE__ */ Ta(Ql);
function Pa(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Pa(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ne() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Pa(e)) && (n && (n += " "), n += t);
  return n;
}
function $e(e, t, r = void 0) {
  const n = {};
  for (const i in e) {
    const s = e[i];
    let a = "", c = !0;
    for (let l = 0; l < s.length; l += 1) {
      const u = s[l];
      u && (a += (c === !0 ? "" : " ") + t(u), c = !1, r && r[u] && (a += " " + r[u]));
    }
    n[i] = a;
  }
  return n;
}
var mn = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function eu() {
  if (is) return ge;
  is = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var x = f.$$typeof;
      switch (x) {
        case e:
          switch (f = f.type, f) {
            case r:
            case i:
            case n:
            case l:
            case u:
            case y:
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
  return ge.ContextConsumer = s, ge.ContextProvider = a, ge.Element = e, ge.ForwardRef = c, ge.Fragment = r, ge.Lazy = m, ge.Memo = d, ge.Portal = t, ge.Profiler = i, ge.StrictMode = n, ge.Suspense = l, ge.SuspenseList = u, ge.isContextConsumer = function(f) {
    return b(f) === s;
  }, ge.isContextProvider = function(f) {
    return b(f) === a;
  }, ge.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, ge.isForwardRef = function(f) {
    return b(f) === c;
  }, ge.isFragment = function(f) {
    return b(f) === r;
  }, ge.isLazy = function(f) {
    return b(f) === m;
  }, ge.isMemo = function(f) {
    return b(f) === d;
  }, ge.isPortal = function(f) {
    return b(f) === t;
  }, ge.isProfiler = function(f) {
    return b(f) === i;
  }, ge.isStrictMode = function(f) {
    return b(f) === n;
  }, ge.isSuspense = function(f) {
    return b(f) === l;
  }, ge.isSuspenseList = function(f) {
    return b(f) === u;
  }, ge.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === i || f === n || f === l || f === u || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === d || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === g || f.getModuleId !== void 0);
  }, ge.typeOf = b, ge;
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
var ss;
function tu() {
  return ss || (ss = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var x = f.$$typeof;
        switch (x) {
          case t:
            switch (f = f.type, f) {
              case n:
              case s:
              case i:
              case u:
              case d:
              case g:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case c:
                  case l:
                  case y:
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
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    ye.ContextConsumer = a, ye.ContextProvider = c, ye.Element = t, ye.ForwardRef = l, ye.Fragment = n, ye.Lazy = y, ye.Memo = m, ye.Portal = r, ye.Profiler = s, ye.StrictMode = i, ye.Suspense = u, ye.SuspenseList = d, ye.isContextConsumer = function(f) {
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
      return e(f) === y;
    }, ye.isMemo = function(f) {
      return e(f) === m;
    }, ye.isPortal = function(f) {
      return e(f) === r;
    }, ye.isProfiler = function(f) {
      return e(f) === s;
    }, ye.isStrictMode = function(f) {
      return e(f) === i;
    }, ye.isSuspense = function(f) {
      return e(f) === u;
    }, ye.isSuspenseList = function(f) {
      return e(f) === d;
    }, ye.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === n || f === s || f === i || f === u || f === d || typeof f == "object" && f !== null && (f.$$typeof === y || f.$$typeof === m || f.$$typeof === c || f.$$typeof === a || f.$$typeof === l || f.$$typeof === b || f.getModuleId !== void 0);
    }, ye.typeOf = e;
  }()), ye;
}
var as;
function ru() {
  return as || (as = 1, process.env.NODE_ENV === "production" ? mn.exports = /* @__PURE__ */ eu() : mn.exports = /* @__PURE__ */ tu()), mn.exports;
}
var dr = /* @__PURE__ */ ru();
function dt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ra(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || dr.isValidElementType(e) || !dt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ra(e[r]);
  }), t;
}
function We(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return dt(e) && dt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ T.isValidElement(t[i]) || dr.isValidElementType(t[i]) ? n[i] = t[i] : dt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && dt(e[i]) ? n[i] = We(e[i], t[i], r) : r.clone ? n[i] = dt(t[i]) ? Ra(t[i]) : t[i] : n[i] = t[i];
  }), n;
}
function Dr(e, t) {
  return t ? We(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Mt = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function cs(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, i) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(n.match(s)?.[1] || 0) - +(i.match(s)?.[1] || 0);
  });
  return r.length ? r.reduce((n, i) => {
    const s = t[i];
    return delete n[i], n[i] = s, n;
  }, {
    ...t
  }) : t;
}
function nu(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function ou(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : vt(18, `(${t})`));
    return null;
  }
  const [, n, i] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(i).up(s);
}
function iu(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function r(s, a) {
    s.up = (...c) => t(e.breakpoints.up(...c), a), s.down = (...c) => t(e.breakpoints.down(...c), a), s.between = (...c) => t(e.breakpoints.between(...c), a), s.only = (...c) => t(e.breakpoints.only(...c), a), s.not = (...c) => {
      const l = t(e.breakpoints.not(...c), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, i = (s) => (r(n, s), n);
  return r(i), {
    ...e,
    containerQueries: i
  };
}
const Hn = {
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
}, ls = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Hn[e]}px)`
}, su = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Hn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function at(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || ls;
    return t.reduce((a, c, l) => (a[s.up(s.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || ls;
    return Object.keys(t).reduce((a, c) => {
      if (nu(s.keys, c)) {
        const l = ou(n.containerQueries ? n : su, c);
        l && (a[l] = r(t[c], c));
      } else if (Object.keys(s.values || Hn).includes(c)) {
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
function ka(e = {}) {
  return e.keys?.reduce((r, n) => {
    const i = e.up(n);
    return r[i] = {}, r;
  }, {}) || {};
}
function Do(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function au(e, ...t) {
  const r = ka(e), n = [r, ...t].reduce((i, s) => We(i, s), {});
  return Do(Object.keys(r), n);
}
function cu(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((i, s) => {
    s < e.length && (r[i] = !0);
  }) : n.forEach((i) => {
    e[i] != null && (r[i] = !0);
  }), r;
}
function To({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || cu(e, t), i = Object.keys(n);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, c, l) => (Array.isArray(e) ? (a[c] = e[l] != null ? e[l] : e[s], s = l) : typeof e == "object" ? (a[c] = e[c] != null ? e[c] : e[s], s = c) : a[c] = e, a), {});
}
function qn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function Mn(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = qn(e, r) || n, t && (i = t(i, n, e)), i;
}
function Ne(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = qn(l, n) || {};
    return at(a, c, (m) => {
      let y = Mn(u, i, m);
      return m === y && typeof m == "string" && (y = Mn(u, i, `${t}${m === "default" ? "" : ee(m)}`, m)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Mt
  } : {}, s.filterProps = [t], s;
}
function lu(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const uu = {
  m: "margin",
  p: "padding"
}, du = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, us = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, fu = lu((e) => {
  if (e.length > 2)
    if (us[e])
      e = us[e];
    else
      return [e];
  const [t, r] = e.split(""), n = uu[t], i = du[r] || "";
  return Array.isArray(i) ? i.map((s) => n + s) : [n + i];
}), Yn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Gn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], pu = [...Yn, ...Gn];
function Zr(e, t, r, n) {
  const i = qn(e, t, !0) ?? r;
  return typeof i == "number" || typeof i == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), typeof i == "string" ? i.startsWith("var(") && s === 0 ? 0 : i.startsWith("var(") && s === 1 ? i : `calc(${s} * ${i})` : i * s) : Array.isArray(i) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = i[a];
    return s >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Kn(e) {
  return Zr(e, "spacing", 8, "spacing");
}
function Gt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function mu(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = Gt(t, r), n), {});
}
function hu(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const i = fu(r), s = mu(i, n), a = e[r];
  return at(e, a, s);
}
function $a(e, t) {
  const r = Kn(e.theme);
  return Object.keys(e).map((n) => hu(e, t, n, r)).reduce(Dr, {});
}
function Pe(e) {
  return $a(e, Yn);
}
Pe.propTypes = process.env.NODE_ENV !== "production" ? Yn.reduce((e, t) => (e[t] = Mt, e), {}) : {};
Pe.filterProps = Yn;
function Re(e) {
  return $a(e, Gn);
}
Re.propTypes = process.env.NODE_ENV !== "production" ? Gn.reduce((e, t) => (e[t] = Mt, e), {}) : {};
Re.filterProps = Gn;
process.env.NODE_ENV !== "production" && pu.reduce((e, t) => (e[t] = Mt, e), {});
function Xn(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((s) => {
    n[s] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, s) => t[s] ? Dr(i, t[s](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function tt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function st(e, t) {
  return Ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const gu = st("border", tt), yu = st("borderTop", tt), bu = st("borderRight", tt), vu = st("borderBottom", tt), xu = st("borderLeft", tt), Su = st("borderColor"), Eu = st("borderTopColor"), Tu = st("borderRightColor"), wu = st("borderBottomColor"), Cu = st("borderLeftColor"), Ou = st("outline", tt), Pu = st("outlineColor"), Jn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Zr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Gt(t, n)
    });
    return at(e, e.borderRadius, r);
  }
  return null;
};
Jn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Mt
} : {};
Jn.filterProps = ["borderRadius"];
Xn(gu, yu, bu, vu, xu, Su, Eu, Tu, wu, Cu, Jn, Ou, Pu);
const Zn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Zr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Gt(t, n)
    });
    return at(e, e.gap, r);
  }
  return null;
};
Zn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Mt
} : {};
Zn.filterProps = ["gap"];
const Qn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Zr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Gt(t, n)
    });
    return at(e, e.columnGap, r);
  }
  return null;
};
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Mt
} : {};
Qn.filterProps = ["columnGap"];
const eo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Zr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Gt(t, n)
    });
    return at(e, e.rowGap, r);
  }
  return null;
};
eo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Mt
} : {};
eo.filterProps = ["rowGap"];
const Ru = Ne({
  prop: "gridColumn"
}), ku = Ne({
  prop: "gridRow"
}), $u = Ne({
  prop: "gridAutoFlow"
}), Mu = Ne({
  prop: "gridAutoColumns"
}), Nu = Ne({
  prop: "gridAutoRows"
}), Iu = Ne({
  prop: "gridTemplateColumns"
}), Au = Ne({
  prop: "gridTemplateRows"
}), ju = Ne({
  prop: "gridTemplateAreas"
}), _u = Ne({
  prop: "gridArea"
});
Xn(Zn, Qn, eo, Ru, ku, $u, Mu, Nu, Iu, Au, ju, _u);
function lr(e, t) {
  return t === "grey" ? t : e;
}
const Du = Ne({
  prop: "color",
  themeKey: "palette",
  transform: lr
}), Bu = Ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: lr
}), Fu = Ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: lr
});
Xn(Du, Bu, Fu);
function Xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Lu = Ne({
  prop: "width",
  transform: Xe
}), si = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || Hn[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Xe(r)
      };
    };
    return at(e, e.maxWidth, t);
  }
  return null;
};
si.filterProps = ["maxWidth"];
const zu = Ne({
  prop: "minWidth",
  transform: Xe
}), Vu = Ne({
  prop: "height",
  transform: Xe
}), Wu = Ne({
  prop: "maxHeight",
  transform: Xe
}), Uu = Ne({
  prop: "minHeight",
  transform: Xe
});
Ne({
  prop: "size",
  cssProperty: "width",
  transform: Xe
});
Ne({
  prop: "size",
  cssProperty: "height",
  transform: Xe
});
const Hu = Ne({
  prop: "boxSizing"
});
Xn(Lu, si, zu, Vu, Wu, Uu, Hu);
const Qr = {
  // borders
  border: {
    themeKey: "borders",
    transform: tt
  },
  borderTop: {
    themeKey: "borders",
    transform: tt
  },
  borderRight: {
    themeKey: "borders",
    transform: tt
  },
  borderBottom: {
    themeKey: "borders",
    transform: tt
  },
  borderLeft: {
    themeKey: "borders",
    transform: tt
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
    transform: tt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Jn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: lr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: lr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: lr
  },
  // spacing
  p: {
    style: Re
  },
  pt: {
    style: Re
  },
  pr: {
    style: Re
  },
  pb: {
    style: Re
  },
  pl: {
    style: Re
  },
  px: {
    style: Re
  },
  py: {
    style: Re
  },
  padding: {
    style: Re
  },
  paddingTop: {
    style: Re
  },
  paddingRight: {
    style: Re
  },
  paddingBottom: {
    style: Re
  },
  paddingLeft: {
    style: Re
  },
  paddingX: {
    style: Re
  },
  paddingY: {
    style: Re
  },
  paddingInline: {
    style: Re
  },
  paddingInlineStart: {
    style: Re
  },
  paddingInlineEnd: {
    style: Re
  },
  paddingBlock: {
    style: Re
  },
  paddingBlockStart: {
    style: Re
  },
  paddingBlockEnd: {
    style: Re
  },
  m: {
    style: Pe
  },
  mt: {
    style: Pe
  },
  mr: {
    style: Pe
  },
  mb: {
    style: Pe
  },
  ml: {
    style: Pe
  },
  mx: {
    style: Pe
  },
  my: {
    style: Pe
  },
  margin: {
    style: Pe
  },
  marginTop: {
    style: Pe
  },
  marginRight: {
    style: Pe
  },
  marginBottom: {
    style: Pe
  },
  marginLeft: {
    style: Pe
  },
  marginX: {
    style: Pe
  },
  marginY: {
    style: Pe
  },
  marginInline: {
    style: Pe
  },
  marginInlineStart: {
    style: Pe
  },
  marginInlineEnd: {
    style: Pe
  },
  marginBlock: {
    style: Pe
  },
  marginBlockStart: {
    style: Pe
  },
  marginBlockEnd: {
    style: Pe
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
    style: Zn
  },
  rowGap: {
    style: eo
  },
  columnGap: {
    style: Qn
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
    transform: Xe
  },
  maxWidth: {
    style: si
  },
  minWidth: {
    transform: Xe
  },
  height: {
    transform: Xe
  },
  maxHeight: {
    transform: Xe
  },
  minHeight: {
    transform: Xe
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
function qu(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Yu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gu() {
  function e(r, n, i, s) {
    const a = {
      [r]: n,
      theme: i
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
    const y = qn(i, u) || {};
    return m ? m(a) : at(a, n, (b) => {
      let f = Mn(y, d, b);
      return b === f && typeof b == "string" && (f = Mn(y, d, `${r}${b === "default" ? "" : ee(b)}`, b)), l === !1 ? f : {
        [l]: f
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: i = {},
      nested: s
    } = r || {};
    if (!n)
      return null;
    const a = i.unstable_sxConfig ?? Qr;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const d = ka(i.breakpoints), m = Object.keys(d);
      let y = d;
      return Object.keys(u).forEach((g) => {
        const b = Yu(u[g], i);
        if (b != null)
          if (typeof b == "object")
            if (a[g])
              y = Dr(y, e(g, b, i, a));
            else {
              const f = at({
                theme: i
              }, b, (x) => ({
                [g]: x
              }));
              qu(f, b) ? y[g] = t({
                sx: b,
                theme: i,
                nested: !0
              }) : y = Dr(y, f);
            }
          else
            y = Dr(y, e(g, b, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": cs(i, Do(m, y))
      } : cs(i, Do(m, y));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return t;
}
const kt = Gu();
kt.filterProps = ["sx"];
const Ku = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = e?.theme?.unstable_sxConfig ?? Qr;
  return Object.keys(e).forEach((n) => {
    r[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
  }), t;
};
function ai(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: i
  } = Ku(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...a) => {
    const c = t(...a);
    return dt(c) ? {
      ...n,
      ...c
    } : n;
  } : s = {
    ...n,
    ...t
  }, {
    ...i,
    sx: s
  };
}
function Nn() {
  return Nn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nn.apply(null, arguments);
}
function Xu(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ju(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Zu = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(i) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, s), n.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ju(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Xu(i);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var i;
      return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ze = "-ms-", In = "-moz-", ae = "-webkit-", Ma = "comm", ci = "rule", li = "decl", Qu = "@import", Na = "@keyframes", ed = "@layer", td = Math.abs, to = String.fromCharCode, rd = Object.assign;
function nd(e, t) {
  return Fe(e, 0) ^ 45 ? (((t << 2 ^ Fe(e, 0)) << 2 ^ Fe(e, 1)) << 2 ^ Fe(e, 2)) << 2 ^ Fe(e, 3) : 0;
}
function Ia(e) {
  return e.trim();
}
function od(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, r) {
  return e.replace(t, r);
}
function Bo(e, t) {
  return e.indexOf(t);
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vr(e, t, r) {
  return e.slice(t, r);
}
function lt(e) {
  return e.length;
}
function ui(e) {
  return e.length;
}
function hn(e, t) {
  return t.push(e), e;
}
function id(e, t) {
  return e.map(t).join("");
}
var ro = 1, fr = 1, Aa = 0, Ge = 0, Ie = 0, yr = "";
function no(e, t, r, n, i, s, a) {
  return { value: e, root: t, parent: r, type: n, props: i, children: s, line: ro, column: fr, length: a, return: "" };
}
function wr(e, t) {
  return rd(no("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function sd() {
  return Ie;
}
function ad() {
  return Ie = Ge > 0 ? Fe(yr, --Ge) : 0, fr--, Ie === 10 && (fr = 1, ro--), Ie;
}
function Je() {
  return Ie = Ge < Aa ? Fe(yr, Ge++) : 0, fr++, Ie === 10 && (fr = 1, ro++), Ie;
}
function ft() {
  return Fe(yr, Ge);
}
function Cn() {
  return Ge;
}
function en(e, t) {
  return Vr(yr, e, t);
}
function Wr(e) {
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
function ja(e) {
  return ro = fr = 1, Aa = lt(yr = e), Ge = 0, [];
}
function _a(e) {
  return yr = "", e;
}
function On(e) {
  return Ia(en(Ge - 1, Fo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function cd(e) {
  for (; (Ie = ft()) && Ie < 33; )
    Je();
  return Wr(e) > 2 || Wr(Ie) > 3 ? "" : " ";
}
function ld(e, t) {
  for (; --t && Je() && !(Ie < 48 || Ie > 102 || Ie > 57 && Ie < 65 || Ie > 70 && Ie < 97); )
    ;
  return en(e, Cn() + (t < 6 && ft() == 32 && Je() == 32));
}
function Fo(e) {
  for (; Je(); )
    switch (Ie) {
      // ] ) " '
      case e:
        return Ge;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fo(Ie);
        break;
      // (
      case 40:
        e === 41 && Fo(e);
        break;
      // \
      case 92:
        Je();
        break;
    }
  return Ge;
}
function ud(e, t) {
  for (; Je() && e + Ie !== 57; )
    if (e + Ie === 84 && ft() === 47)
      break;
  return "/*" + en(t, Ge - 1) + "*" + to(e === 47 ? e : Je());
}
function dd(e) {
  for (; !Wr(ft()); )
    Je();
  return en(e, Ge);
}
function fd(e) {
  return _a(Pn("", null, null, null, [""], e = ja(e), 0, [0], e));
}
function Pn(e, t, r, n, i, s, a, c, l) {
  for (var u = 0, d = 0, m = a, y = 0, g = 0, b = 0, f = 1, x = 1, w = 1, P = 0, S = "", v = i, h = s, O = n, k = S; x; )
    switch (b = P, P = Je()) {
      // (
      case 40:
        if (b != 108 && Fe(k, m - 1) == 58) {
          Bo(k += ce(On(P), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        k += On(P);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        k += cd(b);
        break;
      // \
      case 92:
        k += ld(Cn() - 1, 7);
        continue;
      // /
      case 47:
        switch (ft()) {
          case 42:
          case 47:
            hn(pd(ud(Je(), Cn()), t, r), l);
            break;
          default:
            k += "/";
        }
        break;
      // {
      case 123 * f:
        c[u++] = lt(k) * w;
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
            w == -1 && (k = ce(k, /\f/g, "")), g > 0 && lt(k) - m && hn(g > 32 ? fs(k + ";", n, r, m - 1) : fs(ce(k, " ", "") + ";", n, r, m - 2), l);
            break;
          // @ ;
          case 59:
            k += ";";
          // { rule/at-rule
          default:
            if (hn(O = ds(k, t, r, u, d, i, c, S, v = [], h = [], m), s), P === 123)
              if (d === 0)
                Pn(k, t, O, O, v, s, m, c, h);
              else
                switch (y === 99 && Fe(k, 3) === 110 ? 100 : y) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pn(e, O, O, n && hn(ds(e, O, O, 0, 0, i, c, S, i, v = [], m), h), i, h, m, c, n ? v : h);
                    break;
                  default:
                    Pn(k, O, O, O, [""], h, 0, c, h);
                }
        }
        u = d = g = 0, f = w = 1, S = k = "", m = a;
        break;
      // :
      case 58:
        m = 1 + lt(k), g = b;
      default:
        if (f < 1) {
          if (P == 123)
            --f;
          else if (P == 125 && f++ == 0 && ad() == 125)
            continue;
        }
        switch (k += to(P), P * f) {
          // &
          case 38:
            w = d > 0 ? 1 : (k += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (lt(k) - 1) * w, w = 1;
            break;
          // @
          case 64:
            ft() === 45 && (k += On(Je())), y = ft(), d = m = lt(S = k += dd(Cn())), P++;
            break;
          // -
          case 45:
            b === 45 && lt(k) == 2 && (f = 0);
        }
    }
  return s;
}
function ds(e, t, r, n, i, s, a, c, l, u, d) {
  for (var m = i - 1, y = i === 0 ? s : [""], g = ui(y), b = 0, f = 0, x = 0; b < n; ++b)
    for (var w = 0, P = Vr(e, m + 1, m = td(f = a[b])), S = e; w < g; ++w)
      (S = Ia(f > 0 ? y[w] + " " + P : ce(P, /&\f/g, y[w]))) && (l[x++] = S);
  return no(e, t, r, i === 0 ? ci : c, l, u, d);
}
function pd(e, t, r) {
  return no(e, t, r, Ma, to(sd()), Vr(e, 2, -2), 0);
}
function fs(e, t, r, n) {
  return no(e, t, r, li, Vr(e, 0, n), Vr(e, n + 1, -1), n);
}
function ur(e, t) {
  for (var r = "", n = ui(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function md(e, t, r, n) {
  switch (e.type) {
    case ed:
      if (e.children.length) break;
    case Qu:
    case li:
      return e.return = e.return || e.value;
    case Ma:
      return "";
    case Na:
      return e.return = e.value + "{" + ur(e.children, n) + "}";
    case ci:
      e.value = e.props.join(",");
  }
  return lt(r = ur(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function hd(e) {
  var t = ui(e);
  return function(r, n, i, s) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, i, s) || "";
    return a;
  };
}
function gd(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Da(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var yd = function(t, r, n) {
  for (var i = 0, s = 0; i = s, s = ft(), i === 38 && s === 12 && (r[n] = 1), !Wr(s); )
    Je();
  return en(t, Ge);
}, bd = function(t, r) {
  var n = -1, i = 44;
  do
    switch (Wr(i)) {
      case 0:
        i === 38 && ft() === 12 && (r[n] = 1), t[n] += yd(Ge - 1, r, n);
        break;
      case 2:
        t[n] += On(i);
        break;
      case 4:
        if (i === 44) {
          t[++n] = ft() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += to(i);
    }
  while (i = Je());
  return t;
}, vd = function(t, r) {
  return _a(bd(ja(t), r));
}, ps = /* @__PURE__ */ new WeakMap(), xd = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ps.get(n)) && !i) {
      ps.set(t, !0);
      for (var s = [], a = vd(r, s), c = n.props, l = 0, u = 0; l < a.length; l++)
        for (var d = 0; d < c.length; d++, u++)
          t.props[u] = s[l] ? a[l].replace(/&\f/g, c[d]) : c[d] + " " + a[l];
    }
  }
}, Sd = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ba(e, t) {
  switch (nd(e, t)) {
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
      return ae + e + In + e + ze + e + e;
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
      if (lt(e) - 1 - t > 6) switch (Fe(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Fe(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ce(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + In + (Fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Bo(e, "stretch") ? Ba(ce(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Fe(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Fe(e, lt(e) - 3 - (~Bo(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ce(e, ":", ":" + ae) + e;
        // (inline-)?fl(e)x
        case 101:
          return ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ae + (Fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + ze + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Fe(e, t + 11)) {
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
var Ed = function(t, r, n, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case li:
      t.return = Ba(t.value, t.length);
      break;
    case Na:
      return ur([wr(t, {
        value: ce(t.value, "@", "@" + ae)
      })], i);
    case ci:
      if (t.length) return id(t.props, function(s) {
        switch (od(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ur([wr(t, {
              props: [ce(s, /:(read-\w+)/, ":" + In + "$1")]
            })], i);
          // :placeholder
          case "::placeholder":
            return ur([wr(t, {
              props: [ce(s, /:(plac\w+)/, ":" + ae + "input-$1")]
            }), wr(t, {
              props: [ce(s, /:(plac\w+)/, ":" + In + "$1")]
            }), wr(t, {
              props: [ce(s, /:(plac\w+)/, ze + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Td = [Ed], wd = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var x = f.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Td, s = {}, a, c = [];
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
  var l, u = [xd, Sd];
  {
    var d, m = [md, gd(function(f) {
      d.insert(f);
    })], y = hd(u.concat(i, m)), g = function(x) {
      return ur(fd(x), y);
    };
    l = function(x, w, P, S) {
      d = P, g(x ? x + "{" + w.styles + "}" : w.styles), S && (b.inserted[w.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new Zu({
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
  return b.sheet.hydrate(c), b;
}, gn = { exports: {} }, de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function Cd() {
  if (ms) return de;
  ms = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function S(h) {
    if (typeof h == "object" && h !== null) {
      var O = h.$$typeof;
      switch (O) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case n:
            case s:
            case i:
            case m:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case b:
                case g:
                case a:
                  return h;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function v(h) {
    return S(h) === u;
  }
  return de.AsyncMode = l, de.ConcurrentMode = u, de.ContextConsumer = c, de.ContextProvider = a, de.Element = t, de.ForwardRef = d, de.Fragment = n, de.Lazy = b, de.Memo = g, de.Portal = r, de.Profiler = s, de.StrictMode = i, de.Suspense = m, de.isAsyncMode = function(h) {
    return v(h) || S(h) === l;
  }, de.isConcurrentMode = v, de.isContextConsumer = function(h) {
    return S(h) === c;
  }, de.isContextProvider = function(h) {
    return S(h) === a;
  }, de.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, de.isForwardRef = function(h) {
    return S(h) === d;
  }, de.isFragment = function(h) {
    return S(h) === n;
  }, de.isLazy = function(h) {
    return S(h) === b;
  }, de.isMemo = function(h) {
    return S(h) === g;
  }, de.isPortal = function(h) {
    return S(h) === r;
  }, de.isProfiler = function(h) {
    return S(h) === s;
  }, de.isStrictMode = function(h) {
    return S(h) === i;
  }, de.isSuspense = function(h) {
    return S(h) === m;
  }, de.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === s || h === i || h === m || h === y || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === x || h.$$typeof === w || h.$$typeof === P || h.$$typeof === f);
  }, de.typeOf = S, de;
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
var hs;
function Od() {
  return hs || (hs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function S(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === u || R === s || R === i || R === m || R === y || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === g || R.$$typeof === a || R.$$typeof === c || R.$$typeof === d || R.$$typeof === x || R.$$typeof === w || R.$$typeof === P || R.$$typeof === f);
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
              case i:
              case m:
                return se;
              default:
                var Se = se && se.$$typeof;
                switch (Se) {
                  case c:
                  case d:
                  case b:
                  case g:
                  case a:
                    return Se;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var h = l, O = u, k = c, N = a, $ = t, I = d, B = n, p = b, A = g, M = r, j = s, _ = i, V = m, X = !1;
    function H(R) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(R) || v(R) === l;
    }
    function E(R) {
      return v(R) === u;
    }
    function D(R) {
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
      return v(R) === b;
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
      return v(R) === i;
    }
    function J(R) {
      return v(R) === m;
    }
    fe.AsyncMode = h, fe.ConcurrentMode = O, fe.ContextConsumer = k, fe.ContextProvider = N, fe.Element = $, fe.ForwardRef = I, fe.Fragment = B, fe.Lazy = p, fe.Memo = A, fe.Portal = M, fe.Profiler = j, fe.StrictMode = _, fe.Suspense = V, fe.isAsyncMode = H, fe.isConcurrentMode = E, fe.isContextConsumer = D, fe.isContextProvider = L, fe.isElement = W, fe.isForwardRef = U, fe.isFragment = z, fe.isLazy = Y, fe.isMemo = K, fe.isPortal = G, fe.isProfiler = Z, fe.isStrictMode = q, fe.isSuspense = J, fe.isValidElementType = S, fe.typeOf = v;
  }()), fe;
}
var gs;
function Pd() {
  return gs || (gs = 1, process.env.NODE_ENV === "production" ? gn.exports = Cd() : gn.exports = Od()), gn.exports;
}
var wo, ys;
function Rd() {
  if (ys) return wo;
  ys = 1;
  var e = Pd(), t = {
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
  }, i = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = n, s[e.Memo] = i;
  function a(b) {
    return e.isMemo(b) ? i : s[b.$$typeof] || t;
  }
  var c = Object.defineProperty, l = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, y = Object.prototype;
  function g(b, f, x) {
    if (typeof f != "string") {
      if (y) {
        var w = m(f);
        w && w !== y && g(b, w, x);
      }
      var P = l(f);
      u && (P = P.concat(u(f)));
      for (var S = a(b), v = a(f), h = 0; h < P.length; ++h) {
        var O = P[h];
        if (!r[O] && !(x && x[O]) && !(v && v[O]) && !(S && S[O])) {
          var k = d(f, O);
          try {
            c(b, O, k);
          } catch {
          }
        }
      }
    }
    return b;
  }
  return wo = g, wo;
}
Rd();
var kd = !0;
function Fa(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
  }), n;
}
var di = function(t, r, n) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  kd === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, fi = function(t, r, n) {
  di(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function $d(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
var Md = {
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
}, Nd = /[A-Z]|^ms/g, Id = /_EMO_([^_]+?)_([^]*?)_EMO_/g, La = function(t) {
  return t.charCodeAt(1) === 45;
}, bs = function(t) {
  return t != null && typeof t != "boolean";
}, Co = /* @__PURE__ */ Da(function(e) {
  return La(e) ? e : e.replace(Nd, "-$&").toLowerCase();
}), vs = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Id, function(n, i, s) {
          return ut = {
            name: i,
            styles: s,
            next: ut
          }, i;
        });
  }
  return Md[t] !== 1 && !La(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ur(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return ut = {
          name: i.name,
          styles: i.styles,
          next: ut
        }, i.name;
      var s = r;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            ut = {
              name: a.name,
              styles: a.styles,
              next: ut
            }, a = a.next;
        var c = s.styles + ";";
        return c;
      }
      return Ad(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = ut, u = r(e);
        return ut = l, Ur(e, t, u);
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
function Ad(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += Ur(e, t, r[i]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += s + "{" + t[c] + "}" : bs(c) && (n += Co(s) + ":" + vs(s, c) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var l = 0; l < a.length; l++)
          bs(a[l]) && (n += Co(s) + ":" + vs(s, a[l]) + ";");
      else {
        var u = Ur(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            n += Co(s) + ":" + u + ";";
            break;
          }
          default:
            n += s + "{" + u + "}";
        }
      }
    }
  return n;
}
var xs = /label:\s*([^\s;{]+)\s*(;|$)/g, ut;
function tn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, i = "";
  ut = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, i += Ur(r, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (i += Ur(r, t, e[c]), n) {
      var l = s;
      i += l[c];
    }
  xs.lastIndex = 0;
  for (var u = "", d; (d = xs.exec(i)) !== null; )
    u += "-" + d[1];
  var m = $d(i) + u;
  return {
    name: m,
    styles: i,
    next: ut
  };
}
var jd = function(t) {
  return t();
}, za = T.useInsertionEffect ? T.useInsertionEffect : !1, Va = za || jd, Ss = za || T.useLayoutEffect, Wa = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wd({
    key: "css"
  }) : null
);
Wa.Provider;
var pi = function(t) {
  return /* @__PURE__ */ jl(function(r, n) {
    var i = _l(Wa);
    return t(r, i, n);
  });
}, rn = /* @__PURE__ */ T.createContext({}), mi = {}.hasOwnProperty, Lo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", _d = function(t, r) {
  var n = {};
  for (var i in r)
    mi.call(r, i) && (n[i] = r[i]);
  return n[Lo] = t, n;
}, Dd = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return di(r, n, i), Va(function() {
    return fi(r, n, i);
  }), null;
}, Bd = /* @__PURE__ */ pi(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var i = e[Lo], s = [n], a = "";
  typeof e.className == "string" ? a = Fa(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var c = tn(s, void 0, T.useContext(rn));
  a += t.key + "-" + c.name;
  var l = {};
  for (var u in e)
    mi.call(e, u) && u !== "css" && u !== Lo && (l[u] = e[u]);
  return l.className = a, r && (l.ref = r), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Dd, {
    cache: t,
    serialized: c,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ T.createElement(i, l));
}), Fd = Bd, Es = function(t, r) {
  var n = arguments;
  if (r == null || !mi.call(r, "css"))
    return T.createElement.apply(void 0, n);
  var i = n.length, s = new Array(i);
  s[0] = Fd, s[1] = _d(t, r);
  for (var a = 2; a < i; a++)
    s[a] = n[a];
  return T.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Es || (Es = {}));
var Ld = /* @__PURE__ */ pi(function(e, t) {
  var r = e.styles, n = tn([r], void 0, T.useContext(rn)), i = T.useRef();
  return Ss(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", s), a.hydrate([l])), i.current = [a, c], function() {
      a.flush();
    };
  }, [t]), Ss(function() {
    var s = i.current, a = s[0], c = s[1];
    if (c) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && fi(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function hi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return tn(t);
}
function br() {
  var e = hi.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var zd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vd = /* @__PURE__ */ Da(
  function(e) {
    return zd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Wd = Vd, Ud = function(t) {
  return t !== "theme";
}, Ts = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Wd : Ud;
}, ws = function(t, r, n) {
  var i;
  if (r) {
    var s = r.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, Hd = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return di(r, n, i), Va(function() {
    return fi(r, n, i);
  }), null;
}, qd = function e(t, r) {
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, s, a;
  r !== void 0 && (s = r.label, a = r.target);
  var c = ws(t, r, n), l = c || Ts(i), u = !l("as");
  return function() {
    var d = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && m.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      m.push.apply(m, d);
    else {
      var y = d[0];
      m.push(y[0]);
      for (var g = d.length, b = 1; b < g; b++)
        m.push(d[b], y[b]);
    }
    var f = pi(function(x, w, P) {
      var S = u && x.as || i, v = "", h = [], O = x;
      if (x.theme == null) {
        O = {};
        for (var k in x)
          O[k] = x[k];
        O.theme = T.useContext(rn);
      }
      typeof x.className == "string" ? v = Fa(w.registered, h, x.className) : x.className != null && (v = x.className + " ");
      var N = tn(m.concat(h), w.registered, O);
      v += w.key + "-" + N.name, a !== void 0 && (v += " " + a);
      var $ = u && c === void 0 ? Ts(S) : l, I = {};
      for (var B in x)
        u && B === "as" || $(B) && (I[B] = x[B]);
      return I.className = v, P && (I.ref = P), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Hd, {
        cache: w,
        serialized: N,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ T.createElement(S, I));
    });
    return f.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = i, f.__emotion_styles = m, f.__emotion_forwardProp = c, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + a;
      }
    }), f.withComponent = function(x, w) {
      var P = e(x, Nn({}, r, w, {
        shouldForwardProp: ws(f, w, !0)
      }));
      return P.apply(void 0, m);
    }, f;
  };
}, Yd = [
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
], zo = qd.bind(null);
Yd.forEach(function(e) {
  zo[e] = zo(e);
});
function Gd(e) {
  return e == null || Object.keys(e).length === 0;
}
function gi(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (i) => t(Gd(i) ? r : i) : t;
  return /* @__PURE__ */ C.jsx(Ld, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (gi.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v7.3.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ua(e, t) {
  const r = zo(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Kd(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Cs = [];
function Pt(e) {
  return Cs[0] = e, tn(Cs);
}
const Xd = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Jd(e) {
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
    ...i
  } = e, s = Xd(t), a = Object.keys(s);
  function c(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function l(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function u(y, g) {
    const b = a.indexOf(g);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : g) - n / 100}${r})`;
  }
  function d(y) {
    return a.indexOf(y) + 1 < a.length ? u(y, a[a.indexOf(y) + 1]) : c(y);
  }
  function m(y) {
    const g = a.indexOf(y);
    return g === 0 ? c(a[1]) : g === a.length - 1 ? l(a[g]) : u(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
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
    ...i
  };
}
const Zd = {
  borderRadius: 4
};
function Ha(e = 8, t = Kn({
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
function Qd(e, t) {
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
function oo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, c = Jd(r), l = Ha(i);
  let u = We({
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
      ...Zd,
      ...s
    }
  }, a);
  return u = iu(u), u.applyStyles = Qd, u = t.reduce((d, m) => We(d, m), u), u.unstable_sxConfig = {
    ...Qr,
    ...a?.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return kt({
      sx: m,
      theme: this
    });
  }, u;
}
function ef(e) {
  return Object.keys(e).length === 0;
}
function yi(e = null) {
  const t = T.useContext(rn);
  return !t || ef(t) ? e : t;
}
const tf = oo();
function io(e = tf) {
  return yi(e);
}
function Oo(e) {
  const t = Pt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function bi({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = io(r), i = t && n[t] || n;
  let s = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => Oo(typeof a == "function" ? a(i) : a)) : s = Oo(s)), /* @__PURE__ */ C.jsx(gi, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
function rf(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: i
  } = e, s = Ua("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(kt);
  return /* @__PURE__ */ T.forwardRef(function(l, u) {
    const d = io(r), {
      className: m,
      component: y = "div",
      ...g
    } = ai(l);
    return /* @__PURE__ */ C.jsx(s, {
      as: y,
      ref: u,
      className: ne(m, i ? i(n) : n),
      theme: t && d[t] || d,
      ...g
    });
  });
}
const nf = {
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
function Te(e, t, r = "Mui") {
  const n = nf[t];
  return n ? `${r}-${n}` : `${wa.generate(e)}-${t}`;
}
function ve(e, t, r = "Mui") {
  const n = {};
  return t.forEach((i) => {
    n[i] = Te(e, i, r);
  }), n;
}
function qa(e, t = "") {
  return e.displayName || e.name || t;
}
function Os(e, t, r) {
  const n = qa(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function of(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return qa(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case dr.ForwardRef:
          return Os(e, e.render, "ForwardRef");
        case dr.Memo:
          return Os(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ya(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Pt(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Pt(i.style));
  }), n;
}
const sf = oo();
function Po(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ut(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function af(e) {
  return e ? (t, r) => r[e] : null;
}
function cf(e, t, r) {
  e.theme = df(e.theme) ? r : e.theme[t] || e.theme;
}
function Rn(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((i) => Rn(e, i, r));
  if (Array.isArray(n?.variants)) {
    let i;
    if (n.isProcessed)
      i = r ? Ut(n.style, r) : n.style;
    else {
      const {
        variants: s,
        ...a
      } = n;
      i = r ? Ut(Pt(a), r) : a;
    }
    return Ga(e, n.variants, [i], r);
  }
  return n?.isProcessed ? r ? Ut(Pt(n.style), r) : n.style : r ? Ut(Pt(n), r) : n;
}
function Ga(e, t, r = [], n = void 0) {
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
      for (const c in a.props)
        if (e[c] !== a.props[c] && e.ownerState?.[c] !== a.props[c])
          continue e;
    typeof a.style == "function" ? (i ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(n ? Ut(Pt(a.style(i)), n) : a.style(i))) : r.push(n ? Ut(Pt(a.style), n) : a.style);
  }
  return r;
}
function Ka(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = sf,
    rootShouldForwardProp: n = Po,
    slotShouldForwardProp: i = Po
  } = e;
  function s(c) {
    cf(c, t, r);
  }
  return (c, l = {}) => {
    Kd(c, (O) => O.filter((k) => k !== kt));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: m,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = af(Xa(d)),
      ...b
    } = l, f = u && u.startsWith("Mui") || d ? "components" : "custom", x = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), w = y || !1;
    let P = Po;
    d === "Root" || d === "root" ? P = n : d ? P = i : ff(c) && (P = void 0);
    const S = Ua(c, {
      shouldForwardProp: P,
      label: uf(u, d),
      ...b
    }), v = (O) => {
      if (O.__emotion_real === O)
        return O;
      if (typeof O == "function")
        return function(N) {
          return Rn(N, O, N.theme.modularCssLayers ? f : void 0);
        };
      if (dt(O)) {
        const k = Ya(O);
        return function($) {
          return k.variants ? Rn($, k, $.theme.modularCssLayers ? f : void 0) : $.theme.modularCssLayers ? Ut(k.style, f) : k.style;
        };
      }
      return O;
    }, h = (...O) => {
      const k = [], N = O.map(v), $ = [];
      if (k.push(s), u && g && $.push(function(A) {
        const j = A.theme.components?.[u]?.styleOverrides;
        if (!j)
          return null;
        const _ = {};
        for (const V in j)
          _[V] = Rn(A, j[V], A.theme.modularCssLayers ? "theme" : void 0);
        return g(A, _);
      }), u && !x && $.push(function(A) {
        const j = A.theme?.components?.[u]?.variants;
        return j ? Ga(A, j, [], A.theme.modularCssLayers ? "theme" : void 0) : null;
      }), w || $.push(kt), Array.isArray(N[0])) {
        const p = N.shift(), A = new Array(k.length).fill(""), M = new Array($.length).fill("");
        let j;
        j = [...A, ...p, ...M], j.raw = [...A, ...p.raw, ...M], k.unshift(j);
      }
      const I = [...k, ...N, ...$], B = S(...I);
      return c.muiName && (B.muiName = c.muiName), process.env.NODE_ENV !== "production" && (B.displayName = lf(u, d, c)), B;
    };
    return S.withConfig && (h.withConfig = S.withConfig), h;
  };
}
function lf(e, t, r) {
  return e ? `${e}${ee(t || "")}` : `Styled(${of(r)})`;
}
function uf(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Xa(t || "Root")}`), r;
}
function df(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ff(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Xa(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const pf = Ka();
function Hr(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = i;
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
              n[s][u] = Hr(a[u], c[u], r);
            }
        }
      } else s === "className" && r && t.className ? n.className = ne(e?.className, t?.className) : s === "style" && r && t.style ? n.style = {
        ...e?.style,
        ...t?.style
      } : n[s] === void 0 && (n[s] = e[s]);
    }
  return n;
}
function mf(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Hr(t.components[r].defaultProps, n);
}
function hf({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let i = io(r);
  return n && (i = i[n] || i), mf({
    theme: i,
    name: t,
    props: e
  });
}
const xt = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function gf(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function vi(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), gf(e, t, r);
}
function yf(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function $t(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return $t(yf(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : vt(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : vt(10, i));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const bf = (e) => {
  const t = $t(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, $r = (e, t) => {
  try {
    return bf(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function so(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Ja(e) {
  e = $t(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, s = n * Math.min(i, 1 - i), a = (u, d = (u + r / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), so({
    type: c,
    values: l
  });
}
function Vo(e) {
  e = $t(e);
  let t = e.type === "hsl" || e.type === "hsla" ? $t(Ja(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ps(e, t) {
  const r = Vo(e), n = Vo(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function An(e, t) {
  return e = $t(e), t = vi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, so(e);
}
function Ft(e, t, r) {
  try {
    return An(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ao(e, t) {
  if (e = $t(e), t = vi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return so(e);
}
function pe(e, t, r) {
  try {
    return ao(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function co(e, t) {
  if (e = $t(e), t = vi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return so(e);
}
function me(e, t, r) {
  try {
    return co(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function vf(e, t = 0.15) {
  return Vo(e) > 0.5 ? ao(e, t) : co(e, t);
}
function yn(e, t, r) {
  try {
    return vf(e, t);
  } catch {
    return e;
  }
}
const xf = "exact-prop: ​";
function lo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [xf]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const xi = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (xi.displayName = "ThemeContext");
function Si() {
  const e = T.useContext(xi);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e;
}
const Sf = typeof Symbol == "function" && Symbol.for, Ef = Sf ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Tf(e, t) {
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
function jn(e) {
  const {
    children: t,
    theme: r
  } = e, n = Si();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = T.useMemo(() => {
    const s = n === null ? {
      ...r
    } : Tf(n, r);
    return s != null && (s[Ef] = n !== null), s;
  }, [r, n]);
  return /* @__PURE__ */ C.jsx(xi.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (jn.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: o.oneOfType([o.object, o.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (jn.propTypes = lo(jn.propTypes));
const Za = /* @__PURE__ */ T.createContext();
function Qa({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ C.jsx(Za.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
  children: o.node,
  value: o.bool
});
const Ei = () => T.useContext(Za) ?? !1, ec = /* @__PURE__ */ T.createContext(void 0);
function tc({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ C.jsx(ec.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (tc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * @ignore
   */
  value: o.object
});
function wf(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const i = t.components[r];
  return i.defaultProps ? Hr(i.defaultProps, n, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? Hr(i, n, t.components.mergeClassNameAndStyle) : n;
}
function Cf({
  props: e,
  name: t
}) {
  const r = T.useContext(ec);
  return wf({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let Rs = 0;
function Of(e) {
  const [t, r] = T.useState(e), n = e || t;
  return T.useEffect(() => {
    t == null && (Rs += 1, r(`mui-${Rs}`));
  }, [t]), n;
}
const Pf = {
  ...T
}, ks = Pf.useId;
function uo(e) {
  if (ks !== void 0) {
    const t = ks();
    return e ?? t;
  }
  return Of(e);
}
function Rf(e) {
  const t = yi(), r = uo() || "", {
    modularCssLayers: n
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? i = "" : typeof n == "string" ? i = n.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, xt(() => {
    const s = document.querySelector("head");
    if (!s)
      return;
    const a = s.firstChild;
    if (i) {
      if (a && a.hasAttribute?.("data-mui-layer-order") && a.getAttribute("data-mui-layer-order") === r)
        return;
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", r), c.textContent = i, s.prepend(c);
    } else
      s.querySelector(`style[data-mui-layer-order="${r}"]`)?.remove();
  }, [i, r]), i ? /* @__PURE__ */ C.jsx(bi, {
    styles: i
  }) : null;
}
const $s = {};
function Ms(e, t, r, n = !1) {
  return T.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof r == "function") {
      const s = r(i), a = e ? {
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
function qr(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, i = yi($s), s = Si() || $s;
  process.env.NODE_ENV !== "production" && (i === null && typeof r == "function" || n && i && !i[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Ms(n, i, r), c = Ms(n, s, r, !0), l = (n ? a[n] : a).direction === "rtl", u = Rf(a);
  return /* @__PURE__ */ C.jsx(jn, {
    theme: c,
    children: /* @__PURE__ */ C.jsx(rn.Provider, {
      value: a,
      children: /* @__PURE__ */ C.jsx(Qa, {
        value: l,
        children: /* @__PURE__ */ C.jsxs(tc, {
          value: n ? a[n].components : a.components,
          children: [u, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (qr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: o.oneOfType([o.func, o.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: o.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (qr.propTypes = lo(qr.propTypes));
const Ns = {
  theme: void 0
};
function kf(e) {
  let t, r;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== r) && (Ns.theme = i.theme, s = Ya(e(Ns)), t = s, r = i.theme), s;
  };
}
const Ti = "mode", wi = "color-scheme", $f = "data-color-scheme";
function Mf(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: i = Ti,
    colorSchemeStorageKey: s = wi,
    attribute: a = $f,
    colorSchemeNode: c = "document.documentElement",
    nonce: l
  } = e || {};
  let u = "", d = a;
  if (a === "class" && (d = ".%s"), a === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const y = d.substring(1);
    u += `${c}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${c}.classList.add('${y}'.replace('%s', colorScheme));`;
  }
  const m = d.match(/\[([^\]]+)\]/);
  if (m) {
    const [y, g] = m[1].split("=");
    g || (u += `${c}.removeAttribute('${y}'.replace('%s', light));
      ${c}.removeAttribute('${y}'.replace('%s', dark));`), u += `
      ${c}.setAttribute('${y}'.replace('%s', colorScheme), ${g ? `${g}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${c}.setAttribute('${d}', colorScheme);`;
  return /* @__PURE__ */ C.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || '${t}';
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
function Nf() {
}
const If = ({
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
      return Nf;
    const n = (i) => {
      const s = i.newValue;
      i.key === e && r(s);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function Ro() {
}
function Is(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function rc(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Af(e) {
  return rc(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function jf(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: i = [],
    modeStorageKey: s = Ti,
    colorSchemeStorageKey: a = wi,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    storageManager: l = If,
    noSsr: u = !1
  } = e, d = i.join(","), m = i.length > 1, y = T.useMemo(() => l?.({
    key: s,
    storageWindow: c
  }), [l, s, c]), g = T.useMemo(() => l?.({
    key: `${a}-light`,
    storageWindow: c
  }), [l, a, c]), b = T.useMemo(() => l?.({
    key: `${a}-dark`,
    storageWindow: c
  }), [l, a, c]), [f, x] = T.useState(() => {
    const N = y?.get(t) || t, $ = g?.get(r) || r, I = b?.get(n) || n;
    return {
      mode: N,
      systemMode: Is(N),
      lightColorScheme: $,
      darkColorScheme: I
    };
  }), [w, P] = T.useState(u || !m);
  T.useEffect(() => {
    P(!0);
  }, []);
  const S = Af(f), v = T.useCallback((N) => {
    x(($) => {
      if (N === $.mode)
        return $;
      const I = N ?? t;
      return y?.set(I), {
        ...$,
        mode: I,
        systemMode: Is(I)
      };
    });
  }, [y, t]), h = T.useCallback((N) => {
    N ? typeof N == "string" ? N && !d.includes(N) ? console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`) : x(($) => {
      const I = {
        ...$
      };
      return rc($, (B) => {
        B === "light" && (g?.set(N), I.lightColorScheme = N), B === "dark" && (b?.set(N), I.darkColorScheme = N);
      }), I;
    }) : x(($) => {
      const I = {
        ...$
      }, B = N.light === null ? r : N.light, p = N.dark === null ? n : N.dark;
      return B && (d.includes(B) ? (I.lightColorScheme = B, g?.set(B)) : console.error(`\`${B}\` does not exist in \`theme.colorSchemes\`.`)), p && (d.includes(p) ? (I.darkColorScheme = p, b?.set(p)) : console.error(`\`${p}\` does not exist in \`theme.colorSchemes\`.`)), I;
    }) : x(($) => (g?.set(r), b?.set(n), {
      ...$,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [d, g, b, r, n]), O = T.useCallback((N) => {
    f.mode === "system" && x(($) => {
      const I = N?.matches ? "dark" : "light";
      return $.systemMode === I ? $ : {
        ...$,
        systemMode: I
      };
    });
  }, [f.mode]), k = T.useRef(O);
  return k.current = O, T.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const N = (...I) => k.current(...I), $ = window.matchMedia("(prefers-color-scheme: dark)");
    return $.addListener(N), N($), () => {
      $.removeListener(N);
    };
  }, [m]), T.useEffect(() => {
    if (m) {
      const N = y?.subscribe((B) => {
        (!B || ["light", "dark", "system"].includes(B)) && v(B || t);
      }) || Ro, $ = g?.subscribe((B) => {
        (!B || d.match(B)) && h({
          light: B
        });
      }) || Ro, I = b?.subscribe((B) => {
        (!B || d.match(B)) && h({
          dark: B
        });
      }) || Ro;
      return () => {
        N(), $(), I();
      };
    }
  }, [h, v, d, t, c, m, y, g, b]), {
    ...f,
    mode: w ? f.mode : void 0,
    systemMode: w ? f.systemMode : void 0,
    colorScheme: w ? S : void 0,
    setMode: v,
    setColorScheme: h
  };
}
const _f = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Df(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = Ti,
    colorSchemeStorageKey: i = wi,
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
  const d = () => T.useContext(u) || l, m = {}, y = {};
  function g(w) {
    const {
      children: P,
      theme: S,
      modeStorageKey: v = n,
      colorSchemeStorageKey: h = i,
      disableTransitionOnChange: O = s,
      storageManager: k,
      storageWindow: N = typeof window > "u" ? void 0 : window,
      documentNode: $ = typeof document > "u" ? void 0 : document,
      colorSchemeNode: I = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: B = !1,
      disableStyleSheetGeneration: p = !1,
      defaultMode: A = "system",
      forceThemeRerender: M = !1,
      noSsr: j
    } = w, _ = T.useRef(!1), V = Si(), X = T.useContext(u), H = !!X && !B, E = T.useMemo(() => S || (typeof r == "function" ? r() : r), [S]), D = E[t], L = D || E, {
      colorSchemes: W = m,
      components: U = y,
      cssVarPrefix: z
    } = L, Y = Object.keys(W).filter((je) => !!W[je]).join(","), K = T.useMemo(() => Y.split(","), [Y]), G = typeof a == "string" ? a : a.light, Z = typeof a == "string" ? a : a.dark, q = W[G] && W[Z] ? A : W[L.defaultColorScheme]?.palette?.mode || L.palette?.mode, {
      mode: J,
      setMode: R,
      systemMode: ie,
      lightColorScheme: se,
      darkColorScheme: Se,
      colorScheme: Qe,
      setColorScheme: _e
    } = jf({
      supportedColorSchemes: K,
      defaultLightColorScheme: G,
      defaultDarkColorScheme: Z,
      modeStorageKey: v,
      colorSchemeStorageKey: h,
      defaultMode: q,
      storageManager: k,
      storageWindow: N,
      noSsr: j
    });
    let Ae = J, xe = Qe;
    H && (Ae = X.mode, xe = X.colorScheme), process.env.NODE_ENV !== "production" && M && !L.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Me = xe || L.defaultColorScheme;
    L.vars && !M && (Me = L.defaultColorScheme);
    const be = T.useMemo(() => {
      const je = L.generateThemeVars?.() || L.vars, he = {
        ...L,
        components: U,
        colorSchemes: W,
        cssVarPrefix: z,
        vars: je
      };
      if (typeof he.generateSpacing == "function" && (he.spacing = he.generateSpacing()), Me) {
        const Be = W[Me];
        Be && typeof Be == "object" && Object.keys(Be).forEach((Le) => {
          Be[Le] && typeof Be[Le] == "object" ? he[Le] = {
            ...he[Le],
            ...Be[Le]
          } : he[Le] = Be[Le];
        });
      }
      return c ? c(he) : he;
    }, [L, Me, U, W, z]), Q = L.colorSchemeSelector;
    xt(() => {
      if (xe && I && Q && Q !== "media") {
        const je = Q;
        let he = Q;
        if (je === "class" && (he = ".%s"), je === "data" && (he = "[data-%s]"), je?.startsWith("data-") && !je.includes("%s") && (he = `[${je}="%s"]`), he.startsWith("."))
          I.classList.remove(...K.map((Be) => he.substring(1).replace("%s", Be))), I.classList.add(he.substring(1).replace("%s", xe));
        else {
          const Be = he.replace("%s", xe).match(/\[([^\]]+)\]/);
          if (Be) {
            const [Le, Dt] = Be[1].split("=");
            Dt || K.forEach((Ue) => {
              I.removeAttribute(Le.replace(xe, Ue));
            }), I.setAttribute(Le, Dt ? Dt.replace(/"|'/g, "") : "");
          } else
            I.setAttribute(he, xe);
        }
      }
    }, [xe, Q, I, K]), T.useEffect(() => {
      let je;
      if (O && _.current && $) {
        const he = $.createElement("style");
        he.appendChild($.createTextNode(_f)), $.head.appendChild(he), window.getComputedStyle($.body), je = setTimeout(() => {
          $.head.removeChild(he);
        }, 1);
      }
      return () => {
        clearTimeout(je);
      };
    }, [xe, O, $]), T.useEffect(() => (_.current = !0, () => {
      _.current = !1;
    }), []);
    const jt = T.useMemo(() => ({
      allColorSchemes: K,
      colorScheme: xe,
      darkColorScheme: Se,
      lightColorScheme: se,
      mode: Ae,
      setColorScheme: _e,
      setMode: process.env.NODE_ENV === "production" ? R : (je) => {
        be.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), R(je);
      },
      systemMode: ie
    }), [K, xe, Se, se, Ae, _e, R, ie, be.colorSchemeSelector]);
    let wt = !0;
    (p || L.cssVariables === !1 || H && V?.cssVarPrefix === z) && (wt = !1);
    const _t = /* @__PURE__ */ C.jsxs(T.Fragment, {
      children: [/* @__PURE__ */ C.jsx(qr, {
        themeId: D ? t : void 0,
        theme: be,
        children: P
      }), wt && /* @__PURE__ */ C.jsx(gi, {
        styles: be.generateStyleSheets?.() || []
      })]
    });
    return H ? _t : /* @__PURE__ */ C.jsx(u.Provider, {
      value: jt,
      children: _t
    });
  }
  process.env.NODE_ENV !== "production" && (g.propTypes = {
    /**
     * The component tree.
     */
    children: o.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: o.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: o.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: o.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: o.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: o.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: o.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: o.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: o.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: o.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: o.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: o.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: o.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: o.object
  });
  const b = typeof a == "string" ? a : a.light, f = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: g,
    useColorScheme: d,
    getInitColorSchemeScript: (w) => Mf({
      colorSchemeStorageKey: i,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: f,
      modeStorageKey: n,
      ...w
    })
  };
}
function Bf(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const i = n[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...n.slice(1))})` : `, ${i}`;
  }
  return (n, ...i) => `var(--${e ? `${e}-` : ""}${n}${t(...i)})`;
}
const As = (e, t, r, n = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = r : i && typeof i == "object" && (i[s] = r) : i && typeof i == "object" && (i[s] || (i[s] = n.includes(s) ? [] : {}), i = i[s]);
  });
}, Ff = (e, t, r) => {
  function n(i, s = [], a = []) {
    Object.entries(i).forEach(([c, l]) => {
      (!r || r && !r([...s, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...s, c], Array.isArray(l) ? [...a, c] : a) : t([...s, c], l, a));
    });
  }
  n(e);
}, Lf = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ko(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, i = {}, s = {}, a = {};
  return Ff(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const d = `--${r ? `${r}-` : ""}${c.join("-")}`, m = Lf(c, l);
        Object.assign(i, {
          [d]: m
        }), As(s, c, `var(${d})`, u), As(a, c, `var(${d}, ${m})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: s,
    varsWithDefaults: a
  };
}
function zf(e, t = {}) {
  const {
    getSelector: r = w,
    disableCssColorScheme: n,
    colorSchemeSelector: i,
    enableContrastVars: s
  } = t, {
    colorSchemes: a = {},
    components: c,
    defaultColorScheme: l = "light",
    ...u
  } = e, {
    vars: d,
    css: m,
    varsWithDefaults: y
  } = ko(u, t);
  let g = y;
  const b = {}, {
    [l]: f,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([v, h]) => {
    const {
      vars: O,
      css: k,
      varsWithDefaults: N
    } = ko(h, t);
    g = We(g, N), b[v] = {
      css: k,
      vars: O
    };
  }), f) {
    const {
      css: v,
      vars: h,
      varsWithDefaults: O
    } = ko(f, t);
    g = We(g, O), b[l] = {
      css: v,
      vars: h
    };
  }
  function w(v, h) {
    let O = i;
    if (i === "class" && (O = ".%s"), i === "data" && (O = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (O = `[${i}="%s"]`), v) {
      if (O === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${a[v]?.palette?.mode || v})`]: {
            ":root": h
          }
        };
      if (O)
        return e.defaultColorScheme === v ? `:root, ${O.replace("%s", String(v))}` : O.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let v = {
        ...d
      };
      return Object.entries(b).forEach(([, {
        vars: h
      }]) => {
        v = We(v, h);
      }), v;
    },
    generateStyleSheets: () => {
      const v = [], h = e.defaultColorScheme || "light";
      function O($, I) {
        Object.keys(I).length && v.push(typeof $ == "string" ? {
          [$]: {
            ...I
          }
        } : $);
      }
      O(r(void 0, {
        ...m
      }), m);
      const {
        [h]: k,
        ...N
      } = b;
      if (k) {
        const {
          css: $
        } = k, I = a[h]?.palette?.mode, B = !n && I ? {
          colorScheme: I,
          ...$
        } : {
          ...$
        };
        O(r(h, {
          ...B
        }), B);
      }
      return Object.entries(N).forEach(([$, {
        css: I
      }]) => {
        const B = a[$]?.palette?.mode, p = !n && B ? {
          colorScheme: B,
          ...I
        } : {
          ...I
        };
        O(r($, {
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
function Vf(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Wf = oo(), Uf = pf("div", {
  name: "MuiStack",
  slot: "Root"
});
function Hf(e) {
  return hf({
    props: e,
    name: "MuiStack",
    defaultTheme: Wf
  });
}
function qf(e, t) {
  const r = T.Children.toArray(e).filter(Boolean);
  return r.reduce((n, i, s) => (n.push(i), s < r.length - 1 && n.push(/* @__PURE__ */ T.cloneElement(t, {
    key: `separator-${s}`
  })), n), []);
}
const Yf = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Gf = ({
  ownerState: e,
  theme: t
}) => {
  let r = {
    display: "flex",
    flexDirection: "column",
    ...at({
      theme: t
    }, To({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (n) => ({
      flexDirection: n
    }))
  };
  if (e.spacing) {
    const n = Kn(t), i = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), s = To({
      values: e.direction,
      base: i
    }), a = To({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((l, u, d) => {
      if (!s[l]) {
        const y = u > 0 ? s[d[u - 1]] : "column";
        s[l] = y;
      }
    }), r = We(r, at({
      theme: t
    }, a, (l, u) => e.useFlexGap ? {
      gap: Gt(n, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Yf(u ? s[u] : e.direction)}`]: Gt(n, l)
      }
    }));
  }
  return r = au(t.breakpoints, r), r;
};
function Kf(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Uf,
    useThemeProps: r = Hf,
    componentName: n = "MuiStack"
  } = e, i = () => $e({
    root: ["root"]
  }, (l) => Te(n, l), {}), s = t(Gf), a = /* @__PURE__ */ T.forwardRef(function(l, u) {
    const d = r(l), m = ai(d), {
      component: y = "div",
      direction: g = "column",
      spacing: b = 0,
      divider: f,
      children: x,
      className: w,
      useFlexGap: P = !1,
      ...S
    } = m, v = {
      direction: g,
      spacing: b,
      useFlexGap: P
    }, h = i();
    return /* @__PURE__ */ C.jsx(s, {
      as: y,
      ownerState: v,
      ref: u,
      className: ne(h.root, w),
      ...S,
      children: f ? qf(x, f) : x
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: o.node,
    direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
    divider: o.node,
    spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
    sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
  }), a;
}
const Yr = {
  black: "#000",
  white: "#fff"
}, Xf = {
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
}, er = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, tr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Cr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, rr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, nr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, or = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function nc() {
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
      paper: Yr.white,
      default: Yr.white
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
const oc = nc();
function ic() {
  return {
    text: {
      primary: Yr.white,
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
      active: Yr.white,
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
const Wo = ic();
function js(e, t, r, n) {
  const i = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = co(e.main, i) : t === "dark" && (e.dark = ao(e.main, s)));
}
function _s(e, t, r, n, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Jf(e = "light") {
  return e === "dark" ? {
    main: rr[200],
    light: rr[50],
    dark: rr[400]
  } : {
    main: rr[700],
    light: rr[400],
    dark: rr[800]
  };
}
function Zf(e = "light") {
  return e === "dark" ? {
    main: er[200],
    light: er[50],
    dark: er[400]
  } : {
    main: er[500],
    light: er[300],
    dark: er[700]
  };
}
function Qf(e = "light") {
  return e === "dark" ? {
    main: tr[500],
    light: tr[300],
    dark: tr[700]
  } : {
    main: tr[700],
    light: tr[400],
    dark: tr[800]
  };
}
function ep(e = "light") {
  return e === "dark" ? {
    main: nr[400],
    light: nr[300],
    dark: nr[700]
  } : {
    main: nr[700],
    light: nr[500],
    dark: nr[900]
  };
}
function tp(e = "light") {
  return e === "dark" ? {
    main: or[400],
    light: or[300],
    dark: or[700]
  } : {
    main: or[800],
    light: or[500],
    dark: or[900]
  };
}
function rp(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Cr[500],
    dark: Cr[900]
  };
}
function np(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Ci(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || Jf(t), c = e.secondary || Zf(t), l = e.error || Qf(t), u = e.info || ep(t), d = e.success || tp(t), m = e.warning || rp(t);
  function y(x) {
    if (i)
      return np(x);
    const w = Ps(x, Wo.text.primary) >= r ? Wo.text.primary : oc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const P = Ps(x, w);
      P < 3 && console.error([`MUI: The contrast ratio of ${P}:1 for ${w} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const g = ({
    color: x,
    name: w,
    mainShade: P = 500,
    lightShade: S = 300,
    darkShade: v = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[P] && (x.main = x[P]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${P}\` property.` : vt(11, w ? ` (${w})` : "", P));
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
} });` : vt(12, w ? ` (${w})` : "", JSON.stringify(x.main)));
    return i ? (_s(i, x, "light", S, n), _s(i, x, "dark", v, n)) : (js(x, "light", S, n), js(x, "dark", v, n)), x.contrastText || (x.contrastText = y(x.main)), x;
  };
  let b;
  return t === "light" ? b = nc() : t === "dark" && (b = ic()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), We({
    // A collection of common colors.
    common: {
      ...Yr
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
    grey: Xf,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b
  }, s);
}
function op(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [i, s] = n;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function ip(e, t) {
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
function sp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ds = {
  textTransform: "uppercase"
}, Bs = '"Roboto", "Helvetica", "Arial", sans-serif';
function sc(e, t) {
  const {
    fontFamily: r = Bs,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: i = 300,
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
  const y = n / 14, g = d || ((x) => `${x / l * y}rem`), b = (x, w, P, S, v) => ({
    fontFamily: r,
    fontWeight: x,
    fontSize: g(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Bs ? {
      letterSpacing: `${sp(S / w)}em`
    } : {},
    ...v,
    ...u
  }), f = {
    h1: b(i, 96, 1.167, -1.5),
    h2: b(i, 60, 1.2, -0.5),
    h3: b(s, 48, 1.167, 0),
    h4: b(s, 34, 1.235, 0.25),
    h5: b(s, 24, 1.334, 0),
    h6: b(a, 20, 1.6, 0.15),
    subtitle1: b(s, 16, 1.75, 0.15),
    subtitle2: b(a, 14, 1.57, 0.1),
    body1: b(s, 16, 1.5, 0.15),
    body2: b(s, 14, 1.43, 0.15),
    button: b(a, 14, 1.75, 0.4, Ds),
    caption: b(s, 12, 1.66, 0.4),
    overline: b(s, 12, 2.66, 1, Ds),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return We({
    htmlFontSize: l,
    pxToRem: g,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...f
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const ap = 0.2, cp = 0.14, lp = 0.12;
function Ee(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ap})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${cp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${lp})`].join(",");
}
const up = ["none", Ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], dp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, fp = {
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
function Fs(e) {
  return `${Math.round(e)}ms`;
}
function pp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function mp(e) {
  const t = {
    ...dp,
    ...e.easing
  }, r = {
    ...fp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: pp,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (y) => typeof y == "string", m = (y) => !Number.isNaN(parseFloat(y));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Fs(a)} ${c} ${typeof l == "string" ? l : Fs(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const hp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function gp(e) {
  return dt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ac(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const i = Object.entries(n);
    for (let s = 0; s < i.length; s++) {
      const [a, c] = i[s];
      !gp(c) || a.startsWith("unstable_") ? delete n[a] : dt(c) && (n[a] = {
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
function Ls(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const yp = (e) => {
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
function bp(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : An(t, yp(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Ls(r)})` : co(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Ls(r)})` : ao(t, r);
    }
  });
}
function Uo(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: i,
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : vt(20));
  const m = Ci({
    ...s,
    colorSpace: u
  }), y = oo(e);
  let g = We(y, {
    mixins: ip(y.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: up.slice(),
    typography: sc(m, c),
    transitions: mp(a),
    zIndex: {
      ...hp
    }
  });
  if (g = We(g, d), g = t.reduce((b, f) => We(b, f), g), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (x, w) => {
      let P;
      for (P in x) {
        const S = x[P];
        if (b.includes(P) && Object.keys(S).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Te("", P);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${P}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: S
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
    ...Qr,
    ...d?.unstable_sxConfig
  }, g.unstable_sx = function(f) {
    return kt({
      sx: f,
      theme: this
    });
  }, g.toRuntimeSource = ac, bp(g), g;
}
function Ho(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const vp = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Ho(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function cc(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function lc(e) {
  return e === "dark" ? vp : [];
}
function xp(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: i,
    ...s
  } = e, a = Ci({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...cc(a.mode),
      ...r
    },
    overlays: n || lc(a.mode),
    ...s
  };
}
function Sp(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Ep = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Tp = (e) => (t, r) => {
  const n = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ep(e.cssVarPrefix).forEach((c) => {
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
function wp(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function F(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Mr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ja(e);
}
function yt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = $r(Mr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Cp(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ct = (e) => {
  try {
    return e();
  } catch {
  }
}, Op = (e = "mui") => Bf(e);
function $o(e, t, r, n, i) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const s = i === "dark" ? "dark" : "light";
  if (!n) {
    t[i] = xp({
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
  } = Uo({
    ...n,
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
      ...cc(s),
      ...r?.opacity
    },
    overlays: r?.overlays || lc(s)
  }, c;
}
function Pp(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: c = Sp,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, m = Object.keys(r)[0], y = n || (r.light && m !== "light" ? "light" : m), g = Op(s), {
    [y]: b,
    light: f,
    dark: x,
    ...w
  } = r, P = {
    ...w
  };
  let S = b;
  if ((y === "dark" && !("dark" in r) || y === "light" && !("light" in r)) && (S = !0), !S)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${y}\` option is either missing or invalid.` : vt(21, y));
  let v;
  a && (v = "oklch");
  const h = $o(v, P, S, d, y);
  f && !P.light && $o(v, P, f, void 0, "light"), x && !P.dark && $o(v, P, x, void 0, "dark");
  let O = {
    defaultColorScheme: y,
    ...h,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: g,
    colorSchemes: P,
    font: {
      ...op(h.typography),
      ...h.font
    },
    spacing: Cp(d.spacing)
  };
  Object.keys(O.colorSchemes).forEach((B) => {
    const p = O.colorSchemes[B].palette, A = (j) => {
      const _ = j.split("-"), V = _[1], X = _[2];
      return g(j, p[V][X]);
    };
    p.mode === "light" && (F(p.common, "background", "#fff"), F(p.common, "onBackground", "#000")), p.mode === "dark" && (F(p.common, "background", "#000"), F(p.common, "onBackground", "#fff"));
    function M(j, _, V) {
      if (v) {
        let X;
        return j === Ft && (X = `transparent ${((1 - V) * 100).toFixed(0)}%`), j === pe && (X = `#000 ${(V * 100).toFixed(0)}%`), j === me && (X = `#fff ${(V * 100).toFixed(0)}%`), `color-mix(in ${v}, ${_}, ${X})`;
      }
      return j(_, V);
    }
    if (wp(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      F(p.Alert, "errorColor", M(pe, p.error.light, 0.6)), F(p.Alert, "infoColor", M(pe, p.info.light, 0.6)), F(p.Alert, "successColor", M(pe, p.success.light, 0.6)), F(p.Alert, "warningColor", M(pe, p.warning.light, 0.6)), F(p.Alert, "errorFilledBg", A("palette-error-main")), F(p.Alert, "infoFilledBg", A("palette-info-main")), F(p.Alert, "successFilledBg", A("palette-success-main")), F(p.Alert, "warningFilledBg", A("palette-warning-main")), F(p.Alert, "errorFilledColor", ct(() => p.getContrastText(p.error.main))), F(p.Alert, "infoFilledColor", ct(() => p.getContrastText(p.info.main))), F(p.Alert, "successFilledColor", ct(() => p.getContrastText(p.success.main))), F(p.Alert, "warningFilledColor", ct(() => p.getContrastText(p.warning.main))), F(p.Alert, "errorStandardBg", M(me, p.error.light, 0.9)), F(p.Alert, "infoStandardBg", M(me, p.info.light, 0.9)), F(p.Alert, "successStandardBg", M(me, p.success.light, 0.9)), F(p.Alert, "warningStandardBg", M(me, p.warning.light, 0.9)), F(p.Alert, "errorIconColor", A("palette-error-main")), F(p.Alert, "infoIconColor", A("palette-info-main")), F(p.Alert, "successIconColor", A("palette-success-main")), F(p.Alert, "warningIconColor", A("palette-warning-main")), F(p.AppBar, "defaultBg", A("palette-grey-100")), F(p.Avatar, "defaultBg", A("palette-grey-400")), F(p.Button, "inheritContainedBg", A("palette-grey-300")), F(p.Button, "inheritContainedHoverBg", A("palette-grey-A100")), F(p.Chip, "defaultBorder", A("palette-grey-400")), F(p.Chip, "defaultAvatarColor", A("palette-grey-700")), F(p.Chip, "defaultIconColor", A("palette-grey-700")), F(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(p.LinearProgress, "primaryBg", M(me, p.primary.main, 0.62)), F(p.LinearProgress, "secondaryBg", M(me, p.secondary.main, 0.62)), F(p.LinearProgress, "errorBg", M(me, p.error.main, 0.62)), F(p.LinearProgress, "infoBg", M(me, p.info.main, 0.62)), F(p.LinearProgress, "successBg", M(me, p.success.main, 0.62)), F(p.LinearProgress, "warningBg", M(me, p.warning.main, 0.62)), F(p.Skeleton, "bg", v ? M(Ft, p.text.primary, 0.11) : `rgba(${A("palette-text-primaryChannel")} / 0.11)`), F(p.Slider, "primaryTrack", M(me, p.primary.main, 0.62)), F(p.Slider, "secondaryTrack", M(me, p.secondary.main, 0.62)), F(p.Slider, "errorTrack", M(me, p.error.main, 0.62)), F(p.Slider, "infoTrack", M(me, p.info.main, 0.62)), F(p.Slider, "successTrack", M(me, p.success.main, 0.62)), F(p.Slider, "warningTrack", M(me, p.warning.main, 0.62));
      const j = v ? M(pe, p.background.default, 0.6825) : yn(p.background.default, 0.8);
      F(p.SnackbarContent, "bg", j), F(p.SnackbarContent, "color", ct(() => v ? Wo.text.primary : p.getContrastText(j))), F(p.SpeedDialAction, "fabHoverBg", yn(p.background.paper, 0.15)), F(p.StepConnector, "border", A("palette-grey-400")), F(p.StepContent, "border", A("palette-grey-400")), F(p.Switch, "defaultColor", A("palette-common-white")), F(p.Switch, "defaultDisabledColor", A("palette-grey-100")), F(p.Switch, "primaryDisabledColor", M(me, p.primary.main, 0.62)), F(p.Switch, "secondaryDisabledColor", M(me, p.secondary.main, 0.62)), F(p.Switch, "errorDisabledColor", M(me, p.error.main, 0.62)), F(p.Switch, "infoDisabledColor", M(me, p.info.main, 0.62)), F(p.Switch, "successDisabledColor", M(me, p.success.main, 0.62)), F(p.Switch, "warningDisabledColor", M(me, p.warning.main, 0.62)), F(p.TableCell, "border", M(me, M(Ft, p.divider, 1), 0.88)), F(p.Tooltip, "bg", M(Ft, p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      F(p.Alert, "errorColor", M(me, p.error.light, 0.6)), F(p.Alert, "infoColor", M(me, p.info.light, 0.6)), F(p.Alert, "successColor", M(me, p.success.light, 0.6)), F(p.Alert, "warningColor", M(me, p.warning.light, 0.6)), F(p.Alert, "errorFilledBg", A("palette-error-dark")), F(p.Alert, "infoFilledBg", A("palette-info-dark")), F(p.Alert, "successFilledBg", A("palette-success-dark")), F(p.Alert, "warningFilledBg", A("palette-warning-dark")), F(p.Alert, "errorFilledColor", ct(() => p.getContrastText(p.error.dark))), F(p.Alert, "infoFilledColor", ct(() => p.getContrastText(p.info.dark))), F(p.Alert, "successFilledColor", ct(() => p.getContrastText(p.success.dark))), F(p.Alert, "warningFilledColor", ct(() => p.getContrastText(p.warning.dark))), F(p.Alert, "errorStandardBg", M(pe, p.error.light, 0.9)), F(p.Alert, "infoStandardBg", M(pe, p.info.light, 0.9)), F(p.Alert, "successStandardBg", M(pe, p.success.light, 0.9)), F(p.Alert, "warningStandardBg", M(pe, p.warning.light, 0.9)), F(p.Alert, "errorIconColor", A("palette-error-main")), F(p.Alert, "infoIconColor", A("palette-info-main")), F(p.Alert, "successIconColor", A("palette-success-main")), F(p.Alert, "warningIconColor", A("palette-warning-main")), F(p.AppBar, "defaultBg", A("palette-grey-900")), F(p.AppBar, "darkBg", A("palette-background-paper")), F(p.AppBar, "darkColor", A("palette-text-primary")), F(p.Avatar, "defaultBg", A("palette-grey-600")), F(p.Button, "inheritContainedBg", A("palette-grey-800")), F(p.Button, "inheritContainedHoverBg", A("palette-grey-700")), F(p.Chip, "defaultBorder", A("palette-grey-700")), F(p.Chip, "defaultAvatarColor", A("palette-grey-300")), F(p.Chip, "defaultIconColor", A("palette-grey-300")), F(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(p.LinearProgress, "primaryBg", M(pe, p.primary.main, 0.5)), F(p.LinearProgress, "secondaryBg", M(pe, p.secondary.main, 0.5)), F(p.LinearProgress, "errorBg", M(pe, p.error.main, 0.5)), F(p.LinearProgress, "infoBg", M(pe, p.info.main, 0.5)), F(p.LinearProgress, "successBg", M(pe, p.success.main, 0.5)), F(p.LinearProgress, "warningBg", M(pe, p.warning.main, 0.5)), F(p.Skeleton, "bg", v ? M(Ft, p.text.primary, 0.13) : `rgba(${A("palette-text-primaryChannel")} / 0.13)`), F(p.Slider, "primaryTrack", M(pe, p.primary.main, 0.5)), F(p.Slider, "secondaryTrack", M(pe, p.secondary.main, 0.5)), F(p.Slider, "errorTrack", M(pe, p.error.main, 0.5)), F(p.Slider, "infoTrack", M(pe, p.info.main, 0.5)), F(p.Slider, "successTrack", M(pe, p.success.main, 0.5)), F(p.Slider, "warningTrack", M(pe, p.warning.main, 0.5));
      const j = v ? M(me, p.background.default, 0.985) : yn(p.background.default, 0.98);
      F(p.SnackbarContent, "bg", j), F(p.SnackbarContent, "color", ct(() => v ? oc.text.primary : p.getContrastText(j))), F(p.SpeedDialAction, "fabHoverBg", yn(p.background.paper, 0.15)), F(p.StepConnector, "border", A("palette-grey-600")), F(p.StepContent, "border", A("palette-grey-600")), F(p.Switch, "defaultColor", A("palette-grey-300")), F(p.Switch, "defaultDisabledColor", A("palette-grey-600")), F(p.Switch, "primaryDisabledColor", M(pe, p.primary.main, 0.55)), F(p.Switch, "secondaryDisabledColor", M(pe, p.secondary.main, 0.55)), F(p.Switch, "errorDisabledColor", M(pe, p.error.main, 0.55)), F(p.Switch, "infoDisabledColor", M(pe, p.info.main, 0.55)), F(p.Switch, "successDisabledColor", M(pe, p.success.main, 0.55)), F(p.Switch, "warningDisabledColor", M(pe, p.warning.main, 0.55)), F(p.TableCell, "border", M(pe, M(Ft, p.divider, 1), 0.68)), F(p.Tooltip, "bg", M(Ft, p.grey[700], 0.92));
    }
    yt(p.background, "default"), yt(p.background, "paper"), yt(p.common, "background"), yt(p.common, "onBackground"), yt(p, "divider"), Object.keys(p).forEach((j) => {
      const _ = p[j];
      j !== "tonalOffset" && _ && typeof _ == "object" && (_.main && F(p[j], "mainChannel", $r(Mr(_.main))), _.light && F(p[j], "lightChannel", $r(Mr(_.light))), _.dark && F(p[j], "darkChannel", $r(Mr(_.dark))), _.contrastText && F(p[j], "contrastTextChannel", $r(Mr(_.contrastText))), j === "text" && (yt(p[j], "primary"), yt(p[j], "secondary")), j === "action" && (_.active && yt(p[j], "active"), _.selected && yt(p[j], "selected")));
    });
  }), O = t.reduce((B, p) => We(B, p), O);
  const k = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: c,
    getSelector: Tp(O),
    enableContrastVars: a
  }, {
    vars: N,
    generateThemeVars: $,
    generateStyleSheets: I
  } = zf(O, k);
  return O.vars = N, Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([B, p]) => {
    O[B] = p;
  }), O.generateThemeVars = $, O.generateStyleSheets = I, O.generateSpacing = function() {
    return Ha(d.spacing, Kn(this));
  }, O.getColorSchemeSelector = Vf(l), O.spacing = O.generateSpacing(), O.shouldSkipGeneratingVar = c, O.unstable_sxConfig = {
    ...Qr,
    ...d?.unstable_sxConfig
  }, O.unstable_sx = function(p) {
    return kt({
      sx: p,
      theme: this
    });
  }, O.toRuntimeSource = ac, O;
}
function zs(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Ci({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function fo(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: i = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r?.mode,
    ...a
  } = e, c = s || "light", l = i?.[c], u = {
    ...i,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Uo(e, ...t);
    let d = r;
    "palette" in e || u[c] && (u[c] !== !0 ? d = u[c].palette : c === "dark" && (d = {
      mode: "dark"
    }));
    const m = Uo({
      ...e,
      palette: d
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, zs(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, zs(m, "light", u.light)), m;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), Pp({
    ...a,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Oi = fo(), pt = "$$material";
function nn() {
  const e = io(Oi);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[pt] || e;
}
function uc(e) {
  return /* @__PURE__ */ C.jsx(bi, {
    ...e,
    defaultTheme: Oi,
    themeId: pt
  });
}
process.env.NODE_ENV !== "production" && (uc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Rp(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Qt = (e) => Rp(e) && e !== "classes", te = Ka({
  themeId: pt,
  defaultTheme: Oi,
  rootShouldForwardProp: Qt
});
function dc(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ C.jsx(uc, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
function kp() {
  return ai;
}
const Ce = kf;
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function Oe(e) {
  return Cf(e);
}
function $p(e) {
  return Te("MuiSvgIcon", e);
}
ve("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Mp = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ee(t)}`, `fontSize${ee(r)}`]
  };
  return $e(i, $p, n);
}, Np = te("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ee(r.color)}`], t[`fontSize${ee(r.fontSize)}`]];
  }
})(Ce(({
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
}))), _n = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: m,
    viewBox: y = "0 0 24 24",
    ...g
  } = n, b = /* @__PURE__ */ T.isValidElement(i) && i.type === "svg", f = {
    ...n,
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: y,
    hasSvgAsChild: b
  }, x = {};
  d || (x.viewBox = y);
  const w = Mp(f);
  return /* @__PURE__ */ C.jsxs(Np, {
    as: c,
    className: ne(w.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r,
    ...x,
    ...g,
    ...b && i.props,
    ownerState: f,
    children: [b ? i.props.children : i, m ? /* @__PURE__ */ C.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (_n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
_n.muiName = "SvgIcon";
function De(e, t) {
  function r(n, i) {
    return /* @__PURE__ */ C.jsx(_n, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = _n.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(r));
}
function Ip(e, t = 166) {
  let r;
  function n(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function nt(e) {
  return e && e.ownerDocument || document;
}
function Kt(e) {
  return nt(e).defaultView || window;
}
function Vs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function fc(e) {
  const {
    controlled: t,
    default: r,
    name: n,
    state: i = "value"
  } = e, {
    current: s
  } = T.useRef(t !== void 0), [a, c] = T.useState(r), l = s ? t : a;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      s !== (t !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${i} state of ${n} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [i, n, t]);
    const {
      current: d
    } = T.useRef(r);
    T.useEffect(() => {
      !s && !Object.is(d, r) && console.error([`MUI: A component is changing the default ${i} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const u = T.useCallback((d) => {
    s || c(d);
  }, []);
  return [l, u];
}
function Rt(e) {
  const t = T.useRef(e);
  return xt(() => {
    t.current = e;
  }), T.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Ke(...e) {
  const t = T.useRef(void 0), r = T.useCallback((n) => {
    const i = e.map((s) => {
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
      i.forEach((s) => s?.());
    };
  }, e);
  return T.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
function Ap(e, t) {
  const r = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && r >= 65 && r <= 90 && typeof t == "function";
}
function jp(e, t) {
  if (!e)
    return t;
  function r(a, c) {
    const l = {};
    return Object.keys(c).forEach((u) => {
      Ap(u, c[u]) && typeof a[u] == "function" && (l[u] = (...d) => {
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
  const n = t, i = r(e, n), s = ne(n?.className, e?.className);
  return {
    ...t,
    ...e,
    ...i,
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
const pc = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle"), _p = De(/* @__PURE__ */ C.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutline"), Dp = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z"
}), "Sync"), Ws = De(/* @__PURE__ */ C.jsx("path", {
  d: "M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33m-7.14-.94 2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64z"
}), "SyncDisabled");
function Nt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Bp(e) {
  return typeof e.main == "string";
}
function Fp(e, t = []) {
  if (!Bp(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function St(e = []) {
  return ([, t]) => t && Fp(t, e);
}
const It = o.oneOfType([o.func, o.object]);
function Lp(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function zp(e, t, r, n, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof s == "function" && !Lp(s) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const mc = Nt(o.elementType, zp);
function Dn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Us = {};
function hc(e, t) {
  const r = T.useRef(Us);
  return r.current === Us && (r.current = e(t)), r;
}
class Bn {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Bn();
  }
  static use() {
    const t = hc(Bn.create).current, [r, n] = T.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, T.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = Wp(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Vp() {
  return Bn.use();
}
function Wp() {
  let e, t;
  const r = new Promise((n, i) => {
    e = n, t = i;
  });
  return r.resolve = e, r.reject = t, r;
}
function gc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function qo(e, t) {
  return qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, qo(e, t);
}
function yc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, qo(e, t);
}
const Hs = {
  disabled: !1
};
var Up = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const Fn = oe.createContext(null);
var Hp = function(t) {
  return t.scrollTop;
}, Nr = "unmounted", Vt = "exited", Wt = "entering", ar = "entered", Yo = "exiting", gt = /* @__PURE__ */ function(e) {
  yc(t, e);
  function t(n, i) {
    var s;
    s = e.call(this, n, i) || this;
    var a = i, c = a && !a.isMounting ? n.enter : n.appear, l;
    return s.appearStatus = null, n.in ? c ? (l = Vt, s.appearStatus = Wt) : l = ar : n.unmountOnExit || n.mountOnEnter ? l = Nr : l = Vt, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Nr ? {
      status: Vt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Wt && a !== ar && (s = Wt) : (a === Wt || a === ar) && (s = Yo);
    }
    this.updateStatus(!1, s);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, s, a, c;
    return s = a = c = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, c = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: c
    };
  }, r.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Wt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : un.findDOMNode(this);
          a && Hp(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Vt && this.setState({
      status: Nr
    });
  }, r.performEnter = function(i) {
    var s = this, a = this.props.enter, c = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [c] : [un.findDOMNode(this), c], u = l[0], d = l[1], m = this.getTimeouts(), y = c ? m.appear : m.enter;
    if (!i && !a || Hs.disabled) {
      this.safeSetState({
        status: ar
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Wt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(y, function() {
        s.safeSetState({
          status: ar
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : un.findDOMNode(this);
    if (!s || Hs.disabled) {
      this.safeSetState({
        status: Vt
      }, function() {
        i.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: Yo
    }, function() {
      i.props.onExiting(c), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Vt
        }, function() {
          i.props.onExited(c);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, r.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(c) {
      a && (a = !1, s.nextCallback = null, i(c));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : un.findDOMNode(this), c = i == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], d = l[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === Nr)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var c = gc(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ oe.createElement(Fn.Provider, {
        value: null
      }, typeof a == "function" ? a(i, c) : oe.cloneElement(oe.Children.only(a), c))
    );
  }, t;
}(oe.Component);
gt.contextType = Fn;
gt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, r, n, i, s) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, i, s);
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
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
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
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
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
    var r = Up;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
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
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function ir() {
}
gt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ir,
  onEntering: ir,
  onEntered: ir,
  onExit: ir,
  onExiting: ir,
  onExited: ir
};
gt.UNMOUNTED = Nr;
gt.EXITED = Vt;
gt.ENTERING = Wt;
gt.ENTERED = ar;
gt.EXITING = Yo;
function qp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pi(e, t) {
  var r = function(s) {
    return t && Tn(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Dl.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    n[i.key] = r(i);
  }), n;
}
function Yp(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (n[s] = i, i = []) : i.push(s);
  var a, c = {};
  for (var l in t) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var u = n[l][a];
        c[n[l][a]] = r(u);
      }
    c[l] = r(l);
  }
  for (a = 0; a < i.length; a++)
    c[i[a]] = r(i[a]);
  return c;
}
function Ht(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Gp(e, t) {
  return Pi(e.children, function(r) {
    return wn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ht(r, "appear", e),
      enter: Ht(r, "enter", e),
      exit: Ht(r, "exit", e)
    });
  });
}
function Kp(e, t, r) {
  var n = Pi(e.children), i = Yp(t, n);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (Tn(a)) {
      var c = s in t, l = s in n, u = t[s], d = Tn(u) && !u.props.in;
      l && (!c || d) ? i[s] = wn(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Ht(a, "exit", e),
        enter: Ht(a, "enter", e)
      }) : !l && c && !d ? i[s] = wn(a, {
        in: !1
      }) : l && c && Tn(u) && (i[s] = wn(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Ht(a, "exit", e),
        enter: Ht(a, "enter", e)
      }));
    }
  }), i;
}
var Xp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Jp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ri = /* @__PURE__ */ function(e) {
  yc(t, e);
  function t(n, i) {
    var s;
    s = e.call(this, n, i) || this;
    var a = s.handleExited.bind(qp(s));
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
    var a = s.children, c = s.handleExited, l = s.firstRender;
    return {
      children: l ? Gp(i, c) : Kp(i, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(i, s) {
    var a = Pi(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(c) {
      var l = Nn({}, c.children);
      return delete l[i.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, c = gc(i, ["component", "childFactory"]), l = this.state.contextValue, u = Xp(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, s === null ? /* @__PURE__ */ oe.createElement(Fn.Provider, {
      value: l
    }, u) : /* @__PURE__ */ oe.createElement(Fn.Provider, {
      value: l
    }, /* @__PURE__ */ oe.createElement(s, c, u));
  }, t;
}(oe.Component);
Ri.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
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
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
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
  childFactory: o.func
} : {};
Ri.defaultProps = Jp;
const Zp = [];
function Qp(e) {
  T.useEffect(e, Zp);
}
class po {
  static create() {
    return new po();
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
function cr() {
  const e = hc(po.create).current;
  return Qp(e.disposeEffect), e;
}
function bc(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: u
  } = e, [d, m] = T.useState(!1), y = ne(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, b = ne(r.child, d && r.childLeaving, n && r.childPulsate);
  return !c && !d && m(!0), T.useEffect(() => {
    if (!c && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ C.jsx("span", {
    className: y,
    style: g,
    children: /* @__PURE__ */ C.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (bc.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const et = ve("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Go = 550, em = 80, tm = br`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, rm = br`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, nm = br`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, om = te("span", {
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
}), im = te(bc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${et.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${tm};
    animation-duration: ${Go}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${et.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${et.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${et.childLeaving} {
    opacity: 0;
    animation-name: ${rm};
    animation-duration: ${Go}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${et.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${nm};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, vc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...c
  } = n, [l, u] = T.useState([]), d = T.useRef(0), m = T.useRef(null);
  T.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const y = T.useRef(!1), g = cr(), b = T.useRef(null), f = T.useRef(null), x = T.useCallback((v) => {
    const {
      pulsate: h,
      rippleX: O,
      rippleY: k,
      rippleSize: N,
      cb: $
    } = v;
    u((I) => [...I, /* @__PURE__ */ C.jsx(im, {
      classes: {
        ripple: ne(s.ripple, et.ripple),
        rippleVisible: ne(s.rippleVisible, et.rippleVisible),
        ripplePulsate: ne(s.ripplePulsate, et.ripplePulsate),
        child: ne(s.child, et.child),
        childLeaving: ne(s.childLeaving, et.childLeaving),
        childPulsate: ne(s.childPulsate, et.childPulsate)
      },
      timeout: Go,
      pulsate: h,
      rippleX: O,
      rippleY: k,
      rippleSize: N
    }, d.current)]), d.current += 1, m.current = $;
  }, [s]), w = T.useCallback((v = {}, h = {}, O = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: N = i || h.pulsate,
      fakeElement: $ = !1
      // For test purposes
    } = h;
    if (v?.type === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    v?.type === "touchstart" && (y.current = !0);
    const I = $ ? null : f.current, B = I ? I.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let p, A, M;
    if (N || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      p = Math.round(B.width / 2), A = Math.round(B.height / 2);
    else {
      const {
        clientX: j,
        clientY: _
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      p = Math.round(j - B.left), A = Math.round(_ - B.top);
    }
    if (N)
      M = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), M % 2 === 0 && (M += 1);
    else {
      const j = Math.max(Math.abs((I ? I.clientWidth : 0) - p), p) * 2 + 2, _ = Math.max(Math.abs((I ? I.clientHeight : 0) - A), A) * 2 + 2;
      M = Math.sqrt(j ** 2 + _ ** 2);
    }
    v?.touches ? b.current === null && (b.current = () => {
      x({
        pulsate: k,
        rippleX: p,
        rippleY: A,
        rippleSize: M,
        cb: O
      });
    }, g.start(em, () => {
      b.current && (b.current(), b.current = null);
    })) : x({
      pulsate: k,
      rippleX: p,
      rippleY: A,
      rippleSize: M,
      cb: O
    });
  }, [i, x, g]), P = T.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), S = T.useCallback((v, h) => {
    if (g.clear(), v?.type === "touchend" && b.current) {
      b.current(), b.current = null, g.start(0, () => {
        S(v, h);
      });
      return;
    }
    b.current = null, u((O) => O.length > 0 ? O.slice(1) : O), m.current = h;
  }, [g]);
  return T.useImperativeHandle(r, () => ({
    pulsate: P,
    start: w,
    stop: S
  }), [P, w, S]), /* @__PURE__ */ C.jsx(om, {
    className: ne(et.root, s.root, a),
    ref: f,
    ...c,
    children: /* @__PURE__ */ C.jsx(Ri, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (vc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
function sm(e) {
  return Te("MuiButtonBase", e);
}
const am = ve("MuiButtonBase", ["root", "disabled", "focusVisible"]), cm = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: i
  } = e, a = $e({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, sm, i);
  return r && n && (a.root += ` ${n}`), a;
}, lm = te("button", {
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
  [`&.${am.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), on = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: m = !1,
    focusRipple: y = !1,
    focusVisibleClassName: g,
    LinkComponent: b = "a",
    onBlur: f,
    onClick: x,
    onContextMenu: w,
    onDragLeave: P,
    onFocus: S,
    onFocusVisible: v,
    onKeyDown: h,
    onKeyUp: O,
    onMouseDown: k,
    onMouseLeave: N,
    onMouseUp: $,
    onTouchEnd: I,
    onTouchMove: B,
    onTouchStart: p,
    tabIndex: A = 0,
    TouchRippleProps: M,
    touchRippleRef: j,
    type: _,
    ...V
  } = n, X = T.useRef(null), H = Vp(), E = Ke(H.ref, j), [D, L] = T.useState(!1);
  u && D && L(!1), T.useImperativeHandle(i, () => ({
    focusVisible: () => {
      L(!0), X.current.focus();
    }
  }), []);
  const W = H.shouldMount && !d && !u;
  T.useEffect(() => {
    D && y && !d && H.pulsate();
  }, [d, y, D, H]);
  const U = bt(H, "start", k, m), z = bt(H, "stop", w, m), Y = bt(H, "stop", P, m), K = bt(H, "stop", $, m), G = bt(H, "stop", (Q) => {
    D && Q.preventDefault(), N && N(Q);
  }, m), Z = bt(H, "start", p, m), q = bt(H, "stop", I, m), J = bt(H, "stop", B, m), R = bt(H, "stop", (Q) => {
    Dn(Q.target) || L(!1), f && f(Q);
  }, !1), ie = Rt((Q) => {
    X.current || (X.current = Q.currentTarget), Dn(Q.target) && (L(!0), v && v(Q)), S && S(Q);
  }), se = () => {
    const Q = X.current;
    return l && l !== "button" && !(Q.tagName === "A" && Q.href);
  }, Se = Rt((Q) => {
    y && !Q.repeat && D && Q.key === " " && H.stop(Q, () => {
      H.start(Q);
    }), Q.target === Q.currentTarget && se() && Q.key === " " && Q.preventDefault(), h && h(Q), Q.target === Q.currentTarget && se() && Q.key === "Enter" && !u && (Q.preventDefault(), x && x(Q));
  }), Qe = Rt((Q) => {
    y && Q.key === " " && D && !Q.defaultPrevented && H.stop(Q, () => {
      H.pulsate(Q);
    }), O && O(Q), x && Q.target === Q.currentTarget && se() && Q.key === " " && !Q.defaultPrevented && x(Q);
  });
  let _e = l;
  _e === "button" && (V.href || V.to) && (_e = b);
  const Ae = {};
  _e === "button" ? (Ae.type = _ === void 0 ? "button" : _, Ae.disabled = u) : (!V.href && !V.to && (Ae.role = "button"), u && (Ae["aria-disabled"] = u));
  const xe = Ke(r, X), Me = {
    ...n,
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: y,
    tabIndex: A,
    focusVisible: D
  }, be = cm(Me);
  return /* @__PURE__ */ C.jsxs(lm, {
    as: _e,
    className: ne(be.root, c),
    ownerState: Me,
    onBlur: R,
    onClick: x,
    onContextMenu: z,
    onFocus: ie,
    onKeyDown: Se,
    onKeyUp: Qe,
    onMouseDown: U,
    onMouseLeave: G,
    onMouseUp: K,
    onDragLeave: Y,
    onTouchEnd: q,
    onTouchMove: J,
    onTouchStart: Z,
    ref: xe,
    tabIndex: u ? -1 : A,
    type: _,
    ...Ae,
    ...V,
    children: [a, W ? /* @__PURE__ */ C.jsx(vc, {
      ref: E,
      center: s,
      ...M
    }) : null]
  });
});
function bt(e, t, r, n = !1) {
  return Rt((i) => (r && r(i), n || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (on.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: It,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: mc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
function um(e) {
  return Te("MuiCircularProgress", e);
}
ve("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Ot = 44, Ko = br`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Xo = br`
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
`, dm = typeof Ko != "string" ? hi`
        animation: ${Ko} 1.4s linear infinite;
      ` : null, fm = typeof Xo != "string" ? hi`
        animation: ${Xo} 1.4s ease-in-out infinite;
      ` : null, pm = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: i
  } = e, s = {
    root: ["root", r, `color${ee(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ee(r)}`, i && "circleDisableShrink"]
  };
  return $e(s, um, t);
}, mm = te("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ee(r.color)}`]];
  }
})(Ce(({
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
    style: dm || {
      animation: `${Ko} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), hm = te("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), gm = te("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ee(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(Ce(({
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
    style: fm || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Xo} 1.4s ease-in-out infinite`
    }
  }]
}))), ki = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: s = "primary",
    disableShrink: a = !1,
    size: c = 40,
    style: l,
    thickness: u = 3.6,
    value: d = 0,
    variant: m = "indeterminate",
    ...y
  } = n, g = {
    ...n,
    color: s,
    disableShrink: a,
    size: c,
    thickness: u,
    value: d,
    variant: m
  }, b = pm(g), f = {}, x = {}, w = {};
  if (m === "determinate") {
    const P = 2 * Math.PI * ((Ot - u) / 2);
    f.strokeDasharray = P.toFixed(3), w["aria-valuenow"] = Math.round(d), f.strokeDashoffset = `${((100 - d) / 100 * P).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ C.jsx(mm, {
    className: ne(b.root, i),
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
    ...y,
    children: /* @__PURE__ */ C.jsx(hm, {
      className: b.svg,
      ownerState: g,
      viewBox: `${Ot / 2} ${Ot / 2} ${Ot} ${Ot}`,
      children: /* @__PURE__ */ C.jsx(gm, {
        className: b.circle,
        style: f,
        ownerState: g,
        cx: Ot,
        cy: Ot,
        r: (Ot - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ki.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Nt(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: o.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: o.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["determinate", "indeterminate"])
});
function ym(e) {
  return Te("MuiIconButton", e);
}
const qs = ve("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), bm = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: i,
    size: s,
    loading: a
  } = e, c = {
    root: ["root", a && "loading", r && "disabled", n !== "default" && `color${ee(n)}`, i && `edge${ee(i)}`, `size${ee(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return $e(c, ym, t);
}, vm = te(on, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${ee(r.color)}`], r.edge && t[`edge${ee(r.edge)}`], t[`size${ee(r.size)}`]];
  }
})(Ce(({
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
})), Ce(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(St()).map(([t]) => ({
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
  [`&.${qs.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${qs.loading}`]: {
    color: "transparent"
  }
}))), xm = te("span", {
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
})), xc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: d = "medium",
    id: m,
    loading: y = null,
    loadingIndicator: g,
    ...b
  } = n, f = uo(m), x = g ?? /* @__PURE__ */ C.jsx(ki, {
    "aria-labelledby": f,
    color: "inherit",
    size: 16
  }), w = {
    ...n,
    edge: i,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    loading: y,
    loadingIndicator: x,
    size: d
  }, P = bm(w);
  return /* @__PURE__ */ C.jsxs(vm, {
    id: y ? f : m,
    className: ne(P.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l || y,
    ref: r,
    ...b,
    ownerState: w,
    children: [typeof y == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ C.jsx("span", {
      className: P.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ C.jsx(xm, {
        className: P.loadingIndicator,
        ownerState: w,
        children: y && x
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (xc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Nt(o.node, (e) => T.Children.toArray(e.children).some((r) => /* @__PURE__ */ T.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: o.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: o.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: o.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Sm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Sc(e, t, r, n, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = s.type;
  return typeof l == "function" && !Sm(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const vr = Nt(o.element, Sc);
vr.isRequired = Nt(o.element.isRequired, Sc);
function sn(e) {
  return parseInt(T.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
const Ec = (e) => e.scrollTop;
function Ln(e, t) {
  const {
    timeout: r,
    easing: n,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: i.transitionDelay
  };
}
function Jo(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Em = {
  entering: {
    opacity: 1,
    transform: Jo(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Mo = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Gr = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: i = !0,
    children: s,
    easing: a,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: d,
    onExit: m,
    onExited: y,
    onExiting: g,
    style: b,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = gt,
    ...w
  } = t, P = cr(), S = T.useRef(), v = nn(), h = T.useRef(null), O = Ke(h, sn(s), r), k = (j) => (_) => {
    if (j) {
      const V = h.current;
      _ === void 0 ? j(V) : j(V, _);
    }
  }, N = k(d), $ = k((j, _) => {
    Ec(j);
    const {
      duration: V,
      delay: X,
      easing: H
    } = Ln({
      style: b,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let E;
    f === "auto" ? (E = v.transitions.getAutoHeightDuration(j.clientHeight), S.current = E) : E = V, j.style.transition = [v.transitions.create("opacity", {
      duration: E,
      delay: X
    }), v.transitions.create("transform", {
      duration: Mo ? E : E * 0.666,
      delay: X,
      easing: H
    })].join(","), l && l(j, _);
  }), I = k(u), B = k(g), p = k((j) => {
    const {
      duration: _,
      delay: V,
      easing: X
    } = Ln({
      style: b,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let H;
    f === "auto" ? (H = v.transitions.getAutoHeightDuration(j.clientHeight), S.current = H) : H = _, j.style.transition = [v.transitions.create("opacity", {
      duration: H,
      delay: V
    }), v.transitions.create("transform", {
      duration: Mo ? H : H * 0.666,
      delay: Mo ? V : V || H * 0.333,
      easing: X
    })].join(","), j.style.opacity = 0, j.style.transform = Jo(0.75), m && m(j);
  }), A = k(y), M = (j) => {
    f === "auto" && P.start(S.current || 0, j), n && n(h.current, j);
  };
  return /* @__PURE__ */ C.jsx(x, {
    appear: i,
    in: c,
    nodeRef: h,
    onEnter: $,
    onEntered: I,
    onEntering: N,
    onExit: p,
    onExited: A,
    onExiting: B,
    addEndListener: M,
    timeout: f === "auto" ? null : f,
    ...w,
    children: (j, {
      ownerState: _,
      ...V
    }) => /* @__PURE__ */ T.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Jo(0.75),
        visibility: j === "exited" && !c ? "hidden" : void 0,
        ...Em[j],
        ...b,
        ...s.props.style
      },
      ref: O,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (Gr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: vr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
Gr && (Gr.muiSupportAuto = !0);
function Et(e, t, r, n, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
var qe = "top", ot = "bottom", it = "right", Ye = "left", $i = "auto", an = [qe, ot, it, Ye], pr = "start", Kr = "end", Tm = "clippingParents", Tc = "viewport", Or = "popper", wm = "reference", Ys = /* @__PURE__ */ an.reduce(function(e, t) {
  return e.concat([t + "-" + pr, t + "-" + Kr]);
}, []), wc = /* @__PURE__ */ [].concat(an, [$i]).reduce(function(e, t) {
  return e.concat([t, t + "-" + pr, t + "-" + Kr]);
}, []), Cm = "beforeRead", Om = "read", Pm = "afterRead", Rm = "beforeMain", km = "main", $m = "afterMain", Mm = "beforeWrite", Nm = "write", Im = "afterWrite", Am = [Cm, Om, Pm, Rm, km, $m, Mm, Nm, Im];
function ht(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ze(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Xt(e) {
  var t = Ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function rt(e) {
  var t = Ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Mi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function jm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !rt(s) || !ht(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? s.removeAttribute(a) : s.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function _m(e) {
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
      var i = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), c = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !rt(i) || !ht(i) || (Object.assign(i.style, c), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Dm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: jm,
  effect: _m,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var qt = Math.max, zn = Math.min, mr = Math.round;
function Zo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Cc() {
  return !/^((?!chrome|android).)*safari/i.test(Zo());
}
function hr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && rt(e) && (i = e.offsetWidth > 0 && mr(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && mr(n.height) / e.offsetHeight || 1);
  var a = Xt(e) ? Ze(e) : window, c = a.visualViewport, l = !Cc() && r, u = (n.left + (l && c ? c.offsetLeft : 0)) / i, d = (n.top + (l && c ? c.offsetTop : 0)) / s, m = n.width / i, y = n.height / s;
  return {
    width: m,
    height: y,
    top: d,
    right: u + m,
    bottom: d + y,
    left: u,
    x: u,
    y: d
  };
}
function Ni(e) {
  var t = hr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Oc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Mi(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Tt(e) {
  return Ze(e).getComputedStyle(e);
}
function Bm(e) {
  return ["table", "td", "th"].indexOf(ht(e)) >= 0;
}
function At(e) {
  return ((Xt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function mo(e) {
  return ht(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Mi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    At(e)
  );
}
function Gs(e) {
  return !rt(e) || // https://github.com/popperjs/popper-core/issues/837
  Tt(e).position === "fixed" ? null : e.offsetParent;
}
function Fm(e) {
  var t = /firefox/i.test(Zo()), r = /Trident/i.test(Zo());
  if (r && rt(e)) {
    var n = Tt(e);
    if (n.position === "fixed")
      return null;
  }
  var i = mo(e);
  for (Mi(i) && (i = i.host); rt(i) && ["html", "body"].indexOf(ht(i)) < 0; ) {
    var s = Tt(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function cn(e) {
  for (var t = Ze(e), r = Gs(e); r && Bm(r) && Tt(r).position === "static"; )
    r = Gs(r);
  return r && (ht(r) === "html" || ht(r) === "body" && Tt(r).position === "static") ? t : r || Fm(e) || t;
}
function Ii(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Br(e, t, r) {
  return qt(e, zn(t, r));
}
function Lm(e, t, r) {
  var n = Br(e, t, r);
  return n > r ? r : n;
}
function Pc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Rc(e) {
  return Object.assign({}, Pc(), e);
}
function kc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var zm = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Rc(typeof t != "number" ? t : kc(t, an));
};
function Vm(e) {
  var t, r = e.state, n = e.name, i = e.options, s = r.elements.arrow, a = r.modifiersData.popperOffsets, c = mt(r.placement), l = Ii(c), u = [Ye, it].indexOf(c) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = zm(i.padding, r), y = Ni(s), g = l === "y" ? qe : Ye, b = l === "y" ? ot : it, f = r.rects.reference[d] + r.rects.reference[l] - a[l] - r.rects.popper[d], x = a[l] - r.rects.reference[l], w = cn(s), P = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, S = f / 2 - x / 2, v = m[g], h = P - y[d] - m[b], O = P / 2 - y[d] / 2 + S, k = Br(v, O, h), N = l;
    r.modifiersData[n] = (t = {}, t[N] = k, t.centerOffset = k - O, t);
  }
}
function Wm(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Oc(t.elements.popper, i) && (t.elements.arrow = i));
}
const Um = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Vm,
  effect: Wm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function gr(e) {
  return e.split("-")[1];
}
var Hm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qm(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: mr(r * i) / i || 0,
    y: mr(n * i) / i || 0
  };
}
function Ks(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, y = a.x, g = y === void 0 ? 0 : y, b = a.y, f = b === void 0 ? 0 : b, x = typeof d == "function" ? d({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = x.x, f = x.y;
  var w = a.hasOwnProperty("x"), P = a.hasOwnProperty("y"), S = Ye, v = qe, h = window;
  if (u) {
    var O = cn(r), k = "clientHeight", N = "clientWidth";
    if (O === Ze(r) && (O = At(r), Tt(O).position !== "static" && c === "absolute" && (k = "scrollHeight", N = "scrollWidth")), O = O, i === qe || (i === Ye || i === it) && s === Kr) {
      v = ot;
      var $ = m && O === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[k]
      );
      f -= $ - n.height, f *= l ? 1 : -1;
    }
    if (i === Ye || (i === qe || i === ot) && s === Kr) {
      S = it;
      var I = m && O === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[N]
      );
      g -= I - n.width, g *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: c
  }, u && Hm), p = d === !0 ? qm({
    x: g,
    y: f
  }, Ze(r)) : {
    x: g,
    y: f
  };
  if (g = p.x, f = p.y, l) {
    var A;
    return Object.assign({}, B, (A = {}, A[v] = P ? "0" : "", A[S] = w ? "0" : "", A.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", A));
  }
  return Object.assign({}, B, (t = {}, t[v] = P ? f + "px" : "", t[S] = w ? g + "px" : "", t.transform = "", t));
}
function Ym(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, c = r.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: mt(t.placement),
    variation: gr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ks(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ks(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Gm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ym,
  data: {}
};
var bn = {
  passive: !0
};
function Km(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, c = a === void 0 ? !0 : a, l = Ze(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, bn);
  }), c && l.addEventListener("resize", r.update, bn), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, bn);
    }), c && l.removeEventListener("resize", r.update, bn);
  };
}
const Xm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Km,
  data: {}
};
var Jm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jm[t];
  });
}
var Zm = {
  start: "end",
  end: "start"
};
function Xs(e) {
  return e.replace(/start|end/g, function(t) {
    return Zm[t];
  });
}
function Ai(e) {
  var t = Ze(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ji(e) {
  return hr(At(e)).left + Ai(e).scrollLeft;
}
function Qm(e, t) {
  var r = Ze(e), n = At(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, c = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = Cc();
    (u || !u && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: c + ji(e),
    y: l
  };
}
function eh(e) {
  var t, r = At(e), n = Ai(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = qt(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = qt(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -n.scrollLeft + ji(e), l = -n.scrollTop;
  return Tt(i || r).direction === "rtl" && (c += qt(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function _i(e) {
  var t = Tt(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function $c(e) {
  return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : rt(e) && _i(e) ? e : $c(mo(e));
}
function Fr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = $c(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ze(n), a = i ? [s].concat(s.visualViewport || [], _i(n) ? n : []) : n, c = t.concat(a);
  return i ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Fr(mo(a)))
  );
}
function Qo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function th(e, t) {
  var r = hr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Js(e, t, r) {
  return t === Tc ? Qo(Qm(e, r)) : Xt(t) ? th(t, r) : Qo(eh(At(e)));
}
function rh(e) {
  var t = Fr(mo(e)), r = ["absolute", "fixed"].indexOf(Tt(e).position) >= 0, n = r && rt(e) ? cn(e) : e;
  return Xt(n) ? t.filter(function(i) {
    return Xt(i) && Oc(i, n) && ht(i) !== "body";
  }) : [];
}
function nh(e, t, r, n) {
  var i = t === "clippingParents" ? rh(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], c = s.reduce(function(l, u) {
    var d = Js(e, u, n);
    return l.top = qt(d.top, l.top), l.right = zn(d.right, l.right), l.bottom = zn(d.bottom, l.bottom), l.left = qt(d.left, l.left), l;
  }, Js(e, a, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Mc(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? mt(n) : null, s = n ? gr(n) : null, a = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case qe:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case ot:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case it:
      l = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Ye:
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
  var u = i ? Ii(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case pr:
        l[u] = l[u] - (t[d] / 2 - r[d] / 2);
        break;
      case Kr:
        l[u] = l[u] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return l;
}
function Xr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, c = r.boundary, l = c === void 0 ? Tm : c, u = r.rootBoundary, d = u === void 0 ? Tc : u, m = r.elementContext, y = m === void 0 ? Or : m, g = r.altBoundary, b = g === void 0 ? !1 : g, f = r.padding, x = f === void 0 ? 0 : f, w = Rc(typeof x != "number" ? x : kc(x, an)), P = y === Or ? wm : Or, S = e.rects.popper, v = e.elements[b ? P : y], h = nh(Xt(v) ? v : v.contextElement || At(e.elements.popper), l, d, a), O = hr(e.elements.reference), k = Mc({
    reference: O,
    element: S,
    placement: i
  }), N = Qo(Object.assign({}, S, k)), $ = y === Or ? N : O, I = {
    top: h.top - $.top + w.top,
    bottom: $.bottom - h.bottom + w.bottom,
    left: h.left - $.left + w.left,
    right: $.right - h.right + w.right
  }, B = e.modifiersData.offset;
  if (y === Or && B) {
    var p = B[i];
    Object.keys(I).forEach(function(A) {
      var M = [it, ot].indexOf(A) >= 0 ? 1 : -1, j = [qe, ot].indexOf(A) >= 0 ? "y" : "x";
      I[A] += p[j] * M;
    });
  }
  return I;
}
function oh(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, c = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? wc : l, d = gr(n), m = d ? c ? Ys : Ys.filter(function(b) {
    return gr(b) === d;
  }) : an, y = m.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  y.length === 0 && (y = m);
  var g = y.reduce(function(b, f) {
    return b[f] = Xr(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[mt(f)], b;
  }, {});
  return Object.keys(g).sort(function(b, f) {
    return g[b] - g[f];
  });
}
function ih(e) {
  if (mt(e) === $i)
    return [];
  var t = kn(e);
  return [Xs(e), t, Xs(t)];
}
function sh(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, c = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, d = r.boundary, m = r.rootBoundary, y = r.altBoundary, g = r.flipVariations, b = g === void 0 ? !0 : g, f = r.allowedAutoPlacements, x = t.options.placement, w = mt(x), P = w === x, S = l || (P || !b ? [kn(x)] : ih(x)), v = [x].concat(S).reduce(function(U, z) {
      return U.concat(mt(z) === $i ? oh(t, {
        placement: z,
        boundary: d,
        rootBoundary: m,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: f
      }) : z);
    }, []), h = t.rects.reference, O = t.rects.popper, k = /* @__PURE__ */ new Map(), N = !0, $ = v[0], I = 0; I < v.length; I++) {
      var B = v[I], p = mt(B), A = gr(B) === pr, M = [qe, ot].indexOf(p) >= 0, j = M ? "width" : "height", _ = Xr(t, {
        placement: B,
        boundary: d,
        rootBoundary: m,
        altBoundary: y,
        padding: u
      }), V = M ? A ? it : Ye : A ? ot : qe;
      h[j] > O[j] && (V = kn(V));
      var X = kn(V), H = [];
      if (s && H.push(_[p] <= 0), c && H.push(_[V] <= 0, _[X] <= 0), H.every(function(U) {
        return U;
      })) {
        $ = B, N = !1;
        break;
      }
      k.set(B, H);
    }
    if (N)
      for (var E = b ? 3 : 1, D = function(z) {
        var Y = v.find(function(K) {
          var G = k.get(K);
          if (G)
            return G.slice(0, z).every(function(Z) {
              return Z;
            });
        });
        if (Y)
          return $ = Y, "break";
      }, L = E; L > 0; L--) {
        var W = D(L);
        if (W === "break") break;
      }
    t.placement !== $ && (t.modifiersData[n]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const ah = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: sh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Zs(e, t, r) {
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
function Qs(e) {
  return [qe, it, ot, Ye].some(function(t) {
    return e[t] >= 0;
  });
}
function ch(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = Xr(t, {
    elementContext: "reference"
  }), c = Xr(t, {
    altBoundary: !0
  }), l = Zs(a, n), u = Zs(c, i, s), d = Qs(l), m = Qs(u);
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
const lh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ch
};
function uh(e, t, r) {
  var n = mt(e), i = [Ye, qe].indexOf(n) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = s[0], c = s[1];
  return a = a || 0, c = (c || 0) * i, [Ye, it].indexOf(n) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function dh(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, s = i === void 0 ? [0, 0] : i, a = wc.reduce(function(d, m) {
    return d[m] = uh(m, t.rects, s), d;
  }, {}), c = a[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const fh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: dh
};
function ph(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Mc({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const mh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ph,
  data: {}
};
function hh(e) {
  return e === "x" ? "y" : "x";
}
function gh(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, c = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, d = r.altBoundary, m = r.padding, y = r.tether, g = y === void 0 ? !0 : y, b = r.tetherOffset, f = b === void 0 ? 0 : b, x = Xr(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: d
  }), w = mt(t.placement), P = gr(t.placement), S = !P, v = Ii(w), h = hh(v), O = t.modifiersData.popperOffsets, k = t.rects.reference, N = t.rects.popper, $ = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, I = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, p = {
    x: 0,
    y: 0
  };
  if (O) {
    if (s) {
      var A, M = v === "y" ? qe : Ye, j = v === "y" ? ot : it, _ = v === "y" ? "height" : "width", V = O[v], X = V + x[M], H = V - x[j], E = g ? -N[_] / 2 : 0, D = P === pr ? k[_] : N[_], L = P === pr ? -N[_] : -k[_], W = t.elements.arrow, U = g && W ? Ni(W) : {
        width: 0,
        height: 0
      }, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Pc(), Y = z[M], K = z[j], G = Br(0, k[_], U[_]), Z = S ? k[_] / 2 - E - G - Y - I.mainAxis : D - G - Y - I.mainAxis, q = S ? -k[_] / 2 + E + G + K + I.mainAxis : L + G + K + I.mainAxis, J = t.elements.arrow && cn(t.elements.arrow), R = J ? v === "y" ? J.clientTop || 0 : J.clientLeft || 0 : 0, ie = (A = B?.[v]) != null ? A : 0, se = V + Z - ie - R, Se = V + q - ie, Qe = Br(g ? zn(X, se) : X, V, g ? qt(H, Se) : H);
      O[v] = Qe, p[v] = Qe - V;
    }
    if (c) {
      var _e, Ae = v === "x" ? qe : Ye, xe = v === "x" ? ot : it, Me = O[h], be = h === "y" ? "height" : "width", Q = Me + x[Ae], jt = Me - x[xe], wt = [qe, Ye].indexOf(w) !== -1, _t = (_e = B?.[h]) != null ? _e : 0, je = wt ? Q : Me - k[be] - N[be] - _t + I.altAxis, he = wt ? Me + k[be] + N[be] - _t - I.altAxis : jt, Be = g && wt ? Lm(je, Me, he) : Br(g ? je : Q, Me, g ? he : jt);
      O[h] = Be, p[h] = Be - Me;
    }
    t.modifiersData[n] = p;
  }
}
const yh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: gh,
  requiresIfExists: ["offset"]
};
function bh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function vh(e) {
  return e === Ze(e) || !rt(e) ? Ai(e) : bh(e);
}
function xh(e) {
  var t = e.getBoundingClientRect(), r = mr(t.width) / e.offsetWidth || 1, n = mr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Sh(e, t, r) {
  r === void 0 && (r = !1);
  var n = rt(t), i = rt(t) && xh(t), s = At(t), a = hr(e, i, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ht(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  _i(s)) && (c = vh(t)), rt(t) ? (l = hr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = ji(s))), {
    x: a.left + c.scrollLeft - l.x,
    y: a.top + c.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Eh(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(c) {
      if (!r.has(c)) {
        var l = t.get(c);
        l && i(l);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || i(s);
  }), n;
}
function Th(e) {
  var t = Eh(e);
  return Am.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function wh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ch(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var ea = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ta() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Oh(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? ea : i;
  return function(c, l, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ea, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], y = !1, g = {
      state: d,
      setOptions: function(w) {
        var P = typeof w == "function" ? w(d.options) : w;
        f(), d.options = Object.assign({}, s, d.options, P), d.scrollParents = {
          reference: Xt(c) ? Fr(c) : c.contextElement ? Fr(c.contextElement) : [],
          popper: Fr(l)
        };
        var S = Th(Ch([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = S.filter(function(v) {
          return v.enabled;
        }), b(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var w = d.elements, P = w.reference, S = w.popper;
          if (ta(P, S)) {
            d.rects = {
              reference: Sh(P, cn(S), d.options.strategy === "fixed"),
              popper: Ni(S)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(I) {
              return d.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var v = 0; v < d.orderedModifiers.length; v++) {
              if (d.reset === !0) {
                d.reset = !1, v = -1;
                continue;
              }
              var h = d.orderedModifiers[v], O = h.fn, k = h.options, N = k === void 0 ? {} : k, $ = h.name;
              typeof O == "function" && (d = O({
                state: d,
                options: N,
                name: $,
                instance: g
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: wh(function() {
        return new Promise(function(x) {
          g.forceUpdate(), x(d);
        });
      }),
      destroy: function() {
        f(), y = !0;
      }
    };
    if (!ta(c, l))
      return g;
    g.setOptions(u).then(function(x) {
      !y && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function b() {
      d.orderedModifiers.forEach(function(x) {
        var w = x.name, P = x.options, S = P === void 0 ? {} : P, v = x.effect;
        if (typeof v == "function") {
          var h = v({
            state: d,
            name: w,
            instance: g,
            options: S
          }), O = function() {
          };
          m.push(h || O);
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
var Ph = [Xm, mh, Gm, Dm, fh, ah, yh, Um, lh], Rh = /* @__PURE__ */ Oh({
  defaultModifiers: Ph
});
function kh(e) {
  return typeof e == "string";
}
function Nc(e, t, r) {
  return e === void 0 || kh(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Ic(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function ra(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Ac(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const g = ne(r?.className, s, i?.className, n?.className), b = {
      ...r?.style,
      ...i?.style,
      ...n?.style
    }, f = {
      ...r,
      ...i,
      ...n
    };
    return g.length > 0 && (f.className = g), Object.keys(b).length > 0 && (f.style = b), {
      props: f,
      internalRef: void 0
    };
  }
  const a = Ic({
    ...i,
    ...n
  }), c = ra(n), l = ra(i), u = t(a), d = ne(u?.className, r?.className, s, i?.className, n?.className), m = {
    ...u?.style,
    ...r?.style,
    ...i?.style,
    ...n?.style
  }, y = {
    ...u,
    ...r,
    ...l,
    ...c
  };
  return d.length > 0 && (y.className = d), Object.keys(m).length > 0 && (y.style = m), {
    props: y,
    internalRef: u.ref
  };
}
function jc(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function _c(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : jc(r, n), {
    props: c,
    internalRef: l
  } = Ac({
    ...s,
    externalSlotProps: a
  }), u = Ke(l, a?.ref, e.additionalProps?.ref);
  return Nc(t, {
    ...c,
    ref: u
  }, n);
}
function $h(e) {
  return typeof e == "function" ? e() : e;
}
const Jr = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    children: n,
    container: i,
    disablePortal: s = !1
  } = t, [a, c] = T.useState(null), l = Ke(/* @__PURE__ */ T.isValidElement(n) ? sn(n) : null, r);
  if (xt(() => {
    s || c($h(i) || document.body);
  }, [i, s]), xt(() => {
    if (a && !s)
      return Vs(r, a), () => {
        Vs(r, null);
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
  return a && /* @__PURE__ */ zl.createPortal(n, a);
});
process.env.NODE_ENV !== "production" && (Jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
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
  container: o.oneOfType([Et, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (Jr.propTypes = lo(Jr.propTypes));
function Mh(e) {
  return Te("MuiPopper", e);
}
ve("MuiPopper", ["root"]);
function Nh(e, t) {
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
function Vn(e) {
  return typeof e == "function" ? e() : e;
}
function ho(e) {
  return e.nodeType !== void 0;
}
function Ih(e) {
  return !ho(e);
}
const Ah = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"]
  }, Mh, t);
}, jh = {}, _h = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: i,
    direction: s,
    disablePortal: a,
    modifiers: c,
    open: l,
    placement: u,
    popperOptions: d,
    popperRef: m,
    slotProps: y = {},
    slots: g = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, w = T.useRef(null), P = Ke(w, r), S = T.useRef(null), v = Ke(S, m), h = T.useRef(v);
  xt(() => {
    h.current = v;
  }, [v]), T.useImperativeHandle(m, () => S.current, []);
  const O = Nh(u, s), [k, N] = T.useState(O), [$, I] = T.useState(Vn(n));
  T.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), T.useEffect(() => {
    n && I(Vn(n));
  }, [n]), xt(() => {
    if (!$ || !l)
      return;
    const j = (X) => {
      N(X.placement);
    };
    if (process.env.NODE_ENV !== "production" && $ && ho($) && $.nodeType === 1) {
      const X = $.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && X.top === 0 && X.left === 0 && X.right === 0 && X.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let _ = [{
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
    c != null && (_ = _.concat(c)), d && d.modifiers != null && (_ = _.concat(d.modifiers));
    const V = Rh($, w.current, {
      placement: O,
      ...d,
      modifiers: _
    });
    return h.current(V), () => {
      V.destroy(), h.current(null);
    };
  }, [$, a, c, l, d, O]);
  const B = {
    placement: k
  };
  b !== null && (B.TransitionProps = b);
  const p = Ah(t), A = g.root ?? "div", M = _c({
    elementType: A,
    externalSlotProps: y.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: P
    },
    ownerState: t,
    className: p.root
  });
  return /* @__PURE__ */ C.jsx(A, {
    ...M,
    children: typeof i == "function" ? i(B) : i
  });
}), Dc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: i,
    container: s,
    direction: a = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: d,
    placement: m = "bottom",
    popperOptions: y = jh,
    popperRef: g,
    style: b,
    transition: f = !1,
    slotProps: x = {},
    slots: w = {},
    ...P
  } = t, [S, v] = T.useState(!0), h = () => {
    v(!1);
  }, O = () => {
    v(!0);
  };
  if (!l && !d && (!f || S))
    return null;
  let k;
  if (s)
    k = s;
  else if (n) {
    const I = Vn(n);
    k = I && ho(I) ? nt(I).body : nt(null).body;
  }
  const N = !d && l && (!f || S) ? "none" : void 0, $ = f ? {
    in: d,
    onEnter: h,
    onExited: O
  } : void 0;
  return /* @__PURE__ */ C.jsx(Jr, {
    disablePortal: c,
    container: k,
    children: /* @__PURE__ */ C.jsx(_h, {
      anchorEl: n,
      direction: a,
      disablePortal: c,
      modifiers: u,
      ref: r,
      open: f ? !S : d,
      placement: m,
      popperOptions: y,
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
        display: N,
        ...b
      },
      TransitionProps: $,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Dc.propTypes = {
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
  anchorEl: Nt(o.oneOfType([Et, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Vn(e.anchorEl);
      if (t && ho(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Ih(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
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
  container: o.oneOfType([Et, o.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: o.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: It,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const Dh = te(Dc, {
  name: "MuiPopper",
  slot: "Root"
})({}), Di = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Ei(), i = Oe({
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
    modifiers: y,
    open: g,
    placement: b,
    popperOptions: f,
    popperRef: x,
    transition: w,
    slots: P,
    slotProps: S,
    ...v
  } = i, h = P?.root ?? c?.Root, O = {
    anchorEl: s,
    container: u,
    disablePortal: d,
    keepMounted: m,
    modifiers: y,
    open: g,
    placement: b,
    popperOptions: f,
    popperRef: x,
    transition: w,
    ...v
  };
  return /* @__PURE__ */ C.jsx(Dh, {
    as: a,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: h
    },
    slotProps: S ?? l,
    ...O,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (Di.propTypes = {
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
  anchorEl: o.oneOfType([Et, o.object, o.func]),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: o.shape({
    root: o.oneOfType([o.func, o.object])
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
  container: o.oneOfType([Et, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: It,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
function we(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: i,
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
    ...y
  } = s, g = d[e] || n, b = jc(m[e], i), {
    props: {
      component: f,
      ...x
    },
    internalRef: w
  } = Ac({
    className: r,
    ...l,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: b
  }), P = Ke(w, b?.ref, t.ref), S = e === "root" ? f || u : f, v = Nc(g, {
    ...e === "root" && !u && !d[e] && a,
    ...e !== "root" && !d[e] && a,
    ...x,
    ...S && !c && {
      as: S
    },
    ...S && c && {
      component: S
    },
    ref: P
  }, i);
  return [g, v];
}
function Bh(e) {
  return Te("MuiTooltip", e);
}
const ke = ve("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Fh(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Lh = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", i && "touch", `tooltipPlacement${ee(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return $e(a, Bh, t);
}, zh = te(Di, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose];
  }
})(Ce(({
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
      [`&[data-popper-placement*="bottom"] .${ke.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${ke.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${ke.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${ke.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${ke.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${ke.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ke.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ke.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), Vh = te("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${ee(r.placement.split("-")[0])}`]];
  }
})(Ce(({
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
  [`.${ke.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${ke.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${ke.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${ke.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${Fh(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Wh = te("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(Ce(({
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
let vn = !1;
const na = new po();
let Pr = {
  x: 0,
  y: 0
};
function xn(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const Bc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: i = !1,
    children: s,
    classes: a,
    components: c = {},
    componentsProps: l = {},
    describeChild: u = !1,
    disableFocusListener: d = !1,
    disableHoverListener: m = !1,
    disableInteractive: y = !1,
    disableTouchListener: g = !1,
    enterDelay: b = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: x = 700,
    followCursor: w = !1,
    id: P,
    leaveDelay: S = 0,
    leaveTouchDelay: v = 1500,
    onClose: h,
    onOpen: O,
    open: k,
    placement: N = "bottom",
    PopperComponent: $,
    PopperProps: I = {},
    slotProps: B = {},
    slots: p = {},
    title: A,
    TransitionComponent: M,
    TransitionProps: j,
    ..._
  } = n, V = /* @__PURE__ */ T.isValidElement(s) ? s : /* @__PURE__ */ C.jsx("span", {
    children: s
  }), X = nn(), H = Ei(), [E, D] = T.useState(), [L, W] = T.useState(null), U = T.useRef(!1), z = y || w, Y = cr(), K = cr(), G = cr(), Z = cr(), [q, J] = fc({
    controlled: k,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let R = q;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: re
    } = T.useRef(k !== void 0);
    T.useEffect(() => {
      E && E.disabled && !re && A !== "" && E.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [A, E, re]);
  }
  const ie = uo(P), se = T.useRef(), Se = Rt(() => {
    se.current !== void 0 && (document.body.style.WebkitUserSelect = se.current, se.current = void 0), Z.clear();
  });
  T.useEffect(() => Se, [Se]);
  const Qe = (re) => {
    na.clear(), vn = !0, J(!0), O && !R && O(re);
  }, _e = Rt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (re) => {
      na.start(800 + S, () => {
        vn = !1;
      }), J(!1), h && R && h(re), Y.start(X.transitions.duration.shortest, () => {
        U.current = !1;
      });
    }
  ), Ae = (re) => {
    U.current && re.type !== "touchstart" || (E && E.removeAttribute("title"), K.clear(), G.clear(), b || vn && f ? K.start(vn ? f : b, () => {
      Qe(re);
    }) : Qe(re));
  }, xe = (re) => {
    K.clear(), G.start(S, () => {
      _e(re);
    });
  }, [, Me] = T.useState(!1), be = (re) => {
    Dn(re.target) || (Me(!1), xe(re));
  }, Q = (re) => {
    E || D(re.currentTarget), Dn(re.target) && (Me(!0), Ae(re));
  }, jt = (re) => {
    U.current = !0;
    const Ct = V.props;
    Ct.onTouchStart && Ct.onTouchStart(re);
  }, wt = (re) => {
    jt(re), G.clear(), Y.clear(), Se(), se.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Z.start(x, () => {
      document.body.style.WebkitUserSelect = se.current, Ae(re);
    });
  }, _t = (re) => {
    V.props.onTouchEnd && V.props.onTouchEnd(re), Se(), G.start(v, () => {
      _e(re);
    });
  };
  T.useEffect(() => {
    if (!R)
      return;
    function re(Ct) {
      Ct.key === "Escape" && _e(Ct);
    }
    return document.addEventListener("keydown", re), () => {
      document.removeEventListener("keydown", re);
    };
  }, [_e, R]);
  const je = Ke(sn(V), D, r);
  !A && A !== 0 && (R = !1);
  const he = T.useRef(), Be = (re) => {
    const Ct = V.props;
    Ct.onMouseMove && Ct.onMouseMove(re), Pr = {
      x: re.clientX,
      y: re.clientY
    }, he.current && he.current.update();
  }, Le = {}, Dt = typeof A == "string";
  u ? (Le.title = !R && Dt && !m ? A : null, Le["aria-describedby"] = R ? ie : null) : (Le["aria-label"] = Dt ? A : null, Le["aria-labelledby"] = R && !Dt ? ie : null);
  const Ue = {
    ...Le,
    ..._,
    ...V.props,
    className: ne(_.className, V.props.className),
    onTouchStart: jt,
    ref: je,
    ...w ? {
      onMouseMove: Be
    } : {}
  };
  process.env.NODE_ENV !== "production" && (Ue["data-mui-internal-clone-element"] = !0, T.useEffect(() => {
    E && !E.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [E]));
  const xr = {};
  g || (Ue.onTouchStart = wt, Ue.onTouchEnd = _t), m || (Ue.onMouseOver = xn(Ae, Ue.onMouseOver), Ue.onMouseLeave = xn(xe, Ue.onMouseLeave), z || (xr.onMouseOver = Ae, xr.onMouseLeave = xe)), d || (Ue.onFocus = xn(Q, Ue.onFocus), Ue.onBlur = xn(be, Ue.onBlur), z || (xr.onFocus = Q, xr.onBlur = be)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const Bt = {
    ...n,
    isRtl: H,
    arrow: i,
    disableInteractive: z,
    placement: N,
    PopperComponentProp: $,
    touch: U.current
  }, Sr = typeof B.popper == "function" ? B.popper(Bt) : B.popper, Cl = T.useMemo(() => {
    let re = [{
      name: "arrow",
      enabled: !!L,
      options: {
        element: L,
        padding: 4
      }
    }];
    return I.popperOptions?.modifiers && (re = re.concat(I.popperOptions.modifiers)), Sr?.popperOptions?.modifiers && (re = re.concat(Sr.popperOptions.modifiers)), {
      ...I.popperOptions,
      ...Sr?.popperOptions,
      modifiers: re
    };
  }, [L, I.popperOptions, Sr?.popperOptions]), go = Lh(Bt), Ol = typeof B.transition == "function" ? B.transition(Bt) : B.transition, ln = {
    slots: {
      popper: c.Popper,
      transition: c.Transition ?? M,
      tooltip: c.Tooltip,
      arrow: c.Arrow,
      ...p
    },
    slotProps: {
      arrow: B.arrow ?? l.arrow,
      popper: {
        ...I,
        ...Sr ?? l.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: B.tooltip ?? l.tooltip,
      transition: {
        ...j,
        ...Ol ?? l.transition
      }
    }
  }, [Pl, Rl] = we("popper", {
    elementType: zh,
    externalForwardedProps: ln,
    ownerState: Bt,
    className: ne(go.popper, I?.className)
  }), [kl, $l] = we("transition", {
    elementType: Gr,
    externalForwardedProps: ln,
    ownerState: Bt
  }), [Ml, Nl] = we("tooltip", {
    elementType: Vh,
    className: go.tooltip,
    externalForwardedProps: ln,
    ownerState: Bt
  }), [Il, Al] = we("arrow", {
    elementType: Wh,
    className: go.arrow,
    externalForwardedProps: ln,
    ownerState: Bt,
    ref: W
  });
  return /* @__PURE__ */ C.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ T.cloneElement(V, Ue), /* @__PURE__ */ C.jsx(Pl, {
      as: $ ?? Di,
      placement: N,
      anchorEl: w ? {
        getBoundingClientRect: () => ({
          top: Pr.y,
          left: Pr.x,
          right: Pr.x,
          bottom: Pr.y,
          width: 0,
          height: 0
        })
      } : E,
      popperRef: he,
      open: E ? R : !1,
      id: ie,
      transition: !0,
      ...xr,
      ...Rl,
      popperOptions: Cl,
      children: ({
        TransitionProps: re
      }) => /* @__PURE__ */ C.jsx(kl, {
        timeout: X.transitions.duration.shorter,
        ...re,
        ...$l,
        children: /* @__PURE__ */ C.jsxs(Ml, {
          ...Nl,
          children: [A, i ? /* @__PURE__ */ C.jsx(Il, {
            ...Al
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Bc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: o.bool,
  /**
   * Tooltip reference element.
   */
  children: vr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Arrow: o.elementType,
    Popper: o.elementType,
    Tooltip: o.elementType,
    Transition: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    arrow: o.object,
    popper: o.object,
    tooltip: o.object,
    transition: o.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: o.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: o.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: o.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: o.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: o.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: o.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: o.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: o.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: o.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: o.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: o.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: o.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: o.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: o.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    arrow: o.oneOfType([o.func, o.object]),
    popper: o.oneOfType([o.func, o.object]),
    tooltip: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    arrow: o.elementType,
    popper: o.elementType,
    tooltip: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: o.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: o.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: o.object
});
function oa(e) {
  return String(parseFloat(e)).length === String(e).length;
}
function Uh(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Lt(e) {
  return parseFloat(e);
}
function Hh(e) {
  return (t, r) => {
    const n = Uh(t);
    if (n === r)
      return t;
    let i = Lt(t);
    n !== "px" && (n === "em" || n === "rem") && (i = Lt(t) * Lt(e));
    let s = i;
    if (r !== "px")
      if (r === "em")
        s = i / Lt(e);
      else if (r === "rem")
        s = i / Lt(e);
      else
        return t;
    return parseFloat(s.toFixed(5)) + r;
  };
}
function qh({
  size: e,
  grid: t
}) {
  const r = e - e % t, n = r + t;
  return e - r < n - e ? r : n;
}
function Yh({
  lineHeight: e,
  pixels: t,
  htmlFontSize: r
}) {
  return t / (e * r);
}
function Gh({
  cssProperty: e,
  min: t,
  max: r,
  unit: n = "rem",
  breakpoints: i = [600, 900, 1200],
  transform: s = null
}) {
  const a = {
    [e]: `${t}${n}`
  }, c = (r - t) / i[i.length - 1];
  return i.forEach((l) => {
    let u = t + c * l;
    s !== null && (u = s(u)), a[`@media (min-width:${l}px)`] = {
      [e]: `${Math.round(u * 1e4) / 1e4}${n}`
    };
  }), a;
}
function Kh(e, t = {}) {
  const {
    breakpoints: r = ["sm", "md", "lg"],
    disableAlign: n = !1,
    factor: i = 2,
    variants: s = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = t, a = {
    ...e
  };
  a.typography = {
    ...a.typography
  };
  const c = a.typography, l = Hh(c.htmlFontSize), u = r.map((d) => a.breakpoints.values[d]);
  return s.forEach((d) => {
    const m = c[d];
    if (!m)
      return;
    const y = parseFloat(l(m.fontSize, "rem"));
    if (y <= 1)
      return;
    const g = y, b = 1 + (g - 1) / i;
    let {
      lineHeight: f
    } = m;
    if (!oa(f) && !n)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : vt(6));
    oa(f) || (f = parseFloat(l(f, "rem")) / parseFloat(y));
    let x = null;
    n || (x = (w) => qh({
      size: w,
      grid: Yh({
        pixels: 4,
        lineHeight: f,
        htmlFontSize: c.htmlFontSize
      })
    })), c[d] = {
      ...m,
      ...Gh({
        cssProperty: "fontSize",
        min: b,
        max: g,
        unit: "rem",
        breakpoints: u,
        transform: x
      })
    };
  }), a;
}
function Xh({
  theme: e,
  ...t
}) {
  const r = pt in e ? e[pt] : void 0;
  return /* @__PURE__ */ C.jsx(qr, {
    ...t,
    themeId: r ? pt : void 0,
    theme: r || e
  });
}
const Sn = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (o.string, o.string, o.string, o.string, o.string, o.oneOf(["dark", "light", "system"]), o.string, o.string);
const {
  CssVarsProvider: Jh
} = Df({
  themeId: pt,
  // @ts-ignore ignore module augmentation tests
  theme: () => fo({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Sn.colorSchemeStorageKey,
  modeStorageKey: Sn.modeStorageKey,
  defaultColorScheme: {
    light: Sn.defaultLightColorScheme,
    dark: Sn.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: sc(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return kt({
        sx: n,
        theme: this
      });
    }, t;
  }
}), Zh = Jh;
function Qh({
  theme: e,
  ...t
}) {
  const r = T.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = pt in e ? e[pt] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ C.jsx(Xh, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ C.jsx(Zh, {
    theme: e,
    ...t
  });
}
function Tb({
  onSync: e,
  syncInterval: t = 3e4,
  maxErrorCount: r = 3,
  syncAnimationDuration: n = 3e3,
  successDuration: i = 3e3,
  errorDuration: s = 3e3,
  tooltipEnabled: a = !0,
  resetTrigger: c,
  disabled: l = !1,
  size: u = "medium"
  // Valor padrão conforme GovBR
}) {
  const d = nn(), [m, y] = _r("idle"), [g, b] = _r(!0), [f, x] = _r(0), w = br`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `, P = Ui(
    ($, I) => {
      setTimeout(() => y($), n), setTimeout(() => y("idle"), n + I);
    },
    [n]
  ), S = Ui(async () => {
    y("loading");
    try {
      await e(), P("success", i), x(0);
    } catch ($) {
      P("error", s), x((I) => I + 1), console.error($);
    }
  }, [e, P, i, s]);
  sr(() => {
    if (!g) return;
    const $ = setInterval(S, t);
    return () => clearInterval($);
  }, [g, S, t]), sr(() => {
    l && (b(!1), y("critical-error"));
  }, [l]), sr(() => {
    l || (b(!0), y("idle"));
  }, [l]), sr(() => {
    f >= r && (b(!1), y("critical-error"));
  }, [f, r]), sr(() => {
    if (!g) return;
    const $ = setInterval(S, t);
    return () => clearInterval($);
  }, [g, S, t, c]);
  const v = () => {
    b(($) => !$), g || (x(0), y("idle"));
  }, h = () => {
    if (!g) return /* @__PURE__ */ C.jsx(Ws, {});
    switch (m) {
      case "success":
        return /* @__PURE__ */ C.jsx(pc, {});
      case "error":
        return /* @__PURE__ */ C.jsx(_p, {});
      case "critical-error":
        return /* @__PURE__ */ C.jsx(Ws, {});
      default:
        return /* @__PURE__ */ C.jsx(Dp, {});
    }
  }, O = ($) => {
    const I = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec($);
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
  let N = "";
  return a && (l ? N = "Sincronização desabilitada" : m === "critical-error" ? N = "Sincronização com erro crítico. Clique para tentar reativar." : g ? N = "Sincronização automática ativada. Clique para desativar." : N = "Sincronização automática desativada. Clique para ativar."), /* @__PURE__ */ C.jsx(Bc, { title: N, children: /* @__PURE__ */ C.jsx(
    xc,
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
          backgroundImage: `linear-gradient(rgba(${O(k())}, 0.16), rgba(${O(k())}, 0.16))`
        }
      },
      children: h()
    }
  ) });
}
const eg = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function tg(e) {
  return Te("MuiAvatar", e);
}
ve("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const rg = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return $e({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, tg, t);
}, ng = te("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
  }
})(Ce(({
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
}))), og = te("img", {
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
}), ig = te(eg, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function sg({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: n
}) {
  const [i, s] = T.useState(!1);
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
  }, [e, t, r, n]), i;
}
const Fc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: i,
    children: s,
    className: a,
    component: c = "div",
    slots: l = {},
    slotProps: u = {},
    imgProps: d,
    sizes: m,
    src: y,
    srcSet: g,
    variant: b = "circular",
    ...f
  } = n;
  let x = null;
  const w = {
    ...n,
    component: c,
    variant: b
  }, P = sg({
    ...d,
    ...typeof u.img == "function" ? u.img(w) : u.img,
    src: y,
    srcSet: g
  }), S = y || g, v = S && P !== "error";
  w.colorDefault = !v, delete w.ownerState;
  const h = rg(w), [O, k] = we("root", {
    ref: r,
    className: ne(h.root, a),
    elementType: ng,
    externalForwardedProps: {
      slots: l,
      slotProps: u,
      component: c,
      ...f
    },
    ownerState: w
  }), [N, $] = we("img", {
    className: h.img,
    elementType: og,
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
      alt: i,
      src: y,
      srcSet: g,
      sizes: m
    },
    ownerState: w
  }), [I, B] = we("fallback", {
    className: h.fallback,
    elementType: ig,
    externalForwardedProps: {
      slots: l,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: w
  });
  return v ? x = /* @__PURE__ */ C.jsx(N, {
    ...$
  }) : s || s === 0 ? x = s : S && i ? x = i[0] : x = /* @__PURE__ */ C.jsx(I, {
    ...B
  }), /* @__PURE__ */ C.jsx(O, {
    ...k,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (Fc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: o.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: o.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: o.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    fallback: o.oneOfType([o.func, o.object]),
    img: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    fallback: o.elementType,
    img: o.elementType,
    root: o.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: o.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: o.oneOfType([o.oneOf(["circular", "rounded", "square"]), o.string])
});
const Wn = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Wn.displayName = "ListContext");
function ag(e) {
  return Te("MuiList", e);
}
ve("MuiList", ["root", "padding", "dense", "subheader"]);
const cg = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: i
  } = e;
  return $e({
    root: ["root", !r && "padding", n && "dense", i && "subheader"]
  }, ag, t);
}, lg = te("ul", {
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
}), Lc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u,
    ...d
  } = n, m = T.useMemo(() => ({
    dense: c
  }), [c]), y = {
    ...n,
    component: a,
    dense: c,
    disablePadding: l
  }, g = cg(y);
  return /* @__PURE__ */ C.jsx(Wn.Provider, {
    value: m,
    children: /* @__PURE__ */ C.jsxs(lg, {
      as: a,
      className: ne(g.root, s),
      ref: r,
      ownerState: y,
      ...d,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Lc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function zc(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function No(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function ia(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function Vc(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function Rr(e, t, r, n, i, s) {
  let a = !1, c = i(e, t, t ? r : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = n ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !Vc(c, s) || l)
      c = i(e, c, r);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Wc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: n,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: c,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: m = "selectedMenu",
    ...y
  } = t, g = T.useRef(null), b = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  xt(() => {
    i && g.current.focus();
  }, [i]), T.useImperativeHandle(n, () => ({
    adjustStyleForScrollbar: (S, {
      direction: v
    }) => {
      const h = !g.current.style.width;
      if (S.clientHeight < g.current.clientHeight && h) {
        const O = `${zc(Kt(S))}px`;
        g.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = O, g.current.style.width = `calc(100% + ${O})`;
      }
      return g.current;
    }
  }), []);
  const f = (S) => {
    const v = g.current, h = S.key;
    if (S.ctrlKey || S.metaKey || S.altKey) {
      d && d(S);
      return;
    }
    const k = nt(v).activeElement;
    if (h === "ArrowDown")
      S.preventDefault(), Rr(v, k, u, l, No);
    else if (h === "ArrowUp")
      S.preventDefault(), Rr(v, k, u, l, ia);
    else if (h === "Home")
      S.preventDefault(), Rr(v, null, u, l, No);
    else if (h === "End")
      S.preventDefault(), Rr(v, null, u, l, ia);
    else if (h.length === 1) {
      const N = b.current, $ = h.toLowerCase(), I = performance.now();
      N.keys.length > 0 && (I - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && $ !== N.keys[0] && (N.repeating = !1)), N.lastTime = I, N.keys.push($);
      const B = k && !N.repeating && Vc(k, N);
      N.previousKeyMatched && (B || Rr(v, k, !1, l, No, N)) ? S.preventDefault() : N.previousKeyMatched = !1;
    }
    d && d(S);
  }, x = Ke(g, r);
  let w = -1;
  T.Children.forEach(a, (S, v) => {
    if (!/* @__PURE__ */ T.isValidElement(S)) {
      w === v && (w += 1, w >= a.length && (w = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && dr.isFragment(S) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), S.props.disabled || (m === "selectedMenu" && S.props.selected || w === -1) && (w = v), w === v && (S.props.disabled || S.props.muiSkipListHighlight || S.type.muiSkipListHighlight) && (w += 1, w >= a.length && (w = -1));
  });
  const P = T.Children.map(a, (S, v) => {
    if (v === w) {
      const h = {};
      return s && (h.autoFocus = !0), S.props.tabIndex === void 0 && m === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ T.cloneElement(S, h);
    }
    return S;
  });
  return /* @__PURE__ */ C.jsx(Lc, {
    role: "menu",
    ref: x,
    className: c,
    onKeyDown: f,
    tabIndex: i ? 0 : -1,
    ...y,
    children: P
  });
});
process.env.NODE_ENV !== "production" && (Wc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function ug(e) {
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
function Uc(e, t, r, n) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = ug(i);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Hc(e, t, r, n) {
  return e[t] === void 0 ? null : Uc(e, t, r, n);
}
function ei() {
  return null;
}
Hc.isRequired = Uc;
ei.isRequired = ei;
const qc = process.env.NODE_ENV === "production" ? ei : Hc;
function dg(e) {
  return typeof e == "string";
}
function fg(e) {
  const t = nt(e);
  return t.body === e ? Kt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Lr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function sa(e) {
  return parseInt(Kt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function pg(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function aa(e, t, r, n, i) {
  const s = [t, r, ...n];
  [].forEach.call(e.children, (a) => {
    const c = !s.includes(a), l = !pg(a);
    c && l && Lr(a, i);
  });
}
function Io(e, t) {
  let r = -1;
  return e.some((n, i) => t(n) ? (r = i, !0) : !1), r;
}
function mg(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (fg(n)) {
      const a = zc(Kt(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${sa(n) + a}px`;
      const c = nt(n).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${sa(l) + a}px`;
      });
    }
    let s;
    if (n.parentNode instanceof DocumentFragment)
      s = nt(n).body;
    else {
      const a = n.parentElement, c = Kt(n);
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
function hg(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class gg {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Lr(t.modalRef, !1);
    const i = hg(r);
    aa(r, t.mount, t.modalRef, i, !0);
    const s = Io(this.containers, (a) => a.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: i
    }), n);
  }
  mount(t, r) {
    const n = Io(this.containers, (s) => s.modals.includes(t)), i = this.containers[n];
    i.restore || (i.restore = mg(i, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const i = Io(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(n, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Lr(t.modalRef, r), aa(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Lr(a.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const yg = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function bg(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function vg(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function xg(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || vg(e));
}
function Sg(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(yg)).forEach((n, i) => {
    const s = bg(n);
    s === -1 || !xg(n) || (s === 0 ? t.push(n) : r.push({
      documentOrder: i,
      tabIndex: s,
      node: n
    }));
  }), r.sort((n, i) => n.tabIndex === i.tabIndex ? n.documentOrder - i.documentOrder : n.tabIndex - i.tabIndex).map((n) => n.node).concat(t);
}
function Eg() {
  return !0;
}
function Un(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Sg,
    isEnabled: a = Eg,
    open: c
  } = e, l = T.useRef(!1), u = T.useRef(null), d = T.useRef(null), m = T.useRef(null), y = T.useRef(null), g = T.useRef(!1), b = T.useRef(null), f = Ke(sn(t), b), x = T.useRef(null);
  T.useEffect(() => {
    !c || !b.current || (g.current = !r);
  }, [r, c]), T.useEffect(() => {
    if (!c || !b.current)
      return;
    const S = nt(b.current);
    return b.current.contains(S.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), g.current && b.current.focus()), () => {
      i || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [c]), T.useEffect(() => {
    if (!c || !b.current)
      return;
    const S = nt(b.current), v = (k) => {
      x.current = k, !(n || !a() || k.key !== "Tab") && S.activeElement === b.current && k.shiftKey && (l.current = !0, d.current && d.current.focus());
    }, h = () => {
      const k = b.current;
      if (k === null)
        return;
      if (!S.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (k.contains(S.activeElement) || n && S.activeElement !== u.current && S.activeElement !== d.current)
        return;
      if (S.activeElement !== y.current)
        y.current = null;
      else if (y.current !== null)
        return;
      if (!g.current)
        return;
      let N = [];
      if ((S.activeElement === u.current || S.activeElement === d.current) && (N = s(b.current)), N.length > 0) {
        const $ = !!(x.current?.shiftKey && x.current?.key === "Tab"), I = N[0], B = N[N.length - 1];
        typeof I != "string" && typeof B != "string" && ($ ? B.focus() : I.focus());
      } else
        k.focus();
    };
    S.addEventListener("focusin", h), S.addEventListener("keydown", v, !0);
    const O = setInterval(() => {
      S.activeElement && S.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval(O), S.removeEventListener("focusin", h), S.removeEventListener("keydown", v, !0);
    };
  }, [r, n, i, a, c, s]);
  const w = (S) => {
    m.current === null && (m.current = S.relatedTarget), g.current = !0, y.current = S.target;
    const v = t.props.onFocus;
    v && v(S);
  }, P = (S) => {
    m.current === null && (m.current = S.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ C.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ C.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: P,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: f,
      onFocus: w
    }), /* @__PURE__ */ C.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: P,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: vr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Un.propTypes = lo(Un.propTypes));
const Tg = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Yc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = nn(), i = {
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
    onEntering: y,
    onExit: g,
    onExited: b,
    onExiting: f,
    style: x,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = gt,
    ...S
  } = t, v = T.useRef(null), h = Ke(v, sn(c), r), O = (M) => (j) => {
    if (M) {
      const _ = v.current;
      j === void 0 ? M(_) : M(_, j);
    }
  }, k = O(y), N = O((M, j) => {
    Ec(M);
    const _ = Ln({
      style: x,
      timeout: w,
      easing: l
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = n.transitions.create("opacity", _), M.style.transition = n.transitions.create("opacity", _), d && d(M, j);
  }), $ = O(m), I = O(f), B = O((M) => {
    const j = Ln({
      style: x,
      timeout: w,
      easing: l
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = n.transitions.create("opacity", j), M.style.transition = n.transitions.create("opacity", j), g && g(M);
  }), p = O(b), A = (M) => {
    s && s(v.current, M);
  };
  return /* @__PURE__ */ C.jsx(P, {
    appear: a,
    in: u,
    nodeRef: v,
    onEnter: N,
    onEntered: $,
    onEntering: k,
    onExit: B,
    onExited: p,
    onExiting: I,
    addEndListener: A,
    timeout: w,
    ...S,
    children: (M, {
      ownerState: j,
      ..._
    }) => /* @__PURE__ */ T.cloneElement(c, {
      style: {
        opacity: 0,
        visibility: M === "exited" && !u ? "hidden" : void 0,
        ...Tg[M],
        ...x,
        ...c.props.style
      },
      ref: h,
      ..._
    })
  });
});
process.env.NODE_ENV !== "production" && (Yc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: vr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function wg(e) {
  return Te("MuiBackdrop", e);
}
ve("MuiBackdrop", ["root", "invisible"]);
const Cg = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return $e({
    root: ["root", r && "invisible"]
  }, wg, t);
}, Og = te("div", {
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
}), Gc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: s,
    component: a = "div",
    invisible: c = !1,
    open: l,
    components: u = {},
    componentsProps: d = {},
    slotProps: m = {},
    slots: y = {},
    TransitionComponent: g,
    transitionDuration: b,
    ...f
  } = n, x = {
    ...n,
    component: a,
    invisible: c
  }, w = Cg(x), P = {
    transition: g,
    root: u.Root,
    ...y
  }, S = {
    ...d,
    ...m
  }, v = {
    component: a,
    slots: P,
    slotProps: S
  }, [h, O] = we("root", {
    elementType: Og,
    externalForwardedProps: v,
    className: ne(w.root, s),
    ownerState: x
  }), [k, N] = we("transition", {
    elementType: Yc,
    externalForwardedProps: v,
    ownerState: x
  });
  return /* @__PURE__ */ C.jsx(k, {
    in: l,
    timeout: b,
    ...f,
    ...N,
    children: /* @__PURE__ */ C.jsx(h, {
      "aria-hidden": !0,
      ...O,
      classes: w,
      ref: r,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Gc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function Pg(e) {
  return typeof e == "function" ? e() : e;
}
function Rg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ca = () => {
}, En = new gg();
function kg(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: c,
    onClose: l,
    open: u,
    rootRef: d
  } = e, m = T.useRef({}), y = T.useRef(null), g = T.useRef(null), b = Ke(g, d), [f, x] = T.useState(!u), w = Rg(c);
  let P = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (P = !1);
  const S = () => nt(y.current), v = () => (m.current.modalRef = g.current, m.current.mount = y.current, m.current), h = () => {
    En.mount(v(), {
      disableScrollLock: n
    }), g.current && (g.current.scrollTop = 0);
  }, O = Rt(() => {
    const j = Pg(t) || S().body;
    En.add(v(), j), g.current && h();
  }), k = () => En.isTopModal(v()), N = Rt((j) => {
    y.current = j, j && (u && k() ? h() : g.current && Lr(g.current, P));
  }), $ = T.useCallback(() => {
    En.remove(v(), P);
  }, [P]);
  T.useEffect(() => () => {
    $();
  }, [$]), T.useEffect(() => {
    u ? O() : (!w || !i) && $();
  }, [u, $, w, i, O]);
  const I = (j) => (_) => {
    j.onKeyDown?.(_), !(_.key !== "Escape" || _.which === 229 || // Wait until IME is settled.
    !k()) && (r || (_.stopPropagation(), l && l(_, "escapeKeyDown")));
  }, B = (j) => (_) => {
    j.onClick?.(_), _.target === _.currentTarget && l && l(_, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const _ = Ic(e);
      delete _.onTransitionEnter, delete _.onTransitionExited;
      const V = {
        ..._,
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
        onKeyDown: I(V),
        ref: b
      };
    },
    getBackdropProps: (j = {}) => {
      const _ = j;
      return {
        "aria-hidden": !0,
        ..._,
        onClick: B(_),
        open: u
      };
    },
    getTransitionProps: () => {
      const j = () => {
        x(!1), s && s();
      }, _ = () => {
        x(!0), a && a(), i && $();
      };
      return {
        onEnter: _o(j, c?.props.onEnter ?? ca),
        onExited: _o(_, c?.props.onExited ?? ca)
      };
    },
    rootRef: b,
    portalRef: N,
    isTopModal: k,
    exited: f,
    hasTransition: w
  };
}
function $g(e) {
  return Te("MuiModal", e);
}
ve("MuiModal", ["root", "hidden", "backdrop"]);
const Mg = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return $e({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, $g, n);
}, Ng = te("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(Ce(({
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
}))), Ig = te(Gc, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Kc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Ig,
    BackdropProps: s,
    classes: a,
    className: c,
    closeAfterTransition: l = !1,
    children: u,
    container: d,
    component: m,
    components: y = {},
    componentsProps: g = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: w = !1,
    disableRestoreFocus: P = !1,
    disableScrollLock: S = !1,
    hideBackdrop: v = !1,
    keepMounted: h = !1,
    onClose: O,
    onTransitionEnter: k,
    onTransitionExited: N,
    open: $,
    slotProps: I = {},
    slots: B = {},
    // eslint-disable-next-line react/prop-types
    theme: p,
    ...A
  } = n, M = {
    ...n,
    closeAfterTransition: l,
    disableAutoFocus: b,
    disableEnforceFocus: f,
    disableEscapeKeyDown: x,
    disablePortal: w,
    disableRestoreFocus: P,
    disableScrollLock: S,
    hideBackdrop: v,
    keepMounted: h
  }, {
    getRootProps: j,
    getBackdropProps: _,
    getTransitionProps: V,
    portalRef: X,
    isTopModal: H,
    exited: E,
    hasTransition: D
  } = kg({
    ...M,
    rootRef: r
  }), L = {
    ...M,
    exited: E
  }, W = Mg(L), U = {};
  if (u.props.tabIndex === void 0 && (U.tabIndex = "-1"), D) {
    const {
      onEnter: q,
      onExited: J
    } = V();
    U.onEnter = q, U.onExited = J;
  }
  const z = {
    slots: {
      root: y.Root,
      backdrop: y.Backdrop,
      ...B
    },
    slotProps: {
      ...g,
      ...I
    }
  }, [Y, K] = we("root", {
    ref: r,
    elementType: Ng,
    externalForwardedProps: {
      ...z,
      ...A,
      component: m
    },
    getSlotProps: j,
    ownerState: L,
    className: ne(c, W?.root, !L.open && L.exited && W?.hidden)
  }), [G, Z] = we("backdrop", {
    ref: s?.ref,
    elementType: i,
    externalForwardedProps: z,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (q) => _({
      ...q,
      onClick: (J) => {
        q?.onClick && q.onClick(J);
      }
    }),
    className: ne(s?.className, W?.backdrop),
    ownerState: L
  });
  return !h && !$ && (!D || E) ? null : /* @__PURE__ */ C.jsx(Jr, {
    ref: X,
    container: d,
    disablePortal: w,
    children: /* @__PURE__ */ C.jsxs(Y, {
      ...K,
      children: [!v && i ? /* @__PURE__ */ C.jsx(G, {
        ...Z
      }) : null, /* @__PURE__ */ C.jsx(Un, {
        disableEnforceFocus: f,
        disableAutoFocus: b,
        disableRestoreFocus: P,
        isEnabled: H,
        open: $,
        children: /* @__PURE__ */ T.cloneElement(u, U)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
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
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: vr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
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
  container: o.oneOfType([Et, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Ag(e) {
  return Te("MuiPaper", e);
}
ve("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const jg = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: i
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return $e(s, Ag, i);
}, _g = te("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(Ce(({
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
}))), Xc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiPaper"
  }), i = nn(), {
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
  }, y = jg(m);
  return process.env.NODE_ENV !== "production" && i.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ C.jsx(_g, {
    as: a,
    ownerState: m,
    className: ne(y.root, s),
    ref: r,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[c],
        ...i.vars && {
          "--Paper-overlay": i.vars.overlays?.[c]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${An("#fff", Ho(c))}, ${An("#fff", Ho(c))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Xc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Nt(qc, (e) => {
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
  square: o.bool,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
function Dg(e) {
  return Te("MuiPopover", e);
}
ve("MuiPopover", ["root", "paper"]);
function la(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function ua(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function da(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ir(e) {
  return typeof e == "function" ? e() : e;
}
const Bg = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"],
    paper: ["paper"]
  }, Dg, t);
}, Fg = te(Kc, {
  name: "MuiPopover",
  slot: "Root"
})({}), Jc = te(Xc, {
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
}), Zc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
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
    elevation: y = 8,
    marginThreshold: g = 16,
    open: b,
    PaperProps: f = {},
    // TODO: remove in v7
    slots: x = {},
    slotProps: w = {},
    transformOrigin: P = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: S,
    // TODO: remove in v7
    transitionDuration: v = "auto",
    TransitionProps: h = {},
    // TODO: remove in v7
    disableScrollLock: O = !1,
    ...k
  } = n, N = T.useRef(), $ = {
    ...n,
    anchorOrigin: a,
    anchorReference: l,
    elevation: y,
    marginThreshold: g,
    transformOrigin: P,
    TransitionComponent: S,
    transitionDuration: v,
    TransitionProps: h
  }, I = Bg($), B = T.useCallback(() => {
    if (l === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (c || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), c;
    const q = Ir(s), J = q && q.nodeType === 1 ? q : nt(N.current).body, R = J.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ie = J.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ie.top === 0 && ie.left === 0 && ie.right === 0 && ie.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: R.top + la(R, a.vertical),
      left: R.left + ua(R, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, c, l]), p = T.useCallback((q) => ({
    vertical: la(q, P.vertical),
    horizontal: ua(q, P.horizontal)
  }), [P.horizontal, P.vertical]), A = T.useCallback((q) => {
    const J = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, R = p(J);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: da(R)
      };
    const ie = B();
    let se = ie.top - R.vertical, Se = ie.left - R.horizontal;
    const Qe = se + J.height, _e = Se + J.width, Ae = Kt(Ir(s)), xe = Ae.innerHeight - g, Me = Ae.innerWidth - g;
    if (g !== null && se < g) {
      const be = se - g;
      se -= be, R.vertical += be;
    } else if (g !== null && Qe > xe) {
      const be = Qe - xe;
      se -= be, R.vertical += be;
    }
    if (process.env.NODE_ENV !== "production" && J.height > xe && J.height && xe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${J.height - xe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && Se < g) {
      const be = Se - g;
      Se -= be, R.horizontal += be;
    } else if (_e > Me) {
      const be = _e - Me;
      Se -= be, R.horizontal += be;
    }
    return {
      top: `${Math.round(se)}px`,
      left: `${Math.round(Se)}px`,
      transformOrigin: da(R)
    };
  }, [s, l, B, p, g]), [M, j] = T.useState(b), _ = T.useCallback(() => {
    const q = N.current;
    if (!q)
      return;
    const J = A(q);
    J.top !== null && q.style.setProperty("top", J.top), J.left !== null && (q.style.left = J.left), q.style.transformOrigin = J.transformOrigin, j(!0);
  }, [A]);
  T.useEffect(() => (O && window.addEventListener("scroll", _), () => window.removeEventListener("scroll", _)), [s, O, _]);
  const V = () => {
    _();
  }, X = () => {
    j(!1);
  };
  T.useEffect(() => {
    b && _();
  }), T.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      _();
    }
  } : null, [b, _]), T.useEffect(() => {
    if (!b)
      return;
    const q = Ip(() => {
      _();
    }), J = Kt(Ir(s));
    return J.addEventListener("resize", q), () => {
      q.clear(), J.removeEventListener("resize", q);
    };
  }, [s, b, _]);
  let H = v;
  const E = {
    slots: {
      transition: S,
      ...x
    },
    slotProps: {
      transition: h,
      paper: f,
      ...w
    }
  }, [D, L] = we("transition", {
    elementType: Gr,
    externalForwardedProps: E,
    ownerState: $,
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
      in: b
    }
  });
  v === "auto" && !D.muiSupportAuto && (H = void 0);
  const W = m || (s ? nt(Ir(s)).body : void 0), [U, {
    slots: z,
    slotProps: Y,
    ...K
  }] = we("root", {
    ref: r,
    elementType: Fg,
    externalForwardedProps: {
      ...E,
      ...k
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: jp(typeof w.backdrop == "function" ? w.backdrop($) : w.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: b
    },
    ownerState: $,
    className: ne(I.root, d)
  }), [G, Z] = we("paper", {
    ref: N,
    className: I.paper,
    elementType: Jc,
    externalForwardedProps: E,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: y,
      style: M ? void 0 : {
        opacity: 0
      }
    },
    ownerState: $
  });
  return /* @__PURE__ */ C.jsx(U, {
    ...K,
    ...!dg(U) && {
      slots: z,
      slotProps: Y,
      disableScrollLock: O
    },
    children: /* @__PURE__ */ C.jsx(D, {
      ...L,
      timeout: H,
      children: /* @__PURE__ */ C.jsx(G, {
        ...Z,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Zc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: It,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Nt(o.oneOfType([Et, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Ir(e.anchorEl);
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
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: o.object,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Et, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: qc,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: mc
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    paper: o.elementType,
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
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
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: o.object
});
function Lg(e) {
  return Te("MuiMenu", e);
}
ve("MuiMenu", ["root", "paper", "list"]);
const zg = {
  vertical: "top",
  horizontal: "right"
}, Vg = {
  vertical: "top",
  horizontal: "left"
}, Wg = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Lg, t);
}, Ug = te(Zc, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Hg = te(Jc, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), qg = te(Wc, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Qc = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: s,
    className: a,
    disableAutoFocusItem: c = !1,
    MenuListProps: l = {},
    onClose: u,
    open: d,
    PaperProps: m = {},
    PopoverClasses: y,
    transitionDuration: g = "auto",
    TransitionProps: {
      onEntering: b,
      ...f
    } = {},
    variant: x = "selectedMenu",
    slots: w = {},
    slotProps: P = {},
    ...S
  } = n, v = Ei(), h = {
    ...n,
    autoFocus: i,
    disableAutoFocusItem: c,
    MenuListProps: l,
    onEntering: b,
    PaperProps: m,
    transitionDuration: g,
    TransitionProps: f,
    variant: x
  }, O = Wg(h), k = i && !c && d, N = T.useRef(null), $ = (H, E) => {
    N.current && N.current.adjustStyleForScrollbar(H, {
      direction: v ? "rtl" : "ltr"
    }), b && b(H, E);
  }, I = (H) => {
    H.key === "Tab" && (H.preventDefault(), u && u(H, "tabKeyDown"));
  };
  let B = -1;
  T.Children.map(s, (H, E) => {
    /* @__PURE__ */ T.isValidElement(H) && (process.env.NODE_ENV !== "production" && dr.isFragment(H) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), H.props.disabled || (x === "selectedMenu" && H.props.selected || B === -1) && (B = E));
  });
  const p = {
    slots: w,
    slotProps: {
      list: l,
      transition: f,
      paper: m,
      ...P
    }
  }, A = _c({
    elementType: w.root,
    externalSlotProps: P.root,
    ownerState: h,
    className: [O.root, a]
  }), [M, j] = we("paper", {
    className: O.paper,
    elementType: Hg,
    externalForwardedProps: p,
    shouldForwardComponentProp: !0,
    ownerState: h
  }), [_, V] = we("list", {
    className: ne(O.list, l.className),
    elementType: qg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: p,
    getSlotProps: (H) => ({
      ...H,
      onKeyDown: (E) => {
        I(E), H.onKeyDown?.(E);
      }
    }),
    ownerState: h
  }), X = typeof p.slotProps.transition == "function" ? p.slotProps.transition(h) : p.slotProps.transition;
  return /* @__PURE__ */ C.jsx(Ug, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: v ? "right" : "left"
    },
    transformOrigin: v ? zg : Vg,
    slots: {
      root: w.root,
      paper: M,
      backdrop: w.backdrop,
      ...w.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: w.transition
      }
    },
    slotProps: {
      root: A,
      paper: j,
      backdrop: typeof P.backdrop == "function" ? P.backdrop(h) : P.backdrop,
      transition: {
        ...X,
        onEntering: (...H) => {
          $(...H), X?.onEntering?.(...H);
        }
      }
    },
    open: d,
    ref: r,
    transitionDuration: g,
    ownerState: h,
    ...S,
    classes: y,
    children: /* @__PURE__ */ C.jsx(_, {
      actions: N,
      autoFocus: i && (B === -1 || c),
      autoFocusItem: k,
      variant: x,
      ...V,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (Qc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Et, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    list: o.oneOfType([o.func, o.object]),
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    list: o.elementType,
    paper: o.elementType,
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const fa = ve("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), pa = ve("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function Yg(e) {
  return Te("MuiTypography", e);
}
ve("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Gg = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Kg = kp(), Xg = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, e.align !== "inherit" && `align${ee(t)}`, r && "gutterBottom", n && "noWrap", i && "paragraph"]
  };
  return $e(c, Yg, a);
}, Jg = te("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${ee(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(Ce(({
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
  })), ...Object.entries(e.palette).filter(St()).map(([t]) => ({
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
}))), ma = {
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
}, Yt = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    color: n,
    ...i
  } = Oe({
    props: t,
    name: "MuiTypography"
  }), s = !Gg[n], a = Kg({
    ...i,
    ...s && {
      color: n
    }
  }), {
    align: c = "inherit",
    className: l,
    component: u,
    gutterBottom: d = !1,
    noWrap: m = !1,
    paragraph: y = !1,
    variant: g = "body1",
    variantMapping: b = ma,
    ...f
  } = a, x = {
    ...a,
    align: c,
    color: n,
    className: l,
    component: u,
    gutterBottom: d,
    noWrap: m,
    paragraph: y,
    variant: g,
    variantMapping: b
  }, w = u || (y ? "p" : b[g] || ma[g]) || "span", P = Xg(x);
  return /* @__PURE__ */ C.jsx(Jg, {
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
process.env.NODE_ENV !== "production" && (Yt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: o.bool,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
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
  variantMapping: o.object
});
const ha = ve("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function Zg(e) {
  return Te("MuiMenuItem", e);
}
const kr = ve("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Qg = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, ey = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: n,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, l = $e({
    root: ["root", r && "dense", t && "disabled", !i && "gutters", n && "divider", s && "selected"]
  }, Zg, a);
  return {
    ...a,
    ...l
  };
}, ty = te(on, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Qg
})(Ce(({
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
  [`&.${kr.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${kr.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${kr.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${kr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${kr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${fa.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${fa.inset}`]: {
    marginLeft: 52
  },
  [`& .${ha.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${ha.inset}`]: {
    paddingLeft: 36
  },
  [`& .${pa.root}`]: {
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
      [`& .${pa.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), el = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: c = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: m,
    className: y,
    ...g
  } = n, b = T.useContext(Wn), f = T.useMemo(() => ({
    dense: a || b.dense || !1,
    disableGutters: l
  }), [b.dense, a, l]), x = T.useRef(null);
  xt(() => {
    i && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const w = {
    ...n,
    dense: f.dense,
    divider: c,
    disableGutters: l
  }, P = ey(n), S = Ke(x, r);
  let v;
  return n.disabled || (v = m !== void 0 ? m : -1), /* @__PURE__ */ C.jsx(Wn.Provider, {
    value: f,
    children: /* @__PURE__ */ C.jsx(ty, {
      ref: S,
      role: d,
      tabIndex: v,
      component: s,
      focusVisibleClassName: ne(P.focusVisible, u),
      className: ne(P.root, y),
      ...g,
      ownerState: w,
      classes: P
    })
  });
});
process.env.NODE_ENV !== "production" && (el.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
function ry(e) {
  return Te("MuiIcon", e);
}
ve("MuiIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const ny = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ee(t)}`, `fontSize${ee(r)}`]
  };
  return $e(i, ry, n);
}, oy = te("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ee(r.color)}`], t[`fontSize${ee(r.fontSize)}`]];
  }
})(Ce(({
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
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Bi = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiIcon"
  }), {
    baseClassName: i = "material-icons",
    className: s,
    color: a = "inherit",
    component: c = "span",
    fontSize: l = "medium",
    ...u
  } = n, d = {
    ...n,
    baseClassName: i,
    color: a,
    component: c,
    fontSize: l
  }, m = ny(d);
  return /* @__PURE__ */ C.jsx(oy, {
    as: c,
    className: ne(
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
process.env.NODE_ENV !== "production" && (Bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The base class applied to the icon. Defaults to 'material-icons', but can be changed to any
   * other base class that suits the icon font you're using (for example material-icons-rounded, fas, etc).
   * @default 'material-icons'
   */
  baseClassName: o.string,
  /**
   * The name of the icon font ligature.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
Bi.muiName = "Icon";
const tl = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
}), "Person"), iy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), "KeyboardArrowDown"), sy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), "KeyboardArrowUp");
function ay(e) {
  return Te("MuiButton", e);
}
const zt = ve("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), rl = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (rl.displayName = "ButtonGroupContext");
const nl = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (nl.displayName = "ButtonGroupButtonContext");
const cy = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: i,
    variant: s,
    loading: a,
    loadingPosition: c,
    classes: l
  } = e, u = {
    root: ["root", a && "loading", s, `${s}${ee(t)}`, `size${ee(i)}`, `${s}Size${ee(i)}`, `color${ee(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${ee(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${ee(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${ee(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = $e(u, ay, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, ol = [{
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
}], ly = te(on, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ee(r.color)}`], t[`size${ee(r.size)}`], t[`${r.variant}Size${ee(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(Ce(({
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
    [`&.${zt.disabled}`]: {
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
        [`&.${zt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${zt.disabled}`]: {
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
        [`&.${zt.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(St()).map(([n]) => ({
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
        [`&.${zt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${zt.disabled}`]: {
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
        [`&.${zt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), uy = te("span", {
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
  }, ...ol]
})), dy = te("span", {
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
  }, ...ol]
})), fy = te("span", {
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
})), ga = te("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), il = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = T.useContext(rl), i = T.useContext(nl), s = Hr(n, t), a = Oe({
    props: s,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: d,
    disabled: m = !1,
    disableElevation: y = !1,
    disableFocusRipple: g = !1,
    endIcon: b,
    focusVisibleClassName: f,
    fullWidth: x = !1,
    id: w,
    loading: P = null,
    loadingIndicator: S,
    loadingPosition: v = "center",
    size: h = "medium",
    startIcon: O,
    type: k,
    variant: N = "text",
    ...$
  } = a, I = uo(w), B = S ?? /* @__PURE__ */ C.jsx(ki, {
    "aria-labelledby": I,
    color: "inherit",
    size: 16
  }), p = {
    ...a,
    color: l,
    component: u,
    disabled: m,
    disableElevation: y,
    disableFocusRipple: g,
    fullWidth: x,
    loading: P,
    loadingIndicator: B,
    loadingPosition: v,
    size: h,
    type: k,
    variant: N
  }, A = cy(p), M = (O || P && v === "start") && /* @__PURE__ */ C.jsx(uy, {
    className: A.startIcon,
    ownerState: p,
    children: O || /* @__PURE__ */ C.jsx(ga, {
      className: A.loadingIconPlaceholder,
      ownerState: p
    })
  }), j = (b || P && v === "end") && /* @__PURE__ */ C.jsx(dy, {
    className: A.endIcon,
    ownerState: p,
    children: b || /* @__PURE__ */ C.jsx(ga, {
      className: A.loadingIconPlaceholder,
      ownerState: p
    })
  }), _ = i || "", V = typeof P == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ C.jsx("span", {
      className: A.loadingWrapper,
      style: {
        display: "contents"
      },
      children: P && /* @__PURE__ */ C.jsx(fy, {
        className: A.loadingIndicator,
        ownerState: p,
        children: B
      })
    })
  ) : null;
  return /* @__PURE__ */ C.jsxs(ly, {
    ownerState: p,
    className: ne(n.className, A.root, d, _),
    component: u,
    disabled: m || P,
    focusRipple: !g,
    focusVisibleClassName: ne(A.focusVisible, f),
    ref: r,
    type: k,
    id: P ? I : w,
    ...$,
    classes: A,
    children: [M, v !== "end" && V, c, v === "end" && V, j]
  });
});
process.env.NODE_ENV !== "production" && (il.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * Element placed after the children.
   */
  endIcon: o.node,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * @ignore
   */
  id: o.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: o.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: o.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: o.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * Element placed before the children.
   */
  startIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["contained", "outlined", "text"]), o.string])
});
var Ao = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ya;
function py() {
  return ya || (ya = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", a = 0; a < arguments.length; a++) {
          var c = arguments[a];
          c && (s = i(s, n(c)));
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
          t.call(s, c) && s[c] && (a = i(a, c));
        return a;
      }
      function i(s, a) {
        return a ? s ? s + " " + a : s + a : s;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(Ao)), Ao.exports;
}
var my = py();
const Jt = /* @__PURE__ */ Ta(my);
function sl(e) {
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
function ti({
  children: e,
  circle: t,
  block: r,
  inverted: n,
  loading: i,
  clearBlock: s,
  color: a,
  className: c,
  sx: l,
  ...u
}) {
  const d = sl(a), m = {
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
  return /* @__PURE__ */ C.jsx(
    il,
    {
      className: Jt(
        "br-button",
        d,
        {
          circle: t,
          block: r,
          inverted: n,
          loading: i,
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
function wb({
  name: e,
  src: t,
  alt: r,
  menuItems: n = [],
  onNavigate: i,
  size: s = "medium",
  color: a = "default",
  className: c = ""
}) {
  const [l, u] = _r(null), d = !!l, m = (h) => {
    n.length > 0 && u(h.currentTarget);
  }, y = () => {
    u(null);
  }, g = (h) => {
    i?.(h), y();
  }, b = { small: 32, medium: 40, large: 48 }, f = {
    default: "var(--color-primary-lighten-01)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)"
  }, x = b[s] ?? 40, w = {
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
  }, v = e ? ((h) => h.split(" ").map((O) => O[0]).join("").toUpperCase().slice(0, 2))(e) : /* @__PURE__ */ C.jsx(tl, { fontSize: "inherit" });
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxs(
      ti,
      {
        className: c,
        onClick: m,
        "aria-controls": d ? "avatar-menu" : void 0,
        "aria-haspopup": n.length > 0,
        "aria-expanded": d,
        sx: P,
        children: [
          /* @__PURE__ */ C.jsx(Fc, { src: t, alt: r || e, sx: w, children: v }),
          /* @__PURE__ */ C.jsxs("span", { children: [
            "Olá, ",
            /* @__PURE__ */ C.jsx("strong", { children: e || "Usuário" })
          ] }),
          n.length > 0 && (d ? /* @__PURE__ */ C.jsx(sy, {}) : /* @__PURE__ */ C.jsx(iy, {}))
        ]
      }
    ),
    /* @__PURE__ */ C.jsx(
      Qc,
      {
        id: "avatar-menu",
        anchorEl: l,
        open: d,
        onClose: y,
        slotProps: {
          list: { "aria-labelledby": "avatar-button" }
        },
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
        children: n.map((h) => /* @__PURE__ */ C.jsxs(el, { onClick: () => h.href && g(h.href), children: [
          h.icon && /* @__PURE__ */ C.jsx(Bi, { sx: { mr: 1.5 }, children: h.icon }),
          h.label
        ] }, h.href))
      }
    )
  ] });
}
function Cb({ items: e, onNavigate: t, className: r, ...n }) {
  const i = (s, a) => {
    s.preventDefault(), t(a);
  };
  return /* @__PURE__ */ C.jsx("nav", { className: Jt("br-breadcrumb", r), "aria-label": "Breadcrumb", ...n, children: /* @__PURE__ */ C.jsx("ul", { className: "crumb-list", children: e.map((s, a) => /* @__PURE__ */ C.jsx("li", { className: "crumb", children: s.href ? /* @__PURE__ */ C.jsx(
    "a",
    {
      className: "crumb-link",
      href: s.href,
      onClick: (c) => i(c, s.href),
      children: s.label
    }
  ) : /* @__PURE__ */ C.jsx("span", { className: "crumb-active", "aria-current": "page", children: s.label }) }, a)) }) });
}
function hy({
  id: e,
  label: t,
  status: r,
  indeterminate: n = !1,
  hiddenLabel: i = !1,
  className: s,
  disabled: a,
  ...c
}) {
  const l = Bl(null);
  sr(() => {
    l.current && (l.current.indeterminate = n);
  }, [n]);
  const u = Jt(
    "br-checkbox",
    r,
    {
      disabled: a,
      "hidden-label": i
    },
    s
  );
  return /* @__PURE__ */ C.jsxs("div", { className: u, children: [
    /* @__PURE__ */ C.jsx("input", { ref: l, id: e, type: "checkbox", disabled: a, ...c }),
    /* @__PURE__ */ C.jsx("label", { htmlFor: e, children: t })
  ] });
}
const zr = Kf({
  createStyledComponent: te("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => Oe({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (zr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
  /**
   * Add an element between each child.
   */
  divider: o.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: o.bool
});
var gy = (e) => e.type === "checkbox", Ar = (e) => e instanceof Date, Fi = (e) => e == null;
const al = (e) => typeof e == "object";
var Zt = (e) => !Fi(e) && !Array.isArray(e) && al(e) && !Ar(e), yy = (e) => Zt(e) && e.target ? gy(e.target) ? e.target.checked : e.target.value : e, by = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, vy = (e, t) => e.has(by(t)), xy = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Zt(t) && t.hasOwnProperty("isPrototypeOf");
}, Sy = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function cl(e) {
  let t;
  const r = Array.isArray(e), n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(Sy && (e instanceof Blob || n)) && (r || Zt(e)))
    if (t = r ? [] : Object.create(Object.getPrototypeOf(e)), !r && !xy(e))
      t = e;
    else
      for (const i in e)
        e.hasOwnProperty(i) && (t[i] = cl(e[i]));
  else
    return e;
  return t;
}
var ll = (e) => /^\w*$/.test(e), ri = (e) => e === void 0, Ey = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ul = (e) => Ey(e.replace(/["|']|\]/g, "").split(/\.|\[/)), He = (e, t, r) => {
  if (!t || !Zt(e))
    return r;
  const n = (ll(t) ? [t] : ul(t)).reduce((i, s) => Fi(i) ? i : i[s], e);
  return ri(n) || n === e ? ri(e[t]) ? r : e[t] : n;
}, jo = (e) => typeof e == "boolean", ba = (e, t, r) => {
  let n = -1;
  const i = ll(t) ? [t] : ul(t), s = i.length, a = s - 1;
  for (; ++n < s; ) {
    const c = i[n];
    let l = r;
    if (n !== a) {
      const u = e[c];
      l = Zt(u) || Array.isArray(u) ? u : isNaN(+i[n + 1]) ? {} : [];
    }
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return;
    e[c] = l, e = e[c];
  }
};
const va = {
  BLUR: "blur",
  CHANGE: "change"
}, xa = {
  all: "all"
}, dl = oe.createContext(null);
dl.displayName = "HookFormContext";
const Li = () => oe.useContext(dl);
var Ty = (e, t, r, n = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(i, s, {
      get: () => {
        const a = s;
        return t._proxyFormState[a] !== xa.all && (t._proxyFormState[a] = !n || xa.all), r && (r[a] = !0), e[a];
      }
    });
  return i;
};
const fl = typeof window < "u" ? oe.useLayoutEffect : oe.useEffect;
function wy(e) {
  const t = Li(), { control: r = t.control, disabled: n, name: i, exact: s } = e || {}, [a, c] = oe.useState(r._formState), l = oe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return fl(() => r._subscribe({
    name: i,
    formState: l.current,
    exact: s,
    callback: (u) => {
      !n && c({
        ...r._formState,
        ...u
      });
    }
  }), [i, n, s]), oe.useEffect(() => {
    l.current.isValid && r._setValid(!0);
  }, [r]), oe.useMemo(() => Ty(a, r, l.current, !1), [a, r]);
}
var Cy = (e) => typeof e == "string", Oy = (e, t, r, n, i) => Cy(e) ? He(r, e, i) : Array.isArray(e) ? e.map((s) => He(r, s)) : r, Sa = (e) => Fi(e) || !al(e);
function pl(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (Sa(e) || Sa(t))
    return e === t;
  if (Ar(e) && Ar(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), i = Object.keys(t);
  if (n.length !== i.length)
    return !1;
  if (r.has(e) || r.has(t))
    return !0;
  r.add(e), r.add(t);
  for (const s of n) {
    const a = e[s];
    if (!i.includes(s))
      return !1;
    if (s !== "ref") {
      const c = t[s];
      if (Ar(a) && Ar(c) || Zt(a) && Zt(c) || Array.isArray(a) && Array.isArray(c) ? !pl(a, c, r) : a !== c)
        return !1;
    }
  }
  return !0;
}
function Py(e) {
  const t = Li(), { control: r = t.control, name: n, defaultValue: i, disabled: s, exact: a, compute: c } = e || {}, l = oe.useRef(i), u = oe.useRef(c), d = oe.useRef(void 0);
  u.current = c;
  const m = oe.useMemo(() => r._getWatch(n, l.current), [r, n]), [y, g] = oe.useState(u.current ? u.current(m) : m);
  return fl(() => r._subscribe({
    name: n,
    formState: {
      values: !0
    },
    exact: a,
    callback: (b) => {
      if (!s) {
        const f = Oy(n, r._names, b.values || r._formValues, !1, l.current);
        if (u.current) {
          const x = u.current(f);
          pl(x, d.current) || (g(x), d.current = x);
        } else
          g(f);
      }
    }
  }), [r, s, n, a]), oe.useEffect(() => r._removeUnmounted()), y;
}
function Ry(e) {
  const t = Li(), { name: r, disabled: n, control: i = t.control, shouldUnregister: s, defaultValue: a } = e, c = vy(i._names.array, r), l = oe.useMemo(() => He(i._formValues, r, He(i._defaultValues, r, a)), [i, r, a]), u = Py({
    control: i,
    name: r,
    defaultValue: l,
    exact: !0
  }), d = wy({
    control: i,
    name: r,
    exact: !0
  }), m = oe.useRef(e), y = oe.useRef(i.register(r, {
    ...e.rules,
    value: u,
    ...jo(e.disabled) ? { disabled: e.disabled } : {}
  }));
  m.current = e;
  const g = oe.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!He(d.errors, r)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!He(d.dirtyFields, r)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!He(d.touchedFields, r)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!He(d.validatingFields, r)
    },
    error: {
      enumerable: !0,
      get: () => He(d.errors, r)
    }
  }), [d, r]), b = oe.useCallback((P) => y.current.onChange({
    target: {
      value: yy(P),
      name: r
    },
    type: va.CHANGE
  }), [r]), f = oe.useCallback(() => y.current.onBlur({
    target: {
      value: He(i._formValues, r),
      name: r
    },
    type: va.BLUR
  }), [r, i._formValues]), x = oe.useCallback((P) => {
    const S = He(i._fields, r);
    S && P && (S._f.ref = {
      focus: () => P.focus && P.focus(),
      select: () => P.select && P.select(),
      setCustomValidity: (v) => P.setCustomValidity(v),
      reportValidity: () => P.reportValidity()
    });
  }, [i._fields, r]), w = oe.useMemo(() => ({
    name: r,
    value: u,
    ...jo(n) || d.disabled ? { disabled: d.disabled || n } : {},
    onChange: b,
    onBlur: f,
    ref: x
  }), [r, n, d.disabled, b, f, x, u]);
  return oe.useEffect(() => {
    const P = i._options.shouldUnregister || s;
    i.register(r, {
      ...m.current.rules,
      ...jo(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const S = (v, h) => {
      const O = He(i._fields, v);
      O && O._f && (O._f.mount = h);
    };
    if (S(r, !0), P) {
      const v = cl(He(i._options.defaultValues, r));
      ba(i._defaultValues, r, v), ri(He(i._formValues, r)) && ba(i._formValues, r, v);
    }
    return !c && i.register(r), () => {
      (c ? P && !i._state.action : P) ? i.unregister(r) : S(r, !1);
    };
  }, [r, i, c, s]), oe.useEffect(() => {
    i._setDisabledField({
      disabled: n,
      name: r
    });
  }, [n, r, i]), oe.useMemo(() => ({
    field: w,
    formState: d,
    fieldState: g
  }), [w, d, g]);
}
const ml = (e) => e.render(Ry(e)), ky = De(/* @__PURE__ */ C.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), $y = De(/* @__PURE__ */ C.jsx("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), My = De(/* @__PURE__ */ C.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
}), "Lock"), Ny = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), "Visibility"), Iy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), "VisibilityOff"), hl = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"
}), "Error"), Ay = {
  None: null,
  Person: /* @__PURE__ */ C.jsx(tl, {}),
  Search: /* @__PURE__ */ C.jsx(ky, {}),
  Email: /* @__PURE__ */ C.jsx($y, {}),
  Lock: /* @__PURE__ */ C.jsx(My, {}),
  Visibility: /* @__PURE__ */ C.jsx(Ny, {}),
  VisibilityOff: /* @__PURE__ */ C.jsx(Iy, {}),
  Error: /* @__PURE__ */ C.jsx(hl, { fontSize: "small", style: { verticalAlign: "middle", marginRight: "4px" } })
};
function jy({
  name: e,
  control: t,
  rules: r,
  required: n,
  ...i
}) {
  const s = n ? {
    ...r,
    required: typeof n == "string" ? n : "Campo obrigatório"
  } : r;
  return /* @__PURE__ */ C.jsx(
    ml,
    {
      name: e,
      control: t,
      rules: s,
      render: ({ field: a, fieldState: c }) => /* @__PURE__ */ C.jsxs(zr, { children: [
        /* @__PURE__ */ C.jsx(
          hy,
          {
            ...i,
            id: e,
            ...a,
            checked: !!a.value,
            status: c.error ? "invalid" : i.status
          }
        ),
        c.error && /* @__PURE__ */ C.jsxs("span", { className: Jt("feedback", "invalid"), role: "alert", children: [
          Ay.Error,
          c.error.message
        ] })
      ] })
    }
  );
}
jy.displayName = "GovBRFormCheckbox";
const _y = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}), "Info"), Dy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"
}), "Warning"), gl = ({
  govbrSize: e = "medium",
  status: t = void 0,
  error: r = !1,
  clearBlock: n,
  id: i,
  label: s = "",
  feedbackMessage: a = "",
  helperText: c = "",
  disabled: l = !1,
  highlight: u = !1,
  inline: d,
  startIcon: m,
  endButtonIcon: y,
  onEndButtonClick: g,
  className: b = "br-input",
  placeholder: f,
  ...x
}) => {
  const w = sl(), P = i ? `${i}-feedback` : void 0, S = r ? "danger" : t, v = {
    success: /* @__PURE__ */ C.jsx(pc, { fontSize: "small" }),
    danger: /* @__PURE__ */ C.jsx(hl, { fontSize: "small" }),
    info: /* @__PURE__ */ C.jsx(_y, { fontSize: "small" }),
    warning: /* @__PURE__ */ C.jsx(Dy, { fontSize: "small" })
  };
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: Jt(
        "br-input",
        e,
        S,
        w,
        { [`auto-${n}`]: !!n },
        { "input-highlight": u, "input-inline": d },
        b
      ),
      children: [
        d ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          /* @__PURE__ */ C.jsx("div", { className: "input-label", children: /* @__PURE__ */ C.jsx("label", { htmlFor: i, className: "text-nowrap", children: s }) }),
          /* @__PURE__ */ C.jsx("div", { className: "input-content", children: /* @__PURE__ */ C.jsxs("div", { className: "input-group", children: [
            m && /* @__PURE__ */ C.jsx("div", { className: "input-icon", children: m }),
            /* @__PURE__ */ C.jsx(
              "input",
              {
                id: i,
                placeholder: f,
                disabled: l,
                "aria-describedby": P,
                className: b,
                ...x
              }
            ),
            y && /* @__PURE__ */ C.jsx(ti, { circle: !0, onClick: g, children: y })
          ] }) })
        ] }) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          s && /* @__PURE__ */ C.jsx("label", { htmlFor: i, children: s }),
          /* @__PURE__ */ C.jsxs("div", { className: "input-group", children: [
            m && /* @__PURE__ */ C.jsx("div", { className: "input-icon", children: m }),
            /* @__PURE__ */ C.jsx(
              "input",
              {
                id: i,
                placeholder: f,
                disabled: l,
                "aria-describedby": P,
                className: b,
                ...x
              }
            ),
            y && /* @__PURE__ */ C.jsx(ti, { circle: !0, onClick: g, children: y })
          ] })
        ] }),
        (a || c) && /* @__PURE__ */ C.jsxs(
          "span",
          {
            className: Jt("feedback", S),
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
              S && v[S],
              " ",
              a ?? c
            ]
          }
        )
      ]
    }
  );
};
gl.displayName = "GovBRInput";
function Ob({
  name: e,
  control: t,
  rules: r,
  required: n,
  label: i,
  ...s
}) {
  return /* @__PURE__ */ C.jsx(
    ml,
    {
      name: e,
      control: t,
      rules: r,
      render: ({ field: a, fieldState: c }) => /* @__PURE__ */ C.jsx(
        gl,
        {
          ...s,
          ...a,
          label: i,
          required: n,
          status: c.error ? "danger" : void 0,
          feedbackMessage: c.error?.message
        }
      )
    }
  );
}
const yl = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (yl.displayName = "FormControlContext");
function zi() {
  return T.useContext(yl);
}
function By(e) {
  return Te("PrivateSwitchBase", e);
}
ve("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Fy = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: n,
    edge: i
  } = e, s = {
    root: ["root", r && "checked", n && "disabled", i && `edge${ee(i)}`],
    input: ["input"]
  };
  return $e(s, By, t);
}, Ly = te(on, {
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
}), zy = te("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: Qt
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
}), Vi = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    autoFocus: n,
    checked: i,
    checkedIcon: s,
    defaultChecked: a,
    disabled: c,
    disableFocusRipple: l = !1,
    edge: u = !1,
    icon: d,
    id: m,
    inputProps: y,
    inputRef: g,
    name: b,
    onBlur: f,
    onChange: x,
    onFocus: w,
    readOnly: P,
    required: S = !1,
    tabIndex: v,
    type: h,
    value: O,
    slots: k = {},
    slotProps: N = {},
    ...$
  } = t, [I, B] = fc({
    controlled: i,
    default: !!a,
    name: "SwitchBase",
    state: "checked"
  }), p = zi(), A = (z) => {
    w && w(z), p && p.onFocus && p.onFocus(z);
  }, M = (z) => {
    f && f(z), p && p.onBlur && p.onBlur(z);
  }, j = (z) => {
    if (z.nativeEvent.defaultPrevented)
      return;
    const Y = z.target.checked;
    B(Y), x && x(z, Y);
  };
  let _ = c;
  p && typeof _ > "u" && (_ = p.disabled);
  const V = h === "checkbox" || h === "radio", X = {
    ...t,
    checked: I,
    disabled: _,
    disableFocusRipple: l,
    edge: u
  }, H = Fy(X), E = {
    slots: k,
    slotProps: {
      input: y,
      ...N
    }
  }, [D, L] = we("root", {
    ref: r,
    elementType: Ly,
    className: H.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...E,
      component: "span",
      ...$
    },
    getSlotProps: (z) => ({
      ...z,
      onFocus: (Y) => {
        z.onFocus?.(Y), A(Y);
      },
      onBlur: (Y) => {
        z.onBlur?.(Y), M(Y);
      }
    }),
    ownerState: X,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !l,
      disabled: _,
      role: void 0,
      tabIndex: null
    }
  }), [W, U] = we("input", {
    ref: g,
    elementType: zy,
    className: H.input,
    externalForwardedProps: E,
    getSlotProps: (z) => ({
      ...z,
      onChange: (Y) => {
        z.onChange?.(Y), j(Y);
      }
    }),
    ownerState: X,
    additionalProps: {
      autoFocus: n,
      checked: i,
      defaultChecked: a,
      disabled: _,
      id: V ? m : void 0,
      name: b,
      readOnly: P,
      required: S,
      tabIndex: v,
      type: h,
      ...h === "checkbox" && O === void 0 ? {} : {
        value: O
      }
    }
  });
  return /* @__PURE__ */ C.jsxs(D, {
    ...L,
    children: [/* @__PURE__ */ C.jsx(W, {
      ...U
    }), I ? s : d]
  });
});
process.env.NODE_ENV !== "production" && (Vi.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: o.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * @ignore
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: o.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: It,
  /*
   * @ignore
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: o.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    input: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * The input component prop `type`.
   */
  type: o.string.isRequired,
  /**
   * The value of the component.
   */
  value: o.any
});
const Vy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), Wy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), Uy = te("span", {
  name: "MuiRadioButtonIcon",
  shouldForwardProp: Qt
})({
  position: "relative",
  display: "flex"
}), Hy = te(Vy, {
  name: "MuiRadioButtonIcon"
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), qy = te(Wy, {
  name: "MuiRadioButtonIcon"
})(Ce(({
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
function Wi(e) {
  const {
    checked: t = !1,
    classes: r = {},
    fontSize: n
  } = e, i = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ C.jsxs(Uy, {
    className: r.root,
    ownerState: i,
    children: [/* @__PURE__ */ C.jsx(Hy, {
      fontSize: n,
      className: r.background,
      ownerState: i
    }), /* @__PURE__ */ C.jsx(qy, {
      fontSize: n,
      className: r.dot,
      ownerState: i
    })]
  });
}
process.env.NODE_ENV !== "production" && (Wi.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: o.oneOf(["small", "medium"])
});
const bl = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (bl.displayName = "RadioGroupContext");
function Yy() {
  return T.useContext(bl);
}
function Gy(e) {
  return Te("MuiRadio", e);
}
const Ea = ve("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), Ky = (e) => {
  const {
    classes: t,
    color: r,
    size: n
  } = e, i = {
    root: ["root", `color${ee(r)}`, n !== "medium" && `size${ee(n)}`]
  };
  return {
    ...t,
    ...$e(i, Gy, t)
  };
}, Xy = te(Vi, {
  shouldForwardProp: (e) => Qt(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size !== "medium" && t[`size${ee(r.size)}`], t[`color${ee(r.color)}`]];
  }
})(Ce(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${Ea.disabled}`]: {
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
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
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
  })), ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${Ea.checked}`]: {
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
function Jy(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Zy = /* @__PURE__ */ C.jsx(Wi, {
  checked: !0
}), Qy = /* @__PURE__ */ C.jsx(Wi, {}), vl = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiRadio"
  }), {
    checked: i,
    checkedIcon: s = Zy,
    color: a = "primary",
    icon: c = Qy,
    name: l,
    onChange: u,
    size: d = "medium",
    className: m,
    disabled: y,
    disableRipple: g = !1,
    slots: b = {},
    slotProps: f = {},
    inputProps: x,
    ...w
  } = n, P = zi();
  let S = y;
  P && typeof S > "u" && (S = P.disabled), S ??= !1;
  const v = {
    ...n,
    disabled: S,
    disableRipple: g,
    color: a,
    size: d
  }, h = Ky(v), O = Yy();
  let k = i;
  const N = _o(u, O && O.onChange);
  let $ = l;
  O && (typeof k > "u" && (k = Jy(O.value, n.value)), typeof $ > "u" && ($ = O.name));
  const I = f.input ?? x, [B, p] = we("root", {
    ref: r,
    elementType: Xy,
    className: ne(h.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: b,
      slotProps: f,
      ...w
    },
    getSlotProps: (A) => ({
      ...A,
      onChange: (M, ...j) => {
        A.onChange?.(M, ...j), N(M, ...j);
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
      disabled: S,
      name: $,
      checked: k,
      slots: b,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof I == "function" ? I(v) : I
      }
    }
  });
  return /* @__PURE__ */ C.jsx(B, {
    ...p,
    classes: h
  });
});
process.env.NODE_ENV !== "production" && (vl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: o.node,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: It,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    input: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: o.any
});
function eb({
  name: e,
  value: t,
  label: r,
  helpText: n,
  text: i,
  disabled: s,
  checked: a,
  error: c,
  valid: l,
  onChange: u
}) {
  return /* @__PURE__ */ C.jsxs(
    zr,
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
        /* @__PURE__ */ C.jsxs(
          zr,
          {
            sx: {
              // Reset específico para container de labels
              margin: 0,
              padding: 0,
              gap: 0
            },
            children: [
              /* @__PURE__ */ C.jsx(
                Yt,
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
              /* @__PURE__ */ C.jsx(
                Yt,
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
        /* @__PURE__ */ C.jsxs(
          zr,
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
              /* @__PURE__ */ C.jsx(
                vl,
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
              /* @__PURE__ */ C.jsx(
                Yt,
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
eb.displayName = "GovBRRadio";
function tb({
  variant: e = "internal",
  emphasis: t,
  density: r,
  circle: n = !1,
  block: i = !1,
  inverted: s = !1,
  className: a,
  iconUrl: c,
  ...l
}) {
  const u = Jt(
    "br-sign-in",
    t,
    r,
    {
      circle: n,
      block: i,
      inverted: s
    },
    a
  ), d = () => {
    switch (e) {
      case "external-image":
        return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          "Entrar com ",
          /* @__PURE__ */ C.jsx(
            "img",
            {
              src: c || "https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png",
              alt: "gov.br"
            }
          )
        ] });
      case "external-text":
        return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          "Entrar com ",
          /* @__PURE__ */ C.jsx("span", { className: "text-black", children: "gov.br" })
        ] });
      case "internal":
      default:
        return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          /* @__PURE__ */ C.jsx("i", { className: "fas fa-user", "aria-hidden": "true" }),
          !n && "Entrar"
        ] });
    }
  };
  return /* @__PURE__ */ C.jsx("button", { type: "button", className: u, ...l, children: d() });
}
tb.displayName = "GovBRSignIn";
const rb = ve("MuiBox", ["root"]), nb = fo(), xl = rf({
  themeId: pt,
  defaultTheme: nb,
  defaultClassName: rb.root,
  generateClassName: wa.generate
});
process.env.NODE_ENV !== "production" && (xl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function ob(e) {
  return Te("MuiFormControlLabel", e);
}
const jr = ve("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function ib({
  props: e,
  states: t,
  muiFormControl: r
}) {
  return t.reduce((n, i) => (n[i] = e[i], r && typeof e[i] > "u" && (n[i] = r[i]), n), {});
}
const sb = (e) => {
  const {
    classes: t,
    disabled: r,
    labelPlacement: n,
    error: i,
    required: s
  } = e, a = {
    root: ["root", r && "disabled", `labelPlacement${ee(n)}`, i && "error", s && "required"],
    label: ["label", r && "disabled"],
    asterisk: ["asterisk", i && "error"]
  };
  return $e(a, ob, t);
}, ab = te("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${jr.label}`]: t.label
    }, t.root, t[`labelPlacement${ee(r.labelPlacement)}`]];
  }
})(Ce(({
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
  [`&.${jr.disabled}`]: {
    cursor: "default"
  },
  [`& .${jr.label}`]: {
    [`&.${jr.disabled}`]: {
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
}))), cb = te("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(Ce(({
  theme: e
}) => ({
  [`&.${jr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Sl = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: i,
    className: s,
    componentsProps: a = {},
    control: c,
    disabled: l,
    disableTypography: u,
    inputRef: d,
    label: m,
    labelPlacement: y = "end",
    name: g,
    onChange: b,
    required: f,
    slots: x = {},
    slotProps: w = {},
    value: P,
    ...S
  } = n, v = zi(), h = l ?? c.props.disabled ?? v?.disabled, O = f ?? c.props.required, k = {
    disabled: h,
    required: O
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((j) => {
    typeof c.props[j] > "u" && typeof n[j] < "u" && (k[j] = n[j]);
  });
  const N = ib({
    props: n,
    muiFormControl: v,
    states: ["error"]
  }), $ = {
    ...n,
    disabled: h,
    labelPlacement: y,
    required: O,
    error: N.error
  }, I = sb($), B = {
    slots: x,
    slotProps: {
      ...a,
      ...w
    }
  }, [p, A] = we("typography", {
    elementType: Yt,
    externalForwardedProps: B,
    ownerState: $
  });
  let M = m;
  return M != null && M.type !== Yt && !u && (M = /* @__PURE__ */ C.jsx(p, {
    component: "span",
    ...A,
    className: ne(I.label, A?.className),
    children: M
  })), /* @__PURE__ */ C.jsxs(ab, {
    className: ne(I.root, s),
    ownerState: $,
    ref: r,
    ...S,
    children: [/* @__PURE__ */ T.cloneElement(c, k), O ? /* @__PURE__ */ C.jsxs("div", {
      children: [M, /* @__PURE__ */ C.jsxs(cb, {
        ownerState: $,
        "aria-hidden": !0,
        className: I.asterisk,
        children: [" ", "*"]
      })]
    }) : M]
  });
});
process.env.NODE_ENV !== "production" && (Sl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The props used for each slot inside.
   * @default {}
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: o.shape({
    typography: o.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: o.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: o.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: It,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: o.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: o.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: o.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    typography: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    typography: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component.
   */
  value: o.any
});
function lb(e) {
  return Te("MuiSwitch", e);
}
const Ve = ve("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), ub = (e) => {
  const {
    classes: t,
    edge: r,
    size: n,
    color: i,
    checked: s,
    disabled: a
  } = e, c = {
    root: ["root", r && `edge${ee(r)}`, `size${ee(n)}`],
    switchBase: ["switchBase", `color${ee(i)}`, s && "checked", a && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, l = $e(c, lb, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...l
  };
}, db = te("span", {
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
      [`& .${Ve.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Ve.switchBase}`]: {
        padding: 4,
        [`&.${Ve.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), fb = te(Vi, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.switchBase, {
      [`& .${Ve.input}`]: t.input
    }, r.color !== "default" && t[`color${ee(r.color)}`]];
  }
})(Ce(({
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
  [`&.${Ve.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${Ve.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${Ve.checked} + .${Ve.track}`]: {
    opacity: 0.5
  },
  [`&.${Ve.disabled} + .${Ve.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${Ve.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), Ce(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(St(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ve.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Ve.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${Ve.checked} + .${Ve.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), pb = te("span", {
  name: "MuiSwitch",
  slot: "Track"
})(Ce(({
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
}))), mb = te("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(Ce(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), El = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiSwitch"
  }), {
    className: i,
    color: s = "primary",
    edge: a = !1,
    size: c = "medium",
    sx: l,
    slots: u = {},
    slotProps: d = {},
    ...m
  } = n, y = {
    ...n,
    color: s,
    edge: a,
    size: c
  }, g = ub(y), b = {
    slots: u,
    slotProps: d
  }, [f, x] = we("root", {
    className: ne(g.root, i),
    elementType: db,
    externalForwardedProps: b,
    ownerState: y,
    additionalProps: {
      sx: l
    }
  }), [w, P] = we("thumb", {
    className: g.thumb,
    elementType: mb,
    externalForwardedProps: b,
    ownerState: y
  }), S = /* @__PURE__ */ C.jsx(w, {
    ...P
  }), [v, h] = we("track", {
    className: g.track,
    elementType: pb,
    externalForwardedProps: b,
    ownerState: y
  });
  return /* @__PURE__ */ C.jsxs(f, {
    ...x,
    children: [/* @__PURE__ */ C.jsx(fb, {
      type: "checkbox",
      icon: S,
      checkedIcon: S,
      ref: r,
      ownerState: y,
      ...m,
      classes: {
        ...g,
        root: g.switchBase
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
          root: typeof d.switchBase == "function" ? d.switchBase(y) : d.switchBase
        },
        input: {
          role: "switch"
        },
        ...d.input && {
          input: typeof d.input == "function" ? d.input(y) : d.input
        }
      }
    }), /* @__PURE__ */ C.jsx(v, {
      ...h
    })]
  });
});
process.env.NODE_ENV !== "production" && (El.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: o.node,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: It,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    input: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    switchBase: o.oneOfType([o.func, o.object]),
    thumb: o.oneOfType([o.func, o.object]),
    track: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType,
    switchBase: o.elementType,
    thumb: o.elementType,
    track: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: o.any
});
const hb = {
  small: { width: 40, height: 24, thumb: 16, translateX: 16 },
  medium: { width: 52, height: 30, thumb: 22, translateX: 22 },
  large: { width: 64, height: 36, thumb: 28, translateX: 28 }
}, Pb = ({
  checked: e,
  onChange: t,
  label: r,
  disabled: n = !1,
  size: i = "medium",
  labelPlacement: s = "end",
  textEnabled: a,
  textDisabled: c,
  strictGovBr: l = !1,
  className: u,
  ...d
}) => {
  const { width: m, height: y, thumb: g, translateX: b } = hb[i], f = s === "top", x = s === "start", w = e ? a : c;
  return /* @__PURE__ */ C.jsxs(
    xl,
    {
      className: u,
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px"
      },
      ...d,
      children: [
        /* @__PURE__ */ C.jsx(
          Sl,
          {
            label: r,
            labelPlacement: s,
            control: /* @__PURE__ */ C.jsx(
              El,
              {
                checked: e,
                onChange: t,
                disabled: n,
                disableRipple: !0,
                sx: {
                  width: m,
                  height: y,
                  padding: 0,
                  "& .MuiSwitch-switchBase": {
                    padding: 0,
                    margin: `${(y - g) / 2}px`,
                    transitionDuration: "200ms",
                    "&.Mui-checked": {
                      transform: `translateX(${b}px)`,
                      "& .MuiSwitch-thumb": {
                        backgroundColor: l ? "#1351b4" : "#5992ed"
                      },
                      "& + .MuiSwitch-track": {
                        backgroundColor: "#ffffff",
                        opacity: 1
                      }
                    }
                  },
                  "& .MuiSwitch-thumb": {
                    width: g,
                    height: g,
                    borderRadius: "50%",
                    backgroundColor: "#cccccc",
                    boxShadow: "none",
                    "&::before, &::after": {
                      content: "none"
                    }
                  },
                  "& .MuiSwitch-track": {
                    width: m,
                    height: y,
                    borderRadius: 30,
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    border: l ? "1px solid #1351b4" : "1px solid #ccccccff",
                    boxSizing: "border-box"
                  }
                }
              }
            ),
            sx: {
              display: "inline-flex",
              alignItems: f ? "flex-start" : "center",
              flexDirection: f ? "column" : x ? "row-reverse" : "row",
              gap: f ? "4px" : "8px",
              margin: 0,
              "& .MuiTypography-root": {
                color: l ? "#1351b4" : "#333333",
                fontFamily: 'Rawline, "Open Sans", sans-serif',
                // cspell:disable-line
                fontSize: "16px",
                marginTop: "18px"
              }
            }
          }
        ),
        w && /* @__PURE__ */ C.jsx(
          Yt,
          {
            sx: {
              color: l ? "#1351b4" : "#333333",
              fontFamily: 'Rawline, "Open Sans", sans-serif',
              // cspell:disable-line
              fontSize: "16px",
              marginTop: "18px"
            },
            children: w
          }
        )
      ]
    }
  );
};
let ni = fo({
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
ni = Kh(ni);
const oi = typeof dc({}) == "function", gb = (e, t) => ({
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
}), yb = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Tl = (e, t = !1) => {
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
    html: gb(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...yb(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...r
  };
  const i = e.components?.MuiCssBaseline?.styleOverrides;
  return i && (n = [n, i]), n;
}, $n = "mui-ecs", bb = (e) => {
  const t = Tl(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${$n})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, i]) => {
    const s = e.getColorSchemeSelector(n);
    s.startsWith("@") ? r[s] = {
      [`:root:not(:has(.${$n}))`]: {
        colorScheme: i.palette?.mode
      }
    } : r[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${$n}))`]: {
        colorScheme: i.palette?.mode
      }
    };
  }), t;
}, vb = dc(oi ? ({
  theme: e,
  enableColorScheme: t
}) => Tl(e, t) : ({
  theme: e
}) => bb(e));
function wl(e) {
  const t = Oe({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ C.jsxs(T.Fragment, {
    children: [oi && /* @__PURE__ */ C.jsx(vb, {
      enableColorScheme: n
    }), !oi && !n && /* @__PURE__ */ C.jsx("span", {
      className: $n,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: o.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: o.bool
});
const xb = Fl({
  mode: "theme",
  toggle: () => {
  }
});
function Rb({ children: e }) {
  const [t, r] = _r("theme"), n = Ll(
    () => ({
      mode: t,
      toggle: () => r((i) => i === "theme" ? "css" : "theme")
    }),
    [t]
  );
  return /* @__PURE__ */ C.jsx(xb.Provider, { value: n, children: /* @__PURE__ */ C.jsxs(Qh, { theme: ni, children: [
    /* @__PURE__ */ C.jsx(wl, {}),
    e
  ] }) });
}
export {
  Tb as AutoSyncButton,
  wb as GovBRAvatar,
  Cb as GovBRBreadcrumb,
  ti as GovBRButton,
  hy as GovBRCheckbox,
  jy as GovBRFormCheckbox,
  Ob as GovBRFormInput,
  gl as GovBRInput,
  eb as GovBRRadio,
  tb as GovBRSignIn,
  Pb as GovBRSwitch,
  Rb as GovBRThemeProvider,
  ni as govbrTheme,
  Ay as iconMap,
  sl as mapMuiColorToGovbrClass,
  hb as sizeMap
};
