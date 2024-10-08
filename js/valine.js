/*!
 * Valine v1.5.1
 * (c) 2017-2022 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2022-7-21 3:43:59 ├F10: PM┤
 * Modify by HCLonely
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Valine = t())
    : (e.Valine = t());
})(this, function () {
  return (
    (n = [
      function (e, t, n) {
        "use strict";
        var f = SyntaxError,
          r = Function,
          d = TypeError,
          o = function (e) {
            try {
              return r('"use strict"; return (' + e + ").constructor;")();
            } catch (e) {}
          },
          h = Object.getOwnPropertyDescriptor;
        if (h)
          try {
            h({}, "");
          } catch (e) {
            h = null;
          }
        function i() {
          throw new d();
        }
        function g(e) {
          var t, n;
          return (
            "%AsyncFunction%" === e
              ? (t = o("async function () {}"))
              : "%GeneratorFunction%" === e
              ? (t = o("function* () {}"))
              : "%AsyncGeneratorFunction%" === e
              ? (t = o("async function* () {}"))
              : "%AsyncGenerator%" === e
              ? (n = g("%AsyncGeneratorFunction%")) && (t = n.prototype)
              : "%AsyncIteratorPrototype%" === e &&
                (n = g("%AsyncGenerator%")) &&
                (t = s(n.prototype)),
            (m[e] = t)
          );
        }
        var a = h
            ? (function () {
                try {
                  return i;
                } catch (e) {
                  try {
                    return h(arguments, "callee").get;
                  } catch (e) {
                    return i;
                  }
                }
              })()
            : i,
          u = n(22)(),
          s =
            Object.getPrototypeOf ||
            function (e) {
              return e.__proto__;
            },
          v = {},
          l = "undefined" == typeof Uint8Array ? void 0 : s(Uint8Array),
          m = {
            "%AggregateError%":
              "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%":
              "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": u ? s([][Symbol.iterator]()) : void 0,
            "%AsyncFromSyncIteratorPrototype%": void 0,
            "%AsyncFunction%": v,
            "%AsyncGenerator%": v,
            "%AsyncGeneratorFunction%": v,
            "%AsyncIteratorPrototype%": v,
            "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%":
              "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "%Float64Array%":
              "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "%FinalizationRegistry%":
              "undefined" == typeof FinalizationRegistry
                ? void 0
                : FinalizationRegistry,
            "%Function%": r,
            "%GeneratorFunction%": v,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int16Array%":
              "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int32Array%":
              "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": u ? s(s([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%":
              "undefined" != typeof Map && u
                ? s(new Map()[Symbol.iterator]())
                : void 0,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? void 0 : Set,
            "%SetIteratorPrototype%":
              "undefined" != typeof Set && u
                ? s(new Set()[Symbol.iterator]())
                : void 0,
            "%SharedArrayBuffer%":
              "undefined" == typeof SharedArrayBuffer
                ? void 0
                : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": u ? s(""[Symbol.iterator]()) : void 0,
            "%Symbol%": u ? Symbol : void 0,
            "%SyntaxError%": f,
            "%ThrowTypeError%": a,
            "%TypedArray%": l,
            "%TypeError%": d,
            "%Uint8Array%":
              "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "%Uint8ClampedArray%":
              "undefined" == typeof Uint8ClampedArray
                ? void 0
                : Uint8ClampedArray,
            "%Uint16Array%":
              "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "%Uint32Array%":
              "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
          },
          y = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": [
              "AsyncGeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": [
              "GeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"],
          },
          u = n(9),
          b = n(25),
          D = u.call(Function.call, Array.prototype.concat),
          w = u.call(Function.apply, Array.prototype.splice),
          x = u.call(Function.call, String.prototype.replace),
          A = u.call(Function.call, String.prototype.slice),
          k =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          E = /\\(\\)?/g;
        e.exports = function (e, t) {
          if ("string" != typeof e || 0 === e.length)
            throw new d("intrinsic name must be a non-empty string");
          if (1 < arguments.length && "boolean" != typeof t)
            throw new d('"allowMissing" argument must be a boolean');
          var n = (function (e) {
              var t = A(e, 0, 1),
                n = A(e, -1);
              if ("%" === t && "%" !== n)
                throw new f("invalid intrinsic syntax, expected closing `%`");
              if ("%" === n && "%" !== t)
                throw new f("invalid intrinsic syntax, expected opening `%`");
              var o = [];
              return (
                x(e, k, function (e, t, n, r) {
                  o[o.length] = n ? x(r, E, "$1") : t || e;
                }),
                o
              );
            })(e),
            r = 0 < n.length ? n[0] : "",
            o = (function (e, t) {
              var n,
                r = e;
              if ((b(y, r) && (r = "%" + (n = y[r])[0] + "%"), b(m, r))) {
                var o = m[r];
                if (void 0 !== (o = o === v ? g(r) : o) || t)
                  return { alias: n, name: r, value: o };
                throw new d(
                  "intrinsic " +
                    e +
                    " exists, but is not available. Please file an issue!"
                );
              }
              throw new f("intrinsic " + e + " does not exist!");
            })("%" + r + "%", t),
            i = (o.name, o.value),
            a = !1,
            o = o.alias;
          o && ((r = o[0]), w(n, D([0, 1], o)));
          for (var u = 1, s = !0; u < n.length; u += 1) {
            var l = n[u],
              c = A(l, 0, 1),
              p = A(l, -1);
            if (
              ('"' === c ||
                "'" === c ||
                "`" === c ||
                '"' === p ||
                "'" === p ||
                "`" === p) &&
              c !== p
            )
              throw new f(
                "property names with quotes must have matching quotes"
              );
            if (
              (("constructor" !== l && s) || (a = !0),
              b(m, (c = "%" + (r += "." + l) + "%")))
            )
              i = m[c];
            else if (null != i) {
              if (!(l in i)) {
                if (t) return;
                throw new d(
                  "base intrinsic for " +
                    e +
                    " exists, but the property is not available."
                );
              }
              (i =
                h && u + 1 >= n.length
                  ? (s = !!(p = h(i, l))) &&
                    "get" in p &&
                    !("originalValue" in p.get)
                    ? p.get
                    : i[l]
                  : ((s = b(i, l)), i[l])),
                s && !a && (m[c] = i);
            }
          }
          return i;
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(0),
          o = n(4),
          i = o(r("String.prototype.indexOf"));
        e.exports = function (e, t) {
          t = r(e, !!t);
          return "function" == typeof t && -1 < i(e, ".prototype.") ? o(t) : t;
        };
      },
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          var n = 2 < arguments.length ? arguments[2] : {},
            r = l(t);
          c && (r = p.call(r, Object.getOwnPropertySymbols(t)));
          for (var o, i, a, u, s = 0; s < r.length; s += 1)
            (o = e),
              (i = r[s]),
              (a = t[r[s]]),
              (u = n[r[s]]),
              (i in o && (!d(u) || !u())) ||
                (h
                  ? f(o, i, {
                      configurable: !0,
                      enumerable: !1,
                      value: a,
                      writable: !0,
                    })
                  : (o[i] = a));
        }
        var l = n(88),
          c = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
          o = Object.prototype.toString,
          p = Array.prototype.concat,
          f = Object.defineProperty,
          d = function (e) {
            return "function" == typeof e && "[object Function]" === o.call(e);
          },
          h =
            f &&
            (function () {
              var e = {};
              try {
                for (var t in (f(e, "x", { enumerable: !1, value: e }), e))
                  return !1;
                return e.x === e;
              } catch (e) {
                return !1;
              }
            })();
        (r.supportsDescriptors = !!h), (e.exports = r);
      },
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var o,
          i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          a = r(n(85)),
          u = r(n(49)),
          s = r(n(46)),
          l = r(n(48)),
          n = r(n(45)),
          c = document,
          p = navigator,
          f = /[&<>"'`\\]/g,
          d = RegExp(f.source),
          h = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
          g = RegExp(h.source),
          v = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#x60;",
            "\\": "&#x5c;",
          },
          m = {};
        for (o in v) m[v[o]] = o;
        var y = null;
        Array.prototype.forEach ||
          (Array.prototype.forEach = function (e, t) {
            var n, r;
            if (null == this)
              throw new TypeError(" this is null or not defined");
            var o,
              i = Object(this),
              a = i.length >>> 0;
            if ("function" != typeof e)
              throw new TypeError(e + " is not a function");
            for (1 < arguments.length && (n = t), r = 0; r < a; )
              r in i && ((o = i[r]), e.call(n, o, r, i)), r++;
          }),
          window.NodeList &&
            !NodeList.prototype.forEach &&
            (NodeList.prototype.forEach = Array.prototype.forEach),
          String.prototype.trim ||
            (String.prototype.trim = function () {
              return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            }),
          (0, a.default)(u.default.fn, {
            prepend: function (t) {
              return (
                t instanceof HTMLElement || (t = t[0]),
                this.forEach(function (e) {
                  e.insertAdjacentElement("afterBegin", t);
                }),
                this
              );
            },
            append: function (t) {
              return (
                t instanceof HTMLElement || (t = t[0]),
                this.forEach(function (e) {
                  e.insertAdjacentElement("beforeEnd", t);
                }),
                this
              );
            },
            remove: function () {
              return (
                this.forEach(function (e) {
                  try {
                    e.parentNode.removeChild(e);
                  } catch (e) {}
                }),
                this
              );
            },
            find: function (e) {
              return (0, u.default)(e, this);
            },
            show: function () {
              return (
                this.forEach(function (e) {
                  e.style.display = "block";
                }),
                this
              );
            },
            hide: function () {
              return (
                this.forEach(function (e) {
                  e.style.display = "none";
                }),
                this
              );
            },
            on: function (e, n, r) {
              return (
                u.default.fn.off(e, n, r),
                this.forEach(function (t) {
                  e.split(" ").forEach(function (e) {
                    t.addEventListener
                      ? t.addEventListener(e, n, r || !1)
                      : t.attachEvent
                      ? t.attachEvent("on" + e, n)
                      : (t["on" + e] = n);
                  });
                }),
                this
              );
            },
            off: function (e, n, r) {
              return (
                this.forEach(function (t) {
                  e.split(" ").forEach(function (e) {
                    t.removeEventListener
                      ? t.removeEventListener(e, n, r || !1)
                      : t.detachEvent
                      ? t.detachEvent("on" + e, n)
                      : (t["on" + e] = null);
                  });
                }),
                this
              );
            },
            html: function (t) {
              return void 0 !== t
                ? (this.forEach(function (e) {
                    e.innerHTML = t;
                  }),
                  this)
                : this[0].innerHTML;
            },
            text: function (t) {
              return void 0 !== t
                ? (this.forEach(function (e) {
                    e.innerText = t;
                  }),
                  this)
                : this[0].innerText;
            },
            empty: function (e) {
              return (
                (e = e || 0),
                this.forEach(function (t) {
                  setTimeout(function (e) {
                    t.innerText = "";
                  }, e);
                }),
                this
              );
            },
            val: function (t) {
              return void 0 !== t
                ? (this.forEach(function (e) {
                    e.value = t;
                  }),
                  this)
                : this[0].value || "";
            },
            attr: function () {
              var n,
                e,
                t = arguments;
              return "object" == i(arguments[0])
                ? ((n = arguments[0]),
                  (e = this),
                  Object.keys(n).forEach(function (t) {
                    e.forEach(function (e) {
                      e.setAttribute(t, n[t]);
                    });
                  }),
                  this)
                : "string" == typeof arguments[0] && arguments.length < 2
                ? this[0].getAttribute(arguments[0]) || ""
                : (this.forEach(function (e) {
                    e.setAttribute(t[0], t[1]);
                  }),
                  this);
            },
            removeAttr: function (o) {
              return (
                this.forEach(function (e) {
                  var t,
                    n = 0,
                    r = o && o.match(/[^\x20\t\r\n\f\*\/\\]+/g);
                  if (r && 1 === e.nodeType)
                    for (; (t = r[n++]); ) e.removeAttribute(t);
                }),
                this
              );
            },
            hasClass: function (e) {
              return (
                !!this[0] &&
                new RegExp("(\\s|^)" + e + "(\\s|$)").test(
                  this[0].getAttribute("class")
                )
              );
            },
            addClass: function (n) {
              return (
                this.forEach(function (e) {
                  var e = (0, u.default)(e),
                    t = e.attr("class");
                  e.hasClass(n) || e.attr("class", (t += " " + n));
                }),
                this
              );
            },
            removeClass: function (r) {
              return (
                this.forEach(function (e) {
                  var t,
                    e = (0, u.default)(e),
                    n = e.attr("class");
                  e.hasClass(r) &&
                    ((t = new RegExp("(\\s|^)" + r + "(\\s|$)")),
                    e.attr("class", n.replace(t, "")));
                }),
                this
              );
            },
          }),
          (0, a.default)(u.default, {
            extend: a.default,
            noop: function () {},
            navi: p,
            ua: p.userAgent,
            lang: p.language || p.languages[0],
            detect: s.default,
            store: l.default,
            escape: function (e) {
              return e && d.test(e)
                ? e.replace(f, function (e) {
                    return v[e];
                  })
                : e;
            },
            unescape: function (e) {
              return e && g.test(e)
                ? e.replace(h, function (e) {
                    return m[e];
                  })
                : e;
            },
            dynamicLoadSource: function (e, t) {
              var n;
              (0, u.default)('script[src="' + e + '"]').length
                ? t && t()
                : (((n = c.createElement("script")).onload =
                    n.onreadystatechange =
                      function () {
                        (this.onload = this.onreadystatechange = null),
                          t && t(),
                          (0, u.default)(n).remove();
                      }),
                  (n.async = !0),
                  n.setAttribute("referrerPolicy", "no-referrer"),
                  (0, u.default)("head")[0].appendChild(n),
                  (n.src = e));
            },
            sdkLoader: function (e, t, n) {
              t in window && window[t]
                ? (y && clearTimeout(y), n && n())
                : u.default.dynamicLoadSource(e, function () {
                    y = setTimeout(u.default.sdkLoader(e, t, n), 100);
                  });
            },
            deleteInWin: function (t, e) {
              function n(e) {
                if (t in window)
                  try {
                    delete window[t];
                  } catch (e) {
                    window[t] = null;
                  }
              }
              0 === e ? n() : setTimeout(n, e || 500);
            },
            ajax: n.default,
          }),
          (t.default = u.default);
      },
      function (e, t, n) {
        "use strict";
        var r = n(9),
          n = n(0),
          o = n("%Function.prototype.apply%"),
          i = n("%Function.prototype.call%"),
          a = n("%Reflect.apply%", !0) || r.call(i, o),
          u = n("%Object.getOwnPropertyDescriptor%", !0),
          s = n("%Object.defineProperty%", !0),
          l = n("%Math.max%");
        if (s)
          try {
            s({}, "a", { value: 1 });
          } catch (e) {
            s = null;
          }
        e.exports = function (e) {
          var t = a(r, i, arguments);
          return (
            u &&
              s &&
              u(t, "length").configurable &&
              s(t, "length", {
                value: 1 + l(0, e.length - (arguments.length - 1)),
              }),
            t
          );
        };
        function c() {
          return a(r, o, arguments);
        }
        s ? s(e.exports, "apply", { value: c }) : (e.exports.apply = c);
      },
      function (e, t, n) {
        "use strict";
        e.exports = n(62);
      },
      function (e, t, n) {
        "use strict";
        (t.__esModule = !0),
          (t.DEFAULT_EMOJI_CDN =
            "//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/"),
          (t.DB_NAME = "Comment"),
          (t.CONFIG = {
            lang: "zh-CN",
            langMode: null,
            appId: "",
            appKey: "",
            clazzName: "Comment",
            master: [],
            friends: [],
            tagMeta: ["\u535a\u4e3b", "\u5c0f\u4f19\u4f34", "\u8bbf\u5ba2"],
            metaPlaceholder: {
              nick: "\u6635\u79f0/QQ\u53f7(\u5fc5\u586b)",
              mail: "\u90ae\u7bb1(\u5fc5\u586b)",
              link: "\u7f51\u5740(https://)",
            },
            meta: ["nick", "mail", "link"],
            path: location.pathname,
            placeholder: "Just Go Go",
            pageSize: 10,
            recordIP: !0,
            serverURLs: "",
            visitor: !1,
            mathJax: !1,
            emojiCDN: "",
            emojiMaps: void 0,
            enableQQ: !1,
            requiredFields: [],
          }),
          (t.defaultMeta = ["nick", "mail", "link"]),
          (t.QQCacheKey = "_v_Cache_Q"),
          (t.MetaCacheKey = "_v_Cache_Meta"),
          (t.RandomStr = function (e) {
            return (Date.now() + Math.round(1e3 * Math.random())).toString(32);
          }),
          (t.VERSION = "1.5.1");
      },
      function (e, t, n) {
        var r,
          o = n(16),
          i = n(50);
        for (r in (((t = e.exports =
          function (e, t) {
            return new i(t).process(e);
          }).FilterCSS = i),
        o))
          t[r] = o[r];
        "undefined" != typeof window && (window.filterCSS = e.exports);
      },
      function (e, t, n) {
        "use strict";
        var r = n(66);
        e.exports = function (e) {
          return "symbol" == typeof e
            ? "Symbol"
            : "bigint" == typeof e
            ? "BigInt"
            : r(e);
        };
      },
      function (e, t, n) {
        "use strict";
        n = n(78);
        e.exports = Function.prototype.bind || n;
      },
      function (e, t, n) {
        "use strict";
        var r,
          o,
          i = Function.prototype.toString,
          a = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
        if (
          "function" == typeof a &&
          "function" == typeof Object.defineProperty
        )
          try {
            (r = Object.defineProperty({}, "length", {
              get: function () {
                throw o;
              },
            })),
              (o = {}),
              a(
                function () {
                  throw 42;
                },
                null,
                r
              );
          } catch (e) {
            e !== o && (a = null);
          }
        else a = null;
        function u(e) {
          try {
            var t = i.call(e);
            return s.test(t);
          } catch (e) {
            return;
          }
        }
        var s = /^\s*class\b/,
          l = Object.prototype.toString,
          c = "function" == typeof Symbol && !!Symbol.toStringTag,
          p =
            "object" == typeof document &&
            void 0 === document.all &&
            void 0 !== document.all
              ? document.all
              : {};
        e.exports = a
          ? function (e) {
              if (e === p) return !0;
              if (!e) return !1;
              if ("function" != typeof e && "object" != typeof e) return !1;
              if ("function" == typeof e && !e.prototype) return !0;
              try {
                a(e, null, r);
              } catch (e) {
                if (e !== o) return !1;
              }
              return !u(e);
            }
          : function (e) {
              if (e === p) return !0;
              if (!e) return !1;
              if ("function" != typeof e && "object" != typeof e) return !1;
              if ("function" == typeof e && !e.prototype) return !0;
              if (!c) {
                if (u(e)) return !1;
                var t = l.call(e);
                return (
                  "[object Function]" === t ||
                  "[object GeneratorFunction]" === t
                );
              }
              var n = e;
              try {
                return !u(n) && (i.call(n), !0);
              } catch (n) {
                return !1;
              }
            };
      },
      function (e, t) {
        e.exports = {
          indexOf: function (e, t) {
            var n, r;
            if (Array.prototype.indexOf) return e.indexOf(t);
            for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          },
          forEach: function (e, t, n) {
            var r, o;
            if (Array.prototype.forEach) return e.forEach(t, n);
            for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
          },
          trim: function (e) {
            return String.prototype.trim
              ? e.trim()
              : e.replace(/(^\s*)|(\s*$)/g, "");
          },
          spaceIndex: function (e) {
            e = /\s|\n|\t/.exec(e);
            return e ? e.index : -1;
          },
        };
      },
      function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var o = {
          cdn: n(6).DEFAULT_EMOJI_CDN,
          maps: n(97),
          parse: function (e, n) {
            return String(e).replace(
              new RegExp(":(" + Object.keys(o.maps).join("|") + "):", "ig"),
              function (e, t) {
                return o.maps[t] ? o.build(t, n) : e;
              }
            );
          },
          build: function (e, t) {
            var n = /^(https?:)?\/\//i,
              r = o.maps[e],
              r = n.test(r) ? r : o.cdn + r,
              e =
                ' <img alt="' +
                e +
                '" referrerpolicy="no-referrer" class="vemoji" src="' +
                r +
                '" />';
            return n.test(r) ? e : "";
          },
        };
        t.default = o;
      },
      function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var n = n(95),
          i = n && n.__esModule ? n : { default: n },
          o =
            ((t.default = function (e) {
              return (0, i.default)(e, {
                onTagAttr: function (e, t, n, r) {
                  return o(e, t, n, r);
                },
                onIgnoreTagAttr: function (e, t, n, r) {
                  return o(e, t, n, r);
                },
              }).replace(/\<\/?div\>/gi, "");
            }),
            function (e, t, n, r) {
              if (/video|audio/i.test(e)) return "";
              if (/code|pre|span/i.test(e)) {
                var o;
                if ("style" == t)
                  return (o = n.match(
                    /color:([#a-z0-9]{3,7}|\s+[#a-z0-9]{3,8})/gi
                  )) && o.length
                    ? 'style="' + o[0] + '"'
                    : "";
                if ("class" == t)
                  return t + "='" + i.default.escapeAttrValue(n) + "'";
              }
              return "a" === e && "class" == t && "at" === n
                ? t + "='" + i.default.escapeAttrValue(n) + "'"
                : "img" === e && /src|class/i.test(t)
                ? t +
                  "='" +
                  i.default.escapeAttrValue(n) +
                  "' referrerPolicy='no-referrer'"
                : void 0;
            });
      },
      function (e, t, n) {
        "use strict";
        var r = n(0),
          o = n(1),
          u = r("%TypeError%"),
          s = n(52),
          l = n(18),
          c = n(53),
          p = n(55),
          f = n(56),
          d = n(60),
          h = n(20),
          g = n(81),
          v = o("String.prototype.split"),
          r = Object("a"),
          m = "a" !== r[0] || !(0 in r);
        e.exports = function (e) {
          var t,
            n = d(this),
            r = m && g(this) ? v(this, "") : n,
            o = f(r);
          if (!p(e))
            throw new u("Array.prototype.forEach callback must be a function");
          1 < arguments.length && (t = arguments[1]);
          for (var i = 0; i < o; ) {
            var a = h(i);
            c(r, a) && ((a = l(r, a)), s(e, t, [a, i, r])), (i += 1);
          }
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(75),
          o = n(14);
        e.exports = function () {
          var e = Array.prototype.forEach;
          return r(e) ? e : o;
        };
      },
      function (e, t) {
        function n() {
          var e = {
            "align-content": !1,
            "align-items": !1,
            "align-self": !1,
            "alignment-adjust": !1,
            "alignment-baseline": !1,
            all: !1,
            "anchor-point": !1,
            animation: !1,
            "animation-delay": !1,
            "animation-direction": !1,
            "animation-duration": !1,
            "animation-fill-mode": !1,
            "animation-iteration-count": !1,
            "animation-name": !1,
            "animation-play-state": !1,
            "animation-timing-function": !1,
            azimuth: !1,
            "backface-visibility": !1,
            background: !0,
            "background-attachment": !0,
            "background-clip": !0,
            "background-color": !0,
            "background-image": !0,
            "background-origin": !0,
            "background-position": !0,
            "background-repeat": !0,
            "background-size": !0,
            "baseline-shift": !1,
            binding: !1,
            bleed: !1,
            "bookmark-label": !1,
            "bookmark-level": !1,
            "bookmark-state": !1,
            border: !0,
            "border-bottom": !0,
            "border-bottom-color": !0,
            "border-bottom-left-radius": !0,
            "border-bottom-right-radius": !0,
            "border-bottom-style": !0,
            "border-bottom-width": !0,
            "border-collapse": !0,
            "border-color": !0,
            "border-image": !0,
            "border-image-outset": !0,
            "border-image-repeat": !0,
            "border-image-slice": !0,
            "border-image-source": !0,
            "border-image-width": !0,
            "border-left": !0,
            "border-left-color": !0,
            "border-left-style": !0,
            "border-left-width": !0,
            "border-radius": !0,
            "border-right": !0,
            "border-right-color": !0,
            "border-right-style": !0,
            "border-right-width": !0,
            "border-spacing": !0,
            "border-style": !0,
            "border-top": !0,
            "border-top-color": !0,
            "border-top-left-radius": !0,
            "border-top-right-radius": !0,
            "border-top-style": !0,
            "border-top-width": !0,
            "border-width": !0,
            bottom: !1,
            "box-decoration-break": !0,
            "box-shadow": !0,
            "box-sizing": !0,
            "box-snap": !0,
            "box-suppress": !0,
            "break-after": !0,
            "break-before": !0,
            "break-inside": !0,
            "caption-side": !1,
            chains: !1,
            clear: !0,
            clip: !1,
            "clip-path": !1,
            "clip-rule": !1,
            color: !0,
            "color-interpolation-filters": !0,
            "column-count": !1,
            "column-fill": !1,
            "column-gap": !1,
            "column-rule": !1,
            "column-rule-color": !1,
            "column-rule-style": !1,
            "column-rule-width": !1,
            "column-span": !1,
            "column-width": !1,
            columns: !1,
            contain: !1,
            content: !1,
            "counter-increment": !1,
            "counter-reset": !1,
            "counter-set": !1,
            crop: !1,
            cue: !1,
            "cue-after": !1,
            "cue-before": !1,
            cursor: !1,
            direction: !1,
            display: !0,
            "display-inside": !0,
            "display-list": !0,
            "display-outside": !0,
            "dominant-baseline": !1,
            elevation: !1,
            "empty-cells": !1,
            filter: !1,
            flex: !1,
            "flex-basis": !1,
            "flex-direction": !1,
            "flex-flow": !1,
            "flex-grow": !1,
            "flex-shrink": !1,
            "flex-wrap": !1,
            float: !1,
            "float-offset": !1,
            "flood-color": !1,
            "flood-opacity": !1,
            "flow-from": !1,
            "flow-into": !1,
            font: !0,
            "font-family": !0,
            "font-feature-settings": !0,
            "font-kerning": !0,
            "font-language-override": !0,
            "font-size": !0,
            "font-size-adjust": !0,
            "font-stretch": !0,
            "font-style": !0,
            "font-synthesis": !0,
            "font-variant": !0,
            "font-variant-alternates": !0,
            "font-variant-caps": !0,
            "font-variant-east-asian": !0,
            "font-variant-ligatures": !0,
            "font-variant-numeric": !0,
            "font-variant-position": !0,
            "font-weight": !0,
            grid: !1,
            "grid-area": !1,
            "grid-auto-columns": !1,
            "grid-auto-flow": !1,
            "grid-auto-rows": !1,
            "grid-column": !1,
            "grid-column-end": !1,
            "grid-column-start": !1,
            "grid-row": !1,
            "grid-row-end": !1,
            "grid-row-start": !1,
            "grid-template": !1,
            "grid-template-areas": !1,
            "grid-template-columns": !1,
            "grid-template-rows": !1,
            "hanging-punctuation": !1,
            height: !0,
            hyphens: !1,
            icon: !1,
            "image-orientation": !1,
            "image-resolution": !1,
            "ime-mode": !1,
            "initial-letters": !1,
            "inline-box-align": !1,
            "justify-content": !1,
            "justify-items": !1,
            "justify-self": !1,
            left: !1,
            "letter-spacing": !0,
            "lighting-color": !0,
            "line-box-contain": !1,
            "line-break": !1,
            "line-grid": !1,
            "line-height": !1,
            "line-snap": !1,
            "line-stacking": !1,
            "line-stacking-ruby": !1,
            "line-stacking-shift": !1,
            "line-stacking-strategy": !1,
            "list-style": !0,
            "list-style-image": !0,
            "list-style-position": !0,
            "list-style-type": !0,
            margin: !0,
            "margin-bottom": !0,
            "margin-left": !0,
            "margin-right": !0,
            "margin-top": !0,
            "marker-offset": !1,
            "marker-side": !1,
            marks: !1,
            mask: !1,
            "mask-box": !1,
            "mask-box-outset": !1,
            "mask-box-repeat": !1,
            "mask-box-slice": !1,
            "mask-box-source": !1,
            "mask-box-width": !1,
            "mask-clip": !1,
            "mask-image": !1,
            "mask-origin": !1,
            "mask-position": !1,
            "mask-repeat": !1,
            "mask-size": !1,
            "mask-source-type": !1,
            "mask-type": !1,
            "max-height": !0,
            "max-lines": !1,
            "max-width": !0,
            "min-height": !0,
            "min-width": !0,
            "move-to": !1,
            "nav-down": !1,
            "nav-index": !1,
            "nav-left": !1,
            "nav-right": !1,
            "nav-up": !1,
            "object-fit": !1,
            "object-position": !1,
            opacity: !1,
            order: !1,
            orphans: !1,
            outline: !1,
            "outline-color": !1,
            "outline-offset": !1,
            "outline-style": !1,
            "outline-width": !1,
            overflow: !1,
            "overflow-wrap": !1,
            "overflow-x": !1,
            "overflow-y": !1,
            padding: !0,
            "padding-bottom": !0,
            "padding-left": !0,
            "padding-right": !0,
            "padding-top": !0,
            page: !1,
            "page-break-after": !1,
            "page-break-before": !1,
            "page-break-inside": !1,
            "page-policy": !1,
            pause: !1,
            "pause-after": !1,
            "pause-before": !1,
            perspective: !1,
            "perspective-origin": !1,
            pitch: !1,
            "pitch-range": !1,
            "play-during": !1,
            position: !1,
            "presentation-level": !1,
            quotes: !1,
            "region-fragment": !1,
            resize: !1,
            rest: !1,
            "rest-after": !1,
            "rest-before": !1,
            richness: !1,
            right: !1,
            rotation: !1,
            "rotation-point": !1,
            "ruby-align": !1,
            "ruby-merge": !1,
            "ruby-position": !1,
            "shape-image-threshold": !1,
            "shape-outside": !1,
            "shape-margin": !1,
            size: !1,
            speak: !1,
            "speak-as": !1,
            "speak-header": !1,
            "speak-numeral": !1,
            "speak-punctuation": !1,
            "speech-rate": !1,
            stress: !1,
            "string-set": !1,
            "tab-size": !1,
            "table-layout": !1,
            "text-align": !0,
            "text-align-last": !0,
            "text-combine-upright": !0,
            "text-decoration": !0,
            "text-decoration-color": !0,
            "text-decoration-line": !0,
            "text-decoration-skip": !0,
            "text-decoration-style": !0,
            "text-emphasis": !0,
            "text-emphasis-color": !0,
            "text-emphasis-position": !0,
            "text-emphasis-style": !0,
            "text-height": !0,
            "text-indent": !0,
            "text-justify": !0,
            "text-orientation": !0,
            "text-overflow": !0,
            "text-shadow": !0,
            "text-space-collapse": !0,
            "text-transform": !0,
            "text-underline-position": !0,
            "text-wrap": !0,
            top: !1,
            transform: !1,
            "transform-origin": !1,
            "transform-style": !1,
            transition: !1,
            "transition-delay": !1,
            "transition-duration": !1,
            "transition-property": !1,
            "transition-timing-function": !1,
            "unicode-bidi": !1,
            "vertical-align": !1,
            visibility: !1,
            "voice-balance": !1,
            "voice-duration": !1,
            "voice-family": !1,
            "voice-pitch": !1,
            "voice-range": !1,
            "voice-rate": !1,
            "voice-stress": !1,
            "voice-volume": !1,
            volume: !1,
            "white-space": !1,
            widows: !1,
            width: !0,
            "will-change": !1,
            "word-break": !0,
            "word-spacing": !0,
            "word-wrap": !0,
            "wrap-flow": !1,
            "wrap-through": !1,
            "writing-mode": !1,
            "z-index": !1,
          };
          return e;
        }
        var r = /javascript\s*\:/gim;
        (t.whiteList = n()),
          (t.getDefaultWhiteList = n),
          (t.onAttr = function (e, t, n) {}),
          (t.onIgnoreAttr = function (e, t, n) {}),
          (t.safeAttrValue = function (e, t) {
            return r.test(t) ? "" : t;
          });
      },
      function (e, t) {
        e.exports = {
          indexOf: function (e, t) {
            var n, r;
            if (Array.prototype.indexOf) return e.indexOf(t);
            for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          },
          forEach: function (e, t, n) {
            var r, o;
            if (Array.prototype.forEach) return e.forEach(t, n);
            for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
          },
          trim: function (e) {
            return String.prototype.trim
              ? e.trim()
              : e.replace(/(^\s*)|(\s*$)/g, "");
          },
          trimRight: function (e) {
            return String.prototype.trimRight
              ? e.trimRight()
              : e.replace(/(\s*$)/g, "");
          },
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(0)("%TypeError%"),
          o = n(86),
          i = n(19),
          a = n(8);
        e.exports = function (e, t) {
          if ("Object" !== a(e))
            throw new r("Assertion failed: Type(O) is not Object");
          if (i(t)) return e[t];
          throw new r(
            "Assertion failed: IsPropertyKey(P) is not true, got " + o(t)
          );
        };
      },
      function (e, t, n) {
        "use strict";
        e.exports = function (e) {
          return "string" == typeof e || "symbol" == typeof e;
        };
      },
      function (e, t, n) {
        "use strict";
        var n = n(0),
          r = n("%String%"),
          o = n("%TypeError%");
        e.exports = function (e) {
          if ("symbol" == typeof e)
            throw new o("Cannot convert a Symbol value to a string");
          return r(e);
        };
      },
      function (e, t, n) {
        "use strict";
        e.exports = function (e) {
          return null === e || ("function" != typeof e && "object" != typeof e);
        };
      },
      function (e, t, n) {
        "use strict";
        var r = "undefined" != typeof Symbol && Symbol,
          o = n(23);
        e.exports = function () {
          return (
            "function" == typeof r &&
            "function" == typeof Symbol &&
            "symbol" == typeof r("foo") &&
            "symbol" == typeof Symbol("bar") &&
            o()
          );
        };
      },
      function (e, t, n) {
        "use strict";
        e.exports = function () {
          if (
            "function" != typeof Symbol ||
            "function" != typeof Object.getOwnPropertySymbols
          )
            return !1;
          if ("symbol" == typeof Symbol.iterator) return !0;
          var e = {},
            t = Symbol("test"),
            n = Object(t);
          if ("string" == typeof t) return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(t))
            return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(n))
            return !1;
          for (t in ((e[t] = 42), e)) return !1;
          if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
            return !1;
          if (
            "function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(e).length
          )
            return !1;
          n = Object.getOwnPropertySymbols(e);
          if (1 !== n.length || n[0] !== t) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            n = Object.getOwnPropertyDescriptor(e, t);
            if (42 !== n.value || !0 !== n.enumerable) return !1;
          }
          return !0;
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(23);
        e.exports = function () {
          return r() && !!Symbol.toStringTag;
        };
      },
      function (e, t, n) {
        "use strict";
        n = n(9);
        e.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
      },
      function (e, t, n) {
        "use strict";
        var r = Object.prototype.toString;
        e.exports = function (e) {
          var t = r.call(e);
          return (
            "[object Arguments]" === t ||
            ("[object Array]" !== t &&
              null !== e &&
              "object" == typeof e &&
              "number" == typeof e.length &&
              0 <= e.length &&
              "[object Function]" === r.call(e.callee))
          );
        };
      },
      function (e, t, n) {
        "use strict";
        var o = n(5),
          n = n(1),
          i = n("Object.prototype.propertyIsEnumerable"),
          a = n("Array.prototype.push");
        e.exports = function (e) {
          var t,
            n = o(e),
            r = [];
          for (t in n) i(n, t) && a(r, [t, n[t]]);
          return r;
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(27);
        e.exports = function () {
          return "function" == typeof Object.entries ? Object.entries : r;
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(5),
          o = n(20),
          i = n(1)("String.prototype.replace"),
          a =
            /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
          u =
            /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
        e.exports = function () {
          var e = o(r(this));
          return i(i(e, a, ""), u, "");
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(29);
        e.exports = function () {
          return String.prototype.trim && "\u200b" === "\u200b".trim()
            ? String.prototype.trim
            : r;
        };
      },
      function (e, t, n) {
        function r() {
          return {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: [
              "autoplay",
              "controls",
              "crossorigin",
              "loop",
              "muted",
              "preload",
              "src",
            ],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            figcaption: [],
            figure: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            summary: [],
            sup: [],
            strong: [],
            strike: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: [
              "autoplay",
              "controls",
              "crossorigin",
              "loop",
              "muted",
              "playsinline",
              "poster",
              "preload",
              "src",
              "height",
              "width",
            ],
          };
        }
        function o(e) {
          return e.replace(v, "&lt;").replace(m, "&gt;");
        }
        function i(e) {
          return e.replace(y, "&quot;");
        }
        function a(e) {
          return e.replace(b, '"');
        }
        function u(e) {
          return e.replace(D, function (e, t) {
            return "x" === t[0] || "X" === t[0]
              ? String.fromCharCode(parseInt(t.substr(1), 16))
              : String.fromCharCode(parseInt(t, 10));
          });
        }
        function s(e) {
          return e.replace(w, ":").replace(x, " ");
        }
        function l(e) {
          for (var t = "", n = 0, r = e.length; n < r; n++)
            t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
          return h.trim(t);
        }
        function c(e) {
          return l((e = s((e = u((e = a(e)))))));
        }
        function p(e) {
          return o((e = i(e)));
        }
        var f = n(7).FilterCSS,
          d = n(7).getDefaultWhiteList,
          h = n(11),
          g = new f(),
          v = /</g,
          m = />/g,
          y = /"/g,
          b = /&quot;/g,
          D = /&#([a-zA-Z0-9]*);?/gim,
          w = /&colon;?/gim,
          x = /&newline;?/gim,
          A =
            /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
          k = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
          E = /u\s*r\s*l\s*\(.*/gi;
        (t.whiteList = r()),
          (t.getDefaultWhiteList = r),
          (t.onTag = function (e, t, n) {}),
          (t.onIgnoreTag = function (e, t, n) {}),
          (t.onTagAttr = function (e, t, n) {}),
          (t.onIgnoreTagAttr = function (e, t, n) {}),
          (t.safeAttrValue = function (e, t, n, r) {
            if (((n = c(n)), "href" === t || "src" === t)) {
              if ("#" === (n = h.trim(n))) return "#";
              if (
                "http://" !== n.substr(0, 7) &&
                "https://" !== n.substr(0, 8) &&
                "mailto:" !== n.substr(0, 7) &&
                "tel:" !== n.substr(0, 4) &&
                "data:image/" !== n.substr(0, 11) &&
                "ftp://" !== n.substr(0, 6) &&
                "./" !== n.substr(0, 2) &&
                "../" !== n.substr(0, 3) &&
                "#" !== n[0] &&
                "/" !== n[0]
              )
                return "";
            } else if ("background" === t) {
              if (((A.lastIndex = 0), A.test(n))) return "";
            } else if ("style" === t) {
              if (((k.lastIndex = 0), k.test(n))) return "";
              if (
                ((E.lastIndex = 0), E.test(n) && ((A.lastIndex = 0), A.test(n)))
              )
                return "";
              !1 !== r && (n = (r = r || g).process(n));
            }
            return p(n);
          }),
          (t.escapeHtml = o),
          (t.escapeQuote = i),
          (t.unescapeQuote = a),
          (t.escapeHtmlEntities = u),
          (t.escapeDangerHtml5Entities = s),
          (t.clearNonPrintableCharacter = l),
          (t.friendlyAttrValue = c),
          (t.escapeAttrValue = p),
          (t.onIgnoreTagStripAll = function () {
            return "";
          }),
          (t.StripTagBody = function (i, a) {
            "function" != typeof a && (a = function () {});
            var u = !Array.isArray(i),
              s = [],
              l = !1;
            return {
              onIgnoreTag: function (e, t, n) {
                var r, o;
                return (
                  (o = e),
                  u || -1 !== h.indexOf(i, o)
                    ? n.isClosing
                      ? ((r = n.position + (o = "[/removed]").length),
                        s.push([!1 !== l ? l : n.position, r]),
                        (l = !1),
                        o)
                      : ((l = l || n.position), "[removed]")
                    : a(e, t, n)
                );
              },
              remove: function (t) {
                var n = "",
                  r = 0;
                return (
                  h.forEach(s, function (e) {
                    (n += t.slice(r, e[0])), (r = e[1]);
                  }),
                  (n += t.slice(r))
                );
              },
            };
          }),
          (t.stripCommentTag = function (e) {
            for (var t = "", n = 0; n < e.length; ) {
              var r = e.indexOf("\x3c!--", n);
              if (-1 === r) {
                t += e.slice(n);
                break;
              }
              t += e.slice(n, r);
              r = e.indexOf("--\x3e", r);
              if (-1 === r) break;
              n = r + 3;
            }
            return t;
          }),
          (t.stripBlankChar = function (e) {
            return e
              .split("")
              .filter(function (e) {
                e = e.charCodeAt(0);
                return !(127 === e || (e <= 31 && 10 !== e && 13 !== e));
              })
              .join("");
          }),
          (t.cssFilter = g),
          (t.getDefaultCSSWhiteList = d);
      },
      function (e, t, n) {
        function h(e) {
          var t = d.spaceIndex(e);
          return (
            (e = -1 === t ? e.slice(1, -1) : e.slice(1, t + 1)),
            (e =
              "/" ===
              (e =
                "/" === (e = d.trim(e).toLowerCase()).slice(0, 1)
                  ? e.slice(1)
                  : e).slice(-1)
                ? e.slice(0, -1)
                : e)
          );
        }
        function g(e) {
          return "</" === e.slice(0, 2);
        }
        function c(e, t) {
          for (; t < e.length; t++) {
            var n = e[t];
            if (" " !== n) return "=" === n ? t : -1;
          }
        }
        function p(e, t) {
          for (; 0 < t; t--) {
            var n = e[t];
            if (" " !== n) return "=" === n ? t : -1;
          }
        }
        function f(e) {
          return ('"' === (t = e)[0] && '"' === t[t.length - 1]) ||
            ("'" === t[0] && "'" === t[t.length - 1])
            ? e.substr(1, e.length - 2)
            : e;
          var t;
        }
        var d = n(11),
          v = /[^a-zA-Z0-9_:\.\-]/gim;
        (t.parseTag = function (e, t, n) {
          "use strict";
          var r,
            o,
            i = "",
            a = 0,
            u = !1,
            s = !1,
            l = 0,
            c = e.length;
          e: for (l = 0; l < c; l++) {
            var p = e.charAt(l);
            if (!1 === u) "<" === p && (u = l);
            else if (!1 === s) {
              if ("<" === p) (i += n(e.slice(a, l))), (a = u = l);
              else if (">" === p)
                (i += n(e.slice(a, u))),
                  (r = h((o = e.slice(u, l + 1)))),
                  (i += t(u, i.length, r, o, g(o))),
                  (a = l + 1),
                  (u = !1);
              else if ('"' === p || "'" === p)
                for (
                  var f = 1, d = e.charAt(l - f);
                  "" === d.trim() || "=" === d;

                ) {
                  if ("=" === d) {
                    s = p;
                    continue e;
                  }
                  d = e.charAt(l - ++f);
                }
            } else if (p === s) {
              s = !1;
              continue;
            }
          }
          return a < e.length && (i += n(e.substr(a))), i;
        }),
          (t.parseAttr = function (e, n) {
            "use strict";
            function t(e, t) {
              (e = (e = d.trim(e)).replace(v, "").toLowerCase()).length < 1 ||
                ((e = n(e, t || "")) && o.push(e));
            }
            for (var r = 0, o = [], i = !1, a = e.length, u = 0; u < a; u++) {
              var s,
                l = e.charAt(u);
              if (!1 !== i || "=" !== l)
                if (
                  !1 === i ||
                  u !== r ||
                  ('"' !== l && "'" !== l) ||
                  "=" !== e.charAt(u - 1)
                )
                  /\s|\n|\t/.test(l) &&
                    ((e = e.replace(/\s|\n|\t/g, " ")),
                    !1 === i
                      ? -1 === (s = c(e, u))
                        ? (t(d.trim(e.slice(r, u))), (i = !1), (r = u + 1))
                        : (u = s - 1)
                      : -1 === (s = p(e, u - 1)) &&
                        (t(i, f(d.trim(e.slice(r, u)))),
                        (i = !1),
                        (r = u + 1)));
                else {
                  if (-1 === (s = e.indexOf(l, u + 1))) break;
                  t(i, d.trim(e.slice(r + 1, s))), (i = !1), (r = (u = s) + 1);
                }
              else (i = e.slice(r, u)), (r = u + 1);
            }
            return (
              r < e.length &&
                (!1 === i ? t(e.slice(r)) : t(i, f(d.trim(e.slice(r))))),
              d.trim(o.join(" "))
            );
          });
      },
      function (e, t, n) {
        var r;
        /*!
        autosize 4.0.4
        license: MIT
        http://www.jacklmoore.com/autosize
    */ void 0 !==
          (t =
            "function" ==
            typeof (r = function (e, t) {
              "use strict";
              function n(o) {
                function i(e) {
                  var t = o.style.width;
                  (o.style.width = "0px"),
                    o.offsetWidth,
                    (o.style.width = t),
                    (o.style.overflowY = e);
                }
                function n(e) {
                  for (
                    var t = [];
                    e && e.parentNode && e.parentNode instanceof Element;

                  )
                    e.parentNode.scrollTop &&
                      t.push({
                        node: e.parentNode,
                        scrollTop: e.parentNode.scrollTop,
                      }),
                      (e = e.parentNode);
                  return t;
                }
                function a() {
                  if (0 !== o.scrollHeight) {
                    var e = n(o),
                      t =
                        document.documentElement &&
                        document.documentElement.scrollTop;
                    (o.style.height = ""),
                      (o.style.height = o.scrollHeight + u + "px"),
                      (s = o.clientWidth),
                      e.forEach(function (e) {
                        e.node.scrollTop = e.scrollTop;
                      }),
                      t && (document.documentElement.scrollTop = t);
                  }
                }
                function r() {
                  a();
                  var e = Math.round(parseFloat(o.style.height)),
                    t = window.getComputedStyle(o, null),
                    n =
                      "content-box" === t.boxSizing
                        ? Math.round(parseFloat(t.height))
                        : o.offsetHeight;
                  if (
                    (n < e
                      ? "hidden" === t.overflowY &&
                        (i("scroll"),
                        a(),
                        (n =
                          "content-box" === t.boxSizing
                            ? Math.round(
                                parseFloat(
                                  window.getComputedStyle(o, null).height
                                )
                              )
                            : o.offsetHeight))
                      : "hidden" !== t.overflowY &&
                        (i("hidden"),
                        a(),
                        (n =
                          "content-box" === t.boxSizing
                            ? Math.round(
                                parseFloat(
                                  window.getComputedStyle(o, null).height
                                )
                              )
                            : o.offsetHeight)),
                    l !== n)
                  ) {
                    l = n;
                    var r = f("autosize:resized");
                    try {
                      o.dispatchEvent(r);
                    } catch (e) {}
                  }
                }
                if (o && o.nodeName && "TEXTAREA" === o.nodeName && !p.has(o)) {
                  var u = null,
                    s = null,
                    l = null,
                    e = function () {
                      o.clientWidth !== s && r();
                    },
                    c = function (t) {
                      window.removeEventListener("resize", e, !1),
                        o.removeEventListener("input", r, !1),
                        o.removeEventListener("keyup", r, !1),
                        o.removeEventListener("autosize:destroy", c, !1),
                        o.removeEventListener("autosize:update", r, !1),
                        Object.keys(t).forEach(function (e) {
                          o.style[e] = t[e];
                        }),
                        p.delete(o);
                    }.bind(o, {
                      height: o.style.height,
                      resize: o.style.resize,
                      overflowY: o.style.overflowY,
                      overflowX: o.style.overflowX,
                      wordWrap: o.style.wordWrap,
                    });
                  o.addEventListener("autosize:destroy", c, !1),
                    "onpropertychange" in o &&
                      "oninput" in o &&
                      o.addEventListener("keyup", r, !1),
                    window.addEventListener("resize", e, !1),
                    o.addEventListener("input", r, !1),
                    o.addEventListener("autosize:update", r, !1),
                    (o.style.overflowX = "hidden"),
                    (o.style.wordWrap = "break-word"),
                    p.set(o, { destroy: c, update: r }),
                    (function () {
                      var e = window.getComputedStyle(o, null);
                      "vertical" === e.resize
                        ? (o.style.resize = "none")
                        : "both" === e.resize &&
                          (o.style.resize = "horizontal"),
                        (u =
                          "content-box" === e.boxSizing
                            ? -(
                                parseFloat(e.paddingTop) +
                                parseFloat(e.paddingBottom)
                              )
                            : parseFloat(e.borderTopWidth) +
                              parseFloat(e.borderBottomWidth)),
                        isNaN(u) && (u = 0),
                        r();
                    })();
                }
              }
              function r(e) {
                var t = p.get(e);
                t && t.destroy();
              }
              function o(e) {
                var t = p.get(e);
                t && t.update();
              }
              var p =
                  "function" == typeof Map
                    ? new Map()
                    : (function () {
                        var n = [],
                          r = [];
                        return {
                          has: function (e) {
                            return n.indexOf(e) > -1;
                          },
                          get: function (e) {
                            return r[n.indexOf(e)];
                          },
                          set: function (e, t) {
                            -1 === n.indexOf(e) && (n.push(e), r.push(t));
                          },
                          delete: function (e) {
                            var t = n.indexOf(e);
                            t > -1 && (n.splice(t, 1), r.splice(t, 1));
                          },
                        };
                      })(),
                f = function (e) {
                  return new Event(e, { bubbles: !0 });
                };
              try {
                new Event("test");
              } catch (e) {
                f = function (e) {
                  var t = document.createEvent("Event");
                  return t.initEvent(e, !0, !1), t;
                };
              }
              var i = null;
              "undefined" == typeof window ||
              "function" != typeof window.getComputedStyle
                ? (((i = function (e) {
                    return e;
                  }).destroy = function (e) {
                    return e;
                  }),
                  (i.update = function (e) {
                    return e;
                  }))
                : (((i = function (e, t) {
                    return (
                      e &&
                        Array.prototype.forEach.call(
                          e.length ? e : [e],
                          function (e) {
                            return n(e);
                          }
                        ),
                      e
                    );
                  }).destroy = function (e) {
                    return (
                      e && Array.prototype.forEach.call(e.length ? e : [e], r),
                      e
                    );
                  }),
                  (i.update = function (e) {
                    return (
                      e && Array.prototype.forEach.call(e.length ? e : [e], o),
                      e
                    );
                  })),
                (t.default = i),
                (e.exports = t.default);
            })
              ? r.apply(t, [e, t])
              : r) && (e.exports = t);
      },
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e) {
          return e && this.init(e), this;
        }
        function i(e) {
          return new o(e);
        }
        function l(e, t) {
          var e = new e(),
            n = new AV.ACL();
          n.setPublicReadAccess(!0),
            n.setPublicWriteAccess(!0),
            e.setACL(n),
            e.set("url", t.url),
            e.set("xid", t.xid),
            e.set("title", t.title),
            e.set("time", 1),
            e
              .save()
              .then(function (e) {
                (0, L.default)(t.el).find(".leancloud-visitors-count").text(1);
              })
              .catch(function (e) {});
        }
        var j = r(n(42)),
          T = r(n(33)),
          a = r(n(37)),
          z = r(n(12)),
          I = n(6),
          R = r(n(41)),
          b = r(n(36)),
          P = n(40),
          M = r(n(38)),
          L = r(n(3)),
          N = r(n(39)),
          U = r(n(13)),
          Q =
            (r(n(35)),
            {
              comment: "",
              nick: "",
              mail: "",
              link: "",
              ua: L.default.ua,
              url: "",
              QQAvatar: "",
            }),
          q = "",
          W = {},
          V = {
            cdn: "https://gravatar.loli.net/avatar/",
            ds: [
              "mp",
              "identicon",
              "monsterid",
              "wavatar",
              "robohash",
              "retro",
              "",
            ],
            params: "",
            hide: !1,
          },
          D =
            ((o.prototype.init = function (e) {
              if ("undefined" == typeof document)
                throw new Error(
                  "Sorry, Valine does not support Server-side rendering."
                );
              return (
                e &&
                  ((e = L.default.extend(I.CONFIG, e)),
                  (this.i18n = (0, a.default)(
                    e.lang || L.default.lang,
                    e.langMode
                  )),
                  (this.cfg = e),
                  (z.default.maps =
                    (!!e.emojiMaps && e.emojiMaps) || z.default.maps),
                  (z.default.cdn =
                    (!!e.emojiCDN && e.emojiCDN) || z.default.cdn),
                  this._init()),
                this
              );
            }),
            (o.prototype._init = function () {
              var i = this;
              try {
                var e,
                  t,
                  n,
                  r,
                  o,
                  a = i.cfg,
                  u = a.avatar,
                  s = a.avatarForce,
                  l = a.avatar_cdn,
                  c = a.visitor,
                  p = a.path,
                  f = void 0 === p ? location.pathname : p,
                  d = a.pageSize,
                  h = a.recordIP,
                  g = ((i.cfg.path = f.replace(/index\.html?$/, "")), V.ds),
                  v = s ? "&q=" + (0, I.RandomStr)() : "",
                  m =
                    ((V.params =
                      "?d=" +
                      (-1 < g.indexOf(u) ? u : "mp") +
                      "&v=" +
                      I.VERSION +
                      v),
                    (V.hide = "hide" === u),
                    (V.cdn = /^https?\:\/\//.test(l) ? l : V.cdn),
                    (i.cfg.pageSize = isNaN(d) || d < 1 ? 10 : d),
                    h &&
                      (0, P.recordIPFn)(function (e) {
                        return (Q.ip = e);
                      }),
                    i.cfg.el || null),
                  y = (0, L.default)(m);
                (m = m instanceof HTMLElement ? m : y[y.length - 1] || null) &&
                  ((i.$el = (0, L.default)(m)),
                  i.$el.addClass("v").attr("data-class", "v"),
                  V.hide && i.$el.addClass("hide-avatar"),
                  (i.cfg.meta = (
                    i.cfg.guest_info ||
                    i.cfg.meta ||
                    I.defaultMeta
                  ).filter(function (e) {
                    return -1 < I.defaultMeta.indexOf(e);
                  })),
                  (i.cfg.requiredFields = i.cfg.requiredFields.filter(function (
                    e
                  ) {
                    return -1 < I.defaultMeta.indexOf(e);
                  })),
                  (e = (
                    0 == i.cfg.meta.length ? I.defaultMeta : i.cfg.meta
                  ).map(function (e) {
                    var t = "mail" == e ? "email" : "text";
                    return -1 < I.defaultMeta.indexOf(e)
                      ? '<input name="' +
                          e +
                          '" placeholder="' +
                          (i.cfg.metaPlaceholder[e] || i.i18n.t(e)) +
                          '" class="v' +
                          e +
                          ' vinput" type="' +
                          t +
                          '">'
                      : "";
                  })),
                  (t =
                    '<div class="vpanel"><div class="vwrap"><p class="cancel-reply text-right" style="display:none;" title="' +
                    i.i18n.t("cancelReply") +
                    '"><svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22"><path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path><path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222" ></path></svg></p><div class="vheader item' +
                    e.length +
                    '">' +
                    e.join("") +
                    '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' +
                    i.cfg.placeholder +
                    '"></textarea><div class="vrow"><div class="vcol vcol-60 status-bar"></div><div class="vcol vcol-40 vctrl text-right"><span title="' +
                    i.i18n.t("emoji") +
                    '"  class="vicon vemoji-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22" ><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path><path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path><path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path></svg></span><span title="' +
                    i.i18n.t("preview") +
                    '" class="vicon vpreview-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22"><path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path><path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path><path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path></svg></span></div></div></div><div class="vrow"><div class="vcol vcol-30" ><a alt="Markdown is supported" href="#" class="vicon" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="vcol vcol-70 text-right"><button type="button"  title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' +
                    i.i18n.t("submit") +
                    '</button></div></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div></div><div class="vcount" style="display:none;"><span class="vnum">0</span> ' +
                    i.i18n.t("comments") +
                    '</div><div class="vload-top text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vcards"></div><div class="vload-bottom text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center" style="display:none"><button type="button" class="vmore vbtn">' +
                    i.i18n.t("more") +
                    '</button></div>'),
                  i.$el.html(t),
                  i.$el.find(".cancel-reply").on("click", function (e) {
                    i.reset();
                  }),
                  (n = i.$el.find(".vempty")),
                  (i.$nodata = {
                    show: function (e) {
                      return n.html(e || i.i18n.t("sofa")).show(), i;
                    },
                    hide: function () {
                      return n.hide(), i;
                    },
                  }),
                  (r = i.$el.find(".vload-bottom")),
                  (o = i.$el.find(".vload-top")),
                  (i.$loading = {
                    show: function (e) {
                      return (e && o.show()) || r.show(), i.$nodata.hide(), i;
                    },
                    hide: function () {
                      return (
                        o.hide(),
                        r.hide(),
                        0 === i.$el.find(".vcard").length && i.$nodata.show(),
                        i
                      );
                    },
                  })),
                  (0, b.default)(i.cfg, function (e) {
                    var t = (0, L.default)(".valine-comment-count"),
                      o = 0;
                    !(function t(n) {
                      var e,
                        r = n[o++];
                      r &&
                        (e = (0, L.default)(r).attr("data-xid")) &&
                        i
                          .Q(e)
                          .count()
                          .then(function (e) {
                            (r.innerText = e), t(n);
                          })
                          .catch(function (e) {
                            r.innerText = 0;
                          });
                    })(t),
                      c && D.add(AV.Object.extend("Counter"), i.cfg.path),
                      i.$el && i.bind();
                  });
              } catch (a) {
                (0, M.default)(i, a, "init");
              }
            }),
            {
              add: function (t, e) {
                var n,
                  r,
                  o,
                  i,
                  a,
                  u = this,
                  s = (0, L.default)(".leancloud_visitors,.leancloud-visitors");
                1 === s.length
                  ? ((n = s[0]),
                    (r = decodeURI((0, L.default)(n).attr("id"))),
                    (o = (0, L.default)(n).attr("data-flag-title")),
                    (a = encodeURI(r)),
                    (i = { el: n, url: r, xid: a, title: o }),
                    decodeURI(r) === decodeURI(e)
                      ? ((a = new AV.Query(t)).equalTo("url", r),
                        a
                          .find()
                          .then(function (e) {
                            0 < e.length
                              ? ((e = e[0]).increment("time"),
                                e
                                  .save()
                                  .then(function (e) {
                                    (0, L.default)(n)
                                      .find(".leancloud-visitors-count")
                                      .text(e.get("time"));
                                  })
                                  .catch(function (e) {}))
                              : l(t, i);
                          })
                          .catch(function (e) {
                            101 == e.code ? l(t, i) : (0, M.default)(u, e);
                          }))
                      : D.show(t, s))
                  : D.show(t, s);
              },
              show: function (e, t) {
                var n = [];
                t.forEach(function (e) {
                  var t = (0, L.default)(e).find(".leancloud-visitors-count");
                  t && t.text("0"),
                    n.push(
                      /\%/.test((0, L.default)(e).attr("id"))
                        ? decodeURI((0, L.default)(e).attr("id"))
                        : (0, L.default)(e).attr("id")
                    );
                }),
                  n.length &&
                    ((e = new AV.Query(e)).containedIn("url", n),
                    e
                      .find()
                      .then(function (e) {
                        0 < e.length &&
                          t.forEach(function (o) {
                            e.forEach(function (e) {
                              var t = e.get("xid") || encodeURI(e.get("url")),
                                e = e.get("time"),
                                n = (0, L.default)(o),
                                r = n.attr("id");
                              (/\%/.test(r) ? r : encodeURI(r)) == t &&
                                (r = n.find(".leancloud-visitors-count")) &&
                                r.text(e);
                            });
                          });
                      })
                      .catch(function (e) {}));
              },
            });
        (o.prototype.Q = function (e) {
          var t,
            n = this.cfg.clazzName;
          if (1 == arguments.length)
            return (
              (t = new AV.Query(n)).doesNotExist("rid"),
              (r = new AV.Query(n)).equalTo("rid", ""),
              (t = AV.Query.or(t, r)),
              "*" === e ? t.exists("url") : t.equalTo("url", decodeURI(e)),
              t.addDescending("createdAt"),
              t.addDescending("insertedAt"),
              t
            );
          var r = JSON.stringify(arguments[1]).replace(/(\[|\])/g, "");
          return AV.Query.doCloudQuery(
            "select * from " +
              n +
              " where rid in (" +
              r +
              ") order by -createdAt,-createdAt"
          );
        }),
          (o.prototype.installLocale = function (e, t) {
            return this.i18n(e, t), this;
          }),
          (o.prototype.setPath = function (e) {
            return (this.config.path = e), this;
          }),
          (o.prototype.bind = function () {
            var e,
              s = this,
              n = s.$el.find(".vemojis"),
              t = s.$el.find(".vpreview"),
              r = s.$el.find(".vemoji-btn"),
              o = s.$el.find(".vpreview-btn"),
              i = s.$el.find(".veditor"),
              a = z.default.maps,
              u = !1,
              l =
                ((s.$emoji = {
                  show: function () {
                    if (!u) {
                      var e,
                        t = [];
                      for (e in a)
                        a.hasOwnProperty(e) &&
                          z.default.build(e) &&
                          t.push(
                            '<i title="' +
                              e +
                              '" >' +
                              z.default.build(e) +
                              "</i>"
                          );
                      n.html(t.join("")),
                        (u = !0),
                        n.find("i").on("click", function (e) {
                          e.preventDefault(),
                            h(
                              i[0],
                              " :" + (0, L.default)(this).attr("title") + ":"
                            );
                        });
                    }
                    return (
                      s.$preview.hide(),
                      n.show(),
                      r.addClass("actived"),
                      s.$emoji
                    );
                  },
                  hide: function () {
                    return r.removeClass("actived"), n.hide(), s.$emoji;
                  },
                }),
                (s.$preview = {
                  show: function () {
                    return (
                      q
                        ? (s.$emoji.hide(),
                          o.addClass("actived"),
                          t.html((0, N.default)(q)).show(),
                          x())
                        : s.$preview.hide(),
                      s.$preview
                    );
                  },
                  hide: function () {
                    return (
                      o.removeClass("actived"), t.hide().html(""), s.$preview
                    );
                  },
                }),
                function (e) {
                  e = e.val() || "";
                  e || s.$preview.hide(),
                    q != e &&
                      ((q = e),
                      -1 < o.hasClass("actived") &&
                        q != t.html() &&
                        t.html((0, N.default)(q)),
                      x());
                }),
              c =
                (r.on("click", function (e) {
                  r.hasClass("actived") ? s.$emoji.hide() : s.$emoji.show();
                }),
                o.on("click", function (e) {
                  o.hasClass("actived") ? s.$preview.hide() : s.$preview.show();
                }),
                s.cfg.meta),
              p = {},
              f = { veditor: "comment" };
            for (e in (c.forEach(function (e) {
              f["v" + e] = e;
            }),
            f))
              f.hasOwnProperty(e) &&
                (function () {
                  var t = f[e],
                    r = s.$el.find("." + e);
                  (p[t] = r).on(
                    "input change blur propertychange",
                    function (e) {
                      s.cfg.enableQQ &&
                        "blur" === e.type &&
                        "nick" === t &&
                        (r.val() && !isNaN(r.val())
                          ? (0, P.fetchQQFn)(r.val(), function (e) {
                              var t = e.nick || r.val(),
                                n = e.qq + "@qq.com";
                              (0, L.default)(".vnick").val(t),
                                (0, L.default)(".vmail").val(n),
                                (Q.nick = t),
                                (Q.mail = n),
                                (Q.QQAvatar = e.pic);
                            })
                          : L.default.store.get(I.QQCacheKey) &&
                            L.default.store.get(I.QQCacheKey).nick != r.val() &&
                            (L.default.store.remove(I.QQCacheKey),
                            (Q.nick = r.val()),
                            (Q.mail = ""),
                            (Q.QQAvatar = ""))),
                        "comment" === t
                          ? ((0, T.default)(r[0]),
                            d(function (e) {
                              l(r);
                            })())
                          : (Q[t] = (0, U.default)(
                              r
                                .val()
                                .replace(/(^\s*)|(\s*$)/g, "")
                                .substring(0, 35)
                            ));
                    }
                  );
                })();
            var d = function (n) {
                var r =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : 300,
                  o = void 0;
                return function () {
                  var e = this,
                    t = arguments;
                  o && clearTimeout(o),
                    (o = setTimeout(function () {
                      n.apply(e, t);
                    }, r));
                };
              },
              h = function (t, e) {
                var n, r, o;
                document.selection
                  ? (t.focus(),
                    (document.selection.createRange().text = e),
                    t.focus())
                  : t.selectionStart || "0" == t.selectionStart
                  ? ((n = t.selectionStart),
                    (r = t.selectionEnd),
                    (o = t.scrollTop),
                    (t.value =
                      t.value.substring(0, n) +
                      e +
                      t.value.substring(r, t.value.length)),
                    t.focus(),
                    (t.selectionStart = n + e.length),
                    (t.selectionEnd = n + e.length),
                    (t.scrollTop = o))
                  : (t.focus(), (t.value += e)),
                  d(function (e) {
                    l((0, L.default)(t));
                  })();
              },
              g = { no: 1, size: s.cfg.pageSize, skip: s.cfg.pageSize },
              v = s.$el.find(".vpage"),
              m =
                (v.on("click", function (e) {
                  v.hide(), g.no++, m();
                }),
                function () {
                  var n = g.size,
                    r = g.no,
                    o = Number(s.$el.find(".vnum").text()),
                    e = (s.$loading.show(), s.Q(s.cfg.path));
                  e.limit(n),
                    e.skip((r - 1) * n),
                    e
                      .find()
                      .then(function (e) {
                        var t;
                        (g.skip = g.size),
                          e && e.length
                            ? ((t = []),
                              e.forEach(function (e) {
                                t.push(e.id), b(e, s.$el.find(".vcards"), !0);
                              }),
                              s
                                .Q(s.cfg.path, t)
                                .then(function (e) {
                                  ((e && e.results) || []).forEach(function (
                                    e
                                  ) {
                                    b(
                                      e,
                                      (0, L.default)(
                                        '.vquote[data-self-id="' +
                                          e.get("rid") +
                                          '"]'
                                      )
                                    );
                                  });
                                })
                                .catch(function (e) {}),
                              n * r < o ? v.show() : v.hide(),
                              x())
                            : s.$nodata.show(),
                          s.$loading.hide();
                      })
                      .catch(function (e) {
                        s.$loading.hide(), (0, M.default)(s, e, "query");
                      });
                }),
              y =
                (s
                  .Q(s.cfg.path)
                  .count()
                  .then(function (e) {
                    0 < e
                      ? (s.$el.find(".vcount").show().find(".vnum").text(e),
                        m())
                      : s.$loading.hide();
                  })
                  .catch(function (e) {
                    (0, M.default)(s, e, "count");
                  }),
                function () {
                  var e =
                    (0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : ""
                    ).match(
                      /(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
                    ) || [];
                  return 0 < e.length ? e[0] : "";
                }),
              b = function (e, t, n) {
                var r = (0, L.default)(
                    '<div class="vcard" id="' + e.id + '"></div>'
                  ),
                  o = (0, U.default)(e.get("ua")),
                  i = "",
                  o =
                    (o &&
                      !/ja/.test(s.cfg.lang) &&
                      (i = (o = L.default.detect(o)).version
                        ? o.os
                          ? '<span class="vsys"><i class="browser-icon fab fa-' +
                            (["xiaomi"].includes(o.browser.toLowerCase())
                              ? "mobile-alt fas"
                              : o.browser.toLowerCase()) +
                            '"></i>' +
                            o.browser +
                            " " +
                            o.version +
                            '</span> <span class="vsys"><i class="os-icon fab fa-' +
                            (["mac os", "ios"].includes(o.os.toLowerCase())
                              ? "apple"
                              : o.os.toLowerCase()) +
                            '"></i>' +
                            o.os +
                            " " +
                            o.osVersion +
                            "</span>"
                          : ""
                        : '<span class="vsys">' + o.browser + "</span>"),
                    "*" === s.cfg.path &&
                      (i =
                        '<a href="' +
                        e.get("url") +
                        '" class="vsys">' +
                        e.get("url") +
                        "</a>"),
                    s.cfg.master.includes((0, j.default)(e.get("mail")))),
                  a = s.cfg.friends.includes(
                    (0, j.default)(e.get("mail").toLowerCase())
                  ),
                  o = o
                    ? '<span class="vtag vmaster">' +
                      s.cfg.tagMeta[0] +
                      "</span>"
                    : a
                    ? '<span class="vtag vfriend">' +
                      s.cfg.tagMeta[1] +
                      "</span>"
                    : '<span class="vtag vvisitor">' +
                      s.cfg.tagMeta[2] +
                      "</span>",
                  a = e.get("link")
                    ? /^https?\:\/\//.test(e.get("link"))
                      ? e.get("link")
                      : "http://" + e.get("link")
                    : "",
                  u = L.default.escape(
                    (0, U.default)(e.get("nick").substring(0, 30))
                  ),
                  a = a
                    ? '<a class="vnick" rel="nofollow" href="' +
                      y(a) +
                      '" target="_blank" >' +
                      u +
                      "</a>" +
                      o
                    : '<span class="vnick">' + u + "</span>" + o,
                  u =
                    (V.hide
                      ? ""
                      : s.cfg.enableQQ && e.get("QQAvatar")
                      ? (0, U.default)(
                          '<img class="vimg" src="' +
                            y(e.get("QQAvatar")) +
                            '" referrerPolicy="no-referrer"/>'
                        )
                      : '<img class="vimg" src="' +
                        (V.cdn + (0, j.default)(e.get("mail")) + V.params) +
                        '">') +
                    '<div class="vh"><div class="vhead">' +
                    a +
                    " " +
                    i +
                    '</div><div class="vmeta"><span class="vtime" >' +
                    (0, R.default)(e.get("insertedAt"), s.i18n) +
                    '</span><span class="vat" data-vm-id="' +
                    (e.get("rid") || e.id) +
                    '" data-self-id="' +
                    e.id +
                    '">' +
                    s.i18n.t("reply") +
                    '</span></div><div class="vcontent" data-expand="' +
                    s.i18n.t("expand") +
                    '">' +
                    (0, N.default)(e.get("comment")) +
                    '</div><div class="vreply-wrapper" data-self-id="' +
                    e.id +
                    '"></div><div class="vquote" data-self-id="' +
                    e.id +
                    '"></div></div>',
                  o = (r.html(u), r.find(".vat")),
                  a =
                    (r.find("a:not(.at)").forEach(function (e) {
                      (0, L.default)(e).attr({
                        target: "_blank",
                        rel: "noopener",
                      });
                    }),
                    n ? t.append(r) : t.prepend(r),
                    r.find(".vcontent"));
                a && A(a), o && w(o, e);
              },
              D = {},
              w = function (i, a) {
                i.on("click", function (e) {
                  var t = i.attr("data-vm-id"),
                    n = i.attr("data-self-id"),
                    r = s.$el.find(".vwrap"),
                    o = "@" + L.default.escape(a.get("nick"));
                  (0, L.default)('.vreply-wrapper[data-self-id="' + n + '"]')
                    .append(r)
                    .find(".cancel-reply")
                    .show(),
                    (D = {
                      at: L.default.escape(o) + " ",
                      rid: t,
                      pid: n,
                      rmail: a.get("mail"),
                    }),
                    p.comment.attr({ placeholder: o })[0].focus();
                });
              },
              x = function () {
                setTimeout(function () {
                  try {
                    s.cfg.mathjax &&
                      "MathJax" in window &&
                      "version" in window.MathJax &&
                      ((/^3.*/.test(window.MathJax.version) &&
                        MathJax.typeset()) ||
                        MathJax.Hub.Queue([
                          "Typeset",
                          MathJax.Hub,
                          document.querySelector(".v"),
                        ])),
                      "renderMathInElement" in window &&
                        renderMathInElement((0, L.default)(".v")[0], {
                          delimiters: [
                            { left: "$$", right: "$$", display: !0 },
                            { left: "$", right: "$", display: !1 },
                          ],
                        });
                  } catch (e) {}
                }, 100);
              },
              A = function (t) {
                setTimeout(function () {
                  200 < t[0].offsetHeight &&
                    (t.addClass("expand"),
                    t.on("click", function (e) {
                      t.removeClass("expand");
                    }));
                });
              },
              k = void 0;
            if ((k = L.default.store.get(I.MetaCacheKey) || k))
              for (var E in c)
                c.hasOwnProperty(E) &&
                  ((E = c[E]),
                  s.$el.find(".v" + E).val(L.default.unescape(k[E])),
                  (Q[E] = k[E]));
            function F(e) {
              if (
                -1 < s.cfg.requiredFields.indexOf("nick") &&
                Q.nick.length < 3
              )
                return (
                  p.nick[0].focus(),
                  void s.$el
                    .find(".status-bar")
                    .text("" + s.i18n.t("nickFail"))
                    .empty(3e3)
                );
              if (
                -1 < s.cfg.requiredFields.indexOf("mail") &&
                !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                  Q.mail
                )
              )
                return (
                  p.mail[0].focus(),
                  void s.$el
                    .find(".status-bar")
                    .text("" + s.i18n.t("mailFail"))
                    .empty(3e3)
                );
              if ("" == q) p.comment[0].focus();
              else {
                for (var t in W) {
                  var n;
                  W.hasOwnProperty(t) &&
                    ((n = W[t]), (q = q.replace(t, n)), URL.revokeObjectURL(t));
                }
                (W = {}),
                  (Q.comment = (0, U.default)(q)),
                  (Q.nick = Q.nick || "Anonymous");
                var r = L.default.store.get("vlx");
                r && Date.now() / 1e3 - r / 1e3 < 20
                  ? s.$el.find(".status-bar").text(s.i18n.t("busy")).empty(3e3)
                  : O();
              }
            }
            var C = L.default.store.get(I.QQCacheKey),
              _ =
                ((Q.QQAvatar = (s.cfg.enableQQ && !!C && C.pic) || ""),
                (s.reset = function () {
                  (Q.comment = ""),
                    p.comment.val(""),
                    l(p.comment),
                    p.comment.attr("placeholder", s.cfg.placeholder),
                    (D = {}),
                    s.$preview.hide(),
                    s.$el.find(".vpanel").append(s.$el.find(".vwrap")),
                    s.$el.find(".cancel-reply").hide(),
                    (q = ""),
                    T.default.update(p.comment[0]);
                }),
                s.$el.find(".vsubmit")),
              S = function () {
                var e = new AV.ACL();
                return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e;
              },
              O = function () {
                L.default.store.set("vlx", Date.now()),
                  _.attr({ disabled: !0 }),
                  s.$loading.show(!0);
                var e,
                  t,
                  n,
                  r = new (AV.Object.extend(s.cfg.clazzName || "Comment"))();
                for (t in ((Q.url = decodeURI(s.cfg.path)),
                (Q.insertedAt = new Date()),
                D.rid &&
                  ((e = D.pid || D.rid),
                  r.set("rid", D.rid),
                  r.set("pid", e),
                  (Q.comment = q.replace(
                    "<p>",
                    '<p><a class="at" href="#' + e + '">' + D.at + "</a> , "
                  ))),
                Q))
                  Q.hasOwnProperty(t) && ((n = Q[t]), r.set(t, n));
                r.setACL(S()),
                  r
                    .save()
                    .then(function (e) {
                      "Anonymous" != Q.nick &&
                        L.default.store.set(I.MetaCacheKey, {
                          nick: Q.nick,
                          link: Q.link,
                          mail: Q.mail,
                        });
                      var t = s.$el.find(".vnum");
                      try {
                        D.rid
                          ? b(
                              e,
                              (0, L.default)(
                                '.vquote[data-self-id="' + D.rid + '"]'
                              ),
                              !0
                            )
                          : ((Number(t.text())
                              ? t
                              : s.$el.find(".vcount").show().find(".vnum")
                            ).text(Number(t.text()) + 1),
                            b(e, s.$el.find(".vcards")),
                            g.skip++),
                          _.removeAttr("disabled"),
                          s.$loading.hide(),
                          s.reset();
                      } catch (e) {
                        (0, M.default)(s, e, "save");
                      }
                    })
                    .catch(function (e) {
                      (0, M.default)(s, e, "commitEvt");
                    });
              },
              B =
                (_.on("click", F),
                (0, L.default)(document)
                  .on("keydown", function (e) {
                    var t =
                      (e = window.event || e).keyCode || e.which || e.charCode;
                    (e.ctrlKey || e.metaKey) && 13 === t && F(),
                      9 === t &&
                        "veditor" == (document.activeElement.id || "") &&
                        (e.preventDefault(), h(i[0], "    "));
                  })
                  .on("paste", function (e) {
                    e =
                      "clipboardData" in e
                        ? e.clipboardData
                        : (e.originalEvent && e.originalEvent.clipboardData) ||
                          window.clipboardData;
                    e && B(e.items, !0);
                  }),
                i.on("dragenter dragleave dragover drop", function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    "drop" === e.type && B(e.dataTransfer.items);
                }),
                function (e, t) {
                  for (var n = 0, r = e.length; n < r; n++) {
                    var o = e[n];
                    if ("string" === o.kind && o.type.match("^text/html"))
                      t ||
                        o.getAsString(function (e) {
                          e && h(i[0], e.replace(/<[^>]+>/g, ""));
                        });
                    else if (-1 < o.type.indexOf("image")) {
                      $(o.getAsFile());
                      continue;
                    }
                  }
                }),
              $ = function (e) {
                try {
                  var t = URL.createObjectURL(e),
                    n = "![image](" + t + ") ",
                    r = new FileReader();
                  h(i[0], n),
                    (r.onload = function () {
                      W[t] = r.result;
                    }),
                    r.readAsDataURL(e);
                } catch (e) {}
              };
          }),
          (e.exports = i),
          (e.exports.default = i);
      },
      function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var n = n(3),
          r = n && n.__esModule ? n : { default: n };
        t.default = {
          getApi: function (e, t) {
            r.default
              .ajax({
                url: "https://app-router.com/2/route",
                body: { appId: e },
              })
              .then(function (e) {
                e.json().then(function (e) {
                  return t && t("//" + e.api_server);
                });
              });
          },
        };
      },
      function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var n = n(3),
          r = n && n.__esModule ? n : { default: n },
          u = !1;
        t.default = function (i, a) {
          var e;
          "AV" in window &&
            ((e = window.AV.version || window.AV.VERSION),
            2 < parseInt(e.split(".")[0])
              ? (u = !!AV.applicationId && !!AV.applicationKey)
              : r.default.deleteInWin("AV", 0)),
            u
              ? a && a()
              : r.default.sdkLoader(
                  "//unpkg.com/leancloud-storage@3/dist/av-min.js",
                  "AV",
                  function (e) {
                    var t,
                      n = "https://",
                      r = i.app_id || i.appId,
                      o = i.app_key || i.appKey;
                    if (!i.serverURLs)
                      switch (r.slice(-9)) {
                        case "-9Nh9j0Va":
                          n += "tab.";
                          break;
                        case "-MdYXbMMI":
                          n += "us.";
                      }
                    (t = i.serverURLs || n + "leancloud.cn"),
                      AV.init({ appId: r, appKey: o, serverURLs: t }),
                      (u = !0),
                      a && a();
                  }
                );
        };
      },
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var o = r(n(84)),
          i = r(n(100)),
          a = r(n(101)),
          u = r(n(98)),
          n = r(n(99)),
          s = {
            zh: i.default,
            "zh-cn": i.default,
            "zh-CN": i.default,
            "zh-TW": a.default,
            en: u.default,
            "en-US": u.default,
            ja: n.default,
            "ja-JP": n.default,
          };
        t.default = function (e, t) {
          return (
            !s[e] && e && t && (s[e] = t),
            new o.default({ phrases: s[e || "zh"], locale: e })
          );
        };
      },
      function (e, t, n) {
        "use strict";
        (t.__esModule = !0),
          (t.default = function (e, t) {
            var n, r;
            e.$el && e.$loading.hide().$nodata.hide(),
              "[object Error]" === {}.toString.call(t)
                ? ((n = t.code || t.message || t.error || ""),
                  isNaN(n)
                    ? e.$el &&
                      e.$nodata.show(
                        '<pre style="text-align:left;"> ' +
                          JSON.stringify(t) +
                          "</pre>"
                      )
                    : ((r =
                        ((r = e.i18n.t("code-" + n)) == "code-" + n
                          ? void 0
                          : r) ||
                        t.message ||
                        t.error ||
                        ""),
                      101 == n || -1 == n
                        ? e.$nodata.show()
                        : e.$el &&
                          e.$nodata.show(
                            '<pre style="text-align:left;">Code ' +
                              n +
                              ": " +
                              r +
                              "</pre>"
                          )))
                : e.$el &&
                  e.$nodata.show(
                    '<pre style="text-align:left;">' +
                      JSON.stringify(t) +
                      "</pre>"
                  );
          });
      },
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var o = n(83),
          i = r(n(79)),
          a = r(n(3)),
          u = r(n(12)),
          s = r(n(13)),
          n = new o.marked.Renderer();
        (n.code = function (e, t) {
          return (
            '<pre><code class="hljs language-' +
            t +
            '">' +
            (t && hljs.getLanguage(t)
              ? hljs.highlight(t, e).value
              : a.default.escape(e)) +
            "</code></pre>"
          );
        }),
          o.marked.setOptions({
            renderer: "hljs" in window ? n : new o.marked.Renderer(),
            highlight: function (e, t) {
              return "hljs" in window
                ? (t &&
                    hljs.getLanguage(t) &&
                    hljs.highlight(t, e, !0).value) ||
                    hljs.highlightAuto(e).value
                : (0, i.default)(e);
            },
            gfm: !0,
            tables: !0,
            breaks: !0,
            pedantic: !1,
            sanitize: !1,
            smartLists: !0,
            smartypants: !0,
            headerPrefix: "v-",
          }),
          (t.default = function (e) {
            return (0, s.default)((0, o.marked)(u.default.parse(e, !0)));
          });
      },
      function (e, t, n) {
        "use strict";
        (t.__esModule = !0), (t.recordIPFn = t.fetchQQFn = void 0);
        var r = n(3),
          o = r && r.__esModule ? r : { default: r },
          i = n(6);
        (t.fetchQQFn = function (e, t) {
          var n = o.default.store.get(i.QQCacheKey);
          n && n.qq == e
            ? t && t(n)
            : o.default
                .ajax({
                  url: "//valine.api.ioliu.cn/getqqinfo",
                  method: "POST",
                  body: { qq: e },
                })
                .then(function (e) {
                  e.json().then(function (e) {
                    e.errmsg ||
                      (o.default.store.set(i.QQCacheKey, e), t && t(e));
                  });
                });
        }),
          (t.recordIPFn = function (t) {
            o.default
              .ajax({
                url: "https://www.ip.cn/api/index?ip=&type=0",
                method: "get",
              })
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                t && t(e.ip);
              });
          });
      },
      function (e, t, n) {
        "use strict";
        (t.__esModule = !0),
          (t.default = function (e, t) {
            if (!e) return "Invalid Date.";
            try {
              var n = p(e).getTime();
              if (isNaN(n)) return "Invalid Date.";
              var r,
                o,
                i,
                a,
                u,
                s = new Date().getTime() - n,
                l = Math.floor(s / 864e5);
              return 0 === l
                ? ((r = s % 864e5),
                  0 === (o = Math.floor(r / 36e5))
                    ? ((i = r % 36e5),
                      0 === (a = Math.floor(i / 6e4))
                        ? ((u = i % 6e4),
                          Math.round(u / 1e3) + " " + t.t("seconds"))
                        : a + " " + t.t("minutes"))
                    : o + " " + t.t("hours"))
                : l < 0
                ? t.t("now")
                : l < 8
                ? l + " " + t.t("days")
                : c(e);
            } catch (e) {}
          });
        var c = function (e) {
            var t = r(e.getDate(), 2),
              n = r(e.getMonth() + 1, 2);
            return r(e.getFullYear(), 2) + "-" + n + "-" + t;
          },
          p = function e(t) {
            return t instanceof Date
              ? t
              : !isNaN(t) || /^\d+$/.test(t)
              ? new Date(parseInt(t))
              : /GMT/.test(t || "")
              ? e(new Date(t).getTime())
              : ((t = (t || "")
                  .replace(/(^\s*)|(\s*$)/g, "")
                  .replace(/\.\d+/, "")
                  .replace(/-/, "/")
                  .replace(/-/, "/")
                  .replace(/(\d)T(\d)/, "$1 $2")
                  .replace(/Z/, " UTC")
                  .replace(/([+-]\d\d):?(\d\d)/, " $1$2")),
                new Date(t));
          },
          r = function (e, t) {
            for (var n = e.toString(); n.length < t; ) n = "0" + n;
            return n;
          };
      },
      function (t, n, v) {
        var m;
        !(function () {
          "use strict";
          function p(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
          }
          function u(e, t, n, r, o, i) {
            return p(((t = p(p(t, e), p(r, i))) << o) | (t >>> (32 - o)), n);
          }
          function f(e, t, n, r, o, i, a) {
            return u((t & n) | (~t & r), e, t, o, i, a);
          }
          function d(e, t, n, r, o, i, a) {
            return u((t & r) | (n & ~r), e, t, o, i, a);
          }
          function h(e, t, n, r, o, i, a) {
            return u(t ^ n ^ r, e, t, o, i, a);
          }
          function g(e, t, n, r, o, i, a) {
            return u(n ^ (t | ~r), e, t, o, i, a);
          }
          function a(e, t) {
            (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
            for (
              var n,
                r,
                o,
                i,
                a = 1732584193,
                u = -271733879,
                s = -1732584194,
                l = 271733878,
                c = 0;
              c < e.length;
              c += 16
            )
              (a = f((n = a), (r = u), (o = s), (i = l), e[c], 7, -680876936)),
                (l = f(l, a, u, s, e[c + 1], 12, -389564586)),
                (s = f(s, l, a, u, e[c + 2], 17, 606105819)),
                (u = f(u, s, l, a, e[c + 3], 22, -1044525330)),
                (a = f(a, u, s, l, e[c + 4], 7, -176418897)),
                (l = f(l, a, u, s, e[c + 5], 12, 1200080426)),
                (s = f(s, l, a, u, e[c + 6], 17, -1473231341)),
                (u = f(u, s, l, a, e[c + 7], 22, -45705983)),
                (a = f(a, u, s, l, e[c + 8], 7, 1770035416)),
                (l = f(l, a, u, s, e[c + 9], 12, -1958414417)),
                (s = f(s, l, a, u, e[c + 10], 17, -42063)),
                (u = f(u, s, l, a, e[c + 11], 22, -1990404162)),
                (a = f(a, u, s, l, e[c + 12], 7, 1804603682)),
                (l = f(l, a, u, s, e[c + 13], 12, -40341101)),
                (s = f(s, l, a, u, e[c + 14], 17, -1502002290)),
                (a = d(
                  a,
                  (u = f(u, s, l, a, e[c + 15], 22, 1236535329)),
                  s,
                  l,
                  e[c + 1],
                  5,
                  -165796510
                )),
                (l = d(l, a, u, s, e[c + 6], 9, -1069501632)),
                (s = d(s, l, a, u, e[c + 11], 14, 643717713)),
                (u = d(u, s, l, a, e[c], 20, -373897302)),
                (a = d(a, u, s, l, e[c + 5], 5, -701558691)),
                (l = d(l, a, u, s, e[c + 10], 9, 38016083)),
                (s = d(s, l, a, u, e[c + 15], 14, -660478335)),
                (u = d(u, s, l, a, e[c + 4], 20, -405537848)),
                (a = d(a, u, s, l, e[c + 9], 5, 568446438)),
                (l = d(l, a, u, s, e[c + 14], 9, -1019803690)),
                (s = d(s, l, a, u, e[c + 3], 14, -187363961)),
                (u = d(u, s, l, a, e[c + 8], 20, 1163531501)),
                (a = d(a, u, s, l, e[c + 13], 5, -1444681467)),
                (l = d(l, a, u, s, e[c + 2], 9, -51403784)),
                (s = d(s, l, a, u, e[c + 7], 14, 1735328473)),
                (a = h(
                  a,
                  (u = d(u, s, l, a, e[c + 12], 20, -1926607734)),
                  s,
                  l,
                  e[c + 5],
                  4,
                  -378558
                )),
                (l = h(l, a, u, s, e[c + 8], 11, -2022574463)),
                (s = h(s, l, a, u, e[c + 11], 16, 1839030562)),
                (u = h(u, s, l, a, e[c + 14], 23, -35309556)),
                (a = h(a, u, s, l, e[c + 1], 4, -1530992060)),
                (l = h(l, a, u, s, e[c + 4], 11, 1272893353)),
                (s = h(s, l, a, u, e[c + 7], 16, -155497632)),
                (u = h(u, s, l, a, e[c + 10], 23, -1094730640)),
                (a = h(a, u, s, l, e[c + 13], 4, 681279174)),
                (l = h(l, a, u, s, e[c], 11, -358537222)),
                (s = h(s, l, a, u, e[c + 3], 16, -722521979)),
                (u = h(u, s, l, a, e[c + 6], 23, 76029189)),
                (a = h(a, u, s, l, e[c + 9], 4, -640364487)),
                (l = h(l, a, u, s, e[c + 12], 11, -421815835)),
                (s = h(s, l, a, u, e[c + 15], 16, 530742520)),
                (a = g(
                  a,
                  (u = h(u, s, l, a, e[c + 2], 23, -995338651)),
                  s,
                  l,
                  e[c],
                  6,
                  -198630844
                )),
                (l = g(l, a, u, s, e[c + 7], 10, 1126891415)),
                (s = g(s, l, a, u, e[c + 14], 15, -1416354905)),
                (u = g(u, s, l, a, e[c + 5], 21, -57434055)),
                (a = g(a, u, s, l, e[c + 12], 6, 1700485571)),
                (l = g(l, a, u, s, e[c + 3], 10, -1894986606)),
                (s = g(s, l, a, u, e[c + 10], 15, -1051523)),
                (u = g(u, s, l, a, e[c + 1], 21, -2054922799)),
                (a = g(a, u, s, l, e[c + 8], 6, 1873313359)),
                (l = g(l, a, u, s, e[c + 15], 10, -30611744)),
                (s = g(s, l, a, u, e[c + 6], 15, -1560198380)),
                (u = g(u, s, l, a, e[c + 13], 21, 1309151649)),
                (a = g(a, u, s, l, e[c + 4], 6, -145523070)),
                (l = g(l, a, u, s, e[c + 11], 10, -1120210379)),
                (s = g(s, l, a, u, e[c + 2], 15, 718787259)),
                (u = g(u, s, l, a, e[c + 9], 21, -343485551)),
                (a = p(a, n)),
                (u = p(u, r)),
                (s = p(s, o)),
                (l = p(l, i));
            return [a, u, s, l];
          }
          function s(e) {
            for (var t = "", n = 32 * e.length, r = 0; r < n; r += 8)
              t += String.fromCharCode((e[r >> 5] >>> r % 32) & 255);
            return t;
          }
          function l(e) {
            var t = [];
            for (t[(e.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1)
              t[r] = 0;
            for (var n = 8 * e.length, r = 0; r < n; r += 8)
              t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << r % 32;
            return t;
          }
          function r(e) {
            for (
              var t, n = "0123456789abcdef", r = "", o = 0;
              o < e.length;
              o += 1
            )
              (t = e.charCodeAt(o)),
                (r += n.charAt((t >>> 4) & 15) + n.charAt(15 & t));
            return r;
          }
          function c(e) {
            return unescape(encodeURIComponent(e));
          }
          function o(e) {
            return s(a(l((e = c(e))), 8 * e.length));
          }
          function i(e, t) {
            var n,
              e = c(e),
              t = c(t),
              r = l(e),
              o = [],
              i = [];
            for (
              o[15] = i[15] = void 0,
                16 < r.length && (r = a(r, 8 * e.length)),
                n = 0;
              n < 16;
              n += 1
            )
              (o[n] = 909522486 ^ r[n]), (i[n] = 1549556828 ^ r[n]);
            return (
              (e = a(o.concat(l(t)), 512 + 8 * t.length)),
              s(a(i.concat(e), 640))
            );
          }
          function e(e, t, n) {
            return t ? (n ? i(t, e) : r(i(t, e))) : n ? o(e) : r(o(e));
          }
          void 0 !==
            (m = function () {
              return e;
            }.call(n, v, n, t)) && (t.exports = m);
        })();
      },
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          return u(e), f(e, p(arguments, 1));
        }
        var o = n(2),
          i = n(4),
          a = n(1),
          u = n(5),
          s = n(14),
          l = n(15),
          c = l(),
          n = n(44),
          p = a("Array.prototype.slice"),
          f = i.apply(c);
        o(r, { getPolyfill: l, implementation: s, shim: n }), (e.exports = r);
      },
      function (e, t, n) {
        "use strict";
        var r = n(2),
          o = n(15);
        e.exports = function () {
          var e = o();
          return (
            r(
              Array.prototype,
              { forEach: e },
              {
                forEach: function () {
                  return Array.prototype.forEach !== e;
                },
              }
            ),
            e
          );
        };
      },
      function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var n = n(47),
          r = n && n.__esModule ? n : { default: n },
          o =
            ((t.default = function (f) {
              return (
                (f = (0, r.default)({ url: "", method: "get", body: {} }, f)),
                new Promise(function (t, e) {
                  var n, r, o, i;
                  if ("jsonp" == f.method)
                    return (
                      (n =
                        "cb_" +
                        (Date.now() + Math.round(1e3 * Math.random())).toString(
                          32
                        )),
                      (r = document),
                      (o = r.body),
                      ((i = r.createElement("script")).async = !0),
                      (i.defer = !0),
                      -1 < f.url.indexOf("?")
                        ? (f.url += "&" + d({ callback: n, t: Date.now() }))
                        : (f.url += "?" + d({ callback: n, t: Date.now() })),
                      (i.src = f.url),
                      (window[n] = function (e) {
                        (window[n] = null), o.removeChild(i), t(e);
                      }),
                      void o.appendChild(i)
                    );
                  function a() {
                    return {
                      ok: 2 == ((s.status / 100) | 0),
                      statusText: s.statusText,
                      status: s.status,
                      url: s.responseURL,
                      text: function () {
                        return Promise.resolve(s.responseText);
                      },
                      json: function () {
                        return Promise.resolve(s.responseText).then(JSON.parse);
                      },
                      blob: function () {
                        return Promise.resolve(new Blob([s.response]));
                      },
                      clone: a,
                      headers: {
                        keys: function () {
                          return l;
                        },
                        entries: function () {
                          return c;
                        },
                        get: function (e) {
                          return p[e.toLowerCase()];
                        },
                        has: function (e) {
                          return e.toLowerCase() in p;
                        },
                      },
                    };
                  }
                  var u,
                    s =
                      "XMLHttpRequest" in window
                        ? new XMLHttpRequest()
                        : new ActiveXObject("Microsoft.XMLHTTP"),
                    l = [],
                    c = [],
                    p = {};
                  for (u in (d(f.body) &&
                    (f.url =
                      f.url + "?" + ("get" == f.method ? d(f.body) : "")),
                  s.open(f.method || "get", f.url),
                  "blob" == f.dataType && (s.responseType = "blob"),
                  (s.onload = function () {
                    s
                      .getAllResponseHeaders()
                      .replace(
                        /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                        function (e, t, n) {
                          l.push((t = t.toLowerCase())),
                            c.push([t, n]),
                            (p[t] = p[t] ? p[t] + "," + n : n);
                        }
                      ),
                      t(a());
                  }),
                  (s.onerror = e),
                  (s.withCredentials = "include" == f.credentials),
                  f.headers))
                    s.setRequestHeader(u, f.headers[u]);
                  s.send(
                    "post" == f.method
                      ? f.body
                      : "get" == f.method
                      ? ""
                      : d(f.body)
                  );
                })
              );
            }),
            encodeURIComponent),
          d = function (e) {
            var t,
              n = [];
            for (t in e) e.hasOwnProperty(t) && n.push(o(t) + "=" + o(e[t]));
            return n.join("&").replace(/%20/g, "+") || "";
          };
      },
      function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        t.default = function (e) {
          var t,
            n = {},
            r = {
              Trident:
                -1 < (e = e || navigator.userAgent).indexOf("Trident") ||
                -1 < e.indexOf("NET CLR"),
              Presto: -1 < e.indexOf("Presto"),
              WebKit: -1 < e.indexOf("AppleWebKit"),
              Gecko: -1 < e.indexOf("Gecko/"),
              Safari: -1 < e.indexOf("Safari"),
              Edge: -1 < e.indexOf("Edge") || -1 < e.indexOf("Edg"),
              Chrome: -1 < e.indexOf("Chrome") || -1 < e.indexOf("CriOS"),
              IE: -1 < e.indexOf("MSIE") || -1 < e.indexOf("Trident"),
              Firefox: -1 < e.indexOf("Firefox") || -1 < e.indexOf("FxiOS"),
              "Firefox Focus": -1 < e.indexOf("Focus"),
              Chromium: -1 < e.indexOf("Chromium"),
              Opera: -1 < e.indexOf("Opera") || -1 < e.indexOf("OPR"),
              Vivaldi: -1 < e.indexOf("Vivaldi"),
              Yandex: -1 < e.indexOf("YaBrowser"),
              Kindle: -1 < e.indexOf("Kindle") || -1 < e.indexOf("Silk/"),
              360: -1 < e.indexOf("360EE") || -1 < e.indexOf("360SE"),
              UC: -1 < e.indexOf("UC") || -1 < e.indexOf(" UBrowser"),
              QQBrowser: -1 < e.indexOf("QQBrowser"),
              QQ: -1 < e.indexOf("QQ/"),
              Baidu: -1 < e.indexOf("Baidu") || -1 < e.indexOf("BIDUBrowser"),
              Maxthon: -1 < e.indexOf("Maxthon"),
              Sogou: -1 < e.indexOf("MetaSr") || -1 < e.indexOf("Sogou"),
              LBBROWSER: -1 < e.indexOf("LBBROWSER"),
              "2345Explorer": -1 < e.indexOf("2345Explorer"),
              TheWorld: -1 < e.indexOf("TheWorld"),
              XiaoMi: -1 < e.indexOf("MiuiBrowser"),
              Quark: -1 < e.indexOf("Quark"),
              Qiyu: -1 < e.indexOf("Qiyu"),
              Wechat: -1 < e.indexOf("MicroMessenger"),
              Taobao: -1 < e.indexOf("AliApp(TB"),
              Alipay: -1 < e.indexOf("AliApp(AP"),
              Weibo: -1 < e.indexOf("Weibo"),
              Douban: -1 < e.indexOf("com.douban.frodo"),
              Suning: -1 < e.indexOf("SNEBUY-APP"),
              iQiYi: -1 < e.indexOf("IqiyiApp"),
              Windows: -1 < e.indexOf("Windows"),
              Linux: -1 < e.indexOf("Linux") || -1 < e.indexOf("X11"),
              macOS: -1 < e.indexOf("Macintosh"),
              Android: -1 < e.indexOf("Android") || -1 < e.indexOf("Adr"),
              Ubuntu: -1 < e.indexOf("Ubuntu"),
              FreeBSD: -1 < e.indexOf("FreeBSD"),
              Debian: -1 < e.indexOf("Debian"),
              "Windows Phone":
                -1 < e.indexOf("IEMobile") || -1 < e.indexOf("Windows Phone"),
              BlackBerry:
                -1 < e.indexOf("BlackBerry") ||
                -1 < e.indexOf("RIM") ||
                -1 < e.indexOf("BB10"),
              MeeGo: -1 < e.indexOf("MeeGo"),
              Symbian: -1 < e.indexOf("Symbian"),
              iOS: -1 < e.indexOf("like Mac OS X"),
              "Chrome OS": -1 < e.indexOf("CrOS"),
              WebOS: -1 < e.indexOf("hpwOS"),
              Mobile:
                -1 < e.indexOf("Mobi") ||
                -1 < e.indexOf("iPh") ||
                -1 < e.indexOf("480"),
              Tablet:
                -1 < e.indexOf("Tablet") ||
                -1 < e.indexOf("Pad") ||
                -1 < e.indexOf("Nexus 7"),
            },
            o =
              (r.Mobile && (r.Mobile = !(-1 < e.indexOf("iPad"))),
              {
                browser: [
                  "Safari",
                  "Chrome",
                  "Edge",
                  "IE",
                  "Firefox",
                  "Firefox Focus",
                  "Chromium",
                  "Opera",
                  "Vivaldi",
                  "Yandex",
                  "Kindle",
                  "360",
                  "UC",
                  "QQBrowser",
                  "QQ",
                  "Baidu",
                  "Maxthon",
                  "Sogou",
                  "LBBROWSER",
                  "2345Explorer",
                  "TheWorld",
                  "XiaoMi",
                  "Quark",
                  "Qiyu",
                  "Wechat",
                  "Taobao",
                  "Alipay",
                  "Weibo",
                  "Douban",
                  "Suning",
                  "iQiYi",
                ],
                os: [
                  "Windows",
                  "Linux",
                  "Mac OS",
                  "macOS",
                  "Android",
                  "Ubuntu",
                  "FreeBSD",
                  "Debian",
                  "iOS",
                  "Windows Phone",
                  "BlackBerry",
                  "MeeGo",
                  "Symbian",
                  "Chrome OS",
                  "WebOS",
                ],
              });
          for (t in o)
            if (o.hasOwnProperty(t))
              for (var i = 0, a = o[t].length; i < a; i++) {
                var u = o[t][i];
                r[u] && (n[t] = u);
              }
          var s = {
              Windows: function () {
                return {
                  "10.0": "11",
                  6.4: "10",
                  6.3: "8.1",
                  6.2: "8",
                  6.1: "7",
                  "6.0": "Vista",
                  5.2: "XP",
                  5.1: "XP",
                  "5.0": "2000",
                }[e.replace(/^.*Windows NT ([\d.]+).*$/, "$1")];
              },
              Android: e.replace(/^.*Android ([\d.]+);.*$/, "$1"),
              iOS: e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
              Debian: e.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
              "Windows Phone": e.replace(
                /^.*Windows Phone( OS)? ([\d.]+);.*$/,
                "$2"
              ),
              macOS: e
                .replace(/^.*Mac OS X ([\d_]+).*$/, "$1")
                .replace(/_/g, "."),
              WebOS: e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"),
              BlackBerry: e.replace(/^.*BB([\d.]+);*$/, "$1"),
            },
            s = ((n.osVersion = ""), s[n.os]),
            s =
              (s &&
                (n.osVersion = "function" == typeof s ? s() : s == e ? "" : s),
              {
                Safari: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
                Chrome: e
                  .replace(/^.*Chrome\/([\d.]+).*$/, "$1")
                  .replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
                IE: e
                  .replace(/^.*MSIE ([\d.]+).*$/, "$1")
                  .replace(/^.*rv:([\d.]+).*$/, "$1"),
                Edge: e.replace(/^.*Edge?\/([\d.]+).*$/, "$1"),
                Firefox: e
                  .replace(/^.*Firefox\/([\d.]+).*$/, "$1")
                  .replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
                "Firefox Focus": e.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
                Chromium: e.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
                Opera: e
                  .replace(/^.*Opera\/([\d.]+).*$/, "$1")
                  .replace(/^.*OPR\/([\d.]+).*$/, "$1"),
                Vivaldi: e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
                Yandex: e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
                Kindle: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
                Maxthon: e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
                QQBrowser: e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
                QQ: e.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
                Baidu: e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"),
                UC: e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
                Sogou: e
                  .replace(/^.*SE ([\d.X]+).*$/, "$1")
                  .replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
                "2345Explorer": e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
                TheWorld: e.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
                XiaoMi: e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
                Quark: e.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
                Qiyu: e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
                Wechat: e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
                Taobao: e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
                Alipay: e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
                Weibo: e.replace(/^.*weibo__([\d.]+).*$/, "$1"),
                Douban: e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
                Suning: e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
                iQiYi: e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1"),
              }),
            s = ((n.version = ""), s[n.browser]);
          return (
            s && (n.version = "function" == typeof s ? s() : s == e ? "" : s),
            null == n.browser && (n.browser = "Unknow App"),
            n
          );
        };
      },
      function (e, t, n) {
        "use strict";
        (t.__esModule = !0),
          (t.default = function (e) {
            e = Object(e);
            for (var t = 1, n = arguments.length; t < n; t++) {
              var r = arguments[t];
              if (r)
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          });
      },
      function (e, t, n) {
        "use strict";
        function a(e) {
          return /^\{[\s\S]*\}$/.test(JSON.stringify(e));
        }
        function u(e) {
          return "[object Function]" === {}.toString.call(e);
        }
        function s(t) {
          if ("string" == typeof t)
            try {
              return JSON.parse(t);
            } catch (e) {
              return t;
            }
        }
        function l() {
          if (!(this instanceof l)) return new l();
        }
        function c(e, t) {
          var n = arguments,
            r = null;
          if (((f = f || l()), 0 === n.length)) return f.get();
          if (1 === n.length) {
            if ("string" == typeof e) return f.get(e);
            if (a(e)) return f.set(e);
          }
          if (2 === n.length && "string" == typeof e) {
            if (!t) return f.remove(e);
            if (t && "string" == typeof t) return f.set(e, t);
            t && u(t) && ((r = null), (r = t(e, f.get(e))), c.set(e, r));
          }
          if (
            2 === n.length &&
            ((n = e), "[object Array]" === {}.toString.call(n)) &&
            u(t)
          )
            for (var o = 0, i = e.length; o < i; o++)
              (r = t(e[o], f.get(e[o]))), c.set(e[o], r);
          return c;
        }
        t.__esModule = !0;
        var r,
          p = (function (e) {
            var t,
              n = "_Is_Incognit";
            try {
              e.setItem(n, "yes");
            } catch (n) {
              -1 <
                ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].indexOf(
                  n.name
                ) &&
                ((t = function () {}),
                (e.__proto__ = {
                  setItem: t,
                  getItem: t,
                  removeItem: t,
                  clear: t,
                }));
            } finally {
              "yes" === e.getItem(n) && e.removeItem(n);
            }
            return e;
          })((p = window.localStorage)),
          f = null;
        for (r in (l.prototype = {
          set: function (e, t) {
            if (e && !a(e))
              p.setItem(
                e,
                void 0 === (t = t) || "function" == typeof t
                  ? t + ""
                  : JSON.stringify(t)
              );
            else if (a(e)) for (var n in e) this.set(n, e[n]);
            return this;
          },
          get: function (e) {
            var n;
            if (!e)
              return (
                (n = {}),
                this.each(function (e, t) {
                  return (n[e] = t);
                }),
                n
              );
            if ("?" === e.charAt(0)) return this.has(e.substr(1));
            var t = arguments;
            if (1 < t.length) {
              for (var r = {}, o = 0, i = t.length; o < i; o++) {
                var a = s(p.getItem(t[o]));
                a && (r[t[o]] = a);
              }
              return r;
            }
            return s(p.getItem(e));
          },
          clear: function () {
            return p.clear(), this;
          },
          remove: function (e) {
            var t = this.get(e);
            return p.removeItem(e), t;
          },
          has: function (e) {
            return {}.hasOwnProperty.call(this.get(), e);
          },
          keys: function () {
            var t = [];
            return (
              this.each(function (e) {
                t.push(e);
              }),
              t
            );
          },
          each: function (e) {
            for (var t = 0, n = p.length; t < n; t++) {
              var r = p.key(t);
              e(r, this.get(r));
            }
            return this;
          },
          search: function (e) {
            for (var t = this.keys(), n = {}, r = 0, o = t.length; r < o; r++)
              -1 < t[r].indexOf(e) && (n[t[r]] = this.get(t[r]));
            return n;
          },
        }))
          c[r] = l.prototype[r];
        t.default = c;
      },
      function (e, t, n) {
        var r, o, i, a;
        function u(e, t, n) {
          return (
            (n = Object.create(u.fn)),
            e &&
              n.push.apply(
                n,
                e[i]
                  ? [e]
                  : "" + e === e
                  ? /</.test(e)
                    ? (((t = o.createElement(t)).innerHTML = e), t.children)
                    : t
                    ? (t = u(t)[0])
                      ? t[a](e)
                      : n
                    : o[a](e)
                  : e
              ),
            n
          );
        }
        (o = document),
          (i = "addEventListener"),
          (a = "querySelectorAll"),
          (u.fn = []),
          (u.one = function (e, t) {
            return u(e, t)[0] || null;
          }),
          (r = u),
          void 0 !==
            (t = function () {
              return r;
            }.apply(t, [])) && (e.exports = t);
      },
      function (e, t, n) {
        function f(e) {
          return null == e;
        }
        function r(e) {
          ((e = (function (e) {
            var t,
              n = {};
            for (t in e) n[t] = e[t];
            return n;
          })(e || {})).whiteList = e.whiteList || o.whiteList),
            (e.onAttr = e.onAttr || o.onAttr),
            (e.onIgnoreAttr = e.onIgnoreAttr || o.onIgnoreAttr),
            (e.safeAttrValue = e.safeAttrValue || o.safeAttrValue),
            (this.options = e);
        }
        var o = n(16),
          i = n(51);
        n(17),
          (r.prototype.process = function (e) {
            if (!(e = (e = e || "").toString())) return "";
            var t = this.options,
              s = t.whiteList,
              l = t.onAttr,
              c = t.onIgnoreAttr,
              p = t.safeAttrValue;
            return i(e, function (e, t, n, r, o) {
              var i,
                a = s[n],
                u = !1;
              if (
                (!0 === a
                  ? (u = a)
                  : "function" == typeof a
                  ? (u = a(r))
                  : a instanceof RegExp && (u = a.test(r)),
                !0 !== u && (u = !1),
                (r = p(n, r)))
              )
                return (
                  (a = {
                    position: t,
                    sourcePosition: e,
                    source: o,
                    isWhite: u,
                  }),
                  u
                    ? f((i = l(n, r, a)))
                      ? n + ":" + r
                      : i
                    : f((i = c(n, r, a)))
                    ? void 0
                    : i
                );
            });
          }),
          (e.exports = r);
      },
      function (e, t, n) {
        var c = n(17);
        e.exports = function (r, o) {
          function e() {
            var e, t, n;
            i ||
              (-1 !== (t = (e = c.trim(r.slice(a, u))).indexOf(":")) &&
                ((n = c.trim(e.slice(0, t))),
                (t = c.trim(e.slice(t + 1))),
                n && (n = o(a, s.length, n, t, e)) && (s += n + "; "))),
              (a = u + 1);
          }
          ";" !== (r = c.trimRight(r))[r.length - 1] && (r += ";");
          for (var t = r.length, i = !1, a = 0, u = 0, s = ""; u < t; u++) {
            var n = r[u];
            if ("/" === n && "*" === r[u + 1]) {
              var l = r.indexOf("*/", u + 2);
              if (-1 === l) break;
              (a = (u = l + 1) + 1), (i = !1);
            } else
              "(" === n
                ? (i = !0)
                : ")" === n
                ? (i = !1)
                : ";" === n
                ? i || e()
                : "\n" === n && e();
          }
          return c.trim(s);
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(0),
          o = n(1),
          i = r("%TypeError%"),
          a = n(54),
          u = r("%Reflect.apply%", !0) || o("%Function.prototype.apply%");
        e.exports = function (e, t) {
          var n = 2 < arguments.length ? arguments[2] : [];
          if (a(n)) return u(e, t, n);
          throw new i(
            "Assertion failed: optional `argumentsList`, if provided, must be a List"
          );
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(0)("%TypeError%"),
          o = n(19),
          i = n(8);
        e.exports = function (e, t) {
          if ("Object" !== i(e))
            throw new r("Assertion failed: `O` must be an Object");
          if (o(t)) return t in e;
          throw new r("Assertion failed: `P` must be a Property Key");
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(0)("%Array%"),
          o = !r.isArray && n(1)("Object.prototype.toString");
        e.exports =
          r.isArray ||
          function (e) {
            return "[object Array]" === o(e);
          };
      },
      function (e, t, n) {
        "use strict";
        e.exports = n(10);
      },
      function (e, t, n) {
        "use strict";
        var r = n(0)("%TypeError%"),
          o = n(18),
          i = n(58),
          a = n(8);
        e.exports = function (e) {
          if ("Object" !== a(e))
            throw new r("Assertion failed: `obj` must be an Object");
          return i(o(e, "length"));
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(63),
          o = n(59);
        e.exports = function (e) {
          e = o(e);
          return 0 === (e = 0 !== e ? r(e) : e) ? 0 : e;
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(72),
          o = n(57);
        e.exports = function (e) {
          e = o(e);
          return e <= 0 ? 0 : r < e ? r : e;
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(0),
          o = r("%TypeError%"),
          i = r("%Number%"),
          a = r("%RegExp%"),
          u = r("%parseInt%"),
          r = n(1),
          s = n(73),
          l = n(71),
          c = r("String.prototype.slice"),
          p = s(/^0b[01]+$/i),
          f = s(/^0o[0-7]+$/i),
          d = s(/^[-+]0x[0-9a-f]+$/i),
          h = s(new a("[" + ["\x85", "\u200b", "\ufffe"].join("") + "]", "g")),
          s = [
            "\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003",
            "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028",
            "\u2029\ufeff",
          ].join(""),
          g = new RegExp("(^[" + s + "]+)|([" + s + "]+$)", "g"),
          v = r("String.prototype.replace"),
          m = n(61);
        e.exports = function e(t) {
          t = l(t) ? t : m(t, i);
          if ("symbol" == typeof t)
            throw new o("Cannot convert a Symbol value to a number");
          if ("bigint" == typeof t)
            throw new o("Conversion from 'BigInt' to 'number' is not allowed.");
          if ("string" == typeof t) {
            if (p(t)) return e(u(c(t, 2), 2));
            if (f(t)) return e(u(c(t, 2), 8));
            if (h(t) || d(t)) return NaN;
            var n = v(t, g, "");
            if (n !== t) return e(n);
          }
          return i(t);
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(0)("%Object%"),
          o = n(5);
        e.exports = function (e) {
          return o(e), r(e);
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(76);
        e.exports = function (e) {
          return 1 < arguments.length ? r(e, arguments[1]) : r(e);
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(0)("%TypeError%");
        e.exports = function (e, t) {
          if (null == e) throw new r(t || "Cannot call method on " + e);
          return e;
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(67),
          o = n(68),
          i = n(64),
          a = n(70),
          u = n(69),
          s = n(74);
        e.exports = function (e) {
          e = i(e);
          return a(e) ? 0 : 0 !== e && u(e) ? s(e) * o(r(e)) : e;
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(65);
        e.exports = function (e) {
          e = r(e, Number);
          if ("string" != typeof e) return +e;
          e = e.replace(
            /^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g,
            ""
          );
          return /^0[ob]|^[+-]0x/.test(e) ? NaN : +e;
        };
      },
      function (e, t, n) {
        "use strict";
        e.exports = n(77);
      },
      function (e, t, n) {
        "use strict";
        e.exports = function (e) {
          return null === e
            ? "Null"
            : void 0 === e
            ? "Undefined"
            : "function" == typeof e || "object" == typeof e
            ? "Object"
            : "number" == typeof e
            ? "Number"
            : "boolean" == typeof e
            ? "Boolean"
            : "string" == typeof e
            ? "String"
            : void 0;
        };
      },
      function (e, t, n) {
        "use strict";
        var r = n(0)("%Math.abs%");
        e.exports = function (e) {
          return r(e);
        };
      },
      function (e, t, n) {
        "use strict";
        var r = Math.floor;
        e.exports = function (e) {
          return r(e);
        };
      },
      function (e, t, n) {
        "use strict";
        var r =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
        e.exports =
          Number.isFinite ||
          function (e) {
            return "number" == typeof e && !r(e) && e !== 1 / 0 && e !== -1 / 0;
          };
      },
      function (e, t, n) {
        "use strict";
        e.exports =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
      },
      function (e, t, n) {
        "use strict";
        e.exports = function (e) {
          return null === e || ("function" != typeof e && "object" != typeof e);
        };
      },
      function (e, t, n) {
        "use strict";
        var n = n(0),
          r = n("%Math%"),
          n = n("%Number%");
        e.exports = n.MAX_SAFE_INTEGER || r.pow(2, 53) - 1;
      },
      function (e, t, n) {
        "use strict";
        var r = n(0)("RegExp.prototype.test"),
          o = n(4);
        e.exports = function (e) {
          return o(r, e);
        };
      },
      function (e, t, n) {
        "use strict";
        e.exports = function (e) {
          return 0 <= e ? 1 : -1;
        };
      },
      function (e, t) {
        e.exports = function (e) {
          var r = !0,
            t = !0,
            n = !1;
          if ("function" != typeof e) return !1;
          try {
            e.call("f", function (e, t, n) {
              "object" != typeof n && (r = !1);
            }),
              e.call(
                [null],
                function () {
                  "use strict";
                  t = "string" == typeof this;
                },
                "x"
              );
          } catch (e) {
            n = !0;
          }
          return !n && r && t;
        };
      },
      function (e, t, n) {
        "use strict";
        var l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
          c = n(21),
          p = n(10),
          f = n(80),
          d = n(82);
        e.exports = function (e) {
          if (c(e)) return e;
          var t,
            n = "default";
          if (
            (1 < arguments.length &&
              (arguments[1] === String
                ? (n = "string")
                : arguments[1] === Number && (n = "number")),
            l &&
              (Symbol.toPrimitive
                ? (t = (function (e, t) {
                    var n = e[t];
                    if (null != n) {
                      if (p(n)) return n;
                      throw new TypeError(
                        n +
                          " returned for property " +
                          t +
                          " of object " +
                          e +
                          " is not a function"
                      );
                    }
                  })(e, Symbol.toPrimitive))
                : d(e) && (t = Symbol.prototype.valueOf)),
            void 0 === t)
          ) {
            "default" === n && (f(e) || d(e)) && (n = "string");
            var r = e,
              o = "default" === n ? "number" : n;
            if (null == r) throw new TypeError("Cannot call method on " + r);
            if ("string" != typeof o || ("number" !== o && "string" !== o))
              throw new TypeError('hint must be "string" or "number"');
            for (
              var i,
                a,
                u =
                  "string" === o
                    ? ["toString", "valueOf"]
                    : ["valueOf", "toString"],
                s = 0;
              s < u.length;
              ++s
            )
              if (((i = r[u[s]]), p(i) && ((a = i.call(r)), c(a)))) return a;
            throw new TypeError("No default value");
          }
          o = t.call(e, n);
          if (c(o)) return o;
          throw new TypeError("unable to convert exotic object to primitive");
        };
      },
      function (e, t, n) {
        "use strict";
        var i = Object.prototype.toString,
          a = n(21),
          u = n(10),
          r = function (e) {
            var t;
            if (
              (t =
                1 < arguments.length
                  ? arguments[1]
                  : "[object Date]" === i.call(e)
                  ? String
                  : Number) !== String &&
              t !== Number
            )
              throw new TypeError("invalid [[DefaultValue]] hint supplied");
            for (
              var n,
                r =
                  t === String
                    ? ["toString", "valueOf"]
                    : ["valueOf", "toString"],
                o = 0;
              o < r.length;
              ++o
            )
              if (u(e[r[o]]) && ((n = e[r[o]]()), a(n))) return n;
            throw new TypeError("No default value");
          };
        e.exports = function (e) {
          return a(e) ? e : 1 < arguments.length ? r(e, arguments[1]) : r(e);
        };
      },
      function (e, t, n) {
        "use strict";
        var s = Array.prototype.slice,
          l = Object.prototype.toString;
        e.exports = function (t) {
          var n = this;
          if ("function" != typeof n || "[object Function]" !== l.call(n))
            throw new TypeError(
              "Function.prototype.bind called on incompatible " + n
            );
          for (
            var r = s.call(arguments, 1),
              e = Math.max(0, n.length - r.length),
              o = [],
              i = 0;
            i < e;
            i++
          )
            o.push("$" + i);
          var a,
            u = Function(
              "binder",
              "return function (" +
                o.join(",") +
                "){ return binder.apply(this,arguments); }"
            )(function () {
              var e;
              return this instanceof u
                ? ((e = n.apply(this, r.concat(s.call(arguments)))),
                  Object(e) === e ? e : this)
                : n.apply(t, r.concat(s.call(arguments)));
            });
          return (
            n.prototype &&
              (((a = function () {}).prototype = n.prototype),
              (u.prototype = new a()),
              (a.prototype = null)),
            u
          );
        };
      },
      function (e, t, n) {
        e.exports = (function () {
          "use strict";
          function s(e) {
            return '<span style="color: slategray">' + e + "</span>";
          }
          var l = (function (e, t) {
              return (t = { exports: {} }), e(t, t.exports), t.exports;
            })(function (e) {
              var t = (e.exports = function () {
                return new RegExp(
                  "(?:" + t.line().source + ")|(?:" + t.block().source + ")",
                  "gm"
                );
              });
              (t.line = function () {
                return /(?:^|\s)\/\/(.+?)$/gm;
              }),
                (t.block = function () {
                  return /\/\*([\S\s]*?)\*\//gm;
                });
            }),
            c = [
              "23AC69",
              "91C132",
              "F19726",
              "E8552D",
              "1AAB8E",
              "E1147F",
              "2980C1",
              "1BA1E6",
              "9FA0A0",
              "F19726",
              "E30B20",
              "E30B20",
              "A3338B",
            ];
          return function (e, t) {
            void 0 === t && (t = {});
            var i = t.colors;
            void 0 === i && (i = c);
            var a = 0,
              u = {},
              n =
                /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,
              r = /</,
              o = new RegExp(
                "(" + n.source + "|" + r.source + ")|(" + l().source + ")",
                "gmi"
              );
            return e.replace(o, function (e, t, n) {
              if (n) return s(n);
              if ("<" === t) return "&lt;";
              var r;
              u[t] ? (r = u[t]) : ((r = i[a]), (u[t] = r));
              var o = '<span style="color: #' + r + '">' + t + "</span>";
              return (a = ++a % i.length), o;
            });
          };
        })();
      },
      function (e, t, n) {
        "use strict";
        var r = Date.prototype.getDay,
          o = Object.prototype.toString,
          i = n(24)();
        e.exports = function (e) {
          return (
            "object" == typeof e &&
            null !== e &&
            (i
              ? (function (e) {
                  try {
                    return r.call(e), !0;
                  } catch (e) {
                    return !1;
                  }
                })(e)
              : "[object Date]" === o.call(e))
          );
        };
      },
      function (e, t, n) {
        "use strict";
        var r = String.prototype.valueOf,
          o = Object.prototype.toString,
          i = n(24)();
        e.exports = function (e) {
          return (
            "string" == typeof e ||
            ("object" == typeof e &&
              (i
                ? (function (e) {
                    try {
                      return r.call(e), !0;
                    } catch (e) {
                      return !1;
                    }
                  })(e)
                : "[object String]" === o.call(e)))
          );
        };
      },
      function (e, t, n) {
        "use strict";
        var r,
          o,
          i = Object.prototype.toString;
        n(22)()
          ? ((r = Symbol.prototype.toString),
            (o = /^Symbol\(.*\)$/),
            (e.exports = function (e) {
              if ("symbol" == typeof e) return !0;
              if ("[object Symbol]" !== i.call(e)) return !1;
              try {
                return (
                  "symbol" == typeof (t = e).valueOf() && o.test(r.call(t))
                );
              } catch (e) {
                return !1;
              }
              var t;
            }))
          : (e.exports = function (e) {
              return !1;
            });
      },
      function (e, t, n) {
        !(function (r) {
          "use strict";
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function t(e, t, n) {
            return (
              t && o(e.prototype, t),
              n && o(e, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          }
          function i(e, t) {
            if (e) {
              if ("string" == typeof e) return a(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? a(e, t)
                  : void 0
              );
            }
          }
          function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          function x(e, t) {
            var n =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (n) return (n = n.call(e)).next.bind(n);
            if (
              Array.isArray(e) ||
              (n = i(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var r = 0;
              return function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          function e() {
            return {
              baseUrl: null,
              breaks: !1,
              extensions: null,
              gfm: !0,
              headerIds: !0,
              headerPrefix: "",
              highlight: null,
              langPrefix: "language-",
              mangle: !0,
              pedantic: !1,
              renderer: null,
              sanitize: !1,
              sanitizer: null,
              silent: !1,
              smartLists: !1,
              smartypants: !1,
              tokenizer: null,
              walkTokens: null,
              xhtml: !1,
            };
          }
          function n(e) {
            r.defaults = e;
          }
          function s(e, t) {
            if (t) {
              if (A.test(e)) return e.replace(I, E);
            } else if (R.test(e)) return e.replace(P, E);
            return e;
          }
          function k(e) {
            return e.replace(L, function (e, t) {
              return (
                (t = t.toLowerCase()),
                "colon" === t
                  ? ":"
                  : "#" === t.charAt(0)
                  ? "x" === t.charAt(1)
                    ? String.fromCharCode(parseInt(t.substring(2), 16))
                    : String.fromCharCode(+t.substring(1))
                  : ""
              );
            });
          }
          function u(n, e) {
            (n = n.source || n), (e = e || "");
            var r = {
              replace: function (e, t) {
                return (
                  (t = t.source || t),
                  (t = t.replace(N, "$1")),
                  (n = n.replace(e, t)),
                  r
                );
              },
              getRegex: function () {
                return new RegExp(n, e);
              },
            };
            return r;
          }
          function l(e, t, n) {
            if (e) {
              var r;
              try {
                r = decodeURIComponent(k(n)).replace(U, "").toLowerCase();
              } catch (e) {
                return null;
              }
              if (
                0 === r.indexOf("javascript:") ||
                0 === r.indexOf("vbscript:") ||
                0 === r.indexOf("data:")
              )
                return null;
            }
            t && !Q.test(n) && (n = c(t, n));
            try {
              n = encodeURI(n).replace(/%25/g, "%");
            } catch (e) {
              return null;
            }
            return n;
          }
          function c(e, t) {
            F[" " + e] ||
              (q.test(e)
                ? (F[" " + e] = e + "/")
                : (F[" " + e] = d(e, "/", !0))),
              (e = F[" " + e]);
            var n = -1 === e.indexOf(":");
            return "//" === t.substring(0, 2)
              ? n
                ? t
                : e.replace(W, "$1") + t
              : "/" === t.charAt(0)
              ? n
                ? t
                : e.replace(V, "$1") + t
              : e + t;
          }
          function p(e) {
            for (var t, n, r = 1; r < arguments.length; r++) {
              t = arguments[r];
              for (n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }
          function f(e, t) {
            var n = e.replace(/\|/g, function (e, t, n) {
                for (var r = !1, o = t; --o >= 0 && "\\" === n[o]; ) r = !r;
                return r ? "|" : " |";
              }),
              r = n.split(/ \|/),
              o = 0;
            if (
              (r[0].trim() || r.shift(),
              r.length > 0 && !r[r.length - 1].trim() && r.pop(),
              r.length > t)
            )
              r.splice(t);
            else for (; r.length < t; ) r.push("");
            for (; o < r.length; o++) r[o] = r[o].trim().replace(/\\\|/g, "|");
            return r;
          }
          function d(e, t, n) {
            var r = e.length;
            if (0 === r) return "";
            for (var o = 0; o < r; ) {
              var i = e.charAt(r - o - 1);
              if (i !== t || n) {
                if (i === t || !n) break;
                o++;
              } else o++;
            }
            return e.substr(0, r - o);
          }
          function h(e, t) {
            if (-1 === e.indexOf(t[1])) return -1;
            for (var n = e.length, r = 0, o = 0; o < n; o++)
              if ("\\" === e[o]) o++;
              else if (e[o] === t[0]) r++;
              else if (e[o] === t[1] && --r < 0) return o;
            return -1;
          }
          function g(e) {
            e && e.sanitize && e.silent;
          }
          function v(e, t) {
            if (t < 1) return "";
            for (var n = ""; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
            return n + e;
          }
          function m(e, t, n, r) {
            var o = t.href,
              i = t.title ? s(t.title) : null,
              a = e[1].replace(/\\([\[\]])/g, "$1");
            if ("!" !== e[0].charAt(0)) {
              r.state.inLink = !0;
              var u = {
                type: "link",
                raw: n,
                href: o,
                title: i,
                text: a,
                tokens: r.inlineTokens(a, []),
              };
              return (r.state.inLink = !1), u;
            }
            return { type: "image", raw: n, href: o, title: i, text: s(a) };
          }
          function y(e, t) {
            var n = e.match(/^(\s+)(?:```)/);
            if (null === n) return t;
            var r = n[1];
            return t
              .split("\n")
              .map(function (e) {
                var t = e.match(/^\s+/);
                return null === t
                  ? e
                  : t[0].length >= r.length
                  ? e.slice(r.length)
                  : e;
              })
              .join("\n");
          }
          function b(e) {
            return e
              .replace(/---/g, "\u2014")
              .replace(/--/g, "\u2013")
              .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018")
              .replace(/'/g, "\u2019")
              .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c")
              .replace(/"/g, "\u201d")
              .replace(/\.{3}/g, "\u2026");
          }
          function D(e) {
            var t,
              n,
              r = "",
              o = e.length;
            for (t = 0; t < o; t++)
              (n = e.charCodeAt(t)),
                Math.random() > 0.5 && (n = "x" + n.toString(16)),
                (r += "&#" + n + ";");
            return r;
          }
          function w(e, n, r) {
            if (void 0 === e || null === e)
              throw new Error("marked(): input parameter is undefined or null");
            if ("string" != typeof e)
              throw new Error(
                "marked(): input parameter is of type " +
                  Object.prototype.toString.call(e) +
                  ", string expected"
              );
            if (
              ("function" == typeof n && ((r = n), (n = null)),
              (n = p({}, w.defaults, n || {})),
              g(n),
              r)
            ) {
              var o,
                i = n.highlight;
              try {
                o = B.lex(e, n);
              } catch (e) {
                return r(e);
              }
              var a = function (t) {
                var e;
                if (!t)
                  try {
                    n.walkTokens && w.walkTokens(o, n.walkTokens),
                      (e = z.parse(o, n));
                  } catch (e) {
                    t = e;
                  }
                return (n.highlight = i), t ? r(t) : r(null, e);
              };
              if (!i || i.length < 3) return a();
              if ((delete n.highlight, !o.length)) return a();
              var u = 0;
              return (
                w.walkTokens(o, function (n) {
                  "code" === n.type &&
                    (u++,
                    setTimeout(function () {
                      i(n.text, n.lang, function (e, t) {
                        if (e) return a(e);
                        null != t &&
                          t !== n.text &&
                          ((n.text = t), (n.escaped = !0)),
                          0 === --u && a();
                      });
                    }, 0));
                }),
                void (0 === u && a())
              );
            }
            try {
              var t = B.lex(e, n);
              return (
                n.walkTokens && w.walkTokens(t, n.walkTokens), z.parse(t, n)
              );
            } catch (e) {
              if (
                ((e.message +=
                  "\nPlease report this to https://github.com/markedjs/marked."),
                n.silent)
              )
                return (
                  "<p>An error occurred:</p><pre>" +
                  s(e.message + "", !0) +
                  "</pre>"
                );
              throw e;
            }
          }
          r.defaults = e();
          var A = /[&<>"']/,
            I = /[&<>"']/g,
            R = /[<>"']|&(?!#?\w+;)/,
            P = /[<>"']|&(?!#?\w+;)/g,
            M = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            },
            E = function (e) {
              return M[e];
            },
            L = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
            N = /(^|[^\[])\^/g,
            U = /[^\w:]/g,
            Q = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,
            F = {},
            q = /^[^:]+:\/*[^/]*$/,
            W = /^([^:]+:)[\s\S]*$/,
            V = /^([^:]+:\/*[^/]*)[\s\S]*$/,
            C = { exec: function () {} },
            _ = (function () {
              function e(e) {
                this.options = e || r.defaults;
              }
              var t = e.prototype;
              return (
                (t.space = function (e) {
                  var t = this.rules.block.newline.exec(e);
                  if (t && t[0].length > 0) return { type: "space", raw: t[0] };
                }),
                (t.code = function (e) {
                  var t = this.rules.block.code.exec(e);
                  if (t) {
                    var n = t[0].replace(/^ {1,4}/gm, "");
                    return {
                      type: "code",
                      raw: t[0],
                      codeBlockStyle: "indented",
                      text: this.options.pedantic ? n : d(n, "\n"),
                    };
                  }
                }),
                (t.fences = function (e) {
                  var t = this.rules.block.fences.exec(e);
                  if (t) {
                    var n = t[0],
                      r = y(n, t[3] || "");
                    return {
                      type: "code",
                      raw: n,
                      lang: t[2] ? t[2].trim() : t[2],
                      text: r,
                    };
                  }
                }),
                (t.heading = function (e) {
                  var t = this.rules.block.heading.exec(e);
                  if (t) {
                    var n = t[2].trim();
                    if (/#$/.test(n)) {
                      var r = d(n, "#");
                      this.options.pedantic
                        ? (n = r.trim())
                        : (r && !/ $/.test(r)) || (n = r.trim());
                    }
                    var o = {
                      type: "heading",
                      raw: t[0],
                      depth: t[1].length,
                      text: n,
                      tokens: [],
                    };
                    return this.lexer.inline(o.text, o.tokens), o;
                  }
                }),
                (t.hr = function (e) {
                  var t = this.rules.block.hr.exec(e);
                  if (t) return { type: "hr", raw: t[0] };
                }),
                (t.blockquote = function (e) {
                  var t = this.rules.block.blockquote.exec(e);
                  if (t) {
                    var n = t[0].replace(/^ *> ?/gm, "");
                    return {
                      type: "blockquote",
                      raw: t[0],
                      tokens: this.lexer.blockTokens(n, []),
                      text: n,
                    };
                  }
                }),
                (t.list = function (e) {
                  var t = this.rules.block.list.exec(e);
                  if (t) {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      u,
                      s,
                      l,
                      c,
                      p,
                      f,
                      d,
                      h = t[1].trim(),
                      g = h.length > 1,
                      v = {
                        type: "list",
                        raw: "",
                        ordered: g,
                        start: g ? +h.slice(0, -1) : "",
                        loose: !1,
                        items: [],
                      };
                    (h = g ? "\\d{1,9}\\" + h.slice(-1) : "\\" + h),
                      this.options.pedantic && (h = g ? h : "[*+-]");
                    for (
                      var m = new RegExp(
                        "^( {0,3}" + h + ")((?: [^\\n]*)?(?:\\n|$))"
                      );
                      e &&
                      ((d = !1), (t = m.exec(e))) &&
                      !this.rules.block.hr.test(e);

                    ) {
                      if (
                        ((n = t[0]),
                        (e = e.substring(n.length)),
                        (l = t[2].split("\n", 1)[0]),
                        (c = e.split("\n", 1)[0]),
                        this.options.pedantic
                          ? ((i = 2), (f = l.trimLeft()))
                          : ((i = t[2].search(/[^ ]/)),
                            (i = i > 4 ? 1 : i),
                            (f = l.slice(i)),
                            (i += t[1].length)),
                        (u = !1),
                        !l &&
                          /^ *$/.test(c) &&
                          ((n += c + "\n"),
                          (e = e.substring(c.length + 1)),
                          (d = !0)),
                        !d)
                      )
                        for (
                          var y = new RegExp(
                            "^ {0," +
                              Math.min(3, i - 1) +
                              "}(?:[*+-]|\\d{1,9}[.)])"
                          );
                          e &&
                          ((p = e.split("\n", 1)[0]),
                          (l = p),
                          this.options.pedantic &&
                            (l = l.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                          !y.test(l));

                        ) {
                          if (l.search(/[^ ]/) >= i || !l.trim())
                            f += "\n" + l.slice(i);
                          else {
                            if (u) break;
                            f += "\n" + l;
                          }
                          u || l.trim() || (u = !0),
                            (n += p + "\n"),
                            (e = e.substring(p.length + 1));
                        }
                      v.loose ||
                        (s ? (v.loose = !0) : /\n *\n *$/.test(n) && (s = !0)),
                        this.options.gfm &&
                          (r = /^\[[ xX]\] /.exec(f)) &&
                          ((o = "[ ] " !== r[0]),
                          (f = f.replace(/^\[[ xX]\] +/, ""))),
                        v.items.push({
                          type: "list_item",
                          raw: n,
                          task: !!r,
                          checked: o,
                          loose: !1,
                          text: f,
                        }),
                        (v.raw += n);
                    }
                    (v.items[v.items.length - 1].raw = n.trimRight()),
                      (v.items[v.items.length - 1].text = f.trimRight()),
                      (v.raw = v.raw.trimRight());
                    var b = v.items.length;
                    for (a = 0; a < b; a++) {
                      (this.lexer.state.top = !1),
                        (v.items[a].tokens = this.lexer.blockTokens(
                          v.items[a].text,
                          []
                        ));
                      var D = v.items[a].tokens.filter(function (e) {
                          return "space" === e.type;
                        }),
                        w = D.every(function (e) {
                          for (
                            var t, n = e.raw.split(""), r = 0, o = x(n);
                            !(t = o()).done;

                          )
                            if (("\n" === t.value && (r += 1), r > 1))
                              return !0;
                          return !1;
                        });
                      !v.loose &&
                        D.length &&
                        w &&
                        ((v.loose = !0), (v.items[a].loose = !0));
                    }
                    return v;
                  }
                }),
                (t.html = function (e) {
                  var t = this.rules.block.html.exec(e);
                  if (t) {
                    var n = {
                      type: "html",
                      raw: t[0],
                      pre:
                        !this.options.sanitizer &&
                        ("pre" === t[1] ||
                          "script" === t[1] ||
                          "style" === t[1]),
                      text: t[0],
                    };
                    return (
                      this.options.sanitize &&
                        ((n.type = "paragraph"),
                        (n.text = this.options.sanitizer
                          ? this.options.sanitizer(t[0])
                          : s(t[0])),
                        (n.tokens = []),
                        this.lexer.inline(n.text, n.tokens)),
                      n
                    );
                  }
                }),
                (t.def = function (e) {
                  var t = this.rules.block.def.exec(e);
                  if (t) {
                    t[3] && (t[3] = t[3].substring(1, t[3].length - 1));
                    return {
                      type: "def",
                      tag: t[1].toLowerCase().replace(/\s+/g, " "),
                      raw: t[0],
                      href: t[2],
                      title: t[3],
                    };
                  }
                }),
                (t.table = function (e) {
                  var t = this.rules.block.table.exec(e);
                  if (t) {
                    var n = {
                      type: "table",
                      header: f(t[1]).map(function (e) {
                        return { text: e };
                      }),
                      align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                      rows:
                        t[3] && t[3].trim()
                          ? t[3].replace(/\n[ \t]*$/, "").split("\n")
                          : [],
                    };
                    if (n.header.length === n.align.length) {
                      n.raw = t[0];
                      var r,
                        o,
                        i,
                        a,
                        u = n.align.length;
                      for (r = 0; r < u; r++)
                        /^ *-+: *$/.test(n.align[r])
                          ? (n.align[r] = "right")
                          : /^ *:-+: *$/.test(n.align[r])
                          ? (n.align[r] = "center")
                          : /^ *:-+ *$/.test(n.align[r])
                          ? (n.align[r] = "left")
                          : (n.align[r] = null);
                      for (u = n.rows.length, r = 0; r < u; r++)
                        n.rows[r] = f(n.rows[r], n.header.length).map(function (
                          e
                        ) {
                          return { text: e };
                        });
                      for (u = n.header.length, o = 0; o < u; o++)
                        (n.header[o].tokens = []),
                          this.lexer.inlineTokens(
                            n.header[o].text,
                            n.header[o].tokens
                          );
                      for (u = n.rows.length, o = 0; o < u; o++)
                        for (a = n.rows[o], i = 0; i < a.length; i++)
                          (a[i].tokens = []),
                            this.lexer.inlineTokens(a[i].text, a[i].tokens);
                      return n;
                    }
                  }
                }),
                (t.lheading = function (e) {
                  var t = this.rules.block.lheading.exec(e);
                  if (t) {
                    var n = {
                      type: "heading",
                      raw: t[0],
                      depth: "=" === t[2].charAt(0) ? 1 : 2,
                      text: t[1],
                      tokens: [],
                    };
                    return this.lexer.inline(n.text, n.tokens), n;
                  }
                }),
                (t.paragraph = function (e) {
                  var t = this.rules.block.paragraph.exec(e);
                  if (t) {
                    var n = {
                      type: "paragraph",
                      raw: t[0],
                      text:
                        "\n" === t[1].charAt(t[1].length - 1)
                          ? t[1].slice(0, -1)
                          : t[1],
                      tokens: [],
                    };
                    return this.lexer.inline(n.text, n.tokens), n;
                  }
                }),
                (t.text = function (e) {
                  var t = this.rules.block.text.exec(e);
                  if (t) {
                    var n = { type: "text", raw: t[0], text: t[0], tokens: [] };
                    return this.lexer.inline(n.text, n.tokens), n;
                  }
                }),
                (t.escape = function (e) {
                  var t = this.rules.inline.escape.exec(e);
                  if (t) return { type: "escape", raw: t[0], text: s(t[1]) };
                }),
                (t.tag = function (e) {
                  var t = this.rules.inline.tag.exec(e);
                  if (t)
                    return (
                      !this.lexer.state.inLink && /^<a /i.test(t[0])
                        ? (this.lexer.state.inLink = !0)
                        : this.lexer.state.inLink &&
                          /^<\/a>/i.test(t[0]) &&
                          (this.lexer.state.inLink = !1),
                      !this.lexer.state.inRawBlock &&
                      /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                        ? (this.lexer.state.inRawBlock = !0)
                        : this.lexer.state.inRawBlock &&
                          /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                          (this.lexer.state.inRawBlock = !1),
                      {
                        type: this.options.sanitize ? "text" : "html",
                        raw: t[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        text: this.options.sanitize
                          ? this.options.sanitizer
                            ? this.options.sanitizer(t[0])
                            : s(t[0])
                          : t[0],
                      }
                    );
                }),
                (t.link = function (e) {
                  var t = this.rules.inline.link.exec(e);
                  if (t) {
                    var n = t[2].trim();
                    if (!this.options.pedantic && /^</.test(n)) {
                      if (!/>$/.test(n)) return;
                      var r = d(n.slice(0, -1), "\\");
                      if ((n.length - r.length) % 2 == 0) return;
                    } else {
                      var o = h(t[2], "()");
                      if (o > -1) {
                        var i = 0 === t[0].indexOf("!") ? 5 : 4,
                          a = i + t[1].length + o;
                        (t[2] = t[2].substring(0, o)),
                          (t[0] = t[0].substring(0, a).trim()),
                          (t[3] = "");
                      }
                    }
                    var u = t[2],
                      s = "";
                    if (this.options.pedantic) {
                      var l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);
                      l && ((u = l[1]), (s = l[3]));
                    } else s = t[3] ? t[3].slice(1, -1) : "";
                    return (
                      (u = u.trim()),
                      /^</.test(u) &&
                        (u =
                          this.options.pedantic && !/>$/.test(n)
                            ? u.slice(1)
                            : u.slice(1, -1)),
                      m(
                        t,
                        {
                          href: u
                            ? u.replace(this.rules.inline._escapes, "$1")
                            : u,
                          title: s
                            ? s.replace(this.rules.inline._escapes, "$1")
                            : s,
                        },
                        t[0],
                        this.lexer
                      )
                    );
                  }
                }),
                (t.reflink = function (e, t) {
                  var n;
                  if (
                    (n = this.rules.inline.reflink.exec(e)) ||
                    (n = this.rules.inline.nolink.exec(e))
                  ) {
                    var r = (n[2] || n[1]).replace(/\s+/g, " ");
                    if (!(r = t[r.toLowerCase()]) || !r.href) {
                      var o = n[0].charAt(0);
                      return { type: "text", raw: o, text: o };
                    }
                    return m(n, r, n[0], this.lexer);
                  }
                }),
                (t.emStrong = function (e, t, n) {
                  void 0 === n && (n = "");
                  var r = this.rules.inline.emStrong.lDelim.exec(e);
                  if (
                    r &&
                    (!r[3] ||
                      !n.match(
                        /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                      ))
                  ) {
                    var o = r[1] || r[2] || "";
                    if (
                      !o ||
                      (o && ("" === n || this.rules.inline.punctuation.exec(n)))
                    ) {
                      var i,
                        a,
                        u = r[0].length - 1,
                        s = u,
                        l = 0,
                        c =
                          "*" === r[0][0]
                            ? this.rules.inline.emStrong.rDelimAst
                            : this.rules.inline.emStrong.rDelimUnd;
                      for (
                        c.lastIndex = 0, t = t.slice(-1 * e.length + u);
                        null != (r = c.exec(t));

                      )
                        if ((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]))
                          if (((a = i.length), r[3] || r[4])) s += a;
                          else if (!((r[5] || r[6]) && u % 3) || (u + a) % 3) {
                            if (!((s -= a) > 0)) {
                              if (
                                ((a = Math.min(a, a + s + l)),
                                Math.min(u, a) % 2)
                              ) {
                                var p = e.slice(1, u + r.index + a);
                                return {
                                  type: "em",
                                  raw: e.slice(0, u + r.index + a + 1),
                                  text: p,
                                  tokens: this.lexer.inlineTokens(p, []),
                                };
                              }
                              var f = e.slice(2, u + r.index + a - 1);
                              return {
                                type: "strong",
                                raw: e.slice(0, u + r.index + a + 1),
                                text: f,
                                tokens: this.lexer.inlineTokens(f, []),
                              };
                            }
                          } else l += a;
                    }
                  }
                }),
                (t.codespan = function (e) {
                  var t = this.rules.inline.code.exec(e);
                  if (t) {
                    var n = t[2].replace(/\n/g, " "),
                      r = /[^ ]/.test(n),
                      o = /^ /.test(n) && / $/.test(n);
                    return (
                      r && o && (n = n.substring(1, n.length - 1)),
                      (n = s(n, !0)),
                      { type: "codespan", raw: t[0], text: n }
                    );
                  }
                }),
                (t.br = function (e) {
                  var t = this.rules.inline.br.exec(e);
                  if (t) return { type: "br", raw: t[0] };
                }),
                (t.del = function (e) {
                  var t = this.rules.inline.del.exec(e);
                  if (t)
                    return {
                      type: "del",
                      raw: t[0],
                      text: t[2],
                      tokens: this.lexer.inlineTokens(t[2], []),
                    };
                }),
                (t.autolink = function (e, t) {
                  var n = this.rules.inline.autolink.exec(e);
                  if (n) {
                    var r, o;
                    return (
                      "@" === n[2]
                        ? ((r = s(this.options.mangle ? t(n[1]) : n[1])),
                          (o = "mailto:" + r))
                        : ((r = s(n[1])), (o = r)),
                      {
                        type: "link",
                        raw: n[0],
                        text: r,
                        href: o,
                        tokens: [{ type: "text", raw: r, text: r }],
                      }
                    );
                  }
                }),
                (t.url = function (e, t) {
                  var n;
                  if ((n = this.rules.inline.url.exec(e))) {
                    var r, o;
                    if ("@" === n[2])
                      (r = s(this.options.mangle ? t(n[0]) : n[0])),
                        (o = "mailto:" + r);
                    else {
                      var i;
                      do {
                        (i = n[0]),
                          (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
                      } while (i !== n[0]);
                      (r = s(n[0])), (o = "www." === n[1] ? "http://" + r : r);
                    }
                    return {
                      type: "link",
                      raw: n[0],
                      text: r,
                      href: o,
                      tokens: [{ type: "text", raw: r, text: r }],
                    };
                  }
                }),
                (t.inlineText = function (e, t) {
                  var n = this.rules.inline.text.exec(e);
                  if (n) {
                    var r;
                    return (
                      (r = this.lexer.state.inRawBlock
                        ? this.options.sanitize
                          ? this.options.sanitizer
                            ? this.options.sanitizer(n[0])
                            : s(n[0])
                          : n[0]
                        : s(this.options.smartypants ? t(n[0]) : n[0])),
                      { type: "text", raw: n[0], text: r }
                    );
                  }
                }),
                e
              );
            })(),
            S = {
              newline: /^(?: *(?:\n|$))+/,
              code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
              fences:
                /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
              hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
              heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
              blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
              list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
              html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
              def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
              table: C,
              lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
              _paragraph:
                /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
              text: /^[^\n]+/,
              _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
              _title:
                /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
            },
            O =
              ((S.def = u(S.def)
                .replace("label", S._label)
                .replace("title", S._title)
                .getRegex()),
              (S.bullet = /(?:[*+-]|\d{1,9}[.)])/),
              (S.listItemStart = u(/^( *)(bull) */)
                .replace("bull", S.bullet)
                .getRegex()),
              (S.list = u(S.list)
                .replace(/bull/g, S.bullet)
                .replace(
                  "hr",
                  "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
                )
                .replace("def", "\\n+(?=" + S.def.source + ")")
                .getRegex()),
              (S._tag =
                "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
              (S._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
              (S.html = u(S.html, "i")
                .replace("comment", S._comment)
                .replace("tag", S._tag)
                .replace(
                  "attribute",
                  / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
                )
                .getRegex()),
              (S.paragraph = u(S._paragraph)
                .replace("hr", S.hr)
                .replace("heading", " {0,3}#{1,6} ")
                .replace("|lheading", "")
                .replace("|table", "")
                .replace("blockquote", " {0,3}>")
                .replace(
                  "fences",
                  " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n"
                )
                .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
                .replace(
                  "html",
                  "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
                )
                .replace("tag", S._tag)
                .getRegex()),
              (S.blockquote = u(S.blockquote)
                .replace("paragraph", S.paragraph)
                .getRegex()),
              (S.normal = p({}, S)),
              (S.gfm = p({}, S.normal, {
                table:
                  "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
              })),
              (S.gfm.table = u(S.gfm.table)
                .replace("hr", S.hr)
                .replace("heading", " {0,3}#{1,6} ")
                .replace("blockquote", " {0,3}>")
                .replace("code", " {4}[^\\n]")
                .replace(
                  "fences",
                  " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n"
                )
                .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
                .replace(
                  "html",
                  "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
                )
                .replace("tag", S._tag)
                .getRegex()),
              (S.gfm.paragraph = u(S._paragraph)
                .replace("hr", S.hr)
                .replace("heading", " {0,3}#{1,6} ")
                .replace("|lheading", "")
                .replace("table", S.gfm.table)
                .replace("blockquote", " {0,3}>")
                .replace(
                  "fences",
                  " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n"
                )
                .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
                .replace(
                  "html",
                  "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
                )
                .replace("tag", S._tag)
                .getRegex()),
              (S.pedantic = p({}, S.normal, {
                html: u(
                  "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
                )
                  .replace("comment", S._comment)
                  .replace(
                    /tag/g,
                    "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                  )
                  .getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^(#{1,6})(.*)(?:\n+|$)/,
                fences: C,
                paragraph: u(S.normal._paragraph)
                  .replace("hr", S.hr)
                  .replace("heading", " *#{1,6} *[^\n]")
                  .replace("lheading", S.lheading)
                  .replace("blockquote", " {0,3}>")
                  .replace("|fences", "")
                  .replace("|list", "")
                  .replace("|html", "")
                  .getRegex(),
              })),
              {
                escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                url: C,
                tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                reflink: /^!?\[(label)\]\[(ref)\]/,
                nolink: /^!?\[(ref)\](?:\[\])?/,
                reflinkSearch: "reflink|nolink(?!\\()",
                emStrong: {
                  lDelim:
                    /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
                  rDelimAst:
                    /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
                  rDelimUnd:
                    /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
                },
                code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                br: /^( {2,}|\\)\n(?!\s*$)/,
                del: C,
                text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                punctuation: /^([\spunctuation])/,
                _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",
              }),
            B =
              ((O.punctuation = u(O.punctuation)
                .replace(/punctuation/g, O._punctuation)
                .getRegex()),
              (O.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
              (O.escapedEmSt = /\\\*|\\_/g),
              (O._comment = u(S._comment)
                .replace("(?:--\x3e|$)", "--\x3e")
                .getRegex()),
              (O.emStrong.lDelim = u(O.emStrong.lDelim)
                .replace(/punct/g, O._punctuation)
                .getRegex()),
              (O.emStrong.rDelimAst = u(O.emStrong.rDelimAst, "g")
                .replace(/punct/g, O._punctuation)
                .getRegex()),
              (O.emStrong.rDelimUnd = u(O.emStrong.rDelimUnd, "g")
                .replace(/punct/g, O._punctuation)
                .getRegex()),
              (O._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
              (O._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
              (O._email =
                /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
              (O.autolink = u(O.autolink)
                .replace("scheme", O._scheme)
                .replace("email", O._email)
                .getRegex()),
              (O._attribute =
                /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
              (O.tag = u(O.tag)
                .replace("comment", O._comment)
                .replace("attribute", O._attribute)
                .getRegex()),
              (O._label =
                /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
              (O._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
              (O._title =
                /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
              (O.link = u(O.link)
                .replace("label", O._label)
                .replace("href", O._href)
                .replace("title", O._title)
                .getRegex()),
              (O.reflink = u(O.reflink)
                .replace("label", O._label)
                .replace("ref", S._label)
                .getRegex()),
              (O.nolink = u(O.nolink).replace("ref", S._label).getRegex()),
              (O.reflinkSearch = u(O.reflinkSearch, "g")
                .replace("reflink", O.reflink)
                .replace("nolink", O.nolink)
                .getRegex()),
              (O.normal = p({}, O)),
              (O.pedantic = p({}, O.normal, {
                strong: {
                  start: /^__|\*\*/,
                  middle:
                    /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                  endAst: /\*\*(?!\*)/g,
                  endUnd: /__(?!_)/g,
                },
                em: {
                  start: /^_|\*/,
                  middle:
                    /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                  endAst: /\*(?!\*)/g,
                  endUnd: /_(?!_)/g,
                },
                link: u(/^!?\[(label)\]\((.*?)\)/)
                  .replace("label", O._label)
                  .getRegex(),
                reflink: u(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                  .replace("label", O._label)
                  .getRegex(),
              })),
              (O.gfm = p({}, O.normal, {
                escape: u(O.escape).replace("])", "~|])").getRegex(),
                _extended_email:
                  /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                _backpedal:
                  /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
              })),
              (O.gfm.url = u(O.gfm.url, "i")
                .replace("email", O.gfm._extended_email)
                .getRegex()),
              (O.breaks = p({}, O.gfm, {
                br: u(O.br).replace("{2,}", "*").getRegex(),
                text: u(O.gfm.text)
                  .replace("\\b_", "\\b_| {2,}\\n")
                  .replace(/\{2,\}/g, "*")
                  .getRegex(),
              })),
              (function () {
                function n(e) {
                  (this.tokens = []),
                    (this.tokens.links = Object.create(null)),
                    (this.options = e || r.defaults),
                    (this.options.tokenizer =
                      this.options.tokenizer || new _()),
                    (this.tokenizer = this.options.tokenizer),
                    (this.tokenizer.options = this.options),
                    (this.tokenizer.lexer = this),
                    (this.inlineQueue = []),
                    (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
                  var t = { block: S.normal, inline: O.normal };
                  this.options.pedantic
                    ? ((t.block = S.pedantic), (t.inline = O.pedantic))
                    : this.options.gfm &&
                      ((t.block = S.gfm),
                      this.options.breaks
                        ? (t.inline = O.breaks)
                        : (t.inline = O.gfm)),
                    (this.tokenizer.rules = t);
                }
                (n.lex = function (e, t) {
                  return new n(t).lex(e);
                }),
                  (n.lexInline = function (e, t) {
                    return new n(t).inlineTokens(e);
                  });
                var e = n.prototype;
                return (
                  (e.lex = function (e) {
                    (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ")),
                      this.blockTokens(e, this.tokens);
                    for (var t; (t = this.inlineQueue.shift()); )
                      this.inlineTokens(t.src, t.tokens);
                    return this.tokens;
                  }),
                  (e.blockTokens = function (o, t) {
                    var i = this;
                    void 0 === t && (t = []),
                      this.options.pedantic && (o = o.replace(/^ +$/gm, ""));
                    for (var n, e, a, r; o; )
                      if (
                        !(
                          this.options.extensions &&
                          this.options.extensions.block &&
                          this.options.extensions.block.some(function (e) {
                            return (
                              !!(n = e.call({ lexer: i }, o, t)) &&
                              ((o = o.substring(n.raw.length)), t.push(n), !0)
                            );
                          })
                        )
                      )
                        if ((n = this.tokenizer.space(o)))
                          (o = o.substring(n.raw.length)),
                            1 === n.raw.length && t.length > 0
                              ? (t[t.length - 1].raw += "\n")
                              : t.push(n);
                        else if ((n = this.tokenizer.code(o)))
                          (o = o.substring(n.raw.length)),
                            (e = t[t.length - 1]),
                            !e || ("paragraph" !== e.type && "text" !== e.type)
                              ? t.push(n)
                              : ((e.raw += "\n" + n.raw),
                                (e.text += "\n" + n.text),
                                (this.inlineQueue[
                                  this.inlineQueue.length - 1
                                ].src = e.text));
                        else if ((n = this.tokenizer.fences(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.heading(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.hr(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.blockquote(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.list(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.html(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.def(o)))
                          (o = o.substring(n.raw.length)),
                            (e = t[t.length - 1]),
                            !e || ("paragraph" !== e.type && "text" !== e.type)
                              ? this.tokens.links[n.tag] ||
                                (this.tokens.links[n.tag] = {
                                  href: n.href,
                                  title: n.title,
                                })
                              : ((e.raw += "\n" + n.raw),
                                (e.text += "\n" + n.raw),
                                (this.inlineQueue[
                                  this.inlineQueue.length - 1
                                ].src = e.text));
                        else if ((n = this.tokenizer.table(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.lheading(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if (
                          ((a = o),
                          this.options.extensions &&
                            this.options.extensions.startBlock &&
                            (function () {
                              var t = 1 / 0,
                                n = o.slice(1),
                                r = void 0;
                              i.options.extensions.startBlock.forEach(function (
                                e
                              ) {
                                "number" ==
                                  typeof (r = e.call({ lexer: this }, n)) &&
                                  r >= 0 &&
                                  (t = Math.min(t, r));
                              }),
                                t < 1 / 0 &&
                                  t >= 0 &&
                                  (a = o.substring(0, t + 1));
                            })(),
                          this.state.top && (n = this.tokenizer.paragraph(a)))
                        )
                          (e = t[t.length - 1]),
                            r && "paragraph" === e.type
                              ? ((e.raw += "\n" + n.raw),
                                (e.text += "\n" + n.text),
                                this.inlineQueue.pop(),
                                (this.inlineQueue[
                                  this.inlineQueue.length - 1
                                ].src = e.text))
                              : t.push(n),
                            (r = a.length !== o.length),
                            (o = o.substring(n.raw.length));
                        else if ((n = this.tokenizer.text(o)))
                          (o = o.substring(n.raw.length)),
                            (e = t[t.length - 1]),
                            e && "text" === e.type
                              ? ((e.raw += "\n" + n.raw),
                                (e.text += "\n" + n.text),
                                this.inlineQueue.pop(),
                                (this.inlineQueue[
                                  this.inlineQueue.length - 1
                                ].src = e.text))
                              : t.push(n);
                        else if (o) {
                          var u = "Infinite loop on byte: " + o.charCodeAt(0);
                          if (this.options.silent) break;
                          throw new Error(u);
                        }
                    return (this.state.top = !0), t;
                  }),
                  (e.inline = function (e, t) {
                    this.inlineQueue.push({ src: e, tokens: t });
                  }),
                  (e.inlineTokens = function (o, t) {
                    var i = this;
                    void 0 === t && (t = []);
                    var n,
                      e,
                      a,
                      r,
                      u,
                      s,
                      l = o;
                    if (this.tokens.links) {
                      var c = Object.keys(this.tokens.links);
                      if (c.length > 0)
                        for (
                          ;
                          null !=
                          (r =
                            this.tokenizer.rules.inline.reflinkSearch.exec(l));

                        )
                          c.includes(
                            r[0].slice(r[0].lastIndexOf("[") + 1, -1)
                          ) &&
                            (l =
                              l.slice(0, r.index) +
                              "[" +
                              v("a", r[0].length - 2) +
                              "]" +
                              l.slice(
                                this.tokenizer.rules.inline.reflinkSearch
                                  .lastIndex
                              ));
                    }
                    for (
                      ;
                      null !=
                      (r = this.tokenizer.rules.inline.blockSkip.exec(l));

                    )
                      l =
                        l.slice(0, r.index) +
                        "[" +
                        v("a", r[0].length - 2) +
                        "]" +
                        l.slice(
                          this.tokenizer.rules.inline.blockSkip.lastIndex
                        );
                    for (
                      ;
                      null !=
                      (r = this.tokenizer.rules.inline.escapedEmSt.exec(l));

                    )
                      l =
                        l.slice(0, r.index) +
                        "++" +
                        l.slice(
                          this.tokenizer.rules.inline.escapedEmSt.lastIndex
                        );
                    for (; o; )
                      if (
                        (u || (s = ""),
                        (u = !1),
                        !(
                          this.options.extensions &&
                          this.options.extensions.inline &&
                          this.options.extensions.inline.some(function (e) {
                            return (
                              !!(n = e.call({ lexer: i }, o, t)) &&
                              ((o = o.substring(n.raw.length)), t.push(n), !0)
                            );
                          })
                        ))
                      )
                        if ((n = this.tokenizer.escape(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.tag(o)))
                          (o = o.substring(n.raw.length)),
                            (e = t[t.length - 1]),
                            e && "text" === n.type && "text" === e.type
                              ? ((e.raw += n.raw), (e.text += n.text))
                              : t.push(n);
                        else if ((n = this.tokenizer.link(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if (
                          (n = this.tokenizer.reflink(o, this.tokens.links))
                        )
                          (o = o.substring(n.raw.length)),
                            (e = t[t.length - 1]),
                            e && "text" === n.type && "text" === e.type
                              ? ((e.raw += n.raw), (e.text += n.text))
                              : t.push(n);
                        else if ((n = this.tokenizer.emStrong(o, l, s)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.codespan(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.br(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.del(o)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if ((n = this.tokenizer.autolink(o, D)))
                          (o = o.substring(n.raw.length)), t.push(n);
                        else if (
                          this.state.inLink ||
                          !(n = this.tokenizer.url(o, D))
                        ) {
                          if (
                            ((a = o),
                            this.options.extensions &&
                              this.options.extensions.startInline &&
                              (function () {
                                var t = 1 / 0,
                                  n = o.slice(1),
                                  r = void 0;
                                i.options.extensions.startInline.forEach(
                                  function (e) {
                                    "number" ==
                                      typeof (r = e.call({ lexer: this }, n)) &&
                                      r >= 0 &&
                                      (t = Math.min(t, r));
                                  }
                                ),
                                  t < 1 / 0 &&
                                    t >= 0 &&
                                    (a = o.substring(0, t + 1));
                              })(),
                            (n = this.tokenizer.inlineText(a, b)))
                          )
                            (o = o.substring(n.raw.length)),
                              "_" !== n.raw.slice(-1) && (s = n.raw.slice(-1)),
                              (u = !0),
                              (e = t[t.length - 1]),
                              e && "text" === e.type
                                ? ((e.raw += n.raw), (e.text += n.text))
                                : t.push(n);
                          else if (o) {
                            var p = "Infinite loop on byte: " + o.charCodeAt(0);
                            if (this.options.silent) break;
                            throw new Error(p);
                          }
                        } else (o = o.substring(n.raw.length)), t.push(n);
                    return t;
                  }),
                  t(n, null, [
                    {
                      key: "rules",
                      get: function () {
                        return { block: S, inline: O };
                      },
                    },
                  ]),
                  n
                );
              })()),
            $ = (function () {
              function e(e) {
                this.options = e || r.defaults;
              }
              var t = e.prototype;
              return (
                (t.code = function (e, t, n) {
                  var r = (t || "").match(/\S*/)[0];
                  if (this.options.highlight) {
                    var o = this.options.highlight(e, r);
                    null != o && o !== e && ((n = !0), (e = o));
                  }
                  return (
                    (e = e.replace(/\n$/, "") + "\n"),
                    r
                      ? '<pre><code class="' +
                        this.options.langPrefix +
                        s(r, !0) +
                        '">' +
                        (n ? e : s(e, !0)) +
                        "</code></pre>\n"
                      : "<pre><code>" + (n ? e : s(e, !0)) + "</code></pre>\n"
                  );
                }),
                (t.blockquote = function (e) {
                  return "<blockquote>\n" + e + "</blockquote>\n";
                }),
                (t.html = function (e) {
                  return e;
                }),
                (t.heading = function (e, t, n, r) {
                  return this.options.headerIds
                    ? "<h" +
                        t +
                        ' id="' +
                        this.options.headerPrefix +
                        r.slug(n) +
                        '">' +
                        e +
                        "</h" +
                        t +
                        ">\n"
                    : "<h" + t + ">" + e + "</h" + t + ">\n";
                }),
                (t.hr = function () {
                  return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
                }),
                (t.list = function (e, t, n) {
                  var r = t ? "ol" : "ul";
                  return (
                    "<" +
                    r +
                    (t && 1 !== n ? ' start="' + n + '"' : "") +
                    ">\n" +
                    e +
                    "</" +
                    r +
                    ">\n"
                  );
                }),
                (t.listitem = function (e) {
                  return "<li>" + e + "</li>\n";
                }),
                (t.checkbox = function (e) {
                  return (
                    "<input " +
                    (e ? 'checked="" ' : "") +
                    'disabled="" type="checkbox"' +
                    (this.options.xhtml ? " /" : "") +
                    "> "
                  );
                }),
                (t.paragraph = function (e) {
                  return "<p>" + e + "</p>\n";
                }),
                (t.table = function (e, t) {
                  return (
                    t && (t = "<tbody>" + t + "</tbody>"),
                    "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                  );
                }),
                (t.tablerow = function (e) {
                  return "<tr>\n" + e + "</tr>\n";
                }),
                (t.tablecell = function (e, t) {
                  var n = t.header ? "th" : "td";
                  return (
                    (t.align
                      ? "<" + n + ' align="' + t.align + '">'
                      : "<" + n + ">") +
                    e +
                    "</" +
                    n +
                    ">\n"
                  );
                }),
                (t.strong = function (e) {
                  return "<strong>" + e + "</strong>";
                }),
                (t.em = function (e) {
                  return "<em>" + e + "</em>";
                }),
                (t.codespan = function (e) {
                  return "<code>" + e + "</code>";
                }),
                (t.br = function () {
                  return this.options.xhtml ? "<br/>" : "<br>";
                }),
                (t.del = function (e) {
                  return "<del>" + e + "</del>";
                }),
                (t.link = function (e, t, n) {
                  if (
                    null ===
                    (e = l(this.options.sanitize, this.options.baseUrl, e))
                  )
                    return n;
                  var r = '<a href="' + s(e) + '"';
                  return (
                    t && (r += ' title="' + t + '"'), (r += ">" + n + "</a>")
                  );
                }),
                (t.image = function (e, t, n) {
                  if (
                    null ===
                    (e = l(this.options.sanitize, this.options.baseUrl, e))
                  )
                    return n;
                  var r = '<img src="' + e + '" alt="' + n + '"';
                  return (
                    t && (r += ' title="' + t + '"'),
                    (r += this.options.xhtml ? "/>" : ">")
                  );
                }),
                (t.text = function (e) {
                  return e;
                }),
                e
              );
            })(),
            j = (function () {
              function e() {}
              var t = e.prototype;
              return (
                (t.strong = function (e) {
                  return e;
                }),
                (t.em = function (e) {
                  return e;
                }),
                (t.codespan = function (e) {
                  return e;
                }),
                (t.del = function (e) {
                  return e;
                }),
                (t.html = function (e) {
                  return e;
                }),
                (t.text = function (e) {
                  return e;
                }),
                (t.link = function (e, t, n) {
                  return "" + n;
                }),
                (t.image = function (e, t, n) {
                  return "" + n;
                }),
                (t.br = function () {
                  return "";
                }),
                e
              );
            })(),
            T = (function () {
              function e() {
                this.seen = {};
              }
              var t = e.prototype;
              return (
                (t.serialize = function (e) {
                  return e
                    .toLowerCase()
                    .trim()
                    .replace(/<[!\/a-z].*?>/gi, "")
                    .replace(
                      /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                      ""
                    )
                    .replace(/\s/g, "-");
                }),
                (t.getNextSafeSlug = function (e, t) {
                  var n = e,
                    r = 0;
                  if (this.seen.hasOwnProperty(n)) {
                    r = this.seen[e];
                    do {
                      r++, (n = e + "-" + r);
                    } while (this.seen.hasOwnProperty(n));
                  }
                  return t || ((this.seen[e] = r), (this.seen[n] = 0)), n;
                }),
                (t.slug = function (e, t) {
                  void 0 === t && (t = {});
                  var n = this.serialize(e);
                  return this.getNextSafeSlug(n, t.dryrun);
                }),
                e
              );
            })(),
            z = (function () {
              function n(e) {
                (this.options = e || r.defaults),
                  (this.options.renderer = this.options.renderer || new $()),
                  (this.renderer = this.options.renderer),
                  (this.renderer.options = this.options),
                  (this.textRenderer = new j()),
                  (this.slugger = new T());
              }
              (n.parse = function (e, t) {
                return new n(t).parse(e);
              }),
                (n.parseInline = function (e, t) {
                  return new n(t).parseInline(e);
                });
              var e = n.prototype;
              return (
                (e.parse = function (e, t) {
                  void 0 === t && (t = !0);
                  var n,
                    r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    l,
                    c,
                    p,
                    f,
                    d,
                    h,
                    g,
                    v,
                    m,
                    y,
                    b,
                    D,
                    w = "",
                    x = e.length;
                  for (n = 0; n < x; n++)
                    if (
                      ((p = e[n]),
                      !(
                        this.options.extensions &&
                        this.options.extensions.renderers &&
                        this.options.extensions.renderers[p.type]
                      ) ||
                        (!1 ===
                          (D = this.options.extensions.renderers[p.type].call(
                            { parser: this },
                            p
                          )) &&
                          [
                            "space",
                            "hr",
                            "heading",
                            "code",
                            "table",
                            "blockquote",
                            "list",
                            "html",
                            "paragraph",
                            "text",
                          ].includes(p.type)))
                    )
                      switch (p.type) {
                        case "space":
                          continue;
                        case "hr":
                          w += this.renderer.hr();
                          continue;
                        case "heading":
                          w += this.renderer.heading(
                            this.parseInline(p.tokens),
                            p.depth,
                            k(this.parseInline(p.tokens, this.textRenderer)),
                            this.slugger
                          );
                          continue;
                        case "code":
                          w += this.renderer.code(p.text, p.lang, p.escaped);
                          continue;
                        case "table":
                          for (
                            l = "", s = "", i = p.header.length, r = 0;
                            r < i;
                            r++
                          )
                            s += this.renderer.tablecell(
                              this.parseInline(p.header[r].tokens),
                              { header: !0, align: p.align[r] }
                            );
                          for (
                            l += this.renderer.tablerow(s),
                              c = "",
                              i = p.rows.length,
                              r = 0;
                            r < i;
                            r++
                          ) {
                            for (
                              u = p.rows[r], s = "", a = u.length, o = 0;
                              o < a;
                              o++
                            )
                              s += this.renderer.tablecell(
                                this.parseInline(u[o].tokens),
                                { header: !1, align: p.align[o] }
                              );
                            c += this.renderer.tablerow(s);
                          }
                          w += this.renderer.table(l, c);
                          continue;
                        case "blockquote":
                          (c = this.parse(p.tokens)),
                            (w += this.renderer.blockquote(c));
                          continue;
                        case "list":
                          for (
                            f = p.ordered,
                              d = p.start,
                              h = p.loose,
                              i = p.items.length,
                              c = "",
                              r = 0;
                            r < i;
                            r++
                          )
                            (v = p.items[r]),
                              (m = v.checked),
                              (y = v.task),
                              (g = ""),
                              v.task &&
                                ((b = this.renderer.checkbox(m)),
                                h
                                  ? v.tokens.length > 0 &&
                                    "paragraph" === v.tokens[0].type
                                    ? ((v.tokens[0].text =
                                        b + " " + v.tokens[0].text),
                                      v.tokens[0].tokens &&
                                        v.tokens[0].tokens.length > 0 &&
                                        "text" === v.tokens[0].tokens[0].type &&
                                        (v.tokens[0].tokens[0].text =
                                          b + " " + v.tokens[0].tokens[0].text))
                                    : v.tokens.unshift({
                                        type: "text",
                                        text: b,
                                      })
                                  : (g += b)),
                              (g += this.parse(v.tokens, h)),
                              (c += this.renderer.listitem(g, y, m));
                          w += this.renderer.list(c, f, d);
                          continue;
                        case "html":
                          w += this.renderer.html(p.text);
                          continue;
                        case "paragraph":
                          w += this.renderer.paragraph(
                            this.parseInline(p.tokens)
                          );
                          continue;
                        case "text":
                          for (
                            c = p.tokens ? this.parseInline(p.tokens) : p.text;
                            n + 1 < x && "text" === e[n + 1].type;

                          )
                            (p = e[++n]),
                              (c +=
                                "\n" +
                                (p.tokens
                                  ? this.parseInline(p.tokens)
                                  : p.text));
                          w += t ? this.renderer.paragraph(c) : c;
                          continue;
                        default:
                          var A =
                            'Token with "' + p.type + '" type was not found.';
                          if (this.options.silent) return;
                          throw new Error(A);
                      }
                    else w += D || "";
                  return w;
                }),
                (e.parseInline = function (e, t) {
                  t = t || this.renderer;
                  var n,
                    r,
                    o,
                    i = "",
                    a = e.length;
                  for (n = 0; n < a; n++)
                    if (
                      ((r = e[n]),
                      !(
                        this.options.extensions &&
                        this.options.extensions.renderers &&
                        this.options.extensions.renderers[r.type]
                      ) ||
                        (!1 ===
                          (o = this.options.extensions.renderers[r.type].call(
                            { parser: this },
                            r
                          )) &&
                          [
                            "escape",
                            "html",
                            "link",
                            "image",
                            "strong",
                            "em",
                            "codespan",
                            "br",
                            "del",
                            "text",
                          ].includes(r.type)))
                    )
                      switch (r.type) {
                        case "escape":
                          i += t.text(r.text);
                          break;
                        case "html":
                          i += t.html(r.text);
                          break;
                        case "link":
                          i += t.link(
                            r.href,
                            r.title,
                            this.parseInline(r.tokens, t)
                          );
                          break;
                        case "image":
                          i += t.image(r.href, r.title, r.text);
                          break;
                        case "strong":
                          i += t.strong(this.parseInline(r.tokens, t));
                          break;
                        case "em":
                          i += t.em(this.parseInline(r.tokens, t));
                          break;
                        case "codespan":
                          i += t.codespan(r.text);
                          break;
                        case "br":
                          i += t.br();
                          break;
                        case "del":
                          i += t.del(this.parseInline(r.tokens, t));
                          break;
                        case "text":
                          i += t.text(r.text);
                          break;
                        default:
                          var u =
                            'Token with "' + r.type + '" type was not found.';
                          if (this.options.silent) return;
                          throw new Error(u);
                      }
                    else i += o || "";
                  return i;
                }),
                n
              );
            })(),
            H =
              ((w.options = w.setOptions =
                function (e) {
                  return p(w.defaults, e), n(w.defaults), w;
                }),
              (w.getDefaults = e),
              (w.defaults = r.defaults),
              (w.use = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                var r,
                  o = p.apply(void 0, [{}].concat(t)),
                  a = w.defaults.extensions || {
                    renderers: {},
                    childTokens: {},
                  };
                t.forEach(function (u) {
                  if (
                    (u.extensions &&
                      ((r = !0),
                      u.extensions.forEach(function (o) {
                        if (!o.name) throw new Error("extension name required");
                        if (o.renderer) {
                          var i = a.renderers ? a.renderers[o.name] : null;
                          a.renderers[o.name] = i
                            ? function () {
                                for (
                                  var e = arguments.length,
                                    t = new Array(e),
                                    n = 0;
                                  n < e;
                                  n++
                                )
                                  t[n] = arguments[n];
                                var r = o.renderer.apply(this, t);
                                return !1 === r && (r = i.apply(this, t)), r;
                              }
                            : o.renderer;
                        }
                        if (o.tokenizer) {
                          if (
                            !o.level ||
                            ("block" !== o.level && "inline" !== o.level)
                          )
                            throw new Error(
                              "extension level must be 'block' or 'inline'"
                            );
                          a[o.level]
                            ? a[o.level].unshift(o.tokenizer)
                            : (a[o.level] = [o.tokenizer]),
                            o.start &&
                              ("block" === o.level
                                ? a.startBlock
                                  ? a.startBlock.push(o.start)
                                  : (a.startBlock = [o.start])
                                : "inline" === o.level &&
                                  (a.startInline
                                    ? a.startInline.push(o.start)
                                    : (a.startInline = [o.start])));
                        }
                        o.childTokens &&
                          (a.childTokens[o.name] = o.childTokens);
                      })),
                    u.renderer &&
                      (function () {
                        var a = w.defaults.renderer || new $();
                        for (var e in u.renderer)
                          !(function (o) {
                            var i = a[o];
                            a[o] = function () {
                              for (
                                var e = arguments.length,
                                  t = new Array(e),
                                  n = 0;
                                n < e;
                                n++
                              )
                                t[n] = arguments[n];
                              var r = u.renderer[o].apply(a, t);
                              return !1 === r && (r = i.apply(a, t)), r;
                            };
                          })(e);
                        o.renderer = a;
                      })(),
                    u.tokenizer &&
                      (function () {
                        var a = w.defaults.tokenizer || new _();
                        for (var e in u.tokenizer)
                          !(function (o) {
                            var i = a[o];
                            a[o] = function () {
                              for (
                                var e = arguments.length,
                                  t = new Array(e),
                                  n = 0;
                                n < e;
                                n++
                              )
                                t[n] = arguments[n];
                              var r = u.tokenizer[o].apply(a, t);
                              return !1 === r && (r = i.apply(a, t)), r;
                            };
                          })(e);
                        o.tokenizer = a;
                      })(),
                    u.walkTokens)
                  ) {
                    var t = w.defaults.walkTokens;
                    o.walkTokens = function (e) {
                      u.walkTokens.call(this, e), t && t.call(this, e);
                    };
                  }
                  r && (o.extensions = a), w.setOptions(o);
                });
              }),
              (w.walkTokens = function (e, c) {
                for (var p, t = x(e); !(p = t()).done; )
                  !(function () {
                    var t = p.value;
                    switch ((c.call(w, t), t.type)) {
                      case "table":
                        for (var e, n = x(t.header); !(e = n()).done; ) {
                          var r = e.value;
                          w.walkTokens(r.tokens, c);
                        }
                        for (var o, i = x(t.rows); !(o = i()).done; )
                          for (
                            var a, u = o.value, s = x(u);
                            !(a = s()).done;

                          ) {
                            var l = a.value;
                            w.walkTokens(l.tokens, c);
                          }
                        break;
                      case "list":
                        w.walkTokens(t.items, c);
                        break;
                      default:
                        w.defaults.extensions &&
                        w.defaults.extensions.childTokens &&
                        w.defaults.extensions.childTokens[t.type]
                          ? w.defaults.extensions.childTokens[t.type].forEach(
                              function (e) {
                                w.walkTokens(t[e], c);
                              }
                            )
                          : t.tokens && w.walkTokens(t.tokens, c);
                    }
                  })();
              }),
              (w.parseInline = function (e, t) {
                if (void 0 === e || null === e)
                  throw new Error(
                    "marked.parseInline(): input parameter is undefined or null"
                  );
                if ("string" != typeof e)
                  throw new Error(
                    "marked.parseInline(): input parameter is of type " +
                      Object.prototype.toString.call(e) +
                      ", string expected"
                  );
                (t = p({}, w.defaults, t || {})), g(t);
                try {
                  var n = B.lexInline(e, t);
                  return (
                    t.walkTokens && w.walkTokens(n, t.walkTokens),
                    z.parseInline(n, t)
                  );
                } catch (e) {
                  if (
                    ((e.message +=
                      "\nPlease report this to https://github.com/markedjs/marked."),
                    t.silent)
                  )
                    return (
                      "<p>An error occurred:</p><pre>" +
                      s(e.message + "", !0) +
                      "</pre>"
                    );
                  throw e;
                }
              }),
              (w.Parser = z),
              (w.parser = z.parse),
              (w.Renderer = $),
              (w.TextRenderer = j),
              (w.Lexer = B),
              (w.lexer = B.lex),
              (w.Tokenizer = _),
              (w.Slugger = T),
              (w.parse = w).options),
            Z = w.setOptions,
            K = w.use,
            G = w.walkTokens,
            J = w.parseInline,
            X = w,
            Y = z.parse,
            ee = B.lex;
          (r.Lexer = B),
            (r.Parser = z),
            (r.Renderer = $),
            (r.Slugger = T),
            (r.TextRenderer = j),
            (r.Tokenizer = _),
            (r.getDefaults = e),
            (r.lexer = ee),
            (r.marked = w),
            (r.options = H),
            (r.parse = X),
            (r.parseInline = J),
            (r.parser = Y),
            (r.setOptions = Z),
            (r.use = K),
            (r.walkTokens = G),
            Object.defineProperty(r, "__esModule", { value: !0 });
        })(t);
      },
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          (e = e.pluralTypeToLanguages),
            (n = {}),
            c(p(e), function (e) {
              var t = e[0],
                e = e[1];
              c(e, function (e) {
                n[e] = t;
              });
            });
          var n,
            e = n;
          return e[t] || e[v.call(t, /-/, 1)[0]] || e.en;
        }
        function o(e) {
          return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function i(e, t, n, r, o) {
          if ("string" != typeof e)
            throw new TypeError(
              "Polyglot.transformPhrase expects argument #1 to be string"
            );
          if (null == t) return e;
          var i = e,
            r = r || D,
            a = "number" == typeof t ? { smart_count: t } : t;
          return (
            null != a.smart_count &&
              e &&
              ((t = o || y),
              (o = v.call(e, m)),
              (e = b(t, n || "en")),
              (n = a.smart_count),
              (t = t.pluralTypes[e](n)),
              (i = h(o[t] || o[0]))),
            g.call(i, r, function (e, t) {
              return d(a, t) && null != a[t] ? a[t] : e;
            })
          );
        }
        function a(e) {
          var e = e || {},
            t =
              ((this.phrases = {}),
              this.extend(e.phrases || {}),
              (this.currentLocale = e.locale || "en"),
              e.allowMissing ? i : null);
          (this.onMissingKey =
            "function" == typeof e.onMissingKey ? e.onMissingKey : t),
            (this.warn = e.warn || u),
            (this.tokenRegex = (function (e) {
              var t = (e && e.prefix) || "%{",
                e = (e && e.suffix) || "}";
              if (t === m || e === m)
                throw new RangeError(
                  '"' + m + '" token is reserved for pluralization'
                );
              return new RegExp(o(t) + "(.*?)" + o(e), "g");
            })(e.interpolation)),
            (this.pluralRules = e.pluralRules || y);
        }
        function u(e) {
          f(!1, e);
        }
        function s(e) {
          var t = (e = e % 100) % 10;
          return 11 != e && 1 == t
            ? 0
            : 2 <= t && t <= 4 && !(12 <= e && e <= 14)
            ? 1
            : 2;
        }
        var l,
          c = n(43),
          p = n(89),
          f = n(94),
          d = n(25),
          h = n(92),
          g = String.prototype.replace,
          v = String.prototype.split,
          m = "||||",
          y = {
            pluralTypes: {
              arabic: function (e) {
                if (e < 3) return e;
                e %= 100;
                return 3 <= e && e <= 10 ? 3 : 11 <= e ? 4 : 5;
              },
              bosnian_serbian: s,
              chinese: function () {
                return 0;
              },
              croatian: s,
              french: function (e) {
                return 2 <= e ? 1 : 0;
              },
              german: function (e) {
                return 1 !== e ? 1 : 0;
              },
              russian: s,
              lithuanian: function (e) {
                return e % 10 == 1 && e % 100 != 11
                  ? 0
                  : 2 <= e % 10 && e % 10 <= 9 && (e % 100 < 11 || 19 < e % 100)
                  ? 1
                  : 2;
              },
              czech: function (e) {
                return 1 === e ? 0 : 2 <= e && e <= 4 ? 1 : 2;
              },
              polish: function (e) {
                if (1 === e) return 0;
                var t = e % 10;
                return 2 <= t && t <= 4 && (e % 100 < 10 || 20 <= e % 100)
                  ? 1
                  : 2;
              },
              icelandic: function (e) {
                return e % 10 != 1 || e % 100 == 11 ? 1 : 0;
              },
              slovenian: function (e) {
                e %= 100;
                return 1 == e ? 0 : 2 == e ? 1 : 3 == e || 4 == e ? 2 : 3;
              },
            },
            pluralTypeToLanguages: {
              arabic: ["ar"],
              bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
              chinese: [
                "id",
                "id-ID",
                "ja",
                "ko",
                "ko-KR",
                "lo",
                "ms",
                "th",
                "th-TH",
                "zh",
              ],
              croatian: ["hr", "hr-HR"],
              german: [
                "fa",
                "da",
                "de",
                "en",
                "es",
                "fi",
                "el",
                "he",
                "hi-IN",
                "hu",
                "hu-HU",
                "it",
                "nl",
                "no",
                "pt",
                "sv",
                "tr",
              ],
              french: ["fr", "tl", "pt-br"],
              russian: ["ru", "ru-RU"],
              lithuanian: ["lt"],
              czech: ["cs", "cs-CZ", "sk"],
              polish: ["pl"],
              icelandic: ["is"],
              slovenian: ["sl-SL"],
            },
          },
          b =
            ((l = {}),
            function (e, t) {
              var n = l[t];
              return (
                n && !e.pluralTypes[n] && (l[t] = n = null),
                n || ((n = r(e, t)) && (l[t] = n)),
                n
              );
            }),
          D = /%\{(.*?)\}/g;
        (a.prototype.locale = function (e) {
          return e && (this.currentLocale = e), this.currentLocale;
        }),
          (a.prototype.extend = function (e, n) {
            c(
              p(e || {}),
              function (e) {
                var t = e[0],
                  e = e[1],
                  t = n ? n + "." + t : t;
                "object" == typeof e
                  ? this.extend(e, t)
                  : (this.phrases[t] = e);
              },
              this
            );
          }),
          (a.prototype.unset = function (e, n) {
            "string" == typeof e
              ? delete this.phrases[e]
              : c(
                  p(e || {}),
                  function (e) {
                    var t = e[0],
                      e = e[1],
                      t = n ? n + "." + t : t;
                    "object" == typeof e
                      ? this.unset(e, t)
                      : delete this.phrases[t];
                  },
                  this
                );
          }),
          (a.prototype.clear = function () {
            this.phrases = {};
          }),
          (a.prototype.replace = function (e) {
            this.clear(), this.extend(e);
          }),
          (a.prototype.t = function (e, t) {
            var n,
              r,
              t = null == t ? {} : t;
            return (
              "string" == typeof this.phrases[e]
                ? (n = this.phrases[e])
                : "string" == typeof t._
                ? (n = t._)
                : (r = this.onMissingKey
                    ? (0, this.onMissingKey)(
                        e,
                        t,
                        this.currentLocale,
                        this.tokenRegex,
                        this.pluralRules
                      )
                    : (this.warn('Missing translation for key: "' + e + '"'),
                      e)),
              (r =
                "string" == typeof n
                  ? i(
                      n,
                      t,
                      this.currentLocale,
                      this.tokenRegex,
                      this.pluralRules
                    )
                  : r)
            );
          }),
          (a.prototype.has = function (e) {
            return d(this.phrases, e);
          }),
          (a.transformPhrase = function (e, t, n) {
            return i(e, t, n);
          }),
          (e.exports = a);
      },
      function (e, t, n) {
        "use strict";
        /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
        var s = Object.getOwnPropertySymbols,
          l = Object.prototype.hasOwnProperty,
          c = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
          try {
            if (!Object.assign) return;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return;
          }
        })()
          ? Object.assign
          : function (e, t) {
              for (
                var n,
                  r = (function (e) {
                    if (null == e)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(e);
                  })(e),
                  o = 1;
                o < arguments.length;
                o++
              ) {
                for (var i in (n = Object(arguments[o])))
                  l.call(n, i) && (r[i] = n[i]);
                if (s)
                  for (var a = s(n), u = 0; u < a.length; u++)
                    c.call(n, a[u]) && (r[a[u]] = n[a[u]]);
              }
              return r;
            };
      },
      function (e, i, t) {
        function m(e, t) {
          if (
            e === 1 / 0 ||
            e === -1 / 0 ||
            e != e ||
            (e && -1e3 < e && e < 1e3) ||
            c.call(/e/, t)
          )
            return t;
          var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if ("number" == typeof e) {
            var r = e < 0 ? -o(-e) : o(e);
            if (r !== e)
              return (
                (e = String(r)),
                (r = T.call(t, e.length + 1)),
                z.call(e, n, "$&_") +
                  "." +
                  z.call(z.call(r, /([0-9]{3})/g, "$&_"), /_$/, "")
              );
          }
          return z.call(t, n, "$&_");
        }
        function y(e, t, n) {
          n = "double" === (n.quoteStyle || t) ? '"' : "'";
          return n + e + n;
        }
        function b(e) {
          return !(
            "[object Array]" !== x(e) ||
            (U && "object" == typeof e && U in e)
          );
        }
        function D(e) {
          if (N) return e && "object" == typeof e && e instanceof Symbol;
          if ("symbol" == typeof e) return 1;
          if (e && "object" == typeof e && L)
            try {
              return L.call(e), 1;
            } catch (e) {}
        }
        function w(e, t) {
          return s.call(e, t);
        }
        function x(e) {
          return a.call(e);
        }
        function A(e, t) {
          if (e.indexOf) return e.indexOf(t);
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        }
        function V(e) {
          var e = e.charCodeAt(0),
            t = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e];
          return t
            ? "\\" + t
            : "\\x" + (e < 16 ? "0" : "") + u.call(e.toString(16));
        }
        function k(e) {
          return "Object(" + e + ")";
        }
        function E(e) {
          return e + " { ? }";
        }
        function F(e, t, n, r) {
          return e + " (" + t + ") {" + (r ? C(n, r) : P.call(n, ", ")) + "}";
        }
        function C(e, t) {
          if (0 === e.length) return "";
          var n = "\n" + t.prev + t.base;
          return n + P.call(e, "," + n) + "\n" + t.prev;
        }
        function _(e, t) {
          var n = b(e),
            r = [];
          if (n) {
            r.length = e.length;
            for (var o = 0; o < e.length; o++) r[o] = w(e, o) ? t(e[o], e) : "";
          }
          var i,
            a = "function" == typeof p ? p(e) : [];
          if (N)
            for (var u = {}, s = 0; s < a.length; s++) u["$" + a[s]] = a[s];
          for (i in e)
            !w(e, i) ||
              (n && String(Number(i)) === i && i < e.length) ||
              (N && u["$" + i] instanceof Symbol) ||
              (c.call(/[^\w$]/, i)
                ? r.push(t(i, e) + ": " + t(e[i], e))
                : r.push(i + ": " + t(e[i], e)));
          if ("function" == typeof p)
            for (var l = 0; l < a.length; l++)
              Q.call(e, a[l]) && r.push("[" + t(a[l]) + "]: " + t(e[a[l]], e));
          return r;
        }
        var n = "function" == typeof Map && Map.prototype,
          r =
            Object.getOwnPropertyDescriptor && n
              ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
              : null,
          S = n && r && "function" == typeof r.get ? r.get : null,
          H = n && Map.prototype.forEach,
          r = "function" == typeof Set && Set.prototype,
          n =
            Object.getOwnPropertyDescriptor && r
              ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
              : null,
          O = r && n && "function" == typeof n.get ? n.get : null,
          Z = r && Set.prototype.forEach,
          B =
            "function" == typeof WeakMap && WeakMap.prototype
              ? WeakMap.prototype.has
              : null,
          $ =
            "function" == typeof WeakSet && WeakSet.prototype
              ? WeakSet.prototype.has
              : null,
          j =
            "function" == typeof WeakRef && WeakRef.prototype
              ? WeakRef.prototype.deref
              : null,
          K = Boolean.prototype.valueOf,
          a = Object.prototype.toString,
          G = Function.prototype.toString,
          J = String.prototype.match,
          T = String.prototype.slice,
          z = String.prototype.replace,
          u = String.prototype.toUpperCase,
          I = String.prototype.toLowerCase,
          c = RegExp.prototype.test,
          R = Array.prototype.concat,
          P = Array.prototype.join,
          X = Array.prototype.slice,
          o = Math.floor,
          M = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
          p = Object.getOwnPropertySymbols,
          L =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? Symbol.prototype.toString
              : null,
          N = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
          U =
            "function" == typeof Symbol &&
            Symbol.toStringTag &&
            (typeof Symbol.toStringTag === N || "symbol")
              ? Symbol.toStringTag
              : null,
          Q = Object.prototype.propertyIsEnumerable,
          q =
            ("function" == typeof Reflect ? Reflect : Object).getPrototypeOf ||
            ([].__proto__ === Array.prototype
              ? function (e) {
                  return e.__proto__;
                }
              : null),
          n = t(102).custom,
          W = n && D(n) ? n : null,
          s =
            ((e.exports = function r(n, e, o, i) {
              function a(e, t, n) {
                return (
                  t && (i = X.call(i)).push(t),
                  n
                    ? ((t = { depth: u.depth }),
                      w(u, "quoteStyle") && (t.quoteStyle = u.quoteStyle),
                      r(e, t, o + 1, i))
                    : r(e, u, o + 1, i)
                );
              }
              var u = e || {};
              if (
                w(u, "quoteStyle") &&
                "single" !== u.quoteStyle &&
                "double" !== u.quoteStyle
              )
                throw new TypeError(
                  'option "quoteStyle" must be "single" or "double"'
                );
              if (
                w(u, "maxStringLength") &&
                ("number" == typeof u.maxStringLength
                  ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0
                  : null !== u.maxStringLength)
              )
                throw new TypeError(
                  'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
                );
              e = !w(u, "customInspect") || u.customInspect;
              if ("boolean" != typeof e && "symbol" !== e)
                throw new TypeError(
                  "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
                );
              if (
                w(u, "indent") &&
                null !== u.indent &&
                "\t" !== u.indent &&
                !(parseInt(u.indent, 10) === u.indent && 0 < u.indent)
              )
                throw new TypeError(
                  'option "indent" must be "\\t", an integer > 0, or `null`'
                );
              if (
                w(u, "numericSeparator") &&
                "boolean" != typeof u.numericSeparator
              )
                throw new TypeError(
                  'option "numericSeparator", if provided, must be `true` or `false`'
                );
              var t = u.numericSeparator;
              if (void 0 === n) return "undefined";
              if (null === n) return "null";
              if ("boolean" == typeof n) return n ? "true" : "false";
              if ("string" == typeof n)
                return (function e(t, n) {
                  var r;
                  return t.length > n.maxStringLength
                    ? ((r =
                        "... " +
                        (r = t.length - n.maxStringLength) +
                        " more character" +
                        (1 < r ? "s" : "")),
                      e(T.call(t, 0, n.maxStringLength), n) + r)
                    : y(
                        z.call(
                          z.call(t, /(['\\])/g, "\\$1"),
                          /[\x00-\x1f]/g,
                          V
                        ),
                        "single",
                        n
                      );
                })(n, u);
              if ("number" == typeof n) {
                if (0 === n) return 0 < 1 / 0 / n ? "0" : "-0";
                var s = String(n);
                return t ? m(n, s) : s;
              }
              if ("bigint" == typeof n)
                return (s = String(n) + "n"), t ? m(n, s) : s;
              t = void 0 === u.depth ? 5 : u.depth;
              if (
                t <= (o = void 0 === o ? 0 : o) &&
                0 < t &&
                "object" == typeof n
              )
                return b(n) ? "[Array]" : "[Object]";
              var l,
                c,
                p,
                f,
                d,
                s = (function (e, t) {
                  var n;
                  if ("\t" === e.indent) n = "\t";
                  else {
                    if (!("number" == typeof e.indent && 0 < e.indent))
                      return null;
                    n = P.call(Array(e.indent + 1), " ");
                  }
                  return { base: n, prev: P.call(Array(t + 1), n) };
                })(u, o);
              if (void 0 === i) i = [];
              else if (0 <= A(i, n)) return "[Circular]";
              if ("function" == typeof n)
                return (
                  "[Function" +
                  ((t =
                    (t = n).name ||
                    ((t = J.call(G.call(t), /^function\s*([\w$]+)/))
                      ? t[1]
                      : null))
                    ? ": " + t
                    : " (anonymous)") +
                  "]" +
                  (0 < (t = _(n, a)).length
                    ? " { " + P.call(t, ", ") + " }"
                    : "")
                );
              if (D(n))
                return (
                  (t = N
                    ? z.call(String(n), /^(Symbol\(.*\))_[^)]*$/, "$1")
                    : L.call(n)),
                  "object" != typeof n || N ? t : k(t)
                );
              if (
                (t = n) &&
                "object" == typeof t &&
                (("undefined" != typeof HTMLElement &&
                  t instanceof HTMLElement) ||
                  ("string" == typeof t.nodeName &&
                    "function" == typeof t.getAttribute))
              ) {
                for (
                  var h = "<" + I.call(String(n.nodeName)),
                    g = n.attributes || [],
                    v = 0;
                  v < g.length;
                  v++
                )
                  h +=
                    " " +
                    g[v].name +
                    "=" +
                    y(
                      ((l = g[v].value), z.call(String(l), /"/g, "&quot;")),
                      "double",
                      u
                    );
                return (
                  (h += ">"),
                  n.childNodes && n.childNodes.length && (h += "..."),
                  h + ("</" + I.call(String(n.nodeName))) + ">"
                );
              }
              if (b(n)) {
                if (0 === n.length) return "[]";
                var t = _(n, a);
                return s &&
                  !(function (e) {
                    for (var t = 0; t < e.length; t++)
                      if (0 <= A(e[t], "\n")) return;
                    return 1;
                  })(t)
                  ? "[" + C(t, s) + "]"
                  : "[ " + P.call(t, ", ") + " ]";
              }
              if (
                !(
                  "[object Error]" !== x((t = n)) ||
                  (U && "object" == typeof t && U in t)
                )
              )
                return (
                  (t = _(n, a)),
                  "cause" in n && !Q.call(n, "cause")
                    ? "{ [" +
                      String(n) +
                      "] " +
                      P.call(R.call("[cause]: " + a(n.cause), t), ", ") +
                      " }"
                    : 0 === t.length
                    ? "[" + String(n) + "]"
                    : "{ [" + String(n) + "] " + P.call(t, ", ") + " }"
                );
              if ("object" == typeof n && e) {
                if (W && "function" == typeof n[W]) return n[W]();
                if ("symbol" !== e && "function" == typeof n.inspect)
                  return n.inspect();
              }
              return (function (e) {
                if (S && e && "object" == typeof e)
                  try {
                    S.call(e);
                    try {
                      O.call(e);
                    } catch (e) {
                      return 1;
                    }
                    return e instanceof Map;
                  } catch (e) {}
              })(n)
                ? ((c = []),
                  H.call(n, function (e, t) {
                    c.push(a(t, n, !0) + " => " + a(e, n));
                  }),
                  F("Map", S.call(n), c, s))
                : (function (e) {
                    if (O && e && "object" == typeof e)
                      try {
                        O.call(e);
                        try {
                          S.call(e);
                        } catch (e) {
                          return 1;
                        }
                        return e instanceof Set;
                      } catch (e) {}
                  })(n)
                ? ((p = []),
                  Z.call(n, function (e) {
                    p.push(a(e, n));
                  }),
                  F("Set", O.call(n), p, s))
                : (function (e) {
                    if (B && e && "object" == typeof e)
                      try {
                        B.call(e, B);
                        try {
                          $.call(e, $);
                        } catch (e) {
                          return 1;
                        }
                        return e instanceof WeakMap;
                      } catch (e) {}
                  })(n)
                ? E("WeakMap")
                : (function (e) {
                    if ($ && e && "object" == typeof e)
                      try {
                        $.call(e, $);
                        try {
                          B.call(e, B);
                        } catch (e) {
                          return 1;
                        }
                        return e instanceof WeakSet;
                      } catch (e) {}
                  })(n)
                ? E("WeakSet")
                : (function (e) {
                    if (j && e && "object" == typeof e)
                      try {
                        return j.call(e), 1;
                      } catch (e) {}
                  })(n)
                ? E("WeakRef")
                : "[object Number]" !== x((t = n)) ||
                  (U && "object" == typeof t && U in t)
                ? (function (e) {
                    if (e && "object" == typeof e && M)
                      try {
                        return M.call(e), 1;
                      } catch (e) {}
                  })(n)
                  ? k(a(M.call(n)))
                  : "[object Boolean]" !== x((e = n)) ||
                    (U && "object" == typeof e && U in e)
                  ? "[object String]" !== x((t = n)) ||
                    (U && "object" == typeof t && U in t)
                    ? ("[object Date]" !== x((e = n)) ||
                        (U && "object" == typeof e && U in e)) &&
                      ("[object RegExp]" !== x((t = n)) ||
                        (U && "object" == typeof t && U in t))
                      ? ((e = _(n, a)),
                        (t = q
                          ? q(n) === Object.prototype
                          : n instanceof Object || n.constructor === Object),
                        (f = n instanceof Object ? "" : "null prototype"),
                        (d =
                          !t && U && Object(n) === n && U in n
                            ? T.call(x(n), 8, -1)
                            : f
                            ? "Object"
                            : ""),
                        (t =
                          (!t &&
                          "function" == typeof n.constructor &&
                          n.constructor.name
                            ? n.constructor.name + " "
                            : "") +
                          (d || f
                            ? "[" +
                              P.call(R.call([], d || [], f || []), ": ") +
                              "] "
                            : "")),
                        0 === e.length
                          ? t + "{}"
                          : s
                          ? t + "{" + C(e, s) + "}"
                          : t + "{ " + P.call(e, ", ") + " }")
                      : String(n)
                    : k(a(String(n)))
                  : k(K.call(n))
                : k(a(Number(n)));
            }),
            Object.prototype.hasOwnProperty ||
              function (e) {
                return e in this;
              });
      },
      function (e, t, n) {
        "use strict";
        var f, d, h, g, v, m, y, r, b, o;
        Object.keys ||
          ((f = Object.prototype.hasOwnProperty),
          (d = Object.prototype.toString),
          (h = n(26)),
          (n = Object.prototype.propertyIsEnumerable),
          (g = !n.call({ toString: null }, "toString")),
          (v = n.call(function () {}, "prototype")),
          (m = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ]),
          (y = function (e) {
            var t = e.constructor;
            return t && t.prototype === e;
          }),
          (r = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0,
          }),
          (b = (function () {
            if ("undefined" == typeof window) return !1;
            for (var e in window)
              try {
                if (
                  !r["$" + e] &&
                  f.call(window, e) &&
                  null !== window[e] &&
                  "object" == typeof window[e]
                )
                  try {
                    y(window[e]);
                  } catch (e) {
                    return !0;
                  }
              } catch (e) {
                return !0;
              }
            return !1;
          })()),
          (o = function (e) {
            var t = null !== e && "object" == typeof e,
              n = "[object Function]" === d.call(e),
              r = h(e),
              o = t && "[object String]" === d.call(e),
              i = [];
            if (!t && !n && !r)
              throw new TypeError("Object.keys called on a non-object");
            var a = v && n;
            if (o && 0 < e.length && !f.call(e, 0))
              for (var u = 0; u < e.length; ++u) i.push(String(u));
            if (r && 0 < e.length)
              for (var s = 0; s < e.length; ++s) i.push(String(s));
            else
              for (var l in e)
                (a && "prototype" === l) || !f.call(e, l) || i.push(String(l));
            if (g)
              for (
                var c = (function (e) {
                    if ("undefined" == typeof window || !b) return y(e);
                    try {
                      return y(e);
                    } catch (e) {
                      return !1;
                    }
                  })(e),
                  p = 0;
                p < m.length;
                ++p
              )
                (c && "constructor" === m[p]) ||
                  !f.call(e, m[p]) ||
                  i.push(m[p]);
            return i;
          })),
          (e.exports = o);
      },
      function (e, t, n) {
        "use strict";
        var r = Array.prototype.slice,
          o = n(26),
          i = Object.keys,
          a = i
            ? function (e) {
                return i(e);
              }
            : n(87),
          u = Object.keys;
        (a.shim = function () {
          return (
            Object.keys
              ? (function () {
                  var e = Object.keys(arguments);
                  return e && e.length === arguments.length;
                })(1, 2) ||
                (Object.keys = function (e) {
                  return u(o(e) ? r.call(e) : e);
                })
              : (Object.keys = a),
            Object.keys || a
          );
        }),
          (e.exports = a);
      },
      function (e, t, n) {
        "use strict";
        var r = n(2),
          o = n(4),
          i = n(27),
          a = n(28),
          n = n(90),
          o = o(a(), Object);
        r(o, { getPolyfill: a, implementation: i, shim: n }), (e.exports = o);
      },
      function (e, t, n) {
        "use strict";
        var r = n(28),
          o = n(2);
        e.exports = function () {
          var e = r();
          return (
            o(
              Object,
              { entries: e },
              {
                entries: function () {
                  return Object.entries !== e;
                },
              }
            ),
            e
          );
        };
      },
      function (e, t) {
        function n() {
          throw new Error("setTimeout has not been defined");
        }
        function r() {
          throw new Error("clearTimeout has not been defined");
        }
        function o(t) {
          if (l === setTimeout) return setTimeout(t, 0);
          if ((l === n || !l) && setTimeout) return (l = setTimeout)(t, 0);
          try {
            return l(t, 0);
          } catch (e) {
            try {
              return l.call(null, t, 0);
            } catch (e) {
              return l.call(this, t, 0);
            }
          }
        }
        function i() {
          d &&
            p &&
            ((d = !1),
            p.length ? (f = p.concat(f)) : (h = -1),
            f.length && a());
        }
        function a() {
          if (!d) {
            var e = o(i);
            d = !0;
            for (var t = f.length; t; ) {
              for (p = f, f = []; ++h < t; ) p && p[h].run();
              (h = -1), (t = f.length);
            }
            (p = null),
              (d = !1),
              (function (t) {
                if (c === clearTimeout) return clearTimeout(t);
                if ((c === r || !c) && clearTimeout)
                  return (c = clearTimeout)(t);
                try {
                  c(t);
                } catch (e) {
                  try {
                    return c.call(null, t);
                  } catch (e) {
                    return c.call(this, t);
                  }
                }
              })(e);
          }
        }
        function u(e, t) {
          (this.fun = e), (this.array = t);
        }
        function s() {}
        var l,
          c,
          e = (e.exports = {});
        try {
          l = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
          l = n;
        }
        try {
          c = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
          c = r;
        }
        var p,
          f = [],
          d = !1,
          h = -1;
        (e.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          f.push(new u(e, t)), 1 !== f.length || d || o(a);
        }),
          (u.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (e.title = "browser"),
          (e.browser = !0),
          (e.env = {}),
          (e.argv = []),
          (e.version = ""),
          (e.versions = {}),
          (e.on = s),
          (e.addListener = s),
          (e.once = s),
          (e.off = s),
          (e.removeListener = s),
          (e.removeAllListeners = s),
          (e.emit = s),
          (e.prependListener = s),
          (e.prependOnceListener = s),
          (e.listeners = function (e) {
            return [];
          }),
          (e.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (e.cwd = function () {
            return "/";
          }),
          (e.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (e.umask = function () {
            return 0;
          });
      },
      function (e, t, n) {
        "use strict";
        var r = n(4),
          o = n(2),
          i = n(29),
          a = n(30),
          n = n(93),
          r = r(a());
        o(r, { getPolyfill: a, implementation: i, shim: n }), (e.exports = r);
      },
      function (e, t, n) {
        "use strict";
        var r = n(2),
          o = n(30);
        e.exports = function () {
          var e = o();
          return (
            r(
              String.prototype,
              { trim: e },
              {
                trim: function () {
                  return String.prototype.trim !== e;
                },
              }
            ),
            e
          );
        };
      },
      function (n, e, t) {
        "use strict";
        !function (e) {
          var t = function () {};
          "production" !== e.env.NODE_ENV &&
            (t = function (e, t, n) {
              var r = arguments.length;
              n = new Array(2 < r ? r - 2 : 0);
              for (var o = 2; o < r; o++) n[o - 2] = arguments[o];
              if (void 0 === t)
                throw new Error(
                  "`warning(condition, format, ...args)` requires a warning message argument"
                );
              e ||
                function (e, t) {
                  var n = arguments.length;
                  t = new Array(1 < n ? n - 1 : 0);
                  for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
                  var o = 0,
                    i =
                      "Warning: " +
                      e.replace(/%s/g, function () {
                        return t[o++];
                      });
                  try {
                    throw new Error(i);
                  } catch (e) {}
                }.apply(null, [t].concat(n));
            }),
            (n.exports = t);
        }.call(e, t(91));
      },
      function (e, t, n) {
        function r(e, t) {
          return new u(t).process(e);
        }
        var o,
          i = n(31),
          a = n(32),
          u = n(96);
        for (o in (((t = e.exports = r).filterXSS = r), (t.FilterXSS = u), i))
          t[o] = i[o];
        for (o in a) t[o] = a[o];
        "undefined" != typeof window && (window.filterXSS = e.exports),
          "undefined" != typeof self &&
            "undefined" != typeof DedicatedWorkerGlobalScope &&
            self instanceof DedicatedWorkerGlobalScope &&
            (self.filterXSS = e.exports);
      },
      function (e, t, n) {
        function g(e) {
          return null == e;
        }
        function r(e) {
          (e = (function (e) {
            var t,
              n = {};
            for (t in e) n[t] = e[t];
            return n;
          })(e || {})).stripIgnoreTag &&
            (e.onIgnoreTag, (e.onIgnoreTag = i.onIgnoreTagStripAll)),
            (e.whiteList = e.whiteList || e.allowList || i.whiteList),
            (e.onTag = e.onTag || i.onTag),
            (e.onTagAttr = e.onTagAttr || i.onTagAttr),
            (e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag),
            (e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr),
            (e.safeAttrValue = e.safeAttrValue || i.safeAttrValue),
            (e.escapeHtml = e.escapeHtml || i.escapeHtml),
            !1 === (this.options = e).css
              ? (this.cssFilter = !1)
              : ((e.css = e.css || {}), (this.cssFilter = new o(e.css)));
        }
        var o = n(7).FilterCSS,
          i = n(31),
          a = n(32),
          v = a.parseTag,
          m = a.parseAttr,
          y = n(11);
        (r.prototype.process = function (e) {
          if (!(e = (e = e || "").toString())) return "";
          var t = this.options,
            u = t.whiteList,
            s = t.onTag,
            l = t.onIgnoreTag,
            c = t.onTagAttr,
            p = t.onIgnoreTagAttr,
            f = t.safeAttrValue,
            d = t.escapeHtml,
            h = this.cssFilter,
            n =
              (t.stripBlankChar && (e = i.stripBlankChar(e)),
              t.allowCommentTag || (e = i.stripCommentTag(e)),
              !1),
            t =
              (t.stripIgnoreTagBody &&
                (l = (n = i.StripTagBody(t.stripIgnoreTagBody, l)).onIgnoreTag),
              v(
                e,
                function (e, t, o, n, r) {
                  (e = {
                    sourcePosition: e,
                    position: t,
                    isClosing: r,
                    isWhite: u.hasOwnProperty(o),
                  }),
                    (t = s(o, n, e));
                  if (!g(t)) return t;
                  if (e.isWhite) {
                    if (e.isClosing) return "</" + o + ">";
                    r = n;
                    var r =
                        -1 === (a = y.spaceIndex(r))
                          ? { html: "", closing: "/" === r[r.length - 2] }
                          : {
                              html: (r = (a =
                                "/" ===
                                (r = y.trim(r.slice(a + 1, -1)))[r.length - 1])
                                ? y.trim(r.slice(0, -1))
                                : r),
                              closing: a,
                            },
                      i = u[o],
                      a = m(r.html, function (e, t) {
                        var n = -1 !== y.indexOf(i, e),
                          r = c(o, e, t, n);
                        return g(r)
                          ? n
                            ? (t = f(o, e, t, h))
                              ? e + '="' + t + '"'
                              : e
                            : g((r = p(o, e, t, n)))
                            ? void 0
                            : r
                          : r;
                      }),
                      n = "<" + o;
                    return (
                      a && (n += " " + a), r.closing && (n += " /"), n + ">"
                    );
                  }
                  return g((t = l(o, n, e))) ? d(n) : t;
                },
                d
              ));
          return (t = n ? n.remove(t) : t);
        }),
          (e.exports = r);
      },
      function (e, t) {
        e.exports = {
          smile: "e3/2018new_weixioa02_org.png",
          lovely: "09/2018new_keai_org.png",
          happy: "1e/2018new_taikaixin_org.png",
          clap: "6e/2018new_guzhang_thumb.png",
          whee: "33/2018new_xixi_thumb.png",
          haha: "8f/2018new_haha_thumb.png",
          "laugh and cry": "4a/2018new_xiaoku_thumb.png",
          wink: "43/2018new_jiyan_org.png",
          greddy: "fa/2018new_chanzui_org.png",
          awkward: "a3/2018new_heixian_thumb.png",
          sweat: "28/2018new_han_org.png",
          "pick nose": "9a/2018new_wabi_thumb.png",
          hum: "7c/2018new_heng_thumb.png",
          angry: "f6/2018new_nu_thumb.png",
          grievance: "a5/2018new_weiqu_thumb.png",
          poor: "96/2018new_kelian_org.png",
          disappoint: "aa/2018new_shiwang_thumb.png",
          sad: "ee/2018new_beishang_org.png",
          tear: "6e/2018new_leimu_org.png",
          "no way": "83/2018new_kuxiao_org.png",
          shy: "c1/2018new_haixiu_org.png",
          dirt: "10/2018new_wu_thumb.png",
          "love you": "f6/2018new_aini_org.png",
          kiss: "2c/2018new_qinqin_thumb.png",
          amorousness: "9d/2018new_huaxin_org.png",
          longing: "c9/2018new_chongjing_org.png",
          desire: "3e/2018new_tianping_thumb.png",
          "bad laugh": "4d/2018new_huaixiao_org.png",
          blackness: "9e/2018new_yinxian_org.png",
          "laugh without word": "2d/2018new_xiaoerbuyu_org.png",
          titter: "71/2018new_touxiao_org.png",
          cool: "c4/2018new_ku_org.png",
          "not easy": "aa/2018new_bingbujiandan_thumb.png",
          think: "30/2018new_sikao_org.png",
          question: "b8/2018new_ningwen_org.png",
          "no idea": "2a/2018new_wenhao_thumb.png",
          dizzy: "07/2018new_yun_thumb.png",
          bomb: "a2/2018new_shuai_thumb.png",
          bone: "a1/2018new_kulou_thumb.png",
          "be quiet": "b0/2018new_xu_org.png",
          "shut up": "62/2018new_bizui_org.png",
          stupid: "dd/2018new_shayan_org.png",
          "surprise ": "49/2018new_chijing_org.png",
          vomit: "08/2018new_tu_org.png",
          cold: "40/2018new_kouzhao_thumb.png",
          sick: "3b/2018new_shengbing_thumb.png",
          bye: "fd/2018new_baibai_thumb.png",
          "look down on": "da/2018new_bishi_org.png",
          "white eye": "ef/2018new_landelini_org.png",
          "left hum": "43/2018new_zuohengheng_thumb.png",
          "right hum": "c1/2018new_youhengheng_thumb.png",
          crazy: "17/2018new_zhuakuang_org.png",
          "scold ": "87/2018new_zhouma_thumb.png",
          "hit on face": "cb/2018new_dalian_org.png",
          wow: "ae/2018new_ding_org.png",
          fan: "86/2018new_hufen02_org.png",
          money: "a2/2018new_qian_thumb.png",
          yawn: "55/2018new_dahaqian_org.png",
          sleepy: "3c/2018new_kun_thumb.png",
          sleep: "e2/2018new_shuijiao_thumb.png",
          "watermelon ": "01/2018new_chigua_thumb.png",
          doge: "a1/2018new_doge02_org.png",
          dog: "22/2018new_erha_org.png",
          cat: "7b/2018new_miaomiao_thumb.png",
          thumb: "e6/2018new_zan_org.png",
          good: "8a/2018new_good_org.png",
          ok: "45/2018new_ok_org.png",
          yeah: "29/2018new_ye_thumb.png",
          "shack hand": "e9/2018new_woshou_thumb.png",
          bow: "e7/2018new_zuoyi_org.png",
          come: "42/2018new_guolai_thumb.png",
          punch: "86/2018new_quantou_thumb.png",
        };
      },
      function (e, t) {
        e.exports = {
          nick: "NickName",
          mail: "E-Mail",
          link: "Website(http://)",
          nickFail: "NickName cannot be less than 3 bytes.",
          mailFail: "Please confirm your email address.",
          sofa: "No comment yet.",
          submit: "Submit",
          reply: "Reply",
          cancelReply: "Cancel reply",
          comments: "Comments",
          cancel: "Cancel",
          confirm: "Confirm",
          continue: "Continue",
          more: "Load More...",
          preview: "Preview",
          emoji: "Emoji",
          expand: "See more....",
          seconds: "seconds ago",
          minutes: "minutes ago",
          hours: "hours ago",
          days: "days ago",
          now: "just now",
          uploading: "Uploading ...",
          uploadDone: "Upload completed!",
          busy: "Submit is busy, please wait...",
          "code-98":
            "Valine initialization failed, please check your version of av-min.js.",
          "code-99":
            "Valine initialization failed, Please check the `el` element in the init method.",
          "code-100":
            "Valine initialization failed, Please check your appId and appKey.",
          "code-140":
            "The total number of API calls today has exceeded the development version limit.",
          "code-401":
            "Unauthorized operation, Please check your appId and appKey.",
          "code-403":
            "Access denied by API domain white list, Please check your security domain.",
        };
      },
      function (e, t) {
        e.exports = {
          nick: "\u30cb\u30c3\u30af\u30cd\u30fc\u30e0",
          mail: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
          link: "\u30b5\u30a4\u30c8(http://)",
          nickFail:
            "3\u30d0\u30a4\u30c8\u4ee5\u4e0a\u306e\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u3092\u3054\u5165\u529b\u304f\u3060\u3055\u3044.",
          mailFail:
            "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044.",
          sofa: "\u30b3\u30e1\u30f3\u30c8\u3057\u307e\u3057\u3087\u3046~",
          submit: "\u63d0\u51fa\u3059\u308b",
          reply: "\u8fd4\u4fe1\u3059\u308b",
          cancelReply: "\u30ad\u30e3\u30f3\u30bb\u30eb",
          comments: "\u30b3\u30e1\u30f3\u30c8",
          cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
          confirm: "\u78ba\u8a8d\u3059\u308b",
          continue: "\u7ee7\u7eed",
          more: "\u3055\u3089\u306b\u8aad\u307f\u8fbc\u3080...",
          preview: "\u30d7\u30ec\u30d3\u30e5\u30fc",
          emoji: "\u7d75\u6587\u5b57",
          expand: "\u3082\u3063\u3068\u898b\u308b",
          seconds: "\u79d2\u524d",
          minutes: "\u5206\u524d",
          hours: "\u6642\u9593\u524d",
          days: "\u65e5\u524d",
          now: "\u305f\u3063\u3060\u4eca",
          uploading: "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d...",
          uploadDone:
            "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f!",
          busy: "20 \u79d2\u9593\u9694\u3067\u63d0\u51fa\u3057\u3066\u304f\u3060\u3055\u3044    ...",
          "code-98":
            "\u30ed\u30fc\u30c9\u30a8\u30e9\u30fc\u3067\u3059\u3002av-min.js \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044.",
          "code-99":
            "\u30ed\u30fc\u30c9\u30a8\u30e9\u30fc\u3067\u3059\u3002init\u306b\u3042\u308b`el`\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u304f\u3060\u3055\u3044.",
          "code-100":
            "\u30ed\u30fc\u30c9\u30a8\u30e9\u30fc\u3067\u3059\u3002AppId\u3068AppKey\u3092\u78ba\u8a8d\u304f\u3060\u3055\u3044.",
          "code-140":
            "\u4eca\u65e5\u306eAPI\u30b3\u30fc\u30eb\u306e\u7dcf\u6570\u304c\u958b\u767a\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4e0a\u9650\u3092\u8d85\u3048\u305f.",
          "code-401":
            "\u6a29\u9650\u304c\u5236\u9650\u3055\u308c\u3066\u3044\u307e\u3059\u3002AppId\u3068AppKey\u3092\u78ba\u8a8d\u304f\u3060\u3055\u3044.",
          "code-403":
            "\u30a2\u30af\u30bb\u30b9\u304cAPI\u306a\u3069\u306b\u5236\u9650\u3055\u308c\u307e\u3057\u305f\u3001\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a2d\u5b9a\u3092\u78ba\u8a8d\u304f\u3060\u3055\u3044",
        };
      },
      function (e, t) {
        e.exports = {
          nick: "\u6635\u79f0",
          mail: "\u90ae\u7bb1",
          link: "\u7f51\u5740(http://)",
          nickFail: "\u6635\u79f0\u4e0d\u80fd\u5c11\u4e8e3\u4e2a\u5b57\u7b26",
          mailFail:
            "\u8bf7\u586b\u5199\u6b63\u786e\u7684\u90ae\u4ef6\u5730\u5740",
          sofa: "\u6765\u53d1\u8bc4\u8bba\u5427~",
          submit: "\u63d0\u4ea4",
          reply: "\u56de\u590d",
          cancelReply: "\u53d6\u6d88\u56de\u590d",
          comments: "\u8bc4\u8bba",
          cancel: "\u53d6\u6d88",
          confirm: "\u786e\u8ba4",
          continue: "\u7ee7\u7eed",
          more: "\u52a0\u8f7d\u66f4\u591a...",
          preview: "\u9884\u89c8",
          emoji: "\u8868\u60c5",
          expand: "\u67e5\u770b\u66f4\u591a...",
          seconds: "\u79d2\u524d",
          minutes: "\u5206\u949f\u524d",
          hours: "\u5c0f\u65f6\u524d",
          days: "\u5929\u524d",
          now: "\u521a\u521a",
          uploading: "\u6b63\u5728\u4f20\u8f93...",
          uploadDone: "\u4f20\u8f93\u5b8c\u6210!",
          busy: "\u64cd\u4f5c\u9891\u7e41\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5...",
          "code-98":
            "Valine \u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5 av-min.js \u7248\u672c",
          "code-99":
            "Valine \u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5init\u4e2d\u7684`el`\u5143\u7d20.",
          "code-100":
            "Valine \u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u4f60\u7684AppId\u548cAppKey.",
          "code-140":
            "\u4eca\u65e5 API \u8c03\u7528\u603b\u6b21\u6570\u5df2\u8d85\u8fc7\u5f00\u53d1\u7248\u9650\u5236.",
          "code-401":
            "\u672a\u7ecf\u6388\u6743\u7684\u64cd\u4f5c\uff0c\u8bf7\u68c0\u67e5\u4f60\u7684AppId\u548cAppKey.",
          "code-403":
            "\u8bbf\u95ee\u88abAPI\u57df\u540d\u767d\u540d\u5355\u62d2\u7edd\uff0c\u8bf7\u68c0\u67e5\u4f60\u7684\u5b89\u5168\u57df\u540d\u8bbe\u7f6e.",
        };
      },
      function (e, t) {
        e.exports = {
          nick: "\u66b1\u7a31",
          mail: "\u90f5\u7bb1",
          link: "\u7db2\u5740(http://)",
          nickFail: "\u6635\u7a31\u4e0d\u80fd\u5c11\u65bc3\u500b\u5b57\u7b26",
          mailFail:
            "\u8acb\u586b\u5beb\u6b63\u78ba\u7684\u90f5\u4ef6\u5730\u5740",
          sofa: "\u4f86\u767c\u8a55\u8ad6\u5427~",
          submit: "\u63d0\u4ea4",
          reply: "\u56de\u8986",
          cancelReply: "\u53d6\u6d88\u56de\u8986",
          comments: "\u8a55\u8ad6",
          cancel: "\u53d6\u6d88",
          confirm: "\u78ba\u8a8d",
          continue: "\u7e7c\u7e8c",
          more: "\u52a0\u8f09\u66f4\u591a...",
          preview: "\u9810\u89bd",
          emoji: "\u8868\u60c5",
          expand: "\u67e5\u770b\u66f4\u591a...",
          seconds: "\u79d2\u524d",
          minutes: "\u5206\u9418\u524d",
          hours: "\u5c0f\u6642\u524d",
          days: "\u5929\u524d",
          now: "\u525b\u525b",
          uploading: "\u6b63\u5728\u4e0a\u50b3...",
          uploadDone: "\u4e0a\u50b3\u5b8c\u6210!",
          busy: "\u64cd\u4f5c\u983b\u7e41\uff0c\u8acb\u7a0d\u5019\u518d\u8a66...",
          "code-98":
            "Valine \u521d\u59cb\u5316\u5931\u6557\uff0c\u8acb\u6aa2\u67e5 av-min.js \u7248\u672c",
          "code-99":
            "Valine \u521d\u59cb\u5316\u5931\u6557\uff0c\u8acb\u6aa2\u67e5init\u4e2d\u7684`el`\u5143\u7d20.",
          "code-100":
            "Valine \u521d\u59cb\u5316\u5931\u6557\uff0c\u8acb\u6aa2\u67e5\u4f60\u7684AppId\u548cAppKey.",
          "code-140":
            "\u4eca\u65e5 API \u8abf\u7528\u7e3d\u6b21\u6578\u5df2\u8d85\u904e\u958b\u767c\u7248\u9650\u5236.",
          "code-401":
            "\u672a\u7d93\u6388\u6b0a\u7684\u64cd\u4f5c\uff0c\u8acb\u6aa2\u67e5\u4f60\u7684AppId\u548cAppKey.",
          "code-403":
            "\u8a2a\u554f\u88abAPI\u57df\u540d\u767d\u540d\u55ae\u62d2\u7d55\uff0c\u8acb\u6aa2\u67e5\u4f60\u7684\u5b89\u5168\u57df\u540d\u8a2d\u7f6e.",
        };
      },
      function (e, t) {},
      function (e, t, n) {
        var r = n(104),
          o = ("string" == typeof r && (r = [[e.i, r, ""]]), {});
        (o.transform = void 0),
          n(106)(r, o),
          r.locals && (e.exports = r.locals);
      },
      function (e, t, n) {
        (t = n(105)(!1)).push([
          e.i,
          '.v[data-class=v]{font-size:16px;text-align:left}.v[data-class=v] *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.75}.v[data-class=v] .vinput,.v[data-class=v] .veditor,.v[data-class=v] p,.v[data-class=v] pre code,.v[data-class=v] .status-bar{color:#555}.v[data-class=v] .vtime,.v[data-class=v] .vsys{color:#b3b3b3}.v[data-class=v] .text-right{text-align:right}.v[data-class=v] .text-center{text-align:center}.v[data-class=v] img{max-width:100%;border:none}.v[data-class=v] hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v[data-class=v].hide-avatar .vimg{display:none}.v[data-class=v] a{position:relative;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] pre,.v[data-class=v] code{background-color:#f8f8f8;padding:.2em .4em;border-radius:3px;font-size:85%;margin:0}.v[data-class=v] pre{padding:10px;overflow:auto;line-height:1.45}.v[data-class=v] pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v[data-class=v] blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid rgba(238,238,238,.5)}.v[data-class=v] .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em;-webkit-box-sizing:border-box;box-sizing:border-box}.v[data-class=v] input[type=checkbox],.v[data-class=v] input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class=v] .vicon{cursor:pointer;display:inline-block;overflow:hidden;fill:#555;vertical-align:middle}.v[data-class=v] .vicon+.vicon{margin-left:10px}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vrow{font-size:0;padding:10px 0}.v[data-class=v] .vrow .vcol{display:inline-block;vertical-align:middle;font-size:14px}.v[data-class=v] .vrow .vcol.vcol-20{width:20%}.v[data-class=v] .vrow .vcol.vcol-30{width:30%}.v[data-class=v] .vrow .vcol.vcol-40{width:40%}.v[data-class=v] .vrow .vcol.vcol-50{width:50%}.v[data-class=v] .vrow .vcol.vcol-60{width:60%}.v[data-class=v] .vrow .vcol.vcol-70{width:70%}.v[data-class=v] .vrow .vcol.vcol-80{width:80%}.v[data-class=v] .vrow .vcol.vctrl{font-size:12px}.v[data-class=v] .vemoji,.v[data-class=v] .emoji{width:26px;height:26px;overflow:hidden;vertical-align:middle;margin:0 1px;display:inline-block}.v[data-class=v] .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v[data-class=v] .vwrap input{background:transparent}.v[data-class=v] .vwrap .vedit{position:relative;padding-top:10px}.v[data-class=v] .vwrap .cancel-reply-btn{position:absolute;right:5px;top:5px;cursor:pointer}.v[data-class=v] .vwrap .vemojis{display:none;font-size:18px;max-height:145px;overflow:auto;padding-bottom:10px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class=v] .vwrap .vemojis i{font-style:normal;padding-top:7px;width:36px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v[data-class=v] .vwrap .vpreview{padding:7px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class=v] .vwrap .vheader .vinput{width:33.33%;border-bottom:1px #dedede dashed}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:50%}.v[data-class=v] .vwrap .vheader.item1 .vinput{width:100%}.v[data-class=v] .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width: 520px){.v[data-class=v] .vwrap .vheader .vinput{width:100%}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:100%}}.v[data-class=v] .vpower{color:#999;font-size:.75em;padding:.5em 0}.v[data-class=v] .vpower a{font-size:.75em}.v[data-class=v] .vcount{padding:5px;font-weight:600;font-size:1.25em}.v[data-class=v] ul,.v[data-class=v] ol{padding:0;margin-left:1.25em}.v[data-class=v] .txt-center{text-align:center}.v[data-class=v] .txt-right{text-align:right}.v[data-class=v] .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v[data-class=v] .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#555;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v[data-class=v] .vbtn+.vbtn{margin-left:1.25em}.v[data-class=v] .vbtn:active,.v[data-class=v] .vbtn:hover{color:#3090e4;border-color:#3090e4}.v[data-class=v] .vbtn:disabled{border-color:#e1e1e1;color:#e1e1e1;background-color:#fdfafa;cursor:not-allowed}.v[data-class=v] .vempty{padding:1.25em;text-align:center;color:#555;overflow:auto}.v[data-class=v] .vsys{display:inline-block;padding:.2em .5em;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width: 520px){.v[data-class=v] .vsys{display:none}}.v[data-class=v] .vcards{width:100%}.v[data-class=v] .vcards .vcard{padding-top:1.25em;position:relative;display:block}.v[data-class=v] .vcards .vcard:after{content:"";clear:both;display:block}.v[data-class=v] .vcards .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width: 720px){.v[data-class=v] .vcards .vcard .vimg{width:2.5em;height:2.5em}}.v[data-class=v] .vcards .vcard .vhead{line-height:1.5;margin-top:0}.v[data-class=v] .vcards .vcard .vhead .vtag{font-size:12px;display:inline-block;line-height:20px;border-radius:2px;color:#fff;padding:0 5px;position:inherit;margin-left:-5px;} .vcards .vcard .vhead .vtag.vmaster{background:#ffa51e} .vcards .vcard .vhead .vtag.vfriend{background:#6cf} .vcards .vcard .vhead .vtag.vvisitor{background:#828282} .vcards .vcard .vhead .browser-icon, .vcards .vcard .vhead .os-icon{margin-right:3px;} .vcards .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.875em;cursor:pointer;text-decoration:none;display:inline-block}.v[data-class=v] .vcards .vcard .vhead .vnick:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v[data-class=v] .vcards .vcard .vh .vtime{font-size:.75em;margin-right:.875em}.v[data-class=v] .vcards .vcard .vh .vmeta{line-height:1;position:relative}.v[data-class=v] .vcards .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v[data-class=v] .vcards .vcard:last-child .vh{border-bottom:none}.v[data-class=v] .vcards .vcard .vcontent{word-wrap:break-word;word-break:break-all;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v[data-class=v] .vcards .vcard .vcontent.expand{cursor:pointer;max-height:8em;overflow:hidden}.v[data-class=v] .vcards .vcard .vcontent.expand::before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;background:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.9)));background:linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));z-index:999}.v[data-class=v] .vcards .vcard .vcontent.expand::after{display:block;content:attr(data-expand);text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;z-index:999;background:rgba(255,255,255,.9)}.v[data-class=v] .vcards .vcard .vquote{padding-left:1em;border-left:1px dashed rgba(238,238,238,.5)}.v[data-class=v] .vcards .vcard .vquote .vimg{width:2.225em;height:2.225em}.v[data-class=v] .vpage .vmore{margin:1em 0}.v[data-class=v] .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v[data-class=v] .vspinner{width:22px;height:22px;display:inline-block;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear;position:relative;vertical-align:middle;margin:0 5px}[data-theme=dark] .v[data-class=v] .vinput,[data-theme=dark] .v[data-class=v] .veditor,[data-theme=dark] .v[data-class=v] p,[data-theme=dark] .v[data-class=v] pre code,[data-theme=dark] .v[data-class=v] .status-bar,.dark .v[data-class=v] .vinput,.dark .v[data-class=v] .veditor,.dark .v[data-class=v] p,.dark .v[data-class=v] pre code,.dark .v[data-class=v] .status-bar,.theme__dark .v[data-class=v] .vinput,.theme__dark .v[data-class=v] .veditor,.theme__dark .v[data-class=v] p,.theme__dark .v[data-class=v] pre code,.theme__dark .v[data-class=v] .status-bar,.night .v[data-class=v] .vinput,.night .v[data-class=v] .veditor,.night .v[data-class=v] p,.night .v[data-class=v] pre code,.night .v[data-class=v] .status-bar{color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vtime,[data-theme=dark] .v[data-class=v] .vsys,.dark .v[data-class=v] .vtime,.dark .v[data-class=v] .vsys,.theme__dark .v[data-class=v] .vtime,.theme__dark .v[data-class=v] .vsys,.night .v[data-class=v] .vtime,.night .v[data-class=v] .vsys{color:#929298}[data-theme=dark] .v[data-class=v] pre,[data-theme=dark] .v[data-class=v] code,[data-theme=dark] .v[data-class=v] pre code,.dark .v[data-class=v] pre,.dark .v[data-class=v] code,.dark .v[data-class=v] pre code,.theme__dark .v[data-class=v] pre,.theme__dark .v[data-class=v] code,.theme__dark .v[data-class=v] pre code,.night .v[data-class=v] pre,.night .v[data-class=v] code,.night .v[data-class=v] pre code{color:#929298;background-color:#151414}[data-theme=dark] .v[data-class=v] .vwrap,.dark .v[data-class=v] .vwrap,.theme__dark .v[data-class=v] .vwrap,.night .v[data-class=v] .vwrap{border-color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vicon,.dark .v[data-class=v] .vicon,.theme__dark .v[data-class=v] .vicon,.night .v[data-class=v] .vicon{fill:#b2b2b5}[data-theme=dark] .v[data-class=v] .vicon.actived,.dark .v[data-class=v] .vicon.actived,.theme__dark .v[data-class=v] .vicon.actived,.night .v[data-class=v] .vicon.actived{fill:#66b1ff}[data-theme=dark] .v[data-class=v] .vbtn,.dark .v[data-class=v] .vbtn,.theme__dark .v[data-class=v] .vbtn,.night .v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vbtn:hover,.dark .v[data-class=v] .vbtn:hover,.theme__dark .v[data-class=v] .vbtn:hover,.night .v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}[data-theme=dark] .v[data-class=v] a:hover,.dark .v[data-class=v] a:hover,.theme__dark .v[data-class=v] a:hover,.night .v[data-class=v] a:hover{color:#d7191a}[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand::before,.dark .v[data-class=v] .vcards .vcard .vcontent.expand::before,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand::before,.night .v[data-class=v] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.7)));background:linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))}[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand::after,.dark .v[data-class=v] .vcards .vcard .vcontent.expand::after,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand::after,.night .v[data-class=v] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,.7)}@media(prefers-color-scheme: dark){.v[data-class=v] .vinput,.v[data-class=v] .veditor,.v[data-class=v] p,.v[data-class=v] pre code,.v[data-class=v] .status-bar{color:#b2b2b5}.v[data-class=v] .vtime,.v[data-class=v] .vsys{color:#929298}.v[data-class=v] pre,.v[data-class=v] code,.v[data-class=v] pre code{color:#929298;background-color:#151414}.v[data-class=v] .vwrap{border-color:#b2b2b5}.v[data-class=v] .vicon{fill:#b2b2b5}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.7)));background:linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))}.v[data-class=v] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,.7)}}',
          "",
        ]),
          (e.exports = t);
      },
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          var n = e[1] || "",
            r = e[3];
          return r
            ? t && "function" == typeof btoa
              ? ((e = "/*# ".concat(
                  "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(r))))
                  ),
                  " */"
                )),
                [n]
                  .concat(
                    r.sources.map(function (e) {
                      return "/*# sourceURL="
                        .concat(r.sourceRoot || "")
                        .concat(e, " */");
                    })
                  )
                  .concat([e])
                  .join("\n"))
              : [n].join("\n")
            : n;
        }
        e.exports = function (n) {
          var s = [];
          return (
            (s.toString = function () {
              return this.map(function (e) {
                var t = r(e, n);
                return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (s.i = function (e, t, n) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var r = {};
              if (n)
                for (var o = 0; o < this.length; o++) {
                  var i = this[o][0];
                  null != i && (r[i] = !0);
                }
              for (var a = 0; a < e.length; a++) {
                var u = [].concat(e[a]);
                (n && r[u[0]]) ||
                  (t &&
                    (u[2]
                      ? (u[2] = "".concat(t, " and ").concat(u[2]))
                      : (u[2] = t)),
                  s.push(u));
              }
            }),
            s
          );
        };
      },
      function (e, t, n) {
        function s(e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = g[r.id];
            if (o) {
              o.refs++;
              for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
              for (; i < r.parts.length; i++) o.parts.push(d(r.parts[i], t));
            } else {
              for (var a = [], i = 0; i < r.parts.length; i++)
                a.push(d(r.parts[i], t));
              g[r.id] = { id: r.id, refs: 1, parts: a };
            }
          }
        }
        function l(e, t) {
          for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
              a = t.base ? i[0] + t.base : i[0],
              i = { css: i[1], media: i[2], sourceMap: i[3] };
            r[a] ? r[a].parts.push(i) : n.push((r[a] = { id: a, parts: [i] }));
          }
          return n;
        }
        function u(e, t) {
          var n = a(e.insertInto);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var r = b[b.length - 1];
          if ("top" === e.insertAt)
            r
              ? r.nextSibling
                ? n.insertBefore(t, r.nextSibling)
                : n.appendChild(t)
              : n.insertBefore(t, n.firstChild),
              b.push(t);
          else {
            if ("bottom" !== e.insertAt)
              throw new Error(
                "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
              );
            n.appendChild(t);
          }
        }
        function c(e) {
          null !== e.parentNode &&
            (e.parentNode.removeChild(e),
            0 <= (e = b.indexOf(e)) && b.splice(e, 1));
        }
        function p(e) {
          var t = document.createElement("style");
          return (e.attrs.type = "text/css"), f(t, e.attrs), u(e, t), t;
        }
        function f(t, n) {
          Object.keys(n).forEach(function (e) {
            t.setAttribute(e, n[e]);
          });
        }
        function d(t, e) {
          var n, r, o, i, a;
          if (e.transform && t.css) {
            if (!(i = e.transform(t.css))) return function () {};
            t.css = i;
          }
          return (
            (o = e.singleton
              ? ((i = y++),
                (n = m = m || p(e)),
                (r = h.bind(null, n, i, !1)),
                h.bind(null, n, i, !0))
              : t.sourceMap &&
                "function" == typeof URL &&
                "function" == typeof URL.createObjectURL &&
                "function" == typeof URL.revokeObjectURL &&
                "function" == typeof Blob &&
                "function" == typeof btoa
              ? ((i = e),
                (a = document.createElement("link")),
                (i.attrs.type = "text/css"),
                (i.attrs.rel = "stylesheet"),
                f(a, i.attrs),
                u(i, a),
                (n = a),
                (r = function (e, t, n) {
                  var r = n.css,
                    n = n.sourceMap,
                    o = void 0 === t.convertToAbsoluteUrls && n,
                    t =
                      ((t.convertToAbsoluteUrls || o) && (r = D(r)),
                      n &&
                        (r +=
                          "\n/*# sourceMappingURL=data:application/json;base64," +
                          btoa(
                            unescape(encodeURIComponent(JSON.stringify(n)))
                          ) +
                          " */"),
                      new Blob([r], { type: "text/css" })),
                    o = e.href;
                  (e.href = URL.createObjectURL(t)),
                    o && URL.revokeObjectURL(o);
                }.bind(null, n, e)),
                function () {
                  c(n), n.href && URL.revokeObjectURL(n.href);
                })
              : ((n = p(e)),
                (r = function (e, t) {
                  var n = t.css,
                    t = t.media;
                  if ((t && e.setAttribute("media", t), e.styleSheet))
                    e.styleSheet.cssText = n;
                  else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                  }
                }.bind(null, n)),
                function () {
                  c(n);
                })),
            r(t),
            function (e) {
              e
                ? (e.css === t.css &&
                    e.media === t.media &&
                    e.sourceMap === t.sourceMap) ||
                  r((t = e))
                : o();
            }
          );
        }
        function h(e, t, n, r) {
          var n = n ? "" : r.css;
          e.styleSheet
            ? (e.styleSheet.cssText = w(t, n))
            : ((r = document.createTextNode(n)),
              (n = e.childNodes)[t] && e.removeChild(n[t]),
              n.length ? e.insertBefore(r, n[t]) : e.appendChild(r));
        }
        var r,
          o,
          i,
          g = {},
          v = function () {
            return (o =
              void 0 === o
                ? function () {
                    return window && document && document.all && !window.atob;
                  }.apply(this, arguments)
                : o);
          },
          a =
            ((r = {}),
            function (e) {
              return (
                void 0 === r[e] &&
                  (r[e] = function (e) {
                    return document.querySelector(e);
                  }.call(this, e)),
                r[e]
              );
            }),
          m = null,
          y = 0,
          b = [],
          D = n(107),
          w =
            ((e.exports = function (e, a) {
              if (
                "undefined" != typeof DEBUG &&
                DEBUG &&
                "object" != typeof document
              )
                throw new Error(
                  "The style-loader cannot be used in a non-browser environment"
                );
              ((a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {}),
                a.singleton || (a.singleton = v()),
                a.insertInto || (a.insertInto = "head"),
                a.insertAt || (a.insertAt = "bottom");
              var u = l(e, a);
              return (
                s(u, a),
                function (e) {
                  for (var t = [], n = 0; n < u.length; n++) {
                    var r = u[n];
                    (o = g[r.id]).refs--, t.push(o);
                  }
                  e && s(l(e, a), a);
                  for (var o, n = 0; n < t.length; n++)
                    if (0 === (o = t[n]).refs) {
                      for (var i = 0; i < o.parts.length; i++) o.parts[i]();
                      delete g[o.id];
                    }
                }
              );
            }),
            (i = []),
            function (e, t) {
              return (i[e] = t), i.filter(Boolean).join("\n");
            });
      },
      function (e, t) {
        e.exports = function (e) {
          var t = "undefined" != typeof window && window.location;
          if (!t) throw new Error("fixUrls requires window.location");
          if (!e || "string" != typeof e) return e;
          var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
          return e.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function (e, t) {
              t = t
                .trim()
                .replace(/^"(.*)"$/, function (e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function (e, t) {
                  return t;
                });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(t)
                ? e
                : ((e =
                    0 === t.indexOf("//")
                      ? t
                      : 0 === t.indexOf("/")
                      ? n + t
                      : r + t.replace(/^\.\//, "")),
                  "url(" + JSON.stringify(e) + ")");
            }
          );
        };
      },
      function (e, t, n) {
        n(103), (e.exports = n(34));
      },
    ]),
    (o = {}),
    (r.m = n),
    (r.c = o),
    (r.i = function (e) {
      return e;
    }),
    (r.d = function (e, t, n) {
      r.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 108))
  );
  function r(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  var n, o;
});
