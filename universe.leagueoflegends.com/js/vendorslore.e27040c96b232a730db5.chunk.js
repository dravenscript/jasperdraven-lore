(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        "../node_modules/@riotgames/quantum-core/hextech/XCollapse/index.js": function(e, t, n) {
            "use strict";

            function o(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(n("../node_modules/react/index.js")),
                i = o(n("../node_modules/prop-types/index.js")),
                a = o(n("../node_modules/react-transition-group/Transition.js")),
                s = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                u = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                l = Object.defineProperty,
                c = Object.getOwnPropertyNames,
                p = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor,
                f = Object.getPrototypeOf,
                h = f && f(Object);
            var m = function e(t, n, o) {
                    if ("string" != typeof n) {
                        if (h) {
                            var r = f(n);
                            r && r !== h && e(t, r, o)
                        }
                        var i = c(n);
                        p && (i = i.concat(p(n)));
                        for (var a = 0; a < i.length; ++a) {
                            var m = i[a];
                            if (!(s[m] || u[m] || o && o[m])) {
                                var y = d(n, m);
                                try {
                                    l(t, m, y)
                                } catch (t) {}
                            }
                        }
                        return t
                    }
                    return t
                },
                y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                v = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                _ = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                g = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                b = function(e, t) {
                    var n = {};
                    for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                    return n
                },
                E = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                };
            var x = function(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }((function(e) {
                ! function() {
                    var t = {}.hasOwnProperty;

                    function n() {
                        for (var e = [], o = 0; o < arguments.length; o++) {
                            var r = arguments[o];
                            if (r) {
                                var i = typeof r;
                                if ("string" === i || "number" === i) e.push(r);
                                else if (Array.isArray(r) && r.length) {
                                    var a = n.apply(null, r);
                                    a && e.push(a)
                                } else if ("object" === i)
                                    for (var s in r) t.call(r, s) && r[s] && e.push(s)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (n.default = n, e.exports = n) : window.classNames = n
                }()
            }));

            function w(e) {
                var t = e.delay,
                    n = e.timingFunction,
                    o = e.timeout,
                    r = void 0,
                    i = void 0;
                "object" === (void 0 === t ? "undefined" : y(t)) ? (r = t.enter, i = t.exit) : r = i = t;
                var a = void 0,
                    s = void 0;
                "object" === (void 0 === n ? "undefined" : y(n)) ? (a = n.enter, s = n.exit) : a = s = n;
                var u = void 0,
                    l = void 0;
                return "object" === (void 0 === o ? "undefined" : y(o)) ? (u = o.enter, l = o.exit) : u = l = o, {
                    enterDelay: r,
                    enterTimeout: u,
                    enterTimingFunction: a,
                    exitDelay: i,
                    exitTimeout: l,
                    exitTimingFunction: s
                }
            }
            var j = function(e) {
                function t(e) {
                    v(this, t);
                    var n = E(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.wrapper = null, n.handleEnter = function(e) {
                        var t = n.props,
                            o = t.collapsedHeight,
                            r = t.onEnter;
                        e.style.height = o + "px", r && r(e)
                    }, n.handleEntering = function(e) {
                        var t = n.props.onEntering,
                            o = n.state,
                            r = o.enterDelay,
                            i = o.enterTimeout,
                            a = o.enterTimingFunction,
                            s = n.wrapper ? n.wrapper.clientHeight : 0;
                        e.style.transition = "height " + i + "ms " + a + " " + r + "ms", e.style.height = s + "px", t && t(e)
                    }, n.handleEntered = function(e) {
                        var t = n.props.onEntered;
                        e.style.height = "auto", e.style.transition = null, t && t(e)
                    }, n.handleExit = function(e) {
                        var t = n.props.onExit,
                            o = n.wrapper ? n.wrapper.clientHeight : 0;
                        e.style.height = o + "px", t && t(e)
                    }, n.handleExiting = function(e) {
                        var t = n.props,
                            o = t.collapsedHeight,
                            r = t.onExiting,
                            i = n.state,
                            a = i.exitDelay,
                            s = i.exitTimeout,
                            u = i.exitTimingFunction;
                        n.wrapper && n.wrapper.clientHeight, e.style.transition = "height " + s + "ms " + u + " " + a + "ms", e.style.height = o + "px", r && r(e)
                    }, n.handleExited = function(e) {
                        var t = n.props,
                            o = t.collapsedHeight,
                            r = t.onExited;
                        o > 0 && (e.style.transition = null), r && r(e)
                    }, n.state = w(e), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), _(t, [{
                    key: "componentDidUpdate",
                    value: function() {
                        var e = w(this.props);
                        for (var t in e)
                            if (this.state[t] !== e[t]) return void this.setState(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            o = t.className,
                            i = t.collapsedHeight,
                            s = t.component,
                            u = t.style,
                            l = t.theme,
                            c = t.expanded,
                            p = (t.delay, t.timeout, t.timingFunction, t.unmountOnExit, b(t, ["children", "className", "collapsedHeight", "component", "style", "theme", "expanded", "delay", "timeout", "timingFunction", "unmountOnExit"])),
                            d = this.props.unmountOnExit,
                            f = this.state,
                            h = f.enterDelay,
                            m = f.enterTimeout,
                            y = f.exitDelay,
                            v = f.exitTimeout;
                        return void 0 === d && (d = 0 === i), r.createElement(a, g({
                            onEnter: this.handleEnter,
                            onEntered: this.handleEntered,
                            onEntering: this.handleEntering,
                            onExit: this.handleExit,
                            onExiting: this.handleExiting,
                            onExited: this.handleExited,
                            timeout: {
                                enter: m + h,
                                exit: v + y
                            },
                            in: c,
                            unmountOnExit: d
                        }, p), (function(t, a) {
                            var c = x(l.container, function(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n, e
                            }({}, l.entered, "entered" === t), o);
                            return r.createElement(s, g({
                                className: c,
                                style: {
                                    style: u,
                                    minHeight: i + "px"
                                }
                            }, a), r.createElement("div", {
                                className: l.wrapper,
                                ref: function(t) {
                                    e.wrapper = t
                                }
                            }, r.createElement("div", {
                                className: l.wrapperInner
                            }, n)))
                        }))
                    }
                }]), t
            }(r.Component);
            j.propTypes = {
                children: i.node,
                className: i.string,
                collapsedHeight: i.number,
                expanded: i.bool.isRequired,
                component: i.oneOfType([i.string, i.func]),
                delay: i.oneOfType([i.number, i.shape({
                    enter: i.number,
                    exit: i.number
                })]),
                style: i.object,
                onEnter: i.func,
                onEntered: i.func,
                onEntering: i.func,
                onExit: i.func,
                onExiting: i.func,
                onExited: i.func,
                theme: i.shape({
                    container: i.string.isRequired,
                    entered: i.string.isRequired,
                    wrapper: i.string.isRequired,
                    wrapperInner: i.string.isRequired
                }).isRequired,
                timeout: i.oneOfType([i.number, i.shape({
                    enter: i.number,
                    exit: i.number
                })]),
                timingFunction: i.oneOfType([i.string, i.shape({
                    enter: i.string,
                    exit: i.string
                })]),
                unmountOnExit: i.bool
            }, j.defaultProps = {
                collapsedHeight: 0,
                component: "div",
                delay: 0,
                timeout: 300,
                theme: {
                    container: "",
                    entered: "",
                    wrapper: "",
                    wrapperInner: ""
                },
                timingFunction: "ease-in-out"
            };
            ! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var o = document.head || document.getElementsByTagName("head")[0],
                        r = document.createElement("style");
                    r.type = "text/css", "top" === n && o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
                }
            }('.XCollapse_hextech_container_e52f{height:0;overflow:hidden}.XCollapse_hextech_entered_328a{height:auto}.XCollapse_hextech_wrapper_c6e6{display:"flex"}.XCollapse_hextech_wrapperInner_bd72{width:"100%"}');
            var N, O, D, P = (O = {
                container: "XCollapse_hextech_container_e52f",
                entered: "XCollapse_hextech_entered_328a",
                wrapper: "XCollapse_hextech_wrapper_c6e6",
                wrapperInner: "XCollapse_hextech_wrapperInner_bd72"
            }, (D = function(e) {
                var t = e.theme,
                    n = b(e, ["theme"]),
                    o = void 0 === t ? O : function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return t.reduce((function(e, t) {
                            for (var n in t) e[n] = "" + (e[n] && e[n] + " " || "") + t[n];
                            return e
                        }), {})
                    }(O, t);
                return r.createElement(N, g({
                    theme: o
                }, n))
            }).displayName = (N = j).displayName || N.name, D.WrappedComponent = N, m(D, N));
            t.default = P, t.XCollapse = P
        },
        "../node_modules/create-react-class/factory.js": function(e, t, n) {
            "use strict";
            var o = n("../node_modules/object-assign/index.js"),
                r = n("../node_modules/fbjs/lib/emptyObject.js"),
                i = n("../node_modules/fbjs/lib/invariant.js"),
                a = "mixins";
            e.exports = function(e, t, n) {
                var s = [],
                    u = {
                        mixins: "DEFINE_MANY",
                        statics: "DEFINE_MANY",
                        propTypes: "DEFINE_MANY",
                        contextTypes: "DEFINE_MANY",
                        childContextTypes: "DEFINE_MANY",
                        getDefaultProps: "DEFINE_MANY_MERGED",
                        getInitialState: "DEFINE_MANY_MERGED",
                        getChildContext: "DEFINE_MANY_MERGED",
                        render: "DEFINE_ONCE",
                        componentWillMount: "DEFINE_MANY",
                        componentDidMount: "DEFINE_MANY",
                        componentWillReceiveProps: "DEFINE_MANY",
                        shouldComponentUpdate: "DEFINE_ONCE",
                        componentWillUpdate: "DEFINE_MANY",
                        componentDidUpdate: "DEFINE_MANY",
                        componentWillUnmount: "DEFINE_MANY",
                        UNSAFE_componentWillMount: "DEFINE_MANY",
                        UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
                        UNSAFE_componentWillUpdate: "DEFINE_MANY",
                        updateComponent: "OVERRIDE_BASE"
                    },
                    l = {
                        getDerivedStateFromProps: "DEFINE_MANY_MERGED"
                    },
                    c = {
                        displayName: function(e, t) {
                            e.displayName = t
                        },
                        mixins: function(e, t) {
                            if (t)
                                for (var n = 0; n < t.length; n++) d(e, t[n])
                        },
                        childContextTypes: function(e, t) {
                            e.childContextTypes = o({}, e.childContextTypes, t)
                        },
                        contextTypes: function(e, t) {
                            e.contextTypes = o({}, e.contextTypes, t)
                        },
                        getDefaultProps: function(e, t) {
                            e.getDefaultProps ? e.getDefaultProps = h(e.getDefaultProps, t) : e.getDefaultProps = t
                        },
                        propTypes: function(e, t) {
                            e.propTypes = o({}, e.propTypes, t)
                        },
                        statics: function(e, t) {
                            ! function(e, t) {
                                if (!t) return;
                                for (var n in t) {
                                    var o = t[n];
                                    if (t.hasOwnProperty(n)) {
                                        if (i(!(n in c), 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n), n in e) {
                                            var r = l.hasOwnProperty(n) ? l[n] : null;
                                            return i("DEFINE_MANY_MERGED" === r, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), void(e[n] = h(e[n], o))
                                        }
                                        e[n] = o
                                    }
                                }
                            }(e, t)
                        },
                        autobind: function() {}
                    };

                function p(e, t) {
                    var n = u.hasOwnProperty(t) ? u[t] : null;
                    g.hasOwnProperty(t) && i("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e && i("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t)
                }

                function d(e, n) {
                    if (n) {
                        i("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), i(!t(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                        var o = e.prototype,
                            r = o.__reactAutoBindPairs;
                        for (var s in n.hasOwnProperty(a) && c.mixins(e, n.mixins), n)
                            if (n.hasOwnProperty(s) && s !== a) {
                                var l = n[s],
                                    d = o.hasOwnProperty(s);
                                if (p(d, s), c.hasOwnProperty(s)) c[s](e, l);
                                else {
                                    var f = u.hasOwnProperty(s);
                                    if ("function" == typeof l && !f && !d && !1 !== n.autobind) r.push(s, l), o[s] = l;
                                    else if (d) {
                                        var y = u[s];
                                        i(f && ("DEFINE_MANY_MERGED" === y || "DEFINE_MANY" === y), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", y, s), "DEFINE_MANY_MERGED" === y ? o[s] = h(o[s], l) : "DEFINE_MANY" === y && (o[s] = m(o[s], l))
                                    } else o[s] = l
                                }
                            }
                    } else;
                }

                function f(e, t) {
                    for (var n in i(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."), t) t.hasOwnProperty(n) && (i(void 0 === e[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), e[n] = t[n]);
                    return e
                }

                function h(e, t) {
                    return function() {
                        var n = e.apply(this, arguments),
                            o = t.apply(this, arguments);
                        if (null == n) return o;
                        if (null == o) return n;
                        var r = {};
                        return f(r, n), f(r, o), r
                    }
                }

                function m(e, t) {
                    return function() {
                        e.apply(this, arguments), t.apply(this, arguments)
                    }
                }

                function y(e, t) {
                    return t.bind(e)
                }
                var v = {
                        componentDidMount: function() {
                            this.__isMounted = !0
                        }
                    },
                    _ = {
                        componentWillUnmount: function() {
                            this.__isMounted = !1
                        }
                    },
                    g = {
                        replaceState: function(e, t) {
                            this.updater.enqueueReplaceState(this, e, t)
                        },
                        isMounted: function() {
                            return !!this.__isMounted
                        }
                    },
                    b = function() {};
                return o(b.prototype, e.prototype, g),
                    function(e) {
                        var t = function(e, o, a) {
                            this.__reactAutoBindPairs.length && function(e) {
                                for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
                                    var o = t[n],
                                        r = t[n + 1];
                                    e[o] = y(e, r)
                                }
                            }(this), this.props = e, this.context = o, this.refs = r, this.updater = a || n, this.state = null;
                            var s = this.getInitialState ? this.getInitialState() : null;
                            i("object" == typeof s && !Array.isArray(s), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), this.state = s
                        };
                        for (var o in t.prototype = new b, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], s.forEach(d.bind(null, t)), d(t, v), d(t, e), d(t, _), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), i(t.prototype.render, "createClass(...): Class specification must implement a `render` method."), u) t.prototype[o] || (t.prototype[o] = null);
                        return t
                    }
            }
        },
        "../node_modules/create-react-class/index.js": function(e, t, n) {
            "use strict";
            var o = n("../node_modules/react/index.js"),
                r = n("../node_modules/create-react-class/factory.js");
            if (void 0 === o) throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
            var i = (new o.Component).updater;
            e.exports = r(o.Component, o.isValidElement, i)
        },
        "../node_modules/fbjs/lib/emptyObject.js": function(e, t, n) {
            "use strict";
            e.exports = {}
        },
        "../node_modules/is-url-external/index.js": function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return window.location.hostname !== function(e) {
                    if (/^https?:\/\//.test(e)) {
                        var t = document.createElement("a");
                        return t.href = e, t.hostname
                    }
                    return window.location.hostname
                }(e)
            }
        },
        "../node_modules/react-textfit/lib/Textfit.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                i = f(n("../node_modules/react/index.js")),
                a = f(n("../node_modules/prop-types/index.js")),
                s = f(n("../node_modules/react-textfit/lib/utils/shallowEqual.js")),
                u = f(n("../node_modules/react-textfit/lib/utils/series.js")),
                l = f(n("../node_modules/react-textfit/lib/utils/whilst.js")),
                c = f(n("../node_modules/react-textfit/lib/utils/throttle.js")),
                p = f(n("../node_modules/react-textfit/lib/utils/uniqueId.js")),
                d = n("../node_modules/react-textfit/lib/utils/innerSize.js");

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e, t) {
                return e.scrollWidth - 1 <= t
            }

            function m(e, t) {
                return e.scrollHeight - 1 <= t
            }
            var y = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {
                        fontSize: null,
                        ready: !1
                    }, n.handleWindowResize = function() {
                        n.process()
                    }, n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), r(t, [{
                    key: "componentWillMount",
                    value: function() {
                        this.handleWindowResize = (0, c.default)(this.handleWindowResize, this.props.throttle)
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.state.ready && ((0, s.default)(this.props, e) || this.process())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, p.default)()
                    }
                }, {
                    key: "process",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.min,
                            o = t.max,
                            r = t.mode,
                            i = t.forceSingleModeWidth,
                            a = t.onReady,
                            s = this._parent,
                            c = this._child,
                            f = (0, d.innerWidth)(s),
                            y = (0, d.innerHeight)(s);
                        if (!(y <= 0 || isNaN(y) || f <= 0 || isNaN(f))) {
                            var v = (0, p.default)();
                            this.pid = v;
                            var _ = function() {
                                    return v !== e.pid
                                },
                                g = "multi" === r ? function() {
                                    return m(c, y)
                                } : function() {
                                    return h(c, f)
                                },
                                b = "multi" === r ? function() {
                                    return h(c, f)
                                } : function() {
                                    return m(c, y)
                                },
                                E = void 0,
                                x = n,
                                w = o;
                            this.setState({
                                ready: !1
                            }), (0, u.default)([function(t) {
                                return (0, l.default)((function() {
                                    return x <= w
                                }), (function(t) {
                                    if (_()) return t(!0);
                                    E = parseInt((x + w) / 2, 10), e.setState({
                                        fontSize: E
                                    }, (function() {
                                        return _() ? t(!0) : (g() ? x = E + 1 : w = E - 1, t())
                                    }))
                                }), t)
                            }, function(t) {
                                return "single" === r && i ? t() : b() ? t() : (x = n, w = E, (0, l.default)((function() {
                                    return x < w
                                }), (function(t) {
                                    if (_()) return t(!0);
                                    E = parseInt((x + w) / 2, 10), e.setState({
                                        fontSize: E
                                    }, (function() {
                                        return v !== e.pid ? t(!0) : (b() ? x = E + 1 : w = E - 1, t())
                                    }))
                                }), t))
                            }, function(t) {
                                if (E = Math.min(x, w), E = Math.max(E, n), E = Math.min(E, o), E = Math.max(E, 0), _()) return t(!0);
                                e.setState({
                                    fontSize: E
                                }, t)
                            }], (function(t) {
                                t || _() || e.setState({
                                    ready: !0
                                }, (function() {
                                    return a(E)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            r = t.text,
                            a = t.style,
                            s = (t.min, t.max, t.mode),
                            u = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
                            l = this.state,
                            c = l.fontSize,
                            p = l.ready,
                            d = o({}, a, {
                                fontSize: c
                            }),
                            f = {
                                display: p ? "block" : "inline-block"
                            };
                        return "single" === s && (f.whiteSpace = "nowrap"), i.default.createElement("div", o({
                            ref: function(t) {
                                return e._parent = t
                            },
                            style: d
                        }, u), i.default.createElement("div", {
                            ref: function(t) {
                                return e._child = t
                            },
                            style: f
                        }, r && "function" == typeof n ? p ? n(r) : r : n))
                    }
                }]), t
            }(i.default.Component);
            y.propTypes = {
                children: a.default.node,
                text: a.default.string,
                min: a.default.number,
                max: a.default.number,
                mode: a.default.oneOf(["single", "multi"]),
                forceSingleModeWidth: a.default.bool,
                throttle: a.default.number,
                onReady: a.default.func
            }, y.defaultProps = {
                min: 1,
                max: 100,
                mode: "multi",
                forceSingleModeWidth: !0,
                throttle: 50,
                autoResize: !0,
                onReady: function() {}
            }, t.default = y
        },
        "../node_modules/react-textfit/lib/index.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Textfit = void 0;
            var o, r = n("../node_modules/react-textfit/lib/Textfit.js"),
                i = (o = r) && o.__esModule ? o : {
                    default: o
                };
            t.Textfit = i.default, t.default = i.default
        },
        "../node_modules/react-textfit/lib/utils/innerSize.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.innerHeight = function(e) {
                var t = window.getComputedStyle(e, null);
                return e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10)
            }, t.innerWidth = function(e) {
                var t = window.getComputedStyle(e, null);
                return e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10)
            }
        },
        "../node_modules/react-textfit/lib/utils/series.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = [],
                    o = 0,
                    r = !0;

                function a(e) {
                    function o() {
                        t && t(e, n)
                    }
                    r ? i.default.nextTick(o) : o()
                }
                e.length > 0 ? e[0]((function t(r, i) {
                    n.push(i), ++o >= e.length || r ? a(r) : e[o](t)
                })) : a(null);
                r = !1
            };
            var o, r = n("../node_modules/process/browser.js"),
                i = (o = r) && o.__esModule ? o : {
                    default: o
                }
        },
        "../node_modules/react-textfit/lib/utils/shallowEqual.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if (e === t) return !0;
                var n = Object.keys(e),
                    o = Object.keys(t);
                if (n.length !== o.length) return !1;
                for (var r = Object.prototype.hasOwnProperty, i = 0; i < n.length; i++)
                    if (!r.call(t, n[i]) || e[n[i]] !== t[n[i]]) return !1;
                return !0
            }
        },
        "../node_modules/react-textfit/lib/utils/throttle.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = void 0,
                    o = void 0,
                    r = void 0,
                    i = void 0,
                    a = 0;

                function s() {
                    i = 0, a = +new Date, r = e.apply(n, o), n = null, o = null
                }
                return function() {
                    n = this, o = arguments;
                    var e = new Date - a;
                    return i || (e >= t ? s() : i = setTimeout(s, t - e)), r
                }
            }
        },
        "../node_modules/react-textfit/lib/utils/uniqueId.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return o++
            };
            var o = 0
        },
        "../node_modules/react-textfit/lib/utils/whilst.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
                e() ? t((function o(r) {
                    for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                    r ? n(r) : e.apply(this, a) ? t(o) : n(null)
                })) : n(null)
            };
            var o = function() {}
        }
    }
]);