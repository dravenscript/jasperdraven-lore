(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        "../node_modules/@danehansen/math/danehansen-math.min.js": function(e, t, n) {
            var r;
            r = function() {
                return function(e) {
                    var t = {};

                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var o = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                    }
                    return n.m = e, n.c = t, n.i = function(e) {
                        return e
                    }, n.d = function(e, t, r) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return n.d(t, "a", t), t
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, n.p = "", n(n.s = 0)
                }([function(e, t, n) {
                    "use strict";

                    function r(e, t) {
                        return e + (t - e) * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .05)
                    }

                    function o(e) {
                        if (!e) return 0;
                        var t = Math.abs(e),
                            n = Math.ceil(Math.log(t) / Math.LN10),
                            r = Math.log10(t);
                        return r === Math.floor(r) && n++, n
                    }

                    function i(e, t, n) {
                        return (n - e) / (t - e)
                    }

                    function u() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                            o = 0;
                        if (n) {
                            for (var i = Math.ceil(Math.min(e, t)), u = Math.floor(Math.max(e, t)), a = 0; a < r; a++) o += Math.random() * ((u + 1 - i) / r);
                            return Math.floor(i + o)
                        }
                        for (var c = 0; c < r; c++) o += Math.random() * ((t - e) / r);
                        return e + o
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.average = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var r = t[0],
                            o = "number" == typeof r ? t : r,
                            i = 0,
                            u = !0,
                            a = !1,
                            c = void 0;
                        try {
                            for (var l, s = o[Symbol.iterator](); !(u = (l = s.next()).done); u = !0) {
                                var f = l.value;
                                i += f
                            }
                        } catch (e) {
                            a = !0, c = e
                        } finally {
                            try {
                                !u && s.return && s.return()
                            } finally {
                                if (a) throw c
                            }
                        }
                        return i / o.length
                    }, t.ceil = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return t * Math.ceil(e / t)
                    }, t.circleIntersection = function(e, t, n, r) {
                        var o = n.x - e.x,
                            i = n.y - e.y,
                            u = Math.sqrt(i * i + o * o);
                        if (u > t + r || u < Math.abs(t - r)) return [];
                        var a = (t * t - r * r + u * u) / (2 * u),
                            c = e.x + o * a / u,
                            l = e.y + i * a / u,
                            s = Math.sqrt(t * t - a * a),
                            f = s / u * -i,
                            p = o * (s / u),
                            d = {
                                x: c + f,
                                y: l + p
                            },
                            y = {
                                x: c - f,
                                y: l - p
                            },
                            b = [d];
                        return d.x === y.x && d.y === y.y || b.push(y), b
                    }, t.ease = r, t.easeProp = function(e, t, n, o) {
                        var i = r(e[t], n, o);
                        return e[t] = i, i
                    }, t.euclid = function e(t, n) {
                        return 0 === n ? t : e(n, t % n)
                    }, t.floor = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return t * Math.floor(e / t)
                    }, t.intLength = o, t.luhn = function(e) {
                        for (var t = void 0, n = !0, r = 0; e > 1;) {
                            var o = e % 10;
                            e = (e - o) / 10, void 0 === t ? t = o : (n || (o *= 2) > 9 && (o -= 9), r += o), n = !n
                        }
                        return t === (10 - r % 10) % 10
                    }, t.modulo = function(e, t) {
                        if (!t) return 0;
                        var n = e % t;
                        return e >= 0 ? n : n < 0 ? (n + t) % t : 0
                    }, t.normalize = i, t.primes = function(e) {
                        for (var t = [], n = [], r = 2; r <= e; ++r)
                            if (!t[r]) {
                                n.push(r);
                                for (var o = 2 * r; o <= e; o += r) t[o] = !0
                            }
                        return n
                    }, t.random = u, t.randomItem = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return e[u(0, e.length - 1, !0, t)]
                    }, t.randomDirection = function() {
                        return Math.random() > .5 ? 1 : -1
                    }, t.randomBoolean = function() {
                        return Math.random() > .5
                    }, t.relativePercentage = function(e, t, n) {
                        return i(e, t, n)
                    }, t.round = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return t * Math.round(e / t)
                    }, t.shuffle = function(e, t) {
                        for (var n = t ? [].concat(function(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                    return n
                                }
                                return Array.from(e)
                            }(e)) : e, r = 0, o = e.length; r < o; r++) {
                            var i = Math.floor(Math.random() * (o - r)),
                                u = n[o - 1 - r];
                            n[o - 1 - r] = n[i], n[i] = u
                        }
                        return n
                    }, t.sortAscending = function(e, t) {
                        return e > t ? 1 : e < t ? -1 : 0
                    }, t.sortDescending = function(e, t) {
                        return e > t ? -1 : e < t ? 1 : 0
                    }, t.splitUint = function(e) {
                        for (var t = o(e), n = [], r = 0; r < t; r++) {
                            var i = e % 10;
                            n.unshift(i), e = (e - i) / 10
                        }
                        return n
                    }, t.toDegrees = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return 180 * (-e + (t ? Math.PI / 2 : 0)) / Math.PI
                    }, t.toRadians = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return (-e - (t ? 90 : 0)) * Math.PI / 180
                    }, t.total = function(e) {
                        for (var t = 0, n = 0, r = e.length; n < r; n++) {
                            var o = e[n];
                            "number" != typeof o || isNaN(o) ? o && t++ : t += o
                        }
                        return t
                    }
                }])
            }, e.exports = r()
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/Fade/Fade.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("../node_modules/react-transition-group/index.js"),
                o = u(n("../node_modules/prop-types/index.js")),
                i = u(n("../node_modules/react/index.js"));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = function(e) {
                function t() {
                    var e, n, r, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, u = new Array(i), c = 0; c < i; c++) u[c] = arguments[c];
                    return r = this, o = (e = p(t)).call.apply(e, [this].concat(u)), n = !o || "object" !== a(o) && "function" != typeof o ? d(r) : o, b(d(n), "state", {}), b(d(n), "_onEnter", (function(e) {
                        var t = n.props.onEnter;
                        n.setState({
                            style: {
                                opacity: 0
                            }
                        }, (function() {
                            e.offsetHeight, t && t(e)
                        }))
                    })), b(d(n), "_onEntering", (function(e) {
                        var t = n.props.onEntering,
                            r = n.state,
                            o = r.enterEase,
                            i = r.enterDelay,
                            u = r.enterDuration;
                        n.setState({
                            style: {
                                transition: "opacity ".concat(u, "ms ").concat(o, " ").concat(i, "ms")
                            }
                        }, (function() {
                            t && t(e)
                        }))
                    })), b(d(n), "_onEntered", (function(e) {
                        var t = n.props.onEntered;
                        n.setState({
                            style: void 0
                        }, (function() {
                            t && t(e)
                        }))
                    })), b(d(n), "_onExit", (function(e) {
                        var t = n.props.onExit,
                            r = n.state,
                            o = r.exitDelay,
                            i = r.exitDuration,
                            u = r.exitEase;
                        n.setState({
                            style: {
                                transition: "opacity ".concat(i, "ms ").concat(u, " ").concat(o, "ms")
                            }
                        }, (function() {
                            t && t(e)
                        }))
                    })), b(d(n), "_onExiting", (function(e) {
                        var t = n.props.onExiting,
                            r = n.state,
                            o = r.exitDuration,
                            i = r.exitEase,
                            u = r.exitDelay;
                        n.setState({
                            style: {
                                transition: "opacity ".concat(o, "ms ").concat(i, " ").concat(u, "ms"),
                                opacity: 0
                            }
                        }, (function() {
                            t && t(e)
                        }))
                    })), b(d(n), "_onExited", (function(e) {
                        var t = n.props,
                            r = t.onExited;
                        t.unmountOnExit ? r && r(e) : n.setState({
                            style: void 0
                        }, (function() {
                            r && r(e)
                        }))
                    })), n
                }
                var n, o, u;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(t, e), n = t, u = [{
                    key: "getDerivedStateFromProps",
                    value: function(e) {
                        var t = e.delay,
                            n = e.duration,
                            r = e.ease;
                        return {
                            enterDelay: t.enter || t,
                            enterDuration: n.enter || n,
                            enterEase: r.enter || r,
                            exitDelay: t.exit || t,
                            exitDuration: n.exit || n,
                            exitEase: r.exit || r
                        }
                    }
                }], (o = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.children,
                            n = (e.duration, e.delay, e.ease, e.onEnter, e.onEntered, e.onEntering, e.onExit, e.onExiting, e.onExited, s(e, ["children", "duration", "delay", "ease", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "onExited"])),
                            o = this.state,
                            u = o.enterDelay,
                            a = o.enterDuration,
                            f = o.exitDelay,
                            p = o.exitDuration,
                            d = o.style,
                            y = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(n, !0).forEach((function(t) {
                                        b(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, t.props.style, {}, d),
                            h = i.default.cloneElement(t, {
                                style: y
                            });
                        return i.default.createElement(r.Transition, c({
                            onEnter: this._onEnter,
                            onEntered: this._onEntered,
                            onEntering: this._onEntering,
                            onExit: this._onExit,
                            onExited: this._onExited,
                            onExiting: this._onExiting,
                            timeout: {
                                enter: u + a,
                                exit: f + p
                            }
                        }, n), h)
                    }
                }]) && f(n.prototype, o), u && f(n, u), t
            }(i.default.Component);
            t.default = h, b(h, "propTypes", {
                children: o.default.node.isRequired,
                delay: o.default.oneOfType([o.default.number, o.default.shape({
                    enter: o.default.number.isRequired,
                    exit: o.default.number.isRequired
                })]).isRequired,
                duration: o.default.oneOfType([o.default.number, o.default.shape({
                    enter: o.default.number.isRequired,
                    exit: o.default.number.isRequired
                })]).isRequired,
                ease: o.default.oneOfType([o.default.string, o.default.shape({
                    enter: o.default.string.isRequired,
                    exit: o.default.string.isRequired
                })]).isRequired,
                onEnter: o.default.func,
                onEntered: o.default.func,
                onEntering: o.default.func,
                onExit: o.default.func,
                onExited: o.default.func,
                onExiting: o.default.func,
                unmountOnExit: o.default.bool.isRequired
            }), b(h, "defaultProps", {
                delay: 0,
                duration: 200,
                ease: "linear",
                unmountOnExit: !0
            })
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/InputListener/InputListener.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("../node_modules/prop-types/index.js")),
                o = i(n("../node_modules/react/index.js"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = "mouse",
                b = "touch",
                h = function(e) {
                    function t() {
                        var e, n, r, o;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c];
                        return r = this, o = (e = s(t)).call.apply(e, [this].concat(a)), n = !o || "object" !== u(o) && "function" != typeof o ? f(r) : o, d(f(n), "state", {
                            currentInputDevice: t.currentInputDevice,
                            hasMouse: t.hasMouse,
                            hasTouch: t.HAS_TOUCH
                        }), d(f(n), "_onMouseMove", (function(e) {
                            var r = n.props.onMouseMove;
                            t.hasMouse = !0, t.currentInputDevice = y, n.setState({
                                hasMouse: !0,
                                currentInputDevice: y
                            }), r(e)
                        })), d(f(n), "_onTouchStart", (function(e) {
                            var t = n.props.onTouchStart;
                            n.setState({
                                currentInputDevice: b
                            }), t(e)
                        })), n
                    }
                    var n, r, i;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && p(e, t)
                    }(t, e), n = t, (r = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                n = e.component,
                                r = e.onTouchStart,
                                i = e.onMouseMove,
                                u = c(e, ["children", "component", "onTouchStart", "onMouseMove"]),
                                l = this.state,
                                s = l.hasMouse,
                                f = l.hasTouch,
                                p = l.currentInputDevice;
                            if (f) switch (p) {
                                case b:
                                    i = this._onMouseMove;
                                    break;
                                case y:
                                    r = this._onTouchStart
                            }
                            return o.default.createElement(n, a({}, u, {
                                onMouseMove: i,
                                onTouchStart: r
                            }), t({
                                hasMouse: s,
                                hasTouch: f,
                                currentInputDevice: p
                            }))
                        }
                    }]) && l(n.prototype, r), i && l(n, i), t
                }(o.default.Component);
            t.default = h, d(h, "propTypes", {
                children: r.default.func,
                component: r.default.oneOfType([r.default.string, r.default.func]),
                onMouseMove: r.default.func,
                onTouchStart: r.default.func
            }), d(h, "defaultProps", {
                children: function() {},
                component: "div",
                onMouseMove: function() {},
                onTouchStart: function() {}
            }), d(h, "HAS_TOUCH", "ontouchstart" in window), d(h, "hasMouse", !h.HAS_TOUCH), d(h, "currentInputDevice", h.HAS_TOUCH ? b : y), d(h, "INPUTS", {
                MOUSE: y,
                TOUCH: b
            })
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/Loading/Loading.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("../node_modules/@danehansen/math/danehansen-math.min.js"),
                o = a(n("../node_modules/prop-types/index.js")),
                i = a(n("../node_modules/react/index.js")),
                u = a(n("../node_modules/@riotgames/ipc-fe-shared/components/SVG/SVG.js"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = 100 * Math.PI,
                b = {
                    height: "100%",
                    minHeight: "100px",
                    position: "relative"
                },
                h = {
                    height: "100%",
                    left: "50%",
                    maxHeight: "200px",
                    position: "absolute",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%"
                },
                m = {
                    transform: "rotate(270deg)",
                    transformOrigin: "50% 50%",
                    transition: "stroke-dashoffset 0.5s"
                },
                v = function(e) {
                    function t() {
                        var e, n, o, i;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var u = arguments.length, a = new Array(u), l = 0; l < u; l++) a[l] = arguments[l];
                        return o = this, i = (e = s(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== c(i) && "function" != typeof i ? f(o) : i, d(f(n), "state", {
                            progress: 0
                        }), d(f(n), "_simulateProgress", (function() {
                            var e = n.state.progress;
                            n.setState({
                                progress: e + (.9 - e) * (0, r.random)(.25)
                            }), n._setTimeout()
                        })), n
                    }
                    var n, o, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && p(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this._timeout = setTimeout((function() {
                                e.setState({
                                    progress: (0, r.random)(.4, .6)
                                }), e._setTimeout()
                            }), 100)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this._timeout)
                        }
                    }, {
                        key: "_setTimeout",
                        value: function() {
                            this._timeout = setTimeout(this._simulateProgress, (0, r.random)(500, 1e3))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.className,
                                n = e.color,
                                r = e.placeholderColor,
                                o = this.state.progress;
                            return i.default.createElement("div", {
                                className: t,
                                style: b
                            }, i.default.createElement(u.default, {
                                fill: "none",
                                height: 200,
                                style: h,
                                width: 200
                            }, i.default.createElement("circle", {
                                cx: 100,
                                cy: 100,
                                r: 50,
                                stroke: r,
                                strokeWidth: 50
                            }), i.default.createElement("circle", {
                                cx: 100,
                                cy: 100,
                                r: 50,
                                stroke: n,
                                strokeDasharray: y,
                                strokeDashoffset: y + o * -y,
                                strokeWidth: 50,
                                style: m
                            })))
                        }
                    }]) && l(n.prototype, o), a && l(n, a), t
                }(i.default.Component);
            t.default = v, d(v, "propTypes", {
                className: o.default.string,
                color: o.default.string,
                placeholderColor: o.default.string
            }), d(v, "defaultProps", {
                color: "black",
                placeholderColor: "gray"
            })
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/Peek/Peek.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("../node_modules/prop-types/index.js")),
                o = i(n("../node_modules/react/index.js"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(n, !0).forEach((function(t) {
                        b(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = {
                    overflow: "hidden",
                    paddingBottom: 0,
                    paddingTop: 0
                },
                m = {
                    overflow: "auto",
                    position: "relative"
                };

            function v(e) {
                return "number" == typeof e ? "".concat(e, "px") : e
            }
            var g = function(e) {
                function t(e) {
                    var n, r, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), r = this, o = p(t).call(this, e), n = !o || "object" !== u(o) && "function" != typeof o ? d(r) : o, b(d(n), "_setStateAsync", (function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return new Promise((function(r) {
                            t ? n._timeout = setTimeout((function() {
                                n._timeout = null, n.setState(e, r)
                            }), t) : n.setState(e, r)
                        }))
                    }));
                    var i = e.visibleHeight;
                    return n.state = {
                        rootStyle: "auto" === i ? null : {
                            height: v(i)
                        }
                    }, n
                }
                var n, r, i;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(t, e), n = t, (r = [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            r = t.className,
                            i = t.component,
                            u = (t.duration, t.ease, t.visibleHeight, s(t, ["children", "className", "component", "duration", "ease", "visibleHeight"])),
                            c = this.state.rootStyle;
                        return o.default.createElement(i, a({
                            className: r,
                            style: l({}, h, {}, c)
                        }, u), o.default.createElement("div", {
                            ref: function(t) {
                                e._wrapperNode = t
                            },
                            style: m
                        }, n))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this,
                            n = e.visibleHeight,
                            r = this.props,
                            o = r.visibleHeight,
                            i = r.duration;
                        if (n !== o)
                            if (this._wrapperNode) {
                                this._killTimeout();
                                var u = this._wrapperNode.offsetHeight,
                                    a = v("auto" === n ? u : n),
                                    c = v("auto" === o ? u : o);
                                this._setStateAsync({
                                    rootStyle: {
                                        height: a
                                    }
                                }).then((function() {
                                    return t._wrapperNode.offsetHeight, t._setStateAsync({
                                        rootStyle: {
                                            height: a,
                                            transition: "height ".concat(i, "ms")
                                        }
                                    })
                                })).then((function() {
                                    return t._setStateAsync({
                                        rootStyle: {
                                            height: c,
                                            transition: "height ".concat(i, "ms")
                                        }
                                    })
                                })).then((function() {
                                    return t._setStateAsync({
                                        rootStyle: "auto" === o ? null : {
                                            height: c
                                        }
                                    }, i)
                                }))
                            } else this.setState({
                                rootStyle: "auto" === o ? null : {
                                    height: v(o)
                                }
                            })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._killTimeout()
                    }
                }, {
                    key: "_killTimeout",
                    value: function() {
                        this._timeout && (clearTimeout(this._timeout), this._timeout = null)
                    }
                }]) && f(n.prototype, r), i && f(n, i), t
            }(o.default.Component);
            t.default = g, b(g, "propTypes", {
                children: r.default.node,
                className: r.default.string,
                component: r.default.oneOfType([r.default.string, r.default.func]),
                duration: r.default.number,
                ease: r.default.string,
                visibleHeight: r.default.oneOfType([r.default.string, r.default.number])
            }), b(g, "defaultProps", {
                component: "div",
                duration: 300,
                ease: "ease-in-out",
                visibleHeight: "auto"
            })
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/ResizeListener/ResizeListener.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(n("../node_modules/prop-types/index.js"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function a(e) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l(e, t) {
                return (l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var f = function(e) {
                function t(e) {
                    var n, r, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), r = this, o = a(t).call(this, e), n = !o || "object" !== i(o) && "function" != typeof o ? c(r) : o, s(c(n), "_onResize", (function() {
                        var e = n.props.win;
                        n.setState({
                            innerHeight: e.innerHeight,
                            innerWidth: e.innerWidth
                        })
                    }));
                    var u = e.win;
                    return n.state = {
                        innerHeight: u.innerHeight,
                        innerWidth: u.innerWidth
                    }, u.addEventListener("resize", n._onResize), n
                }
                var n, r, o;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && l(e, t)
                }(t, e), n = t, (r = [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.win.removeEventListener("resize", this._onResize)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.innerHeight,
                            n = e.innerWidth;
                        return (0, this.props.children)(n, t)
                    }
                }]) && u(n.prototype, r), o && u(n, o), t
            }(o(n("../node_modules/react/index.js")).default.Component);
            t.default = f, s(f, "propTypes", {
                children: r.default.func.isRequired,
                win: r.default.object
            }), s(f, "defaultProps", {
                win: "undefined" != typeof window ? window : {
                    addEventListener: function() {},
                    innerHeight: 0,
                    innerWidth: 0,
                    removeEventListener: function() {}
                }
            })
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/SVG/SVG.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("../node_modules/prop-types/index.js")),
                o = i(n("../node_modules/react/index.js"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t) {
                return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var d, y, b, h = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), s(this, f(t).apply(this, arguments))
                }
                var n, r, i;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(t, e), n = t, (r = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.height,
                            n = e.width,
                            r = c(e, ["height", "width"]);
                        return o.default.createElement("svg", a({
                            height: "".concat(t, "px"),
                            viewBox: "0 0 ".concat(n, " ").concat(t),
                            width: "".concat(n, "px"),
                            x: "0px",
                            y: "0px"
                        }, r))
                    }
                }]) && l(n.prototype, r), i && l(n, i), t
            }(o.default.Component);
            t.default = h, d = h, y = "propTypes", b = {
                height: r.default.number.isRequired,
                width: r.default.number.isRequired
            }, y in d ? Object.defineProperty(d, y, {
                value: b,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : d[y] = b
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/Scoot/Scoot.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("../node_modules/react-transition-group/index.js"),
                o = u(n("../node_modules/prop-types/index.js")),
                i = u(n("../node_modules/react/index.js"));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = {
                BOTTOM: "bottom",
                LEFT: "left",
                RIGHT: "right",
                TOP: "top"
            };

            function m(e) {
                switch (e) {
                    case h.TOP:
                        return "translateY(-100%)";
                    case h.BOTTOM:
                        return "translateY(100%)";
                    case h.LEFT:
                        return "translateX(-100%)";
                    case h.RIGHT:
                        return "translateX(100%)"
                }
            }
            var v = function(e) {
                function t() {
                    var e, n, r, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, u = new Array(i), c = 0; c < i; c++) u[c] = arguments[c];
                    return r = this, o = (e = p(t)).call.apply(e, [this].concat(u)), n = !o || "object" !== a(o) && "function" != typeof o ? d(r) : o, b(d(n), "state", {}), b(d(n), "_onEnter", (function(e) {
                        var t = n.props.onEnter,
                            r = n.state.enterDirection;
                        n.setState({
                            style: {
                                transform: m(r)
                            }
                        }, (function() {
                            e.offsetHeight, t && t(e)
                        }))
                    })), b(d(n), "_onEntering", (function(e) {
                        var t = n.props.onEntering,
                            r = n.state,
                            o = r.enterEase,
                            i = r.enterDelay,
                            u = r.enterDuration;
                        n.setState({
                            style: {
                                transition: "transform ".concat(u, "ms ").concat(o, " ").concat(i, "ms")
                            }
                        }, (function() {
                            t && t(e)
                        }))
                    })), b(d(n), "_onEntered", (function(e) {
                        var t = n.props.onEntered;
                        n.setState({
                            style: void 0
                        }, (function() {
                            t && t(e)
                        }))
                    })), b(d(n), "_onExit", (function(e) {
                        var t = n.props.onExit,
                            r = n.state,
                            o = r.exitDelay,
                            i = r.exitDuration,
                            u = r.exitEase;
                        n.setState({
                            style: {
                                transition: "transform ".concat(i, "ms ").concat(u, " ").concat(o, "ms")
                            }
                        }, (function() {
                            t && t(e)
                        }))
                    })), b(d(n), "_onExiting", (function(e) {
                        var t = n.props.onExiting,
                            r = n.state,
                            o = r.exitDirection,
                            i = r.exitDuration,
                            u = r.exitEase,
                            a = r.exitDelay;
                        n.setState({
                            style: {
                                transform: m(o),
                                transition: "transform ".concat(i, "ms ").concat(u, " ").concat(a, "ms")
                            }
                        }, (function() {
                            t && t(e)
                        }))
                    })), b(d(n), "_onExited", (function(e) {
                        var t = n.props,
                            r = t.onExited;
                        t.unmountOnExit ? r && r(e) : n.setState({
                            style: void 0
                        }, (function() {
                            r && r(e)
                        }))
                    })), n
                }
                var n, o, u;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(t, e), n = t, u = [{
                    key: "getDerivedStateFromProps",
                    value: function(e) {
                        var t = e.delay,
                            n = e.direction,
                            r = e.duration,
                            o = e.ease;
                        return {
                            enterDelay: t.enter || t,
                            enterDirection: n.enter || n,
                            enterDuration: r.enter || r,
                            enterEase: o.enter || o,
                            exitDelay: t.exit || t,
                            exitDirection: n.exit || n,
                            exitDuration: r.exit || r,
                            exitEase: o.exit || o
                        }
                    }
                }], (o = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.children,
                            n = (e.direction, e.duration, e.delay, e.ease, e.onEnter, e.onEntered, e.onEntering, e.onExit, e.onExiting, e.onExited, s(e, ["children", "direction", "duration", "delay", "ease", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "onExited"])),
                            o = this.state,
                            u = o.enterDelay,
                            a = o.enterDuration,
                            f = o.exitDelay,
                            p = o.exitDuration,
                            d = o.style,
                            y = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(n, !0).forEach((function(t) {
                                        b(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, t.props.style, {}, d),
                            h = i.default.cloneElement(t, {
                                style: y
                            });
                        return i.default.createElement(r.Transition, c({
                            onEnter: this._onEnter,
                            onEntered: this._onEntered,
                            onEntering: this._onEntering,
                            onExit: this._onExit,
                            onExited: this._onExited,
                            onExiting: this._onExiting,
                            timeout: {
                                enter: u + a,
                                exit: f + p
                            }
                        }, n), h)
                    }
                }]) && f(n.prototype, o), u && f(n, u), t
            }(i.default.Component);
            t.default = v, b(v, "DIRECTIONS", h), b(v, "propTypes", {
                children: o.default.node.isRequired,
                delay: o.default.oneOfType([o.default.number, o.default.shape({
                    enter: o.default.number.isRequired,
                    exit: o.default.number.isRequired
                })]).isRequired,
                direction: o.default.oneOf(Object.values(h)).isRequired,
                duration: o.default.oneOfType([o.default.number, o.default.shape({
                    enter: o.default.number.isRequired,
                    exit: o.default.number.isRequired
                })]).isRequired,
                ease: o.default.oneOfType([o.default.string, o.default.shape({
                    enter: o.default.string.isRequired,
                    exit: o.default.string.isRequired
                })]).isRequired,
                onEnter: o.default.func,
                onEntered: o.default.func,
                onEntering: o.default.func,
                onExit: o.default.func,
                onExited: o.default.func,
                onExiting: o.default.func,
                unmountOnExit: o.default.bool.isRequired
            }), b(v, "defaultProps", {
                delay: 0,
                duration: 400,
                ease: {
                    enter: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                    exit: "cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                },
                unmountOnExit: !0
            })
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/ScrollListener/ScrollListener.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(n("../node_modules/prop-types/index.js"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function a(e) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l(e, t) {
                return (l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var f = function(e) {
                function t(e) {
                    var n, r, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), r = this, o = a(t).call(this, e), n = !o || "object" !== i(o) && "function" != typeof o ? c(r) : o, s(c(n), "_onScroll", (function() {
                        var e = n.props.win;
                        n.setState({
                            scrollX: e.pageXOffset,
                            scrollY: e.pageYOffset
                        })
                    }));
                    var u = e.win;
                    return n.state = {
                        scrollX: u.pageXOffset,
                        scrollY: u.pageYOffset
                    }, n
                }
                var n, r, o;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && l(e, t)
                }(t, e), n = t, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.win.addEventListener("scroll", this._onScroll)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.win.removeEventListener("scroll", this._onScroll)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.scrollX,
                            n = e.scrollY;
                        return (0, this.props.children)(t, n)
                    }
                }]) && u(n.prototype, r), o && u(n, o), t
            }(o(n("../node_modules/react/index.js")).default.Component);
            t.default = f, s(f, "propTypes", {
                children: r.default.func.isRequired,
                win: r.default.object
            }), s(f, "defaultProps", {
                win: "undefined" != typeof window ? window : {
                    addEventListener: function() {},
                    pageXOffset: 0,
                    pageYOffset: 0,
                    removeEventListener: function() {}
                }
            })
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/ScrollParallaxBackground/ScrollParallaxBackground.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = y;
            var r = i(n("../node_modules/prop-types/index.js")),
                o = i(n("../node_modules/react/index.js"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(n, !0).forEach((function(t) {
                        l(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var f = {
                    position: "relative"
                },
                p = {
                    height: "100%",
                    margin: 0,
                    overflow: "hidden",
                    position: "absolute",
                    width: "100%"
                },
                d = {
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "absolute",
                    top: "50%",
                    width: "100%"
                };

            function y(e) {
                var t, n = e.backgroundClassName,
                    r = e.children,
                    i = e.component,
                    a = e.height,
                    l = e.scrollProgress,
                    y = e.speed,
                    b = e.src,
                    h = e.style,
                    m = e.viewportHeight,
                    v = s(e, ["backgroundClassName", "children", "component", "height", "scrollProgress", "speed", "src", "style", "viewportHeight"]),
                    g = Math.abs(y);
                if (t = .5 * (1 - 1 / (1 + g)) * 100, y < 0) t *= -1;
                else {
                    var O = a + m,
                        _ = m - a;
                    l *= Math.min(O / _, 2 / y + 1)
                }
                var j = c({}, d, {
                    height: "".concat(100 * (g + 1), "%"),
                    imageRendering: "pixelated",
                    transform: "translateY(".concat(t * l - 50, "%)")
                });
                return b && (j.backgroundImage = "url(".concat(b, ")")), o.default.createElement(i, u({
                    style: c({}, h, {}, f)
                }, v), o.default.createElement("figure", {
                    style: p
                }, o.default.createElement("div", {
                    className: n,
                    style: j
                })), r)
            }
            y.propTypes = {
                backgroundClassName: r.default.string,
                children: r.default.node,
                component: r.default.oneOfType([r.default.string, r.default.func]),
                height: r.default.number.isRequired,
                scrollProgress: r.default.number.isRequired,
                speed: r.default.number,
                src: r.default.string,
                style: r.default.object,
                viewportHeight: r.default.number.isRequired
            }, y.defaultProps = {
                component: "div",
                speed: .2
            }
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/ScrollProgress/ScrollProgress.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("../node_modules/prop-types/index.js")),
                o = i(n("../node_modules/react/index.js"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = function(e) {
                function t() {
                    var e, n, r, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c];
                    return r = this, o = (e = s(t)).call.apply(e, [this].concat(a)), n = !o || "object" !== u(o) && "function" != typeof o ? f(r) : o, d(f(n), "state", {
                        progress: 0
                    }), d(f(n), "_setRootNode", (function(e) {
                        e !== n.state.nextRootNode && n.setState({
                            nextRootNode: e
                        })
                    })), n
                }
                var n, r, i;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(t, e), n = t, i = [{
                    key: "getDocHeight",
                    value: function() {
                        return "undefined" != typeof document ? document.documentElement.offsetHeight : 0
                    }
                }, {
                    key: "getDerivedStateFromProps",
                    value: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = n.nextRootNode;
                        if (r) {
                            var o = {},
                                i = n.nextRect,
                                u = n.nextStart,
                                a = n.nextEnd,
                                c = !1;
                            r !== n.prevRootNode && (o.prevRootNode = r, u = null, a = null, c = !0);
                            var l = e.scrollY,
                                s = e.viewportHeight,
                                f = e.viewportWidth;
                            if (s === n.viewportHeight && f === n.viewportWidth || (c = !0, i = null, u = null, a = null, o.viewportWidth = f, o.viewportHeight = s), l !== n.scrollY && (c = !0, o.scrollY = l), i || (c = !0, u = null, a = null, i = r.getBoundingClientRect(), o.nextRect = i), !u) {
                                var p = e.docHeight || t.getDocHeight(),
                                    d = Math.round(i.top + l - s);
                                u = d;
                                var y = Math.round(u + s + i.height),
                                    b = .5 * ((a = y) + u);
                                if (b < 0 && (b = 0, u = -a), b > p - s) {
                                    var h = (b = p - s) - u;
                                    a = b + h
                                }
                                o.nextStart = u, o.nextEnd = a, o.startingScrollY = d, o.endingScrollY = y
                            }
                            if (c) {
                                var m = a - u,
                                    v = Math.min(1, Math.max(-1, (l - u) / m * 2 - 1));
                                v !== n.progress && (o.progress = v)
                            }
                            if (Object.keys(o).length) return o
                        }
                        return null
                    }
                }], (r = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.component,
                            n = e.children,
                            r = e.scrollY,
                            i = (e.viewportWidth, e.viewportHeight),
                            u = c(e, ["component", "children", "scrollY", "viewportWidth", "viewportHeight"]),
                            l = this.state,
                            s = l.nextRect,
                            f = l.progress,
                            p = l.startingScrollY,
                            d = l.endingScrollY,
                            y = Math.round(s ? s.height : 0),
                            b = d - r,
                            h = r - p,
                            m = h > i ? 0 : Math.min(h, y),
                            v = h > i ? h - i : 0,
                            g = b > i ? b - i : 0,
                            O = {
                                height: y,
                                invisibleBottomPixels: g,
                                invisibleTopPixels: v,
                                progress: f,
                                visibleBottomPixels: b > i ? 0 : Math.min(b, y),
                                visiblePixels: y - v - g,
                                visibleTopPixels: m
                            };
                        return o.default.createElement(t, a({}, u, {
                            ref: this._setRootNode
                        }), n(O))
                    }
                }]) && l(n.prototype, r), i && l(n, i), t
            }(o.default.Component);
            t.default = y, d(y, "propTypes", {
                children: r.default.func.isRequired,
                component: r.default.oneOfType([r.default.string, r.default.func]),
                docHeight: r.default.number,
                scrollY: r.default.number.isRequired,
                viewportHeight: r.default.number.isRequired,
                viewportWidth: r.default.number.isRequired
            }), d(y, "defaultProps", {
                component: "div"
            })
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/Stomp/Stomp.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("../node_modules/@riotgames/ipc-fe-shared/components/Peek/Peek.js")),
                o = a(n("../node_modules/prop-types/index.js")),
                i = a(n("../node_modules/react/index.js")),
                u = a(n("../node_modules/react-transition-group/Transition.js"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), p(this, d(t).apply(this, arguments))
                }
                var n, o, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(t, e), n = t, (o = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.children,
                            n = e.className,
                            o = e.component,
                            a = e.delay,
                            c = e.duration,
                            f = e.ease,
                            p = s(e, ["children", "className", "component", "delay", "duration", "ease"]);
                        return i.default.createElement(u.default, l({
                            timeout: {
                                enter: (c.enter || c) + (a.enter || a),
                                exit: (c.exit || c) + (a.exit || a)
                            }
                        }, p), (function(e) {
                            var u;
                            switch (e) {
                                case "exiting":
                                case "exited":
                                    u = 0
                            }
                            return i.default.createElement(r.default, {
                                className: n,
                                component: o,
                                ease: f,
                                visibleHeight: u
                            }, t)
                        }))
                    }
                }]) && f(n.prototype, o), a && f(n, a), t
            }(i.default.Component);
            t.default = h, b(h, "propTypes", {
                children: o.default.node,
                className: o.default.string,
                component: o.default.oneOfType([o.default.string, o.default.func]),
                delay: o.default.oneOfType([o.default.number, o.default.shape({
                    enter: o.default.number,
                    exit: o.default.number
                })]),
                duration: o.default.oneOfType([o.default.number, o.default.shape({
                    enter: o.default.number,
                    exit: o.default.number
                })]),
                ease: o.default.oneOfType([o.default.string, o.default.shape({
                    enter: o.default.string,
                    exit: o.default.string
                })])
            }), b(h, "defaultProps", {
                component: "div",
                delay: 0,
                duration: 300,
                ease: "ease-in-out"
            })
        },
        "../node_modules/@riotgames/ipc-fe-shared/components/index.js": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Fade", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "InputListener", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "Loading", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "Peek", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "ResizeListener", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "SVG", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "Scoot", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "ScrollListener", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "ScrollParallaxBackground", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "ScrollProgress", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "Stomp", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            });
            var r = y(n("../node_modules/@riotgames/ipc-fe-shared/components/Fade/Fade.js")),
                o = y(n("../node_modules/@riotgames/ipc-fe-shared/components/InputListener/InputListener.js")),
                i = y(n("../node_modules/@riotgames/ipc-fe-shared/components/Loading/Loading.js")),
                u = y(n("../node_modules/@riotgames/ipc-fe-shared/components/Peek/Peek.js")),
                a = y(n("../node_modules/@riotgames/ipc-fe-shared/components/ResizeListener/ResizeListener.js")),
                c = y(n("../node_modules/@riotgames/ipc-fe-shared/components/SVG/SVG.js")),
                l = y(n("../node_modules/@riotgames/ipc-fe-shared/components/Scoot/Scoot.js")),
                s = y(n("../node_modules/@riotgames/ipc-fe-shared/components/ScrollListener/ScrollListener.js")),
                f = y(n("../node_modules/@riotgames/ipc-fe-shared/components/ScrollParallaxBackground/ScrollParallaxBackground.js")),
                p = y(n("../node_modules/@riotgames/ipc-fe-shared/components/ScrollProgress/ScrollProgress.js")),
                d = y(n("../node_modules/@riotgames/ipc-fe-shared/components/Stomp/Stomp.js"));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }
    }
]);