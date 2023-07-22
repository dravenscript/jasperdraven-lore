(window.webpackJsonp = window.webpackJsonp || []).push([
    [23], {
        "./js/display/components/AnalyticsScrollTracker/AnalyticsScrollTracker.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return d
            }));
            var r = a("../node_modules/react/index.js"),
                o = a.n(r),
                n = a("../node_modules/prop-types/index.js"),
                s = a.n(n),
                i = a("../node_modules/lodash/lodash.js"),
                c = a.n(i),
                l = a("./js/libs/Analytics.js");

            function p(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var d = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    return p(function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(a = e.call(this, t) || this), "eventLoop", (function() {
                        var e = (document.documentElement.scrollTop || document.body.scrollTop) / ((document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight) * 100,
                            t = c.a.clamp(e, 0, 100),
                            r = c.a.round(t, -1);
                        a.setDistance(r)
                    })), a.addScrollWatcher = function() {
                        window.addEventListener("scroll", a.eventLoop), a.isWatching = !0
                    }, a.removeScrollWatcher = function() {
                        window.removeEventListener("scroll", a.eventLoop), a.isWatching = !1
                    }, a.isWatching = !1, a.reportedDistances = {}, a.greatestDistance = 0, a
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.addScrollWatcher()
                }, o.UNSAFE_componentWillReceiveProps = function(e) {
                    e.identifier !== this.props.identifier && (this.reportedDistances = {}, this.greatestDistance = 0), e.shouldRecord && !1 === this.isWatching && this.greatestDistance < 100 && this.addScrollWatcher()
                }, o.shouldComponentUpdate = function() {
                    return !1
                }, o.componentWillUnmount = function() {
                    this.removeScrollWatcher()
                }, o.sendAnalyticsEvents = function() {
                    for (var e = 10; e <= this.greatestDistance; e += 10) !0 === c.a.isNil(this.reportedDistances[e]) && (this.reportedDistances[e] = !0, Object(l.f)("universe", "virtualpageview-page-scroll", "v-" + e + "%"))
                }, o.setDistance = function(e) {
                    return !!(e > this.greatestDistance && this.props.shouldRecord) && (this.greatestDistance = e, this.sendAnalyticsEvents(), 100 === this.greatestDistance && this.removeScrollWatcher(), !0)
                }, o.render = function() {
                    return null
                }, r
            }(o.a.Component);
            p(d, "propTypes", {
                identifier: s.a.string.isRequired,
                shouldRecord: s.a.bool.isRequired
            })
        },
        "./js/display/components/Buttons/ActionButton.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/prop-types/index.js"),
                o = a.n(r),
                n = a("../node_modules/react/index.js"),
                s = a.n(n),
                i = a("./js/Globals.js"),
                c = a("./js/display/components/Buttons/styles.scss"),
                l = a.n(c),
                p = a("../node_modules/classnames/index.js"),
                d = a.n(p);

            function m() {
                return (m = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var u = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.icon = function(e, t) {
                    var a = null,
                        r = {
                            height: e,
                            width: e,
                            fill: t
                        };
                    switch (this.props.action) {
                        case "fullScreen":
                            a = s.a.createElement("svg", {
                                style: r,
                                viewBox: "0 0 16 16"
                            }, s.a.createElement("path", {
                                d: "M16,0V6L14,4,11,7,9,5l3-3L10,0h6ZM6,16H0V10l2,2L5,9l2,2-3,3ZM5,7L2,4,0,6V0H6L4,2,7,5ZM11,9l3,3L16,10v6H10l2-2L9,11Z"
                            }));
                            break;
                        case "share":
                            a = s.a.createElement("svg", {
                                style: r,
                                viewBox: "0 0 13.688 10.875"
                            }, s.a.createElement("path", {
                                d: "M39.928,36.965a1.8,1.8,0,0,0,.528,1.266l-3.175,5.587a2.068,2.068,0,0,0-.547-0.083,2.1,2.1,0,0,0-.268.025l-3.078-5.413a1.811,1.811,0,0,0,.673-1.389A1.962,1.962,0,1,0,32.1,38.814c0.028,0,.053-0.006.078-0.007L35.3,44.331a1.8,1.8,0,0,0-.529,1.261,1.962,1.962,0,0,0,3.919.007,1.78,1.78,0,0,0-.325-1.027l3.255-5.77a2.043,2.043,0,0,0,.263.026A1.863,1.863,0,1,0,39.928,36.965Z",
                                transform: "translate(-30.156 -35.094)"
                            }));
                            break;
                        case "close":
                            a = s.a.createElement("svg", {
                                style: r,
                                viewBox: "4 4 16 14.5"
                            }, s.a.createElement("path", {
                                stroke: r.fill,
                                strokeWidth: "2",
                                d: "M6.25,6.25,17.75,17.75"
                            }), s.a.createElement("path", {
                                stroke: r.fill,
                                strokeWidth: "2",
                                d: "M6.25,17.75,17.75,6.25"
                            }));
                            break;
                        case "left":
                            a = s.a.createElement("svg", {
                                style: r,
                                viewBox: "0 0 14 14"
                            }, s.a.createElement("polyline", {
                                points: "10,4 4,7 10,10",
                                stroke: r.fill,
                                fill: "none",
                                strokeWidth: "2"
                            }));
                            break;
                        default:
                            a = null
                    }
                    return a
                }, o.render = function() {
                    var e = this.props,
                        t = e.className,
                        a = e.size,
                        r = e.color,
                        o = e.padding,
                        n = function(e, t) {
                            if (null == e) return {};
                            var a, r, o = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) a = n[r], t.indexOf(a) >= 0 || (o[a] = e[a]);
                            return o
                        }(e, ["className", "size", "color", "padding"]),
                        c = window.innerWidth < i.a.MobileMax ? 13 : o;
                    return s.a.createElement("div", m({}, n, {
                        style: {
                            padding: c
                        },
                        className: d()(t, l.a.actionButton)
                    }), this.icon(a, r))
                }, r
            }(s.a.Component);
            u.defaultProps = {
                size: 14,
                padding: 12,
                color: "#937341"
            }, u.propTypes = {
                action: o.a.oneOf(["share", "fullScreen", "close"]).isRequired,
                className: o.a.string,
                color: o.a.string,
                padding: o.a.number,
                size: o.a.number
            }, t.a = u
        },
        "./js/display/components/Buttons/ArrowBtn.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/prop-types/index.js"),
                o = a.n(r),
                n = a("../node_modules/react/index.js"),
                s = a.n(n),
                i = a("../node_modules/classnames/index.js"),
                c = a.n(i),
                l = a("./js/display/components/Buttons/styles.scss"),
                p = a.n(l);
            var d = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    var e = this.props.noHover ? p.a.noHover : null,
                        t = this.props.linkOut ? p.a.linkOut : null,
                        a = Object.assign({}, {
                            width: 2 * this.props.width,
                            height: this.props.width
                        }, this.props.extraStyles);
                    return s.a.createElement("span", {
                        className: c()(p.a.arrowBtn, e, t, this.props.className),
                        style: a
                    }, s.a.createElement("span", {
                        className: p.a.hoverArrow
                    }, s.a.createElement("svg", {
                        version: "1.0",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 162 70.28",
                        style: {
                            enableBackground: "new 0 0 162 70.28",
                            width: this.props.width
                        },
                        fill: this.props.hoverColor
                    }, s.a.createElement("circle", {
                        fill: this.props.hoverColor,
                        cx: "31.57",
                        cy: "35.21",
                        r: "11.57"
                    }), s.a.createElement("g", null, s.a.createElement("polygon", {
                        fill: this.props.hoverColor,
                        points: "124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"
                    }), s.a.createElement("rect", {
                        x: "84.61",
                        y: "29.76",
                        fill: this.props.hoverColor,
                        width: "65",
                        height: "11.06"
                    })))), s.a.createElement("span", {
                        className: p.a.restArrow
                    }, s.a.createElement("svg", {
                        version: "1.0",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 162 70.28",
                        style: {
                            enableBackground: "new 0 0 162 70.28",
                            width: this.props.width
                        },
                        fill: this.props.color
                    }, s.a.createElement("circle", {
                        fill: this.props.color,
                        cx: "31.57",
                        cy: "35.21",
                        r: "11.57"
                    }), s.a.createElement("g", null, s.a.createElement("polygon", {
                        fill: this.props.color,
                        points: "124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"
                    }), s.a.createElement("rect", {
                        x: "84.61",
                        y: "29.76",
                        fill: this.props.color,
                        width: "65",
                        height: "11.06"
                    })))))
                }, r
            }(s.a.Component);
            d.defaultProps = {
                color: "#937341",
                extraStyles: {},
                hoverColor: "#c4b998",
                width: 17,
                noHover: !1
            }, d.propTypes = {
                className: o.a.string,
                color: o.a.string,
                extraStyles: o.a.object,
                hoverColor: o.a.string,
                linkOut: o.a.bool,
                noHover: o.a.bool,
                width: o.a.number
            }, t.a = d
        },
        "./js/display/components/Buttons/MinorButton.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/prop-types/index.js"),
                o = a.n(r),
                n = a("../node_modules/react/index.js"),
                s = a.n(n),
                i = a("./js/libs/Urls.js"),
                c = a("./js/display/components/ColorToggle/ColorPropTypes.js"),
                l = a("./js/display/components/Buttons/MinorButton.scss"),
                p = a.n(l),
                d = a("../node_modules/classnames/index.js"),
                m = a.n(d),
                u = function(e) {
                    var t = "light" === e.colorScheme ? p.a.light : p.a.dark,
                        a = {
                            vastaya: p.a.VastayaTheme
                        }[e.theme],
                        r = m()(e.className, p.a.MinorButton, t, a);
                    return e.to ? s.a.createElement(i.a, {
                        className: r,
                        to: e.to
                    }, e.children) : e.forcedTo ? s.a.createElement("a", {
                        className: r,
                        href: e.forcedTo
                    }, e.children) : s.a.createElement("div", {
                        className: r,
                        onClick: e.onClick
                    }, e.children)
                };
            u.defaultProps = {
                colorScheme: "light"
            }, u.propTypes = {
                children: o.a.node,
                className: o.a.string,
                colorScheme: c.a.colorScheme,
                forcedTo: o.a.string,
                onClick: o.a.func,
                theme: o.a.string,
                to: o.a.string
            }, t.a = u
        },
        "./js/display/components/Buttons/MinorButton.scss": function(e, t, a) {
            e.exports = {
                MinorButton: "MinorButton_3mAo",
                VastayaTheme: "VastayaTheme_3MCP",
                dark: "dark_1uVD",
                light: "light_3eCx"
            }
        },
        "./js/display/components/Buttons/MoreContentButton.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/prop-types/index.js"),
                o = a.n(r),
                n = a("../node_modules/react/index.js"),
                s = a.n(n),
                i = a("./js/display/components/Buttons/styles.scss"),
                c = a.n(i),
                l = a("./js/display/components/Buttons/ArrowBtn.js"),
                p = a("./js/display/components/Buttons/LinkOutArrow.js"),
                d = a("../node_modules/classnames/index.js"),
                m = a.n(d);
            var u = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.icon = function() {
                    var e = null;
                    switch (this.props.arrowDirection) {
                        case "down":
                            e = s.a.createElement(l.a, {
                                extraStyles: {
                                    transform: "rotate(90deg)",
                                    height: "15px"
                                }
                            });
                            break;
                        case "right":
                            e = s.a.createElement(l.a, {
                                extraStyles: {
                                    height: "16px"
                                }
                            });
                            break;
                        case "out":
                            e = s.a.createElement(p.a, {
                                width: 13
                            });
                            break;
                        default:
                            e = null
                    }
                    return e
                }, o.render = function() {
                    var e = this.props,
                        t = e.className,
                        a = e.children,
                        r = e.onClick,
                        o = e.paddingRatio,
                        n = e.style,
                        i = o,
                        l = o ? 2 * o : null,
                        p = Object.assign({}, {
                            paddingTop: i,
                            paddingBottom: i,
                            paddingLeft: l,
                            paddingRight: l
                        }, n);
                    return s.a.createElement("button", {
                        className: m()(t, c.a.moreContentBtn),
                        style: p,
                        onClick: r
                    }, a, this.icon())
                }, r
            }(s.a.Component);
            u.defaultProps = {
                arrowDirection: "right",
                onClick: function(e) {
                    return e
                },
                style: {}
            }, u.propTypes = {
                arrowDirection: o.a.oneOf(["down", "right", "out"]),
                children: o.a.node,
                className: o.a.string,
                onClick: o.a.func,
                paddingRatio: o.a.number,
                style: o.a.object
            }, t.a = u
        },
        "./js/display/components/LightBoxImage/LightBoxImage.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return k
            }));
            var r = a("../node_modules/react/index.js"),
                o = a.n(r),
                n = a("../node_modules/react-dom/index.js"),
                s = a.n(n),
                i = a("../node_modules/react-photoswipe/lib/index.js"),
                c = a("../node_modules/prop-types/index.js"),
                l = a.n(c),
                p = a("../node_modules/classnames/index.js"),
                d = a.n(p),
                m = a("./js/display/components/FocalPointImage/AssetMagikImage.js"),
                u = a("./js/display/components/FocalPointImage/Utils.js"),
                h = (a("./js/display/components/LightBoxImage/PhotoSwipeCustomSkin.css"), a("./js/display/components/LightBoxImage/LightBoxImage.scss")),
                g = a.n(h),
                f = a("./js/libs/UniqueID.js");

            function y() {
                return (y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function j(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }
            var _ = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    j(t, e);
                    var a = t.prototype;
                    return a.getPortalElement = function() {
                        var e = document.getElementById(this.props.portalIdentifier);
                        return e || null
                    }, a.render = function() {
                        var e = this.getPortalElement();
                        if (null === e) return null;
                        var t = o.a.createElement(i.PhotoSwipe, this.props);
                        return s.a.createPortal(t, e)
                    }, t
                }(o.a.Component),
                E = function(e) {
                    function t(t) {
                        var a;
                        return b(v(a = e.call(this, t) || this), "checkImageDimensions", (function(e) {
                            if (e.image && null === a.preloadImage) {
                                var t = function() {
                                    a.setState({
                                        imageHeight: a.preloadImage.height,
                                        imageWidth: a.preloadImage.width
                                    })
                                };
                                a.preloadImage = new Image, a.preloadImage.src = a.getFullAMImageUrl(), a.preloadImage.onload = t, a.preloadImage.onerror = t
                            }
                        })), b(v(a), "getPhotoSwipeOptions", (function() {
                            return y({
                                history: !1,
                                shareEl: !1,
                                getThumbBoundsFn: function() {
                                    var e = document.getElementById(a.childIdentifier);
                                    if (e) {
                                        var t = window.pageYOffset || document.documentElement.scrollTop,
                                            r = e.getBoundingClientRect();
                                        return {
                                            x: r.left,
                                            y: r.top + t,
                                            w: r.width
                                        }
                                    }
                                }
                            }, a.props.photoSwipeOptions)
                        })), b(v(a), "onBaseImageClick", (function() {
                            a.props.enabled && a.setState({
                                isZoomed: !a.state.isZoomed
                            })
                        })), b(v(a), "onLightBoxClose", (function() {
                            a.setState({
                                isZoomed: !1
                            })
                        })), b(v(a), "getFullAMImageUrl", (function() {
                            var e = a.props.image;
                            return Object(u.d)(e.uri, 6e3, null)
                        })), b(v(a), "getAMImageUrl", (function() {
                            var e = a.props,
                                t = e.maxWidth,
                                r = e.maxHeight,
                                o = e.image;
                            return Object(u.d)(o.uri, r, t)
                        })), a.state = {
                            isZoomed: !1,
                            imageHeight: 500,
                            imageWidth: 500
                        }, a.preloadImage = null, a.childIdentifier = "LightBoxImage_" + Object(f.a)(), a
                    }
                    j(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        this.checkImageDimensions(this.props)
                    }, a.componentDidUpdate = function() {
                        this.checkImageDimensions(this.props)
                    }, a.render = function() {
                        var e = this.props,
                            t = e.maxWidth,
                            a = e.maxHeight,
                            r = e.image,
                            n = e.enabled,
                            s = e.className,
                            i = [{
                                src: this.getFullAMImageUrl(),
                                thumbnail: this.getAMImageUrl(),
                                h: this.state.imageHeight,
                                w: this.state.imageWidth
                            }];
                        return o.a.createElement(o.a.Fragment, null, o.a.createElement(_, {
                            items: i,
                            isOpen: this.state.isZoomed,
                            onClose: this.onLightBoxClose,
                            options: this.getPhotoSwipeOptions(),
                            portalIdentifier: this.props.portalIdentifier
                        }), o.a.createElement(m.a, {
                            className: d()(g.a.BaseImage, n && g.a.enabled, s),
                            src: r.uri,
                            maxWidth: t,
                            maxHeight: a,
                            onClick: this.onBaseImageClick,
                            id: this.childIdentifier
                        }))
                    }, t
                }(o.a.Component);
            E.defaultProps = {
                photoSwipeOptions: {},
                enabled: !0
            }, E.propTypes = {
                className: l.a.string,
                enabled: l.a.bool,
                image: l.a.object,
                maxHeight: l.a.number,
                maxWidth: l.a.number,
                photoSwipeOptions: l.a.object,
                portalIdentifier: l.a.string.isRequired
            };
            var k = "lightbox_portal_" + Object(f.a)();
            t.b = E
        },
        "./js/display/components/LightBoxImage/LightBoxImage.scss": function(e, t, a) {
            e.exports = {
                BaseImage: "BaseImage_1eFO",
                enabled: "enabled_2pYE"
            }
        },
        "./js/display/components/LightBoxImage/PhotoSwipeCustomSkin.css": function(e, t, a) {
            e.exports = {
                clockwise: "clockwise_1Dih",
                "donut-rotate": "donut-rotate_1gVC"
            }
        },
        "./js/display/components/Loader/Loader.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/prop-types/index.js"),
                o = a.n(r),
                n = a("../node_modules/react/index.js"),
                s = a.n(n),
                i = a("./js/Globals.js"),
                c = a("./js/libs/Scroll.js"),
                l = a("./js/libs/Urls.js"),
                p = a("./js/display/components/Buttons/MoreContentButton.js"),
                d = a("./js/display/components/Text/TextGradient/TextGradient.js"),
                m = a.n(d),
                u = a("./js/display/components/GetText/GetText.js"),
                h = a("./js/display/components/Loader/Loader.scss"),
                g = a.n(h),
                f = a("../node_modules/classnames/index.js"),
                y = a.n(f);

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var j = 500,
                _ = {
                    loaded: g.a.loaded,
                    loading: g.a.loading,
                    error: g.a.error
                },
                E = function(e) {
                    var t, a;

                    function r(t) {
                        var a;
                        return b(v(a = e.call(this, t) || this), "removeLoaderAfterTimeout", (function() {
                            window.clearTimeout(a.loaderTimer), a.loaderTimer = window.setTimeout((function() {
                                a.removeLoader()
                            }), j)
                        })), b(v(a), "shouldStopScroll", (function(e) {
                            return !1
                        })), b(v(a), "removeLoader", (function() {
                            a.setState({
                                render: !1
                            })
                        })), a.state = {
                            render: !0
                        }, a.loaderTimer = null, a
                    }
                    a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                    var o = r.prototype;
                    return o.componentDidMount = function() {
                        "loaded" === this.props.status && this.removeLoaderAfterTimeout(), this.shouldStopScroll(this.props) ? Object(c.a)(!0) : Object(c.a)(!1)
                    }, o.UNSAFE_componentWillReceiveProps = function(e) {
                        "loaded" === e.status ? this.removeLoaderAfterTimeout() : this.setState({
                            render: !0
                        })
                    }, o.shouldComponentUpdate = function(e, t) {
                        var a = this.props.status !== e.status,
                            r = this.state.render !== t.render;
                        return a || r
                    }, o.UNSAFE_componentWillUpdate = function(e) {
                        this.shouldStopScroll(e) ? Object(c.a)(!0) : Object(c.a)(!1)
                    }, o.componentWillUnmount = function() {
                        window.clearTimeout(this.loaderTimer), Object(c.a)(!1)
                    }, o.render = function() {
                        var e = this.props.status,
                            t = this.state.render,
                            a = _[e],
                            r = "error" === e ? {
                                backgroundImage: "url(/images/404BG.jpg)"
                            } : {};
                        return t ? s.a.createElement("div", {
                            className: y()(g.a.loader, a),
                            style: r
                        }, s.a.createElement("div", {
                            className: g.a.center
                        }, s.a.createElement("h3", {
                            className: g.a.code
                        }, "404"), s.a.createElement("div", {
                            className: g.a.message
                        }, s.a.createElement(m.a, null, s.a.createElement(u.b, {
                            id: "error-404-message",
                            default: "Lost? Take a Magical Journey Back to the Known Universe."
                        }))), s.a.createElement("div", {
                            className: g.a.homeButton
                        }, s.a.createElement(l.a, {
                            to: this.props.errorRedirect
                        }, s.a.createElement(p.a, null, s.a.createElement(u.b, {
                            id: "error-404-return-cta",
                            default: "Return to Universe"
                        })))))) : null
                    }, r
                }(s.a.Component);
            E.defaultProps = {
                errorRedirect: i.e.featured()
            }, E.propTypes = {
                errorRedirect: o.a.string,
                status: o.a.oneOf(["error", "loading", "loaded"])
            }, t.a = E
        },
        "./js/display/components/Loader/Loader.scss": function(e, t, a) {
            e.exports = {
                message: "message_3zBO",
                loader: "loader_2RBF",
                center: "center_vcab",
                code: "code_Xnqs",
                homeButton: "homeButton_1_qu",
                error: "error_3ukz",
                loaded: "loaded_1wWY"
            }
        },
        "./js/display/components/ProgressBar/ProgressBar.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/prop-types/index.js"),
                o = a.n(r),
                n = a("../node_modules/react/index.js"),
                s = a.n(n),
                i = a("../node_modules/lodash/lodash.js"),
                c = a.n(i),
                l = a("./js/libs/EventLoop.js"),
                p = a("./js/display/components/ProgressBar/ProgressBar.scss"),
                d = a.n(p),
                m = a("../node_modules/classnames/index.js"),
                u = a.n(m);

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var f = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    return g(h(a = e.call(this, t) || this), "checkScrollPosition", (function() {
                        var e = a.getPercentComplete(window.pageYOffset, window.innerHeight, document.body.offsetHeight);
                        a.setState({
                            percentComplete: e
                        })
                    })), g(h(a), "getPercentComplete", (function(e, t, a) {
                        var r = (e + (e + t * (e / a)) / a * t) / a * 100;
                        return r > 99 && (r += .55), c.a.clamp(r, 0, 100)
                    })), a.state = {
                        percentComplete: a.getPercentComplete()
                    }, a.positionId = null, a
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.positionId = Object(l.a)(this.checkScrollPosition, {
                        afterScroll: !0
                    }), this.checkScrollPosition()
                }, o.componentWillUnmount = function() {
                    Object(l.b)(this.positionId)
                }, o.getScaledPercentComplete = function() {
                    var e = this.props,
                        t = e.max,
                        a = e.min;
                    return this.state.percentComplete * ((t - a) / 100) + a
                }, o.getBarStyle = function() {
                    return {
                        width: this.getScaledPercentComplete() + "%"
                    }
                }, o.render = function() {
                    var e = this.getBarStyle(),
                        t = u()(d.a.ProgressBar, this.props.isZoomed && d.a.zoomed, this.props.className);
                    return s.a.createElement("div", {
                        className: t
                    }, s.a.createElement("div", {
                        className: d.a.progressMark,
                        style: e
                    }))
                }, r
            }(s.a.Component);
            g(f, "propTypes", {
                className: o.a.string,
                isZoomed: o.a.bool,
                max: o.a.number,
                min: o.a.number
            }), g(f, "defaultProps", {
                min: 0,
                max: 100
            }), t.a = f
        },
        "./js/display/components/ProgressBar/ProgressBar.scss": function(e, t, a) {
            e.exports = {
                ProgressBar: "ProgressBar_3VpS",
                progressMark: "progressMark_3c7l",
                zoomed: "zoomed_35V4"
            }
        },
        "./js/display/components/SmallPreview/SmallPreview.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return P
            }));
            var r = a("../node_modules/prop-types/index.js"),
                o = a.n(r),
                n = a("../node_modules/react/index.js"),
                s = a.n(n),
                i = a("../node_modules/lodash/lodash.js"),
                c = a.n(i),
                l = a("../node_modules/striptags/striptags.js"),
                p = a.n(l),
                d = a("./js/display/components/FocalPointImage/FocalPointImage.js"),
                m = a("./js/display/components/GetText/GetText.js"),
                u = a("./js/display/components/ColorToggle/ColorPropTypes.js"),
                h = a("./js/display/components/Buttons/ArrowBtn.js"),
                g = a("./js/libs/UniversePropTypes.js"),
                f = a("./js/libs/Urls.js"),
                y = a("./js/libs/Strings.js"),
                v = a("../node_modules/react-transition-group/index.js"),
                b = a("./js/display/components/SmallPreview/SmallPreview.scss"),
                j = a.n(b),
                _ = a("../node_modules/@riotgames/quantum-core/hextech/XCollapse/index.js"),
                E = a.n(_),
                k = a("../node_modules/classnames/index.js"),
                S = a.n(k);

            function x(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function C(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var P = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    return C(x(a = e.call(this, t) || this), "_onOver", (function() {
                        a.setState({
                            isHovering: !0
                        })
                    })), C(x(a), "_onOut", (function() {
                        a.setState({
                            isHovering: !1
                        })
                    })), a.state = {
                        isHovering: !1
                    }, a
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    var e, t, a = this,
                        r = this.props.background || {},
                        o = "landscape" === this.props.orientation ? j.a.landscape : j.a.portrait,
                        n = "light" === this.props.colorScheme ? j.a.light : j.a.dark,
                        i = {
                            vastaya: j.a.VastayaTheme
                        }[this.props.theme],
                        l = S()(j.a.SmallPreview, o, n, i, this.props.className);
                    return s.a.createElement(f.a, {
                        className: l,
                        to: this.props.to,
                        onMouseEnter: this._onOver,
                        onMouseLeave: this._onOut
                    }, s.a.createElement("div", {
                        className: j.a.content
                    }, s.a.createElement(d.a, {
                        className: j.a.image,
                        src: r.uri,
                        x: r.x,
                        y: r.y,
                        height: r.height,
                        width: r.width,
                        maxHeight: 1e3
                    }, s.a.createElement("div", {
                        className: j.a.mask
                    })), s.a.createElement("div", {
                        className: j.a.text
                    }, s.a.createElement("h5", null, s.a.createElement(m.b, {
                        id: "module-shortstory-label"
                    })), s.a.createElement("h2", null, this.props.title), s.a.createElement(v.TransitionGroup, {
                        component: null
                    }, this.state.isHovering && s.a.createElement(E.a, {
                        key: "contents"
                    }, s.a.createElement("p", null, p()((e = this.props.description, t = a.props.maxTextLength || 120, c.a.isString(e) && e.length < t ? e : Object(y.e)(e)))), s.a.createElement("h4", null, s.a.createElement(m.b, {
                        id: "module-story-cta"
                    }), " ", s.a.createElement(h.a, {
                        width: 12.5
                    })))))))
                }, r
            }(s.a.Component);
            C(P, "propTypes", {
                background: g.a.ImageObject,
                className: o.a.string,
                colorScheme: u.a.colorScheme,
                description: o.a.string,
                maxTextLength: o.a.number,
                orientation: o.a.oneOf(["landscape", "portrait"]).isRequired,
                theme: o.a.oneOf(["vastaya", "demacia"]),
                title: o.a.node,
                to: o.a.string
            })
        },
        "./js/display/components/SmallPreview/SmallPreview.scss": function(e, t, a) {
            e.exports = {
                portrait: "portrait_2pDu",
                text: "text_1HQk",
                SmallPreview: "SmallPreview_3cRx",
                VastayaTheme: "VastayaTheme_3fLU",
                content: "content_3R6n",
                image: "image_32bD",
                mask: "mask_3e1_",
                dark: "dark_2fm7"
            }
        },
        "./js/display/components/Text/MinutesToReadText/MinutesToReadText.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/lodash/lodash.js"),
                o = a.n(r),
                n = a("../node_modules/react/index.js"),
                s = a.n(n),
                i = a("../node_modules/prop-types/index.js"),
                c = a.n(i),
                l = a("./js/display/components/ColorToggle/ColorPropTypes.js"),
                p = a("./js/display/components/GetText/GetText.js"),
                d = a("./js/display/components/Text/MinutesToReadText/MinutesToReadText.scss"),
                m = a.n(d),
                u = a("../node_modules/classnames/index.js"),
                h = a.n(u),
                g = function(e) {
                    if (!0 === o.a.isNil(e.minutes)) return null;
                    var t = "light" === e.colorScheme ? "rgba(0, 0, 0, .8)" : "#d3c7aa",
                        a = Object.assign({}, {
                            color: t
                        }, e.style);
                    return s.a.createElement("span", {
                        className: h()(m.a.MinutesToReadText, e.className),
                        style: a
                    }, e.label)
                };
            g.defaultProps = {
                label: s.a.createElement(p.b, {
                    id: "module-shortstory-label"
                }),
                style: {}
            }, g.propTypes = {
                className: c.a.string,
                colorScheme: l.a.colorScheme,
                label: c.a.node,
                minutes: c.a.number,
                style: c.a.object
            }, t.a = g
        },
        "./js/display/components/Text/MinutesToReadText/MinutesToReadText.scss": function(e, t, a) {
            e.exports = {
                MinutesToReadText: "MinutesToReadText_Ut3Z"
            }
        },
        "./js/display/components/Text/TextGradient/TextGradient.js": function(e, t, a) {
            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var o = a("../node_modules/react/index.js"),
                n = a("../node_modules/prop-types/index.js"),
                s = a("../node_modules/create-react-class/index.js")({
                    displayName: "TextGradient",
                    propTypes: {
                        text: n.string,
                        fromColor: n.string,
                        toColor: n.string,
                        fallbackColor: n.string,
                        direction: n.oneOf(["top", "left", "bottom", "right"])
                    },
                    getDefaultProps: function() {
                        return {
                            text: "",
                            fromColor: "#CBAC62",
                            toColor: "#67471F",
                            direction: "bottom"
                        }
                    },
                    render: function() {
                        var e, t, a = this.props,
                            n = a.text,
                            s = (a.component, a.fromColor),
                            i = a.toColor,
                            c = a.fallbackColor,
                            l = a.direction,
                            p = function(e, t) {
                                if (null == e) return {};
                                var a, r, o = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) a = n[r], t.indexOf(a) >= 0 || (o[a] = e[a]);
                                return o
                            }(a, ["text", "component", "fromColor", "toColor", "fallbackColor", "direction"]),
                            d = "WebkitTextFillColor" in document.documentElement.style;
                        if (d ? e = {
                                display: "inline-block",
                                color: c || i,
                                background: "-webkit-linear-gradient(" + l + ", " + i + "," + s + ")",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            } : (e = {
                                position: "relative",
                                display: "inline-block",
                                color: c || i,
                                width: "100%"
                            }, t = {
                                display: "block",
                                mask: "url(#svgGrad" + l + ")",
                                color: s,
                                position: "absolute",
                                width: "100%",
                                left: 0,
                                right: 0,
                                zIndex: 1,
                                textAlign: "inherit"
                            }), !d) var m = "<svg height='0' width='0' style='position:absolute'><mask id='svgGrad" + l + "' maskUnits='objectBoundingBox' maskContentUnits='objectBoundingBox'>" + function() {
                            switch (l) {
                                case "right":
                                    return "<linearGradient id='g' gradientUnits='objectBoundingBox' x1='0' x2='1'>";
                                case "left":
                                    return "<linearGradient id='g' gradientUnits='objectBoundingBox' x1='1' x2='0'>";
                                case "bottom":
                                    return "<linearGradient id='g' gradientUnits='objectBoundingBox' y1='0' y2='1'>";
                                case "top":
                                    return "<linearGradient id='g' gradientUnits='objectBoundingBox' y1='1' y2='0'>"
                            }
                        }() + "<stop stop-color='white' offset='0' /><stop stop-color='white' stop-opacity='0' offset='1' /></linearGradient><rect x='0' y='0' width='1' height='1' fill='url(#g)' /></mask></svg>";
                        return d ? o.createElement("span", r({}, p, {
                            style: e
                        }), n || this.props.children) : o.createElement("span", r({}, p, {
                            style: e
                        }), o.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: m
                            }
                        }), o.createElement("span", {
                            style: t
                        }, n || this.props.children), n)
                    }
                });
            e.exports = s
        },
        "./js/display/pages/Campaigns/components/CharacterDisk/CharacterDisk.scss": function(e, t, a) {
            e.exports = {
                CharacterDisk: "CharacterDisk_2ff7",
                middleDisk: "middleDisk_ihE4",
                image: "image_PfAM",
                light: "light_Zt99",
                hover: "hover_2hvh",
                dark: "dark_1K9V",
                VastayaTheme: "VastayaTheme_3ekO",
                large: "large_3aAd",
                small: "small_EDzC"
            }
        },
        "./js/display/pages/Campaigns/components/CharacterPreview/CharacterPreview.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/prop-types/index.js"),
                o = a.n(r),
                n = a("../node_modules/react/index.js"),
                s = a.n(n),
                i = a("./js/libs/UniversePropTypes.js"),
                c = a("./js/display/components/ColorToggle/ColorPropTypes.js"),
                l = a("./js/display/components/GetText/GetText.js"),
                p = a("./js/display/components/Buttons/MinorButton.js"),
                d = a("./js/display/components/FocalPointImage/FocalPointImage.js"),
                m = a("./js/display/pages/Campaigns/components/CharacterDisk/CharacterDisk.scss"),
                u = a.n(m),
                h = a("../node_modules/classnames/index.js"),
                g = a.n(h),
                f = function(e) {
                    var t = e.image || {},
                        a = Object.assign({}, e.style, {
                            height: e.size,
                            width: e.size
                        }),
                        r = e.hover ? u.a.hover : null,
                        o = e.size > 155 ? u.a.large : u.a.small,
                        n = "dark" === e.colorScheme ? u.a.dark : u.a.light,
                        i = {
                            vastaya: u.a.VastayaTheme
                        }[e.theme],
                        c = g()(u.a.CharacterDisk, r, o, i, n);
                    return s.a.createElement("div", {
                        style: a,
                        className: c
                    }, s.a.createElement("div", {
                        className: u.a.middleDisk
                    }, s.a.createElement(d.a, {
                        className: u.a.image,
                        src: t.uri,
                        x: t.x,
                        y: t.y,
                        height: t.height,
                        width: t.width,
                        zoom: "250%",
                        maxHeight: 600
                    })))
                };
            f.defaultProps = {
                style: {}
            }, f.propTypes = {
                colorScheme: c.a.colorScheme,
                hover: o.a.bool,
                image: i.a.ImageObject,
                size: o.a.number,
                style: o.a.object,
                theme: o.a.oneOf(["vastaya", "demacia"])
            };
            var y = f,
                v = a("./js/display/pages/Campaigns/components/CharacterPreview/CharacterPreview.scss"),
                b = a.n(v);
            var j = function(e) {
                    return s.a.createElement("div", {
                        className: b.a.InnerFrame
                    }, s.a.createElement("div", {
                        className: b.a.frame
                    }))
                },
                _ = function(e) {
                    var t, a;

                    function r(t) {
                        var a, r, o, n;
                        return a = e.call(this, t) || this, r = function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(a), n = function() {
                            a.setState({
                                hover: !a.state.hover
                            })
                        }, (o = "toggleHover") in r ? Object.defineProperty(r, o, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = n, a.state = {
                            hover: !1
                        }, a
                    }
                    return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                        var e = {
                                small: 110,
                                medium: 145,
                                large: 180,
                                xlarge: 200
                            }[this.props.size],
                            t = "light" === this.props.colorScheme ? b.a.light : b.a.dark,
                            a = {
                                vastaya: b.a.VastayaTheme
                            }[this.props.theme],
                            r = g()(this.props.className, b.a.CharacterPreview, b.a[this.props.size], t, a);
                        return s.a.createElement("div", {
                            className: r,
                            style: this.props.style,
                            onMouseEnter: this.toggleHover,
                            onMouseLeave: this.toggleHover
                        }, s.a.createElement("div", {
                            style: {
                                height: e,
                                width: e
                            },
                            className: b.a.image
                        }, s.a.createElement(y, {
                            image: this.props.image,
                            size: e,
                            colorScheme: this.props.colorScheme,
                            hover: this.state.hover,
                            theme: this.props.theme
                        })), s.a.createElement("div", {
                            className: b.a.text
                        }, s.a.createElement("h3", null, this.props.title), s.a.createElement("h4", null, this.props.subtitle)), s.a.createElement("div", {
                            className: b.a.readMore
                        }, s.a.createElement(p.a, {
                            to: this.props.to,
                            colorScheme: this.props.colorScheme,
                            className: b.a.button,
                            theme: this.props.theme
                        }, s.a.createElement(l.b, {
                            id: "explore-readbioshort-cta"
                        }))), "large" === this.props.size ? s.a.createElement(j, null) : null)
                    }, r
                }(s.a.Component);
            _.defaultProps = {
                image: {},
                style: {},
                colorScheme: "light"
            }, _.propTypes = {
                className: o.a.string,
                colorScheme: c.a.colorScheme,
                image: i.a.ImageObject,
                size: o.a.oneOf(["medium", "large", "xlarge"]).isRequired,
                style: o.a.object,
                subtitle: o.a.node,
                theme: o.a.oneOf(["vastaya", "demacia"]),
                title: o.a.node,
                to: o.a.string
            };
            t.a = _
        },
        "./js/display/pages/Campaigns/components/CharacterPreview/CharacterPreview.scss": function(e, t, a) {
            e.exports = {
                text: "text_34ah",
                CharacterPreview: "CharacterPreview_2Ape",
                VastayaTheme: "VastayaTheme_XAB_",
                medium: "medium_1gsW",
                frame: "frame_2oZB",
                dark: "dark_3xdw",
                button: "button_ryNY",
                large: "large_1TqS",
                image: "image_2mUs",
                readMore: "readMore_11aZ",
                xlarge: "xlarge_2zoZ",
                InnerFrame: "InnerFrame_38Ka"
            }
        },
        "./js/display/pages/ProseReader/BioAndColorStoryLink/BioAndColorStoryLink.scss": function(e, t, a) {
            e.exports = {
                root: "root_K4Th",
                light: "light_pqJ0",
                moreButton: "moreButton_2oUO"
            }
        },
        "./js/display/pages/ProseReader/HardcodedInternalLink/HardcodedInternalLink.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_1TUa",
                relatedItems: "relatedItems_1FcA",
                storyPreview: "storyPreview_20o-"
            }
        },
        "./js/display/pages/ProseReader/NextChapterButton/NextChapterButton.scss": function(e, t, a) {
            e.exports = {
                root: "root_2I0o",
                backgroundImage: "backgroundImage_oeMo",
                nextChapterText: "nextChapterText_1wDM"
            }
        },
        "./js/display/pages/ProseReader/ProseReader.js": function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("../node_modules/react-router-last-location/dist/index.js"),
                o = a("../node_modules/react-router-dom/es/withRouter.js"),
                n = a("./js/stores/l10n/L10nDataWrapper.js"),
                s = a("../node_modules/react/index.js"),
                i = a.n(s),
                c = a("../node_modules/lodash/lodash.js"),
                l = a.n(c),
                p = a("./js/stores/champions/ChampionStore.js"),
                d = a("../node_modules/deepmerge/dist/cjs.js"),
                m = a.n(d),
                u = a("./js/stores/AppDispatcher.js"),
                h = a("./js/stores/StoreConstants.js"),
                g = a("./js/stores/BaseEmitter.js"),
                f = a("./js/stores/GenericResolver.js"),
                y = new(function() {
                    function e() {}
                    return e.prototype.getStory = function(e) {
                        e = e.toLowerCase();
                        var t = Object(h.q)(e);
                        Object(f.a)(t, h.C.RECIEVE_STORY, "Story " + e, {}, e)
                    }, e
                }());
            var v = {},
                b = new(function(e) {
                    var t, a;

                    function r() {
                        return e.call(this, "StoryStore") || this
                    }
                    return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.getStory = function(e) {
                        e = e.toLowerCase();
                        var t = {
                            story: {
                                title: "...",
                                subtitle: "",
                                "story-section-title": "",
                                "story-subsection-title": "",
                                "story-sections": []
                            },
                            "related-items": [],
                            status: "loading"
                        };
                        return l.a.isNil(v[e]) ? (y.getStory(e), v[e] = t) : t = Object.assign({}, t, v[e]), t
                    }, r
                }(g.b));
            u.a.register((function(e) {
                var t;
                switch (e.action) {
                    case h.C.RECIEVE_STORY:
                        t = e.contents, v = m()(v, t), b.emit(g.a)
                }
            }));
            var j = b;

            function _() {
                return (_ = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function E(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function k(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var S = function(e) {
                return e.story || {
                    title: "...",
                    subtitle: "",
                    "story-section-title": "",
                    "story-subsection-title": "",
                    "story-sections": []
                }
            };
            var x = function(e, t) {
                    return function(a) {
                        var r, o;

                        function n(e) {
                            var r;
                            k(E(r = a.call(this, e) || this), "displayName", "StoryDetailDataWrapper"), k(E(r), "onStoreChange", (function(e) {
                                void 0 === e && (e = r.props);
                                var a = r.getData(e, t(e)),
                                    o = S(a);
                                r.setState({
                                    slug: a.id,
                                    pageTitle: o.title,
                                    pageSubtitle: o.subtitle,
                                    sectionTitle: o["story-section-title"],
                                    sections: o["story-sections"],
                                    status: a.status,
                                    staticLinkId: a.staticLinkId,
                                    relatedItems: a["related-items"],
                                    customStoryPreview: o["custom-story-preview"],
                                    minutesToRead: a["minutes-to-read"],
                                    dropcaps: a.dropcaps,
                                    customBioImage: a.customBioImage
                                })
                            }));
                            var o = r.getData(e, t(e)),
                                n = S(o);
                            return r.state = {
                                slug: o.id,
                                pageTitle: n.title,
                                pageSubtitle: n.subtitle,
                                sectionTitle: n["story-section-title"],
                                sections: n["story-sections"],
                                status: o.status,
                                staticLinkId: o.staticLinkId,
                                customStoryPreview: n["custom-story-preview"],
                                minutesToRead: o["minutes-to-read"],
                                relatedItems: [],
                                dropcaps: o.dropcaps
                            }, r.championStoreListener = null, r.storyStoreListener = null, r
                        }
                        o = a, (r = n).prototype = Object.create(o.prototype), r.prototype.constructor = r, r.__proto__ = o;
                        var s = n.prototype;
                        return s.componentDidMount = function() {
                            this.championStoreListener = p.a.addChangeListener(this.onStoreChange), this.storyStoreListener = j.addChangeListener(this.onStoreChange)
                        }, s.UNSAFE_componentWillReceiveProps = function(e) {
                            this.onStoreChange(e)
                        }, s.componentWillUnmount = function() {
                            p.a.removeChangeListener(this.championStoreListener), j.removeChangeListener(this.storyStoreListener)
                        }, s.getData = function(e, t) {
                            var a = t.key,
                                r = t.chapter,
                                o = {};
                            if ("champion" === a) {
                                var n = p.a.getChampion(r),
                                    s = n["related-champions"].slice(0, 3),
                                    i = [n.champion].concat(s),
                                    c = !1 === l.a.isNil(n.champion.bioImage);
                                o = {
                                    id: n.champion.slug,
                                    story: {
                                        title: n.champion.name,
                                        subtitle: n.champion.title,
                                        "story-section-title": null,
                                        "story-subsection-title": null,
                                        "story-sections": [{
                                            "background-image": n.champion.bioImage || n.champion.image,
                                            "story-subsections": [{
                                                content: n.champion.biography.full
                                            }],
                                            "featured-champions": i
                                        }]
                                    },
                                    status: n.status,
                                    staticLinkId: "champion/" + r,
                                    "related-items": n.champion["related-items"],
                                    "minutes-to-read": null,
                                    dropcaps: !0,
                                    customBioImage: c
                                }
                            } else(o = j.getStory(a)).staticLinkId = a;
                            return o
                        }, s.render = function() {
                            return i.a.createElement(e, _({}, this.props, {
                                data: this.state
                            }))
                        }, n
                    }(i.a.Component)
                },
                C = a("./js/display/components/GenericBaseComponents/WatchBreakpoint.js"),
                P = a("./js/libs/Analytics.js"),
                T = a("../node_modules/react-transition-group/index.js"),
                w = a("./js/libs/Navigation.js"),
                R = a("./js/Globals.js"),
                B = a("./js/display/components/AnalyticsScrollTracker/AnalyticsScrollTracker.js"),
                O = a("../node_modules/classnames/index.js"),
                N = a.n(O),
                I = a("./js/display/components/ColorToggle/ColorPropTypes.js"),
                L = a("./js/display/components/ColorToggle/ColorToggle.js"),
                D = a("./js/display/components/GetText/GetText.js"),
                H = a("../node_modules/prop-types/index.js"),
                M = a.n(H),
                A = a("./js/display/components/RelatedChampions/RelatedChampions.js"),
                G = a("../node_modules/@riotgames/ipc-fe-shared/components/index.js"),
                F = a("../node_modules/striptags/striptags.js"),
                U = a.n(F);

            function W() {
                return (W = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var q = W({}, {
                    "champion/garen": [{
                        to: "champion/lux"
                    }, {
                        to: "champion/jarvaniv"
                    }],
                    "champion/lux": [{
                        to: "champion/galio"
                    }, {
                        to: "champion/garen"
                    }],
                    "champion/shyvana": [{
                        to: "champion/jarvaniv"
                    }, {
                        to: "champion/vayne"
                    }],
                    "champion/jarvaniv": [{
                        to: "champion/shyvana"
                    }, {
                        to: "champion/garen"
                    }],
                    "champion/galio": [{
                        to: "champion/lux"
                    }, {
                        to: "champion/quinn"
                    }],
                    "champion/vayne": [{
                        to: "champion/galio"
                    }, {
                        to: "champion/quinn"
                    }],
                    "champion/quinn": [{
                        to: "champion/vayne"
                    }, {
                        to: "champion/shyvana"
                    }],
                    "garen-color-story": [{
                        to: "for-demacia"
                    }, {
                        to: "lux-color-story"
                    }],
                    "lux-color-story": [{
                        to: "for-demacia"
                    }, {
                        to: "garen-color-story"
                    }],
                    "shyvana-color-story": [{
                        to: "jarvaniv-color-story"
                    }, {
                        to: "vayne-color-story"
                    }],
                    "jarvaniv-color-story": [{
                        to: "shyvana-color-story"
                    }, {
                        to: "garen-color-story"
                    }],
                    "galio-color-story": [{
                        to: "flesh-and-stone"
                    }, {
                        to: "lux-color-story"
                    }],
                    "vayne-color-story": [{
                        to: "galio-color-story"
                    }, {
                        to: "quinn-color-story"
                    }],
                    "quinn-color-story": [{
                        to: "vayne-color-story"
                    }, {
                        to: "shyvana-color-story"
                    }],
                    "for-demacia": [{
                        to: "garen-color-story"
                    }, {
                        to: "lux-color-story"
                    }],
                    "flesh-and-stone": [{
                        to: "lux-color-story"
                    }, {
                        to: "galio-color-story"
                    }]
                }, {}, {
                    "champion/ahri": [{
                        to: "champion/monkeyking"
                    }, {
                        to: "champion/nami"
                    }],
                    "champion/nami": [{
                        to: "champion/rakan"
                    }, {
                        to: "champion/xayah"
                    }],
                    "champion/rengar": [{
                        to: "champion/nami"
                    }, {
                        to: "champion/monkeyking"
                    }],
                    "champion/monkeyking": [{
                        to: "champion/ahri"
                    }, {
                        to: "champion/rengar"
                    }],
                    "champion/xayah": [{
                        to: "champion/rakan"
                    }, {
                        to: "champion/rengar"
                    }],
                    "champion/rakan": [{
                        to: "champion/xayah"
                    }, {
                        to: "champion/nami"
                    }],
                    "ahri-color": [{
                        to: "monkeyking-color"
                    }, {
                        to: "nami-first-steps"
                    }],
                    "nami-first-steps": [{
                        to: "rakan-color-story"
                    }, {
                        to: "xayah-color-story"
                    }],
                    "rengar-prey": [{
                        to: "nami-first-steps"
                    }, {
                        to: "xayah-color-story"
                    }],
                    "monkeyking-color": [{
                        to: "ahri-color"
                    }, {
                        to: "rengar-prey"
                    }],
                    "xayah-color-story": [{
                        to: "rakan-color-story"
                    }, {
                        to: "rengar-prey"
                    }],
                    "rakan-color-story": [{
                        to: "xayah-color-story"
                    }, {
                        to: "nami-first-steps"
                    }],
                    "ahri-short-story": [{
                        to: "monkeyking-color"
                    }, {
                        to: "vastaya-field-journal"
                    }],
                    "vastaya-field-journal": [{
                        to: "xayah-color-story"
                    }, {
                        to: "rakan-color-story"
                    }]
                }),
                V = a("./js/display/components/Buttons/ArrowBtn.js"),
                z = a("./js/display/components/FocalPointImage/FocalPointImage.js"),
                Y = a("./js/libs/Urls.js"),
                Z = a("./js/libs/UniversePropTypes.js"),
                J = a("./js/display/pages/ProseReader/NextChapterButton/NextChapterButton.scss"),
                K = a.n(J),
                Q = function(e) {
                    var t = e.slug,
                        a = e.chapter,
                        r = e.title,
                        o = e.background || {};
                    return i.a.createElement(Y.a, {
                        to: R.e.storyDetail(t, a)
                    }, i.a.createElement("div", {
                        className: K.a.root
                    }, i.a.createElement("div", {
                        className: K.a.nextChapterText
                    }, i.a.createElement("h1", null, r), i.a.createElement("h5", null, i.a.createElement(D.b, {
                        id: "story-next-prompt-cta"
                    }), " ", i.a.createElement(V.a, {
                        extraStyles: {
                            height: 13
                        }
                    }))), i.a.createElement(z.a, {
                        className: K.a.backgroundImage,
                        src: o.uri,
                        x: o.x,
                        y: o.y,
                        width: o.width,
                        height: o.height
                    })))
                };
            Q.propTypes = {
                background: Z.a.ImageObject,
                chapter: M.a.number.isRequired,
                slug: M.a.string,
                title: M.a.string.isRequired
            };
            var X = Q,
                $ = a("./refactor/src/components/Anchor/Anchor.js"),
                ee = a("./js/display/pages/ProseReader/ProseReaderHextech/BackButton/BackButton.scss"),
                te = a.n(ee);

            function ae(e) {
                return i.a.createElement($.a, {
                    className: N()(te.a.root, te.a[e.colorScheme], e.className),
                    href: e.to
                })
            }
            ae.propTypes = {
                className: M.a.string,
                colorScheme: I.a.colorScheme,
                to: M.a.string
            };
            var re = a("./js/display/pages/ProseReader/ProseReaderHextech/CloseButton/CloseButton.scss"),
                oe = a.n(re);

            function ne(e) {
                return i.a.createElement("button", {
                    className: N()(oe.a.root, oe.a[e.colorScheme], e.className),
                    onClick: e.onClick
                })
            }
            ne.propTypes = {
                className: M.a.string,
                colorScheme: I.a.colorScheme,
                onClick: M.a.func.isRequired
            };
            a("./js/display/pages/ProseReader/ProseReaderHextech/TopButton/TopButton.scss");
            M.a.string, I.a.colorScheme, M.a.func.isRequired;
            var se = a("./js/display/components/Buttons/MoreContentButton.js"),
                ie = a("./js/display/pages/ProseReader/BioAndColorStoryLink/BioAndColorStoryLink.scss"),
                ce = a.n(ie);

            function le(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function pe(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var de = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    return pe(le(a = e.call(this, t) || this), "onStoreChange", (function(e) {
                        var t = a.getChampionSlug(e);
                        if (!1 === l.a.isNil(t)) {
                            var r = p.a.getChampion(t),
                                o = j.getStory(t + "-color-story");
                            a.setState({
                                championName: r.champion.name,
                                hasColorStory: "loaded" === o.status,
                                hasChampionName: "loaded" === r.status
                            })
                        }
                    })), pe(le(a), "storeHasChanged", (function() {
                        a.onStoreChange(a.props)
                    })), a.state = {
                        championName: "...",
                        hasColorStory: !1,
                        hasChampionName: !1
                    }, a.championStoreListener = null, a.storyStoreListener = null, a
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.championStoreListener = p.a.addChangeListener(this.storeHasChanged), this.storyStoreListener = j.addChangeListener(this.storeHasChanged), this.onStoreChange(this.props)
                }, o.UNSAFE_componentWillReceiveProps = function(e) {
                    e.pageId !== this.props.pageId && this.onStoreChange(e)
                }, o.componentWillUnmount = function() {
                    p.a.removeChangeListener(this.championStoreListener), j.removeChangeListener(this.storyStoreListener)
                }, o.getChampionSlug = function(e) {
                    var t = e.pageId;
                    return t.includes("champion/") ? t.split("champion/")[1] : t.includes("color-story") ? t.split("-color-story")[0] : this.magicRelation(t, this.state.hasChampionName) ? this.magicRelation(t, this.state.hasChampionName).championSlug : null
                }, o.getTranslationId = function(e, t) {
                    return e && t ? "story-read-bio-cta" : e && !1 === t ? "champdetail-bio-cta" : !1 === e && t ? "story-read-color-story-cta" : "module-story-cta"
                }, o.magicRelation = function(e, t) {
                    return {
                        "rengar-prey": {
                            to: R.e.storyDetail("champion", "rengar"),
                            translationId: this.getTranslationId(!0, t),
                            championSlug: "rengar"
                        },
                        "champion/rengar": {
                            to: R.e.storyDetail("rengar-prey"),
                            translationId: this.getTranslationId(!1, t),
                            championSlug: "rengar"
                        },
                        "ahri-color": {
                            to: R.e.storyDetail("champion", "ahri"),
                            translationId: this.getTranslationId(!0, t),
                            championSlug: "ahri"
                        },
                        "champion/ahri": {
                            to: R.e.storyDetail("ahri-color"),
                            translationId: this.getTranslationId(!1, t),
                            championSlug: "ahri"
                        },
                        "nami-first-steps": {
                            to: R.e.storyDetail("champion", "nami"),
                            translationId: this.getTranslationId(!0, t),
                            championSlug: "nami"
                        },
                        "champion/nami": {
                            to: R.e.storyDetail("nami-first-steps"),
                            translationId: this.getTranslationId(!1, t),
                            championSlug: "nami"
                        },
                        "monkeyking-color": {
                            to: R.e.storyDetail("champion", "monkeyking"),
                            translationId: this.getTranslationId(!0, t),
                            championSlug: "monkeyking"
                        },
                        "champion/monkeyking": {
                            to: R.e.storyDetail("monkeyking-color"),
                            translationId: this.getTranslationId(!1, t),
                            championSlug: "monkeyking"
                        }
                    }[e] || !1
                }, o.render = function() {
                    var e = this.props.pageId.includes("color-story"),
                        t = this.props.pageId.includes("champion/"),
                        a = this.magicRelation(this.props.pageId, this.state.hasChampionName);
                    if (!1 === e && !1 === t && !1 === a) return null;
                    if (t && !1 === this.state.hasColorStory && !1 === a) return null;
                    var r = null;
                    r = a && a.translationId ? a.translationId : this.getTranslationId(e, this.state.hasChampionName);
                    var o = this.getChampionSlug(this.props),
                        n = null;
                    e ? n = R.e.storyDetail("champion", o) : a && a.to ? n = a.to : this.state.hasColorStory && (n = R.e.storyDetail(o + "-color-story"));
                    var s = "light" === this.props.colorScheme ? ce.a.light : ce.a.dark;
                    return i.a.createElement(Y.a, {
                        to: n,
                        className: N()(ce.a.root, s)
                    }, i.a.createElement(se.a, {
                        className: ce.a.moreButton
                    }, i.a.createElement(D.b, {
                        id: r,
                        variables: {
                            "champion-name": this.state.championName
                        }
                    })))
                }, r
            }(i.a.Component);
            pe(de, "propTypes", {
                colorScheme: M.a.string,
                pageId: M.a.string
            });
            var me = a("./js/display/pages/Campaigns/components/CharacterPreview/CharacterPreview.js"),
                ue = a("./js/display/components/SmallPreview/SmallPreview.js"),
                he = a("./js/display/pages/ProseReader/HardcodedInternalLink/HardcodedInternalLink.scss"),
                ge = a.n(he);

            function fe(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ye(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var ve = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    ye(fe(a = e.call(this, t) || this), "onStoreChange", (function(e) {
                        var t = a.getData(e);
                        a.setState({
                            links: t
                        })
                    })), ye(fe(a), "storeHasChanged", (function() {
                        a.onStoreChange(a.props)
                    }));
                    var r = a.getData(t);
                    return a.state = {
                        links: r
                    }, a.championStoreListener = null, a.storyStoreListener = null, a
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.championStoreListener = p.a.addChangeListener(this.storeHasChanged), this.storyStoreListener = j.addChangeListener(this.storeHasChanged)
                }, o.UNSAFE_componentWillReceiveProps = function(e) {
                    this.onStoreChange(e)
                }, o.componentWillUnmount = function() {
                    p.a.removeChangeListener(this.championStoreListener), j.removeChangeListener(this.storyStoreListener)
                }, o.getData = function(e) {
                    var t = this;
                    return this.getStaticData(e.pageId).map((function(e) {
                        var a = t.getItemType(e);
                        if ("champion" === a) {
                            var r = e.to.split("/")[1];
                            return p.a.getChampion(r)
                        }
                        if ("story" === a) return j.getStory(e.to)
                    }))
                }, o.getItemType = function(e) {
                    return e.to.includes("champion/") ? "champion" : "story"
                }, o.getStaticData = function(e) {
                    return q[e] || []
                }, o.render = function() {
                    var e = this;
                    if (0 === this.state.links.length) return null;
                    var t = this.state.links,
                        a = t.map((function(e) {
                            if (e.story) {
                                var t = S(e),
                                    a = l.a.get(t, "['story-sections'][0]['background-image']") || {};
                                return {
                                    type: "story",
                                    title: t.title,
                                    subtitle: t["custom-story-preview"],
                                    image: a,
                                    link: R.e.storyDetail(e.id),
                                    status: e.status
                                }
                            }
                            var r = e.champion.image;
                            return {
                                type: "champion",
                                title: e.champion.name,
                                subtitle: e.champion.title,
                                image: r,
                                link: R.e.storyDetail("champion", e.id),
                                status: e.status
                            }
                        })),
                        r = t[0].story ? i.a.createElement(D.b, {
                            id: "related-content-colorstory"
                        }) : i.a.createElement(D.b, {
                            id: "related-content-bio"
                        });
                    return !1 === (t.length > 0 && l.a.every(t, {
                        status: "loaded"
                    })) ? i.a.createElement("div", {
                        className: ge.a.root
                    }) : i.a.createElement("div", {
                        className: ge.a.root
                    }, i.a.createElement("h4", null, r), i.a.createElement("ul", {
                        className: ge.a.relatedItems
                    }, a.map((function(t, a) {
                        return "champion" === t.type ? i.a.createElement("li", {
                            key: a
                        }, i.a.createElement(me.a, {
                            className: ge.a.championPreview,
                            image: t.image,
                            title: t.title,
                            subtitle: t.subtitle,
                            to: t.link,
                            size: "xlarge",
                            colorScheme: e.props.colorScheme
                        })) : i.a.createElement("li", {
                            key: a
                        }, i.a.createElement(ue.a, {
                            className: ge.a.storyPreview,
                            background: t.image,
                            title: t.title,
                            description: t.subtitle,
                            to: t.link,
                            orientation: "landscape",
                            colorScheme: e.props.colorScheme
                        }))
                    }))))
                }, r
            }(i.a.Component);
            ye(ve, "propTypes", {
                colorScheme: I.a.colorScheme,
                pageId: M.a.string
            });
            var be = a("./js/stores/champions/ChampionDetailDataWrapper.js"),
                je = a("./js/display/pages/ProseReader/RelatedItems/RelatedItems.scss"),
                _e = a.n(je),
                Ee = function(e) {
                    var t = e.data,
                        a = R.e.storyDetail("champion", e.slug);
                    return i.a.createElement("li", null, i.a.createElement(me.a, {
                        className: _e.a.championPreview,
                        image: t.champion.image,
                        title: t.champion.name,
                        subtitle: t.champion.title,
                        to: a,
                        size: "xlarge",
                        colorScheme: e.colorScheme
                    }))
                };
            Ee.propTypes = {
                colorScheme: M.a.string,
                data: M.a.object,
                slug: M.a.string.isRequired
            };
            var ke = Object(be.a)(Ee, (function(e) {
                    return e.slug
                })),
                Se = function(e) {
                    var t = e.data,
                        a = R.e.storyDetail(e.slug),
                        r = l.a.get(t, "['sections'][0]['background-image']") || {};
                    return i.a.createElement("li", null, i.a.createElement(ue.a, {
                        className: _e.a.storyPreview,
                        background: r,
                        title: t.pageTitle,
                        description: t.customStoryPreview,
                        to: a,
                        orientation: "landscape",
                        colorScheme: e.colorScheme
                    }))
                };
            Se.propTypes = {
                colorScheme: M.a.string,
                data: M.a.object,
                slug: M.a.string.isRequired
            };
            var xe = x(Se, (function(e) {
                    return {
                        key: e.slug
                    }
                })),
                Ce = function(e) {
                    var t = e.items,
                        a = e.colorScheme;
                    if (0 === t.length) return null;
                    var r = "story" === t[0].to.split("/")[0] ? i.a.createElement(D.b, {
                        id: "related-content-colorstory"
                    }) : i.a.createElement(D.b, {
                        id: "related-content-bio"
                    });
                    return i.a.createElement("div", {
                        className: _e.a.root
                    }, i.a.createElement("h4", null, r), i.a.createElement("ul", {
                        className: _e.a.items
                    }, t.map((function(e) {
                        var t = e.to.split("/")[0],
                            r = e.to.split("/")[1];
                        return "champion" === t ? i.a.createElement(ke, {
                            key: e.to,
                            slug: r,
                            colorScheme: a
                        }) : "story" === t ? i.a.createElement(xe, {
                            key: e.to,
                            slug: r,
                            colorScheme: a
                        }) : null
                    }))))
                };
            Ce.propTypes = {
                colorScheme: M.a.string,
                items: M.a.array.isRequired
            };
            var Pe = Ce,
                Te = function(e) {
                    return l.a.size(e.relatedItems) > 0 ? i.a.createElement(Pe, {
                        colorScheme: e.colorScheme,
                        items: e.relatedItems
                    }) : e.staticLinkId ? i.a.createElement(ve, {
                        colorScheme: e.colorScheme,
                        pageId: e.staticLinkId
                    }) : null
                };
            Te.propTypes = {
                colorScheme: M.a.string,
                relatedItems: M.a.array,
                staticLinkId: M.a.string
            };
            var we = Te,
                Re = a("./js/libs/EventLoop.js"),
                Be = a("./js/display/pages/ProseReader/ProseReaderHextech/ProgressBar/ProgressBar.scss"),
                Oe = a.n(Be);

            function Ne(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Ie(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var Le = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    return Ie(Ne(a = e.call(this, t) || this), "checkScrollPosition", (function() {
                        var e = a.getPercentComplete(window.pageYOffset, window.innerHeight, document.body.offsetHeight);
                        a.setState({
                            percentComplete: e
                        })
                    })), Ie(Ne(a), "getPercentComplete", (function(e, t, a) {
                        var r = (e + (e + t * (e / a)) / a * t) / a * 100;
                        return r > 99 && (r += .55), l.a.clamp(r, 0, 100)
                    })), a.state = {
                        percentComplete: a.getPercentComplete()
                    }, a.positionId = null, a
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.positionId = Object(Re.a)(this.checkScrollPosition, {
                        afterScroll: !0
                    }), this.checkScrollPosition()
                }, o.componentWillUnmount = function() {
                    Object(Re.b)(this.positionId)
                }, o.getScaledPercentComplete = function() {
                    var e = this.props,
                        t = e.max,
                        a = e.min;
                    return this.state.percentComplete * ((t - a) / 100) + a
                }, o.getBarStyle = function() {
                    return {
                        width: this.getScaledPercentComplete() + "%"
                    }
                }, o.render = function() {
                    var e = this.getBarStyle(),
                        t = N()(Oe.a.root, this.props.isZoomed && Oe.a.zoomed, this.props.className, Oe.a[this.props.colorScheme]);
                    return i.a.createElement("div", {
                        className: t
                    }, i.a.createElement("div", {
                        className: Oe.a.progressMark,
                        style: e
                    }))
                }, r
            }(i.a.Component);
            Ie(Le, "propTypes", {
                className: M.a.string,
                colorScheme: I.a.colorScheme,
                isZoomed: M.a.bool,
                max: M.a.number,
                min: M.a.number
            }), Ie(Le, "defaultProps", {
                min: 0,
                max: 100
            });
            var De = a("./js/display/pages/ProseReader/ProseReaderHextech/OpenButton/OpenButton.scss"),
                He = a.n(De);
            var Me, Ae, Ge, Fe = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    return i.a.createElement("button", {
                        className: N()(He.a.root, He.a[this.props.colorScheme]),
                        onClick: this.props.onClick
                    }, i.a.createElement("div", {
                        className: He.a.block
                    }), i.a.createElement("div", {
                        className: He.a.block
                    }), i.a.createElement("div", {
                        className: He.a.block
                    }))
                }, r
            }(i.a.Component);
            Me = Fe, Ae = "propTypes", Ge = {
                colorScheme: I.a.colorScheme,
                onClick: M.a.func.isRequired
            }, Ae in Me ? Object.defineProperty(Me, Ae, {
                value: Ge,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Me[Ae] = Ge;
            var Ue = a("./js/display/pages/ProseReader/ProseReaderHextech/LoreActs/LoreActs.scss"),
                We = a.n(Ue);

            function qe(e) {
                return i.a.createElement("div", {
                    className: N()(We.a.root, We.a[e.colorScheme])
                }, e.children)
            }
            qe.propTypes = {
                children: M.a.oneOfType([M.a.arrayOf(M.a.node), M.a.node]),
                colorScheme: I.a.colorScheme
            };
            var Ve = a("./js/display/pages/ProseReader/ProseReaderHextech/LeftMenu/LeftMenu.scss"),
                ze = a.n(Ve);
            var Ye = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    return i.a.createElement("div", {
                        className: N()(ze.a.root, this.props.isFaded && ze.a.faded)
                    }, i.a.createElement("div", {
                        className: ze.a.inner
                    }, this.props.children))
                }, r
            }(i.a.Component);
            ! function(e, t, a) {
                t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a
            }(Ye, "propTypes", {
                children: M.a.node.isRequired,
                isFaded: M.a.bool.isRequired
            });
            var Ze = a("./js/libs/BrowserCheck.js"),
                Je = a("./js/display/pages/ProseReader/ProseReaderHextech/HeroText/HeroText.scss"),
                Ke = a.n(Je);
            var Qe = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    var e = this.props,
                        t = e.isFaded,
                        a = e.subtitle,
                        r = e.title;
                    return i.a.createElement("div", {
                        className: N()(Ke.a.root, t && Ke.a.faded)
                    }, i.a.createElement("div", {
                        className: Ke.a.spacer
                    }), i.a.createElement("div", {
                        className: Ke.a.spacer
                    }), i.a.createElement("div", {
                        className: Ke.a.spacer
                    }), i.a.createElement("div", {
                        className: Ke.a.spacer
                    }), i.a.createElement("div", {
                        className: Ke.a.spacer
                    }, i.a.createElement("h1", {
                        className: Ke.a.title
                    }, r), !!a && i.a.createElement("h2", {
                        className: Ke.a.subtitle
                    }, a)), i.a.createElement("p", {
                        className: Ke.a.cta
                    }, i.a.createElement(D.b, {
                        id: "story-scroll",
                        default: "Scroll to Begin"
                    })))
                }, r
            }(i.a.Component);
            ! function(e, t, a) {
                t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a
            }(Qe, "propTypes", {
                isFaded: M.a.bool.isRequired,
                subtitle: M.a.string,
                title: M.a.string.isRequired
            });
            var Xe = a("./js/display/pages/ProseReader/ProseReaderHextech/ProseReaderHextech.scss"),
                $e = a.n(Xe),
                et = a("./js/libs/scroll-to/ScrollTo.js"),
                tt = !1,
                at = function(e) {
                    var t = e || document;
                    return l.a.isNil(e) && !1 === tt && (tt = !0), t.querySelectorAll("[data-act-hero-title]") || []
                },
                rt = a("./js/display/pages/ProseReader/ProseReaderHextech/ChapterNav/ChapterNav.scss"),
                ot = a.n(rt);

            function nt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function st(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var it = function(e) {
                var t, a;

                function r() {
                    for (var t, a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                    return st(nt(t = e.call.apply(e, [this].concat(r)) || this), "state", {
                        closestIdx: 0,
                        points: []
                    }), st(nt(t), "onScroll", (function() {
                        var e = t.getTrackingPoints(),
                            a = window.innerHeight / 2,
                            r = 0,
                            o = -1 / 0;
                        e.forEach((function(e, t) {
                            var n = e.distanceToTop - a;
                            n > o && n <= 0 && (r = t, o = n)
                        })), t.setState({
                            points: e,
                            closestIdx: r
                        })
                    })), st(nt(t), "getTrackingPoints", (function() {
                        var e = at(t.props.containerRef);
                        return l.a.map(e, (function(e) {
                            var t = e.getBoundingClientRect().top,
                                a = e.innerText,
                                r = null;
                            e.previousSibling && (r = e.previousSibling.innerText, l.a.size(r) <= 1 && (r = null));
                            var o = t + window.scrollY;
                            return {
                                title: a,
                                subtitle: r,
                                anchor: e.id,
                                onClick: function() {
                                    Object(et.a)(0, o - 300, {
                                        duration: 500
                                    })
                                },
                                distanceToTop: t
                            }
                        }))
                    })), t
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.scrollListener = Object(Re.a)(this.onScroll, {
                        urgent: !0
                    })
                }, o.componentDidUpdate = function() {
                    if (0 === this.state.points.length) {
                        var e = this.getTrackingPoints();
                        e.length > 0 && this.setState({
                            points: e
                        }), this.catchIdentifier = null
                    }
                }, o.componentWillUnmount = function() {
                    this.catchIdentifier = null, Object(Re.b)(this.scrollListener)
                }, o.render = function() {
                    var e = this.props,
                        t = e.colorScheme,
                        a = e.toggle,
                        r = this.state,
                        o = r.closestIdx,
                        n = r.points;
                    return i.a.createElement("div", {
                        className: ot.a.root
                    }, i.a.createElement("ol", {
                        className: N()(ot.a.ol, ot.a[t])
                    }, n.map((function(e, t) {
                        var r = e.title,
                            n = e.subtitle,
                            s = e.anchor,
                            c = e.onClick,
                            l = t === o,
                            p = t <= o;
                        return i.a.createElement("li", {
                            className: N()(ot.a.li, l && ot.a.active, p && !l && ot.a.viewed),
                            key: s + "_" + t,
                            onClick: function() {
                                c(), a(!1)
                            }
                        }, !!n && i.a.createElement("h4", {
                            className: ot.a.subtitle
                        }, n, ":"), i.a.createElement("h3", {
                            className: ot.a.title
                        }, r))
                    }))))
                }, r
            }(i.a.Component);
            st(it, "propTypes", {
                colorScheme: I.a.colorScheme,
                containerRef: M.a.object,
                toggle: M.a.func.isRequired
            });
            var ct = a("./js/display/pages/ProseReader/ProseReaderHextech/BottomMenu/BottomMenu.scss"),
                lt = a.n(ct);
            var pt = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    return i.a.createElement("div", {
                        className: N()(lt.a.root, lt.a[this.props.colorScheme]),
                        style: this.props.style
                    }, this.props.children)
                }, r
            }(i.a.Component);
            ! function(e, t, a) {
                t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a
            }(pt, "propTypes", {
                children: M.a.node.isRequired,
                colorScheme: I.a.colorScheme.isRequired
            });
            var dt = a("./js/display/pages/ProseReader/ProseReaderHextech/Background/Background.scss"),
                mt = a.n(dt);
            Object(Ze.d)();
            var ut = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    var e = this.props,
                        t = e.backgroundImage,
                        a = e.colorScheme,
                        r = e.isFaded;
                    return i.a.createElement("div", {
                        className: N()(mt.a.root, mt.a[a], r && mt.a.faded)
                    }, !1, i.a.createElement("div", {
                        className: mt.a.textGradient
                    }), i.a.createElement(z.a, {
                        className: mt.a.backgroundImage,
                        src: t.uri,
                        x: t.x,
                        y: t.y,
                        height: t.height,
                        width: t.width
                    }), i.a.createElement("div", {
                        className: mt.a.splashGradient
                    }))
                }, r
            }(i.a.Component);
            ! function(e, t, a) {
                t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a
            }(ut, "propTypes", {
                backgroundImage: M.a.object.isRequired,
                colorScheme: I.a.colorScheme,
                isFaded: M.a.bool.isRequired
            });
            a("./js/display/components/FocalPointImage/AssetMagikImage.js");
            var ht = a("./js/display/components/LightBoxImage/LightBoxImage.js"),
                gt = a("./js/display/pages/ProseReader/ProseReaderHextech/ActHero/ActHero.scss"),
                ft = a.n(gt);
            var yt = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    var e = this.props,
                        t = e.badge,
                        a = e.colorScheme,
                        r = e.portalIdentifier,
                        o = e.subtitle,
                        n = e.title;
                    return i.a.createElement("div", {
                        className: N()(ft.a.root, ft.a[a])
                    }, !!t && i.a.createElement(ht.b, {
                        className: ft.a.lightBoxImage,
                        image: t,
                        maxWidth: 1400,
                        portalIdentifier: r
                    }), !!o && i.a.createElement("h2", {
                        className: ft.a.h2
                    }, o), !!n && i.a.createElement("h1", {
                        className: ft.a.h1,
                        "data-act-hero-title": n,
                        id: l.a.kebabCase(n)
                    }, n))
                }, r
            }(i.a.Component);
            ! function(e, t, a) {
                t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a
            }(yt, "propTypes", {
                badge: M.a.any,
                colorScheme: M.a.string,
                portalIdentifier: M.a.string.isRequired,
                subtitle: M.a.string,
                title: M.a.string
            });
            var vt = a("./js/display/pages/ProseReader/ProseReaderHextech/ActCopy/ActCopy.scss"),
                bt = a.n(vt);

            function jt(e) {
                if (e) return e = (e = e.replace(/<hr[^>]*>/gi, '<hr class="' + bt.a.hr + '">')).replace(/<p[^>]*>/gi, '<p class="' + bt.a.p + '">')
            }

            function _t(e) {
                return i.a.createElement("div", {
                    className: N()(bt.a.root, bt.a[e.colorScheme])
                }, i.a.createElement("div", {
                    id: e.catchIdentifier,
                    dangerouslySetInnerHTML: {
                        __html: jt(e.copy)
                    }
                }))
            }
            _t.propTypes = {
                colorScheme: I.a.colorScheme,
                copy: M.a.string
            }, _t.defaultProps = {
                copy: ""
            };
            var Et = a("./js/libs/Languages.js");

            function kt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function St(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function xt() {
                return (xt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ct(e) {
                return e["story-subsections"].reduce((function(e, t) {
                    var a = Tt(t),
                        r = e.length;
                    return r && !a ? e[r - 1].content += t.content : e.push(xt({}, t)), e
                }), [])
            }

            function Pt(e) {
                var t = 0;
                return e["story-subsections"].forEach((function(e) {
                    var a;
                    a = e, !1 === l.a.isNil(a.title) && t++
                })), t
            }

            function Tt(e) {
                return !1 === l.a.isNil(e.title) || !1 === l.a.isNil(e["icon-image"])
            }
            var wt = function(e) {
                var t, a;

                function r() {
                    for (var t, a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                    return St(kt(t = e.call.apply(e, [this].concat(r)) || this), "state", {
                        isMobileMenuOpen: !1,
                        lastScrollY: 0,
                        scrollYDiff: 0
                    }), St(kt(t), "sectionFromIndex", (function(e) {
                        return Object.assign({
                            "background-image": {},
                            "story-subsections": [],
                            "featured-champions": []
                        }, t.props.data.sections[e])
                    })), St(kt(t), "selectedSectionIndex", (function() {
                        return t.props.match.params.chapter - 1 || 0
                    })), St(kt(t), "nextSection", (function() {
                        var e = t.selectedSectionIndex() + 1;
                        return t.props.data.sections.length > e ? t.sectionFromIndex(e) : null
                    })), St(kt(t), "_toggleMenu", (function(e) {
                        "boolean" != typeof e && (e = !t.state.isMobileMenuOpen), t.setState({
                            isMobileMenuOpen: e
                        })
                    })), t
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.getDerivedStateFromProps = function(e, t) {
                    var a, r;
                    return a = e.data.pageTitle, r = e.translations, "champion" === e.match.params.key ? Object(w.c)(a, Object(D.a)(r, "meta-title-biography"), Object(D.a)(r, "explore-title")) : Object(w.c)(U()(a), Object(D.a)(r, "explore-title")), {
                        lastScrollY: e.scrollY,
                        scrollYDiff: e.scrollY - t.lastScrollY
                    }
                };
                var o = r.prototype;
                return o.componentDidMount = function() {
                    window.setTimeout((function() {
                        var e = Object(P.b)(),
                            t = Object(P.d)(e.experimentId);
                        Object(P.h)(t)
                    }), 1e3), Object(P.f)("Stories", "Page Load (Color set to)", this.props.colorScheme)
                }, o.componentWillUnmount = function() {
                    null
                }, o.render = function() {
                    var e = this,
                        t = this.props,
                        a = (t.innerWidth, t.innerHeight, t.scrollY),
                        r = "the-lure" === this.props.data.slug ? "/" + Object(Et.c)() + "/odyssey/" : null,
                        o = this.props.data,
                        n = o.slug,
                        s = o.pageTitle,
                        c = o.pageSubtitle,
                        p = (o.sectionTitle, o.sections, o.status),
                        d = "mobile" === this.props.breakpoint,
                        m = Object(L.b)(),
                        u = this.sectionFromIndex(this.selectedSectionIndex()),
                        h = this.nextSection(),
                        g = u.title || s,
                        f = u.subtitle || c,
                        y = u["background-image"] || {},
                        v = null;
                    if (h) {
                        var b = Ct(h);
                        v = h.title || l.a.get(b, "[0].title", null) || s
                    }
                    var j, _, E = 0 === (q[this.props.data.staticLinkId] || []).length,
                        k = 0 === this.props.data.relatedItems.length,
                        S = l.a.size(u["featured-champions"]) > 0,
                        x = E && k && S,
                        C = $e.a[m],
                        P = this.props.data.customBioImage ? $e.a.customBioImage : null,
                        w = Ct(u),
                        R = w.length > 1;
                    (l.a.get(w, "[0].content") || "").length;
                    R && (j = i.a.createElement(it, {
                        colorScheme: m,
                        containerRef: this.container,
                        toggle: this._toggleMenu
                    })), _ = i.a.createElement(Le, {
                        className: $e.a.progressBar,
                        colorScheme: m
                    });
                    var O, I = i.a.createElement(L.a, {
                        className: N()($e.a.colorButton, C, !d && r && $e.a.addSeparator),
                        colorScheme: m
                    });
                    r && (O = i.a.createElement(ae, {
                        to: r,
                        className: $e.a.backButton,
                        colorScheme: m
                    }));
                    var H, M = i.a.createElement("div", {
                            className: N()($e.a.lockup, C)
                        }, i.a.createElement("div", {
                            className: $e.a.smallTag
                        }, i.a.createElement(D.b, {
                            id: "story-category-label",
                            default: "Short Story"
                        })), i.a.createElement("div", {
                            className: $e.a.smallTitle
                        }, g), !!f && i.a.createElement("div", {
                            className: $e.a.smallSubtitle
                        }, f), j, !R && _),
                        F = d && this.state.isMobileMenuOpen;
                    return d && a && this.state.scrollYDiff < 0 && (H = i.a.createElement(pt, {
                        colorScheme: m,
                        key: "bottomMenu"
                    }, O || i.a.createElement("div", null), Pt(u) > 0 && i.a.createElement(Fe, {
                        colorScheme: m,
                        onClick: this._toggleMenu
                    }), I)), i.a.createElement("div", {
                        className: N()($e.a.root, C, P),
                        style: {
                            paddingBottom: h ? 0 : 60
                        },
                        ref: function(t) {
                            return e.container = t
                        }
                    }, i.a.createElement(ut, {
                        backgroundImage: y,
                        colorScheme: m,
                        isFaded: !!a
                    }), i.a.createElement(B.a, {
                        shouldRecord: "loaded" === p,
                        identifier: "Story_" + n
                    }), i.a.createElement("div", {
                        className: $e.a.portal,
                        id: "PhotoSwipePortal"
                    }), !d && i.a.createElement(Ye, {
                        isFaded: !a
                    }, M, i.a.createElement("div", {
                        className: $e.a.bottomRow
                    }, O, I)), d && _, i.a.createElement(Qe, {
                        isFaded: !!a,
                        subtitle: f,
                        title: g
                    }), d && i.a.createElement("div", {
                        className: $e.a.backButtonHolder
                    }, O), i.a.createElement("div", {
                        className: N()($e.a.content, !a && $e.a.faded)
                    }, w.map((function(t, a) {
                        var r = null;
                        Tt(t) ? r = i.a.createElement(yt, {
                            title: t.title,
                            subtitle: t.subtitle,
                            badge: t["icon-image"],
                            colorScheme: m,
                            portalIdentifier: "PhotoSwipePortal"
                        }) : a || (r = i.a.createElement("div", {
                            className: N()($e.a.noHeader, C)
                        }, i.a.createElement("div", {
                            className: $e.a.noHeaderTitle
                        }, g), !!f && i.a.createElement("div", {
                            className: $e.a.noHeaderSubtitle
                        }, f)));
                        var o = 0 === a,
                            n = a === w.length - 1;
                        return i.a.createElement(qe, {
                            key: a,
                            colorScheme: m
                        }, r, i.a.createElement(_t, {
                            copy: t.content,
                            colorScheme: m,
                            catchIdentifier: o ? "CatchElement" : null
                        }), n ? i.a.createElement(de, {
                            colorScheme: m,
                            pageId: e.props.data.staticLinkId
                        }) : null)
                    })), i.a.createElement(we, {
                        colorScheme: m,
                        relatedItems: this.props.data.relatedItems,
                        staticLinkId: "loaded" === p ? this.props.data.staticLinkId : null
                    }), !!h && i.a.createElement(X, {
                        slug: n,
                        chapter: this.selectedSectionIndex() + 2,
                        background: h["background-image"] || y,
                        title: v
                    })), x && i.a.createElement(A.a, {
                        champions: u["featured-champions"]
                    }), i.a.createElement(T.TransitionGroup, {
                        component: null
                    }, F && i.a.createElement(G.Scoot, {
                        direction: "bottom",
                        key: "mobileMenu"
                    }, i.a.createElement("nav", {
                        className: N()($e.a.mobileMenu, C)
                    }, i.a.createElement(ne, {
                        className: $e.a.closeButton,
                        colorScheme: m,
                        onClick: this._toggleMenu
                    }), M)), H && i.a.createElement(G.Scoot, {
                        direction: "bottom",
                        key: "bottomMenu"
                    }, H)))
                }, r
            }(i.a.Component);
            St(wt, "propTypes", {
                colorScheme: I.a.colorScheme,
                data: M.a.object,
                innerHeight: M.a.number.isRequired,
                innerWidth: M.a.number.isRequired,
                params: M.a.shape({
                    key: M.a.any,
                    chapter: M.a.any
                }),
                scrollY: M.a.number.isRequired,
                translations: M.a.object
            });
            var Rt = function(e) {
                    return i.a.createElement(G.ResizeListener, null, (function(t, a) {
                        return i.a.createElement(G.ScrollListener, null, (function(r, o) {
                            return i.a.createElement(wt, xt({}, e, {
                                innerWidth: t,
                                innerHeight: a,
                                scrollY: o
                            }))
                        }))
                    }))
                },
                Bt = a("./js/libs/Themes.js"),
                Ot = a("./js/display/components/Loader/Loader.js"),
                Nt = a("./js/display/components/Buttons/ActionButton.js"),
                It = function(e) {
                    return e && !1 === e.includes("/story/") ? function(e) {
                        e.preventDefault(), Object(w.a)()
                    } : function(e) {
                        return e
                    }
                };

            function Lt(e) {
                var t = It();
                return i.a.createElement(Y.a, {
                    className: e.className,
                    to: e.goBackLink,
                    onClick: t
                }, e.children)
            }
            Lt.propTypes = {
                className: M.a.string,
                goBackLink: M.a.string
            };
            var Dt = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/DynamicBackButtonHextech/DynamicBackButtonHextech.scss"),
                Ht = a.n(Dt);

            function Mt(e) {
                var t = "light" === e.colorScheme ? "rgba(51, 51, 51, .8)" : "#937341";
                return i.a.createElement(Lt, {
                    className: e.className,
                    goBackLink: e.goBackLink
                }, i.a.createElement(Nt.a, {
                    action: "close",
                    className: N()(Ht.a.root, e.colorScheme),
                    color: t
                }))
            }
            Mt.propTypes = {
                className: M.a.string,
                colorScheme: I.a.colorScheme,
                goBackLink: M.a.string
            };
            var At = a("./js/display/pages/ProseReader/shared.scss"),
                Gt = parseInt(a.n(At).a.navOnSideMin),
                Ft = function(e) {
                    return void 0 === e && (e = window.innerWidth), e < Gt
                },
                Ut = a("../node_modules/react-textfit/lib/index.js"),
                Wt = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/StarGuardianHero/StarGuardianHero.scss"),
                qt = a.n(Wt);

            function Vt(e) {
                return i.a.createElement("div", {
                    className: qt.a.root
                }, i.a.createElement(Ut.Textfit, {
                    mode: "single",
                    forceSingleModeWidth: !1,
                    className: qt.a.textFit
                }, e.title))
            }
            Vt.propTypes = {
                title: M.a.string
            };
            var zt = a("./js/display/components/ProgressBar/ProgressBar.js"),
                Yt = a("./js/libs/Strings.js"),
                Zt = a("./js/libs/Views.js"),
                Jt = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/DynamicBackButtonStarGuardian/DynamicBackButtonStarGuardian.scss"),
                Kt = a.n(Jt);

            function Qt(e) {
                return i.a.createElement(Lt, {
                    className: e.className,
                    goBackLink: e.goBackLink
                }, i.a.createElement("div", {
                    className: e.colorScheme
                }, i.a.createElement("svg", {
                    width: "17px",
                    height: "17px",
                    className: Kt.a.svg
                }, i.a.createElement("path", {
                    className: Kt.a.path,
                    fillRule: "evenodd",
                    fill: "rgb(233, 233, 255)",
                    d: "M1.692,-0.010 L17.010,15.308 L15.308,17.010 L-0.010,1.692 L1.692,-0.010 Z"
                }), i.a.createElement("path", {
                    className: Kt.a.path,
                    fillRule: "evenodd",
                    fill: "rgb(233, 233, 255)",
                    d: "M0.065,15.248 L15.248,0.065 L16.935,1.752 L1.752,16.935 L0.065,15.248 Z"
                }))))
            }
            Qt.propTypes = {
                className: M.a.string,
                colorScheme: I.a.colorScheme,
                goBackLink: M.a.string
            };
            var Xt = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/LoreScrollNavBar/MobileDropdown/MobileDropdown.scss"),
                $t = a.n(Xt);

            function ea(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var ta = function(e) {
                return i.a.createElement("li", {
                    className: N()($t.a.chapter, $t.a.chapterActive)
                }, i.a.createElement("img", {
                    src: "/images/chapterIndicator.png",
                    alt: "Chapter Indicator"
                }), e.sectionTitle, " ", i.a.createElement("span", {
                    className: $t.a.chapterColor
                }, l.a.padStart(e.chapter, 2, "0")))
            };
            ta.propTypes = {
                chapter: M.a.any,
                sectionTitle: M.a.node
            };
            var aa = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    return ea(function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(a = e.call(this, t) || this), "toggleDropdown", (function() {
                        a.setState({
                            open: !a.state.open
                        })
                    })), a.state = {
                        open: !1
                    }, a
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    var e = this,
                        t = "light" === this.props.colorScheme ? $t.a.light : $t.a.dark,
                        a = this.state.open ? $t.a.open : null;
                    return i.a.createElement("div", {
                        className: N()($t.a.root, a, t)
                    }, i.a.createElement("h3", {
                        onClick: this.toggleDropdown,
                        className: $t.a.chapter
                    }, i.a.createElement("div", {
                        className: $t.a.downCarret
                    }, i.a.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "8",
                        height: "7.031",
                        viewBox: "0 0 8 7.031"
                    }, i.a.createElement("path", {
                        d: "M1241.44,377h7.11a0.437,0.437,0,0,1,.38.676c-0.15.269-3.28,5.652-3.54,6.111a0.442,0.442,0,0,1-.77,0c-0.2-.331-3.34-5.734-3.56-6.125A0.439,0.439,0,0,1,1241.44,377Z",
                        transform: "translate(-1241 -377)"
                    }))), this.props.sectionTitle, " ", i.a.createElement("span", {
                        className: $t.a.chapterColor
                    }, l.a.padStart(this.props.activeChapter, 2, "0"))), i.a.createElement("ul", {
                        onClick: this.toggleDropdown
                    }, this.props.chapters.map((function(t, a) {
                        return a + 1 === e.props.activeChapter ? i.a.createElement(ta, {
                            key: a,
                            chapter: a + 1,
                            sectionTitle: e.props.sectionTitle
                        }) : i.a.createElement(Y.a, {
                            key: a,
                            to: t
                        }, i.a.createElement("li", {
                            className: N()($t.a.chapter, $t.a.chapterInactive)
                        }, e.props.sectionTitle, " ", i.a.createElement("span", {
                            className: $t.a.chapterColor
                        }, l.a.padStart(a + 1, 2, "0"))))
                    }))))
                }, r
            }(i.a.Component);
            ea(aa, "propTypes", {
                activeChapter: M.a.number,
                chapters: M.a.array,
                colorScheme: I.a.colorScheme,
                sectionTitle: M.a.string
            });
            var ra = a("../node_modules/raf/index.js"),
                oa = a("./js/libs/Style.js");

            function na(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            Object(ra.polyfill)();
            var sa = Object(oa.a)({
                    transition: "ease .3s opacity"
                }),
                ia = function(e) {
                    var t, a;

                    function r(t) {
                        var a;
                        return na(function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(a = e.call(this, t) || this), "onFrameUpdate", (function() {
                            var e = window.pageYOffset || window.scrollY,
                                t = a.state.pageY,
                                r = Math.abs(e - t),
                                o = a.state.elementTopY;
                            e > t && (o = Math.max(a.state.elementTopY - r, -a.props.elementHeight)), e < t && (o = Math.min(a.state.elementTopY + 1.4 * r, 0)), a.state.pageY === e && a.state.elementTopY === o || a.setState({
                                pageY: e,
                                elementTopY: o
                            })
                        })), a.state = {
                            pageY: 0,
                            elementTopY: -a.props.elementHeight
                        }, a.eventLoop = null, a
                    }
                    a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                    var o = r.prototype;
                    return o.componentDidMount = function() {
                        this.eventLoop = Object(Re.a)(this.onFrameUpdate, {
                            urgent: !0
                        })
                    }, o.componentWillUnmount = function() {
                        Object(Re.b)(this.eventLoop)
                    }, o.getVisibleStyle = function() {
                        return {
                            position: "fixed",
                            opacity: 1,
                            top: this.state.elementTopY
                        }
                    }, o.getHiddenStyle = function() {
                        return {
                            position: "fixed",
                            opacity: 0,
                            top: this.state.elementTopY
                        }
                    }, o.render = function() {
                        var e = this.props,
                            t = e.style,
                            a = e.stayOpen,
                            r = e.className,
                            o = this.state.pageY > this.props.startOffset ? this.getVisibleStyle() : this.getHiddenStyle();
                        !0 === a && ((o = this.getVisibleStyle()).top = 0);
                        var n = Object.assign({}, sa, o, t);
                        return i.a.createElement("div", {
                            style: n,
                            className: r
                        }, this.props.children)
                    }, r
                }(i.a.Component);
            na(ia, "defaultProps", {
                startOffset: 0,
                style: {}
            }), na(ia, "propTypes", {
                children: M.a.node,
                className: M.a.string,
                elementHeight: M.a.number.isRequired,
                startOffset: M.a.number,
                stayOpen: M.a.bool,
                style: M.a.object
            });
            var ca = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/LoreScrollNavBar/LoreScrollNavBar.scss"),
                la = a.n(ca),
                pa = function(e) {
                    return i.a.createElement("svg", {
                        width: "21px",
                        height: "18.5px"
                    }, i.a.createElement("path", {
                        fillRule: "evenodd",
                        fill: "rgb(233, 233, 255)",
                        d: "M-0.000,-0.000 L21.000,-0.000 L21.000,3.000 L-0.000,3.000 L-0.000,-0.000 Z"
                    }), i.a.createElement("path", {
                        fillRule: "evenodd",
                        fill: "rgb(233, 233, 255)",
                        d: "M-0.000,7.000 L21.000,7.000 L21.000,10.000 L-0.000,10.000 L-0.000,7.000 Z"
                    }), i.a.createElement("path", {
                        fillRule: "evenodd",
                        fill: "rgb(233, 233, 255)",
                        d: "M-0.000,14.000 L21.000,14.000 L21.000,17.000 L-0.000,17.000 L-0.000,14.000 Z"
                    }))
                };

            function da(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var ma = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    return da(function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(a = e.call(this, t) || this), "setElementHeight", (function() {
                        if (a.element) {
                            var e = a.element.offsetHeight - 3;
                            "starGuardian" === a.props.theme && (e = a.element.offsetHeight), a.setState({
                                elementHeight: e
                            })
                        }
                    })), a.state = {
                        elementHeight: window.innerWidth < R.a.MobileMax ? 41 : 85,
                        mobileTrackerVisible: !1
                    }, a.element = null, a
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.setElementHeight()
                }, o.componentDidUpdate = function(e) {
                    e.title !== this.props.title && this.setElementHeight()
                }, o.getProgressBar = function() {
                    if (this.props.trackProgress) {
                        var e = N()(la.a.scrollTracker, this.state.mobileTrackerVisible ? la.a.invisible : la.a.visible);
                        return i.a.createElement(zt.a, {
                            className: e
                        })
                    }
                    return null
                }, o.getMobileBackButton = function(e, t) {
                    var a = this,
                        r = e ? la.a.visible : null,
                        o = i.a.createElement("svg", {
                            width: "9px",
                            height: "18px"
                        }, i.a.createElement("path", {
                            fillRule: "evenodd",
                            stroke: "rgb(233, 233, 255)",
                            strokeWidth: "2px",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            fill: "none",
                            d: "M9.769,17.981 L1.003,9.466 L9.727,0.992 "
                        }), i.a.createElement("path", {
                            fill: "none",
                            stroke: "rgb(233, 233, 255)",
                            strokeWidth: "2px",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            d: "M9.769,17.981 L1.003,9.466 L9.727,0.992 "
                        }));
                    return i.a.createElement("div", {
                        className: N()(la.a.MobileBackButton, r),
                        onClick: function() {
                            return a.setState({
                                mobileTrackerVisible: !a.state.mobileTrackerVisible
                            })
                        }
                    }, o, " ", t)
                }, o.getTracker = function() {
                    var e = this;
                    return this.props.tracker ? i.a.cloneElement(this.props.tracker, {
                        visible: this.state.mobileTrackerVisible,
                        requestClose: function() {
                            return e.setState({
                                mobileTrackerVisible: !1
                            })
                        }
                    }) : null
                }, o.render = function() {
                    var e = this,
                        t = this.props,
                        a = t.colorScheme,
                        r = t.theme,
                        o = U()(this.props.title),
                        n = Object(Yt.d)(o),
                        s = this.props.chapters.map((function(t, a) {
                            return R.e.storyDetail(e.props.slug, a + 1)
                        })),
                        c = "light" === a ? la.a.light : la.a.dark,
                        l = la.a[r],
                        p = .5 * (window.innerHeight || document.documentElement.clientHeight);
                    return i.a.createElement(ia, {
                        style: {
                            width: "100%",
                            zIndex: 1e4
                        },
                        startOffset: p,
                        elementHeight: this.state.elementHeight,
                        stayOpen: this.state.mobileTrackerVisible
                    }, i.a.createElement("div", {
                        className: N()(la.a.root, c, l),
                        ref: function(t) {
                            return e.element = t
                        }
                    }, this.getMobileBackButton(this.state.mobileTrackerVisible, o), i.a.createElement("div", {
                        className: la.a.left
                    }, i.a.createElement(Zt.a, {
                        condition: this.props.tracker
                    }, i.a.createElement("div", {
                        className: la.a.selectorVisible,
                        onClick: function() {
                            return e.setState({
                                mobileTrackerVisible: !e.state.mobileTrackerVisible
                            })
                        }
                    }, i.a.createElement(pa, null))), this.props.chapters.length > 1 ? i.a.createElement(aa, {
                        chapters: s,
                        activeChapter: this.props.activeChapter,
                        sectionTitle: this.props.sectionTitle,
                        colorScheme: a
                    }) : null, this.getTracker()), i.a.createElement("div", {
                        className: la.a.center
                    }, i.a.createElement("h1", null, n[0], " ", i.a.createElement("span", {
                        className: la.a.alt
                    }, n[1]))), i.a.createElement("div", {
                        className: la.a.right
                    }, i.a.createElement(L.a, {
                        className: la.a.toggleIcon,
                        colorScheme: a
                    }), "starGuardian" === r ? i.a.createElement(Qt, {
                        goBackLink: this.props.goBackLink,
                        colorScheme: a
                    }) : i.a.createElement(Mt, {
                        goBackLink: this.props.goBackLink,
                        colorScheme: a
                    })), this.getProgressBar()))
                }, r
            }(i.a.Component);
            da(ma, "defaultProps", {
                chapters: []
            }), da(ma, "propTypes", {
                activeChapter: M.a.number,
                chapters: M.a.array,
                colorScheme: I.a.colorScheme,
                goBackLink: M.a.string,
                sectionTitle: M.a.string,
                slug: M.a.string,
                title: M.a.string
            });
            var ua = a("./js/display/components/Text/MinutesToReadText/MinutesToReadText.js"),
                ha = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/LoreHero/LoreHero.scss"),
                ga = a.n(ha),
                fa = function(e) {
                    var t = e.title.split("<br>"),
                        a = e.title.split("<br/>");
                    return (t.length > a.length ? t : a).map((function(t, a) {
                        return i.a.createElement("h1", {
                            key: a,
                            className: N()(e.sizeClass, a % 2 != 0 && ga.a.alt)
                        }, t)
                    }))
                },
                ya = function(e) {
                    var t = l.a.size(e.title) > 30 ? ga.a.large : ga.a.normal,
                        a = Object(Yt.d)(e.title);
                    return e.title && (e.title.includes("<br>") || e.title.includes("<br/>")) ? i.a.createElement(fa, {
                        title: e.title,
                        sizeClass: t
                    }) : i.a.createElement("h1", {
                        className: t
                    }, a[0], " ", i.a.createElement("span", {
                        className: ga.a.alt
                    }, a[1]))
                };
            ya.propTypes = {
                title: M.a.string
            };
            var va = function(e) {
                var t = e.title,
                    a = e.subtitle,
                    r = e.theme,
                    o = e.minutesToRead,
                    n = e.colorScheme;
                return i.a.createElement("div", {
                    className: N()(ga.a.root, ga.a[n], ga.a[r])
                }, i.a.createElement("div", {
                    className: ga.a.loreBorder
                }), i.a.createElement("div", {
                    className: ga.a.loreTitles
                }, i.a.createElement(ua.a, {
                    colorScheme: n,
                    minutes: o,
                    style: {
                        paddingBottom: 6
                    }
                }), i.a.createElement(ya, {
                    title: t
                }), i.a.createElement("h3", null, a)))
            };
            va.propTypes = {
                colorScheme: I.a.colorScheme,
                minutesToRead: M.a.number,
                subtitle: M.a.string,
                theme: M.a.string,
                title: M.a.string
            };
            var ba = va,
                ja = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/LoreActs/LoreActs.scss"),
                _a = a.n(ja),
                Ea = function(e) {
                    var t = e.isFirst ? _a.a.first : e.isLast ? _a.a.last : null;
                    return i.a.createElement("div", {
                        className: N()(_a.a.root, _a.a[e.colorScheme], _a.a[e.theme], t)
                    }, i.a.createElement("div", {
                        className: _a.a.loreActsBorder
                    }), e.children)
                };
            Ea.propTypes = {
                children: M.a.oneOfType([M.a.arrayOf(M.a.node), M.a.node]),
                colorScheme: I.a.colorScheme,
                isFirst: M.a.bool,
                theme: M.a.string
            };
            var ka = Ea,
                Sa = a("./js/libs/Scroll.js"),
                xa = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/FloatingSectionTracker/FloatingSectionTracker.scss"),
                Ca = a.n(xa);

            function Pa(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Ta(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var wa = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    return Ta(Pa(a = e.call(this, t) || this), "getCatchPoint", (function() {
                        return l.a.isNil(a.catchIdentifier) && (a.catchIdentifier = document.querySelector("#CatchElement > p")), a.catchIdentifier ? a.catchIdentifier.getBoundingClientRect().top + window.scrollY - R.c : .6 * window.innerHeight
                    })), Ta(Pa(a), "onScroll", (function() {
                        var e = a.getTrackingPoints(),
                            t = window.innerHeight / 2,
                            r = 0,
                            o = -1 / 0;
                        e.forEach((function(e, a) {
                            var n = e.distanceToTop - t;
                            n > o && n <= 0 && (r = a, o = n)
                        }));
                        var n = a.getCatchPoint(),
                            s = window.scrollY >= n + 30,
                            i = window.scrollY > document.body.offsetHeight - (window.innerHeight + 300);
                        a.setState({
                            points: e,
                            closestIdx: r,
                            fixed: s,
                            hideAtFooter: i
                        })
                    })), Ta(Pa(a), "getTrackingPoints", (function() {
                        var e = at(a.props.containerRef);
                        return l.a.map(e, (function(e) {
                            var t = e.getBoundingClientRect().top,
                                r = e.innerText,
                                o = null;
                            e.previousSibling && (o = e.previousSibling.innerText, l.a.size(o) <= 1 && (o = null));
                            var n = t + window.scrollY;
                            return {
                                title: r,
                                subtitle: o,
                                anchor: e.id,
                                onClick: function() {
                                    a.props.requestClose(), Object(et.a)(0, n - 300, {
                                        duration: 500
                                    })
                                },
                                distanceToTop: t
                            }
                        }))
                    })), a.state = {
                        points: [],
                        closestIdx: 0,
                        fixed: !1,
                        hideAtFooter: !1
                    }, a.scrollListener = null, a.catchIdentifier = null, a
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.scrollListener = Object(Re.a)(this.onScroll, {
                        urgent: !0
                    })
                }, o.UNSAFE_componentWillUpdate = function(e) {
                    Ft() ? !0 === this.props.visible && !1 === e.visible ? Object(Sa.a)(!1) : !1 === this.props.visible && !0 === e.visible && Object(Sa.a)(!0) : Object(Sa.a)(!1)
                }, o.componentDidUpdate = function() {
                    if (0 === this.state.points.length) {
                        var e = this.getTrackingPoints();
                        e.length > 0 && this.setState({
                            points: e
                        }), this.catchIdentifier = null
                    }
                }, o.componentWillUnmount = function() {
                    this.catchIdentifier = null, Object(Re.b)(this.scrollListener)
                }, o.render = function() {
                    var e = this,
                        t = this.state.points,
                        a = this.props.visible ? Ca.a.visible : Ca.a.invisible,
                        r = this.state.fixed ? Ca.a.fixed : null,
                        o = this.state.hideAtFooter ? Ca.a.hideAtFooter : null,
                        n = Ca.a[this.props.theme],
                        s = N()(Ca.a.root, a, r, o, n),
                        c = {};
                    return null === r && (c = {
                        top: this.getCatchPoint()
                    }), i.a.createElement("div", {
                        className: s,
                        style: c
                    }, i.a.createElement("ol", null, t.map((function(t, a) {
                        var r = t.title,
                            o = t.subtitle,
                            n = t.anchor,
                            s = t.onClick,
                            c = a === e.state.closestIdx,
                            l = a <= e.state.closestIdx,
                            p = c ? Ca.a.active : null,
                            d = l ? Ca.a.viewed : null;
                        return i.a.createElement("li", {
                            className: N()(p, d),
                            key: n + "_" + a,
                            onClick: s
                        }, i.a.createElement(Zt.a, {
                            condition: o
                        }, i.a.createElement("h4", {
                            className: Ca.a.subtitle
                        }, o, ":")), i.a.createElement("h3", {
                            className: Ca.a.title
                        }, r))
                    }))))
                }, r
            }(i.a.Component);
            Ta(wa, "defaultProps", {
                requestClose: function() {
                    return null
                },
                visible: !1
            }), Ta(wa, "propTypes", {
                containerRef: M.a.object,
                visible: M.a.bool
            });
            var Ra = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/ProseReader_DEPRECATED.scss"),
                Ba = a.n(Ra),
                Oa = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/ActHero/ActHero.scss"),
                Na = a.n(Oa);
            var Ia = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    var e = this.props.badge || {},
                        t = (e.uri, "full"),
                        a = l.a.isNil(this.props.title) && "starGuardian" === this.props.theme,
                        r = l.a.isNil(this.props.title) && "project" === this.props.theme;
                    (a || r) && (t = "small");
                    var o = null;
                    if (this.props.badge) {
                        o = i.a.createElement(ht.b, {
                            className: Na.a.LightBoxImage,
                            image: e,
                            maxWidth: 1400,
                            portalIdentifier: this.props.portalIdentifier
                        });
                        var n = "starGuardian" === this.props.theme && "small" === t,
                            s = "project" === this.props.theme;
                        (n || s) && (o = i.a.createElement("div", {
                            className: Na.a.starGuardianFrame
                        }, o, i.a.createElement("div", {
                            className: Na.a.markTL
                        }), i.a.createElement("div", {
                            className: Na.a.markTR
                        }), i.a.createElement("div", {
                            className: Na.a.markBL
                        }), i.a.createElement("div", {
                            className: Na.a.markBR
                        })))
                    }
                    var c = "light" === this.props.colorScheme ? Na.a.light : Na.a.dark,
                        p = Na.a[this.props.theme],
                        d = "full" === t ? Na.a.full : Na.a.small,
                        m = this.props.isFirst ? Na.a.first : null,
                        u = null;
                    this.props.title && (u = i.a.createElement("h1", {
                        "data-act-hero-title": this.props.title,
                        id: l.a.kebabCase(this.props.title)
                    }, this.props.title));
                    var h = null;
                    return this.props.subtitle && (h = i.a.createElement("h2", null, this.props.subtitle)), i.a.createElement("div", {
                        className: N()(Na.a.root, c, p, d, m)
                    }, o, h, u)
                }, r
            }(i.a.Component);
            ! function(e, t, a) {
                t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a
            }(Ia, "propTypes", {
                badge: M.a.any,
                colorScheme: M.a.string,
                title: M.a.string
            });
            var La = a("./js/display/pages/ProseReader/ProseReader_DEPRECATED/ActCopy/ActCopy.scss"),
                Da = a.n(La),
                Ha = function(e) {
                    var t = Da.a.showFirstLetterEffect,
                        a = ["fr_fr"].includes(Object(Et.c)()),
                        r = e.copy || "";
                    !1 === e.dropCaps ? t = Da.a.hideFirstLetterEffect : a && r.includes("<em>") && (t = Da.a.hideFirstLetterEffect);
                    var o = e.centered ? Da.a.centered : Da.a.left,
                        n = "light" === e.colorScheme ? Da.a.light : Da.a.dark,
                        s = Da.a[e.theme];
                    return i.a.createElement("div", {
                        className: N()(Da.a.root, o, n, s)
                    }, i.a.createElement("p", {
                        id: e.catchIdentifier,
                        className: t,
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    }), e.background ? i.a.createElement("div", {
                        className: Da.a.actBackground,
                        style: {
                            backgroundImage: "url('" + e.background + "')"
                        }
                    }) : null)
                };
            Ha.defaultProps = {
                dropCaps: !0
            }, Ha.propTypes = {
                background: M.a.string,
                centered: M.a.bool,
                colorScheme: I.a.colorScheme,
                copy: M.a.string,
                dropCaps: M.a.bool
            };
            var Ma = Ha;

            function Aa(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Ga(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function Fa() {
                return (Fa = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Ua = null;

            function Wa(e) {
                return e["story-subsections"].reduce((function(e, t) {
                    var a = qa(t),
                        r = e.length;
                    return r && !a ? e[r - 1].content += t.content : e.push(Fa({}, t)), e
                }), [])
            }

            function qa(e) {
                return !1 === l.a.isNil(e.title) || !1 === l.a.isNil(e["icon-image"])
            }
            var Va = function(e) {
                var t, a;

                function r(t) {
                    var a;
                    return Ga(Aa(a = e.call(this, t) || this), "setPageTitle", (function(e, t, a) {
                        "champion" === a ? Object(w.c)(e, Object(D.a)(t, "meta-title-biography"), Object(D.a)(t, "explore-title")) : Object(w.c)(U()(e), Object(D.a)(t, "explore-title"))
                    })), Ga(Aa(a), "sectionFromIndex", (function(e) {
                        return Object.assign({
                            "background-image": {},
                            "story-subsections": [],
                            "featured-champions": []
                        }, a.props.data.sections[e])
                    })), Ga(Aa(a), "selectedSection", (function() {
                        return a.sectionFromIndex(a.selectedSectionIndex())
                    })), Ga(Aa(a), "selectedSectionIndex", (function() {
                        return a.props.match.params.chapter - 1 || 0
                    })), Ga(Aa(a), "nextSection", (function() {
                        var e = a.selectedSectionIndex() + 1;
                        return a.props.data.sections.length > e ? a.sectionFromIndex(e) : null
                    })), a.container = null, a
                }
                a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                var o = r.prototype;
                return o.componentDidMount = function() {
                    this.setPageTitle(this.props.data.pageTitle, this.props.translations, this.props.match.params.key), window.setTimeout((function() {
                        var e = Object(P.b)(),
                            t = Object(P.d)(e.experimentId);
                        Object(P.h)(t)
                    }), 1e3), Object(P.f)("Stories", "Page Load (Color set to)", this.props.colorScheme), "star-guardian-starfall" === this.props.data.slug ? Object(Bt.a)("starGuardian") : "project-of-rats-and-cats-and-neon-mice" === this.props.data.slug && Object(Bt.a)("project")
                }, o.UNSAFE_componentWillReceiveProps = function(e) {
                    this.setPageTitle(e.data.pageTitle, e.translations, e.match.params.key);
                    var t = "star-guardian-starfall";
                    e.data.slug === t && this.props.data.slug !== t && Object(Bt.a)("starGuardian");
                    var a = "project-of-rats-and-cats-and-neon-mice";
                    e.data.slug === a && this.props.data.slug !== a && Object(Bt.a)("project")
                }, o.componentWillUnmount = function() {
                    Ua = null, Object(Bt.a)("default")
                }, o.goBackLink = function() {
                    return Ua || (this.props.lastLocation && !1 === this.props.lastLocation.pathname.includes("/story/") ? Ua = this.props.lastLocation.pathname : "champion" === this.props.match.params.key ? R.e.championDetail(this.props.match.params.chapter) : "faction" === this.props.match.params.key ? "" : R.e.featured())
                }, o.getTheme = function() {
                    var e = this.props.data.slug,
                        t = null;
                    return "star-guardian-starfall" === e ? t = "starGuardian" : "project-of-rats-and-cats-and-neon-mice" === e && (t = "project"), t
                }, o.getNavigation = function(e, t, a, r, o, n, s, c) {
                    var l = i.a.createElement(wa, {
                        containerRef: this.container,
                        visible: !0,
                        theme: c
                    });
                    return Ft() ? i.a.createElement(ma, {
                        slug: e,
                        title: t,
                        chapters: a,
                        sectionTitle: r,
                        activeChapter: o,
                        goBackLink: n,
                        colorScheme: s,
                        tracker: l,
                        trackProgress: !0,
                        theme: c
                    }) : l
                }, o.render = function() {
                    var e = this,
                        t = this.props.data.dropcaps,
                        a = this.props.data,
                        r = a.slug,
                        o = a.pageTitle,
                        n = a.pageSubtitle,
                        s = a.sectionTitle,
                        c = a.sections,
                        p = a.minutesToRead,
                        d = a.status,
                        m = Object(L.b)(),
                        u = this.selectedSection(),
                        h = this.nextSection(),
                        g = u.title || o,
                        f = u.subtitle || n,
                        y = u["background-image"] || {},
                        v = null;
                    if (h) {
                        var b = Wa(h);
                        v = h.title || l.a.get(b, "[0].title", null) || o
                    }
                    var j = 0 === (q[this.props.data.staticLinkId] || []).length,
                        _ = 0 === this.props.data.relatedItems.length,
                        E = l.a.size(u["featured-champions"]) > 0,
                        k = j && _ && E,
                        S = ["shadow-isles-story"].includes(r),
                        x = this.getTheme(),
                        C = Ba.a[m],
                        P = Ba.a[x],
                        T = {
                            starGuardian: "url(/images/starfallBackground.jpg)",
                            project: "url(/images/project_bgTile.jpg)"
                        }[x],
                        w = this.props.data.customBioImage ? Ba.a.customBioImage : null,
                        O = Wa(u),
                        I = (l.a.get(O, "[0].content") || "").length,
                        D = "annie" === r && I < 40,
                        H = D ? Ba.a.specialBioCase : null;
                    return D && (t = !1), i.a.createElement("div", {
                        className: N()(Ba.a.root, C, P, w, H),
                        style: {
                            paddingBottom: h ? 0 : 60,
                            backgroundImage: T
                        },
                        ref: function(t) {
                            return e.container = t
                        }
                    }, i.a.createElement(B.a, {
                        shouldRecord: "loaded" === d,
                        identifier: "Story_" + r
                    }), i.a.createElement(Ot.a, {
                        status: d,
                        errorRedirect: R.e.featured()
                    }), this.getNavigation(r, g, c, s, this.selectedSectionIndex() + 1, this.goBackLink(), m, x), i.a.createElement("div", {
                        id: "PhotoSwipePortal",
                        style: {
                            zIndex: 1e4,
                            position: "relative"
                        }
                    }), i.a.createElement("div", {
                        className: Ba.a.mainBackground
                    }, i.a.createElement(z.a, {
                        className: Ba.a.backgroundImage,
                        src: y.uri,
                        x: y.x,
                        y: y.y,
                        height: y.height,
                        width: y.width,
                        maxHeight: 1400
                    }), i.a.createElement("div", {
                        className: Ba.a.gradient
                    }), i.a.createElement(L.a, {
                        className: Ba.a.toggleOnHeader,
                        colorScheme: m
                    }), "starGuardian" === x ? i.a.createElement(Qt, {
                        className: Ba.a.backButton,
                        goBackLink: this.goBackLink(),
                        colorScheme: m
                    }) : i.a.createElement(Mt, {
                        className: Ba.a.backButton,
                        goBackLink: this.goBackLink(),
                        colorScheme: m
                    })), "starGuardian" === x ? i.a.createElement(Vt, {
                        title: g
                    }) : i.a.createElement(ba, {
                        title: g,
                        subtitle: f,
                        minutesToRead: p,
                        colorScheme: m,
                        theme: x
                    }), O.map((function(a, r) {
                        var o = null;
                        qa(a) && (o = i.a.createElement(Ia, {
                            title: a.title,
                            subtitle: a.subtitle,
                            badge: a["icon-image"],
                            colorScheme: m,
                            isFirst: 0 === r,
                            theme: x,
                            portalIdentifier: "PhotoSwipePortal"
                        }));
                        var n = 0 === r,
                            s = r === O.length - 1;
                        return i.a.createElement(ka, {
                            key: r,
                            colorScheme: m,
                            theme: x,
                            isFirst: n,
                            isLast: s
                        }, o, i.a.createElement(Ma, {
                            copy: a.content,
                            centered: S,
                            colorScheme: m,
                            dropCaps: t,
                            theme: x,
                            catchIdentifier: n ? "CatchElement" : null
                        }), s ? i.a.createElement(de, {
                            colorScheme: m,
                            pageId: e.props.data.staticLinkId
                        }) : null)
                    })), i.a.createElement(we, {
                        colorScheme: m,
                        relatedItems: this.props.data.relatedItems,
                        staticLinkId: "loaded" === d ? this.props.data.staticLinkId : null
                    }), k ? i.a.createElement(A.a, {
                        champions: u["featured-champions"]
                    }) : null, h ? i.a.createElement(X, {
                        slug: r,
                        chapter: this.selectedSectionIndex() + 2,
                        background: h["background-image"] || y,
                        title: v
                    }) : null)
                }, r
            }(i.a.Component);
            Ga(Va, "propTypes", {
                colorScheme: I.a.colorScheme,
                data: M.a.object,
                params: M.a.shape({
                    key: M.a.any,
                    chapter: M.a.any
                }),
                translations: M.a.object
            });
            var za = Object(r.withLastLocation)(Object(o.a)(x((function(e) {
                var t = (e.match.params || {}).key;
                return "project-of-rats-and-cats-and-neon-mice" === t || "star-guardian-starfall" === t ? i.a.createElement(Va, e) : i.a.createElement(Rt, e)
            }), (function(e) {
                return {
                    key: e.match.params.key,
                    chapter: e.match.params.chapter
                }
            }))));
            za = Object(n.a)(za), za = Object(C.a)(za, (function() {
                return Ft() ? "mobile" : "desktop"
            }));
            t.default = za
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/ActCopy/ActCopy.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_3nvd",
                light: "light_2Vi7",
                dark: "dark_1RHo",
                p: "p_1_sJ",
                hr: "hr_1lwX"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/ActHero/ActHero.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_1rVs",
                light: "light_1G5N",
                h1: "h1_1EBp",
                dark: "dark_-GTb",
                h2: "h2_1jlK",
                lightBoxImage: "lightBoxImage_3gRD"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/BackButton/BackButton.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_1tug",
                dark: "dark_2DUr",
                light: "light_JODU"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/Background/Background.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_emyA",
                dark: "dark_3Sdz",
                light: "light_lR1-",
                faded: "faded_2PUv",
                backgroundImage: "backgroundImage_5wQJ",
                splashGradient: "splashGradient_51wv",
                blurryBackgroundImage: "blurryBackgroundImage_3YRH",
                textGradient: "textGradient_1HJ2"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/BottomMenu/BottomMenu.scss": function(e, t, a) {
            e.exports = {
                root: "root_2RgE",
                dark: "dark_355K",
                light: "light_1QZE"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/ChapterNav/ChapterNav.scss": function(e, t, a) {
            e.exports = {
                root: "root_1fz8",
                ol: "ol_2K7q",
                dark: "dark_XjS8",
                li: "li_3ebQ",
                title: "title_BVB0",
                subtitle: "subtitle_2GLJ",
                viewed: "viewed_2UHn",
                active: "active_3RKv",
                light: "light_3Z8f"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/CloseButton/CloseButton.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_3ONS",
                dark: "dark_QPqg",
                light: "light_1jzL"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/HeroText/HeroText.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_1KLQ",
                faded: "faded_KR4G",
                spacer: "spacer_2Nme",
                tag: "tag_Uq65",
                title: "title_121J",
                subtitle: "subtitle_XESa",
                cta: "cta_VVdh"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/LeftMenu/LeftMenu.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_2hOL",
                faded: "faded_33Vo",
                inner: "inner_fkqi"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/LoreActs/LoreActs.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_3Kft"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/OpenButton/OpenButton.scss": function(e, t, a) {
            e.exports = {
                root: "root_4EU2",
                light: "light_1sLD",
                block: "block_1Vjq",
                dark: "dark_-OFV"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/ProgressBar/ProgressBar.scss": function(e, t, a) {
            e.exports = {
                root: "root_27C8",
                light: "light_1d20",
                progressMark: "progressMark_3e5-",
                dark: "dark_3Snc",
                zoomed: "zoomed_g-rO"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/ProseReaderHextech.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_1kvt",
                progressBar: "progressBar_1NJi",
                colorButton: "colorButton_1ECq",
                addSeparator: "addSeparator_whGf",
                backButtonHolder: "backButtonHolder_Z2lo",
                closeButton: "closeButton_3reZ",
                portal: "portal_xUei",
                content: "content_2ybc",
                faded: "faded_3Ijm",
                bottomRow: "bottomRow_2bSH",
                lockup: "lockup_ASnP",
                light: "light_1dbw",
                smallTitle: "smallTitle_163x",
                smallSubtitle: "smallSubtitle_2n21",
                smallTag: "smallTag_luaH",
                dark: "dark_2Rqj",
                mobileMenu: "mobileMenu__ZOW",
                noHeader: "noHeader_yvby",
                noHeaderTitle: "noHeaderTitle_1n0i",
                noHeaderSubtitle: "noHeaderSubtitle_1Rct"
            }
        },
        "./js/display/pages/ProseReader/ProseReaderHextech/TopButton/TopButton.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_IPvR",
                dark: "dark_2IP-",
                light: "light_1UEf"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/ActCopy/ActCopy.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_jCCP",
                light: "light_3xfK",
                project: "project_2fCP",
                dark: "dark_geas",
                starGuardian: "starGuardian_1GMM",
                left: "left_3O7W",
                showFirstLetterEffect: "showFirstLetterEffect_3z9f",
                centered: "centered_2wnY",
                actBackground: "actBackground_3JJi"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/ActHero/ActHero.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_5tZF",
                light: "light_2xiM",
                dark: "dark_3-Eg",
                project: "project_qLm9",
                starGuardianFrame: "starGuardianFrame_1Otp",
                small: "small_3hyc",
                starGuardian: "starGuardian_VHxJ",
                first: "first_1sO5",
                markTL: "markTL_2d-J",
                markTR: "markTR_N6-w",
                markBL: "markBL_19M4",
                markBR: "markBR_3afI",
                LightBoxImage: "LightBoxImage_2nr0"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/DynamicBackButtonHextech/DynamicBackButtonHextech.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_3VRK",
                dark: "dark_3WO4",
                light: "light_2oq3"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/DynamicBackButtonStarGuardian/DynamicBackButtonStarGuardian.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                closeButton: "closeButton_3xx4",
                dark: "dark_XmrV",
                light: "light_1DJC",
                svg: "svg_2q_K",
                path: "path_2KG5"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/FloatingSectionTracker/FloatingSectionTracker.scss": function(e, t, a) {
            e.exports = {
                root: "root_3nkk",
                project: "project_1dXC",
                title: "title_119C",
                viewed: "viewed_2a4y",
                active: "active_1jMP",
                fixed: "fixed_29N5",
                hideAtFooter: "hideAtFooter_ZPJX",
                subtitle: "subtitle_3bz1",
                visible: "visible_I9ZJ",
                invisible: "invisible_2Aqd"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/LoreActs/LoreActs.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_3Pxx",
                dark: "dark_14Rv",
                loreActsBorder: "loreActsBorder_jSNy",
                starGuardian: "starGuardian_2BQp",
                first: "first_31g7",
                project: "project_3ivY"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/LoreHero/LoreHero.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                loreGradient: "loreGradient_2oQ9",
                rightNavButton: "rightNavButton_35Jd",
                loreTitles: "loreTitles_1ZkP",
                root: "root_2Vrv",
                light: "light_2_8w",
                dark: "dark_26T6",
                alt: "alt_1LnK",
                loreBorder: "loreBorder_2Q1d",
                project: "project_MyTb",
                large: "large_NR4i",
                normal: "normal_4hXa"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/LoreScrollNavBar/LoreScrollNavBar.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                center: "center_2NFy",
                right: "right_3Uc7",
                rightNavButton: "rightNavButton_w6JE",
                root: "root_3whW",
                light: "light_fgil",
                alt: "alt_16FJ",
                dark: "dark_j8Dc",
                left: "left_2aH1",
                audioToggle: "audioToggle_2UEy",
                selectorVisible: "selectorVisible_338a",
                toggleIcon: "toggleIcon_1CbR",
                MobileBackButton: "MobileBackButton_3vWx",
                visible: "visible_1XEI",
                scrollTracker: "scrollTracker_2U9O",
                invisible: "invisible_1lTc",
                project: "project_2fMc",
                closeOnHeader: "closeOnHeader_3OCt",
                starGuardian: "starGuardian_1Hgz"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/LoreScrollNavBar/MobileDropdown/MobileDropdown.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_15Lg",
                open: "open_sduR",
                downCarret: "downCarret_1B2e",
                light: "light_3yN_",
                chapter: "chapter_QtW6",
                chapterColor: "chapterColor_1ZuS",
                chapterActive: "chapterActive_187R",
                dark: "dark_rcgM",
                chapterInactive: "chapterInactive_3rQb"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/ProseReader_DEPRECATED.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_2Z86",
                dark: "dark_3j87",
                gradient: "gradient_3ujG",
                backgroundImage: "backgroundImage_wxOU",
                light: "light_29dv",
                toggleOnHeader: "toggleOnHeader_2PCU",
                project: "project_1CRG",
                closeOnHeader: "closeOnHeader_T1DW",
                starGuardian: "starGuardian_1OEx",
                mainBackground: "mainBackground_38We",
                audioOnHeader: "audioOnHeader_1D_m",
                backButton: "backButton_3k53",
                specialBioCase: "specialBioCase_3USG",
                customBioImage: "customBioImage_3MQ7"
            }
        },
        "./js/display/pages/ProseReader/ProseReader_DEPRECATED/StarGuardianHero/StarGuardianHero.scss": function(e, t, a) {
            e.exports = {
                root: "root_1QAZ",
                textFit: "textFit_1qgr"
            }
        },
        "./js/display/pages/ProseReader/RelatedItems/RelatedItems.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px",
                root: "root_GXE4",
                items: "items_2DVi",
                storyPreview: "storyPreview_1Ohv"
            }
        },
        "./js/display/pages/ProseReader/shared.scss": function(e, t, a) {
            e.exports = {
                navOnSideMin: "1200px"
            }
        },
        "./js/libs/Themes.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return o
            }));
            var r = a("./js/Globals.js"),
                o = function(e) {
                    r.f.emitter.emit("themeUpdate", e)
                }
        },
        "./js/libs/UniqueID.js": function(e, t, a) {
            "use strict";
            var r = -1;
            t.a = function() {
                return "universe-" + (++r).toString(36)
            }
        },
        "./js/stores/champions/ChampionDetailDataWrapper.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/react/index.js"),
                o = a.n(r),
                n = a("./js/stores/champions/ChampionStore.js"),
                s = a("./js/stores/GenericDataWrapper.js");

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.a = function(e, t) {
                return function(a) {
                    var r, s;

                    function c(e) {
                        return a.call(this, e, "data", n.a, (function(e) {
                            return n.a.getChampion(e)
                        }), t) || this
                    }
                    return s = a, (r = c).prototype = Object.create(s.prototype), r.prototype.constructor = r, r.__proto__ = s, c.prototype.render = function() {
                        return o.a.createElement(e, i({}, this.state, this.props))
                    }, c
                }(s.a)
            }
        },
        "./js/stores/champions/ChampionStore.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/lodash/lodash.js"),
                o = a.n(r),
                n = a("../node_modules/deepmerge/dist/cjs.js"),
                s = a.n(n),
                i = a("./js/stores/BaseEmitter.js"),
                c = a("./js/stores/AppDispatcher.js"),
                l = a("./js/stores/StoreConstants.js"),
                p = a("./js/libs/Strings.js"),
                d = a("./js/stores/GenericResolver.js"),
                m = new(function() {
                    function e() {}
                    var t = e.prototype;
                    return t.getChampions = function() {
                        var e = Object(l.e)();
                        Object(d.a)(e, l.t.RECIEVE_CHAMPIONS, "Champion Browse", {
                            champions: []
                        }, null, (function(e) {
                            return "loaded" === e.status && (e.champions = o.a.map(e.champions, (function(e) {
                                return e.simple = Object(p.c)(e.name), e
                            }))), e
                        }))
                    }, t.getChampion = function(e) {
                        e = e.toLowerCase();
                        var t = Object(l.f)(e);
                        Object(d.a)(t, l.t.RECIEVE_CHAMPION, "Champion " + e, {}, e, (function(e) {
                            if ("loaded" === e.status) {
                                var t = {
                                    translationId: "champdetail-explorechamps-title",
                                    type: "explore-champions",
                                    champion: e.champion.slug
                                };
                                e.modules.push(t)
                            }
                            return e
                        }))
                    }, e
                }());
            var u = null,
                h = {},
                g = {
                    name: "",
                    subheadline: "",
                    champions: [],
                    status: "loading"
                },
                f = new(function(e) {
                    var t, a;

                    function r() {
                        return e.call(this, "ChampionStore") || this
                    }
                    a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a;
                    var n = r.prototype;
                    return n.getChampions = function() {
                        return (null === u || new Date - u > 12e5) && (m.getChampions(), u = new Date), g
                    }, n.getChampion = function(e) {
                        void 0 === e && (e = ""), e = e.toLowerCase();
                        var t = {
                            name: "...",
                            status: "loading",
                            champion: {
                                video: {},
                                image: {},
                                biography: {},
                                races: [],
                                "related-items": []
                            },
                            "explore-champions": [],
                            "related-champions": [],
                            modules: []
                        };
                        return o.a.isNil(h[e]) ? (m.getChampion(e), h[e] = t) : t = Object.assign({}, t, h[e]), t
                    }, r
                }(i.b));
            c.a.register((function(e) {
                var t;
                switch (e.action) {
                    case l.t.RECIEVE_CHAMPIONS:
                        t = e.contents, g = s()(g, t), f.emit(i.a);
                        break;
                    case l.t.RECIEVE_CHAMPION:
                        ! function(e) {
                            h = s()(h, e)
                        }(e.contents), f.emit(i.a)
                }
            }));
            t.a = f
        },
        "./refactor/src/components/Anchor/Anchor.js": function(e, t, a) {
            "use strict";
            var r = a("../node_modules/react/index.js"),
                o = a.n(r),
                n = a("../node_modules/prop-types/index.js"),
                s = a.n(n),
                i = a("../node_modules/react-router-dom/es/Link.js"),
                c = a("../node_modules/is-url-external/index.js"),
                l = a.n(c);

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var d = function(e) {
                var t = e.href,
                    a = function(e, t) {
                        if (null == e) return {};
                        var a, r, o = {},
                            n = Object.keys(e);
                        for (r = 0; r < n.length; r++) a = n[r], t.indexOf(a) >= 0 || (o[a] = e[a]);
                        return o
                    }(e, ["href"]);
                return l()(t) ? o.a.createElement("a", p({
                    href: t
                }, a)) : o.a.createElement(i.a, p({
                    to: t
                }, a))
            };
            d.propTypes = {
                href: s.a.string.isRequired
            }, t.a = d
        }
    }
]);