import * as w from "react";
import oe, { forwardRef as Ll, useContext as Vl, isValidElement as wn, cloneElement as Cn, Children as Wl, useState as Dr, useCallback as Gi, useEffect as ar, useRef as Ul, createContext as Hl, useMemo as ql } from "react";
import * as Yl from "react-dom";
import dn from "react-dom";
function Ra(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pn = { exports: {} }, Er = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function Gl() {
  if (Ki) return Er;
  Ki = 1;
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
var wr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xi;
function Kl() {
  return Xi || (Xi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === A ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case p:
          return "Fragment";
        case E:
          return "Profiler";
        case x:
          return "StrictMode";
        case h:
          return "Suspense";
        case O:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case b:
            return "Portal";
          case S:
            return (T.displayName || "Context") + ".Provider";
          case P:
            return (T._context.displayName || "Context") + ".Consumer";
          case v:
            var B = T.render;
            return T = T.displayName, T || (T = B.displayName || B.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case R:
            return B = T.displayName || null, B !== null ? B : e(T.type) || "Memo";
          case N:
            B = T._payload, T = T._init;
            try {
              return e(T(B));
            } catch {
            }
        }
      return null;
    }
    function t(T) {
      return "" + T;
    }
    function r(T) {
      try {
        t(T);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var z = B.error, W = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return z.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), t(T);
      }
    }
    function n(T) {
      if (T === p) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === N)
        return "<...>";
      try {
        var B = e(T);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var T = D.A;
      return T === null ? null : T.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(T) {
      if (f.call(T, "key")) {
        var B = Object.getOwnPropertyDescriptor(T, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function c(T, B) {
      function z() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: z,
        configurable: !0
      });
    }
    function l() {
      var T = e(this.type);
      return j[T] || (j[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function u(T, B, z, W, H, L, Y, K) {
      return z = L.ref, T = {
        $$typeof: g,
        type: T,
        key: B,
        props: L,
        _owner: H
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function d(T, B, z, W, H, L, Y, K) {
      var G = B.children;
      if (G !== void 0)
        if (W)
          if (I(G)) {
            for (W = 0; W < G.length; W++)
              m(G[W]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(G);
      if (f.call(B, "key")) {
        G = e(T);
        var Q = Object.keys(B).filter(function(Z) {
          return Z !== "key";
        });
        W = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", U[G + W] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), U[G + W] = !0);
      }
      if (G = null, z !== void 0 && (r(z), G = "" + z), a(B) && (r(B.key), G = "" + B.key), "key" in B) {
        z = {};
        for (var q in B)
          q !== "key" && (z[q] = B[q]);
      } else z = B;
      return G && c(
        z,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), u(
        T,
        G,
        L,
        H,
        i(),
        z,
        Y,
        K
      );
    }
    function m(T) {
      typeof T == "object" && T !== null && T.$$typeof === g && T._store && (T._store.validated = 1);
    }
    var y = oe, g = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), S = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), D = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, f = Object.prototype.hasOwnProperty, I = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var _, j = {}, V = y.react_stack_bottom_frame.bind(
      y,
      s
    )(), X = M(n(s)), U = {};
    wr.Fragment = p, wr.jsx = function(T, B, z, W, H) {
      var L = 1e4 > D.recentlyCreatedOwnerStacks++;
      return d(
        T,
        B,
        z,
        !1,
        W,
        H,
        L ? Error("react-stack-top-frame") : V,
        L ? M(n(T)) : X
      );
    }, wr.jsxs = function(T, B, z, W, H) {
      var L = 1e4 > D.recentlyCreatedOwnerStacks++;
      return d(
        T,
        B,
        z,
        !0,
        W,
        H,
        L ? Error("react-stack-top-frame") : V,
        L ? M(n(T)) : X
      );
    };
  }()), wr;
}
var Ji;
function Xl() {
  return Ji || (Ji = 1, process.env.NODE_ENV === "production" ? pn.exports = Gl() : pn.exports = Kl()), pn.exports;
}
var C = Xl();
const Zi = (e) => e, Jl = () => {
  let e = Zi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Zi;
    }
  };
}, ka = Jl();
function xt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function J(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : xt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Fo(...e) {
  return e.reduce((t, r) => r == null ? t : function(...i) {
    t.apply(this, i), r.apply(this, i);
  }, () => {
  });
}
var fn = { exports: {} }, mn = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function Zl() {
  if (Qi) return le;
  Qi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
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
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === s || h === i || h === m || h === y || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === x || h.$$typeof === E || h.$$typeof === P || h.$$typeof === p);
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
var es;
function Ql() {
  return es || (es = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function S($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === u || $ === s || $ === i || $ === m || $ === y || typeof $ == "object" && $ !== null && ($.$$typeof === b || $.$$typeof === g || $.$$typeof === a || $.$$typeof === c || $.$$typeof === d || $.$$typeof === x || $.$$typeof === E || $.$$typeof === P || $.$$typeof === p);
    }
    function v($) {
      if (typeof $ == "object" && $ !== null) {
        var ie = $.$$typeof;
        switch (ie) {
          case t:
            var se = $.type;
            switch (se) {
              case l:
              case u:
              case n:
              case s:
              case i:
              case m:
                return se;
              default:
                var Ee = se && se.$$typeof;
                switch (Ee) {
                  case c:
                  case d:
                  case b:
                  case g:
                  case a:
                    return Ee;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var h = l, O = u, R = c, N = a, k = t, A = d, D = n, f = b, I = g, M = r, _ = s, j = i, V = m, X = !1;
    function U($) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T($) || v($) === l;
    }
    function T($) {
      return v($) === u;
    }
    function B($) {
      return v($) === c;
    }
    function z($) {
      return v($) === a;
    }
    function W($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function H($) {
      return v($) === d;
    }
    function L($) {
      return v($) === n;
    }
    function Y($) {
      return v($) === b;
    }
    function K($) {
      return v($) === g;
    }
    function G($) {
      return v($) === r;
    }
    function Q($) {
      return v($) === s;
    }
    function q($) {
      return v($) === i;
    }
    function Z($) {
      return v($) === m;
    }
    ue.AsyncMode = h, ue.ConcurrentMode = O, ue.ContextConsumer = R, ue.ContextProvider = N, ue.Element = k, ue.ForwardRef = A, ue.Fragment = D, ue.Lazy = f, ue.Memo = I, ue.Portal = M, ue.Profiler = _, ue.StrictMode = j, ue.Suspense = V, ue.isAsyncMode = U, ue.isConcurrentMode = T, ue.isContextConsumer = B, ue.isContextProvider = z, ue.isElement = W, ue.isForwardRef = H, ue.isFragment = L, ue.isLazy = Y, ue.isMemo = K, ue.isPortal = G, ue.isProfiler = Q, ue.isStrictMode = q, ue.isSuspense = Z, ue.isValidElementType = S, ue.typeOf = v;
  }()), ue;
}
var ts;
function $a() {
  return ts || (ts = 1, process.env.NODE_ENV === "production" ? mn.exports = Zl() : mn.exports = Ql()), mn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bo, rs;
function eu() {
  if (rs) return bo;
  rs = 1;
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
  return bo = i() ? Object.assign : function(s, a) {
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
  }, bo;
}
var vo, ns;
function li() {
  if (ns) return vo;
  ns = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return vo = e, vo;
}
var xo, os;
function Ma() {
  return os || (os = 1, xo = Function.call.bind(Object.prototype.hasOwnProperty)), xo;
}
var So, is;
function tu() {
  if (is) return So;
  is = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ li(), r = {}, n = /* @__PURE__ */ Ma();
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
  }, So = i, So;
}
var To, ss;
function ru() {
  if (ss) return To;
  ss = 1;
  var e = $a(), t = eu(), r = /* @__PURE__ */ li(), n = /* @__PURE__ */ Ma(), i = /* @__PURE__ */ tu(), s = function() {
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
  return To = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(T) {
      var B = T && (u && T[u] || T[d]);
      if (typeof B == "function")
        return B;
    }
    var y = "<<anonymous>>", g = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: P(),
      arrayOf: S,
      element: v(),
      elementType: h(),
      instanceOf: O,
      node: A(),
      objectOf: N,
      oneOf: R,
      oneOfType: k,
      shape: f,
      exact: I
    };
    function b(T, B) {
      return T === B ? T !== 0 || 1 / T === 1 / B : T !== T && B !== B;
    }
    function p(T, B) {
      this.message = T, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function x(T) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, z = 0;
      function W(L, Y, K, G, Q, q, Z) {
        if (G = G || y, q = q || K, Z !== r) {
          if (l) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = G + ":" + K;
            !B[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[ie] = !0, z++);
          }
        }
        return Y[K] == null ? L ? Y[K] === null ? new p("The " + Q + " `" + q + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new p("The " + Q + " `" + q + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : T(Y, K, G, Q, q);
      }
      var H = W.bind(null, !1);
      return H.isRequired = W.bind(null, !0), H;
    }
    function E(T) {
      function B(z, W, H, L, Y, K) {
        var G = z[W], Q = j(G);
        if (Q !== T) {
          var q = V(G);
          return new p(
            "Invalid " + L + " `" + Y + "` of type " + ("`" + q + "` supplied to `" + H + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return x(B);
    }
    function P() {
      return x(a);
    }
    function S(T) {
      function B(z, W, H, L, Y) {
        if (typeof T != "function")
          return new p("Property `" + Y + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var K = z[W];
        if (!Array.isArray(K)) {
          var G = j(K);
          return new p("Invalid " + L + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected an array."));
        }
        for (var Q = 0; Q < K.length; Q++) {
          var q = T(K, Q, H, L, Y + "[" + Q + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return x(B);
    }
    function v() {
      function T(B, z, W, H, L) {
        var Y = B[z];
        if (!c(Y)) {
          var K = j(Y);
          return new p("Invalid " + H + " `" + L + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(T);
    }
    function h() {
      function T(B, z, W, H, L) {
        var Y = B[z];
        if (!e.isValidElementType(Y)) {
          var K = j(Y);
          return new p("Invalid " + H + " `" + L + "` of type " + ("`" + K + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(T);
    }
    function O(T) {
      function B(z, W, H, L, Y) {
        if (!(z[W] instanceof T)) {
          var K = T.name || y, G = U(z[W]);
          return new p("Invalid " + L + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return x(B);
    }
    function R(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function B(z, W, H, L, Y) {
        for (var K = z[W], G = 0; G < T.length; G++)
          if (b(K, T[G]))
            return null;
        var Q = JSON.stringify(T, function(Z, $) {
          var ie = V($);
          return ie === "symbol" ? String($) : $;
        });
        return new p("Invalid " + L + " `" + Y + "` of value `" + String(K) + "` " + ("supplied to `" + H + "`, expected one of " + Q + "."));
      }
      return x(B);
    }
    function N(T) {
      function B(z, W, H, L, Y) {
        if (typeof T != "function")
          return new p("Property `" + Y + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var K = z[W], G = j(K);
        if (G !== "object")
          return new p("Invalid " + L + " `" + Y + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected an object."));
        for (var Q in K)
          if (n(K, Q)) {
            var q = T(K, Q, H, L, Y + "." + Q, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return x(B);
    }
    function k(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var B = 0; B < T.length; B++) {
        var z = T[B];
        if (typeof z != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + X(z) + " at index " + B + "."
          ), a;
      }
      function W(H, L, Y, K, G) {
        for (var Q = [], q = 0; q < T.length; q++) {
          var Z = T[q], $ = Z(H, L, Y, K, G, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && Q.push($.data.expectedType);
        }
        var ie = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new p("Invalid " + K + " `" + G + "` supplied to " + ("`" + Y + "`" + ie + "."));
      }
      return x(W);
    }
    function A() {
      function T(B, z, W, H, L) {
        return M(B[z]) ? null : new p("Invalid " + H + " `" + L + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return x(T);
    }
    function D(T, B, z, W, H) {
      return new p(
        (T || "React class") + ": " + B + " type `" + z + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function f(T) {
      function B(z, W, H, L, Y) {
        var K = z[W], G = j(K);
        if (G !== "object")
          return new p("Invalid " + L + " `" + Y + "` of type `" + G + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var Q in T) {
          var q = T[Q];
          if (typeof q != "function")
            return D(H, L, Y, Q, V(q));
          var Z = q(K, Q, H, L, Y + "." + Q, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return x(B);
    }
    function I(T) {
      function B(z, W, H, L, Y) {
        var K = z[W], G = j(K);
        if (G !== "object")
          return new p("Invalid " + L + " `" + Y + "` of type `" + G + "` " + ("supplied to `" + H + "`, expected `object`."));
        var Q = t({}, z[W], T);
        for (var q in Q) {
          var Z = T[q];
          if (n(T, q) && typeof Z != "function")
            return D(H, L, Y, q, V(Z));
          if (!Z)
            return new p(
              "Invalid " + L + " `" + Y + "` key `" + q + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(z[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var $ = Z(K, q, H, L, Y + "." + q, r);
          if ($)
            return $;
        }
        return null;
      }
      return x(B);
    }
    function M(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(M);
          if (T === null || c(T))
            return !0;
          var B = m(T);
          if (B) {
            var z = B.call(T), W;
            if (B !== T.entries) {
              for (; !(W = z.next()).done; )
                if (!M(W.value))
                  return !1;
            } else
              for (; !(W = z.next()).done; ) {
                var H = W.value;
                if (H && !M(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _(T, B) {
      return T === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function j(T) {
      var B = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : _(B, T) ? "symbol" : B;
    }
    function V(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var B = j(T);
      if (B === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function X(T) {
      var B = V(T);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function U(T) {
      return !T.constructor || !T.constructor.name ? y : T.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, To;
}
var Eo, as;
function nu() {
  if (as) return Eo;
  as = 1;
  var e = /* @__PURE__ */ li();
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
var cs;
function ou() {
  if (cs) return fn.exports;
  if (cs = 1, process.env.NODE_ENV !== "production") {
    var e = $a(), t = !0;
    fn.exports = /* @__PURE__ */ ru()(e.isElement, t);
  } else
    fn.exports = /* @__PURE__ */ nu()();
  return fn.exports;
}
var iu = /* @__PURE__ */ ou();
const o = /* @__PURE__ */ Ra(iu);
function Na(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Na(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ne() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Na(e)) && (n && (n += " "), n += t);
  return n;
}
function Pe(e, t, r = void 0) {
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
var hn = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function su() {
  if (ls) return ge;
  ls = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case i:
            case n:
            case l:
            case u:
            case y:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case c:
                case m:
                case d:
                  return p;
                case s:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ge.ContextConsumer = s, ge.ContextProvider = a, ge.Element = e, ge.ForwardRef = c, ge.Fragment = r, ge.Lazy = m, ge.Memo = d, ge.Portal = t, ge.Profiler = i, ge.StrictMode = n, ge.Suspense = l, ge.SuspenseList = u, ge.isContextConsumer = function(p) {
    return b(p) === s;
  }, ge.isContextProvider = function(p) {
    return b(p) === a;
  }, ge.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ge.isForwardRef = function(p) {
    return b(p) === c;
  }, ge.isFragment = function(p) {
    return b(p) === r;
  }, ge.isLazy = function(p) {
    return b(p) === m;
  }, ge.isMemo = function(p) {
    return b(p) === d;
  }, ge.isPortal = function(p) {
    return b(p) === t;
  }, ge.isProfiler = function(p) {
    return b(p) === i;
  }, ge.isStrictMode = function(p) {
    return b(p) === n;
  }, ge.isSuspense = function(p) {
    return b(p) === l;
  }, ge.isSuspenseList = function(p) {
    return b(p) === u;
  }, ge.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === i || p === n || p === l || p === u || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === d || p.$$typeof === a || p.$$typeof === s || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
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
var us;
function au() {
  return us || (us = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var x = p.$$typeof;
        switch (x) {
          case t:
            switch (p = p.type, p) {
              case n:
              case s:
              case i:
              case u:
              case d:
              case g:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case c:
                  case l:
                  case y:
                  case m:
                    return p;
                  case a:
                    return p;
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
    ye.ContextConsumer = a, ye.ContextProvider = c, ye.Element = t, ye.ForwardRef = l, ye.Fragment = n, ye.Lazy = y, ye.Memo = m, ye.Portal = r, ye.Profiler = s, ye.StrictMode = i, ye.Suspense = u, ye.SuspenseList = d, ye.isContextConsumer = function(p) {
      return e(p) === a;
    }, ye.isContextProvider = function(p) {
      return e(p) === c;
    }, ye.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, ye.isForwardRef = function(p) {
      return e(p) === l;
    }, ye.isFragment = function(p) {
      return e(p) === n;
    }, ye.isLazy = function(p) {
      return e(p) === y;
    }, ye.isMemo = function(p) {
      return e(p) === m;
    }, ye.isPortal = function(p) {
      return e(p) === r;
    }, ye.isProfiler = function(p) {
      return e(p) === s;
    }, ye.isStrictMode = function(p) {
      return e(p) === i;
    }, ye.isSuspense = function(p) {
      return e(p) === u;
    }, ye.isSuspenseList = function(p) {
      return e(p) === d;
    }, ye.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === n || p === s || p === i || p === u || p === d || typeof p == "object" && p !== null && (p.$$typeof === y || p.$$typeof === m || p.$$typeof === c || p.$$typeof === a || p.$$typeof === l || p.$$typeof === b || p.getModuleId !== void 0);
    }, ye.typeOf = e;
  }()), ye;
}
var ds;
function cu() {
  return ds || (ds = 1, process.env.NODE_ENV === "production" ? hn.exports = /* @__PURE__ */ su() : hn.exports = /* @__PURE__ */ au()), hn.exports;
}
var pr = /* @__PURE__ */ cu();
function dt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ia(e) {
  if (/* @__PURE__ */ w.isValidElement(e) || pr.isValidElementType(e) || !dt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ia(e[r]);
  }), t;
}
function We(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return dt(e) && dt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ w.isValidElement(t[i]) || pr.isValidElementType(t[i]) ? n[i] = t[i] : dt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && dt(e[i]) ? n[i] = We(e[i], t[i], r) : r.clone ? n[i] = dt(t[i]) ? Ia(t[i]) : t[i] : n[i] = t[i];
  }), n;
}
function Br(e, t) {
  return t ? We(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Nt = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function ps(e, t) {
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
function lu(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function uu(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : xt(18, `(${t})`));
    return null;
  }
  const [, n, i] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(i).up(s);
}
function du(e) {
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
const qn = {
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
}, fs = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${qn[e]}px)`
}, pu = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : qn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function at(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || fs;
    return t.reduce((a, c, l) => (a[s.up(s.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || fs;
    return Object.keys(t).reduce((a, c) => {
      if (lu(s.keys, c)) {
        const l = uu(n.containerQueries ? n : pu, c);
        l && (a[l] = r(t[c], c));
      } else if (Object.keys(s.values || qn).includes(c)) {
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
function Aa(e = {}) {
  return e.keys?.reduce((r, n) => {
    const i = e.up(n);
    return r[i] = {}, r;
  }, {}) || {};
}
function zo(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function fu(e, ...t) {
  const r = Aa(e), n = [r, ...t].reduce((i, s) => We(i, s), {});
  return zo(Object.keys(r), n);
}
function mu(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((i, s) => {
    s < e.length && (r[i] = !0);
  }) : n.forEach((i) => {
    e[i] != null && (r[i] = !0);
  }), r;
}
function wo({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || mu(e, t), i = Object.keys(n);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, c, l) => (Array.isArray(e) ? (a[c] = e[l] != null ? e[l] : e[s], s = l) : typeof e == "object" ? (a[c] = e[c] != null ? e[c] : e[s], s = c) : a[c] = e, a), {});
}
function Yn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function Nn(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = Yn(e, r) || n, t && (i = t(i, n, e)), i;
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
    const c = a[t], l = a.theme, u = Yn(l, n) || {};
    return at(a, c, (m) => {
      let y = Nn(u, i, m);
      return m === y && typeof m == "string" && (y = Nn(u, i, `${t}${m === "default" ? "" : J(m)}`, m)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Nt
  } : {}, s.filterProps = [t], s;
}
function hu(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const gu = {
  m: "margin",
  p: "padding"
}, yu = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ms = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, bu = hu((e) => {
  if (e.length > 2)
    if (ms[e])
      e = ms[e];
    else
      return [e];
  const [t, r] = e.split(""), n = gu[t], i = yu[r] || "";
  return Array.isArray(i) ? i.map((s) => n + s) : [n + i];
}), Gn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Kn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], vu = [...Gn, ...Kn];
function Qr(e, t, r, n) {
  const i = Yn(e, t, !0) ?? r;
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
function Xn(e) {
  return Qr(e, "spacing", 8, "spacing");
}
function Kt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function xu(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = Kt(t, r), n), {});
}
function Su(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const i = bu(r), s = xu(i, n), a = e[r];
  return at(e, a, s);
}
function ja(e, t) {
  const r = Xn(e.theme);
  return Object.keys(e).map((n) => Su(e, t, n, r)).reduce(Br, {});
}
function Re(e) {
  return ja(e, Gn);
}
Re.propTypes = process.env.NODE_ENV !== "production" ? Gn.reduce((e, t) => (e[t] = Nt, e), {}) : {};
Re.filterProps = Gn;
function ke(e) {
  return ja(e, Kn);
}
ke.propTypes = process.env.NODE_ENV !== "production" ? Kn.reduce((e, t) => (e[t] = Nt, e), {}) : {};
ke.filterProps = Kn;
process.env.NODE_ENV !== "production" && vu.reduce((e, t) => (e[t] = Nt, e), {});
function Jn(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((s) => {
    n[s] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, s) => t[s] ? Br(i, t[s](n)) : i, {});
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
const Tu = st("border", tt), Eu = st("borderTop", tt), wu = st("borderRight", tt), Cu = st("borderBottom", tt), Ou = st("borderLeft", tt), Pu = st("borderColor"), Ru = st("borderTopColor"), ku = st("borderRightColor"), $u = st("borderBottomColor"), Mu = st("borderLeftColor"), Nu = st("outline", tt), Iu = st("outlineColor"), Zn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Qr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Kt(t, n)
    });
    return at(e, e.borderRadius, r);
  }
  return null;
};
Zn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Nt
} : {};
Zn.filterProps = ["borderRadius"];
Jn(Tu, Eu, wu, Cu, Ou, Pu, Ru, ku, $u, Mu, Zn, Nu, Iu);
const Qn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Qr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Kt(t, n)
    });
    return at(e, e.gap, r);
  }
  return null;
};
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Nt
} : {};
Qn.filterProps = ["gap"];
const eo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Qr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Kt(t, n)
    });
    return at(e, e.columnGap, r);
  }
  return null;
};
eo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Nt
} : {};
eo.filterProps = ["columnGap"];
const to = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Qr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Kt(t, n)
    });
    return at(e, e.rowGap, r);
  }
  return null;
};
to.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Nt
} : {};
to.filterProps = ["rowGap"];
const Au = Ne({
  prop: "gridColumn"
}), ju = Ne({
  prop: "gridRow"
}), _u = Ne({
  prop: "gridAutoFlow"
}), Du = Ne({
  prop: "gridAutoColumns"
}), Bu = Ne({
  prop: "gridAutoRows"
}), Fu = Ne({
  prop: "gridTemplateColumns"
}), zu = Ne({
  prop: "gridTemplateRows"
}), Lu = Ne({
  prop: "gridTemplateAreas"
}), Vu = Ne({
  prop: "gridArea"
});
Jn(Qn, eo, to, Au, ju, _u, Du, Bu, Fu, zu, Lu, Vu);
function ur(e, t) {
  return t === "grey" ? t : e;
}
const Wu = Ne({
  prop: "color",
  themeKey: "palette",
  transform: ur
}), Uu = Ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ur
}), Hu = Ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ur
});
Jn(Wu, Uu, Hu);
function Xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const qu = Ne({
  prop: "width",
  transform: Xe
}), ui = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || qn[r];
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
ui.filterProps = ["maxWidth"];
const Yu = Ne({
  prop: "minWidth",
  transform: Xe
}), Gu = Ne({
  prop: "height",
  transform: Xe
}), Ku = Ne({
  prop: "maxHeight",
  transform: Xe
}), Xu = Ne({
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
const Ju = Ne({
  prop: "boxSizing"
});
Jn(qu, ui, Yu, Gu, Ku, Xu, Ju);
const en = {
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
    style: Zn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ur
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ur
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ur
  },
  // spacing
  p: {
    style: ke
  },
  pt: {
    style: ke
  },
  pr: {
    style: ke
  },
  pb: {
    style: ke
  },
  pl: {
    style: ke
  },
  px: {
    style: ke
  },
  py: {
    style: ke
  },
  padding: {
    style: ke
  },
  paddingTop: {
    style: ke
  },
  paddingRight: {
    style: ke
  },
  paddingBottom: {
    style: ke
  },
  paddingLeft: {
    style: ke
  },
  paddingX: {
    style: ke
  },
  paddingY: {
    style: ke
  },
  paddingInline: {
    style: ke
  },
  paddingInlineStart: {
    style: ke
  },
  paddingInlineEnd: {
    style: ke
  },
  paddingBlock: {
    style: ke
  },
  paddingBlockStart: {
    style: ke
  },
  paddingBlockEnd: {
    style: ke
  },
  m: {
    style: Re
  },
  mt: {
    style: Re
  },
  mr: {
    style: Re
  },
  mb: {
    style: Re
  },
  ml: {
    style: Re
  },
  mx: {
    style: Re
  },
  my: {
    style: Re
  },
  margin: {
    style: Re
  },
  marginTop: {
    style: Re
  },
  marginRight: {
    style: Re
  },
  marginBottom: {
    style: Re
  },
  marginLeft: {
    style: Re
  },
  marginX: {
    style: Re
  },
  marginY: {
    style: Re
  },
  marginInline: {
    style: Re
  },
  marginInlineStart: {
    style: Re
  },
  marginInlineEnd: {
    style: Re
  },
  marginBlock: {
    style: Re
  },
  marginBlockStart: {
    style: Re
  },
  marginBlockEnd: {
    style: Re
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
    style: Qn
  },
  rowGap: {
    style: to
  },
  columnGap: {
    style: eo
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
    style: ui
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
function Zu(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Qu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ed() {
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
    const y = Yn(i, u) || {};
    return m ? m(a) : at(a, n, (b) => {
      let p = Nn(y, d, b);
      return b === p && typeof b == "string" && (p = Nn(y, d, `${r}${b === "default" ? "" : J(b)}`, b)), l === !1 ? p : {
        [l]: p
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
    const a = i.unstable_sxConfig ?? en;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const d = Aa(i.breakpoints), m = Object.keys(d);
      let y = d;
      return Object.keys(u).forEach((g) => {
        const b = Qu(u[g], i);
        if (b != null)
          if (typeof b == "object")
            if (a[g])
              y = Br(y, e(g, b, i, a));
            else {
              const p = at({
                theme: i
              }, b, (x) => ({
                [g]: x
              }));
              Zu(p, b) ? y[g] = t({
                sx: b,
                theme: i,
                nested: !0
              }) : y = Br(y, p);
            }
          else
            y = Br(y, e(g, b, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": ps(i, zo(m, y))
      } : ps(i, zo(m, y));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return t;
}
const $t = ed();
$t.filterProps = ["sx"];
const td = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = e?.theme?.unstable_sxConfig ?? en;
  return Object.keys(e).forEach((n) => {
    r[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
  }), t;
};
function di(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: i
  } = td(r);
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
function In() {
  return In = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, In.apply(null, arguments);
}
function rd(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function nd(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var od = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(nd(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = rd(i);
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
}(), Le = "-ms-", An = "-moz-", ae = "-webkit-", _a = "comm", pi = "rule", fi = "decl", id = "@import", Da = "@keyframes", sd = "@layer", ad = Math.abs, ro = String.fromCharCode, cd = Object.assign;
function ld(e, t) {
  return Fe(e, 0) ^ 45 ? (((t << 2 ^ Fe(e, 0)) << 2 ^ Fe(e, 1)) << 2 ^ Fe(e, 2)) << 2 ^ Fe(e, 3) : 0;
}
function Ba(e) {
  return e.trim();
}
function ud(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, r) {
  return e.replace(t, r);
}
function Lo(e, t) {
  return e.indexOf(t);
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Wr(e, t, r) {
  return e.slice(t, r);
}
function lt(e) {
  return e.length;
}
function mi(e) {
  return e.length;
}
function gn(e, t) {
  return t.push(e), e;
}
function dd(e, t) {
  return e.map(t).join("");
}
var no = 1, fr = 1, Fa = 0, Ge = 0, Ie = 0, br = "";
function oo(e, t, r, n, i, s, a) {
  return { value: e, root: t, parent: r, type: n, props: i, children: s, line: no, column: fr, length: a, return: "" };
}
function Cr(e, t) {
  return cd(oo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function pd() {
  return Ie;
}
function fd() {
  return Ie = Ge > 0 ? Fe(br, --Ge) : 0, fr--, Ie === 10 && (fr = 1, no--), Ie;
}
function Je() {
  return Ie = Ge < Fa ? Fe(br, Ge++) : 0, fr++, Ie === 10 && (fr = 1, no++), Ie;
}
function pt() {
  return Fe(br, Ge);
}
function On() {
  return Ge;
}
function tn(e, t) {
  return Wr(br, e, t);
}
function Ur(e) {
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
function za(e) {
  return no = fr = 1, Fa = lt(br = e), Ge = 0, [];
}
function La(e) {
  return br = "", e;
}
function Pn(e) {
  return Ba(tn(Ge - 1, Vo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function md(e) {
  for (; (Ie = pt()) && Ie < 33; )
    Je();
  return Ur(e) > 2 || Ur(Ie) > 3 ? "" : " ";
}
function hd(e, t) {
  for (; --t && Je() && !(Ie < 48 || Ie > 102 || Ie > 57 && Ie < 65 || Ie > 70 && Ie < 97); )
    ;
  return tn(e, On() + (t < 6 && pt() == 32 && Je() == 32));
}
function Vo(e) {
  for (; Je(); )
    switch (Ie) {
      // ] ) " '
      case e:
        return Ge;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Vo(Ie);
        break;
      // (
      case 40:
        e === 41 && Vo(e);
        break;
      // \
      case 92:
        Je();
        break;
    }
  return Ge;
}
function gd(e, t) {
  for (; Je() && e + Ie !== 57; )
    if (e + Ie === 84 && pt() === 47)
      break;
  return "/*" + tn(t, Ge - 1) + "*" + ro(e === 47 ? e : Je());
}
function yd(e) {
  for (; !Ur(pt()); )
    Je();
  return tn(e, Ge);
}
function bd(e) {
  return La(Rn("", null, null, null, [""], e = za(e), 0, [0], e));
}
function Rn(e, t, r, n, i, s, a, c, l) {
  for (var u = 0, d = 0, m = a, y = 0, g = 0, b = 0, p = 1, x = 1, E = 1, P = 0, S = "", v = i, h = s, O = n, R = S; x; )
    switch (b = P, P = Je()) {
      // (
      case 40:
        if (b != 108 && Fe(R, m - 1) == 58) {
          Lo(R += ce(Pn(P), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        R += Pn(P);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        R += md(b);
        break;
      // \
      case 92:
        R += hd(On() - 1, 7);
        continue;
      // /
      case 47:
        switch (pt()) {
          case 42:
          case 47:
            gn(vd(gd(Je(), On()), t, r), l);
            break;
          default:
            R += "/";
        }
        break;
      // {
      case 123 * p:
        c[u++] = lt(R) * E;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (P) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + d:
            E == -1 && (R = ce(R, /\f/g, "")), g > 0 && lt(R) - m && gn(g > 32 ? gs(R + ";", n, r, m - 1) : gs(ce(R, " ", "") + ";", n, r, m - 2), l);
            break;
          // @ ;
          case 59:
            R += ";";
          // { rule/at-rule
          default:
            if (gn(O = hs(R, t, r, u, d, i, c, S, v = [], h = [], m), s), P === 123)
              if (d === 0)
                Rn(R, t, O, O, v, s, m, c, h);
              else
                switch (y === 99 && Fe(R, 3) === 110 ? 100 : y) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Rn(e, O, O, n && gn(hs(e, O, O, 0, 0, i, c, S, i, v = [], m), h), i, h, m, c, n ? v : h);
                    break;
                  default:
                    Rn(R, O, O, O, [""], h, 0, c, h);
                }
        }
        u = d = g = 0, p = E = 1, S = R = "", m = a;
        break;
      // :
      case 58:
        m = 1 + lt(R), g = b;
      default:
        if (p < 1) {
          if (P == 123)
            --p;
          else if (P == 125 && p++ == 0 && fd() == 125)
            continue;
        }
        switch (R += ro(P), P * p) {
          // &
          case 38:
            E = d > 0 ? 1 : (R += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (lt(R) - 1) * E, E = 1;
            break;
          // @
          case 64:
            pt() === 45 && (R += Pn(Je())), y = pt(), d = m = lt(S = R += yd(On())), P++;
            break;
          // -
          case 45:
            b === 45 && lt(R) == 2 && (p = 0);
        }
    }
  return s;
}
function hs(e, t, r, n, i, s, a, c, l, u, d) {
  for (var m = i - 1, y = i === 0 ? s : [""], g = mi(y), b = 0, p = 0, x = 0; b < n; ++b)
    for (var E = 0, P = Wr(e, m + 1, m = ad(p = a[b])), S = e; E < g; ++E)
      (S = Ba(p > 0 ? y[E] + " " + P : ce(P, /&\f/g, y[E]))) && (l[x++] = S);
  return oo(e, t, r, i === 0 ? pi : c, l, u, d);
}
function vd(e, t, r) {
  return oo(e, t, r, _a, ro(pd()), Wr(e, 2, -2), 0);
}
function gs(e, t, r, n) {
  return oo(e, t, r, fi, Wr(e, 0, n), Wr(e, n + 1, -1), n);
}
function dr(e, t) {
  for (var r = "", n = mi(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function xd(e, t, r, n) {
  switch (e.type) {
    case sd:
      if (e.children.length) break;
    case id:
    case fi:
      return e.return = e.return || e.value;
    case _a:
      return "";
    case Da:
      return e.return = e.value + "{" + dr(e.children, n) + "}";
    case pi:
      e.value = e.props.join(",");
  }
  return lt(r = dr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Sd(e) {
  var t = mi(e);
  return function(r, n, i, s) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, i, s) || "";
    return a;
  };
}
function Td(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Va(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ed = function(t, r, n) {
  for (var i = 0, s = 0; i = s, s = pt(), i === 38 && s === 12 && (r[n] = 1), !Ur(s); )
    Je();
  return tn(t, Ge);
}, wd = function(t, r) {
  var n = -1, i = 44;
  do
    switch (Ur(i)) {
      case 0:
        i === 38 && pt() === 12 && (r[n] = 1), t[n] += Ed(Ge - 1, r, n);
        break;
      case 2:
        t[n] += Pn(i);
        break;
      case 4:
        if (i === 44) {
          t[++n] = pt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += ro(i);
    }
  while (i = Je());
  return t;
}, Cd = function(t, r) {
  return La(wd(za(t), r));
}, ys = /* @__PURE__ */ new WeakMap(), Od = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ys.get(n)) && !i) {
      ys.set(t, !0);
      for (var s = [], a = Cd(r, s), c = n.props, l = 0, u = 0; l < a.length; l++)
        for (var d = 0; d < c.length; d++, u++)
          t.props[u] = s[l] ? a[l].replace(/&\f/g, c[d]) : c[d] + " " + a[l];
    }
  }
}, Pd = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Wa(e, t) {
  switch (ld(e, t)) {
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
      return ae + e + An + e + Le + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ae + e + Le + e + e;
    // order
    case 6165:
      return ae + e + Le + "flex-" + e + e;
    // align-items
    case 5187:
      return ae + e + ce(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + Le + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ae + e + Le + "flex-item-" + ce(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return ae + e + Le + "flex-line-pack" + ce(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return ae + e + Le + ce(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ae + e + Le + ce(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ae + "box-" + ce(e, "-grow", "") + ae + e + Le + ce(e, "grow", "positive") + e;
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
      return ce(ce(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + Le + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + e + e;
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
          return ce(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + An + (Fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Lo(e, "stretch") ? Wa(ce(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Fe(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Fe(e, lt(e) - 3 - (~Lo(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ce(e, ":", ":" + ae) + e;
        // (inline-)?fl(e)x
        case 101:
          return ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ae + (Fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + Le + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Fe(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ae + e + Le + ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ae + e + Le + ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ae + e + Le + ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ae + e + Le + e + e;
  }
  return e;
}
var Rd = function(t, r, n, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case fi:
      t.return = Wa(t.value, t.length);
      break;
    case Da:
      return dr([Cr(t, {
        value: ce(t.value, "@", "@" + ae)
      })], i);
    case pi:
      if (t.length) return dd(t.props, function(s) {
        switch (ud(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return dr([Cr(t, {
              props: [ce(s, /:(read-\w+)/, ":" + An + "$1")]
            })], i);
          // :placeholder
          case "::placeholder":
            return dr([Cr(t, {
              props: [ce(s, /:(plac\w+)/, ":" + ae + "input-$1")]
            }), Cr(t, {
              props: [ce(s, /:(plac\w+)/, ":" + An + "$1")]
            }), Cr(t, {
              props: [ce(s, /:(plac\w+)/, Le + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, kd = [Rd], $d = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var x = p.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || kd, s = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(p) {
      for (var x = p.getAttribute("data-emotion").split(" "), E = 1; E < x.length; E++)
        s[x[E]] = !0;
      c.push(p);
    }
  );
  var l, u = [Od, Pd];
  {
    var d, m = [xd, Td(function(p) {
      d.insert(p);
    })], y = Sd(u.concat(i, m)), g = function(x) {
      return dr(bd(x), y);
    };
    l = function(x, E, P, S) {
      d = P, g(x ? x + "{" + E.styles + "}" : E.styles), S && (b.inserted[E.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new od({
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
}, yn = { exports: {} }, de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs;
function Md() {
  if (bs) return de;
  bs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
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
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === s || h === i || h === m || h === y || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === x || h.$$typeof === E || h.$$typeof === P || h.$$typeof === p);
  }, de.typeOf = S, de;
}
var pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function Nd() {
  return vs || (vs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function S($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === u || $ === s || $ === i || $ === m || $ === y || typeof $ == "object" && $ !== null && ($.$$typeof === b || $.$$typeof === g || $.$$typeof === a || $.$$typeof === c || $.$$typeof === d || $.$$typeof === x || $.$$typeof === E || $.$$typeof === P || $.$$typeof === p);
    }
    function v($) {
      if (typeof $ == "object" && $ !== null) {
        var ie = $.$$typeof;
        switch (ie) {
          case t:
            var se = $.type;
            switch (se) {
              case l:
              case u:
              case n:
              case s:
              case i:
              case m:
                return se;
              default:
                var Ee = se && se.$$typeof;
                switch (Ee) {
                  case c:
                  case d:
                  case b:
                  case g:
                  case a:
                    return Ee;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var h = l, O = u, R = c, N = a, k = t, A = d, D = n, f = b, I = g, M = r, _ = s, j = i, V = m, X = !1;
    function U($) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T($) || v($) === l;
    }
    function T($) {
      return v($) === u;
    }
    function B($) {
      return v($) === c;
    }
    function z($) {
      return v($) === a;
    }
    function W($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function H($) {
      return v($) === d;
    }
    function L($) {
      return v($) === n;
    }
    function Y($) {
      return v($) === b;
    }
    function K($) {
      return v($) === g;
    }
    function G($) {
      return v($) === r;
    }
    function Q($) {
      return v($) === s;
    }
    function q($) {
      return v($) === i;
    }
    function Z($) {
      return v($) === m;
    }
    pe.AsyncMode = h, pe.ConcurrentMode = O, pe.ContextConsumer = R, pe.ContextProvider = N, pe.Element = k, pe.ForwardRef = A, pe.Fragment = D, pe.Lazy = f, pe.Memo = I, pe.Portal = M, pe.Profiler = _, pe.StrictMode = j, pe.Suspense = V, pe.isAsyncMode = U, pe.isConcurrentMode = T, pe.isContextConsumer = B, pe.isContextProvider = z, pe.isElement = W, pe.isForwardRef = H, pe.isFragment = L, pe.isLazy = Y, pe.isMemo = K, pe.isPortal = G, pe.isProfiler = Q, pe.isStrictMode = q, pe.isSuspense = Z, pe.isValidElementType = S, pe.typeOf = v;
  }()), pe;
}
var xs;
function Id() {
  return xs || (xs = 1, process.env.NODE_ENV === "production" ? yn.exports = Md() : yn.exports = Nd()), yn.exports;
}
var Co, Ss;
function Ad() {
  if (Ss) return Co;
  Ss = 1;
  var e = Id(), t = {
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
  function g(b, p, x) {
    if (typeof p != "string") {
      if (y) {
        var E = m(p);
        E && E !== y && g(b, E, x);
      }
      var P = l(p);
      u && (P = P.concat(u(p)));
      for (var S = a(b), v = a(p), h = 0; h < P.length; ++h) {
        var O = P[h];
        if (!r[O] && !(x && x[O]) && !(v && v[O]) && !(S && S[O])) {
          var R = d(p, O);
          try {
            c(b, O, R);
          } catch {
          }
        }
      }
    }
    return b;
  }
  return Co = g, Co;
}
Ad();
var jd = !0;
function Ua(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
  }), n;
}
var hi = function(t, r, n) {
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
  jd === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, gi = function(t, r, n) {
  hi(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function _d(e) {
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
var Dd = {
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
}, Bd = /[A-Z]|^ms/g, Fd = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ha = function(t) {
  return t.charCodeAt(1) === 45;
}, Ts = function(t) {
  return t != null && typeof t != "boolean";
}, Oo = /* @__PURE__ */ Va(function(e) {
  return Ha(e) ? e : e.replace(Bd, "-$&").toLowerCase();
}), Es = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Fd, function(n, i, s) {
          return ut = {
            name: i,
            styles: s,
            next: ut
          }, i;
        });
  }
  return Dd[t] !== 1 && !Ha(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Hr(e, t, r) {
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
      return zd(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = ut, u = r(e);
        return ut = l, Hr(e, t, u);
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
function zd(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += Hr(e, t, r[i]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += s + "{" + t[c] + "}" : Ts(c) && (n += Oo(s) + ":" + Es(s, c) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var l = 0; l < a.length; l++)
          Ts(a[l]) && (n += Oo(s) + ":" + Es(s, a[l]) + ";");
      else {
        var u = Hr(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            n += Oo(s) + ":" + u + ";";
            break;
          }
          default:
            n += s + "{" + u + "}";
        }
      }
    }
  return n;
}
var ws = /label:\s*([^\s;{]+)\s*(;|$)/g, ut;
function rn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, i = "";
  ut = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, i += Hr(r, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (i += Hr(r, t, e[c]), n) {
      var l = s;
      i += l[c];
    }
  ws.lastIndex = 0;
  for (var u = "", d; (d = ws.exec(i)) !== null; )
    u += "-" + d[1];
  var m = _d(i) + u;
  return {
    name: m,
    styles: i,
    next: ut
  };
}
var Ld = function(t) {
  return t();
}, qa = w.useInsertionEffect ? w.useInsertionEffect : !1, Ya = qa || Ld, Cs = qa || w.useLayoutEffect, Ga = /* @__PURE__ */ w.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ $d({
    key: "css"
  }) : null
);
Ga.Provider;
var yi = function(t) {
  return /* @__PURE__ */ Ll(function(r, n) {
    var i = Vl(Ga);
    return t(r, i, n);
  });
}, nn = /* @__PURE__ */ w.createContext({}), bi = {}.hasOwnProperty, Wo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Vd = function(t, r) {
  var n = {};
  for (var i in r)
    bi.call(r, i) && (n[i] = r[i]);
  return n[Wo] = t, n;
}, Wd = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return hi(r, n, i), Ya(function() {
    return gi(r, n, i);
  }), null;
}, Ud = /* @__PURE__ */ yi(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var i = e[Wo], s = [n], a = "";
  typeof e.className == "string" ? a = Ua(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var c = rn(s, void 0, w.useContext(nn));
  a += t.key + "-" + c.name;
  var l = {};
  for (var u in e)
    bi.call(e, u) && u !== "css" && u !== Wo && (l[u] = e[u]);
  return l.className = a, r && (l.ref = r), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Wd, {
    cache: t,
    serialized: c,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ w.createElement(i, l));
}), Hd = Ud, Os = function(t, r) {
  var n = arguments;
  if (r == null || !bi.call(r, "css"))
    return w.createElement.apply(void 0, n);
  var i = n.length, s = new Array(i);
  s[0] = Hd, s[1] = Vd(t, r);
  for (var a = 2; a < i; a++)
    s[a] = n[a];
  return w.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Os || (Os = {}));
var qd = /* @__PURE__ */ yi(function(e, t) {
  var r = e.styles, n = rn([r], void 0, w.useContext(nn)), i = w.useRef();
  return Cs(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", s), a.hydrate([l])), i.current = [a, c], function() {
      a.flush();
    };
  }, [t]), Cs(function() {
    var s = i.current, a = s[0], c = s[1];
    if (c) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && gi(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function vi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return rn(t);
}
function vr() {
  var e = vi.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Yd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gd = /* @__PURE__ */ Va(
  function(e) {
    return Yd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Kd = Gd, Xd = function(t) {
  return t !== "theme";
}, Ps = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Kd : Xd;
}, Rs = function(t, r, n) {
  var i;
  if (r) {
    var s = r.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, Jd = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return hi(r, n, i), Ya(function() {
    return gi(r, n, i);
  }), null;
}, Zd = function e(t, r) {
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, s, a;
  r !== void 0 && (s = r.label, a = r.target);
  var c = Rs(t, r, n), l = c || Ps(i), u = !l("as");
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
    var p = yi(function(x, E, P) {
      var S = u && x.as || i, v = "", h = [], O = x;
      if (x.theme == null) {
        O = {};
        for (var R in x)
          O[R] = x[R];
        O.theme = w.useContext(nn);
      }
      typeof x.className == "string" ? v = Ua(E.registered, h, x.className) : x.className != null && (v = x.className + " ");
      var N = rn(m.concat(h), E.registered, O);
      v += E.key + "-" + N.name, a !== void 0 && (v += " " + a);
      var k = u && c === void 0 ? Ps(S) : l, A = {};
      for (var D in x)
        u && D === "as" || k(D) && (A[D] = x[D]);
      return A.className = v, P && (A.ref = P), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Jd, {
        cache: E,
        serialized: N,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ w.createElement(S, A));
    });
    return p.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", p.defaultProps = t.defaultProps, p.__emotion_real = p, p.__emotion_base = i, p.__emotion_styles = m, p.__emotion_forwardProp = c, Object.defineProperty(p, "toString", {
      value: function() {
        return "." + a;
      }
    }), p.withComponent = function(x, E) {
      var P = e(x, In({}, r, E, {
        shouldForwardProp: Rs(p, E, !0)
      }));
      return P.apply(void 0, m);
    }, p;
  };
}, Qd = [
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
], Uo = Zd.bind(null);
Qd.forEach(function(e) {
  Uo[e] = Uo(e);
});
function ep(e) {
  return e == null || Object.keys(e).length === 0;
}
function xi(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (i) => t(ep(i) ? r : i) : t;
  return /* @__PURE__ */ C.jsx(qd, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (xi.propTypes = {
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
function Ka(e, t) {
  const r = Uo(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function tp(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const ks = [];
function Rt(e) {
  return ks[0] = e, rn(ks);
}
const rp = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function np(e) {
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
  } = e, s = rp(t), a = Object.keys(s);
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
const op = {
  borderRadius: 4
};
function Xa(e = 8, t = Xn({
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
function ip(e, t) {
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
function io(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, c = np(r), l = Xa(i);
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
      ...op,
      ...s
    }
  }, a);
  return u = du(u), u.applyStyles = ip, u = t.reduce((d, m) => We(d, m), u), u.unstable_sxConfig = {
    ...en,
    ...a?.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return $t({
      sx: m,
      theme: this
    });
  }, u;
}
function sp(e) {
  return Object.keys(e).length === 0;
}
function Si(e = null) {
  const t = w.useContext(nn);
  return !t || sp(t) ? e : t;
}
const ap = io();
function so(e = ap) {
  return Si(e);
}
function Po(e) {
  const t = Rt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Ti({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = so(r), i = t && n[t] || n;
  let s = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => Po(typeof a == "function" ? a(i) : a)) : s = Po(s)), /* @__PURE__ */ C.jsx(xi, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
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
function cp(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: i
  } = e, s = Ka("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })($t);
  return /* @__PURE__ */ w.forwardRef(function(l, u) {
    const d = so(r), {
      className: m,
      component: y = "div",
      ...g
    } = di(l);
    return /* @__PURE__ */ C.jsx(s, {
      as: y,
      ref: u,
      className: ne(m, i ? i(n) : n),
      theme: t && d[t] || d,
      ...g
    });
  });
}
const lp = {
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
  const n = lp[t];
  return n ? `${r}-${n}` : `${ka.generate(e)}-${t}`;
}
function be(e, t, r = "Mui") {
  const n = {};
  return t.forEach((i) => {
    n[i] = Te(e, i, r);
  }), n;
}
function Ja(e, t = "") {
  return e.displayName || e.name || t;
}
function $s(e, t, r) {
  const n = Ja(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function up(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ja(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pr.ForwardRef:
          return $s(e, e.render, "ForwardRef");
        case pr.Memo:
          return $s(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Za(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Rt(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Rt(i.style));
  }), n;
}
const dp = io();
function Ro(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ht(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function pp(e) {
  return e ? (t, r) => r[e] : null;
}
function fp(e, t, r) {
  e.theme = gp(e.theme) ? r : e.theme[t] || e.theme;
}
function kn(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((i) => kn(e, i, r));
  if (Array.isArray(n?.variants)) {
    let i;
    if (n.isProcessed)
      i = r ? Ht(n.style, r) : n.style;
    else {
      const {
        variants: s,
        ...a
      } = n;
      i = r ? Ht(Rt(a), r) : a;
    }
    return Qa(e, n.variants, [i], r);
  }
  return n?.isProcessed ? r ? Ht(Rt(n.style), r) : n.style : r ? Ht(Rt(n), r) : n;
}
function Qa(e, t, r = [], n = void 0) {
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
    }, r.push(n ? Ht(Rt(a.style(i)), n) : a.style(i))) : r.push(n ? Ht(Rt(a.style), n) : a.style);
  }
  return r;
}
function ec(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = dp,
    rootShouldForwardProp: n = Ro,
    slotShouldForwardProp: i = Ro
  } = e;
  function s(c) {
    fp(c, t, r);
  }
  return (c, l = {}) => {
    tp(c, (O) => O.filter((R) => R !== $t));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: m,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = pp(tc(d)),
      ...b
    } = l, p = u && u.startsWith("Mui") || d ? "components" : "custom", x = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), E = y || !1;
    let P = Ro;
    d === "Root" || d === "root" ? P = n : d ? P = i : yp(c) && (P = void 0);
    const S = Ka(c, {
      shouldForwardProp: P,
      label: hp(u, d),
      ...b
    }), v = (O) => {
      if (O.__emotion_real === O)
        return O;
      if (typeof O == "function")
        return function(N) {
          return kn(N, O, N.theme.modularCssLayers ? p : void 0);
        };
      if (dt(O)) {
        const R = Za(O);
        return function(k) {
          return R.variants ? kn(k, R, k.theme.modularCssLayers ? p : void 0) : k.theme.modularCssLayers ? Ht(R.style, p) : R.style;
        };
      }
      return O;
    }, h = (...O) => {
      const R = [], N = O.map(v), k = [];
      if (R.push(s), u && g && k.push(function(I) {
        const _ = I.theme.components?.[u]?.styleOverrides;
        if (!_)
          return null;
        const j = {};
        for (const V in _)
          j[V] = kn(I, _[V], I.theme.modularCssLayers ? "theme" : void 0);
        return g(I, j);
      }), u && !x && k.push(function(I) {
        const _ = I.theme?.components?.[u]?.variants;
        return _ ? Qa(I, _, [], I.theme.modularCssLayers ? "theme" : void 0) : null;
      }), E || k.push($t), Array.isArray(N[0])) {
        const f = N.shift(), I = new Array(R.length).fill(""), M = new Array(k.length).fill("");
        let _;
        _ = [...I, ...f, ...M], _.raw = [...I, ...f.raw, ...M], R.unshift(_);
      }
      const A = [...R, ...N, ...k], D = S(...A);
      return c.muiName && (D.muiName = c.muiName), process.env.NODE_ENV !== "production" && (D.displayName = mp(u, d, c)), D;
    };
    return S.withConfig && (h.withConfig = S.withConfig), h;
  };
}
function mp(e, t, r) {
  return e ? `${e}${J(t || "")}` : `Styled(${up(r)})`;
}
function hp(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${tc(t || "Root")}`), r;
}
function gp(e) {
  for (const t in e)
    return !1;
  return !0;
}
function yp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function tc(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const bp = ec();
function qr(e, t, r = !1) {
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
              n[s][u] = qr(a[u], c[u], r);
            }
        }
      } else s === "className" && r && t.className ? n.className = ne(e?.className, t?.className) : s === "style" && r && t.style ? n.style = {
        ...e?.style,
        ...t?.style
      } : n[s] === void 0 && (n[s] = e[s]);
    }
  return n;
}
function vp(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : qr(t.components[r].defaultProps, n);
}
function xp({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let i = so(r);
  return n && (i = i[n] || i), vp({
    theme: i,
    name: t,
    props: e
  });
}
const St = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function Sp(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Ei(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Sp(e, t, r);
}
function Tp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Mt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Mt(Tp(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : xt(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : xt(10, i));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const Ep = (e) => {
  const t = Mt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Mr = (e, t) => {
  try {
    return Ep(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function ao(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function rc(e) {
  e = Mt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, s = n * Math.min(i, 1 - i), a = (u, d = (u + r / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), ao({
    type: c,
    values: l
  });
}
function Ho(e) {
  e = Mt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Mt(rc(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ms(e, t) {
  const r = Ho(e), n = Ho(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function jn(e, t) {
  return e = Mt(e), t = Ei(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ao(e);
}
function zt(e, t, r) {
  try {
    return jn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function co(e, t) {
  if (e = Mt(e), t = Ei(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return ao(e);
}
function fe(e, t, r) {
  try {
    return co(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function lo(e, t) {
  if (e = Mt(e), t = Ei(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return ao(e);
}
function me(e, t, r) {
  try {
    return lo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function wp(e, t = 0.15) {
  return Ho(e) > 0.5 ? co(e, t) : lo(e, t);
}
function bn(e, t, r) {
  try {
    return wp(e, t);
  } catch {
    return e;
  }
}
const Cp = "exact-prop: ​";
function uo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Cp]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const wi = /* @__PURE__ */ w.createContext(null);
process.env.NODE_ENV !== "production" && (wi.displayName = "ThemeContext");
function Ci() {
  const e = w.useContext(wi);
  return process.env.NODE_ENV !== "production" && w.useDebugValue(e), e;
}
const Op = typeof Symbol == "function" && Symbol.for, Pp = Op ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Rp(e, t) {
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
function _n(e) {
  const {
    children: t,
    theme: r
  } = e, n = Ci();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = w.useMemo(() => {
    const s = n === null ? {
      ...r
    } : Rp(n, r);
    return s != null && (s[Pp] = n !== null), s;
  }, [r, n]);
  return /* @__PURE__ */ C.jsx(wi.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (_n.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: o.oneOfType([o.object, o.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (_n.propTypes = uo(_n.propTypes));
const nc = /* @__PURE__ */ w.createContext();
function oc({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ C.jsx(nc.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (oc.propTypes = {
  children: o.node,
  value: o.bool
});
const Oi = () => w.useContext(nc) ?? !1, ic = /* @__PURE__ */ w.createContext(void 0);
function sc({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ C.jsx(ic.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (sc.propTypes = {
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
function kp(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const i = t.components[r];
  return i.defaultProps ? qr(i.defaultProps, n, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? qr(i, n, t.components.mergeClassNameAndStyle) : n;
}
function $p({
  props: e,
  name: t
}) {
  const r = w.useContext(ic);
  return kp({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let Ns = 0;
function Mp(e) {
  const [t, r] = w.useState(e), n = e || t;
  return w.useEffect(() => {
    t == null && (Ns += 1, r(`mui-${Ns}`));
  }, [t]), n;
}
const Np = {
  ...w
}, Is = Np.useId;
function po(e) {
  if (Is !== void 0) {
    const t = Is();
    return e ?? t;
  }
  return Mp(e);
}
function Ip(e) {
  const t = Si(), r = po() || "", {
    modularCssLayers: n
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? i = "" : typeof n == "string" ? i = n.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, St(() => {
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
  }, [i, r]), i ? /* @__PURE__ */ C.jsx(Ti, {
    styles: i
  }) : null;
}
const As = {};
function js(e, t, r, n = !1) {
  return w.useMemo(() => {
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
function Yr(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, i = Si(As), s = Ci() || As;
  process.env.NODE_ENV !== "production" && (i === null && typeof r == "function" || n && i && !i[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = js(n, i, r), c = js(n, s, r, !0), l = (n ? a[n] : a).direction === "rtl", u = Ip(a);
  return /* @__PURE__ */ C.jsx(_n, {
    theme: c,
    children: /* @__PURE__ */ C.jsx(nn.Provider, {
      value: a,
      children: /* @__PURE__ */ C.jsx(oc, {
        value: l,
        children: /* @__PURE__ */ C.jsxs(sc, {
          value: n ? a[n].components : a.components,
          children: [u, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Yr.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Yr.propTypes = uo(Yr.propTypes));
const _s = {
  theme: void 0
};
function Ap(e) {
  let t, r;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== r) && (_s.theme = i.theme, s = Za(e(_s)), t = s, r = i.theme), s;
  };
}
const Pi = "mode", Ri = "color-scheme", jp = "data-color-scheme";
function _p(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: i = Pi,
    colorSchemeStorageKey: s = Ri,
    attribute: a = jp,
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
function Dp() {
}
const Bp = ({
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
      return Dp;
    const n = (i) => {
      const s = i.newValue;
      i.key === e && r(s);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function ko() {
}
function Ds(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ac(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Fp(e) {
  return ac(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function zp(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: i = [],
    modeStorageKey: s = Pi,
    colorSchemeStorageKey: a = Ri,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    storageManager: l = Bp,
    noSsr: u = !1
  } = e, d = i.join(","), m = i.length > 1, y = w.useMemo(() => l?.({
    key: s,
    storageWindow: c
  }), [l, s, c]), g = w.useMemo(() => l?.({
    key: `${a}-light`,
    storageWindow: c
  }), [l, a, c]), b = w.useMemo(() => l?.({
    key: `${a}-dark`,
    storageWindow: c
  }), [l, a, c]), [p, x] = w.useState(() => {
    const N = y?.get(t) || t, k = g?.get(r) || r, A = b?.get(n) || n;
    return {
      mode: N,
      systemMode: Ds(N),
      lightColorScheme: k,
      darkColorScheme: A
    };
  }), [E, P] = w.useState(u || !m);
  w.useEffect(() => {
    P(!0);
  }, []);
  const S = Fp(p), v = w.useCallback((N) => {
    x((k) => {
      if (N === k.mode)
        return k;
      const A = N ?? t;
      return y?.set(A), {
        ...k,
        mode: A,
        systemMode: Ds(A)
      };
    });
  }, [y, t]), h = w.useCallback((N) => {
    N ? typeof N == "string" ? N && !d.includes(N) ? console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`) : x((k) => {
      const A = {
        ...k
      };
      return ac(k, (D) => {
        D === "light" && (g?.set(N), A.lightColorScheme = N), D === "dark" && (b?.set(N), A.darkColorScheme = N);
      }), A;
    }) : x((k) => {
      const A = {
        ...k
      }, D = N.light === null ? r : N.light, f = N.dark === null ? n : N.dark;
      return D && (d.includes(D) ? (A.lightColorScheme = D, g?.set(D)) : console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`)), f && (d.includes(f) ? (A.darkColorScheme = f, b?.set(f)) : console.error(`\`${f}\` does not exist in \`theme.colorSchemes\`.`)), A;
    }) : x((k) => (g?.set(r), b?.set(n), {
      ...k,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [d, g, b, r, n]), O = w.useCallback((N) => {
    p.mode === "system" && x((k) => {
      const A = N?.matches ? "dark" : "light";
      return k.systemMode === A ? k : {
        ...k,
        systemMode: A
      };
    });
  }, [p.mode]), R = w.useRef(O);
  return R.current = O, w.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const N = (...A) => R.current(...A), k = window.matchMedia("(prefers-color-scheme: dark)");
    return k.addListener(N), N(k), () => {
      k.removeListener(N);
    };
  }, [m]), w.useEffect(() => {
    if (m) {
      const N = y?.subscribe((D) => {
        (!D || ["light", "dark", "system"].includes(D)) && v(D || t);
      }) || ko, k = g?.subscribe((D) => {
        (!D || d.match(D)) && h({
          light: D
        });
      }) || ko, A = b?.subscribe((D) => {
        (!D || d.match(D)) && h({
          dark: D
        });
      }) || ko;
      return () => {
        N(), k(), A();
      };
    }
  }, [h, v, d, t, c, m, y, g, b]), {
    ...p,
    mode: E ? p.mode : void 0,
    systemMode: E ? p.systemMode : void 0,
    colorScheme: E ? S : void 0,
    setMode: v,
    setColorScheme: h
  };
}
const Lp = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Vp(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = Pi,
    colorSchemeStorageKey: i = Ri,
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
  }, u = /* @__PURE__ */ w.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const d = () => w.useContext(u) || l, m = {}, y = {};
  function g(E) {
    const {
      children: P,
      theme: S,
      modeStorageKey: v = n,
      colorSchemeStorageKey: h = i,
      disableTransitionOnChange: O = s,
      storageManager: R,
      storageWindow: N = typeof window > "u" ? void 0 : window,
      documentNode: k = typeof document > "u" ? void 0 : document,
      colorSchemeNode: A = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: D = !1,
      disableStyleSheetGeneration: f = !1,
      defaultMode: I = "system",
      forceThemeRerender: M = !1,
      noSsr: _
    } = E, j = w.useRef(!1), V = Ci(), X = w.useContext(u), U = !!X && !D, T = w.useMemo(() => S || (typeof r == "function" ? r() : r), [S]), B = T[t], z = B || T, {
      colorSchemes: W = m,
      components: H = y,
      cssVarPrefix: L
    } = z, Y = Object.keys(W).filter((je) => !!W[je]).join(","), K = w.useMemo(() => Y.split(","), [Y]), G = typeof a == "string" ? a : a.light, Q = typeof a == "string" ? a : a.dark, q = W[G] && W[Q] ? I : W[z.defaultColorScheme]?.palette?.mode || z.palette?.mode, {
      mode: Z,
      setMode: $,
      systemMode: ie,
      lightColorScheme: se,
      darkColorScheme: Ee,
      colorScheme: Qe,
      setColorScheme: _e
    } = zp({
      supportedColorSchemes: K,
      defaultLightColorScheme: G,
      defaultDarkColorScheme: Q,
      modeStorageKey: v,
      colorSchemeStorageKey: h,
      defaultMode: q,
      storageManager: R,
      storageWindow: N,
      noSsr: _
    });
    let Ae = Z, xe = Qe;
    U && (Ae = X.mode, xe = X.colorScheme), process.env.NODE_ENV !== "production" && M && !z.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Me = xe || z.defaultColorScheme;
    z.vars && !M && (Me = z.defaultColorScheme);
    const ve = w.useMemo(() => {
      const je = z.generateThemeVars?.() || z.vars, he = {
        ...z,
        components: H,
        colorSchemes: W,
        cssVarPrefix: L,
        vars: je
      };
      if (typeof he.generateSpacing == "function" && (he.spacing = he.generateSpacing()), Me) {
        const Be = W[Me];
        Be && typeof Be == "object" && Object.keys(Be).forEach((ze) => {
          Be[ze] && typeof Be[ze] == "object" ? he[ze] = {
            ...he[ze],
            ...Be[ze]
          } : he[ze] = Be[ze];
        });
      }
      return c ? c(he) : he;
    }, [z, Me, H, W, L]), ee = z.colorSchemeSelector;
    St(() => {
      if (xe && A && ee && ee !== "media") {
        const je = ee;
        let he = ee;
        if (je === "class" && (he = ".%s"), je === "data" && (he = "[data-%s]"), je?.startsWith("data-") && !je.includes("%s") && (he = `[${je}="%s"]`), he.startsWith("."))
          A.classList.remove(...K.map((Be) => he.substring(1).replace("%s", Be))), A.classList.add(he.substring(1).replace("%s", xe));
        else {
          const Be = he.replace("%s", xe).match(/\[([^\]]+)\]/);
          if (Be) {
            const [ze, Bt] = Be[1].split("=");
            Bt || K.forEach((Ue) => {
              A.removeAttribute(ze.replace(xe, Ue));
            }), A.setAttribute(ze, Bt ? Bt.replace(/"|'/g, "") : "");
          } else
            A.setAttribute(he, xe);
        }
      }
    }, [xe, ee, A, K]), w.useEffect(() => {
      let je;
      if (O && j.current && k) {
        const he = k.createElement("style");
        he.appendChild(k.createTextNode(Lp)), k.head.appendChild(he), window.getComputedStyle(k.body), je = setTimeout(() => {
          k.head.removeChild(he);
        }, 1);
      }
      return () => {
        clearTimeout(je);
      };
    }, [xe, O, k]), w.useEffect(() => (j.current = !0, () => {
      j.current = !1;
    }), []);
    const _t = w.useMemo(() => ({
      allColorSchemes: K,
      colorScheme: xe,
      darkColorScheme: Ee,
      lightColorScheme: se,
      mode: Ae,
      setColorScheme: _e,
      setMode: process.env.NODE_ENV === "production" ? $ : (je) => {
        ve.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), $(je);
      },
      systemMode: ie
    }), [K, xe, Ee, se, Ae, _e, $, ie, ve.colorSchemeSelector]);
    let wt = !0;
    (f || z.cssVariables === !1 || U && V?.cssVarPrefix === L) && (wt = !1);
    const Dt = /* @__PURE__ */ C.jsxs(w.Fragment, {
      children: [/* @__PURE__ */ C.jsx(Yr, {
        themeId: B ? t : void 0,
        theme: ve,
        children: P
      }), wt && /* @__PURE__ */ C.jsx(xi, {
        styles: ve.generateStyleSheets?.() || []
      })]
    });
    return U ? Dt : /* @__PURE__ */ C.jsx(u.Provider, {
      value: _t,
      children: Dt
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
  const b = typeof a == "string" ? a : a.light, p = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: g,
    useColorScheme: d,
    getInitColorSchemeScript: (E) => _p({
      colorSchemeStorageKey: i,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: p,
      modeStorageKey: n,
      ...E
    })
  };
}
function Wp(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const i = n[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...n.slice(1))})` : `, ${i}`;
  }
  return (n, ...i) => `var(--${e ? `${e}-` : ""}${n}${t(...i)})`;
}
const Bs = (e, t, r, n = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = r : i && typeof i == "object" && (i[s] = r) : i && typeof i == "object" && (i[s] || (i[s] = n.includes(s) ? [] : {}), i = i[s]);
  });
}, Up = (e, t, r) => {
  function n(i, s = [], a = []) {
    Object.entries(i).forEach(([c, l]) => {
      (!r || r && !r([...s, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...s, c], Array.isArray(l) ? [...a, c] : a) : t([...s, c], l, a));
    });
  }
  n(e);
}, Hp = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function $o(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, i = {}, s = {}, a = {};
  return Up(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const d = `--${r ? `${r}-` : ""}${c.join("-")}`, m = Hp(c, l);
        Object.assign(i, {
          [d]: m
        }), Bs(s, c, `var(${d})`, u), Bs(a, c, `var(${d}, ${m})`, u);
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
function qp(e, t = {}) {
  const {
    getSelector: r = E,
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
  } = $o(u, t);
  let g = y;
  const b = {}, {
    [l]: p,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([v, h]) => {
    const {
      vars: O,
      css: R,
      varsWithDefaults: N
    } = $o(h, t);
    g = We(g, N), b[v] = {
      css: R,
      vars: O
    };
  }), p) {
    const {
      css: v,
      vars: h,
      varsWithDefaults: O
    } = $o(p, t);
    g = We(g, O), b[l] = {
      css: v,
      vars: h
    };
  }
  function E(v, h) {
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
      function O(k, A) {
        Object.keys(A).length && v.push(typeof k == "string" ? {
          [k]: {
            ...A
          }
        } : k);
      }
      O(r(void 0, {
        ...m
      }), m);
      const {
        [h]: R,
        ...N
      } = b;
      if (R) {
        const {
          css: k
        } = R, A = a[h]?.palette?.mode, D = !n && A ? {
          colorScheme: A,
          ...k
        } : {
          ...k
        };
        O(r(h, {
          ...D
        }), D);
      }
      return Object.entries(N).forEach(([k, {
        css: A
      }]) => {
        const D = a[k]?.palette?.mode, f = !n && D ? {
          colorScheme: D,
          ...A
        } : {
          ...A
        };
        O(r(k, {
          ...f
        }), f);
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
function Yp(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Gp = io(), Kp = bp("div", {
  name: "MuiStack",
  slot: "Root"
});
function Xp(e) {
  return xp({
    props: e,
    name: "MuiStack",
    defaultTheme: Gp
  });
}
function Jp(e, t) {
  const r = w.Children.toArray(e).filter(Boolean);
  return r.reduce((n, i, s) => (n.push(i), s < r.length - 1 && n.push(/* @__PURE__ */ w.cloneElement(t, {
    key: `separator-${s}`
  })), n), []);
}
const Zp = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Qp = ({
  ownerState: e,
  theme: t
}) => {
  let r = {
    display: "flex",
    flexDirection: "column",
    ...at({
      theme: t
    }, wo({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (n) => ({
      flexDirection: n
    }))
  };
  if (e.spacing) {
    const n = Xn(t), i = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), s = wo({
      values: e.direction,
      base: i
    }), a = wo({
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
      gap: Kt(n, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Zp(u ? s[u] : e.direction)}`]: Kt(n, l)
      }
    }));
  }
  return r = fu(t.breakpoints, r), r;
};
function ef(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Kp,
    useThemeProps: r = Xp,
    componentName: n = "MuiStack"
  } = e, i = () => Pe({
    root: ["root"]
  }, (l) => Te(n, l), {}), s = t(Qp), a = /* @__PURE__ */ w.forwardRef(function(l, u) {
    const d = r(l), m = di(d), {
      component: y = "div",
      direction: g = "column",
      spacing: b = 0,
      divider: p,
      children: x,
      className: E,
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
      className: ne(h.root, E),
      ...S,
      children: p ? Jp(x, p) : x
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
const Gr = {
  black: "#000",
  white: "#fff"
}, tf = {
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
}, tr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, rr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Or = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, nr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, or = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ir = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function cc() {
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
      paper: Gr.white,
      default: Gr.white
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
const lc = cc();
function uc() {
  return {
    text: {
      primary: Gr.white,
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
      active: Gr.white,
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
const qo = uc();
function Fs(e, t, r, n) {
  const i = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = lo(e.main, i) : t === "dark" && (e.dark = co(e.main, s)));
}
function zs(e, t, r, n, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function rf(e = "light") {
  return e === "dark" ? {
    main: nr[200],
    light: nr[50],
    dark: nr[400]
  } : {
    main: nr[700],
    light: nr[400],
    dark: nr[800]
  };
}
function nf(e = "light") {
  return e === "dark" ? {
    main: tr[200],
    light: tr[50],
    dark: tr[400]
  } : {
    main: tr[500],
    light: tr[300],
    dark: tr[700]
  };
}
function of(e = "light") {
  return e === "dark" ? {
    main: rr[500],
    light: rr[300],
    dark: rr[700]
  } : {
    main: rr[700],
    light: rr[400],
    dark: rr[800]
  };
}
function sf(e = "light") {
  return e === "dark" ? {
    main: or[400],
    light: or[300],
    dark: or[700]
  } : {
    main: or[700],
    light: or[500],
    dark: or[900]
  };
}
function af(e = "light") {
  return e === "dark" ? {
    main: ir[400],
    light: ir[300],
    dark: ir[700]
  } : {
    main: ir[800],
    light: ir[500],
    dark: ir[900]
  };
}
function cf(e = "light") {
  return e === "dark" ? {
    main: Or[400],
    light: Or[300],
    dark: Or[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Or[500],
    dark: Or[900]
  };
}
function lf(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ki(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || rf(t), c = e.secondary || nf(t), l = e.error || of(t), u = e.info || sf(t), d = e.success || af(t), m = e.warning || cf(t);
  function y(x) {
    if (i)
      return lf(x);
    const E = Ms(x, qo.text.primary) >= r ? qo.text.primary : lc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const P = Ms(x, E);
      P < 3 && console.error([`MUI: The contrast ratio of ${P}:1 for ${E} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const g = ({
    color: x,
    name: E,
    mainShade: P = 500,
    lightShade: S = 300,
    darkShade: v = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[P] && (x.main = x[P]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${P}\` property.` : xt(11, E ? ` (${E})` : "", P));
    if (typeof x.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(x.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : xt(12, E ? ` (${E})` : "", JSON.stringify(x.main)));
    return i ? (zs(i, x, "light", S, n), zs(i, x, "dark", v, n)) : (Fs(x, "light", S, n), Fs(x, "dark", v, n)), x.contrastText || (x.contrastText = y(x.main)), x;
  };
  let b;
  return t === "light" ? b = cc() : t === "dark" && (b = uc()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), We({
    // A collection of common colors.
    common: {
      ...Gr
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
    grey: tf,
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
function uf(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [i, s] = n;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function df(e, t) {
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
function pf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ls = {
  textTransform: "uppercase"
}, Vs = '"Roboto", "Helvetica", "Arial", sans-serif';
function dc(e, t) {
  const {
    fontFamily: r = Vs,
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
  const y = n / 14, g = d || ((x) => `${x / l * y}rem`), b = (x, E, P, S, v) => ({
    fontFamily: r,
    fontWeight: x,
    fontSize: g(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Vs ? {
      letterSpacing: `${pf(S / E)}em`
    } : {},
    ...v,
    ...u
  }), p = {
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
    button: b(a, 14, 1.75, 0.4, Ls),
    caption: b(s, 12, 1.66, 0.4),
    overline: b(s, 12, 2.66, 1, Ls),
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
    ...p
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const ff = 0.2, mf = 0.14, hf = 0.12;
function we(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ff})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${mf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${hf})`].join(",");
}
const gf = ["none", we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], yf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, bf = {
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
function Ws(e) {
  return `${Math.round(e)}ms`;
}
function vf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function xf(e) {
  const t = {
    ...yf,
    ...e.easing
  }, r = {
    ...bf,
    ...e.duration
  };
  return {
    getAutoHeightDuration: vf,
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
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Ws(a)} ${c} ${typeof l == "string" ? l : Ws(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Sf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Tf(e) {
  return dt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function pc(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const i = Object.entries(n);
    for (let s = 0; s < i.length; s++) {
      const [a, c] = i[s];
      !Tf(c) || a.startsWith("unstable_") ? delete n[a] : dt(c) && (n[a] = {
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
function Us(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Ef = (e) => {
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
function wf(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : jn(t, Ef(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Us(r)})` : lo(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Us(r)})` : co(t, r);
    }
  });
}
function Yo(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : xt(20));
  const m = ki({
    ...s,
    colorSpace: u
  }), y = io(e);
  let g = We(y, {
    mixins: df(y.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: gf.slice(),
    typography: dc(m, c),
    transitions: xf(a),
    zIndex: {
      ...Sf
    }
  });
  if (g = We(g, d), g = t.reduce((b, p) => We(b, p), g), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (x, E) => {
      let P;
      for (P in x) {
        const S = x[P];
        if (b.includes(P) && Object.keys(S).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Te("", P);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${P}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
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
      const E = g.components[x].styleOverrides;
      E && x.startsWith("Mui") && p(E, x);
    });
  }
  return g.unstable_sxConfig = {
    ...en,
    ...d?.unstable_sxConfig
  }, g.unstable_sx = function(p) {
    return $t({
      sx: p,
      theme: this
    });
  }, g.toRuntimeSource = pc, wf(g), g;
}
function Go(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Cf = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Go(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function fc(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function mc(e) {
  return e === "dark" ? Cf : [];
}
function Of(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: i,
    ...s
  } = e, a = ki({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...fc(a.mode),
      ...r
    },
    overlays: n || mc(a.mode),
    ...s
  };
}
function Pf(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Rf = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], kf = (e) => (t, r) => {
  const n = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Rf(e.cssVarPrefix).forEach((c) => {
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
function $f(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function F(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Nr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : rc(e);
}
function bt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Mr(Nr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Mf(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ct = (e) => {
  try {
    return e();
  } catch {
  }
}, Nf = (e = "mui") => Wp(e);
function Mo(e, t, r, n, i) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const s = i === "dark" ? "dark" : "light";
  if (!n) {
    t[i] = Of({
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
  } = Yo({
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
      ...fc(s),
      ...r?.opacity
    },
    overlays: r?.overlays || mc(s)
  }, c;
}
function If(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: c = Pf,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, m = Object.keys(r)[0], y = n || (r.light && m !== "light" ? "light" : m), g = Nf(s), {
    [y]: b,
    light: p,
    dark: x,
    ...E
  } = r, P = {
    ...E
  };
  let S = b;
  if ((y === "dark" && !("dark" in r) || y === "light" && !("light" in r)) && (S = !0), !S)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${y}\` option is either missing or invalid.` : xt(21, y));
  let v;
  a && (v = "oklch");
  const h = Mo(v, P, S, d, y);
  p && !P.light && Mo(v, P, p, void 0, "light"), x && !P.dark && Mo(v, P, x, void 0, "dark");
  let O = {
    defaultColorScheme: y,
    ...h,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: g,
    colorSchemes: P,
    font: {
      ...uf(h.typography),
      ...h.font
    },
    spacing: Mf(d.spacing)
  };
  Object.keys(O.colorSchemes).forEach((D) => {
    const f = O.colorSchemes[D].palette, I = (_) => {
      const j = _.split("-"), V = j[1], X = j[2];
      return g(_, f[V][X]);
    };
    f.mode === "light" && (F(f.common, "background", "#fff"), F(f.common, "onBackground", "#000")), f.mode === "dark" && (F(f.common, "background", "#000"), F(f.common, "onBackground", "#fff"));
    function M(_, j, V) {
      if (v) {
        let X;
        return _ === zt && (X = `transparent ${((1 - V) * 100).toFixed(0)}%`), _ === fe && (X = `#000 ${(V * 100).toFixed(0)}%`), _ === me && (X = `#fff ${(V * 100).toFixed(0)}%`), `color-mix(in ${v}, ${j}, ${X})`;
      }
      return _(j, V);
    }
    if ($f(f, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), f.mode === "light") {
      F(f.Alert, "errorColor", M(fe, f.error.light, 0.6)), F(f.Alert, "infoColor", M(fe, f.info.light, 0.6)), F(f.Alert, "successColor", M(fe, f.success.light, 0.6)), F(f.Alert, "warningColor", M(fe, f.warning.light, 0.6)), F(f.Alert, "errorFilledBg", I("palette-error-main")), F(f.Alert, "infoFilledBg", I("palette-info-main")), F(f.Alert, "successFilledBg", I("palette-success-main")), F(f.Alert, "warningFilledBg", I("palette-warning-main")), F(f.Alert, "errorFilledColor", ct(() => f.getContrastText(f.error.main))), F(f.Alert, "infoFilledColor", ct(() => f.getContrastText(f.info.main))), F(f.Alert, "successFilledColor", ct(() => f.getContrastText(f.success.main))), F(f.Alert, "warningFilledColor", ct(() => f.getContrastText(f.warning.main))), F(f.Alert, "errorStandardBg", M(me, f.error.light, 0.9)), F(f.Alert, "infoStandardBg", M(me, f.info.light, 0.9)), F(f.Alert, "successStandardBg", M(me, f.success.light, 0.9)), F(f.Alert, "warningStandardBg", M(me, f.warning.light, 0.9)), F(f.Alert, "errorIconColor", I("palette-error-main")), F(f.Alert, "infoIconColor", I("palette-info-main")), F(f.Alert, "successIconColor", I("palette-success-main")), F(f.Alert, "warningIconColor", I("palette-warning-main")), F(f.AppBar, "defaultBg", I("palette-grey-100")), F(f.Avatar, "defaultBg", I("palette-grey-400")), F(f.Button, "inheritContainedBg", I("palette-grey-300")), F(f.Button, "inheritContainedHoverBg", I("palette-grey-A100")), F(f.Chip, "defaultBorder", I("palette-grey-400")), F(f.Chip, "defaultAvatarColor", I("palette-grey-700")), F(f.Chip, "defaultIconColor", I("palette-grey-700")), F(f.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(f.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(f.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(f.LinearProgress, "primaryBg", M(me, f.primary.main, 0.62)), F(f.LinearProgress, "secondaryBg", M(me, f.secondary.main, 0.62)), F(f.LinearProgress, "errorBg", M(me, f.error.main, 0.62)), F(f.LinearProgress, "infoBg", M(me, f.info.main, 0.62)), F(f.LinearProgress, "successBg", M(me, f.success.main, 0.62)), F(f.LinearProgress, "warningBg", M(me, f.warning.main, 0.62)), F(f.Skeleton, "bg", v ? M(zt, f.text.primary, 0.11) : `rgba(${I("palette-text-primaryChannel")} / 0.11)`), F(f.Slider, "primaryTrack", M(me, f.primary.main, 0.62)), F(f.Slider, "secondaryTrack", M(me, f.secondary.main, 0.62)), F(f.Slider, "errorTrack", M(me, f.error.main, 0.62)), F(f.Slider, "infoTrack", M(me, f.info.main, 0.62)), F(f.Slider, "successTrack", M(me, f.success.main, 0.62)), F(f.Slider, "warningTrack", M(me, f.warning.main, 0.62));
      const _ = v ? M(fe, f.background.default, 0.6825) : bn(f.background.default, 0.8);
      F(f.SnackbarContent, "bg", _), F(f.SnackbarContent, "color", ct(() => v ? qo.text.primary : f.getContrastText(_))), F(f.SpeedDialAction, "fabHoverBg", bn(f.background.paper, 0.15)), F(f.StepConnector, "border", I("palette-grey-400")), F(f.StepContent, "border", I("palette-grey-400")), F(f.Switch, "defaultColor", I("palette-common-white")), F(f.Switch, "defaultDisabledColor", I("palette-grey-100")), F(f.Switch, "primaryDisabledColor", M(me, f.primary.main, 0.62)), F(f.Switch, "secondaryDisabledColor", M(me, f.secondary.main, 0.62)), F(f.Switch, "errorDisabledColor", M(me, f.error.main, 0.62)), F(f.Switch, "infoDisabledColor", M(me, f.info.main, 0.62)), F(f.Switch, "successDisabledColor", M(me, f.success.main, 0.62)), F(f.Switch, "warningDisabledColor", M(me, f.warning.main, 0.62)), F(f.TableCell, "border", M(me, M(zt, f.divider, 1), 0.88)), F(f.Tooltip, "bg", M(zt, f.grey[700], 0.92));
    }
    if (f.mode === "dark") {
      F(f.Alert, "errorColor", M(me, f.error.light, 0.6)), F(f.Alert, "infoColor", M(me, f.info.light, 0.6)), F(f.Alert, "successColor", M(me, f.success.light, 0.6)), F(f.Alert, "warningColor", M(me, f.warning.light, 0.6)), F(f.Alert, "errorFilledBg", I("palette-error-dark")), F(f.Alert, "infoFilledBg", I("palette-info-dark")), F(f.Alert, "successFilledBg", I("palette-success-dark")), F(f.Alert, "warningFilledBg", I("palette-warning-dark")), F(f.Alert, "errorFilledColor", ct(() => f.getContrastText(f.error.dark))), F(f.Alert, "infoFilledColor", ct(() => f.getContrastText(f.info.dark))), F(f.Alert, "successFilledColor", ct(() => f.getContrastText(f.success.dark))), F(f.Alert, "warningFilledColor", ct(() => f.getContrastText(f.warning.dark))), F(f.Alert, "errorStandardBg", M(fe, f.error.light, 0.9)), F(f.Alert, "infoStandardBg", M(fe, f.info.light, 0.9)), F(f.Alert, "successStandardBg", M(fe, f.success.light, 0.9)), F(f.Alert, "warningStandardBg", M(fe, f.warning.light, 0.9)), F(f.Alert, "errorIconColor", I("palette-error-main")), F(f.Alert, "infoIconColor", I("palette-info-main")), F(f.Alert, "successIconColor", I("palette-success-main")), F(f.Alert, "warningIconColor", I("palette-warning-main")), F(f.AppBar, "defaultBg", I("palette-grey-900")), F(f.AppBar, "darkBg", I("palette-background-paper")), F(f.AppBar, "darkColor", I("palette-text-primary")), F(f.Avatar, "defaultBg", I("palette-grey-600")), F(f.Button, "inheritContainedBg", I("palette-grey-800")), F(f.Button, "inheritContainedHoverBg", I("palette-grey-700")), F(f.Chip, "defaultBorder", I("palette-grey-700")), F(f.Chip, "defaultAvatarColor", I("palette-grey-300")), F(f.Chip, "defaultIconColor", I("palette-grey-300")), F(f.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(f.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(f.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(f.LinearProgress, "primaryBg", M(fe, f.primary.main, 0.5)), F(f.LinearProgress, "secondaryBg", M(fe, f.secondary.main, 0.5)), F(f.LinearProgress, "errorBg", M(fe, f.error.main, 0.5)), F(f.LinearProgress, "infoBg", M(fe, f.info.main, 0.5)), F(f.LinearProgress, "successBg", M(fe, f.success.main, 0.5)), F(f.LinearProgress, "warningBg", M(fe, f.warning.main, 0.5)), F(f.Skeleton, "bg", v ? M(zt, f.text.primary, 0.13) : `rgba(${I("palette-text-primaryChannel")} / 0.13)`), F(f.Slider, "primaryTrack", M(fe, f.primary.main, 0.5)), F(f.Slider, "secondaryTrack", M(fe, f.secondary.main, 0.5)), F(f.Slider, "errorTrack", M(fe, f.error.main, 0.5)), F(f.Slider, "infoTrack", M(fe, f.info.main, 0.5)), F(f.Slider, "successTrack", M(fe, f.success.main, 0.5)), F(f.Slider, "warningTrack", M(fe, f.warning.main, 0.5));
      const _ = v ? M(me, f.background.default, 0.985) : bn(f.background.default, 0.98);
      F(f.SnackbarContent, "bg", _), F(f.SnackbarContent, "color", ct(() => v ? lc.text.primary : f.getContrastText(_))), F(f.SpeedDialAction, "fabHoverBg", bn(f.background.paper, 0.15)), F(f.StepConnector, "border", I("palette-grey-600")), F(f.StepContent, "border", I("palette-grey-600")), F(f.Switch, "defaultColor", I("palette-grey-300")), F(f.Switch, "defaultDisabledColor", I("palette-grey-600")), F(f.Switch, "primaryDisabledColor", M(fe, f.primary.main, 0.55)), F(f.Switch, "secondaryDisabledColor", M(fe, f.secondary.main, 0.55)), F(f.Switch, "errorDisabledColor", M(fe, f.error.main, 0.55)), F(f.Switch, "infoDisabledColor", M(fe, f.info.main, 0.55)), F(f.Switch, "successDisabledColor", M(fe, f.success.main, 0.55)), F(f.Switch, "warningDisabledColor", M(fe, f.warning.main, 0.55)), F(f.TableCell, "border", M(fe, M(zt, f.divider, 1), 0.68)), F(f.Tooltip, "bg", M(zt, f.grey[700], 0.92));
    }
    bt(f.background, "default"), bt(f.background, "paper"), bt(f.common, "background"), bt(f.common, "onBackground"), bt(f, "divider"), Object.keys(f).forEach((_) => {
      const j = f[_];
      _ !== "tonalOffset" && j && typeof j == "object" && (j.main && F(f[_], "mainChannel", Mr(Nr(j.main))), j.light && F(f[_], "lightChannel", Mr(Nr(j.light))), j.dark && F(f[_], "darkChannel", Mr(Nr(j.dark))), j.contrastText && F(f[_], "contrastTextChannel", Mr(Nr(j.contrastText))), _ === "text" && (bt(f[_], "primary"), bt(f[_], "secondary")), _ === "action" && (j.active && bt(f[_], "active"), j.selected && bt(f[_], "selected")));
    });
  }), O = t.reduce((D, f) => We(D, f), O);
  const R = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: c,
    getSelector: kf(O),
    enableContrastVars: a
  }, {
    vars: N,
    generateThemeVars: k,
    generateStyleSheets: A
  } = qp(O, R);
  return O.vars = N, Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([D, f]) => {
    O[D] = f;
  }), O.generateThemeVars = k, O.generateStyleSheets = A, O.generateSpacing = function() {
    return Xa(d.spacing, Xn(this));
  }, O.getColorSchemeSelector = Yp(l), O.spacing = O.generateSpacing(), O.shouldSkipGeneratingVar = c, O.unstable_sxConfig = {
    ...en,
    ...d?.unstable_sxConfig
  }, O.unstable_sx = function(f) {
    return $t({
      sx: f,
      theme: this
    });
  }, O.toRuntimeSource = pc, O;
}
function Hs(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: ki({
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
      return Yo(e, ...t);
    let d = r;
    "palette" in e || u[c] && (u[c] !== !0 ? d = u[c].palette : c === "dark" && (d = {
      mode: "dark"
    }));
    const m = Yo({
      ...e,
      palette: d
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, Hs(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, Hs(m, "light", u.light)), m;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), If({
    ...a,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const $i = fo(), ft = "$$material";
function on() {
  const e = so($i);
  return process.env.NODE_ENV !== "production" && w.useDebugValue(e), e[ft] || e;
}
function hc(e) {
  return /* @__PURE__ */ C.jsx(Ti, {
    ...e,
    defaultTheme: $i,
    themeId: ft
  });
}
process.env.NODE_ENV !== "production" && (hc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Af(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const er = (e) => Af(e) && e !== "classes", te = ec({
  themeId: ft,
  defaultTheme: $i,
  rootShouldForwardProp: er
});
function gc(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ C.jsx(hc, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
function jf() {
  return di;
}
const Ce = Ap;
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function Oe(e) {
  return $p(e);
}
function _f(e) {
  return Te("MuiSvgIcon", e);
}
be("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Df = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, i = {
    root: ["root", t !== "inherit" && `color${J(t)}`, `fontSize${J(r)}`]
  };
  return Pe(i, _f, n);
}, Bf = te("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${J(r.color)}`], t[`fontSize${J(r.fontSize)}`]];
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
}))), Dn = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
  } = n, b = /* @__PURE__ */ w.isValidElement(i) && i.type === "svg", p = {
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
  const E = Df(p);
  return /* @__PURE__ */ C.jsxs(Bf, {
    as: c,
    className: ne(E.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r,
    ...x,
    ...g,
    ...b && i.props,
    ownerState: p,
    children: [b ? i.props.children : i, m ? /* @__PURE__ */ C.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Dn.propTypes = {
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
Dn.muiName = "SvgIcon";
function De(e, t) {
  function r(n, i) {
    return /* @__PURE__ */ C.jsx(Dn, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Dn.muiName, /* @__PURE__ */ w.memo(/* @__PURE__ */ w.forwardRef(r));
}
function Ff(e, t = 166) {
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
function Xt(e) {
  return nt(e).defaultView || window;
}
function qs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function yc(e) {
  const {
    controlled: t,
    default: r,
    name: n,
    state: i = "value"
  } = e, {
    current: s
  } = w.useRef(t !== void 0), [a, c] = w.useState(r), l = s ? t : a;
  if (process.env.NODE_ENV !== "production") {
    w.useEffect(() => {
      s !== (t !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${i} state of ${n} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [i, n, t]);
    const {
      current: d
    } = w.useRef(r);
    w.useEffect(() => {
      !s && !Object.is(d, r) && console.error([`MUI: A component is changing the default ${i} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const u = w.useCallback((d) => {
    s || c(d);
  }, []);
  return [l, u];
}
function kt(e) {
  const t = w.useRef(e);
  return St(() => {
    t.current = e;
  }), w.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Ke(...e) {
  const t = w.useRef(void 0), r = w.useCallback((n) => {
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
  return w.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
function zf(e, t) {
  const r = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && r >= 65 && r <= 90 && typeof t == "function";
}
function Lf(e, t) {
  if (!e)
    return t;
  function r(a, c) {
    const l = {};
    return Object.keys(c).forEach((u) => {
      zf(u, c[u]) && typeof a[u] == "function" && (l[u] = (...d) => {
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
const bc = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle"), Vf = De(/* @__PURE__ */ C.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutline"), Wf = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z"
}), "Sync"), Ys = De(/* @__PURE__ */ C.jsx("path", {
  d: "M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33m-7.14-.94 2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64z"
}), "SyncDisabled");
function It(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Uf(e) {
  return typeof e.main == "string";
}
function Hf(e, t = []) {
  if (!Uf(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function ht(e = []) {
  return ([, t]) => t && Hf(t, e);
}
const At = o.oneOfType([o.func, o.object]);
function qf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Yf(e, t, r, n, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof s == "function" && !qf(s) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const vc = It(o.elementType, Yf);
function Bn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Gs = {};
function xc(e, t) {
  const r = w.useRef(Gs);
  return r.current === Gs && (r.current = e(t)), r;
}
class Fn {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Fn();
  }
  static use() {
    const t = xc(Fn.create).current, [r, n] = w.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, w.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = Kf(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Gf() {
  return Fn.use();
}
function Kf() {
  let e, t;
  const r = new Promise((n, i) => {
    e = n, t = i;
  });
  return r.resolve = e, r.reject = t, r;
}
function Sc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ko(e, t) {
  return Ko = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ko(e, t);
}
function Tc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ko(e, t);
}
const Ks = {
  disabled: !1
};
var Xf = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
const zn = oe.createContext(null);
var Jf = function(t) {
  return t.scrollTop;
}, Ir = "unmounted", Wt = "exited", Ut = "entering", cr = "entered", Xo = "exiting", yt = /* @__PURE__ */ function(e) {
  Tc(t, e);
  function t(n, i) {
    var s;
    s = e.call(this, n, i) || this;
    var a = i, c = a && !a.isMounting ? n.enter : n.appear, l;
    return s.appearStatus = null, n.in ? c ? (l = Wt, s.appearStatus = Ut) : l = cr : n.unmountOnExit || n.mountOnEnter ? l = Ir : l = Wt, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Ir ? {
      status: Wt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Ut && a !== cr && (s = Ut) : (a === Ut || a === cr) && (s = Xo);
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
      if (this.cancelNextCallback(), s === Ut) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : dn.findDOMNode(this);
          a && Jf(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Wt && this.setState({
      status: Ir
    });
  }, r.performEnter = function(i) {
    var s = this, a = this.props.enter, c = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [c] : [dn.findDOMNode(this), c], u = l[0], d = l[1], m = this.getTimeouts(), y = c ? m.appear : m.enter;
    if (!i && !a || Ks.disabled) {
      this.safeSetState({
        status: cr
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Ut
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(y, function() {
        s.safeSetState({
          status: cr
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : dn.findDOMNode(this);
    if (!s || Ks.disabled) {
      this.safeSetState({
        status: Wt
      }, function() {
        i.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: Xo
    }, function() {
      i.props.onExiting(c), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Wt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : dn.findDOMNode(this), c = i == null && !this.props.addEndListener;
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
    if (i === Ir)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var c = Sc(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ oe.createElement(zn.Provider, {
        value: null
      }, typeof a == "function" ? a(i, c) : oe.cloneElement(oe.Children.only(a), c))
    );
  }, t;
}(oe.Component);
yt.contextType = zn;
yt.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var r = Xf;
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
function sr() {
}
yt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: sr,
  onEntering: sr,
  onEntered: sr,
  onExit: sr,
  onExiting: sr,
  onExited: sr
};
yt.UNMOUNTED = Ir;
yt.EXITED = Wt;
yt.ENTERING = Ut;
yt.ENTERED = cr;
yt.EXITING = Xo;
function Zf(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mi(e, t) {
  var r = function(s) {
    return t && wn(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Wl.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    n[i.key] = r(i);
  }), n;
}
function Qf(e, t) {
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
function qt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function em(e, t) {
  return Mi(e.children, function(r) {
    return Cn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: qt(r, "appear", e),
      enter: qt(r, "enter", e),
      exit: qt(r, "exit", e)
    });
  });
}
function tm(e, t, r) {
  var n = Mi(e.children), i = Qf(t, n);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (wn(a)) {
      var c = s in t, l = s in n, u = t[s], d = wn(u) && !u.props.in;
      l && (!c || d) ? i[s] = Cn(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: qt(a, "exit", e),
        enter: qt(a, "enter", e)
      }) : !l && c && !d ? i[s] = Cn(a, {
        in: !1
      }) : l && c && wn(u) && (i[s] = Cn(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: qt(a, "exit", e),
        enter: qt(a, "enter", e)
      }));
    }
  }), i;
}
var rm = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, nm = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ni = /* @__PURE__ */ function(e) {
  Tc(t, e);
  function t(n, i) {
    var s;
    s = e.call(this, n, i) || this;
    var a = s.handleExited.bind(Zf(s));
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
      children: l ? em(i, c) : tm(i, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(i, s) {
    var a = Mi(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(c) {
      var l = In({}, c.children);
      return delete l[i.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, c = Sc(i, ["component", "childFactory"]), l = this.state.contextValue, u = rm(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, s === null ? /* @__PURE__ */ oe.createElement(zn.Provider, {
      value: l
    }, u) : /* @__PURE__ */ oe.createElement(zn.Provider, {
      value: l
    }, /* @__PURE__ */ oe.createElement(s, c, u));
  }, t;
}(oe.Component);
Ni.propTypes = process.env.NODE_ENV !== "production" ? {
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
Ni.defaultProps = nm;
const om = [];
function im(e) {
  w.useEffect(e, om);
}
class mo {
  static create() {
    return new mo();
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
function lr() {
  const e = xc(mo.create).current;
  return im(e.disposeEffect), e;
}
function Ec(e) {
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
  } = e, [d, m] = w.useState(!1), y = ne(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, b = ne(r.child, d && r.childLeaving, n && r.childPulsate);
  return !c && !d && m(!0), w.useEffect(() => {
    if (!c && l != null) {
      const p = setTimeout(l, u);
      return () => {
        clearTimeout(p);
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
process.env.NODE_ENV !== "production" && (Ec.propTypes = {
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
const et = be("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Jo = 550, sm = 80, am = vr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, cm = vr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, lm = vr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, um = te("span", {
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
}), dm = te(Ec, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${et.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${am};
    animation-duration: ${Jo}ms;
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
    animation-name: ${cm};
    animation-duration: ${Jo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${et.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${lm};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, wc = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...c
  } = n, [l, u] = w.useState([]), d = w.useRef(0), m = w.useRef(null);
  w.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const y = w.useRef(!1), g = lr(), b = w.useRef(null), p = w.useRef(null), x = w.useCallback((v) => {
    const {
      pulsate: h,
      rippleX: O,
      rippleY: R,
      rippleSize: N,
      cb: k
    } = v;
    u((A) => [...A, /* @__PURE__ */ C.jsx(dm, {
      classes: {
        ripple: ne(s.ripple, et.ripple),
        rippleVisible: ne(s.rippleVisible, et.rippleVisible),
        ripplePulsate: ne(s.ripplePulsate, et.ripplePulsate),
        child: ne(s.child, et.child),
        childLeaving: ne(s.childLeaving, et.childLeaving),
        childPulsate: ne(s.childPulsate, et.childPulsate)
      },
      timeout: Jo,
      pulsate: h,
      rippleX: O,
      rippleY: R,
      rippleSize: N
    }, d.current)]), d.current += 1, m.current = k;
  }, [s]), E = w.useCallback((v = {}, h = {}, O = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: N = i || h.pulsate,
      fakeElement: k = !1
      // For test purposes
    } = h;
    if (v?.type === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    v?.type === "touchstart" && (y.current = !0);
    const A = k ? null : p.current, D = A ? A.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let f, I, M;
    if (N || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      f = Math.round(D.width / 2), I = Math.round(D.height / 2);
    else {
      const {
        clientX: _,
        clientY: j
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      f = Math.round(_ - D.left), I = Math.round(j - D.top);
    }
    if (N)
      M = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3), M % 2 === 0 && (M += 1);
    else {
      const _ = Math.max(Math.abs((A ? A.clientWidth : 0) - f), f) * 2 + 2, j = Math.max(Math.abs((A ? A.clientHeight : 0) - I), I) * 2 + 2;
      M = Math.sqrt(_ ** 2 + j ** 2);
    }
    v?.touches ? b.current === null && (b.current = () => {
      x({
        pulsate: R,
        rippleX: f,
        rippleY: I,
        rippleSize: M,
        cb: O
      });
    }, g.start(sm, () => {
      b.current && (b.current(), b.current = null);
    })) : x({
      pulsate: R,
      rippleX: f,
      rippleY: I,
      rippleSize: M,
      cb: O
    });
  }, [i, x, g]), P = w.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), S = w.useCallback((v, h) => {
    if (g.clear(), v?.type === "touchend" && b.current) {
      b.current(), b.current = null, g.start(0, () => {
        S(v, h);
      });
      return;
    }
    b.current = null, u((O) => O.length > 0 ? O.slice(1) : O), m.current = h;
  }, [g]);
  return w.useImperativeHandle(r, () => ({
    pulsate: P,
    start: E,
    stop: S
  }), [P, E, S]), /* @__PURE__ */ C.jsx(um, {
    className: ne(et.root, s.root, a),
    ref: p,
    ...c,
    children: /* @__PURE__ */ C.jsx(Ni, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (wc.propTypes = {
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
function pm(e) {
  return Te("MuiButtonBase", e);
}
const fm = be("MuiButtonBase", ["root", "disabled", "focusVisible"]), mm = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: i
  } = e, a = Pe({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, pm, i);
  return r && n && (a.root += ` ${n}`), a;
}, hm = te("button", {
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
  [`&.${fm.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), sn = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    onBlur: p,
    onClick: x,
    onContextMenu: E,
    onDragLeave: P,
    onFocus: S,
    onFocusVisible: v,
    onKeyDown: h,
    onKeyUp: O,
    onMouseDown: R,
    onMouseLeave: N,
    onMouseUp: k,
    onTouchEnd: A,
    onTouchMove: D,
    onTouchStart: f,
    tabIndex: I = 0,
    TouchRippleProps: M,
    touchRippleRef: _,
    type: j,
    ...V
  } = n, X = w.useRef(null), U = Gf(), T = Ke(U.ref, _), [B, z] = w.useState(!1);
  u && B && z(!1), w.useImperativeHandle(i, () => ({
    focusVisible: () => {
      z(!0), X.current.focus();
    }
  }), []);
  const W = U.shouldMount && !d && !u;
  w.useEffect(() => {
    B && y && !d && U.pulsate();
  }, [d, y, B, U]);
  const H = vt(U, "start", R, m), L = vt(U, "stop", E, m), Y = vt(U, "stop", P, m), K = vt(U, "stop", k, m), G = vt(U, "stop", (ee) => {
    B && ee.preventDefault(), N && N(ee);
  }, m), Q = vt(U, "start", f, m), q = vt(U, "stop", A, m), Z = vt(U, "stop", D, m), $ = vt(U, "stop", (ee) => {
    Bn(ee.target) || z(!1), p && p(ee);
  }, !1), ie = kt((ee) => {
    X.current || (X.current = ee.currentTarget), Bn(ee.target) && (z(!0), v && v(ee)), S && S(ee);
  }), se = () => {
    const ee = X.current;
    return l && l !== "button" && !(ee.tagName === "A" && ee.href);
  }, Ee = kt((ee) => {
    y && !ee.repeat && B && ee.key === " " && U.stop(ee, () => {
      U.start(ee);
    }), ee.target === ee.currentTarget && se() && ee.key === " " && ee.preventDefault(), h && h(ee), ee.target === ee.currentTarget && se() && ee.key === "Enter" && !u && (ee.preventDefault(), x && x(ee));
  }), Qe = kt((ee) => {
    y && ee.key === " " && B && !ee.defaultPrevented && U.stop(ee, () => {
      U.pulsate(ee);
    }), O && O(ee), x && ee.target === ee.currentTarget && se() && ee.key === " " && !ee.defaultPrevented && x(ee);
  });
  let _e = l;
  _e === "button" && (V.href || V.to) && (_e = b);
  const Ae = {};
  _e === "button" ? (Ae.type = j === void 0 ? "button" : j, Ae.disabled = u) : (!V.href && !V.to && (Ae.role = "button"), u && (Ae["aria-disabled"] = u));
  const xe = Ke(r, X), Me = {
    ...n,
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: y,
    tabIndex: I,
    focusVisible: B
  }, ve = mm(Me);
  return /* @__PURE__ */ C.jsxs(hm, {
    as: _e,
    className: ne(ve.root, c),
    ownerState: Me,
    onBlur: $,
    onClick: x,
    onContextMenu: L,
    onFocus: ie,
    onKeyDown: Ee,
    onKeyUp: Qe,
    onMouseDown: H,
    onMouseLeave: G,
    onMouseUp: K,
    onDragLeave: Y,
    onTouchEnd: q,
    onTouchMove: Z,
    onTouchStart: Q,
    ref: xe,
    tabIndex: u ? -1 : I,
    type: j,
    ...Ae,
    ...V,
    children: [a, W ? /* @__PURE__ */ C.jsx(wc, {
      ref: T,
      center: s,
      ...M
    }) : null]
  });
});
function vt(e, t, r, n = !1) {
  return kt((i) => (r && r(i), n || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: At,
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
  component: vc,
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
function gm(e) {
  return Te("MuiCircularProgress", e);
}
be("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Ot = 44, Zo = vr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Qo = vr`
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
`, ym = typeof Zo != "string" ? vi`
        animation: ${Zo} 1.4s linear infinite;
      ` : null, bm = typeof Qo != "string" ? vi`
        animation: ${Qo} 1.4s ease-in-out infinite;
      ` : null, vm = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: i
  } = e, s = {
    root: ["root", r, `color${J(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${J(r)}`, i && "circleDisableShrink"]
  };
  return Pe(s, gm, t);
}, xm = te("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${J(r.color)}`]];
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
    style: ym || {
      animation: `${Zo} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ht()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Sm = te("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Tm = te("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${J(r.variant)}`], r.disableShrink && t.circleDisableShrink];
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
    style: bm || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Qo} 1.4s ease-in-out infinite`
    }
  }]
}))), Ii = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
  }, b = vm(g), p = {}, x = {}, E = {};
  if (m === "determinate") {
    const P = 2 * Math.PI * ((Ot - u) / 2);
    p.strokeDasharray = P.toFixed(3), E["aria-valuenow"] = Math.round(d), p.strokeDashoffset = `${((100 - d) / 100 * P).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ C.jsx(xm, {
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
    ...E,
    ...y,
    children: /* @__PURE__ */ C.jsx(Sm, {
      className: b.svg,
      ownerState: g,
      viewBox: `${Ot / 2} ${Ot / 2} ${Ot} ${Ot}`,
      children: /* @__PURE__ */ C.jsx(Tm, {
        className: b.circle,
        style: p,
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
process.env.NODE_ENV !== "production" && (Ii.propTypes = {
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
  disableShrink: It(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
function Em(e) {
  return Te("MuiIconButton", e);
}
const Xs = be("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), wm = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: i,
    size: s,
    loading: a
  } = e, c = {
    root: ["root", a && "loading", r && "disabled", n !== "default" && `color${J(n)}`, i && `edge${J(i)}`, `size${J(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Pe(c, Em, t);
}, Cm = te(sn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${J(r.color)}`], r.edge && t[`edge${J(r.edge)}`], t[`size${J(r.size)}`]];
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
  }, ...Object.entries(e.palette).filter(ht()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(ht()).map(([t]) => ({
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
  [`&.${Xs.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Xs.loading}`]: {
    color: "transparent"
  }
}))), Om = te("span", {
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
})), Cc = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
  } = n, p = po(m), x = g ?? /* @__PURE__ */ C.jsx(Ii, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), E = {
    ...n,
    edge: i,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    loading: y,
    loadingIndicator: x,
    size: d
  }, P = wm(E);
  return /* @__PURE__ */ C.jsxs(Cm, {
    id: y ? p : m,
    className: ne(P.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l || y,
    ref: r,
    ...b,
    ownerState: E,
    children: [typeof y == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ C.jsx("span", {
      className: P.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ C.jsx(Om, {
        className: P.loadingIndicator,
        ownerState: E,
        children: y && x
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (Cc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: It(o.node, (e) => w.Children.toArray(e.children).some((r) => /* @__PURE__ */ w.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
function Pm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Oc(e, t, r, n, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = s.type;
  return typeof l == "function" && !Pm(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const xr = It(o.element, Oc);
xr.isRequired = It(o.element.isRequired, Oc);
function an(e) {
  return parseInt(w.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
const Pc = (e) => e.scrollTop;
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
function ei(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Rm = {
  entering: {
    opacity: 1,
    transform: ei(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, No = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Kr = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = yt,
    ...E
  } = t, P = lr(), S = w.useRef(), v = on(), h = w.useRef(null), O = Ke(h, an(s), r), R = (_) => (j) => {
    if (_) {
      const V = h.current;
      j === void 0 ? _(V) : _(V, j);
    }
  }, N = R(d), k = R((_, j) => {
    Pc(_);
    const {
      duration: V,
      delay: X,
      easing: U
    } = Ln({
      style: b,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let T;
    p === "auto" ? (T = v.transitions.getAutoHeightDuration(_.clientHeight), S.current = T) : T = V, _.style.transition = [v.transitions.create("opacity", {
      duration: T,
      delay: X
    }), v.transitions.create("transform", {
      duration: No ? T : T * 0.666,
      delay: X,
      easing: U
    })].join(","), l && l(_, j);
  }), A = R(u), D = R(g), f = R((_) => {
    const {
      duration: j,
      delay: V,
      easing: X
    } = Ln({
      style: b,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    let U;
    p === "auto" ? (U = v.transitions.getAutoHeightDuration(_.clientHeight), S.current = U) : U = j, _.style.transition = [v.transitions.create("opacity", {
      duration: U,
      delay: V
    }), v.transitions.create("transform", {
      duration: No ? U : U * 0.666,
      delay: No ? V : V || U * 0.333,
      easing: X
    })].join(","), _.style.opacity = 0, _.style.transform = ei(0.75), m && m(_);
  }), I = R(y), M = (_) => {
    p === "auto" && P.start(S.current || 0, _), n && n(h.current, _);
  };
  return /* @__PURE__ */ C.jsx(x, {
    appear: i,
    in: c,
    nodeRef: h,
    onEnter: k,
    onEntered: A,
    onEntering: N,
    onExit: f,
    onExited: I,
    onExiting: D,
    addEndListener: M,
    timeout: p === "auto" ? null : p,
    ...E,
    children: (_, {
      ownerState: j,
      ...V
    }) => /* @__PURE__ */ w.cloneElement(s, {
      style: {
        opacity: 0,
        transform: ei(0.75),
        visibility: _ === "exited" && !c ? "hidden" : void 0,
        ...Rm[_],
        ...b,
        ...s.props.style
      },
      ref: O,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (Kr.propTypes = {
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
  children: xr.isRequired,
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
Kr && (Kr.muiSupportAuto = !0);
function Tt(e, t, r, n, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
var qe = "top", ot = "bottom", it = "right", Ye = "left", Ai = "auto", cn = [qe, ot, it, Ye], mr = "start", Xr = "end", km = "clippingParents", Rc = "viewport", Pr = "popper", $m = "reference", Js = /* @__PURE__ */ cn.reduce(function(e, t) {
  return e.concat([t + "-" + mr, t + "-" + Xr]);
}, []), kc = /* @__PURE__ */ [].concat(cn, [Ai]).reduce(function(e, t) {
  return e.concat([t, t + "-" + mr, t + "-" + Xr]);
}, []), Mm = "beforeRead", Nm = "read", Im = "afterRead", Am = "beforeMain", jm = "main", _m = "afterMain", Dm = "beforeWrite", Bm = "write", Fm = "afterWrite", zm = [Mm, Nm, Im, Am, jm, _m, Dm, Bm, Fm];
function gt(e) {
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
function Jt(e) {
  var t = Ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function rt(e) {
  var t = Ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ji(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Lm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !rt(s) || !gt(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? s.removeAttribute(a) : s.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Vm(e) {
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
      !rt(i) || !gt(i) || (Object.assign(i.style, c), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Wm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Lm,
  effect: Vm,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var Yt = Math.max, Vn = Math.min, hr = Math.round;
function ti() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function $c() {
  return !/^((?!chrome|android).)*safari/i.test(ti());
}
function gr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && rt(e) && (i = e.offsetWidth > 0 && hr(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && hr(n.height) / e.offsetHeight || 1);
  var a = Jt(e) ? Ze(e) : window, c = a.visualViewport, l = !$c() && r, u = (n.left + (l && c ? c.offsetLeft : 0)) / i, d = (n.top + (l && c ? c.offsetTop : 0)) / s, m = n.width / i, y = n.height / s;
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
function _i(e) {
  var t = gr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Mc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && ji(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Et(e) {
  return Ze(e).getComputedStyle(e);
}
function Um(e) {
  return ["table", "td", "th"].indexOf(gt(e)) >= 0;
}
function jt(e) {
  return ((Jt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ho(e) {
  return gt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ji(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    jt(e)
  );
}
function Zs(e) {
  return !rt(e) || // https://github.com/popperjs/popper-core/issues/837
  Et(e).position === "fixed" ? null : e.offsetParent;
}
function Hm(e) {
  var t = /firefox/i.test(ti()), r = /Trident/i.test(ti());
  if (r && rt(e)) {
    var n = Et(e);
    if (n.position === "fixed")
      return null;
  }
  var i = ho(e);
  for (ji(i) && (i = i.host); rt(i) && ["html", "body"].indexOf(gt(i)) < 0; ) {
    var s = Et(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ln(e) {
  for (var t = Ze(e), r = Zs(e); r && Um(r) && Et(r).position === "static"; )
    r = Zs(r);
  return r && (gt(r) === "html" || gt(r) === "body" && Et(r).position === "static") ? t : r || Hm(e) || t;
}
function Di(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Fr(e, t, r) {
  return Yt(e, Vn(t, r));
}
function qm(e, t, r) {
  var n = Fr(e, t, r);
  return n > r ? r : n;
}
function Nc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ic(e) {
  return Object.assign({}, Nc(), e);
}
function Ac(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Ym = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ic(typeof t != "number" ? t : Ac(t, cn));
};
function Gm(e) {
  var t, r = e.state, n = e.name, i = e.options, s = r.elements.arrow, a = r.modifiersData.popperOffsets, c = mt(r.placement), l = Di(c), u = [Ye, it].indexOf(c) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = Ym(i.padding, r), y = _i(s), g = l === "y" ? qe : Ye, b = l === "y" ? ot : it, p = r.rects.reference[d] + r.rects.reference[l] - a[l] - r.rects.popper[d], x = a[l] - r.rects.reference[l], E = ln(s), P = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, S = p / 2 - x / 2, v = m[g], h = P - y[d] - m[b], O = P / 2 - y[d] / 2 + S, R = Fr(v, O, h), N = l;
    r.modifiersData[n] = (t = {}, t[N] = R, t.centerOffset = R - O, t);
  }
}
function Km(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Mc(t.elements.popper, i) && (t.elements.arrow = i));
}
const Xm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Gm,
  effect: Km,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function yr(e) {
  return e.split("-")[1];
}
var Jm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Zm(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: hr(r * i) / i || 0,
    y: hr(n * i) / i || 0
  };
}
function Qs(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, y = a.x, g = y === void 0 ? 0 : y, b = a.y, p = b === void 0 ? 0 : b, x = typeof d == "function" ? d({
    x: g,
    y: p
  }) : {
    x: g,
    y: p
  };
  g = x.x, p = x.y;
  var E = a.hasOwnProperty("x"), P = a.hasOwnProperty("y"), S = Ye, v = qe, h = window;
  if (u) {
    var O = ln(r), R = "clientHeight", N = "clientWidth";
    if (O === Ze(r) && (O = jt(r), Et(O).position !== "static" && c === "absolute" && (R = "scrollHeight", N = "scrollWidth")), O = O, i === qe || (i === Ye || i === it) && s === Xr) {
      v = ot;
      var k = m && O === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[R]
      );
      p -= k - n.height, p *= l ? 1 : -1;
    }
    if (i === Ye || (i === qe || i === ot) && s === Xr) {
      S = it;
      var A = m && O === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[N]
      );
      g -= A - n.width, g *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: c
  }, u && Jm), f = d === !0 ? Zm({
    x: g,
    y: p
  }, Ze(r)) : {
    x: g,
    y: p
  };
  if (g = f.x, p = f.y, l) {
    var I;
    return Object.assign({}, D, (I = {}, I[v] = P ? "0" : "", I[S] = E ? "0" : "", I.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + p + "px)" : "translate3d(" + g + "px, " + p + "px, 0)", I));
  }
  return Object.assign({}, D, (t = {}, t[v] = P ? p + "px" : "", t[S] = E ? g + "px" : "", t.transform = "", t));
}
function Qm(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, c = r.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: mt(t.placement),
    variation: yr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qs(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qs(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const eh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qm,
  data: {}
};
var vn = {
  passive: !0
};
function th(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, c = a === void 0 ? !0 : a, l = Ze(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, vn);
  }), c && l.addEventListener("resize", r.update, vn), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, vn);
    }), c && l.removeEventListener("resize", r.update, vn);
  };
}
const rh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: th,
  data: {}
};
var nh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $n(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return nh[t];
  });
}
var oh = {
  start: "end",
  end: "start"
};
function ea(e) {
  return e.replace(/start|end/g, function(t) {
    return oh[t];
  });
}
function Bi(e) {
  var t = Ze(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Fi(e) {
  return gr(jt(e)).left + Bi(e).scrollLeft;
}
function ih(e, t) {
  var r = Ze(e), n = jt(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, c = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = $c();
    (u || !u && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: c + Fi(e),
    y: l
  };
}
function sh(e) {
  var t, r = jt(e), n = Bi(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Yt(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Yt(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -n.scrollLeft + Fi(e), l = -n.scrollTop;
  return Et(i || r).direction === "rtl" && (c += Yt(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function zi(e) {
  var t = Et(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function jc(e) {
  return ["html", "body", "#document"].indexOf(gt(e)) >= 0 ? e.ownerDocument.body : rt(e) && zi(e) ? e : jc(ho(e));
}
function zr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = jc(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ze(n), a = i ? [s].concat(s.visualViewport || [], zi(n) ? n : []) : n, c = t.concat(a);
  return i ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(zr(ho(a)))
  );
}
function ri(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ah(e, t) {
  var r = gr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ta(e, t, r) {
  return t === Rc ? ri(ih(e, r)) : Jt(t) ? ah(t, r) : ri(sh(jt(e)));
}
function ch(e) {
  var t = zr(ho(e)), r = ["absolute", "fixed"].indexOf(Et(e).position) >= 0, n = r && rt(e) ? ln(e) : e;
  return Jt(n) ? t.filter(function(i) {
    return Jt(i) && Mc(i, n) && gt(i) !== "body";
  }) : [];
}
function lh(e, t, r, n) {
  var i = t === "clippingParents" ? ch(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], c = s.reduce(function(l, u) {
    var d = ta(e, u, n);
    return l.top = Yt(d.top, l.top), l.right = Vn(d.right, l.right), l.bottom = Vn(d.bottom, l.bottom), l.left = Yt(d.left, l.left), l;
  }, ta(e, a, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function _c(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? mt(n) : null, s = n ? yr(n) : null, a = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, l;
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
  var u = i ? Di(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case mr:
        l[u] = l[u] - (t[d] / 2 - r[d] / 2);
        break;
      case Xr:
        l[u] = l[u] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return l;
}
function Jr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, c = r.boundary, l = c === void 0 ? km : c, u = r.rootBoundary, d = u === void 0 ? Rc : u, m = r.elementContext, y = m === void 0 ? Pr : m, g = r.altBoundary, b = g === void 0 ? !1 : g, p = r.padding, x = p === void 0 ? 0 : p, E = Ic(typeof x != "number" ? x : Ac(x, cn)), P = y === Pr ? $m : Pr, S = e.rects.popper, v = e.elements[b ? P : y], h = lh(Jt(v) ? v : v.contextElement || jt(e.elements.popper), l, d, a), O = gr(e.elements.reference), R = _c({
    reference: O,
    element: S,
    placement: i
  }), N = ri(Object.assign({}, S, R)), k = y === Pr ? N : O, A = {
    top: h.top - k.top + E.top,
    bottom: k.bottom - h.bottom + E.bottom,
    left: h.left - k.left + E.left,
    right: k.right - h.right + E.right
  }, D = e.modifiersData.offset;
  if (y === Pr && D) {
    var f = D[i];
    Object.keys(A).forEach(function(I) {
      var M = [it, ot].indexOf(I) >= 0 ? 1 : -1, _ = [qe, ot].indexOf(I) >= 0 ? "y" : "x";
      A[I] += f[_] * M;
    });
  }
  return A;
}
function uh(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, c = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? kc : l, d = yr(n), m = d ? c ? Js : Js.filter(function(b) {
    return yr(b) === d;
  }) : cn, y = m.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  y.length === 0 && (y = m);
  var g = y.reduce(function(b, p) {
    return b[p] = Jr(e, {
      placement: p,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[mt(p)], b;
  }, {});
  return Object.keys(g).sort(function(b, p) {
    return g[b] - g[p];
  });
}
function dh(e) {
  if (mt(e) === Ai)
    return [];
  var t = $n(e);
  return [ea(e), t, ea(t)];
}
function ph(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, c = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, d = r.boundary, m = r.rootBoundary, y = r.altBoundary, g = r.flipVariations, b = g === void 0 ? !0 : g, p = r.allowedAutoPlacements, x = t.options.placement, E = mt(x), P = E === x, S = l || (P || !b ? [$n(x)] : dh(x)), v = [x].concat(S).reduce(function(H, L) {
      return H.concat(mt(L) === Ai ? uh(t, {
        placement: L,
        boundary: d,
        rootBoundary: m,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: p
      }) : L);
    }, []), h = t.rects.reference, O = t.rects.popper, R = /* @__PURE__ */ new Map(), N = !0, k = v[0], A = 0; A < v.length; A++) {
      var D = v[A], f = mt(D), I = yr(D) === mr, M = [qe, ot].indexOf(f) >= 0, _ = M ? "width" : "height", j = Jr(t, {
        placement: D,
        boundary: d,
        rootBoundary: m,
        altBoundary: y,
        padding: u
      }), V = M ? I ? it : Ye : I ? ot : qe;
      h[_] > O[_] && (V = $n(V));
      var X = $n(V), U = [];
      if (s && U.push(j[f] <= 0), c && U.push(j[V] <= 0, j[X] <= 0), U.every(function(H) {
        return H;
      })) {
        k = D, N = !1;
        break;
      }
      R.set(D, U);
    }
    if (N)
      for (var T = b ? 3 : 1, B = function(L) {
        var Y = v.find(function(K) {
          var G = R.get(K);
          if (G)
            return G.slice(0, L).every(function(Q) {
              return Q;
            });
        });
        if (Y)
          return k = Y, "break";
      }, z = T; z > 0; z--) {
        var W = B(z);
        if (W === "break") break;
      }
    t.placement !== k && (t.modifiersData[n]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const fh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ph,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ra(e, t, r) {
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
function na(e) {
  return [qe, it, ot, Ye].some(function(t) {
    return e[t] >= 0;
  });
}
function mh(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = Jr(t, {
    elementContext: "reference"
  }), c = Jr(t, {
    altBoundary: !0
  }), l = ra(a, n), u = ra(c, i, s), d = na(l), m = na(u);
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
const hh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mh
};
function gh(e, t, r) {
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
function yh(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, s = i === void 0 ? [0, 0] : i, a = kc.reduce(function(d, m) {
    return d[m] = gh(m, t.rects, s), d;
  }, {}), c = a[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const bh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: yh
};
function vh(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = _c({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const xh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: vh,
  data: {}
};
function Sh(e) {
  return e === "x" ? "y" : "x";
}
function Th(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, c = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, d = r.altBoundary, m = r.padding, y = r.tether, g = y === void 0 ? !0 : y, b = r.tetherOffset, p = b === void 0 ? 0 : b, x = Jr(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: d
  }), E = mt(t.placement), P = yr(t.placement), S = !P, v = Di(E), h = Sh(v), O = t.modifiersData.popperOffsets, R = t.rects.reference, N = t.rects.popper, k = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, A = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, f = {
    x: 0,
    y: 0
  };
  if (O) {
    if (s) {
      var I, M = v === "y" ? qe : Ye, _ = v === "y" ? ot : it, j = v === "y" ? "height" : "width", V = O[v], X = V + x[M], U = V - x[_], T = g ? -N[j] / 2 : 0, B = P === mr ? R[j] : N[j], z = P === mr ? -N[j] : -R[j], W = t.elements.arrow, H = g && W ? _i(W) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Nc(), Y = L[M], K = L[_], G = Fr(0, R[j], H[j]), Q = S ? R[j] / 2 - T - G - Y - A.mainAxis : B - G - Y - A.mainAxis, q = S ? -R[j] / 2 + T + G + K + A.mainAxis : z + G + K + A.mainAxis, Z = t.elements.arrow && ln(t.elements.arrow), $ = Z ? v === "y" ? Z.clientTop || 0 : Z.clientLeft || 0 : 0, ie = (I = D?.[v]) != null ? I : 0, se = V + Q - ie - $, Ee = V + q - ie, Qe = Fr(g ? Vn(X, se) : X, V, g ? Yt(U, Ee) : U);
      O[v] = Qe, f[v] = Qe - V;
    }
    if (c) {
      var _e, Ae = v === "x" ? qe : Ye, xe = v === "x" ? ot : it, Me = O[h], ve = h === "y" ? "height" : "width", ee = Me + x[Ae], _t = Me - x[xe], wt = [qe, Ye].indexOf(E) !== -1, Dt = (_e = D?.[h]) != null ? _e : 0, je = wt ? ee : Me - R[ve] - N[ve] - Dt + A.altAxis, he = wt ? Me + R[ve] + N[ve] - Dt - A.altAxis : _t, Be = g && wt ? qm(je, Me, he) : Fr(g ? je : ee, Me, g ? he : _t);
      O[h] = Be, f[h] = Be - Me;
    }
    t.modifiersData[n] = f;
  }
}
const Eh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Th,
  requiresIfExists: ["offset"]
};
function wh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ch(e) {
  return e === Ze(e) || !rt(e) ? Bi(e) : wh(e);
}
function Oh(e) {
  var t = e.getBoundingClientRect(), r = hr(t.width) / e.offsetWidth || 1, n = hr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ph(e, t, r) {
  r === void 0 && (r = !1);
  var n = rt(t), i = rt(t) && Oh(t), s = jt(t), a = gr(e, i, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((gt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  zi(s)) && (c = Ch(t)), rt(t) ? (l = gr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Fi(s))), {
    x: a.left + c.scrollLeft - l.x,
    y: a.top + c.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Rh(e) {
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
function kh(e) {
  var t = Rh(e);
  return zm.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function $h(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Mh(e) {
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
var oa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ia() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Nh(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? oa : i;
  return function(c, l, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, oa, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], y = !1, g = {
      state: d,
      setOptions: function(E) {
        var P = typeof E == "function" ? E(d.options) : E;
        p(), d.options = Object.assign({}, s, d.options, P), d.scrollParents = {
          reference: Jt(c) ? zr(c) : c.contextElement ? zr(c.contextElement) : [],
          popper: zr(l)
        };
        var S = kh(Mh([].concat(n, d.options.modifiers)));
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
          var E = d.elements, P = E.reference, S = E.popper;
          if (ia(P, S)) {
            d.rects = {
              reference: Ph(P, ln(S), d.options.strategy === "fixed"),
              popper: _i(S)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(A) {
              return d.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var v = 0; v < d.orderedModifiers.length; v++) {
              if (d.reset === !0) {
                d.reset = !1, v = -1;
                continue;
              }
              var h = d.orderedModifiers[v], O = h.fn, R = h.options, N = R === void 0 ? {} : R, k = h.name;
              typeof O == "function" && (d = O({
                state: d,
                options: N,
                name: k,
                instance: g
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $h(function() {
        return new Promise(function(x) {
          g.forceUpdate(), x(d);
        });
      }),
      destroy: function() {
        p(), y = !0;
      }
    };
    if (!ia(c, l))
      return g;
    g.setOptions(u).then(function(x) {
      !y && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function b() {
      d.orderedModifiers.forEach(function(x) {
        var E = x.name, P = x.options, S = P === void 0 ? {} : P, v = x.effect;
        if (typeof v == "function") {
          var h = v({
            state: d,
            name: E,
            instance: g,
            options: S
          }), O = function() {
          };
          m.push(h || O);
        }
      });
    }
    function p() {
      m.forEach(function(x) {
        return x();
      }), m = [];
    }
    return g;
  };
}
var Ih = [rh, xh, eh, Wm, bh, fh, Eh, Xm, hh], Ah = /* @__PURE__ */ Nh({
  defaultModifiers: Ih
});
function jh(e) {
  return typeof e == "string";
}
function Dc(e, t, r) {
  return e === void 0 || jh(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Bc(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function sa(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Fc(e) {
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
    }, p = {
      ...r,
      ...i,
      ...n
    };
    return g.length > 0 && (p.className = g), Object.keys(b).length > 0 && (p.style = b), {
      props: p,
      internalRef: void 0
    };
  }
  const a = Bc({
    ...i,
    ...n
  }), c = sa(n), l = sa(i), u = t(a), d = ne(u?.className, r?.className, s, i?.className, n?.className), m = {
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
function zc(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Lc(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : zc(r, n), {
    props: c,
    internalRef: l
  } = Fc({
    ...s,
    externalSlotProps: a
  }), u = Ke(l, a?.ref, e.additionalProps?.ref);
  return Dc(t, {
    ...c,
    ref: u
  }, n);
}
function _h(e) {
  return typeof e == "function" ? e() : e;
}
const Zr = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const {
    children: n,
    container: i,
    disablePortal: s = !1
  } = t, [a, c] = w.useState(null), l = Ke(/* @__PURE__ */ w.isValidElement(n) ? an(n) : null, r);
  if (St(() => {
    s || c(_h(i) || document.body);
  }, [i, s]), St(() => {
    if (a && !s)
      return qs(r, a), () => {
        qs(r, null);
      };
  }, [r, a, s]), s) {
    if (/* @__PURE__ */ w.isValidElement(n)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ w.cloneElement(n, u);
    }
    return n;
  }
  return a && /* @__PURE__ */ Yl.createPortal(n, a);
});
process.env.NODE_ENV !== "production" && (Zr.propTypes = {
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
  container: o.oneOfType([Tt, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (Zr.propTypes = uo(Zr.propTypes));
function Dh(e) {
  return Te("MuiPopper", e);
}
be("MuiPopper", ["root"]);
function Bh(e, t) {
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
function Wn(e) {
  return typeof e == "function" ? e() : e;
}
function go(e) {
  return e.nodeType !== void 0;
}
function Fh(e) {
  return !go(e);
}
const zh = (e) => {
  const {
    classes: t
  } = e;
  return Pe({
    root: ["root"]
  }, Dh, t);
}, Lh = {}, Vh = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    ownerState: p,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, E = w.useRef(null), P = Ke(E, r), S = w.useRef(null), v = Ke(S, m), h = w.useRef(v);
  St(() => {
    h.current = v;
  }, [v]), w.useImperativeHandle(m, () => S.current, []);
  const O = Bh(u, s), [R, N] = w.useState(O), [k, A] = w.useState(Wn(n));
  w.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), w.useEffect(() => {
    n && A(Wn(n));
  }, [n]), St(() => {
    if (!k || !l)
      return;
    const _ = (X) => {
      N(X.placement);
    };
    if (process.env.NODE_ENV !== "production" && k && go(k) && k.nodeType === 1) {
      const X = k.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && X.top === 0 && X.left === 0 && X.right === 0 && X.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let j = [{
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
        _(X);
      }
    }];
    c != null && (j = j.concat(c)), d && d.modifiers != null && (j = j.concat(d.modifiers));
    const V = Ah(k, E.current, {
      placement: O,
      ...d,
      modifiers: j
    });
    return h.current(V), () => {
      V.destroy(), h.current(null);
    };
  }, [k, a, c, l, d, O]);
  const D = {
    placement: R
  };
  b !== null && (D.TransitionProps = b);
  const f = zh(t), I = g.root ?? "div", M = Lc({
    elementType: I,
    externalSlotProps: y.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: P
    },
    ownerState: t,
    className: f.root
  });
  return /* @__PURE__ */ C.jsx(I, {
    ...M,
    children: typeof i == "function" ? i(D) : i
  });
}), Vc = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    popperOptions: y = Lh,
    popperRef: g,
    style: b,
    transition: p = !1,
    slotProps: x = {},
    slots: E = {},
    ...P
  } = t, [S, v] = w.useState(!0), h = () => {
    v(!1);
  }, O = () => {
    v(!0);
  };
  if (!l && !d && (!p || S))
    return null;
  let R;
  if (s)
    R = s;
  else if (n) {
    const A = Wn(n);
    R = A && go(A) ? nt(A).body : nt(null).body;
  }
  const N = !d && l && (!p || S) ? "none" : void 0, k = p ? {
    in: d,
    onEnter: h,
    onExited: O
  } : void 0;
  return /* @__PURE__ */ C.jsx(Zr, {
    disablePortal: c,
    container: R,
    children: /* @__PURE__ */ C.jsx(Vh, {
      anchorEl: n,
      direction: a,
      disablePortal: c,
      modifiers: u,
      ref: r,
      open: p ? !S : d,
      placement: m,
      popperOptions: y,
      popperRef: g,
      slotProps: x,
      slots: E,
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
      TransitionProps: k,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Vc.propTypes = {
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
  anchorEl: It(o.oneOfType([Tt, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Wn(e.anchorEl);
      if (t && go(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Fh(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: o.oneOfType([Tt, o.func]),
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
  popperRef: At,
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
const Wh = te(Vc, {
  name: "MuiPopper",
  slot: "Root"
})({}), Li = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = Oi(), i = Oe({
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
    popperOptions: p,
    popperRef: x,
    transition: E,
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
    popperOptions: p,
    popperRef: x,
    transition: E,
    ...v
  };
  return /* @__PURE__ */ C.jsx(Wh, {
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
process.env.NODE_ENV !== "production" && (Li.propTypes = {
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
  anchorEl: o.oneOfType([Tt, o.object, o.func]),
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
  container: o.oneOfType([Tt, o.func]),
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
  popperRef: At,
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
function Se(e, t) {
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
  } = s, g = d[e] || n, b = zc(m[e], i), {
    props: {
      component: p,
      ...x
    },
    internalRef: E
  } = Fc({
    className: r,
    ...l,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: b
  }), P = Ke(E, b?.ref, t.ref), S = e === "root" ? p || u : p, v = Dc(g, {
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
function Uh(e) {
  return Te("MuiTooltip", e);
}
const $e = be("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Hh(e) {
  return Math.round(e * 1e5) / 1e5;
}
const qh = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", i && "touch", `tooltipPlacement${J(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Pe(a, Uh, t);
}, Yh = te(Li, {
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
      [`&[data-popper-placement*="bottom"] .${$e.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${$e.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${$e.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${$e.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${$e.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${$e.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${$e.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${$e.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), Gh = te("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${J(r.placement.split("-")[0])}`]];
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
  [`.${$e.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${$e.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${$e.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${$e.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${Hh(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${$e.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${$e.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${$e.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${$e.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${$e.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${$e.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${$e.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${$e.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${$e.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${$e.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Kh = te("span", {
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
let xn = !1;
const aa = new mo();
let Rr = {
  x: 0,
  y: 0
};
function Sn(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const Wc = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    enterNextDelay: p = 0,
    enterTouchDelay: x = 700,
    followCursor: E = !1,
    id: P,
    leaveDelay: S = 0,
    leaveTouchDelay: v = 1500,
    onClose: h,
    onOpen: O,
    open: R,
    placement: N = "bottom",
    PopperComponent: k,
    PopperProps: A = {},
    slotProps: D = {},
    slots: f = {},
    title: I,
    TransitionComponent: M,
    TransitionProps: _,
    ...j
  } = n, V = /* @__PURE__ */ w.isValidElement(s) ? s : /* @__PURE__ */ C.jsx("span", {
    children: s
  }), X = on(), U = Oi(), [T, B] = w.useState(), [z, W] = w.useState(null), H = w.useRef(!1), L = y || E, Y = lr(), K = lr(), G = lr(), Q = lr(), [q, Z] = yc({
    controlled: R,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let $ = q;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: re
    } = w.useRef(R !== void 0);
    w.useEffect(() => {
      T && T.disabled && !re && I !== "" && T.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [I, T, re]);
  }
  const ie = po(P), se = w.useRef(), Ee = kt(() => {
    se.current !== void 0 && (document.body.style.WebkitUserSelect = se.current, se.current = void 0), Q.clear();
  });
  w.useEffect(() => Ee, [Ee]);
  const Qe = (re) => {
    aa.clear(), xn = !0, Z(!0), O && !$ && O(re);
  }, _e = kt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (re) => {
      aa.start(800 + S, () => {
        xn = !1;
      }), Z(!1), h && $ && h(re), Y.start(X.transitions.duration.shortest, () => {
        H.current = !1;
      });
    }
  ), Ae = (re) => {
    H.current && re.type !== "touchstart" || (T && T.removeAttribute("title"), K.clear(), G.clear(), b || xn && p ? K.start(xn ? p : b, () => {
      Qe(re);
    }) : Qe(re));
  }, xe = (re) => {
    K.clear(), G.start(S, () => {
      _e(re);
    });
  }, [, Me] = w.useState(!1), ve = (re) => {
    Bn(re.target) || (Me(!1), xe(re));
  }, ee = (re) => {
    T || B(re.currentTarget), Bn(re.target) && (Me(!0), Ae(re));
  }, _t = (re) => {
    H.current = !0;
    const Ct = V.props;
    Ct.onTouchStart && Ct.onTouchStart(re);
  }, wt = (re) => {
    _t(re), G.clear(), Y.clear(), Ee(), se.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(x, () => {
      document.body.style.WebkitUserSelect = se.current, Ae(re);
    });
  }, Dt = (re) => {
    V.props.onTouchEnd && V.props.onTouchEnd(re), Ee(), G.start(v, () => {
      _e(re);
    });
  };
  w.useEffect(() => {
    if (!$)
      return;
    function re(Ct) {
      Ct.key === "Escape" && _e(Ct);
    }
    return document.addEventListener("keydown", re), () => {
      document.removeEventListener("keydown", re);
    };
  }, [_e, $]);
  const je = Ke(an(V), B, r);
  !I && I !== 0 && ($ = !1);
  const he = w.useRef(), Be = (re) => {
    const Ct = V.props;
    Ct.onMouseMove && Ct.onMouseMove(re), Rr = {
      x: re.clientX,
      y: re.clientY
    }, he.current && he.current.update();
  }, ze = {}, Bt = typeof I == "string";
  u ? (ze.title = !$ && Bt && !m ? I : null, ze["aria-describedby"] = $ ? ie : null) : (ze["aria-label"] = Bt ? I : null, ze["aria-labelledby"] = $ && !Bt ? ie : null);
  const Ue = {
    ...ze,
    ...j,
    ...V.props,
    className: ne(j.className, V.props.className),
    onTouchStart: _t,
    ref: je,
    ...E ? {
      onMouseMove: Be
    } : {}
  };
  process.env.NODE_ENV !== "production" && (Ue["data-mui-internal-clone-element"] = !0, w.useEffect(() => {
    T && !T.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [T]));
  const Sr = {};
  g || (Ue.onTouchStart = wt, Ue.onTouchEnd = Dt), m || (Ue.onMouseOver = Sn(Ae, Ue.onMouseOver), Ue.onMouseLeave = Sn(xe, Ue.onMouseLeave), L || (Sr.onMouseOver = Ae, Sr.onMouseLeave = xe)), d || (Ue.onFocus = Sn(ee, Ue.onFocus), Ue.onBlur = Sn(ve, Ue.onBlur), L || (Sr.onFocus = ee, Sr.onBlur = ve)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const Ft = {
    ...n,
    isRtl: U,
    arrow: i,
    disableInteractive: L,
    placement: N,
    PopperComponentProp: k,
    touch: H.current
  }, Tr = typeof D.popper == "function" ? D.popper(Ft) : D.popper, Ml = w.useMemo(() => {
    let re = [{
      name: "arrow",
      enabled: !!z,
      options: {
        element: z,
        padding: 4
      }
    }];
    return A.popperOptions?.modifiers && (re = re.concat(A.popperOptions.modifiers)), Tr?.popperOptions?.modifiers && (re = re.concat(Tr.popperOptions.modifiers)), {
      ...A.popperOptions,
      ...Tr?.popperOptions,
      modifiers: re
    };
  }, [z, A.popperOptions, Tr?.popperOptions]), yo = qh(Ft), Nl = typeof D.transition == "function" ? D.transition(Ft) : D.transition, un = {
    slots: {
      popper: c.Popper,
      transition: c.Transition ?? M,
      tooltip: c.Tooltip,
      arrow: c.Arrow,
      ...f
    },
    slotProps: {
      arrow: D.arrow ?? l.arrow,
      popper: {
        ...A,
        ...Tr ?? l.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: D.tooltip ?? l.tooltip,
      transition: {
        ..._,
        ...Nl ?? l.transition
      }
    }
  }, [Il, Al] = Se("popper", {
    elementType: Yh,
    externalForwardedProps: un,
    ownerState: Ft,
    className: ne(yo.popper, A?.className)
  }), [jl, _l] = Se("transition", {
    elementType: Kr,
    externalForwardedProps: un,
    ownerState: Ft
  }), [Dl, Bl] = Se("tooltip", {
    elementType: Gh,
    className: yo.tooltip,
    externalForwardedProps: un,
    ownerState: Ft
  }), [Fl, zl] = Se("arrow", {
    elementType: Kh,
    className: yo.arrow,
    externalForwardedProps: un,
    ownerState: Ft,
    ref: W
  });
  return /* @__PURE__ */ C.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ w.cloneElement(V, Ue), /* @__PURE__ */ C.jsx(Il, {
      as: k ?? Li,
      placement: N,
      anchorEl: E ? {
        getBoundingClientRect: () => ({
          top: Rr.y,
          left: Rr.x,
          right: Rr.x,
          bottom: Rr.y,
          width: 0,
          height: 0
        })
      } : T,
      popperRef: he,
      open: T ? $ : !1,
      id: ie,
      transition: !0,
      ...Sr,
      ...Al,
      popperOptions: Ml,
      children: ({
        TransitionProps: re
      }) => /* @__PURE__ */ C.jsx(jl, {
        timeout: X.transitions.duration.shorter,
        ...re,
        ..._l,
        children: /* @__PURE__ */ C.jsxs(Dl, {
          ...Bl,
          children: [I, i ? /* @__PURE__ */ C.jsx(Fl, {
            ...zl
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Wc.propTypes = {
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
  children: xr.isRequired,
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
function ca(e) {
  return String(parseFloat(e)).length === String(e).length;
}
function Xh(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Lt(e) {
  return parseFloat(e);
}
function Jh(e) {
  return (t, r) => {
    const n = Xh(t);
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
function Zh({
  size: e,
  grid: t
}) {
  const r = e - e % t, n = r + t;
  return e - r < n - e ? r : n;
}
function Qh({
  lineHeight: e,
  pixels: t,
  htmlFontSize: r
}) {
  return t / (e * r);
}
function eg({
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
function tg(e, t = {}) {
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
  const c = a.typography, l = Jh(c.htmlFontSize), u = r.map((d) => a.breakpoints.values[d]);
  return s.forEach((d) => {
    const m = c[d];
    if (!m)
      return;
    const y = parseFloat(l(m.fontSize, "rem"));
    if (y <= 1)
      return;
    const g = y, b = 1 + (g - 1) / i;
    let {
      lineHeight: p
    } = m;
    if (!ca(p) && !n)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : xt(6));
    ca(p) || (p = parseFloat(l(p, "rem")) / parseFloat(y));
    let x = null;
    n || (x = (E) => Zh({
      size: E,
      grid: Qh({
        pixels: 4,
        lineHeight: p,
        htmlFontSize: c.htmlFontSize
      })
    })), c[d] = {
      ...m,
      ...eg({
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
function rg({
  theme: e,
  ...t
}) {
  const r = ft in e ? e[ft] : void 0;
  return /* @__PURE__ */ C.jsx(Yr, {
    ...t,
    themeId: r ? ft : void 0,
    theme: r || e
  });
}
const Tn = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (o.string, o.string, o.string, o.string, o.string, o.oneOf(["dark", "light", "system"]), o.string, o.string);
const {
  CssVarsProvider: ng
} = Vp({
  themeId: ft,
  // @ts-ignore ignore module augmentation tests
  theme: () => fo({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Tn.colorSchemeStorageKey,
  modeStorageKey: Tn.modeStorageKey,
  defaultColorScheme: {
    light: Tn.defaultLightColorScheme,
    dark: Tn.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: dc(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return $t({
        sx: n,
        theme: this
      });
    }, t;
  }
}), og = ng;
function ig({
  theme: e,
  ...t
}) {
  const r = w.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = ft in e ? e[ft] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ C.jsx(rg, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ C.jsx(og, {
    theme: e,
    ...t
  });
}
function Ab({
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
  const d = on(), [m, y] = Dr("idle"), [g, b] = Dr(!0), [p, x] = Dr(0), E = vr`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `, P = Gi(
    (k, A) => {
      setTimeout(() => y(k), n), setTimeout(() => y("idle"), n + A);
    },
    [n]
  ), S = Gi(async () => {
    y("loading");
    try {
      await e(), P("success", i), x(0);
    } catch (k) {
      P("error", s), x((A) => A + 1), console.error(k);
    }
  }, [e, P, i, s]);
  ar(() => {
    if (!g) return;
    const k = setInterval(S, t);
    return () => clearInterval(k);
  }, [g, S, t]), ar(() => {
    l && (b(!1), y("critical-error"));
  }, [l]), ar(() => {
    l || (b(!0), y("idle"));
  }, [l]), ar(() => {
    p >= r && (b(!1), y("critical-error"));
  }, [p, r]), ar(() => {
    if (!g) return;
    const k = setInterval(S, t);
    return () => clearInterval(k);
  }, [g, S, t, c]);
  const v = () => {
    b((k) => !k), g || (x(0), y("idle"));
  }, h = () => {
    if (!g) return /* @__PURE__ */ C.jsx(Ys, {});
    switch (m) {
      case "success":
        return /* @__PURE__ */ C.jsx(bc, {});
      case "error":
        return /* @__PURE__ */ C.jsx(Vf, {});
      case "critical-error":
        return /* @__PURE__ */ C.jsx(Ys, {});
      default:
        return /* @__PURE__ */ C.jsx(Wf, {});
    }
  }, O = (k) => {
    const A = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(k);
    return A ? `${parseInt(A[1], 16)}, ${parseInt(A[2], 16)}, ${parseInt(A[3], 16)}` : "19, 81, 180";
  }, R = () => {
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
  return a && (l ? N = "Sincronização desabilitada" : m === "critical-error" ? N = "Sincronização com erro crítico. Clique para tentar reativar." : g ? N = "Sincronização automática ativada. Clique para desativar." : N = "Sincronização automática desativada. Clique para ativar."), /* @__PURE__ */ C.jsx(Wc, { title: N, children: /* @__PURE__ */ C.jsx(
    Cc,
    {
      size: u,
      disabled: l || m === "loading",
      "aria-label": "Auto Sync",
      onClick: v,
      sx: {
        marginLeft: d.spacing(1),
        // Usar spacing do tema
        color: R(),
        // Animação de loading usando as transições do GovBR
        animation: m === "loading" ? `${E} 1s ${d.transitions.easing.easeInOut} infinite` : "none",
        // Hover personalizado para este componente (sobrescreve o padrão)
        "&:hover:not(:disabled)": {
          backgroundImage: `linear-gradient(rgba(${O(R())}, 0.16), rgba(${O(R())}, 0.16))`
        }
      },
      children: h()
    }
  ) });
}
const sg = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function ag(e) {
  return Te("MuiAvatar", e);
}
be("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const cg = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return Pe({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, ag, t);
}, lg = te("div", {
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
}))), ug = te("img", {
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
}), dg = te(sg, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function pg({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: n
}) {
  const [i, s] = w.useState(!1);
  return w.useEffect(() => {
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
const ni = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    ...p
  } = n;
  let x = null;
  const E = {
    ...n,
    component: c,
    variant: b
  }, P = pg({
    ...d,
    ...typeof u.img == "function" ? u.img(E) : u.img,
    src: y,
    srcSet: g
  }), S = y || g, v = S && P !== "error";
  E.colorDefault = !v, delete E.ownerState;
  const h = cg(E), [O, R] = Se("root", {
    ref: r,
    className: ne(h.root, a),
    elementType: lg,
    externalForwardedProps: {
      slots: l,
      slotProps: u,
      component: c,
      ...p
    },
    ownerState: E
  }), [N, k] = Se("img", {
    className: h.img,
    elementType: ug,
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
    ownerState: E
  }), [A, D] = Se("fallback", {
    className: h.fallback,
    elementType: dg,
    externalForwardedProps: {
      slots: l,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: E
  });
  return v ? x = /* @__PURE__ */ C.jsx(N, {
    ...k
  }) : s || s === 0 ? x = s : S && i ? x = i[0] : x = /* @__PURE__ */ C.jsx(A, {
    ...D
  }), /* @__PURE__ */ C.jsx(O, {
    ...R,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
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
const Uc = (e) => {
  const t = w.useRef({});
  return w.useEffect(() => {
    t.current = e;
  }), t.current;
};
function fg(e) {
  const {
    badgeContent: t,
    invisible: r = !1,
    max: n = 99,
    showZero: i = !1
  } = e, s = Uc({
    badgeContent: t,
    max: n
  });
  let a = r;
  r === !1 && t === 0 && !i && (a = !0);
  const {
    badgeContent: c,
    max: l = n
  } = a ? s : e, u = c && Number(c) > l ? `${l}+` : c;
  return {
    badgeContent: c,
    invisible: a,
    max: l,
    displayValue: u
  };
}
function mg(e) {
  return Te("MuiBadge", e);
}
const Pt = be("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), Io = 10, Ao = 4, hg = (e) => {
  const {
    color: t,
    anchorOrigin: r,
    invisible: n,
    overlap: i,
    variant: s,
    classes: a = {}
  } = e, c = {
    root: ["root"],
    badge: ["badge", s, n && "invisible", `anchorOrigin${J(r.vertical)}${J(r.horizontal)}`, `anchorOrigin${J(r.vertical)}${J(r.horizontal)}${J(i)}`, `overlap${J(i)}`, t !== "default" && `color${J(t)}`]
  };
  return Pe(c, mg, a);
}, gg = te("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), yg = te("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.badge, t[r.variant], t[`anchorOrigin${J(r.anchorOrigin.vertical)}${J(r.anchorOrigin.horizontal)}${J(r.overlap)}`], r.color !== "default" && t[`color${J(r.color)}`], r.invisible && t.invisible];
  }
})(Ce(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(12),
  minWidth: Io * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: Io * 2,
  borderRadius: Io,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(e.palette).filter(ht(["contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: (e.vars || e).palette[t].main,
      color: (e.vars || e).palette[t].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: Ao,
      height: Ao * 2,
      minWidth: Ao * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${Pt.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${Pt.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${Pt.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${Pt.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${Pt.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${Pt.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${Pt.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${Pt.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: !0
    },
    style: {
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeInOut,
        duration: e.transitions.duration.leavingScreen
      })
    }
  }]
})));
function la(e) {
  return {
    vertical: e?.vertical ?? "top",
    horizontal: e?.horizontal ?? "right"
  };
}
const Hc = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: i,
    className: s,
    classes: a,
    component: c,
    components: l = {},
    componentsProps: u = {},
    children: d,
    overlap: m = "rectangular",
    color: y = "default",
    invisible: g = !1,
    max: b = 99,
    badgeContent: p,
    slots: x,
    slotProps: E,
    showZero: P = !1,
    variant: S = "standard",
    ...v
  } = n, {
    badgeContent: h,
    invisible: O,
    max: R,
    displayValue: N
  } = fg({
    max: b,
    invisible: g,
    badgeContent: p,
    showZero: P
  }), k = Uc({
    anchorOrigin: la(i),
    color: y,
    overlap: m,
    variant: S,
    badgeContent: p
  }), A = O || h == null && S !== "dot", {
    color: D = y,
    overlap: f = m,
    anchorOrigin: I,
    variant: M = S
  } = A ? k : n, _ = la(I), j = M !== "dot" ? N : void 0, V = {
    ...n,
    badgeContent: h,
    invisible: A,
    max: R,
    displayValue: j,
    showZero: P,
    anchorOrigin: _,
    color: D,
    overlap: f,
    variant: M
  }, X = hg(V), U = {
    slots: {
      root: x?.root ?? l.Root,
      badge: x?.badge ?? l.Badge
    },
    slotProps: {
      root: E?.root ?? u.root,
      badge: E?.badge ?? u.badge
    }
  }, [T, B] = Se("root", {
    elementType: gg,
    externalForwardedProps: {
      ...U,
      ...v
    },
    ownerState: V,
    className: ne(X.root, s),
    ref: r,
    additionalProps: {
      as: c
    }
  }), [z, W] = Se("badge", {
    elementType: yg,
    externalForwardedProps: U,
    ownerState: V,
    className: X.badge
  });
  return /* @__PURE__ */ C.jsxs(T, {
    ...B,
    children: [d, /* @__PURE__ */ C.jsx(z, {
      ...W,
      children: j
    })]
  });
});
process.env.NODE_ENV !== "production" && (Hc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOf(["left", "right"]),
    vertical: o.oneOf(["bottom", "top"])
  }),
  /**
   * The content rendered within the badge.
   */
  badgeContent: o.node,
  /**
   * The badge will be added relative to this node.
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
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Badge: o.elementType,
    Root: o.elementType
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
    badge: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: o.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: o.number,
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap: o.oneOf(["circular", "rectangular"]),
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: o.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    badge: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    badge: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: o.oneOfType([o.oneOf(["dot", "standard"]), o.string])
});
const Un = /* @__PURE__ */ w.createContext({});
process.env.NODE_ENV !== "production" && (Un.displayName = "ListContext");
function bg(e) {
  return Te("MuiList", e);
}
be("MuiList", ["root", "padding", "dense", "subheader"]);
const vg = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: i
  } = e;
  return Pe({
    root: ["root", !r && "padding", n && "dense", i && "subheader"]
  }, bg, t);
}, xg = te("ul", {
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
}), qc = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
  } = n, m = w.useMemo(() => ({
    dense: c
  }), [c]), y = {
    ...n,
    component: a,
    dense: c,
    disablePadding: l
  }, g = vg(y);
  return /* @__PURE__ */ C.jsx(Un.Provider, {
    value: m,
    children: /* @__PURE__ */ C.jsxs(xg, {
      as: a,
      className: ne(g.root, s),
      ref: r,
      ownerState: y,
      ...d,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (qc.propTypes = {
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
function Yc(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function jo(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function ua(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function Gc(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function kr(e, t, r, n, i, s) {
  let a = !1, c = i(e, t, t ? r : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = n ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !Gc(c, s) || l)
      c = i(e, c, r);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Kc = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
  } = t, g = w.useRef(null), b = w.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  St(() => {
    i && g.current.focus();
  }, [i]), w.useImperativeHandle(n, () => ({
    adjustStyleForScrollbar: (S, {
      direction: v
    }) => {
      const h = !g.current.style.width;
      if (S.clientHeight < g.current.clientHeight && h) {
        const O = `${Yc(Xt(S))}px`;
        g.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = O, g.current.style.width = `calc(100% + ${O})`;
      }
      return g.current;
    }
  }), []);
  const p = (S) => {
    const v = g.current, h = S.key;
    if (S.ctrlKey || S.metaKey || S.altKey) {
      d && d(S);
      return;
    }
    const R = nt(v).activeElement;
    if (h === "ArrowDown")
      S.preventDefault(), kr(v, R, u, l, jo);
    else if (h === "ArrowUp")
      S.preventDefault(), kr(v, R, u, l, ua);
    else if (h === "Home")
      S.preventDefault(), kr(v, null, u, l, jo);
    else if (h === "End")
      S.preventDefault(), kr(v, null, u, l, ua);
    else if (h.length === 1) {
      const N = b.current, k = h.toLowerCase(), A = performance.now();
      N.keys.length > 0 && (A - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && k !== N.keys[0] && (N.repeating = !1)), N.lastTime = A, N.keys.push(k);
      const D = R && !N.repeating && Gc(R, N);
      N.previousKeyMatched && (D || kr(v, R, !1, l, jo, N)) ? S.preventDefault() : N.previousKeyMatched = !1;
    }
    d && d(S);
  }, x = Ke(g, r);
  let E = -1;
  w.Children.forEach(a, (S, v) => {
    if (!/* @__PURE__ */ w.isValidElement(S)) {
      E === v && (E += 1, E >= a.length && (E = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && pr.isFragment(S) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), S.props.disabled || (m === "selectedMenu" && S.props.selected || E === -1) && (E = v), E === v && (S.props.disabled || S.props.muiSkipListHighlight || S.type.muiSkipListHighlight) && (E += 1, E >= a.length && (E = -1));
  });
  const P = w.Children.map(a, (S, v) => {
    if (v === E) {
      const h = {};
      return s && (h.autoFocus = !0), S.props.tabIndex === void 0 && m === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ w.cloneElement(S, h);
    }
    return S;
  });
  return /* @__PURE__ */ C.jsx(qc, {
    role: "menu",
    ref: x,
    className: c,
    onKeyDown: p,
    tabIndex: i ? 0 : -1,
    ...y,
    children: P
  });
});
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
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
function Sg(e) {
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
function Xc(e, t, r, n) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = Sg(i);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Jc(e, t, r, n) {
  return e[t] === void 0 ? null : Xc(e, t, r, n);
}
function oi() {
  return null;
}
Jc.isRequired = Xc;
oi.isRequired = oi;
const Zc = process.env.NODE_ENV === "production" ? oi : Jc;
function Tg(e) {
  return typeof e == "string";
}
function Eg(e) {
  const t = nt(e);
  return t.body === e ? Xt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Lr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function da(e) {
  return parseInt(Xt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function wg(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function pa(e, t, r, n, i) {
  const s = [t, r, ...n];
  [].forEach.call(e.children, (a) => {
    const c = !s.includes(a), l = !wg(a);
    c && l && Lr(a, i);
  });
}
function _o(e, t) {
  let r = -1;
  return e.some((n, i) => t(n) ? (r = i, !0) : !1), r;
}
function Cg(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (Eg(n)) {
      const a = Yc(Xt(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${da(n) + a}px`;
      const c = nt(n).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${da(l) + a}px`;
      });
    }
    let s;
    if (n.parentNode instanceof DocumentFragment)
      s = nt(n).body;
    else {
      const a = n.parentElement, c = Xt(n);
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
function Og(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class Pg {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Lr(t.modalRef, !1);
    const i = Og(r);
    pa(r, t.mount, t.modalRef, i, !0);
    const s = _o(this.containers, (a) => a.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: i
    }), n);
  }
  mount(t, r) {
    const n = _o(this.containers, (s) => s.modals.includes(t)), i = this.containers[n];
    i.restore || (i.restore = Cg(i, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const i = _o(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(n, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Lr(t.modalRef, r), pa(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
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
const Rg = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function kg(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function $g(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function Mg(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || $g(e));
}
function Ng(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(Rg)).forEach((n, i) => {
    const s = kg(n);
    s === -1 || !Mg(n) || (s === 0 ? t.push(n) : r.push({
      documentOrder: i,
      tabIndex: s,
      node: n
    }));
  }), r.sort((n, i) => n.tabIndex === i.tabIndex ? n.documentOrder - i.documentOrder : n.tabIndex - i.tabIndex).map((n) => n.node).concat(t);
}
function Ig() {
  return !0;
}
function Hn(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Ng,
    isEnabled: a = Ig,
    open: c
  } = e, l = w.useRef(!1), u = w.useRef(null), d = w.useRef(null), m = w.useRef(null), y = w.useRef(null), g = w.useRef(!1), b = w.useRef(null), p = Ke(an(t), b), x = w.useRef(null);
  w.useEffect(() => {
    !c || !b.current || (g.current = !r);
  }, [r, c]), w.useEffect(() => {
    if (!c || !b.current)
      return;
    const S = nt(b.current);
    return b.current.contains(S.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), g.current && b.current.focus()), () => {
      i || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [c]), w.useEffect(() => {
    if (!c || !b.current)
      return;
    const S = nt(b.current), v = (R) => {
      x.current = R, !(n || !a() || R.key !== "Tab") && S.activeElement === b.current && R.shiftKey && (l.current = !0, d.current && d.current.focus());
    }, h = () => {
      const R = b.current;
      if (R === null)
        return;
      if (!S.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (R.contains(S.activeElement) || n && S.activeElement !== u.current && S.activeElement !== d.current)
        return;
      if (S.activeElement !== y.current)
        y.current = null;
      else if (y.current !== null)
        return;
      if (!g.current)
        return;
      let N = [];
      if ((S.activeElement === u.current || S.activeElement === d.current) && (N = s(b.current)), N.length > 0) {
        const k = !!(x.current?.shiftKey && x.current?.key === "Tab"), A = N[0], D = N[N.length - 1];
        typeof A != "string" && typeof D != "string" && (k ? D.focus() : A.focus());
      } else
        R.focus();
    };
    S.addEventListener("focusin", h), S.addEventListener("keydown", v, !0);
    const O = setInterval(() => {
      S.activeElement && S.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval(O), S.removeEventListener("focusin", h), S.removeEventListener("keydown", v, !0);
    };
  }, [r, n, i, a, c, s]);
  const E = (S) => {
    m.current === null && (m.current = S.relatedTarget), g.current = !0, y.current = S.target;
    const v = t.props.onFocus;
    v && v(S);
  }, P = (S) => {
    m.current === null && (m.current = S.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ C.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ C.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: P,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ w.cloneElement(t, {
      ref: p,
      onFocus: E
    }), /* @__PURE__ */ C.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: P,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Hn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: xr,
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
process.env.NODE_ENV !== "production" && (Hn.propTypes = uo(Hn.propTypes));
const Ag = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Qc = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = on(), i = {
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
    onExiting: p,
    style: x,
    timeout: E = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = yt,
    ...S
  } = t, v = w.useRef(null), h = Ke(v, an(c), r), O = (M) => (_) => {
    if (M) {
      const j = v.current;
      _ === void 0 ? M(j) : M(j, _);
    }
  }, R = O(y), N = O((M, _) => {
    Pc(M);
    const j = Ln({
      style: x,
      timeout: E,
      easing: l
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = n.transitions.create("opacity", j), M.style.transition = n.transitions.create("opacity", j), d && d(M, _);
  }), k = O(m), A = O(p), D = O((M) => {
    const _ = Ln({
      style: x,
      timeout: E,
      easing: l
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = n.transitions.create("opacity", _), M.style.transition = n.transitions.create("opacity", _), g && g(M);
  }), f = O(b), I = (M) => {
    s && s(v.current, M);
  };
  return /* @__PURE__ */ C.jsx(P, {
    appear: a,
    in: u,
    nodeRef: v,
    onEnter: N,
    onEntered: k,
    onEntering: R,
    onExit: D,
    onExited: f,
    onExiting: A,
    addEndListener: I,
    timeout: E,
    ...S,
    children: (M, {
      ownerState: _,
      ...j
    }) => /* @__PURE__ */ w.cloneElement(c, {
      style: {
        opacity: 0,
        visibility: M === "exited" && !u ? "hidden" : void 0,
        ...Ag[M],
        ...x,
        ...c.props.style
      },
      ref: h,
      ...j
    })
  });
});
process.env.NODE_ENV !== "production" && (Qc.propTypes = {
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
  children: xr.isRequired,
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
function jg(e) {
  return Te("MuiBackdrop", e);
}
be("MuiBackdrop", ["root", "invisible"]);
const _g = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return Pe({
    root: ["root", r && "invisible"]
  }, jg, t);
}, Dg = te("div", {
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
}), el = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    ...p
  } = n, x = {
    ...n,
    component: a,
    invisible: c
  }, E = _g(x), P = {
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
  }, [h, O] = Se("root", {
    elementType: Dg,
    externalForwardedProps: v,
    className: ne(E.root, s),
    ownerState: x
  }), [R, N] = Se("transition", {
    elementType: Qc,
    externalForwardedProps: v,
    ownerState: x
  });
  return /* @__PURE__ */ C.jsx(R, {
    in: l,
    timeout: b,
    ...p,
    ...N,
    children: /* @__PURE__ */ C.jsx(h, {
      "aria-hidden": !0,
      ...O,
      classes: E,
      ref: r,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (el.propTypes = {
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
function Bg(e) {
  return typeof e == "function" ? e() : e;
}
function Fg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const fa = () => {
}, En = new Pg();
function zg(e) {
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
  } = e, m = w.useRef({}), y = w.useRef(null), g = w.useRef(null), b = Ke(g, d), [p, x] = w.useState(!u), E = Fg(c);
  let P = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (P = !1);
  const S = () => nt(y.current), v = () => (m.current.modalRef = g.current, m.current.mount = y.current, m.current), h = () => {
    En.mount(v(), {
      disableScrollLock: n
    }), g.current && (g.current.scrollTop = 0);
  }, O = kt(() => {
    const _ = Bg(t) || S().body;
    En.add(v(), _), g.current && h();
  }), R = () => En.isTopModal(v()), N = kt((_) => {
    y.current = _, _ && (u && R() ? h() : g.current && Lr(g.current, P));
  }), k = w.useCallback(() => {
    En.remove(v(), P);
  }, [P]);
  w.useEffect(() => () => {
    k();
  }, [k]), w.useEffect(() => {
    u ? O() : (!E || !i) && k();
  }, [u, k, E, i, O]);
  const A = (_) => (j) => {
    _.onKeyDown?.(j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !R()) && (r || (j.stopPropagation(), l && l(j, "escapeKeyDown")));
  }, D = (_) => (j) => {
    _.onClick?.(j), j.target === j.currentTarget && l && l(j, "backdropClick");
  };
  return {
    getRootProps: (_ = {}) => {
      const j = Bc(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const V = {
        ...j,
        ..._
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
        onKeyDown: A(V),
        ref: b
      };
    },
    getBackdropProps: (_ = {}) => {
      const j = _;
      return {
        "aria-hidden": !0,
        ...j,
        onClick: D(j),
        open: u
      };
    },
    getTransitionProps: () => {
      const _ = () => {
        x(!1), s && s();
      }, j = () => {
        x(!0), a && a(), i && k();
      };
      return {
        onEnter: Fo(_, c?.props.onEnter ?? fa),
        onExited: Fo(j, c?.props.onExited ?? fa)
      };
    },
    rootRef: b,
    portalRef: N,
    isTopModal: R,
    exited: p,
    hasTransition: E
  };
}
function Lg(e) {
  return Te("MuiModal", e);
}
be("MuiModal", ["root", "hidden", "backdrop"]);
const Vg = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return Pe({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, Lg, n);
}, Wg = te("div", {
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
}))), Ug = te(el, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), tl = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = Oe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Ug,
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
    disableEnforceFocus: p = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: E = !1,
    disableRestoreFocus: P = !1,
    disableScrollLock: S = !1,
    hideBackdrop: v = !1,
    keepMounted: h = !1,
    onClose: O,
    onTransitionEnter: R,
    onTransitionExited: N,
    open: k,
    slotProps: A = {},
    slots: D = {},
    // eslint-disable-next-line react/prop-types
    theme: f,
    ...I
  } = n, M = {
    ...n,
    closeAfterTransition: l,
    disableAutoFocus: b,
    disableEnforceFocus: p,
    disableEscapeKeyDown: x,
    disablePortal: E,
    disableRestoreFocus: P,
    disableScrollLock: S,
    hideBackdrop: v,
    keepMounted: h
  }, {
    getRootProps: _,
    getBackdropProps: j,
    getTransitionProps: V,
    portalRef: X,
    isTopModal: U,
    exited: T,
    hasTransition: B
  } = zg({
    ...M,
    rootRef: r
  }), z = {
    ...M,
    exited: T
  }, W = Vg(z), H = {};
  if (u.props.tabIndex === void 0 && (H.tabIndex = "-1"), B) {
    const {
      onEnter: q,
      onExited: Z
    } = V();
    H.onEnter = q, H.onExited = Z;
  }
  const L = {
    slots: {
      root: y.Root,
      backdrop: y.Backdrop,
      ...D
    },
    slotProps: {
      ...g,
      ...A
    }
  }, [Y, K] = Se("root", {
    ref: r,
    elementType: Wg,
    externalForwardedProps: {
      ...L,
      ...I,
      component: m
    },
    getSlotProps: _,
    ownerState: z,
    className: ne(c, W?.root, !z.open && z.exited && W?.hidden)
  }), [G, Q] = Se("backdrop", {
    ref: s?.ref,
    elementType: i,
    externalForwardedProps: L,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (q) => j({
      ...q,
      onClick: (Z) => {
        q?.onClick && q.onClick(Z);
      }
    }),
    className: ne(s?.className, W?.backdrop),
    ownerState: z
  });
  return !h && !k && (!B || T) ? null : /* @__PURE__ */ C.jsx(Zr, {
    ref: X,
    container: d,
    disablePortal: E,
    children: /* @__PURE__ */ C.jsxs(Y, {
      ...K,
      children: [!v && i ? /* @__PURE__ */ C.jsx(G, {
        ...Q
      }) : null, /* @__PURE__ */ C.jsx(Hn, {
        disableEnforceFocus: p,
        disableAutoFocus: b,
        disableRestoreFocus: P,
        isEnabled: U,
        open: k,
        children: /* @__PURE__ */ w.cloneElement(u, H)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (tl.propTypes = {
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
  children: xr.isRequired,
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
  container: o.oneOfType([Tt, o.func]),
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
function Hg(e) {
  return Te("MuiPaper", e);
}
be("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const qg = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: i
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return Pe(s, Hg, i);
}, Yg = te("div", {
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
}))), rl = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiPaper"
  }), i = on(), {
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
  }, y = qg(m);
  return process.env.NODE_ENV !== "production" && i.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ C.jsx(Yg, {
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
          "--Paper-overlay": `linear-gradient(${jn("#fff", Go(c))}, ${jn("#fff", Go(c))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (rl.propTypes = {
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
  elevation: It(Zc, (e) => {
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
function Gg(e) {
  return Te("MuiPopover", e);
}
be("MuiPopover", ["root", "paper"]);
function ma(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function ha(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function ga(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ar(e) {
  return typeof e == "function" ? e() : e;
}
const Kg = (e) => {
  const {
    classes: t
  } = e;
  return Pe({
    root: ["root"],
    paper: ["paper"]
  }, Gg, t);
}, Xg = te(tl, {
  name: "MuiPopover",
  slot: "Root"
})({}), nl = te(rl, {
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
}), ol = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    PaperProps: p = {},
    // TODO: remove in v7
    slots: x = {},
    slotProps: E = {},
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
    ...R
  } = n, N = w.useRef(), k = {
    ...n,
    anchorOrigin: a,
    anchorReference: l,
    elevation: y,
    marginThreshold: g,
    transformOrigin: P,
    TransitionComponent: S,
    transitionDuration: v,
    TransitionProps: h
  }, A = Kg(k), D = w.useCallback(() => {
    if (l === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (c || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), c;
    const q = Ar(s), Z = q && q.nodeType === 1 ? q : nt(N.current).body, $ = Z.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ie = Z.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ie.top === 0 && ie.left === 0 && ie.right === 0 && ie.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: $.top + ma($, a.vertical),
      left: $.left + ha($, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, c, l]), f = w.useCallback((q) => ({
    vertical: ma(q, P.vertical),
    horizontal: ha(q, P.horizontal)
  }), [P.horizontal, P.vertical]), I = w.useCallback((q) => {
    const Z = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, $ = f(Z);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ga($)
      };
    const ie = D();
    let se = ie.top - $.vertical, Ee = ie.left - $.horizontal;
    const Qe = se + Z.height, _e = Ee + Z.width, Ae = Xt(Ar(s)), xe = Ae.innerHeight - g, Me = Ae.innerWidth - g;
    if (g !== null && se < g) {
      const ve = se - g;
      se -= ve, $.vertical += ve;
    } else if (g !== null && Qe > xe) {
      const ve = Qe - xe;
      se -= ve, $.vertical += ve;
    }
    if (process.env.NODE_ENV !== "production" && Z.height > xe && Z.height && xe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${Z.height - xe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && Ee < g) {
      const ve = Ee - g;
      Ee -= ve, $.horizontal += ve;
    } else if (_e > Me) {
      const ve = _e - Me;
      Ee -= ve, $.horizontal += ve;
    }
    return {
      top: `${Math.round(se)}px`,
      left: `${Math.round(Ee)}px`,
      transformOrigin: ga($)
    };
  }, [s, l, D, f, g]), [M, _] = w.useState(b), j = w.useCallback(() => {
    const q = N.current;
    if (!q)
      return;
    const Z = I(q);
    Z.top !== null && q.style.setProperty("top", Z.top), Z.left !== null && (q.style.left = Z.left), q.style.transformOrigin = Z.transformOrigin, _(!0);
  }, [I]);
  w.useEffect(() => (O && window.addEventListener("scroll", j), () => window.removeEventListener("scroll", j)), [s, O, j]);
  const V = () => {
    j();
  }, X = () => {
    _(!1);
  };
  w.useEffect(() => {
    b && j();
  }), w.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      j();
    }
  } : null, [b, j]), w.useEffect(() => {
    if (!b)
      return;
    const q = Ff(() => {
      j();
    }), Z = Xt(Ar(s));
    return Z.addEventListener("resize", q), () => {
      q.clear(), Z.removeEventListener("resize", q);
    };
  }, [s, b, j]);
  let U = v;
  const T = {
    slots: {
      transition: S,
      ...x
    },
    slotProps: {
      transition: h,
      paper: p,
      ...E
    }
  }, [B, z] = Se("transition", {
    elementType: Kr,
    externalForwardedProps: T,
    ownerState: k,
    getSlotProps: (q) => ({
      ...q,
      onEntering: (Z, $) => {
        q.onEntering?.(Z, $), V();
      },
      onExited: (Z) => {
        q.onExited?.(Z), X();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  v === "auto" && !B.muiSupportAuto && (U = void 0);
  const W = m || (s ? nt(Ar(s)).body : void 0), [H, {
    slots: L,
    slotProps: Y,
    ...K
  }] = Se("root", {
    ref: r,
    elementType: Xg,
    externalForwardedProps: {
      ...T,
      ...R
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: Lf(typeof E.backdrop == "function" ? E.backdrop(k) : E.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: b
    },
    ownerState: k,
    className: ne(A.root, d)
  }), [G, Q] = Se("paper", {
    ref: N,
    className: A.paper,
    elementType: nl,
    externalForwardedProps: T,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: y,
      style: M ? void 0 : {
        opacity: 0
      }
    },
    ownerState: k
  });
  return /* @__PURE__ */ C.jsx(H, {
    ...K,
    ...!Tg(H) && {
      slots: L,
      slotProps: Y,
      disableScrollLock: O
    },
    children: /* @__PURE__ */ C.jsx(B, {
      ...z,
      timeout: U,
      children: /* @__PURE__ */ C.jsx(G, {
        ...Q,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ol.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: At,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: It(o.oneOfType([Tt, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Ar(e.anchorEl);
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
  container: o.oneOfType([Tt, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Zc,
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
    component: vc
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
function Jg(e) {
  return Te("MuiMenu", e);
}
be("MuiMenu", ["root", "paper", "list"]);
const Zg = {
  vertical: "top",
  horizontal: "right"
}, Qg = {
  vertical: "top",
  horizontal: "left"
}, ey = (e) => {
  const {
    classes: t
  } = e;
  return Pe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Jg, t);
}, ty = te(ol, {
  shouldForwardProp: (e) => er(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), ry = te(nl, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), ny = te(Kc, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), il = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
      ...p
    } = {},
    variant: x = "selectedMenu",
    slots: E = {},
    slotProps: P = {},
    ...S
  } = n, v = Oi(), h = {
    ...n,
    autoFocus: i,
    disableAutoFocusItem: c,
    MenuListProps: l,
    onEntering: b,
    PaperProps: m,
    transitionDuration: g,
    TransitionProps: p,
    variant: x
  }, O = ey(h), R = i && !c && d, N = w.useRef(null), k = (U, T) => {
    N.current && N.current.adjustStyleForScrollbar(U, {
      direction: v ? "rtl" : "ltr"
    }), b && b(U, T);
  }, A = (U) => {
    U.key === "Tab" && (U.preventDefault(), u && u(U, "tabKeyDown"));
  };
  let D = -1;
  w.Children.map(s, (U, T) => {
    /* @__PURE__ */ w.isValidElement(U) && (process.env.NODE_ENV !== "production" && pr.isFragment(U) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), U.props.disabled || (x === "selectedMenu" && U.props.selected || D === -1) && (D = T));
  });
  const f = {
    slots: E,
    slotProps: {
      list: l,
      transition: p,
      paper: m,
      ...P
    }
  }, I = Lc({
    elementType: E.root,
    externalSlotProps: P.root,
    ownerState: h,
    className: [O.root, a]
  }), [M, _] = Se("paper", {
    className: O.paper,
    elementType: ry,
    externalForwardedProps: f,
    shouldForwardComponentProp: !0,
    ownerState: h
  }), [j, V] = Se("list", {
    className: ne(O.list, l.className),
    elementType: ny,
    shouldForwardComponentProp: !0,
    externalForwardedProps: f,
    getSlotProps: (U) => ({
      ...U,
      onKeyDown: (T) => {
        A(T), U.onKeyDown?.(T);
      }
    }),
    ownerState: h
  }), X = typeof f.slotProps.transition == "function" ? f.slotProps.transition(h) : f.slotProps.transition;
  return /* @__PURE__ */ C.jsx(ty, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: v ? "right" : "left"
    },
    transformOrigin: v ? Zg : Qg,
    slots: {
      root: E.root,
      paper: M,
      backdrop: E.backdrop,
      ...E.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: E.transition
      }
    },
    slotProps: {
      root: I,
      paper: _,
      backdrop: typeof P.backdrop == "function" ? P.backdrop(h) : P.backdrop,
      transition: {
        ...X,
        onEntering: (...U) => {
          k(...U), X?.onEntering?.(...U);
        }
      }
    },
    open: d,
    ref: r,
    transitionDuration: g,
    ownerState: h,
    ...S,
    classes: y,
    children: /* @__PURE__ */ C.jsx(j, {
      actions: N,
      autoFocus: i && (D === -1 || c),
      autoFocusItem: R,
      variant: x,
      ...V,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (il.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Tt, o.func]),
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
const ya = be("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), ba = be("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function oy(e) {
  return Te("MuiTypography", e);
}
be("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const iy = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, sy = jf(), ay = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, e.align !== "inherit" && `align${J(t)}`, r && "gutterBottom", n && "noWrap", i && "paragraph"]
  };
  return Pe(c, oy, a);
}, cy = te("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${J(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
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
  })), ...Object.entries(e.palette).filter(ht()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${J(t)}`
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
}))), va = {
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
}, Gt = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const {
    color: n,
    ...i
  } = Oe({
    props: t,
    name: "MuiTypography"
  }), s = !iy[n], a = sy({
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
    variantMapping: b = va,
    ...p
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
  }, E = u || (y ? "p" : b[g] || va[g]) || "span", P = ay(x);
  return /* @__PURE__ */ C.jsx(cy, {
    as: E,
    ref: r,
    className: ne(P.root, l),
    ...p,
    ownerState: x,
    style: {
      ...c !== "inherit" && {
        "--Typography-textAlign": c
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Gt.propTypes = {
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
const xa = be("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function ly(e) {
  return Te("MuiMenuItem", e);
}
const $r = be("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), uy = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, dy = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: n,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, l = Pe({
    root: ["root", r && "dense", t && "disabled", !i && "gutters", n && "divider", s && "selected"]
  }, ly, a);
  return {
    ...a,
    ...l
  };
}, py = te(sn, {
  shouldForwardProp: (e) => er(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: uy
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
  [`&.${$r.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${$r.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${$r.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${$r.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${$r.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${ya.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ya.inset}`]: {
    marginLeft: 52
  },
  [`& .${xa.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${xa.inset}`]: {
    paddingLeft: 36
  },
  [`& .${ba.root}`]: {
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
      [`& .${ba.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), sl = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
  } = n, b = w.useContext(Un), p = w.useMemo(() => ({
    dense: a || b.dense || !1,
    disableGutters: l
  }), [b.dense, a, l]), x = w.useRef(null);
  St(() => {
    i && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const E = {
    ...n,
    dense: p.dense,
    divider: c,
    disableGutters: l
  }, P = dy(n), S = Ke(x, r);
  let v;
  return n.disabled || (v = m !== void 0 ? m : -1), /* @__PURE__ */ C.jsx(Un.Provider, {
    value: p,
    children: /* @__PURE__ */ C.jsx(py, {
      ref: S,
      role: d,
      tabIndex: v,
      component: s,
      focusVisibleClassName: ne(P.focusVisible, u),
      className: ne(P.root, y),
      ...g,
      ownerState: E,
      classes: P
    })
  });
});
process.env.NODE_ENV !== "production" && (sl.propTypes = {
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
function fy(e) {
  return Te("MuiIcon", e);
}
be("MuiIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const my = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, i = {
    root: ["root", t !== "inherit" && `color${J(t)}`, `fontSize${J(r)}`]
  };
  return Pe(i, fy, n);
}, hy = te("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${J(r.color)}`], t[`fontSize${J(r.fontSize)}`]];
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
  }, ...Object.entries(e.palette).filter(ht()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Vi = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
  }, m = my(d);
  return /* @__PURE__ */ C.jsx(hy, {
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
process.env.NODE_ENV !== "production" && (Vi.propTypes = {
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
Vi.muiName = "Icon";
const al = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
}), "Person"), gy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), "KeyboardArrowDown"), yy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), "KeyboardArrowUp");
function by(e) {
  return Te("MuiButton", e);
}
const Vt = be("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), cl = /* @__PURE__ */ w.createContext({});
process.env.NODE_ENV !== "production" && (cl.displayName = "ButtonGroupContext");
const ll = /* @__PURE__ */ w.createContext(void 0);
process.env.NODE_ENV !== "production" && (ll.displayName = "ButtonGroupButtonContext");
const vy = (e) => {
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
    root: ["root", a && "loading", s, `${s}${J(t)}`, `size${J(i)}`, `${s}Size${J(i)}`, `color${J(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${J(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${J(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${J(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = Pe(u, by, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, ul = [{
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
}], xy = te(sn, {
  shouldForwardProp: (e) => er(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${J(r.color)}`], t[`size${J(r.size)}`], t[`${r.variant}Size${J(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
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
    [`&.${Vt.disabled}`]: {
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
        [`&.${Vt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Vt.disabled}`]: {
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
        [`&.${Vt.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(ht()).map(([n]) => ({
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
        [`&.${Vt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Vt.disabled}`]: {
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
        [`&.${Vt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Sy = te("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${J(r.size)}`]];
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
  }, ...ul]
})), Ty = te("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${J(r.size)}`]];
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
  }, ...ul]
})), Ey = te("span", {
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
})), Sa = te("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), dl = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = w.useContext(cl), i = w.useContext(ll), s = qr(n, t), a = Oe({
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
    focusVisibleClassName: p,
    fullWidth: x = !1,
    id: E,
    loading: P = null,
    loadingIndicator: S,
    loadingPosition: v = "center",
    size: h = "medium",
    startIcon: O,
    type: R,
    variant: N = "text",
    ...k
  } = a, A = po(E), D = S ?? /* @__PURE__ */ C.jsx(Ii, {
    "aria-labelledby": A,
    color: "inherit",
    size: 16
  }), f = {
    ...a,
    color: l,
    component: u,
    disabled: m,
    disableElevation: y,
    disableFocusRipple: g,
    fullWidth: x,
    loading: P,
    loadingIndicator: D,
    loadingPosition: v,
    size: h,
    type: R,
    variant: N
  }, I = vy(f), M = (O || P && v === "start") && /* @__PURE__ */ C.jsx(Sy, {
    className: I.startIcon,
    ownerState: f,
    children: O || /* @__PURE__ */ C.jsx(Sa, {
      className: I.loadingIconPlaceholder,
      ownerState: f
    })
  }), _ = (b || P && v === "end") && /* @__PURE__ */ C.jsx(Ty, {
    className: I.endIcon,
    ownerState: f,
    children: b || /* @__PURE__ */ C.jsx(Sa, {
      className: I.loadingIconPlaceholder,
      ownerState: f
    })
  }), j = i || "", V = typeof P == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ C.jsx("span", {
      className: I.loadingWrapper,
      style: {
        display: "contents"
      },
      children: P && /* @__PURE__ */ C.jsx(Ey, {
        className: I.loadingIndicator,
        ownerState: f,
        children: D
      })
    })
  ) : null;
  return /* @__PURE__ */ C.jsxs(xy, {
    ownerState: f,
    className: ne(n.className, I.root, d, j),
    component: u,
    disabled: m || P,
    focusRipple: !g,
    focusVisibleClassName: ne(I.focusVisible, p),
    ref: r,
    type: R,
    id: P ? A : E,
    ...k,
    classes: I,
    children: [M, v !== "end" && V, c, v === "end" && V, _]
  });
});
process.env.NODE_ENV !== "production" && (dl.propTypes = {
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
var Do = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ta;
function wy() {
  return Ta || (Ta = 1, function(e) {
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
  }(Do)), Do.exports;
}
var Cy = wy();
const Zt = /* @__PURE__ */ Ra(Cy);
function pl(e) {
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
function ii({
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
  const d = pl(a), m = {
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
    dl,
    {
      className: Zt(
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
function jb({
  name: e,
  src: t,
  alt: r,
  menuItems: n = [],
  dropdownContent: i,
  onNavigate: s,
  size: a = "medium",
  variant: c = "circular",
  color: l = "default",
  className: u = "",
  badgeContent: d,
  badgeColor: m = "error",
  badgeVariant: y = "standard",
  hideGreeting: g = !1
}) {
  const [b, p] = Dr(null), x = !!b, E = n.length > 0 || !!i, P = (I) => {
    E && p(I.currentTarget);
  }, S = () => {
    p(null);
  }, v = (I) => {
    s?.(I), S();
  }, h = { small: 32, medium: 40, large: 48 }, O = {
    default: "var(--color-primary-lighten-01)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)"
  }, R = h[a] ?? 40, N = {
    width: R,
    height: R,
    bgcolor: O[l] ?? O.default,
    fontSize: R * 0.5
  }, k = g ? {
    // Estilo compacto (apenas avatar)
    padding: 0,
    minWidth: R + 8,
    minHeight: R + 8,
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      bgcolor: "transparent"
    }
  } : {
    // Estilo padrão (com saudação)
    p: "var(--spacing-scale-base)",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "var(--text-color-primary)",
    minHeight: R + 16,
    fontSize: a === "small" ? "0.875rem" : a === "large" ? "1.125rem" : "1rem"
  }, D = e ? ((I) => I.split(" ").map((M) => M[0]).join("").toUpperCase().slice(0, 2))(e) : /* @__PURE__ */ C.jsx(al, { fontSize: "inherit" }), f = d ? /* @__PURE__ */ C.jsx(
    Hc,
    {
      overlap: "circular",
      anchorOrigin: { vertical: "top", horizontal: "right" },
      badgeContent: d,
      color: m,
      variant: y,
      sx: {
        "& .MuiBadge-badge": {
          minWidth: y === "dot" ? 8 : 16,
          height: y === "dot" ? 8 : 16,
          fontSize: y === "dot" ? 0 : 10
        }
      },
      children: /* @__PURE__ */ C.jsx(ni, { src: t, alt: r || e, sx: N, variant: c, children: D })
    }
  ) : /* @__PURE__ */ C.jsx(ni, { src: t, alt: r || e, sx: N, variant: c, children: D });
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxs(
      ii,
      {
        className: u,
        onClick: P,
        "aria-controls": x ? "avatar-menu" : void 0,
        "aria-haspopup": E,
        "aria-expanded": x,
        sx: k,
        children: [
          f,
          !g && /* @__PURE__ */ C.jsxs("span", { children: [
            "Olá, ",
            /* @__PURE__ */ C.jsx("strong", { children: e || "Usuário" })
          ] }),
          E && (x ? /* @__PURE__ */ C.jsx(yy, {}) : /* @__PURE__ */ C.jsx(gy, {}))
        ]
      }
    ),
    /* @__PURE__ */ C.jsx(
      il,
      {
        id: "avatar-menu",
        anchorEl: b,
        open: x,
        onClose: S,
        slotProps: {
          list: { "aria-labelledby": "avatar-button" }
        },
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
        children: i || n.map((I) => /* @__PURE__ */ C.jsxs(sl, { onClick: () => I.href && v(I.href), children: [
          I.icon && /* @__PURE__ */ C.jsx(Vi, { sx: { mr: 1.5 }, children: I.icon }),
          I.label
        ] }, I.href))
      }
    )
  ] });
}
function _b({ items: e, onNavigate: t, className: r, ...n }) {
  const i = (s, a) => {
    s.preventDefault(), t(a);
  };
  return /* @__PURE__ */ C.jsx("nav", { className: Zt("br-breadcrumb", r), "aria-label": "Breadcrumb", ...n, children: /* @__PURE__ */ C.jsx("ul", { className: "crumb-list", children: e.map((s, a) => /* @__PURE__ */ C.jsx("li", { className: "crumb", children: s.href ? /* @__PURE__ */ C.jsx(
    "a",
    {
      className: "crumb-link",
      href: s.href,
      onClick: (c) => i(c, s.href),
      children: s.label
    }
  ) : /* @__PURE__ */ C.jsx("span", { className: "crumb-active", "aria-current": "page", children: s.label }) }, a)) }) });
}
function Oy({
  id: e,
  label: t,
  status: r,
  indeterminate: n = !1,
  hiddenLabel: i = !1,
  className: s,
  disabled: a,
  ...c
}) {
  const l = Ul(null);
  ar(() => {
    l.current && (l.current.indeterminate = n);
  }, [n]);
  const u = Zt(
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
const Vr = ef({
  createStyledComponent: te("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => Oe({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Vr.propTypes = {
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
var Py = (e) => e.type === "checkbox", jr = (e) => e instanceof Date, Wi = (e) => e == null;
const fl = (e) => typeof e == "object";
var Qt = (e) => !Wi(e) && !Array.isArray(e) && fl(e) && !jr(e), Ry = (e) => Qt(e) && e.target ? Py(e.target) ? e.target.checked : e.target.value : e, ky = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, $y = (e, t) => e.has(ky(t)), My = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Qt(t) && t.hasOwnProperty("isPrototypeOf");
}, Ny = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ml(e) {
  let t;
  const r = Array.isArray(e), n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(Ny && (e instanceof Blob || n)) && (r || Qt(e)))
    if (t = r ? [] : Object.create(Object.getPrototypeOf(e)), !r && !My(e))
      t = e;
    else
      for (const i in e)
        e.hasOwnProperty(i) && (t[i] = ml(e[i]));
  else
    return e;
  return t;
}
var hl = (e) => /^\w*$/.test(e), si = (e) => e === void 0, Iy = (e) => Array.isArray(e) ? e.filter(Boolean) : [], gl = (e) => Iy(e.replace(/["|']|\]/g, "").split(/\.|\[/)), He = (e, t, r) => {
  if (!t || !Qt(e))
    return r;
  const n = (hl(t) ? [t] : gl(t)).reduce((i, s) => Wi(i) ? i : i[s], e);
  return si(n) || n === e ? si(e[t]) ? r : e[t] : n;
}, Bo = (e) => typeof e == "boolean", Ea = (e, t, r) => {
  let n = -1;
  const i = hl(t) ? [t] : gl(t), s = i.length, a = s - 1;
  for (; ++n < s; ) {
    const c = i[n];
    let l = r;
    if (n !== a) {
      const u = e[c];
      l = Qt(u) || Array.isArray(u) ? u : isNaN(+i[n + 1]) ? {} : [];
    }
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return;
    e[c] = l, e = e[c];
  }
};
const wa = {
  BLUR: "blur",
  CHANGE: "change"
}, Ca = {
  all: "all"
}, yl = oe.createContext(null);
yl.displayName = "HookFormContext";
const Ui = () => oe.useContext(yl);
var Ay = (e, t, r, n = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(i, s, {
      get: () => {
        const a = s;
        return t._proxyFormState[a] !== Ca.all && (t._proxyFormState[a] = !n || Ca.all), r && (r[a] = !0), e[a];
      }
    });
  return i;
};
const bl = typeof window < "u" ? oe.useLayoutEffect : oe.useEffect;
function jy(e) {
  const t = Ui(), { control: r = t.control, disabled: n, name: i, exact: s } = e || {}, [a, c] = oe.useState(r._formState), l = oe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return bl(() => r._subscribe({
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
  }, [r]), oe.useMemo(() => Ay(a, r, l.current, !1), [a, r]);
}
var _y = (e) => typeof e == "string", Dy = (e, t, r, n, i) => _y(e) ? He(r, e, i) : Array.isArray(e) ? e.map((s) => He(r, s)) : r, Oa = (e) => Wi(e) || !fl(e);
function vl(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (Oa(e) || Oa(t))
    return e === t;
  if (jr(e) && jr(t))
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
      if (jr(a) && jr(c) || Qt(a) && Qt(c) || Array.isArray(a) && Array.isArray(c) ? !vl(a, c, r) : a !== c)
        return !1;
    }
  }
  return !0;
}
function By(e) {
  const t = Ui(), { control: r = t.control, name: n, defaultValue: i, disabled: s, exact: a, compute: c } = e || {}, l = oe.useRef(i), u = oe.useRef(c), d = oe.useRef(void 0);
  u.current = c;
  const m = oe.useMemo(() => r._getWatch(n, l.current), [r, n]), [y, g] = oe.useState(u.current ? u.current(m) : m);
  return bl(() => r._subscribe({
    name: n,
    formState: {
      values: !0
    },
    exact: a,
    callback: (b) => {
      if (!s) {
        const p = Dy(n, r._names, b.values || r._formValues, !1, l.current);
        if (u.current) {
          const x = u.current(p);
          vl(x, d.current) || (g(x), d.current = x);
        } else
          g(p);
      }
    }
  }), [r, s, n, a]), oe.useEffect(() => r._removeUnmounted()), y;
}
function Fy(e) {
  const t = Ui(), { name: r, disabled: n, control: i = t.control, shouldUnregister: s, defaultValue: a } = e, c = $y(i._names.array, r), l = oe.useMemo(() => He(i._formValues, r, He(i._defaultValues, r, a)), [i, r, a]), u = By({
    control: i,
    name: r,
    defaultValue: l,
    exact: !0
  }), d = jy({
    control: i,
    name: r,
    exact: !0
  }), m = oe.useRef(e), y = oe.useRef(i.register(r, {
    ...e.rules,
    value: u,
    ...Bo(e.disabled) ? { disabled: e.disabled } : {}
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
      value: Ry(P),
      name: r
    },
    type: wa.CHANGE
  }), [r]), p = oe.useCallback(() => y.current.onBlur({
    target: {
      value: He(i._formValues, r),
      name: r
    },
    type: wa.BLUR
  }), [r, i._formValues]), x = oe.useCallback((P) => {
    const S = He(i._fields, r);
    S && P && (S._f.ref = {
      focus: () => P.focus && P.focus(),
      select: () => P.select && P.select(),
      setCustomValidity: (v) => P.setCustomValidity(v),
      reportValidity: () => P.reportValidity()
    });
  }, [i._fields, r]), E = oe.useMemo(() => ({
    name: r,
    value: u,
    ...Bo(n) || d.disabled ? { disabled: d.disabled || n } : {},
    onChange: b,
    onBlur: p,
    ref: x
  }), [r, n, d.disabled, b, p, x, u]);
  return oe.useEffect(() => {
    const P = i._options.shouldUnregister || s;
    i.register(r, {
      ...m.current.rules,
      ...Bo(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const S = (v, h) => {
      const O = He(i._fields, v);
      O && O._f && (O._f.mount = h);
    };
    if (S(r, !0), P) {
      const v = ml(He(i._options.defaultValues, r));
      Ea(i._defaultValues, r, v), si(He(i._formValues, r)) && Ea(i._formValues, r, v);
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
    field: E,
    formState: d,
    fieldState: g
  }), [E, d, g]);
}
const xl = (e) => e.render(Fy(e)), zy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), Ly = De(/* @__PURE__ */ C.jsx("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), Vy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
}), "Lock"), Wy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), "Visibility"), Uy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), "VisibilityOff"), Sl = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"
}), "Error"), Hy = {
  None: null,
  Person: /* @__PURE__ */ C.jsx(al, {}),
  Search: /* @__PURE__ */ C.jsx(zy, {}),
  Email: /* @__PURE__ */ C.jsx(Ly, {}),
  Lock: /* @__PURE__ */ C.jsx(Vy, {}),
  Visibility: /* @__PURE__ */ C.jsx(Wy, {}),
  VisibilityOff: /* @__PURE__ */ C.jsx(Uy, {}),
  Error: /* @__PURE__ */ C.jsx(Sl, { fontSize: "small", style: { verticalAlign: "middle", marginRight: "4px" } })
};
function qy({
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
    xl,
    {
      name: e,
      control: t,
      rules: s,
      render: ({ field: a, fieldState: c }) => /* @__PURE__ */ C.jsxs(Vr, { children: [
        /* @__PURE__ */ C.jsx(
          Oy,
          {
            ...i,
            id: e,
            ...a,
            checked: !!a.value,
            status: c.error ? "invalid" : i.status
          }
        ),
        c.error && /* @__PURE__ */ C.jsxs("span", { className: Zt("feedback", "invalid"), role: "alert", children: [
          Hy.Error,
          c.error.message
        ] })
      ] })
    }
  );
}
qy.displayName = "GovBRFormCheckbox";
const Yy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}), "Info"), Gy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"
}), "Warning"), Tl = ({
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
  placeholder: p,
  ...x
}) => {
  const E = pl(), P = i ? `${i}-feedback` : void 0, S = r ? "danger" : t, v = {
    success: /* @__PURE__ */ C.jsx(bc, { fontSize: "small" }),
    danger: /* @__PURE__ */ C.jsx(Sl, { fontSize: "small" }),
    info: /* @__PURE__ */ C.jsx(Yy, { fontSize: "small" }),
    warning: /* @__PURE__ */ C.jsx(Gy, { fontSize: "small" })
  };
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: Zt(
        "br-input",
        e,
        S,
        E,
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
                placeholder: p,
                disabled: l,
                "aria-describedby": P,
                className: b,
                ...x
              }
            ),
            y && /* @__PURE__ */ C.jsx(ii, { circle: !0, onClick: g, children: y })
          ] }) })
        ] }) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          s && /* @__PURE__ */ C.jsx("label", { htmlFor: i, children: s }),
          /* @__PURE__ */ C.jsxs("div", { className: "input-group", children: [
            m && /* @__PURE__ */ C.jsx("div", { className: "input-icon", children: m }),
            /* @__PURE__ */ C.jsx(
              "input",
              {
                id: i,
                placeholder: p,
                disabled: l,
                "aria-describedby": P,
                className: b,
                ...x
              }
            ),
            y && /* @__PURE__ */ C.jsx(ii, { circle: !0, onClick: g, children: y })
          ] })
        ] }),
        (a || c) && /* @__PURE__ */ C.jsxs(
          "span",
          {
            className: Zt("feedback", S),
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
Tl.displayName = "GovBRInput";
function Db({
  name: e,
  control: t,
  rules: r,
  required: n,
  label: i,
  ...s
}) {
  return /* @__PURE__ */ C.jsx(
    xl,
    {
      name: e,
      control: t,
      rules: r,
      render: ({ field: a, fieldState: c }) => /* @__PURE__ */ C.jsx(
        Tl,
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
const El = /* @__PURE__ */ w.createContext(void 0);
process.env.NODE_ENV !== "production" && (El.displayName = "FormControlContext");
function Hi() {
  return w.useContext(El);
}
function Ky(e) {
  return Te("PrivateSwitchBase", e);
}
be("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Xy = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: n,
    edge: i
  } = e, s = {
    root: ["root", r && "checked", n && "disabled", i && `edge${J(i)}`],
    input: ["input"]
  };
  return Pe(s, Ky, t);
}, Jy = te(sn, {
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
}), Zy = te("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: er
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
}), qi = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    onBlur: p,
    onChange: x,
    onFocus: E,
    readOnly: P,
    required: S = !1,
    tabIndex: v,
    type: h,
    value: O,
    slots: R = {},
    slotProps: N = {},
    ...k
  } = t, [A, D] = yc({
    controlled: i,
    default: !!a,
    name: "SwitchBase",
    state: "checked"
  }), f = Hi(), I = (L) => {
    E && E(L), f && f.onFocus && f.onFocus(L);
  }, M = (L) => {
    p && p(L), f && f.onBlur && f.onBlur(L);
  }, _ = (L) => {
    if (L.nativeEvent.defaultPrevented)
      return;
    const Y = L.target.checked;
    D(Y), x && x(L, Y);
  };
  let j = c;
  f && typeof j > "u" && (j = f.disabled);
  const V = h === "checkbox" || h === "radio", X = {
    ...t,
    checked: A,
    disabled: j,
    disableFocusRipple: l,
    edge: u
  }, U = Xy(X), T = {
    slots: R,
    slotProps: {
      input: y,
      ...N
    }
  }, [B, z] = Se("root", {
    ref: r,
    elementType: Jy,
    className: U.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...T,
      component: "span",
      ...k
    },
    getSlotProps: (L) => ({
      ...L,
      onFocus: (Y) => {
        L.onFocus?.(Y), I(Y);
      },
      onBlur: (Y) => {
        L.onBlur?.(Y), M(Y);
      }
    }),
    ownerState: X,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !l,
      disabled: j,
      role: void 0,
      tabIndex: null
    }
  }), [W, H] = Se("input", {
    ref: g,
    elementType: Zy,
    className: U.input,
    externalForwardedProps: T,
    getSlotProps: (L) => ({
      ...L,
      onChange: (Y) => {
        L.onChange?.(Y), _(Y);
      }
    }),
    ownerState: X,
    additionalProps: {
      autoFocus: n,
      checked: i,
      defaultChecked: a,
      disabled: j,
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
  return /* @__PURE__ */ C.jsxs(B, {
    ...z,
    children: [/* @__PURE__ */ C.jsx(W, {
      ...H
    }), A ? s : d]
  });
});
process.env.NODE_ENV !== "production" && (qi.propTypes = {
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
  inputRef: At,
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
const Qy = De(/* @__PURE__ */ C.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), eb = De(/* @__PURE__ */ C.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), tb = te("span", {
  name: "MuiRadioButtonIcon",
  shouldForwardProp: er
})({
  position: "relative",
  display: "flex"
}), rb = te(Qy, {
  name: "MuiRadioButtonIcon"
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), nb = te(eb, {
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
function Yi(e) {
  const {
    checked: t = !1,
    classes: r = {},
    fontSize: n
  } = e, i = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ C.jsxs(tb, {
    className: r.root,
    ownerState: i,
    children: [/* @__PURE__ */ C.jsx(rb, {
      fontSize: n,
      className: r.background,
      ownerState: i
    }), /* @__PURE__ */ C.jsx(nb, {
      fontSize: n,
      className: r.dot,
      ownerState: i
    })]
  });
}
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
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
const wl = /* @__PURE__ */ w.createContext(void 0);
process.env.NODE_ENV !== "production" && (wl.displayName = "RadioGroupContext");
function ob() {
  return w.useContext(wl);
}
function ib(e) {
  return Te("MuiRadio", e);
}
const Pa = be("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), sb = (e) => {
  const {
    classes: t,
    color: r,
    size: n
  } = e, i = {
    root: ["root", `color${J(r)}`, n !== "medium" && `size${J(n)}`]
  };
  return {
    ...t,
    ...Pe(i, ib, t)
  };
}, ab = te(qi, {
  shouldForwardProp: (e) => er(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size !== "medium" && t[`size${J(r.size)}`], t[`color${J(r.color)}`]];
  }
})(Ce(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${Pa.disabled}`]: {
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
  }, ...Object.entries(e.palette).filter(ht()).map(([t]) => ({
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
  })), ...Object.entries(e.palette).filter(ht()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${Pa.checked}`]: {
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
function cb(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const lb = /* @__PURE__ */ C.jsx(Yi, {
  checked: !0
}), ub = /* @__PURE__ */ C.jsx(Yi, {}), Cl = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = Oe({
    props: t,
    name: "MuiRadio"
  }), {
    checked: i,
    checkedIcon: s = lb,
    color: a = "primary",
    icon: c = ub,
    name: l,
    onChange: u,
    size: d = "medium",
    className: m,
    disabled: y,
    disableRipple: g = !1,
    slots: b = {},
    slotProps: p = {},
    inputProps: x,
    ...E
  } = n, P = Hi();
  let S = y;
  P && typeof S > "u" && (S = P.disabled), S ??= !1;
  const v = {
    ...n,
    disabled: S,
    disableRipple: g,
    color: a,
    size: d
  }, h = sb(v), O = ob();
  let R = i;
  const N = Fo(u, O && O.onChange);
  let k = l;
  O && (typeof R > "u" && (R = cb(O.value, n.value)), typeof k > "u" && (k = O.name));
  const A = p.input ?? x, [D, f] = Se("root", {
    ref: r,
    elementType: ab,
    className: ne(h.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: b,
      slotProps: p,
      ...E
    },
    getSlotProps: (I) => ({
      ...I,
      onChange: (M, ..._) => {
        I.onChange?.(M, ..._), N(M, ..._);
      }
    }),
    ownerState: v,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ w.cloneElement(c, {
        fontSize: c.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ w.cloneElement(s, {
        fontSize: s.props.fontSize ?? d
      }),
      disabled: S,
      name: k,
      checked: R,
      slots: b,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof A == "function" ? A(v) : A
      }
    }
  });
  return /* @__PURE__ */ C.jsx(D, {
    ...f,
    classes: h
  });
});
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
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
  inputRef: At,
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
function db({
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
    Vr,
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
          Vr,
          {
            sx: {
              // Reset específico para container de labels
              margin: 0,
              padding: 0,
              gap: 0
            },
            children: [
              /* @__PURE__ */ C.jsx(
                Gt,
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
                Gt,
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
          Vr,
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
                Cl,
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
                Gt,
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
db.displayName = "GovBRRadio";
function pb({
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
  const u = Zt(
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
pb.displayName = "GovBRSignIn";
const fb = be("MuiBox", ["root"]), mb = fo(), Ol = cp({
  themeId: ft,
  defaultTheme: mb,
  defaultClassName: fb.root,
  generateClassName: ka.generate
});
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
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
function hb(e) {
  return Te("MuiFormControlLabel", e);
}
const _r = be("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function gb({
  props: e,
  states: t,
  muiFormControl: r
}) {
  return t.reduce((n, i) => (n[i] = e[i], r && typeof e[i] > "u" && (n[i] = r[i]), n), {});
}
const yb = (e) => {
  const {
    classes: t,
    disabled: r,
    labelPlacement: n,
    error: i,
    required: s
  } = e, a = {
    root: ["root", r && "disabled", `labelPlacement${J(n)}`, i && "error", s && "required"],
    label: ["label", r && "disabled"],
    asterisk: ["asterisk", i && "error"]
  };
  return Pe(a, hb, t);
}, bb = te("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${_r.label}`]: t.label
    }, t.root, t[`labelPlacement${J(r.labelPlacement)}`]];
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
  [`&.${_r.disabled}`]: {
    cursor: "default"
  },
  [`& .${_r.label}`]: {
    [`&.${_r.disabled}`]: {
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
}))), vb = te("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(Ce(({
  theme: e
}) => ({
  [`&.${_r.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Pl = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
    required: p,
    slots: x = {},
    slotProps: E = {},
    value: P,
    ...S
  } = n, v = Hi(), h = l ?? c.props.disabled ?? v?.disabled, O = p ?? c.props.required, R = {
    disabled: h,
    required: O
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((_) => {
    typeof c.props[_] > "u" && typeof n[_] < "u" && (R[_] = n[_]);
  });
  const N = gb({
    props: n,
    muiFormControl: v,
    states: ["error"]
  }), k = {
    ...n,
    disabled: h,
    labelPlacement: y,
    required: O,
    error: N.error
  }, A = yb(k), D = {
    slots: x,
    slotProps: {
      ...a,
      ...E
    }
  }, [f, I] = Se("typography", {
    elementType: Gt,
    externalForwardedProps: D,
    ownerState: k
  });
  let M = m;
  return M != null && M.type !== Gt && !u && (M = /* @__PURE__ */ C.jsx(f, {
    component: "span",
    ...I,
    className: ne(A.label, I?.className),
    children: M
  })), /* @__PURE__ */ C.jsxs(bb, {
    className: ne(A.root, s),
    ownerState: k,
    ref: r,
    ...S,
    children: [/* @__PURE__ */ w.cloneElement(c, R), O ? /* @__PURE__ */ C.jsxs("div", {
      children: [M, /* @__PURE__ */ C.jsxs(vb, {
        ownerState: k,
        "aria-hidden": !0,
        className: A.asterisk,
        children: [" ", "*"]
      })]
    }) : M]
  });
});
process.env.NODE_ENV !== "production" && (Pl.propTypes = {
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
  inputRef: At,
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
function xb(e) {
  return Te("MuiSwitch", e);
}
const Ve = be("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), Sb = (e) => {
  const {
    classes: t,
    edge: r,
    size: n,
    color: i,
    checked: s,
    disabled: a
  } = e, c = {
    root: ["root", r && `edge${J(r)}`, `size${J(n)}`],
    switchBase: ["switchBase", `color${J(i)}`, s && "checked", a && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, l = Pe(c, xb, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...l
  };
}, Tb = te("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.edge && t[`edge${J(r.edge)}`], t[`size${J(r.size)}`]];
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
}), Eb = te(qi, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.switchBase, {
      [`& .${Ve.input}`]: t.input
    }, r.color !== "default" && t[`color${J(r.color)}`]];
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
  variants: [...Object.entries(e.palette).filter(ht(["light"])).map(([t]) => ({
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
}))), wb = te("span", {
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
}))), Cb = te("span", {
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
}))), Rl = /* @__PURE__ */ w.forwardRef(function(t, r) {
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
  }, g = Sb(y), b = {
    slots: u,
    slotProps: d
  }, [p, x] = Se("root", {
    className: ne(g.root, i),
    elementType: Tb,
    externalForwardedProps: b,
    ownerState: y,
    additionalProps: {
      sx: l
    }
  }), [E, P] = Se("thumb", {
    className: g.thumb,
    elementType: Cb,
    externalForwardedProps: b,
    ownerState: y
  }), S = /* @__PURE__ */ C.jsx(E, {
    ...P
  }), [v, h] = Se("track", {
    className: g.track,
    elementType: wb,
    externalForwardedProps: b,
    ownerState: y
  });
  return /* @__PURE__ */ C.jsxs(p, {
    ...x,
    children: [/* @__PURE__ */ C.jsx(Eb, {
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
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
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
  inputRef: At,
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
const Ob = {
  small: { width: 40, height: 24, thumb: 16, translateX: 16 },
  medium: { width: 52, height: 30, thumb: 22, translateX: 22 },
  large: { width: 64, height: 36, thumb: 28, translateX: 28 }
}, Bb = ({
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
  const { width: m, height: y, thumb: g, translateX: b } = Ob[i], p = s === "top", x = s === "start", E = e ? a : c;
  return /* @__PURE__ */ C.jsxs(
    Ol,
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
          Pl,
          {
            label: r,
            labelPlacement: s,
            control: /* @__PURE__ */ C.jsx(
              Rl,
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
              alignItems: p ? "flex-start" : "center",
              flexDirection: p ? "column" : x ? "row-reverse" : "row",
              gap: p ? "4px" : "8px",
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
        E && /* @__PURE__ */ C.jsx(
          Gt,
          {
            sx: {
              color: l ? "#1351b4" : "#333333",
              fontFamily: 'Rawline, "Open Sans", sans-serif',
              // cspell:disable-line
              fontSize: "16px",
              marginTop: "18px"
            },
            children: E
          }
        )
      ]
    }
  );
};
let ai = fo({
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
ai = tg(ai);
const ci = typeof gc({}) == "function", Pb = (e, t) => ({
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
}), Rb = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), kl = (e, t = !1) => {
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
    html: Pb(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...Rb(e),
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
}, Mn = "mui-ecs", kb = (e) => {
  const t = kl(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${Mn})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, i]) => {
    const s = e.getColorSchemeSelector(n);
    s.startsWith("@") ? r[s] = {
      [`:root:not(:has(.${Mn}))`]: {
        colorScheme: i.palette?.mode
      }
    } : r[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Mn}))`]: {
        colorScheme: i.palette?.mode
      }
    };
  }), t;
}, $b = gc(ci ? ({
  theme: e,
  enableColorScheme: t
}) => kl(e, t) : ({
  theme: e
}) => kb(e));
function $l(e) {
  const t = Oe({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ C.jsxs(w.Fragment, {
    children: [ci && /* @__PURE__ */ C.jsx($b, {
      enableColorScheme: n
    }), !ci && !n && /* @__PURE__ */ C.jsx("span", {
      className: Mn,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && ($l.propTypes = {
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
const Mb = Hl({
  mode: "theme",
  toggle: () => {
  }
});
function Fb({ children: e }) {
  const [t, r] = Dr("theme"), n = ql(
    () => ({
      mode: t,
      toggle: () => r((i) => i === "theme" ? "css" : "theme")
    }),
    [t]
  );
  return /* @__PURE__ */ C.jsx(Mb.Provider, { value: n, children: /* @__PURE__ */ C.jsxs(ig, { theme: ai, children: [
    /* @__PURE__ */ C.jsx($l, {}),
    e
  ] }) });
}
export {
  Ab as AutoSyncButton,
  jb as GovBRAvatar,
  _b as GovBRBreadcrumb,
  ii as GovBRButton,
  Oy as GovBRCheckbox,
  qy as GovBRFormCheckbox,
  Db as GovBRFormInput,
  Tl as GovBRInput,
  db as GovBRRadio,
  pb as GovBRSignIn,
  Bb as GovBRSwitch,
  Fb as GovBRThemeProvider,
  ai as govbrTheme,
  Hy as iconMap,
  pl as mapMuiColorToGovbrClass,
  Ob as sizeMap
};
