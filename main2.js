/*main js*/
//fixing encoded uri issue:
history.replaceState({}, null, decodeURI(location.href));
"abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(
    /\w+/g,
    function (n) {
        document.createElement(n);
    }
);
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
            ? t(e, !0)
            : function (e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return t(e);
            })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function e(t) {
            return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");
        if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
                ? l[c.call(e)] || "object"
                : typeof e;
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.fn = w.prototype =
        {
            jquery: "3.3.1",
            constructor: w,
            length: 0,
            toArray: function () {
                return o.call(this);
            },
            get: function (e) {
                return null == e
                    ? o.call(this)
                    : e < 0
                        ? this[e + this.length]
                        : this[e];
            },
            pushStack: function (e) {
                var t = w.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return w.each(this, e);
            },
            map: function (e) {
                return this.pushStack(
                    w.map(this, function (t, n) {
                        return e.call(t, n, t);
                    })
                );
            },
            slice: function () {
                return this.pushStack(o.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: s,
            sort: n.sort,
            splice: n.splice,
        }),
        (w.extend = w.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || g(a) || (a = {}),
                    s === u && ((a = this), s--);
                    s < u;
                    s++
                )
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (n = a[t]),
                            a !== (r = e[t]) &&
                            (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                                ? (i
                                    ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                                    : (o = n && w.isPlainObject(n) ? n : {}),
                                    (a[t] = w.extend(l, o, r)))
                                : void 0 !== r && (a[t] = r));
                return a;
            }),
        w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return (
                    !(!e || "[object Object]" !== c.call(e)) &&
                    (!(t = i(e)) ||
                        ("function" ==
                            typeof (n = f.call(t, "constructor") && t.constructor) &&
                            p.call(n) === d))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                m(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (C(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(T, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                    (C(Object(e))
                        ? w.merge(n, "string" == typeof e ? [e] : e)
                        : s.call(n, e)),
                        n
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                    (r = !t(e[o], o)) !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    s = [];
                if (C(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return a.apply([], s);
            },
            guid: 1,
            support: h,
        }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                l["[object " + t + "]"] = t.toLowerCase();
            }
        );
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return (
            !g(e) &&
            !y(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
        );
    }
    var E = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            P =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I =
                "\\[" +
                M +
                "*(" +
                R +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                R +
                "))|)" +
                M +
                "*\\]",
            W =
                ":(" +
                R +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                I +
                ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    M +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    M +
                    "*(?:([+-]|)" +
                    M +
                    "*(\\d+)|))" +
                    M +
                    "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                    M +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    M +
                    "*((?:-\\d)?\\d*)" +
                    M +
                    "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n
                    ? t
                    : r < 0
                        ? String.fromCharCode(r + 65536)
                        : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t
                    ? "\0" === e
                        ? "\ufffd"
                        : e.slice(0, -1) +
                        "\\" +
                        e.charCodeAt(e.length - 1).toString(16) +
                        " "
                    : "\\" + e;
            },
            re = function () {
                p();
            },
            ie = me(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((A = H.call(w.childNodes)), w.childNodes),
                A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length
                    ? function (e, t) {
                        q.apply(e, H.call(t));
                    }
                    : function (e, t) {
                        var n = e.length,
                            r = 0;
                        while ((e[n++] = t[r++]));
                        e.length = n - 1;
                    },
            };
        }
        function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
            )
                return r;
            if (
                !i &&
                ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
            ) {
                if (11 !== T && (f = J.exec(e)))
                    if ((o = f[1])) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l), r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if (
                            (o = f[3]) &&
                            n.getElementsByClassName &&
                            t.getElementsByClassName
                        )
                            return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) (m = t), (v = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id"))
                            ? (c = c.replace(te, ne))
                            : t.setAttribute("id", (c = b)),
                            (s = (h = a(e)).length);
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)), r;
                        } catch (e) {
                        } finally {
                            c === b && t.removeAttribute("id");
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return (
                    e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                        (t[n + " "] = i)
                );
            }
            return t;
        }
        function se(e) {
            return (e[b] = !0), e;
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function de(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function (t) {
                return (
                    (t = +t),
                        se(function (n, r) {
                            var i,
                                o = e([], n.length, t),
                                a = o.length;
                            while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                        })
                );
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        (n = oe.support = {}),
            (o = oe.isXML =
                function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName;
                }),
            (p = oe.setDocument =
                function (e) {
                    var t,
                        i,
                        a = e ? e.ownerDocument || e : w;
                    return a !== d && 9 === a.nodeType && a.documentElement
                        ? ((d = a),
                            (h = d.documentElement),
                            (g = !o(d)),
                        w !== d &&
                        (i = d.defaultView) &&
                        i.top !== i &&
                        (i.addEventListener
                            ? i.addEventListener("unload", re, !1)
                            : i.attachEvent && i.attachEvent("onunload", re)),
                            (n.attributes = ue(function (e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (n.getElementsByTagName = ue(function (e) {
                                return (
                                    e.appendChild(d.createComment("")),
                                        !e.getElementsByTagName("*").length
                                );
                            })),
                            (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
                            (n.getById = ue(function (e) {
                                return (
                                    (h.appendChild(e).id = b),
                                    !d.getElementsByName || !d.getElementsByName(b).length
                                );
                            })),
                            n.getById
                                ? ((r.filter.ID = function (e) {
                                    var t = e.replace(Z, ee);
                                    return function (e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                    (r.find.ID = function (e, t) {
                                        if ("undefined" != typeof t.getElementById && g) {
                                            var n = t.getElementById(e);
                                            return n ? [n] : [];
                                        }
                                    }))
                                : ((r.filter.ID = function (e) {
                                    var t = e.replace(Z, ee);
                                    return function (e) {
                                        var n =
                                            "undefined" != typeof e.getAttributeNode &&
                                            e.getAttributeNode("id");
                                        return n && n.value === t;
                                    };
                                }),
                                    (r.find.ID = function (e, t) {
                                        if ("undefined" != typeof t.getElementById && g) {
                                            var n,
                                                r,
                                                i,
                                                o = t.getElementById(e);
                                            if (o) {
                                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                                    return [o];
                                                (i = t.getElementsByName(e)), (r = 0);
                                                while ((o = i[r++]))
                                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                                        return [o];
                                            }
                                            return [];
                                        }
                                    })),
                            (r.find.TAG = n.getElementsByTagName
                                ? function (e, t) {
                                    return "undefined" != typeof t.getElementsByTagName
                                        ? t.getElementsByTagName(e)
                                        : n.qsa
                                            ? t.querySelectorAll(e)
                                            : void 0;
                                }
                                : function (e, t) {
                                    var n,
                                        r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                        return r;
                                    }
                                    return o;
                                }),
                            (r.find.CLASS =
                                n.getElementsByClassName &&
                                function (e, t) {
                                    if ("undefined" != typeof t.getElementsByClassName && g)
                                        return t.getElementsByClassName(e);
                                }),
                            (v = []),
                            (y = []),
                        (n.qsa = Q.test(d.querySelectorAll)) &&
                        (ue(function (e) {
                            (h.appendChild(e).innerHTML =
                                "<a id='" +
                                b +
                                "'></a><select id='" +
                                b +
                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                            y.push("[*^$]=" + M + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                            y.push("\\[" + M + "*(?:value|" + P + ")"),
                            e.querySelectorAll("[id~=" + b + "-]").length ||
                            y.push("~="),
                            e.querySelectorAll(":checked").length || y.push(":checked"),
                            e.querySelectorAll("a#" + b + "+*").length ||
                            y.push(".#.+[+~]");
                        }),
                            ue(function (e) {
                                e.innerHTML =
                                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = d.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length &&
                                y.push("name" + M + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length &&
                                y.push(":enabled", ":disabled"),
                                    (h.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length &&
                                y.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    y.push(",.*:");
                            })),
                        (n.matchesSelector = Q.test(
                            (m =
                                h.matches ||
                                h.webkitMatchesSelector ||
                                h.mozMatchesSelector ||
                                h.oMatchesSelector ||
                                h.msMatchesSelector)
                        )) &&
                        ue(function (e) {
                            (n.disconnectedMatch = m.call(e, "*")),
                                m.call(e, "[s!='']:x"),
                                v.push("!=", W);
                        }),
                            (y = y.length && new RegExp(y.join("|"))),
                            (v = v.length && new RegExp(v.join("|"))),
                            (t = Q.test(h.compareDocumentPosition)),
                            (x =
                                t || Q.test(h.contains)
                                    ? function (e, t) {
                                        var n = 9 === e.nodeType ? e.documentElement : e,
                                            r = t && t.parentNode;
                                        return (
                                            e === r ||
                                            !(
                                                !r ||
                                                1 !== r.nodeType ||
                                                !(n.contains
                                                    ? n.contains(r)
                                                    : e.compareDocumentPosition &&
                                                    16 & e.compareDocumentPosition(r))
                                            )
                                        );
                                    }
                                    : function (e, t) {
                                        if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                        return !1;
                                    }),
                            (D = t
                                ? function (e, t) {
                                    if (e === t) return (f = !0), 0;
                                    var r =
                                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        r ||
                                        (1 &
                                        (r =
                                            (e.ownerDocument || e) === (t.ownerDocument || t)
                                                ? e.compareDocumentPosition(t)
                                                : 1) ||
                                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                            ? e === d || (e.ownerDocument === w && x(w, e))
                                                ? -1
                                                : t === d || (t.ownerDocument === w && x(w, t))
                                                    ? 1
                                                    : c
                                                        ? O(c, e) - O(c, t)
                                                        : 0
                                            : 4 & r
                                                ? -1
                                                : 1)
                                    );
                                }
                                : function (e, t) {
                                    if (e === t) return (f = !0), 0;
                                    var n,
                                        r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        a = [e],
                                        s = [t];
                                    if (!i || !o)
                                        return e === d
                                            ? -1
                                            : t === d
                                                ? 1
                                                : i
                                                    ? -1
                                                    : o
                                                        ? 1
                                                        : c
                                                            ? O(c, e) - O(c, t)
                                                            : 0;
                                    if (i === o) return ce(e, t);
                                    n = e;
                                    while ((n = n.parentNode)) a.unshift(n);
                                    n = t;
                                    while ((n = n.parentNode)) s.unshift(n);
                                    while (a[r] === s[r]) r++;
                                    return r
                                        ? ce(a[r], s[r])
                                        : a[r] === w
                                            ? -1
                                            : s[r] === w
                                                ? 1
                                                : 0;
                                }),
                            d)
                        : d;
                }),
            (oe.matches = function (e, t) {
                return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function (e, t) {
                if (
                    ((e.ownerDocument || e) !== d && p(e),
                        (t = t.replace(z, "='$1']")),
                    n.matchesSelector &&
                    g &&
                    !S[t + " "] &&
                    (!v || !v.test(t)) &&
                    (!y || !y.test(t)))
                )
                    try {
                        var r = m.call(e, t);
                        if (
                            r ||
                            n.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return r;
                    } catch (e) {}
                return oe(t, d, null, [e]).length > 0;
            }),
            (oe.contains = function (e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t);
            }),
            (oe.attr = function (e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o
                    ? o
                    : n.attributes || !g
                        ? e.getAttribute(t)
                        : (o = e.getAttributeNode(t)) && o.specified
                            ? o.value
                            : null;
            }),
            (oe.escape = function (e) {
                return (e + "").replace(te, ne);
            }),
            (oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function (e) {
                var t,
                    r = [],
                    i = 0,
                    o = 0;
                if (
                    ((f = !n.detectDuplicates),
                        (c = !n.sortStable && e.slice(0)),
                        e.sort(D),
                        f)
                ) {
                    while ((t = e[o++])) t === e[o] && (i = r.push(o));
                    while (i--) e.splice(r[i], 1);
                }
                return (c = null), e;
            }),
            (i = oe.getText =
                function (e) {
                    var t,
                        n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                        } else if (3 === o || 4 === o) return e.nodeValue;
                    } else while ((t = e[r++])) n += i(t);
                    return n;
                }),
            ((r = oe.selectors =
                {
                    cacheLength: 50,
                    createPseudo: se,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return (
                                (e[1] = e[1].replace(Z, ee)),
                                    (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                            );
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                    "nth" === e[1].slice(0, 3)
                                        ? (e[3] || oe.error(e[0]),
                                            (e[4] = +(e[4]
                                                ? e[5] + (e[6] || 1)
                                                : 2 * ("even" === e[3] || "odd" === e[3]))),
                                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                        : e[3] && oe.error(e[0]),
                                    e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return V.CHILD.test(e[0])
                                ? null
                                : (e[3]
                                    ? (e[2] = e[4] || e[5] || "")
                                    : n &&
                                    X.test(n) &&
                                    (t = a(n, !0)) &&
                                    (t = n.indexOf(")", n.length - t) - n.length) &&
                                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                                    e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e
                                ? function () {
                                    return !0;
                                }
                                : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t;
                                };
                        },
                        CLASS: function (e) {
                            var t = E[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                    E(e, function (e) {
                                        return t.test(
                                            ("string" == typeof e.className && e.className) ||
                                            ("undefined" != typeof e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                        );
                                    }))
                            );
                        },
                        ATTR: function (e, t, n) {
                            return function (r) {
                                var i = oe.attr(r, e);
                                return null == i
                                    ? "!=" === t
                                    : !t ||
                                    ((i += ""),
                                        "=" === t
                                            ? i === n
                                            : "!=" === t
                                                ? i !== n
                                                : "^=" === t
                                                    ? n && 0 === i.indexOf(n)
                                                    : "*=" === t
                                                        ? n && i.indexOf(n) > -1
                                                        : "$=" === t
                                                            ? n && i.slice(-n.length) === n
                                                            : "~=" === t
                                                                ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                                                                : "|=" === t &&
                                                                (i === n || i.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i
                                ? function (e) {
                                    return !!e.parentNode;
                                }
                                : function (t, n, u) {
                                    var l,
                                        c,
                                        f,
                                        p,
                                        d,
                                        h,
                                        g = o !== a ? "nextSibling" : "previousSibling",
                                        y = t.parentNode,
                                        v = s && t.nodeName.toLowerCase(),
                                        m = !u && !s,
                                        x = !1;
                                    if (y) {
                                        if (o) {
                                            while (g) {
                                                p = t;
                                                while ((p = p[g]))
                                                    if (
                                                        s
                                                            ? p.nodeName.toLowerCase() === v
                                                            : 1 === p.nodeType
                                                    )
                                                        return !1;
                                                h = g = "only" === e && !h && "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                                            (x =
                                                (d =
                                                    (l =
                                                        (c =
                                                            (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] ||
                                                            (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                                                    l[1]) && l[2]),
                                                (p = d && y.childNodes[d]);
                                            while (
                                                (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                                                )
                                                if (1 === p.nodeType && ++x && p === t) {
                                                    c[e] = [T, d, x];
                                                    break;
                                                }
                                        } else if (
                                            (m &&
                                            (x = d =
                                                (l =
                                                    (c =
                                                        (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                                                        (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                                                l[1]),
                                            !1 === x)
                                        )
                                            while (
                                                (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                                                )
                                                if (
                                                    (s
                                                        ? p.nodeName.toLowerCase() === v
                                                        : 1 === p.nodeType) &&
                                                    ++x &&
                                                    (m &&
                                                    ((c =
                                                        (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                                        (f[p.uniqueID] = {}))[e] = [T, x]),
                                                    p === t)
                                                )
                                                    break;
                                        return (x -= i) === r || (x % r == 0 && x / r >= 0);
                                    }
                                };
                        },
                        PSEUDO: function (e, t) {
                            var n,
                                i =
                                    r.pseudos[e] ||
                                    r.setFilters[e.toLowerCase()] ||
                                    oe.error("unsupported pseudo: " + e);
                            return i[b]
                                ? i(t)
                                : i.length > 1
                                    ? ((n = [e, e, "", t]),
                                        r.setFilters.hasOwnProperty(e.toLowerCase())
                                            ? se(function (e, n) {
                                                var r,
                                                    o = i(e, t),
                                                    a = o.length;
                                                while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                                            })
                                            : function (e) {
                                                return i(e, 0, n);
                                            })
                                    : i;
                        },
                    },
                    pseudos: {
                        not: se(function (e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(B, "$1"));
                            return r[b]
                                ? se(function (e, t, n, i) {
                                    var o,
                                        a = r(e, null, i, []),
                                        s = e.length;
                                    while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                                })
                                : function (e, i, o) {
                                    return (
                                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                                    );
                                };
                        }),
                        has: se(function (e) {
                            return function (t) {
                                return oe(e, t).length > 0;
                            };
                        }),
                        contains: se(function (e) {
                            return (
                                (e = e.replace(Z, ee)),
                                    function (t) {
                                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                                    }
                            );
                        }),
                        lang: se(function (e) {
                            return (
                                U.test(e || "") || oe.error("unsupported lang: " + e),
                                    (e = e.replace(Z, ee).toLowerCase()),
                                    function (t) {
                                        var n;
                                        do {
                                            if (
                                                (n = g
                                                    ? t.lang
                                                    : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                            )
                                                return (
                                                    (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                );
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1;
                                    }
                            );
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function (e) {
                            return e === h;
                        },
                        focus: function (e) {
                            return (
                                e === d.activeElement &&
                                (!d.hasFocus || d.hasFocus()) &&
                                !!(e.type || e.href || ~e.tabIndex)
                            );
                        },
                        enabled: de(!1),
                        disabled: de(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && !!e.checked) ||
                                ("option" === t && !!e.selected)
                            );
                        },
                        selected: function (e) {
                            return (
                                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            );
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !r.pseudos.empty(e);
                        },
                        header: function (e) {
                            return Y.test(e.nodeName);
                        },
                        input: function (e) {
                            return G.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function (e) {
                            var t;
                            return (
                                "input" === e.nodeName.toLowerCase() &&
                                "text" === e.type &&
                                (null == (t = e.getAttribute("type")) ||
                                    "text" === t.toLowerCase())
                            );
                        },
                        first: he(function () {
                            return [0];
                        }),
                        last: he(function (e, t) {
                            return [t - 1];
                        }),
                        eq: he(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: he(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: he(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: he(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                            return e;
                        }),
                        gt: he(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                            return e;
                        }),
                    },
                }).pseudos.nth = r.pseudos.eq);
        for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function ye() {}
        (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = oe.tokenize =
                function (e, t) {
                    var n,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c = k[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    (s = e), (u = []), (l = r.preFilter);
                    while (s) {
                        (n && !(i = F.exec(s))) ||
                        (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                            (n = !1),
                        (i = _.exec(s)) &&
                        ((n = i.shift()),
                            o.push({ value: n, type: i[0].replace(B, " ") }),
                            (s = s.slice(n.length)));
                        for (a in r.filter)
                            !(i = V[a].exec(s)) ||
                            (l[a] && !(i = l[a](i))) ||
                            ((n = i.shift()),
                                o.push({ value: n, type: a, matches: i }),
                                (s = s.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
                });
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first
                ? function (t, n, i) {
                    while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                }
                : function (t, n, u) {
                    var l,
                        c,
                        f,
                        p = [T, s];
                    if (u) {
                        while ((t = t[r]))
                            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                        while ((t = t[r]))
                            if (1 === t.nodeType || a)
                                if (
                                    ((f = t[b] || (t[b] = {})),
                                        (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                                    i && i === t.nodeName.toLowerCase())
                                )
                                    t = t[r] || t;
                                else {
                                    if ((l = c[o]) && l[0] === T && l[1] === s)
                                        return (p[2] = l[2]);
                                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                }
                    return !1;
                };
        }
        function xe(e) {
            return e.length > 1
                ? function (t, n, r) {
                    var i = e.length;
                    while (i--) if (!e[i](t, n, r)) return !1;
                    return !0;
                }
                : e[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o) {
            return (
                r && !r[b] && (r = Te(r)),
                i && !i[b] && (i = Te(i, o)),
                    se(function (o, a, s, u) {
                        var l,
                            c,
                            f,
                            p = [],
                            d = [],
                            h = a.length,
                            g = o || be(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || (!o && t) ? g : we(g, p, e, s, u),
                            v = n ? (i || (o ? e : h || r) ? [] : a) : y;
                        if ((n && n(y, v, s, u), r)) {
                            (l = we(v, d)), r(l, [], s, u), (c = l.length);
                            while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                        }
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    (l = []), (c = v.length);
                                    while (c--) (f = v[c]) && l.push((y[c] = f));
                                    i(null, (v = []), l, u);
                                }
                                c = v.length;
                                while (c--)
                                    (f = v[c]) &&
                                    (l = i ? O(o, f) : p[c]) > -1 &&
                                    (o[l] = !(a[l] = f));
                            }
                        } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
                    })
            );
        }
        function Ce(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    u = a ? 1 : 0,
                    c = me(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    f = me(
                        function (e) {
                            return O(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            var i =
                                (!a && (r || n !== l)) ||
                                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return (t = null), i;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                        return Te(
                            u > 1 && xe(p),
                            u > 1 &&
                            ve(
                                e
                                    .slice(0, u - 1)
                                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                            ).replace(B, "$1"),
                            n,
                            u < i && Ce(e.slice(u, i)),
                            i < o && Ce((e = e.slice(i))),
                            i < o && ve(e)
                        );
                    }
                    p.push(n);
                }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f,
                        h,
                        y,
                        v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || (i && r.find.TAG("*", c)),
                        E = (T += null == w ? 1 : Math.random() || 0.1),
                        k = C.length;
                    for (
                        c && (l = a === d || a || c);
                        m !== k && null != (f = C[m]);
                        m++
                    ) {
                        if (i && f) {
                            (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
                            while ((y = e[h++]))
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                }
                            c && (T = E);
                        }
                        n && ((f = !y && f) && v--, o && x.push(f));
                    }
                    if (((v += m), n && m !== v)) {
                        h = 0;
                        while ((y = t[h++])) y(x, b, a, s);
                        if (o) {
                            if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b);
                        }
                        L.apply(u, b),
                        c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                    }
                    return c && ((T = E), (l = w)), x;
                };
            return n ? se(o) : o;
        }
        return (
            (s = oe.compile =
                function (e, t) {
                    var n,
                        r = [],
                        i = [],
                        o = S[e + " "];
                    if (!o) {
                        t || (t = a(e)), (n = t.length);
                        while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                        (o = S(e, Ee(i, r))).selector = e;
                    }
                    return o;
                }),
                (u = oe.select =
                    function (e, t, n, i) {
                        var o,
                            u,
                            l,
                            c,
                            f,
                            p = "function" == typeof e && e,
                            d = !i && a((e = p.selector || e));
                        if (((n = n || []), 1 === d.length)) {
                            if (
                                (u = d[0] = d[0].slice(0)).length > 2 &&
                                "ID" === (l = u[0]).type &&
                                9 === t.nodeType &&
                                g &&
                                r.relative[u[1].type]
                            ) {
                                if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                                    return n;
                                p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                            }
                            o = V.needsContext.test(e) ? 0 : u.length;
                            while (o--) {
                                if (((l = u[o]), r.relative[(c = l.type)])) break;
                                if (
                                    (f = r.find[c]) &&
                                    (i = f(
                                        l.matches[0].replace(Z, ee),
                                        (K.test(u[0].type) && ge(t.parentNode)) || t
                                    ))
                                ) {
                                    if ((u.splice(o, 1), !(e = i.length && ve(u))))
                                        return L.apply(n, i), n;
                                    break;
                                }
                            }
                        }
                        return (
                            (p || s(e, d))(
                                i,
                                t,
                                !g,
                                n,
                                !t || (K.test(e) && ge(t.parentNode)) || t
                            ),
                                n
                        );
                    }),
                (n.sortStable = b.split("").sort(D).join("") === b),
                (n.detectDuplicates = !!f),
                p(),
                (n.sortDetached = ue(function (e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
                })),
            ue(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
            le("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (n.attributes &&
                ue(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                            e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
            le("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
            le(P, function (e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t]
                        ? t.toLowerCase()
                        : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
            }),
                oe
        );
    })(e);
    (w.find = E),
        (w.expr = E.selectors),
        (w.expr[":"] = w.expr.pseudos),
        (w.uniqueSort = w.unique = E.uniqueSort),
        (w.text = E.getText),
        (w.isXMLDoc = E.isXML),
        (w.contains = E.contains),
        (w.escapeSelector = E.escape);
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t)
            ? w.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            })
            : t.nodeType
                ? w.grep(e, function (e) {
                    return (e === t) !== n;
                })
                : "string" != typeof t
                    ? w.grep(e, function (e) {
                        return u.call(t, e) > -1 !== n;
                    })
                    : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType
                    ? w.find.matchesSelector(r, e)
                        ? [r]
                        : []
                    : w.find.matches(
                        e,
                        w.grep(t, function (e) {
                            return 1 === e.nodeType;
                        })
                    )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1)
                    .length;
            },
        });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
            if (
                !(i =
                    "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                        ? [null, e, null]
                        : L.exec(e)) ||
                (!i[1] && t)
            )
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (
                    ((t = t instanceof w ? t[0] : t),
                        w.merge(
                            this,
                            w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
                        ),
                    A.test(i[1]) && w.isPlainObject(t))
                )
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (
                (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
            );
        }
        return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : g(e)
                ? void 0 !== n.ready
                    ? n.ready(e)
                    : e(w)
                : w.makeArray(e, this);
    }).prototype = w.fn),
        (q = w(r));
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a
                                ? a.index(n) > -1
                                : 1 === n.nodeType && w.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? u.call(w(e), this[0])
                    : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    w.each(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
                return k(e, "parentNode", n);
            },
            next: function (e) {
                return P(e, "nextSibling");
            },
            prev: function (e) {
                return P(e, "previousSibling");
            },
            nextAll: function (e) {
                return k(e, "nextSibling");
            },
            prevAll: function (e) {
                return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
                return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
                return k(e, "previousSibling", n);
            },
            siblings: function (e) {
                return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
                return S(e.firstChild);
            },
            contents: function (e) {
                return N(e, "iframe")
                    ? e.contentDocument
                    : (N(e, "template") && (e = e.content || e),
                        w.merge([], e.childNodes));
            },
        },
        function (e, t) {
            w.fn[e] = function (n, r) {
                var i = w.map(this, t, n);
                return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = w.filter(r, i)),
                    this.length > 1 &&
                    (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
                        this.pushStack(i)
                );
            };
        }
    );
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return (
            w.each(e.match(M) || [], function (e, n) {
                t[n] = !0;
            }),
                t
        );
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length)
                        !1 === o[s].apply(n[0], n[1]) &&
                        e.stopOnFalse &&
                        ((s = o.length), (n = !1));
                }
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
                add: function () {
                    return (
                        o &&
                        (n && !t && ((s = o.length - 1), a.push(n)),
                            (function t(n) {
                                w.each(n, function (n, r) {
                                    g(r)
                                        ? (e.unique && l.has(r)) || o.push(r)
                                        : r && r.length && "string" !== x(r) && t(r);
                                });
                            })(arguments),
                        n && !t && u()),
                            this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            var n;
                            while ((n = w.inArray(t, o, n)) > -1)
                                o.splice(n, 1), n <= s && s--;
                        }),
                            this
                    );
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return (
                        i ||
                        ((n = [e, (n = n || []).slice ? n.slice() : n]),
                            a.push(n),
                        t || u()),
                            this
                    );
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return l;
    };
    function I(e) {
        return e;
    }
    function W(e) {
        throw e;
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && g((i = e.then))
                    ? i.call(e, t, n)
                    : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    [
                        "notify",
                        "progress",
                        w.Callbacks("memory"),
                        w.Callbacks("memory"),
                        2,
                    ],
                    [
                        "resolve",
                        "done",
                        w.Callbacks("once memory"),
                        w.Callbacks("once memory"),
                        0,
                        "resolved",
                    ],
                    [
                        "reject",
                        "fail",
                        w.Callbacks("once memory"),
                        w.Callbacks("once memory"),
                        1,
                        "rejected",
                    ],
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r;
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                        return i.then(null, e);
                    },
                    pipe: function () {
                        var e = arguments;
                        return w
                            .Deferred(function (t) {
                                w.each(n, function (n, r) {
                                    var i = g(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && g(e.promise)
                                            ? e
                                                .promise()
                                                .progress(t.notify)
                                                .done(t.resolve)
                                                .fail(t.reject)
                                            : t[r[0] + "With"](this, i ? [e] : arguments);
                                    });
                                }),
                                    (e = null);
                            })
                            .promise();
                    },
                    then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            (l =
                                                e &&
                                                ("object" == typeof e || "function" == typeof e) &&
                                                e.then),
                                                g(l)
                                                    ? i
                                                        ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                                                        : (o++,
                                                            l.call(
                                                                e,
                                                                a(o, n, I, i),
                                                                a(o, n, W, i),
                                                                a(o, n, I, n.notifyWith)
                                                            ))
                                                    : (r !== I && ((s = void 0), (u = [e])),
                                                        (i || n.resolveWith)(s, u));
                                        }
                                    },
                                    c = i
                                        ? l
                                        : function () {
                                            try {
                                                l();
                                            } catch (e) {
                                                w.Deferred.exceptionHook &&
                                                w.Deferred.exceptionHook(e, c.stackTrace),
                                                t + 1 >= o &&
                                                (r !== W && ((s = void 0), (u = [e])),
                                                    n.rejectWith(s, u));
                                            }
                                        };
                                t
                                    ? c()
                                    : (w.Deferred.getStackHook &&
                                    (c.stackTrace = w.Deferred.getStackHook()),
                                        e.setTimeout(c));
                            };
                        }
                        return w
                            .Deferred(function (e) {
                                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                                    n[1][3].add(a(0, e, g(t) ? t : I)),
                                    n[2][3].add(a(0, e, g(r) ? r : W));
                            })
                            .promise();
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i;
                    },
                },
                o = {};
            return (
                w.each(n, function (e, t) {
                    var a = t[2],
                        s = t[5];
                    (i[t[1]] = a.add),
                    s &&
                    a.add(
                        function () {
                            r = s;
                        },
                        n[3 - e][2].disable,
                        n[3 - e][3].disable,
                        n[0][2].lock,
                        n[0][3].lock
                    ),
                        a.add(t[3].fire),
                        (o[t[0]] = function () {
                            return (
                                o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                            );
                        }),
                        (o[t[0] + "With"] = a.fireWith);
                }),
                    i.promise(o),
                t && t.call(o, o),
                    o
            );
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        (r[e] = this),
                            (i[e] = arguments.length > 1 ? o.call(arguments) : n),
                        --t || a.resolveWith(r, i);
                    };
                };
            if (
                t <= 1 &&
                ($(e, a.done(s(n)).resolve, a.reject, !t),
                "pending" === a.state() || g(i[n] && i[n].then))
            )
                return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise();
        },
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console &&
        e.console.warn &&
        t &&
        B.test(t.name) &&
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var F = w.Deferred();
    (w.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                w.readyException(e);
            }),
                this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) ||
                ((w.isReady = !0),
                (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
            },
        }),
        (w.ready.then = F.then);
    function _() {
        r.removeEventListener("DOMContentLoaded", _),
            e.removeEventListener("load", _),
            w.ready();
    }
    "complete" === r.readyState ||
    ("loading" !== r.readyState && !r.documentElement.doScroll)
        ? e.setTimeout(w.ready)
        : (r.addEventListener("DOMContentLoaded", _),
            e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a);
            } else if (
                void 0 !== r &&
                ((i = !0),
                g(r) || (a = !0),
                l &&
                (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                        (t = function (e, t, n) {
                            return l.call(w(e), n);
                        }))),
                    t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    (Q.uid = 1),
        (Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                    ((t = {}),
                    Y(e) &&
                    (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                        }))),
                        t
                );
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n;
                else for (r in t) i[G(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(G)
                            : (t = G(t)) in r
                                ? [t]
                                : t.match(M) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(r)) &&
                    (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
    function te(e) {
        return (
            "true" === e ||
            ("false" !== e &&
                ("null" === e
                    ? null
                    : e === +e + ""
                        ? +e
                        : Z.test(e)
                            ? JSON.parse(e)
                            : e))
        );
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
            ) {
                try {
                    n = te(n);
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function (e, t) {
            J.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (
                        this.length &&
                        ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                    ) {
                        n = a.length;
                        while (n--)
                            a[n] &&
                            0 === (r = a[n].name).indexOf("data-") &&
                            ((r = G(r.slice(5))), ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                        K.set(this, e);
                    })
                    : z(
                        this,
                        function (t) {
                            var n;
                            if (o && void 0 === t) {
                                if (void 0 !== (n = K.get(o, e))) return n;
                                if (void 0 !== (n = ne(o, e))) return n;
                            } else
                                this.each(function () {
                                    K.set(this, e, t);
                                });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                    );
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                            (r = J.get(e, t)),
                        n &&
                        (!r || Array.isArray(n)
                            ? (r = J.access(e, t, w.makeArray(n)))
                            : r.push(n)),
                        r || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = w._queueHooks(e, t),
                    a = function () {
                        w.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--),
                i &&
                ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, a, o)),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    J.get(e, n) ||
                    J.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            J.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                        arguments.length < n
                            ? w.queue(this[0], e)
                            : void 0 === t
                                ? this
                                : this.each(function () {
                                    var n = w.queue(this, e, t);
                                    w._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                                })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--)
                    (n = J.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display &&
                    w.contains(e.ownerDocument, e) &&
                    "none" === w.css(e, "display"))
            );
        },
        se = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        };
    function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                    return r.cur();
                }
                : function () {
                    return w.css(e, t, "");
                },
            u = s(),
            l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--)
                w.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                    (c /= o);
            (c *= 2), w.style(e, t, c + l), (n = n || []);
        }
        return (
            n &&
            ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = i))),
                i
        );
    }
    var le = {};
    function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return (
            i ||
            ((t = n.body.appendChild(n.createElement(r))),
                (i = w.css(t, "display")),
                t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
                (le[r] = i),
                i)
        );
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
            ((n = r.style.display),
                t
                    ? ("none" === n &&
                    ((i[o] = J.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                    "" === r.style.display && ae(r) && (i[o] = ce(r)))
                    : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0);
        },
        hide: function () {
            return fe(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                    ae(this) ? w(this).show() : w(this).hide();
                });
        },
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (ge.optgroup = ge.option),
        (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td);
    function ye(e, t) {
        var n;
        return (
            (n =
                "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : "undefined" != typeof e.querySelectorAll
                        ? e.querySelectorAll(t || "*")
                        : []),
                void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
        );
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (
            var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            d < h;
            d++
        )
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))),
                        (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
                        (u = ge[s] || ge._default),
                        (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
                        (c = u[0]);
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (
                ((l = w.contains(o.ownerDocument, o)),
                    (a = ye(f.appendChild(o), "script")),
                l && ve(a),
                    n)
            ) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    !(function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (s in t) De(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
            !1 === i)
        )
            i = ke;
        else if (!i) return e;
        return (
            1 === o &&
            ((a = i),
                ((i = function (e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
                e.each(function () {
                    w.event.add(this, t, i, r, n);
                })
        );
    }
    (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);
            if (y) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && w.find.matchesSelector(be, i),
                n.guid || (n.guid = w.guid++),
                (u = y.events) || (u = y.events = {}),
                (a = y.handle) ||
                (a = y.handle =
                    function (t) {
                        return "undefined" != typeof w && w.event.triggered !== t.type
                            ? w.event.dispatch.apply(e, arguments)
                            : void 0;
                    }),
                    (l = (t = (t || "").match(M) || [""]).length);
                while (l--)
                    (d = g = (s = Ce.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                    d &&
                    ((f = w.event.special[d] || {}),
                        (d = (i ? f.delegateType : f.bindType) || d),
                        (f = w.event.special[d] || {}),
                        (c = w.extend(
                            {
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && w.expr.match.needsContext.test(i),
                                namespace: h.join("."),
                            },
                            o
                        )),
                    (p = u[d]) ||
                    (((p = u[d] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                    (e.addEventListener && e.addEventListener(d, a))),
                    f.add &&
                    (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        (w.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (
                        ((s = Ce.exec(t[l]) || []),
                            (d = g = s[1]),
                            (h = (s[2] || "").split(".").sort()),
                            d)
                    ) {
                        (f = w.event.special[d] || {}),
                            (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
                            (s =
                                s[2] &&
                                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                            (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                            (!i && g !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (s && !s.test(c.namespace)) ||
                            (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                            (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a &&
                        !p.length &&
                        ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                        w.removeEvent(e, d, y.handle),
                            delete u[d]);
                    } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (
                ((t.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, t))
            ) {
                (s = w.event.handlers.call(this, t, l)), (n = 0);
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    (t.currentTarget = o.elem), (r = 0);
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
                        ((t.handleObj = a),
                            (t.data = a.data),
                        void 0 !==
                        (i = (
                            (w.event.special[a.origType] || {}).handle || a.handler
                        ).apply(o.elem, u)) &&
                        !1 === (t.result = i) &&
                        (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[(i = (r = t[n]).selector + " ")] &&
                            (a[i] = r.needsContext
                                ? w(i, this).index(l) > -1
                                : w.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (
                (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
            );
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                    ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                    }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t,
                    });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input"))
                        return this.click(), !1;
                },
                _default: function (e) {
                    return N(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                        e.defaultPrevented ||
                        (void 0 === e.defaultPrevented && !1 === e.returnValue)
                            ? Ee
                            : ke),
                    (this.target =
                        e.target && 3 === e.target.nodeType
                            ? e.target.parentNode
                            : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
            t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type)
                        ? null != e.charCode
                            ? e.charCode
                            : e.keyCode
                        : !e.which && void 0 !== t && Te.test(e.type)
                            ? 1 & t
                                ? 1
                                : 2 & t
                                    ? 3
                                    : 4 & t
                                        ? 2
                                        : 0
                            : e.which;
                },
            },
            w.event.addProp
        ),
        w.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (
                            (i && (i === r || w.contains(r, i))) ||
                            ((e.type = o.origType),
                                (n = o.handler.apply(this, arguments)),
                                (e.type = t)),
                                n
                        );
                    },
                };
            }
        ),
        w.fn.extend({
            on: function (e, t, n, r) {
                return De(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return De(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                            w(e.delegateTarget).off(
                                r.namespace ? r.origType + "." + r.namespace : r.origType,
                                r.selector,
                                r.handler
                            ),
                            this
                    );
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = ke),
                        this.each(function () {
                            w.event.remove(this, e, n, t);
                        })
                );
            },
        });
    var Ne =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr")
            ? w(e).children("tbody")[0] || e
            : e;
    }
    function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Oe(e) {
        return (
            "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
                e
        );
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (
                J.hasData(e) &&
                ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
            ) {
                delete a.handle, (a.events = {});
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
            }
            K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
            });
        if (
            p &&
            ((i = xe(t, e[0].ownerDocument, !1, e, r)),
                (o = i.firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
        ) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
                (l = i),
                f !== d &&
                ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))),
                    n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
                    (l = s[f]),
                    he.test(l.type || "") &&
                    !J.access(l, "globalEval") &&
                    w.contains(c, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase()
                        ? w._evalUrl && w._evalUrl(l.src)
                        : m(l.textContent.replace(qe, ""), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ye(r)),
            r.parentNode &&
            (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
                r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (
                !(
                    h.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    w.isXMLDoc(e)
                )
            )
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
                    Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)
                        Pe(o[r], a[r]);
                else Pe(e, s);
            return (
                (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
            );
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if ((t = n[J.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Ie(this, e, !0);
            },
            remove: function (e) {
                return Ie(this, e);
            },
            text: function (e) {
                return z(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                (1 !== this.nodeType &&
                                    11 !== this.nodeType &&
                                    9 !== this.nodeType) ||
                                (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Re(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                    Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Re(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                        (t = null == t ? e : t),
                        this.map(function () {
                            return w.clone(this, e, t);
                        })
                );
            },
            html: function (e) {
                return z(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !Ae.test(e) &&
                            !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                    (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return Re(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 &&
                        (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, t) {
                w.fn[e] = function (e) {
                    for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
                        (n = a === o ? this : this.clone(!0)),
                            w(i[a])[t](n),
                            s.apply(r, n.get());
                    return this.pushStack(r);
                };
            }
        );
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Be = new RegExp(oe.join("|"), "i");
    !(function () {
        function t() {
            if (c) {
                (l.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                (i = "1%" !== t.top),
                    (u = 12 === n(t.marginLeft)),
                    (c.style.right = "60%"),
                    (s = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (c.style.position = "absolute"),
                    (a = 36 === c.offsetWidth || "absolute"),
                    be.removeChild(l),
                    (c = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");
        c.style &&
        ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
            w.extend(h, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), s;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), u;
                },
                scrollboxSize: function () {
                    return t(), a;
                },
            }));
    })();
    function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || $e(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
            w.contains(e.ownerDocument, e) ||
            (a = w.style(e, t)),
            !h.pixelBoxStyles() &&
            We.test(a) &&
            Be.test(t) &&
            ((r = s.width),
                (i = s.minWidth),
                (o = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = r),
                (s.minWidth = i),
                (s.maxWidth = o))),
                void 0 !== a ? a + "" : a
        );
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e;
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
                r
                    ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
                    "margin" !== n &&
                    (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
                    : ((u += w.css(e, "padding" + oe[a], !0, i)),
                        "padding" !== n
                            ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
                            : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
        return (
            !r &&
            o >= 0 &&
            (u += Math.max(
                0,
                Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
                )
            )),
                u
        );
    }
    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return (
            (a = a && (h.boxSizingReliable() || i === e.style[t])),
            ("auto" === i ||
                (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
            ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (i = parseFloat(i) || 0) +
            Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
            "px"
        );
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (
                    (u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
                )
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) &&
                (i = ie.exec(n)) &&
                i[1] &&
                ((n = ue(e, t, i)), (o = "number")),
                null != n &&
                n === n &&
                ("number" === o &&
                (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);
            return (
                Xe.test(t) || (t = Je(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) &&
                "get" in a &&
                (i = a.get(e, !0, n)),
                void 0 === i && (i = Fe(e, t, r)),
                "normal" === i && t in Ve && (i = Ve[t]),
                    "" === n || n
                        ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                        : i
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !ze.test(w.css(e, "display")) ||
                        (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? et(e, t, r)
                            : se(e, Ue, function () {
                                return et(e, t, r);
                            });
                },
                set: function (e, n, r) {
                    var i,
                        o = $e(e),
                        a = "border-box" === w.css(e, "boxSizing", !1, o),
                        s = r && Ze(e, t, r, a, o);
                    return (
                        a &&
                        h.scrollboxSize() === o.position &&
                        (s -= Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                            parseFloat(o[t]) -
                            Ze(e, t, "border", !1, o) -
                            0.5
                        )),
                        s &&
                        (i = ie.exec(n)) &&
                        "px" !== (i[3] || "px") &&
                        ((e.style[t] = n), (n = w.css(e, t))),
                            Ke(e, n, s)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Fe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        se(e, { marginLeft: 0 }, function () {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (
                        var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                        r < 4;
                        r++
                    )
                        i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
            "margin" !== e && (w.cssHooks[e + t].set = Ke);
        }),
        w.fn.extend({
            css: function (e, t) {
                return z(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; a < i; a++)
                                o[t[a]] = w.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    (w.Tween = tt),
        (tt.prototype = {
            constructor: tt,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || w.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = tt.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                            w.easing[this.easing](
                                e,
                                this.options.duration * e,
                                0,
                                1,
                                this.options.duration
                            ))
                        : (this.pos = t = e),
                        (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                        this
                );
            },
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
                            ? t
                            : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop]
                        ? w.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                        (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop])
                            ? (e.elem[e.prop] = e.now)
                            : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
            }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = tt.prototype.init),
        (w.fx.step = {});
    var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
    function at() {
        rt &&
        (!1 === r.hidden && e.requestAnimationFrame
            ? e.requestAnimationFrame(at)
            : e.setTimeout(at, w.fx.interval),
            w.fx.tick());
    }
    function st() {
        return (
            e.setTimeout(function () {
                nt = void 0;
            }),
                (nt = Date.now())
        );
    }
    function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for (
            var r,
                i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                o = 0,
                a = i.length;
            o < a;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue ||
        (null == (a = w._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
                a.unqueued || s();
            })),
            a.unqueued++,
            p.always(function () {
                p.always(function () {
                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                });
            }));
        for (r in t)
            if (((i = t[r]), it.test(i))) {
                if (
                    (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
                ) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0;
                }
                d[r] = (y && y[r]) || w.style(e, r);
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = y && y.display) && (l = J.get(e, "display")),
            "none" === (c = w.css(e, "display")) &&
            (l
                ? (c = l)
                : (fe([e], !0),
                    (l = e.style.display || l),
                    (c = w.css(e, "display")),
                    fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
            "none" === w.css(e, "float") &&
            (u ||
            (p.done(function () {
                h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                (h.display = "inline-block"))),
            n.overflow &&
            ((h.overflow = "hidden"),
                p.always(function () {
                    (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                })),
                (u = !1);
            for (r in d)
                u ||
                (y
                    ? "hidden" in y && (g = y.hidden)
                    : (y = J.access(e, "fxshow", { display: l })),
                o && (y.hidden = !g),
                g && fe([e], !0),
                    p.done(function () {
                        g || fe([e]), J.remove(e, "fxshow");
                        for (r in d) w.style(e, r, d[r]);
                    })),
                    (u = lt(g ? y[r] : 0, r, p)),
                r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (
                ((r = G(n)),
                    (i = t[r]),
                    (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = w.cssHooks[r]) && "expand" in a)
            ) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (
                    var t = nt || st(),
                        n = Math.max(0, l.startTime + l.duration - t),
                        r = 1 - (n / l.duration || 0),
                        o = 0,
                        a = l.tweens.length;
                    o < a;
                    o++
                )
                    l.tweens[o].run(r);
                return (
                    s.notifyWith(e, [l, r, n]),
                        r < 1 && a
                            ? n
                            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                );
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(
                        e,
                        l.opts,
                        t,
                        n,
                        l.opts.specialEasing[t] || l.opts.easing
                    );
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return (
                        t
                            ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                            : s.rejectWith(e, [l, t]),
                            this
                    );
                },
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
                return (
                    g(r.stop) &&
                    (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                        r
                );
        return (
            w.map(c, lt, l),
            g(l.opts.start) && l.opts.start.call(e, l),
                l
                    .progress(l.opts.progress)
                    .done(l.opts.done, l.opts.complete)
                    .fail(l.opts.fail)
                    .always(l.opts.always),
                w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
                l
        );
    }
    (w.Animation = w.extend(pt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
            for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                    (pt.tweeners[n] = pt.tweeners[n] || []),
                    pt.tweeners[n].unshift(t);
        },
        prefilters: [ct],
        prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? w.extend({}, e)
                    : {
                        complete: n || (!n && t) || (g(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !g(t) && t),
                    };
            return (
                w.fx.off
                    ? (r.duration = 0)
                    : "number" != typeof r.duration &&
                    (r.duration in w.fx.speeds
                        ? (r.duration = w.fx.speeds[r.duration])
                        : (r.duration = w.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                    (r.old = r.complete),
                    (r.complete = function () {
                        g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                    }),
                    r
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                return (
                    (a.finish = a),
                        i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                        this.each(function () {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = w.timers,
                                a = J.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                            for (i = o.length; i--; )
                                o[i].elem !== this ||
                                (null != e && o[i].queue !== e) ||
                                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                            (!t && n) || w.dequeue(this, e);
                        })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                        this.each(function () {
                            var t,
                                n = J.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = w.timers,
                                a = r ? r.length : 0;
                            for (
                                n.finish = !0,
                                    w.queue(this, e, []),
                                i && i.stop && i.stop.call(this, !0),
                                    t = o.length;
                                t--;

                            )
                                o[t].elem === this &&
                                o[t].queue === e &&
                                (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++)
                                r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish;
                        })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(ut(t, !0), e, r, i);
            };
        }),
        w.each(
            {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
                w.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                };
            }
        ),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (nt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            rt || ((rt = !0), at());
        }),
        (w.fx.stop = function () {
            rt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = w.fx ? w.fx.speeds[t] || t : t),
                    (n = n || "fx"),
                    this.queue(n, function (n, r) {
                        var i = e.setTimeout(n, t);
                        r.stop = function () {
                            e.clearTimeout(i);
                        };
                    })
            );
        }),
        (function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            (e.type = "checkbox"),
                (h.checkOn = "" !== e.value),
                (h.optSelected = t.selected),
                ((e = r.createElement("input")).value = "t"),
                (e.type = "radio"),
                (h.radioValue = "t" === e.value);
        })();
    var dt,
        ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) ||
                        (i =
                            w.attrHooks[t.toLowerCase()] ||
                            (w.expr.match.bool.test(t) ? dt : void 0)),
                            void 0 !== n
                                ? null === n
                                    ? void w.removeAttr(e, t)
                                    : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                        ? r
                                        : (e.setAttribute(t, n + ""), n)
                                : i && "get" in i && null !== (r = i.get(e, t))
                                    ? r
                                    : null == (r = w.find.attr(e, t))
                                        ? void 0
                                        : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(M);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (dt = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function (e, t, r) {
                var i,
                    o,
                    a = t.toLowerCase();
                return (
                    r ||
                    ((o = ht[a]),
                        (ht[a] = i),
                        (i = null != n(e, t, r) ? a : null),
                        (ht[a] = o)),
                        i
                );
            };
        });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) ||
                        ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                            void 0 !== n
                                ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                    ? r
                                    : (e[t] = n)
                                : i && "get" in i && null !== (r = i.get(e, t))
                                    ? r
                                    : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                                ? 0
                                : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
    h.optSelected ||
    (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
    }),
        w.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                w.propFix[this.toLowerCase()] = this;
            }
        );
    function vt(e) {
        return (e.match(M) || []).join(" ");
    }
    function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }
    w.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).addClass(e.call(this, t, mt(this)));
                });
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).removeClass(e.call(this, t, mt(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++]))
                            while (r.indexOf(" " + o + " ") > -1)
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : g(e)
                    ? this.each(function (n) {
                        w(this).toggleClass(e.call(this, n, mt(this), t), t);
                    })
                    : this.each(function () {
                        var t, i, o, a;
                        if (r) {
                            (i = 0), (o = w(this)), (a = xt(e));
                            while ((t = a[i++]))
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                    });
        },
        hasClass: function (e) {
            var t,
                n,
                r = 0;
            t = " " + e + " ";
            while ((n = this[r++]))
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1;
        },
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return (
                        (r = g(e)),
                            this.each(function (n) {
                                var i;
                                1 === this.nodeType &&
                                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                                    ? (i = "")
                                    : "number" == typeof i
                                        ? (i += "")
                                        : Array.isArray(i) &&
                                        (i = w.map(i, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                ((t =
                                        w.valHooks[this.type] ||
                                        w.valHooks[this.nodeName.toLowerCase()]) &&
                                    "set" in t &&
                                    void 0 !== t.set(this, i, "value")) ||
                                (this.value = i));
                            })
                    );
                if (i)
                    return (t =
                        w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
                    "get" in t &&
                    void 0 !== (n = t.get(i, "value"))
                        ? n
                        : "string" == typeof (n = i.value)
                            ? n.replace(bt, "")
                            : null == n
                                ? ""
                                : n;
            }
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : vt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (
                                ((n = i[r]).selected || r === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                            ) {
                                if (((t = w(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = w.makeArray(t),
                            a = i.length;
                        while (a--)
                            ((r = i[a]).selected =
                                w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
            }),
            h.checkOn ||
            (w.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            });
        }),
        (h.focusin = "onfocusin" in e);
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = h = u = i = i || r),
                3 !== i.nodeType &&
                8 !== i.nodeType &&
                !wt.test(m + w.event.triggered) &&
                (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
                    (c = m.indexOf(":") < 0 && "on" + m),
                    (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
                    (t.isTrigger = o ? 2 : 3),
                    (t.namespace = x.join(".")),
                    (t.rnamespace = t.namespace
                        ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
                        : null),
                    (t.result = void 0),
                t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (d = w.event.special[m] || {}),
                o || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!o && !d.noBubble && !y(i)) {
                    for (
                        l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
                        s;
                        s = s.parentNode
                    )
                        v.push(s), (u = s);
                    u === (i.ownerDocument || r) &&
                    v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    (h = s),
                        (t.type = a > 1 ? l : d.bindType || m),
                    (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) &&
                    p.apply(s, n),
                    (p = c && s[c]) &&
                    p.apply &&
                    Y(s) &&
                    ((t.result = p.apply(s, n)),
                    !1 === t.result && t.preventDefault());
                return (
                    (t.type = m),
                    o ||
                    t.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                    !Y(i) ||
                    (c &&
                        g(i[m]) &&
                        !y(i) &&
                        ((u = i[c]) && (i[c] = null),
                            (w.event.triggered = m),
                        t.isPropagationStopped() && h.addEventListener(m, Tt),
                            i[m](),
                        t.isPropagationStopped() && h.removeEventListener(m, Tt),
                            (w.event.triggered = void 0),
                        u && (i[c] = u))),
                        t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
    h.focusin ||
    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i
                    ? J.access(r, t, i)
                    : (r.removeEventListener(e, n, !0), J.remove(r, t));
            },
        };
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (
            (n && !n.getElementsByTagName("parsererror").length) ||
            w.error("Invalid XML: " + t),
                n
        );
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function (t, i) {
                n || St.test(e)
                    ? r(e, i)
                    : jt(
                        e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                        i,
                        n,
                        r
                    );
            });
        else if (n || "object" !== x(t)) r(e, t);
        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
    }
    (w.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] =
                    encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !w(this).is(":disabled") &&
                            At.test(this.nodeName) &&
                            !Nt.test(e) &&
                            (this.checked || !pe.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                                ? w.map(n, function (e) {
                                    return { name: t.name, value: e.replace(Dt, "\r\n") };
                                })
                                : { name: t.name, value: n.replace(Dt, "\r\n") };
                    })
                    .get();
            },
        });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while ((r = o[i++]))
                    "+" === r[0]
                        ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                        : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;
        function a(s) {
            var u;
            return (
                (i[s] = !0),
                    w.each(e[s] || [], function (e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l]
                            ? o
                                ? !(u = l)
                                : void 0
                            : (t.dataTypes.unshift(l), a(l), !1);
                    }),
                    u
            );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
    }
    function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (
                (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (u = o),
                    (o = c.shift()))
            )
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if (
                                (s = i.split(" "))[1] === o &&
                                (a = l[u + " " + s[0]] || l["* " + s[0]])
                            ) {
                                !0 === a
                                    ? (a = l[i])
                                    : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o,
                                };
                            }
                }
        return { state: "success", data: t };
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
                            }
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                        return (
                            null == c &&
                            ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                                (b[e] = t)),
                                this
                        );
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else for (t in e) x[t] = [x[t], e[t]];
                        return this;
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this;
                    },
                };
            if (
                (v.promise(E),
                    (h.url = ((t || h.url || Ct.href) + "").replace(
                        Rt,
                        Ct.protocol + "//"
                    )),
                    (h.type = n.method || n.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
                null == h.crossDomain)
            ) {
                l = r.createElement("a");
                try {
                    (l.href = h.url),
                        (l.href = l.href),
                        (h.crossDomain =
                            Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (
                (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = w.param(h.data, h.traditional)),
                    _t(It, h, n, E),
                    c)
            )
                return E;
            (f = w.event && h.global) &&
            0 == w.active++ &&
            w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Mt.test(h.type)),
                (o = h.url.replace(Lt, "")),
                h.hasContent
                    ? h.data &&
                    h.processData &&
                    0 ===
                    (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                    ) &&
                    (h.data = h.data.replace(qt, "+"))
                    : ((d = h.url.slice(o.length)),
                    h.data &&
                    (h.processData || "string" == typeof h.data) &&
                    ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                    ((o = o.replace(Ht, "$1")),
                        (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
                        (h.url = o + d)),
            h.ifModified &&
            (w.lastModified[o] &&
            E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
            w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
            E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader(
                    "Accept",
                    h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                        ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
                        : h.accepts["*"]
                );
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (
                ((C = "abort"),
                    m.add(h.complete),
                    E.done(h.success),
                    E.fail(h.error),
                    (i = _t(Wt, h, n, E)))
            ) {
                if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
                    return E;
                h.async &&
                h.timeout > 0 &&
                (u = e.setTimeout(function () {
                    E.abort("timeout");
                }, h.timeout));
                try {
                    (c = !1), i.send(b, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;
                c ||
                ((c = !0),
                u && e.clearTimeout(u),
                    (i = void 0),
                    (a = s || ""),
                    (E.readyState = t > 0 ? 4 : 0),
                    (l = (t >= 200 && t < 300) || 304 === t),
                r && (b = Xt(h, E, r)),
                    (b = Ut(h, b, E, l)),
                    l
                        ? (h.ifModified &&
                        ((T = E.getResponseHeader("Last-Modified")) &&
                        (w.lastModified[o] = T),
                        (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                            204 === t || "HEAD" === h.type
                                ? (C = "nocontent")
                                : 304 === t
                                    ? (C = "notmodified")
                                    : ((C = b.state), (p = b.data), (l = !(d = b.error))))
                        : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                    (E.status = t),
                    (E.statusText = (n || C) + ""),
                    l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                    E.statusCode(x),
                    (x = void 0),
                f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                    m.fireWith(g, [E, C]),
                f &&
                (y.trigger("ajaxComplete", [E, h]),
                --w.active || w.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script");
        },
    }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, r, i) {
                return (
                    g(n) && ((i = i || r), (r = n), (n = void 0)),
                        w.ajax(
                            w.extend(
                                { url: e, type: t, dataType: i, data: n, success: r },
                                w.isPlainObject(e) && e
                            )
                        )
                );
            };
        }),
        (w._evalUrl = function (e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                    (g(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                        this
                );
            },
            wrapInner: function (e) {
                return g(e)
                    ? this.each(function (t) {
                        w(this).wrapInner(e.call(this, t));
                    })
                    : this.each(function () {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
            },
            wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                        this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
    (h.cors = !!Gt && "withCredentials" in Gt),
        (h.ajax = Gt = !!Gt),
        w.ajaxTransport(function (t) {
            var n, r;
            if (h.cors || (Gt && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var a,
                            s = t.xhr();
                        if (
                            (s.open(t.type, t.url, t.async, t.username, t.password),
                                t.xhrFields)
                        )
                            for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                        t.crossDomain ||
                        i["X-Requested-With"] ||
                        (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                ((n =
                                    r =
                                        s.onload =
                                            s.onerror =
                                                s.onabort =
                                                    s.ontimeout =
                                                        s.onreadystatechange =
                                                            null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                            ? "number" != typeof s.status
                                                ? o(0, "error")
                                                : o(s.status, s.statusText)
                                            : o(
                                                Vt[s.status] || s.status,
                                                s.statusText,
                                                "text" !== (s.responseType || "text") ||
                                                "string" != typeof s.responseText
                                                    ? { binary: s.response }
                                                    : { text: s.responseText },
                                                s.getAllResponseHeaders()
                                            ));
                            };
                        }),
                            (s.onload = n()),
                            (r = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = r)
                                : (s.onreadystatechange = function () {
                                    4 === s.readyState &&
                                    e.setTimeout(function () {
                                        n && r();
                                    });
                                }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: {
                script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        (t = w("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(),
                                        (n = null),
                                    e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            r.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                s =
                    !1 !== t.jsonp &&
                    (Qt.test(t.url)
                        ? "url"
                        : "string" == typeof t.data &&
                        0 ===
                        (t.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        Qt.test(t.data) &&
                        "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback =
                        g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                        s
                            ? (t[s] = t[s].replace(Qt, "$1" + i))
                            : !1 !== t.jsonp &&
                            (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                        (t.converters["script json"] = function () {
                            return a || w.error(i + " was not called"), a[0];
                        }),
                        (t.dataTypes[0] = "json"),
                        (o = e[i]),
                        (e[i] = function () {
                            a = arguments;
                        }),
                        r.always(function () {
                            void 0 === o ? w(e).removeProp(i) : (e[i] = o),
                            t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
                            a && g(o) && o(a[0]),
                                (a = o = void 0);
                        }),
                        "script"
                );
        }),
        (h.createHTMLDocument = (function () {
            var e = r.implementation.createHTMLDocument("").body;
            return (
                (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
            );
        })()),
        (w.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var i, o, a;
            return (
                t ||
                (h.createHTMLDocument
                    ? (((i = (t =
                        r.implementation.createHTMLDocument("")).createElement(
                        "base"
                    )).href = r.location.href),
                        t.head.appendChild(i))
                    : (t = r)),
                    (o = A.exec(e)),
                    (a = !n && []),
                    o
                        ? [t.createElement(o[1])]
                        : ((o = xe([e], t, a)),
                        a && a.length && w(a).remove(),
                            w.merge([], o.childNodes))
            );
        }),
        (w.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                    g(t)
                        ? ((n = t), (t = void 0))
                        : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                w
                    .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                    .done(function (e) {
                        (o = arguments),
                            a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                    })
                    .always(
                        n &&
                        function (e, t) {
                            a.each(function () {
                                n.apply(this, o || [e.responseText, t, e]);
                            });
                        }
                    ),
                    this
            );
        }),
        w.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                w.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = w.css(e, "position"),
                    f = w(e),
                    p = {};
                "static" === c && (e.style.position = "relative"),
                    (s = f.offset()),
                    (o = w.css(e, "top")),
                    (u = w.css(e, "left")),
                    (l =
                        ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1)
                        ? ((a = (r = f.position()).top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                g(t) && (t = t.call(e, n, w.extend({}, s))),
                null != t.top && (p.top = t.top - s.top + a),
                null != t.left && (p.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, p) : f.css(p);
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                            w.offset.setOffset(this, e, t);
                        });
                var t,
                    n,
                    r = this[0];
                if (r)
                    return r.getClientRects().length
                        ? ((t = r.getBoundingClientRect()),
                            (n = r.ownerDocument.defaultView),
                            { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                        : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()),
                            (n = r.ownerDocument),
                            (e = r.offsetParent || n.documentElement);
                        while (
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            "static" === w.css(e, "position")
                            )
                            e = e.parentNode;
                        e &&
                        e !== r &&
                        1 === e.nodeType &&
                        (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
                            (i.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - i.top - w.css(r, "marginTop", !0),
                        left: t.left - i.left - w.css(r, "marginLeft", !0),
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                    return e || be;
                });
            },
        }),
        w.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function (r) {
                    return z(
                        this,
                        function (e, r, i) {
                            var o;
                            if (
                                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                                void 0 === i)
                            )
                                return o ? o[t] : e[r];
                            o
                                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                                : (e[r] = i);
                        },
                        e,
                        r,
                        arguments.length
                    );
                };
            }
        ),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
                if (n)
                    return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                    w.fn[r] = function (i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return z(
                            this,
                            function (t, n, i) {
                                var o;
                                return y(t)
                                    ? 0 === r.indexOf("outer")
                                        ? t["inner" + e]
                                        : t.document.documentElement["client" + e]
                                    : 9 === t.nodeType
                                        ? ((o = t.documentElement),
                                            Math.max(
                                                t.body["scroll" + e],
                                                o["scroll" + e],
                                                t.body["offset" + e],
                                                o["offset" + e],
                                                o["client" + e]
                                            ))
                                        : void 0 === i
                                            ? w.css(t, n, s)
                                            : w.style(t, n, i, s);
                            },
                            t,
                            a ? i : void 0,
                            a
                        );
                    };
                }
            );
        }),
        w.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (e, t) {
                w.fn[t] = function (e, n) {
                    return arguments.length > 0
                        ? this.on(t, null, e, n)
                        : this.trigger(t);
                };
            }
        ),
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
        }),
        (w.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                return (
                    (r = o.call(arguments, 2)),
                        (i = function () {
                            return e.apply(t || this, r.concat(o.call(arguments)));
                        }),
                        (i.guid = e.guid = e.guid || w.guid++),
                        i
                );
        }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = N),
        (w.isFunction = g),
        (w.isWindow = y),
        (w.camelCase = G),
        (w.type = x),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
    "function" == typeof define &&
    define.amd &&
    define("jquery", [], function () {
        return w;
    });
    var Jt = e.jQuery,
        Kt = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
        }),
        t || (e.jQuery = e.$ = w),
            w
    );
});

//jquery browser depracated fix
var matched, browser;
jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();
    var match =
        /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        (ua.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
        [];
    return { browser: match[1] || "", version: match[2] || "0" };
};
matched = jQuery.uaMatch(navigator.userAgent);
browser = {};
if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
}
// Chrome is Webkit, but Webkit is also Safari.
if (browser.chrome) {
    browser.webkit = true;
} else if (browser.webkit) {
    browser.safari = true;
}
jQuery.browser = browser;

/*! jQuery UI - v1.12.1 - 2017-03-17
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/autocomplete.js, widgets/datepicker.js, widgets/menu.js, widgets/mouse.js, widgets/selectmenu.js, widgets/slider.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
    function e(t) {
        for (var e = t.css("visibility"); "inherit" === e; )
            (t = t.parent()), (e = t.css("visibility"));
        return "hidden" !== e;
    }
    function i(t) {
        for (var e, i; t.length && t[0] !== document; ) {
            if (
                ((e = t.css("position")),
                ("absolute" === e || "relative" === e || "fixed" === e) &&
                ((i = parseInt(t.css("zIndex"), 10)), !isNaN(i) && 0 !== i))
            )
                return i;
            t = t.parent();
        }
        return 0;
    }
    function s() {
        (this._curInst = null),
            (this._keyEvent = !1),
            (this._disabledInputs = []),
            (this._datepickerShowing = !1),
            (this._inDialog = !1),
            (this._mainDivId = "ui-datepicker-div"),
            (this._inlineClass = "ui-datepicker-inline"),
            (this._appendClass = "ui-datepicker-append"),
            (this._triggerClass = "ui-datepicker-trigger"),
            (this._dialogClass = "ui-datepicker-dialog"),
            (this._disableClass = "ui-datepicker-disabled"),
            (this._unselectableClass = "ui-datepicker-unselectable"),
            (this._currentClass = "ui-datepicker-current-day"),
            (this._dayOverClass = "ui-datepicker-days-cell-over"),
            (this.regional = []),
            (this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                monthNamesShort: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                dayNames: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: "",
            }),
            (this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1,
            }),
            t.extend(this._defaults, this.regional[""]),
            (this.regional.en = t.extend(!0, {}, this.regional[""])),
            (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
            (this.dpDiv = n(
                t(
                    "<div id='" +
                    this._mainDivId +
                    "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
            ));
    }
    function n(e) {
        var i =
            "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e
            .on("mouseout", i, function () {
                t(this).removeClass("ui-state-hover"),
                -1 !== this.className.indexOf("ui-datepicker-prev") &&
                t(this).removeClass("ui-datepicker-prev-hover"),
                -1 !== this.className.indexOf("ui-datepicker-next") &&
                t(this).removeClass("ui-datepicker-next-hover");
            })
            .on("mouseover", i, o);
    }
    function o() {
        t.datepicker._isDisabledDatepicker(
            u.inline ? u.dpDiv.parent()[0] : u.input[0]
        ) ||
        (t(this)
            .parents(".ui-datepicker-calendar")
            .find("a")
            .removeClass("ui-state-hover"),
            t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") &&
        t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") &&
        t(this).addClass("ui-datepicker-next-hover"));
    }
    function a(e, i) {
        t.extend(e, i);
        for (var s in i) null == i[s] && (e[s] = i[s]);
        return e;
    }
    (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
    var r = 0,
        l = Array.prototype.slice;
    (t.cleanData = (function (e) {
        return function (i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++)
                try {
                    (s = t._data(n, "events")),
                    s && s.remove && t(n).triggerHandler("remove");
                } catch (a) {}
            e(i);
        };
    })(t.cleanData)),
        (t.widget = function (e, i, s) {
            var n,
                o,
                a,
                r = {},
                l = e.split(".")[0];
            e = e.split(".")[1];
            var h = l + "-" + e;
            return (
                s || ((s = i), (i = t.Widget)),
                t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
                    (t.expr[":"][h.toLowerCase()] = function (e) {
                        return !!t.data(e, h);
                    }),
                    (t[l] = t[l] || {}),
                    (n = t[l][e]),
                    (o = t[l][e] =
                        function (t, e) {
                            return this._createWidget
                                ? (arguments.length && this._createWidget(t, e), void 0)
                                : new o(t, e);
                        }),
                    t.extend(o, n, {
                        version: s.version,
                        _proto: t.extend({}, s),
                        _childConstructors: [],
                    }),
                    (a = new i()),
                    (a.options = t.widget.extend({}, a.options)),
                    t.each(s, function (e, s) {
                        return t.isFunction(s)
                            ? ((r[e] = (function () {
                                function t() {
                                    return i.prototype[e].apply(this, arguments);
                                }
                                function n(t) {
                                    return i.prototype[e].apply(this, t);
                                }
                                return function () {
                                    var e,
                                        i = this._super,
                                        o = this._superApply;
                                    return (
                                        (this._super = t),
                                            (this._superApply = n),
                                            (e = s.apply(this, arguments)),
                                            (this._super = i),
                                            (this._superApply = o),
                                            e
                                    );
                                };
                            })()),
                                void 0)
                            : ((r[e] = s), void 0);
                    }),
                    (o.prototype = t.widget.extend(
                        a,
                        { widgetEventPrefix: n ? a.widgetEventPrefix || e : e },
                        r,
                        { constructor: o, namespace: l, widgetName: e, widgetFullName: h }
                    )),
                    n
                        ? (t.each(n._childConstructors, function (e, i) {
                            var s = i.prototype;
                            t.widget(s.namespace + "." + s.widgetName, o, i._proto);
                        }),
                            delete n._childConstructors)
                        : i._childConstructors.push(o),
                    t.widget.bridge(e, o),
                    o
            );
        }),
        (t.widget.extend = function (e) {
            for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
                for (i in n[o])
                    (s = n[o][i]),
                    n[o].hasOwnProperty(i) &&
                    void 0 !== s &&
                    (e[i] = t.isPlainObject(s)
                        ? t.isPlainObject(e[i])
                            ? t.widget.extend({}, e[i], s)
                            : t.widget.extend({}, s)
                        : s);
            return e;
        }),
        (t.widget.bridge = function (e, i) {
            var s = i.prototype.widgetFullName || e;
            t.fn[e] = function (n) {
                var o = "string" == typeof n,
                    a = l.call(arguments, 1),
                    r = this;
                return (
                    o
                        ? this.length || "instance" !== n
                            ? this.each(function () {
                                var i,
                                    o = t.data(this, s);
                                return "instance" === n
                                    ? ((r = o), !1)
                                    : o
                                        ? t.isFunction(o[n]) && "_" !== n.charAt(0)
                                            ? ((i = o[n].apply(o, a)),
                                                i !== o && void 0 !== i
                                                    ? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1)
                                                    : void 0)
                                            : t.error(
                                                "no such method '" +
                                                n +
                                                "' for " +
                                                e +
                                                " widget instance"
                                            )
                                        : t.error(
                                            "cannot call methods on " +
                                            e +
                                            " prior to initialization; " +
                                            "attempted to call method '" +
                                            n +
                                            "'"
                                        );
                            })
                            : (r = void 0)
                        : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))),
                            this.each(function () {
                                var e = t.data(this, s);
                                e
                                    ? (e.option(n || {}), e._init && e._init())
                                    : t.data(this, s, new i(n, this));
                            })),
                        r
                );
            };
        }),
        (t.Widget = function () {}),
        (t.Widget._childConstructors = []),
        (t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { classes: {}, disabled: !1, create: null },
            _createWidget: function (e, i) {
                (i = t(i || this.defaultElement || this)[0]),
                    (this.element = t(i)),
                    (this.uuid = r++),
                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                    (this.bindings = t()),
                    (this.hoverable = t()),
                    (this.focusable = t()),
                    (this.classesElementLookup = {}),
                i !== this &&
                (t.data(i, this.widgetFullName, this),
                    this._on(!0, this.element, {
                        remove: function (t) {
                            t.target === i && this.destroy();
                        },
                    }),
                    (this.document = t(i.style ? i.ownerDocument : i.document || i)),
                    (this.window = t(
                        this.document[0].defaultView || this.document[0].parentWindow
                    ))),
                    (this.options = t.widget.extend(
                        {},
                        this.options,
                        this._getCreateOptions(),
                        e
                    )),
                    this._create(),
                this.options.disabled &&
                this._setOptionDisabled(this.options.disabled),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init();
            },
            _getCreateOptions: function () {
                return {};
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                var e = this;
                this._destroy(),
                    t.each(this.classesElementLookup, function (t, i) {
                        e._removeClass(i, t);
                    }),
                    this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                    this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                    this.bindings.off(this.eventNamespace);
            },
            _destroy: t.noop,
            widget: function () {
                return this.element;
            },
            option: function (e, i) {
                var s,
                    n,
                    o,
                    a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (((a = {}), (s = e.split(".")), (e = s.shift()), s.length)) {
                        for (
                            n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
                            s.length - 1 > o;
                            o++
                        )
                            (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
                        if (((e = s.pop()), 1 === arguments.length))
                            return void 0 === n[e] ? null : n[e];
                        n[e] = i;
                    } else {
                        if (1 === arguments.length)
                            return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i;
                    }
                return this._setOptions(a), this;
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this;
            },
            _setOption: function (t, e) {
                return (
                    "classes" === t && this._setOptionClasses(e),
                        (this.options[t] = e),
                    "disabled" === t && this._setOptionDisabled(e),
                        this
                );
            },
            _setOptionClasses: function (e) {
                var i, s, n;
                for (i in e)
                    (n = this.classesElementLookup[i]),
                    e[i] !== this.options.classes[i] &&
                    n &&
                    n.length &&
                    ((s = t(n.get())),
                        this._removeClass(n, i),
                        s.addClass(
                            this._classes({ element: s, keys: i, classes: e, add: !0 })
                        ));
            },
            _setOptionDisabled: function (t) {
                this._toggleClass(
                    this.widget(),
                    this.widgetFullName + "-disabled",
                    null,
                    !!t
                ),
                t &&
                (this._removeClass(this.hoverable, null, "ui-state-hover"),
                    this._removeClass(this.focusable, null, "ui-state-focus"));
            },
            enable: function () {
                return this._setOptions({ disabled: !1 });
            },
            disable: function () {
                return this._setOptions({ disabled: !0 });
            },
            _classes: function (e) {
                function i(i, o) {
                    var a, r;
                    for (r = 0; i.length > r; r++)
                        (a = n.classesElementLookup[i[r]] || t()),
                            (a = e.add
                                ? t(t.unique(a.get().concat(e.element.get())))
                                : t(a.not(e.element).get())),
                            (n.classesElementLookup[i[r]] = a),
                            s.push(i[r]),
                        o && e.classes[i[r]] && s.push(e.classes[i[r]]);
                }
                var s = [],
                    n = this;
                return (
                    (e = t.extend(
                        { element: this.element, classes: this.options.classes || {} },
                        e
                    )),
                        this._on(e.element, { remove: "_untrackClassesElement" }),
                    e.keys && i(e.keys.match(/\S+/g) || [], !0),
                    e.extra && i(e.extra.match(/\S+/g) || []),
                        s.join(" ")
                );
            },
            _untrackClassesElement: function (e) {
                var i = this;
                t.each(i.classesElementLookup, function (s, n) {
                    -1 !== t.inArray(e.target, n) &&
                    (i.classesElementLookup[s] = t(n.not(e.target).get()));
                });
            },
            _removeClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !1);
            },
            _addClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !0);
            },
            _toggleClass: function (t, e, i, s) {
                s = "boolean" == typeof s ? s : i;
                var n = "string" == typeof t || null === t,
                    o = {
                        extra: n ? e : i,
                        keys: n ? t : e,
                        element: n ? this.element : t,
                        add: s,
                    };
                return o.element.toggleClass(this._classes(o), s), this;
            },
            _on: function (e, i, s) {
                var n,
                    o = this;
                "boolean" != typeof e && ((s = i), (i = e), (e = !1)),
                    s
                        ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
                        : ((s = i), (i = this.element), (n = this.widget())),
                    t.each(s, function (s, a) {
                        function r() {
                            return e ||
                            (o.options.disabled !== !0 &&
                                !t(this).hasClass("ui-state-disabled"))
                                ? ("string" == typeof a ? o[a] : a).apply(o, arguments)
                                : void 0;
                        }
                        "string" != typeof a &&
                        (r.guid = a.guid = a.guid || r.guid || t.guid++);
                        var l = s.match(/^([\w:-]*)\s*(.*)$/),
                            h = l[1] + o.eventNamespace,
                            c = l[2];
                        c ? n.on(h, c, r) : i.on(h, r);
                    });
            },
            _off: function (e, i) {
                (i =
                    (i || "").split(" ").join(this.eventNamespace + " ") +
                    this.eventNamespace),
                    e.off(i).off(i),
                    (this.bindings = t(this.bindings.not(e).get())),
                    (this.focusable = t(this.focusable.not(e).get())),
                    (this.hoverable = t(this.hoverable.not(e).get()));
            },
            _delay: function (t, e) {
                function i() {
                    return ("string" == typeof t ? s[t] : t).apply(s, arguments);
                }
                var s = this;
                return setTimeout(i, e || 0);
            },
            _hoverable: function (e) {
                (this.hoverable = this.hoverable.add(e)),
                    this._on(e, {
                        mouseenter: function (e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-hover");
                        },
                        mouseleave: function (e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-hover");
                        },
                    });
            },
            _focusable: function (e) {
                (this.focusable = this.focusable.add(e)),
                    this._on(e, {
                        focusin: function (e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-focus");
                        },
                        focusout: function (e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-focus");
                        },
                    });
            },
            _trigger: function (e, i, s) {
                var n,
                    o,
                    a = this.options[e];
                if (
                    ((s = s || {}),
                        (i = t.Event(i)),
                        (i.type = (
                            e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
                        ).toLowerCase()),
                        (i.target = this.element[0]),
                        (o = i.originalEvent))
                )
                    for (n in o) n in i || (i[n] = o[n]);
                return (
                    this.element.trigger(i, s),
                        !(
                            (t.isFunction(a) &&
                                a.apply(this.element[0], [i].concat(s)) === !1) ||
                            i.isDefaultPrevented()
                        )
                );
            },
        }),
        t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
            t.Widget.prototype["_" + e] = function (s, n, o) {
                "string" == typeof n && (n = { effect: n });
                var a,
                    r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : e;
                (n = n || {}),
                "number" == typeof n && (n = { duration: n }),
                    (a = !t.isEmptyObject(n)),
                    (n.complete = o),
                n.delay && s.delay(n.delay),
                    a && t.effects && t.effects.effect[r]
                        ? s[e](n)
                        : r !== e && s[r]
                            ? s[r](n.duration, n.easing, o)
                            : s.queue(function (i) {
                                t(this)[e](), o && o.call(s[0]), i();
                            });
            };
        }),
        t.widget,
        (function () {
            function e(t, e, i) {
                return [
                    parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1),
                    parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1),
                ];
            }
            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0;
            }
            function s(e) {
                var i = e[0];
                return 9 === i.nodeType
                    ? {
                        width: e.width(),
                        height: e.height(),
                        offset: { top: 0, left: 0 },
                    }
                    : t.isWindow(i)
                        ? {
                            width: e.width(),
                            height: e.height(),
                            offset: { top: e.scrollTop(), left: e.scrollLeft() },
                        }
                        : i.preventDefault
                            ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
                            : {
                                width: e.outerWidth(),
                                height: e.outerHeight(),
                                offset: e.offset(),
                            };
            }
            var n,
                o = Math.max,
                a = Math.abs,
                r = /left|center|right/,
                l = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                u = /%$/,
                d = t.fn.position;
            (t.position = {
                scrollbarWidth: function () {
                    if (void 0 !== n) return n;
                    var e,
                        i,
                        s = t(
                            "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
                        ),
                        o = s.children()[0];
                    return (
                        t("body").append(s),
                            (e = o.offsetWidth),
                            s.css("overflow", "scroll"),
                            (i = o.offsetWidth),
                        e === i && (i = s[0].clientWidth),
                            s.remove(),
                            (n = e - i)
                    );
                },
                getScrollInfo: function (e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        n =
                            "scroll" === i ||
                            ("auto" === i && e.width < e.element[0].scrollWidth),
                        o =
                            "scroll" === s ||
                            ("auto" === s && e.height < e.element[0].scrollHeight);
                    return {
                        width: o ? t.position.scrollbarWidth() : 0,
                        height: n ? t.position.scrollbarWidth() : 0,
                    };
                },
                getWithinInfo: function (e) {
                    var i = t(e || window),
                        s = t.isWindow(i[0]),
                        n = !!i[0] && 9 === i[0].nodeType,
                        o = !s && !n;
                    return {
                        element: i,
                        isWindow: s,
                        isDocument: n,
                        offset: o ? t(e).offset() : { left: 0, top: 0 },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                    };
                },
            }),
                (t.fn.position = function (n) {
                    if (!n || !n.of) return d.apply(this, arguments);
                    n = t.extend({}, n);
                    var u,
                        p,
                        f,
                        g,
                        m,
                        _,
                        v = t(n.of),
                        b = t.position.getWithinInfo(n.within),
                        y = t.position.getScrollInfo(b),
                        w = (n.collision || "flip").split(" "),
                        k = {};
                    return (
                        (_ = s(v)),
                        v[0].preventDefault && (n.at = "left top"),
                            (p = _.width),
                            (f = _.height),
                            (g = _.offset),
                            (m = t.extend({}, g)),
                            t.each(["my", "at"], function () {
                                var t,
                                    e,
                                    i = (n[this] || "").split(" ");
                                1 === i.length &&
                                (i = r.test(i[0])
                                    ? i.concat(["center"])
                                    : l.test(i[0])
                                        ? ["center"].concat(i)
                                        : ["center", "center"]),
                                    (i[0] = r.test(i[0]) ? i[0] : "center"),
                                    (i[1] = l.test(i[1]) ? i[1] : "center"),
                                    (t = h.exec(i[0])),
                                    (e = h.exec(i[1])),
                                    (k[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                                    (n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]);
                            }),
                        1 === w.length && (w[1] = w[0]),
                            "right" === n.at[0]
                                ? (m.left += p)
                                : "center" === n.at[0] && (m.left += p / 2),
                            "bottom" === n.at[1]
                                ? (m.top += f)
                                : "center" === n.at[1] && (m.top += f / 2),
                            (u = e(k.at, p, f)),
                            (m.left += u[0]),
                            (m.top += u[1]),
                            this.each(function () {
                                var s,
                                    r,
                                    l = t(this),
                                    h = l.outerWidth(),
                                    c = l.outerHeight(),
                                    d = i(this, "marginLeft"),
                                    _ = i(this, "marginTop"),
                                    x = h + d + i(this, "marginRight") + y.width,
                                    C = c + _ + i(this, "marginBottom") + y.height,
                                    D = t.extend({}, m),
                                    T = e(k.my, l.outerWidth(), l.outerHeight());
                                "right" === n.my[0]
                                    ? (D.left -= h)
                                    : "center" === n.my[0] && (D.left -= h / 2),
                                    "bottom" === n.my[1]
                                        ? (D.top -= c)
                                        : "center" === n.my[1] && (D.top -= c / 2),
                                    (D.left += T[0]),
                                    (D.top += T[1]),
                                    (s = { marginLeft: d, marginTop: _ }),
                                    t.each(["left", "top"], function (e, i) {
                                        t.ui.position[w[e]] &&
                                        t.ui.position[w[e]][i](D, {
                                            targetWidth: p,
                                            targetHeight: f,
                                            elemWidth: h,
                                            elemHeight: c,
                                            collisionPosition: s,
                                            collisionWidth: x,
                                            collisionHeight: C,
                                            offset: [u[0] + T[0], u[1] + T[1]],
                                            my: n.my,
                                            at: n.at,
                                            within: b,
                                            elem: l,
                                        });
                                    }),
                                n.using &&
                                (r = function (t) {
                                    var e = g.left - D.left,
                                        i = e + p - h,
                                        s = g.top - D.top,
                                        r = s + f - c,
                                        u = {
                                            target: {
                                                element: v,
                                                left: g.left,
                                                top: g.top,
                                                width: p,
                                                height: f,
                                            },
                                            element: {
                                                element: l,
                                                left: D.left,
                                                top: D.top,
                                                width: h,
                                                height: c,
                                            },
                                            horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                            vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle",
                                        };
                                    h > p && p > a(e + i) && (u.horizontal = "center"),
                                    c > f && f > a(s + r) && (u.vertical = "middle"),
                                        (u.important =
                                            o(a(e), a(i)) > o(a(s), a(r))
                                                ? "horizontal"
                                                : "vertical"),
                                        n.using.call(this, t, u);
                                }),
                                    l.offset(t.extend(D, { using: r }));
                            })
                    );
                }),
                (t.ui.position = {
                    fit: {
                        left: function (t, e) {
                            var i,
                                s = e.within,
                                n = s.isWindow ? s.scrollLeft : s.offset.left,
                                a = s.width,
                                r = t.left - e.collisionPosition.marginLeft,
                                l = n - r,
                                h = r + e.collisionWidth - a - n;
                            e.collisionWidth > a
                                ? l > 0 && 0 >= h
                                    ? ((i = t.left + l + e.collisionWidth - a - n),
                                        (t.left += l - i))
                                    : (t.left =
                                        h > 0 && 0 >= l
                                            ? n
                                            : l > h
                                                ? n + a - e.collisionWidth
                                                : n)
                                : l > 0
                                    ? (t.left += l)
                                    : h > 0
                                        ? (t.left -= h)
                                        : (t.left = o(t.left - r, t.left));
                        },
                        top: function (t, e) {
                            var i,
                                s = e.within,
                                n = s.isWindow ? s.scrollTop : s.offset.top,
                                a = e.within.height,
                                r = t.top - e.collisionPosition.marginTop,
                                l = n - r,
                                h = r + e.collisionHeight - a - n;
                            e.collisionHeight > a
                                ? l > 0 && 0 >= h
                                    ? ((i = t.top + l + e.collisionHeight - a - n),
                                        (t.top += l - i))
                                    : (t.top =
                                        h > 0 && 0 >= l
                                            ? n
                                            : l > h
                                                ? n + a - e.collisionHeight
                                                : n)
                                : l > 0
                                    ? (t.top += l)
                                    : h > 0
                                        ? (t.top -= h)
                                        : (t.top = o(t.top - r, t.top));
                        },
                    },
                    flip: {
                        left: function (t, e) {
                            var i,
                                s,
                                n = e.within,
                                o = n.offset.left + n.scrollLeft,
                                r = n.width,
                                l = n.isWindow ? n.scrollLeft : n.offset.left,
                                h = t.left - e.collisionPosition.marginLeft,
                                c = h - l,
                                u = h + e.collisionWidth - r - l,
                                d =
                                    "left" === e.my[0]
                                        ? -e.elemWidth
                                        : "right" === e.my[0]
                                            ? e.elemWidth
                                            : 0,
                                p =
                                    "left" === e.at[0]
                                        ? e.targetWidth
                                        : "right" === e.at[0]
                                            ? -e.targetWidth
                                            : 0,
                                f = -2 * e.offset[0];
                            0 > c
                                ? ((i = t.left + d + p + f + e.collisionWidth - r - o),
                                (0 > i || a(c) > i) && (t.left += d + p + f))
                                : u > 0 &&
                                ((s =
                                    t.left - e.collisionPosition.marginLeft + d + p + f - l),
                                (s > 0 || u > a(s)) && (t.left += d + p + f));
                        },
                        top: function (t, e) {
                            var i,
                                s,
                                n = e.within,
                                o = n.offset.top + n.scrollTop,
                                r = n.height,
                                l = n.isWindow ? n.scrollTop : n.offset.top,
                                h = t.top - e.collisionPosition.marginTop,
                                c = h - l,
                                u = h + e.collisionHeight - r - l,
                                d = "top" === e.my[1],
                                p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                f =
                                    "top" === e.at[1]
                                        ? e.targetHeight
                                        : "bottom" === e.at[1]
                                            ? -e.targetHeight
                                            : 0,
                                g = -2 * e.offset[1];
                            0 > c
                                ? ((s = t.top + p + f + g + e.collisionHeight - r - o),
                                (0 > s || a(c) > s) && (t.top += p + f + g))
                                : u > 0 &&
                                ((i = t.top - e.collisionPosition.marginTop + p + f + g - l),
                                (i > 0 || u > a(i)) && (t.top += p + f + g));
                        },
                    },
                    flipfit: {
                        left: function () {
                            t.ui.position.flip.left.apply(this, arguments),
                                t.ui.position.fit.left.apply(this, arguments);
                        },
                        top: function () {
                            t.ui.position.flip.top.apply(this, arguments),
                                t.ui.position.fit.top.apply(this, arguments);
                        },
                    },
                });
        })(),
        t.ui.position,
        t.extend(t.expr[":"], {
            data: t.expr.createPseudo
                ? t.expr.createPseudo(function (e) {
                    return function (i) {
                        return !!t.data(i, e);
                    };
                })
                : function (e, i, s) {
                    return !!t.data(e, s[3]);
                },
        }),
        t.fn.extend({
            disableSelection: (function () {
                var t =
                    "onselectstart" in document.createElement("div")
                        ? "selectstart"
                        : "mousedown";
                return function () {
                    return this.on(t + ".ui-disableSelection", function (t) {
                        t.preventDefault();
                    });
                };
            })(),
            enableSelection: function () {
                return this.off(".ui-disableSelection");
            },
        }),
        (t.ui.focusable = function (i, s) {
            var n,
                o,
                a,
                r,
                l,
                h = i.nodeName.toLowerCase();
            return "area" === h
                ? ((n = i.parentNode),
                    (o = n.name),
                    i.href && o && "map" === n.nodeName.toLowerCase()
                        ? ((a = t("img[usemap='#" + o + "']")),
                        a.length > 0 && a.is(":visible"))
                        : !1)
                : (/^(input|select|textarea|button|object)$/.test(h)
                    ? ((r = !i.disabled),
                    r && ((l = t(i).closest("fieldset")[0]), l && (r = !l.disabled)))
                    : (r = "a" === h ? i.href || s : s),
                r && t(i).is(":visible") && e(t(i)));
        }),
        t.extend(t.expr[":"], {
            focusable: function (e) {
                return t.ui.focusable(e, null != t.attr(e, "tabindex"));
            },
        }),
        t.ui.focusable,
        (t.fn.form = function () {
            return "string" == typeof this[0].form
                ? this.closest("form")
                : t(this[0].form);
        }),
        (t.ui.formResetMixin = {
            _formResetHandler: function () {
                var e = t(this);
                setTimeout(function () {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function () {
                        this.refresh();
                    });
                });
            },
            _bindFormResetHandler: function () {
                if (((this.form = this.element.form()), this.form.length)) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length ||
                    this.form.on("reset.ui-form-reset", this._formResetHandler),
                        t.push(this),
                        this.form.data("ui-form-reset-instances", t);
                }
            },
            _unbindFormResetHandler: function () {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1),
                        e.length
                            ? this.form.data("ui-form-reset-instances", e)
                            : this.form
                                .removeData("ui-form-reset-instances")
                                .off("reset.ui-form-reset");
                }
            },
        }),
    "1.7" === t.fn.jquery.substring(0, 3) &&
    (t.each(["Width", "Height"], function (e, i) {
        function s(e, i, s, o) {
            return (
                t.each(n, function () {
                    (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                    s &&
                    (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                    o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
                }),
                    i
            );
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            a = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight,
            };
        (t.fn["inner" + i] = function (e) {
            return void 0 === e
                ? a["inner" + i].call(this)
                : this.each(function () {
                    t(this).css(o, s(this, e) + "px");
                });
        }),
            (t.fn["outer" + i] = function (e, n) {
                return "number" != typeof e
                    ? a["outer" + i].call(this, e)
                    : this.each(function () {
                        t(this).css(o, s(this, e, !0, n) + "px");
                    });
            });
    }),
        (t.fn.addBack = function (t) {
            return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t)
            );
        })),
        (t.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
        }),
        (t.ui.escapeSelector = (function () {
            var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
            return function (e) {
                return e.replace(t, "\\$1");
            };
        })()),
        (t.fn.labels = function () {
            var e, i, s, n, o;
            return this[0].labels && this[0].labels.length
                ? this.pushStack(this[0].labels)
                : ((n = this.eq(0).parents("label")),
                    (s = this.attr("id")),
                s &&
                ((e = this.eq(0).parents().last()),
                    (o = e.add(e.length ? e.siblings() : this.siblings())),
                    (i = "label[for='" + t.ui.escapeSelector(s) + "']"),
                    (n = n.add(o.find(i).addBack(i)))),
                    this.pushStack(n));
        }),
        (t.fn.scrollParent = function (e) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents()
                    .filter(function () {
                        var e = t(this);
                        return s && "static" === e.css("position")
                            ? !1
                            : n.test(
                                e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")
                            );
                    })
                    .eq(0);
            return "fixed" !== i && o.length
                ? o
                : t(this[0].ownerDocument || document);
        }),
        t.extend(t.expr[":"], {
            tabbable: function (e) {
                var i = t.attr(e, "tabindex"),
                    s = null != i;
                return (!s || i >= 0) && t.ui.focusable(e, s);
            },
        }),
        t.fn.extend({
            uniqueId: (function () {
                var t = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++t);
                    });
                };
            })(),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
                });
            },
        }),
        (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
    var h = !1;
    t(document).on("mouseup", function () {
        h = !1;
    }),
        t.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0,
            },
            _mouseInit: function () {
                var e = this;
                this.element
                    .on("mousedown." + this.widgetName, function (t) {
                        return e._mouseDown(t);
                    })
                    .on("click." + this.widgetName, function (i) {
                        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent")
                            ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                                i.stopImmediatePropagation(),
                                !1)
                            : void 0;
                    }),
                    (this.started = !1);
            },
            _mouseDestroy: function () {
                this.element.off("." + this.widgetName),
                this._mouseMoveDelegate &&
                this.document
                    .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .off("mouseup." + this.widgetName, this._mouseUpDelegate);
            },
            _mouseDown: function (e) {
                if (!h) {
                    (this._mouseMoved = !1),
                    this._mouseStarted && this._mouseUp(e),
                        (this._mouseDownEvent = e);
                    var i = this,
                        s = 1 === e.which,
                        n =
                            "string" == typeof this.options.cancel && e.target.nodeName
                                ? t(e.target).closest(this.options.cancel).length
                                : !1;
                    return s && !n && this._mouseCapture(e)
                        ? ((this.mouseDelayMet = !this.options.delay),
                        this.mouseDelayMet ||
                        (this._mouseDelayTimer = setTimeout(function () {
                            i.mouseDelayMet = !0;
                        }, this.options.delay)),
                            this._mouseDistanceMet(e) &&
                            this._mouseDelayMet(e) &&
                            ((this._mouseStarted = this._mouseStart(e) !== !1),
                                !this._mouseStarted)
                                ? (e.preventDefault(), !0)
                                : (!0 ===
                                t.data(e.target, this.widgetName + ".preventClickEvent") &&
                                t.removeData(
                                    e.target,
                                    this.widgetName + ".preventClickEvent"
                                ),
                                    (this._mouseMoveDelegate = function (t) {
                                        return i._mouseMove(t);
                                    }),
                                    (this._mouseUpDelegate = function (t) {
                                        return i._mouseUp(t);
                                    }),
                                    this.document
                                        .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                                        .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                                    e.preventDefault(),
                                    (h = !0),
                                    !0))
                        : !0;
                }
            },
            _mouseMove: function (e) {
                if (this._mouseMoved) {
                    if (
                        t.ui.ie &&
                        (!document.documentMode || 9 > document.documentMode) &&
                        !e.button
                    )
                        return this._mouseUp(e);
                    if (!e.which)
                        if (
                            e.originalEvent.altKey ||
                            e.originalEvent.ctrlKey ||
                            e.originalEvent.metaKey ||
                            e.originalEvent.shiftKey
                        )
                            this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e);
                }
                return (
                    (e.which || e.button) && (this._mouseMoved = !0),
                        this._mouseStarted
                            ? (this._mouseDrag(e), e.preventDefault())
                            : (this._mouseDistanceMet(e) &&
                            this._mouseDelayMet(e) &&
                            ((this._mouseStarted =
                                this._mouseStart(this._mouseDownEvent, e) !== !1),
                                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                                !this._mouseStarted)
                );
            },
            _mouseUp: function (e) {
                this.document
                    .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .off("mouseup." + this.widgetName, this._mouseUpDelegate),
                this._mouseStarted &&
                ((this._mouseStarted = !1),
                e.target === this._mouseDownEvent.target &&
                t.data(e.target, this.widgetName + ".preventClickEvent", !0),
                    this._mouseStop(e)),
                this._mouseDelayTimer &&
                (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
                    (this.ignoreMissingWhich = !1),
                    (h = !1),
                    e.preventDefault();
            },
            _mouseDistanceMet: function (t) {
                return (
                    Math.max(
                        Math.abs(this._mouseDownEvent.pageX - t.pageX),
                        Math.abs(this._mouseDownEvent.pageY - t.pageY)
                    ) >= this.options.distance
                );
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet;
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0;
            },
        }),
        (t.ui.plugin = {
            add: function (e, i, s) {
                var n,
                    o = t.ui[e].prototype;
                for (n in s)
                    (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([i, s[n]]);
            },
            call: function (t, e, i, s) {
                var n,
                    o = t.plugins[e];
                if (
                    o &&
                    (s ||
                        (t.element[0].parentNode &&
                            11 !== t.element[0].parentNode.nodeType))
                )
                    for (n = 0; o.length > n; n++)
                        t.options[o[n][0]] && o[n][1].apply(t.element, i);
            },
        }),
        (t.ui.safeActiveElement = function (t) {
            var e;
            try {
                e = t.activeElement;
            } catch (i) {
                e = t.body;
            }
            return e || (e = t.body), e.nodeName || (e = t.body), e;
        }),
        (t.ui.safeBlur = function (e) {
            e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
        }),
        t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null,
            },
            _create: function () {
                "original" === this.options.helper && this._setPositionRelative(),
                this.options.addClasses && this._addClass("ui-draggable"),
                    this._setHandleClassName(),
                    this._mouseInit();
            },
            _setOption: function (t, e) {
                this._super(t, e),
                "handle" === t &&
                (this._removeHandleClassName(), this._setHandleClassName());
            },
            _destroy: function () {
                return (this.helper || this.element).is(".ui-draggable-dragging")
                    ? ((this.destroyOnClear = !0), void 0)
                    : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
            },
            _mouseCapture: function (e) {
                var i = this.options;
                return this.helper ||
                i.disabled ||
                t(e.target).closest(".ui-resizable-handle").length > 0
                    ? !1
                    : ((this.handle = this._getHandle(e)),
                        this.handle
                            ? (this._blurActiveElement(e),
                                this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix),
                                !0)
                            : !1);
            },
            _blockFrames: function (e) {
                this.iframeBlocks = this.document.find(e).map(function () {
                    var e = t(this);
                    return t("<div>")
                        .css("position", "absolute")
                        .appendTo(e.parent())
                        .outerWidth(e.outerWidth())
                        .outerHeight(e.outerHeight())
                        .offset(e.offset())[0];
                });
            },
            _unblockFrames: function () {
                this.iframeBlocks &&
                (this.iframeBlocks.remove(), delete this.iframeBlocks);
            },
            _blurActiveElement: function (e) {
                var i = t.ui.safeActiveElement(this.document[0]),
                    s = t(e.target);
                s.closest(i).length || t.ui.safeBlur(i);
            },
            _mouseStart: function (e) {
                var i = this.options;
                return (
                    (this.helper = this._createHelper(e)),
                        this._addClass(this.helper, "ui-draggable-dragging"),
                        this._cacheHelperProportions(),
                    t.ui.ddmanager && (t.ui.ddmanager.current = this),
                        this._cacheMargins(),
                        (this.cssPosition = this.helper.css("position")),
                        (this.scrollParent = this.helper.scrollParent(!0)),
                        (this.offsetParent = this.helper.offsetParent()),
                        (this.hasFixedAncestor =
                            this.helper.parents().filter(function () {
                                return "fixed" === t(this).css("position");
                            }).length > 0),
                        (this.positionAbs = this.element.offset()),
                        this._refreshOffsets(e),
                        (this.originalPosition = this.position =
                            this._generatePosition(e, !1)),
                        (this.originalPageX = e.pageX),
                        (this.originalPageY = e.pageY),
                    i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
                        this._setContainment(),
                        this._trigger("start", e) === !1
                            ? (this._clear(), !1)
                            : (this._cacheHelperProportions(),
                            t.ui.ddmanager &&
                            !i.dropBehaviour &&
                            t.ui.ddmanager.prepareOffsets(this, e),
                                this._mouseDrag(e, !0),
                            t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
                                !0)
                );
            },
            _refreshOffsets: function (t) {
                (this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset(),
                }),
                    (this.offset.click = {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top,
                    });
            },
            _mouseDrag: function (e, i) {
                if (
                    (this.hasFixedAncestor &&
                    (this.offset.parent = this._getParentOffset()),
                        (this.position = this._generatePosition(e, !0)),
                        (this.positionAbs = this._convertPositionTo("absolute")),
                        !i)
                ) {
                    var s = this._uiHash();
                    if (this._trigger("drag", e, s) === !1)
                        return this._mouseUp(new t.Event("mouseup", e)), !1;
                    this.position = s.position;
                }
                return (
                    (this.helper[0].style.left = this.position.left + "px"),
                        (this.helper[0].style.top = this.position.top + "px"),
                    t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                        !1
                );
            },
            _mouseStop: function (e) {
                var i = this,
                    s = !1;
                return (
                    t.ui.ddmanager &&
                    !this.options.dropBehaviour &&
                    (s = t.ui.ddmanager.drop(this, e)),
                    this.dropped && ((s = this.dropped), (this.dropped = !1)),
                        ("invalid" === this.options.revert && !s) ||
                        ("valid" === this.options.revert && s) ||
                        this.options.revert === !0 ||
                        (t.isFunction(this.options.revert) &&
                            this.options.revert.call(this.element, s))
                            ? t(this.helper).animate(
                                this.originalPosition,
                                parseInt(this.options.revertDuration, 10),
                                function () {
                                    i._trigger("stop", e) !== !1 && i._clear();
                                }
                            )
                            : this._trigger("stop", e) !== !1 && this._clear(),
                        !1
                );
            },
            _mouseUp: function (e) {
                return (
                    this._unblockFrames(),
                    t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
                    this.handleElement.is(e.target) && this.element.trigger("focus"),
                        t.ui.mouse.prototype._mouseUp.call(this, e)
                );
            },
            cancel: function () {
                return (
                    this.helper.is(".ui-draggable-dragging")
                        ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] }))
                        : this._clear(),
                        this
                );
            },
            _getHandle: function (e) {
                return this.options.handle
                    ? !!t(e.target).closest(this.element.find(this.options.handle)).length
                    : !0;
            },
            _setHandleClassName: function () {
                (this.handleElement = this.options.handle
                    ? this.element.find(this.options.handle)
                    : this.element),
                    this._addClass(this.handleElement, "ui-draggable-handle");
            },
            _removeHandleClassName: function () {
                this._removeClass(this.handleElement, "ui-draggable-handle");
            },
            _createHelper: function (e) {
                var i = this.options,
                    s = t.isFunction(i.helper),
                    n = s
                        ? t(i.helper.apply(this.element[0], [e]))
                        : "clone" === i.helper
                            ? this.element.clone().removeAttr("id")
                            : this.element;
                return (
                    n.parents("body").length ||
                    n.appendTo(
                        "parent" === i.appendTo ? this.element[0].parentNode : i.appendTo
                    ),
                    s && n[0] === this.element[0] && this._setPositionRelative(),
                    n[0] === this.element[0] ||
                    /(fixed|absolute)/.test(n.css("position")) ||
                    n.css("position", "absolute"),
                        n
                );
            },
            _setPositionRelative: function () {
                /^(?:r|a|f)/.test(this.element.css("position")) ||
                (this.element[0].style.position = "relative");
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")),
                t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
                "left" in e && (this.offset.click.left = e.left + this.margins.left),
                "right" in e &&
                (this.offset.click.left =
                    this.helperProportions.width - e.right + this.margins.left),
                "top" in e && (this.offset.click.top = e.top + this.margins.top),
                "bottom" in e &&
                (this.offset.click.top =
                    this.helperProportions.height - e.bottom + this.margins.top);
            },
            _isRootNode: function (t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0];
            },
            _getParentOffset: function () {
                var e = this.offsetParent.offset(),
                    i = this.document[0];
                return (
                    "absolute" === this.cssPosition &&
                    this.scrollParent[0] !== i &&
                    t.contains(this.scrollParent[0], this.offsetParent[0]) &&
                    ((e.left += this.scrollParent.scrollLeft()),
                        (e.top += this.scrollParent.scrollTop())),
                    this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
                        {
                            top:
                                e.top +
                                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                            left:
                                e.left +
                                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
                        }
                );
            },
            _getRelativeOffset: function () {
                if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return {
                    top:
                        t.top -
                        (parseInt(this.helper.css("top"), 10) || 0) +
                        (e ? 0 : this.scrollParent.scrollTop()),
                    left:
                        t.left -
                        (parseInt(this.helper.css("left"), 10) || 0) +
                        (e ? 0 : this.scrollParent.scrollLeft()),
                };
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
                };
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight(),
                };
            },
            _setContainment: function () {
                var e,
                    i,
                    s,
                    n = this.options,
                    o = this.document[0];
                return (
                    (this.relativeContainer = null),
                        n.containment
                            ? "window" === n.containment
                                ? ((this.containment = [
                                    t(window).scrollLeft() -
                                    this.offset.relative.left -
                                    this.offset.parent.left,
                                    t(window).scrollTop() -
                                    this.offset.relative.top -
                                    this.offset.parent.top,
                                    t(window).scrollLeft() +
                                    t(window).width() -
                                    this.helperProportions.width -
                                    this.margins.left,
                                    t(window).scrollTop() +
                                    (t(window).height() || o.body.parentNode.scrollHeight) -
                                    this.helperProportions.height -
                                    this.margins.top,
                                ]),
                                    void 0)
                                : "document" === n.containment
                                    ? ((this.containment = [
                                        0,
                                        0,
                                        t(o).width() -
                                        this.helperProportions.width -
                                        this.margins.left,
                                        (t(o).height() || o.body.parentNode.scrollHeight) -
                                        this.helperProportions.height -
                                        this.margins.top,
                                    ]),
                                        void 0)
                                    : n.containment.constructor === Array
                                        ? ((this.containment = n.containment), void 0)
                                        : ("parent" === n.containment &&
                                        (n.containment = this.helper[0].parentNode),
                                            (i = t(n.containment)),
                                            (s = i[0]),
                                        s &&
                                        ((e = /(scroll|auto)/.test(i.css("overflow"))),
                                            (this.containment = [
                                                (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                                                (parseInt(i.css("paddingLeft"), 10) || 0),
                                                (parseInt(i.css("borderTopWidth"), 10) || 0) +
                                                (parseInt(i.css("paddingTop"), 10) || 0),
                                                (e
                                                    ? Math.max(s.scrollWidth, s.offsetWidth)
                                                    : s.offsetWidth) -
                                                (parseInt(i.css("borderRightWidth"), 10) || 0) -
                                                (parseInt(i.css("paddingRight"), 10) || 0) -
                                                this.helperProportions.width -
                                                this.margins.left -
                                                this.margins.right,
                                                (e
                                                    ? Math.max(s.scrollHeight, s.offsetHeight)
                                                    : s.offsetHeight) -
                                                (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                                                (parseInt(i.css("paddingBottom"), 10) || 0) -
                                                this.helperProportions.height -
                                                this.margins.top -
                                                this.margins.bottom,
                                            ]),
                                            (this.relativeContainer = i)),
                                            void 0)
                            : ((this.containment = null), void 0)
                );
            },
            _convertPositionTo: function (t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    s = this._isRootNode(this.scrollParent[0]);
                return {
                    top:
                        e.top +
                        this.offset.relative.top * i +
                        this.offset.parent.top * i -
                        ("fixed" === this.cssPosition
                            ? -this.offset.scroll.top
                            : s
                                ? 0
                                : this.offset.scroll.top) *
                        i,
                    left:
                        e.left +
                        this.offset.relative.left * i +
                        this.offset.parent.left * i -
                        ("fixed" === this.cssPosition
                            ? -this.offset.scroll.left
                            : s
                                ? 0
                                : this.offset.scroll.left) *
                        i,
                };
            },
            _generatePosition: function (t, e) {
                var i,
                    s,
                    n,
                    o,
                    a = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    h = t.pageY;
                return (
                    (r && this.offset.scroll) ||
                    (this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft(),
                    }),
                    e &&
                    (this.containment &&
                    (this.relativeContainer
                        ? ((s = this.relativeContainer.offset()),
                            (i = [
                                this.containment[0] + s.left,
                                this.containment[1] + s.top,
                                this.containment[2] + s.left,
                                this.containment[3] + s.top,
                            ]))
                        : (i = this.containment),
                    t.pageX - this.offset.click.left < i[0] &&
                    (l = i[0] + this.offset.click.left),
                    t.pageY - this.offset.click.top < i[1] &&
                    (h = i[1] + this.offset.click.top),
                    t.pageX - this.offset.click.left > i[2] &&
                    (l = i[2] + this.offset.click.left),
                    t.pageY - this.offset.click.top > i[3] &&
                    (h = i[3] + this.offset.click.top)),
                    a.grid &&
                    ((n = a.grid[1]
                        ? this.originalPageY +
                        Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1]
                        : this.originalPageY),
                        (h = i
                            ? n - this.offset.click.top >= i[1] ||
                            n - this.offset.click.top > i[3]
                                ? n
                                : n - this.offset.click.top >= i[1]
                                    ? n - a.grid[1]
                                    : n + a.grid[1]
                            : n),
                        (o = a.grid[0]
                            ? this.originalPageX +
                            Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0]
                            : this.originalPageX),
                        (l = i
                            ? o - this.offset.click.left >= i[0] ||
                            o - this.offset.click.left > i[2]
                                ? o
                                : o - this.offset.click.left >= i[0]
                                    ? o - a.grid[0]
                                    : o + a.grid[0]
                            : o)),
                    "y" === a.axis && (l = this.originalPageX),
                    "x" === a.axis && (h = this.originalPageY)),
                        {
                            top:
                                h -
                                this.offset.click.top -
                                this.offset.relative.top -
                                this.offset.parent.top +
                                ("fixed" === this.cssPosition
                                    ? -this.offset.scroll.top
                                    : r
                                        ? 0
                                        : this.offset.scroll.top),
                            left:
                                l -
                                this.offset.click.left -
                                this.offset.relative.left -
                                this.offset.parent.left +
                                ("fixed" === this.cssPosition
                                    ? -this.offset.scroll.left
                                    : r
                                        ? 0
                                        : this.offset.scroll.left),
                        }
                );
            },
            _clear: function () {
                this._removeClass(this.helper, "ui-draggable-dragging"),
                this.helper[0] === this.element[0] ||
                this.cancelHelperRemoval ||
                this.helper.remove(),
                    (this.helper = null),
                    (this.cancelHelperRemoval = !1),
                this.destroyOnClear && this.destroy();
            },
            _trigger: function (e, i, s) {
                return (
                    (s = s || this._uiHash()),
                        t.ui.plugin.call(this, e, [i, s, this], !0),
                    /^(drag|start|stop)/.test(e) &&
                    ((this.positionAbs = this._convertPositionTo("absolute")),
                        (s.offset = this.positionAbs)),
                        t.Widget.prototype._trigger.call(this, e, i, s)
                );
            },
            plugins: {},
            _uiHash: function () {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs,
                };
            },
        }),
        t.ui.plugin.add("draggable", "connectToSortable", {
            start: function (e, i, s) {
                var n = t.extend({}, i, { item: s.element });
                (s.sortables = []),
                    t(s.options.connectToSortable).each(function () {
                        var i = t(this).sortable("instance");
                        i &&
                        !i.options.disabled &&
                        (s.sortables.push(i),
                            i.refreshPositions(),
                            i._trigger("activate", e, n));
                    });
            },
            stop: function (e, i, s) {
                var n = t.extend({}, i, { item: s.element });
                (s.cancelHelperRemoval = !1),
                    t.each(s.sortables, function () {
                        var t = this;
                        t.isOver
                            ? ((t.isOver = 0),
                                (s.cancelHelperRemoval = !0),
                                (t.cancelHelperRemoval = !1),
                                (t._storedCSS = {
                                    position: t.placeholder.css("position"),
                                    top: t.placeholder.css("top"),
                                    left: t.placeholder.css("left"),
                                }),
                                t._mouseStop(e),
                                (t.options.helper = t.options._helper))
                            : ((t.cancelHelperRemoval = !0), t._trigger("deactivate", e, n));
                    });
            },
            drag: function (e, i, s) {
                t.each(s.sortables, function () {
                    var n = !1,
                        o = this;
                    (o.positionAbs = s.positionAbs),
                        (o.helperProportions = s.helperProportions),
                        (o.offset.click = s.offset.click),
                    o._intersectsWith(o.containerCache) &&
                    ((n = !0),
                        t.each(s.sortables, function () {
                            return (
                                (this.positionAbs = s.positionAbs),
                                    (this.helperProportions = s.helperProportions),
                                    (this.offset.click = s.offset.click),
                                this !== o &&
                                this._intersectsWith(this.containerCache) &&
                                t.contains(o.element[0], this.element[0]) &&
                                (n = !1),
                                    n
                            );
                        })),
                        n
                            ? (o.isOver ||
                            ((o.isOver = 1),
                                (s._parent = i.helper.parent()),
                                (o.currentItem = i.helper
                                    .appendTo(o.element)
                                    .data("ui-sortable-item", !0)),
                                (o.options._helper = o.options.helper),
                                (o.options.helper = function () {
                                    return i.helper[0];
                                }),
                                (e.target = o.currentItem[0]),
                                o._mouseCapture(e, !0),
                                o._mouseStart(e, !0, !0),
                                (o.offset.click.top = s.offset.click.top),
                                (o.offset.click.left = s.offset.click.left),
                                (o.offset.parent.left -=
                                    s.offset.parent.left - o.offset.parent.left),
                                (o.offset.parent.top -=
                                    s.offset.parent.top - o.offset.parent.top),
                                s._trigger("toSortable", e),
                                (s.dropped = o.element),
                                t.each(s.sortables, function () {
                                    this.refreshPositions();
                                }),
                                (s.currentItem = s.element),
                                (o.fromOutside = s)),
                            o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
                            : o.isOver &&
                            ((o.isOver = 0),
                                (o.cancelHelperRemoval = !0),
                                (o.options._revert = o.options.revert),
                                (o.options.revert = !1),
                                o._trigger("out", e, o._uiHash(o)),
                                o._mouseStop(e, !0),
                                (o.options.revert = o.options._revert),
                                (o.options.helper = o.options._helper),
                            o.placeholder && o.placeholder.remove(),
                                i.helper.appendTo(s._parent),
                                s._refreshOffsets(e),
                                (i.position = s._generatePosition(e, !0)),
                                s._trigger("fromSortable", e),
                                (s.dropped = !1),
                                t.each(s.sortables, function () {
                                    this.refreshPositions();
                                }));
                });
            },
        }),
        t.ui.plugin.add("draggable", "cursor", {
            start: function (e, i, s) {
                var n = t("body"),
                    o = s.options;
                n.css("cursor") && (o._cursor = n.css("cursor")),
                    n.css("cursor", o.cursor);
            },
            stop: function (e, i, s) {
                var n = s.options;
                n._cursor && t("body").css("cursor", n._cursor);
            },
        }),
        t.ui.plugin.add("draggable", "opacity", {
            start: function (e, i, s) {
                var n = t(i.helper),
                    o = s.options;
                n.css("opacity") && (o._opacity = n.css("opacity")),
                    n.css("opacity", o.opacity);
            },
            stop: function (e, i, s) {
                var n = s.options;
                n._opacity && t(i.helper).css("opacity", n._opacity);
            },
        }),
        t.ui.plugin.add("draggable", "scroll", {
            start: function (t, e, i) {
                i.scrollParentNotHidden ||
                (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
                i.scrollParentNotHidden[0] !== i.document[0] &&
                "HTML" !== i.scrollParentNotHidden[0].tagName &&
                (i.overflowOffset = i.scrollParentNotHidden.offset());
            },
            drag: function (e, i, s) {
                var n = s.options,
                    o = !1,
                    a = s.scrollParentNotHidden[0],
                    r = s.document[0];
                a !== r && "HTML" !== a.tagName
                    ? ((n.axis && "x" === n.axis) ||
                    (s.overflowOffset.top + a.offsetHeight - e.pageY <
                    n.scrollSensitivity
                        ? (a.scrollTop = o = a.scrollTop + n.scrollSpeed)
                        : e.pageY - s.overflowOffset.top < n.scrollSensitivity &&
                        (a.scrollTop = o = a.scrollTop - n.scrollSpeed)),
                    (n.axis && "y" === n.axis) ||
                    (s.overflowOffset.left + a.offsetWidth - e.pageX <
                    n.scrollSensitivity
                        ? (a.scrollLeft = o = a.scrollLeft + n.scrollSpeed)
                        : e.pageX - s.overflowOffset.left < n.scrollSensitivity &&
                        (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed)))
                    : ((n.axis && "x" === n.axis) ||
                    (e.pageY - t(r).scrollTop() < n.scrollSensitivity
                        ? (o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed))
                        : t(window).height() - (e.pageY - t(r).scrollTop()) <
                        n.scrollSensitivity &&
                        (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))),
                    (n.axis && "y" === n.axis) ||
                    (e.pageX - t(r).scrollLeft() < n.scrollSensitivity
                        ? (o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed))
                        : t(window).width() - (e.pageX - t(r).scrollLeft()) <
                        n.scrollSensitivity &&
                        (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))),
                o !== !1 &&
                t.ui.ddmanager &&
                !n.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(s, e);
            },
        }),
        t.ui.plugin.add("draggable", "snap", {
            start: function (e, i, s) {
                var n = s.options;
                (s.snapElements = []),
                    t(
                        n.snap.constructor !== String
                            ? n.snap.items || ":data(ui-draggable)"
                            : n.snap
                    ).each(function () {
                        var e = t(this),
                            i = e.offset();
                        this !== s.element[0] &&
                        s.snapElements.push({
                            item: this,
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            top: i.top,
                            left: i.left,
                        });
                    });
            },
            drag: function (e, i, s) {
                var n,
                    o,
                    a,
                    r,
                    l,
                    h,
                    c,
                    u,
                    d,
                    p,
                    f = s.options,
                    g = f.snapTolerance,
                    m = i.offset.left,
                    _ = m + s.helperProportions.width,
                    v = i.offset.top,
                    b = v + s.helperProportions.height;
                for (d = s.snapElements.length - 1; d >= 0; d--)
                    (l = s.snapElements[d].left - s.margins.left),
                        (h = l + s.snapElements[d].width),
                        (c = s.snapElements[d].top - s.margins.top),
                        (u = c + s.snapElements[d].height),
                        l - g > _ ||
                        m > h + g ||
                        c - g > b ||
                        v > u + g ||
                        !t.contains(
                            s.snapElements[d].item.ownerDocument,
                            s.snapElements[d].item
                        )
                            ? (s.snapElements[d].snapping &&
                            s.options.snap.release &&
                            s.options.snap.release.call(
                                s.element,
                                e,
                                t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })
                            ),
                                (s.snapElements[d].snapping = !1))
                            : ("inner" !== f.snapMode &&
                            ((n = g >= Math.abs(c - b)),
                                (o = g >= Math.abs(u - v)),
                                (a = g >= Math.abs(l - _)),
                                (r = g >= Math.abs(h - m)),
                            n &&
                            (i.position.top = s._convertPositionTo("relative", {
                                top: c - s.helperProportions.height,
                                left: 0,
                            }).top),
                            o &&
                            (i.position.top = s._convertPositionTo("relative", {
                                top: u,
                                left: 0,
                            }).top),
                            a &&
                            (i.position.left = s._convertPositionTo("relative", {
                                top: 0,
                                left: l - s.helperProportions.width,
                            }).left),
                            r &&
                            (i.position.left = s._convertPositionTo("relative", {
                                top: 0,
                                left: h,
                            }).left)),
                                (p = n || o || a || r),
                            "outer" !== f.snapMode &&
                            ((n = g >= Math.abs(c - v)),
                                (o = g >= Math.abs(u - b)),
                                (a = g >= Math.abs(l - m)),
                                (r = g >= Math.abs(h - _)),
                            n &&
                            (i.position.top = s._convertPositionTo("relative", {
                                top: c,
                                left: 0,
                            }).top),
                            o &&
                            (i.position.top = s._convertPositionTo("relative", {
                                top: u - s.helperProportions.height,
                                left: 0,
                            }).top),
                            a &&
                            (i.position.left = s._convertPositionTo("relative", {
                                top: 0,
                                left: l,
                            }).left),
                            r &&
                            (i.position.left = s._convertPositionTo("relative", {
                                top: 0,
                                left: h - s.helperProportions.width,
                            }).left)),
                            !s.snapElements[d].snapping &&
                            (n || o || a || r || p) &&
                            s.options.snap.snap &&
                            s.options.snap.snap.call(
                                s.element,
                                e,
                                t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })
                            ),
                                (s.snapElements[d].snapping = n || o || a || r || p));
            },
        }),
        t.ui.plugin.add("draggable", "stack", {
            start: function (e, i, s) {
                var n,
                    o = s.options,
                    a = t.makeArray(t(o.stack)).sort(function (e, i) {
                        return (
                            (parseInt(t(e).css("zIndex"), 10) || 0) -
                            (parseInt(t(i).css("zIndex"), 10) || 0)
                        );
                    });
                a.length &&
                ((n = parseInt(t(a[0]).css("zIndex"), 10) || 0),
                    t(a).each(function (e) {
                        t(this).css("zIndex", n + e);
                    }),
                    this.css("zIndex", n + a.length));
            },
        }),
        t.ui.plugin.add("draggable", "zIndex", {
            start: function (e, i, s) {
                var n = t(i.helper),
                    o = s.options;
                n.css("zIndex") && (o._zIndex = n.css("zIndex")),
                    n.css("zIndex", o.zIndex);
            },
            stop: function (e, i, s) {
                var n = s.options;
                n._zIndex && t(i.helper).css("zIndex", n._zIndex);
            },
        }),
        t.ui.draggable,
        t.widget("ui.droppable", {
            version: "1.12.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null,
            },
            _create: function () {
                var e,
                    i = this.options,
                    s = i.accept;
                (this.isover = !1),
                    (this.isout = !0),
                    (this.accept = t.isFunction(s)
                        ? s
                        : function (t) {
                            return t.is(s);
                        }),
                    (this.proportions = function () {
                        return arguments.length
                            ? ((e = arguments[0]), void 0)
                            : e
                                ? e
                                : (e = {
                                    width: this.element[0].offsetWidth,
                                    height: this.element[0].offsetHeight,
                                });
                    }),
                    this._addToManager(i.scope),
                i.addClasses && this._addClass("ui-droppable");
            },
            _addToManager: function (e) {
                (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []),
                    t.ui.ddmanager.droppables[e].push(this);
            },
            _splice: function (t) {
                for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
            },
            _destroy: function () {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e);
            },
            _setOption: function (e, i) {
                if ("accept" === e)
                    this.accept = t.isFunction(i)
                        ? i
                        : function (t) {
                            return t.is(i);
                        };
                else if ("scope" === e) {
                    var s = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(s), this._addToManager(i);
                }
                this._super(e, i);
            },
            _activate: function (e) {
                var i = t.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
            },
            _deactivate: function (e) {
                var i = t.ui.ddmanager.current;
                this._removeActiveClass(),
                i && this._trigger("deactivate", e, this.ui(i));
            },
            _over: function (e) {
                var i = t.ui.ddmanager.current;
                i &&
                (i.currentItem || i.element)[0] !== this.element[0] &&
                this.accept.call(this.element[0], i.currentItem || i.element) &&
                (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
            },
            _out: function (e) {
                var i = t.ui.ddmanager.current;
                i &&
                (i.currentItem || i.element)[0] !== this.element[0] &&
                this.accept.call(this.element[0], i.currentItem || i.element) &&
                (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
            },
            _drop: function (e, i) {
                var s = i || t.ui.ddmanager.current,
                    n = !1;
                return s && (s.currentItem || s.element)[0] !== this.element[0]
                    ? (this.element
                        .find(":data(ui-droppable)")
                        .not(".ui-draggable-dragging")
                        .each(function () {
                            var i = t(this).droppable("instance");
                            return i.options.greedy &&
                            !i.options.disabled &&
                            i.options.scope === s.options.scope &&
                            i.accept.call(i.element[0], s.currentItem || s.element) &&
                            c(
                                s,
                                t.extend(i, { offset: i.element.offset() }),
                                i.options.tolerance,
                                e
                            )
                                ? ((n = !0), !1)
                                : void 0;
                        }),
                        n
                            ? !1
                            : this.accept.call(this.element[0], s.currentItem || s.element)
                                ? (this._removeActiveClass(),
                                    this._removeHoverClass(),
                                    this._trigger("drop", e, this.ui(s)),
                                    this.element)
                                : !1)
                    : !1;
            },
            ui: function (t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs,
                };
            },
            _addHoverClass: function () {
                this._addClass("ui-droppable-hover");
            },
            _removeHoverClass: function () {
                this._removeClass("ui-droppable-hover");
            },
            _addActiveClass: function () {
                this._addClass("ui-droppable-active");
            },
            _removeActiveClass: function () {
                this._removeClass("ui-droppable-active");
            },
        });
    var c = (t.ui.intersect = (function () {
        function t(t, e, i) {
            return t >= e && e + i > t;
        }
        return function (e, i, s, n) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                r = o + e.helperProportions.width,
                l = a + e.helperProportions.height,
                h = i.offset.left,
                c = i.offset.top,
                u = h + i.proportions().width,
                d = c + i.proportions().height;
            switch (s) {
                case "fit":
                    return o >= h && u >= r && a >= c && d >= l;
                case "intersect":
                    return (
                        o + e.helperProportions.width / 2 > h &&
                        u > r - e.helperProportions.width / 2 &&
                        a + e.helperProportions.height / 2 > c &&
                        d > l - e.helperProportions.height / 2
                    );
                case "pointer":
                    return (
                        t(n.pageY, c, i.proportions().height) &&
                        t(n.pageX, h, i.proportions().width)
                    );
                case "touch":
                    return (
                        ((a >= c && d >= a) || (l >= c && d >= l) || (c > a && l > d)) &&
                        ((o >= h && u >= o) || (r >= h && u >= r) || (h > o && r > u))
                    );
                default:
                    return !1;
            }
        };
    })());
    (t.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function (e, i) {
            var s,
                n,
                o = t.ui.ddmanager.droppables[e.options.scope] || [],
                a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; o.length > s; s++)
                if (
                    !(
                        o[s].options.disabled ||
                        (e &&
                            !o[s].accept.call(o[s].element[0], e.currentItem || e.element))
                    )
                ) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === o[s].element[0]) {
                            o[s].proportions().height = 0;
                            continue t;
                        }
                    (o[s].visible = "none" !== o[s].element.css("display")),
                    o[s].visible &&
                    ("mousedown" === a && o[s]._activate.call(o[s], i),
                        (o[s].offset = o[s].element.offset()),
                        o[s].proportions({
                            width: o[s].element[0].offsetWidth,
                            height: o[s].element[0].offsetHeight,
                        }));
                }
        },
        drop: function (e, i) {
            var s = !1;
            return (
                t.each(
                    (t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
                    function () {
                        this.options &&
                        (!this.options.disabled &&
                        this.visible &&
                        c(e, this, this.options.tolerance, i) &&
                        (s = this._drop.call(this, i) || s),
                        !this.options.disabled &&
                        this.visible &&
                        this.accept.call(this.element[0], e.currentItem || e.element) &&
                        ((this.isout = !0),
                            (this.isover = !1),
                            this._deactivate.call(this, i)));
                    }
                ),
                    s
            );
        },
        dragStart: function (e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
            });
        },
        drag: function (e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
                t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var s,
                            n,
                            o,
                            a = c(e, this, this.options.tolerance, i),
                            r =
                                !a && this.isover
                                    ? "isout"
                                    : a && !this.isover
                                        ? "isover"
                                        : null;
                        r &&
                        (this.options.greedy &&
                        ((n = this.options.scope),
                            (o = this.element
                                .parents(":data(ui-droppable)")
                                .filter(function () {
                                    return t(this).droppable("instance").options.scope === n;
                                })),
                        o.length &&
                        ((s = t(o[0]).droppable("instance")),
                            (s.greedyChild = "isover" === r))),
                        s &&
                        "isover" === r &&
                        ((s.isover = !1), (s.isout = !0), s._out.call(s, i)),
                            (this[r] = !0),
                            (this["isout" === r ? "isover" : "isout"] = !1),
                            this["isover" === r ? "_over" : "_out"].call(this, i),
                        s &&
                        "isout" === r &&
                        ((s.isout = !1), (s.isover = !0), s._over.call(s, i)));
                    }
                });
        },
        dragStop: function (e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        },
    }),
    t.uiBackCompat !== !1 &&
    t.widget("ui.droppable", t.ui.droppable, {
        options: { hoverClass: !1, activeClass: !1 },
        _addActiveClass: function () {
            this._super(),
            this.options.activeClass &&
            this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function () {
            this._super(),
            this.options.activeClass &&
            this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function () {
            this._super(),
            this.options.hoverClass &&
            this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function () {
            this._super(),
            this.options.hoverClass &&
            this.element.removeClass(this.options.hoverClass);
        },
    }),
        t.ui.droppable,
        t.widget("ui.resizable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null,
            },
            _num: function (t) {
                return parseFloat(t) || 0;
            },
            _isNumber: function (t) {
                return !isNaN(parseFloat(t));
            },
            _hasScroll: function (e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                    n = !1;
                return e[s] > 0 ? !0 : ((e[s] = 1), (n = e[s] > 0), (e[s] = 0), n);
            },
            _create: function () {
                var e,
                    i = this.options,
                    s = this;
                this._addClass("ui-resizable"),
                    t.extend(this, {
                        _aspectRatio: !!i.aspectRatio,
                        aspectRatio: i.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper:
                            i.helper || i.ghost || i.animate
                                ? i.helper || "ui-resizable-helper"
                                : null,
                    }),
                this.element[0].nodeName.match(
                    /^(canvas|textarea|input|select|button|img)$/i
                ) &&
                (this.element.wrap(
                    t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css(
                        {
                            position: this.element.css("position"),
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            top: this.element.css("top"),
                            left: this.element.css("left"),
                        }
                    )
                ),
                    (this.element = this.element
                        .parent()
                        .data("ui-resizable", this.element.resizable("instance"))),
                    (this.elementIsWrapper = !0),
                    (e = {
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom"),
                        marginLeft: this.originalElement.css("marginLeft"),
                    }),
                    this.element.css(e),
                    this.originalElement.css("margin", 0),
                    (this.originalResizeStyle = this.originalElement.css("resize")),
                    this.originalElement.css("resize", "none"),
                    this._proportionallyResizeElements.push(
                        this.originalElement.css({
                            position: "static",
                            zoom: 1,
                            display: "block",
                        })
                    ),
                    this.originalElement.css(e),
                    this._proportionallyResize()),
                    this._setupHandles(),
                i.autoHide &&
                t(this.element)
                    .on("mouseenter", function () {
                        i.disabled ||
                        (s._removeClass("ui-resizable-autohide"), s._handles.show());
                    })
                    .on("mouseleave", function () {
                        i.disabled ||
                        s.resizing ||
                        (s._addClass("ui-resizable-autohide"), s._handles.hide());
                    }),
                    this._mouseInit();
            },
            _destroy: function () {
                this._mouseDestroy();
                var e,
                    i = function (e) {
                        t(e)
                            .removeData("resizable")
                            .removeData("ui-resizable")
                            .off(".resizable")
                            .find(".ui-resizable-handle")
                            .remove();
                    };
                return (
                    this.elementIsWrapper &&
                    (i(this.element),
                        (e = this.element),
                        this.originalElement
                            .css({
                                position: e.css("position"),
                                width: e.outerWidth(),
                                height: e.outerHeight(),
                                top: e.css("top"),
                                left: e.css("left"),
                            })
                            .insertAfter(e),
                        e.remove()),
                        this.originalElement.css("resize", this.originalResizeStyle),
                        i(this.originalElement),
                        this
                );
            },
            _setOption: function (t, e) {
                switch ((this._super(t, e), t)) {
                    case "handles":
                        this._removeHandles(), this._setupHandles();
                        break;
                    default:
                }
            },
            _setupHandles: function () {
                var e,
                    i,
                    s,
                    n,
                    o,
                    a = this.options,
                    r = this;
                if (
                    ((this.handles =
                        a.handles ||
                        (t(".ui-resizable-handle", this.element).length
                            ? {
                                n: ".ui-resizable-n",
                                e: ".ui-resizable-e",
                                s: ".ui-resizable-s",
                                w: ".ui-resizable-w",
                                se: ".ui-resizable-se",
                                sw: ".ui-resizable-sw",
                                ne: ".ui-resizable-ne",
                                nw: ".ui-resizable-nw",
                            }
                            : "e,s,se")),
                        (this._handles = t()),
                    this.handles.constructor === String)
                )
                    for (
                        "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                            s = this.handles.split(","),
                            this.handles = {},
                            i = 0;
                        s.length > i;
                        i++
                    )
                        (e = t.trim(s[i])),
                            (n = "ui-resizable-" + e),
                            (o = t("<div>")),
                            this._addClass(o, "ui-resizable-handle " + n),
                            o.css({ zIndex: a.zIndex }),
                            (this.handles[e] = ".ui-resizable-" + e),
                            this.element.append(o);
                (this._renderAxis = function (e) {
                    var i, s, n, o;
                    e = e || this.element;
                    for (i in this.handles)
                        this.handles[i].constructor === String
                            ? (this.handles[i] = this.element
                                .children(this.handles[i])
                                .first()
                                .show())
                            : (this.handles[i].jquery || this.handles[i].nodeType) &&
                            ((this.handles[i] = t(this.handles[i])),
                                this._on(this.handles[i], { mousedown: r._mouseDown })),
                        this.elementIsWrapper &&
                        this.originalElement[0].nodeName.match(
                            /^(textarea|input|select|button)$/i
                        ) &&
                        ((s = t(this.handles[i], this.element)),
                            (o = /sw|ne|nw|se|n|s/.test(i)
                                ? s.outerHeight()
                                : s.outerWidth()),
                            (n = [
                                "padding",
                                /ne|nw|n/.test(i)
                                    ? "Top"
                                    : /se|sw|s/.test(i)
                                        ? "Bottom"
                                        : /^e$/.test(i)
                                            ? "Right"
                                            : "Left",
                            ].join("")),
                            e.css(n, o),
                            this._proportionallyResize()),
                            (this._handles = this._handles.add(this.handles[i]));
                }),
                    this._renderAxis(this.element),
                    (this._handles = this._handles.add(
                        this.element.find(".ui-resizable-handle")
                    )),
                    this._handles.disableSelection(),
                    this._handles.on("mouseover", function () {
                        r.resizing ||
                        (this.className &&
                        (o = this.className.match(
                            /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                        )),
                            (r.axis = o && o[1] ? o[1] : "se"));
                    }),
                a.autoHide &&
                (this._handles.hide(), this._addClass("ui-resizable-autohide"));
            },
            _removeHandles: function () {
                this._handles.remove();
            },
            _mouseCapture: function (e) {
                var i,
                    s,
                    n = !1;
                for (i in this.handles)
                    (s = t(this.handles[i])[0]),
                    (s === e.target || t.contains(s, e.target)) && (n = !0);
                return !this.options.disabled && n;
            },
            _mouseStart: function (e) {
                var i,
                    s,
                    n,
                    o = this.options,
                    a = this.element;
                return (
                    (this.resizing = !0),
                        this._renderProxy(),
                        (i = this._num(this.helper.css("left"))),
                        (s = this._num(this.helper.css("top"))),
                    o.containment &&
                    ((i += t(o.containment).scrollLeft() || 0),
                        (s += t(o.containment).scrollTop() || 0)),
                        (this.offset = this.helper.offset()),
                        (this.position = { left: i, top: s }),
                        (this.size = this._helper
                            ? { width: this.helper.width(), height: this.helper.height() }
                            : { width: a.width(), height: a.height() }),
                        (this.originalSize = this._helper
                            ? { width: a.outerWidth(), height: a.outerHeight() }
                            : { width: a.width(), height: a.height() }),
                        (this.sizeDiff = {
                            width: a.outerWidth() - a.width(),
                            height: a.outerHeight() - a.height(),
                        }),
                        (this.originalPosition = { left: i, top: s }),
                        (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
                        (this.aspectRatio =
                            "number" == typeof o.aspectRatio
                                ? o.aspectRatio
                                : this.originalSize.width / this.originalSize.height || 1),
                        (n = t(".ui-resizable-" + this.axis).css("cursor")),
                        t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n),
                        this._addClass("ui-resizable-resizing"),
                        this._propagate("start", e),
                        !0
                );
            },
            _mouseDrag: function (e) {
                var i,
                    s,
                    n = this.originalMousePosition,
                    o = this.axis,
                    a = e.pageX - n.left || 0,
                    r = e.pageY - n.top || 0,
                    l = this._change[o];
                return (
                    this._updatePrevProperties(),
                        l
                            ? ((i = l.apply(this, [e, a, r])),
                                this._updateVirtualBoundaries(e.shiftKey),
                            (this._aspectRatio || e.shiftKey) &&
                            (i = this._updateRatio(i, e)),
                                (i = this._respectSize(i, e)),
                                this._updateCache(i),
                                this._propagate("resize", e),
                                (s = this._applyChanges()),
                            !this._helper &&
                            this._proportionallyResizeElements.length &&
                            this._proportionallyResize(),
                            t.isEmptyObject(s) ||
                            (this._updatePrevProperties(),
                                this._trigger("resize", e, this.ui()),
                                this._applyChanges()),
                                !1)
                            : !1
                );
            },
            _mouseStop: function (e) {
                this.resizing = !1;
                var i,
                    s,
                    n,
                    o,
                    a,
                    r,
                    l,
                    h = this.options,
                    c = this;
                return (
                    this._helper &&
                    ((i = this._proportionallyResizeElements),
                        (s = i.length && /textarea/i.test(i[0].nodeName)),
                        (n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height),
                        (o = s ? 0 : c.sizeDiff.width),
                        (a = {
                            width: c.helper.width() - o,
                            height: c.helper.height() - n,
                        }),
                        (r =
                            parseFloat(c.element.css("left")) +
                            (c.position.left - c.originalPosition.left) || null),
                        (l =
                            parseFloat(c.element.css("top")) +
                            (c.position.top - c.originalPosition.top) || null),
                    h.animate || this.element.css(t.extend(a, { top: l, left: r })),
                        c.helper.height(c.size.height),
                        c.helper.width(c.size.width),
                    this._helper && !h.animate && this._proportionallyResize()),
                        t("body").css("cursor", "auto"),
                        this._removeClass("ui-resizable-resizing"),
                        this._propagate("stop", e),
                    this._helper && this.helper.remove(),
                        !1
                );
            },
            _updatePrevProperties: function () {
                (this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left,
                }),
                    (this.prevSize = {
                        width: this.size.width,
                        height: this.size.height,
                    });
            },
            _applyChanges: function () {
                var t = {};
                return (
                    this.position.top !== this.prevPosition.top &&
                    (t.top = this.position.top + "px"),
                    this.position.left !== this.prevPosition.left &&
                    (t.left = this.position.left + "px"),
                    this.size.width !== this.prevSize.width &&
                    (t.width = this.size.width + "px"),
                    this.size.height !== this.prevSize.height &&
                    (t.height = this.size.height + "px"),
                        this.helper.css(t),
                        t
                );
            },
            _updateVirtualBoundaries: function (t) {
                var e,
                    i,
                    s,
                    n,
                    o,
                    a = this.options;
                (o = {
                    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0,
                }),
                (this._aspectRatio || t) &&
                ((e = o.minHeight * this.aspectRatio),
                    (s = o.minWidth / this.aspectRatio),
                    (i = o.maxHeight * this.aspectRatio),
                    (n = o.maxWidth / this.aspectRatio),
                e > o.minWidth && (o.minWidth = e),
                s > o.minHeight && (o.minHeight = s),
                o.maxWidth > i && (o.maxWidth = i),
                o.maxHeight > n && (o.maxHeight = n)),
                    (this._vBoundaries = o);
            },
            _updateCache: function (t) {
                (this.offset = this.helper.offset()),
                this._isNumber(t.left) && (this.position.left = t.left),
                this._isNumber(t.top) && (this.position.top = t.top),
                this._isNumber(t.height) && (this.size.height = t.height),
                this._isNumber(t.width) && (this.size.width = t.width);
            },
            _updateRatio: function (t) {
                var e = this.position,
                    i = this.size,
                    s = this.axis;
                return (
                    this._isNumber(t.height)
                        ? (t.width = t.height * this.aspectRatio)
                        : this._isNumber(t.width) &&
                        (t.height = t.width / this.aspectRatio),
                    "sw" === s &&
                    ((t.left = e.left + (i.width - t.width)), (t.top = null)),
                    "nw" === s &&
                    ((t.top = e.top + (i.height - t.height)),
                        (t.left = e.left + (i.width - t.width))),
                        t
                );
            },
            _respectSize: function (t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return (
                    o && (t.width = e.minWidth),
                    a && (t.height = e.minHeight),
                    s && (t.width = e.maxWidth),
                    n && (t.height = e.maxHeight),
                    o && h && (t.left = r - e.minWidth),
                    s && h && (t.left = r - e.maxWidth),
                    a && c && (t.top = l - e.minHeight),
                    n && c && (t.top = l - e.maxHeight),
                        t.width || t.height || t.left || !t.top
                            ? t.width || t.height || t.top || !t.left || (t.left = null)
                            : (t.top = null),
                        t
                );
            },
            _getPaddingPlusBorderDimensions: function (t) {
                for (
                    var e = 0,
                        i = [],
                        s = [
                            t.css("borderTopWidth"),
                            t.css("borderRightWidth"),
                            t.css("borderBottomWidth"),
                            t.css("borderLeftWidth"),
                        ],
                        n = [
                            t.css("paddingTop"),
                            t.css("paddingRight"),
                            t.css("paddingBottom"),
                            t.css("paddingLeft"),
                        ];
                    4 > e;
                    e++
                )
                    (i[e] = parseFloat(s[e]) || 0), (i[e] += parseFloat(n[e]) || 0);
                return { height: i[0] + i[2], width: i[1] + i[3] };
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length)
                    for (
                        var t, e = 0, i = this.helper || this.element;
                        this._proportionallyResizeElements.length > e;
                        e++
                    )
                        (t = this._proportionallyResizeElements[e]),
                        this.outerDimensions ||
                        (this.outerDimensions =
                            this._getPaddingPlusBorderDimensions(t)),
                            t.css({
                                height: i.height() - this.outerDimensions.height || 0,
                                width: i.width() - this.outerDimensions.width || 0,
                            });
            },
            _renderProxy: function () {
                var e = this.element,
                    i = this.options;
                (this.elementOffset = e.offset()),
                    this._helper
                        ? ((this.helper =
                            this.helper || t("<div style='overflow:hidden;'></div>")),
                            this._addClass(this.helper, this._helper),
                            this.helper.css({
                                width: this.element.outerWidth(),
                                height: this.element.outerHeight(),
                                position: "absolute",
                                left: this.elementOffset.left + "px",
                                top: this.elementOffset.top + "px",
                                zIndex: ++i.zIndex,
                            }),
                            this.helper.appendTo("body").disableSelection())
                        : (this.helper = this.element);
            },
            _change: {
                e: function (t, e) {
                    return { width: this.originalSize.width + e };
                },
                w: function (t, e) {
                    var i = this.originalSize,
                        s = this.originalPosition;
                    return { left: s.left + e, width: i.width - e };
                },
                n: function (t, e, i) {
                    var s = this.originalSize,
                        n = this.originalPosition;
                    return { top: n.top + i, height: s.height - i };
                },
                s: function (t, e, i) {
                    return { height: this.originalSize.height + i };
                },
                se: function (e, i, s) {
                    return t.extend(
                        this._change.s.apply(this, arguments),
                        this._change.e.apply(this, [e, i, s])
                    );
                },
                sw: function (e, i, s) {
                    return t.extend(
                        this._change.s.apply(this, arguments),
                        this._change.w.apply(this, [e, i, s])
                    );
                },
                ne: function (e, i, s) {
                    return t.extend(
                        this._change.n.apply(this, arguments),
                        this._change.e.apply(this, [e, i, s])
                    );
                },
                nw: function (e, i, s) {
                    return t.extend(
                        this._change.n.apply(this, arguments),
                        this._change.w.apply(this, [e, i, s])
                    );
                },
            },
            _propagate: function (e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]),
                "resize" !== e && this._trigger(e, i, this.ui());
            },
            plugins: {},
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition,
                };
            },
        }),
        t.ui.plugin.add("resizable", "animate", {
            stop: function (e) {
                var i = t(this).resizable("instance"),
                    s = i.options,
                    n = i._proportionallyResizeElements,
                    o = n.length && /textarea/i.test(n[0].nodeName),
                    a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                    r = o ? 0 : i.sizeDiff.width,
                    l = { width: i.size.width - r, height: i.size.height - a },
                    h =
                        parseFloat(i.element.css("left")) +
                        (i.position.left - i.originalPosition.left) || null,
                    c =
                        parseFloat(i.element.css("top")) +
                        (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, c && h ? { top: c, left: h } : {}), {
                    duration: s.animateDuration,
                    easing: s.animateEasing,
                    step: function () {
                        var s = {
                            width: parseFloat(i.element.css("width")),
                            height: parseFloat(i.element.css("height")),
                            top: parseFloat(i.element.css("top")),
                            left: parseFloat(i.element.css("left")),
                        };
                        n && n.length && t(n[0]).css({ width: s.width, height: s.height }),
                            i._updateCache(s),
                            i._propagate("resize", e);
                    },
                });
            },
        }),
        t.ui.plugin.add("resizable", "containment", {
            start: function () {
                var e,
                    i,
                    s,
                    n,
                    o,
                    a,
                    r,
                    l = t(this).resizable("instance"),
                    h = l.options,
                    c = l.element,
                    u = h.containment,
                    d =
                        u instanceof t
                            ? u.get(0)
                            : /parent/.test(u)
                                ? c.parent().get(0)
                                : u;
                d &&
                ((l.containerElement = t(d)),
                    /document/.test(u) || u === document
                        ? ((l.containerOffset = { left: 0, top: 0 }),
                            (l.containerPosition = { left: 0, top: 0 }),
                            (l.parentData = {
                                element: t(document),
                                left: 0,
                                top: 0,
                                width: t(document).width(),
                                height:
                                    t(document).height() || document.body.parentNode.scrollHeight,
                            }))
                        : ((e = t(d)),
                            (i = []),
                            t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
                                i[t] = l._num(e.css("padding" + s));
                            }),
                            (l.containerOffset = e.offset()),
                            (l.containerPosition = e.position()),
                            (l.containerSize = {
                                height: e.innerHeight() - i[3],
                                width: e.innerWidth() - i[1],
                            }),
                            (s = l.containerOffset),
                            (n = l.containerSize.height),
                            (o = l.containerSize.width),
                            (a = l._hasScroll(d, "left") ? d.scrollWidth : o),
                            (r = l._hasScroll(d) ? d.scrollHeight : n),
                            (l.parentData = {
                                element: d,
                                left: s.left,
                                top: s.top,
                                width: a,
                                height: r,
                            })));
            },
            resize: function (e) {
                var i,
                    s,
                    n,
                    o,
                    a = t(this).resizable("instance"),
                    r = a.options,
                    l = a.containerOffset,
                    h = a.position,
                    c = a._aspectRatio || e.shiftKey,
                    u = { top: 0, left: 0 },
                    d = a.containerElement,
                    p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (u = l),
                h.left < (a._helper ? l.left : 0) &&
                ((a.size.width =
                    a.size.width +
                    (a._helper
                        ? a.position.left - l.left
                        : a.position.left - u.left)),
                c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1)),
                    (a.position.left = r.helper ? l.left : 0)),
                h.top < (a._helper ? l.top : 0) &&
                ((a.size.height =
                    a.size.height +
                    (a._helper ? a.position.top - l.top : a.position.top)),
                c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1)),
                    (a.position.top = a._helper ? l.top : 0)),
                    (n = a.containerElement.get(0) === a.element.parent().get(0)),
                    (o = /relative|absolute/.test(a.containerElement.css("position"))),
                    n && o
                        ? ((a.offset.left = a.parentData.left + a.position.left),
                            (a.offset.top = a.parentData.top + a.position.top))
                        : ((a.offset.left = a.element.offset().left),
                            (a.offset.top = a.element.offset().top)),
                    (i = Math.abs(
                        a.sizeDiff.width +
                        (a._helper ? a.offset.left - u.left : a.offset.left - l.left)
                    )),
                    (s = Math.abs(
                        a.sizeDiff.height +
                        (a._helper ? a.offset.top - u.top : a.offset.top - l.top)
                    )),
                i + a.size.width >= a.parentData.width &&
                ((a.size.width = a.parentData.width - i),
                c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1))),
                s + a.size.height >= a.parentData.height &&
                ((a.size.height = a.parentData.height - s),
                c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1))),
                p ||
                ((a.position.left = a.prevPosition.left),
                    (a.position.top = a.prevPosition.top),
                    (a.size.width = a.prevSize.width),
                    (a.size.height = a.prevSize.height));
            },
            stop: function () {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    s = e.containerOffset,
                    n = e.containerPosition,
                    o = e.containerElement,
                    a = t(e.helper),
                    r = a.offset(),
                    l = a.outerWidth() - e.sizeDiff.width,
                    h = a.outerHeight() - e.sizeDiff.height;
                e._helper &&
                !i.animate &&
                /relative/.test(o.css("position")) &&
                t(this).css({ left: r.left - n.left - s.left, width: l, height: h }),
                e._helper &&
                !i.animate &&
                /static/.test(o.css("position")) &&
                t(this).css({
                    left: r.left - n.left - s.left,
                    width: l,
                    height: h,
                });
            },
        }),
        t.ui.plugin.add("resizable", "alsoResize", {
            start: function () {
                var e = t(this).resizable("instance"),
                    i = e.options;
                t(i.alsoResize).each(function () {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseFloat(e.width()),
                        height: parseFloat(e.height()),
                        left: parseFloat(e.css("left")),
                        top: parseFloat(e.css("top")),
                    });
                });
            },
            resize: function (e, i) {
                var s = t(this).resizable("instance"),
                    n = s.options,
                    o = s.originalSize,
                    a = s.originalPosition,
                    r = {
                        height: s.size.height - o.height || 0,
                        width: s.size.width - o.width || 0,
                        top: s.position.top - a.top || 0,
                        left: s.position.left - a.left || 0,
                    };
                t(n.alsoResize).each(function () {
                    var e = t(this),
                        s = t(this).data("ui-resizable-alsoresize"),
                        n = {},
                        o = e.parents(i.originalElement[0]).length
                            ? ["width", "height"]
                            : ["width", "height", "top", "left"];
                    t.each(o, function (t, e) {
                        var i = (s[e] || 0) + (r[e] || 0);
                        i && i >= 0 && (n[e] = i || null);
                    }),
                        e.css(n);
                });
            },
            stop: function () {
                t(this).removeData("ui-resizable-alsoresize");
            },
        }),
        t.ui.plugin.add("resizable", "ghost", {
            start: function () {
                var e = t(this).resizable("instance"),
                    i = e.size;
                (e.ghost = e.originalElement.clone()),
                    e.ghost.css({
                        opacity: 0.25,
                        display: "block",
                        position: "relative",
                        height: i.height,
                        width: i.width,
                        margin: 0,
                        left: 0,
                        top: 0,
                    }),
                    e._addClass(e.ghost, "ui-resizable-ghost"),
                t.uiBackCompat !== !1 &&
                "string" == typeof e.options.ghost &&
                e.ghost.addClass(this.options.ghost),
                    e.ghost.appendTo(e.helper);
            },
            resize: function () {
                var e = t(this).resizable("instance");
                e.ghost &&
                e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width,
                });
            },
            stop: function () {
                var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
            },
        }),
        t.ui.plugin.add("resizable", "grid", {
            resize: function () {
                var e,
                    i = t(this).resizable("instance"),
                    s = i.options,
                    n = i.size,
                    o = i.originalSize,
                    a = i.originalPosition,
                    r = i.axis,
                    l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                    h = l[0] || 1,
                    c = l[1] || 1,
                    u = Math.round((n.width - o.width) / h) * h,
                    d = Math.round((n.height - o.height) / c) * c,
                    p = o.width + u,
                    f = o.height + d,
                    g = s.maxWidth && p > s.maxWidth,
                    m = s.maxHeight && f > s.maxHeight,
                    _ = s.minWidth && s.minWidth > p,
                    v = s.minHeight && s.minHeight > f;
                (s.grid = l),
                _ && (p += h),
                v && (f += c),
                g && (p -= h),
                m && (f -= c),
                    /^(se|s|e)$/.test(r)
                        ? ((i.size.width = p), (i.size.height = f))
                        : /^(ne)$/.test(r)
                            ? ((i.size.width = p),
                                (i.size.height = f),
                                (i.position.top = a.top - d))
                            : /^(sw)$/.test(r)
                                ? ((i.size.width = p),
                                    (i.size.height = f),
                                    (i.position.left = a.left - u))
                                : ((0 >= f - c || 0 >= p - h) &&
                                (e = i._getPaddingPlusBorderDimensions(this)),
                                    f - c > 0
                                        ? ((i.size.height = f), (i.position.top = a.top - d))
                                        : ((f = c - e.height),
                                            (i.size.height = f),
                                            (i.position.top = a.top + o.height - f)),
                                    p - h > 0
                                        ? ((i.size.width = p), (i.position.left = a.left - u))
                                        : ((p = h - e.width),
                                            (i.size.width = p),
                                            (i.position.left = a.left + o.width - p)));
            },
        }),
        t.ui.resizable,
        t.widget("ui.selectable", t.ui.mouse, {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null,
            },
            _create: function () {
                var e = this;
                this._addClass("ui-selectable"),
                    (this.dragged = !1),
                    (this.refresh = function () {
                        (e.elementPos = t(e.element[0]).offset()),
                            (e.selectees = t(e.options.filter, e.element[0])),
                            e._addClass(e.selectees, "ui-selectee"),
                            e.selectees.each(function () {
                                var i = t(this),
                                    s = i.offset(),
                                    n = {
                                        left: s.left - e.elementPos.left,
                                        top: s.top - e.elementPos.top,
                                    };
                                t.data(this, "selectable-item", {
                                    element: this,
                                    $element: i,
                                    left: n.left,
                                    top: n.top,
                                    right: n.left + i.outerWidth(),
                                    bottom: n.top + i.outerHeight(),
                                    startselected: !1,
                                    selected: i.hasClass("ui-selected"),
                                    selecting: i.hasClass("ui-selecting"),
                                    unselecting: i.hasClass("ui-unselecting"),
                                });
                            });
                    }),
                    this.refresh(),
                    this._mouseInit(),
                    (this.helper = t("<div>")),
                    this._addClass(this.helper, "ui-selectable-helper");
            },
            _destroy: function () {
                this.selectees.removeData("selectable-item"), this._mouseDestroy();
            },
            _mouseStart: function (e) {
                var i = this,
                    s = this.options;
                (this.opos = [e.pageX, e.pageY]),
                    (this.elementPos = t(this.element[0]).offset()),
                this.options.disabled ||
                ((this.selectees = t(s.filter, this.element[0])),
                    this._trigger("start", e),
                    t(s.appendTo).append(this.helper),
                    this.helper.css({
                        left: e.pageX,
                        top: e.pageY,
                        width: 0,
                        height: 0,
                    }),
                s.autoRefresh && this.refresh(),
                    this.selectees.filter(".ui-selected").each(function () {
                        var s = t.data(this, "selectable-item");
                        (s.startselected = !0),
                        e.metaKey ||
                        e.ctrlKey ||
                        (i._removeClass(s.$element, "ui-selected"),
                            (s.selected = !1),
                            i._addClass(s.$element, "ui-unselecting"),
                            (s.unselecting = !0),
                            i._trigger("unselecting", e, { unselecting: s.element }));
                    }),
                    t(e.target)
                        .parents()
                        .addBack()
                        .each(function () {
                            var s,
                                n = t.data(this, "selectable-item");
                            return n
                                ? ((s =
                                    (!e.metaKey && !e.ctrlKey) ||
                                    !n.$element.hasClass("ui-selected")),
                                    i
                                        ._removeClass(
                                            n.$element,
                                            s ? "ui-unselecting" : "ui-selected"
                                        )
                                        ._addClass(
                                            n.$element,
                                            s ? "ui-selecting" : "ui-unselecting"
                                        ),
                                    (n.unselecting = !s),
                                    (n.selecting = s),
                                    (n.selected = s),
                                    s
                                        ? i._trigger("selecting", e, { selecting: n.element })
                                        : i._trigger("unselecting", e, {
                                            unselecting: n.element,
                                        }),
                                    !1)
                                : void 0;
                        }));
            },
            _mouseDrag: function (e) {
                if (((this.dragged = !0), !this.options.disabled)) {
                    var i,
                        s = this,
                        n = this.options,
                        o = this.opos[0],
                        a = this.opos[1],
                        r = e.pageX,
                        l = e.pageY;
                    return (
                        o > r && ((i = r), (r = o), (o = i)),
                        a > l && ((i = l), (l = a), (a = i)),
                            this.helper.css({ left: o, top: a, width: r - o, height: l - a }),
                            this.selectees.each(function () {
                                var i = t.data(this, "selectable-item"),
                                    h = !1,
                                    c = {};
                                i &&
                                i.element !== s.element[0] &&
                                ((c.left = i.left + s.elementPos.left),
                                    (c.right = i.right + s.elementPos.left),
                                    (c.top = i.top + s.elementPos.top),
                                    (c.bottom = i.bottom + s.elementPos.top),
                                    "touch" === n.tolerance
                                        ? (h = !(
                                            c.left > r ||
                                            o > c.right ||
                                            c.top > l ||
                                            a > c.bottom
                                        ))
                                        : "fit" === n.tolerance &&
                                        (h =
                                            c.left > o && r > c.right && c.top > a && l > c.bottom),
                                    h
                                        ? (i.selected &&
                                        (s._removeClass(i.$element, "ui-selected"),
                                            (i.selected = !1)),
                                        i.unselecting &&
                                        (s._removeClass(i.$element, "ui-unselecting"),
                                            (i.unselecting = !1)),
                                        i.selecting ||
                                        (s._addClass(i.$element, "ui-selecting"),
                                            (i.selecting = !0),
                                            s._trigger("selecting", e, { selecting: i.element })))
                                        : (i.selecting &&
                                        ((e.metaKey || e.ctrlKey) && i.startselected
                                            ? (s._removeClass(i.$element, "ui-selecting"),
                                                (i.selecting = !1),
                                                s._addClass(i.$element, "ui-selected"),
                                                (i.selected = !0))
                                            : (s._removeClass(i.$element, "ui-selecting"),
                                                (i.selecting = !1),
                                            i.startselected &&
                                            (s._addClass(i.$element, "ui-unselecting"),
                                                (i.unselecting = !0)),
                                                s._trigger("unselecting", e, {
                                                    unselecting: i.element,
                                                }))),
                                        i.selected &&
                                        (e.metaKey ||
                                            e.ctrlKey ||
                                            i.startselected ||
                                            (s._removeClass(i.$element, "ui-selected"),
                                                (i.selected = !1),
                                                s._addClass(i.$element, "ui-unselecting"),
                                                (i.unselecting = !0),
                                                s._trigger("unselecting", e, {
                                                    unselecting: i.element,
                                                })))));
                            }),
                            !1
                    );
                }
            },
            _mouseStop: function (e) {
                var i = this;
                return (
                    (this.dragged = !1),
                        t(".ui-unselecting", this.element[0]).each(function () {
                            var s = t.data(this, "selectable-item");
                            i._removeClass(s.$element, "ui-unselecting"),
                                (s.unselecting = !1),
                                (s.startselected = !1),
                                i._trigger("unselected", e, { unselected: s.element });
                        }),
                        t(".ui-selecting", this.element[0]).each(function () {
                            var s = t.data(this, "selectable-item");
                            i
                                ._removeClass(s.$element, "ui-selecting")
                                ._addClass(s.$element, "ui-selected"),
                                (s.selecting = !1),
                                (s.selected = !0),
                                (s.startselected = !0),
                                i._trigger("selected", e, { selected: s.element });
                        }),
                        this._trigger("stop", e),
                        this.helper.remove(),
                        !1
                );
            },
        }),
        t.widget("ui.sortable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null,
            },
            _isOverAxis: function (t, e, i) {
                return t >= e && e + i > t;
            },
            _isFloating: function (t) {
                return (
                    /left|right/.test(t.css("float")) ||
                    /inline|table-cell/.test(t.css("display"))
                );
            },
            _create: function () {
                (this.containerCache = {}),
                    this._addClass("ui-sortable"),
                    this.refresh(),
                    (this.offset = this.element.offset()),
                    this._mouseInit(),
                    this._setHandleClassName(),
                    (this.ready = !0);
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName();
            },
            _setHandleClassName: function () {
                var e = this;
                this._removeClass(
                    this.element.find(".ui-sortable-handle"),
                    "ui-sortable-handle"
                ),
                    t.each(this.items, function () {
                        e._addClass(
                            this.instance.options.handle
                                ? this.item.find(this.instance.options.handle)
                                : this.item,
                            "ui-sortable-handle"
                        );
                    });
            },
            _destroy: function () {
                this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--)
                    this.items[t].item.removeData(this.widgetName + "-item");
                return this;
            },
            _mouseCapture: function (e, i) {
                var s = null,
                    n = !1,
                    o = this;
                return this.reverting
                    ? !1
                    : this.options.disabled || "static" === this.options.type
                        ? !1
                        : (this._refreshItems(e),
                            t(e.target)
                                .parents()
                                .each(function () {
                                    return t.data(this, o.widgetName + "-item") === o
                                        ? ((s = t(this)), !1)
                                        : void 0;
                                }),
                        t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)),
                            s
                                ? !this.options.handle ||
                                i ||
                                (t(this.options.handle, s)
                                    .find("*")
                                    .addBack()
                                    .each(function () {
                                        this === e.target && (n = !0);
                                    }),
                                    n)
                                    ? ((this.currentItem = s), this._removeCurrentsFromItems(), !0)
                                    : !1
                                : !1);
            },
            _mouseStart: function (e, i, s) {
                var n,
                    o,
                    a = this.options;
                if (
                    ((this.currentContainer = this),
                        this.refreshPositions(),
                        (this.helper = this._createHelper(e)),
                        this._cacheHelperProportions(),
                        this._cacheMargins(),
                        (this.scrollParent = this.helper.scrollParent()),
                        (this.offset = this.currentItem.offset()),
                        (this.offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left,
                        }),
                        t.extend(this.offset, {
                            click: {
                                left: e.pageX - this.offset.left,
                                top: e.pageY - this.offset.top,
                            },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset(),
                        }),
                        this.helper.css("position", "absolute"),
                        (this.cssPosition = this.helper.css("position")),
                        (this.originalPosition = this._generatePosition(e)),
                        (this.originalPageX = e.pageX),
                        (this.originalPageY = e.pageY),
                    a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
                        (this.domPosition = {
                            prev: this.currentItem.prev()[0],
                            parent: this.currentItem.parent()[0],
                        }),
                    this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
                        this._createPlaceholder(),
                    a.containment && this._setContainment(),
                    a.cursor &&
                    "auto" !== a.cursor &&
                    ((o = this.document.find("body")),
                        (this.storedCursor = o.css("cursor")),
                        o.css("cursor", a.cursor),
                        (this.storedStylesheet = t(
                            "<style>*{ cursor: " + a.cursor + " !important; }</style>"
                        ).appendTo(o))),
                    a.opacity &&
                    (this.helper.css("opacity") &&
                    (this._storedOpacity = this.helper.css("opacity")),
                        this.helper.css("opacity", a.opacity)),
                    a.zIndex &&
                    (this.helper.css("zIndex") &&
                    (this._storedZIndex = this.helper.css("zIndex")),
                        this.helper.css("zIndex", a.zIndex)),
                    this.scrollParent[0] !== this.document[0] &&
                    "HTML" !== this.scrollParent[0].tagName &&
                    (this.overflowOffset = this.scrollParent.offset()),
                        this._trigger("start", e, this._uiHash()),
                    this._preserveHelperProportions || this._cacheHelperProportions(),
                        !s)
                )
                    for (n = this.containers.length - 1; n >= 0; n--)
                        this.containers[n]._trigger("activate", e, this._uiHash(this));
                return (
                    t.ui.ddmanager && (t.ui.ddmanager.current = this),
                    t.ui.ddmanager &&
                    !a.dropBehaviour &&
                    t.ui.ddmanager.prepareOffsets(this, e),
                        (this.dragging = !0),
                        this._addClass(this.helper, "ui-sortable-helper"),
                        this._mouseDrag(e),
                        !0
                );
            },
            _mouseDrag: function (e) {
                var i,
                    s,
                    n,
                    o,
                    a = this.options,
                    r = !1;
                for (
                    this.position = this._generatePosition(e),
                        this.positionAbs = this._convertPositionTo("absolute"),
                    this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                    this.options.scroll &&
                    (this.scrollParent[0] !== this.document[0] &&
                    "HTML" !== this.scrollParent[0].tagName
                        ? (this.overflowOffset.top +
                        this.scrollParent[0].offsetHeight -
                        e.pageY <
                        a.scrollSensitivity
                            ? (this.scrollParent[0].scrollTop = r =
                                this.scrollParent[0].scrollTop + a.scrollSpeed)
                            : e.pageY - this.overflowOffset.top < a.scrollSensitivity &&
                            (this.scrollParent[0].scrollTop = r =
                                this.scrollParent[0].scrollTop - a.scrollSpeed),
                            this.overflowOffset.left +
                            this.scrollParent[0].offsetWidth -
                            e.pageX <
                            a.scrollSensitivity
                                ? (this.scrollParent[0].scrollLeft = r =
                                    this.scrollParent[0].scrollLeft + a.scrollSpeed)
                                : e.pageX - this.overflowOffset.left <
                                a.scrollSensitivity &&
                                (this.scrollParent[0].scrollLeft = r =
                                    this.scrollParent[0].scrollLeft - a.scrollSpeed))
                        : (e.pageY - this.document.scrollTop() < a.scrollSensitivity
                            ? (r = this.document.scrollTop(
                                this.document.scrollTop() - a.scrollSpeed
                            ))
                            : this.window.height() -
                            (e.pageY - this.document.scrollTop()) <
                            a.scrollSensitivity &&
                            (r = this.document.scrollTop(
                                this.document.scrollTop() + a.scrollSpeed
                            )),
                            e.pageX - this.document.scrollLeft() < a.scrollSensitivity
                                ? (r = this.document.scrollLeft(
                                    this.document.scrollLeft() - a.scrollSpeed
                                ))
                                : this.window.width() -
                                (e.pageX - this.document.scrollLeft()) <
                                a.scrollSensitivity &&
                                (r = this.document.scrollLeft(
                                    this.document.scrollLeft() + a.scrollSpeed
                                ))),
                    r !== !1 &&
                    t.ui.ddmanager &&
                    !a.dropBehaviour &&
                    t.ui.ddmanager.prepareOffsets(this, e)),
                        this.positionAbs = this._convertPositionTo("absolute"),
                    (this.options.axis && "y" === this.options.axis) ||
                    (this.helper[0].style.left = this.position.left + "px"),
                    (this.options.axis && "x" === this.options.axis) ||
                    (this.helper[0].style.top = this.position.top + "px"),
                        i = this.items.length - 1;
                    i >= 0;
                    i--
                )
                    if (
                        ((s = this.items[i]),
                            (n = s.item[0]),
                            (o = this._intersectsWithPointer(s)),
                        o &&
                        s.instance === this.currentContainer &&
                        n !== this.currentItem[0] &&
                        this.placeholder[1 === o ? "next" : "prev"]()[0] !== n &&
                        !t.contains(this.placeholder[0], n) &&
                        ("semi-dynamic" === this.options.type
                            ? !t.contains(this.element[0], n)
                            : !0))
                    ) {
                        if (
                            ((this.direction = 1 === o ? "down" : "up"),
                            "pointer" !== this.options.tolerance &&
                            !this._intersectsWithSides(s))
                        )
                            break;
                        this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                        break;
                    }
                return (
                    this._contactContainers(e),
                    t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                        this._trigger("sort", e, this._uiHash()),
                        (this.lastPositionAbs = this.positionAbs),
                        !1
                );
            },
            _mouseStop: function (e, i) {
                if (e) {
                    if (
                        (t.ui.ddmanager &&
                        !this.options.dropBehaviour &&
                        t.ui.ddmanager.drop(this, e),
                            this.options.revert)
                    ) {
                        var s = this,
                            n = this.placeholder.offset(),
                            o = this.options.axis,
                            a = {};
                        (o && "x" !== o) ||
                        (a.left =
                            n.left -
                            this.offset.parent.left -
                            this.margins.left +
                            (this.offsetParent[0] === this.document[0].body
                                ? 0
                                : this.offsetParent[0].scrollLeft)),
                        (o && "y" !== o) ||
                        (a.top =
                            n.top -
                            this.offset.parent.top -
                            this.margins.top +
                            (this.offsetParent[0] === this.document[0].body
                                ? 0
                                : this.offsetParent[0].scrollTop)),
                            (this.reverting = !0),
                            t(this.helper).animate(
                                a,
                                parseInt(this.options.revert, 10) || 500,
                                function () {
                                    s._clear(e);
                                }
                            );
                    } else this._clear(e, i);
                    return !1;
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp(new t.Event("mouseup", { target: null })),
                        "original" === this.options.helper
                            ? (this.currentItem.css(this._storedCSS),
                                this._removeClass(this.currentItem, "ui-sortable-helper"))
                            : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--)
                        this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                        this.containers[e].containerCache.over &&
                        (this.containers[e]._trigger("out", null, this._uiHash(this)),
                            (this.containers[e].containerCache.over = 0));
                }
                return (
                    this.placeholder &&
                    (this.placeholder[0].parentNode &&
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                    "original" !== this.options.helper &&
                    this.helper &&
                    this.helper[0].parentNode &&
                    this.helper.remove(),
                        t.extend(this, {
                            helper: null,
                            dragging: !1,
                            reverting: !1,
                            _noFinalSort: null,
                        }),
                        this.domPosition.prev
                            ? t(this.domPosition.prev).after(this.currentItem)
                            : t(this.domPosition.parent).prepend(this.currentItem)),
                        this
                );
            },
            serialize: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    s = [];
                return (
                    (e = e || {}),
                        t(i).each(function () {
                            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(
                                e.expression || /(.+)[\-=_](.+)/
                            );
                            i &&
                            s.push(
                                (e.key || i[1] + "[]") +
                                "=" +
                                (e.key && e.expression ? i[1] : i[2])
                            );
                        }),
                    !s.length && e.key && s.push(e.key + "="),
                        s.join("&")
                );
            },
            toArray: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    s = [];
                return (
                    (e = e || {}),
                        i.each(function () {
                            s.push(t(e.item || this).attr(e.attribute || "id") || "");
                        }),
                        s
                );
            },
            _intersectsWith: function (t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    s = this.positionAbs.top,
                    n = s + this.helperProportions.height,
                    o = t.left,
                    a = o + t.width,
                    r = t.top,
                    l = r + t.height,
                    h = this.offset.click.top,
                    c = this.offset.click.left,
                    u = "x" === this.options.axis || (s + h > r && l > s + h),
                    d = "y" === this.options.axis || (e + c > o && a > e + c),
                    p = u && d;
                return "pointer" === this.options.tolerance ||
                this.options.forcePointerForContainers ||
                ("pointer" !== this.options.tolerance &&
                    this.helperProportions[this.floating ? "width" : "height"] >
                    t[this.floating ? "width" : "height"])
                    ? p
                    : e + this.helperProportions.width / 2 > o &&
                    a > i - this.helperProportions.width / 2 &&
                    s + this.helperProportions.height / 2 > r &&
                    l > n - this.helperProportions.height / 2;
            },
            _intersectsWithPointer: function (t) {
                var e,
                    i,
                    s =
                        "x" === this.options.axis ||
                        this._isOverAxis(
                            this.positionAbs.top + this.offset.click.top,
                            t.top,
                            t.height
                        ),
                    n =
                        "y" === this.options.axis ||
                        this._isOverAxis(
                            this.positionAbs.left + this.offset.click.left,
                            t.left,
                            t.width
                        ),
                    o = s && n;
                return o
                    ? ((e = this._getDragVerticalDirection()),
                        (i = this._getDragHorizontalDirection()),
                        this.floating
                            ? "right" === i || "down" === e
                                ? 2
                                : 1
                            : e && ("down" === e ? 2 : 1))
                    : !1;
            },
            _intersectsWithSides: function (t) {
                var e = this._isOverAxis(
                        this.positionAbs.top + this.offset.click.top,
                        t.top + t.height / 2,
                        t.height
                    ),
                    i = this._isOverAxis(
                        this.positionAbs.left + this.offset.click.left,
                        t.left + t.width / 2,
                        t.width
                    ),
                    s = this._getDragVerticalDirection(),
                    n = this._getDragHorizontalDirection();
                return this.floating && n
                    ? ("right" === n && i) || ("left" === n && !i)
                    : s && (("down" === s && e) || ("up" === s && !e));
            },
            _getDragVerticalDirection: function () {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up");
            },
            _getDragHorizontalDirection: function () {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left");
            },
            refresh: function (t) {
                return (
                    this._refreshItems(t),
                        this._setHandleClassName(),
                        this.refreshPositions(),
                        this
                );
            },
            _connectWith: function () {
                var t = this.options;
                return t.connectWith.constructor === String
                    ? [t.connectWith]
                    : t.connectWith;
            },
            _getItemsAsjQuery: function (e) {
                function i() {
                    r.push(this);
                }
                var s,
                    n,
                    o,
                    a,
                    r = [],
                    l = [],
                    h = this._connectWith();
                if (h && e)
                    for (s = h.length - 1; s >= 0; s--)
                        for (o = t(h[s], this.document[0]), n = o.length - 1; n >= 0; n--)
                            (a = t.data(o[n], this.widgetFullName)),
                            a &&
                            a !== this &&
                            !a.options.disabled &&
                            l.push([
                                t.isFunction(a.options.items)
                                    ? a.options.items.call(a.element)
                                    : t(a.options.items, a.element)
                                        .not(".ui-sortable-helper")
                                        .not(".ui-sortable-placeholder"),
                                a,
                            ]);
                for (
                    l.push([
                        t.isFunction(this.options.items)
                            ? this.options.items.call(this.element, null, {
                                options: this.options,
                                item: this.currentItem,
                            })
                            : t(this.options.items, this.element)
                                .not(".ui-sortable-helper")
                                .not(".ui-sortable-placeholder"),
                        this,
                    ]),
                        s = l.length - 1;
                    s >= 0;
                    s--
                )
                    l[s][0].each(i);
                return t(r);
            },
            _removeCurrentsFromItems: function () {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function (t) {
                    for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;
                    return !0;
                });
            },
            _refreshItems: function (e) {
                (this.items = []), (this.containers = [this]);
                var i,
                    s,
                    n,
                    o,
                    a,
                    r,
                    l,
                    h,
                    c = this.items,
                    u = [
                        [
                            t.isFunction(this.options.items)
                                ? this.options.items.call(this.element[0], e, {
                                    item: this.currentItem,
                                })
                                : t(this.options.items, this.element),
                            this,
                        ],
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--)
                            (o = t.data(n[s], this.widgetFullName)),
                            o &&
                            o !== this &&
                            !o.options.disabled &&
                            (u.push([
                                t.isFunction(o.options.items)
                                    ? o.options.items.call(o.element[0], e, {
                                        item: this.currentItem,
                                    })
                                    : t(o.options.items, o.element),
                                o,
                            ]),
                                this.containers.push(o));
                for (i = u.length - 1; i >= 0; i--)
                    for (a = u[i][1], r = u[i][0], s = 0, h = r.length; h > s; s++)
                        (l = t(r[s])),
                            l.data(this.widgetName + "-item", a),
                            c.push({
                                item: l,
                                instance: a,
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0,
                            });
            },
            refreshPositions: function (e) {
                (this.floating = this.items.length
                    ? "x" === this.options.axis || this._isFloating(this.items[0].item)
                    : !1),
                this.offsetParent &&
                this.helper &&
                (this.offset.parent = this._getParentOffset());
                var i, s, n, o;
                for (i = this.items.length - 1; i >= 0; i--)
                    (s = this.items[i]),
                    (s.instance !== this.currentContainer &&
                        this.currentContainer &&
                        s.item[0] !== this.currentItem[0]) ||
                    ((n = this.options.toleranceElement
                        ? t(this.options.toleranceElement, s.item)
                        : s.item),
                    e || ((s.width = n.outerWidth()), (s.height = n.outerHeight())),
                        (o = n.offset()),
                        (s.left = o.left),
                        (s.top = o.top));
                if (this.options.custom && this.options.custom.refreshContainers)
                    this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--)
                        (o = this.containers[i].element.offset()),
                            (this.containers[i].containerCache.left = o.left),
                            (this.containers[i].containerCache.top = o.top),
                            (this.containers[i].containerCache.width =
                                this.containers[i].element.outerWidth()),
                            (this.containers[i].containerCache.height =
                                this.containers[i].element.outerHeight());
                return this;
            },
            _createPlaceholder: function (e) {
                e = e || this;
                var i,
                    s = e.options;
                (s.placeholder && s.placeholder.constructor !== String) ||
                ((i = s.placeholder),
                    (s.placeholder = {
                        element: function () {
                            var s = e.currentItem[0].nodeName.toLowerCase(),
                                n = t("<" + s + ">", e.document[0]);
                            return (
                                e
                                    ._addClass(
                                        n,
                                        "ui-sortable-placeholder",
                                        i || e.currentItem[0].className
                                    )
                                    ._removeClass(n, "ui-sortable-helper"),
                                    "tbody" === s
                                        ? e._createTrPlaceholder(
                                            e.currentItem.find("tr").eq(0),
                                            t("<tr>", e.document[0]).appendTo(n)
                                        )
                                        : "tr" === s
                                            ? e._createTrPlaceholder(e.currentItem, n)
                                            : "img" === s && n.attr("src", e.currentItem.attr("src")),
                                i || n.css("visibility", "hidden"),
                                    n
                            );
                        },
                        update: function (t, n) {
                            (!i || s.forcePlaceholderSize) &&
                            (n.height() ||
                            n.height(
                                e.currentItem.innerHeight() -
                                parseInt(e.currentItem.css("paddingTop") || 0, 10) -
                                parseInt(e.currentItem.css("paddingBottom") || 0, 10)
                            ),
                            n.width() ||
                            n.width(
                                e.currentItem.innerWidth() -
                                parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
                                parseInt(e.currentItem.css("paddingRight") || 0, 10)
                            ));
                        },
                    })),
                    (e.placeholder = t(
                        s.placeholder.element.call(e.element, e.currentItem)
                    )),
                    e.currentItem.after(e.placeholder),
                    s.placeholder.update(e, e.placeholder);
            },
            _createTrPlaceholder: function (e, i) {
                var s = this;
                e.children().each(function () {
                    t("<td>&#160;</td>", s.document[0])
                        .attr("colspan", t(this).attr("colspan") || 1)
                        .appendTo(i);
                });
            },
            _contactContainers: function (e) {
                var i,
                    s,
                    n,
                    o,
                    a,
                    r,
                    l,
                    h,
                    c,
                    u,
                    d = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (d && t.contains(this.containers[i].element[0], d.element[0]))
                                continue;
                            (d = this.containers[i]), (p = i);
                        } else
                            this.containers[i].containerCache.over &&
                            (this.containers[i]._trigger("out", e, this._uiHash(this)),
                                (this.containers[i].containerCache.over = 0));
                if (d)
                    if (1 === this.containers.length)
                        this.containers[p].containerCache.over ||
                        (this.containers[p]._trigger("over", e, this._uiHash(this)),
                            (this.containers[p].containerCache.over = 1));
                    else {
                        for (
                            n = 1e4,
                                o = null,
                                c = d.floating || this._isFloating(this.currentItem),
                                a = c ? "left" : "top",
                                r = c ? "width" : "height",
                                u = c ? "pageX" : "pageY",
                                s = this.items.length - 1;
                            s >= 0;
                            s--
                        )
                            t.contains(
                                this.containers[p].element[0],
                                this.items[s].item[0]
                            ) &&
                            this.items[s].item[0] !== this.currentItem[0] &&
                            ((l = this.items[s].item.offset()[a]),
                                (h = !1),
                            e[u] - l > this.items[s][r] / 2 && (h = !0),
                            n > Math.abs(e[u] - l) &&
                            ((n = Math.abs(e[u] - l)),
                                (o = this.items[s]),
                                (this.direction = h ? "up" : "down")));
                        if (!o && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p])
                            return (
                                this.currentContainer.containerCache.over ||
                                (this.containers[p]._trigger("over", e, this._uiHash()),
                                    (this.currentContainer.containerCache.over = 1)),
                                    void 0
                            );
                        o
                            ? this._rearrange(e, o, null, !0)
                            : this._rearrange(e, null, this.containers[p].element, !0),
                            this._trigger("change", e, this._uiHash()),
                            this.containers[p]._trigger("change", e, this._uiHash(this)),
                            (this.currentContainer = this.containers[p]),
                            this.options.placeholder.update(
                                this.currentContainer,
                                this.placeholder
                            ),
                            this.containers[p]._trigger("over", e, this._uiHash(this)),
                            (this.containers[p].containerCache.over = 1);
                    }
            },
            _createHelper: function (e) {
                var i = this.options,
                    s = t.isFunction(i.helper)
                        ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
                        : "clone" === i.helper
                            ? this.currentItem.clone()
                            : this.currentItem;
                return (
                    s.parents("body").length ||
                    t(
                        "parent" !== i.appendTo
                            ? i.appendTo
                            : this.currentItem[0].parentNode
                    )[0].appendChild(s[0]),
                    s[0] === this.currentItem[0] &&
                    (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left"),
                    }),
                    (!s[0].style.width || i.forceHelperSize) &&
                    s.width(this.currentItem.width()),
                    (!s[0].style.height || i.forceHelperSize) &&
                    s.height(this.currentItem.height()),
                        s
                );
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")),
                t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
                "left" in e && (this.offset.click.left = e.left + this.margins.left),
                "right" in e &&
                (this.offset.click.left =
                    this.helperProportions.width - e.right + this.margins.left),
                "top" in e && (this.offset.click.top = e.top + this.margins.top),
                "bottom" in e &&
                (this.offset.click.top =
                    this.helperProportions.height - e.bottom + this.margins.top);
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return (
                    "absolute" === this.cssPosition &&
                    this.scrollParent[0] !== this.document[0] &&
                    t.contains(this.scrollParent[0], this.offsetParent[0]) &&
                    ((e.left += this.scrollParent.scrollLeft()),
                        (e.top += this.scrollParent.scrollTop())),
                    (this.offsetParent[0] === this.document[0].body ||
                        (this.offsetParent[0].tagName &&
                            "html" === this.offsetParent[0].tagName.toLowerCase() &&
                            t.ui.ie)) &&
                    (e = { top: 0, left: 0 }),
                        {
                            top:
                                e.top +
                                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                            left:
                                e.left +
                                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
                        }
                );
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top:
                            t.top -
                            (parseInt(this.helper.css("top"), 10) || 0) +
                            this.scrollParent.scrollTop(),
                        left:
                            t.left -
                            (parseInt(this.helper.css("left"), 10) || 0) +
                            this.scrollParent.scrollLeft(),
                    };
                }
                return { top: 0, left: 0 };
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
                };
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight(),
                };
            },
            _setContainment: function () {
                var e,
                    i,
                    s,
                    n = this.options;
                "parent" === n.containment &&
                (n.containment = this.helper[0].parentNode),
                ("document" === n.containment || "window" === n.containment) &&
                (this.containment = [
                    0 - this.offset.relative.left - this.offset.parent.left,
                    0 - this.offset.relative.top - this.offset.parent.top,
                    "document" === n.containment
                        ? this.document.width()
                        : this.window.width() -
                        this.helperProportions.width -
                        this.margins.left,
                    ("document" === n.containment
                        ? this.document.height() ||
                        document.body.parentNode.scrollHeight
                        : this.window.height() ||
                        this.document[0].body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ]),
                /^(document|window|parent)$/.test(n.containment) ||
                ((e = t(n.containment)[0]),
                    (i = t(n.containment).offset()),
                    (s = "hidden" !== t(e).css("overflow")),
                    (this.containment = [
                        i.left +
                        (parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
                        (parseInt(t(e).css("paddingLeft"), 10) || 0) -
                        this.margins.left,
                        i.top +
                        (parseInt(t(e).css("borderTopWidth"), 10) || 0) +
                        (parseInt(t(e).css("paddingTop"), 10) || 0) -
                        this.margins.top,
                        i.left +
                        (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                        (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                        (parseInt(t(e).css("paddingRight"), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left,
                        i.top +
                        (s
                            ? Math.max(e.scrollHeight, e.offsetHeight)
                            : e.offsetHeight) -
                        (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                        (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top,
                    ]));
            },
            _convertPositionTo: function (e, i) {
                i || (i = this.position);
                var s = "absolute" === e ? 1 : -1,
                    n =
                        "absolute" !== this.cssPosition ||
                        (this.scrollParent[0] !== this.document[0] &&
                            t.contains(this.scrollParent[0], this.offsetParent[0]))
                            ? this.scrollParent
                            : this.offsetParent,
                    o = /(html|body)/i.test(n[0].tagName);
                return {
                    top:
                        i.top +
                        this.offset.relative.top * s +
                        this.offset.parent.top * s -
                        ("fixed" === this.cssPosition
                            ? -this.scrollParent.scrollTop()
                            : o
                                ? 0
                                : n.scrollTop()) *
                        s,
                    left:
                        i.left +
                        this.offset.relative.left * s +
                        this.offset.parent.left * s -
                        ("fixed" === this.cssPosition
                            ? -this.scrollParent.scrollLeft()
                            : o
                                ? 0
                                : n.scrollLeft()) *
                        s,
                };
            },
            _generatePosition: function (e) {
                var i,
                    s,
                    n = this.options,
                    o = e.pageX,
                    a = e.pageY,
                    r =
                        "absolute" !== this.cssPosition ||
                        (this.scrollParent[0] !== this.document[0] &&
                            t.contains(this.scrollParent[0], this.offsetParent[0]))
                            ? this.scrollParent
                            : this.offsetParent,
                    l = /(html|body)/i.test(r[0].tagName);
                return (
                    "relative" !== this.cssPosition ||
                    (this.scrollParent[0] !== this.document[0] &&
                        this.scrollParent[0] !== this.offsetParent[0]) ||
                    (this.offset.relative = this._getRelativeOffset()),
                    this.originalPosition &&
                    (this.containment &&
                    (e.pageX - this.offset.click.left < this.containment[0] &&
                    (o = this.containment[0] + this.offset.click.left),
                    e.pageY - this.offset.click.top < this.containment[1] &&
                    (a = this.containment[1] + this.offset.click.top),
                    e.pageX - this.offset.click.left > this.containment[2] &&
                    (o = this.containment[2] + this.offset.click.left),
                    e.pageY - this.offset.click.top > this.containment[3] &&
                    (a = this.containment[3] + this.offset.click.top)),
                    n.grid &&
                    ((i =
                        this.originalPageY +
                        Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1]),
                        (a = this.containment
                            ? i - this.offset.click.top >= this.containment[1] &&
                            i - this.offset.click.top <= this.containment[3]
                                ? i
                                : i - this.offset.click.top >= this.containment[1]
                                    ? i - n.grid[1]
                                    : i + n.grid[1]
                            : i),
                        (s =
                            this.originalPageX +
                            Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0]),
                        (o = this.containment
                            ? s - this.offset.click.left >= this.containment[0] &&
                            s - this.offset.click.left <= this.containment[2]
                                ? s
                                : s - this.offset.click.left >= this.containment[0]
                                    ? s - n.grid[0]
                                    : s + n.grid[0]
                            : s))),
                        {
                            top:
                                a -
                                this.offset.click.top -
                                this.offset.relative.top -
                                this.offset.parent.top +
                                ("fixed" === this.cssPosition
                                    ? -this.scrollParent.scrollTop()
                                    : l
                                        ? 0
                                        : r.scrollTop()),
                            left:
                                o -
                                this.offset.click.left -
                                this.offset.relative.left -
                                this.offset.parent.left +
                                ("fixed" === this.cssPosition
                                    ? -this.scrollParent.scrollLeft()
                                    : l
                                        ? 0
                                        : r.scrollLeft()),
                        }
                );
            },
            _rearrange: function (t, e, i, s) {
                i
                    ? i[0].appendChild(this.placeholder[0])
                    : e.item[0].parentNode.insertBefore(
                        this.placeholder[0],
                        "down" === this.direction ? e.item[0] : e.item[0].nextSibling
                    ),
                    (this.counter = this.counter ? ++this.counter : 1);
                var n = this.counter;
                this._delay(function () {
                    n === this.counter && this.refreshPositions(!s);
                });
            },
            _clear: function (t, e) {
                function i(t, e, i) {
                    return function (s) {
                        i._trigger(t, s, e._uiHash(e));
                    };
                }
                this.reverting = !1;
                var s,
                    n = [];
                if (
                    (!this._noFinalSort &&
                    this.currentItem.parent().length &&
                    this.placeholder.before(this.currentItem),
                        (this._noFinalSort = null),
                    this.helper[0] === this.currentItem[0])
                ) {
                    for (s in this._storedCSS)
                        ("auto" === this._storedCSS[s] ||
                            "static" === this._storedCSS[s]) &&
                        (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS),
                        this._removeClass(this.currentItem, "ui-sortable-helper");
                } else this.currentItem.show();
                for (
                    this.fromOutside &&
                    !e &&
                    n.push(function (t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside));
                    }),
                    (!this.fromOutside &&
                        this.domPosition.prev ===
                        this.currentItem.prev().not(".ui-sortable-helper")[0] &&
                        this.domPosition.parent === this.currentItem.parent()[0]) ||
                    e ||
                    n.push(function (t) {
                        this._trigger("update", t, this._uiHash());
                    }),
                    this !== this.currentContainer &&
                    (e ||
                        (n.push(function (t) {
                            this._trigger("remove", t, this._uiHash());
                        }),
                            n.push(
                                function (t) {
                                    return function (e) {
                                        t._trigger("receive", e, this._uiHash(this));
                                    };
                                }.call(this, this.currentContainer)
                            ),
                            n.push(
                                function (t) {
                                    return function (e) {
                                        t._trigger("update", e, this._uiHash(this));
                                    };
                                }.call(this, this.currentContainer)
                            ))),
                        s = this.containers.length - 1;
                    s >= 0;
                    s--
                )
                    e || n.push(i("deactivate", this, this.containers[s])),
                    this.containers[s].containerCache.over &&
                    (n.push(i("out", this, this.containers[s])),
                        (this.containers[s].containerCache.over = 0));
                if (
                    (this.storedCursor &&
                    (this.document.find("body").css("cursor", this.storedCursor),
                        this.storedStylesheet.remove()),
                    this._storedOpacity &&
                    this.helper.css("opacity", this._storedOpacity),
                    this._storedZIndex &&
                    this.helper.css(
                        "zIndex",
                        "auto" === this._storedZIndex ? "" : this._storedZIndex
                    ),
                        (this.dragging = !1),
                    e || this._trigger("beforeStop", t, this._uiHash()),
                        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                    this.cancelHelperRemoval ||
                    (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
                        (this.helper = null)),
                        !e)
                ) {
                    for (s = 0; n.length > s; s++) n[s].call(this, t);
                    this._trigger("stop", t, this._uiHash());
                }
                return (this.fromOutside = !1), !this.cancelHelperRemoval;
            },
            _trigger: function () {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 &&
                this.cancel();
            },
            _uiHash: function (e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null,
                };
            },
        }),
        t.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: { submenu: "ui-icon-caret-1-e" },
                items: "> *",
                menus: "ul",
                position: { my: "left top", at: "right top" },
                role: "menu",
                blur: null,
                focus: null,
                select: null,
            },
            _create: function () {
                (this.activeMenu = this.element),
                    (this.mouseHandled = !1),
                    this.element
                        .uniqueId()
                        .attr({ role: this.options.role, tabIndex: 0 }),
                    this._addClass("ui-menu", "ui-widget ui-widget-content"),
                    this._on({
                        "mousedown .ui-menu-item": function (t) {
                            t.preventDefault();
                        },
                        "click .ui-menu-item": function (e) {
                            var i = t(e.target),
                                s = t(t.ui.safeActiveElement(this.document[0]));
                            !this.mouseHandled &&
                            i.not(".ui-state-disabled").length &&
                            (this.select(e),
                            e.isPropagationStopped() || (this.mouseHandled = !0),
                                i.has(".ui-menu").length
                                    ? this.expand(e)
                                    : !this.element.is(":focus") &&
                                    s.closest(".ui-menu").length &&
                                    (this.element.trigger("focus", [!0]),
                                    this.active &&
                                    1 === this.active.parents(".ui-menu").length &&
                                    clearTimeout(this.timer)));
                        },
                        "mouseenter .ui-menu-item": function (e) {
                            if (!this.previousFilter) {
                                var i = t(e.target).closest(".ui-menu-item"),
                                    s = t(e.currentTarget);
                                i[0] === s[0] &&
                                (this._removeClass(
                                    s.siblings().children(".ui-state-active"),
                                    null,
                                    "ui-state-active"
                                ),
                                    this.focus(e, s));
                            }
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function (t, e) {
                            var i =
                                this.active || this.element.find(this.options.items).eq(0);
                            e || this.focus(t, i);
                        },
                        blur: function (e) {
                            this._delay(function () {
                                var i = !t.contains(
                                    this.element[0],
                                    t.ui.safeActiveElement(this.document[0])
                                );
                                i && this.collapseAll(e);
                            });
                        },
                        keydown: "_keydown",
                    }),
                    this.refresh(),
                    this._on(this.document, {
                        click: function (t) {
                            this._closeOnDocumentClick(t) && this.collapseAll(t),
                                (this.mouseHandled = !1);
                        },
                    });
            },
            _destroy: function () {
                var e = this.element
                        .find(".ui-menu-item")
                        .removeAttr("role aria-disabled"),
                    i = e
                        .children(".ui-menu-item-wrapper")
                        .removeUniqueId()
                        .removeAttr("tabIndex role aria-haspopup");
                this.element
                    .removeAttr("aria-activedescendant")
                    .find(".ui-menu")
                    .addBack()
                    .removeAttr(
                        "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
                    )
                    .removeUniqueId()
                    .show(),
                    i.children().each(function () {
                        var e = t(this);
                        e.data("ui-menu-submenu-caret") && e.remove();
                    });
            },
            _keydown: function (e) {
                var i,
                    s,
                    n,
                    o,
                    a = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active &&
                        !this.active.is(".ui-state-disabled") &&
                        this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        (a = !1),
                            (s = this.previousFilter || ""),
                            (o = !1),
                            (n =
                                e.keyCode >= 96 && 105 >= e.keyCode
                                    ? "" + (e.keyCode - 96)
                                    : String.fromCharCode(e.keyCode)),
                            clearTimeout(this.filterTimer),
                            n === s ? (o = !0) : (n = s + n),
                            (i = this._filterMenuItems(n)),
                            (i =
                                o && -1 !== i.index(this.active.next())
                                    ? this.active.nextAll(".ui-menu-item")
                                    : i),
                        i.length ||
                        ((n = String.fromCharCode(e.keyCode)),
                            (i = this._filterMenuItems(n))),
                            i.length
                                ? (this.focus(e, i),
                                    (this.previousFilter = n),
                                    (this.filterTimer = this._delay(function () {
                                        delete this.previousFilter;
                                    }, 1e3)))
                                : delete this.previousFilter;
                }
                a && e.preventDefault();
            },
            _activate: function (t) {
                this.active &&
                !this.active.is(".ui-state-disabled") &&
                (this.active.children("[aria-haspopup='true']").length
                    ? this.expand(t)
                    : this.select(t));
            },
            refresh: function () {
                var e,
                    i,
                    s,
                    n,
                    o,
                    a = this,
                    r = this.options.icons.submenu,
                    l = this.element.find(this.options.menus);
                this._toggleClass(
                    "ui-menu-icons",
                    null,
                    !!this.element.find(".ui-icon").length
                ),
                    (s = l
                        .filter(":not(.ui-menu)")
                        .hide()
                        .attr({
                            role: this.options.role,
                            "aria-hidden": "true",
                            "aria-expanded": "false",
                        })
                        .each(function () {
                            var e = t(this),
                                i = e.prev(),
                                s = t("<span>").data("ui-menu-submenu-caret", !0);
                            a._addClass(s, "ui-menu-icon", "ui-icon " + r),
                                i.attr("aria-haspopup", "true").prepend(s),
                                e.attr("aria-labelledby", i.attr("id"));
                        })),
                    this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"),
                    (e = l.add(this.element)),
                    (i = e.find(this.options.items)),
                    i.not(".ui-menu-item").each(function () {
                        var e = t(this);
                        a._isDivider(e) &&
                        a._addClass(e, "ui-menu-divider", "ui-widget-content");
                    }),
                    (n = i.not(".ui-menu-item, .ui-menu-divider")),
                    (o = n
                        .children()
                        .not(".ui-menu")
                        .uniqueId()
                        .attr({ tabIndex: -1, role: this._itemRole() })),
                    this._addClass(n, "ui-menu-item")._addClass(
                        o,
                        "ui-menu-item-wrapper"
                    ),
                    i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
                this.active &&
                !t.contains(this.element[0], this.active[0]) &&
                this.blur();
            },
            _itemRole: function () {
                return { menu: "menuitem", listbox: "option" }[this.options.role];
            },
            _setOption: function (t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(
                        i,
                        null,
                        e.submenu
                    );
                }
                this._super(t, e);
            },
            _setOptionDisabled: function (t) {
                this._super(t),
                    this.element.attr("aria-disabled", t + ""),
                    this._toggleClass(null, "ui-state-disabled", !!t);
            },
            focus: function (t, e) {
                var i, s, n;
                this.blur(t, t && "focus" === t.type),
                    this._scrollIntoView(e),
                    (this.active = e.first()),
                    (s = this.active.children(".ui-menu-item-wrapper")),
                    this._addClass(s, null, "ui-state-active"),
                this.options.role &&
                this.element.attr("aria-activedescendant", s.attr("id")),
                    (n = this.active
                        .parent()
                        .closest(".ui-menu-item")
                        .children(".ui-menu-item-wrapper")),
                    this._addClass(n, null, "ui-state-active"),
                    t && "keydown" === t.type
                        ? this._close()
                        : (this.timer = this._delay(function () {
                            this._close();
                        }, this.delay)),
                    (i = e.children(".ui-menu")),
                i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
                    (this.activeMenu = e.parent()),
                    this._trigger("focus", t, { item: e });
            },
            _scrollIntoView: function (e) {
                var i, s, n, o, a, r;
                this._hasScroll() &&
                ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
                    (s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
                    (n = e.offset().top - this.activeMenu.offset().top - i - s),
                    (o = this.activeMenu.scrollTop()),
                    (a = this.activeMenu.height()),
                    (r = e.outerHeight()),
                    0 > n
                        ? this.activeMenu.scrollTop(o + n)
                        : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
            },
            blur: function (t, e) {
                e || clearTimeout(this.timer),
                this.active &&
                (this._removeClass(
                    this.active.children(".ui-menu-item-wrapper"),
                    null,
                    "ui-state-active"
                ),
                    this._trigger("blur", t, { item: this.active }),
                    (this.active = null));
            },
            _startOpening: function (t) {
                clearTimeout(this.timer),
                "true" === t.attr("aria-hidden") &&
                (this.timer = this._delay(function () {
                    this._close(), this._open(t);
                }, this.delay));
            },
            _open: function (e) {
                var i = t.extend({ of: this.active }, this.options.position);
                clearTimeout(this.timer),
                    this.element
                        .find(".ui-menu")
                        .not(e.parents(".ui-menu"))
                        .hide()
                        .attr("aria-hidden", "true"),
                    e
                        .show()
                        .removeAttr("aria-hidden")
                        .attr("aria-expanded", "true")
                        .position(i);
            },
            collapseAll: function (e, i) {
                clearTimeout(this.timer),
                    (this.timer = this._delay(function () {
                        var s = i
                            ? this.element
                            : t(e && e.target).closest(this.element.find(".ui-menu"));
                        s.length || (s = this.element),
                            this._close(s),
                            this.blur(e),
                            this._removeClass(
                                s.find(".ui-state-active"),
                                null,
                                "ui-state-active"
                            ),
                            (this.activeMenu = s);
                    }, this.delay));
            },
            _close: function (t) {
                t || (t = this.active ? this.active.parent() : this.element),
                    t
                        .find(".ui-menu")
                        .hide()
                        .attr("aria-hidden", "true")
                        .attr("aria-expanded", "false");
            },
            _closeOnDocumentClick: function (e) {
                return !t(e.target).closest(".ui-menu").length;
            },
            _isDivider: function (t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text());
            },
            collapse: function (t) {
                var e =
                    this.active &&
                    this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e));
            },
            expand: function (t) {
                var e =
                    this.active &&
                    this.active.children(".ui-menu ").find(this.options.items).first();
                e &&
                e.length &&
                (this._open(e.parent()),
                    this._delay(function () {
                        this.focus(t, e);
                    }));
            },
            next: function (t) {
                this._move("next", "first", t);
            },
            previous: function (t) {
                this._move("prev", "last", t);
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length;
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length;
            },
            _move: function (t, e, i) {
                var s;
                this.active &&
                (s =
                    "first" === t || "last" === t
                        ? this.active["first" === t ? "prevAll" : "nextAll"](
                            ".ui-menu-item"
                        ).eq(-1)
                        : this.active[t + "All"](".ui-menu-item").eq(0)),
                (s && s.length && this.active) ||
                (s = this.activeMenu.find(this.options.items)[e]()),
                    this.focus(i, s);
            },
            nextPage: function (e) {
                var i, s, n;
                return this.active
                    ? (this.isLastItem() ||
                    (this._hasScroll()
                        ? ((s = this.active.offset().top),
                            (n = this.element.height()),
                            this.active.nextAll(".ui-menu-item").each(function () {
                                return (i = t(this)), 0 > i.offset().top - s - n;
                            }),
                            this.focus(e, i))
                        : this.focus(
                            e,
                            this.activeMenu
                                .find(this.options.items)
                                [this.active ? "last" : "first"]()
                        )),
                        void 0)
                    : (this.next(e), void 0);
            },
            previousPage: function (e) {
                var i, s, n;
                return this.active
                    ? (this.isFirstItem() ||
                    (this._hasScroll()
                        ? ((s = this.active.offset().top),
                            (n = this.element.height()),
                            this.active.prevAll(".ui-menu-item").each(function () {
                                return (i = t(this)), i.offset().top - s + n > 0;
                            }),
                            this.focus(e, i))
                        : this.focus(
                            e,
                            this.activeMenu.find(this.options.items).first()
                        )),
                        void 0)
                    : (this.next(e), void 0);
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight");
            },
            select: function (e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = { item: this.active };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0),
                    this._trigger("select", e, i);
            },
            _filterMenuItems: function (e) {
                var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    s = RegExp("^" + i, "i");
                return this.activeMenu
                    .find(this.options.items)
                    .filter(".ui-menu-item")
                    .filter(function () {
                        return s.test(
                            t.trim(t(this).children(".ui-menu-item-wrapper").text())
                        );
                    });
            },
        }),
        t.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: { my: "left top", at: "left bottom", collision: "none" },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null,
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var e,
                    i,
                    s,
                    n = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === n,
                    a = "input" === n;
                (this.isMultiLine = o || (!a && this._isContentEditable(this.element))),
                    (this.valueMethod = this.element[o || a ? "val" : "text"]),
                    (this.isNewMenu = !0),
                    this._addClass("ui-autocomplete-input"),
                    this.element.attr("autocomplete", "off"),
                    this._on(this.element, {
                        keydown: function (n) {
                            if (this.element.prop("readOnly"))
                                return (e = !0), (s = !0), (i = !0), void 0;
                            (e = !1), (s = !1), (i = !1);
                            var o = t.ui.keyCode;
                            switch (n.keyCode) {
                                case o.PAGE_UP:
                                    (e = !0), this._move("previousPage", n);
                                    break;
                                case o.PAGE_DOWN:
                                    (e = !0), this._move("nextPage", n);
                                    break;
                                case o.UP:
                                    (e = !0), this._keyEvent("previous", n);
                                    break;
                                case o.DOWN:
                                    (e = !0), this._keyEvent("next", n);
                                    break;
                                case o.ENTER:
                                    this.menu.active &&
                                    ((e = !0), n.preventDefault(), this.menu.select(n));
                                    break;
                                case o.TAB:
                                    this.menu.active && this.menu.select(n);
                                    break;
                                case o.ESCAPE:
                                    this.menu.element.is(":visible") &&
                                    (this.isMultiLine || this._value(this.term),
                                        this.close(n),
                                        n.preventDefault());
                                    break;
                                default:
                                    (i = !0), this._searchTimeout(n);
                            }
                        },
                        keypress: function (s) {
                            if (e)
                                return (
                                    (e = !1),
                                    (!this.isMultiLine || this.menu.element.is(":visible")) &&
                                    s.preventDefault(),
                                        void 0
                                );
                            if (!i) {
                                var n = t.ui.keyCode;
                                switch (s.keyCode) {
                                    case n.PAGE_UP:
                                        this._move("previousPage", s);
                                        break;
                                    case n.PAGE_DOWN:
                                        this._move("nextPage", s);
                                        break;
                                    case n.UP:
                                        this._keyEvent("previous", s);
                                        break;
                                    case n.DOWN:
                                        this._keyEvent("next", s);
                                }
                            }
                        },
                        input: function (t) {
                            return s
                                ? ((s = !1), t.preventDefault(), void 0)
                                : (this._searchTimeout(t), void 0);
                        },
                        focus: function () {
                            (this.selectedItem = null), (this.previous = this._value());
                        },
                        blur: function (t) {
                            return this.cancelBlur
                                ? (delete this.cancelBlur, void 0)
                                : (clearTimeout(this.searching),
                                    this.close(t),
                                    this._change(t),
                                    void 0);
                        },
                    }),
                    this._initSource(),
                    (this.menu = t("<ul>")
                        .appendTo(this._appendTo())
                        .menu({ role: null })
                        .hide()
                        .menu("instance")),
                    this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
                    this._on(this.menu.element, {
                        mousedown: function (e) {
                            e.preventDefault(),
                                (this.cancelBlur = !0),
                                this._delay(function () {
                                    delete this.cancelBlur,
                                    this.element[0] !==
                                    t.ui.safeActiveElement(this.document[0]) &&
                                    this.element.trigger("focus");
                                });
                        },
                        menufocus: function (e, i) {
                            var s, n;
                            return this.isNewMenu &&
                            ((this.isNewMenu = !1),
                            e.originalEvent && /^mouse/.test(e.originalEvent.type))
                                ? (this.menu.blur(),
                                    this.document.one("mousemove", function () {
                                        t(e.target).trigger(e.originalEvent);
                                    }),
                                    void 0)
                                : ((n = i.item.data("ui-autocomplete-item")),
                                !1 !== this._trigger("focus", e, { item: n }) &&
                                e.originalEvent &&
                                /^key/.test(e.originalEvent.type) &&
                                this._value(n.value),
                                    (s = i.item.attr("aria-label") || n.value),
                                s &&
                                t.trim(s).length &&
                                (this.liveRegion.children().hide(),
                                    t("<div>").text(s).appendTo(this.liveRegion)),
                                    void 0);
                        },
                        menuselect: function (e, i) {
                            var s = i.item.data("ui-autocomplete-item"),
                                n = this.previous;
                            this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
                            (this.element.trigger("focus"),
                                (this.previous = n),
                                this._delay(function () {
                                    (this.previous = n), (this.selectedItem = s);
                                })),
                            !1 !== this._trigger("select", e, { item: s }) &&
                            this._value(s.value),
                                (this.term = this._value()),
                                this.close(e),
                                (this.selectedItem = s);
                        },
                    }),
                    (this.liveRegion = t("<div>", {
                        role: "status",
                        "aria-live": "assertive",
                        "aria-relevant": "additions",
                    }).appendTo(this.document[0].body)),
                    this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
                    this._on(this.window, {
                        beforeunload: function () {
                            this.element.removeAttr("autocomplete");
                        },
                    });
            },
            _destroy: function () {
                clearTimeout(this.searching),
                    this.element.removeAttr("autocomplete"),
                    this.menu.element.remove(),
                    this.liveRegion.remove();
            },
            _setOption: function (t, e) {
                this._super(t, e),
                "source" === t && this._initSource(),
                "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
                "disabled" === t && e && this.xhr && this.xhr.abort();
            },
            _isEventTargetInWidget: function (e) {
                var i = this.menu.element[0];
                return (
                    e.target === this.element[0] ||
                    e.target === i ||
                    t.contains(i, e.target)
                );
            },
            _closeOnClickOutside: function (t) {
                this._isEventTargetInWidget(t) || this.close();
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return (
                    e &&
                    (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
                    (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
                    e.length || (e = this.document[0].body),
                        e
                );
            },
            _initSource: function () {
                var e,
                    i,
                    s = this;
                t.isArray(this.options.source)
                    ? ((e = this.options.source),
                        (this.source = function (i, s) {
                            s(t.ui.autocomplete.filter(e, i.term));
                        }))
                    : "string" == typeof this.options.source
                        ? ((i = this.options.source),
                            (this.source = function (e, n) {
                                s.xhr && s.xhr.abort(),
                                    (s.xhr = t.ajax({
                                        url: i,
                                        data: e,
                                        dataType: "json",
                                        success: function (t) {
                                            n(t);
                                        },
                                        error: function () {
                                            n([]);
                                        },
                                    }));
                            }))
                        : (this.source = this.options.source);
            },
            _searchTimeout: function (t) {
                clearTimeout(this.searching),
                    (this.searching = this._delay(function () {
                        var e = this.term === this._value(),
                            i = this.menu.element.is(":visible"),
                            s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                        (!e || (e && !i && !s)) &&
                        ((this.selectedItem = null), this.search(null, t));
                    }, this.options.delay));
            },
            search: function (t, e) {
                return (
                    (t = null != t ? t : this._value()),
                        (this.term = this._value()),
                        t.length < this.options.minLength
                            ? this.close(e)
                            : this._trigger("search", e) !== !1
                                ? this._search(t)
                                : void 0
                );
            },
            _search: function (t) {
                this.pending++,
                    this._addClass("ui-autocomplete-loading"),
                    (this.cancelSearch = !1),
                    this.source({ term: t }, this._response());
            },
            _response: function () {
                var e = ++this.requestIndex;
                return t.proxy(function (t) {
                    e === this.requestIndex && this.__response(t),
                        this.pending--,
                    this.pending || this._removeClass("ui-autocomplete-loading");
                }, this);
            },
            __response: function (t) {
                t && (t = this._normalize(t)),
                    this._trigger("response", null, { content: t }),
                    !this.options.disabled && t && t.length && !this.cancelSearch
                        ? (this._suggest(t), this._trigger("open"))
                        : this._close();
            },
            close: function (t) {
                (this.cancelSearch = !0), this._close(t);
            },
            _close: function (t) {
                this._off(this.document, "mousedown"),
                this.menu.element.is(":visible") &&
                (this.menu.element.hide(),
                    this.menu.blur(),
                    (this.isNewMenu = !0),
                    this._trigger("close", t));
            },
            _change: function (t) {
                this.previous !== this._value() &&
                this._trigger("change", t, { item: this.selectedItem });
            },
            _normalize: function (e) {
                return e.length && e[0].label && e[0].value
                    ? e
                    : t.map(e, function (e) {
                        return "string" == typeof e
                            ? { label: e, value: e }
                            : t.extend({}, e, {
                                label: e.label || e.value,
                                value: e.value || e.label,
                            });
                    });
            },
            _suggest: function (e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e),
                    (this.isNewMenu = !0),
                    this.menu.refresh(),
                    i.show(),
                    this._resizeMenu(),
                    i.position(t.extend({ of: this.element }, this.options.position)),
                this.options.autoFocus && this.menu.next(),
                    this._on(this.document, { mousedown: "_closeOnClickOutside" });
            },
            _resizeMenu: function () {
                var t = this.menu.element;
                t.outerWidth(
                    Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
                );
            },
            _renderMenu: function (e, i) {
                var s = this;
                t.each(i, function (t, i) {
                    s._renderItemData(e, i);
                });
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e);
            },
            _renderItem: function (e, i) {
                return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
            },
            _move: function (t, e) {
                return this.menu.element.is(":visible")
                    ? (this.menu.isFirstItem() && /^previous/.test(t)) ||
                    (this.menu.isLastItem() && /^next/.test(t))
                        ? (this.isMultiLine || this._value(this.term),
                            this.menu.blur(),
                            void 0)
                        : (this.menu[t](e), void 0)
                    : (this.search(null, e), void 0);
            },
            widget: function () {
                return this.menu.element;
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments);
            },
            _keyEvent: function (t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) &&
                (this._move(t, e), e.preventDefault());
            },
            _isContentEditable: function (t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e
                    ? this._isContentEditable(t.parent())
                    : "true" === e;
            },
        }),
        t.extend(t.ui.autocomplete, {
            escapeRegex: function (t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            },
            filter: function (e, i) {
                var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function (t) {
                    return s.test(t.label || t.value || t);
                });
            },
        }),
        t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (t) {
                        return (
                            t +
                            (t > 1 ? " results are" : " result is") +
                            " available, use up and down arrow keys to navigate."
                        );
                    },
                },
            },
            __response: function (e) {
                var i;
                this._superApply(arguments),
                this.options.disabled ||
                this.cancelSearch ||
                ((i =
                    e && e.length
                        ? this.options.messages.results(e.length)
                        : this.options.messages.noResults),
                    this.liveRegion.children().hide(),
                    t("<div>").text(i).appendTo(this.liveRegion));
            },
        }),
        t.ui.autocomplete,
        t.extend(t.ui, { datepicker: { version: "1.12.1" } });
    var u;
    t.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv;
        },
        setDefaults: function (t) {
            return a(this._defaults, t || {}), this;
        },
        _attachDatepicker: function (e, i) {
            var s, n, o;
            (s = e.nodeName.toLowerCase()),
                (n = "div" === s || "span" === s),
            e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
                (o = this._newInst(t(e), n)),
                (o.settings = t.extend({}, i || {})),
                "input" === s
                    ? this._connectDatepicker(e, o)
                    : n && this._inlineDatepicker(e, o);
        },
        _newInst: function (e, i) {
            var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i
                    ? n(
                        t(
                            "<div class='" +
                            this._inlineClass +
                            " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                        )
                    )
                    : this.dpDiv,
            };
        },
        _connectDatepicker: function (e, i) {
            var s = t(e);
            (i.append = t([])),
                (i.trigger = t([])),
            s.hasClass(this.markerClassName) ||
            (this._attachments(s, i),
                s
                    .addClass(this.markerClassName)
                    .on("keydown", this._doKeyDown)
                    .on("keypress", this._doKeyPress)
                    .on("keyup", this._doKeyUp),
                this._autoSize(i),
                t.data(e, "datepicker", i),
            i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function (e, i) {
            var s,
                n,
                o,
                a = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(),
            a &&
            ((i.append = t(
                "<span class='" + this._appendClass + "'>" + a + "</span>"
            )),
                e[r ? "before" : "after"](i.append)),
                e.off("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
                (s = this._get(i, "showOn")),
            ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker),
            ("button" === s || "both" === s) &&
            ((n = this._get(i, "buttonText")),
                (o = this._get(i, "buttonImage")),
                (i.trigger = t(
                    this._get(i, "buttonImageOnly")
                        ? t("<img/>")
                            .addClass(this._triggerClass)
                            .attr({ src: o, alt: n, title: n })
                        : t("<button type='button'></button>")
                            .addClass(this._triggerClass)
                            .html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)
                )),
                e[r ? "before" : "after"](i.trigger),
                i.trigger.on("click", function () {
                    return (
                        t.datepicker._datepickerShowing &&
                        t.datepicker._lastInput === e[0]
                            ? t.datepicker._hideDatepicker()
                            : t.datepicker._datepickerShowing &&
                            t.datepicker._lastInput !== e[0]
                                ? (t.datepicker._hideDatepicker(),
                                    t.datepicker._showDatepicker(e[0]))
                                : t.datepicker._showDatepicker(e[0]),
                            !1
                    );
                }));
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e,
                    i,
                    s,
                    n,
                    o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");
                a.match(/[DM]/) &&
                ((e = function (t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++)
                        t[n].length > i && ((i = t[n].length), (s = n));
                    return s;
                }),
                    o.setMonth(
                        e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))
                    ),
                    o.setDate(
                        e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                        20 -
                        o.getDay()
                    )),
                    t.input.attr("size", this._formatDate(t, o).length);
            }
        },
        _inlineDatepicker: function (e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) ||
            (s.addClass(this.markerClassName).append(i.dpDiv),
                t.data(e, "datepicker", i),
                this._setDate(i, this._getDefaultDate(i), !0),
                this._updateDatepicker(i),
                this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
                i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function (e, i, s, n, o) {
            var r,
                l,
                h,
                c,
                u,
                d = this._dialogInst;
            return (
                d ||
                ((this.uuid += 1),
                    (r = "dp" + this.uuid),
                    (this._dialogInput = t(
                        "<input type='text' id='" +
                        r +
                        "' style='position: absolute; top: -100px; width: 0px;'/>"
                    )),
                    this._dialogInput.on("keydown", this._doKeyDown),
                    t("body").append(this._dialogInput),
                    (d = this._dialogInst = this._newInst(this._dialogInput, !1)),
                    (d.settings = {}),
                    t.data(this._dialogInput[0], "datepicker", d)),
                    a(d.settings, n || {}),
                    (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
                    this._dialogInput.val(i),
                    (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
                this._pos ||
                ((l = document.documentElement.clientWidth),
                    (h = document.documentElement.clientHeight),
                    (c = document.documentElement.scrollLeft || document.body.scrollLeft),
                    (u = document.documentElement.scrollTop || document.body.scrollTop),
                    (this._pos = [l / 2 - 100 + c, h / 2 - 150 + u])),
                    this._dialogInput
                        .css("left", this._pos[0] + 20 + "px")
                        .css("top", this._pos[1] + "px"),
                    (d.settings.onSelect = s),
                    (this._inDialog = !0),
                    this.dpDiv.addClass(this._dialogClass),
                    this._showDatepicker(this._dialogInput[0]),
                t.blockUI && t.blockUI(this.dpDiv),
                    t.data(this._dialogInput[0], "datepicker", d),
                    this
            );
        },
        _destroyDatepicker: function (e) {
            var i,
                s = t(e),
                n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
                t.removeData(e, "datepicker"),
                "input" === i
                    ? (n.append.remove(),
                        n.trigger.remove(),
                        s
                            .removeClass(this.markerClassName)
                            .off("focus", this._showDatepicker)
                            .off("keydown", this._doKeyDown)
                            .off("keypress", this._doKeyPress)
                            .off("keyup", this._doKeyUp))
                    : ("div" === i || "span" === i) &&
                    s.removeClass(this.markerClassName).empty(),
            u === n && (u = null));
        },
        _enableDatepicker: function (e) {
            var i,
                s,
                n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
                "input" === i
                    ? ((e.disabled = !1),
                        o.trigger
                            .filter("button")
                            .each(function () {
                                this.disabled = !1;
                            })
                            .end()
                            .filter("img")
                            .css({ opacity: "1.0", cursor: "" }))
                    : ("div" === i || "span" === i) &&
                    ((s = n.children("." + this._inlineClass)),
                        s.children().removeClass("ui-state-disabled"),
                        s
                            .find("select.ui-datepicker-month, select.ui-datepicker-year")
                            .prop("disabled", !1)),
                (this._disabledInputs = t.map(this._disabledInputs, function (t) {
                    return t === e ? null : t;
                })));
        },
        _disableDatepicker: function (e) {
            var i,
                s,
                n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
                "input" === i
                    ? ((e.disabled = !0),
                        o.trigger
                            .filter("button")
                            .each(function () {
                                this.disabled = !0;
                            })
                            .end()
                            .filter("img")
                            .css({ opacity: "0.5", cursor: "default" }))
                    : ("div" === i || "span" === i) &&
                    ((s = n.children("." + this._inlineClass)),
                        s.children().addClass("ui-state-disabled"),
                        s
                            .find("select.ui-datepicker-month, select.ui-datepicker-year")
                            .prop("disabled", !0)),
                (this._disabledInputs = t.map(this._disabledInputs, function (t) {
                    return t === e ? null : t;
                })),
                (this._disabledInputs[this._disabledInputs.length] = e));
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1;
        },
        _getInst: function (e) {
            try {
                return t.data(e, "datepicker");
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function (e, i, s) {
            var n,
                o,
                r,
                l,
                h = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i
                ? "defaults" === i
                    ? t.extend({}, t.datepicker._defaults)
                    : h
                        ? "all" === i
                            ? t.extend({}, h.settings)
                            : this._get(h, i)
                        : null
                : ((n = i || {}),
                "string" == typeof i && ((n = {}), (n[i] = s)),
                h &&
                (this._curInst === h && this._hideDatepicker(),
                    (o = this._getDateDatepicker(e, !0)),
                    (r = this._getMinMaxDate(h, "min")),
                    (l = this._getMinMaxDate(h, "max")),
                    a(h.settings, n),
                null !== r &&
                void 0 !== n.dateFormat &&
                void 0 === n.minDate &&
                (h.settings.minDate = this._formatDate(h, r)),
                null !== l &&
                void 0 !== n.dateFormat &&
                void 0 === n.maxDate &&
                (h.settings.maxDate = this._formatDate(h, l)),
                "disabled" in n &&
                (n.disabled
                    ? this._disableDatepicker(e)
                    : this._enableDatepicker(e)),
                    this._attachments(t(e), h),
                    this._autoSize(h),
                    this._setDate(h, o),
                    this._updateAlternate(h),
                    this._updateDatepicker(h)),
                    void 0);
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i &&
            (this._setDate(i, e),
                this._updateDatepicker(i),
                this._updateAlternate(i));
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return (
                i && !i.inline && this._setDateFromField(i, e),
                    i ? this._getDate(i) : null
            );
        },
        _doKeyDown: function (e) {
            var i,
                s,
                n,
                o = t.datepicker._getInst(e.target),
                a = !0,
                r = o.dpDiv.is(".ui-datepicker-rtl");
            if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
                switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), (a = !1);
                        break;
                    case 13:
                        return (
                            (n = t(
                                "td." +
                                t.datepicker._dayOverClass +
                                ":not(." +
                                t.datepicker._currentClass +
                                ")",
                                o.dpDiv
                            )),
                            n[0] &&
                            t.datepicker._selectDay(
                                e.target,
                                o.selectedMonth,
                                o.selectedYear,
                                n[0]
                            ),
                                (i = t.datepicker._get(o, "onSelect")),
                                i
                                    ? ((s = t.datepicker._formatDate(o)),
                                        i.apply(o.input ? o.input[0] : null, [s, o]))
                                    : t.datepicker._hideDatepicker(),
                                !1
                        );
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(
                            e.target,
                            e.ctrlKey
                                ? -t.datepicker._get(o, "stepBigMonths")
                                : -t.datepicker._get(o, "stepMonths"),
                            "M"
                        );
                        break;
                    case 34:
                        t.datepicker._adjustDate(
                            e.target,
                            e.ctrlKey
                                ? +t.datepicker._get(o, "stepBigMonths")
                                : +t.datepicker._get(o, "stepMonths"),
                            "M"
                        );
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                            (a = e.ctrlKey || e.metaKey);
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                            (a = e.ctrlKey || e.metaKey);
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) &&
                        t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                            (a = e.ctrlKey || e.metaKey),
                        e.originalEvent.altKey &&
                        t.datepicker._adjustDate(
                            e.target,
                            e.ctrlKey
                                ? -t.datepicker._get(o, "stepBigMonths")
                                : -t.datepicker._get(o, "stepMonths"),
                            "M"
                        );
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) &&
                        t.datepicker._adjustDate(e.target, -7, "D"),
                            (a = e.ctrlKey || e.metaKey);
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) &&
                        t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                            (a = e.ctrlKey || e.metaKey),
                        e.originalEvent.altKey &&
                        t.datepicker._adjustDate(
                            e.target,
                            e.ctrlKey
                                ? +t.datepicker._get(o, "stepBigMonths")
                                : +t.datepicker._get(o, "stepMonths"),
                            "M"
                        );
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) &&
                        t.datepicker._adjustDate(e.target, 7, "D"),
                            (a = e.ctrlKey || e.metaKey);
                        break;
                    default:
                        a = !1;
                }
            else
                36 === e.keyCode && e.ctrlKey
                    ? t.datepicker._showDatepicker(this)
                    : (a = !1);
            a && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function (e) {
            var i,
                s,
                n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput")
                ? ((i = t.datepicker._possibleChars(
                    t.datepicker._get(n, "dateFormat")
                )),
                    (s = String.fromCharCode(
                        null == e.charCode ? e.keyCode : e.charCode
                    )),
                e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1)
                : void 0;
        },
        _doKeyUp: function (e) {
            var i,
                s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal)
                try {
                    (i = t.datepicker.parseDate(
                        t.datepicker._get(s, "dateFormat"),
                        s.input ? s.input.val() : null,
                        t.datepicker._getFormatConfig(s)
                    )),
                    i &&
                    (t.datepicker._setDateFromField(s),
                        t.datepicker._updateAlternate(s),
                        t.datepicker._updateDatepicker(s));
                } catch (n) {}
            return !0;
        },
        _showDatepicker: function (e) {
            if (
                ((e = e.target || e),
                "input" !== e.nodeName.toLowerCase() &&
                (e = t("input", e.parentNode)[0]),
                !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e)
            ) {
                var s, n, o, r, l, h, c;
                (s = t.datepicker._getInst(e)),
                t.datepicker._curInst &&
                t.datepicker._curInst !== s &&
                (t.datepicker._curInst.dpDiv.stop(!0, !0),
                s &&
                t.datepicker._datepickerShowing &&
                t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
                    (n = t.datepicker._get(s, "beforeShow")),
                    (o = n ? n.apply(e, [e, s]) : {}),
                o !== !1 &&
                (a(s.settings, o),
                    (s.lastVal = null),
                    (t.datepicker._lastInput = e),
                    t.datepicker._setDateFromField(s),
                t.datepicker._inDialog && (e.value = ""),
                t.datepicker._pos ||
                ((t.datepicker._pos = t.datepicker._findPos(e)),
                    (t.datepicker._pos[1] += e.offsetHeight)),
                    (r = !1),
                    t(e)
                        .parents()
                        .each(function () {
                            return (r |= "fixed" === t(this).css("position")), !r;
                        }),
                    (l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
                    (t.datepicker._pos = null),
                    s.dpDiv.empty(),
                    s.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px",
                    }),
                    t.datepicker._updateDatepicker(s),
                    (l = t.datepicker._checkOffset(s, l, r)),
                    s.dpDiv.css({
                        position:
                            t.datepicker._inDialog && t.blockUI
                                ? "static"
                                : r
                                    ? "fixed"
                                    : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px",
                    }),
                s.inline ||
                ((h = t.datepicker._get(s, "showAnim")),
                    (c = t.datepicker._get(s, "duration")),
                    s.dpDiv.css("z-index", i(t(e)) + 1),
                    (t.datepicker._datepickerShowing = !0),
                    t.effects && t.effects.effect[h]
                        ? s.dpDiv.show(h, t.datepicker._get(s, "showOptions"), c)
                        : s.dpDiv[h || "show"](h ? c : null),
                t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"),
                    (t.datepicker._curInst = s)));
            }
        },
        _updateDatepicker: function (e) {
            (this.maxRows = 4),
                (u = e),
                e.dpDiv.empty().append(this._generateHTML(e)),
                this._attachHandlers(e);
            var i,
                s = this._getNumberOfMonths(e),
                n = s[1],
                a = 17,
                r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)),
                e.dpDiv
                    .removeClass(
                        "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
                    )
                    .width(""),
            n > 1 &&
            e.dpDiv
                .addClass("ui-datepicker-multi-" + n)
                .css("width", a * n + "em"),
                e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"](
                    "ui-datepicker-multi"
                ),
                e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
                    "ui-datepicker-rtl"
                ),
            e === t.datepicker._curInst &&
            t.datepicker._datepickerShowing &&
            t.datepicker._shouldFocusInput(e) &&
            e.input.trigger("focus"),
            e.yearshtml &&
            ((i = e.yearshtml),
                setTimeout(function () {
                    i === e.yearshtml &&
                    e.yearshtml &&
                    e.dpDiv
                        .find("select.ui-datepicker-year:first")
                        .replaceWith(e.yearshtml),
                        (i = e.yearshtml = null);
                }, 0));
        },
        _shouldFocusInput: function (t) {
            return (
                t.input &&
                t.input.is(":visible") &&
                !t.input.is(":disabled") &&
                !t.input.is(":focus")
            );
        },
        _checkOffset: function (e, i, s) {
            var n = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                l =
                    document.documentElement.clientWidth +
                    (s ? 0 : t(document).scrollLeft()),
                h =
                    document.documentElement.clientHeight +
                    (s ? 0 : t(document).scrollTop());
            return (
                (i.left -= this._get(e, "isRTL") ? n - a : 0),
                    (i.left -=
                        s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0),
                    (i.top -=
                        s && i.top === e.input.offset().top + r
                            ? t(document).scrollTop()
                            : 0),
                    (i.left -= Math.min(
                        i.left,
                        i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0
                    )),
                    (i.top -= Math.min(
                        i.top,
                        i.top + o > h && h > o ? Math.abs(o + r) : 0
                    )),
                    i
            );
        },
        _findPos: function (e) {
            for (
                var i, s = this._getInst(e), n = this._get(s, "isRTL");
                e &&
                ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));

            )
                e = e[n ? "previousSibling" : "nextSibling"];
            return (i = t(e).offset()), [i.left, i.top];
        },
        _hideDatepicker: function (e) {
            var i,
                s,
                n,
                o,
                a = this._curInst;
            !a ||
            (e && a !== t.data(e, "datepicker")) ||
            (this._datepickerShowing &&
                ((i = this._get(a, "showAnim")),
                    (s = this._get(a, "duration")),
                    (n = function () {
                        t.datepicker._tidyDialog(a);
                    }),
                    t.effects && (t.effects.effect[i] || t.effects[i])
                        ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n)
                        : a.dpDiv[
                            "slideDown" === i
                                ? "slideUp"
                                : "fadeIn" === i
                                    ? "fadeOut"
                                    : "hide"
                            ](i ? s : null, n),
                i || n(),
                    (this._datepickerShowing = !1),
                    (o = this._get(a, "onClose")),
                o &&
                o.apply(a.input ? a.input[0] : null, [
                    a.input ? a.input.val() : "",
                    a,
                ]),
                    (this._lastInput = null),
                this._inDialog &&
                (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px",
                }),
                t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
                    (this._inDialog = !1)));
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function (e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    s = t.datepicker._getInst(i[0]);
                ((i[0].id !== t.datepicker._mainDivId &&
                        0 === i.parents("#" + t.datepicker._mainDivId).length &&
                        !i.hasClass(t.datepicker.markerClassName) &&
                        !i.closest("." + t.datepicker._triggerClass).length &&
                        t.datepicker._datepickerShowing &&
                        (!t.datepicker._inDialog || !t.blockUI)) ||
                    (i.hasClass(t.datepicker.markerClassName) &&
                        t.datepicker._curInst !== s)) &&
                t.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function (e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) ||
            (this._adjustInstDate(
                o,
                i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0),
                s
            ),
                this._updateDatepicker(o));
        },
        _gotoToday: function (e) {
            var i,
                s = t(e),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay
                ? ((n.selectedDay = n.currentDay),
                    (n.drawMonth = n.selectedMonth = n.currentMonth),
                    (n.drawYear = n.selectedYear = n.currentYear))
                : ((i = new Date()),
                    (n.selectedDay = i.getDate()),
                    (n.drawMonth = n.selectedMonth = i.getMonth()),
                    (n.drawYear = n.selectedYear = i.getFullYear())),
                this._notifyChange(n),
                this._adjustDate(s);
        },
        _selectMonthYear: function (e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            (o["selected" + ("M" === s ? "Month" : "Year")] = o[
            "draw" + ("M" === s ? "Month" : "Year")
                ] =
                parseInt(i.options[i.selectedIndex].value, 10)),
                this._notifyChange(o),
                this._adjustDate(n);
        },
        _selectDay: function (e, i, s, n) {
            var o,
                a = t(e);
            t(n).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(a[0]) ||
            ((o = this._getInst(a[0])),
                (o.selectedDay = o.currentDay = t("a", n).html()),
                (o.selectedMonth = o.currentMonth = i),
                (o.selectedYear = o.currentYear = s),
                this._selectDate(
                    e,
                    this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
                ));
        },
        _clearDate: function (e) {
            var i = t(e);
            this._selectDate(i, "");
        },
        _selectDate: function (e, i) {
            var s,
                n = t(e),
                o = this._getInst(n[0]);
            (i = null != i ? i : this._formatDate(o)),
            o.input && o.input.val(i),
                this._updateAlternate(o),
                (s = this._get(o, "onSelect")),
                s
                    ? s.apply(o.input ? o.input[0] : null, [i, o])
                    : o.input && o.input.trigger("change"),
                o.inline
                    ? this._updateDatepicker(o)
                    : (this._hideDatepicker(),
                        (this._lastInput = o.input[0]),
                    "object" != typeof o.input[0] && o.input.trigger("focus"),
                        (this._lastInput = null));
        },
        _updateAlternate: function (e) {
            var i,
                s,
                n,
                o = this._get(e, "altField");
            o &&
            ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
                (s = this._getDate(e)),
                (n = this.formatDate(i, s, this._getFormatConfig(e))),
                t(o).val(n));
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""];
        },
        iso8601Week: function (t) {
            var e,
                i = new Date(t.getTime());
            return (
                i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
                    (e = i.getTime()),
                    i.setMonth(0),
                    i.setDate(1),
                Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            );
        },
        parseDate: function (e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";
            if (((i = "object" == typeof i ? "" + i : i + ""), "" === i)) return null;
            var n,
                o,
                a,
                r,
                l = 0,
                h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c =
                    "string" != typeof h
                        ? h
                        : (new Date().getFullYear() % 100) + parseInt(h, 10),
                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                _ = -1,
                v = -1,
                b = !1,
                y = function (t) {
                    var i = e.length > n + 1 && e.charAt(n + 1) === t;
                    return i && n++, i;
                },
                w = function (t) {
                    var e = y(t),
                        s =
                            "@" === t
                                ? 14
                                : "!" === t
                                    ? 20
                                    : "y" === t && e
                                        ? 4
                                        : "o" === t
                                            ? 3
                                            : 2,
                        n = "y" === t ? s : 1,
                        o = RegExp("^\\d{" + n + "," + s + "}"),
                        a = i.substring(l).match(o);
                    if (!a) throw "Missing number at position " + l;
                    return (l += a[0].length), parseInt(a[0], 10);
                },
                k = function (e, s, n) {
                    var o = -1,
                        a = t
                            .map(y(e) ? n : s, function (t, e) {
                                return [[e, t]];
                            })
                            .sort(function (t, e) {
                                return -(t[1].length - e[1].length);
                            });
                    if (
                        (t.each(a, function (t, e) {
                            var s = e[1];
                            return i.substr(l, s.length).toLowerCase() === s.toLowerCase()
                                ? ((o = e[0]), (l += s.length), !1)
                                : void 0;
                        }),
                        -1 !== o)
                    )
                        return o + 1;
                    throw "Unknown name at position " + l;
                },
                x = function () {
                    if (i.charAt(l) !== e.charAt(n))
                        throw "Unexpected literal at position " + l;
                    l++;
                };
            for (n = 0; e.length > n; n++)
                if (b) "'" !== e.charAt(n) || y("'") ? x() : (b = !1);
                else
                    switch (e.charAt(n)) {
                        case "d":
                            _ = w("d");
                            break;
                        case "D":
                            k("D", u, d);
                            break;
                        case "o":
                            v = w("o");
                            break;
                        case "m":
                            m = w("m");
                            break;
                        case "M":
                            m = k("M", p, f);
                            break;
                        case "y":
                            g = w("y");
                            break;
                        case "@":
                            (r = new Date(w("@"))),
                                (g = r.getFullYear()),
                                (m = r.getMonth() + 1),
                                (_ = r.getDate());
                            break;
                        case "!":
                            (r = new Date((w("!") - this._ticksTo1970) / 1e4)),
                                (g = r.getFullYear()),
                                (m = r.getMonth() + 1),
                                (_ = r.getDate());
                            break;
                        case "'":
                            y("'") ? x() : (b = !0);
                            break;
                        default:
                            x();
                    }
            if (i.length > l && ((a = i.substr(l)), !/^\s+/.test(a)))
                throw "Extra/unparsed characters found in date: " + a;
            if (
                (-1 === g
                    ? (g = new Date().getFullYear())
                    : 100 > g &&
                    (g +=
                        new Date().getFullYear() -
                        (new Date().getFullYear() % 100) +
                        (c >= g ? 0 : -100)),
                v > -1)
            )
                for (m = 1, _ = v; ; ) {
                    if (((o = this._getDaysInMonth(g, m - 1)), o >= _)) break;
                    m++, (_ -= o);
                }
            if (
                ((r = this._daylightSavingAdjust(new Date(g, m - 1, _))),
                r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _)
            )
                throw "Invalid date";
            return r;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970:
            1e7 *
            60 *
            60 *
            24 *
            (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
            if (!e) return "";
            var s,
                n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function (e) {
                    var i = t.length > s + 1 && t.charAt(s + 1) === e;
                    return i && s++, i;
                },
                h = function (t, e, i) {
                    var s = "" + e;
                    if (l(t)) for (; i > s.length; ) s = "0" + s;
                    return s;
                },
                c = function (t, e, i, s) {
                    return l(t) ? s[e] : i[e];
                },
                u = "",
                d = !1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (d) "'" !== t.charAt(s) || l("'") ? (u += t.charAt(s)) : (d = !1);
                    else
                        switch (t.charAt(s)) {
                            case "d":
                                u += h("d", e.getDate(), 2);
                                break;
                            case "D":
                                u += c("D", e.getDay(), n, o);
                                break;
                            case "o":
                                u += h(
                                    "o",
                                    Math.round(
                                        (new Date(
                                                e.getFullYear(),
                                                e.getMonth(),
                                                e.getDate()
                                            ).getTime() -
                                            new Date(e.getFullYear(), 0, 0).getTime()) /
                                        864e5
                                    ),
                                    3
                                );
                                break;
                            case "m":
                                u += h("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                u += c("M", e.getMonth(), a, r);
                                break;
                            case "y":
                                u += l("y")
                                    ? e.getFullYear()
                                    : (10 > e.getFullYear() % 100 ? "0" : "") +
                                    (e.getFullYear() % 100);
                                break;
                            case "@":
                                u += e.getTime();
                                break;
                            case "!":
                                u += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? (u += "'") : (d = !0);
                                break;
                            default:
                                u += t.charAt(s);
                        }
            return u;
        },
        _possibleChars: function (t) {
            var e,
                i = "",
                s = !1,
                n = function (i) {
                    var s = t.length > e + 1 && t.charAt(e + 1) === i;
                    return s && e++, s;
                };
            for (e = 0; t.length > e; e++)
                if (s) "'" !== t.charAt(e) || n("'") ? (i += t.charAt(e)) : (s = !1);
                else
                    switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            n("'") ? (i += "'") : (s = !0);
                            break;
                        default:
                            i += t.charAt(e);
                    }
            return i;
        },
        _get: function (t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = (t.lastVal = t.input ? t.input.val() : null),
                    n = this._getDefaultDate(t),
                    o = n,
                    a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n;
                } catch (r) {
                    s = e ? "" : s;
                }
                (t.selectedDay = o.getDate()),
                    (t.drawMonth = t.selectedMonth = o.getMonth()),
                    (t.drawYear = t.selectedYear = o.getFullYear()),
                    (t.currentDay = s ? o.getDate() : 0),
                    (t.currentMonth = s ? o.getMonth() : 0),
                    (t.currentYear = s ? o.getFullYear() : 0),
                    this._adjustInstDate(t);
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(
                t,
                this._determineDate(t, this._get(t, "defaultDate"), new Date())
            );
        },
        _determineDate: function (e, i, s) {
            var n = function (t) {
                    var e = new Date();
                    return e.setDate(e.getDate() + t), e;
                },
                o = function (i) {
                    try {
                        return t.datepicker.parseDate(
                            t.datepicker._get(e, "dateFormat"),
                            i,
                            t.datepicker._getFormatConfig(e)
                        );
                    } catch (s) {}
                    for (
                        var n =
                                (i.toLowerCase().match(/^c/)
                                    ? t.datepicker._getDate(e)
                                    : null) || new Date(),
                            o = n.getFullYear(),
                            a = n.getMonth(),
                            r = n.getDate(),
                            l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                            h = l.exec(i);
                        h;

                    ) {
                        switch (h[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(h[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(h[1], 10);
                                break;
                            case "m":
                            case "M":
                                (a += parseInt(h[1], 10)),
                                    (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
                                break;
                            case "y":
                            case "Y":
                                (o += parseInt(h[1], 10)),
                                    (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
                        }
                        h = l.exec(i);
                    }
                    return new Date(o, a, r);
                },
                a =
                    null == i || "" === i
                        ? s
                        : "string" == typeof i
                            ? o(i)
                            : "number" == typeof i
                                ? isNaN(i)
                                    ? s
                                    : n(i)
                                : new Date(i.getTime());
            return (
                (a = a && "Invalid Date" == "" + a ? s : a),
                a &&
                (a.setHours(0),
                    a.setMinutes(0),
                    a.setSeconds(0),
                    a.setMilliseconds(0)),
                    this._daylightSavingAdjust(a)
            );
        },
        _daylightSavingAdjust: function (t) {
            return t
                ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
                : null;
        },
        _setDate: function (t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
            (t.selectedDay = t.currentDay = a.getDate()),
                (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
                (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
            (n === t.selectedMonth && o === t.selectedYear) ||
            i ||
            this._notifyChange(t),
                this._adjustInstDate(t),
            t.input && t.input.val(s ? "" : this._formatDate(t));
        },
        _getDate: function (t) {
            var e =
                !t.currentYear || (t.input && "" === t.input.val())
                    ? null
                    : this._daylightSavingAdjust(
                        new Date(t.currentYear, t.currentMonth, t.currentDay)
                    );
            return e;
        },
        _attachHandlers: function (e) {
            var i = this._get(e, "stepMonths"),
                s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {
                    prev: function () {
                        t.datepicker._adjustDate(s, -i, "M");
                    },
                    next: function () {
                        t.datepicker._adjustDate(s, +i, "M");
                    },
                    hide: function () {
                        t.datepicker._hideDatepicker();
                    },
                    today: function () {
                        t.datepicker._gotoToday(s);
                    },
                    selectDay: function () {
                        return (
                            t.datepicker._selectDay(
                                s,
                                +this.getAttribute("data-month"),
                                +this.getAttribute("data-year"),
                                this
                            ),
                                !1
                        );
                    },
                    selectMonth: function () {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1;
                    },
                    selectYear: function () {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1;
                    },
                };
                t(this).on(
                    this.getAttribute("data-event"),
                    e[this.getAttribute("data-handler")]
                );
            });
        },
        _generateHTML: function (t) {
            var e,
                i,
                s,
                n,
                o,
                a,
                r,
                l,
                h,
                c,
                u,
                d,
                p,
                f,
                g,
                m,
                _,
                v,
                b,
                y,
                w,
                k,
                x,
                C,
                D,
                T,
                I,
                M,
                P,
                S,
                N,
                H,
                A,
                z,
                O,
                E,
                W,
                F,
                L,
                R = new Date(),
                Y = this._daylightSavingAdjust(
                    new Date(R.getFullYear(), R.getMonth(), R.getDate())
                ),
                B = this._get(t, "isRTL"),
                j = this._get(t, "showButtonPanel"),
                q = this._get(t, "hideIfNoPrevNext"),
                K = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                X = this._get(t, "stepMonths"),
                $ = 1 !== U[0] || 1 !== U[1],
                G = this._daylightSavingAdjust(
                    t.currentDay
                        ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                        : new Date(9999, 9, 9)
                ),
                J = this._getMinMaxDate(t, "min"),
                Q = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V,
                te = t.drawYear;
            if ((0 > Z && ((Z += 12), te--), Q))
                for (
                    e = this._daylightSavingAdjust(
                        new Date(
                            Q.getFullYear(),
                            Q.getMonth() - U[0] * U[1] + 1,
                            Q.getDate()
                        )
                    ),
                        e = J && J > e ? J : e;
                    this._daylightSavingAdjust(new Date(te, Z, 1)) > e;

                )
                    Z--, 0 > Z && ((Z = 11), te--);
            for (
                t.drawMonth = Z,
                    t.drawYear = te,
                    i = this._get(t, "prevText"),
                    i = K
                        ? this.formatDate(
                            i,
                            this._daylightSavingAdjust(new Date(te, Z - X, 1)),
                            this._getFormatConfig(t)
                        )
                        : i,
                    s = this._canAdjustMonth(t, -1, te, Z)
                        ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                        i +
                        "'><span class='ui-icon ui-icon-circle-triangle-" +
                        (B ? "e" : "w") +
                        "'>" +
                        i +
                        "</span></a>"
                        : q
                            ? ""
                            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                            i +
                            "'><span class='ui-icon ui-icon-circle-triangle-" +
                            (B ? "e" : "w") +
                            "'>" +
                            i +
                            "</span></a>",
                    n = this._get(t, "nextText"),
                    n = K
                        ? this.formatDate(
                            n,
                            this._daylightSavingAdjust(new Date(te, Z + X, 1)),
                            this._getFormatConfig(t)
                        )
                        : n,
                    o = this._canAdjustMonth(t, 1, te, Z)
                        ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                        n +
                        "'><span class='ui-icon ui-icon-circle-triangle-" +
                        (B ? "w" : "e") +
                        "'>" +
                        n +
                        "</span></a>"
                        : q
                            ? ""
                            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                            n +
                            "'><span class='ui-icon ui-icon-circle-triangle-" +
                            (B ? "w" : "e") +
                            "'>" +
                            n +
                            "</span></a>",
                    a = this._get(t, "currentText"),
                    r = this._get(t, "gotoCurrent") && t.currentDay ? G : Y,
                    a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
                    l = t.inline
                        ? ""
                        : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                        this._get(t, "closeText") +
                        "</button>",
                    h = j
                        ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                        (B ? l : "") +
                        (this._isInRange(t, r)
                            ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                            a +
                            "</button>"
                            : "") +
                        (B ? "" : l) +
                        "</div>"
                        : "",
                    c = parseInt(this._get(t, "firstDay"), 10),
                    c = isNaN(c) ? 0 : c,
                    u = this._get(t, "showWeek"),
                    d = this._get(t, "dayNames"),
                    p = this._get(t, "dayNamesMin"),
                    f = this._get(t, "monthNames"),
                    g = this._get(t, "monthNamesShort"),
                    m = this._get(t, "beforeShowDay"),
                    _ = this._get(t, "showOtherMonths"),
                    v = this._get(t, "selectOtherMonths"),
                    b = this._getDefaultDate(t),
                    y = "",
                    k = 0;
                U[0] > k;
                k++
            ) {
                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (
                        ((D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay))),
                            (T = " ui-corner-all"),
                            (I = ""),
                            $)
                    ) {
                        if (((I += "<div class='ui-datepicker-group"), U[1] > 1))
                            switch (C) {
                                case 0:
                                    (I += " ui-datepicker-group-first"),
                                        (T = " ui-corner-" + (B ? "right" : "left"));
                                    break;
                                case U[1] - 1:
                                    (I += " ui-datepicker-group-last"),
                                        (T = " ui-corner-" + (B ? "left" : "right"));
                                    break;
                                default:
                                    (I += " ui-datepicker-group-middle"), (T = "");
                            }
                        I += "'>";
                    }
                    for (
                        I +=
                            "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                            T +
                            "'>" +
                            (/all|left/.test(T) && 0 === k ? (B ? o : s) : "") +
                            (/all|right/.test(T) && 0 === k ? (B ? s : o) : "") +
                            this._generateMonthYearHeader(
                                t,
                                Z,
                                te,
                                J,
                                Q,
                                k > 0 || C > 0,
                                f,
                                g
                            ) +
                            "</div><table class='ui-datepicker-calendar'><thead>" +
                            "<tr>",
                            M = u
                                ? "<th class='ui-datepicker-week-col'>" +
                                this._get(t, "weekHeader") +
                                "</th>"
                                : "",
                            w = 0;
                        7 > w;
                        w++
                    )
                        (P = (w + c) % 7),
                            (M +=
                                "<th scope='col'" +
                                ((w + c + 6) % 7 >= 5
                                    ? " class='ui-datepicker-week-end'"
                                    : "") +
                                ">" +
                                "<span title='" +
                                d[P] +
                                "'>" +
                                p[P] +
                                "</span></th>");
                    for (
                        I += M + "</tr></thead><tbody>",
                            S = this._getDaysInMonth(te, Z),
                        te === t.selectedYear &&
                        Z === t.selectedMonth &&
                        (t.selectedDay = Math.min(t.selectedDay, S)),
                            N = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7,
                            H = Math.ceil((N + S) / 7),
                            A = $ ? (this.maxRows > H ? this.maxRows : H) : H,
                            this.maxRows = A,
                            z = this._daylightSavingAdjust(new Date(te, Z, 1 - N)),
                            O = 0;
                        A > O;
                        O++
                    ) {
                        for (
                            I += "<tr>",
                                E = u
                                    ? "<td class='ui-datepicker-week-col'>" +
                                    this._get(t, "calculateWeek")(z) +
                                    "</td>"
                                    : "",
                                w = 0;
                            7 > w;
                            w++
                        )
                            (W = m ? m.apply(t.input ? t.input[0] : null, [z]) : [!0, ""]),
                                (F = z.getMonth() !== Z),
                                (L = (F && !v) || !W[0] || (J && J > z) || (Q && z > Q)),
                                (E +=
                                    "<td class='" +
                                    ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                                    (F ? " ui-datepicker-other-month" : "") +
                                    ((z.getTime() === D.getTime() &&
                                        Z === t.selectedMonth &&
                                        t._keyEvent) ||
                                    (b.getTime() === z.getTime() && b.getTime() === D.getTime())
                                        ? " " + this._dayOverClass
                                        : "") +
                                    (L
                                        ? " " + this._unselectableClass + " ui-state-disabled"
                                        : "") +
                                    (F && !_
                                        ? ""
                                        : " " +
                                        W[1] +
                                        (z.getTime() === G.getTime()
                                            ? " " + this._currentClass
                                            : "") +
                                        (z.getTime() === Y.getTime()
                                            ? " ui-datepicker-today"
                                            : "")) +
                                    "'" +
                                    ((F && !_) || !W[2]
                                        ? ""
                                        : " title='" + W[2].replace(/'/g, "&#39;") + "'") +
                                    (L
                                        ? ""
                                        : " data-handler='selectDay' data-event='click' data-month='" +
                                        z.getMonth() +
                                        "' data-year='" +
                                        z.getFullYear() +
                                        "'") +
                                    ">" +
                                    (F && !_
                                        ? "&#xa0;"
                                        : L
                                            ? "<span class='ui-state-default'>" +
                                            z.getDate() +
                                            "</span>"
                                            : "<a class='ui-state-default" +
                                            (z.getTime() === Y.getTime()
                                                ? " ui-state-highlight"
                                                : "") +
                                            (z.getTime() === G.getTime() ? " ui-state-active" : "") +
                                            (F ? " ui-priority-secondary" : "") +
                                            "' href='#'>" +
                                            z.getDate() +
                                            "</a>") +
                                    "</td>"),
                                z.setDate(z.getDate() + 1),
                                (z = this._daylightSavingAdjust(z));
                        I += E + "</tr>";
                    }
                    Z++,
                    Z > 11 && ((Z = 0), te++),
                        (I +=
                            "</tbody></table>" +
                            ($
                                ? "</div>" +
                                (U[0] > 0 && C === U[1] - 1
                                    ? "<div class='ui-datepicker-row-break'></div>"
                                    : "")
                                : "")),
                        (x += I);
                }
                y += x;
            }
            return (y += h), (t._keyEvent = !1), y;
        },
        _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
            var l,
                h,
                c,
                u,
                d,
                p,
                f,
                g,
                m = this._get(t, "changeMonth"),
                _ = this._get(t, "changeYear"),
                v = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = "";
            if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (
                    l = s && s.getFullYear() === i,
                        h = n && n.getFullYear() === i,
                        y +=
                            "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                        c = 0;
                    12 > c;
                    c++
                )
                    (!l || c >= s.getMonth()) &&
                    (!h || n.getMonth() >= c) &&
                    (y +=
                        "<option value='" +
                        c +
                        "'" +
                        (c === e ? " selected='selected'" : "") +
                        ">" +
                        r[c] +
                        "</option>");
                y += "</select>";
            }
            if ((v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml))
                if (((t.yearshtml = ""), o || !_))
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (
                        u = this._get(t, "yearRange").split(":"),
                            d = new Date().getFullYear(),
                            p = function (t) {
                                var e = t.match(/c[+\-].*/)
                                    ? i + parseInt(t.substring(1), 10)
                                    : t.match(/[+\-].*/)
                                        ? d + parseInt(t, 10)
                                        : parseInt(t, 10);
                                return isNaN(e) ? d : e;
                            },
                            f = p(u[0]),
                            g = Math.max(f, p(u[1] || "")),
                            f = s ? Math.max(f, s.getFullYear()) : f,
                            g = n ? Math.min(g, n.getFullYear()) : g,
                            t.yearshtml +=
                                "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                        g >= f;
                        f++
                    )
                        t.yearshtml +=
                            "<option value='" +
                            f +
                            "'" +
                            (f === i ? " selected='selected'" : "") +
                            ">" +
                            f +
                            "</option>";
                    (t.yearshtml += "</select>"),
                        (b += t.yearshtml),
                        (t.yearshtml = null);
                }
            return (
                (b += this._get(t, "yearSuffix")),
                v && (b += (!o && m && _ ? "" : "&#xa0;") + y),
                    (b += "</div>")
            );
        },
        _adjustInstDate: function (t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0),
                n = t.selectedMonth + ("M" === i ? e : 0),
                o =
                    Math.min(t.selectedDay, this._getDaysInMonth(s, n)) +
                    ("D" === i ? e : 0),
                a = this._restrictMinMax(
                    t,
                    this._daylightSavingAdjust(new Date(s, n, o))
                );
            (t.selectedDay = a.getDate()),
                (t.drawMonth = t.selectedMonth = a.getMonth()),
                (t.drawYear = t.selectedYear = a.getFullYear()),
            ("M" === i || "Y" === i) && this._notifyChange(t);
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && i > e ? i : e;
            return s && n > s ? s : n;
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e &&
            e.apply(t.input ? t.input[0] : null, [
                t.selectedYear,
                t.selectedMonth + 1,
                t,
            ]);
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function (t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(
                    new Date(i, s + (0 > e ? e : n[0] * n[1]), 1)
                );
            return (
                0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
                    this._isInRange(t, o)
            );
        },
        _isInRange: function (t, e) {
            var i,
                s,
                n = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                l = this._get(t, "yearRange");
            return (
                l &&
                ((i = l.split(":")),
                    (s = new Date().getFullYear()),
                    (a = parseInt(i[0], 10)),
                    (r = parseInt(i[1], 10)),
                i[0].match(/[+\-].*/) && (a += s),
                i[1].match(/[+\-].*/) && (r += s)),
                (!n || e.getTime() >= n.getTime()) &&
                (!o || e.getTime() <= o.getTime()) &&
                (!a || e.getFullYear() >= a) &&
                (!r || r >= e.getFullYear())
            );
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return (
                (e =
                    "string" != typeof e
                        ? e
                        : (new Date().getFullYear() % 100) + parseInt(e, 10)),
                    {
                        shortYearCutoff: e,
                        dayNamesShort: this._get(t, "dayNamesShort"),
                        dayNames: this._get(t, "dayNames"),
                        monthNamesShort: this._get(t, "monthNamesShort"),
                        monthNames: this._get(t, "monthNames"),
                    }
            );
        },
        _formatDate: function (t, e, i, s) {
            e ||
            ((t.currentDay = t.selectedDay),
                (t.currentMonth = t.selectedMonth),
                (t.currentYear = t.selectedYear));
            var n = e
                ? "object" == typeof e
                    ? e
                    : this._daylightSavingAdjust(new Date(s, i, e))
                : this._daylightSavingAdjust(
                    new Date(t.currentYear, t.currentMonth, t.currentDay)
                );
            return this.formatDate(
                this._get(t, "dateFormat"),
                n,
                this._getFormatConfig(t)
            );
        },
    }),
        (t.fn.datepicker = function (e) {
            if (!this.length) return this;
            t.datepicker.initialized ||
            (t(document).on("mousedown", t.datepicker._checkExternalClick),
                (t.datepicker.initialized = !0)),
            0 === t("#" + t.datepicker._mainDivId).length &&
            t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e ||
            ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
                ? "option" === e &&
                2 === arguments.length &&
                "string" == typeof arguments[1]
                    ? t.datepicker["_" + e + "Datepicker"].apply(
                        t.datepicker,
                        [this[0]].concat(i)
                    )
                    : this.each(function () {
                        "string" == typeof e
                            ? t.datepicker["_" + e + "Datepicker"].apply(
                                t.datepicker,
                                [this].concat(i)
                            )
                            : t.datepicker._attachDatepicker(this, e);
                    })
                : t.datepicker["_" + e + "Datepicker"].apply(
                    t.datepicker,
                    [this[0]].concat(i)
                );
        }),
        (t.datepicker = new s()),
        (t.datepicker.initialized = !1),
        (t.datepicker.uuid = new Date().getTime()),
        (t.datepicker.version = "1.12.1"),
        t.datepicker,
        t.widget("ui.selectmenu", [
            t.ui.formResetMixin,
            {
                version: "1.12.1",
                defaultElement: "<select>",
                options: {
                    appendTo: null,
                    classes: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all",
                    },
                    disabled: null,
                    icons: { button: "ui-icon-triangle-1-s" },
                    position: { my: "left top", at: "left bottom", collision: "none" },
                    width: !1,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    select: null,
                },
                _create: function () {
                    var e = this.element.uniqueId().attr("id");
                    (this.ids = { element: e, button: e + "-button", menu: e + "-menu" }),
                        this._drawButton(),
                        this._drawMenu(),
                        this._bindFormResetHandler(),
                        (this._rendered = !1),
                        (this.menuItems = t());
                },
                _drawButton: function () {
                    var e,
                        i = this,
                        s = this._parseOption(
                            this.element.find("option:selected"),
                            this.element[0].selectedIndex
                        );
                    (this.labels = this.element.labels().attr("for", this.ids.button)),
                        this._on(this.labels, {
                            click: function (t) {
                                this.button.focus(), t.preventDefault();
                            },
                        }),
                        this.element.hide(),
                        (this.button = t("<span>", {
                            tabindex: this.options.disabled ? -1 : 0,
                            id: this.ids.button,
                            role: "combobox",
                            "aria-expanded": "false",
                            "aria-autocomplete": "list",
                            "aria-owns": this.ids.menu,
                            "aria-haspopup": "true",
                            title: this.element.attr("title"),
                        }).insertAfter(this.element)),
                        this._addClass(
                            this.button,
                            "ui-selectmenu-button ui-selectmenu-button-closed",
                            "ui-button ui-widget"
                        ),
                        (e = t("<span>").appendTo(this.button)),
                        this._addClass(
                            e,
                            "ui-selectmenu-icon",
                            "ui-icon " + this.options.icons.button
                        ),
                        (this.buttonItem = this._renderButtonItem(s).appendTo(this.button)),
                    this.options.width !== !1 && this._resizeButton(),
                        this._on(this.button, this._buttonEvents),
                        this.button.one("focusin", function () {
                            i._rendered || i._refreshMenu();
                        });
                },
                _drawMenu: function () {
                    var e = this;
                    (this.menu = t("<ul>", {
                        "aria-hidden": "true",
                        "aria-labelledby": this.ids.button,
                        id: this.ids.menu,
                    })),
                        (this.menuWrap = t("<div>").append(this.menu)),
                        this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
                        this.menuWrap.appendTo(this._appendTo()),
                        (this.menuInstance = this.menu
                            .menu({
                                classes: { "ui-menu": "ui-corner-bottom" },
                                role: "listbox",
                                select: function (t, i) {
                                    t.preventDefault(),
                                        e._setSelection(),
                                        e._select(i.item.data("ui-selectmenu-item"), t);
                                },
                                focus: function (t, i) {
                                    var s = i.item.data("ui-selectmenu-item");
                                    null != e.focusIndex &&
                                    s.index !== e.focusIndex &&
                                    (e._trigger("focus", t, { item: s }),
                                    e.isOpen || e._select(s, t)),
                                        (e.focusIndex = s.index),
                                        e.button.attr(
                                            "aria-activedescendant",
                                            e.menuItems.eq(s.index).attr("id")
                                        );
                                },
                            })
                            .menu("instance")),
                        this.menuInstance._off(this.menu, "mouseleave"),
                        (this.menuInstance._closeOnDocumentClick = function () {
                            return !1;
                        }),
                        (this.menuInstance._isDivider = function () {
                            return !1;
                        });
                },
                refresh: function () {
                    this._refreshMenu(),
                        this.buttonItem.replaceWith(
                            (this.buttonItem = this._renderButtonItem(
                                this._getSelectedItem().data("ui-selectmenu-item") || {}
                            ))
                        ),
                    null === this.options.width && this._resizeButton();
                },
                _refreshMenu: function () {
                    var t,
                        e = this.element.find("option");
                    this.menu.empty(),
                        this._parseOptions(e),
                        this._renderMenu(this.menu, this.items),
                        this.menuInstance.refresh(),
                        (this.menuItems = this.menu
                            .find("li")
                            .not(".ui-selectmenu-optgroup")
                            .find(".ui-menu-item-wrapper")),
                        (this._rendered = !0),
                    e.length &&
                    ((t = this._getSelectedItem()),
                        this.menuInstance.focus(null, t),
                        this._setAria(t.data("ui-selectmenu-item")),
                        this._setOption("disabled", this.element.prop("disabled")));
                },
                open: function (t) {
                    this.options.disabled ||
                    (this._rendered
                        ? (this._removeClass(
                            this.menu.find(".ui-state-active"),
                            null,
                            "ui-state-active"
                        ),
                            this.menuInstance.focus(null, this._getSelectedItem()))
                        : this._refreshMenu(),
                    this.menuItems.length &&
                    ((this.isOpen = !0),
                        this._toggleAttr(),
                        this._resizeMenu(),
                        this._position(),
                        this._on(this.document, this._documentClick),
                        this._trigger("open", t)));
                },
                _position: function () {
                    this.menuWrap.position(
                        t.extend({ of: this.button }, this.options.position)
                    );
                },
                close: function (t) {
                    this.isOpen &&
                    ((this.isOpen = !1),
                        this._toggleAttr(),
                        (this.range = null),
                        this._off(this.document),
                        this._trigger("close", t));
                },
                widget: function () {
                    return this.button;
                },
                menuWidget: function () {
                    return this.menu;
                },
                _renderButtonItem: function (e) {
                    var i = t("<span>");
                    return (
                        this._setText(i, e.label),
                            this._addClass(i, "ui-selectmenu-text"),
                            i
                    );
                },
                _renderMenu: function (e, i) {
                    var s = this,
                        n = "";
                    t.each(i, function (i, o) {
                        var a;
                        o.optgroup !== n &&
                        ((a = t("<li>", { text: o.optgroup })),
                            s._addClass(
                                a,
                                "ui-selectmenu-optgroup",
                                "ui-menu-divider" +
                                (o.element.parent("optgroup").prop("disabled")
                                    ? " ui-state-disabled"
                                    : "")
                            ),
                            a.appendTo(e),
                            (n = o.optgroup)),
                            s._renderItemData(e, o);
                    });
                },
                _renderItemData: function (t, e) {
                    return this._renderItem(t, e).data("ui-selectmenu-item", e);
                },
                _renderItem: function (e, i) {
                    var s = t("<li>"),
                        n = t("<div>", { title: i.element.attr("title") });
                    return (
                        i.disabled && this._addClass(s, null, "ui-state-disabled"),
                            this._setText(n, i.label),
                            s.append(n).appendTo(e)
                    );
                },
                _setText: function (t, e) {
                    e ? t.text(e) : t.html("&#160;");
                },
                _move: function (t, e) {
                    var i,
                        s,
                        n = ".ui-menu-item";
                    this.isOpen
                        ? (i = this.menuItems.eq(this.focusIndex).parent("li"))
                        : ((i = this.menuItems
                            .eq(this.element[0].selectedIndex)
                            .parent("li")),
                            (n += ":not(.ui-state-disabled)")),
                        (s =
                            "first" === t || "last" === t
                                ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1)
                                : i[t + "All"](n).eq(0)),
                    s.length && this.menuInstance.focus(e, s);
                },
                _getSelectedItem: function () {
                    return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
                },
                _toggle: function (t) {
                    this[this.isOpen ? "close" : "open"](t);
                },
                _setSelection: function () {
                    var t;
                    this.range &&
                    (window.getSelection
                        ? ((t = window.getSelection()),
                            t.removeAllRanges(),
                            t.addRange(this.range))
                        : this.range.select(),
                        this.button.focus());
                },
                _documentClick: {
                    mousedown: function (e) {
                        this.isOpen &&
                        (t(e.target).closest(
                                ".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)
                            ).length ||
                            this.close(e));
                    },
                },
                _buttonEvents: {
                    mousedown: function () {
                        var t;
                        window.getSelection
                            ? ((t = window.getSelection()),
                            t.rangeCount && (this.range = t.getRangeAt(0)))
                            : (this.range = document.selection.createRange());
                    },
                    click: function (t) {
                        this._setSelection(), this._toggle(t);
                    },
                    keydown: function (e) {
                        var i = !0;
                        switch (e.keyCode) {
                            case t.ui.keyCode.TAB:
                            case t.ui.keyCode.ESCAPE:
                                this.close(e), (i = !1);
                                break;
                            case t.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(e);
                                break;
                            case t.ui.keyCode.UP:
                                e.altKey ? this._toggle(e) : this._move("prev", e);
                                break;
                            case t.ui.keyCode.DOWN:
                                e.altKey ? this._toggle(e) : this._move("next", e);
                                break;
                            case t.ui.keyCode.SPACE:
                                this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                                break;
                            case t.ui.keyCode.LEFT:
                                this._move("prev", e);
                                break;
                            case t.ui.keyCode.RIGHT:
                                this._move("next", e);
                                break;
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.PAGE_UP:
                                this._move("first", e);
                                break;
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_DOWN:
                                this._move("last", e);
                                break;
                            default:
                                this.menu.trigger(e), (i = !1);
                        }
                        i && e.preventDefault();
                    },
                },
                _selectFocusedItem: function (t) {
                    var e = this.menuItems.eq(this.focusIndex).parent("li");
                    e.hasClass("ui-state-disabled") ||
                    this._select(e.data("ui-selectmenu-item"), t);
                },
                _select: function (t, e) {
                    var i = this.element[0].selectedIndex;
                    (this.element[0].selectedIndex = t.index),
                        this.buttonItem.replaceWith(
                            (this.buttonItem = this._renderButtonItem(t))
                        ),
                        this._setAria(t),
                        this._trigger("select", e, { item: t }),
                    t.index !== i && this._trigger("change", e, { item: t }),
                        this.close(e);
                },
                _setAria: function (t) {
                    var e = this.menuItems.eq(t.index).attr("id");
                    this.button.attr({
                        "aria-labelledby": e,
                        "aria-activedescendant": e,
                    }),
                        this.menu.attr("aria-activedescendant", e);
                },
                _setOption: function (t, e) {
                    if ("icons" === t) {
                        var i = this.button.find("span.ui-icon");
                        this._removeClass(i, null, this.options.icons.button)._addClass(
                            i,
                            null,
                            e.button
                        );
                    }
                    this._super(t, e),
                    "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
                    "width" === t && this._resizeButton();
                },
                _setOptionDisabled: function (t) {
                    this._super(t),
                        this.menuInstance.option("disabled", t),
                        this.button.attr("aria-disabled", t),
                        this._toggleClass(this.button, null, "ui-state-disabled", t),
                        this.element.prop("disabled", t),
                        t
                            ? (this.button.attr("tabindex", -1), this.close())
                            : this.button.attr("tabindex", 0);
                },
                _appendTo: function () {
                    var e = this.options.appendTo;
                    return (
                        e &&
                        (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
                        (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
                        e.length || (e = this.document[0].body),
                            e
                    );
                },
                _toggleAttr: function () {
                    this.button.attr("aria-expanded", this.isOpen),
                        this._removeClass(
                            this.button,
                            "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open")
                        )
                            ._addClass(
                                this.button,
                                "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed")
                            )
                            ._toggleClass(
                                this.menuWrap,
                                "ui-selectmenu-open",
                                null,
                                this.isOpen
                            ),
                        this.menu.attr("aria-hidden", !this.isOpen);
                },
                _resizeButton: function () {
                    var t = this.options.width;
                    return t === !1
                        ? (this.button.css("width", ""), void 0)
                        : (null === t &&
                        ((t = this.element.show().outerWidth()), this.element.hide()),
                            this.button.outerWidth(t),
                            void 0);
                },
                _resizeMenu: function () {
                    this.menu.outerWidth(
                        Math.max(
                            this.button.outerWidth(),
                            this.menu.width("").outerWidth() + 1
                        )
                    );
                },
                _getCreateOptions: function () {
                    var t = this._super();
                    return (t.disabled = this.element.prop("disabled")), t;
                },
                _parseOptions: function (e) {
                    var i = this,
                        s = [];
                    e.each(function (e, n) {
                        s.push(i._parseOption(t(n), e));
                    }),
                        (this.items = s);
                },
                _parseOption: function (t, e) {
                    var i = t.parent("optgroup");
                    return {
                        element: t,
                        index: e,
                        value: t.val(),
                        label: t.text(),
                        optgroup: i.attr("label") || "",
                        disabled: i.prop("disabled") || t.prop("disabled"),
                    };
                },
                _destroy: function () {
                    this._unbindFormResetHandler(),
                        this.menuWrap.remove(),
                        this.button.remove(),
                        this.element.show(),
                        this.element.removeUniqueId(),
                        this.labels.attr("for", this.ids.element);
                },
            },
        ]),
        t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header",
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null,
            },
            numPages: 5,
            _create: function () {
                (this._keySliding = !1),
                    (this._mouseSliding = !1),
                    (this._animateOff = !0),
                    (this._handleIndex = null),
                    this._detectOrientation(),
                    this._mouseInit(),
                    this._calculateNewMax(),
                    this._addClass(
                        "ui-slider ui-slider-" + this.orientation,
                        "ui-widget ui-widget-content"
                    ),
                    this._refresh(),
                    (this._animateOff = !1);
            },
            _refresh: function () {
                this._createRange(),
                    this._createHandles(),
                    this._setupEvents(),
                    this._refreshValue();
            },
            _createHandles: function () {
                var e,
                    i,
                    s = this.options,
                    n = this.element.find(".ui-slider-handle"),
                    o = "<span tabindex='0'></span>",
                    a = [];
                for (
                    i = (s.values && s.values.length) || 1,
                    n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
                        e = n.length;
                    i > e;
                    e++
                )
                    a.push(o);
                (this.handles = n.add(t(a.join("")).appendTo(this.element))),
                    this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
                    (this.handle = this.handles.eq(0)),
                    this.handles.each(function (e) {
                        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
                    });
            },
            _createRange: function () {
                var e = this.options;
                e.range
                    ? (e.range === !0 &&
                    (e.values
                        ? e.values.length && 2 !== e.values.length
                            ? (e.values = [e.values[0], e.values[0]])
                            : t.isArray(e.values) && (e.values = e.values.slice(0))
                        : (e.values = [this._valueMin(), this._valueMin()])),
                        this.range && this.range.length
                            ? (this._removeClass(
                                this.range,
                                "ui-slider-range-min ui-slider-range-max"
                            ),
                                this.range.css({ left: "", bottom: "" }))
                            : ((this.range = t("<div>").appendTo(this.element)),
                                this._addClass(this.range, "ui-slider-range")),
                    ("min" === e.range || "max" === e.range) &&
                    this._addClass(this.range, "ui-slider-range-" + e.range))
                    : (this.range && this.range.remove(), (this.range = null));
            },
            _setupEvents: function () {
                this._off(this.handles),
                    this._on(this.handles, this._handleEvents),
                    this._hoverable(this.handles),
                    this._focusable(this.handles);
            },
            _destroy: function () {
                this.handles.remove(),
                this.range && this.range.remove(),
                    this._mouseDestroy();
            },
            _mouseCapture: function (e) {
                var i,
                    s,
                    n,
                    o,
                    a,
                    r,
                    l,
                    h,
                    c = this,
                    u = this.options;
                return u.disabled
                    ? !1
                    : ((this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                    }),
                        (this.elementOffset = this.element.offset()),
                        (i = { x: e.pageX, y: e.pageY }),
                        (s = this._normValueFromMouse(i)),
                        (n = this._valueMax() - this._valueMin() + 1),
                        this.handles.each(function (e) {
                            var i = Math.abs(s - c.values(e));
                            (n > i ||
                                (n === i &&
                                    (e === c._lastChangedValue || c.values(e) === u.min))) &&
                            ((n = i), (o = t(this)), (a = e));
                        }),
                        (r = this._start(e, a)),
                        r === !1
                            ? !1
                            : ((this._mouseSliding = !0),
                                (this._handleIndex = a),
                                this._addClass(o, null, "ui-state-active"),
                                o.trigger("focus"),
                                (l = o.offset()),
                                (h = !t(e.target).parents().addBack().is(".ui-slider-handle")),
                                (this._clickOffset = h
                                    ? { left: 0, top: 0 }
                                    : {
                                        left: e.pageX - l.left - o.width() / 2,
                                        top:
                                            e.pageY -
                                            l.top -
                                            o.height() / 2 -
                                            (parseInt(o.css("borderTopWidth"), 10) || 0) -
                                            (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                                            (parseInt(o.css("marginTop"), 10) || 0),
                                    }),
                            this.handles.hasClass("ui-state-hover") || this._slide(e, a, s),
                                (this._animateOff = !0),
                                !0));
            },
            _mouseStart: function () {
                return !0;
            },
            _mouseDrag: function (t) {
                var e = { x: t.pageX, y: t.pageY },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1;
            },
            _mouseStop: function (t) {
                return (
                    this._removeClass(this.handles, null, "ui-state-active"),
                        (this._mouseSliding = !1),
                        this._stop(t, this._handleIndex),
                        this._change(t, this._handleIndex),
                        (this._handleIndex = null),
                        (this._clickOffset = null),
                        (this._animateOff = !1),
                        !1
                );
            },
            _detectOrientation: function () {
                this.orientation =
                    "vertical" === this.options.orientation ? "vertical" : "horizontal";
            },
            _normValueFromMouse: function (t) {
                var e, i, s, n, o;
                return (
                    "horizontal" === this.orientation
                        ? ((e = this.elementSize.width),
                            (i =
                                t.x -
                                this.elementOffset.left -
                                (this._clickOffset ? this._clickOffset.left : 0)))
                        : ((e = this.elementSize.height),
                            (i =
                                t.y -
                                this.elementOffset.top -
                                (this._clickOffset ? this._clickOffset.top : 0))),
                        (s = i / e),
                    s > 1 && (s = 1),
                    0 > s && (s = 0),
                    "vertical" === this.orientation && (s = 1 - s),
                        (n = this._valueMax() - this._valueMin()),
                        (o = this._valueMin() + s * n),
                        this._trimAlignValue(o)
                );
            },
            _uiHash: function (t, e, i) {
                var s = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value(),
                };
                return (
                    this._hasMultipleValues() &&
                    ((s.value = void 0 !== e ? e : this.values(t)),
                        (s.values = i || this.values())),
                        s
                );
            },
            _hasMultipleValues: function () {
                return this.options.values && this.options.values.length;
            },
            _start: function (t, e) {
                return this._trigger("start", t, this._uiHash(e));
            },
            _slide: function (t, e, i) {
                var s,
                    n,
                    o = this.value(),
                    a = this.values();
                this._hasMultipleValues() &&
                ((n = this.values(e ? 0 : 1)),
                    (o = this.values(e)),
                2 === this.options.values.length &&
                this.options.range === !0 &&
                (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
                    (a[e] = i)),
                i !== o &&
                ((s = this._trigger("slide", t, this._uiHash(e, i, a))),
                s !== !1 &&
                (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
            },
            _stop: function (t, e) {
                this._trigger("stop", t, this._uiHash(e));
            },
            _change: function (t, e) {
                this._keySliding ||
                this._mouseSliding ||
                ((this._lastChangedValue = e),
                    this._trigger("change", t, this._uiHash(e)));
            },
            value: function (t) {
                return arguments.length
                    ? ((this.options.value = this._trimAlignValue(t)),
                        this._refreshValue(),
                        this._change(null, 0),
                        void 0)
                    : this._value();
            },
            values: function (e, i) {
                var s, n, o;
                if (arguments.length > 1)
                    return (
                        (this.options.values[e] = this._trimAlignValue(i)),
                            this._refreshValue(),
                            this._change(null, e),
                            void 0
                    );
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0]))
                    return this._hasMultipleValues() ? this._values(e) : this.value();
                for (
                    s = this.options.values, n = arguments[0], o = 0;
                    s.length > o;
                    o += 1
                )
                    (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
                this._refreshValue();
            },
            _setOption: function (e, i) {
                var s,
                    n = 0;
                switch (
                    ("range" === e &&
                    this.options.range === !0 &&
                    ("min" === i
                        ? ((this.options.value = this._values(0)),
                            (this.options.values = null))
                        : "max" === i &&
                        ((this.options.value = this._values(
                            this.options.values.length - 1
                        )),
                            (this.options.values = null))),
                    t.isArray(this.options.values) && (n = this.options.values.length),
                        this._super(e, i),
                        e)
                    ) {
                    case "orientation":
                        this._detectOrientation(),
                            this._removeClass(
                                "ui-slider-horizontal ui-slider-vertical"
                            )._addClass("ui-slider-" + this.orientation),
                            this._refreshValue(),
                        this.options.range && this._refreshRange(i),
                            this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        (this._animateOff = !0),
                            this._refreshValue(),
                            this._change(null, 0),
                            (this._animateOff = !1);
                        break;
                    case "values":
                        for (
                            this._animateOff = !0, this._refreshValue(), s = n - 1;
                            s >= 0;
                            s--
                        )
                            this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        (this._animateOff = !0),
                            this._calculateNewMax(),
                            this._refreshValue(),
                            (this._animateOff = !1);
                        break;
                    case "range":
                        (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
                }
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
            },
            _value: function () {
                var t = this.options.value;
                return (t = this._trimAlignValue(t));
            },
            _values: function (t) {
                var e, i, s;
                if (arguments.length)
                    return (e = this.options.values[t]), (e = this._trimAlignValue(e));
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
                        i[s] = this._trimAlignValue(i[s]);
                    return i;
                }
                return [];
            },
            _trimAlignValue: function (t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    s = t - i;
                return (
                    2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
                        parseFloat(s.toFixed(5))
                );
            },
            _calculateNewMax: function () {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step,
                    s = Math.round((t - e) / i) * i;
                (t = s + e),
                t > this.options.max && (t -= i),
                    (this.max = parseFloat(t.toFixed(this._precision())));
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return (
                    null !== this.options.min &&
                    (t = Math.max(t, this._precisionOf(this.options.min))),
                        t
                );
            },
            _precisionOf: function (t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1;
            },
            _valueMin: function () {
                return this.options.min;
            },
            _valueMax: function () {
                return this.max;
            },
            _refreshRange: function (t) {
                "vertical" === t && this.range.css({ width: "", left: "" }),
                "horizontal" === t && this.range.css({ height: "", bottom: "" });
            },
            _refreshValue: function () {
                var e,
                    i,
                    s,
                    n,
                    o,
                    a = this.options.range,
                    r = this.options,
                    l = this,
                    h = this._animateOff ? !1 : r.animate,
                    c = {};
                this._hasMultipleValues()
                    ? this.handles.each(function (s) {
                        (i =
                            100 *
                            ((l.values(s) - l._valueMin()) /
                                (l._valueMax() - l._valueMin()))),
                            (c["horizontal" === l.orientation ? "left" : "bottom"] =
                                i + "%"),
                            t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate),
                        l.options.range === !0 &&
                        ("horizontal" === l.orientation
                            ? (0 === s &&
                            l.range
                                .stop(1, 1)
                                [h ? "animate" : "css"]({ left: i + "%" }, r.animate),
                            1 === s &&
                            l.range[h ? "animate" : "css"](
                                { width: i - e + "%" },
                                { queue: !1, duration: r.animate }
                            ))
                            : (0 === s &&
                            l.range
                                .stop(1, 1)
                                [h ? "animate" : "css"](
                                { bottom: i + "%" },
                                r.animate
                            ),
                            1 === s &&
                            l.range[h ? "animate" : "css"](
                                { height: i - e + "%" },
                                { queue: !1, duration: r.animate }
                            ))),
                            (e = i);
                    })
                    : ((s = this.value()),
                        (n = this._valueMin()),
                        (o = this._valueMax()),
                        (i = o !== n ? 100 * ((s - n) / (o - n)) : 0),
                        (c["horizontal" === this.orientation ? "left" : "bottom"] =
                            i + "%"),
                        this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate),
                    "min" === a &&
                    "horizontal" === this.orientation &&
                    this.range
                        .stop(1, 1)
                        [h ? "animate" : "css"]({ width: i + "%" }, r.animate),
                    "max" === a &&
                    "horizontal" === this.orientation &&
                    this.range
                        .stop(1, 1)
                        [h ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate),
                    "min" === a &&
                    "vertical" === this.orientation &&
                    this.range
                        .stop(1, 1)
                        [h ? "animate" : "css"]({ height: i + "%" }, r.animate),
                    "max" === a &&
                    "vertical" === this.orientation &&
                    this.range
                        .stop(1, 1)
                        [h ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate));
            },
            _handleEvents: {
                keydown: function (e) {
                    var i,
                        s,
                        n,
                        o,
                        a = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (
                                (e.preventDefault(),
                                !this._keySliding &&
                                ((this._keySliding = !0),
                                    this._addClass(t(e.target), null, "ui-state-active"),
                                    (i = this._start(e, a)),
                                i === !1))
                            )
                                return;
                    }
                    switch (
                        ((o = this.options.step),
                            (s = n = this._hasMultipleValues() ? this.values(a) : this.value()),
                            e.keyCode)
                        ) {
                        case t.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(
                                s + (this._valueMax() - this._valueMin()) / this.numPages
                            );
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(
                                s - (this._valueMax() - this._valueMin()) / this.numPages
                            );
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (s === this._valueMax()) return;
                            n = this._trimAlignValue(s + o);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (s === this._valueMin()) return;
                            n = this._trimAlignValue(s - o);
                    }
                    this._slide(e, a, n);
                },
                keyup: function (e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding &&
                    ((this._keySliding = !1),
                        this._stop(e, i),
                        this._change(e, i),
                        this._removeClass(t(e.target), null, "ui-state-active"));
                },
            },
        });
    var d = "ui-effects-",
        p = "ui-effects-style",
        f = "ui-effects-animated",
        g = t;
    (t.effects = { effect: {} }),
        (function (t, e) {
            function i(t, e, i) {
                var s = u[e.type] || {};
                return null == t
                    ? i || !e.def
                        ? null
                        : e.def
                    : ((t = s.floor ? ~~t : parseFloat(t)),
                        isNaN(t)
                            ? e.def
                            : s.mod
                                ? (t + s.mod) % s.mod
                                : 0 > t
                                    ? 0
                                    : t > s.max
                                        ? s.max
                                        : t);
            }
            function s(i) {
                var s = h(),
                    n = (s._rgba = []);
                return (
                    (i = i.toLowerCase()),
                        f(l, function (t, o) {
                            var a,
                                r = o.re.exec(i),
                                l = r && o.parse(r),
                                h = o.space || "rgba";
                            return l
                                ? ((a = s[h](l)),
                                    (s[c[h].cache] = a[c[h].cache]),
                                    (n = s._rgba = a._rgba),
                                    !1)
                                : e;
                        }),
                        n.length
                            ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s)
                            : o[i]
                );
            }
            function n(t, e, i) {
                return (
                    (i = (i + 1) % 1),
                        1 > 6 * i
                            ? t + 6 * (e - t) * i
                            : 1 > 2 * i
                                ? e
                                : 2 > 3 * i
                                    ? t + 6 * (e - t) * (2 / 3 - i)
                                    : t
                );
            }
            var o,
                a =
                    "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [
                    {
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (t) {
                            return [t[1], t[2], t[3], t[4]];
                        },
                    },
                    {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
                        },
                    },
                    {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function (t) {
                            return [
                                parseInt(t[1], 16),
                                parseInt(t[2], 16),
                                parseInt(t[3], 16),
                            ];
                        },
                    },
                    {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function (t) {
                            return [
                                parseInt(t[1] + t[1], 16),
                                parseInt(t[2] + t[2], 16),
                                parseInt(t[3] + t[3], 16),
                            ];
                        },
                    },
                    {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function (t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]];
                        },
                    },
                ],
                h = (t.Color = function (e, i, s, n) {
                    return new t.Color.fn.parse(e, i, s, n);
                }),
                c = {
                    rgba: {
                        props: {
                            red: { idx: 0, type: "byte" },
                            green: { idx: 1, type: "byte" },
                            blue: { idx: 2, type: "byte" },
                        },
                    },
                    hsla: {
                        props: {
                            hue: { idx: 0, type: "degrees" },
                            saturation: { idx: 1, type: "percent" },
                            lightness: { idx: 2, type: "percent" },
                        },
                    },
                },
                u = {
                    byte: { floor: !0, max: 255 },
                    percent: { max: 1 },
                    degrees: { mod: 360, floor: !0 },
                },
                d = (h.support = {}),
                p = t("<p>")[0],
                f = t.each;
            (p.style.cssText = "background-color:rgba(1,1,1,.5)"),
                (d.rgba = p.style.backgroundColor.indexOf("rgba") > -1),
                f(c, function (t, e) {
                    (e.cache = "_" + t),
                        (e.props.alpha = { idx: 3, type: "percent", def: 1 });
                }),
                (h.fn = t.extend(h.prototype, {
                    parse: function (n, a, r, l) {
                        if (n === e) return (this._rgba = [null, null, null, null]), this;
                        (n.jquery || n.nodeType) && ((n = t(n).css(a)), (a = e));
                        var u = this,
                            d = t.type(n),
                            p = (this._rgba = []);
                        return (
                            a !== e && ((n = [n, a, r, l]), (d = "array")),
                                "string" === d
                                    ? this.parse(s(n) || o._default)
                                    : "array" === d
                                        ? (f(c.rgba.props, function (t, e) {
                                            p[e.idx] = i(n[e.idx], e);
                                        }),
                                            this)
                                        : "object" === d
                                            ? (n instanceof h
                                                ? f(c, function (t, e) {
                                                    n[e.cache] && (u[e.cache] = n[e.cache].slice());
                                                })
                                                : f(c, function (e, s) {
                                                    var o = s.cache;
                                                    f(s.props, function (t, e) {
                                                        if (!u[o] && s.to) {
                                                            if ("alpha" === t || null == n[t]) return;
                                                            u[o] = s.to(u._rgba);
                                                        }
                                                        u[o][e.idx] = i(n[t], e, !0);
                                                    }),
                                                    u[o] &&
                                                    0 > t.inArray(null, u[o].slice(0, 3)) &&
                                                    ((u[o][3] = 1), s.from && (u._rgba = s.from(u[o])));
                                                }),
                                                this)
                                            : e
                        );
                    },
                    is: function (t) {
                        var i = h(t),
                            s = !0,
                            n = this;
                        return (
                            f(c, function (t, o) {
                                var a,
                                    r = i[o.cache];
                                return (
                                    r &&
                                    ((a = n[o.cache] || (o.to && o.to(n._rgba)) || []),
                                        f(o.props, function (t, i) {
                                            return null != r[i.idx] ? (s = r[i.idx] === a[i.idx]) : e;
                                        })),
                                        s
                                );
                            }),
                                s
                        );
                    },
                    _space: function () {
                        var t = [],
                            e = this;
                        return (
                            f(c, function (i, s) {
                                e[s.cache] && t.push(i);
                            }),
                                t.pop()
                        );
                    },
                    transition: function (t, e) {
                        var s = h(t),
                            n = s._space(),
                            o = c[n],
                            a = 0 === this.alpha() ? h("transparent") : this,
                            r = a[o.cache] || o.to(a._rgba),
                            l = r.slice();
                        return (
                            (s = s[o.cache]),
                                f(o.props, function (t, n) {
                                    var o = n.idx,
                                        a = r[o],
                                        h = s[o],
                                        c = u[n.type] || {};
                                    null !== h &&
                                    (null === a
                                        ? (l[o] = h)
                                        : (c.mod &&
                                        (h - a > c.mod / 2
                                            ? (a += c.mod)
                                            : a - h > c.mod / 2 && (a -= c.mod)),
                                            (l[o] = i((h - a) * e + a, n))));
                                }),
                                this[n](l)
                        );
                    },
                    blend: function (e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            s = i.pop(),
                            n = h(e)._rgba;
                        return h(
                            t.map(i, function (t, e) {
                                return (1 - s) * n[e] + s * t;
                            })
                        );
                    },
                    toRgbaString: function () {
                        var e = "rgba(",
                            i = t.map(this._rgba, function (t, e) {
                                return null == t ? (e > 2 ? 1 : 0) : t;
                            });
                        return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
                    },
                    toHslaString: function () {
                        var e = "hsla(",
                            i = t.map(this.hsla(), function (t, e) {
                                return (
                                    null == t && (t = e > 2 ? 1 : 0),
                                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                                        t
                                );
                            });
                        return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
                    },
                    toHexString: function (e) {
                        var i = this._rgba.slice(),
                            s = i.pop();
                        return (
                            e && i.push(~~(255 * s)),
                            "#" +
                            t
                                .map(i, function (t) {
                                    return (
                                        (t = (t || 0).toString(16)), 1 === t.length ? "0" + t : t
                                    );
                                })
                                .join("")
                        );
                    },
                    toString: function () {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
                    },
                })),
                (h.fn.parse.prototype = h.fn),
                (c.hsla.to = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2])
                        return [null, null, null, t[3]];
                    var e,
                        i,
                        s = t[0] / 255,
                        n = t[1] / 255,
                        o = t[2] / 255,
                        a = t[3],
                        r = Math.max(s, n, o),
                        l = Math.min(s, n, o),
                        h = r - l,
                        c = r + l,
                        u = 0.5 * c;
                    return (
                        (e =
                            l === r
                                ? 0
                                : s === r
                                    ? (60 * (n - o)) / h + 360
                                    : n === r
                                        ? (60 * (o - s)) / h + 120
                                        : (60 * (s - n)) / h + 240),
                            (i = 0 === h ? 0 : 0.5 >= u ? h / c : h / (2 - c)),
                            [Math.round(e) % 360, i, u, null == a ? 1 : a]
                    );
                }),
                (c.hsla.from = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2])
                        return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        s = t[2],
                        o = t[3],
                        a = 0.5 >= s ? s * (1 + i) : s + i - s * i,
                        r = 2 * s - a;
                    return [
                        Math.round(255 * n(r, a, e + 1 / 3)),
                        Math.round(255 * n(r, a, e)),
                        Math.round(255 * n(r, a, e - 1 / 3)),
                        o,
                    ];
                }),
                f(c, function (s, n) {
                    var o = n.props,
                        a = n.cache,
                        l = n.to,
                        c = n.from;
                    (h.fn[s] = function (s) {
                        if ((l && !this[a] && (this[a] = l(this._rgba)), s === e))
                            return this[a].slice();
                        var n,
                            r = t.type(s),
                            u = "array" === r || "object" === r ? s : arguments,
                            d = this[a].slice();
                        return (
                            f(o, function (t, e) {
                                var s = u["object" === r ? t : e.idx];
                                null == s && (s = d[e.idx]), (d[e.idx] = i(s, e));
                            }),
                                c ? ((n = h(c(d))), (n[a] = d), n) : h(d)
                        );
                    }),
                        f(o, function (e, i) {
                            h.fn[e] ||
                            (h.fn[e] = function (n) {
                                var o,
                                    a = t.type(n),
                                    l = "alpha" === e ? (this._hsla ? "hsla" : "rgba") : s,
                                    h = this[l](),
                                    c = h[i.idx];
                                return "undefined" === a
                                    ? c
                                    : ("function" === a &&
                                    ((n = n.call(this, c)), (a = t.type(n))),
                                        null == n && i.empty
                                            ? this
                                            : ("string" === a &&
                                            ((o = r.exec(n)),
                                            o &&
                                            (n =
                                                c +
                                                parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))),
                                                (h[i.idx] = n),
                                                this[l](h)));
                            });
                        });
                }),
                (h.hook = function (e) {
                    var i = e.split(" ");
                    f(i, function (e, i) {
                        (t.cssHooks[i] = {
                            set: function (e, n) {
                                var o,
                                    a,
                                    r = "";
                                if (
                                    "transparent" !== n &&
                                    ("string" !== t.type(n) || (o = s(n)))
                                ) {
                                    if (((n = h(o || n)), !d.rgba && 1 !== n._rgba[3])) {
                                        for (
                                            a = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === r || "transparent" === r) && a && a.style;

                                        )
                                            try {
                                                (r = t.css(a, "backgroundColor")), (a = a.parentNode);
                                            } catch (l) {}
                                        n = n.blend(r && "transparent" !== r ? r : "_default");
                                    }
                                    n = n.toRgbaString();
                                }
                                try {
                                    e.style[i] = n;
                                } catch (l) {}
                            },
                        }),
                            (t.fx.step[i] = function (e) {
                                e.colorInit ||
                                ((e.start = h(e.elem, i)),
                                    (e.end = h(e.end)),
                                    (e.colorInit = !0)),
                                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                            });
                    });
                }),
                h.hook(a),
                (t.cssHooks.borderColor = {
                    expand: function (t) {
                        var e = {};
                        return (
                            f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                                e["border" + s + "Color"] = t;
                            }),
                                e
                        );
                    },
                }),
                (o = t.Color.names =
                    {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff",
                    });
        })(g),
        (function () {
            function e(e) {
                var i,
                    s,
                    n = e.ownerDocument.defaultView
                        ? e.ownerDocument.defaultView.getComputedStyle(e, null)
                        : e.currentStyle,
                    o = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--; )
                        (i = n[s]), "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
                else for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
                return o;
            }
            function i(e, i) {
                var s,
                    o,
                    a = {};
                for (s in i)
                    (o = i[s]),
                    e[s] !== o &&
                    (n[s] || ((t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o)));
                return a;
            }
            var s = ["add", "remove", "toggle"],
                n = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1,
                };
            t.each(
                [
                    "borderLeftStyle",
                    "borderRightStyle",
                    "borderBottomStyle",
                    "borderTopStyle",
                ],
                function (e, i) {
                    t.fx.step[i] = function (t) {
                        (("none" !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) &&
                        (g.style(t.elem, i, t.end), (t.setAttr = !0));
                    };
                }
            ),
            t.fn.addBack ||
            (t.fn.addBack = function (t) {
                return this.add(
                    null == t ? this.prevObject : this.prevObject.filter(t)
                );
            }),
                (t.effects.animateClass = function (n, o, a, r) {
                    var l = t.speed(o, a, r);
                    return this.queue(function () {
                        var o,
                            a = t(this),
                            r = a.attr("class") || "",
                            h = l.children ? a.find("*").addBack() : a;
                        (h = h.map(function () {
                            var i = t(this);
                            return { el: i, start: e(this) };
                        })),
                            (o = function () {
                                t.each(s, function (t, e) {
                                    n[e] && a[e + "Class"](n[e]);
                                });
                            }),
                            o(),
                            (h = h.map(function () {
                                return (
                                    (this.end = e(this.el[0])),
                                        (this.diff = i(this.start, this.end)),
                                        this
                                );
                            })),
                            a.attr("class", r),
                            (h = h.map(function () {
                                var e = this,
                                    i = t.Deferred(),
                                    s = t.extend({}, l, {
                                        queue: !1,
                                        complete: function () {
                                            i.resolve(e);
                                        },
                                    });
                                return this.el.animate(this.diff, s), i.promise();
                            })),
                            t.when.apply(t, h.get()).done(function () {
                                o(),
                                    t.each(arguments, function () {
                                        var e = this.el;
                                        t.each(this.diff, function (t) {
                                            e.css(t, "");
                                        });
                                    }),
                                    l.complete.call(a[0]);
                            });
                    });
                }),
                t.fn.extend({
                    addClass: (function (e) {
                        return function (i, s, n, o) {
                            return s
                                ? t.effects.animateClass.call(this, { add: i }, s, n, o)
                                : e.apply(this, arguments);
                        };
                    })(t.fn.addClass),
                    removeClass: (function (e) {
                        return function (i, s, n, o) {
                            return arguments.length > 1
                                ? t.effects.animateClass.call(this, { remove: i }, s, n, o)
                                : e.apply(this, arguments);
                        };
                    })(t.fn.removeClass),
                    toggleClass: (function (e) {
                        return function (i, s, n, o, a) {
                            return "boolean" == typeof s || void 0 === s
                                ? n
                                    ? t.effects.animateClass.call(
                                        this,
                                        s ? { add: i } : { remove: i },
                                        n,
                                        o,
                                        a
                                    )
                                    : e.apply(this, arguments)
                                : t.effects.animateClass.call(this, { toggle: i }, s, n, o);
                        };
                    })(t.fn.toggleClass),
                    switchClass: function (e, i, s, n, o) {
                        return t.effects.animateClass.call(
                            this,
                            { add: i, remove: e },
                            s,
                            n,
                            o
                        );
                    },
                });
        })(),
        (function () {
            function e(e, i, s, n) {
                return (
                    t.isPlainObject(e) && ((i = e), (e = e.effect)),
                        (e = { effect: e }),
                    null == i && (i = {}),
                    t.isFunction(i) && ((n = i), (s = null), (i = {})),
                    ("number" == typeof i || t.fx.speeds[i]) &&
                    ((n = s), (s = i), (i = {})),
                    t.isFunction(s) && ((n = s), (s = null)),
                    i && t.extend(e, i),
                        (s = s || i.duration),
                        (e.duration = t.fx.off
                            ? 0
                            : "number" == typeof s
                                ? s
                                : s in t.fx.speeds
                                    ? t.fx.speeds[s]
                                    : t.fx.speeds._default),
                        (e.complete = n || i.complete),
                        e
                );
            }
            function i(e) {
                return !e || "number" == typeof e || t.fx.speeds[e]
                    ? !0
                    : "string" != typeof e || t.effects.effect[e]
                        ? t.isFunction(e)
                            ? !0
                            : "object" != typeof e || e.effect
                                ? !1
                                : !0
                        : !0;
            }
            function s(t, e) {
                var i = e.outerWidth(),
                    s = e.outerHeight(),
                    n =
                        /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                    o = n.exec(t) || ["", 0, i, s, 0];
                return {
                    top: parseFloat(o[1]) || 0,
                    right: "auto" === o[2] ? i : parseFloat(o[2]),
                    bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                    left: parseFloat(o[4]) || 0,
                };
            }
            t.expr &&
            t.expr.filters &&
            t.expr.filters.animated &&
            (t.expr.filters.animated = (function (e) {
                return function (i) {
                    return !!t(i).data(f) || e(i);
                };
            })(t.expr.filters.animated)),
            t.uiBackCompat !== !1 &&
            t.extend(t.effects, {
                save: function (t, e) {
                    for (var i = 0, s = e.length; s > i; i++)
                        null !== e[i] && t.data(d + e[i], t[0].style[e[i]]);
                },
                restore: function (t, e) {
                    for (var i, s = 0, n = e.length; n > s; s++)
                        null !== e[s] && ((i = t.data(d + e[s])), t.css(e[s], i));
                },
                setMode: function (t, e) {
                    return (
                        "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    );
                },
                createWrapper: function (e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            float: e.css("float"),
                        },
                        s = t("<div></div>")
                            .addClass("ui-effects-wrapper")
                            .css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0,
                            }),
                        n = { width: e.width(), height: e.height() },
                        o = document.activeElement;
                    try {
                        o.id;
                    } catch (a) {
                        o = document.body;
                    }
                    return (
                        e.wrap(s),
                        (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
                            (s = e.parent()),
                            "static" === e.css("position")
                                ? (s.css({ position: "relative" }),
                                    e.css({ position: "relative" }))
                                : (t.extend(i, {
                                    position: e.css("position"),
                                    zIndex: e.css("z-index"),
                                }),
                                    t.each(["top", "left", "bottom", "right"], function (t, s) {
                                        (i[s] = e.css(s)),
                                        isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
                                    }),
                                    e.css({
                                        position: "relative",
                                        top: 0,
                                        left: 0,
                                        right: "auto",
                                        bottom: "auto",
                                    })),
                            e.css(n),
                            s.css(i).show()
                    );
                },
                removeWrapper: function (e) {
                    var i = document.activeElement;
                    return (
                        e.parent().is(".ui-effects-wrapper") &&
                        (e.parent().replaceWith(e),
                        (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")),
                            e
                    );
                },
            }),
                t.extend(t.effects, {
                    version: "1.12.1",
                    define: function (e, i, s) {
                        return (
                            s || ((s = i), (i = "effect")),
                                (t.effects.effect[e] = s),
                                (t.effects.effect[e].mode = i),
                                s
                        );
                    },
                    scaledDimensions: function (t, e, i) {
                        if (0 === e)
                            return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                        var s = "horizontal" !== i ? (e || 100) / 100 : 1,
                            n = "vertical" !== i ? (e || 100) / 100 : 1;
                        return {
                            height: t.height() * n,
                            width: t.width() * s,
                            outerHeight: t.outerHeight() * n,
                            outerWidth: t.outerWidth() * s,
                        };
                    },
                    clipToBox: function (t) {
                        return {
                            width: t.clip.right - t.clip.left,
                            height: t.clip.bottom - t.clip.top,
                            left: t.clip.left,
                            top: t.clip.top,
                        };
                    },
                    unshift: function (t, e, i) {
                        var s = t.queue();
                        e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))),
                            t.dequeue();
                    },
                    saveStyle: function (t) {
                        t.data(p, t[0].style.cssText);
                    },
                    restoreStyle: function (t) {
                        (t[0].style.cssText = t.data(p) || ""), t.removeData(p);
                    },
                    mode: function (t, e) {
                        var i = t.is(":hidden");
                        return (
                            "toggle" === e && (e = i ? "show" : "hide"),
                            (i ? "hide" === e : "show" === e) && (e = "none"),
                                e
                        );
                    },
                    getBaseline: function (t, e) {
                        var i, s;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = 0.5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height;
                        }
                        switch (t[1]) {
                            case "left":
                                s = 0;
                                break;
                            case "center":
                                s = 0.5;
                                break;
                            case "right":
                                s = 1;
                                break;
                            default:
                                s = t[1] / e.width;
                        }
                        return { x: s, y: i };
                    },
                    createPlaceholder: function (e) {
                        var i,
                            s = e.css("position"),
                            n = e.position();
                        return (
                            e
                                .css({
                                    marginTop: e.css("marginTop"),
                                    marginBottom: e.css("marginBottom"),
                                    marginLeft: e.css("marginLeft"),
                                    marginRight: e.css("marginRight"),
                                })
                                .outerWidth(e.outerWidth())
                                .outerHeight(e.outerHeight()),
                            /^(static|relative)/.test(s) &&
                            ((s = "absolute"),
                                (i = t("<" + e[0].nodeName + ">")
                                    .insertAfter(e)
                                    .css({
                                        display: /^(inline|ruby)/.test(e.css("display"))
                                            ? "inline-block"
                                            : "block",
                                        visibility: "hidden",
                                        marginTop: e.css("marginTop"),
                                        marginBottom: e.css("marginBottom"),
                                        marginLeft: e.css("marginLeft"),
                                        marginRight: e.css("marginRight"),
                                        float: e.css("float"),
                                    })
                                    .outerWidth(e.outerWidth())
                                    .outerHeight(e.outerHeight())
                                    .addClass("ui-effects-placeholder")),
                                e.data(d + "placeholder", i)),
                                e.css({ position: s, left: n.left, top: n.top }),
                                i
                        );
                    },
                    removePlaceholder: function (t) {
                        var e = d + "placeholder",
                            i = t.data(e);
                        i && (i.remove(), t.removeData(e));
                    },
                    cleanUp: function (e) {
                        t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
                    },
                    setTransition: function (e, i, s, n) {
                        return (
                            (n = n || {}),
                                t.each(i, function (t, i) {
                                    var o = e.cssUnit(i);
                                    o[0] > 0 && (n[i] = o[0] * s + o[1]);
                                }),
                                n
                        );
                    },
                }),
                t.fn.extend({
                    effect: function () {
                        function i(e) {
                            function i() {
                                r.removeData(f),
                                    t.effects.cleanUp(r),
                                "hide" === s.mode && r.hide(),
                                    a();
                            }
                            function a() {
                                t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e();
                            }
                            var r = t(this);
                            (s.mode = c.shift()),
                                t.uiBackCompat === !1 || o
                                    ? "none" === s.mode
                                        ? (r[h](), a())
                                        : n.call(r[0], s, i)
                                    : (r.is(":hidden") ? "hide" === h : "show" === h)
                                        ? (r[h](), a())
                                        : n.call(r[0], s, a);
                        }
                        var s = e.apply(this, arguments),
                            n = t.effects.effect[s.effect],
                            o = n.mode,
                            a = s.queue,
                            r = a || "fx",
                            l = s.complete,
                            h = s.mode,
                            c = [],
                            u = function (e) {
                                var i = t(this),
                                    s = t.effects.mode(i, h) || o;
                                i.data(f, !0),
                                    c.push(s),
                                o && ("show" === s || (s === o && "hide" === s)) && i.show(),
                                (o && "none" === s) || t.effects.saveStyle(i),
                                t.isFunction(e) && e();
                            };
                        return t.fx.off || !n
                            ? h
                                ? this[h](s.duration, l)
                                : this.each(function () {
                                    l && l.call(this);
                                })
                            : a === !1
                                ? this.each(u).each(i)
                                : this.queue(r, u).queue(r, i);
                    },
                    show: (function (t) {
                        return function (s) {
                            if (i(s)) return t.apply(this, arguments);
                            var n = e.apply(this, arguments);
                            return (n.mode = "show"), this.effect.call(this, n);
                        };
                    })(t.fn.show),
                    hide: (function (t) {
                        return function (s) {
                            if (i(s)) return t.apply(this, arguments);
                            var n = e.apply(this, arguments);
                            return (n.mode = "hide"), this.effect.call(this, n);
                        };
                    })(t.fn.hide),
                    toggle: (function (t) {
                        return function (s) {
                            if (i(s) || "boolean" == typeof s)
                                return t.apply(this, arguments);
                            var n = e.apply(this, arguments);
                            return (n.mode = "toggle"), this.effect.call(this, n);
                        };
                    })(t.fn.toggle),
                    cssUnit: function (e) {
                        var i = this.css(e),
                            s = [];
                        return (
                            t.each(["em", "px", "%", "pt"], function (t, e) {
                                i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
                            }),
                                s
                        );
                    },
                    cssClip: function (t) {
                        return t
                            ? this.css(
                                "clip",
                                "rect(" +
                                t.top +
                                "px " +
                                t.right +
                                "px " +
                                t.bottom +
                                "px " +
                                t.left +
                                "px)"
                            )
                            : s(this.css("clip"), this);
                    },
                    transfer: function (e, i) {
                        var s = t(this),
                            n = t(e.to),
                            o = "fixed" === n.css("position"),
                            a = t("body"),
                            r = o ? a.scrollTop() : 0,
                            l = o ? a.scrollLeft() : 0,
                            h = n.offset(),
                            c = {
                                top: h.top - r,
                                left: h.left - l,
                                height: n.innerHeight(),
                                width: n.innerWidth(),
                            },
                            u = s.offset(),
                            d = t("<div class='ui-effects-transfer'></div>")
                                .appendTo("body")
                                .addClass(e.className)
                                .css({
                                    top: u.top - r,
                                    left: u.left - l,
                                    height: s.innerHeight(),
                                    width: s.innerWidth(),
                                    position: o ? "fixed" : "absolute",
                                })
                                .animate(c, e.duration, e.easing, function () {
                                    d.remove(), t.isFunction(i) && i();
                                });
                    },
                }),
                (t.fx.step.clip = function (e) {
                    e.clipInit ||
                    ((e.start = t(e.elem).cssClip()),
                    "string" == typeof e.end && (e.end = s(e.end, e.elem)),
                        (e.clipInit = !0)),
                        t(e.elem).cssClip({
                            top: e.pos * (e.end.top - e.start.top) + e.start.top,
                            right: e.pos * (e.end.right - e.start.right) + e.start.right,
                            bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                            left: e.pos * (e.end.left - e.start.left) + e.start.left,
                        });
                });
        })(),
        (function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                e[i] = function (e) {
                    return Math.pow(e, t + 2);
                };
            }),
                t.extend(e, {
                    Sine: function (t) {
                        return 1 - Math.cos((t * Math.PI) / 2);
                    },
                    Circ: function (t) {
                        return 1 - Math.sqrt(1 - t * t);
                    },
                    Elastic: function (t) {
                        return 0 === t || 1 === t
                            ? t
                            : -Math.pow(2, 8 * (t - 1)) *
                            Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
                    },
                    Back: function (t) {
                        return t * t * (3 * t - 2);
                    },
                    Bounce: function (t) {
                        for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
                        return (
                            1 / Math.pow(4, 3 - i) -
                            7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                        );
                    },
                }),
                t.each(e, function (e, i) {
                    (t.easing["easeIn" + e] = i),
                        (t.easing["easeOut" + e] = function (t) {
                            return 1 - i(1 - t);
                        }),
                        (t.easing["easeInOut" + e] = function (t) {
                            return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
                        });
                });
        })(),
        t.effects,
        t.effects.define("blind", "hide", function (e, i) {
            var s = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"],
                },
                n = t(this),
                o = e.direction || "up",
                a = n.cssClip(),
                r = { clip: t.extend({}, a) },
                l = t.effects.createPlaceholder(n);
            (r.clip[s[o][0]] = r.clip[s[o][1]]),
            "show" === e.mode &&
            (n.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), (r.clip = a)),
            l && l.animate(t.effects.clipToBox(r), e.duration, e.easing),
                n.animate(r, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: i,
                });
        }),
        t.effects.define("bounce", function (e, i) {
            var s,
                n,
                o,
                a = t(this),
                r = e.mode,
                l = "hide" === r,
                h = "show" === r,
                c = e.direction || "up",
                u = e.distance,
                d = e.times || 5,
                p = 2 * d + (h || l ? 1 : 0),
                f = e.duration / p,
                g = e.easing,
                m = "up" === c || "down" === c ? "top" : "left",
                _ = "up" === c || "left" === c,
                v = 0,
                b = a.queue().length;
            for (
                t.effects.createPlaceholder(a),
                    o = a.css(m),
                u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3),
                h &&
                ((n = { opacity: 1 }),
                    (n[m] = o),
                    a
                        .css("opacity", 0)
                        .css(m, _ ? 2 * -u : 2 * u)
                        .animate(n, f, g)),
                l && (u /= Math.pow(2, d - 1)),
                    n = {},
                    n[m] = o;
                d > v;
                v++
            )
                (s = {}),
                    (s[m] = (_ ? "-=" : "+=") + u),
                    a.animate(s, f, g).animate(n, f, g),
                    (u = l ? 2 * u : u / 2);
            l &&
            ((s = { opacity: 0 }),
                (s[m] = (_ ? "-=" : "+=") + u),
                a.animate(s, f, g)),
                a.queue(i),
                t.effects.unshift(a, b, p + 1);
        });
});

// fancyBox v3.5.6
(!(function (t, e, n, o) {
    "use strict";
    function i(t, e) {
        var o,
            i,
            a,
            s = [],
            r = 0;
        (t && t.isDefaultPrevented()) ||
        (t.preventDefault(),
            (e = e || {}),
        t && t.data && (e = h(t.data.options, e)),
            (o = e.$target || n(t.currentTarget).trigger("blur")),
        ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
        (e.selector
            ? (s = n(e.selector))
            : ((i = o.attr("data-fancybox") || ""),
                i
                    ? ((s = t.data ? t.data.items : []),
                        (s = s.length
                            ? s.filter('[data-fancybox="' + i + '"]')
                            : n('[data-fancybox="' + i + '"]')))
                    : (s = [o])),
            (r = n(s).index(o)),
        r < 0 && (r = 0),
            (a = n.fancybox.open(s, e, r)),
            (a.$trigger = o)));
    }
    if (((t.console = t.console || { info: function (t) {} }), n)) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var a = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: { preload: !1 },
                ajax: { settings: { data: { fancybox: !0 } } },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: { scrolling: "auto" },
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0,
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl:
                    '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download:
                        '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close:
                        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft:
                        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight:
                        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn:
                        '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: { autoStart: !1 },
                touch: { vertical: !0, momentum: !0 },
                hash: null,
                media: {},
                slideShow: { autoStart: !1, speed: 3e3 },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y",
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom";
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls";
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close";
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom";
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom";
                    },
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR:
                            "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom",
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR:
                            "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern",
                    },
                },
            },
            s = n(t),
            r = n(e),
            c = 0,
            l = function (t) {
                return t && t.hasOwnProperty && t instanceof n;
            },
            d = (function () {
                return (
                    t.requestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60);
                    }
                );
            })(),
            u = (function () {
                return (
                    t.cancelAnimationFrame ||
                    t.webkitCancelAnimationFrame ||
                    t.mozCancelAnimationFrame ||
                    t.oCancelAnimationFrame ||
                    function (e) {
                        t.clearTimeout(e);
                    }
                );
            })(),
            f = (function () {
                var t,
                    n = e.createElement("fakeelement"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                    };
                for (t in o) if (void 0 !== n.style[t]) return o[t];
                return "transitionend";
            })(),
            p = function (t) {
                return t && t.length && t[0].offsetHeight;
            },
            h = function (t, e) {
                var o = n.extend(!0, {}, t, e);
                return (
                    n.each(e, function (t, e) {
                        n.isArray(e) && (o[t] = e);
                    }),
                        o
                );
            },
            g = function (t) {
                var o, i;
                return (
                    !(!t || t.ownerDocument !== e) &&
                    (n(".fancybox-container").css("pointer-events", "none"),
                        (o = {
                            x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                            y: t.getBoundingClientRect().top + t.offsetHeight / 2,
                        }),
                        (i = e.elementFromPoint(o.x, o.y) === t),
                        n(".fancybox-container").css("pointer-events", ""),
                        i)
                );
            },
            b = function (t, e, o) {
                var i = this;
                (i.opts = h({ index: o }, n.fancybox.defaults)),
                n.isPlainObject(e) && (i.opts = h(i.opts, e)),
                n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
                    (i.id = i.opts.id || ++c),
                    (i.currIndex = parseInt(i.opts.index, 10) || 0),
                    (i.prevIndex = null),
                    (i.prevPos = null),
                    (i.currPos = 0),
                    (i.firstRun = !0),
                    (i.group = []),
                    (i.slides = {}),
                    i.addContent(t),
                i.group.length && i.init();
            };
        n.extend(b.prototype, {
            init: function () {
                var o,
                    i,
                    a = this,
                    s = a.group[a.currIndex],
                    r = s.opts;
                r.closeExisting && n.fancybox.close(!0),
                    n("body").addClass("fancybox-active"),
                !n.fancybox.getInstance() &&
                !1 !== r.hideScrollbar &&
                !n.fancybox.isMobile &&
                e.body.scrollHeight > t.innerHeight &&
                (n("head").append(
                    '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                    (t.innerWidth - e.documentElement.clientWidth) +
                    "px;}</style>"
                ),
                    n("body").addClass("compensate-for-scrollbar")),
                    (i = ""),
                    n.each(r.buttons, function (t, e) {
                        i += r.btnTpl[e] || "";
                    }),
                    (o = n(
                        a.translate(
                            a,
                            r.baseTpl
                                .replace("{{buttons}}", i)
                                .replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight)
                        )
                    )
                        .attr("id", "fancybox-container-" + a.id)
                        .addClass(r.baseClass)
                        .data("FancyBox", a)
                        .appendTo(r.parentEl)),
                    (a.$refs = { container: o }),
                    [
                        "bg",
                        "inner",
                        "infobar",
                        "toolbar",
                        "stage",
                        "caption",
                        "navigation",
                    ].forEach(function (t) {
                        a.$refs[t] = o.find(".fancybox-" + t);
                    }),
                    a.trigger("onInit"),
                    a.activate(),
                    a.jumpTo(a.currIndex);
            },
            translate: function (t, e) {
                var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    return void 0 === n[e] ? t : n[e];
                });
            },
            addContent: function (t) {
                var e,
                    o = this,
                    i = n.makeArray(t);
                n.each(i, function (t, e) {
                    var i,
                        a,
                        s,
                        r,
                        c,
                        l = {},
                        d = {};
                    n.isPlainObject(e)
                        ? ((l = e), (d = e.opts || e))
                        : "object" === n.type(e) && n(e).length
                            ? ((i = n(e)),
                                (d = i.data() || {}),
                                (d = n.extend(!0, {}, d, d.options)),
                                (d.$orig = i),
                                (l.src = o.opts.src || d.src || i.attr("href")),
                            l.type || l.src || ((l.type = "inline"), (l.src = e)))
                            : (l = { type: "html", src: e + "" }),
                        (l.opts = n.extend(!0, {}, o.opts, d)),
                    n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
                    n.fancybox.isMobile &&
                    l.opts.mobile &&
                    (l.opts = h(l.opts, l.opts.mobile)),
                        (a = l.type || l.opts.type),
                        (r = l.src || ""),
                    !a &&
                    r &&
                    ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                        ? ((a = "video"),
                        l.opts.video.format ||
                        (l.opts.video.format =
                            "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                        : r.match(
                            /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                        )
                            ? (a = "image")
                            : r.match(/\.(pdf)((\?|#).*)?$/i)
                                ? ((a = "iframe"),
                                    (l = n.extend(!0, l, {
                                        contentType: "pdf",
                                        opts: { iframe: { preload: !1 } },
                                    })))
                                : "#" === r.charAt(0) && (a = "inline")),
                        a ? (l.type = a) : o.trigger("objectNeedsType", l),
                    l.contentType ||
                    (l.contentType =
                        n.inArray(l.type, ["html", "inline", "ajax"]) > -1
                            ? "html"
                            : l.type),
                        (l.index = o.group.length),
                    "auto" == l.opts.smallBtn &&
                    (l.opts.smallBtn =
                        n.inArray(l.type, ["html", "inline", "ajax"]) > -1),
                    "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
                        (l.$thumb = l.opts.$thumb || null),
                    l.opts.$trigger &&
                    l.index === o.opts.index &&
                    ((l.$thumb = l.opts.$trigger.find("img:first")),
                    l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
                    (l.$thumb && l.$thumb.length) ||
                    !l.opts.$orig ||
                    (l.$thumb = l.opts.$orig.find("img:first")),
                    l.$thumb && !l.$thumb.length && (l.$thumb = null),
                        (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
                    "function" === n.type(l.opts.caption) &&
                    (l.opts.caption = l.opts.caption.apply(e, [o, l])),
                    "function" === n.type(o.opts.caption) &&
                    (l.opts.caption = o.opts.caption.apply(e, [o, l])),
                    l.opts.caption instanceof n ||
                    (l.opts.caption =
                        void 0 === l.opts.caption ? "" : l.opts.caption + ""),
                    "ajax" === l.type &&
                    ((c = r.split(/\s+/, 2)),
                    c.length > 1 &&
                    ((l.src = c.shift()), (l.opts.filter = c.shift()))),
                    l.opts.modal &&
                    (l.opts = n.extend(!0, l.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1,
                    })),
                        o.group.push(l);
                }),
                Object.keys(o.slides).length &&
                (o.updateControls(),
                (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
            },
            addEvents: function () {
                var e = this;
                e.removeEvents(),
                    e.$refs.container
                        .on("click.fb-close", "[data-fancybox-close]", function (t) {
                            t.stopPropagation(), t.preventDefault(), e.close(t);
                        })
                        .on(
                            "touchstart.fb-prev click.fb-prev",
                            "[data-fancybox-prev]",
                            function (t) {
                                t.stopPropagation(), t.preventDefault(), e.previous();
                            }
                        )
                        .on(
                            "touchstart.fb-next click.fb-next",
                            "[data-fancybox-next]",
                            function (t) {
                                t.stopPropagation(), t.preventDefault(), e.next();
                            }
                        )
                        .on("click.fb", "[data-fancybox-zoom]", function (t) {
                            e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                        }),
                    s.on("orientationchange.fb resize.fb", function (t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type
                            ? (e.requestId && u(e.requestId),
                                (e.requestId = d(function () {
                                    e.update(t);
                                })))
                            : (e.current &&
                            "iframe" === e.current.type &&
                            e.$refs.stage.hide(),
                                setTimeout(
                                    function () {
                                        e.$refs.stage.show(), e.update(t);
                                    },
                                    n.fancybox.isMobile ? 600 : 250
                                ));
                    }),
                    r.on("keydown.fb", function (t) {
                        var o = n.fancybox ? n.fancybox.getInstance() : null,
                            i = o.current,
                            a = t.keyCode || t.which;
                        if (9 == a) return void (i.opts.trapFocus && e.focus(t));
                        if (
                            !(
                                !i.opts.keyboard ||
                                t.ctrlKey ||
                                t.altKey ||
                                t.shiftKey ||
                                n(t.target).is("input,textarea,video,audio")
                            )
                        )
                            return 8 === a || 27 === a
                                ? (t.preventDefault(), void e.close(t))
                                : 37 === a || 38 === a
                                    ? (t.preventDefault(), void e.previous())
                                    : 39 === a || 40 === a
                                        ? (t.preventDefault(), void e.next())
                                        : void e.trigger("afterKeydown", t, a);
                    }),
                e.group[e.currIndex].opts.idleTime &&
                ((e.idleSecondsCounter = 0),
                    r.on(
                        "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                        function (t) {
                            (e.idleSecondsCounter = 0),
                            e.isIdle && e.showControls(),
                                (e.isIdle = !1);
                        }
                    ),
                    (e.idleInterval = t.setInterval(function () {
                        ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                        !e.isDragging &&
                        ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
                    }, 1e3)));
            },
            removeEvents: function () {
                var e = this;
                s.off("orientationchange.fb resize.fb"),
                    r.off("keydown.fb .fb-idle"),
                    this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                e.idleInterval &&
                (t.clearInterval(e.idleInterval), (e.idleInterval = null));
            },
            previous: function (t) {
                return this.jumpTo(this.currPos - 1, t);
            },
            next: function (t) {
                return this.jumpTo(this.currPos + 1, t);
            },
            jumpTo: function (t, e) {
                var o,
                    i,
                    a,
                    s,
                    r,
                    c,
                    l,
                    d,
                    u,
                    f = this,
                    h = f.group.length;
                if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
                    if (
                        ((t = parseInt(t, 10)),
                        !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
                        (t < 0 || t >= h))
                    )
                        return !1;
                    if (
                        ((o = f.firstRun = !Object.keys(f.slides).length),
                            (r = f.current),
                            (f.prevIndex = f.currIndex),
                            (f.prevPos = f.currPos),
                            (s = f.createSlide(t)),
                        h > 1 &&
                        ((a || s.index < h - 1) && f.createSlide(t + 1),
                        (a || s.index > 0) && f.createSlide(t - 1)),
                            (f.current = s),
                            (f.currIndex = s.index),
                            (f.currPos = s.pos),
                            f.trigger("beforeShow", o),
                            f.updateControls(),
                            (s.forcedDuration = void 0),
                            n.isNumeric(e)
                                ? (s.forcedDuration = e)
                                : (e = s.opts[o ? "animationDuration" : "transitionDuration"]),
                            (e = parseInt(e, 10)),
                            (i = f.isMoved(s)),
                            s.$slide.addClass("fancybox-slide--current"),
                            o)
                    )
                        return (
                            s.opts.animationEffect &&
                            e &&
                            f.$refs.container.css("transition-duration", e + "ms"),
                                f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                                f.loadSlide(s),
                                void f.preload("image")
                        );
                    (c = n.fancybox.getTranslate(r.$slide)),
                        (l = n.fancybox.getTranslate(f.$refs.stage)),
                        n.each(f.slides, function (t, e) {
                            n.fancybox.stop(e.$slide, !0);
                        }),
                    r.pos !== s.pos && (r.isComplete = !1),
                        r.$slide.removeClass(
                            "fancybox-slide--complete fancybox-slide--current"
                        ),
                        i
                            ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                                n.each(f.slides, function (t, o) {
                                    o.$slide
                                        .removeClass("fancybox-animated")
                                        .removeClass(function (t, e) {
                                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                                                " "
                                            );
                                        });
                                    var i = o.pos * c.width + o.pos * o.opts.gutter;
                                    n.fancybox.setTranslate(o.$slide, {
                                        top: 0,
                                        left: i - l.left + u,
                                    }),
                                    o.pos !== s.pos &&
                                    o.$slide.addClass(
                                        "fancybox-slide--" +
                                        (o.pos > s.pos ? "next" : "previous")
                                    ),
                                        p(o.$slide),
                                        n.fancybox.animate(
                                            o.$slide,
                                            {
                                                top: 0,
                                                left:
                                                    (o.pos - s.pos) * c.width +
                                                    (o.pos - s.pos) * o.opts.gutter,
                                            },
                                            e,
                                            function () {
                                                o.$slide
                                                    .css({ transform: "", opacity: "" })
                                                    .removeClass(
                                                        "fancybox-slide--next fancybox-slide--previous"
                                                    ),
                                                o.pos === f.currPos && f.complete();
                                            }
                                        );
                                }))
                            : e &&
                            s.opts.transitionEffect &&
                            ((d =
                                "fancybox-animated fancybox-fx-" + s.opts.transitionEffect),
                                r.$slide.addClass(
                                    "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")
                                ),
                                n.fancybox.animate(
                                    r.$slide,
                                    d,
                                    e,
                                    function () {
                                        r.$slide
                                            .removeClass(d)
                                            .removeClass(
                                                "fancybox-slide--next fancybox-slide--previous"
                                            );
                                    },
                                    !1
                                )),
                        s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
                        f.preload("image");
                }
            },
            createSlide: function (t) {
                var e,
                    o,
                    i = this;
                return (
                    (o = t % i.group.length),
                        (o = o < 0 ? i.group.length + o : o),
                    !i.slides[t] &&
                    i.group[o] &&
                    ((e = n('<div class="fancybox-slide"></div>').appendTo(
                        i.$refs.stage
                    )),
                        (i.slides[t] = n.extend(!0, {}, i.group[o], {
                            pos: t,
                            $slide: e,
                            isLoaded: !1,
                        })),
                        i.updateSlide(i.slides[t])),
                        i.slides[t]
                );
            },
            scaleToActual: function (t, e, o) {
                var i,
                    a,
                    s,
                    r,
                    c,
                    l = this,
                    d = l.current,
                    u = d.$content,
                    f = n.fancybox.getTranslate(d.$slide).width,
                    p = n.fancybox.getTranslate(d.$slide).height,
                    h = d.width,
                    g = d.height;
                l.isAnimating ||
                l.isMoved() ||
                !u ||
                "image" != d.type ||
                !d.isLoaded ||
                d.hasError ||
                ((l.isAnimating = !0),
                    n.fancybox.stop(u),
                    (t = void 0 === t ? 0.5 * f : t),
                    (e = void 0 === e ? 0.5 * p : e),
                    (i = n.fancybox.getTranslate(u)),
                    (i.top -= n.fancybox.getTranslate(d.$slide).top),
                    (i.left -= n.fancybox.getTranslate(d.$slide).left),
                    (r = h / i.width),
                    (c = g / i.height),
                    (a = 0.5 * f - 0.5 * h),
                    (s = 0.5 * p - 0.5 * g),
                h > f &&
                ((a = i.left * r - (t * r - t)),
                a > 0 && (a = 0),
                a < f - h && (a = f - h)),
                g > p &&
                ((s = i.top * c - (e * c - e)),
                s > 0 && (s = 0),
                s < p - g && (s = p - g)),
                    l.updateCursor(h, g),
                    n.fancybox.animate(
                        u,
                        { top: s, left: a, scaleX: r, scaleY: c },
                        o || 366,
                        function () {
                            l.isAnimating = !1;
                        }
                    ),
                l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
            },
            scaleToFit: function (t) {
                var e,
                    o = this,
                    i = o.current,
                    a = i.$content;
                o.isAnimating ||
                o.isMoved() ||
                !a ||
                "image" != i.type ||
                !i.isLoaded ||
                i.hasError ||
                ((o.isAnimating = !0),
                    n.fancybox.stop(a),
                    (e = o.getFitPos(i)),
                    o.updateCursor(e.width, e.height),
                    n.fancybox.animate(
                        a,
                        {
                            top: e.top,
                            left: e.left,
                            scaleX: e.width / a.width(),
                            scaleY: e.height / a.height(),
                        },
                        t || 366,
                        function () {
                            o.isAnimating = !1;
                        }
                    ));
            },
            getFitPos: function (t) {
                var e,
                    o,
                    i,
                    a,
                    s = this,
                    r = t.$content,
                    c = t.$slide,
                    l = t.width || t.opts.width,
                    d = t.height || t.opts.height,
                    u = {};
                return (
                    !!(t.isLoaded && r && r.length) &&
                    ((e = n.fancybox.getTranslate(s.$refs.stage).width),
                        (o = n.fancybox.getTranslate(s.$refs.stage).height),
                        (e -=
                            parseFloat(c.css("paddingLeft")) +
                            parseFloat(c.css("paddingRight")) +
                            parseFloat(r.css("marginLeft")) +
                            parseFloat(r.css("marginRight"))),
                        (o -=
                            parseFloat(c.css("paddingTop")) +
                            parseFloat(c.css("paddingBottom")) +
                            parseFloat(r.css("marginTop")) +
                            parseFloat(r.css("marginBottom"))),
                    (l && d) || ((l = e), (d = o)),
                        (i = Math.min(1, e / l, o / d)),
                        (l *= i),
                        (d *= i),
                    l > e - 0.5 && (l = e),
                    d > o - 0.5 && (d = o),
                        "image" === t.type
                            ? ((u.top =
                                Math.floor(0.5 * (o - d)) + parseFloat(c.css("paddingTop"))),
                                (u.left =
                                    Math.floor(0.5 * (e - l)) + parseFloat(c.css("paddingLeft"))))
                            : "video" === t.contentType &&
                            ((a =
                                t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9),
                                d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
                        (u.width = l),
                        (u.height = d),
                        u)
                );
            },
            update: function (t) {
                var e = this;
                n.each(e.slides, function (n, o) {
                    e.updateSlide(o, t);
                });
            },
            updateSlide: function (t, e) {
                var o = this,
                    i = t && t.$content,
                    a = t.width || t.opts.width,
                    s = t.height || t.opts.height,
                    r = t.$slide;
                o.adjustCaption(t),
                i &&
                (a || s || "video" === t.contentType) &&
                !t.hasError &&
                (n.fancybox.stop(i),
                    n.fancybox.setTranslate(i, o.getFitPos(t)),
                t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
                    o.adjustLayout(t),
                r.length &&
                (r.trigger("refresh"),
                t.pos === o.currPos &&
                o.$refs.toolbar
                    .add(o.$refs.navigation.find(".fancybox-button--arrow_right"))
                    .toggleClass(
                        "compensate-for-scrollbar",
                        r.get(0).scrollHeight > r.get(0).clientHeight
                    )),
                    o.trigger("onUpdate", t, e);
            },
            centerSlide: function (t) {
                var e = this,
                    o = e.current,
                    i = o.$slide;
                !e.isClosing &&
                o &&
                (i.siblings().css({ transform: "", opacity: "" }),
                    i
                        .parent()
                        .children()
                        .removeClass("fancybox-slide--previous fancybox-slide--next"),
                    n.fancybox.animate(
                        i,
                        { top: 0, left: 0, opacity: 1 },
                        void 0 === t ? 0 : t,
                        function () {
                            i.css({ transform: "", opacity: "" }),
                            o.isComplete || e.complete();
                        },
                        !1
                    ));
            },
            isMoved: function (t) {
                var e,
                    o,
                    i = t || this.current;
                return (
                    !!i &&
                    ((o = n.fancybox.getTranslate(this.$refs.stage)),
                        (e = n.fancybox.getTranslate(i.$slide)),
                    !i.$slide.hasClass("fancybox-animated") &&
                    (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5))
                );
            },
            updateCursor: function (t, e) {
                var o,
                    i,
                    a = this,
                    s = a.current,
                    r = a.$refs.container;
                s &&
                !a.isClosing &&
                a.Guestures &&
                (r.removeClass(
                    "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
                ),
                    (o = a.canPan(t, e)),
                    (i = !!o || a.isZoomable()),
                    r.toggleClass("fancybox-is-zoomable", i),
                    n("[data-fancybox-zoom]").prop("disabled", !i),
                    o
                        ? r.addClass("fancybox-can-pan")
                        : i &&
                        ("zoom" === s.opts.clickContent ||
                            (n.isFunction(s.opts.clickContent) &&
                                "zoom" == s.opts.clickContent(s)))
                            ? r.addClass("fancybox-can-zoomIn")
                            : s.opts.touch &&
                            (s.opts.touch.vertical || a.group.length > 1) &&
                            "video" !== s.contentType &&
                            r.addClass("fancybox-can-swipe"));
            },
            isZoomable: function () {
                var t,
                    e = this,
                    n = e.current;
                if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                    if (!n.isLoaded) return !0;
                    if (
                        (t = e.getFitPos(n)) &&
                        (n.width > t.width || n.height > t.height)
                    )
                        return !0;
                }
                return !1;
            },
            isScaledDown: function (t, e) {
                var o = this,
                    i = !1,
                    a = o.current,
                    s = a.$content;
                return (
                    void 0 !== t && void 0 !== e
                        ? (i = t < a.width && e < a.height)
                        : s &&
                        ((i = n.fancybox.getTranslate(s)),
                            (i = i.width < a.width && i.height < a.height)),
                        i
                );
            },
            canPan: function (t, e) {
                var o = this,
                    i = o.current,
                    a = null,
                    s = !1;
                return (
                    "image" === i.type &&
                    (i.isComplete || (t && e)) &&
                    !i.hasError &&
                    ((s = o.getFitPos(i)),
                        void 0 !== t && void 0 !== e
                            ? (a = { width: t, height: e })
                            : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
                    a &&
                    s &&
                    (s =
                        Math.abs(a.width - s.width) > 1.5 ||
                        Math.abs(a.height - s.height) > 1.5)),
                        s
                );
            },
            loadSlide: function (t) {
                var e,
                    o,
                    i,
                    a = this;
                if (!t.isLoading && !t.isLoaded) {
                    if (((t.isLoading = !0), !1 === a.trigger("beforeLoad", t)))
                        return (t.isLoading = !1), !1;
                    switch (
                        ((e = t.type),
                            (o = t.$slide),
                            o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),
                            e)
                        ) {
                        case "image":
                            a.setImage(t);
                            break;
                        case "iframe":
                            a.setIframe(t);
                            break;
                        case "html":
                            a.setContent(t, t.src || t.content);
                            break;
                        case "video":
                            a.setContent(
                                t,
                                t.opts.video.tpl
                                    .replace(/\{\{src\}\}/gi, t.src)
                                    .replace(
                                        "{{format}}",
                                        t.opts.videoFormat || t.opts.video.format || ""
                                    )
                                    .replace("{{poster}}", t.thumb || "")
                            );
                            break;
                        case "inline":
                            n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                            break;
                        case "ajax":
                            a.showLoading(t),
                                (i = n.ajax(
                                    n.extend({}, t.opts.ajax.settings, {
                                        url: t.src,
                                        success: function (e, n) {
                                            "success" === n && a.setContent(t, e);
                                        },
                                        error: function (e, n) {
                                            e && "abort" !== n && a.setError(t);
                                        },
                                    })
                                )),
                                o.one("onReset", function () {
                                    i.abort();
                                });
                            break;
                        default:
                            a.setError(t);
                    }
                    return !0;
                }
            },
            setImage: function (t) {
                var o,
                    i = this;
                setTimeout(function () {
                    var e = t.$image;
                    i.isClosing ||
                    !t.isLoading ||
                    (e && e.length && e[0].complete) ||
                    t.hasError ||
                    i.showLoading(t);
                }, 50),
                    i.checkSrcset(t),
                    (t.$content = n('<div class="fancybox-content"></div>')
                        .addClass("fancybox-is-hidden")
                        .appendTo(t.$slide.addClass("fancybox-slide--image"))),
                !1 !== t.opts.preload &&
                t.opts.width &&
                t.opts.height &&
                t.thumb &&
                ((t.width = t.opts.width),
                    (t.height = t.opts.height),
                    (o = e.createElement("img")),
                    (o.onerror = function () {
                        n(this).remove(), (t.$ghost = null);
                    }),
                    (o.onload = function () {
                        i.afterLoad(t);
                    }),
                    (t.$ghost = n(o)
                        .addClass("fancybox-image")
                        .appendTo(t.$content)
                        .attr("src", t.thumb))),
                    i.setBigImage(t);
            },
            checkSrcset: function (e) {
                var n,
                    o,
                    i,
                    a,
                    s = e.opts.srcset || e.opts.image.srcset;
                if (s) {
                    (i = t.devicePixelRatio || 1),
                        (a = t.innerWidth * i),
                        (o = s.split(",").map(function (t) {
                            var e = {};
                            return (
                                t
                                    .trim()
                                    .split(/\s+/)
                                    .forEach(function (t, n) {
                                        var o = parseInt(t.substring(0, t.length - 1), 10);
                                        if (0 === n) return (e.url = t);
                                        o && ((e.value = o), (e.postfix = t[t.length - 1]));
                                    }),
                                    e
                            );
                        })),
                        o.sort(function (t, e) {
                            return t.value - e.value;
                        });
                    for (var r = 0; r < o.length; r++) {
                        var c = o[r];
                        if (
                            ("w" === c.postfix && c.value >= a) ||
                            ("x" === c.postfix && c.value >= i)
                        ) {
                            n = c;
                            break;
                        }
                    }
                    !n && o.length && (n = o[o.length - 1]),
                    n &&
                    ((e.src = n.url),
                    e.width &&
                    e.height &&
                    "w" == n.postfix &&
                    ((e.height = (e.width / e.height) * n.value),
                        (e.width = n.value)),
                        (e.opts.srcset = s));
                }
            },
            setBigImage: function (t) {
                var o = this,
                    i = e.createElement("img"),
                    a = n(i);
                (t.$image = a
                    .one("error", function () {
                        o.setError(t);
                    })
                    .one("load", function () {
                        var e;
                        t.$ghost ||
                        (o.resolveImageSlideSize(
                            t,
                            this.naturalWidth,
                            this.naturalHeight
                        ),
                            o.afterLoad(t)),
                        o.isClosing ||
                        (t.opts.srcset &&
                        ((e = t.opts.sizes),
                        (e && "auto" !== e) ||
                        (e =
                            (t.width / t.height > 1 && s.width() / s.height() > 1
                                ? "100"
                                : Math.round((t.width / t.height) * 100)) + "vw"),
                            a.attr("sizes", e).attr("srcset", t.opts.srcset)),
                        t.$ghost &&
                        setTimeout(function () {
                            t.$ghost && !o.isClosing && t.$ghost.hide();
                        }, Math.min(300, Math.max(1e3, t.height / 1600))),
                            o.hideLoading(t));
                    })
                    .addClass("fancybox-image")
                    .attr("src", t.src)
                    .appendTo(t.$content)),
                    (i.complete || "complete" == i.readyState) &&
                    a.naturalWidth &&
                    a.naturalHeight
                        ? a.trigger("load")
                        : i.error && a.trigger("error");
            },
            resolveImageSlideSize: function (t, e, n) {
                var o = parseInt(t.opts.width, 10),
                    i = parseInt(t.opts.height, 10);
                (t.width = e),
                    (t.height = n),
                o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
                i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i));
            },
            setIframe: function (t) {
                var e,
                    o = this,
                    i = t.opts.iframe,
                    a = t.$slide;
                (t.$content = n(
                    '<div class="fancybox-content' +
                    (i.preload ? " fancybox-is-hidden" : "") +
                    '"></div>'
                )
                    .css(i.css)
                    .appendTo(a)),
                    a.addClass("fancybox-slide--" + t.contentType),
                    (t.$iframe = e =
                        n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                            .attr(i.attr)
                            .appendTo(t.$content)),
                    i.preload
                        ? (o.showLoading(t),
                            e.on("load.fb error.fb", function (e) {
                                (this.isReady = 1), t.$slide.trigger("refresh"), o.afterLoad(t);
                            }),
                            a.on("refresh.fb", function () {
                                var n,
                                    o,
                                    s = t.$content,
                                    r = i.css.width,
                                    c = i.css.height;
                                if (1 === e[0].isReady) {
                                    try {
                                        (n = e.contents()), (o = n.find("body"));
                                    } catch (t) {}
                                    o &&
                                    o.length &&
                                    o.children().length &&
                                    (a.css("overflow", "visible"),
                                        s.css({
                                            width: "100%",
                                            "max-width": "100%",
                                            height: "9999px",
                                        }),
                                    void 0 === r &&
                                    (r = Math.ceil(
                                        Math.max(o[0].clientWidth, o.outerWidth(!0))
                                    )),
                                        s.css("width", r || "").css("max-width", ""),
                                    void 0 === c &&
                                    (c = Math.ceil(
                                        Math.max(o[0].clientHeight, o.outerHeight(!0))
                                    )),
                                        s.css("height", c || ""),
                                        a.css("overflow", "auto")),
                                        s.removeClass("fancybox-is-hidden");
                                }
                            }))
                        : o.afterLoad(t),
                    e.attr("src", t.src),
                    a.one("onReset", function () {
                        try {
                            n(this)
                                .find("iframe")
                                .hide()
                                .unbind()
                                .attr("src", "//about:blank");
                        } catch (t) {}
                        n(this).off("refresh.fb").empty(),
                            (t.isLoaded = !1),
                            (t.isRevealed = !1);
                    });
            },
            setContent: function (t, e) {
                var o = this;
                o.isClosing ||
                (o.hideLoading(t),
                t.$content && n.fancybox.stop(t.$content),
                    t.$slide.empty(),
                    l(e) && e.parent().length
                        ? ((e.hasClass("fancybox-content") ||
                            e.parent().hasClass("fancybox-content")) &&
                        e.parents(".fancybox-slide").trigger("onReset"),
                            (t.$placeholder = n("<div>").hide().insertAfter(e)),
                            e.css("display", "inline-block"))
                        : t.hasError ||
                        ("string" === n.type(e) &&
                        (e = n("<div>").append(n.trim(e)).contents()),
                        t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                    t.$slide.one("onReset", function () {
                        n(this).find("video,audio").trigger("pause"),
                        t.$placeholder &&
                        (t.$placeholder
                            .after(e.removeClass("fancybox-content").hide())
                            .remove(),
                            (t.$placeholder = null)),
                        t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                        t.hasError ||
                        (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
                    }),
                    n(e).appendTo(t.$slide),
                n(e).is("video,audio") &&
                (n(e).addClass("fancybox-video"),
                    n(e).wrap("<div></div>"),
                    (t.contentType = "video"),
                    (t.opts.width = t.opts.width || n(e).attr("width")),
                    (t.opts.height = t.opts.height || n(e).attr("height"))),
                    (t.$content = t.$slide
                        .children()
                        .filter("div,form,main,video,audio,article,.fancybox-content")
                        .first()),
                    t.$content.siblings().hide(),
                t.$content.length ||
                (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                    t.$content.addClass("fancybox-content"),
                    t.$slide.addClass("fancybox-slide--" + t.contentType),
                    o.afterLoad(t));
            },
            setError: function (t) {
                (t.hasError = !0),
                    t.$slide
                        .trigger("onReset")
                        .removeClass("fancybox-slide--" + t.contentType)
                        .addClass("fancybox-slide--error"),
                    (t.contentType = "html"),
                    this.setContent(t, this.translate(t, t.opts.errorTpl)),
                t.pos === this.currPos && (this.isAnimating = !1);
            },
            showLoading: function (t) {
                var e = this;
                (t = t || e.current) &&
                !t.$spinner &&
                (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
                    .appendTo(t.$slide)
                    .hide()
                    .fadeIn("fast"));
            },
            hideLoading: function (t) {
                var e = this;
                (t = t || e.current) &&
                t.$spinner &&
                (t.$spinner.stop().remove(), delete t.$spinner);
            },
            afterLoad: function (t) {
                var e = this;
                e.isClosing ||
                ((t.isLoading = !1),
                    (t.isLoaded = !0),
                    e.trigger("afterLoad", t),
                    e.hideLoading(t),
                !t.opts.smallBtn ||
                (t.$smallBtn && t.$smallBtn.length) ||
                (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
                    t.$content
                )),
                t.opts.protect &&
                t.$content &&
                !t.hasError &&
                (t.$content.on("contextmenu.fb", function (t) {
                    return 2 == t.button && t.preventDefault(), !0;
                }),
                "image" === t.type &&
                n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                    e.adjustCaption(t),
                    e.adjustLayout(t),
                t.pos === e.currPos && e.updateCursor(),
                    e.revealContent(t));
            },
            adjustCaption: function (t) {
                var e,
                    n = this,
                    o = t || n.current,
                    i = o.opts.caption,
                    a = o.opts.preventCaptionOverlap,
                    s = n.$refs.caption,
                    r = !1;
                s.toggleClass("fancybox-caption--separate", a),
                a &&
                i &&
                i.length &&
                (o.pos !== n.currPos
                    ? ((e = s.clone().appendTo(s.parent())),
                        e.children().eq(0).empty().html(i),
                        (r = e.outerHeight(!0)),
                        e.empty().remove())
                    : n.$caption && (r = n.$caption.outerHeight(!0)),
                    o.$slide.css("padding-bottom", r || ""));
            },
            adjustLayout: function (t) {
                var e,
                    n,
                    o,
                    i,
                    a = this,
                    s = t || a.current;
                s.isLoaded &&
                !0 !== s.opts.disableLayoutFix &&
                (s.$content.css("margin-bottom", ""),
                s.$content.outerHeight() > s.$slide.height() + 0.5 &&
                ((o = s.$slide[0].style["padding-bottom"]),
                    (i = s.$slide.css("padding-bottom")),
                parseFloat(i) > 0 &&
                ((e = s.$slide[0].scrollHeight),
                    s.$slide.css("padding-bottom", 0),
                Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
                    s.$slide.css("padding-bottom", o))),
                    s.$content.css("margin-bottom", n));
            },
            revealContent: function (t) {
                var e,
                    o,
                    i,
                    a,
                    s = this,
                    r = t.$slide,
                    c = !1,
                    l = !1,
                    d = s.isMoved(t),
                    u = t.isRevealed;
                return (
                    (t.isRevealed = !0),
                        (e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
                        (i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"]),
                        (i = parseInt(
                            void 0 === t.forcedDuration ? i : t.forcedDuration,
                            10
                        )),
                    (!d && t.pos === s.currPos && i) || (e = !1),
                    "zoom" === e &&
                    (t.pos === s.currPos &&
                    i &&
                    "image" === t.type &&
                    !t.hasError &&
                    (l = s.getThumbPos(t))
                        ? (c = s.getFitPos(t))
                        : (e = "fade")),
                        "zoom" === e
                            ? ((s.isAnimating = !0),
                                (c.scaleX = c.width / l.width),
                                (c.scaleY = c.height / l.height),
                                (a = t.opts.zoomOpacity),
                            "auto" == a &&
                            (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
                            a && ((l.opacity = 0.1), (c.opacity = 1)),
                                n.fancybox.setTranslate(
                                    t.$content.removeClass("fancybox-is-hidden"),
                                    l
                                ),
                                p(t.$content),
                                void n.fancybox.animate(t.$content, c, i, function () {
                                    (s.isAnimating = !1), s.complete();
                                }))
                            : (s.updateSlide(t),
                                e
                                    ? (n.fancybox.stop(r),
                                        (o =
                                            "fancybox-slide--" +
                                            (t.pos >= s.prevPos ? "next" : "previous") +
                                            " fancybox-animated fancybox-fx-" +
                                            e),
                                        r.addClass(o).removeClass("fancybox-slide--current"),
                                        t.$content.removeClass("fancybox-is-hidden"),
                                        p(r),
                                    "image" !== t.type && t.$content.hide().show(0),
                                        void n.fancybox.animate(
                                            r,
                                            "fancybox-slide--current",
                                            i,
                                            function () {
                                                r.removeClass(o).css({ transform: "", opacity: "" }),
                                                t.pos === s.currPos && s.complete();
                                            },
                                            !0
                                        ))
                                    : (t.$content.removeClass("fancybox-is-hidden"),
                                    u ||
                                    !d ||
                                    "image" !== t.type ||
                                    t.hasError ||
                                    t.$content.hide().fadeIn("fast"),
                                        void (t.pos === s.currPos && s.complete())))
                );
            },
            getThumbPos: function (t) {
                var e,
                    o,
                    i,
                    a,
                    s,
                    r = !1,
                    c = t.$thumb;
                return (
                    !(!c || !g(c[0])) &&
                    ((e = n.fancybox.getTranslate(c)),
                        (o = parseFloat(c.css("border-top-width") || 0)),
                        (i = parseFloat(c.css("border-right-width") || 0)),
                        (a = parseFloat(c.css("border-bottom-width") || 0)),
                        (s = parseFloat(c.css("border-left-width") || 0)),
                        (r = {
                            top: e.top + o,
                            left: e.left + s,
                            width: e.width - i - s,
                            height: e.height - o - a,
                            scaleX: 1,
                            scaleY: 1,
                        }),
                    e.width > 0 && e.height > 0 && r)
                );
            },
            complete: function () {
                var t,
                    e = this,
                    o = e.current,
                    i = {};
                !e.isMoved() &&
                o.isLoaded &&
                (o.isComplete ||
                ((o.isComplete = !0),
                    o.$slide.siblings().trigger("onReset"),
                    e.preload("inline"),
                    p(o.$slide),
                    o.$slide.addClass("fancybox-slide--complete"),
                    n.each(e.slides, function (t, o) {
                        o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                            ? (i[o.pos] = o)
                            : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
                    }),
                    (e.slides = i)),
                    (e.isAnimating = !1),
                    e.updateCursor(),
                    e.trigger("afterShow"),
                o.opts.video.autoStart &&
                o.$slide
                    .find("video,audio")
                    .filter(":visible:first")
                    .trigger("play")
                    .one("ended", function () {
                        this.webkitExitFullscreen && this.webkitExitFullscreen(),
                            e.next();
                    }),
                o.opts.autoFocus &&
                "html" === o.contentType &&
                ((t = o.$content.find("input[autofocus]:enabled:visible:first")),
                    t.length ? t.trigger("focus") : e.focus(null, !0)),
                    o.$slide.scrollTop(0).scrollLeft(0));
            },
            preload: function (t) {
                var e,
                    n,
                    o = this;
                o.group.length < 2 ||
                ((n = o.slides[o.currPos + 1]),
                    (e = o.slides[o.currPos - 1]),
                e && e.type === t && o.loadSlide(e),
                n && n.type === t && o.loadSlide(n));
            },
            focus: function (t, o) {
                var i,
                    a,
                    s = this,
                    r = [
                        "a[href]",
                        "area[href]",
                        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                        "select:not([disabled]):not([aria-hidden])",
                        "textarea:not([disabled]):not([aria-hidden])",
                        "button:not([disabled]):not([aria-hidden])",
                        "iframe",
                        "object",
                        "embed",
                        "video",
                        "audio",
                        "[contenteditable]",
                        '[tabindex]:not([tabindex^="-"])',
                    ].join(",");
                s.isClosing ||
                ((i =
                    !t && s.current && s.current.isComplete
                        ? s.current.$slide.find(
                            "*:visible" + (o ? ":not(.fancybox-close-small)" : "")
                        )
                        : s.$refs.container.find("*:visible")),
                    (i = i.filter(r).filter(function () {
                        return (
                            "hidden" !== n(this).css("visibility") &&
                            !n(this).hasClass("disabled")
                        );
                    })),
                    i.length
                        ? ((a = i.index(e.activeElement)),
                            t && t.shiftKey
                                ? (a < 0 || 0 == a) &&
                                (t.preventDefault(), i.eq(i.length - 1).trigger("focus"))
                                : (a < 0 || a == i.length - 1) &&
                                (t && t.preventDefault(), i.eq(0).trigger("focus")))
                        : s.$refs.container.trigger("focus"));
            },
            activate: function () {
                var t = this;
                n(".fancybox-container").each(function () {
                    var e = n(this).data("FancyBox");
                    e &&
                    e.id !== t.id &&
                    !e.isClosing &&
                    (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
                }),
                    (t.isVisible = !0),
                (t.current || t.isIdle) && (t.update(), t.updateControls()),
                    t.trigger("onActivate"),
                    t.addEvents();
            },
            close: function (t, e) {
                var o,
                    i,
                    a,
                    s,
                    r,
                    c,
                    l,
                    u = this,
                    f = u.current,
                    h = function () {
                        u.cleanUp(t);
                    };
                return (
                    !u.isClosing &&
                    ((u.isClosing = !0),
                        !1 === u.trigger("beforeClose", t)
                            ? ((u.isClosing = !1),
                                d(function () {
                                    u.update();
                                }),
                                !1)
                            : (u.removeEvents(),
                                (a = f.$content),
                                (o = f.opts.animationEffect),
                                (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
                                f.$slide.removeClass(
                                    "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                                ),
                                !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
                                f.$slide.siblings().trigger("onReset").remove(),
                            i &&
                            u.$refs.container
                                .removeClass("fancybox-is-open")
                                .addClass("fancybox-is-closing")
                                .css("transition-duration", i + "ms"),
                                u.hideLoading(f),
                                u.hideControls(!0),
                                u.updateCursor(),
                            "zoom" !== o ||
                            (a &&
                                i &&
                                "image" === f.type &&
                                !u.isMoved() &&
                                !f.hasError &&
                                (l = u.getThumbPos(f))) ||
                            (o = "fade"),
                                "zoom" === o
                                    ? (n.fancybox.stop(a),
                                        (s = n.fancybox.getTranslate(a)),
                                        (c = {
                                            top: s.top,
                                            left: s.left,
                                            scaleX: s.width / l.width,
                                            scaleY: s.height / l.height,
                                            width: l.width,
                                            height: l.height,
                                        }),
                                        (r = f.opts.zoomOpacity),
                                    "auto" == r &&
                                    (r =
                                        Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                                    r && (l.opacity = 0),
                                        n.fancybox.setTranslate(a, c),
                                        p(a),
                                        n.fancybox.animate(a, l, i, h),
                                        !0)
                                    : (o && i
                                        ? n.fancybox.animate(
                                            f.$slide
                                                .addClass("fancybox-slide--previous")
                                                .removeClass("fancybox-slide--current"),
                                            "fancybox-animated fancybox-fx-" + o,
                                            i,
                                            h
                                        )
                                        : !0 === t
                                            ? setTimeout(h, i)
                                            : h(),
                                        !0)))
                );
            },
            cleanUp: function (e) {
                var o,
                    i,
                    a,
                    s = this,
                    r = s.current.opts.$orig;
                s.current.$slide.trigger("onReset"),
                    s.$refs.container.empty().remove(),
                    s.trigger("afterClose", e),
                s.current.opts.backFocus &&
                ((r && r.length && r.is(":visible")) || (r = s.$trigger),
                r &&
                r.length &&
                ((i = t.scrollX),
                    (a = t.scrollY),
                    r.trigger("focus"),
                    n("html, body").scrollTop(a).scrollLeft(i))),
                    (s.current = null),
                    (o = n.fancybox.getInstance()),
                    o
                        ? o.activate()
                        : (n("body").removeClass(
                            "fancybox-active compensate-for-scrollbar"
                        ),
                            n("#fancybox-style-noscroll").remove());
            },
            trigger: function (t, e) {
                var o,
                    i = Array.prototype.slice.call(arguments, 1),
                    a = this,
                    s = e && e.opts ? e : a.current;
                if (
                    (s ? i.unshift(s) : (s = a),
                        i.unshift(a),
                    n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
                    !1 === o)
                )
                    return o;
                "afterClose" !== t && a.$refs
                    ? a.$refs.container.trigger(t + ".fb", i)
                    : r.trigger(t + ".fb", i);
            },
            updateControls: function () {
                var t = this,
                    o = t.current,
                    i = o.index,
                    a = t.$refs.container,
                    s = t.$refs.caption,
                    r = o.opts.caption;
                o.$slide.trigger("refresh"),
                    r && r.length
                        ? ((t.$caption = s), s.children().eq(0).html(r))
                        : (t.$caption = null),
                t.hasHiddenControls || t.isIdle || t.showControls(),
                    a.find("[data-fancybox-count]").html(t.group.length),
                    a.find("[data-fancybox-index]").html(i + 1),
                    a
                        .find("[data-fancybox-prev]")
                        .prop("disabled", !o.opts.loop && i <= 0),
                    a
                        .find("[data-fancybox-next]")
                        .prop("disabled", !o.opts.loop && i >= t.group.length - 1),
                    "image" === o.type
                        ? a
                            .find("[data-fancybox-zoom]")
                            .show()
                            .end()
                            .find("[data-fancybox-download]")
                            .attr("href", o.opts.image.src || o.src)
                            .show()
                        : o.opts.toolbar &&
                        a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                n(e.activeElement).is(":hidden,[disabled]") &&
                t.$refs.container.trigger("focus");
            },
            hideControls: function (t) {
                var e = this,
                    n = ["infobar", "toolbar", "nav"];
                (!t && e.current.opts.preventCaptionOverlap) || n.push("caption"),
                    this.$refs.container.removeClass(
                        n
                            .map(function (t) {
                                return "fancybox-show-" + t;
                            })
                            .join(" ")
                    ),
                    (this.hasHiddenControls = !0);
            },
            showControls: function () {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                (t.hasHiddenControls = !1),
                    (t.idleSecondsCounter = 0),
                    n
                        .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
                        .toggleClass(
                            "fancybox-show-infobar",
                            !!(e.infobar && t.group.length > 1)
                        )
                        .toggleClass("fancybox-show-caption", !!t.$caption)
                        .toggleClass(
                            "fancybox-show-nav",
                            !!(e.arrows && t.group.length > 1)
                        )
                        .toggleClass("fancybox-is-modal", !!e.modal);
            },
            toggleControls: function () {
                this.hasHiddenControls ? this.showControls() : this.hideControls();
            },
        }),
            (n.fancybox = {
                version: "3.5.6",
                defaults: a,
                getInstance: function (t) {
                    var e = n(
                            '.fancybox-container:not(".fancybox-is-closing"):last'
                        ).data("FancyBox"),
                        o = Array.prototype.slice.call(arguments, 1);
                    return (
                        e instanceof b &&
                        ("string" === n.type(t)
                            ? e[t].apply(e, o)
                            : "function" === n.type(t) && t.apply(e, o),
                            e)
                    );
                },
                open: function (t, e, n) {
                    return new b(t, e, n);
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t));
                },
                destroy: function () {
                    this.close(!0), r.add("body").off("click.fb-start", "**");
                },
                isMobile:
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                    ),
                use3d: (function () {
                    var n = e.createElement("div");
                    return (
                        t.getComputedStyle &&
                        t.getComputedStyle(n) &&
                        t.getComputedStyle(n).getPropertyValue("transform") &&
                        !(e.documentMode && e.documentMode < 11)
                    );
                })(),
                getTranslate: function (t) {
                    var e;
                    return (
                        !(!t || !t.length) &&
                        ((e = t[0].getBoundingClientRect()),
                            {
                                top: e.top || 0,
                                left: e.left || 0,
                                width: e.width,
                                height: e.height,
                                opacity: parseFloat(t.css("opacity")),
                            })
                    );
                },
                setTranslate: function (t, e) {
                    var n = "",
                        o = {};
                    if (t && e)
                        return (
                            (void 0 === e.left && void 0 === e.top) ||
                            ((n =
                                (void 0 === e.left ? t.position().left : e.left) +
                                "px, " +
                                (void 0 === e.top ? t.position().top : e.top) +
                                "px"),
                                (n = this.use3d
                                    ? "translate3d(" + n + ", 0px)"
                                    : "translate(" + n + ")")),
                                void 0 !== e.scaleX && void 0 !== e.scaleY
                                    ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")")
                                    : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                            n.length && (o.transform = n),
                            void 0 !== e.opacity && (o.opacity = e.opacity),
                            void 0 !== e.width && (o.width = e.width),
                            void 0 !== e.height && (o.height = e.height),
                                t.css(o)
                        );
                },
                animate: function (t, e, o, i, a) {
                    var s,
                        r = this;
                    n.isFunction(o) && ((i = o), (o = null)),
                        r.stop(t),
                        (s = r.getTranslate(t)),
                        t.on(f, function (c) {
                            (!c ||
                                !c.originalEvent ||
                                (t.is(c.originalEvent.target) &&
                                    "z-index" != c.originalEvent.propertyName)) &&
                            (r.stop(t),
                            n.isNumeric(o) && t.css("transition-duration", ""),
                                n.isPlainObject(e)
                                    ? void 0 !== e.scaleX &&
                                    void 0 !== e.scaleY &&
                                    r.setTranslate(t, {
                                        top: e.top,
                                        left: e.left,
                                        width: s.width * e.scaleX,
                                        height: s.height * e.scaleY,
                                        scaleX: 1,
                                        scaleY: 1,
                                    })
                                    : !0 !== a && t.removeClass(e),
                            n.isFunction(i) && i(c));
                        }),
                    n.isNumeric(o) && t.css("transition-duration", o + "ms"),
                        n.isPlainObject(e)
                            ? (void 0 !== e.scaleX &&
                            void 0 !== e.scaleY &&
                            (delete e.width,
                                delete e.height,
                            t.parent().hasClass("fancybox-slide--image") &&
                            t.parent().addClass("fancybox-is-scaling")),
                                n.fancybox.setTranslate(t, e))
                            : t.addClass(e),
                        t.data(
                            "timer",
                            setTimeout(function () {
                                t.trigger(f);
                            }, o + 33)
                        );
                },
                stop: function (t, e) {
                    t &&
                    t.length &&
                    (clearTimeout(t.data("timer")),
                    e && t.trigger(f),
                        t.off(f).css("transition-duration", ""),
                        t.parent().removeClass("fancybox-is-scaling"));
                },
            }),
            (n.fn.fancybox = function (t) {
                var e;
                return (
                    (t = t || {}),
                        (e = t.selector || !1),
                        e
                            ? n("body")
                                .off("click.fb-start", e)
                                .on("click.fb-start", e, { options: t }, i)
                            : this.off("click.fb-start").on(
                                "click.fb-start",
                                { items: this, options: t },
                                i
                            ),
                        this
                );
            }),
            r.on("click.fb-start", "[data-fancybox]", i),
            r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
                    .eq(n(this).attr("data-fancybox-index") || 0)
                    .trigger("click.fb-start", { $trigger: n(this) });
            }),
            (function () {
                var t = null;
                r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
                    switch (e.type) {
                        case "mousedown":
                            t = n(this);
                            break;
                        case "mouseup":
                            t = null;
                            break;
                        case "focusin":
                            n(".fancybox-button").removeClass("fancybox-focus"),
                            n(this).is(t) ||
                            n(this).is("[disabled]") ||
                            n(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            n(".fancybox-button").removeClass("fancybox-focus");
                    }
                });
            })();
    }
})(window, document, jQuery),
    (function (t) {
        "use strict";
        var e = {
                youtube: {
                    matcher:
                        /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1,
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "https://www.youtube-nocookie.com/embed/$4",
                    thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1,
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2",
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l",
                },
                gmap_place: {
                    matcher:
                        /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function (t) {
                        return (
                            "//maps.google." +
                            t[2] +
                            "/?ll=" +
                            (t[9]
                                    ? t[9] +
                                    "&z=" +
                                    Math.floor(t[10]) +
                                    (t[12] ? t[12].replace(/^\//, "&") : "")
                                    : t[12] + ""
                            ).replace(/\?/, "&") +
                            "&output=" +
                            (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        );
                    },
                },
                gmap_search: {
                    matcher:
                        /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function (t) {
                        return (
                            "//maps.google." +
                            t[2] +
                            "/maps?q=" +
                            t[5].replace("query=", "q=").replace("api=1", "") +
                            "&output=embed"
                        );
                    },
                },
            },
            n = function (e, n, o) {
                if (e)
                    return (
                        (o = o || ""),
                        "object" === t.type(o) && (o = t.param(o, !0)),
                            t.each(n, function (t, n) {
                                e = e.replace("$" + t, n || "");
                            }),
                        o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
                            e
                    );
            };
        t(document).on("objectNeedsType.fb", function (o, i, a) {
            var s,
                r,
                c,
                l,
                d,
                u,
                f,
                p = a.src || "",
                h = !1;
            (s = t.extend(!0, {}, e, a.opts.media)),
                t.each(s, function (e, o) {
                    if ((c = p.match(o.matcher))) {
                        if (
                            ((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])
                        ) {
                            (d = c[o.paramPlace]),
                            "?" == d[0] && (d = d.substring(1)),
                                (d = d.split("&"));
                            for (var i = 0; i < d.length; ++i) {
                                var s = d[i].split("=", 2);
                                2 == s.length &&
                                (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
                            }
                        }
                        return (
                            (l = t.extend(!0, {}, o.params, a.opts[e], u)),
                                (p =
                                    "function" === t.type(o.url)
                                        ? o.url.call(this, c, l, a)
                                        : n(o.url, c, l)),
                                (r =
                                    "function" === t.type(o.thumb)
                                        ? o.thumb.call(this, c, l, a)
                                        : n(o.thumb, c)),
                                "youtube" === e
                                    ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                                        return (
                                            "&start=" +
                                            ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                                        );
                                    }))
                                    : "vimeo" === e && (p = p.replace("&%23", "#")),
                                !1
                        );
                    }
                }),
                h
                    ? (a.opts.thumb ||
                    (a.opts.$thumb && a.opts.$thumb.length) ||
                    (a.opts.thumb = r),
                    "iframe" === h &&
                    (a.opts = t.extend(!0, a.opts, {
                        iframe: { preload: !1, attr: { scrolling: "no" } },
                    })),
                        t.extend(a, {
                            type: h,
                            src: p,
                            origSrc: a.src,
                            contentSource: f,
                            contentType:
                                "image" === h
                                    ? "image"
                                    : "gmap_place" == f || "gmap_search" == f
                                        ? "map"
                                        : "video",
                        }))
                    : p && (a.type = a.opts.defaultType);
        });
        var o = {
            youtube: {
                src: "https://www.youtube.com/iframe_api",
                class: "YT",
                loading: !1,
                loaded: !1,
            },
            vimeo: {
                src: "https://player.vimeo.com/api/player.js",
                class: "Vimeo",
                loading: !1,
                loaded: !1,
            },
            load: function (t) {
                var e,
                    n = this;
                if (this[t].loaded)
                    return void setTimeout(function () {
                        n.done(t);
                    });
                this[t].loading ||
                ((this[t].loading = !0),
                    (e = document.createElement("script")),
                    (e.type = "text/javascript"),
                    (e.src = this[t].src),
                    "youtube" === t
                        ? (window.onYouTubeIframeAPIReady = function () {
                            (n[t].loaded = !0), n.done(t);
                        })
                        : (e.onload = function () {
                            (n[t].loaded = !0), n.done(t);
                        }),
                    document.body.appendChild(e));
            },
            done: function (e) {
                var n, o, i;
                "youtube" === e && delete window.onYouTubeIframeAPIReady,
                (n = t.fancybox.getInstance()) &&
                ((o = n.current.$content.find("iframe")),
                    "youtube" === e && void 0 !== YT && YT
                        ? (i = new YT.Player(o.attr("id"), {
                            events: {
                                onStateChange: function (t) {
                                    0 == t.data && n.next();
                                },
                            },
                        }))
                        : "vimeo" === e &&
                        void 0 !== Vimeo &&
                        Vimeo &&
                        ((i = new Vimeo.Player(o)),
                            i.on("ended", function () {
                                n.next();
                            })));
            },
        };
        t(document).on({
            "afterShow.fb": function (t, e, n) {
                e.group.length > 1 &&
                ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
                o.load(n.contentSource);
            },
        });
    })(jQuery),
    (function (t, e, n) {
        "use strict";
        var o = (function () {
                return (
                    t.requestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60);
                    }
                );
            })(),
            i = (function () {
                return (
                    t.cancelAnimationFrame ||
                    t.webkitCancelAnimationFrame ||
                    t.mozCancelAnimationFrame ||
                    t.oCancelAnimationFrame ||
                    function (e) {
                        t.clearTimeout(e);
                    }
                );
            })(),
            a = function (e) {
                var n = [];
                (e = e.originalEvent || e || t.e),
                    (e =
                        e.touches && e.touches.length
                            ? e.touches
                            : e.changedTouches && e.changedTouches.length
                                ? e.changedTouches
                                : [e]);
                for (var o in e)
                    e[o].pageX
                        ? n.push({ x: e[o].pageX, y: e[o].pageY })
                        : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
                return n;
            },
            s = function (t, e, n) {
                return e && t
                    ? "x" === n
                        ? t.x - e.x
                        : "y" === n
                            ? t.y - e.y
                            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                    : 0;
            },
            r = function (t) {
                if (
                    t.is(
                        'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
                    ) ||
                    n.isFunction(t.get(0).onclick) ||
                    t.data("selectable")
                )
                    return !0;
                for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                    if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
                return !1;
            },
            c = function (e) {
                var n = t.getComputedStyle(e)["overflow-y"],
                    o = t.getComputedStyle(e)["overflow-x"],
                    i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                    a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
                return i || a;
            },
            l = function (t) {
                for (var e = !1; ; ) {
                    if ((e = c(t.get(0)))) break;
                    if (
                        ((t = t.parent()),
                        !t.length || t.hasClass("fancybox-stage") || t.is("body"))
                    )
                        break;
                }
                return e;
            },
            d = function (t) {
                var e = this;
                (e.instance = t),
                    (e.$bg = t.$refs.bg),
                    (e.$stage = t.$refs.stage),
                    (e.$container = t.$refs.container),
                    e.destroy(),
                    e.$container.on(
                        "touchstart.fb.touch mousedown.fb.touch",
                        n.proxy(e, "ontouchstart")
                    );
            };
        (d.prototype.destroy = function () {
            var t = this;
            t.$container.off(".fb.touch"),
                n(e).off(".fb.touch"),
            t.requestId && (i(t.requestId), (t.requestId = null)),
            t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
        }),
            (d.prototype.ontouchstart = function (o) {
                var i = this,
                    c = n(o.target),
                    d = i.instance,
                    u = d.current,
                    f = u.$slide,
                    p = u.$content,
                    h = "touchstart" == o.type;
                if (
                    (h && i.$container.off("mousedown.fb.touch"),
                    (!o.originalEvent || 2 != o.originalEvent.button) &&
                    f.length &&
                    c.length &&
                    !r(c) &&
                    !r(c.parent()) &&
                    (c.is("img") ||
                        !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
                ) {
                    if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
                        return o.stopPropagation(), void o.preventDefault();
                    (i.realPoints = i.startPoints = a(o)),
                    i.startPoints.length &&
                    (u.touch && o.stopPropagation(),
                        (i.startEvent = o),
                        (i.canTap = !0),
                        (i.$target = c),
                        (i.$content = p),
                        (i.opts = u.opts.touch),
                        (i.isPanning = !1),
                        (i.isSwiping = !1),
                        (i.isZooming = !1),
                        (i.isScrolling = !1),
                        (i.canPan = d.canPan()),
                        (i.startTime = new Date().getTime()),
                        (i.distanceX = i.distanceY = i.distance = 0),
                        (i.canvasWidth = Math.round(f[0].clientWidth)),
                        (i.canvasHeight = Math.round(f[0].clientHeight)),
                        (i.contentLastPos = null),
                        (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                            top: 0,
                            left: 0,
                        }),
                        (i.sliderStartPos = n.fancybox.getTranslate(f)),
                        (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
                        (i.sliderStartPos.top -= i.stagePos.top),
                        (i.sliderStartPos.left -= i.stagePos.left),
                        (i.contentStartPos.top -= i.stagePos.top),
                        (i.contentStartPos.left -= i.stagePos.left),
                        n(e)
                            .off(".fb.touch")
                            .on(
                                h
                                    ? "touchend.fb.touch touchcancel.fb.touch"
                                    : "mouseup.fb.touch mouseleave.fb.touch",
                                n.proxy(i, "ontouchend")
                            )
                            .on(
                                h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                                n.proxy(i, "ontouchmove")
                            ),
                    n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0),
                    (((i.opts || i.canPan) &&
                            (c.is(i.$stage) || i.$stage.find(c).length)) ||
                        (c.is(".fancybox-image") && o.preventDefault(),
                        n.fancybox.isMobile && c.parents(".fancybox-caption").length)) &&
                    ((i.isScrollable = l(c) || l(c.parent())),
                    (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                    (1 === i.startPoints.length || u.hasError) &&
                    (i.canPan
                        ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                        : (i.isSwiping = !0),
                        i.$container.addClass("fancybox-is-grabbing")),
                    2 === i.startPoints.length &&
                    "image" === u.type &&
                    (u.isLoaded || u.$ghost) &&
                    ((i.canTap = !1),
                        (i.isSwiping = !1),
                        (i.isPanning = !1),
                        (i.isZooming = !0),
                        n.fancybox.stop(i.$content),
                        (i.centerPointStartX =
                            0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                            n(t).scrollLeft()),
                        (i.centerPointStartY =
                            0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                            n(t).scrollTop()),
                        (i.percentageOfImageAtPinchPointX =
                            (i.centerPointStartX - i.contentStartPos.left) /
                            i.contentStartPos.width),
                        (i.percentageOfImageAtPinchPointY =
                            (i.centerPointStartY - i.contentStartPos.top) /
                            i.contentStartPos.height),
                        (i.startDistanceBetweenFingers = s(
                            i.startPoints[0],
                            i.startPoints[1]
                        )))));
                }
            }),
            (d.prototype.onscroll = function (t) {
                var n = this;
                (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
            }),
            (d.prototype.ontouchmove = function (t) {
                var e = this;
                return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons
                    ? void e.ontouchend(t)
                    : e.isScrolling
                        ? void (e.canTap = !1)
                        : ((e.newPoints = a(t)),
                            void (
                                (e.opts || e.canPan) &&
                                e.newPoints.length &&
                                e.newPoints.length &&
                                ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
                                    (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
                                    (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
                                    (e.distance = s(e.newPoints[0], e.startPoints[0])),
                                e.distance > 0 &&
                                (e.isSwiping
                                    ? e.onSwipe(t)
                                    : e.isPanning
                                        ? e.onPan()
                                        : e.isZooming && e.onZoom()))
                            ));
            }),
            (d.prototype.onSwipe = function (e) {
                var a,
                    s = this,
                    r = s.instance,
                    c = s.isSwiping,
                    l = s.sliderStartPos.left || 0;
                if (!0 !== c)
                    "x" == c &&
                    (s.distanceX > 0 &&
                    (s.instance.group.length < 2 ||
                        (0 === s.instance.current.index && !s.instance.current.opts.loop))
                        ? (l += Math.pow(s.distanceX, 0.8))
                        : s.distanceX < 0 &&
                        (s.instance.group.length < 2 ||
                            (s.instance.current.index === s.instance.group.length - 1 &&
                                !s.instance.current.opts.loop))
                            ? (l -= Math.pow(-s.distanceX, 0.8))
                            : (l += s.distanceX)),
                        (s.sliderLastPos = {
                            top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
                            left: l,
                        }),
                    s.requestId && (i(s.requestId), (s.requestId = null)),
                        (s.requestId = o(function () {
                            s.sliderLastPos &&
                            (n.each(s.instance.slides, function (t, e) {
                                var o = e.pos - s.instance.currPos;
                                n.fancybox.setTranslate(e.$slide, {
                                    top: s.sliderLastPos.top,
                                    left:
                                        s.sliderLastPos.left +
                                        o * s.canvasWidth +
                                        o * e.opts.gutter,
                                });
                            }),
                                s.$container.addClass("fancybox-is-sliding"));
                        }));
                else if (Math.abs(s.distance) > 10) {
                    if (
                        ((s.canTap = !1),
                            r.group.length < 2 && s.opts.vertical
                                ? (s.isSwiping = "y")
                                : r.isDragging ||
                                !1 === s.opts.vertical ||
                                ("auto" === s.opts.vertical && n(t).width() > 800)
                                    ? (s.isSwiping = "x")
                                    : ((a = Math.abs(
                                        (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                                    )),
                                        (s.isSwiping = a > 45 && a < 135 ? "y" : "x")),
                        "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
                    )
                        return void (s.isScrolling = !0);
                    (r.isDragging = s.isSwiping),
                        (s.startPoints = s.newPoints),
                        n.each(r.slides, function (t, e) {
                            var o, i;
                            n.fancybox.stop(e.$slide),
                                (o = n.fancybox.getTranslate(e.$slide)),
                                (i = n.fancybox.getTranslate(r.$refs.stage)),
                                e.$slide
                                    .css({ transform: "", opacity: "", "transition-duration": "" })
                                    .removeClass("fancybox-animated")
                                    .removeClass(function (t, e) {
                                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                    }),
                            e.pos === r.current.pos &&
                            ((s.sliderStartPos.top = o.top - i.top),
                                (s.sliderStartPos.left = o.left - i.left)),
                                n.fancybox.setTranslate(e.$slide, {
                                    top: o.top - i.top,
                                    left: o.left - i.left,
                                });
                        }),
                    r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
                }
            }),
            (d.prototype.onPan = function () {
                var t = this;
                if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5))
                    return void (t.startPoints = t.newPoints);
                (t.canTap = !1),
                    (t.contentLastPos = t.limitMovement()),
                t.requestId && i(t.requestId),
                    (t.requestId = o(function () {
                        n.fancybox.setTranslate(t.$content, t.contentLastPos);
                    }));
            }),
            (d.prototype.limitMovement = function () {
                var t,
                    e,
                    n,
                    o,
                    i,
                    a,
                    s = this,
                    r = s.canvasWidth,
                    c = s.canvasHeight,
                    l = s.distanceX,
                    d = s.distanceY,
                    u = s.contentStartPos,
                    f = u.left,
                    p = u.top,
                    h = u.width,
                    g = u.height;
                return (
                    (i = h > r ? f + l : f),
                        (a = p + d),
                        (t = Math.max(0, 0.5 * r - 0.5 * h)),
                        (e = Math.max(0, 0.5 * c - 0.5 * g)),
                        (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
                        (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
                    l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
                    l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
                    d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
                    d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
                        { top: a, left: i }
                );
            }),
            (d.prototype.limitPosition = function (t, e, n, o) {
                var i = this,
                    a = i.canvasWidth,
                    s = i.canvasHeight;
                return (
                    n > a
                        ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
                        : (t = Math.max(0, a / 2 - n / 2)),
                        o > s
                            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
                            : (e = Math.max(0, s / 2 - o / 2)),
                        { top: e, left: t }
                );
            }),
            (d.prototype.onZoom = function () {
                var e = this,
                    a = e.contentStartPos,
                    r = a.width,
                    c = a.height,
                    l = a.left,
                    d = a.top,
                    u = s(e.newPoints[0], e.newPoints[1]),
                    f = u / e.startDistanceBetweenFingers,
                    p = Math.floor(r * f),
                    h = Math.floor(c * f),
                    g = (r - p) * e.percentageOfImageAtPinchPointX,
                    b = (c - h) * e.percentageOfImageAtPinchPointY,
                    m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
                    v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
                    y = m - e.centerPointStartX,
                    x = v - e.centerPointStartY,
                    w = l + (g + y),
                    $ = d + (b + x),
                    S = { top: $, left: w, scaleX: f, scaleY: f };
                (e.canTap = !1),
                    (e.newWidth = p),
                    (e.newHeight = h),
                    (e.contentLastPos = S),
                e.requestId && i(e.requestId),
                    (e.requestId = o(function () {
                        n.fancybox.setTranslate(e.$content, e.contentLastPos);
                    }));
            }),
            (d.prototype.ontouchend = function (t) {
                var o = this,
                    s = o.isSwiping,
                    r = o.isPanning,
                    c = o.isZooming,
                    l = o.isScrolling;
                if (
                    ((o.endPoints = a(t)),
                        (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
                        o.$container.removeClass("fancybox-is-grabbing"),
                        n(e).off(".fb.touch"),
                        e.removeEventListener("scroll", o.onscroll, !0),
                    o.requestId && (i(o.requestId), (o.requestId = null)),
                        (o.isSwiping = !1),
                        (o.isPanning = !1),
                        (o.isZooming = !1),
                        (o.isScrolling = !1),
                        (o.instance.isDragging = !1),
                        o.canTap)
                )
                    return o.onTap(t);
                (o.speed = 100),
                    (o.velocityX = (o.distanceX / o.dMs) * 0.5),
                    (o.velocityY = (o.distanceY / o.dMs) * 0.5),
                    r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
            }),
            (d.prototype.endSwiping = function (t, e) {
                var o = this,
                    i = !1,
                    a = o.instance.group.length,
                    s = Math.abs(o.distanceX),
                    r = "x" == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50);
                (o.sliderLastPos = null),
                    "y" == t && !e && Math.abs(o.distanceY) > 50
                        ? (n.fancybox.animate(
                            o.instance.current.$slide,
                            {
                                top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                                opacity: 0,
                            },
                            200
                        ),
                            (i = o.instance.close(!0, 250)))
                        : r && o.distanceX > 0
                            ? (i = o.instance.previous(300))
                            : r && o.distanceX < 0 && (i = o.instance.next(300)),
                !1 !== i || ("x" != t && "y" != t) || o.instance.centerSlide(200),
                    o.$container.removeClass("fancybox-is-sliding");
            }),
            (d.prototype.endPanning = function () {
                var t,
                    e,
                    o,
                    i = this;
                i.contentLastPos &&
                (!1 === i.opts.momentum || i.dMs > 350
                    ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
                    : ((t = i.contentLastPos.left + 500 * i.velocityX),
                        (e = i.contentLastPos.top + 500 * i.velocityY)),
                    (o = i.limitPosition(
                        t,
                        e,
                        i.contentStartPos.width,
                        i.contentStartPos.height
                    )),
                    (o.width = i.contentStartPos.width),
                    (o.height = i.contentStartPos.height),
                    n.fancybox.animate(i.$content, o, 366));
            }),
            (d.prototype.endZooming = function () {
                var t,
                    e,
                    o,
                    i,
                    a = this,
                    s = a.instance.current,
                    r = a.newWidth,
                    c = a.newHeight;
                a.contentLastPos &&
                ((t = a.contentLastPos.left),
                    (e = a.contentLastPos.top),
                    (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
                    n.fancybox.setTranslate(a.$content, i),
                    r < a.canvasWidth && c < a.canvasHeight
                        ? a.instance.scaleToFit(150)
                        : r > s.width || c > s.height
                            ? a.instance.scaleToActual(
                                a.centerPointStartX,
                                a.centerPointStartY,
                                150
                            )
                            : ((o = a.limitPosition(t, e, r, c)),
                                n.fancybox.animate(a.$content, o, 150)));
            }),
            (d.prototype.onTap = function (e) {
                var o,
                    i = this,
                    s = n(e.target),
                    r = i.instance,
                    c = r.current,
                    l = (e && a(e)) || i.startPoints,
                    d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
                    u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
                    f = function (t) {
                        var o = c.opts[t];
                        if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
                            switch (o) {
                                case "close":
                                    r.close(i.startEvent);
                                    break;
                                case "toggleControls":
                                    r.toggleControls();
                                    break;
                                case "next":
                                    r.next();
                                    break;
                                case "nextOrClose":
                                    r.group.length > 1 ? r.next() : r.close(i.startEvent);
                                    break;
                                case "zoom":
                                    "image" == c.type &&
                                    (c.isLoaded || c.$ghost) &&
                                    (r.canPan()
                                        ? r.scaleToFit()
                                        : r.isScaledDown()
                                            ? r.scaleToActual(d, u)
                                            : r.group.length < 2 && r.close(i.startEvent));
                            }
                    };
                if (
                    (!e.originalEvent || 2 != e.originalEvent.button) &&
                    (s.is("img") || !(d > s[0].clientWidth + s.offset().left))
                ) {
                    if (
                        s.is(
                            ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
                        )
                    )
                        o = "Outside";
                    else if (s.is(".fancybox-slide")) o = "Slide";
                    else {
                        if (
                            !r.current.$content ||
                            !r.current.$content.find(s).addBack().filter(s).length
                        )
                            return;
                        o = "Content";
                    }
                    if (i.tapped) {
                        if (
                            (clearTimeout(i.tapped),
                                (i.tapped = null),
                            Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
                        )
                            return this;
                        f("dblclick" + o);
                    } else
                        (i.tapX = d),
                            (i.tapY = u),
                            c.opts["dblclick" + o] &&
                            c.opts["dblclick" + o] !== c.opts["click" + o]
                                ? (i.tapped = setTimeout(function () {
                                    (i.tapped = null), r.isAnimating || f("click" + o);
                                }, 500))
                                : f("click" + o);
                    return this;
                }
            }),
            n(e)
                .on("onActivate.fb", function (t, e) {
                    e && !e.Guestures && (e.Guestures = new d(e));
                })
                .on("beforeClose.fb", function (t, e) {
                    e && e.Guestures && e.Guestures.destroy();
                });
    })(window, document, jQuery),
    (function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        var n = function (t) {
            (this.instance = t), this.init();
        };
        e.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this,
                    n = t.instance,
                    o = n.group[n.currIndex].opts.slideShow;
                (t.$button = n.$refs.toolbar
                    .find("[data-fancybox-play]")
                    .on("click", function () {
                        t.toggle();
                    })),
                    n.group.length < 2 || !o
                        ? t.$button.hide()
                        : o.progress &&
                        (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(
                            n.$refs.inner
                        ));
            },
            set: function (t) {
                var n = this,
                    o = n.instance,
                    i = o.current;
                i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
                    ? n.isActive &&
                    "video" !== i.contentType &&
                    (n.$progress &&
                    e.fancybox.animate(
                        n.$progress.show(),
                        { scaleX: 1 },
                        i.opts.slideShow.speed
                    ),
                        (n.timer = setTimeout(function () {
                            o.current.opts.loop || o.current.index != o.group.length - 1
                                ? o.next()
                                : o.jumpTo(0);
                        }, i.opts.slideShow.speed)))
                    : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
            },
            clear: function () {
                var t = this;
                clearTimeout(t.timer),
                    (t.timer = null),
                t.$progress && t.$progress.removeAttr("style").hide();
            },
            start: function () {
                var t = this,
                    e = t.instance.current;
                e &&
                (t.$button
                    .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP)
                    .removeClass("fancybox-button--play")
                    .addClass("fancybox-button--pause"),
                    (t.isActive = !0),
                e.isComplete && t.set(!0),
                    t.instance.trigger("onSlideShowChange", !0));
            },
            stop: function () {
                var t = this,
                    e = t.instance.current;
                t.clear(),
                    t.$button
                        .attr(
                            "title",
                            (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
                        )
                        .removeClass("fancybox-button--pause")
                        .addClass("fancybox-button--play"),
                    (t.isActive = !1),
                    t.instance.trigger("onSlideShowChange", !1),
                t.$progress && t.$progress.removeAttr("style").hide();
            },
            toggle: function () {
                var t = this;
                t.isActive ? t.stop() : t.start();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    e && !e.SlideShow && (e.SlideShow = new n(e));
                },
                "beforeShow.fb": function (t, e, n, o) {
                    var i = e && e.SlideShow;
                    o
                        ? i && n.opts.slideShow.autoStart && i.start()
                        : i && i.isActive && i.clear();
                },
                "afterShow.fb": function (t, e, n) {
                    var o = e && e.SlideShow;
                    o && o.isActive && o.set();
                },
                "afterKeydown.fb": function (n, o, i, a, s) {
                    var r = o && o.SlideShow;
                    !r ||
                    !i.opts.slideShow ||
                    (80 !== s && 32 !== s) ||
                    e(t.activeElement).is("button,a,input") ||
                    (a.preventDefault(), r.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (t, e) {
                    var n = e && e.SlideShow;
                    n && n.stop();
                },
            }),
            e(t).on("visibilitychange", function () {
                var n = e.fancybox.getInstance(),
                    o = n && n.SlideShow;
                o && o.isActive && (t.hidden ? o.clear() : o.set());
            });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        var n = (function () {
            for (
                var e = [
                        [
                            "requestFullscreen",
                            "exitFullscreen",
                            "fullscreenElement",
                            "fullscreenEnabled",
                            "fullscreenchange",
                            "fullscreenerror",
                        ],
                        [
                            "webkitRequestFullscreen",
                            "webkitExitFullscreen",
                            "webkitFullscreenElement",
                            "webkitFullscreenEnabled",
                            "webkitfullscreenchange",
                            "webkitfullscreenerror",
                        ],
                        [
                            "webkitRequestFullScreen",
                            "webkitCancelFullScreen",
                            "webkitCurrentFullScreenElement",
                            "webkitCancelFullScreen",
                            "webkitfullscreenchange",
                            "webkitfullscreenerror",
                        ],
                        [
                            "mozRequestFullScreen",
                            "mozCancelFullScreen",
                            "mozFullScreenElement",
                            "mozFullScreenEnabled",
                            "mozfullscreenchange",
                            "mozfullscreenerror",
                        ],
                        [
                            "msRequestFullscreen",
                            "msExitFullscreen",
                            "msFullscreenElement",
                            "msFullscreenEnabled",
                            "MSFullscreenChange",
                            "MSFullscreenError",
                        ],
                    ],
                    n = {},
                    o = 0;
                o < e.length;
                o++
            ) {
                var i = e[o];
                if (i && i[1] in t) {
                    for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
                    return n;
                }
            }
            return !1;
        })();
        if (n) {
            var o = {
                request: function (e) {
                    (e = e || t.documentElement),
                        e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    t[n.exitFullscreen]();
                },
                toggle: function (e) {
                    (e = e || t.documentElement),
                        this.isFullscreen() ? this.exit() : this.request(e);
                },
                isFullscreen: function () {
                    return Boolean(t[n.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(t[n.fullscreenEnabled]);
                },
            };
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            }),
                e(t).on(n.fullscreenchange, function () {
                    var t = o.isFullscreen(),
                        n = e.fancybox.getInstance();
                    n &&
                    (n.current &&
                    "image" === n.current.type &&
                    n.isAnimating &&
                    ((n.isAnimating = !1),
                        n.update(!0, !0, 0),
                    n.isComplete || n.complete()),
                        n.trigger("onFullscreenChange", t),
                        n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
                        n.$refs.toolbar
                            .find("[data-fancybox-fullscreen]")
                            .toggleClass("fancybox-button--fsenter", !t)
                            .toggleClass("fancybox-button--fsexit", t));
                });
        }
        e(t).on({
            "onInit.fb": function (t, e) {
                var i;
                if (!n)
                    return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                e && e.group[e.currIndex].opts.fullScreen
                    ? ((i = e.$refs.container),
                        i.on(
                            "click.fb-fullscreen",
                            "[data-fancybox-fullscreen]",
                            function (t) {
                                t.stopPropagation(), t.preventDefault(), o.toggle();
                            }
                        ),
                    e.opts.fullScreen &&
                    !0 === e.opts.fullScreen.autoStart &&
                    o.request(),
                        (e.FullScreen = o))
                    : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
            },
            "afterKeydown.fb": function (t, e, n, o, i) {
                e &&
                e.FullScreen &&
                70 === i &&
                (o.preventDefault(), e.FullScreen.toggle());
            },
            "beforeClose.fb": function (t, e) {
                e &&
                e.FullScreen &&
                e.$refs.container.hasClass("fancybox-is-fullscreen") &&
                o.exit();
            },
        });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        var n = "fancybox-thumbs";
        e.fancybox.defaults = e.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y",
                },
            },
            e.fancybox.defaults
        );
        var o = function (t) {
            this.init(t);
        };
        e.extend(o.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this,
                    n = t.group,
                    o = 0;
                (e.instance = t),
                    (e.opts = n[t.currIndex].opts.thumbs),
                    (t.Thumbs = e),
                    (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
                for (
                    var i = 0, a = n.length;
                    i < a && (n[i].thumb && o++, !(o > 1));
                    i++
                );
                o > 1 && e.opts
                    ? (e.$button.removeAttr("style").on("click", function () {
                        e.toggle();
                    }),
                        (e.isActive = !0))
                    : e.$button.hide();
            },
            create: function () {
                var t,
                    o = this,
                    i = o.instance,
                    a = o.opts.parentEl,
                    s = [];
                o.$grid ||
                ((o.$grid = e(
                    '<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>'
                ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
                    o.$grid.on("click", "a", function () {
                        i.jumpTo(e(this).attr("data-index"));
                    })),
                o.$list ||
                (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
                    e.each(i.group, function (e, n) {
                        (t = n.thumb),
                        t || "image" !== n.type || (t = n.src),
                            s.push(
                                '<a href="javascript:;" tabindex="0" data-index="' +
                                e +
                                '"' +
                                (t && t.length
                                    ? ' style="background-image:url(' + t + ')"'
                                    : 'class="fancybox-thumbs-missing"') +
                                "></a>"
                            );
                    }),
                    (o.$list[0].innerHTML = s.join("")),
                "x" === o.opts.axis &&
                o.$list.width(
                    parseInt(o.$grid.css("padding-right"), 10) +
                    i.group.length * o.$list.children().eq(0).outerWidth(!0)
                );
            },
            focus: function (t) {
                var e,
                    n,
                    o = this,
                    i = o.$list,
                    a = o.$grid;
                o.instance.current &&
                ((e = i
                    .children()
                    .removeClass("fancybox-thumbs-active")
                    .filter('[data-index="' + o.instance.current.index + '"]')
                    .addClass("fancybox-thumbs-active")),
                    (n = e.position()),
                    "y" === o.opts.axis &&
                    (n.top < 0 || n.top > i.height() - e.outerHeight())
                        ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
                        : "x" === o.opts.axis &&
                        (n.left < a.scrollLeft() ||
                            n.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
                        i.parent().stop().animate({ scrollLeft: n.left }, t));
            },
            update: function () {
                var t = this;
                t.instance.$refs.container.toggleClass(
                    "fancybox-show-thumbs",
                    this.isVisible
                ),
                    t.isVisible
                        ? (t.$grid || t.create(),
                            t.instance.trigger("onThumbsShow"),
                            t.focus(0))
                        : t.$grid && t.instance.trigger("onThumbsHide"),
                    t.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    var n;
                    e &&
                    !e.Thumbs &&
                    ((n = new o(e)), n.isActive && !0 === n.opts.autoStart && n.show());
                },
                "beforeShow.fb": function (t, e, n, o) {
                    var i = e && e.Thumbs;
                    i && i.isVisible && i.focus(o ? 0 : 250);
                },
                "afterKeydown.fb": function (t, e, n, o, i) {
                    var a = e && e.Thumbs;
                    a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
                },
                "beforeClose.fb": function (t, e) {
                    var n = e && e.Thumbs;
                    n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
                },
            });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        function n(t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;",
            };
            return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return e[t];
            });
        }
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (t, e) {
                    return (
                        (!t.currentHash &&
                            "inline" !== e.type &&
                            "html" !== e.type &&
                            (e.origSrc || e.src)) ||
                        window.location
                    );
                },
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        }),
            e(t).on("click", "[data-fancybox-share]", function () {
                var t,
                    o,
                    i = e.fancybox.getInstance(),
                    a = i.current || null;
                a &&
                ("function" === e.type(a.opts.share.url) &&
                (t = a.opts.share.url.apply(a, [i, a])),
                    (o = a.opts.share.tpl
                        .replace(
                            /\{\{media\}\}/g,
                            "image" === a.type ? encodeURIComponent(a.src) : ""
                        )
                        .replace(/\{\{url\}\}/g, encodeURIComponent(t))
                        .replace(/\{\{url_raw\}\}/g, n(t))
                        .replace(
                            /\{\{descr\}\}/g,
                            i.$caption ? encodeURIComponent(i.$caption.text()) : ""
                        )),
                    e.fancybox.open({
                        src: i.translate(i, o),
                        type: "html",
                        opts: {
                            touch: !1,
                            animationEffect: !1,
                            afterLoad: function (t, e) {
                                i.$refs.container.one("beforeClose.fb", function () {
                                    t.close(null, 0);
                                }),
                                    e.$content.find(".fancybox-share__button").click(function () {
                                        return (
                                            window.open(this.href, "Share", "width=550, height=450"), !1
                                        );
                                    });
                            },
                            mobile: { autoFocus: !1 },
                        },
                    }));
            });
    })(document, jQuery),
    (function (t, e, n) {
        "use strict";
        function o() {
            var e = t.location.hash.substr(1),
                n = e.split("-"),
                o =
                    n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
                        ? parseInt(n.pop(-1), 10) || 1
                        : 1,
                i = n.join("-");
            return { hash: e, index: o < 1 ? 1 : o, gallery: i };
        }
        function i(t) {
            "" !== t.gallery &&
            n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
                .eq(t.index - 1)
                .focus()
                .trigger("click.fb-start");
        }
        function a(t) {
            var e, n;
            return (
                !!t &&
                ((e = t.current ? t.current.opts : t.opts),
                "" !==
                (n =
                    e.hash ||
                    (e.$orig
                        ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger")
                        : "")) && n)
            );
        }
        n.escapeSelector ||
        (n.escapeSelector = function (t) {
            return (t + "").replace(
                /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                function (t, e) {
                    return e
                        ? "\0" === t
                            ? "�"
                            : t.slice(0, -1) +
                            "\\" +
                            t.charCodeAt(t.length - 1).toString(16) +
                            " "
                        : "\\" + t;
                }
            );
        }),
            n(function () {
                !1 !== n.fancybox.defaults.hash &&
                (n(e).on({
                    "onInit.fb": function (t, e) {
                        var n, i;
                        !1 !== e.group[e.currIndex].opts.hash &&
                        ((n = o()),
                        (i = a(e)) &&
                        n.gallery &&
                        i == n.gallery &&
                        (e.currIndex = n.index - 1));
                    },
                    "beforeShow.fb": function (n, o, i, s) {
                        var r;
                        i &&
                        !1 !== i.opts.hash &&
                        (r = a(o)) &&
                        ((o.currentHash =
                            r + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                        t.location.hash !== "#" + o.currentHash &&
                        (s && !o.origHash && (o.origHash = t.location.hash),
                        o.hashTimer && clearTimeout(o.hashTimer),
                            (o.hashTimer = setTimeout(function () {
                                "replaceState" in t.history
                                    ? (t.history[s ? "pushState" : "replaceState"](
                                        {},
                                        e.title,
                                        t.location.pathname +
                                        t.location.search +
                                        "#" +
                                        o.currentHash
                                    ),
                                    s && (o.hasCreatedHistory = !0))
                                    : (t.location.hash = o.currentHash),
                                    (o.hashTimer = null);
                            }, 300))));
                    },
                    "beforeClose.fb": function (n, o, i) {
                        i &&
                        !1 !== i.opts.hash &&
                        (clearTimeout(o.hashTimer),
                            o.currentHash && o.hasCreatedHistory
                                ? t.history.back()
                                : o.currentHash &&
                                ("replaceState" in t.history
                                    ? t.history.replaceState(
                                        {},
                                        e.title,
                                        t.location.pathname +
                                        t.location.search +
                                        (o.origHash || "")
                                    )
                                    : (t.location.hash = o.origHash)),
                            (o.currentHash = null));
                    },
                }),
                    n(t).on("hashchange.fb", function () {
                        var t = o(),
                            e = null;
                        n.each(n(".fancybox-container").get().reverse(), function (t, o) {
                            var i = n(o).data("FancyBox");
                            if (i && i.currentHash) return (e = i), !1;
                        }),
                            e
                                ? e.currentHash === t.gallery + "-" + t.index ||
                                (1 === t.index && e.currentHash == t.gallery) ||
                                ((e.currentHash = null), e.close())
                                : "" !== t.gallery && i(t);
                    }),
                    setTimeout(function () {
                        n.fancybox.getInstance() || i(o());
                    }, 50));
            });
    })(window, document, jQuery),
    function (t, e) {
        "use strict";
        var n = new Date().getTime();
        e(t).on({
            "onInit.fb": function (t, e, o) {
                e.$refs.stage.on(
                    "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
                    function (t) {
                        var o = e.current,
                            i = new Date().getTime();
                        e.group.length < 2 ||
                        !1 === o.opts.wheel ||
                        ("auto" === o.opts.wheel && "image" !== o.type) ||
                        (t.preventDefault(),
                            t.stopPropagation(),
                        o.$slide.hasClass("fancybox-animated") ||
                        ((t = t.originalEvent || t),
                        i - n < 250 ||
                        ((n = i),
                            e[
                                (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                                    ? "next"
                                    : "previous"
                                ]())));
                    }
                );
            },
        });
    })(document, jQuery);

//scrollable
(function ($) {
    // static constructs
    $.tools = $.tools || { version: "@VERSION" };
    $.tools.scrollable = {
        conf: {
            activeClass: "active",
            circular: false,
            clonedClass: "cloned",
            disabledClass: "disabled",
            easing: "linear",
            initialIndex: 0,
            item: "> *",
            items: ".items",
            keyboard: false,
            mousewheel: false,
            next: ".next",
            prev: ".prev",
            size: 1,
            speed: 200,
            vertical: false,
            touch: true,
            drag: true,
            wheelSpeed: 200,
        },
    };

    // get hidden element's width or height even though it's hidden
    function dim(el, key) {
        var v = parseInt(el.css(key), 10);
        if (v) {
            return v;
        }
        var s = el[0].currentStyle;
        return s && s.width && parseInt(s.width, 10);
    }

    function find(root, query) {
        var el = $(query);
        return el.length < 2 ? el : root.parent().find(query);
    }

    var current;

    // constructor
    function Scrollable(root, conf) {
        // current instance
        var self = this,
            fire = root.add(self),
            itemWrap = root.children(),
            index = 0,
            vertical = conf.vertical;

        if (!current) {
            current = self;
        }
        if (itemWrap.length > 1) {
            itemWrap = $(conf.items, root);
        }

        // in this version circular not supported when size > 1
        // if (conf.size > 1) { conf.circular = false; }

        // methods
        $.extend(self, {
            getConf: function () {
                return conf;
            },

            getIndex: function () {
                return index;
            },

            getSize: function () {
                return self.getItems().lenght;
            },

            getNaviButtons: function () {
                return prev.add(next);
            },

            getRoot: function () {
                return root;
            },

            getItemWrap: function () {
                return itemWrap;
            },

            getItems: function () {
                return itemWrap.find(conf.item).not("." + conf.clonedClass);
            },

            move: function (offset, time) {
                return self.seekTo(index + offset, time);
            },

            next: function (time) {
                return self.move(conf.size, time);
            },

            prev: function (time) {
                return self.move(-conf.size, time);
            },

            begin: function (time) {
                return self.seekTo(0, time);
            },

            end: function (time) {
                return self.seekTo(self.getItems().length - 1, time);
            },

            focus: function () {
                current = self;
                return self;
            },

            addItem: function (item) {
                item = $(item);

                if (!conf.circular) {
                    itemWrap.append(item);
                    next.removeClass("disabled");
                } else {
                    itemWrap.children().last().before(item);
                    itemWrap
                        .children()
                        .first()
                        .replaceWith(item.clone().addClass(conf.clonedClass));
                }

                fire.trigger("onAddItem", [item]);
                return self;
            },

            /* all seeking functions depend on this */
            seekTo: function (i, time, fn) {
                // ensure numeric index
                if (!i.jquery) {
                    i *= 1;
                }

                // avoid seeking from end clone to the beginning
                // if (conf.circular && i === 0 && index == -1 && time !== 0) { return self; }

                // check that index is sane
                if ((!conf.circular && i < 0) || i > self.getSize() || i < -1) {
                    return self;
                }

                var item = i;

                if (i.jquery) {
                    i = self.getItems().index(i);
                } else {
                    item = self.getItems().eq(i);
                }

                // onBeforeSeek
                var e = $.Event("onBeforeSeek");
                if (!fn) {
                    fire.trigger(e, [i, time]);
                    if (e.isDefaultPrevented() || !item.length) {
                        return self;
                    }
                }

                var props = vertical
                    ? { top: -item.position().top }
                    : { left: -item.position().left };

                index = i;
                current = self;
                if (time === undefined) {
                    time = conf.speed;
                }

                itemWrap.animate(
                    props,
                    time,
                    conf.easing,
                    fn ||
                    function () {
                        fire.trigger("onSeek", [i]);
                    }
                );

                return self;
            },
        });

        // callbacks
        $.each(["onBeforeSeek", "onSeek", "onAddItem"], function (i, name) {
            // configuration
            if ($.isFunction(conf[name])) {
                $(self).on(name, conf[name]);
            }

            self[name] = function (fn) {
                if (fn) {
                    $(self).on(name, fn);
                }
                return self;
            };
        });

        // circular loop
        if (conf.circular) {
            var cloned1 = self.getItems().slice(-1).clone().prependTo(itemWrap),
                cloned2 = self.getItems().eq(1).clone().appendTo(itemWrap);

            cloned1.add(cloned2).addClass(conf.clonedClass);

            self.onBeforeSeek(function (e, i, time) {
                if (e.isDefaultPrevented()) {
                    return;
                }

                /*
					1. animate to the clone without event triggering
					2. seek to correct position with 0 speed
				*/

                if (i == NaN || i == -1) {
                    self.seekTo(cloned1, time, function () {
                        self.end(0);
                    });
                    return e.preventDefault();
                } else if (i >= self.getItems().length) {
                    self.seekTo(cloned2, time, function () {
                        self.begin(0);
                    });
                }
            });

            // seek over the cloned item

            // if the scrollable is hidden the calculations for seekTo position
            // will be incorrect (eg, if the scrollable is inside an overlay).
            // ensure the elements are shown, calculate the correct position,
            // then re-hide the elements. This must be done synchronously to
            // prevent the hidden elements being shown to the user.

            // See: https://github.com/jquerytools/jquerytools/issues#issue/87

            var hidden_parents = root
                .parents()
                .add(root)
                .filter(function () {
                    if ($(this).css("display") === "none") {
                        return true;
                    }
                });
            if (hidden_parents.length) {
                hidden_parents.show();
                self.seekTo(0, 0, function () {});
                hidden_parents.hide();
            } else {
                self.seekTo(0, 0, function () {});
            }
        }

        // next/prev buttons
        var prev = find(root, conf.prev).click(function (e) {
                e.stopPropagation();
                self.prev();
            }),
            next = find(root, conf.next).click(function (e) {
                e.stopPropagation();
                self.next();
            });

        if (!conf.circular) {
            self.onBeforeSeek(function (e, i) {
                setTimeout(function () {
                    if (!e.isDefaultPrevented()) {
                        prev.toggleClass(conf.disabledClass, i <= 0);
                        next.toggleClass(conf.disabledClass, i >= self.getSize() - 1);
                    }
                }, 1);
            });

            if (!conf.initialIndex) {
                prev.addClass(conf.disabledClass);
            }
        }

        if (self.getSize() < 2) {
            prev.add(next).addClass(conf.disabledClass);
        }

        // mousewheel support
        if (conf.mousewheel && $.fn.mousewheel) {
            root.mousewheel(function (e, delta) {
                if (conf.mousewheel) {
                    self.move(delta < 0 ? 1 : -1, conf.wheelSpeed || 50);
                    return false;
                }
            });
        }

        // touch event
        if (conf.touch) {
            var touch = {};

            itemWrap[0].ontouchstart = function (e) {
                var t = e.touches[0];
                touch.x = t.clientX;
                touch.y = t.clientY;
            };

            itemWrap[0].ontouchmove = function (e) {
                // only deal with one finger
                if (e.touches.length == 1 && !itemWrap.is(":animated")) {
                    var t = e.touches[0],
                        deltaX = touch.x - t.clientX,
                        deltaY = touch.y - t.clientY;
                    if (deltaX > 200 || deltaX < -200) {
                        // new line
                        self[
                            (vertical && deltaY > 0) || (!vertical && deltaX > 0)
                                ? "next"
                                : "prev"
                            ]();
                    } // new line
                    //e.preventDefault();
                }
            };
        }

        // drag event
        if (conf.drag) {
            var clicked = false,
                moved = false,
                clickX,
                deltaX,
                offsetLeft = 0;

            var imgs = itemWrap[0].getElementsByTagName("img");
            for (i = 0; i < imgs.length; i++) {
                imgs[i].setAttribute("draggable", "false");
            }
            var links = itemWrap[0].getElementsByTagName("a");
            for (i = 0; i < links.length; i++) {
                links[i].setAttribute("draggable", "false");
            }

            itemWrap[0].onmousemove = function (e) {
                if (!clicked) {
                    return false;
                }

                deltaX = clickX - e.pageX;
                itemWrap[0].style.left = offsetLeft - deltaX + "px";
                if (Math.abs(deltaX) > 10) {
                    moved = true;
                    itemWrap[0].setAttribute("data-click", "disable");
                }
            };
            itemWrap[0].onmousedown = function (e) {
                clicked = true;
                clickX = e.pageX;
                offsetLeft = parseInt(itemWrap[0].style.left);
            };
            itemWrap[0].onmouseup = function (e) {
                if (Math.abs(deltaX) > 100) {
                    deltaX > 100 ? self.next() : self.prev();
                } else {
                    itemWrap.animate(
                        { left: offsetLeft },
                        conf.speed,
                        conf.easing,
                        false
                    );
                }

                clicked = false;
                moved = false;
                offsetLeft = 0;
                deltaX = 0;
                setTimeout(function () {
                    itemWrap[0].removeAttribute("data-click");
                }, 500);
            };
            itemWrap[0].onclick = function (e) {
                _dataAttrClick = itemWrap[0].getAttribute("data-click");
                //check if was move
                if (
                    typeof _dataAttrClick == "string" &&
                    _dataAttrClick.length &&
                    _dataAttrClick == "disable"
                ) {
                    return false;
                }
            };
            itemWrap[0].onmouseleave = function (e) {
                if (Math.abs(deltaX) > 100) {
                    deltaX > 100 ? self.next() : self.prev();
                } else if (moved) {
                    itemWrap.animate(
                        {
                            left: offsetLeft,
                        },
                        conf.speed,
                        conf.easing,
                        false
                    );
                }

                clicked = false;
                moved = false;
                offsetLeft = 0;
                deltaX = 0;

                setTimeout(function () {
                    itemWrap[0].removeAttribute("data-click");
                }, 500);
            };
        }

        if (conf.keyboard) {
            $(document).on("keydown.scrollable", function (evt) {
                // skip certain conditions
                if (
                    !conf.keyboard ||
                    evt.altKey ||
                    evt.ctrlKey ||
                    evt.metaKey ||
                    $(evt.target).is(":input")
                ) {
                    return;
                }

                // does this instance have focus?
                if (conf.keyboard != "static" && current != self) {
                    return;
                }

                var key = evt.keyCode;

                if (vertical && (key == 38 || key == 40)) {
                    self.move(key == 38 ? -1 : 1);
                    return evt.preventDefault();
                }

                if (!vertical && (key == 37 || key == 39)) {
                    self.move(key == 37 ? -1 : 1);
                    return evt.preventDefault();
                }
            });
        }

        // initial index
        if (conf.initialIndex) {
            self.seekTo(conf.initialIndex, 0, function () {});
        }
    }

    // jQuery plugin implementation
    $.fn.scrollable = function (conf) {
        // already constructed --> return API
        var el = this.data("scrollable");
        if (el) {
            return el;
        }

        conf = $.extend({}, $.tools.scrollable.conf, conf);

        this.each(function () {
            el = new Scrollable($(this), conf);
            $(this).data("scrollable", el);
        });

        return conf.api ? el : this;
    };
})(jQuery);
//scrollable autoscroll getRoot
(function (c) {
    function getAutoInterval(sc) {
        return Math.floor(sc.width() / sc.find(".item").width());
    }
    var g = c.tools.scrollable;
    g.autoscroll = {
        conf: { autoplay: true, interval: 3e3, autopause: true, steps: "auto" },
    };
    c.fn.autoscroll = function (d) {
        if (typeof d == "number") d = { interval: d };
        var b = c.extend({}, g.autoscroll.conf, d),
            h;
        this.each(function () {
            var a = c(this).data("scrollable");
            if (b.steps == "auto") b.steps = getAutoInterval(a.getRoot());
            if (a) h = a;
            var e,
                i,
                f = true;
            a.play = function () {
                if (!e && a.getRoot().is(":visible")) {
                    f = false;
                    e = setInterval(function () {
                        if (!document.hidden) {
                            a.move(b.steps);
                        }
                    }, b.interval);
                    a.next();
                }
            };
            a.pause = function () {
                e = clearInterval(e);
            };
            a.stop = function () {
                a.pause();
                f = true;
            };
            b.autopause &&
            a
                .getRoot()
                .add(a.getNaviButtons())
                .hover(
                    function () {
                        a.pause();
                        clearInterval(i);
                    },
                    function () {
                        f || (i = setTimeout(a.play, b.interval));
                    }
                );
            b.autoplay && setTimeout(a.play, b.interval);
        });
        return b.api ? h : this;
    };
})(jQuery);
//scrollable navigator
(function (a) {
    var b = a.tools.scrollable;
    b.navigator = {
        conf: {
            navi: ".navi",
            naviItem: null,
            activeClass: "active",
            indexed: !1,
            idPrefix: null,
            history: !1,
        },
    };
    function c(b, c) {
        var d = a(c);
        return d.length < 2 ? d : b.parent().find(c);
    }
    a.fn.navigator = function (d) {
        typeof d == "string" && (d = { navi: d }),
            (d = a.extend({}, b.navigator.conf, d));
        var e;
        this.each(function () {
            var b = a(this).data("scrollable"),
                f = d.navi.jquery ? d.navi : c(b.getRoot(), d.navi),
                g = b.getNaviButtons(),
                h = d.activeClass,
                i = d.history && a.fn.history;
            b && (e = b),
                (b.getNaviButtons = function () {
                    return g.add(f);
                });
            function j(a, c, d) {
                b.seekTo(c);
                if (i)
                    location.hash && (location.hash = a.attr("href").replace("#", ""));
                else return d.preventDefault();
            }
            function k() {
                return f.find(d.naviItem || "> *");
            }
            function l(b) {
                var c = a("<" + (d.naviItem || "a") + "/>")
                    .click(function (c) {
                        j(a(this), b, c);
                    })
                    .attr("href", "#" + b);
                b === 0 && c.addClass(h),
                d.indexed && c.text(b + 1),
                d.idPrefix && c.attr("id", d.idPrefix + b);
                return c.appendTo(f);
            }
            k().length
                ? k().each(function (b) {
                    a(this).click(function (c) {
                        j(a(this), b, c);
                    });
                })
                : a.each(b.getItems(), function (a) {
                    l(a);
                }),
                b.onBeforeSeek(function (a, b) {
                    setTimeout(function () {
                        if (!a.isDefaultPrevented()) {
                            var c = k().eq(b);
                            !a.isDefaultPrevented() &&
                            c.length &&
                            k().removeClass(h).eq(b).addClass(h);
                        }
                    }, 1);
                });
            function m(a, b) {
                var c = k().eq(b.replace("#", ""));
                c.length || (c = k().filter("[href=" + b + "]")), c.click();
            }
            b.onAddItem(function (a, c) {
                (c = l(b.getItems().index(c))), i && c.history(m);
            }),
            i && k().history(m);
        });
        return d.api ? e : this;
    };
})(jQuery);

/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create &&
(Object.create = function (d) {
    function h() {}
    h.prototype = d;
    return new h();
});
(function (d, h, l, m) {
    var k = {
        init: function (b, a) {
            var c = this;
            c.elem = a;
            c.$elem = d(a);
            c.imageSrc = c.$elem.data("zoom-image")
                ? c.$elem.data("zoom-image")
                : c.$elem.attr("src");
            c.options = d.extend({}, d.fn.elevateZoom.options, b);
            c.options.tint &&
            ((c.options.lensColour = "none"), (c.options.lensOpacity = "1"));
            "inner" == c.options.zoomType && (c.options.showLens = !1);
            c.$elem.parent().removeAttr("title").removeAttr("alt");
            c.zoomImage = c.imageSrc;
            c.refresh(1);
            d("#" + c.options.gallery + " a").click(function (a) {
                c.options.galleryActiveClass &&
                (d("#" + c.options.gallery + " a").removeClass(
                    c.options.galleryActiveClass
                ),
                    d(this).addClass(c.options.galleryActiveClass));
                a.preventDefault();
                d(this).data("zoom-image")
                    ? (c.zoomImagePre = d(this).data("zoom-image"))
                    : (c.zoomImagePre = d(this).data("image"));
                c.swaptheimage(d(this).data("image"), c.zoomImagePre);
                return !1;
            });
        },
        refresh: function (b) {
            var a = this;
            setTimeout(function () {
                a.fetch(a.imageSrc);
            }, b || a.options.refresh);
        },
        fetch: function (b) {
            var a = this,
                c = new Image();
            c.onload = function () {
                a.largeWidth = c.width;
                a.largeHeight = c.height;
                a.startZoom();
                a.currentImage = a.imageSrc;
                a.options.onZoomedImageLoaded(a.$elem);
            };
            c.src = b;
        },
        startZoom: function () {
            var b = this;
            b.nzWidth = b.$elem.width();
            b.nzHeight = b.$elem.height();
            b.isWindowActive = !1;
            b.isLensActive = !1;
            b.isTintActive = !1;
            b.overWindow = !1;
            b.options.imageCrossfade &&
            ((b.zoomWrap = b.$elem.wrap(
                '<div style="height:' +
                b.nzHeight +
                "px;width:" +
                b.nzWidth +
                'px;" class="zoomWrapper" />'
            )),
                b.$elem.css("position", "absolute"));
            b.zoomLock = 1;
            b.scrollingLock = !1;
            b.changeBgSize = !1;
            b.currentZoomLevel = b.options.zoomLevel;
            b.nzOffset = b.$elem.offset();
            b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth;
            b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight;
            "window" == b.options.zoomType &&
            (b.zoomWindowStyle =
                "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " +
                String(b.options.zoomWindowBgColour) +
                ";width: " +
                String(b.options.zoomWindowWidth) +
                "px;height: " +
                String(b.options.zoomWindowHeight) +
                "px;float: left;background-size: " +
                b.largeWidth / b.currentZoomLevel +
                "px " +
                b.largeHeight / b.currentZoomLevel +
                "px;display: none;z-index:100;border: " +
                String(b.options.borderSize) +
                "px solid " +
                b.options.borderColour +
                ";background-repeat: no-repeat;position: absolute;");
            if ("inner" == b.options.zoomType) {
                var a = b.$elem.css("border-left-width");
                b.zoomWindowStyle =
                    "overflow: hidden;margin-left: " +
                    String(a) +
                    ";margin-top: " +
                    String(a) +
                    ";background-position: 0px 0px;width: " +
                    String(b.nzWidth) +
                    "px;height: " +
                    String(b.nzHeight) +
                    "px;float: left;display: none;cursor:" +
                    b.options.cursor +
                    ";px solid " +
                    b.options.borderColour +
                    ";background-repeat: no-repeat;position: absolute;";
            }
            "window" == b.options.zoomType &&
            ((lensHeight =
                b.nzHeight < b.options.zoomWindowWidth / b.widthRatio
                    ? b.nzHeight
                    : String(b.options.zoomWindowHeight / b.heightRatio)),
                (lensWidth =
                    b.largeWidth < b.options.zoomWindowWidth
                        ? b.nzWidth
                        : b.options.zoomWindowWidth / b.widthRatio),
                (b.lensStyle =
                    "background-position: 0px 0px;width: " +
                    String(b.options.zoomWindowWidth / b.widthRatio) +
                    "px;height: " +
                    String(b.options.zoomWindowHeight / b.heightRatio) +
                    "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
                    b.options.lensOpacity +
                    ";filter: alpha(opacity = " +
                    100 * b.options.lensOpacity +
                    "); zoom:1;width:" +
                    lensWidth +
                    "px;height:" +
                    lensHeight +
                    "px;background-color:" +
                    b.options.lensColour +
                    ";cursor:" +
                    b.options.cursor +
                    ";border: " +
                    b.options.lensBorderSize +
                    "px solid " +
                    b.options.lensBorderColour +
                    ";background-repeat: no-repeat;position: absolute;"));
            b.tintStyle =
                "display: block;position: absolute;background-color: " +
                b.options.tintColour +
                ";filter:alpha(opacity=0);opacity: 0;width: " +
                b.nzWidth +
                "px;height: " +
                b.nzHeight +
                "px;";
            b.lensRound = "";
            "lens" == b.options.zoomType &&
            (b.lensStyle =
                "background-position: 0px 0px;float: left;display: none;border: " +
                String(b.options.borderSize) +
                "px solid " +
                b.options.borderColour +
                ";width:" +
                String(b.options.lensSize) +
                "px;height:" +
                String(b.options.lensSize) +
                "px;background-repeat: no-repeat;position: absolute;");
            "round" == b.options.lensShape &&
            (b.lensRound =
                "border-top-left-radius: " +
                String(b.options.lensSize / 2 + b.options.borderSize) +
                "px;border-top-right-radius: " +
                String(b.options.lensSize / 2 + b.options.borderSize) +
                "px;border-bottom-left-radius: " +
                String(b.options.lensSize / 2 + b.options.borderSize) +
                "px;border-bottom-right-radius: " +
                String(b.options.lensSize / 2 + b.options.borderSize) +
                "px;");
            b.zoomContainer = d(
                '<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' +
                b.nzOffset.left +
                "px;top:" +
                b.nzOffset.top +
                "px;height:" +
                b.nzHeight +
                "px;width:" +
                b.nzWidth +
                'px;"></div>'
            );
            d("body").append(b.zoomContainer);
            b.options.containLensZoom &&
            "lens" == b.options.zoomType &&
            b.zoomContainer.css("overflow", "hidden");
            "inner" != b.options.zoomType &&
            ((b.zoomLens = d(
                "<div class='zoomLens' style='" +
                b.lensStyle +
                b.lensRound +
                "'>&nbsp;</div>"
            )
                .appendTo(b.zoomContainer)
                .click(function () {
                    b.$elem.trigger("click");
                })),
            b.options.tint &&
            ((b.tintContainer = d("<div/>").addClass("tintContainer")),
                (b.zoomTint = d(
                    "<div class='zoomTint' style='" + b.tintStyle + "'></div>"
                )),
                b.zoomLens.wrap(b.tintContainer),
                (b.zoomTintcss = b.zoomLens.after(b.zoomTint)),
                (b.zoomTintImage = d(
                    '<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
                    b.nzWidth +
                    "px; height: " +
                    b.nzHeight +
                    'px;" src="' +
                    b.imageSrc +
                    '">'
                )
                    .appendTo(b.zoomLens)
                    .click(function () {
                        b.$elem.trigger("click");
                    }))));
            isNaN(b.options.zoomWindowPosition)
                ? (b.zoomWindow = d(
                    "<div style='z-index:999;left:" +
                    b.windowOffsetLeft +
                    "px;top:" +
                    b.windowOffsetTop +
                    "px;" +
                    b.zoomWindowStyle +
                    "' class='zoomWindow'>&nbsp;</div>"
                )
                    .appendTo("body")
                    .click(function () {
                        b.$elem.trigger("click");
                    }))
                : (b.zoomWindow = d(
                    "<div style='z-index:999;left:" +
                    b.windowOffsetLeft +
                    "px;top:" +
                    b.windowOffsetTop +
                    "px;" +
                    b.zoomWindowStyle +
                    "' class='zoomWindow'>&nbsp;</div>"
                )
                    .appendTo(b.zoomContainer)
                    .click(function () {
                        b.$elem.trigger("click");
                    }));
            b.zoomWindowContainer = d("<div/>")
                .addClass("zoomWindowContainer")
                .css("width", b.options.zoomWindowWidth);
            b.zoomWindow.wrap(b.zoomWindowContainer);
            "lens" == b.options.zoomType &&
            b.zoomLens.css({ backgroundImage: "url('" + b.imageSrc + "')" });
            "window" == b.options.zoomType &&
            b.zoomWindow.css({ backgroundImage: "url('" + b.imageSrc + "')" });
            "inner" == b.options.zoomType &&
            b.zoomWindow.css({ backgroundImage: "url('" + b.imageSrc + "')" });
            b.$elem.bind("touchmove", function (a) {
                a.preventDefault();
                b.setPosition(
                    a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]
                );
            });
            b.zoomContainer.bind("touchmove", function (a) {
                "inner" == b.options.zoomType && b.showHideWindow("show");
                a.preventDefault();
                b.setPosition(
                    a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]
                );
            });
            b.zoomContainer.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint &&
                "inner" != b.options.zoomType &&
                b.showHideTint("hide");
            });
            b.$elem.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint &&
                "inner" != b.options.zoomType &&
                b.showHideTint("hide");
            });
            b.options.showLens &&
            (b.zoomLens.bind("touchmove", function (a) {
                a.preventDefault();
                b.setPosition(
                    a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]
                );
            }),
                b.zoomLens.bind("touchend", function (a) {
                    b.showHideWindow("hide");
                    b.options.showLens && b.showHideLens("hide");
                    b.options.tint &&
                    "inner" != b.options.zoomType &&
                    b.showHideTint("hide");
                }));
            b.$elem.bind("mousemove", function (a) {
                !1 == b.overWindow && b.setElements("show");
                if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                    b.setPosition(a), (b.currentLoc = a);
                b.lastX = a.clientX;
                b.lastY = a.clientY;
            });
            b.zoomContainer.bind("mousemove", function (a) {
                !1 == b.overWindow && b.setElements("show");
                if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                    b.setPosition(a), (b.currentLoc = a);
                b.lastX = a.clientX;
                b.lastY = a.clientY;
            });
            "inner" != b.options.zoomType &&
            b.zoomLens.bind("mousemove", function (a) {
                if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                    b.setPosition(a), (b.currentLoc = a);
                b.lastX = a.clientX;
                b.lastY = a.clientY;
            });
            b.options.tint &&
            "inner" != b.options.zoomType &&
            b.zoomTint.bind("mousemove", function (a) {
                if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                    b.setPosition(a), (b.currentLoc = a);
                b.lastX = a.clientX;
                b.lastY = a.clientY;
            });
            "inner" == b.options.zoomType &&
            b.zoomWindow.bind("mousemove", function (a) {
                if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                    b.setPosition(a), (b.currentLoc = a);
                b.lastX = a.clientX;
                b.lastY = a.clientY;
            });
            b.zoomContainer
                .add(b.$elem)
                .mouseenter(function () {
                    !1 == b.overWindow && b.setElements("show");
                })
                .mouseleave(function () {
                    b.scrollLock || b.setElements("hide");
                });
            "inner" != b.options.zoomType &&
            b.zoomWindow
                .mouseenter(function () {
                    b.overWindow = !0;
                    b.setElements("hide");
                })
                .mouseleave(function () {
                    b.overWindow = !1;
                });
            b.minZoomLevel = b.options.minZoomLevel
                ? b.options.minZoomLevel
                : 2 * b.options.scrollZoomIncrement;
            b.options.scrollZoom &&
            b.zoomContainer
                .add(b.$elem)
                .bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (a) {
                    b.scrollLock = !0;
                    clearTimeout(d.data(this, "timer"));
                    d.data(
                        this,
                        "timer",
                        setTimeout(function () {
                            b.scrollLock = !1;
                        }, 250)
                    );
                    var e = a.originalEvent.wheelDelta || -1 * a.originalEvent.detail;
                    a.stopImmediatePropagation();
                    a.stopPropagation();
                    a.preventDefault();
                    0 < e / 120
                        ? b.currentZoomLevel >= b.minZoomLevel &&
                        b.changeZoomLevel(
                            b.currentZoomLevel - b.options.scrollZoomIncrement
                        )
                        : b.options.maxZoomLevel
                            ? b.currentZoomLevel <= b.options.maxZoomLevel &&
                            b.changeZoomLevel(
                                parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement
                            )
                            : b.changeZoomLevel(
                                parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement
                            );
                    return !1;
                });
        },
        setElements: function (b) {
            if (!this.options.zoomEnabled) return !1;
            "show" == b &&
            this.isWindowSet &&
            ("inner" == this.options.zoomType && this.showHideWindow("show"),
            "window" == this.options.zoomType && this.showHideWindow("show"),
            this.options.showLens && this.showHideLens("show"),
            this.options.tint &&
            "inner" != this.options.zoomType &&
            this.showHideTint("show"));
            "hide" == b &&
            ("window" == this.options.zoomType && this.showHideWindow("hide"),
            this.options.tint || this.showHideWindow("hide"),
            this.options.showLens && this.showHideLens("hide"),
            this.options.tint && this.showHideTint("hide"));
        },
        setPosition: function (b) {
            if (!this.options.zoomEnabled) return !1;
            this.nzHeight = this.$elem.height();
            this.nzWidth = this.$elem.width();
            this.nzOffset = this.$elem.offset();
            this.options.tint &&
            "inner" != this.options.zoomType &&
            (this.zoomTint.css({ top: 0 }), this.zoomTint.css({ left: 0 }));
            this.options.responsive &&
            !this.options.scrollZoom &&
            this.options.showLens &&
            ((lensHeight =
                this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
                    ? this.nzHeight
                    : String(this.options.zoomWindowHeight / this.heightRatio)),
                (lensWidth =
                    this.largeWidth < this.options.zoomWindowWidth
                        ? this.nzWidth
                        : this.options.zoomWindowWidth / this.widthRatio),
                (this.widthRatio = this.largeWidth / this.nzWidth),
                (this.heightRatio = this.largeHeight / this.nzHeight),
            "lens" != this.options.zoomType &&
            ((lensHeight =
                this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
                    ? this.nzHeight
                    : String(this.options.zoomWindowHeight / this.heightRatio)),
                (lensWidth =
                    this.options.zoomWindowWidth < this.options.zoomWindowWidth
                        ? this.nzWidth
                        : this.options.zoomWindowWidth / this.widthRatio),
                this.zoomLens.css("width", lensWidth),
                this.zoomLens.css("height", lensHeight),
            this.options.tint &&
            (this.zoomTintImage.css("width", this.nzWidth),
                this.zoomTintImage.css("height", this.nzHeight))),
            "lens" == this.options.zoomType &&
            this.zoomLens.css({
                width: String(this.options.lensSize) + "px",
                height: String(this.options.lensSize) + "px",
            }));
            this.zoomContainer.css({ top: this.nzOffset.top });
            this.zoomContainer.css({ left: this.nzOffset.left });
            this.mouseLeft = parseInt(b.pageX - this.nzOffset.left);
            this.mouseTop = parseInt(b.pageY - this.nzOffset.top);
            "window" == this.options.zoomType &&
            ((this.Etoppos = this.mouseTop < this.zoomLens.height() / 2),
                (this.Eboppos =
                    this.mouseTop >
                    this.nzHeight -
                    this.zoomLens.height() / 2 -
                    2 * this.options.lensBorderSize),
                (this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2),
                (this.Eroppos =
                    this.mouseLeft >
                    this.nzWidth -
                    this.zoomLens.width() / 2 -
                    2 * this.options.lensBorderSize));
            "inner" == this.options.zoomType &&
            ((this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio),
                (this.Eboppos =
                    this.mouseTop > this.nzHeight - this.nzHeight / 2 / this.heightRatio),
                (this.Eloppos =
                    this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio),
                (this.Eroppos =
                    this.mouseLeft >
                    this.nzWidth -
                    this.nzWidth / 2 / this.widthRatio -
                    2 * this.options.lensBorderSize));
            0 >= this.mouseLeft ||
            0 > this.mouseTop ||
            this.mouseLeft > this.nzWidth ||
            this.mouseTop > this.nzHeight
                ? this.setElements("hide")
                : (this.options.showLens &&
                ((this.lensLeftPos = String(
                    this.mouseLeft - this.zoomLens.width() / 2
                )),
                    (this.lensTopPos = String(
                        this.mouseTop - this.zoomLens.height() / 2
                    ))),
                this.Etoppos && (this.lensTopPos = 0),
                this.Eloppos &&
                (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0),
                "window" == this.options.zoomType &&
                (this.Eboppos &&
                (this.lensTopPos = Math.max(
                    this.nzHeight -
                    this.zoomLens.height() -
                    2 * this.options.lensBorderSize,
                    0
                )),
                this.Eroppos &&
                (this.lensLeftPos =
                    this.nzWidth -
                    this.zoomLens.width() -
                    2 * this.options.lensBorderSize)),
                "inner" == this.options.zoomType &&
                (this.Eboppos &&
                (this.lensTopPos = Math.max(
                    this.nzHeight - 2 * this.options.lensBorderSize,
                    0
                )),
                this.Eroppos &&
                (this.lensLeftPos =
                    this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)),
                "lens" == this.options.zoomType &&
                ((this.windowLeftPos = String(
                    -1 *
                    ((b.pageX - this.nzOffset.left) * this.widthRatio -
                        this.zoomLens.width() / 2)
                )),
                    (this.windowTopPos = String(
                        -1 *
                        ((b.pageY - this.nzOffset.top) * this.heightRatio -
                            this.zoomLens.height() / 2)
                    )),
                    this.zoomLens.css({
                        backgroundPosition:
                            this.windowLeftPos + "px " + this.windowTopPos + "px",
                    }),
                this.changeBgSize &&
                (this.nzHeight > this.nzWidth
                    ? ("lens" == this.options.zoomType &&
                    this.zoomLens.css({
                        "background-size":
                            this.largeWidth / this.newvalueheight +
                            "px " +
                            this.largeHeight / this.newvalueheight +
                            "px",
                    }),
                        this.zoomWindow.css({
                            "background-size":
                                this.largeWidth / this.newvalueheight +
                                "px " +
                                this.largeHeight / this.newvalueheight +
                                "px",
                        }))
                    : ("lens" == this.options.zoomType &&
                    this.zoomLens.css({
                        "background-size":
                            this.largeWidth / this.newvaluewidth +
                            "px " +
                            this.largeHeight / this.newvaluewidth +
                            "px",
                    }),
                        this.zoomWindow.css({
                            "background-size":
                                this.largeWidth / this.newvaluewidth +
                                "px " +
                                this.largeHeight / this.newvaluewidth +
                                "px",
                        })),
                    (this.changeBgSize = !1)),
                    this.setWindowPostition(b)),
                this.options.tint &&
                "inner" != this.options.zoomType &&
                this.setTintPosition(b),
                "window" == this.options.zoomType && this.setWindowPostition(b),
                "inner" == this.options.zoomType && this.setWindowPostition(b),
                this.options.showLens &&
                (this.fullwidth &&
                "lens" != this.options.zoomType &&
                (this.lensLeftPos = 0),
                    this.zoomLens.css({
                        left: this.lensLeftPos + "px",
                        top: this.lensTopPos + "px",
                    })));
        },
        showHideWindow: function (b) {
            "show" != b ||
            this.isWindowActive ||
            (this.options.zoomWindowFadeIn
                ? this.zoomWindow
                    .stop(!0, !0, !1)
                    .fadeIn(this.options.zoomWindowFadeIn)
                : this.zoomWindow.show(),
                (this.isWindowActive = !0));
            "hide" == b &&
            this.isWindowActive &&
            (this.options.zoomWindowFadeOut
                ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut)
                : this.zoomWindow.hide(),
                (this.isWindowActive = !1));
        },
        showHideLens: function (b) {
            "show" != b ||
            this.isLensActive ||
            (this.options.lensFadeIn
                ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn)
                : this.zoomLens.show(),
                (this.isLensActive = !0));
            "hide" == b &&
            this.isLensActive &&
            (this.options.lensFadeOut
                ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut)
                : this.zoomLens.hide(),
                (this.isLensActive = !1));
        },
        showHideTint: function (b) {
            "show" != b ||
            this.isTintActive ||
            (this.options.zoomTintFadeIn
                ? this.zoomTint
                    .css({ opacity: this.options.tintOpacity })
                    .animate()
                    .stop(!0, !0)
                    .fadeIn("slow")
                : (this.zoomTint.css({ opacity: this.options.tintOpacity }).animate(),
                    this.zoomTint.show()),
                (this.isTintActive = !0));
            "hide" == b &&
            this.isTintActive &&
            (this.options.zoomTintFadeOut
                ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut)
                : this.zoomTint.hide(),
                (this.isTintActive = !1));
        },
        setLensPostition: function (b) {},
        setWindowPostition: function (b) {
            var a = this;
            if (isNaN(a.options.zoomWindowPosition))
                (a.externalContainer = d("#" + a.options.zoomWindowPosition)),
                    (a.externalContainerWidth = a.externalContainer.width()),
                    (a.externalContainerHeight = a.externalContainer.height()),
                    (a.externalContainerOffset = a.externalContainer.offset()),
                    (a.windowOffsetTop = a.externalContainerOffset.top),
                    (a.windowOffsetLeft = a.externalContainerOffset.left);
            else
                switch (a.options.zoomWindowPosition) {
                    case 1:
                        a.windowOffsetTop = a.options.zoomWindowOffety;
                        a.windowOffsetLeft = +a.nzWidth;
                        break;
                    case 2:
                        a.options.zoomWindowHeight > a.nzHeight &&
                        ((a.windowOffsetTop =
                            -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2)),
                            (a.windowOffsetLeft = a.nzWidth));
                        break;
                    case 3:
                        a.windowOffsetTop =
                            a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
                        a.windowOffsetLeft = a.nzWidth;
                        break;
                    case 4:
                        a.windowOffsetTop = a.nzHeight;
                        a.windowOffsetLeft = a.nzWidth;
                        break;
                    case 5:
                        a.windowOffsetTop = a.nzHeight;
                        a.windowOffsetLeft =
                            a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
                        break;
                    case 6:
                        a.options.zoomWindowHeight > a.nzHeight &&
                        ((a.windowOffsetTop = a.nzHeight),
                            (a.windowOffsetLeft =
                                -1 *
                                (a.options.zoomWindowWidth / 2 -
                                    a.nzWidth / 2 +
                                    2 * a.options.borderSize)));
                        break;
                    case 7:
                        a.windowOffsetTop = a.nzHeight;
                        a.windowOffsetLeft = 0;
                        break;
                    case 8:
                        a.windowOffsetTop = a.nzHeight;
                        a.windowOffsetLeft =
                            -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                        break;
                    case 9:
                        a.windowOffsetTop =
                            a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
                        a.windowOffsetLeft =
                            -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                        break;
                    case 10:
                        a.options.zoomWindowHeight > a.nzHeight &&
                        ((a.windowOffsetTop =
                            -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2)),
                            (a.windowOffsetLeft =
                                -1 * (a.zoomWindow.width() + 2 * a.options.borderSize)));
                        break;
                    case 11:
                        a.windowOffsetTop = a.options.zoomWindowOffety;
                        a.windowOffsetLeft =
                            -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                        break;
                    case 12:
                        a.windowOffsetTop =
                            -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                        a.windowOffsetLeft =
                            -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
                        break;
                    case 13:
                        a.windowOffsetTop =
                            -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                        a.windowOffsetLeft = 0;
                        break;
                    case 14:
                        a.options.zoomWindowHeight > a.nzHeight &&
                        ((a.windowOffsetTop =
                            -1 * (a.zoomWindow.height() + 2 * a.options.borderSize)),
                            (a.windowOffsetLeft =
                                -1 *
                                (a.options.zoomWindowWidth / 2 -
                                    a.nzWidth / 2 +
                                    2 * a.options.borderSize)));
                        break;
                    case 15:
                        a.windowOffsetTop =
                            -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                        a.windowOffsetLeft =
                            a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
                        break;
                    case 16:
                        a.windowOffsetTop =
                            -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
                        a.windowOffsetLeft = a.nzWidth;
                        break;
                    default:
                        (a.windowOffsetTop = a.options.zoomWindowOffety),
                            (a.windowOffsetLeft = a.nzWidth);
                }
            a.isWindowSet = !0;
            a.windowOffsetTop += a.options.zoomWindowOffety;
            a.windowOffsetLeft += a.options.zoomWindowOffetx;
            a.zoomWindow.css({ top: a.windowOffsetTop });
            a.zoomWindow.css({ left: a.windowOffsetLeft });
            "inner" == a.options.zoomType &&
            (a.zoomWindow.css({ top: 0 }), a.zoomWindow.css({ left: 0 }));
            a.windowLeftPos = String(
                -1 *
                ((b.pageX - a.nzOffset.left) * a.widthRatio -
                    a.zoomWindow.width() / 2)
            );
            a.windowTopPos = String(
                -1 *
                ((b.pageY - a.nzOffset.top) * a.heightRatio -
                    a.zoomWindow.height() / 2)
            );
            a.Etoppos && (a.windowTopPos = 0);
            a.Eloppos && (a.windowLeftPos = 0);
            a.Eboppos &&
            (a.windowTopPos =
                -1 * (a.largeHeight / a.currentZoomLevel - a.zoomWindow.height()));
            a.Eroppos &&
            (a.windowLeftPos =
                -1 * (a.largeWidth / a.currentZoomLevel - a.zoomWindow.width()));
            a.fullheight && (a.windowTopPos = 0);
            a.fullwidth && (a.windowLeftPos = 0);
            if ("window" == a.options.zoomType || "inner" == a.options.zoomType)
                1 == a.zoomLock &&
                (1 >= a.widthRatio && (a.windowLeftPos = 0),
                1 >= a.heightRatio && (a.windowTopPos = 0)),
                a.largeHeight < a.options.zoomWindowHeight && (a.windowTopPos = 0),
                a.largeWidth < a.options.zoomWindowWidth && (a.windowLeftPos = 0),
                    a.options.easing
                        ? (a.xp || (a.xp = 0),
                        a.yp || (a.yp = 0),
                        a.loop ||
                        (a.loop = setInterval(function () {
                            a.xp += (a.windowLeftPos - a.xp) / a.options.easingAmount;
                            a.yp += (a.windowTopPos - a.yp) / a.options.easingAmount;
                            a.scrollingLock
                                ? (clearInterval(a.loop),
                                    (a.xp = a.windowLeftPos),
                                    (a.yp = a.windowTopPos),
                                    (a.xp =
                                        -1 *
                                        ((b.pageX - a.nzOffset.left) * a.widthRatio -
                                            a.zoomWindow.width() / 2)),
                                    (a.yp =
                                        -1 *
                                        ((b.pageY - a.nzOffset.top) * a.heightRatio -
                                            a.zoomWindow.height() / 2)),
                                a.changeBgSize &&
                                (a.nzHeight > a.nzWidth
                                    ? ("lens" == a.options.zoomType &&
                                    a.zoomLens.css({
                                        "background-size":
                                            a.largeWidth / a.newvalueheight +
                                            "px " +
                                            a.largeHeight / a.newvalueheight +
                                            "px",
                                    }),
                                        a.zoomWindow.css({
                                            "background-size":
                                                a.largeWidth / a.newvalueheight +
                                                "px " +
                                                a.largeHeight / a.newvalueheight +
                                                "px",
                                        }))
                                    : ("lens" != a.options.zoomType &&
                                    a.zoomLens.css({
                                        "background-size":
                                            a.largeWidth / a.newvaluewidth +
                                            "px " +
                                            a.largeHeight / a.newvalueheight +
                                            "px",
                                    }),
                                        a.zoomWindow.css({
                                            "background-size":
                                                a.largeWidth / a.newvaluewidth +
                                                "px " +
                                                a.largeHeight / a.newvaluewidth +
                                                "px",
                                        })),
                                    (a.changeBgSize = !1)),
                                    a.zoomWindow.css({
                                        backgroundPosition:
                                            a.windowLeftPos + "px " + a.windowTopPos + "px",
                                    }),
                                    (a.scrollingLock = !1),
                                    (a.loop = !1))
                                : (a.changeBgSize &&
                                (a.nzHeight > a.nzWidth
                                    ? ("lens" == a.options.zoomType &&
                                    a.zoomLens.css({
                                        "background-size":
                                            a.largeWidth / a.newvalueheight +
                                            "px " +
                                            a.largeHeight / a.newvalueheight +
                                            "px",
                                    }),
                                        a.zoomWindow.css({
                                            "background-size":
                                                a.largeWidth / a.newvalueheight +
                                                "px " +
                                                a.largeHeight / a.newvalueheight +
                                                "px",
                                        }))
                                    : ("lens" != a.options.zoomType &&
                                    a.zoomLens.css({
                                        "background-size":
                                            a.largeWidth / a.newvaluewidth +
                                            "px " +
                                            a.largeHeight / a.newvaluewidth +
                                            "px",
                                    }),
                                        a.zoomWindow.css({
                                            "background-size":
                                                a.largeWidth / a.newvaluewidth +
                                                "px " +
                                                a.largeHeight / a.newvaluewidth +
                                                "px",
                                        })),
                                    (a.changeBgSize = !1)),
                                    a.zoomWindow.css({
                                        backgroundPosition: a.xp + "px " + a.yp + "px",
                                    }));
                        }, 16)))
                        : (a.changeBgSize &&
                        (a.nzHeight > a.nzWidth
                            ? ("lens" == a.options.zoomType &&
                            a.zoomLens.css({
                                "background-size":
                                    a.largeWidth / a.newvalueheight +
                                    "px " +
                                    a.largeHeight / a.newvalueheight +
                                    "px",
                            }),
                                a.zoomWindow.css({
                                    "background-size":
                                        a.largeWidth / a.newvalueheight +
                                        "px " +
                                        a.largeHeight / a.newvalueheight +
                                        "px",
                                }))
                            : ("lens" == a.options.zoomType &&
                            a.zoomLens.css({
                                "background-size":
                                    a.largeWidth / a.newvaluewidth +
                                    "px " +
                                    a.largeHeight / a.newvaluewidth +
                                    "px",
                            }),
                                a.largeHeight / a.newvaluewidth < a.options.zoomWindowHeight
                                    ? a.zoomWindow.css({
                                        "background-size":
                                            a.largeWidth / a.newvaluewidth +
                                            "px " +
                                            a.largeHeight / a.newvaluewidth +
                                            "px",
                                    })
                                    : a.zoomWindow.css({
                                        "background-size":
                                            a.largeWidth / a.newvalueheight +
                                            "px " +
                                            a.largeHeight / a.newvalueheight +
                                            "px",
                                    })),
                            (a.changeBgSize = !1)),
                            a.zoomWindow.css({
                                backgroundPosition:
                                    a.windowLeftPos + "px " + a.windowTopPos + "px",
                            }));
        },
        setTintPosition: function (b) {
            this.nzOffset = this.$elem.offset();
            this.tintpos = String(
                -1 * (b.pageX - this.nzOffset.left - this.zoomLens.width() / 2)
            );
            this.tintposy = String(
                -1 * (b.pageY - this.nzOffset.top - this.zoomLens.height() / 2)
            );
            this.Etoppos && (this.tintposy = 0);
            this.Eloppos && (this.tintpos = 0);
            this.Eboppos &&
            (this.tintposy =
                -1 *
                (this.nzHeight -
                    this.zoomLens.height() -
                    2 * this.options.lensBorderSize));
            this.Eroppos &&
            (this.tintpos =
                -1 *
                (this.nzWidth -
                    this.zoomLens.width() -
                    2 * this.options.lensBorderSize));
            this.options.tint &&
            (this.fullheight && (this.tintposy = 0),
            this.fullwidth && (this.tintpos = 0),
                this.zoomTintImage.css({ left: this.tintpos + "px" }),
                this.zoomTintImage.css({ top: this.tintposy + "px" }));
        },
        swaptheimage: function (b, a) {
            var c = this,
                e = new Image();
            c.options.loadingIcon &&
            ((c.spinner = d(
                "<div style=\"background: url('" +
                c.options.loadingIcon +
                "') no-repeat center;height:" +
                c.nzHeight +
                "px;width:" +
                c.nzWidth +
                'px;z-index: 2000;position: absolute; background-position: center center;"></div>'
            )),
                c.$elem.after(c.spinner));
            c.options.onImageSwap(c.$elem);
            e.onload = function () {
                c.largeWidth = e.width;
                c.largeHeight = e.height;
                c.zoomImage = a;
                c.zoomWindow.css({
                    "background-size": c.largeWidth + "px " + c.largeHeight + "px",
                });
                c.zoomWindow.css({
                    "background-size": c.largeWidth + "px " + c.largeHeight + "px",
                });
                c.swapAction(b, a);
            };
            e.src = a;
        },
        swapAction: function (b, a) {
            var c = this,
                e = new Image();
            e.onload = function () {
                c.nzHeight = e.height;
                c.nzWidth = e.width;
                c.options.onImageSwapComplete(c.$elem);
                c.doneCallback();
            };
            e.src = b;
            c.currentZoomLevel = c.options.zoomLevel;
            c.options.maxZoomLevel = !1;
            "lens" == c.options.zoomType &&
            c.zoomLens.css({ backgroundImage: "url('" + a + "')" });
            "window" == c.options.zoomType &&
            c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });
            "inner" == c.options.zoomType &&
            c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });
            c.currentImage = a;
            if (c.options.imageCrossfade) {
                var f = c.$elem,
                    g = f.clone();
                c.$elem.attr("src", b);
                c.$elem.after(g);
                g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
                    d(this).remove();
                });
                c.$elem.width("auto").removeAttr("width");
                c.$elem.height("auto").removeAttr("height");
                f.fadeIn(c.options.imageCrossfade);
                c.options.tint &&
                "inner" != c.options.zoomType &&
                ((f = c.zoomTintImage),
                    (g = f.clone()),
                    c.zoomTintImage.attr("src", a),
                    c.zoomTintImage.after(g),
                    g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
                        d(this).remove();
                    }),
                    f.fadeIn(c.options.imageCrossfade),
                    c.zoomTint.css({ height: c.$elem.height() }),
                    c.zoomTint.css({ width: c.$elem.width() }));
                c.zoomContainer.css("height", c.$elem.height());
                c.zoomContainer.css("width", c.$elem.width());
                "inner" != c.options.zoomType ||
                c.options.constrainType ||
                (c.zoomWrap.parent().css("height", c.$elem.height()),
                    c.zoomWrap.parent().css("width", c.$elem.width()),
                    c.zoomWindow.css("height", c.$elem.height()),
                    c.zoomWindow.css("width", c.$elem.width()));
            } else
                c.$elem.attr("src", b),
                c.options.tint &&
                (c.zoomTintImage.attr("src", a),
                    c.zoomTintImage.attr("height", c.$elem.height()),
                    c.zoomTintImage.css({ height: c.$elem.height() }),
                    c.zoomTint.css({ height: c.$elem.height() })),
                    c.zoomContainer.css("height", c.$elem.height()),
                    c.zoomContainer.css("width", c.$elem.width());
            c.options.imageCrossfade &&
            (c.zoomWrap.css("height", c.$elem.height()),
                c.zoomWrap.css("width", c.$elem.width()));
            c.options.constrainType &&
            ("height" == c.options.constrainType &&
            (c.zoomContainer.css("height", c.options.constrainSize),
                c.zoomContainer.css("width", "auto"),
                c.options.imageCrossfade
                    ? (c.zoomWrap.css("height", c.options.constrainSize),
                        c.zoomWrap.css("width", "auto"),
                        (c.constwidth = c.zoomWrap.width()))
                    : (c.$elem.css("height", c.options.constrainSize),
                        c.$elem.css("width", "auto"),
                        (c.constwidth = c.$elem.width())),
            "inner" == c.options.zoomType &&
            (c.zoomWrap.parent().css("height", c.options.constrainSize),
                c.zoomWrap.parent().css("width", c.constwidth),
                c.zoomWindow.css("height", c.options.constrainSize),
                c.zoomWindow.css("width", c.constwidth)),
            c.options.tint &&
            (c.tintContainer.css("height", c.options.constrainSize),
                c.tintContainer.css("width", c.constwidth),
                c.zoomTint.css("height", c.options.constrainSize),
                c.zoomTint.css("width", c.constwidth),
                c.zoomTintImage.css("height", c.options.constrainSize),
                c.zoomTintImage.css("width", c.constwidth))),
            "width" == c.options.constrainType &&
            (c.zoomContainer.css("height", "auto"),
                c.zoomContainer.css("width", c.options.constrainSize),
                c.options.imageCrossfade
                    ? (c.zoomWrap.css("height", "auto"),
                        c.zoomWrap.css("width", c.options.constrainSize),
                        (c.constheight = c.zoomWrap.height()))
                    : (c.$elem.css("height", "auto"),
                        c.$elem.css("width", c.options.constrainSize),
                        (c.constheight = c.$elem.height())),
            "inner" == c.options.zoomType &&
            (c.zoomWrap.parent().css("height", c.constheight),
                c.zoomWrap.parent().css("width", c.options.constrainSize),
                c.zoomWindow.css("height", c.constheight),
                c.zoomWindow.css("width", c.options.constrainSize)),
            c.options.tint &&
            (c.tintContainer.css("height", c.constheight),
                c.tintContainer.css("width", c.options.constrainSize),
                c.zoomTint.css("height", c.constheight),
                c.zoomTint.css("width", c.options.constrainSize),
                c.zoomTintImage.css("height", c.constheight),
                c.zoomTintImage.css("width", c.options.constrainSize))));
        },
        doneCallback: function () {
            this.options.loadingIcon && this.spinner.hide();
            this.nzOffset = this.$elem.offset();
            this.nzWidth = this.$elem.width();
            this.nzHeight = this.$elem.height();
            this.currentZoomLevel = this.options.zoomLevel;
            this.widthRatio = this.largeWidth / this.nzWidth;
            this.heightRatio = this.largeHeight / this.nzHeight;
            "window" == this.options.zoomType &&
            ((lensHeight =
                this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
                    ? this.nzHeight
                    : String(this.options.zoomWindowHeight / this.heightRatio)),
                (lensWidth =
                    this.options.zoomWindowWidth < this.options.zoomWindowWidth
                        ? this.nzWidth
                        : this.options.zoomWindowWidth / this.widthRatio),
            this.zoomLens &&
            (this.zoomLens.css("width", lensWidth),
                this.zoomLens.css("height", lensHeight)));
        },
        getCurrentImage: function () {
            return this.zoomImage;
        },
        getGalleryList: function () {
            var b = this;
            b.gallerylist = [];
            b.options.gallery
                ? d("#" + b.options.gallery + " a").each(function () {
                    var a = "";
                    d(this).data("zoom-image")
                        ? (a = d(this).data("zoom-image"))
                        : d(this).data("image") && (a = d(this).data("image"));
                    a == b.zoomImage
                        ? b.gallerylist.unshift({
                            href: "" + a + "",
                            title: d(this).find("img").attr("title"),
                        })
                        : b.gallerylist.push({
                            href: "" + a + "",
                            title: d(this).find("img").attr("title"),
                        });
                })
                : b.gallerylist.push({
                    href: "" + b.zoomImage + "",
                    title: d(this).find("img").attr("title"),
                });
            return b.gallerylist;
        },
        changeZoomLevel: function (b) {
            this.scrollingLock = !0;
            this.newvalue = parseFloat(b).toFixed(2);
            newvalue = parseFloat(b).toFixed(2);
            maxheightnewvalue =
                this.largeHeight /
                ((this.options.zoomWindowHeight / this.nzHeight) * this.nzHeight);
            maxwidthtnewvalue =
                this.largeWidth /
                ((this.options.zoomWindowWidth / this.nzWidth) * this.nzWidth);
            "inner" != this.options.zoomType &&
            (maxheightnewvalue <= newvalue
                ? ((this.heightRatio =
                    this.largeHeight / maxheightnewvalue / this.nzHeight),
                    (this.newvalueheight = maxheightnewvalue),
                    (this.fullheight = !0))
                : ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
                    (this.newvalueheight = newvalue),
                    (this.fullheight = !1)),
                maxwidthtnewvalue <= newvalue
                    ? ((this.widthRatio =
                        this.largeWidth / maxwidthtnewvalue / this.nzWidth),
                        (this.newvaluewidth = maxwidthtnewvalue),
                        (this.fullwidth = !0))
                    : ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
                        (this.newvaluewidth = newvalue),
                        (this.fullwidth = !1)),
            "lens" == this.options.zoomType &&
            (maxheightnewvalue <= newvalue
                ? ((this.fullwidth = !0), (this.newvaluewidth = maxheightnewvalue))
                : ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
                    (this.newvaluewidth = newvalue),
                    (this.fullwidth = !1))));
            "inner" == this.options.zoomType &&
            ((maxheightnewvalue = parseFloat(
                this.largeHeight / this.nzHeight
            ).toFixed(2)),
                (maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(
                    2
                )),
            newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue),
            newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue),
                maxheightnewvalue <= newvalue
                    ? ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
                        (this.newvalueheight =
                            newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue),
                        (this.fullheight = !0))
                    : ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
                        (this.newvalueheight =
                            newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue),
                        (this.fullheight = !1)),
                maxwidthtnewvalue <= newvalue
                    ? ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
                        (this.newvaluewidth =
                            newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue),
                        (this.fullwidth = !0))
                    : ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
                        (this.newvaluewidth = newvalue),
                        (this.fullwidth = !1)));
            scrcontinue = !1;
            "inner" == this.options.zoomType &&
            (this.nzWidth > this.nzHeight &&
            (this.newvaluewidth <= maxwidthtnewvalue
                ? (scrcontinue = !0)
                : ((scrcontinue = !1), (this.fullwidth = this.fullheight = !0))),
            this.nzHeight > this.nzWidth &&
            (this.newvaluewidth <= maxwidthtnewvalue
                ? (scrcontinue = !0)
                : ((scrcontinue = !1), (this.fullwidth = this.fullheight = !0))));
            "inner" != this.options.zoomType && (scrcontinue = !0);
            scrcontinue &&
            ((this.zoomLock = 0),
                (this.changeZoom = !0),
            this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight &&
            ((this.currentZoomLevel = this.newvalueheight),
            "lens" != this.options.zoomType &&
            "inner" != this.options.zoomType &&
            ((this.changeBgSize = !0),
                this.zoomLens.css({
                    height:
                        String(this.options.zoomWindowHeight / this.heightRatio) + "px",
                })),
            "lens" == this.options.zoomType ||
            "inner" == this.options.zoomType) &&
            (this.changeBgSize = !0),
            this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth &&
            ("inner" != this.options.zoomType &&
            this.newvaluewidth > this.newvalueheight &&
            (this.currentZoomLevel = this.newvaluewidth),
            "lens" != this.options.zoomType &&
            "inner" != this.options.zoomType &&
            ((this.changeBgSize = !0),
                this.zoomLens.css({
                    width:
                        String(this.options.zoomWindowWidth / this.widthRatio) + "px",
                })),
            "lens" == this.options.zoomType ||
            "inner" == this.options.zoomType) &&
            (this.changeBgSize = !0),
            "inner" == this.options.zoomType &&
            ((this.changeBgSize = !0),
            this.nzWidth > this.nzHeight &&
            (this.currentZoomLevel = this.newvaluewidth),
            this.nzHeight > this.nzWidth &&
            (this.currentZoomLevel = this.newvaluewidth)));
            this.setPosition(this.currentLoc);
        },
        closeAll: function () {
            self.zoomWindow && self.zoomWindow.hide();
            self.zoomLens && self.zoomLens.hide();
            self.zoomTint && self.zoomTint.hide();
        },
        changeState: function (b) {
            "enable" == b && (this.options.zoomEnabled = !0);
            "disable" == b && (this.options.zoomEnabled = !1);
        },
    };
    d.fn.elevateZoom = function (b) {
        return this.each(function () {
            var a = Object.create(k);
            a.init(b, this);
            d.data(this, "elevateZoom", a);
        });
    };
    d.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: 0.1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: 0.4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: 0.4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: d.noop,
        onZoomedImageLoaded: function () {},
        onImageSwap: d.noop,
        onImageSwapComplete: d.noop,
    };
})(jQuery, window, document);

/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

(function ($) {
    // Number of seconds in every time division
    var days = 24 * 60 * 60,
        hours = 60 * 60,
        minutes = 60;

    // Creating the plugin
    $.fn.countdown = function (prop) {
        var options = $.extend(
            {
                callback: function () {},
                timestamp: 0,
            },
            prop
        );

        var left, d, h, m, s, positions;

        // Initialize the plugin
        init(this, options);

        positions = this.find(".position");

        (function tick() {
            // Time left
            left = Math.floor((options.timestamp - new Date()) / 1000);

            if (left < 0) {
                left = 0;
            }

            // Number of days left
            d = Math.floor(left / days);
            updateDuo(0, 1, d);
            left -= d * days;

            // Number of hours left
            h = Math.floor(left / hours);
            updateDuo(2, 3, h);
            left -= h * hours;

            // Number of minutes left
            m = Math.floor(left / minutes);
            updateDuo(4, 5, m);
            left -= m * minutes;

            // Number of seconds left
            s = left;
            updateDuo(6, 7, s);

            // Calling an optional user supplied callback
            options.callback(d, h, m, s);

            // Scheduling another call of this function in 1s
            setTimeout(tick, 1000);
        })();

        // This function updates two digit positions at once
        function updateDuo(minor, major, value) {
            switchDigit(positions.eq(minor), Math.floor(value / 10) % 10);
            switchDigit(positions.eq(major), value % 10);
        }

        return this;
    };

    function init(elem, options) {
        elem.addClass("countdownHolder");

        // Creating the markup inside the container
        $.each(["Days", "Hours", "Minutes", "Seconds"], function (i) {
            $('<span class="count' + this + '">')
                .html(
                    '<span class="position">\
					<span class="digit static">0</span>\
				</span><span class="position">\
					<span class="digit static">0</span>\
				</span>'
                )
                .appendTo(elem);

            if (this != "Seconds") {
                elem.append('<span class="countDiv countDiv' + i + '"></span>');
            }
        });
    }

    // Creates an animated transition between the two numbers
    function switchDigit(position, number) {
        var digit = position.find(".digit");

        if (digit.is(":animated")) {
            return false;
        }

        if (position.data("digit") == number) {
            // We are already showing this number
            return false;
        }

        position.data("digit", number);

        var replacement = $("<span>", {
            class: "digit",
            css: {
                top: "-2.1em",
                opacity: 0,
            },
            html: number,
        });

        // The .static class is added when the animation
        // completes. This makes it run smoother.

        digit
            .before(replacement)
            .removeClass("static")
            .animate({ top: "2.5em", opacity: 0 }, "fast", function () {
                digit.remove();
            });

        replacement.delay(100).animate({ top: 0, opacity: 1 }, "fast", function () {
            replacement.addClass("static");
        });
    }
})($);

// onScreen jQuery plugin v0.2.1
// (c) 2011-2013 Ben Pickles
//
// http://benpickles.github.io/onScreen
//
// Released under MIT license.
(function (a) {
    a.expr[":"].onScreen = function (b) {
        var c = a(window),
            d = c.scrollTop(),
            e = c.height(),
            f = d + e,
            g = a(b),
            h = g.offset().top,
            i = g.height(),
            j = h + i;
        return (
            (h >= d && h < f) || (j > d && j <= f) || (i > e && h <= d && j >= f)
        );
    };
})(jQuery);

/* Get hidden elements width and height with jQuery */
(function (a) {
    a.fn.addBack = a.fn.addBack || a.fn.andSelf;
    a.fn.extend({
        actual: function (b, l) {
            if (!this[b]) {
                throw (
                    '$.actual => The jQuery method "' + b + '" you called does not exist'
                );
            }
            var f = { absolute: false, clone: false, includeMargin: false };
            var i = a.extend(f, l);
            var e = this.eq(0);
            var h, j;
            if (i.clone === true) {
                h = function () {
                    var m = "position: absolute !important; top: -1000 !important; ";
                    e = e.clone().attr("style", m).appendTo("body");
                };
                j = function () {
                    e.remove();
                };
            } else {
                var g = [];
                var d = "";
                var c;
                h = function () {
                    c = e.parents().addBack().filter(":hidden");
                    d += "visibility: hidden !important; display: block !important; ";
                    if (i.absolute === true) {
                        d += "position: absolute !important; ";
                    }
                    c.each(function () {
                        var m = a(this);
                        var n = m.attr("style");
                        g.push(n);
                        m.attr("style", n ? n + ";" + d : d);
                    });
                };
                j = function () {
                    c.each(function (m) {
                        var o = a(this);
                        var n = g[m];
                        if (n === undefined) {
                            o.removeAttr("style");
                        } else {
                            o.attr("style", n);
                        }
                    });
                };
            }
            h();
            var k = /(outer)/.test(b) ? e[b](i.includeMargin) : e[b]();
            j();
            return k;
        },
    });
})($);

//hover delay
(function ($) {
    $.fn.hoverIntent = function (f, g) {
        var cfg = { sensitivity: 7, interval: 100, timeout: 0 };
        cfg = $.extend(cfg, g ? { over: f, out: g } : f);
        var cX, cY, pX, pY;
        var track = function (ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };
        var compare = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            if (Math.abs(pX - cX) + Math.abs(pY - cY) < cfg.sensitivity) {
                $(ob).unbind("mousemove", track);
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev]);
            } else {
                pX = cX;
                pY = cY;
                ob.hoverIntent_t = setTimeout(function () {
                    compare(ev, ob);
                }, cfg.interval);
            }
        };
        var delay = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev]);
        };
        var handleHover = function (e) {
            var ev = $.extend({}, e);
            var ob = this;
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }
            if (e.type == "mouseenter") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).bind("mousemove", track);
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        compare(ev, ob);
                    }, cfg.interval);
                }
            } else {
                $(ob).unbind("mousemove", track);
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        delay(ev, ob);
                    }, cfg.timeout);
                }
            }
        };
        return this.bind("mouseenter", handleHover).bind("mouseleave", handleHover);
    };
})($);

/*! URI.js v1.19.1 http://medialize.github.io/URI.js/ */
/* build contains: URI.js, jquery.URI.js */
/*
 URI.js - Mutating URLs
*/
(function (k, n) {
    "object" === typeof module && module.exports
        ? (module.exports = n(
            require("./punycode"),
            require("./IPv6"),
            require("./SecondLevelDomains")
        ))
        : "function" === typeof define && define.amd
            ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], n)
            : (k.URI = n(k.punycode, k.IPv6, k.SecondLevelDomains, k));
})(this, function (k, n, t, p) {
    function d(a, b) {
        var c = 1 <= arguments.length,
            e = 2 <= arguments.length;
        if (!(this instanceof d)) return c ? (e ? new d(a, b) : new d(a)) : new d();
        if (void 0 === a) {
            if (c) throw new TypeError("undefined is not a valid argument for URI");
            a = "undefined" !== typeof location ? location.href + "" : "";
        }
        if (null === a && c)
            throw new TypeError("null is not a valid argument for URI");
        this.href(a);
        return void 0 !== b ? this.absoluteTo(b) : this;
    }
    function u(a) {
        return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }
    function w(a) {
        return void 0 === a
            ? "Undefined"
            : String(Object.prototype.toString.call(a)).slice(8, -1);
    }
    function l(a) {
        return "Array" === w(a);
    }
    function B(a, b) {
        var c = {},
            d;
        if ("RegExp" === w(b)) c = null;
        else if (l(b)) {
            var f = 0;
            for (d = b.length; f < d; f++) c[b[f]] = !0;
        } else c[b] = !0;
        f = 0;
        for (d = a.length; f < d; f++)
            if ((c && void 0 !== c[a[f]]) || (!c && b.test(a[f])))
                a.splice(f, 1), d--, f--;
        return a;
    }
    function y(a, b) {
        var c;
        if (l(b)) {
            var d = 0;
            for (c = b.length; d < c; d++) if (!y(a, b[d])) return !1;
            return !0;
        }
        var f = w(b);
        d = 0;
        for (c = a.length; d < c; d++)
            if ("RegExp" === f) {
                if ("string" === typeof a[d] && a[d].match(b)) return !0;
            } else if (a[d] === b) return !0;
        return !1;
    }
    function C(a, b) {
        if (!l(a) || !l(b) || a.length !== b.length) return !1;
        a.sort();
        b.sort();
        for (var c = 0, d = a.length; c < d; c++) if (a[c] !== b[c]) return !1;
        return !0;
    }
    function h(a) {
        return a.replace(/^\/+|\/+$/g, "");
    }
    function m(a) {
        return escape(a);
    }
    function q(a) {
        return encodeURIComponent(a)
            .replace(/[!'()*]/g, m)
            .replace(/\*/g, "%2A");
    }
    function z(a) {
        return function (b, c) {
            if (void 0 === b) return this._parts[a] || "";
            this._parts[a] = b || null;
            this.build(!c);
            return this;
        };
    }
    function r(a, b) {
        return function (c, d) {
            if (void 0 === c) return this._parts[a] || "";
            null !== c && ((c += ""), c.charAt(0) === b && (c = c.substring(1)));
            this._parts[a] = c;
            this.build(!d);
            return this;
        };
    }
    var E = p && p.URI;
    d.version = "1.19.1";
    var g = d.prototype,
        v = Object.prototype.hasOwnProperty;
    d._parts = function () {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            preventInvalidHostname: d.preventInvalidHostname,
            duplicateQueryParameters: d.duplicateQueryParameters,
            escapeQuerySpace: d.escapeQuerySpace,
        };
    };
    d.preventInvalidHostname = !1;
    d.duplicateQueryParameters = !1;
    d.escapeQuerySpace = !0;
    d.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
    d.idn_expression = /[^a-z0-9\._-]/i;
    d.punycode_expression = /(xn--)/i;
    d.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    d.ip6_expression =
        /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    d.find_uri_expression =
        /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi;
    d.findUri = {
        start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
        end: /[\s\r\n]|$/,
        trim: /[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,
        parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g,
    };
    d.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443",
    };
    d.hostProtocols = ["http", "https"];
    d.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/;
    d.domAttributes = {
        a: "href",
        blockquote: "cite",
        link: "href",
        base: "href",
        script: "src",
        form: "action",
        img: "src",
        area: "href",
        iframe: "src",
        embed: "src",
        source: "src",
        track: "src",
        input: "src",
        audio: "src",
        video: "src",
    };
    d.getDomAttribute = function (a) {
        if (a && a.nodeName) {
            var b = a.nodeName.toLowerCase();
            if ("input" !== b || "image" === a.type) return d.domAttributes[b];
        }
    };
    d.encode = q;
    d.decode = decodeURIComponent;
    d.iso8859 = function () {
        d.encode = escape;
        d.decode = unescape;
    };
    d.unicode = function () {
        d.encode = q;
        d.decode = decodeURIComponent;
    };
    d.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                map: {
                    "%24": "$",
                    "%26": "&",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%3A": ":",
                    "%40": "@",
                },
            },
            decode: {
                expression: /[\/\?#]/g,
                map: { "/": "%2F", "?": "%3F", "#": "%23" },
            },
        },
        reserved: {
            encode: {
                expression:
                    /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                map: {
                    "%3A": ":",
                    "%2F": "/",
                    "%3F": "?",
                    "%23": "#",
                    "%5B": "[",
                    "%5D": "]",
                    "%40": "@",
                    "%21": "!",
                    "%24": "$",
                    "%26": "&",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                },
            },
        },
        urnpath: {
            encode: {
                expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
                map: {
                    "%21": "!",
                    "%24": "$",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%40": "@",
                },
            },
            decode: {
                expression: /[\/\?#:]/g,
                map: { "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" },
            },
        },
    };
    d.encodeQuery = function (a, b) {
        var c = d.encode(a + "");
        void 0 === b && (b = d.escapeQuerySpace);
        return b ? c.replace(/%20/g, "+") : c;
    };
    d.decodeQuery = function (a, b) {
        a += "";
        void 0 === b && (b = d.escapeQuerySpace);
        try {
            return d.decode(b ? a.replace(/\+/g, "%20") : a);
        } catch (c) {
            return a;
        }
    };
    var x = { encode: "encode", decode: "decode" },
        A,
        D = function (a, b) {
            return function (c) {
                try {
                    return d[b](c + "").replace(
                        d.characters[a][b].expression,
                        function (c) {
                            return d.characters[a][b].map[c];
                        }
                    );
                } catch (e) {
                    return c;
                }
            };
        };
    for (A in x)
        (d[A + "PathSegment"] = D("pathname", x[A])),
            (d[A + "UrnPathSegment"] = D("urnpath", x[A]));
    x = function (a, b, c) {
        return function (e) {
            var f = c
                ? function (a) {
                    return d[b](d[c](a));
                }
                : d[b];
            e = (e + "").split(a);
            for (var g = 0, h = e.length; g < h; g++) e[g] = f(e[g]);
            return e.join(a);
        };
    };
    d.decodePath = x("/", "decodePathSegment");
    d.decodeUrnPath = x(":", "decodeUrnPathSegment");
    d.recodePath = x("/", "encodePathSegment", "decode");
    d.recodeUrnPath = x(":", "encodeUrnPathSegment", "decode");
    d.encodeReserved = D("reserved", "encode");
    d.parse = function (a, b) {
        b || (b = { preventInvalidHostname: d.preventInvalidHostname });
        var c = a.indexOf("#");
        -1 < c &&
        ((b.fragment = a.substring(c + 1) || null), (a = a.substring(0, c)));
        c = a.indexOf("?");
        -1 < c && ((b.query = a.substring(c + 1) || null), (a = a.substring(0, c)));
        "//" === a.substring(0, 2)
            ? ((b.protocol = null),
                (a = a.substring(2)),
                (a = d.parseAuthority(a, b)))
            : ((c = a.indexOf(":")),
            -1 < c &&
            ((b.protocol = a.substring(0, c) || null),
                b.protocol && !b.protocol.match(d.protocol_expression)
                    ? (b.protocol = void 0)
                    : "//" === a.substring(c + 1, c + 3)
                        ? ((a = a.substring(c + 3)), (a = d.parseAuthority(a, b)))
                        : ((a = a.substring(c + 1)), (b.urn = !0))));
        b.path = a;
        return b;
    };
    d.parseHost = function (a, b) {
        a || (a = "");
        a = a.replace(/\\/g, "/");
        var c = a.indexOf("/");
        -1 === c && (c = a.length);
        if ("[" === a.charAt(0)) {
            var e = a.indexOf("]");
            b.hostname = a.substring(1, e) || null;
            b.port = a.substring(e + 2, c) || null;
            "/" === b.port && (b.port = null);
        } else {
            var f = a.indexOf(":");
            e = a.indexOf("/");
            f = a.indexOf(":", f + 1);
            -1 !== f && (-1 === e || f < e)
                ? ((b.hostname = a.substring(0, c) || null), (b.port = null))
                : ((e = a.substring(0, c).split(":")),
                    (b.hostname = e[0] || null),
                    (b.port = e[1] || null));
        }
        b.hostname && "/" !== a.substring(c).charAt(0) && (c++, (a = "/" + a));
        b.preventInvalidHostname && d.ensureValidHostname(b.hostname, b.protocol);
        b.port && d.ensureValidPort(b.port);
        return a.substring(c) || "/";
    };
    d.parseAuthority = function (a, b) {
        a = d.parseUserinfo(a, b);
        return d.parseHost(a, b);
    };
    d.parseUserinfo = function (a, b) {
        var c = a.indexOf("/"),
            e = a.lastIndexOf("@", -1 < c ? c : a.length - 1);
        -1 < e && (-1 === c || e < c)
            ? ((c = a.substring(0, e).split(":")),
                (b.username = c[0] ? d.decode(c[0]) : null),
                c.shift(),
                (b.password = c[0] ? d.decode(c.join(":")) : null),
                (a = a.substring(e + 1)))
            : ((b.username = null), (b.password = null));
        return a;
    };
    d.parseQuery = function (a, b) {
        if (!a) return {};
        a = a.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "");
        if (!a) return {};
        for (var c = {}, e = a.split("&"), f = e.length, g, h, m = 0; m < f; m++)
            if (
                ((g = e[m].split("=")),
                    (h = d.decodeQuery(g.shift(), b)),
                    (g = g.length ? d.decodeQuery(g.join("="), b) : null),
                    v.call(c, h))
            ) {
                if ("string" === typeof c[h] || null === c[h]) c[h] = [c[h]];
                c[h].push(g);
            } else c[h] = g;
        return c;
    };
    d.build = function (a) {
        var b = "";
        a.protocol && (b += a.protocol + ":");
        a.urn || (!b && !a.hostname) || (b += "//");
        b += d.buildAuthority(a) || "";
        "string" === typeof a.path &&
        ("/" !== a.path.charAt(0) && "string" === typeof a.hostname && (b += "/"),
            (b += a.path));
        "string" === typeof a.query && a.query && (b += "?" + a.query);
        "string" === typeof a.fragment && a.fragment && (b += "#" + a.fragment);
        return b;
    };
    d.buildHost = function (a) {
        var b = "";
        if (a.hostname)
            b = d.ip6_expression.test(a.hostname)
                ? b + ("[" + a.hostname + "]")
                : b + a.hostname;
        else return "";
        a.port && (b += ":" + a.port);
        return b;
    };
    d.buildAuthority = function (a) {
        return d.buildUserinfo(a) + d.buildHost(a);
    };
    d.buildUserinfo = function (a) {
        var b = "";
        a.username && (b += d.encode(a.username));
        a.password && (b += ":" + d.encode(a.password));
        b && (b += "@");
        return b;
    };
    d.buildQuery = function (a, b, c) {
        var e = "",
            f,
            g;
        for (f in a)
            if (v.call(a, f) && f)
                if (l(a[f])) {
                    var h = {};
                    var m = 0;
                    for (g = a[f].length; m < g; m++)
                        void 0 !== a[f][m] &&
                        void 0 === h[a[f][m] + ""] &&
                        ((e += "&" + d.buildQueryParameter(f, a[f][m], c)),
                        !0 !== b && (h[a[f][m] + ""] = !0));
                } else
                    void 0 !== a[f] && (e += "&" + d.buildQueryParameter(f, a[f], c));
        return e.substring(1);
    };
    d.buildQueryParameter = function (a, b, c) {
        return d.encodeQuery(a, c) + (null !== b ? "=" + d.encodeQuery(b, c) : "");
    };
    d.addQuery = function (a, b, c) {
        if ("object" === typeof b)
            for (var e in b) v.call(b, e) && d.addQuery(a, e, b[e]);
        else if ("string" === typeof b)
            void 0 === a[b]
                ? (a[b] = c)
                : ("string" === typeof a[b] && (a[b] = [a[b]]),
                l(c) || (c = [c]),
                    (a[b] = (a[b] || []).concat(c)));
        else
            throw new TypeError(
                "URI.addQuery() accepts an object, string as the name parameter"
            );
    };
    d.setQuery = function (a, b, c) {
        if ("object" === typeof b)
            for (var e in b) v.call(b, e) && d.setQuery(a, e, b[e]);
        else if ("string" === typeof b) a[b] = void 0 === c ? null : c;
        else
            throw new TypeError(
                "URI.setQuery() accepts an object, string as the name parameter"
            );
    };
    d.removeQuery = function (a, b, c) {
        var e;
        if (l(b)) for (c = 0, e = b.length; c < e; c++) a[b[c]] = void 0;
        else if ("RegExp" === w(b)) for (e in a) b.test(e) && (a[e] = void 0);
        else if ("object" === typeof b)
            for (e in b) v.call(b, e) && d.removeQuery(a, e, b[e]);
        else if ("string" === typeof b)
            void 0 !== c
                ? "RegExp" === w(c)
                    ? !l(a[b]) && c.test(a[b])
                        ? (a[b] = void 0)
                        : (a[b] = B(a[b], c))
                    : a[b] !== String(c) || (l(c) && 1 !== c.length)
                        ? l(a[b]) && (a[b] = B(a[b], c))
                        : (a[b] = void 0)
                : (a[b] = void 0);
        else
            throw new TypeError(
                "URI.removeQuery() accepts an object, string, RegExp as the first parameter"
            );
    };
    d.hasQuery = function (a, b, c, e) {
        switch (w(b)) {
            case "String":
                break;
            case "RegExp":
                for (var f in a)
                    if (
                        v.call(a, f) &&
                        b.test(f) &&
                        (void 0 === c || d.hasQuery(a, f, c))
                    )
                        return !0;
                return !1;
            case "Object":
                for (var g in b) if (v.call(b, g) && !d.hasQuery(a, g, b[g])) return !1;
                return !0;
            default:
                throw new TypeError(
                    "URI.hasQuery() accepts a string, regular expression or object as the name parameter"
                );
        }
        switch (w(c)) {
            case "Undefined":
                return b in a;
            case "Boolean":
                return (a = !(l(a[b]) ? !a[b].length : !a[b])), c === a;
            case "Function":
                return !!c(a[b], b, a);
            case "Array":
                return l(a[b]) ? (e ? y : C)(a[b], c) : !1;
            case "RegExp":
                return l(a[b]) ? (e ? y(a[b], c) : !1) : !(!a[b] || !a[b].match(c));
            case "Number":
                c = String(c);
            case "String":
                return l(a[b]) ? (e ? y(a[b], c) : !1) : a[b] === c;
            default:
                throw new TypeError(
                    "URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter"
                );
        }
    };
    d.joinPaths = function () {
        for (var a = [], b = [], c = 0, e = 0; e < arguments.length; e++) {
            var f = new d(arguments[e]);
            a.push(f);
            f = f.segment();
            for (var g = 0; g < f.length; g++)
                "string" === typeof f[g] && b.push(f[g]), f[g] && c++;
        }
        if (!b.length || !c) return new d("");
        b = new d("").segment(b);
        ("" !== a[0].path() && "/" !== a[0].path().slice(0, 1)) ||
        b.path("/" + b.path());
        return b.normalize();
    };
    d.commonPath = function (a, b) {
        var c = Math.min(a.length, b.length),
            d;
        for (d = 0; d < c; d++)
            if (a.charAt(d) !== b.charAt(d)) {
                d--;
                break;
            }
        if (1 > d)
            return a.charAt(0) === b.charAt(0) && "/" === a.charAt(0) ? "/" : "";
        if ("/" !== a.charAt(d) || "/" !== b.charAt(d))
            d = a.substring(0, d).lastIndexOf("/");
        return a.substring(0, d + 1);
    };
    d.withinString = function (a, b, c) {
        c || (c = {});
        var e = c.start || d.findUri.start,
            f = c.end || d.findUri.end,
            g = c.trim || d.findUri.trim,
            h = c.parens || d.findUri.parens,
            m = /[a-z0-9-]=["']?$/i;
        for (e.lastIndex = 0; ; ) {
            var k = e.exec(a);
            if (!k) break;
            var q = k.index;
            if (c.ignoreHtml) {
                var l = a.slice(Math.max(q - 3, 0), q);
                if (l && m.test(l)) continue;
            }
            var n = q + a.slice(q).search(f);
            l = a.slice(q, n);
            for (n = -1; ; ) {
                var p = h.exec(l);
                if (!p) break;
                n = Math.max(n, p.index + p[0].length);
            }
            l = -1 < n ? l.slice(0, n) + l.slice(n).replace(g, "") : l.replace(g, "");
            l.length <= k[0].length ||
            (c.ignore && c.ignore.test(l)) ||
            ((n = q + l.length),
                (k = b(l, q, n, a)),
                void 0 === k
                    ? (e.lastIndex = n)
                    : ((k = String(k)),
                        (a = a.slice(0, q) + k + a.slice(n)),
                        (e.lastIndex = q + k.length)));
        }
        e.lastIndex = 0;
        return a;
    };
    d.ensureValidHostname = function (a, b) {
        var c = !!a,
            e = !1;
        b && (e = y(d.hostProtocols, b));
        if (e && !c)
            throw new TypeError("Hostname cannot be empty, if protocol is " + b);
        if (a && a.match(d.invalid_hostname_characters)) {
            if (!k)
                throw new TypeError(
                    'Hostname "' +
                    a +
                    '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available'
                );
            if (k.toASCII(a).match(d.invalid_hostname_characters))
                throw new TypeError(
                    'Hostname "' + a + '" contains characters other than [A-Z0-9.-:_]'
                );
        }
    };
    d.ensureValidPort = function (a) {
        if (a) {
            var b = Number(a);
            if (!(/^[0-9]+$/.test(b) && 0 < b && 65536 > b))
                throw new TypeError('Port "' + a + '" is not a valid port');
        }
    };
    d.noConflict = function (a) {
        if (a)
            return (
                (a = { URI: this.noConflict() }),
                p.URITemplate &&
                "function" === typeof p.URITemplate.noConflict &&
                (a.URITemplate = p.URITemplate.noConflict()),
                p.IPv6 &&
                "function" === typeof p.IPv6.noConflict &&
                (a.IPv6 = p.IPv6.noConflict()),
                p.SecondLevelDomains &&
                "function" === typeof p.SecondLevelDomains.noConflict &&
                (a.SecondLevelDomains = p.SecondLevelDomains.noConflict()),
                    a
            );
        p.URI === this && (p.URI = E);
        return this;
    };
    g.build = function (a) {
        if (!0 === a) this._deferred_build = !0;
        else if (void 0 === a || this._deferred_build)
            (this._string = d.build(this._parts)), (this._deferred_build = !1);
        return this;
    };
    g.clone = function () {
        return new d(this);
    };
    g.valueOf = g.toString = function () {
        return this.build(!1)._string;
    };
    g.protocol = z("protocol");
    g.username = z("username");
    g.password = z("password");
    g.hostname = z("hostname");
    g.port = z("port");
    g.query = r("query", "?");
    g.fragment = r("fragment", "#");
    g.search = function (a, b) {
        var c = this.query(a, b);
        return "string" === typeof c && c.length ? "?" + c : c;
    };
    g.hash = function (a, b) {
        var c = this.fragment(a, b);
        return "string" === typeof c && c.length ? "#" + c : c;
    };
    g.pathname = function (a, b) {
        if (void 0 === a || !0 === a) {
            var c = this._parts.path || (this._parts.hostname ? "/" : "");
            return a ? (this._parts.urn ? d.decodeUrnPath : d.decodePath)(c) : c;
        }
        this._parts.path = this._parts.urn
            ? a
                ? d.recodeUrnPath(a)
                : ""
            : a
                ? d.recodePath(a)
                : "/";
        this.build(!b);
        return this;
    };
    g.path = g.pathname;
    g.href = function (a, b) {
        var c;
        if (void 0 === a) return this.toString();
        this._string = "";
        this._parts = d._parts();
        var e = a instanceof d,
            f = "object" === typeof a && (a.hostname || a.path || a.pathname);
        a.nodeName && ((f = d.getDomAttribute(a)), (a = a[f] || ""), (f = !1));
        !e && f && void 0 !== a.pathname && (a = a.toString());
        if ("string" === typeof a || a instanceof String)
            this._parts = d.parse(String(a), this._parts);
        else if (e || f) {
            e = e ? a._parts : a;
            for (c in e)
                "query" !== c && v.call(this._parts, c) && (this._parts[c] = e[c]);
            e.query && this.query(e.query, !1);
        } else throw new TypeError("invalid input");
        this.build(!b);
        return this;
    };
    g.is = function (a) {
        var b = !1,
            c = !1,
            e = !1,
            f = !1,
            g = !1,
            h = !1,
            m = !1,
            k = !this._parts.urn;
        this._parts.hostname &&
        ((k = !1),
            (c = d.ip4_expression.test(this._parts.hostname)),
            (e = d.ip6_expression.test(this._parts.hostname)),
            (b = c || e),
            (g = (f = !b) && t && t.has(this._parts.hostname)),
            (h = f && d.idn_expression.test(this._parts.hostname)),
            (m = f && d.punycode_expression.test(this._parts.hostname)));
        switch (a.toLowerCase()) {
            case "relative":
                return k;
            case "absolute":
                return !k;
            case "domain":
            case "name":
                return f;
            case "sld":
                return g;
            case "ip":
                return b;
            case "ip4":
            case "ipv4":
            case "inet4":
                return c;
            case "ip6":
            case "ipv6":
            case "inet6":
                return e;
            case "idn":
                return h;
            case "url":
                return !this._parts.urn;
            case "urn":
                return !!this._parts.urn;
            case "punycode":
                return m;
        }
        return null;
    };
    var F = g.protocol,
        G = g.port,
        H = g.hostname;
    g.protocol = function (a, b) {
        if (
            a &&
            ((a = a.replace(/:(\/\/)?$/, "")), !a.match(d.protocol_expression))
        )
            throw new TypeError(
                'Protocol "' +
                a +
                "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]"
            );
        return F.call(this, a, b);
    };
    g.scheme = g.protocol;
    g.port = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        void 0 !== a &&
        (0 === a && (a = null),
        a &&
        ((a += ""),
        ":" === a.charAt(0) && (a = a.substring(1)),
            d.ensureValidPort(a)));
        return G.call(this, a, b);
    };
    g.hostname = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if (void 0 !== a) {
            var c = { preventInvalidHostname: this._parts.preventInvalidHostname };
            if ("/" !== d.parseHost(a, c))
                throw new TypeError(
                    'Hostname "' + a + '" contains characters other than [A-Z0-9.-]'
                );
            a = c.hostname;
            this._parts.preventInvalidHostname &&
            d.ensureValidHostname(a, this._parts.protocol);
        }
        return H.call(this, a, b);
    };
    g.origin = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if (void 0 === a) {
            var c = this.protocol();
            return this.authority() ? (c ? c + "://" : "") + this.authority() : "";
        }
        c = d(a);
        this.protocol(c.protocol()).authority(c.authority()).build(!b);
        return this;
    };
    g.host = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if (void 0 === a)
            return this._parts.hostname ? d.buildHost(this._parts) : "";
        if ("/" !== d.parseHost(a, this._parts))
            throw new TypeError(
                'Hostname "' + a + '" contains characters other than [A-Z0-9.-]'
            );
        this.build(!b);
        return this;
    };
    g.authority = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if (void 0 === a)
            return this._parts.hostname ? d.buildAuthority(this._parts) : "";
        if ("/" !== d.parseAuthority(a, this._parts))
            throw new TypeError(
                'Hostname "' + a + '" contains characters other than [A-Z0-9.-]'
            );
        this.build(!b);
        return this;
    };
    g.userinfo = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if (void 0 === a) {
            var c = d.buildUserinfo(this._parts);
            return c ? c.substring(0, c.length - 1) : c;
        }
        "@" !== a[a.length - 1] && (a += "@");
        d.parseUserinfo(a, this._parts);
        this.build(!b);
        return this;
    };
    g.resource = function (a, b) {
        if (void 0 === a) return this.path() + this.search() + this.hash();
        var c = d.parse(a);
        this._parts.path = c.path;
        this._parts.query = c.query;
        this._parts.fragment = c.fragment;
        this.build(!b);
        return this;
    };
    g.subdomain = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if (void 0 === a) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var c = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, c) || "";
        }
        c = this._parts.hostname.length - this.domain().length;
        c = this._parts.hostname.substring(0, c);
        c = new RegExp("^" + u(c));
        a && "." !== a.charAt(a.length - 1) && (a += ".");
        if (-1 !== a.indexOf(":"))
            throw new TypeError("Domains cannot contain colons");
        a && d.ensureValidHostname(a, this._parts.protocol);
        this._parts.hostname = this._parts.hostname.replace(c, a);
        this.build(!b);
        return this;
    };
    g.domain = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        "boolean" === typeof a && ((b = a), (a = void 0));
        if (void 0 === a) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var c = this._parts.hostname.match(/\./g);
            if (c && 2 > c.length) return this._parts.hostname;
            c = this._parts.hostname.length - this.tld(b).length - 1;
            c = this._parts.hostname.lastIndexOf(".", c - 1) + 1;
            return this._parts.hostname.substring(c) || "";
        }
        if (!a) throw new TypeError("cannot set domain empty");
        if (-1 !== a.indexOf(":"))
            throw new TypeError("Domains cannot contain colons");
        d.ensureValidHostname(a, this._parts.protocol);
        !this._parts.hostname || this.is("IP")
            ? (this._parts.hostname = a)
            : ((c = new RegExp(u(this.domain()) + "$")),
                (this._parts.hostname = this._parts.hostname.replace(c, a)));
        this.build(!b);
        return this;
    };
    g.tld = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        "boolean" === typeof a && ((b = a), (a = void 0));
        if (void 0 === a) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var c = this._parts.hostname.lastIndexOf(".");
            c = this._parts.hostname.substring(c + 1);
            return !0 !== b && t && t.list[c.toLowerCase()]
                ? t.get(this._parts.hostname) || c
                : c;
        }
        if (a)
            if (a.match(/[^a-zA-Z0-9-]/))
                if (t && t.is(a))
                    (c = new RegExp(u(this.tld()) + "$")),
                        (this._parts.hostname = this._parts.hostname.replace(c, a));
                else
                    throw new TypeError(
                        'TLD "' + a + '" contains characters other than [A-Z0-9]'
                    );
            else {
                if (!this._parts.hostname || this.is("IP"))
                    throw new ReferenceError("cannot set TLD on non-domain host");
                c = new RegExp(u(this.tld()) + "$");
                this._parts.hostname = this._parts.hostname.replace(c, a);
            }
        else throw new TypeError("cannot set TLD empty");
        this.build(!b);
        return this;
    };
    g.directory = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if (void 0 === a || !0 === a) {
            if (!this._parts.path && !this._parts.hostname) return "";
            if ("/" === this._parts.path) return "/";
            var c = this._parts.path.length - this.filename().length - 1;
            c = this._parts.path.substring(0, c) || (this._parts.hostname ? "/" : "");
            return a ? d.decodePath(c) : c;
        }
        c = this._parts.path.length - this.filename().length;
        c = this._parts.path.substring(0, c);
        c = new RegExp("^" + u(c));
        this.is("relative") ||
        (a || (a = "/"), "/" !== a.charAt(0) && (a = "/" + a));
        a && "/" !== a.charAt(a.length - 1) && (a += "/");
        a = d.recodePath(a);
        this._parts.path = this._parts.path.replace(c, a);
        this.build(!b);
        return this;
    };
    g.filename = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if ("string" !== typeof a) {
            if (!this._parts.path || "/" === this._parts.path) return "";
            var c = this._parts.path.lastIndexOf("/");
            c = this._parts.path.substring(c + 1);
            return a ? d.decodePathSegment(c) : c;
        }
        c = !1;
        "/" === a.charAt(0) && (a = a.substring(1));
        a.match(/\.?\//) && (c = !0);
        var e = new RegExp(u(this.filename()) + "$");
        a = d.recodePath(a);
        this._parts.path = this._parts.path.replace(e, a);
        c ? this.normalizePath(b) : this.build(!b);
        return this;
    };
    g.suffix = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if (void 0 === a || !0 === a) {
            if (!this._parts.path || "/" === this._parts.path) return "";
            var c = this.filename(),
                e = c.lastIndexOf(".");
            if (-1 === e) return "";
            c = c.substring(e + 1);
            c = /^[a-z0-9%]+$/i.test(c) ? c : "";
            return a ? d.decodePathSegment(c) : c;
        }
        "." === a.charAt(0) && (a = a.substring(1));
        if ((c = this.suffix()))
            e = a ? new RegExp(u(c) + "$") : new RegExp(u("." + c) + "$");
        else {
            if (!a) return this;
            this._parts.path += "." + d.recodePath(a);
        }
        e &&
        ((a = d.recodePath(a)),
            (this._parts.path = this._parts.path.replace(e, a)));
        this.build(!b);
        return this;
    };
    g.segment = function (a, b, c) {
        var d = this._parts.urn ? ":" : "/",
            f = this.path(),
            g = "/" === f.substring(0, 1);
        f = f.split(d);
        void 0 !== a && "number" !== typeof a && ((c = b), (b = a), (a = void 0));
        if (void 0 !== a && "number" !== typeof a)
            throw Error('Bad segment "' + a + '", must be 0-based integer');
        g && f.shift();
        0 > a && (a = Math.max(f.length + a, 0));
        if (void 0 === b) return void 0 === a ? f : f[a];
        if (null === a || void 0 === f[a])
            if (l(b)) {
                f = [];
                a = 0;
                for (var m = b.length; a < m; a++)
                    if (b[a].length || (f.length && f[f.length - 1].length))
                        f.length && !f[f.length - 1].length && f.pop(), f.push(h(b[a]));
            } else {
                if (b || "string" === typeof b)
                    (b = h(b)),
                        "" === f[f.length - 1] ? (f[f.length - 1] = b) : f.push(b);
            }
        else b ? (f[a] = h(b)) : f.splice(a, 1);
        g && f.unshift("");
        return this.path(f.join(d), c);
    };
    g.segmentCoded = function (a, b, c) {
        var e;
        "number" !== typeof a && ((c = b), (b = a), (a = void 0));
        if (void 0 === b) {
            a = this.segment(a, b, c);
            if (l(a)) {
                var f = 0;
                for (e = a.length; f < e; f++) a[f] = d.decode(a[f]);
            } else a = void 0 !== a ? d.decode(a) : void 0;
            return a;
        }
        if (l(b)) for (f = 0, e = b.length; f < e; f++) b[f] = d.encode(b[f]);
        else b = "string" === typeof b || b instanceof String ? d.encode(b) : b;
        return this.segment(a, b, c);
    };
    var I = g.query;
    g.query = function (a, b) {
        if (!0 === a)
            return d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("function" === typeof a) {
            var c = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace),
                e = a.call(this, c);
            this._parts.query = d.buildQuery(
                e || c,
                this._parts.duplicateQueryParameters,
                this._parts.escapeQuerySpace
            );
            this.build(!b);
            return this;
        }
        return void 0 !== a && "string" !== typeof a
            ? ((this._parts.query = d.buildQuery(
                a,
                this._parts.duplicateQueryParameters,
                this._parts.escapeQuerySpace
            )),
                this.build(!b),
                this)
            : I.call(this, a, b);
    };
    g.setQuery = function (a, b, c) {
        var e = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("string" === typeof a || a instanceof String)
            e[a] = void 0 !== b ? b : null;
        else if ("object" === typeof a)
            for (var f in a) v.call(a, f) && (e[f] = a[f]);
        else
            throw new TypeError(
                "URI.addQuery() accepts an object, string as the name parameter"
            );
        this._parts.query = d.buildQuery(
            e,
            this._parts.duplicateQueryParameters,
            this._parts.escapeQuerySpace
        );
        "string" !== typeof a && (c = b);
        this.build(!c);
        return this;
    };
    g.addQuery = function (a, b, c) {
        var e = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        d.addQuery(e, a, void 0 === b ? null : b);
        this._parts.query = d.buildQuery(
            e,
            this._parts.duplicateQueryParameters,
            this._parts.escapeQuerySpace
        );
        "string" !== typeof a && (c = b);
        this.build(!c);
        return this;
    };
    g.removeQuery = function (a, b, c) {
        var e = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        d.removeQuery(e, a, b);
        this._parts.query = d.buildQuery(
            e,
            this._parts.duplicateQueryParameters,
            this._parts.escapeQuerySpace
        );
        "string" !== typeof a && (c = b);
        this.build(!c);
        return this;
    };
    g.hasQuery = function (a, b, c) {
        var e = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return d.hasQuery(e, a, b, c);
    };
    g.setSearch = g.setQuery;
    g.addSearch = g.addQuery;
    g.removeSearch = g.removeQuery;
    g.hasSearch = g.hasQuery;
    g.normalize = function () {
        return this._parts.urn
            ? this.normalizeProtocol(!1)
                .normalizePath(!1)
                .normalizeQuery(!1)
                .normalizeFragment(!1)
                .build()
            : this.normalizeProtocol(!1)
                .normalizeHostname(!1)
                .normalizePort(!1)
                .normalizePath(!1)
                .normalizeQuery(!1)
                .normalizeFragment(!1)
                .build();
    };
    g.normalizeProtocol = function (a) {
        "string" === typeof this._parts.protocol &&
        ((this._parts.protocol = this._parts.protocol.toLowerCase()),
            this.build(!a));
        return this;
    };
    g.normalizeHostname = function (a) {
        this._parts.hostname &&
        (this.is("IDN") && k
            ? (this._parts.hostname = k.toASCII(this._parts.hostname))
            : this.is("IPv6") &&
            n &&
            (this._parts.hostname = n.best(this._parts.hostname)),
            (this._parts.hostname = this._parts.hostname.toLowerCase()),
            this.build(!a));
        return this;
    };
    g.normalizePort = function (a) {
        "string" === typeof this._parts.protocol &&
        this._parts.port === d.defaultPorts[this._parts.protocol] &&
        ((this._parts.port = null), this.build(!a));
        return this;
    };
    g.normalizePath = function (a) {
        var b = this._parts.path;
        if (!b) return this;
        if (this._parts.urn)
            return (
                (this._parts.path = d.recodeUrnPath(this._parts.path)),
                    this.build(!a),
                    this
            );
        if ("/" === this._parts.path) return this;
        b = d.recodePath(b);
        var c = "";
        if ("/" !== b.charAt(0)) {
            var e = !0;
            b = "/" + b;
        }
        if ("/.." === b.slice(-3) || "/." === b.slice(-2)) b += "/";
        b = b.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/");
        e && (c = b.substring(1).match(/^(\.\.\/)+/) || "") && (c = c[0]);
        for (;;) {
            var f = b.search(/\/\.\.(\/|$)/);
            if (-1 === f) break;
            else if (0 === f) {
                b = b.substring(3);
                continue;
            }
            var g = b.substring(0, f).lastIndexOf("/");
            -1 === g && (g = f);
            b = b.substring(0, g) + b.substring(f + 3);
        }
        e && this.is("relative") && (b = c + b.substring(1));
        this._parts.path = b;
        this.build(!a);
        return this;
    };
    g.normalizePathname = g.normalizePath;
    g.normalizeQuery = function (a) {
        "string" === typeof this._parts.query &&
        (this._parts.query.length
            ? this.query(
                d.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
            )
            : (this._parts.query = null),
            this.build(!a));
        return this;
    };
    g.normalizeFragment = function (a) {
        this._parts.fragment || ((this._parts.fragment = null), this.build(!a));
        return this;
    };
    g.normalizeSearch = g.normalizeQuery;
    g.normalizeHash = g.normalizeFragment;
    g.iso8859 = function () {
        var a = d.encode,
            b = d.decode;
        d.encode = escape;
        d.decode = decodeURIComponent;
        try {
            this.normalize();
        } finally {
            (d.encode = a), (d.decode = b);
        }
        return this;
    };
    g.unicode = function () {
        var a = d.encode,
            b = d.decode;
        d.encode = q;
        d.decode = unescape;
        try {
            this.normalize();
        } finally {
            (d.encode = a), (d.decode = b);
        }
        return this;
    };
    g.readable = function () {
        var a = this.clone();
        a.username("").password("").normalize();
        var b = "";
        a._parts.protocol && (b += a._parts.protocol + "://");
        a._parts.hostname &&
        (a.is("punycode") && k
            ? ((b += k.toUnicode(a._parts.hostname)),
            a._parts.port && (b += ":" + a._parts.port))
            : (b += a.host()));
        a._parts.hostname &&
        a._parts.path &&
        "/" !== a._parts.path.charAt(0) &&
        (b += "/");
        b += a.path(!0);
        if (a._parts.query) {
            for (
                var c = "", e = 0, f = a._parts.query.split("&"), g = f.length;
                e < g;
                e++
            ) {
                var h = (f[e] || "").split("=");
                c +=
                    "&" +
                    d
                        .decodeQuery(h[0], this._parts.escapeQuerySpace)
                        .replace(/&/g, "%26");
                void 0 !== h[1] &&
                (c +=
                    "=" +
                    d
                        .decodeQuery(h[1], this._parts.escapeQuerySpace)
                        .replace(/&/g, "%26"));
            }
            b += "?" + c.substring(1);
        }
        return (b += d.decodeQuery(a.hash(), !0));
    };
    g.absoluteTo = function (a) {
        var b = this.clone(),
            c = ["protocol", "username", "password", "hostname", "port"],
            e,
            f;
        if (this._parts.urn)
            throw Error(
                "URNs do not have any generally defined hierarchical components"
            );
        a instanceof d || (a = new d(a));
        if (b._parts.protocol) return b;
        b._parts.protocol = a._parts.protocol;
        if (this._parts.hostname) return b;
        for (e = 0; (f = c[e]); e++) b._parts[f] = a._parts[f];
        b._parts.path
            ? (".." === b._parts.path.substring(-2) && (b._parts.path += "/"),
            "/" !== b.path().charAt(0) &&
            ((c = (c = a.directory())
                ? c
                : 0 === a.path().indexOf("/")
                    ? "/"
                    : ""),
                (b._parts.path = (c ? c + "/" : "") + b._parts.path),
                b.normalizePath()))
            : ((b._parts.path = a._parts.path),
            b._parts.query || (b._parts.query = a._parts.query));
        b.build();
        return b;
    };
    g.relativeTo = function (a) {
        var b = this.clone().normalize();
        if (b._parts.urn)
            throw Error(
                "URNs do not have any generally defined hierarchical components"
            );
        a = new d(a).normalize();
        var c = b._parts;
        var e = a._parts;
        var f = b.path();
        a = a.path();
        if ("/" !== f.charAt(0)) throw Error("URI is already relative");
        if ("/" !== a.charAt(0))
            throw Error("Cannot calculate a URI relative to another relative URI");
        c.protocol === e.protocol && (c.protocol = null);
        if (
            c.username === e.username &&
            c.password === e.password &&
            null === c.protocol &&
            null === c.username &&
            null === c.password &&
            c.hostname === e.hostname &&
            c.port === e.port
        )
            (c.hostname = null), (c.port = null);
        else return b.build();
        if (f === a) return (c.path = ""), b.build();
        f = d.commonPath(f, a);
        if (!f) return b.build();
        e = e.path
            .substring(f.length)
            .replace(/[^\/]*$/, "")
            .replace(/.*?\//g, "../");
        c.path = e + c.path.substring(f.length) || "./";
        return b.build();
    };
    g.equals = function (a) {
        var b = this.clone(),
            c = new d(a);
        a = {};
        var e;
        b.normalize();
        c.normalize();
        if (b.toString() === c.toString()) return !0;
        var f = b.query();
        var g = c.query();
        b.query("");
        c.query("");
        if (b.toString() !== c.toString() || f.length !== g.length) return !1;
        b = d.parseQuery(f, this._parts.escapeQuerySpace);
        g = d.parseQuery(g, this._parts.escapeQuerySpace);
        for (e in b)
            if (v.call(b, e)) {
                if (!l(b[e])) {
                    if (b[e] !== g[e]) return !1;
                } else if (!C(b[e], g[e])) return !1;
                a[e] = !0;
            }
        for (e in g) if (v.call(g, e) && !a[e]) return !1;
        return !0;
    };
    g.preventInvalidHostname = function (a) {
        this._parts.preventInvalidHostname = !!a;
        return this;
    };
    g.duplicateQueryParameters = function (a) {
        this._parts.duplicateQueryParameters = !!a;
        return this;
    };
    g.escapeQuerySpace = function (a) {
        this._parts.escapeQuerySpace = !!a;
        return this;
    };
    return d;
});
(function (k, n) {
    "object" === typeof module && module.exports
        ? (module.exports = n(require("jquery"), require("./URI")))
        : "function" === typeof define && define.amd
            ? define(["jquery", "./URI"], n)
            : n(k.jQuery, k.URI);
})(this, function (k, n) {
    function t(d) {
        return d.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }
    function p(d) {
        var h = d.nodeName.toLowerCase();
        if ("input" !== h || "image" === d.type) return n.domAttributes[h];
    }
    function d(d) {
        return {
            get: function (h) {
                return k(h).uri()[d]();
            },
            set: function (h, q) {
                k(h).uri()[d](q);
                return q;
            },
        };
    }
    function u(d, m) {
        if (!p(d) || !m) return !1;
        var h = m.match(y);
        if (!h || (!h[5] && ":" !== h[2] && !l[h[2]])) return !1;
        var n = k(d).uri();
        if (h[5]) return n.is(h[5]);
        if (":" === h[2]) {
            var r = h[1].toLowerCase() + ":";
            return l[r] ? l[r](n, h[4]) : !1;
        }
        r = h[1].toLowerCase();
        return w[r] ? l[h[2]](n[r](), h[4], r) : !1;
    }
    var w = {},
        l = {
            "=": function (d, m) {
                return d === m;
            },
            "^=": function (d, m) {
                return !!(d + "").match(new RegExp("^" + t(m), "i"));
            },
            "$=": function (d, m) {
                return !!(d + "").match(new RegExp(t(m) + "$", "i"));
            },
            "*=": function (d, m, k) {
                "directory" === k && (d += "/");
                return !!(d + "").match(new RegExp(t(m), "i"));
            },
            "equals:": function (d, m) {
                return d.equals(m);
            },
            "is:": function (d, m) {
                return d.is(m);
            },
        };
    k.each(
        "origin authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username".split(
            " "
        ),
        function (h, m) {
            w[m] = !0;
            k.attrHooks["uri:" + m] = d(m);
        }
    );
    var B = function (d, m) {
        return k(d).uri().href(m).toString();
    };
    k.each(["src", "href", "action", "uri", "cite"], function (d, m) {
        k.attrHooks[m] = { set: B };
    });
    k.attrHooks.uri.get = function (d) {
        return k(d).uri();
    };
    k.fn.uri = function (d) {
        var h = this.first(),
            k = h.get(0),
            l = p(k);
        if (!l)
            throw Error(
                'Element "' +
                k.nodeName +
                '" does not have either property: href, src, action, cite'
            );
        if (void 0 !== d) {
            var r = h.data("uri");
            if (r) return r.href(d);
            d instanceof n || (d = n(d || ""));
        } else {
            if ((d = h.data("uri"))) return d;
            d = n(h.attr(l) || "");
        }
        d._dom_element = k;
        d._dom_attribute = l;
        d.normalize();
        h.data("uri", d);
        return d;
    };
    n.prototype.build = function (d) {
        if (this._dom_element)
            (this._string = n.build(this._parts)),
                (this._deferred_build = !1),
                this._dom_element.setAttribute(this._dom_attribute, this._string),
                (this._dom_element[this._dom_attribute] = this._string);
        else if (!0 === d) this._deferred_build = !0;
        else if (void 0 === d || this._deferred_build)
            (this._string = n.build(this._parts)), (this._deferred_build = !1);
        return this;
    };
    var y = /^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;
    var C = k.expr.createPseudo
        ? k.expr.createPseudo(function (d) {
            return function (h) {
                return u(h, d);
            };
        })
        : function (d, k, l) {
            return u(d, l[3]);
        };
    k.expr[":"].uri = C;
    return k;
});

//jQuery Cookie
jQuery.cookie = function (key, value, options) {
    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === "number") {
            var days = options.expires,
                t = (options.expires = new Date());
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key),
            "=",
            options.raw ? value : cookie_encode(value),
            options.expires ? "; expires=" + options.expires.toUTCString() : "", // use expires attribute, max-age is not supported by IE
            options.path ? "; path=" + options.path : "",
            options.domain ? "; domain=" + options.domain : "",
            options.secure ? "; secure" : "",
        ].join(""));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result,
        decode = options.raw
            ? function (s) {
                return s;
            }
            : decodeURIComponent;
    return (result = new RegExp(
        "(?:^|; )" + encodeURIComponent(key) + "=([^;]*)"
    ).exec(document.cookie))
        ? decode(result[1])
        : null;
};

function cookie_encode(string) {
    //full uri decode not only to encode ",; =" but to save uicode charaters
    var decoded = encodeURIComponent(string);
    //encod back common and allowed charaters {}:"#[] to save space and make the cookies more human readable
    var ns = decoded.replace(
        /(%7B|%7D|%3A|%22|%23|%5B|%5D)/g,
        function (charater) {
            return decodeURIComponent(charater);
        }
    );
    return ns;
}

//overflown
$.fn.overflown = function () {
    var e = this[0];
    return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
};

function updateAjaxPageData() {
    //page counters
    $.ajax({
        url: "/ajax.php?t=ajaxpagedata",
        success: function (data) {
            var data = $.parseJSON(data);
            if (data.shopping_cart_count > 0) {
                $(".shopping_cart_count")
                    .addClass("sc_nonempty")
                    .text(data.shopping_cart_count);
                $(".floating_cart").removeClass("hidden");
            } else {
                $(".shopping_cart_count").removeClass("sc_nonempty").text(0);
                $(".floating_cart").addClass("hidden");
            }
            if (!$(".header_shopping_total").hasClass("sc_nonempty")) {
                if (data.shopping_cart_amount.length) {
                    $(".header_shopping_total").text(data.shopping_cart_amount);
                }
            }
            if (data.user_menu.length) {
                $(".header_account_menu_wrp").html(data.user_menu);
            }
            if (data.logged && data.logged == 1) {
                if (
                    $("form.search_form").length &&
                    !$("form.search_form").find("div.srch_by_code").length
                ) {
                    $("form.search_form").append(
                        '<div class="srch_by_code"><label><input type="checkbox" name="srch_type" value="code"> - поиск по коду</label></div>'
                    );
                    if (window.location.search.indexOf("srch_type=code") > -1) {
                        $(".srch_by_code input").prop("checked", true);
                    }
                }
            }
            if (data.additional_menu && data.additional_menu.length > 0) {
                var _additional_menu = $(data.additional_menu);
                if ($(".product_info").length) {
                    var url = _additional_menu.find(".product a").attr("href");
                    url = url.replace("{*productID*}", $(".product_info").attr("rel"));
                    _additional_menu.find(".product a").attr("href", url);
                } else {
                    _additional_menu.find(".product").remove();
                }

                if ($('input[name="category_code"]').length) {
                    var url = _additional_menu.find(".category a").attr("href");
                    url = url.replace(
                        "{*categoryID*}",
                        $('input[name="category_code"]').attr("value")
                    );
                    _additional_menu.find(".category a").attr("href", url);
                } else {
                    _additional_menu.find(".category").remove();
                }

                if ($('input[name="pageid"]').length) {
                    var url = _additional_menu.find(".page a").attr("href");
                    url = url.replace(
                        "{*pageID*}",
                        $('input[name="pageid"]').attr("value")
                    );
                    _additional_menu.find(".page a").attr("href", url);
                } else {
                    _additional_menu.find(".page").remove();
                }
                _additional_menu
                    .find("ul")
                    .filter(function () {
                        return $.trim(this.innerHTML) == "";
                    })
                    .remove();
                $(".header_list_top_menu_info .additional_menu").remove();
                $(".header_list_top_menu_info").append(_additional_menu);
            }
            /*if (data.history_count > 0) {
				$('.product_history_handler sup').addClass('visible').text(data.history_count);
			} else {
				$('.product_history_handler sup').removeClass('visible');
			}
			if (data.wishlist_count > 0) {
				$('.hbm_wishlist_counter').addClass('visible').text(data.wishlist_count);
			} else {
				$('.hbm_wishlist_counter').removeClass('visible');
			}
			if (data.compare_count > 0) {
				$('.hbm_compare_counter').addClass('visible').text(data.compare_count);
			} else {
				$('.hbm_compare_counter').removeClass('visible');
			}*/
        },
    });
}

function initMaxReadMoar() {
    //readmoar button
    if ($(".maxreadmoar_wrp").length) {
        $(".maxreadmoar_wrp").each(function () {
            if (!$(this).hasClass("mrm_loaded")) {
                if ($(this).overflown()) {
                    $(this).addClass("overflow");
                    var readmoar_label = "Еще";
                    var attr = $(this).attr("data-readmoarlabel");
                    if (typeof attr !== typeof undefined && attr !== false) {
                        readmoar_label = $(this).attr("data-readmoarlabel");
                    }
                    var maxreadmoarBtn = $(
                        '<div class="maxreadmoar"><span class="maxreadmoar_btn"><i class="fa fa-angle-down" aria-hidden="true"></i>' +
                        readmoar_label +
                        "</span></div>"
                    );
                    if ($(this).css("overflow-y") == "auto") {
                        $(this).after(maxreadmoarBtn);
                    } else {
                        $(this).append(maxreadmoarBtn);
                    }
                    $(maxreadmoarBtn).click({ btnTarget: this }, function (e) {
                        $(e.data.btnTarget).css({ "max-height": "none" });
                        $(e.data.btnTarget).addClass("mrm_disabled");
                        $(this).remove();
                    });
                }
                $(this).addClass("mrm_loaded");
            }
        });
    }
}

function InitScrollable(_target, reInit) {
    reInit = typeof reInit == "undefined" ? 0 : reInit;
    isMobileDevice = $(window).width() < 768;

    scrollablePrepareImage = function (img) {
        var $img, url, $pre;
        $img = $(img);
        if (
            !$img ||
            !($img.data("hires") || $img.data("video")) ||
            isMobileDevice
        ) {
            return;
        }
        if ($img.data("video")) {
            url = $img.data("video");
            $pre = $(
                '<video autoplay muted playsinline><source src="' +
                url +
                '" type="video/mp4"></video>'
            );
            $pre.on("loadedmetadata", function () {
                var sc_imgvideo = $img
                    .wrap('<span class="sc_imgvideo"></span>')
                    .parent();
                sc_imgvideo.append($pre);
                $pre.get(0).play();
            });
            $pre.on("ended", function () {
                setTimeout(function () {
                    $pre.get(0).play();
                }, 1000);
            });
        } else if ($img.data("hires")) {
            url = $img.data("hires");

            $pre = $("<img />");
            $pre.on("load", function () {
                $img.attr("src", url);
            });
            $pre.attr("src", url);
        }
    };

    scrollableUpdateHeight = function (_rootScroll) {
        if (_rootScroll.hasClass("autowidthitems")) {
            let _rootScrollWidth = _rootScroll.width();
            if (_rootScrollWidth > 0) {
                _rootScroll.find(".lst > *").width(_rootScroll.width());
            }
        }
        if (!_rootScroll.hasClass("vertical")) {
            let _rootScrollHeight = _rootScroll.find(".lst").height();

            if (_rootScroll.find(".lst").height()) {
                _rootScroll.css({ height: _rootScroll.find(".lst").height() + "px" });
            }
        }
    };

    if (_target.find(".scrollable").length) {
        //fix scrollable height
        _target.find(".scrollable").each(function () {
            //fix scrollable

            $(this).addClass("src_loaded");
            var lstItemFirst = $(this).find(".lst > *:first");
            var lstItem = $(this).find(".lst > *");

            if ($(this).hasClass("autowidthitems")) {
                lstItem.width($(this).width());
            }

            var item_count = lstItem.length;
            var item_width = lstItemFirst.outerWidth(true);
            var scrollable_width = $(this).width();
            var scrollable_vertical = $(this).hasClass("vertical");
            var scrollable_circular = !$(this).hasClass("no_circular");
            if (scrollable_vertical) {
                lstItem.width($(this).width());
            }
            if (
                !scrollable_vertical &&
                lstItemFirst.length &&
                $.isFunction($.fn.actual) &&
                typeof lstItemFirst.actual == "function"
            ) {
                $(this).css({ height: lstItemFirst.actual("height") + "px" });
            }
            if (item_count > 1 && item_width * item_count > scrollable_width) {
                let _dScroll = $(this).scrollable({
                    vertical: scrollable_vertical,
                    circular: scrollable_circular,
                    speed: 200,
                    clonedClass: "cloned",
                    touch: isMobileDevice ? true : false,
                    drag: true,
                    onSeek: function () {
                        var currentItem = this.getItems().eq(this.getIndex());
                        this.getItems().removeClass("active");
                        currentItem.addClass("active");

                        currentItem.find("img").each(function (i, img) {
                            scrollablePrepareImage(img);
                        });
                    },
                    onBeforeSeek: function () {
                        var _rootScroll = this.getRoot();
                        scrollableUpdateHeight(_rootScroll);
                    },
                });

                let firstItem = $(this)
                    .data("scrollable")
                    .getItems()
                    .eq($(this).data("scrollable").getIndex());
                if (firstItem.find("img").length) {
                    scrollablePrepareImage(firstItem.find("img"));
                }

                if ($(this).hasClass("post_createdateautoscroll")) {
                    $(this).autoscroll({ interval: 14000, steps: 1, autopause: true });
                }
                if ($(this).hasClass("navigator")) {
                    $(this).navigator();
                }
            } else {
                $(this).parent().find(".prev, .next").hide();
                $(this).addClass("scrollable_disabled");
                $(this).css({ height: $(this).find(".lst").height() + "px" });

                if ($(this).find("img").length) {
                    scrollablePrepareImage($(this).find("img"));
                }
            }

            if (!scrollable_vertical) {
                $(this).css({ height: lstItemFirst.actual("height") + "px" });
            }

            if (reInit > 0) {
                var _rootScroll = $(this);
                if (_rootScroll.hasClass("autowidthitems")) {
                    _rootScroll.find(".lst > *").width(_rootScroll.width());
                }
                if (!_rootScroll.hasClass("vertical")) {
                    _rootScroll.css({
                        height: _rootScroll.find(".lst").actual("height") + "px",
                    });
                }
            }

            $(this)
                .find("img")
                .each(function () {
                    this.onload = function () {
                        _rootScroll = $(this).parents(".scrollable")[0];
                        _rootScroll = $(_rootScroll);
                        scrollableUpdateHeight(_rootScroll);
                    };
                });
        });
    }
}

function inputTypeNumberFix() {
    $("input[type=number]")
        .each(function () {
            $('<input type="text" />')
                .attr({
                    name: this.name,
                    value: this.value,
                    class: $(this).attr("class"),
                    size: $(this).attr("size"),
                    pattern: $(this).attr("pattern"),
                    step: $(this).attr("step"),
                })
                .addClass("type_number")
                .insertBefore(this);
        })
        .remove();
    $(".type_number").each(function () {
        if (!$(this).parent().hasClass("input_type_number_control")) {
            var _step = $(this).attr("step");
            _step = parseInt(_step) || 0;
            if (
                !(typeof _step !== typeof undefined && _step !== false && _step != 0)
            ) {
                _step = 1;
            }
            $(this).wrap("<span class='input_type_number_control'></span>");
            $(this).after(
                '<span class="itnc_plusminus" rel="' +
                _step +
                '"><i class="fa fa-plus"></i></span><span class="itnc_plusminus itnc_plusminus_down" rel="-' +
                _step +
                '"><i class="fa fa-minus"></i></span>'
            );
        }
    });
    $(".itnc_plusminus").off("click");
    $(document).on("click", ".itnc_plusminus", function () {
        var button = $(this);
        var input = button.parent().parent().find(".type_number");
        input.val(function (i, value) {
            var _result = +value + 1 * +button.attr("rel");
            var _step = $(this).attr("step");
            _step = parseInt(_step) || 0;
            if (typeof _step !== typeof undefined && _step !== false) {
                if (_step > 0 && _result > 0) {
                    _result = Math.ceil(_result / _step) * _step;
                }
            }
            return _result < 0 ? 0 : _result;
        });
        input.trigger("change");
    });
}

/*! getScriptOnce */
(function ($) {
    $.getScriptOnce = function (url, successhandler) {
        if ($.getScriptOnce.loaded.indexOf(url) === -1) {
            $.getScriptOnce.loaded.push(url);
            if (successhandler === undefined) {
                return $.getScript(url);
            } else {
                return $.getScript(url, function (script, textStatus, jqXHR) {
                    successhandler(script, textStatus, jqXHR);
                });
            }
        } else {
            if (successhandler === undefined) {
                return false;
            } else {
                successhandler();
            }
        }
    };
    $.getScriptOnce.loaded = [];
})(jQuery);

function initLazyRecaptcha() {
    if ($(".lazy-recaptcha-handler").length) {
        $(document).on("click", ".lazy-recaptcha-handler", function () {
            if (!$(this).hasClass("lazy-recaptcha-launched")) {
                $(this).addClass("lazy-recaptcha-launched");

                var onloadLazyRecaptchaCallback = function () {
                    var timerJQueryId_3263423226 = setInterval(function () {
                        if (window.jQuery && typeof grecaptcha != "undefined") {
                            clearInterval(timerJQueryId_3263423226);
                            var $ = window.jQuery;
                            $(".lazy-recaptcha").each(function () {
                                let _sitekey = $(this).attr("data-recaptcha-sitekey");
                                if (typeof _sitekey !== "undefined") {
                                    if ($(this).is(":empty")) {
                                        grecaptcha.render($(this)[0], {
                                            sitekey: _sitekey, //Replace this with your Site key
                                            theme: "light",
                                        });
                                    }
                                }
                            });
                        }
                    }, 250);
                };
                $.getScriptOnce("//www.google.com/recaptcha/api.js", function () {
                    onloadLazyRecaptchaCallback();
                });
            }
        });
    }
}

/*js init*/
$(function () {
    var homeurl = ORIG_URL;
    var isMobileDevice = $(window).width() < 768;
    var rootDomain = "strument.com.ua";
    $("#searchstring")
        .focus(function () {
            if (this.value == "Поиск товаров") this.value = "";
        })
        .blur(function () {
            if (this.value == "") this.value = "Поиск товаров";
        });
    $("#f_searchstring")
        .focus(function () {
            if (this.value == "Поиск товаров") this.value = "";
        })
        .blur(function () {
            if (this.value == "") this.value = "Поиск товаров";
        });
    $(".pseudo_link").click(function () {
        window.location = $(this).find("a").attr("href");
    });
    $("ul.tabs").delegate("li:not(.current)", "click", function () {
        $(this)
            .addClass("current")
            .siblings()
            .removeClass("current")
            .parents("div.page_body_wrp")
            .find("div.box, #kupit, #charTable")
            .hide();
        $("#" + $(this).attr("rel")).show();
    });
    if (window.location.hash == "#desc_diss") {
        $("ul.tabs li[rel=desc_diss]")
            .addClass("current")
            .siblings()
            .removeClass("current")
            .parents("div.page_body_wrp")
            .find("div.box, #kupit, #charTable")
            .hide();
        $("#desc_diss").show();
    }

    $(".clicktoggler").click(function () {
        $(this).toggleClass("clicktoggler-on");
        return false;
    });

    $(".clicktogglernext").click(function () {
        $(this).toggleClass("clicktogglernexthandler-on");
        $(this).next().toggleClass("clicktogglernext-on");
        return false;
    });
    $(".hoverintent").hoverIntent({
        over: function () {
            $(this).addClass("hoverintent-on");
        },
        timeout: 300,
        out: function () {
            $(this).removeClass("hoverintent-on");
        },
    });

    $(
        'a[href*=".jpg"]:has("img"),a[href*=".png"]:has("img"), a[href*=".jpeg"]:has("img"), a[href*=".JPG"]:has("img"), a[href*=".Jpeg"]:has("img"), a[href$=".gif"]:has("img"), a[href$=".png"]:has("img"), a[href$=".PNG"]:has("img"),.fancybox_img, .highslide'
    ).each(function () {
        if (!$(this).hasClass("notfancybox")) {
            $(this).fancybox({
            type:'image',
            padding : 20,
            imageScale : true, 
              zoomOpacity: true,
              zoomSpeedIn : 1000,	
              zoomSpeedOut : 1000,	
              zoomSpeedChange : 1000, 
              frameWidth : 700,	 
              frameHeight : 600, 
            }
            );
        }
    });

    inputTypeNumberFix();

    initMaxReadMoar();

    InitScrollable($("body"));

    if ($(".quick_product_search").length) {
        var quick_product_search = $(".quick_product_search");
        quick_product_search.each(function () {
            var _searchstring = $(this);
            _ss_ac = $(this).autocomplete({
                minLength: 3,
                delay: 1000,
                source: function (request, response) {
                    $.ajax({
                        dataType: "json",
                        type: "get",
                        url: homeurl + "ajax.php",
                        data: { q: _searchstring.val(), t: "qsearch" },
                        success: function (data) {
                            _searchstring.removeClass("ui-autocomplete-loading");
                            response(data);
                        },
                        error: function (data) {
                            _searchstring.removeClass("ui-autocomplete-loading");
                        },
                    });
                },
                open: function () {
                    $(".ui-autocomplete").outerWidth(_searchstring.outerWidth());
                },
                close: function () {},
                focus: function (event, ui) {
                    event.preventDefault();
                },
                select: function (event, ui) {},
            });

            _ss_ac.autocomplete("widget").addClass("hs_auto_widget");
            _ss_ac.autocomplete("instance")._renderItem = function (ul, item) {
                var _tpl = "";
                _tpl = $("<li>")
                    .append(
                        '<div class="ss_product_item"><a href="' +
                        item.link +
                        '" class="ss_pi_link"><span class="imgwrp"><img src="' +
                        item.img +
                        '"></span><span class="ss_pi_name">' +
                        item.name +
                        "</span></div>"
                    )
                    .appendTo(ul);
                return _tpl;
            };
        });
    }
    
     

    $(".panels_tabs .panels_tabs_item").click(function () {
        var targetPaneIndex = $(this).index();
        var panels_tabs = $(this).closest(".panels_tabs");
        var panels_wrp = panels_tabs.nextAll(".panels_wrp").first();
        panels_tabs.find(".panels_tabs_item").removeClass("current");
        panels_wrp
            .find(".panel_item:eq(" + targetPaneIndex + ")")
            .css({ height: "auto", visibility: "visible", display: "block" });
        $(this).addClass("current");
        panels_wrp
            .find(".panel_item")
            .css({ height: "0", visibility: "hidden", display: "block" });
        panels_wrp
            .find(".panel_item:eq(" + targetPaneIndex + ")")
            .css({ height: "auto", visibility: "visible", display: "block" });
    });
    $(".panels_tabs").each(function () {
        $(this).find(".panels_tabs_item:first").click();
    });

    //filter
    $(".adv_search_option_name").click(function (e) {
        var adv_search_row = $(this).nextAll(".adv_search_row").first();
        if (adv_search_row.hasClass("hidden")) {
            $(this).removeClass("hidden");
            adv_search_row.removeClass("hidden");
        } else {
            $(this).addClass("hidden");
            adv_search_row.addClass("hidden");
        }
    });
    if (isMobileDevice) {
        $(".adv_search_row.maxreadmoar_wrp").addClass("hidden");
    }
    $(".adv_search_button").click(function () {
        $(".adv_search_wrp").addClass("popup");
        $("body").addClass("popup_mode");
    });
    $(".adv_search_wrp .hide_button").click(function () {
        $(".adv_search_wrp").removeClass("popup");
        $("body").removeClass("popup_mode");
    });
    $(".adv_search_wrp a").click(function () {
        $(".adv_search_wrp").addClass("loading");
    });

    if ($(".scrollable").length) {
        var vertical_scrollable = false;
        //fix scrollable height
        $(".scrollable").each(function () {
            vertical_scrollable = false;
            if ($(this).hasClass("vertical")) {
                vertical_scrollable = true;
            }
            if ($(this).hasClass("autowidthitems")) {
                $(this).find(".lst > *").width($(this).width());
            }
            if (vertical_scrollable == false) {
                var maxHeight = Math.max.apply(
                    null,
                    $(this)
                        .find(".lst > *")
                        .map(function () {
                            return $(this).height();
                        })
                        .get()
                );
                $(this).height(maxHeight);
            }
            if ($(this).find(".lst").children().length > 1) {
                $(this).scrollable({
                    vertical: vertical_scrollable,
                    circular: true,
                    speed: 400,
                    clonedClass: "cloned",
                    onSeek: function () {
                        this.getItems().removeClass("active");
                        this.getItems().eq(this.getIndex()).addClass("active");
                    },
                });
                if ($(this).hasClass("autoscroll")) {
                    $(this).autoscroll({ interval: 10000, steps: 1, autopause: true });
                }
                if ($(this).hasClass("navigator")) {
                    $(this).navigator();
                }
            } else {
                $(this).parent().find(".next, .prev").hide();
            }
        });
    }

    function loadShowTopSubcats(target) {
        var tv_subcategories = $(target).find(".tv_subcategories");
        $(target).addClass("hover");
        $(".tv_subcategories").css({ visibility: "hidden" });
        tv_subcategories.css({ visibility: "visible" });

        if (!tv_subcategories.hasClass("tv_loaded")) {
            var categoryID = $(target).attr("rel");
            $.ajax({
                url:
                    homeurl +
                    (CURR_LANG_ISO != "ru" ? CURR_LANG_ISO + "/" : "") +
                    "category_info/",
                data: { categoryID: categoryID, view: "nohtmlframe" },
                success: function (data) {
                    tv_subcategories.html(data).addClass("tv_loaded");

                    tv_subcategories.find(".subacts_item").hoverIntent({
                        over: function () {
                            tv_subcategories.find(".subacts_item").removeClass("active");
                            $(this).addClass("active");

                            var targetID = $(this).attr("data-id");
                            tv_subcategories.find(".subcat_pane").removeClass("active");
                            tv_subcategories
                                .find('.subcat_pane[data-id="' + targetID + '"]')
                                .addClass("active");
                        },
                        timeout: 70,
                        out: function () {},
                    });
                },
            });
        }
    }

    $(".header_menu td.tv_link_root").hoverIntent({
        over: function () {
            loadShowTopSubcats(this);
        },
        timeout: 300,
        out: function () {
            $(this).removeClass("hover");
            $(this).find(".tv_subcategories").css({ visibility: "hidden" });
        },
    });

    $(document).on("click", ".add2cart_handler", function () {
        var productID = $(this)
            .closest("form")
            .find('input[name="productID"]')
            .val();
        var shopID = $(this).closest("form").find('input[name="shopId"]').val();
        var quickbuy = $(this).hasClass("add2cart_quick");
        var product_options = $(this).closest("form").find(".product_option");
        var product_qty = $(this).closest("form").find(".product_qty").val();
        let preorder = $(this).hasClass("add2preorder");

        $(this).addClass("bought").text("В корзине").val("В корзине");

        if (productID == null || productID <= 0) {
            productID = $(this).attr("rel");
        }

        var query = "";
        if (product_options.length > 0) {
            product_options.each(function (i) {
                if ($(this).is(":checked")) {
                    query +=
                        "&" + $(this).attr("name") + "=" + parseInt($(this).attr("value"));
                }
            });
        }

        if (product_qty) {
            product_qty = parseInt(product_qty);
            if (product_qty > 1) {
                query += "&product_qty=" + product_qty;
            }
        } else {
            product_qty = 0;
        }

        var url =
            "/?ukey=cart&view=noframe&action=add_product&" +
            query +
            "&productID=" +
            productID +
            "&lang_iso2=" +
            CURR_LANG_ISO;

        $(".floating_cart").removeClass("hidden");

        $(this).addClass("incart");

        if (preorder) {
            $.ajax({
                method: "POST",
                url: "/ajax.php",
                dataType: "json",
                data: {
                    t: "preorder_info",
                    json: "1",
                    id: productID,
                    lang_iso2: CURR_LANG_ISO,
                },
                success: function (data) {
                    if (data && data.hasOwnProperty("preorder_description")) {
                        let fancyWidth = $(".main_wrp").outerWidth();
                        fancyWidth = fancyWidth > 0 ? fancyWidth * 0.75 : 600;
                        $.fancybox.open({
                            src: data.preorder_description,
                            type: "html",
                            opts: {
                                iframe: {
                                    css: {
                                        width: fancyWidth,
                                    },
                                },
                            },
                        });
                    }
                },
            });
        }

        var source = $(this).closest("form").find("img");
        if (!source.length && !$(".img-current_picture").length) {
            source = $("#img-current_picture");
        }
        if (source.length) {
            var target = $(".floating_cart");

            $("body").prepend(
                '<img id="img_cart_animation" style="display:none; position:static; top:0px; z-index:100000;" src="' +
                source.attr("src") +
                '" width="' +
                target.innerWidth() +
                '" />'
            );
            shadow = $("#img_cart_animation");

            shadow.css({
                width: source.css("width"),
                height: source.css("height"),
                top: source.offset().top,
                left: source.offset().left,
                opacity: 1,
                display: "block",
                position: "absolute",
            });
            shadow.animate(
                {
                    top: target.offset().top,
                    left: target.offset().left,
                    width: target.css("width"),
                    height: target.css("height"),
                    opacity: 0.2,
                },
                {
                    duration: 500,
                    complete: function () {
                        shadow.remove();

                        $.getJSON(url + "&hiddencart=1", function (data) {
                            $("#shpcrtgc, .shpcrtgc").text(data.ProductsNum);
                            if (data.added_product) {
                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({
                                    event: 'add_to_cart',
                                    ecommerce: {
                                        items: [data.added_product]
                                    }
                                });
                            }
                        });

                        //openFadeIFrame(url);
                    },
                }
            );
        } else {
            var fancyWidth = $(".main_wrp").outerWidth();
            fancyWidth = fancyWidth > 0 ? fancyWidth * 0.75 : 1024;
            //$.fancybox({href: url+'&t='+Math.round(+new Date()/1000), type: 'iframe', width: fancyWidth});
            $.fancybox.open({
                src: url + "&t=" + Math.round(+new Date() / 1000),
                type: "iframe",
                opts: {
                    iframe: {
                        css: {
                            width: fancyWidth,
                        },
                    },
                },
            });
        }

        return false;
    });

    $(document).on("click", ".hndl_proceed_checkout", function () {
        var fancyWidth = $(".main_wrp").outerWidth();
        fancyWidth = fancyWidth > 0 ? fancyWidth * 0.9 : 1024;
        $.fancybox.open({
            src:
                "/" +
                (CURR_LANG_ISO != "ru" ? CURR_LANG_ISO + "/" : "") +
                "cart/?view=noframe&t=" +
                Math.round(+new Date() / 1000),
            type: "iframe",
            opts: {
                iframe: {
                    css: {
                        width: fancyWidth,
                    },
                },
            },
        });

        return false;
    });

    $(document).on("click", ".quick-buy-handler", function () {
        let fancyWidth = $(".main_wrp").outerWidth();
        let maxWidth = 400;
        fancyWidth = fancyWidth > maxWidth ? maxWidth : fancyWidth * 0.9;

        let product_id = $(this).attr("data-product-id");
        let product_qty = $(this).parent().find('input[name="product_qty"]').val();

        $.fancybox.open({
            src:
                "/" +
                (CURR_LANG_ISO != "ru" ? CURR_LANG_ISO + "/" : "") +
                "checkout/?action=quick_buy&view=noframe&product_id=" +
                product_id +
                "&product_qty=" +
                product_qty +
                "&t=" +
                Math.round(+new Date() / 1000),
            type: "iframe",
            scrolling: "no",
            iframe: { scrolling: "no" },
            opts: {
                iframe: {
                    css: {
                        width: fancyWidth,
                    },
                },
            },
        });

        return false;
    });

    $(".cpt_category_tree .ml_group").click(function () {
        currentCategory = $(this);
        if (!currentCategory.hasClass("parent_current")) {
            categoryID = currentCategory.attr("rel");
            currentCategory.after('<div class="loading"></div>');
            $.get("/ajax.php?t=sub_cats&id=" + categoryID, function (m) {
                $(".cpt_category_tree").find(".loading").remove();
                if (m.length) {
                    currentCategory.removeClass("parent");
                    currentCategory.addClass("parent_current");
                    currentCategory.after(m);
                    currentCategory.unbind("click");
                    return false;
                }
            });
            return false;
        }
    });
    $(".mlgroup_category span").click(function () {
        currentUL = $(this).parent().find("ul");
        $(".mlgroup_category ul").not(currentUL).hide("fast");
        currentUL.slideToggle("fast");
    });
    $("#cat_product_sort form select").change(function () {
        $(this).parent().submit();
    });

    $(".category_view_select div").click(function () {
        $categoryViewForm = $(this).parent().find("form");
        $categoryViewForm.find("input").attr("value", $(this).attr("rel"));
        $categoryViewForm.submit();
    });

    /* home cats left menu */
    if (!isMobileDevice) {
        $(".products_wrp .product_brief_table").hoverIntent({
            over: function () {
                var _optionsHeight = 0;
                if ($(this).find(".prdbrief_options").length) {
                    var _optionsHeight = $(this)
                        .find(".prdbrief_options")
                        .actual("height");
                }
                $(this)
                    .addClass("hover")
                    .css({ "margin-bottom": "-" + _optionsHeight + "px" });
            },
            timeout: 100,
            out: function () {
                $(this).removeClass("hover").removeAttr("style");
            },
        });
    }

    $(".disscus").click(function () {
        window.location =
            $(this).parents().eq(1).find(".prdbrief_name a").attr("href") +
            "#desc_diss";
    });

    $(".root_cats_tree_btn").click(function () {
        var cDate = new Date();
        var cDateMin = 10080;
        cDate.setTime(cDate.getTime() + cDateMin * 60 * 1000);
        $.cookie("root_cats_tree", $(this).hasClass("clicktogglernexthandler-on"), {
            expires: cDate,
            path: "/",
            domain: ".strument.com.ua",
        });
    });
    if ($.cookie("root_cats_tree") == "true") {
        $(".root_cats_tree_btn").click();
    }

    $(".root_cats_tree ul li .root_cats_tree_expander").click(function () {
        $(this).parent().find("ul:first").toggleClass("visible");
        $(this).toggleClass("open");
    });

    var tooltip_date = new Date();
    var tooltip_date_minutes = 120;
    tooltip_date.setTime(
        tooltip_date.getTime() + tooltip_date_minutes * 60 * 1000
    );

    var MD5 = function (s) {
        function L(k, d) {
            return (k << d) | (k >>> (32 - d));
        }
        function K(G, k) {
            var I, d, F, H, x;
            F = G & 2147483648;
            H = k & 2147483648;
            I = G & 1073741824;
            d = k & 1073741824;
            x = (G & 1073741823) + (k & 1073741823);
            if (I & d) {
                return x ^ 2147483648 ^ F ^ H;
            }
            if (I | d) {
                if (x & 1073741824) {
                    return x ^ 3221225472 ^ F ^ H;
                } else {
                    return x ^ 1073741824 ^ F ^ H;
                }
            } else {
                return x ^ F ^ H;
            }
        }
        function r(d, F, k) {
            return (d & F) | (~d & k);
        }
        function q(d, F, k) {
            return (d & k) | (F & ~k);
        }
        function p(d, F, k) {
            return d ^ F ^ k;
        }
        function n(d, F, k) {
            return F ^ (d | ~k);
        }
        function u(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(r(F, aa, Z), k), I));
            return K(L(G, H), F);
        }
        function f(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(q(F, aa, Z), k), I));
            return K(L(G, H), F);
        }
        function D(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(p(F, aa, Z), k), I));
            return K(L(G, H), F);
        }
        function t(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(n(F, aa, Z), k), I));
            return K(L(G, H), F);
        }
        function e(G) {
            var Z;
            var F = G.length;
            var x = F + 8;
            var k = (x - (x % 64)) / 64;
            var I = (k + 1) * 16;
            var aa = Array(I - 1);
            var d = 0;
            var H = 0;
            while (H < F) {
                Z = (H - (H % 4)) / 4;
                d = (H % 4) * 8;
                aa[Z] = aa[Z] | (G.charCodeAt(H) << d);
                H++;
            }
            Z = (H - (H % 4)) / 4;
            d = (H % 4) * 8;
            aa[Z] = aa[Z] | (128 << d);
            aa[I - 2] = F << 3;
            aa[I - 1] = F >>> 29;
            return aa;
        }
        function B(x) {
            var k = "",
                F = "",
                G,
                d;
            for (d = 0; d <= 3; d++) {
                G = (x >>> (d * 8)) & 255;
                F = "0" + G.toString(16);
                k = k + F.substr(F.length - 2, 2);
            }
            return k;
        }
        function J(k) {
            k = k.replace(/rn/g, "n");
            var d = "";
            for (var F = 0; F < k.length; F++) {
                var x = k.charCodeAt(F);
                if (x < 128) {
                    d += String.fromCharCode(x);
                } else {
                    if (x > 127 && x < 2048) {
                        d += String.fromCharCode((x >> 6) | 192);
                        d += String.fromCharCode((x & 63) | 128);
                    } else {
                        d += String.fromCharCode((x >> 12) | 224);
                        d += String.fromCharCode(((x >> 6) & 63) | 128);
                        d += String.fromCharCode((x & 63) | 128);
                    }
                }
            }
            return d;
        }
        var C = Array();
        var P, h, E, v, g, Y, X, W, V;
        var S = 7,
            Q = 12,
            N = 17,
            M = 22;
        var A = 5,
            z = 9,
            y = 14,
            w = 20;
        var o = 4,
            m = 11,
            l = 16,
            j = 23;
        var U = 6,
            T = 10,
            R = 15,
            O = 21;
        s = J(s);
        C = e(s);
        Y = 1732584193;
        X = 4023233417;
        W = 2562383102;
        V = 271733878;
        for (P = 0; P < C.length; P += 16) {
            h = Y;
            E = X;
            v = W;
            g = V;
            Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
            V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
            W = u(W, V, Y, X, C[P + 2], N, 606105819);
            X = u(X, W, V, Y, C[P + 3], M, 3250441966);
            Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
            V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
            W = u(W, V, Y, X, C[P + 6], N, 2821735955);
            X = u(X, W, V, Y, C[P + 7], M, 4249261313);
            Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
            V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
            W = u(W, V, Y, X, C[P + 10], N, 4294925233);
            X = u(X, W, V, Y, C[P + 11], M, 2304563134);
            Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
            V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
            W = u(W, V, Y, X, C[P + 14], N, 2792965006);
            X = u(X, W, V, Y, C[P + 15], M, 1236535329);
            Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
            V = f(V, Y, X, W, C[P + 6], z, 3225465664);
            W = f(W, V, Y, X, C[P + 11], y, 643717713);
            X = f(X, W, V, Y, C[P + 0], w, 3921069994);
            Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
            V = f(V, Y, X, W, C[P + 10], z, 38016083);
            W = f(W, V, Y, X, C[P + 15], y, 3634488961);
            X = f(X, W, V, Y, C[P + 4], w, 3889429448);
            Y = f(Y, X, W, V, C[P + 9], A, 568446438);
            V = f(V, Y, X, W, C[P + 14], z, 3275163606);
            W = f(W, V, Y, X, C[P + 3], y, 4107603335);
            X = f(X, W, V, Y, C[P + 8], w, 1163531501);
            Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
            V = f(V, Y, X, W, C[P + 2], z, 4243563512);
            W = f(W, V, Y, X, C[P + 7], y, 1735328473);
            X = f(X, W, V, Y, C[P + 12], w, 2368359562);
            Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
            V = D(V, Y, X, W, C[P + 8], m, 2272392833);
            W = D(W, V, Y, X, C[P + 11], l, 1839030562);
            X = D(X, W, V, Y, C[P + 14], j, 4259657740);
            Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
            V = D(V, Y, X, W, C[P + 4], m, 1272893353);
            W = D(W, V, Y, X, C[P + 7], l, 4139469664);
            X = D(X, W, V, Y, C[P + 10], j, 3200236656);
            Y = D(Y, X, W, V, C[P + 13], o, 681279174);
            V = D(V, Y, X, W, C[P + 0], m, 3936430074);
            W = D(W, V, Y, X, C[P + 3], l, 3572445317);
            X = D(X, W, V, Y, C[P + 6], j, 76029189);
            Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
            V = D(V, Y, X, W, C[P + 12], m, 3873151461);
            W = D(W, V, Y, X, C[P + 15], l, 530742520);
            X = D(X, W, V, Y, C[P + 2], j, 3299628645);
            Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
            V = t(V, Y, X, W, C[P + 7], T, 1126891415);
            W = t(W, V, Y, X, C[P + 14], R, 2878612391);
            X = t(X, W, V, Y, C[P + 5], O, 4237533241);
            Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
            V = t(V, Y, X, W, C[P + 3], T, 2399980690);
            W = t(W, V, Y, X, C[P + 10], R, 4293915773);
            X = t(X, W, V, Y, C[P + 1], O, 2240044497);
            Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
            V = t(V, Y, X, W, C[P + 15], T, 4264355552);
            W = t(W, V, Y, X, C[P + 6], R, 2734768916);
            X = t(X, W, V, Y, C[P + 13], O, 1309151649);
            Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
            V = t(V, Y, X, W, C[P + 11], T, 3174756917);
            W = t(W, V, Y, X, C[P + 2], R, 718787259);
            X = t(X, W, V, Y, C[P + 9], O, 3951481745);
            Y = K(Y, h);
            X = K(X, E);
            W = K(W, v);
            V = K(V, g);
        }
        var i = B(Y) + B(X) + B(W) + B(V);
        return i.toLowerCase();
    };
    setInterval(function () {
        $(".tooltip_helper").each(function () {
            if ($(this).parent(".tooltip_helper_wrp").length == 0) {
                $(this).wrap('<div class="tooltip_helper_wrp"></div>');
            }
            if (!$(this).find(".tooltip_helper_close").length) {
                $(this).append(
                    '<div class="tooltip_helper_close"><i class="fa fa-times"></i></div>'
                );
            }
            var _thOnScreen = $(this).filter(":onScreen");
            if (!_thOnScreen.hasClass("onScreen")) {
                var md5_id = MD5(_thOnScreen.text()).substring(0, 10);

                if ($.cookie("th_" + md5_id) == "2") {
                    _thOnScreen.addClass("hidden");
                } else if ($.cookie("th_" + md5_id) != "1") {
                    _thOnScreen.addClass("onScreen");
                    _topPx = -parseInt(_thOnScreen.outerHeight()) - 53;
                    _leftPx = -parseInt(_thOnScreen.outerWidth() / 2) - 30;
                    _thOnScreen.css({ "margin-top": _topPx, "margin-left": _leftPx });

                    $.cookie("th_" + md5_id, "1", {
                        expires: tooltip_date,
                        path: "/",
                        domain: ".strument.com.ua",
                    });

                    setTimeout(function () {
                        var md5_id = MD5(_thOnScreen.text()).substring(0, 10);
                        $.cookie("th_" + md5_id, "2", {
                            expires: tooltip_date,
                            path: "/",
                            domain: ".strument.com.ua",
                        });
                        _thOnScreen.addClass("hidden");
                    }, 30000);
                }
            }
        });
    }, 1000);
    $(document).on("click", ".tooltip_helper_close", function () {
        var _thOnScreen = $(this).parent(".tooltip_helper");
        _thOnScreen.addClass("hidden");

        var md5_id = MD5(_thOnScreen.text()).substring(0, 10);

        var as = $.cookie("th_" + md5_id, "2", {
            expires: tooltip_date,
            path: "/",
            domain: ".strument.com.ua",
        });
    });

    $(".sale_variant_info_handler").click(function () {
        var variantID = $(this).attr("data-variantid");
        $.get(
            homeurl + "ajax.php",
            { t: "sale_variant_info", variantID: variantID },
            function (data) {
                $.fancybox({ content: data, maxWidth: 1024 });
            }
        );
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1024) {
            $(".footer-flow-up-button").addClass("visible");
        } else {
            $(".footer-flow-up-button").removeClass("visible");
        }
    });
    $(".footer-flow-up-button").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    $(".check_price_button").click(function () {
        var _href = $(this).parent().closest("form").find("a.imgwrp").attr("href");
        if (typeof _href !== "undefined") {
            window.location = _href;
            return false;
        }
    });

    $(".review_media span").click(function () {
        imgurl = $(this)
            .css("background-image")
            .replace(/^url\(['"]?/, "")
            .replace(/['"]?\)$/, "");
        $.fancybox.open({
            src: imgurl,
            type: "image",
        });
    });

    if ($(".pi_models_page").length) {
        $(".pi_models_descriprion p img").each(function () {
            $(this).replaceWith(
                '<a class="pim_desc_imgwrp' +
                (!isMobileDevice ? " zoomImage" : "") +
                '" href="' +
                $(this).attr("src") +
                '" data-fancybox="product_pictures_models"><img src="' +
                $(this).attr("src") +
                '" data-zoom-image="' +
                $(this).attr("src") +
                '" /><i class="fa fa-search-plus" aria-hidden="true"></i></a>'
            );
        });

        if (!isMobileDevice) {
            $(".pim_desc_imgwrp.zoomImage img").elevateZoom({
                zoomType: "lens",
                scrollZoom: true,
            });
            $(".pim_desc_imgwrp.zoomImage").fancybox();
        } else {
            $(".pim_desc_imgwrp").fancybox();
        }

        if ($(".product_model_block").length) {
            $(".product_models_footer_btns").insertAfter(
                $(".product_model_block:last")
            );
        }
    }



    $(document).on("click", ".handler_popup_login_form", function () {
        var fancyWidth = $(".main_wrp").outerWidth();
        fancyWidth = fancyWidth > 0 ? fancyWidth * 0.5 : 600;

        if (isMobileDevice) {
            fancyWidth = $(".main_wrp").outerWidth();
        }

        var sourcepage = $(this).attr("data-sourcepage");
        sourcepage =
            typeof sourcepage !== typeof undefined && sourcepage !== false
                ? sourcepage
                : "";

        $.fancybox.open({
            src:
                "/" +
                (CURR_LANG_ISO != "ru" ? CURR_LANG_ISO + "/" : "") +
                "auth/?view=noframe&sourcepage=" +
                sourcepage +
                "&t=" +
                Math.round(+new Date() / 1000),
            type: "iframe",
            opts: {
                iframe: {
                    css: {
                        width: fancyWidth,
                    },
                },
            },
        });
        return false;
    });

    if (
        typeof category_messages_popup !== "undefined" &&
        category_messages_popup.length
    ) {
        let popups = JSON.parse(category_messages_popup);
        let nowTS = Math.floor(Date.now() / 1000);
        let popup_show_ts = $.cookie("popup_show_ts");
        let popup_show_limit_sec = 30 * 60;
        let popup_hide = false;

        if (popup_show_ts && popup_show_ts > 0) {
            if (nowTS - popup_show_ts < popup_show_limit_sec) {
                popup_hide = true;
            }
        }

        if (popup_hide == false) {
            popups.sort(function (a, b) {
                return Math.random() - 0.5;
            });
            $.each(popups, function (index, _popup) {
                let PopupCookieData = {
                    popupID: _popup.id,
                    show_ts: 0,
                    closed_ts: 0,
                    click_ts: 0,
                };
                if ($.cookie("popup_" + _popup.id)) {
                    try {
                        PopupCookieData = JSON.parse(atob($.cookie("popup_" + _popup.id)));
                    } catch (e) {}
                }
                let showPopup = true;
                if (
                    PopupCookieData.click_ts > 0 &&
                    nowTS - PopupCookieData.click_ts < 60 * 60 * 24 * 3
                ) {
                    showPopup = false;
                }
                if (
                    PopupCookieData.closed_ts > 0 &&
                    nowTS - PopupCookieData.closed_ts < 60 * 60 * 24 * 14
                ) {
                    showPopup = false;
                }

                if (showPopup) {
                    PopupCookieData.show_ts = nowTS;
                    $.cookie(
                        "popup_" + _popup.id,
                        btoa(JSON.stringify(PopupCookieData)),
                        { expires: 3, path: "/", domain: "." + rootDomain }
                    );

                    _popup.html =
                        '<span id="popup-id-' +
                        _popup.id +
                        '">' +
                        decodeURIComponent(escape(atob(_popup.html))) +
                        "</span>";
                    let popupShow = function (_popup) {
                        $.fancybox.open(_popup.html);
                        $.cookie("popup_show_ts", nowTS, {
                            expires: 3,
                            path: "/",
                            domain: "." + rootDomain,
                        });
                    };
                    if (_popup.delay > 0) {
                        setTimeout(
                            function (_popup, popupShow) {
                                popupShow(_popup);
                            },
                            _popup.delay * 1000,
                            _popup,
                            popupShow
                        );
                    } else {
                        popupShow(_popup);
                    }
                    return false;
                }
            });
        }
    }

    $(".question-spoiler-name").click(function () {
        let hasClass = $(this).parent().hasClass("open");

        $(".question-spoiler").removeClass("open");

        $(this).parent().toggleClass("open", !hasClass);
    });

    updateAjaxPageData();

    initLazyRecaptcha();
});


let bucketQnt = $(".floating_cart").html();


// $("[data-fancybox='gallery']").fancybox({
// type: "image",
//  animationEffect: "fade",
//  animationDuration: 500,
// //  arrows: true,
// });


// $(".imgwrp").fancybox({
//     type: "image",
//     buttons: ["zoom", "share", "slideShow", "fullScreen", "download", "thumbs"],
// });















// $('.pmtc_id').each(function(index, element) {
//     if (index % 2 === 1) {
//          $(this).css('background', 'red');
//     }
//         });



$('.pmtc_id').each(function(index, element) {
    
    if (index % 2 === 0) {
   var number = $(this).text();
      // Добавляем числа в выпадающий список
$('#numberSelector').append('<option value="' + number + '">' + number + '</option>');
    }

  });

  // При изменении выбора в выпадающем списке
  $('#numberSelector').on('change', function() {
    var selectedNumber = $(this).val();

    // Находим соответствующий элемент и получаем его позицию
    var targetElement = $('.pmtc_id:contains(' + selectedNumber + ')');
    var targetPosition = targetElement.offset().top;

    // Прокручиваем браузер к целевой позиции
    $('html, body').animate({ scrollTop: targetPosition }, 1000);

    // Выделяем элемент при переходе
    targetElement.css('background-color', 'red');
    setTimeout(function() {
      targetElement.css('background-color', 'black'); // Убираем выделение через 2 секунды
    }, 6000);
  });





/* При клике показываем или скрываем кнопки мессенджеров */

var menuBtn = $(".messenger-btn"),
    menu = $(".messenger-links");
menuBtn.on("click", function () {
    if (menu.hasClass("show")) {
        menu.removeClass("show");
    } else {
        menu.addClass("show");
    }
});

/*  Скрыть div при клике в любом месте сайта кроме самого div */

$(document).mouseup(function (e) {
    var div = $(".messenger");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".messenger-links").removeClass("show");
    }
});



if ($('.top-information').length) {

    let tip_wrp_top = $('.top-information').offset().top;

    $(window).scroll(function() {

        if($(window).scrollTop() > tip_wrp_top){

            $('.top-information').addClass('fixed');

        } else {

            $('.top-information').removeClass('fixed');

        }

    });

}
