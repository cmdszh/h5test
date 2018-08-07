(window._gsQueue || (window._gsQueue = [])).push(function () {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (t, e, i) {
            var s = [].slice,
                r = function (t, e, s) {
                    i.call(this, t, e, s),
                        this._cycle = 0,
                        this._yoyo = !0 === this.vars.yoyo,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._dirty = !0,
                        this.render = r.prototype.render
                },
                n = function (t) {
                    return t.jquery || t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType)
                },
                a = r.prototype = i.to({},
                    .1, {}),
                o = [];
            r.version = "1.10.2",
                a.constructor = r,
                a.kill()._gc = !1,
                r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
                r.getTweensOf = i.getTweensOf,
                r.ticker = i.ticker,
                a.invalidate = function () {
                    return this._yoyo = !0 === this.vars.yoyo,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        i.prototype.invalidate.call(this)
                },
                a.updateTo = function (t, e) {
                    var s, r = this.ratio;
                    e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted) if (e) this._initted = !1;
                    else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var n = this._time;
                        this.render(0, !0, !1),
                            this._initted = !1,
                            this.render(n, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1,
                            this._init();
                        for (var a, o = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c,
                            h.c *= o,
                            h.s = a - h.c,
                            h = h._next
                    }
                    return this
                },
                a.render = function (t, e, i) {
                    var s, r, n, a, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._totalTime,
                        c = this._cycle;
                    if (t >= u ? (this._totalTime = u, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = this._duration + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle-- , this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / this._duration, l = this._easeType, _ = this._easePower, (1 === l || 3 === l && h >= .5) && (h = 1 - h), 3 === l && (h *= 2), 1 === _ ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h), this.ratio = 1 === l ? 1 - h : 2 === l ? h : .5 > this._time / this._duration ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), p === this._time && !i) return void (f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === f && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                        n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)),
                        this._cycle !== c && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o)),
                        r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || o)))
                },
                r.to = function (t, e, i) {
                    return new r(t, e, i)
                },
                r.from = function (t, e, i) {
                    return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        new r(t, e, i)
                },
                r.fromTo = function (t, e, i, s) {
                    return s.startAt = i,
                        s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
                        new r(t, e, s)
                },
                r.staggerTo = r.allTo = function (t, e, a, h, l, _, u) {
                    h = h || 0;
                    var p, f, c, m, d = a.delay || 0,
                        g = [],
                        v = function () {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                                l.apply(u || this, _ || o)
                        };
                    for (t instanceof Array || ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s.call(t, 0))), p = t.length, c = 0; p > c; c++) {
                        f = {};
                        for (m in a) f[m] = a[m];
                        f.delay = d,
                            c === p - 1 && l && (f.onComplete = v),
                            g[c] = new r(t[c], e, f),
                            d += h
                    }
                    return g
                },
                r.staggerFrom = r.allFrom = function (t, e, i, s, n, a, o) {
                    return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        r.staggerTo(t, e, i, s, n, a, o)
                },
                r.staggerFromTo = r.allFromTo = function (t, e, i, s, n, a, o, h) {
                    return s.startAt = i,
                        s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
                        r.staggerTo(t, e, s, n, a, o, h)
                },
                r.delayedCall = function (t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                },
                r.set = function (t, e) {
                    return new r(t, 0, e)
                },
                r.isTweening = function (t) {
                    for (var e, s = i.getTweensOf(t), r = s.length; --r > -1;) if (e = s[r], e._active || e._startTime === e._timeline._time && e._timeline._active) return !0;
                    return !1
                };
            var h = function (t, e) {
                for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(h(n, e)), r = s.length),
                    n = n._next;
                return s
            },
                l = r.getAllTweens = function (e) {
                    return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
                };
            r.killAll = function (t, i, s, r) {
                null == i && (i = !0),
                    null == s && (s = !0);
                var n, a, o, h = l(0 != r),
                    _ = h.length,
                    u = i && s && r;
                for (o = 0; _ > o; o++) a = h[o],
                    (u || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
            },
                r.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var a, o, h, l, _, u = i._tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s(t, 0)), t instanceof Array) for (l = t.length; --l > -1;) r.killChildTweensOf(t[l], e);
                        else {
                            a = [];
                            for (h in u) for (o = u[h].target.parentNode; o;) o === t && (a = a.concat(u[h].tweens)),
                                o = o.parentNode;
                            for (_ = a.length, l = 0; _ > l; l++) e && a[l].totalTime(a[l].totalDuration()),
                                a[l]._enabled(!1, !1)
                        }
                    }
                };
            var _ = function (t, i, s, r) {
                i = !1 !== i,
                    s = !1 !== s,
                    r = !1 !== r;
                for (var n, a, o = l(r), h = i && s && r, _ = o.length; --_ > -1;) a = o[_],
                    (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
            };
            return r.pauseAll = function (t, e, i) {
                _(!0, t, e, i)
            },
                r.resumeAll = function (t, e, i) {
                    _(!1, t, e, i)
                },
                r.globalTimeScale = function (e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || 1e-6, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                },
                a.progress = function (t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                },
                a.totalProgress = function (t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                },
                a.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                },
                a.duration = function (e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                },
                a.totalDuration = function (t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                },
                a.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                },
                a.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                },
                a.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                },
                r
        },
        !0),
        window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
            function (t, e, i) {
                var s = function (t) {
                    e.call(this, t),
                        this._labels = {},
                        this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
                        this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
                        this._sortChildren = !0,
                        this._onUpdate = this.vars.onUpdate;
                    var i, s, r = this.vars;
                    for (s in r) (i = r[s]) instanceof Array && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                    r.tweens instanceof Array && this.add(r.tweens, 0, r.align, r.stagger)
                },
                    r = [],
                    n = function (t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    a = function (t, e, i, s) {
                        t._timeline.pause(t._startTime),
                            e && e.apply(s || t._timeline, i || r)
                    },
                    o = r.slice,
                    h = s.prototype = new e;
                return s.version = "1.10.2",
                    h.constructor = s,
                    h.kill()._gc = !1,
                    h.to = function (t, e, s, r) {
                        return e ? this.add(new i(t, e, s), r) : this.set(t, s, r)
                    },
                    h.from = function (t, e, s, r) {
                        return this.add(i.from(t, e, s), r)
                    },
                    h.fromTo = function (t, e, s, r, n) {
                        return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n)
                    },
                    h.staggerTo = function (t, e, r, a, h, l, _, u) {
                        var p, f = new s({
                            onComplete: l,
                            onCompleteParams: _,
                            onCompleteScope: u
                        });
                        for ("string" == typeof t && (t = i.selector(t) || t), !(t instanceof Array) && t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType) && (t = o.call(t, 0)), a = a || 0, p = 0; t.length > p; p++) r.startAt && (r.startAt = n(r.startAt)),
                            f.to(t[p], e, n(r), p * a);
                        return this.add(f, h)
                    },
                    h.staggerFrom = function (t, e, i, s, r, n, a, o) {
                        return i.immediateRender = 0 != i.immediateRender,
                            i.runBackwards = !0,
                            this.staggerTo(t, e, i, s, r, n, a, o)
                    },
                    h.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
                        return s.startAt = i,
                            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
                            this.staggerTo(t, e, s, r, n, a, o, h)
                    },
                    h.call = function (t, e, s, r) {
                        return this.add(i.delayedCall(0, t, e, s), r)
                    },
                    h.set = function (t, e, s) {
                        return s = this._parseTimeOrLabel(s, 0, !0),
                            null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused),
                            this.add(new i(t, 0, e), s)
                    },
                    s.exportRoot = function (t, e) {
                        t = t || {},
                            null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var r, n, a = new s(t),
                            o = a._timeline;
                        for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next,
                            e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay),
                            r = n;
                        return o.add(a, 0),
                            a
                    },
                    h.add = function (r, n, a, o) {
                        var h, l, _, u, p;
                        if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                            if (r instanceof Array) {
                                for (a = a || "normal", o = o || 0, h = n, l = r.length, _ = 0; l > _; _++)(u = r[_]) instanceof Array && (u = new s({
                                    tweens: u
                                })),
                                    this.add(u, h),
                                    "string" != typeof u && "function" != typeof u && ("sequence" === a ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === a && (u._startTime -= u.delay())),
                                    h += o;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof r) return this.addLabel(r, n);
                            if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                            r = i.delayedCall(0, r)
                        }
                        if (e.prototype.add.call(this, r, n), this._gc && !this._paused && this._time === this._duration && this._time < this.duration()) for (p = this; p._gc && p._timeline;) p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1),
                            p = p._timeline;
                        return this
                    },
                    h.remove = function (e) {
                        if (e instanceof t) return this._remove(e, !1);
                        if (e instanceof Array) {
                            for (var i = e.length; --i > -1;) this.remove(e[i]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    },
                    h._remove = function (t, i) {
                        return e.prototype._remove.call(this, t, i),
                            this._last ? this._time > this._last._startTime && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0,
                            this
                    },
                    h.append = function (t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    },
                    h.insert = h.insertMultiple = function (t, e, i, s) {
                        return this.add(t, e || 0, i, s)
                    },
                    h.appendMultiple = function (t, e, i, s) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                    },
                    h.addLabel = function (t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e),
                            this
                    },
                    h.addPause = function (t, e, i, s) {
                        return this.call(a, ["{self}", e, i, s], this, t)
                    },
                    h.removeLabel = function (t) {
                        return delete this._labels[t],
                            this
                    },
                    h.getLabelTime = function (t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    },
                    h._parseTimeOrLabel = function (e, i, s, r) {
                        var n;
                        if (r instanceof t && r.timeline === this) this.remove(r);
                        else if (r instanceof Array) for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                        if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                        if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                        else {
                            if (- 1 === (n = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                            i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)),
                                e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                        }
                        return Number(e) + i
                    },
                    h.seek = function (t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                    },
                    h.stop = function () {
                        return this.paused(!0)
                    },
                    h.gotoAndPlay = function (t, e) {
                        return this.play(t, e)
                    },
                    h.gotoAndStop = function (t, e) {
                        return this.pause(t, e)
                    },
                    h.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var s, n, a, o, h, l = this._dirty ? this.totalDuration() : this._totalDuration,
                            _ = this._time,
                            u = this._startTime,
                            p = this._timeScale,
                            f = this._paused;
                        if (t >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, t = l + 1e-6) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime > 0) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== _ && this._first || i || h) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= _) for (s = this._first; s && (a = s._next, !this._paused || f);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                                s = a;
                            else for (s = this._last; s && (a = s._prev, !this._paused || f);)(s._active || _ >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                                s = a;
                            this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)),
                                o && (this._gc || (u === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
                        }
                    },
                    h._hasPausedChild = function () {
                        for (var t = this._first; t;) {
                            if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                            t = t._next
                        }
                        return !1
                    },
                    h.getChildren = function (t, e, s, r) {
                        r = r || -9999999999;
                        for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== s && (n[o++] = a), !1 !== t && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))),
                            a = a._next;
                        return n
                    },
                    h.getTweensOf = function (t, e) {
                        for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
                        return n
                    },
                    h._contains = function (t) {
                        for (var e = t.timeline; e;) {
                            if (e === this) return !0;
                            e = e.timeline
                        }
                        return !1
                    },
                    h.shiftChildren = function (t, e, i) {
                        i = i || 0;
                        for (var s, r = this._first,
                            n = this._labels; r;) r._startTime >= i && (r._startTime += t),
                                r = r._next;
                        if (e) for (s in n) n[s] >= i && (n[s] += t);
                        return this._uncache(!0)
                    },
                    h._kill = function (t, e) {
                        if (!t && !e) return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                        return r
                    },
                    h.clear = function (t) {
                        var e = this.getChildren(!1, !0, !0),
                            i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                        return !1 !== t && (this._labels = {}),
                            this._uncache(!0)
                    },
                    h.invalidate = function () {
                        for (var t = this._first; t;) t.invalidate(),
                            t = t._next;
                        return this
                    },
                    h._enabled = function (t, i) {
                        if (t === this._gc) for (var s = this._first; s;) s._enabled(t, !0),
                            s = s._next;
                        return e.prototype._enabled.call(this, t, i)
                    },
                    h.progress = function (t) {
                        return arguments.length ? this.totalTime(this.duration() * t, !1) : this._time / this.duration()
                    },
                    h.duration = function (t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                    },
                    h.totalDuration = function (t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, s = 0,
                                    r = this._last,
                                    n = 999999999999; r;) e = r._prev,
                                        r._dirty && r.totalDuration(),
                                        r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime,
                                        0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(- r._startTime, !1, -9999999999), n = 0),
                                        i = r._startTime + r._totalDuration / r._timeScale,
                                        i > s && (s = i),
                                        r = e;
                                this._duration = this._totalDuration = s,
                                    this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t),
                            this
                    },
                    h.usesFrames = function () {
                        for (var e = this._timeline; e._timeline;) e = e._timeline;
                        return e === t._rootFramesTimeline
                    },
                    h.rawTime = function () {
                        return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                    },
                    s
            },
            !0),
        window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
            function (t, e, i) {
                var s = function (e) {
                    t.call(this, e),
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._cycle = 0,
                        this._yoyo = !0 === this.vars.yoyo,
                        this._dirty = !0
                },
                    r = [],
                    n = new i(null, null, 1, 0),
                    a = function (t) {
                        for (; t;) {
                            if (t._paused) return !0;
                            t = t._timeline
                        }
                        return !1
                    },
                    o = s.prototype = new t;
                return o.constructor = s,
                    o.kill()._gc = !1,
                    s.version = "1.10.2",
                    o.invalidate = function () {
                        return this._yoyo = !0 === this.vars.yoyo,
                            this._repeat = this.vars.repeat || 0,
                            this._repeatDelay = this.vars.repeatDelay || 0,
                            this._uncache(!0),
                            t.prototype.invalidate.call(this)
                    },
                    o.addCallback = function (t, i, s, r) {
                        return this.add(e.delayedCall(0, t, s, r), i)
                    },
                    o.removeCallback = function (t, e) {
                        if (t) if (null == e) this._kill(null, t);
                        else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                        return this
                    },
                    o.tweenTo = function (t, i) {
                        i = i || {};
                        var s, a, o = {
                            ease: n,
                            overwrite: 2,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        };
                        for (s in i) o[s] = i[s];
                        return o.time = this._parseTimeOrLabel(t),
                            a = new e(this, Math.abs(Number(o.time) - this._time) / this._timeScale || .001, o),
                            o.onStart = function () {
                                a.target.paused(!0),
                                    a.vars.time !== a.target.time() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale),
                                    i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
                            },
                            a
                    },
                    o.tweenFromTo = function (t, e, i) {
                        i = i || {},
                            t = this._parseTimeOrLabel(t),
                            i.startAt = {
                                onComplete: this.seek,
                                onCompleteParams: [t],
                                onCompleteScope: this
                            },
                            i.immediateRender = !1 !== i.immediateRender;
                        var s = this.tweenTo(e, i);
                        return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                    },
                    o.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var s, n, a, o, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                            u = this._duration,
                            p = this._time,
                            f = this._totalTime,
                            c = this._startTime,
                            m = this._timeScale,
                            d = this._rawPrevTime,
                            g = this._paused,
                            v = this._cycle;
                        if (t >= _ ? (this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === u && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = u, t = u + 1e-6)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === u && this._rawPrevTime > 0 && !this._locked) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === u && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : (this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = u + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle-- , this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = u - this._time), this._time > u ? (this._time = u, t = u + 1e-6) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== v && !this._locked) {
                            var y = this._yoyo && 0 != (1 & v),
                                T = y === (this._yoyo && 0 != (1 & this._cycle)),
                                x = this._totalTime,
                                w = this._cycle,
                                b = this._rawPrevTime,
                                P = this._time;
                            if (this._totalTime = v * u, v > this._cycle ? y = !y : this._totalTime += u, this._time = p, this._rawPrevTime = 0 === u ? d - 1e-5 : d, this._cycle = v, this._locked = !0, p = y ? 0 : u, this.render(p, e, 0 === u), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), T && (p = y ? u + 1e-6 : -1e-6, this.render(p, !0, !1)), this._locked = !1, this._paused && !g) return;
                            this._time = P,
                                this._totalTime = x,
                                this._cycle = w,
                                this._rawPrevTime = b
                        }
                        if (!(this._time !== p && this._first || i || h)) return void (f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)));
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= p) for (s = this._first; s && (a = s._next, !this._paused || g);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                            s = a;
                        else for (s = this._last; s && (a = s._prev, !this._paused || g);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                            s = a;
                        this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)),
                            o && (this._locked || this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
                    },
                    o.getActive = function (t, e, i) {
                        null == t && (t = !0),
                            null == e && (e = !0),
                            null == i && (i = !1);
                        var s, r, n = [],
                            o = this.getChildren(t, e, i),
                            h = 0,
                            l = o.length;
                        for (s = 0; l > s; s++) r = o[s],
                            r._paused || r._timeline._time >= r._startTime && r._timeline._time < r._startTime + r._totalDuration / r._timeScale && (a(r._timeline) || (n[h++] = r));
                        return n
                    },
                    o.getLabelAfter = function (t) {
                        t || 0 !== t && (t = this._time);
                        var e, i = this.getLabelsArray(),
                            s = i.length;
                        for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
                        return null
                    },
                    o.getLabelBefore = function (t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (t > e[i].time) return e[i].name;
                        return null
                    },
                    o.getLabelsArray = function () {
                        var t, e = [],
                            i = 0;
                        for (t in this._labels) e[i++] = {
                            time: this._labels[t],
                            name: t
                        };
                        return e.sort(function (t, e) {
                            return t.time - e.time
                        }),
                            e
                    },
                    o.progress = function (t) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                    },
                    o.totalProgress = function (t) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                    },
                    o.totalDuration = function (e) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                    },
                    o.time = function (t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                    },
                    o.repeat = function (t) {
                        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                    },
                    o.repeatDelay = function (t) {
                        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                    },
                    o.yoyo = function (t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    },
                    o.currentLabel = function (t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                    },
                    s
            },
            !0),
        function () {
            var t = 180 / Math.PI,
                e = Math.PI / 180,
                i = [],
                s = [],
                r = [],
                n = {},
                a = function (t, e, i, s) {
                    this.a = t,
                        this.b = e,
                        this.c = i,
                        this.d = s,
                        this.da = s - t,
                        this.ca = i - t,
                        this.ba = e - t
                },
                o = function (t, e, i, s) {
                    var r = {
                        a: t
                    },
                        n = {},
                        a = {},
                        o = {
                            c: s
                        },
                        h = (t + e) / 2,
                        l = (e + i) / 2,
                        _ = (i + s) / 2,
                        u = (h + l) / 2,
                        p = (l + _) / 2,
                        f = (p - u) / 8;
                    return r.b = h + (t - h) / 4,
                        n.b = u + f,
                        r.c = n.a = (r.b + n.b) / 2,
                        n.c = a.a = (u + p) / 2,
                        a.b = p - f,
                        o.b = _ + (s - _) / 4,
                        a.c = o.a = (a.b + o.b) / 2,
                        [r, n, a, o]
                },
                h = function (t, e, n, a, h) {
                    var l, _, u, p, f, c, m, d, g, v, y, T, x, w = t.length - 1,
                        b = 0,
                        P = t[0].a;
                    for (l = 0; w > l; l++) f = t[b],
                        _ = f.a,
                        u = f.d,
                        p = t[b + 1].d,
                        h ? (y = i[l], T = s[l], x = .25 * (T + y) * e / (a ? .5 : r[l] || .5), c = u - (u - _) * (a ? .5 * e : 0 !== y ? x / y : 0), m = u + (p - u) * (a ? .5 * e : 0 !== T ? x / T : 0), d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * e, m = u + .5 * (p - u) * e, d = u - (c + m) / 2),
                        c += d,
                        m += d,
                        f.c = g = c,
                        f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a),
                        f.da = u - _,
                        f.ca = g - _,
                        f.ba = P - _,
                        n ? (v = o(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++ ,
                        P = m;
                    f = t[b],
                        f.b = P,
                        f.c = P + .4 * (f.d - P),
                        f.da = f.d - f.a,
                        f.ca = f.c - f.a,
                        f.ba = P - f.a,
                        n && (v = o(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                },
                l = function (t, e, r, n) {
                    var o, h, l, _, u, p, f = [];
                    if (n) for (t = [n].concat(t), h = t.length; --h > -1;)"string" == typeof (p = t[h][e]) && "=" === p.charAt(1) && (t[h][e] = n[e] + Number(p.charAt(0) + p.substr(2)));
                    if (0 > (o = t.length - 2)) return f[0] = new a(t[0][e], 0, 0, t[- 1 > o ? 0 : 1][e]),
                        f;
                    for (h = 0; o > h; h++) l = t[h][e],
                        _ = t[h + 1][e],
                        f[h] = new a(l, 0, 0, _),
                        r && (u = t[h + 2][e], i[h] = (i[h] || 0) + (_ - l) * (_ - l), s[h] = (s[h] || 0) + (u - _) * (u - _));
                    return f[h] = new a(t[h][e], 0, 0, t[h + 1][e]),
                        f
                },
                _ = function (t, e, a, o, _, u) {
                    var p, f, c, m, d, g, v, y, T = {},
                        x = [],
                        w = u || t[0];
                    _ = "string" == typeof _ ? "," + _ + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                        null == e && (e = 1);
                    for (f in t[0]) x.push(f);
                    if (t.length > 1) {
                        for (y = t[t.length - 1], v = !0, p = x.length; --p > -1;) if (f = x[p], Math.abs(w[f] - y[f]) > .05) {
                            v = !1;
                            break
                        }
                        v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                    }
                    for (i.length = s.length = r.length = 0, p = x.length; --p > -1;) f = x[p],
                        n[f] = -1 !== _.indexOf("," + f + ","),
                        T[f] = l(t, f, n[f], u);
                    for (p = i.length; --p > -1;) i[p] = Math.sqrt(i[p]),
                        s[p] = Math.sqrt(s[p]);
                    if (!o) {
                        for (p = x.length; --p > -1;) if (n[f]) for (c = T[x[p]], g = c.length - 1, m = 0; g > m; m++) d = c[m + 1].da / s[m] + c[m].da / i[m],
                            r[m] = (r[m] || 0) + d * d;
                        for (p = r.length; --p > -1;) r[p] = Math.sqrt(r[p])
                    }
                    for (p = x.length, m = a ? 4 : 1; --p > -1;) f = x[p],
                        c = T[f],
                        h(c, e, a, o, n[f]),
                        v && (c.splice(0, m), c.splice(c.length - m, m));
                    return T
                },
                u = function (t, e, i) {
                    e = e || "soft";
                    var s, r, n, o, h, l, _, u, p, f, c, m = {},
                        d = "cubic" === e ? 3 : 2,
                        g = "soft" === e,
                        v = [];
                    if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                    for (p in t[0]) v.push(p);
                    for (l = v.length; --l > -1;) {
                        for (p = v[l], m[p] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof (c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c),
                            g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2),
                            h[f++] = s;
                        for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = h[_],
                            r = h[_ + 1],
                            n = h[_ + 2],
                            o = 2 === d ? 0 : h[_ + 3],
                            h[f++] = c = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                        h.length = f
                    }
                    return m
                },
                p = function (t, e, i) {
                    for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i,
                        m = t.length; --m > -1;) for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = c * _,
                            u = 1 - l,
                            s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l),
                            f = m * i + _ - 1,
                            e[f] = (e[f] || 0) + s * s
                },
                f = function (t, e) {
                    e = e >> 0 || 6;
                    var i, s, r, n, a = [],
                        o = [],
                        h = 0,
                        l = 0,
                        _ = e - 1,
                        u = [],
                        f = [];
                    for (i in t) p(t[i], a, e);
                    for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]),
                        n = s % e,
                        f[n] = h,
                        n === _ && (l += h, n = s / e >> 0, u[n] = f, o[n] = l, h = 0, f = []);
                    return {
                        length: l,
                        lengths: o,
                        segments: u
                    }
                },
                c = window._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    API: 2,
                    global: !0,
                    init: function (t, e, i) {
                        this._target = t,
                            e instanceof Array && (e = {
                                values: e
                            }),
                            this._func = {},
                            this._round = {},
                            this._props = [],
                            this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                        var s, r, n, a, o, h = e.values || [],
                            l = {},
                            p = h[0],
                            c = e.autoRotate || i.vars.orientToBezier;
                        this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]] : null;
                        for (s in p) this._props.push(s);
                        for (n = this._props.length; --n > -1;) s = this._props[n],
                            this._overwriteProps.push(s),
                            r = this._func[s] = "function" == typeof t[s],
                            l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
                            o || l[s] !== h[0][s] && (o = l);
                        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                            var m = f(this._beziers, this._timeRes);
                            this._length = m.length,
                                this._lengths = m.lengths,
                                this._segments = m.segments,
                                this._l1 = this._li = this._s1 = this._si = 0,
                                this._l2 = this._lengths[0],
                                this._curSeg = this._segments[0],
                                this._s2 = this._curSeg[0],
                                this._prec = 1 / this._curSeg.length
                        }
                        if (c = this._autoRotate) for (c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;) for (a = 0; 3 > a; a++) s = c[n][a],
                            this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                        return !0
                    },
                    set: function (e) {
                        var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                            f = this._func,
                            c = this._target;
                        if (this._timeRes) {
                            if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                this._l1 = _[r - 1],
                                    this._li = r,
                                    this._curSeg = u = this._segments[r],
                                    this._s2 = u[this._s1 = this._si = 0]
                            } else if (this._l1 > e && r > 0) {
                                for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                0 === r && this._l1 > e ? this._l1 = 0 : r++ ,
                                    this._l2 = _[r],
                                    this._li = r,
                                    this._curSeg = u = this._segments[r],
                                    this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                                    this._s2 = u[this._si]
                            }
                            if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                this._s1 = u[r - 1],
                                    this._si = r
                            } else if (this._s1 > e && r > 0) {
                                for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                0 === r && this._s1 > e ? this._s1 = 0 : r++ ,
                                    this._s2 = u[r],
                                    this._si = r
                            }
                            o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                        } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0,
                            o = (e - i * (1 / p)) * p;
                        for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r],
                            a = this._beziers[n][i],
                            h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a,
                            this._round[n] && (h = h + (h > 0 ? .5 : -.5) >> 0),
                            f[n] ? c[n](h) : c[n] = h;
                        if (this._autoRotate) {
                            var m, d, g, v, y, T, x, w = this._autoRotate;
                            for (r = w.length; --r > -1;) n = w[r][2],
                                T = w[r][3] || 0,
                                x = !0 === w[r][4] ? 1 : t,
                                a = this._beziers[w[r][0]],
                                m = this._beziers[w[r][1]],
                                a && m && (a = a[i], m = m[i], d = a.a + (a.b - a.a) * o, v = a.b + (a.c - a.b) * o, d += (v - d) * o, v += (a.c + (a.d - a.c) * o - v) * o, g = m.a + (m.b - m.a) * o, y = m.b + (m.c - m.b) * o, g += (y - g) * o, y += (m.c + (m.d - m.c) * o - y) * o, h = Math.atan2(y - g, v - d) * x + T, f[n] ? c[n](h) : c[n] = h)
                        }
                    }
                }),
                m = c.prototype;
            c.bezierThrough = _,
                c.cubicToQuadratic = o,
                c._autoCSS = !0,
                c.quadraticToCubic = function (t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                },
                c._cssRegister = function () {
                    var t = window._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var i = t._internals,
                            s = i._parseToProxy,
                            r = i._setPluginRatio,
                            n = i.CSSPropTween;
                        i._registerComplexSpecialProp("bezier", {
                            parser: function (t, i, a, o, h, l) {
                                i instanceof Array && (i = {
                                    values: i
                                }),
                                    l = new c;
                                var _, u, p, f = i.values,
                                    m = f.length - 1,
                                    d = [],
                                    g = {};
                                if (0 > m) return h;
                                for (_ = 0; m >= _; _++) p = s(t, f[_], o, h, l, m !== _),
                                    d[_] = p.end;
                                for (u in i) g[u] = i[u];
                                return g.values = d,
                                    h = new n(t, "bezier", 0, 0, p.pt, 2),
                                    h.data = p,
                                    h.plugin = l,
                                    h.setRatio = r,
                                    0 === g.autoRotate && (g.autoRotate = !0),
                                    !g.autoRotate || g.autoRotate instanceof Array || (_ = !0 === g.autoRotate ? 0 : Number(g.autoRotate) * e, g.autoRotate = null != p.end.left ? [["left", "top", "rotation", _, !0]] : null != p.end.x && [["x", "y", "rotation", _, !0]]),
                                    g.autoRotate && (o._transform || o._enableTransforms(!1), p.autoRotate = o._target._gsTransform),
                                    l._onInitTween(p.proxy, g, o._tween),
                                    h
                            }
                        })
                    }
                },
                m._roundProps = function (t, e) {
                    for (var i = this._overwriteProps,
                        s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                },
                m._kill = function (t) {
                    var e, i, s = this._props;
                    for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
        }(),
        window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
            function (t, e) {
                var i, s, r, n, a = function () {
                    t.call(this, "css"),
                        this._overwriteProps.length = 0,
                        this.setRatio = a.prototype.setRatio
                },
                    o = {},
                    h = a.prototype = new t("css");
                h.constructor = a,
                    a.version = "1.10.2",
                    a.API = 2,
                    a.defaultTransformPerspective = 0,
                    h = "px",
                    a.suffixMap = {
                        top: h,
                        right: h,
                        bottom: h,
                        left: h,
                        width: h,
                        height: h,
                        fontSize: h,
                        padding: h,
                        margin: h,
                        perspective: h
                    };
                var l, _, u, p, f, c, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /[^\d\-\.]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/,
                    x = /opacity:([^;]*)/,
                    w = /^(rgb|hsl)/,
                    b = /([A-Z])/g,
                    P = /-([a-z])/gi,
                    S = function (t, e) {
                        return e.toUpperCase()
                    },
                    R = /(?:Left|Right|Width)/i,
                    k = /,(?=[^\)]*(?:\(|$))/gi,
                    A = Math.PI / 180,
                    C = 180 / Math.PI,
                    O = {},
                    M = document,
                    D = M.createElement("div"),
                    I = M.createElement("img"),
                    F = a._internals = {
                        _specialProps: o
                    },
                    X = navigator.userAgent,
                    N = function () {
                        var t, e = X.indexOf("Android"),
                            i = M.createElement("div");
                        return u = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (- 1 === e || Number(X.substr(e + 8, 1)) > 3),
                            f = u && 6 > Number(X.substr(X.indexOf("Version/") + 8, 1)),
                            p = -1 !== X.indexOf("Firefox"),
                            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X),
                            c = parseFloat(RegExp.$1),
                            i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>",
                            !!(t = i.getElementsByTagName("a")[0]) && /^0.55/.test(t.style.opacity)
                    }(),
                    L = function (t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    E = function (t) {
                        window.console && console.log(t)
                    },
                    z = "",
                    Y = "",
                    U = function (t, e) {
                        e = e || D;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (Y = 3 === s ? "ms" : i[s], z = "-" + Y.toLowerCase() + "-", Y + t) : null
                    },
                    B = M.defaultView ? M.defaultView.getComputedStyle : function () { },
                    j = a.getStyle = function (t, e, i, s, r) {
                        var n;
                        return N || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || B(t, null)) ? (t = i.getPropertyValue(e.replace(b, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : L(t)
                    },
                    V = function (t, e, i, s, r) {
                        if ("px" === s || !s) return i;
                        if ("auto" === s || !i) return 0;
                        var n, a = R.test(e),
                            o = t,
                            h = D.style,
                            l = 0 > i;
                        return l && (i = -i),
                            "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== s && o.appendChild ? h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || M.body, h[a ? "width" : "height"] = i + s), o.appendChild(D), n = parseFloat(D[a ? "offsetWidth" : "offsetHeight"]), o.removeChild(D), 0 !== n || r || (n = V(t, e, i, s, !0))),
                            l ? -n : n
                    },
                    q = function (t, e, i) {
                        if ("absolute" !== j(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = j(t, "margin" + s, i);
                        return t["offset" + s] - (V(t, e, parseFloat(r), r.replace(y, "")) || 0)
                    },
                    Z = function (t, e) {
                        var i, s, r = {};
                        if (e = e || B(t, null)) if (i = e.length) for (; --i > -1;) r[e[i].replace(P, S)] = e.getPropertyValue(e[i]);
                        else for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style) for (i in e) r[i.replace(P, S)] = e[i];
                        return N || (r.opacity = L(t)),
                            s = vt(t, e, !1),
                            r.rotation = s.rotation * C,
                            r.skewX = s.skewX * C,
                            r.scaleX = s.scaleX,
                            r.scaleY = s.scaleY,
                            r.x = s.x,
                            r.y = s.y,
                            gt && (r.z = s.z, r.rotationX = s.rotationX * C, r.rotationY = s.rotationY * C, r.scaleZ = s.scaleZ),
                            r.filters && delete r.filters,
                            r
                    },
                    W = function (t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : q(t, a), void 0 !== l[a] && (o = new ot(l, a, l[a], o)));
                        if (s) for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    $ = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    G = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    Q = function (t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = $[e],
                            n = r.length;
                        for (i = i || B(t, null); --n > -1;) s -= parseFloat(j(t, "padding" + r[n], i, !0)) || 0,
                            s -= parseFloat(j(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    H = function (t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"),
                            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
                            e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))),
                            s + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    K = function (t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    J = function (t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                    },
                    tt = function (t, e, i, s) {
                        var r, n, a, o;
                        return null == t ? o = e : "number" == typeof t ? o = t * A : (r = 2 * Math.PI, n = t.split("_"), a = Number(n[0].replace(v, "")) * (- 1 === t.indexOf("rad") ? A : 1) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = 0 > a ? a + r : a - r), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a),
                            1e-6 > o && o > -1e-6 && (o = 0),
                            o
                    },
                    et = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    it = function (t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
                            0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    st = function (t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), et[t] ? et[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = it(r + 1 / 3, e, i), t[1] = it(r, e, i), t[2] = it(r - 1 / 3, e, i), t) : (t = t.match(m) || et.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : et.black
                    },
                    rt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in et) rt += "|" + h + "\\b";
                rt = RegExp(rt + ")", "gi");
                var nt = function (t, e, i, s) {
                    if (null == t) return function (t) {
                        return t
                    };
                    var r, n = e ? (t.match(rt) || [""])[0] : "",
                        a = t.split(n).join("").match(g) || [],
                        o = t.substr(0, t.indexOf(a[0])),
                        h = ")" === t.charAt(t.length - 1) ? ")" : "",
                        l = -1 !== t.indexOf(" ") ? " " : ",",
                        _ = a.length,
                        u = _ > 0 ? a[0].replace(m, "") : "";
                    return _ ? r = e ?
                        function (t) {
                            var e, p, f, c;
                            if ("number" == typeof t) t += u;
                            else if (s && k.test(t)) {
                                for (c = t.replace(k, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]);
                                return c.join(",")
                            }
                            if (e = (t.match(rt) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, _ > f--) for (; _ > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                            return o + p.join(l) + l + e + h + (- 1 !== t.indexOf("inset") ? " inset" : "")
                        } : function (t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && k.test(t)) {
                                for (n = t.replace(k, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                                return n.join(",")
                            }
                            if (e = t.match(g) || [], p = e.length, _ > p--) for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h
                        } : function (t) {
                            return t
                        }
                },
                    at = function (t) {
                        return t = t.split(","),
                            function (e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {},
                                    h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    ot = (F._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data,
                            a = n.proxy,
                            o = n.firstMPT; o;) e = a[o.v],
                                o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : 1e-6 > e && e > -1e-6 && (e = 0),
                                o.t[o.p] = e,
                                o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t) for (o = n.firstMPT; o;) {
                            if (i = o.t, i.type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                    i.e = r
                                }
                            } else i.e = i.s + i.xs0;
                            o = o._next
                        }
                    },
                        function (t, e, i, s, r) {
                            this.t = t,
                                this.p = e,
                                this.v = i,
                                this.r = r,
                                s && (s._prev = this, this._next = s)
                        }),
                    ht = (F._parseToProxy = function (t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            f = {},
                            c = i._transform,
                            m = O;
                        for (i._transform = null, O = e, s = _ = i.parse(t, e, s, r), O = m, n && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (l = new ot(s, "s", o, l, s.r), s.c = 0), 1 === s.type)) for (a = s.l; --a > 0;) h = "xn" + a,
                                o = s.p + "_" + h,
                                f[o] = s.data[h],
                                p[o] = s[h],
                                n || (l = new ot(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: l,
                            pt: _
                        }
                    },
                        F.CSSPropTween = function (t, e, s, r, a, o, h, l, _, u, p) {
                            this.t = t,
                                this.p = e,
                                this.s = s,
                                this.c = r,
                                this.n = h || e,
                                t instanceof ht || n.push(this.n),
                                this.r = l,
                                this.type = o || 0,
                                _ && (this.pr = _, i = !0),
                                this.b = void 0 === u ? s : u,
                                this.e = void 0 === p ? s + r : p,
                                a && (this._next = a, a._prev = this)
                        }),
                    lt = a.parseComplex = function (t, e, i, s, r, n, a, o, h, _) {
                        i = i || n || "",
                            a = new ht(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s),
                            s += "";
                        var u, p, f, c, g, v, y, T, x, b, P, S, R = i.split(", ").join(",").split(" "),
                            A = s.split(", ").join(",").split(" "),
                            C = R.length,
                            O = !1 !== l;
                        for ((- 1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(k, ", ").split(" "), A = A.join(" ").replace(k, ", ").split(" "), C = R.length), C !== A.length && (R = (n || "").split(" "), C = R.length), a.plugin = h, a.setRatio = _, u = 0; C > u; u++) if (c = R[u], g = A[u], (T = parseFloat(c)) || 0 === T) a.appendXtra("", T, K(g, T), g.replace(d, ""), O && -1 !== g.indexOf("px"), !0);
                        else if (r && ("#" === c.charAt(0) || et[c] || w.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")",
                            c = st(c),
                            g = st(g),
                            x = c.length + g.length > 6,
                            x && !N && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(A[u]).join("transparent")) : (N || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], x ? "," : S, !0), x && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                        else if (v = c.match(m)) {
                            if (!(y = g.match(d)) || y.length !== v.length) return a;
                            for (f = 0, p = 0; v.length > p; p++) P = v[p],
                                b = c.indexOf(P, f),
                                a.appendXtra(c.substr(f, b - f), Number(P), K(y[p], P), "", O && "px" === c.substr(b + P.length, 2), 0 === p),
                                f = b + P.length;
                            a["xs" + a.l] += c.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + c : c;
                        if (- 1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e),
                            a.xfirst || a
                    },
                    _t = 9;
                for (h = ht.prototype, h.l = h.pr = 0; --_t > 0;) h["xn" + _t] = 0,
                    h["xs" + _t] = "";
                h.xs0 = "",
                    h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
                    h.appendXtra = function (t, e, i, s, r, n) {
                        var a = this,
                            o = a.l;
                        return a["xs" + o] += n && o ? " " + t : t || "",
                            i || 0 === o || a.plugin ? (a.l++ , a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new ht(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                                s: e + i
                            },
                                a.rxp = {},
                                a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                    };
                var ut = function (t, e) {
                    e = e || {},
                        this.p = e.prefix ? U(t) || t : t,
                        o[t] = o[this.p] = this,
                        this.format = e.formatter || nt(e.defaultValue, e.color, e.collapsible, e.multi),
                        e.parser && (this.parse = e.parser),
                        this.clrs = e.color,
                        this.multi = e.multi,
                        this.keyword = e.keyword,
                        this.dflt = e.defaultValue,
                        this.pr = e.priority || 0
                },
                    pt = F._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r = t.split(","),
                            n = e.defaultValue;
                        for (i = i || [n], s = 0; r.length > s; s++) e.prefix = 0 === s && e.prefix,
                            e.defaultValue = i[s] || n,
                            new ut(r[s], e)
                    };
                h = ut.prototype,
                    h.parseComplex = function (t, e, i, s, r, n) {
                        var a, o, h, l, _, u, p = this.keyword;
                        if (this.multi && (k.test(i) || k.test(e) ? (o = e.replace(k, "|").split("|"), h = i.replace(k, "|").split("|")) : p && (o = [e], h = [i])), h) {
                            for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt,
                                i = h[a] = h[a] || this.dflt,
                                p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                            e = o.join(", "),
                                i = h.join(", ")
                        }
                        return lt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                    },
                    h.parse = function (t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(j(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                    },
                    a.registerSpecialProp = function (t, e, i) {
                        pt(t, {
                            parser: function (t, s, r, n, a, o) {
                                var h = new ht(t, r, 0, 0, a, 2, r, !1, i);
                                return h.plugin = o,
                                    h.setRatio = e(t, s, n._tween, r),
                                    h
                            },
                            priority: i
                        })
                    };
                var ft = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    ct = U("transform"),
                    mt = z + "transform",
                    dt = U("transformOrigin"),
                    gt = null !== U("perspective"),
                    vt = function (t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var r, n, o, h, l, _, u, p, f, c, m, d, g, v = i ? t._gsTransform || {
                            skewY: 0
                        } : {
                                skewY: 0
                            },
                            y = 0 > v.scaleX,
                            T = 2e-5,
                            x = 1e5,
                            w = 1e-4 - Math.PI,
                            b = Math.PI - 1e-4,
                            P = gt ? parseFloat(j(t, dt, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                        for (ct ? r = j(t, mt, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) h = Number(n[o]),
                            n[o] = (l = h - (h |= 0)) ? (0 | l * x + (0 > l ? -.5 : .5)) / x + h : h;
                        if (16 === n.length) {
                            var S = n[8],
                                R = n[9],
                                k = n[10],
                                A = n[12],
                                C = n[13],
                                O = n[14];
                            if (v.zOrigin && (O = -v.zOrigin, A = S * O - n[12], C = R * O - n[13], O = k * O + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                                var M, D, I, F, X, N, L, E = n[0],
                                    z = n[1],
                                    Y = n[2],
                                    U = n[3],
                                    B = n[4],
                                    V = n[5],
                                    q = n[6],
                                    Z = n[7],
                                    W = n[11],
                                    $ = v.rotationX = Math.atan2(q, k),
                                    G = w > $ || $ > b;
                                $ && (F = Math.cos(- $), X = Math.sin(- $), M = B * F + S * X, D = V * F + R * X, I = q * F + k * X, S = B * -X + S * F, R = V * -X + R * F, k = q * -X + k * F, W = Z * -X + W * F, B = M, V = D, q = I),
                                    $ = v.rotationY = Math.atan2(S, E),
                                    $ && (N = w > $ || $ > b, F = Math.cos(- $), X = Math.sin(- $), M = E * F - S * X, D = z * F - R * X, I = Y * F - k * X, R = z * X + R * F, k = Y * X + k * F, W = U * X + W * F, E = M, z = D, Y = I),
                                    $ = v.rotation = Math.atan2(z, V),
                                    $ && (L = w > $ || $ > b, F = Math.cos(- $), X = Math.sin(- $), E = E * F + B * X, D = z * F + V * X, V = z * -X + V * F, q = Y * -X + q * F, z = D),
                                    L && G ? v.rotation = v.rotationX = 0 : L && N ? v.rotation = v.rotationY = 0 : N && G && (v.rotationY = v.rotationX = 0),
                                    v.scaleX = (0 | Math.sqrt(E * E + z * z) * x + .5) / x,
                                    v.scaleY = (0 | Math.sqrt(V * V + R * R) * x + .5) / x,
                                    v.scaleZ = (0 | Math.sqrt(q * q + k * k) * x + .5) / x,
                                    v.skewX = 0,
                                    v.perspective = W ? 1 / (0 > W ? -W : W) : 0,
                                    v.x = A,
                                    v.y = C,
                                    v.z = O
                            }
                        } else if (!(gt && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === j(t, "display", e))) {
                            var Q = n.length >= 6,
                                H = Q ? n[0] : 1,
                                K = n[1] || 0,
                                J = n[2] || 0,
                                tt = Q ? n[3] : 1;
                            v.x = n[4] || 0,
                                v.y = n[5] || 0,
                                _ = Math.sqrt(H * H + K * K),
                                u = Math.sqrt(tt * tt + J * J),
                                p = H || K ? Math.atan2(K, H) : v.rotation || 0,
                                f = J || tt ? Math.atan2(J, tt) + p : v.skewX || 0,
                                c = _ - Math.abs(v.scaleX || 0),
                                m = u - Math.abs(v.scaleY || 0),
                                Math.abs(f) > Math.PI / 2 && Math.abs(f) < 1.5 * Math.PI && (y ? (_ *= -1, f += 0 >= p ? Math.PI : -Math.PI, p += 0 >= p ? Math.PI : -Math.PI) : (u *= -1, f += 0 >= f ? Math.PI : -Math.PI)),
                                d = (p - v.rotation) % Math.PI,
                                g = (f - v.skewX) % Math.PI,
                                (void 0 === v.skewX || c > T || -T > c || m > T || -T > m || d > w && b > d && !1 | d * x || g > w && b > g && !1 | g * x) && (v.scaleX = _, v.scaleY = u, v.rotation = p, v.skewX = f),
                                gt && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                        }
                        v.zOrigin = P;
                        for (o in v) T > v[o] && v[o] > -T && (v[o] = 0);
                        return i && (t._gsTransform = v),
                            v
                    },
                    yt = function (t) {
                        var e, i, s = this.data,
                            r = -s.rotation,
                            n = r + s.skewX,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h,
                                h = -l,
                                l = -i,
                                e = p.filter,
                                u.filter = "";
                            var f, m, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                w = s.x,
                                b = s.y;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + m * h), b += m - (f * l + m * _)), v) f = d / 2,
                                m = g / 2,
                                x += ", Dx=" + (f - (f * o + m * h) + w) + ", Dy=" + (m - (f * l + m * _) + b) + ")";
                            else {
                                var P, S, R, k = 8 > c ? 1 : -1;
                                for (f = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), _t = 0; 4 > _t; _t++) S = G[_t],
                                    P = p[S],
                                    i = -1 !== P.indexOf("px") ? parseFloat(P) : V(this.t, S, parseFloat(P), P.replace(y, "")) || 0,
                                    R = i !== s[S] ? 2 > _t ? -s.ieOffsetX : -s.ieOffsetY : 2 > _t ? f - s.ieOffsetX : m - s.ieOffsetY,
                                    u[S] = (s[S] = Math.round(i - R * (0 === _t || 2 === _t ? 1 : k))) + "px";
                                x += ", sizingMethod='auto expand')"
                            }
                            u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, x) : x + " " + e,
                                (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === x.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && u.removeAttribute("filter"))
                        }
                    },
                    Tt = function () {
                        var t, e, i, s, r, n, a, o, h, l, _, u, f, c, m, d, g, v, y, T, x, w, b, P, S, R, k, A = this.data,
                            C = this.t.style,
                            O = A.rotation,
                            M = A.scaleX,
                            D = A.scaleY,
                            I = A.scaleZ;
                        if (p && (S = C.top ? "top" : C.bottom ? "bottom" : parseFloat(j(this.t, "top", null, !1)) ? "bottom" : "top", x = j(this.t, S, null, !1), R = parseFloat(x) || 0, k = x.substr((R + "").length) || "px", A._ffFix = !A._ffFix, C[S] = (A._ffFix ? R + .05 : R - .05) + k), O || A.skewX) y = Math.cos(O),
                            T = Math.sin(O),
                            t = y,
                            r = T,
                            A.skewX && (O -= A.skewX, y = Math.cos(O), T = Math.sin(O)),
                            e = -T,
                            n = y;
                        else {
                            if (!A.rotationY && !A.rotationX && 1 === I) return void (C[ct] = "translate3d(" + A.x + "px," + A.y + "px," + A.z + "px)" + (1 !== M || 1 !== D ? " scale(" + M + "," + D + ")" : ""));
                            t = n = 1,
                                e = r = 0
                        }
                        _ = 1,
                            i = s = a = o = h = l = u = f = c = 0,
                            d = A.perspective,
                            m = d ? -1 / d : 0,
                            g = A.zOrigin,
                            v = 1e5,
                            O = A.rotationY,
                            O && (y = Math.cos(O), T = Math.sin(O), h = _ * -T, f = m * -T, i = t * T, a = r * T, _ *= y, m *= y, t *= y, r *= y),
                            O = A.rotationX,
                            O && (y = Math.cos(O), T = Math.sin(O), x = e * y + i * T, w = n * y + a * T, b = l * y + _ * T, P = c * y + m * T, i = e * -T + i * y, a = n * -T + a * y, _ = l * -T + _ * y, m = c * -T + m * y, e = x, n = w, l = b, c = P),
                            1 !== I && (i *= I, a *= I, _ *= I, m *= I),
                            1 !== D && (e *= D, n *= D, l *= D, c *= D),
                            1 !== M && (t *= M, r *= M, h *= M, f *= M),
                            g && (u -= g, s = i * u, o = a * u, u = _ * u + g),
                            s = (x = (s += A.x) - (s |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + s : s,
                            o = (x = (o += A.y) - (o |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + o : o,
                            u = (x = (u += A.z) - (u |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + u : u,
                            C[ct] = "matrix3d(" + [(0 | t * v) / v, (0 | r * v) / v, (0 | h * v) / v, (0 | f * v) / v, (0 | e * v) / v, (0 | n * v) / v, (0 | l * v) / v, (0 | c * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | _ * v) / v, (0 | m * v) / v, s, o, u, d ? 1 + -u / d : 1].join(",") + ")"
                    },
                    xt = function () {
                        var t, e, i, s, r, n, a, o, h, l = this.data,
                            _ = this.t,
                            u = _.style;
                        p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(j(_, "top", null, !1)) ? "bottom" : "top", e = j(_, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", l._ffFix = !l._ffFix, u[t] = (l._ffFix ? i + .05 : i - .05) + s),
                            l.rotation || l.skewX ? (r = l.rotation, n = r - l.skewX, a = 1e5, o = l.scaleX * a, h = l.scaleY * a, u[ct] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -h) / a + "," + (0 | Math.cos(n) * h) / a + "," + l.x + "," + l.y + ")") : u[ct] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
                    };
                pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                    parser: function (t, e, i, s, n, a, o) {
                        if (s._transform) return n;
                        var h, l, _, u, p, f, c, m = s._transform = vt(t, r, !0, o.parseTransform),
                            d = t.style,
                            g = ft.length,
                            v = o,
                            y = {};
                        if ("string" == typeof v.transform && ct) _ = d.cssText,
                            d[ct] = v.transform,
                            d.display = "block",
                            h = vt(t, null, !1),
                            d.cssText = _;
                        else if ("object" == typeof v) {
                            if (h = {
                                scaleX: J(null != v.scaleX ? v.scaleX : v.scale, m.scaleX),
                                scaleY: J(null != v.scaleY ? v.scaleY : v.scale, m.scaleY),
                                scaleZ: J(null != v.scaleZ ? v.scaleZ : v.scale, m.scaleZ),
                                x: J(v.x, m.x),
                                y: J(v.y, m.y),
                                z: J(v.z, m.z),
                                perspective: J(v.transformPerspective, m.perspective)
                            },
                                null != (c = v.directionalRotation)) if ("object" == typeof c) for (_ in c) v[_] = c[_];
                                else v.rotation = c;
                            h.rotation = tt("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : m.rotation * C, m.rotation, "rotation", y),
                                gt && (h.rotationX = tt("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m.rotationX * C || 0, m.rotationX, "rotationX", y), h.rotationY = tt("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m.rotationY * C || 0, m.rotationY, "rotationY", y)),
                                h.skewX = null == v.skewX ? m.skewX : tt(v.skewX, m.skewX),
                                h.skewY = null == v.skewY ? m.skewY : tt(v.skewY, m.skewY),
                                (l = h.skewY - m.skewY) && (h.skewX += l, h.rotation += l)
                        }
                        for (null != v.force3D && (m.force3D = v.force3D, f = !0), (p = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == v.scale || (h.scaleZ = 1); --g > -1;) i = ft[g],
                            ((u = h[i] - m[i]) > 1e-6 || -1e-6 > u || null != O[i]) && (f = !0, n = new ht(m, i, m[i], u, n), i in y && (n.e = y[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                        return u = v.transformOrigin,
                            (u || gt && p && m.zOrigin) && (ct ? (f = !0, i = dt, u = (u || j(t, i, r, !1, "50% 50%")) + "", n = new ht(d, i, 0, 0, n, -1, "transformOrigin"), n.b = d[i], n.plugin = a, gt ? (_ = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 && (0 === _ || "0px" !== u[2]) ? parseFloat(u[2]) : _) || 0, n.xs0 = n.e = d[i] = u[0] + " " + (u[1] || "50%") + " 0px", n = new ht(m, "zOrigin", 0, 0, n, -1, n.n), n.b = _, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d[i] = u) : H(u + "", m)),
                            f && (s._transformType = p || 3 === this._transformType ? 3 : 2),
                            n
                    },
                    prefix: !0
                }),
                    pt("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }),
                    pt("borderRadius", {
                        defaultValue: "0px",
                        parser: function (t, e, i, n, a) {
                            e = this.format(e);
                            var o, h, l, _, u, p, f, c, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                P = t.style;
                            for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = U(b[h])),
                                u = _ = j(t, b[h], r, !1, "0px"),
                                -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]),
                                p = l = o[h],
                                f = parseFloat(u),
                                v = u.substr((f + "").length),
                                y = "=" === p.charAt(1),
                                y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)),
                                "" === g && (g = s[i] || v),
                                g !== v && (T = V(t, "borderLeft", f, v), x = V(t, "borderTop", f, v), "%" === g ? (u = T / m * 100 + "%", _ = x / d * 100 + "%") : "em" === g ? (w = V(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (p = parseFloat(u) + c + g, l = parseFloat(_) + c + g)),
                                a = lt(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                            return a
                        },
                        prefix: !0,
                        formatter: nt("0px 0px 0px 0px", !1, !0)
                    }),
                    pt("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function (t, e, i, s, n, a) {
                            var o, h, l, _, u, p, f = "background-position",
                                m = r || B(t, null),
                                d = this.format((m ? c ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                g = this.format(e);
                            if (- 1 !== d.indexOf("%") != (- 1 !== g.indexOf("%")) && (p = j(t, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) && "none" !== p) {
                                for (o = d.split(" "), h = g.split(" "), I.setAttribute("src", p), l = 2; --l > -1;) d = o[l],
                                    (_ = -1 !== d.indexOf("%")) !== (- 1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                                d = o.join(" ")
                            }
                            return this.parseComplex(t.style, d, g, n, a)
                        },
                        formatter: H
                    }),
                    pt("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: H
                    }),
                    pt("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }),
                    pt("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }),
                    pt("transformStyle", {
                        prefix: !0
                    }),
                    pt("backfaceVisibility", {
                        prefix: !0
                    }),
                    pt("margin", {
                        parser: at("marginTop,marginRight,marginBottom,marginLeft")
                    }),
                    pt("padding", {
                        parser: at("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }),
                    pt("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (t, e, i, s, n, a) {
                            var o, h, l;
                            return 9 > c ? (h = t.currentStyle, l = 8 > c ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(j(t, this.p, r, !1, this.dflt)), e = this.format(e)),
                                this.parseComplex(t.style, o, e, n, a)
                        }
                    }),
                    pt("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }),
                    pt("autoRound,strictUnits", {
                        parser: function (t, e, i, s, r) {
                            return r
                        }
                    }),
                    pt("border", {
                        defaultValue: "0px solid #000",
                        parser: function (t, e, i, s, n, a) {
                            return this.parseComplex(t.style, this.format(j(t, "borderTopWidth", r, !1, "0px") + " " + j(t, "borderTopStyle", r, !1, "solid") + " " + j(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                        },
                        color: !0,
                        formatter: function (t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(rt) || ["#000"])[0]
                        }
                    }),
                    pt("float,cssFloat,styleFloat", {
                        parser: function (t, e, i, s, r) {
                            var n = t.style,
                                a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                            return new ht(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                        }
                    });
                var wt = function (t) {
                    var e, i = this.t,
                        s = i.filter || j(this.data, "filter"),
                        r = 0 | this.s + this.c * t;
                    100 === r && (- 1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") ? (i.removeAttribute("filter"), e = !j(this.data, "filter")) : (i.filter = s.replace(/alpha\(opacity *=.+?\)/i, ""), e = !0)),
                        e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter += " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
                };
                pt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, s, n, a) {
                        var o = parseFloat(j(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return e = parseFloat(e),
                            l && 1 === o && "hidden" === j(t, "visibility", r) && 0 !== e && (o = 0),
                            N ? n = new ht(h, "opacity", o, e - o, n) : (n = new ht(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = wt),
                            l && (n = new ht(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n)),
                            n
                    }
                });
                var bt = function (t, e) {
                    e && (t.removeProperty ? t.removeProperty(e.replace(b, "-$1").toLowerCase()) : t.removeAttribute(e))
                },
                    Pt = function (t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.className = 0 === t ? this.b : this.e;
                            for (var e = this.data,
                                i = this.t.style; e;) e.v ? i[e.p] = e.v : bt(i, e.p),
                                    e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                pt("className", {
                    parser: function (t, e, s, n, a, o, h) {
                        var l, _, u, p, f, c = t.className,
                            m = t.style.cssText;
                        if (a = n._classNamePT = new ht(t, s, 0, 0, a, 2), a.setRatio = Pt, a.pr = -11, i = !0, a.b = c, _ = Z(t, r), u = t._gsClassPT) {
                            for (p = {},
                                f = u.data; f;) p[f.p] = 1,
                                    f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a,
                            a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                            n._tween._duration && (t.className = a.e, l = W(t, _, Z(t), h, p), t.className = c, a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)),
                            a
                    }
                });
                var St = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration) {
                        if ("all" === this.e) return this.t.style.cssText = "",
                            void (this.t._gsTransform && delete this.t._gsTransform);
                        for (var e, i = this.t.style,
                            s = this.e.split(","), r = s.length, n = o.transform.parse; --r > -1;) e = s[r],
                                o[e] && (e = o[e].parse === n ? ct : o[e].p),
                                bt(i, e)
                    }
                };
                for (pt("clearProps", {
                    parser: function (t, e, s, r, n) {
                        return n = new ht(t, s, 0, 0, n, 2),
                            n.setRatio = St,
                            n.e = e,
                            n.pr = -10,
                            n.data = r._tween,
                            i = !0,
                            n
                    }
                }), h = "bezier,throwProps,physicsProps,physics2D".split(","), _t = h.length; _t--;) !
                    function (t) {
                        if (!o[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            pt(t, {
                                parser: function (t, i, s, r, n, a, h) {
                                    var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                    return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (E("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    }(h[_t]);
                h = a.prototype,
                    h._firstPT = null,
                    h._onInitTween = function (t, e, o) {
                        if (!t.nodeType) return !1;
                        this._target = t,
                            this._tween = o,
                            this._vars = e,
                            l = e.autoRound,
                            i = !1,
                            s = e.suffixMap || a.suffixMap,
                            r = B(t, ""),
                            n = this._overwriteProps;
                        var h, p, c, m, d, g, v, y, T, w = t.style;
                        if (_ && "" === w.zIndex && ("auto" === (h = j(t, "zIndex", r)) || "" === h) && (w.zIndex = 0), "string" == typeof e && (m = w.cssText, h = Z(t, r), w.cssText = m + ";" + e, h = W(t, h, Z(t)).difs, !N && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                            for (T = 3 === this._transformType, ct ? u && (_ = !0, "" === w.zIndex && ("auto" === (v = j(t, "zIndex", r)) || "" === v) && (w.zIndex = 0), f && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = p; c && c._next;) c = c._next;
                            y = new ht(t, "transform", 0, 0, null, 2),
                                this._linkCSSP(y, null, c),
                                y.setRatio = T && gt ? Tt : ct ? xt : yt,
                                y.data = this._transform || vt(t, r, !0),
                                n.pop()
                        }
                        if (i) {
                            for (; p;) {
                                for (g = p._next, c = m; c && c.pr > p.pr;) c = c._next; (p._prev = c ? c._prev : d) ? p._prev._next = p : m = p,
                                    (p._next = c) ? c._prev = p : d = p,
                                    p = g
                            }
                            this._firstPT = m
                        }
                        return !0
                    },
                    h.parse = function (t, e, i, n) {
                        var a, h, _, u, p, f, c, m, d, g, v = t.style;
                        for (a in e) f = e[a],
                            h = o[a],
                            h ? i = h.parse(t, f, a, this, i, n, e) : (p = j(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && w.test(f) ? (d || (f = st(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = lt(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (_ = parseFloat(p), c = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = Q(t, a, r), c = "px") : "left" === a || "top" === a ? (_ = q(t, a, r), c = "px") : (_ = "opacity" !== a ? 0 : 1, c = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(y, "")) : (u = parseFloat(f), m = d ? f.substr((u + "").length) || "" : ""), "" === m && (m = s[a] || c), f = u || 0 === u ? (g ? u + _ : u) + m : e[a], c !== m && "" !== m && (u || 0 === u) && (_ || 0 === _) && (_ = V(t, a, _, c), "%" === m ? (_ /= V(t, a, 100, "%") / 100, _ > 100 && (_ = 100), !0 !== e.strictUnits && (p = _ + "%")) : "em" === m ? _ /= V(t, a, 1, "em") : (u = V(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new ht(v, a, u || _ || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : E("invalid " + a + " tween value: " + e[a]) : (i = new ht(v, a, _, u - _, i, 0, a, !1 !== l && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m)) : i = lt(v, a, p, f, !0, null, i, 0, n)),
                            n && i && !i.plugin && (i.plugin = n);
                        return i
                    },
                    h.setRatio = function (t) {
                        var e, i, s, r = this._firstPT;
                        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : 1e-6 > e && e > -1e-6 && (e = 0), r.type) if (1 === r.type) if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                            else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                r.t[r.p] = i
                            } else - 1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                            r = r._next;
                        else for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t),
                            r = r._next
                    },
                    h._enableTransforms = function (t) {
                        this._transformType = t || 3 === this._transformType ? 3 : 2,
                            this._transform = this._transform || vt(this._target, r, !0)
                    },
                    h._linkCSSP = function (t, e, i, s) {
                        return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i),
                            t
                    },
                    h._kill = function (e) {
                        var i, s, r, n = e;
                        if (e.autoAlpha || e.alpha) {
                            n = {};
                            for (s in e) n[s] = e[s];
                            n.opacity = 1,
                                n.autoAlpha && (n.visibility = 1)
                        }
                        return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null),
                            t.prototype._kill.call(this, n)
                    };
                var Rt = function (t, e, i) {
                    var s, r, n, a;
                    if (t.slice) for (r = t.length; --r > -1;) Rt(t[r], e, i);
                    else for (s = t.childNodes, r = s.length; --r > -1;) n = s[r],
                        a = n.type,
                        n.style && (e.push(Z(n)), i && i.push(n)),
                        1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Rt(n, e, i)
                };
                return a.cascadeTo = function (t, i, s) {
                    var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = o._targets || o.target, Rt(t, l, u), o.render(i, !0), Rt(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;) if (n = W(u[r], l[r], _[r]), n.firstMPT) {
                        n = n.difs;
                        for (a in s) p[a] && (n[a] = s[a]);
                        h.push(e.to(u[r], i, n))
                    }
                    return h
                },
                    t.activate([a]),
                    a
            },
            !0),
        function () {
            var t = window._gsDefine.plugin({
                propName: "roundProps",
                priority: -1,
                API: 2,
                init: function (t, e, i) {
                    return this._tween = i,
                        !0
                }
            }),
                e = t.prototype;
            e._onInitAllProps = function () {
                for (var t, e, i, s = this._tween,
                    r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {},
                    o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                for (n = r.length; --n > -1;) for (t = r[n], e = s._firstPT; e;) i = e._next,
                    e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o),
                    e = i;
                return !1
            },
                e._add = function (t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0),
                        this._overwriteProps.push(e)
                }
        }(),
        window._gsDefine.plugin({
            propName: "attr",
            API: 2,
            init: function (t, e) {
                var i;
                if ("function" != typeof t.setAttribute) return !1;
                this._target = t,
                    this._proxy = {};
                for (i in e) this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
                return !0
            },
            set: function (t) {
                this._super.setRatio.call(this, t);
                for (var e, i = this._overwriteProps,
                    s = i.length; --s > -1;) e = i[s],
                        this._target.setAttribute(e, this._proxy[e] + "")
            }
        }),
        window._gsDefine.plugin({
            propName: "directionalRotation",
            API: 2,
            init: function (t, e) {
                "object" != typeof e && (e = {
                    rotation: e
                }),
                    this.finals = {};
                var i, s, r, n, a, o, h = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h) !== a % (h / 2) && (a = 0 > a ? a + h : a - h), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > 1e-6 || -1e-6 > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                return !0
            },
            set: function (t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
            }
        })._autoCSS = !0,
        window._gsDefine("easing.Back", ["easing.Ease"],
            function (t) {
                var e, i, s, r = window.GreenSockGlobals || window,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function (e, i) {
                        var s = h("easing." + e,
                            function () { },
                            !0),
                            r = s.prototype = new t;
                        return r.constructor = s,
                            r.getRatio = i,
                            s
                    },
                    _ = t.register ||
                        function () { },
                    u = function (t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        },
                            !0);
                        return _(r, t),
                            r
                    },
                    p = function (t, e, i) {
                        this.t = t,
                            this.v = e,
                            i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function (e, i) {
                        var s = h("easing." + e,
                            function (t) {
                                this._p1 = t || 0 === t ? t : 1.70158,
                                    this._p2 = 1.525 * this._p1
                            },
                            !0),
                            r = s.prototype = new t;
                        return r.constructor = s,
                            r.getRatio = i,
                            r.config = function (t) {
                                return new s(t)
                            },
                            s
                    },
                    c = u("Back", f("BackOut",
                        function (t) {
                            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                        }), f("BackIn",
                            function (t) {
                                return t * t * ((this._p1 + 1) * t - this._p1)
                            }), f("BackInOut",
                                function (t) {
                                    return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                                })),
                    m = h("easing.SlowMo",
                        function (t, e, i) {
                            e = e || 0 === e ? e : .7,
                                null == t ? t = .7 : t > 1 && (t = 1),
                                this._p = 1 !== t ? e : 0,
                                this._p1 = (1 - t) / 2,
                                this._p2 = t,
                                this._p3 = this._p1 + this._p2,
                                this._calcEnd = !0 === i
                        },
                        !0),
                    d = m.prototype = new t;
                return d.constructor = m,
                    d.getRatio = function (t) {
                        var e = t + (.5 - t) * this._p;
                        return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                    },
                    m.ease = new m(.7, .7),
                    d.config = m.config = function (t, e, i) {
                        return new m(t, e, i)
                    },
                    e = h("easing.SteppedEase",
                        function (t) {
                            t = t || 1,
                                this._p1 = 1 / t,
                                this._p2 = t + 1
                        },
                        !0),
                    d = e.prototype = new t,
                    d.constructor = e,
                    d.getRatio = function (t) {
                        return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
                            (this._p2 * t >> 0) * this._p1
                    },
                    d.config = e.config = function (t) {
                        return new e(t)
                    },
                    i = h("easing.RoughEase",
                        function (e) {
                            e = e || {};
                            for (var i, s, r, n, a, o, h = e.taper || "none",
                                l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = !1 !== e.randomize, m = !0 === e.clamp, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = c ? Math.random() : 1 / u * f,
                                    s = d ? d.getRatio(i) : i,
                                    "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g),
                                    c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r,
                                    m && (s > 1 ? s = 1 : 0 > s && (s = 0)),
                                    l[_++] = {
                                        x: i,
                                        y: s
                                    };
                            for (l.sort(function (t, e) {
                                return t.x - e.x
                            }), o = new p(1, 1, null), f = u; --f > -1;) a = l[f],
                                o = new p(a.x, a.y, o);
                            this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                        },
                        !0),
                    d = i.prototype = new t,
                    d.constructor = i,
                    d.getRatio = function (t) {
                        var e = this._prev;
                        if (t > e.t) {
                            for (; e.next && t >= e.t;) e = e.next;
                            e = e.prev
                        } else for (; e.prev && e.t >= t;) e = e.prev;
                        return this._prev = e,
                            e.v + (t - e.t) / e.gap * e.c
                    },
                    d.config = function (t) {
                        return new i(t)
                    },
                    i.ease = new i,
                    u("Bounce", l("BounceOut",
                        function (t) {
                            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }), l("BounceIn",
                            function (t) {
                                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                            }), l("BounceInOut",
                                function (t) {
                                    var e = .5 > t;
                                    return t = e ? 1 - 2 * t : 2 * t - 1,
                                        t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
                                        e ? .5 * (1 - t) : .5 * t + .5
                                })),
                    u("Circ", l("CircOut",
                        function (t) {
                            return Math.sqrt(1 - (t -= 1) * t)
                        }), l("CircIn",
                            function (t) {
                                return - (Math.sqrt(1 - t * t) - 1)
                            }), l("CircInOut",
                                function (t) {
                                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                                })),
                    s = function (e, i, s) {
                        var r = h("easing." + e,
                            function (t, e) {
                                this._p1 = t || 1,
                                    this._p2 = e || s,
                                    this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                            },
                            !0),
                            n = r.prototype = new t;
                        return n.constructor = r,
                            n.getRatio = i,
                            n.config = function (t, e) {
                                return new r(t, e)
                            },
                            r
                    },
                    u("Elastic", s("ElasticOut",
                        function (t) {
                            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
                        },
                        .3), s("ElasticIn",
                            function (t) {
                                return - (this._p1 * Math.pow(2, 10 * (t -= 1))) * Math.sin((t - this._p3) * a / this._p2)
                            },
                            .3), s("ElasticInOut",
                                function (t) {
                                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
                                },
                                .45)),
                    u("Expo", l("ExpoOut",
                        function (t) {
                            return 1 - Math.pow(2, -10 * t)
                        }), l("ExpoIn",
                            function (t) {
                                return Math.pow(2, 10 * (t - 1)) - .001
                            }), l("ExpoInOut",
                                function (t) {
                                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                                })),
                    u("Sine", l("SineOut",
                        function (t) {
                            return Math.sin(t * o)
                        }), l("SineIn",
                            function (t) {
                                return 1 - Math.cos(t * o)
                            }), l("SineInOut",
                                function (t) {
                                    return - .5 * (Math.cos(Math.PI * t) - 1)
                                })),
                    h("easing.EaseLookup", {
                        find: function (e) {
                            return t.map[e]
                        }
                    },
                        !0),
                    _(r.SlowMo, "SlowMo", "ease,"),
                    _(i, "RoughEase", "ease,"),
                    _(e, "SteppedEase", "ease,"),
                    c
            },
            !0)
}),
    function (t) {
        "use strict";
        var e, i, s, r, n, a = t.GreenSockGlobals || t,
            o = function (t) {
                var e, i = t.split("."),
                    s = a;
                for (e = 0; i.length > e; e++) s[i[e]] = s = s[i[e]] || {};
                return s
            },
            h = o("com.greensock"),
            l = [].slice,
            _ = function () { },
            u = {},
            p = function (e, i, s, r) {
                this.sc = u[e] ? u[e].sc : [],
                    u[e] = this,
                    this.gsClass = null,
                    this.func = s;
                var n = [];
                this.check = function (h) {
                    for (var l, _, f, c, m = i.length,
                        d = m; --m > -1;)(l = u[i[m]] || new p(i[m], [])).gsClass ? (n[m] = l.gsClass, d--) : h && l.sc.push(this);
                    if (0 === d && s) for (_ = ("com.greensock." + e).split("."), f = _.pop(), c = o(_.join("."))[f] = this.gsClass = s.apply(s, n), r && (a[f] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [],
                        function () {
                            return c
                        }) : "undefined" != typeof module && module.exports && (module.exports = c)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                },
                    this.check(!0)
            },
            f = t._gsDefine = function (t, e, i, s) {
                return new p(t, e, i, s)
            },
            c = h._class = function (t, e, i) {
                return e = e ||
                    function () { },
                    f(t, [],
                        function () {
                            return e
                        },
                        i),
                    e
            };
        f.globals = a;
        var m = [0, 0, 1, 1],
            d = [],
            g = c("easing.Ease",
                function (t, e, i, s) {
                    this._func = t,
                        this._type = i || 0,
                        this._power = s || 0,
                        this._params = e ? m.concat(e) : m
                },
                !0),
            v = g.map = {},
            y = g.register = function (t, e, i, s) {
                for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;) for (n = l[_], r = s ? c("easing." + n, null, !0) : h.easing[n] || {},
                    a = u.length; --a > -1;) o = u[a],
                        v[n + "." + o] = v[o + n] = r[o] = t.getRatio ? t : t[o] || new t
            };
        for (s = g.prototype, s._calcEnd = !1, s.getRatio = function (t) {
            if (this._func) return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type,
                i = this._power,
                s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s),
                1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        },
            e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = e.length; --i > -1;) s = e[i] + ",Power" + i,
                y(new g(null, null, 1, i), s, "easeOut", !0),
                y(new g(null, null, 2, i), s, "easeIn" + (0 === i ? ",easeNone" : "")),
                y(new g(null, null, 3, i), s, "easeInOut");
        v.linear = h.easing.Linear.easeIn,
            v.swing = h.easing.Quad.easeInOut;
        var T = c("events.EventDispatcher",
            function (t) {
                this._listeners = {},
                    this._eventTarget = t || this
            });
        s = T.prototype,
            s.addEventListener = function (t, e, i, s, a) {
                a = a || 0;
                var o, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) o = l[h],
                    o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && a > o.pr && (_ = h + 1);
                l.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: a
                }),
                    this !== r || n || r.wake()
            },
            s.removeEventListener = function (t, e) {
                var i, s = this._listeners[t];
                if (s) for (i = s.length; --i > -1;) if (s[i].c === e) return void s.splice(i, 1)
            },
            s.dispatchEvent = function (t) {
                var e, i, s, r = this._listeners[t];
                if (r) for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e],
                    s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i)
            };
        var x = t.requestAnimationFrame,
            w = t.cancelAnimationFrame,
            b = Date.now ||
                function () {
                    return (new Date).getTime()
                },
            P = b();
        for (e = ["ms", "moz", "webkit", "o"], i = e.length; --i > -1 && !x;) x = t[e[i] + "RequestAnimationFrame"],
            w = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
        c("Ticker",
            function (t, e) {
                var i, s, a, o, h, l = this,
                    u = b(),
                    p = !1 !== e && x,
                    f = function (t) {
                        P = b(),
                            l.time = (P - u) / 1e3;
                        var e, r = l.time - h; (!i || r > 0 || !0 === t) && (l.frame++ , h += r + (r >= o ? .004 : o - r), e = !0),
                            !0 !== t && (a = s(f)),
                            e && l.dispatchEvent("tick")
                    };
                T.call(l),
                    this.time = this.frame = 0,
                    this.tick = function () {
                        f(!0)
                    },
                    this.sleep = function () {
                        null != a && (p && w ? w(a) : clearTimeout(a), s = _, a = null, l === r && (n = !1))
                    },
                    this.wake = function () {
                        null !== a && l.sleep(),
                            s = 0 === i ? _ : p && x ? x : function (t) {
                                return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                            },
                            l === r && (n = !0),
                            f(2)
                    },
                    this.fps = function (t) {
                        return arguments.length ? (i = t, o = 1 / (i || 60), h = this.time + o, void l.wake()) : i
                    },
                    this.useRAF = function (t) {
                        return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p
                    },
                    l.fps(t),
                    setTimeout(function () {
                        p && (!a || 5 > l.frame) && l.useRAF(!1)
                    },
                        1500)
            }),
            s = h.Ticker.prototype = new h.events.EventDispatcher,
            s.constructor = h.Ticker;
        var S = c("core.Animation",
            function (t, e) {
                if (this.vars = e = e || {},
                    this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, E) {
                    n || r.wake();
                    var i = this.vars.useFrames ? L : E;
                    i.add(this, i._time),
                        this.vars.paused && this.paused(!0)
                }
            });
        r = S.ticker = new h.Ticker,
            s = S.prototype,
            s._dirty = s._gc = s._initted = s._paused = !1,
            s._totalTime = s._time = 0,
            s._rawPrevTime = -1,
            s._next = s._last = s._onUpdate = s._timeline = s.timeline = null,
            s._paused = !1;
        var R = function () {
            b() - P > 2e3 && r.wake(),
                setTimeout(R, 2e3)
        };
        R(),
            s.play = function (t, e) {
                return arguments.length && this.seek(t, e),
                    this.reversed(!1).paused(!1)
            },
            s.pause = function (t, e) {
                return arguments.length && this.seek(t, e),
                    this.paused(!0)
            },
            s.resume = function (t, e) {
                return arguments.length && this.seek(t, e),
                    this.paused(!1)
            },
            s.seek = function (t, e) {
                return this.totalTime(Number(t), !1 !== e)
            },
            s.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            },
            s.reverse = function (t, e) {
                return arguments.length && this.seek(t || this.totalDuration(), e),
                    this.reversed(!0).paused(!1)
            },
            s.render = function () { },
            s.invalidate = function () {
                return this
            },
            s._enabled = function (t, e) {
                return n || r.wake(),
                    this._gc = !t,
                    this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration,
                    !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                    !1
            },
            s._kill = function () {
                return this._enabled(!1, !1)
            },
            s.kill = function (t, e) {
                return this._kill(t, e),
                    this
            },
            s._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0,
                    e = e.timeline;
                return this
            },
            s._swapSelfInParams = function (t) {
                for (var e = t.length,
                    i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
                return i
            },
            s.eventCallback = function (t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = i instanceof Array && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s),
                        "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            },
            s.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            },
            s.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            },
            s.totalDuration = function (t) {
                return this._dirty = !1,
                    arguments.length ? this.duration(t) : this._totalDuration
            },
            s.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            },
            s.totalTime = function (t, e, i) {
                if (n || r.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            a = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? s - t : t) / this._timeScale, a._dirty || this._uncache(!1), a._timeline) for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0),
                            a = a._timeline
                    }
                    this._gc && this._enabled(!0, !1),
                        this._totalTime !== t && this.render(t, e, !1)
                }
                return this
            },
            s.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            },
            s.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t,
                    this._uncache(!1)
            },
            s.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
            },
            s.paused = function (t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    n || t || r.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime; !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)),
                            this._pauseTime = t ? i : null,
                            this._paused = t,
                            this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration,
                            t || 0 === s || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1),
                    this
            };
        var k = c("core.SimpleTimeline",
            function (t) {
                S.call(this, 0, t),
                    this.autoRemoveChildren = this.smoothChildTiming = !0
            });
        s = k.prototype = new S,
            s.constructor = k,
            s.kill()._gc = !1,
            s._first = s._last = null,
            s._sortChildren = !1,
            s.add = s.insert = function (t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t),
                    t._next ? t._next._prev = t : this._last = t,
                    t._prev = i,
                    this._timeline && this._uncache(!0),
                    this
            },
            s._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)),
                    this
            },
            s.render = function (t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next,
                    (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                    r = s
            },
            s.rawTime = function () {
                return n || r.wake(),
                    this._totalTime
            };
        var A = c("TweenLite",
            function (e, i, s) {
                if (S.call(this, i, s), this.render = A.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : A.selector(e) || e;
                var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    h = this.vars.overwrite;
                if (this._overwrite = h = null == h ? N[A.defaultOverwrite] : "number" == typeof h ? h >> 0 : N[h], (o || e instanceof Array) && "number" != typeof e[0]) for (this._targets = a = l.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r],
                    n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(l.call(n, 0))) : (this._siblings[r] = z(n, this, !1), 1 === h && this._siblings[r].length > 1 && Y(n, this, null, 1, this._siblings[r])) : "string" == typeof (n = a[r--] = A.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                else this._propLookup = {},
                    this._siblings = z(e, this, !1),
                    1 === h && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(- this._delay, !1, !0)
            },
            !0),
            C = function (e) {
                return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            O = function (t, e) {
                var i, s = {};
                for (i in t) X[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!D[i] || D[i] && D[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        s = A.prototype = new S,
            s.constructor = A,
            s.kill()._gc = !1,
            s.ratio = 0,
            s._firstPT = s._targets = s._overwrittenProps = s._startAt = null,
            s._notifyPluginsOfEnabled = !1,
            A.version = "1.10.2",
            A.defaultEase = s._ease = new g(null, null, 1, 1),
            A.defaultOverwrite = "auto",
            A.ticker = r,
            A.autoSleep = !0,
            A.selector = t.$ || t.jQuery ||
            function (e) {
                return t.$ ? (A.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
            };
        var M = A._internals = {},
            D = A._plugins = {},
            I = A._tweenLookup = {},
            F = 0,
            X = M.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            N = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            L = S._rootFramesTimeline = new k,
            E = S._rootTimeline = new k;
        E._startTime = r.time,
            L._startTime = r.frame,
            E._active = L._active = !0,
            S._updateRoot = function () {
                if (E.render((r.time - E._startTime) * E._timeScale, !1, !1), L.render((r.frame - L._startTime) * L._timeScale, !1, !1), !(r.frame % 120)) {
                    var t, e, i;
                    for (i in I) {
                        for (e = I[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete I[i]
                    }
                    if ((!(i = E._first) || i._paused) && A.autoSleep && !L._first && 1 === r._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || r.sleep()
                    }
                }
            },
            r.addEventListener("tick", S._updateRoot);
        var z = function (t, e, i) {
            var s, r, n = t._gsTweenID;
            if (I[n || (t._gsTweenID = n = "t" + F++)] || (I[n] = {
                target: t,
                tweens: []
            }), e && (s = I[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) s[r] === e && s.splice(r, 1);
            return I[n].tweens
        },
            Y = function (t, e, i, s, r) {
                var n, a, o, h;
                if (1 === s || s >= 4) {
                    for (h = r.length, n = 0; h > n; n++) if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                    else if (5 === s) break;
                    return a
                }
                var l, _ = e._startTime + 1e-10,
                    u = [],
                    p = 0,
                    f = 0 === e._duration;
                for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || U(e, 0, f), 0 === U(o, l, f) && (u[p++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + 1e-10 > _ && ((f || !o._initted) && 2e-10 >= _ - o._startTime || (u[p++] = o)));
                for (n = p; --n > -1;) o = u[n],
                    2 === s && o._kill(i, t) && (a = !0),
                    (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            U = function (t, e, i) {
                for (var s = t._timeline,
                    r = s._timeScale,
                    n = t._startTime,
                    a = 1e-10; s._timeline;) {
                    if (n += s._startTime, r *= s._timeScale, s._paused) return - 100;
                    s = s._timeline
                }
                return n /= r,
                    n > e ? n - e : i && n === e || !t._initted && 2 * a > n - e ? a : (n += t.totalDuration() / t._timeScale / r) > e + a ? 0 : n - e - a
            };
        s._init = function () {
            var t, e, i, s, r = this.vars,
                n = this._overwrittenProps,
                a = this._duration,
                o = r.immediateRender,
                h = r.ease;
            if (r.startAt) {
                if (this._startAt && this._startAt.render(- 1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, r.startAt), o) if (this._time > 0) this._startAt = null;
                else if (0 !== a) return
            } else if (r.runBackwards && r.immediateRender && 0 !== a) if (this._startAt) this._startAt.render(- 1, !0),
                this._startAt = null;
            else if (0 === this._time) {
                i = {};
                for (s in r) X[s] && "autoCSS" !== s || (i[s] = r[s]);
                return i.overwrite = 0,
                    void (this._startAt = A.to(this.target, 0, i))
            }
            if (this._ease = h ? h instanceof g ? r.easeParams instanceof Array ? h.config.apply(h, r.easeParams) : h : "function" == typeof h ? new g(h, r.easeParams) : v[h] || A.defaultEase : A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {},
                this._siblings[t], n ? n[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, n);
            if (e && A._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards) for (i = this._firstPT; i;) i.s += i.c,
                i.c = -i.c,
                i = i._next;
            this._onUpdate = r.onUpdate,
                this._initted = !0
        },
            s._initProps = function (e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                this.vars.css || e.style && e !== t && e.nodeType && D.css && !1 !== this.vars.autoCSS && O(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], X[n]) _ instanceof Array && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (D[n] && (h = new D[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = l = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: n,
                            pg: !0,
                            pr: h._priority
                        },
                            a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT; (h._priority || h._onInitAllProps) && (o = !0),
                                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    },
                        l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]),
                        l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Y(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
            },
            s.render = function (t, e, i) {
                var s, r, n, a = this._time;
                if (t >= this._duration) this._totalTime = this._time = this._duration,
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                    this._reversed || (s = !0, r = "onComplete"),
                    0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
                else if (1e-7 > t) this._totalTime = this._time = 0,
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                    (0 !== a || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed),
                    0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var o = t / this._duration,
                        h = this._easeType,
                        l = this._easePower; (1 === h || 3 === h && o >= .5) && (o = 1 - o),
                            3 === h && (o *= 2),
                            1 === l ? o *= o : 2 === l ? o *= o * o : 3 === l ? o *= o * o * o : 4 === l && (o *= o * o * o * o),
                            this.ratio = 1 === h ? 1 - o : 2 === h ? o : .5 > t / this._duration ? o / 2 : 1 - o / 2
                } else this.ratio = this._ease.getRatio(t / this._duration);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                        n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d)),
                        r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || d)))
                }
            },
            s._kill = function (t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
                var i, s, r, n, a, o, h, l;
                if ((e instanceof Array || C(e)) && "number" != typeof e[0]) for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;) if (e === this._targets[i]) {
                            a = this._propLookup[i] || {},
                                this._overwrittenProps = this._overwrittenProps || [],
                                s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup,
                            s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        h = t || a,
                            l = t !== s && "all" !== s && t !== a && (null == t || !0 !== t._tempKill);
                        for (r in h) (n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]),
                            l && (s[r] = 1); !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return o
            },
            s.invalidate = function () {
                return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this),
                    this._firstPT = null,
                    this._overwrittenProps = null,
                    this._onUpdate = null,
                    this._startAt = null,
                    this._initted = this._active = this._notifyPluginsOfEnabled = !1,
                    this._propLookup = this._targets ? {} : [],
                    this
            },
            s._enabled = function (t, e) {
                if (n || r.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s) for (i = s.length; --i > -1;) this._siblings[i] = z(s[i], this, !0);
                    else this._siblings = z(this.target, this, !0)
                }
                return S.prototype._enabled.call(this, t, e),
                    !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            },
            A.to = function (t, e, i) {
                return new A(t, e, i)
            },
            A.from = function (t, e, i) {
                return i.runBackwards = !0,
                    i.immediateRender = 0 != i.immediateRender,
                    new A(t, e, i)
            },
            A.fromTo = function (t, e, i, s) {
                return s.startAt = i,
                    s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
                    new A(t, e, s)
            },
            A.delayedCall = function (t, e, i, s, r) {
                return new A(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            },
            A.set = function (t, e) {
                return new A(t, 0, e)
            },
            A.killTweensOf = A.killDelayedCallsTo = function (t, e) {
                for (var i = A.getTweensOf(t), s = i.length; --s > -1;) i[s]._kill(e, t)
            },
            A.getTweensOf = function (t) {
                if (null == t) return [];
                t = "string" != typeof t ? t : A.selector(t) || t;
                var e, i, s, r;
                if ((t instanceof Array || C(t)) && "number" != typeof t[0]) {
                    for (e = t.length, i = []; --e > -1;) i = i.concat(A.getTweensOf(t[e]));
                    for (e = i.length; --e > -1;) for (r = i[e], s = e; --s > -1;) r === i[s] && i.splice(e, 1)
                } else for (i = z(t).concat(), e = i.length; --e > -1;) i[e]._gc && i.splice(e, 1);
                return i
            };
        var B = c("plugins.TweenPlugin",
            function (t, e) {
                this._overwriteProps = (t || "").split(","),
                    this._propName = this._overwriteProps[0],
                    this._priority = e || 0,
                    this._super = B.prototype
            },
            !0);
        if (s = B.prototype, B.version = "1.10.1", B.API = 2, s._firstPT = null, s._addTween = function (t, e, i, s, r, n) {
            var a, o;
            return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: a,
                f: "function" == typeof t[e],
                n: r || e,
                r: n
            },
                o._next && (o._next._prev = o), o) : void 0
        },
            s.setRatio = function (t) {
                for (var e, i = this._firstPT; i;) e = i.c * t + i.s,
                    i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : 1e-6 > e && e > -1e-6 && (e = 0),
                    i.f ? i.t[i.p](e) : i.t[i.p] = e,
                    i = i._next
            },
            s._kill = function (t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
                    s = s._next;
                return !1
            },
            s._roundProps = function (t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
                    i = i._next
            },
            A._onPluginEvent = function (t, e) {
                var i, s, r, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next; (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o,
                            (o._next = s) ? s._prev = o : n = o,
                            o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                    o = o._next;
                return i
            },
            B.activate = function (t) {
                for (var e = t.length; --e > -1;) t[e].API === B.API && (D[(new t[e])._propName] = t[e]);
                return !0
            },
            f.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    r = t.overwriteProps,
                    n = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = c("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                        function () {
                            B.call(this, i, s),
                                this._overwriteProps = r || []
                        },
                        !0 === t.global),
                    o = a.prototype = new B(i);
                o.constructor = a,
                    a.API = t.API;
                for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version,
                    B.activate([a]),
                    a
            },
            e = t._gsQueue) {
            for (i = 0; e.length > i; i++) e[i]();
            for (s in u) u[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        n = !1
    }(window); !
        function () {
            "use strict";
            var e = function () {
                this.init()
            };
            e.prototype = {
                init: function () {
                    var e = this || n;
                    return e._counter = 1e3,
                        e._codecs = {},
                        e._howls = [],
                        e._muted = !1,
                        e._volume = 1,
                        e._canPlayEvent = "canplaythrough",
                        e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null,
                        e.masterGain = null,
                        e.noAudio = !1,
                        e.usingWebAudio = !0,
                        e.autoSuspend = !0,
                        e.ctx = null,
                        e.mobileAutoEnable = !0,
                        e._setup(),
                        e
                },
                volume: function (e) {
                    var o = this || n;
                    if (e = parseFloat(e), o.ctx || _(), void 0 !== e && e >= 0 && e <= 1) {
                        if (o._volume = e, o._muted) return o;
                        o.usingWebAudio && (o.masterGain.gain.value = e);
                        for (var t = 0; t < o._howls.length; t++) if (!o._howls[t]._webAudio) for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
                            var i = o._howls[t]._soundById(r[a]);
                            i && i._node && (i._node.volume = i._volume * e)
                        }
                        return o
                    }
                    return o._volume
                },
                mute: function (e) {
                    var o = this || n;
                    o.ctx || _(),
                        o._muted = e,
                        o.usingWebAudio && (o.masterGain.gain.value = e ? 0 : o._volume);
                    for (var t = 0; t < o._howls.length; t++) if (!o._howls[t]._webAudio) for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
                        var i = o._howls[t]._soundById(r[a]);
                        i && i._node && (i._node.muted = !!e || i._muted)
                    }
                    return o
                },
                unload: function () {
                    for (var e = this || n,
                        o = e._howls.length - 1; o >= 0; o--) e._howls[o].unload();
                    return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, _()),
                        e
                },
                codecs: function (e) {
                    return (this || n)._codecs[e.replace(/^x-/, "")]
                },
                _setup: function () {
                    var e = this || n;
                    if (e.state = e.ctx ? e.ctx.state || "running" : "running", e._autoSuspend(), !e.usingWebAudio) if ("undefined" != typeof Audio) try {
                        var o = new Audio;
                        void 0 === o.oncanplaythrough && (e._canPlayEvent = "canplay")
                    } catch (n) {
                        e.noAudio = !0
                    } else e.noAudio = !0;
                    try {
                        var o = new Audio;
                        o.muted && (e.noAudio = !0)
                    } catch (e) { }
                    return e.noAudio || e._setupCodecs(),
                        e
                },
                _setupCodecs: function () {
                    var e = this || n,
                        o = null;
                    try {
                        o = "undefined" != typeof Audio ? new Audio : null
                    } catch (n) {
                        return e
                    }
                    if (!o || "function" != typeof o.canPlayType) return e;
                    var t = o.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                        r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                        a = r && parseInt(r[0].split("/")[1], 10) < 33;
                    return e._codecs = {
                        mp3: !(a || !t && !o.canPlayType("audio/mp3;").replace(/^no$/, "")),
                        mpeg: !!t,
                        opus: !!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                        ogg: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        oga: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        wav: !!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                        aac: !!o.canPlayType("audio/aac;").replace(/^no$/, ""),
                        caf: !!o.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                        m4a: !!(o.canPlayType("audio/x-m4a;") || o.canPlayType("audio/m4a;") || o.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        mp4: !!(o.canPlayType("audio/x-mp4;") || o.canPlayType("audio/mp4;") || o.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        weba: !!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                        webm: !!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                        dolby: !!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                        flac: !!(o.canPlayType("audio/x-flac;") || o.canPlayType("audio/flac;")).replace(/^no$/, "")
                    },
                        e
                },
                _enableMobileAudio: function () {
                    var e = this || n,
                        o = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent),
                        t = !!("ontouchend" in window || e._navigator && e._navigator.maxTouchPoints > 0 || e._navigator && e._navigator.msMaxTouchPoints > 0);
                    if (!e._mobileEnabled && e.ctx && (o || t)) {
                        e._mobileEnabled = !1,
                            e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()),
                            e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                        var r = function () {
                            n._autoResume();
                            var o = e.ctx.createBufferSource();
                            o.buffer = e._scratchBuffer,
                                o.connect(e.ctx.destination),
                                void 0 === o.start ? o.noteOn(0) : o.start(0),
                                "function" == typeof e.ctx.resume && e.ctx.resume(),
                                o.onended = function () {
                                    o.disconnect(0),
                                        e._mobileEnabled = !0,
                                        e.mobileAutoEnable = !1,
                                        document.removeEventListener("touchend", r, !0)
                                }
                        };
                        return document.addEventListener("touchend", r, !0),
                            e
                    }
                },
                _autoSuspend: function () {
                    var e = this;
                    if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && n.usingWebAudio) {
                        for (var o = 0; o < e._howls.length; o++) if (e._howls[o]._webAudio) for (var t = 0; t < e._howls[o]._sounds.length; t++) if (!e._howls[o]._sounds[t]._paused) return e;
                        return e._suspendTimer && clearTimeout(e._suspendTimer),
                            e._suspendTimer = setTimeout(function () {
                                e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function () {
                                    e.state = "suspended",
                                        e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                                }))
                            },
                                3e4),
                            e
                    }
                },
                _autoResume: function () {
                    var e = this;
                    if (e.ctx && void 0 !== e.ctx.resume && n.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then(function () {
                        e.state = "running";
                        for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("resume")
                    }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0),
                        e
                }
            };
            var n = new e,
                o = function (e) {
                    var n = this;
                    if (!e.src || 0 === e.src.length) return void console.error("An array of source files must be passed with any new Howl.");
                    n.init(e)
                };
            o.prototype = {
                init: function (e) {
                    var o = this;
                    return n.ctx || _(),
                        o._autoplay = e.autoplay || !1,
                        o._format = "string" != typeof e.format ? e.format : [e.format],
                        o._html5 = e.html5 || !1,
                        o._muted = e.mute || !1,
                        o._loop = e.loop || !1,
                        o._pool = e.pool || 5,
                        o._preload = "boolean" != typeof e.preload || e.preload,
                        o._rate = e.rate || 1,
                        o._sprite = e.sprite || {},
                        o._src = "string" != typeof e.src ? e.src : [e.src],
                        o._volume = void 0 !== e.volume ? e.volume : 1,
                        o._duration = 0,
                        o._state = "unloaded",
                        o._sounds = [],
                        o._endTimers = {},
                        o._queue = [],
                        o._onend = e.onend ? [{
                            fn: e.onend
                        }] : [],
                        o._onfade = e.onfade ? [{
                            fn: e.onfade
                        }] : [],
                        o._onload = e.onload ? [{
                            fn: e.onload
                        }] : [],
                        o._onloaderror = e.onloaderror ? [{
                            fn: e.onloaderror
                        }] : [],
                        o._onpause = e.onpause ? [{
                            fn: e.onpause
                        }] : [],
                        o._onplay = e.onplay ? [{
                            fn: e.onplay
                        }] : [],
                        o._onstop = e.onstop ? [{
                            fn: e.onstop
                        }] : [],
                        o._onmute = e.onmute ? [{
                            fn: e.onmute
                        }] : [],
                        o._onvolume = e.onvolume ? [{
                            fn: e.onvolume
                        }] : [],
                        o._onrate = e.onrate ? [{
                            fn: e.onrate
                        }] : [],
                        o._onseek = e.onseek ? [{
                            fn: e.onseek
                        }] : [],
                        o._onresume = [],
                        o._webAudio = n.usingWebAudio && !o._html5,
                        void 0 !== n.ctx && n.ctx && n.mobileAutoEnable && n._enableMobileAudio(),
                        n._howls.push(o),
                        o._autoplay && o._queue.push({
                            event: "play",
                            action: function () {
                                o.play()
                            }
                        }),
                        o._preload && o.load(),
                        o
                },
                load: function () {
                    var e = this,
                        o = null;
                    if (n.noAudio) return void e._emit("loaderror", null, "No audio support.");
                    "string" == typeof e._src && (e._src = [e._src]);
                    for (var r = 0; r < e._src.length; r++) {
                        var i, u;
                        if (e._format && e._format[r]) i = e._format[r];
                        else {
                            if ("string" != typeof (u = e._src[r])) {
                                e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                continue
                            }
                            i = /^data:audio\/([^;,]+);/i.exec(u),
                                i || (i = /\.([^.]+)$/.exec(u.split("?", 1)[0])),
                                i && (i = i[1].toLowerCase())
                        }
                        if (i || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), i && n.codecs(i)) {
                            o = e._src[r];
                            break
                        }
                    }
                    return o ? (e._src = o, e._state = "loading", "https:" === window.location.protocol && "http:" === o.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new t(e), e._webAudio && a(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources.")
                },
                play: function (e, o) {
                    var t = this,
                        r = null;
                    if ("number" == typeof e) r = e,
                        e = null;
                    else {
                        if ("string" == typeof e && "loaded" === t._state && !t._sprite[e]) return null;
                        if (void 0 === e) {
                            e = "__default";
                            for (var a = 0,
                                i = 0; i < t._sounds.length; i++) t._sounds[i]._paused && !t._sounds[i]._ended && (a++ , r = t._sounds[i]._id);
                            1 === a ? e = null : r = null
                        }
                    }
                    var u = r ? t._soundById(r) : t._inactiveSound();
                    if (!u) return null;
                    if (r && !e && (e = u._sprite || "__default"), "loaded" !== t._state) {
                        u._sprite = e,
                            u._ended = !1;
                        var d = u._id;
                        return t._queue.push({
                            event: "play",
                            action: function () {
                                t.play(d)
                            }
                        }),
                            d
                    }
                    if (r && !u._paused) return o || setTimeout(function () {
                        t._emit("play", u._id)
                    },
                        0),
                        u._id;
                    t._webAudio && n._autoResume();
                    var _ = Math.max(0, u._seek > 0 ? u._seek : t._sprite[e][0] / 1e3),
                        s = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - _),
                        l = 1e3 * s / Math.abs(u._rate);
                    u._paused = !1,
                        u._ended = !1,
                        u._sprite = e,
                        u._seek = _,
                        u._start = t._sprite[e][0] / 1e3,
                        u._stop = (t._sprite[e][0] + t._sprite[e][1]) / 1e3,
                        u._loop = !(!u._loop && !t._sprite[e][2]);
                    var c = u._node;
                    if (t._webAudio) {
                        var f = function () {
                            t._refreshBuffer(u);
                            var e = u._muted || t._muted ? 0 : u._volume;
                            c.gain.setValueAtTime(e, n.ctx.currentTime),
                                u._playStart = n.ctx.currentTime,
                                void 0 === c.bufferSource.start ? u._loop ? c.bufferSource.noteGrainOn(0, _, 86400) : c.bufferSource.noteGrainOn(0, _, s) : u._loop ? c.bufferSource.start(0, _, 86400) : c.bufferSource.start(0, _, s),
                                l !== 1 / 0 && (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), l)),
                                o || setTimeout(function () {
                                    t._emit("play", u._id)
                                },
                                    0)
                        },
                            p = "running" === n.state;
                        if ("loaded" === t._state && p) f();
                        else {
                            var v = p || "loaded" !== t._state ? "load" : "resume";
                            t.once(v, f, p ? u._id : null),
                                t._clearTimer(u._id)
                        }
                    } else {
                        var m = function () {
                            c.currentTime = _,
                                c.muted = u._muted || t._muted || n._muted || c.muted,
                                c.volume = u._volume * n.volume(),
                                c.playbackRate = u._rate,
                                c.play(),
                                l !== 1 / 0 && (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), l)),
                                o || t._emit("play", u._id)
                        },
                            g = "loaded" === t._state && (window && window.ejecta || !c.readyState && n._navigator.isCocoonJS);
                        if (4 === c.readyState || g) m();
                        else {
                            var h = function () {
                                m(),
                                    c.removeEventListener(n._canPlayEvent, h, !1)
                            };
                            c.addEventListener(n._canPlayEvent, h, !1),
                                t._clearTimer(u._id)
                        }
                    }
                    return u._id
                },
                pause: function (e) {
                    var n = this;
                    if ("loaded" !== n._state) return n._queue.push({
                        event: "pause",
                        action: function () {
                            n.pause(e)
                        }
                    }),
                        n;
                    for (var o = n._getSoundIds(e), t = 0; t < o.length; t++) {
                        n._clearTimer(o[t]);
                        var r = n._soundById(o[t]);
                        if (r && !r._paused && (r._seek = n.seek(o[t]), r._rateSeek = 0, r._paused = !0, n._stopFade(o[t]), r._node)) if (n._webAudio) {
                            if (!r._node.bufferSource) continue;
                            void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0),
                                n._cleanBuffer(r._node)
                        } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                        arguments[1] || n._emit("pause", r ? r._id : null)
                    }
                    return n
                },
                stop: function (e, n) {
                    var o = this;
                    if ("loaded" !== o._state) return o._queue.push({
                        event: "stop",
                        action: function () {
                            o.stop(e)
                        }
                    }),
                        o;
                    for (var t = o._getSoundIds(e), r = 0; r < t.length; r++) {
                        o._clearTimer(t[r]);
                        var a = o._soundById(t[r]);
                        a && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, o._stopFade(t[r]), a._node && (o._webAudio ? a._node.bufferSource && (void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), o._cleanBuffer(a._node)) : isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause())), n || o._emit("stop", a._id))
                    }
                    return o
                },
                mute: function (e, o) {
                    var t = this;
                    if ("loaded" !== t._state) return t._queue.push({
                        event: "mute",
                        action: function () {
                            t.mute(e, o)
                        }
                    }),
                        t;
                    if (void 0 === o) {
                        if ("boolean" != typeof e) return t._muted;
                        t._muted = e
                    }
                    for (var r = t._getSoundIds(o), a = 0; a < r.length; a++) {
                        var i = t._soundById(r[a]);
                        i && (i._muted = e, t._webAudio && i._node ? i._node.gain.setValueAtTime(e ? 0 : i._volume, n.ctx.currentTime) : i._node && (i._node.muted = !!n._muted || e), t._emit("mute", i._id))
                    }
                    return t
                },
                volume: function () {
                    var e, o, t = this,
                        r = arguments;
                    if (0 === r.length) return t._volume;
                    1 === r.length || 2 === r.length && void 0 === r[1] ? t._getSoundIds().indexOf(r[0]) >= 0 ? o = parseInt(r[0], 10) : e = parseFloat(r[0]) : r.length >= 2 && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
                    var a;
                    if (!(void 0 !== e && e >= 0 && e <= 1)) return a = o ? t._soundById(o) : t._sounds[0],
                        a ? a._volume : 0;
                    if ("loaded" !== t._state) return t._queue.push({
                        event: "volume",
                        action: function () {
                            t.volume.apply(t, r)
                        }
                    }),
                        t;
                    void 0 === o && (t._volume = e),
                        o = t._getSoundIds(o);
                    for (var i = 0; i < o.length; i++)(a = t._soundById(o[i])) && (a._volume = e, r[2] || t._stopFade(o[i]), t._webAudio && a._node && !a._muted ? a._node.gain.setValueAtTime(e, n.ctx.currentTime) : a._node && !a._muted && (a._node.volume = e * n.volume()), t._emit("volume", a._id));
                    return t
                },
                fade: function (e, o, t, r) {
                    var a = this,
                        i = Math.abs(e - o),
                        u = e > o ? "out" : "in",
                        d = i / .01,
                        _ = d > 0 ? t / d : t;
                    if (_ < 4 && (d = Math.ceil(d / (4 / _)), _ = 4), "loaded" !== a._state) return a._queue.push({
                        event: "fade",
                        action: function () {
                            a.fade(e, o, t, r)
                        }
                    }),
                        a;
                    a.volume(e, r);
                    for (var s = a._getSoundIds(r), l = 0; l < s.length; l++) {
                        var c = a._soundById(s[l]);
                        if (c) {
                            if (r || a._stopFade(s[l]), a._webAudio && !c._muted) {
                                var f = n.ctx.currentTime,
                                    p = f + t / 1e3;
                                c._volume = e,
                                    c._node.gain.setValueAtTime(e, f),
                                    c._node.gain.linearRampToValueAtTime(o, p)
                            }
                            var v = e;
                            c._interval = setInterval(function (n, t) {
                                d > 0 && (v += "in" === u ? .01 : -.01),
                                    v = Math.max(0, v),
                                    v = Math.min(1, v),
                                    v = Math.round(100 * v) / 100,
                                    a._webAudio ? (void 0 === r && (a._volume = v), t._volume = v) : a.volume(v, n, !0),
                                    (o < e && v <= o || o > e && v >= o) && (clearInterval(t._interval), t._interval = null, a.volume(o, n), a._emit("fade", n))
                            }.bind(a, s[l], c), _)
                        }
                    }
                    return a
                },
                _stopFade: function (e) {
                    var o = this,
                        t = o._soundById(e);
                    return t && t._interval && (o._webAudio && t._node.gain.cancelScheduledValues(n.ctx.currentTime), clearInterval(t._interval), t._interval = null, o._emit("fade", e)),
                        o
                },
                loop: function () {
                    var e, n, o, t = this,
                        r = arguments;
                    if (0 === r.length) return t._loop;
                    if (1 === r.length) {
                        if ("boolean" != typeof r[0]) return !!(o = t._soundById(parseInt(r[0], 10))) && o._loop;
                        e = r[0],
                            t._loop = e
                    } else 2 === r.length && (e = r[0], n = parseInt(r[1], 10));
                    for (var a = t._getSoundIds(n), i = 0; i < a.length; i++)(o = t._soundById(a[i])) && (o._loop = e, t._webAudio && o._node && o._node.bufferSource && (o._node.bufferSource.loop = e, e && (o._node.bufferSource.loopStart = o._start || 0, o._node.bufferSource.loopEnd = o._stop)));
                    return t
                },
                rate: function () {
                    var e, o, t = this,
                        r = arguments;
                    if (0 === r.length) o = t._sounds[0]._id;
                    else if (1 === r.length) {
                        var a = t._getSoundIds(),
                            i = a.indexOf(r[0]);
                        i >= 0 ? o = parseInt(r[0], 10) : e = parseFloat(r[0])
                    } else 2 === r.length && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
                    var u;
                    if ("number" != typeof e) return u = t._soundById(o),
                        u ? u._rate : t._rate;
                    if ("loaded" !== t._state) return t._queue.push({
                        event: "rate",
                        action: function () {
                            t.rate.apply(t, r)
                        }
                    }),
                        t;
                    void 0 === o && (t._rate = e),
                        o = t._getSoundIds(o);
                    for (var d = 0; d < o.length; d++) if (u = t._soundById(o[d])) {
                        u._rateSeek = t.seek(o[d]),
                            u._playStart = t._webAudio ? n.ctx.currentTime : u._playStart,
                            u._rate = e,
                            t._webAudio && u._node && u._node.bufferSource ? u._node.bufferSource.playbackRate.value = e : u._node && (u._node.playbackRate = e);
                        var _ = t.seek(o[d]),
                            s = (t._sprite[u._sprite][0] + t._sprite[u._sprite][1]) / 1e3 - _,
                            l = 1e3 * s / Math.abs(u._rate); !t._endTimers[o[d]] && u._paused || (t._clearTimer(o[d]), t._endTimers[o[d]] = setTimeout(t._ended.bind(t, u), l)),
                                t._emit("rate", u._id)
                    }
                    return t
                },
                seek: function () {
                    var e, o, t = this,
                        r = arguments;
                    if (0 === r.length) o = t._sounds[0]._id;
                    else if (1 === r.length) {
                        var a = t._getSoundIds(),
                            i = a.indexOf(r[0]);
                        i >= 0 ? o = parseInt(r[0], 10) : (o = t._sounds[0]._id, e = parseFloat(r[0]))
                    } else 2 === r.length && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
                    if (void 0 === o) return t;
                    if ("loaded" !== t._state) return t._queue.push({
                        event: "seek",
                        action: function () {
                            t.seek.apply(t, r)
                        }
                    }),
                        t;
                    var u = t._soundById(o);
                    if (u) {
                        if (!("number" == typeof e && e >= 0)) {
                            if (t._webAudio) {
                                var d = t.playing(o) ? n.ctx.currentTime - u._playStart : 0,
                                    _ = u._rateSeek ? u._rateSeek - u._seek : 0;
                                return u._seek + (_ + d * Math.abs(u._rate))
                            }
                            return u._node.currentTime
                        }
                        var s = t.playing(o);
                        s && t.pause(o, !0),
                            u._seek = e,
                            u._ended = !1,
                            t._clearTimer(o),
                            s && t.play(o, !0),
                            !t._webAudio && u._node && (u._node.currentTime = e),
                            t._emit("seek", o)
                    }
                    return t
                },
                playing: function (e) {
                    var n = this;
                    if ("number" == typeof e) {
                        var o = n._soundById(e);
                        return !!o && !o._paused
                    }
                    for (var t = 0; t < n._sounds.length; t++) if (!n._sounds[t]._paused) return !0;
                    return !1
                },
                duration: function (e) {
                    var n = this,
                        o = n._duration,
                        t = n._soundById(e);
                    return t && (o = n._sprite[t._sprite][1] / 1e3),
                        o
                },
                state: function () {
                    return this._state
                },
                unload: function () {
                    for (var e = this,
                        o = e._sounds,
                        t = 0; t < o.length; t++) {
                        o[t]._paused || e.stop(o[t]._id),
                            e._webAudio || (/MSIE |Trident\//.test(n._navigator && n._navigator.userAgent) || (o[t]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), o[t]._node.removeEventListener("error", o[t]._errorFn, !1), o[t]._node.removeEventListener(n._canPlayEvent, o[t]._loadFn, !1)),
                            delete o[t]._node,
                            e._clearTimer(o[t]._id);
                        var a = n._howls.indexOf(e);
                        a >= 0 && n._howls.splice(a, 1)
                    }
                    var i = !0;
                    for (t = 0; t < n._howls.length; t++) if (n._howls[t]._src === e._src) {
                        i = !1;
                        break
                    }
                    return r && i && delete r[e._src],
                        n.noAudio = !1,
                        e._state = "unloaded",
                        e._sounds = [],
                        e = null,
                        null
                },
                on: function (e, n, o, t) {
                    var r = this,
                        a = r["_on" + e];
                    return "function" == typeof n && a.push(t ? {
                        id: o,
                        fn: n,
                        once: t
                    } : {
                            id: o,
                            fn: n
                        }),
                        r
                },
                off: function (e, n, o) {
                    var t = this,
                        r = t["_on" + e],
                        a = 0;
                    if ("number" == typeof n && (o = n, n = null), n || o) for (a = 0; a < r.length; a++) {
                        var i = o === r[a].id;
                        if (n === r[a].fn && i || !n && i) {
                            r.splice(a, 1);
                            break
                        }
                    } else if (e) t["_on" + e] = [];
                    else {
                        var u = Object.keys(t);
                        for (a = 0; a < u.length; a++) 0 === u[a].indexOf("_on") && Array.isArray(t[u[a]]) && (t[u[a]] = [])
                    }
                    return t
                },
                once: function (e, n, o) {
                    var t = this;
                    return t.on(e, n, o, 1),
                        t
                },
                _emit: function (e, n, o) {
                    for (var t = this,
                        r = t["_on" + e], a = r.length - 1; a >= 0; a--) r[a].id && r[a].id !== n && "load" !== e || (setTimeout(function (e) {
                            e.call(this, n, o)
                        }.bind(t, r[a].fn), 0), r[a].once && t.off(e, r[a].fn, r[a].id));
                    return t
                },
                _loadQueue: function () {
                    var e = this;
                    if (e._queue.length > 0) {
                        var n = e._queue[0];
                        e.once(n.event,
                            function () {
                                e._queue.shift(),
                                    e._loadQueue()
                            }),
                            n.action()
                    }
                    return e
                },
                _ended: function (e) {
                    var o = this,
                        t = e._sprite;
                    if (!o._webAudio && o._node && !o._node.ended) return setTimeout(o._ended.bind(o, e), 100),
                        o;
                    var r = !(!e._loop && !o._sprite[t][2]);
                    if (o._emit("end", e._id), !o._webAudio && r && o.stop(e._id, !0).play(e._id), o._webAudio && r) {
                        o._emit("play", e._id),
                            e._seek = e._start || 0,
                            e._rateSeek = 0,
                            e._playStart = n.ctx.currentTime;
                        var a = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                        o._endTimers[e._id] = setTimeout(o._ended.bind(o, e), a)
                    }
                    return o._webAudio && !r && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, o._clearTimer(e._id), o._cleanBuffer(e._node), n._autoSuspend()),
                        o._webAudio || r || o.stop(e._id),
                        o
                },
                _clearTimer: function (e) {
                    var n = this;
                    return n._endTimers[e] && (clearTimeout(n._endTimers[e]), delete n._endTimers[e]),
                        n
                },
                _soundById: function (e) {
                    for (var n = this,
                        o = 0; o < n._sounds.length; o++) if (e === n._sounds[o]._id) return n._sounds[o];
                    return null
                },
                _inactiveSound: function () {
                    var e = this;
                    e._drain();
                    for (var n = 0; n < e._sounds.length; n++) if (e._sounds[n]._ended) return e._sounds[n].reset();
                    return new t(e)
                },
                _drain: function () {
                    var e = this,
                        n = e._pool,
                        o = 0,
                        t = 0;
                    if (!(e._sounds.length < n)) {
                        for (t = 0; t < e._sounds.length; t++) e._sounds[t]._ended && o++;
                        for (t = e._sounds.length - 1; t >= 0; t--) {
                            if (o <= n) return;
                            e._sounds[t]._ended && (e._webAudio && e._sounds[t]._node && e._sounds[t]._node.disconnect(0), e._sounds.splice(t, 1), o--)
                        }
                    }
                },
                _getSoundIds: function (e) {
                    var n = this;
                    if (void 0 === e) {
                        for (var o = [], t = 0; t < n._sounds.length; t++) o.push(n._sounds[t]._id);
                        return o
                    }
                    return [e]
                },
                _refreshBuffer: function (e) {
                    var o = this;
                    return e._node.bufferSource = n.ctx.createBufferSource(),
                        e._node.bufferSource.buffer = r[o._src],
                        e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
                        e._node.bufferSource.loop = e._loop,
                        e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop),
                        e._node.bufferSource.playbackRate.value = e._rate,
                        o
                },
                _cleanBuffer: function (e) {
                    var n = this;
                    if (n._scratchBuffer) {
                        e.bufferSource.onended = null,
                            e.bufferSource.disconnect(0);
                        try {
                            e.bufferSource.buffer = n._scratchBuffer
                        } catch (e) { }
                    }
                    return e.bufferSource = null,
                        n
                }
            };
            var t = function (e) {
                this._parent = e,
                    this.init()
            };
            t.prototype = {
                init: function () {
                    var e = this,
                        o = e._parent;
                    return e._muted = o._muted,
                        e._loop = o._loop,
                        e._volume = o._volume,
                        e._rate = o._rate,
                        e._seek = 0,
                        e._paused = !0,
                        e._ended = !0,
                        e._sprite = "__default",
                        e._id = ++n._counter,
                        o._sounds.push(e),
                        e.create(),
                        e
                },
                create: function () {
                    var e = this,
                        o = e._parent,
                        t = n._muted || e._muted || e._parent._muted ? 0 : e._volume;
                    return o._webAudio ? (e._node = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), e._node.gain.setValueAtTime(t, n.ctx.currentTime), e._node.paused = !0, e._node.connect(n.masterGain)) : (e._node = new Audio, e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(n._canPlayEvent, e._loadFn, !1), e._node.src = o._src, e._node.preload = "auto", e._node.volume = t * n.volume(), e._node.load()),
                        e
                },
                reset: function () {
                    var e = this,
                        o = e._parent;
                    return e._muted = o._muted,
                        e._loop = o._loop,
                        e._volume = o._volume,
                        e._rate = o._rate,
                        e._seek = 0,
                        e._rateSeek = 0,
                        e._paused = !0,
                        e._ended = !0,
                        e._sprite = "__default",
                        e._id = ++n._counter,
                        e
                },
                _errorListener: function () {
                    var e = this;
                    e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0),
                        e._node.removeEventListener("error", e._errorFn, !1)
                },
                _loadListener: function () {
                    var e = this,
                        o = e._parent;
                    o._duration = Math.ceil(10 * e._node.duration) / 10,
                        0 === Object.keys(o._sprite).length && (o._sprite = {
                            __default: [0, 1e3 * o._duration]
                        }),
                        "loaded" !== o._state && (o._state = "loaded", o._emit("load"), o._loadQueue()),
                        e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1)
                }
            };
            var r = {},
                a = function (e) {
                    var n = e._src;
                    if (r[n]) return e._duration = r[n].duration,
                        void d(e);
                    if (/^data:[^;]+;base64,/.test(n)) {
                        for (var o = atob(n.split(",")[1]), t = new Uint8Array(o.length), a = 0; a < o.length; ++a) t[a] = o.charCodeAt(a);
                        u(t.buffer, e)
                    } else {
                        var _ = new XMLHttpRequest;
                        _.open("GET", n, !0),
                            _.responseType = "arraybuffer",
                            _.onload = function () {
                                var n = (_.status + "")[0];
                                if ("0" !== n && "2" !== n && "3" !== n) return void e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
                                u(_.response, e)
                            },
                            _.onerror = function () {
                                e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete r[n], e.load())
                            },
                            i(_)
                    }
                },
                i = function (e) {
                    try {
                        e.send()
                    } catch (n) {
                        e.onerror()
                    }
                },
                u = function (e, o) {
                    n.ctx.decodeAudioData(e,
                        function (e) {
                            e && o._sounds.length > 0 && (r[o._src] = e, d(o, e))
                        },
                        function () {
                            o._emit("loaderror", null, "Decoding audio data failed.")
                        })
                },
                d = function (e, n) {
                    n && !e._duration && (e._duration = n.duration),
                        0 === Object.keys(e._sprite).length && (e._sprite = {
                            __default: [0, 1e3 * e._duration]
                        }),
                        "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
                },
                _ = function () {
                    try {
                        "undefined" != typeof AudioContext ? n.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? n.ctx = new webkitAudioContext : n.usingWebAudio = !1
                    } catch (e) {
                        n.usingWebAudio = !1
                    }
                    var e = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform),
                        o = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                        t = o ? parseInt(o[1], 10) : null;
                    if (e && t && t < 9) {
                        var r = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase()); (n._navigator && n._navigator.standalone && !r || n._navigator && !n._navigator.standalone && !r) && (n.usingWebAudio = !1)
                    }
                    n.usingWebAudio && (n.masterGain = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), n.masterGain.gain.value = n._muted ? 0 : 1, n.masterGain.connect(n.ctx.destination)),
                        n._setup()
                };
            "function" == typeof define && define.amd && define([],
                function () {
                    return {
                        Howler: n,
                        Howl: o
                    }
                }),
                "undefined" != typeof exports && (exports.Howler = n, exports.Howl = o),
                "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = n, window.Howl = o, window.Sound = t) : "undefined" != typeof global && (global.HowlerGlobal = e, global.Howler = n, global.Howl = o, global.Sound = t)
        }(),
        function () {
            "use strict";
            HowlerGlobal.prototype._pos = [0, 0, 0],
                HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
                HowlerGlobal.prototype.stereo = function (e) {
                    var n = this;
                    if (!n.ctx || !n.ctx.listener) return n;
                    for (var o = n._howls.length - 1; o >= 0; o--) n._howls[o].stereo(e);
                    return n
                },
                HowlerGlobal.prototype.pos = function (e, n, o) {
                    var t = this;
                    return t.ctx && t.ctx.listener ? (n = "number" != typeof n ? t._pos[1] : n, o = "number" != typeof o ? t._pos[2] : o, "number" != typeof e ? t._pos : (t._pos = [e, n, o], t.ctx.listener.setPosition(t._pos[0], t._pos[1], t._pos[2]), t)) : t
                },
                HowlerGlobal.prototype.orientation = function (e, n, o, t, r, a) {
                    var i = this;
                    if (!i.ctx || !i.ctx.listener) return i;
                    var u = i._orientation;
                    return n = "number" != typeof n ? u[1] : n,
                        o = "number" != typeof o ? u[2] : o,
                        t = "number" != typeof t ? u[3] : t,
                        r = "number" != typeof r ? u[4] : r,
                        a = "number" != typeof a ? u[5] : a,
                        "number" != typeof e ? u : (i._orientation = [e, n, o, t, r, a], i.ctx.listener.setOrientation(e, n, o, t, r, a), i)
                },
                Howl.prototype.init = function (e) {
                    return function (n) {
                        var o = this;
                        return o._orientation = n.orientation || [1, 0, 0],
                            o._stereo = n.stereo || null,
                            o._pos = n.pos || null,
                            o._pannerAttr = {
                                coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : 360,
                                coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : 360,
                                coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : 0,
                                distanceModel: void 0 !== n.distanceModel ? n.distanceModel : "inverse",
                                maxDistance: void 0 !== n.maxDistance ? n.maxDistance : 1e4,
                                panningModel: void 0 !== n.panningModel ? n.panningModel : "HRTF",
                                refDistance: void 0 !== n.refDistance ? n.refDistance : 1,
                                rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : 1
                            },
                            o._onstereo = n.onstereo ? [{
                                fn: n.onstereo
                            }] : [],
                            o._onpos = n.onpos ? [{
                                fn: n.onpos
                            }] : [],
                            o._onorientation = n.onorientation ? [{
                                fn: n.onorientation
                            }] : [],
                            e.call(this, n)
                    }
                }(Howl.prototype.init),
                Howl.prototype.stereo = function (n, o) {
                    var t = this;
                    if (!t._webAudio) return t;
                    if ("loaded" !== t._state) return t._queue.push({
                        event: "stereo",
                        action: function () {
                            t.stereo(n, o)
                        }
                    }),
                        t;
                    var r = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                    if (void 0 === o) {
                        if ("number" != typeof n) return t._stereo;
                        t._stereo = n,
                            t._pos = [n, 0, 0]
                    }
                    for (var a = t._getSoundIds(o), i = 0; i < a.length; i++) {
                        var u = t._soundById(a[i]);
                        if (u) {
                            if ("number" != typeof n) return u._stereo;
                            u._stereo = n,
                                u._pos = [n, 0, 0],
                                u._node && (u._pannerAttr.panningModel = "equalpower", u._panner && u._panner.pan || e(u, r), "spatial" === r ? u._panner.setPosition(n, 0, 0) : u._panner.pan.value = n),
                                t._emit("stereo", u._id)
                        }
                    }
                    return t
                },
                Howl.prototype.pos = function (n, o, t, r) {
                    var a = this;
                    if (!a._webAudio) return a;
                    if ("loaded" !== a._state) return a._queue.push({
                        event: "pos",
                        action: function () {
                            a.pos(n, o, t, r)
                        }
                    }),
                        a;
                    if (o = "number" != typeof o ? 0 : o, t = "number" != typeof t ? -.5 : t, void 0 === r) {
                        if ("number" != typeof n) return a._pos;
                        a._pos = [n, o, t]
                    }
                    for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
                        var d = a._soundById(i[u]);
                        if (d) {
                            if ("number" != typeof n) return d._pos;
                            d._pos = [n, o, t],
                                d._node && (d._panner && !d._panner.pan || e(d, "spatial"), d._panner.setPosition(n, o, t)),
                                a._emit("pos", d._id)
                        }
                    }
                    return a
                },
                Howl.prototype.orientation = function (n, o, t, r) {
                    var a = this;
                    if (!a._webAudio) return a;
                    if ("loaded" !== a._state) return a._queue.push({
                        event: "orientation",
                        action: function () {
                            a.orientation(n, o, t, r)
                        }
                    }),
                        a;
                    if (o = "number" != typeof o ? a._orientation[1] : o, t = "number" != typeof t ? a._orientation[2] : t, void 0 === r) {
                        if ("number" != typeof n) return a._orientation;
                        a._orientation = [n, o, t]
                    }
                    for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
                        var d = a._soundById(i[u]);
                        if (d) {
                            if ("number" != typeof n) return d._orientation;
                            d._orientation = [n, o, t],
                                d._node && (d._panner || (d._pos || (d._pos = a._pos || [0, 0, -.5]), e(d, "spatial")), d._panner.setOrientation(n, o, t)),
                                a._emit("orientation", d._id)
                        }
                    }
                    return a
                },
                Howl.prototype.pannerAttr = function () {
                    var n, o, t, r = this,
                        a = arguments;
                    if (!r._webAudio) return r;
                    if (0 === a.length) return r._pannerAttr;
                    if (1 === a.length) {
                        if ("object" != typeof a[0]) return t = r._soundById(parseInt(a[0], 10)),
                            t ? t._pannerAttr : r._pannerAttr;
                        n = a[0],
                            void 0 === o && (r._pannerAttr = {
                                coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : r._coneInnerAngle,
                                coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : r._coneOuterAngle,
                                coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : r._coneOuterGain,
                                distanceModel: void 0 !== n.distanceModel ? n.distanceModel : r._distanceModel,
                                maxDistance: void 0 !== n.maxDistance ? n.maxDistance : r._maxDistance,
                                panningModel: void 0 !== n.panningModel ? n.panningModel : r._panningModel,
                                refDistance: void 0 !== n.refDistance ? n.refDistance : r._refDistance,
                                rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : r._rolloffFactor
                            })
                    } else 2 === a.length && (n = a[0], o = parseInt(a[1], 10));
                    for (var i = r._getSoundIds(o), u = 0; u < i.length; u++) if (t = r._soundById(i[u])) {
                        var d = t._pannerAttr;
                        d = {
                            coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : d.coneInnerAngle,
                            coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : d.coneOuterAngle,
                            coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : d.coneOuterGain,
                            distanceModel: void 0 !== n.distanceModel ? n.distanceModel : d.distanceModel,
                            maxDistance: void 0 !== n.maxDistance ? n.maxDistance : d.maxDistance,
                            panningModel: void 0 !== n.panningModel ? n.panningModel : d.panningModel,
                            refDistance: void 0 !== n.refDistance ? n.refDistance : d.refDistance,
                            rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : d.rolloffFactor
                        };
                        var _ = t._panner;
                        _ ? (_.coneInnerAngle = d.coneInnerAngle, _.coneOuterAngle = d.coneOuterAngle, _.coneOuterGain = d.coneOuterGain, _.distanceModel = d.distanceModel, _.maxDistance = d.maxDistance, _.panningModel = d.panningModel, _.refDistance = d.refDistance, _.rolloffFactor = d.rolloffFactor) : (t._pos || (t._pos = r._pos || [0, 0, -.5]), e(t, "spatial"))
                    }
                    return r
                },
                Sound.prototype.init = function (e) {
                    return function () {
                        var n = this,
                            o = n._parent;
                        n._orientation = o._orientation,
                            n._stereo = o._stereo,
                            n._pos = o._pos,
                            n._pannerAttr = o._pannerAttr,
                            e.call(this),
                            n._stereo ? o.stereo(n._stereo) : n._pos && o.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
                    }
                }(Sound.prototype.init),
                Sound.prototype.reset = function (e) {
                    return function () {
                        var n = this,
                            o = n._parent;
                        return n._orientation = o._orientation,
                            n._pos = o._pos,
                            n._pannerAttr = o._pannerAttr,
                            e.call(this)
                    }
                }(Sound.prototype.reset);
            var e = function (e, n) {
                n = n || "spatial",
                    "spatial" === n ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.panningModel = e._pannerAttr.panningModel, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.value = e._stereo),
                    e._panner.connect(e._node),
                    e._paused || e._parent.pause(e._id, !0).play(e._id)
            }
        }();
var vis = function () {
    var i, n, e = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (i in e) if (i in document) {
        n = e[i];
        break
    }
    return function (e) {
        return e && document.addEventListener(n, e), !document[i]
    }
}();
vis(function () {
    vis() ? setTimeout(function () { visibleResume() }, 300) : visiblePause()
});

function visibleResume() {
    famobiPauseActive || (hasFocus || (userInput && userInput.checkKeyFocus(), muted || "pause" == gameState || "splash" == gameState || "loading" == gameState || (Howler.mute(!1), playMusic())), hasFocus = !0)
}
function visiblePause() {
    famobiPauseActive || (hasFocus = !1, Howler.mute(!0), music.pause())
}
function playMusic() {
    music.playing() || music.play()
}
function isStock() {
    var a = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return a && parseFloat(a[1]) < 537
}
function extGameLoad() {
    loadPreAssets()
}
function initSplash() {
    gameState = "splash",
        resizeCanvas(),
        window.famobi_onPauseRequested = function () {
            Howler.mute(!0),
                music.pause(),
                famobiPauseActive = !0
        },
        window.famobi_onResumeRequested = function () {
            muted || "pause" == gameState || (Howler.mute(!1), music.play()),
                famobiPauseActive = !1
        },
        window.famobi.localStorage.getItem("muted") && (muted = !1, toggleMute(!0)),
        1 != audioType || muted || (playMusic(), hasFocus || music.pause()),
        initStartScreen()
}
function initStartScreen() {
    gameState = "start";
    try {
        window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_HOME)
    } catch (a) { }
    levelNum = 0,
        gameMode = "levels",
        userInput.removeHitArea("moreGames"),
        1 == audioType && music.fade(music.volume(), .25, 500),
        (saveDataHandler.getTotalScore() > 0 || saveDataHandler.getChallengeHighscore() > 0) && (firstRun = !1);
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [- 86, -2],
        align: [.5, .7],
        id: oImageIds.playBut0
    },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [100, 0],
            align: [.5, .7],
            id: oImageIds.playBut1
        },
        e = {
            oImgData: assetLib.getData("moreGamesBut"),
            aPos: [82, -40],
            align: [0, 1],
            id: "none",
            scale: .25,
            noMove: !0
        },
        i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [- 95, 32],
            align: [1, 0],
            id: oImageIds.infoBut,
            noMove: !0
        };
    userInput.addHitArea("playFromStart0", butEventHandler, null, "image", a),
        userInput.addHitArea("playFromStart1", butEventHandler, null, "image", t),
        userInput.addHitArea("moreGamesFromStart", butEventHandler, null, "image", e),
        userInput.addHitArea("creditsFromStart", butEventHandler, null, "image", i);
    var s = new Array(a, t, e, i);
    addMuteBut(s),
        aArrowsFired = new Array,
        aBirds = new Array;
    for (var o = Math.floor(4 * Math.random()) + 4, r = 0; r < o; r++) addBird();
    if (levelNum = 50, "balloons" == aLevelData[levelNum].misc.id) {
        aLevelBalloonData = new Array;
        for (var r = 0; r < aBalloonData[aLevelData[levelNum].misc.num].length; r++) aLevelBalloonData.push({
            rot: aBalloonData[aLevelData[levelNum].misc.num][r].rot,
            hyp: aBalloonData[aLevelData[levelNum].misc.num][r].hyp,
            scale: aBalloonData[aLevelData[levelNum].misc.num][r].scale,
            colour: r % 7
        })
    }
    archeryView = new Elements.ArcheryView(!0),
        panel = new Elements.Panel(gameState, s),
        aDrifters = new Array;
    for (var r = 0; r < 4; r++) {
        var h = new Elements.Drifters(assetLib.getData("drifters"), "ambient");
        h.x = canvas.width / 2 * (r % 2) + canvas.width / 4,
            h.y = canvas.height / 2 * Math.floor(r / 2) + canvas.height / 4,
            h.scaleX = h.scaleY = .4 * Math.random() + .8,
            aDrifters.push(h)
    }
    panel.startTween1(),
        previousTime = (new Date).getTime(),
        updateStartScreenEvent()
}
function addMuteBut(a) {
    if (1 == audioType) {
        var t = oImageIds.muteBut0;
        muted && (t = oImageIds.muteBut1);
        var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [- 32, 32],
            align: [1, 0],
            id: t,
            noMove: !0
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", e),
            a.push(e)
    }
}
function initCreditsScreen() {
    gameState = "credits";
    try {
        window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_CREDITS)
    } catch (a) { }
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [55, -35],
        align: [0, 1],
        id: oImageIds.backBut,
        noMove: !0
    },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [- 55, -35],
            align: [1, 1],
            id: oImageIds.resetBut,
            noMove: !0
        };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", a),
        userInput.addHitArea("resetData", butEventHandler, null, "image", t);
    var e = new Array(a, t);
    addMuteBut(e),
        panel = new Elements.Panel(gameState, e),
        panel.startTween1(),
        aArrowsFired = new Array,
        archeryView = new Elements.ArcheryView(!0),
        previousTime = (new Date).getTime(),
        updateCreditsScreenEvent()
}
function setTreeData() {
    aTreeData = new Array;
    for (var a = 0; a < treeNum; a++) aTreeData.push({
        scaleL: .1 * Math.random() + .9,
        idL: "tree" + sceneType + Math.floor(3 * Math.random()),
        scaleR: .1 * Math.random() + .9,
        idR: "tree" + sceneType + Math.floor(3 * Math.random())
    })
}
function initMap() {
    gameState = "map";
    try {
        window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_LEVELSELECT)
    } catch (a) { }
    1 == audioType && music.fade(music.volume(), .25, 500);
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [55, -35],
        align: [0, 1],
        id: oImageIds.backBut,
        noMove: !0
    };
    userInput.addHitArea("backFromMap", butEventHandler, null, "image", a);
    var t = new Array(a);
    addMuteBut(t),
        panel = new Elements.Panel(gameState, t),
        userInput.addHitArea("mapTouch", butEventHandler, {
            isDraggable: !0,
            multiTouch: !0
        },
            "rect", {
                aRect: [0, 0, canvas.width, canvas.height]
            },
            !0),
        panel.mapButIdToHighlight = -1,
        setMapData(),
        panel.startTween1(),
        aFireworks = new Array,
        previousTime = (new Date).getTime(),
        updateMapScreenEvent()
}
function setMapData() {
    var a = saveDataHandler.getLastUnlockedLevel(); - 1 == a && (a = 49),
        mapPosX = mapPosRealX = Math.max(Math.min(aLevelData[a].mapX - canvas.width / 2, 1446 - canvas.width), 0),
        mapPosY = mapPosRealY = Math.max(Math.min(aLevelData[a].mapY - canvas.height / 2, 1111 - canvas.height), 0),
        mapScale = 1,
        canvas.width > 1446 && (mapScale = canvas.width / 1446),
        canvas.height > 1111 && (mapScale = Math.max(canvas.height / 1111, mapScale))
}
function initLevelPreview() {
    gameState = "levelPreview";
    try {
        window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_LEVELINTRO)
    } catch (a) { }
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [140, 170],
        align: [.5, .5],
        id: oImageIds.nextBut
    },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [55, -35],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0
        };
    userInput.addHitArea("nextFromPreview", butEventHandler, null, "image", a),
        userInput.addHitArea("backFromPreview", butEventHandler, null, "image", t);
    var e = new Array(t, a);
    addMuteBut(e),
        setMapData(),
        panel = new Elements.Panel(gameState, e),
        panel.startTween1(),
        previousTime = (new Date).getTime(),
        updateLevelPreviewEvent()
}
function initGame(a, t) {
    if (gameState = "game", gameMode = a, challengeLevelNum = 0, "levels" == gameMode) if (t) try {
        window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELRESTART, {
            levelName: (levelNum + 1).toString()
        })
    } catch (a) { } else try {
        window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSTART, {
            levelName: (levelNum + 1).toString()
        })
    } catch (a) { } else if (t) try {
        window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELRESTART, {
            levelName: "challenge"
        })
    } catch (a) { } else try {
        window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSTART, {
            levelName: "challenge"
        })
    } catch (a) { }
    1 == audioType && music.fade(music.volume(), .5, 1e3),
        aArrowsFired = new Array,
        targRot = aLevelData[levelNum].targType > 0 && aLevelData[levelNum].targType < 3 ? 360 * Math.random() * radian : 0,
        playSound("gameStart");
    var e = new Array;
    if (addMuteBut(e), firstRun) {
        var i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [5, 155],
            align: [.5, .5],
            id: oImageIds.nextBut
        };
        userInput.addHitArea("tutDone", butEventHandler, null, "image", i),
            e.push(i)
    } else {
        var s = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [- 95, 32],
            align: [1, 0],
            id: oImageIds.pauseBut,
            noMove: !0
        };
        userInput.addHitArea("pause", butEventHandler, null, "image", s),
            e.push(s),
            userInput.addHitArea("gameTouch", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0
            },
                "rect", {
                    aRect: [0, 65, canvas.width, canvas.height]
                },
                !0)
    }
    if (panel = new Elements.Panel(gameState, e), "balloons" == aLevelData[levelNum].misc.id) {
        aLevelBalloonData = new Array;
        for (var o = 0; o < aBalloonData[aLevelData[levelNum].misc.num].length; o++) aLevelBalloonData.push({
            rot: aBalloonData[aLevelData[levelNum].misc.num][o].rot,
            hyp: aBalloonData[aLevelData[levelNum].misc.num][o].hyp,
            scale: aBalloonData[aLevelData[levelNum].misc.num][o].scale,
            colour: o % 7
        })
    }
    archeryView = new Elements.ArcheryView,
        aBirds = new Array;
    for (var r = Math.floor(4 * Math.random()) + 4, o = 0; o < r; o++) addBird();
    aDrifters = new Array;
    for (var o = 0; o < 4; o++) {
        var h = new Elements.Drifters(assetLib.getData("drifters"), "ambient");
        h.x = canvas.width / 2 * (o % 2) + canvas.width / 4,
            h.y = canvas.height / 2 * Math.floor(o / 2) + canvas.height / 4,
            h.scaleX = h.scaleY = .4 * Math.random() + .8,
            aDrifters.push(h)
    }
    bow = new Elements.Bow,
        hud = new Elements.Hud,
        panel.startTween1(),
        aFireworks = new Array,
        moveIncX = 0,
        moveIncY = 0,
        moveState = 0,
        levelScore = 0,
        quiver = aLevelData[levelNum].quiver,
        previousTime = (new Date).getTime(),
        updateGameEvent()
}
function resumeGame() {
    gameState = "game";
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [- 95, 32],
        align: [1, 0],
        id: oImageIds.pauseBut,
        noMove: !0
    };
    userInput.addHitArea("pause", butEventHandler, null, "image", a);
    var t = new Array(a);
    addMuteBut(t),
        userInput.addHitArea("gameTouch", butEventHandler, {
            isDraggable: !0,
            multiTouch: !0
        },
            "rect", {
                aRect: [0, 65, canvas.width, canvas.height]
            },
            !0),
        panel = new Elements.Panel(gameState, t),
        panel.startTween1(),
        previousTime = (new Date).getTime(),
        updateGameEvent()
}
function initPause() {
    gameState = "pause";
    try {
        window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_PAUSE)
    } catch (a) { }
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [0, -90],
        align: [.5, .5],
        id: oImageIds.nextBut,
        noMove: !0
    },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 0],
            align: [.5, .5],
            id: oImageIds.restart1But,
            noMove: !0
        },
        e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 90],
            align: [.5, .5],
            id: oImageIds.quitBut,
            noMove: !0
        };
    userInput.addHitArea("resumeGameFromPause", butEventHandler, null, "image", a),
        userInput.addHitArea("restartGameFromPause", butEventHandler, null, "image", t),
        userInput.addHitArea("quitGameFromPause", butEventHandler, null, "image", e);
    var i = new Array(a, t, e);
    panel = new Elements.Panel(gameState, i),
        panel.startTween1(),
        previousTime = (new Date).getTime(),
        background = new Elements.Background,
        updatePauseEvent()
}
function initAnimateMap() {
    gameState = "animateMap";
    var a = new Array;
    addMuteBut(a),
        panel = new Elements.Panel(gameState, a),
        setMapData(),
        panel.startTween1(),
        panel.tweenFinger(),
        previousTime = (new Date).getTime(),
        updateAnimateMapEvent()
}
function butEventHandler(a, t) {
    switch (a) {
        case "langSelect":
            curLang = t.lang,
                ctx.clearRect(0, 0, canvas.width, canvas.height),
                userInput.removeHitArea("langSelect"),
                preAssetLib = new Utils.AssetLoader(curLang, [{
                    id: "preloadImage",
                    file: "images/preloadImage.jpg"
                }], ctx, canvas.width, canvas.height, !1),
                preAssetLib.onReady(initLoadAssets);
            break;
        case "creditsFromStart":
            playSound("click"),
                userInput.removeHitArea("playFromStart0"),
                userInput.removeHitArea("playFromStart1"),
                userInput.removeHitArea("moreGamesFromStart"),
                userInput.removeHitArea("creditsFromStart"),
                userInput.removeHitArea("mute"),
                initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click"),
                userInput.removeHitArea("backFromCredits"),
                userInput.removeHitArea("resetData"),
                userInput.removeHitArea("mute"),
                initStartScreen();
            break;
        case "moreGamesFromStart":
        case "moreGamesPause":
            playSound("click");
            try {
                window.famobi.moreGamesLink()
            } catch (a) { }
            break;
        case "resetData":
            playSound("click"),
                userInput.removeHitArea("backFromCredits"),
                userInput.removeHitArea("resetData"),
                userInput.removeHitArea("mute"),
                saveDataHandler.resetData(),
                firstRun = !0,
                levelNum = 0,
                initStartScreen();
            break;
        case "playFromStart0":
            playSound("click"),
                userInput.removeHitArea("playFromStart0"),
                userInput.removeHitArea("playFromStart1"),
                userInput.removeHitArea("moreGamesFromStart"),
                userInput.removeHitArea("creditsFromStart"),
                userInput.removeHitArea("mute"),
                initMap();
            break;
        case "playFromStart1":
            playSound("click"),
                userInput.removeHitArea("playFromStart0"),
                userInput.removeHitArea("playFromStart1"),
                userInput.removeHitArea("moreGamesFromStart"),
                userInput.removeHitArea("creditsFromStart"),
                userInput.removeHitArea("mute"),
                initGame("challenge", !1);
            break;
        case "mapTouch":
            if (t.isBeingDragged && !t.hasLeft && mapTouchFirst) mapPosX = Math.max(Math.min(panel.mapStartX - t.x, 1446 - canvas.width), 0),
                mapPosY = Math.max(Math.min(panel.mapStartY - t.y, 1111 - canvas.height), 0);
            else if (t.isDown && 0 == t.isBeingDragged) panel.mapTween && panel.mapTween.kill(),
                panel.mapStartX = mapPosRealX + t.x,
                panel.mapDragX = t.x,
                panel.mapStartY = mapPosRealY + t.y,
                panel.mapDragY = t.y,
                mapTouchFirst = !0;
            else if (mapTouchFirst && (mapTouchFirst = !1, Math.abs(panel.mapDragY - t.y) < 10)) for (var e = 0; e < 50; e++) {
                var i = saveDataHandler.getLastUnlockedLevel();
                if ((e <= i || -1 == i) && t.x > (aLevelData[e].mapX - 50 - mapPosRealX) * mapScale && t.x < (aLevelData[e].mapX + 50 - mapPosRealX) * mapScale && t.y > (aLevelData[e].mapY - 50 - mapPosRealY) * mapScale && t.y < (aLevelData[e].mapY + 50 - mapPosRealY) * mapScale) {
                    levelNum = e,
                        userInput.removeHitArea("backFromMap"),
                        userInput.removeHitArea("mapTouch"),
                        userInput.removeHitArea("mute"),
                        playSound("click"),
                        initLevelPreview();
                    break
                }
            }
            break;
        case "backFromMap":
            playSound("click"),
                userInput.removeHitArea("backFromMap"),
                userInput.removeHitArea("mapTouch"),
                userInput.removeHitArea("mute"),
                initStartScreen();
            break;
        case "nextFromPreview":
            playSound("click"),
                userInput.removeHitArea("nextFromPreview"),
                userInput.removeHitArea("backFromPreview"),
                userInput.removeHitArea("mute"),
                initGame("levels", !1);
            break;
        case "backFromPreview":
            playSound("click"),
                userInput.removeHitArea("nextFromPreview"),
                userInput.removeHitArea("backFromPreview"),
                userInput.removeHitArea("mute"),
                initMap();
            break;
        case "tutDone":
            playSound("click"),
                userInput.removeHitArea("mute"),
                userInput.removeHitArea("tutDone");
            try {
                window.famobi_analytics.trackEvent(famobi_analytics.EVENT_TUTORIALCOMPLETED)
            } catch (a) { }
            var s = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [- 95, 32],
                align: [1, 0],
                id: oImageIds.pauseBut,
                noMove: !0
            };
            userInput.addHitArea("pause", butEventHandler, null, "image", s),
                userInput.addHitArea("gameTouch", butEventHandler, {
                    isDraggable: !0,
                    multiTouch: !0
                },
                    "rect", {
                        aRect: [0, 65, canvas.width, canvas.height]
                    },
                    !0),
                panel.aButs = new Array(s),
                addMuteBut(panel.aButs),
                firstRun = !1,
                archeryView.introTween(),
                bow.introTween();
            break;
        case "gameTouch":
            if (t.isBeingDragged && !t.hasLeft && bow.isHeld) bow.targAimX = t.x,
                bow.targAimY = t.y;
            else if (t.isDown && 0 == t.isBeingDragged) bow.startAimX = bow.targAimX = t.x,
                bow.startAimY = bow.targAimY = t.y,
                bow.isHeld = !0,
                playSound("bow"),
                bow.zoomIn(),
                archeryView.zoomIn();
            else if (bow.isHeld) {
                var o = hud.windPower * Math.cos(hud.windDir) * (.003 * archeryView.aTargData[archeryView.targPosId].dist),
                    r = hud.windPower * Math.sin(hud.windDir) * (.003 * archeryView.aTargData[archeryView.targPosId].dist),
                    h = 5e-4 * archeryView.aTargData[archeryView.targPosId].dist;
                hitPosX = (bow.x + bow.aScopeOffset[bow.bowId].x - archeryView.targetCentreX + moveIncX * archeryView.zoomScale * archeryView.aTargData[archeryView.targPosId].scale) / archeryView.aTargData[archeryView.targPosId].scale / archeryView.zoomScale / aimTargetRadius + o,
                    hitPosY = (bow.y - archeryView.targetCentreY + moveIncY * archeryView.zoomScale * archeryView.aTargData[archeryView.targPosId].scale) / archeryView.aTargData[archeryView.targPosId].scale / archeryView.zoomScale / aimTargetRadius + r + h,
                    bow.startAimX = bow.targAimX = 0,
                    bow.startAimY = bow.targAimY = 0,
                    userInput.removeHitArea("gameTouch"),
                    userInput.removeHitArea("mute"),
                    userInput.removeHitArea("pause"),
                    playSound("shoot" + Math.floor(5 * Math.random())),
                    bow.fireArrow()
            }
            break;
        case "nextLevel":
            playSound("click"),
                userInput.removeHitArea("jumpHeight"),
                userInput.removeHitArea("dashLength"),
                userInput.removeHitArea("turnRate"),
                userInput.removeHitArea("nextLevel"),
                levelScore = 0,
                levelNum++ ,
                initGame("levels", !1);
            break;
        case "retryFromEnd":
            playSound("click"),
                userInput.removeHitArea("retryFromEnd"),
                userInput.removeHitArea("quitFromEnd"),
                levelScore = 0,
                initGame(gameMode, !0);
            break;
        case "quitFromEnd":
            playSound("click"),
                userInput.removeHitArea("retryFromEnd"),
                userInput.removeHitArea("quitFromEnd"),
                initStartScreen();
            break;
        case "mute":
            playSound("click"),
                toggleMute(),
                muted ? panel.switchBut(oImageIds.muteBut0, oImageIds.muteBut1) : panel.switchBut(oImageIds.muteBut1, oImageIds.muteBut0);
            break;
        case "pause":
            playSound("click"),
                1 == audioType ? (Howler.mute(!0), music.pause()) : 2 == audioType && music.pause(),
                userInput.removeHitArea("pause"),
                userInput.removeHitArea("gameTouch"),
                userInput.removeHitArea("mute"),
                initPause();
            break;
        case "resumeGameFromPause":
            playSound("click"),
                1 == audioType ? muted || (Howler.mute(!1), playMusic()) : 2 == audioType && (muted || playMusic()),
                userInput.removeHitArea("resumeGameFromPause"),
                userInput.removeHitArea("restartGameFromPause"),
                userInput.removeHitArea("quitGameFromPause"),
                userInput.removeHitArea("mute"),
                resumeGame();
            break;
        case "restartGameFromPause":
            if (playSound("click"), "levels" == gameMode) try {
                window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELFAIL, {
                    levelName: (levelNum + 1).toString(),
                    reason: "draw"
                })
            } catch (a) { } else try {
                window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELFAIL, {
                    levelName: (challengeLevelNum + 1).toString(),
                    reason: "draw"
                })
            } catch (a) { }
            1 == audioType ? muted || (Howler.mute(!1), playMusic()) : 2 == audioType && (muted || playMusic()),
                userInput.removeHitArea("resumeGameFromPause"),
                userInput.removeHitArea("restartGameFromPause"),
                userInput.removeHitArea("quitGameFromPause"),
                userInput.removeHitArea("mute"),
                initGame(gameMode, !0);
            break;
        case "quitGameFromPause":
            playSound("click"),
                1 == audioType ? muted || (Howler.mute(!1), playMusic()) : 2 == audioType && (muted || playMusic()),
                userInput.removeHitArea("resumeGameFromPause"),
                userInput.removeHitArea("restartGameFromPause"),
                userInput.removeHitArea("quitGameFromPause"),
                userInput.removeHitArea("mute"),
                levelScore = 0,
                window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELFAIL, {
                    levelName: "" + ("levels" == gameMode ? levelNum + 1 : "challenge"),
                    reason: "quit"
                }).then(initStartScreen, initStartScreen);
            break;
        case "nextFromLevelSuccess":
            playSound("click"),
                userInput.removeHitArea("nextFromLevelSuccess"),
                userInput.removeHitArea("replayFromLevelSuccess"),
                userInput.removeHitArea("backFromLevelSuccess"),
                levelNum + 1 == saveDataHandler.getLastUnlockedLevel() ? initAnimateMap() : initMap();
            break;
        case "replayFromLevelSuccess":
            playSound("click"),
                userInput.removeHitArea("nextFromLevelSuccess"),
                userInput.removeHitArea("replayFromLevelSuccess"),
                userInput.removeHitArea("backFromLevelSuccess"),
                initGame(gameMode, !0);
            break;
        case "backFromLevelSuccess":
            playSound("click"),
                userInput.removeHitArea("nextFromLevelSuccess"),
                userInput.removeHitArea("replayFromLevelSuccess"),
                userInput.removeHitArea("backFromLevelSuccess"),
                initMap();
            break;
        case "replayFromLevelFail":
            playSound("click"),
                userInput.removeHitArea("replayFromLevelFail"),
                userInput.removeHitArea("backFromLevelFail"),
                initGame(gameMode, !0);
            break;
        case "backFromLevelFail":
            playSound("click"),
                userInput.removeHitArea("replayFromLevelFail"),
                userInput.removeHitArea("backFromLevelFail"),
                initMap();
            break;
        case "replayFromChallengeFail":
            playSound("click"),
                userInput.removeHitArea("replayFromChallengeFail"),
                userInput.removeHitArea("backFromChallengeFail"),
                initGame(gameMode, !0);
            break;
        case "backFromChallengeFail":
            playSound("click"),
                userInput.removeHitArea("replayFromChallengeFail"),
                userInput.removeHitArea("backFromChallengeFail"),
                initStartScreen()
    }
}
function addFirework(a, t, e, i, s) {
    if (void 0 === i && (i = 1), void 0 === s && (s = !0), !(aFireworks.length > 15)) {
        var o = new Elements.Firework(assetLib.getData("firework" + a), "explode", s);
        o.x = t,
            o.y = e,
            o.scaleX = o.scaleY = i,
            aFireworks.push(o)
    }
}
function addBird() {
    var a = new Elements.Bird(assetLib.getData("bird"));
    aBirds.push(a)
}
function addPop(a, t, e, i, s) {
    if (void 0 === i && (i = 1), void 0 === s && (s = !1), !(aFireworks.length > 15)) {
        var o = "explode" + a,
            r = new Elements.Firework(assetLib.getData("balloonPop"), o, s);
        r.x = t,
            r.y = e,
            r.scaleX = r.scaleY = i,
            aFireworks.push(r)
    }
}
function initArrowFire() {
    gameState = "arrowFire",
        scrollGround = new Elements.ScrollGround;
    var a = new Array;
    addMuteBut(a),
        panel = new Elements.Panel(gameState, a),
        panel.startTween1(),
        previousTime = (new Date).getTime(),
        updateArrowFire()
}
function initNextShot() {
    if ("levels" == gameMode && quiver-- , "levels" == gameMode && (levelScore >= aLevelData[levelNum].aScoreTargs[2] || quiver <= 0)) levelScore >= aLevelData[levelNum].aScoreTargs[0] ? initLevelSuccess() : initLevelFail();
    else {
        gameState = "game",
            challengeLevelNum++ ,
            aArrowsFired.push({
                x: hitPosX,
                y: hitPosY,
                rot: Math.atan2(hitPosY, hitPosX) - targRot,
                hyp: Math.sqrt(hitPosX * hitPosX + hitPosY * hitPosY),
                hitTarget: Math.sqrt(hitPosX * hitPosX + hitPosY * hitPosY) <= 1
            });
        var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [- 95, 32],
            align: [1, 0],
            id: oImageIds.pauseBut,
            noMove: !0
        };
        userInput.addHitArea("pause", butEventHandler, null, "image", a);
        var t = new Array(a);
        addMuteBut(t),
            userInput.addHitArea("gameTouch", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0
            },
                "rect", {
                    aRect: [0, 65, canvas.width, canvas.height]
                },
                !0),
            panel = new Elements.Panel(gameState, t),
            archeryView = new Elements.ArcheryView,
            bow = new Elements.Bow,
            hud.resetWind(),
            panel.startTween1(),
            previousTime = (new Date).getTime(),
            updateGameEvent()
    }
}
function updateScore(a) {
    levelScore += a
}
function initLevelSuccess() {
    gameState = "levelSuccess",
        playSound("cheer" + Math.floor(5 * Math.random())),
        playSound("gameSuccess");
    var a, t;
    levelScore >= aLevelData[levelNum].aScoreTargs[2] ? (a = aLevelData[levelNum].aScoreTargs[2], t = 4) : levelScore >= aLevelData[levelNum].aScoreTargs[1] ? (a = aLevelData[levelNum].aScoreTargs[1], t = 3) : (a = aLevelData[levelNum].aScoreTargs[0], t = 2),
        levelNum < 49 && levelNum == saveDataHandler.getLastUnlockedLevel() && saveDataHandler.setLevelData(levelNum + 1, 1, 0),
        saveDataHandler.setLevelData(levelNum, t, a),
        saveDataHandler.saveData(),
        userInput.removeHitArea("gameTouch"),
        userInput.removeHitArea("pause");
    var e = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [140, 170],
        align: [.5, .5],
        id: oImageIds.nextBut,
        scale: 1e-4
    },
        i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [- 135, 170],
            align: [.5, .5],
            id: oImageIds.restart1But,
            noMove: !0,
            scale: 1e-4
        },
        s = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [55, -35],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0,
            scale: 1e-4
        },
        o = new Array(s, e, i);
    addMuteBut(o),
        setMapData(),
        aFireworks = new Array,
        panel = new Elements.Panel(gameState, o),
        panel.startTween1(),
        previousTime = (new Date).getTime(),
        updateLevelSuccess();
    var r = function () {
        i.scale = 1,
            s.scale = 1,
            e.scale = 1,
            userInput.addHitArea("nextFromLevelSuccess", butEventHandler, null, "image", e),
            userInput.addHitArea("replayFromLevelSuccess", butEventHandler, null, "image", i),
            userInput.addHitArea("backFromLevelSuccess", butEventHandler, null, "image", s)
    };
    setTimeout(function () {
        Promise.all([window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_LEVELRESULT), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSUCCESS, {
            levelName: (levelNum + 1).toString()
        }), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSCORE, {
            levelName: (levelNum + 1).toString(),
            levelScore: a
        })]).then(r, r)
    }.bind(this), 1500)
}
function initLevelFail() {
    gameState = "levelFail",
        1 == audioType && music.fade(music.volume(), .25, 500),
        playSound("gameFail"),
        playSound("crowdSad"),
        userInput.removeHitArea("gameTouch"),
        userInput.removeHitArea("pause");
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [140, 170],
        align: [.5, .5],
        id: oImageIds.restart0But,
        scale: 1e-4
    },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [55, -35],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0,
            scale: 1e-4
        },
        e = new Array(a, t);
    addMuteBut(e),
        setMapData(),
        panel = new Elements.Panel(gameState, e),
        panel.startTween1(),
        previousTime = (new Date).getTime(),
        updateLevelFail();
    var i = function () {
        a.scale = 1,
            t.scale = 1,
            userInput.addHitArea("replayFromLevelFail", butEventHandler, null, "image", a),
            userInput.addHitArea("backFromLevelFail", butEventHandler, null, "image", t)
    };
    setTimeout(function () {
        Promise.all([window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_LEVELRESULT), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELFAIL, {
            levelName: (levelNum + 1).toString(),
            reason: "dead"
        })]).then(i, i)
    }.bind(this), 1500)
}
function initChallengeFail() {
    gameState = "challengeFail",
        1 == audioType && music.fade(music.volume(), .25, 500),
        playSound("gameSuccess"),
        playSound("cheer" + Math.floor(5 * Math.random())),
        saveDataHandler.setChallengeHighscore(levelScore),
        userInput.removeHitArea("gameTouch"),
        userInput.removeHitArea("pause");
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [140, 170],
        align: [.5, .5],
        id: oImageIds.restart0But,
        scale: 1e-4
    },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [55, -35],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0,
            scale: 1e-4
        },
        e = new Array(a, t);
    addMuteBut(e),
        setMapData(),
        aFireworks = new Array,
        panel = new Elements.Panel(gameState, e),
        panel.startTween1(),
        previousTime = (new Date).getTime(),
        updateChallengeFail();
    var i = function () {
        a.scale = 1,
            t.scale = 1,
            userInput.addHitArea("replayFromChallengeFail", butEventHandler, null, "image", a),
            userInput.addHitArea("backFromChallengeFail", butEventHandler, null, "image", t)
    };
    setTimeout(function () {
        Promise.all([window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_GAMERESULT), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELFAIL, {
            levelName: "challenge",
            reason: "dead"
        }), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSCORE, {
            levelName: "challenge",
            levelScore: challengeLevelNum
        })]).then(i, i)
    }.bind(this), 1500)
}
function updateGameEvent() {
    if ("game" == gameState) {
        delta = getDelta(),
            ctx.fillStyle = "rgba(255, 255, 255, 1)",
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2),
            ctx.fillStyle = "rgba(0, 0, 0, 1)",
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height),
            archeryView.update(),
            archeryView.render(),
            bow.update(),
            bow.render();
        for (var a = 0; a < aDrifters.length; a++) aDrifters[a].update(),
            aDrifters[a].render(ctx);
        hud.update(),
            hud.render();
        for (var a = 0; a < aFireworks.length; a++) aFireworks[a].update(),
            aFireworks[a].render(ctx),
            aFireworks[a].removeMe && (aFireworks.splice(a, 1), a -= 1);
        panel.update(),
            panel.render(),
            requestAnimFrame(updateGameEvent)
    }
}
function updateArrowFire() {
    if ("arrowFire" == gameState) {
        delta = getDelta(),
            scrollGround.update(),
            scrollGround.render(),
            hud.update(),
            hud.render();
        for (var a = 0; a < aFireworks.length; a++) aFireworks[a].update(),
            aFireworks[a].render(ctx),
            aFireworks[a].removeMe && (aFireworks.splice(a, 1), a -= 1);
        panel.update(),
            panel.render(),
            requestAnimFrame(updateArrowFire)
    }
}
function updateMapScreenEvent() {
    if ("map" == gameState) {
        delta = getDelta(),
            -1 == saveDataHandler.getLastUnlockedLevel() && Math.random() < .1 && addFirework(Math.floor(2 * Math.random()), Math.random() * canvas.width, Math.random() * canvas.height, 1 * Math.random() + 2),
            panel.update(),
            panel.render();
        for (var a = 0; a < aFireworks.length; a++) aFireworks[a].update(),
            aFireworks[a].render(ctx),
            aFireworks[a].removeMe && (aFireworks.splice(a, 1), a -= 1);
        requestAnimFrame(updateMapScreenEvent)
    }
}
function updateAnimateMapEvent() {
    "animateMap" == gameState && (delta = getDelta(), panel.update(), panel.render(), requestAnimFrame(updateAnimateMapEvent))
}
function updateLevelPreviewEvent() {
    "levelPreview" == gameState && (delta = getDelta(), panel.update(), panel.render(), requestAnimFrame(updateLevelPreviewEvent))
}
function updateCreditsScreenEvent() {
    "credits" == gameState && (delta = getDelta(), ctx.fillStyle = "rgba(255, 255, 255, 1)", ctx.fillRect(0, 0, canvas.width, canvas.height / 2), ctx.fillStyle = "rgba(0, 0, 0, 1)", ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height), archeryView.update(), archeryView.render(), panel.update(), panel.render(), ctx.fillStyle = "#ffffff", ctx.textAlign = "center", ctx.font = "15px Helvetica", ctx.fillText("v1.0.4", canvas.width / 2 + panel.posY, canvas.height - 10), requestAnimFrame(updateCreditsScreenEvent))
}
function updateLevelSuccess() {
    if ("levelSuccess" == gameState) {
        delta = getDelta(),
            Math.random() < .1 && addFirework(Math.floor(2 * Math.random()), Math.random() * canvas.width, Math.random() * canvas.height, 1 * Math.random() + 2),
            panel.update(),
            panel.render();
        for (var a = 0; a < aFireworks.length; a++) aFireworks[a].update(),
            aFireworks[a].render(ctx),
            aFireworks[a].removeMe && (aFireworks.splice(a, 1), a -= 1);
        requestAnimFrame(updateLevelSuccess)
    }
}
function updateLevelFail() {
    "levelFail" == gameState && (delta = getDelta(), panel.update(), panel.render(), requestAnimFrame(updateLevelFail))
}
function updateChallengeFail() {
    if ("challengeFail" == gameState) {
        delta = getDelta(),
            Math.random() < .1 && addFirework(Math.floor(2 * Math.random()), Math.random() * canvas.width, Math.random() * canvas.height, 1 * Math.random() + 2),
            panel.update(),
            panel.render();
        for (var a = 0; a < aFireworks.length; a++) aFireworks[a].update(),
            aFireworks[a].render(ctx),
            aFireworks[a].removeMe && (aFireworks.splice(a, 1), a -= 1);
        requestAnimFrame(updateChallengeFail)
    }
}
function updateSplashScreenEvent() {
    if ("splash" == gameState) {
        if (delta = getDelta(), (splashTimer += delta) > 2.5) return 1 != audioType || muted || (playMusic(), hasFocus || music.pause()),
            void initStartScreen();
        background.render(),
            panel.update(),
            panel.render(),
            requestAnimFrame(updateSplashScreenEvent)
    }
}
function updateStartScreenEvent() {
    if ("start" == gameState) {
        delta = getDelta(),
            ctx.fillStyle = "rgba(255, 255, 255, 1)",
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2),
            ctx.fillStyle = "rgba(0, 0, 0, 1)",
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height),
            archeryView.update(),
            archeryView.render();
        ///*
        for (var a = 0; a < aDrifters.length; a++) aDrifters[a].update(),
            aDrifters[a].render(ctx);
        panel.update(),
            panel.render(),
            ///*/
            requestAnimFrame(updateStartScreenEvent)
    }
}
function updateLoaderEvent() {
    "load" == gameState && (delta = getDelta(), assetLib.render(), requestAnimFrame(updateLoaderEvent))
}
function updatePauseEvent() {
    "pause" == gameState && (delta = getDelta(), background.render(), panel.render(), requestAnimFrame(updatePauseEvent))
}
function getDelta() {
    var a = (new Date).getTime(),
        t = (a - previousTime) / 1e3;
    return previousTime = a,
        t > .5 && (t = 0),
        t
}
function checkSpriteCollision(a, t) {
    var e = a.x,
        i = a.y,
        s = t.x,
        o = t.y;
    return (e - s) * (e - s) + (i - o) * (i - o) < a.radius * t.radius
}
function getScaleImageToMax(a, t) {
    return a.isSpriteSheet ? t[0] / a.oData.spriteWidth < t[1] / a.oData.spriteHeight ? Math.min(t[0] / a.oData.spriteWidth, 1) : Math.min(t[1] / a.oData.spriteHeight, 1) : t[0] / a.img.width < t[1] / a.img.height ? Math.min(t[0] / a.img.width, 1) : Math.min(t[1] / a.img.height, 1)
}
function getCentreFromTopLeft(a, t, e) {
    var i = new Array;
    return i.push(a[0] + t.oData.spriteWidth / 2 * e),
        i.push(a[1] + t.oData.spriteHeight / 2 * e),
        i
}
function loadPreAssets() {
    if (aLangs.length > 1) {
        for (var a = new Array,
            t = 0; t < aLangs.length; t++) a.push({
                id: "lang" + aLangs[t],
                file: "images/lang" + aLangs[t] + ".png"
            });
        preAssetLib = new Utils.AssetLoader(curLang, a, ctx, canvas.width, canvas.height, !1),
            preAssetLib.onReady(initLangSelect)
    } else curLang = aLangs[0],
        preAssetLib = new Utils.AssetLoader(curLang, [{
            id: "loader",
            file: "images/loader.png"
        },
        {
            id: "loadSpinner",
            file: "images/loadSpinner.png"
        }], ctx, canvas.width, canvas.height, !1),
        preAssetLib.onReady(initLoadAssets)
}
function initLangSelect() {
    for (var a, t, e, i = 0,
        s = 0,
        o = 0; o < aLangs.length && (a = preAssetLib.getData("lang" + aLangs[o]), (o + 1) * (1 * a.img.width) + 10 * (o + 2) < canvas.width); o++) i++;
    s = Math.ceil(aLangs.length / i);
    for (var o = 0; o < aLangs.length; o++) {
        a = preAssetLib.getData("lang" + aLangs[o]),
            t = canvas.width / 2 - i / 2 * (1 * a.img.width) - (i - 1) / 2 * 10,
            t += o % i * (1 * a.img.width + 10),
            e = canvas.height / 2 - s / 2 * (1 * a.img.height) - (s - 1) / 2 * 10,
            e += Math.floor(o / i) % s * (1 * a.img.height + 10),
            ctx.drawImage(a.img, 0, 0, a.img.width, a.img.height, t, e, 1 * a.img.width, 1 * a.img.height);
        var r = {
            oImgData: a,
            aPos: [t + 1 * a.img.width / 2, e + 1 * a.img.height / 2],
            scale: 1,
            id: "none",
            noMove: !0
        };
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[o]
        },
            "image", r)
    }
}
function initLoadAssets() {
    loadAssets()
}
function loadAssets() {
    var a;
    try {
        a = window.famobi.getMoreGamesButtonImage()
    } catch (t) {
        a = "images/BrandingPlaceholderButton.png"
    }
    assetLib = new Utils.AssetLoader(curLang, [{
        id: "background",
        file: "images/bgMain.jpg"
    },
    {
        id: "splashLogo",
        file: "images/splashLogo.png"
    },
    {
        id: "flare",
        file: "images/flare.png"
    },
    {
        id: "uiButs",
        file: "images/uiButs.png",
        oAtlasData: {
            id0: {
                x: 375,
                y: 0,
                width: 58,
                height: 64
            },
            id1: {
                x: 139,
                y: 364,
                width: 65,
                height: 66
            },
            id10: {
                x: 278,
                y: 218,
                width: 136,
                height: 98
            },
            id11: {
                x: 172,
                y: 0,
                width: 136,
                height: 98
            },
            id12: {
                x: 0,
                y: 280,
                width: 137,
                height: 87
            },
            id13: {
                x: 0,
                y: 134,
                width: 159,
                height: 144
            },
            id2: {
                x: 310,
                y: 0,
                width: 63,
                height: 65
            },
            id3: {
                x: 0,
                y: 0,
                width: 170,
                height: 132
            },
            id4: {
                x: 139,
                y: 280,
                width: 137,
                height: 82
            },
            id5: {
                x: 161,
                y: 134,
                width: 137,
                height: 82
            },
            id6: {
                x: 0,
                y: 369,
                width: 96,
                height: 58
            },
            id7: {
                x: 206,
                y: 364,
                width: 64,
                height: 68
            },
            id8: {
                x: 300,
                y: 100,
                width: 96,
                height: 81
            },
            id9: {
                x: 278,
                y: 318,
                width: 136,
                height: 83
            }
        }
    },
    {
        id: "uiElements",
        file: "images/uiElements.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 351,
                width: 528,
                height: 137
            },
            id1: {
                x: 748,
                y: 151,
                width: 185,
                height: 149
            },
            id10: {
                x: 530,
                y: 351,
                width: 255,
                height: 83
            },
            id11: {
                x: 530,
                y: 436,
                width: 240,
                height: 43
            },
            id12: {
                x: 887,
                y: 853,
                width: 120,
                height: 133
            },
            id13: {
                x: 948,
                y: 477,
                width: 119,
                height: 173
            },
            id14: {
                x: 935,
                y: 0,
                width: 120,
                height: 200
            },
            id15: {
                x: 474,
                y: 490,
                width: 472,
                height: 361
            },
            id16: {
                x: 700,
                y: 1004,
                width: 185,
                height: 149
            },
            id17: {
                x: 700,
                y: 853,
                width: 185,
                height: 149
            },
            id18: {
                x: 748,
                y: 0,
                width: 185,
                height: 149
            },
            id19: {
                x: 948,
                y: 652,
                width: 108,
                height: 104
            },
            id2: {
                x: 561,
                y: 0,
                width: 185,
                height: 149
            },
            id20: {
                x: 1009,
                y: 997,
                width: 86,
                height: 68
            },
            id21: {
                x: 787,
                y: 302,
                width: 120,
                height: 133
            },
            id22: {
                x: 909,
                y: 302,
                width: 119,
                height: 173
            },
            id23: {
                x: 887,
                y: 988,
                width: 120,
                height: 200
            },
            id24: {
                x: 0,
                y: 0,
                width: 559,
                height: 349
            },
            id25: {
                x: 0,
                y: 853,
                width: 348,
                height: 349
            },
            id26: {
                x: 350,
                y: 853,
                width: 348,
                height: 349
            },
            id27: {
                x: 561,
                y: 302,
                width: 34,
                height: 40
            },
            id3: {
                x: 561,
                y: 151,
                width: 185,
                height: 149
            },
            id4: {
                x: 1009,
                y: 758,
                width: 108,
                height: 104
            },
            id5: {
                x: 935,
                y: 202,
                width: 87,
                height: 70
            },
            id6: {
                x: 1009,
                y: 864,
                width: 88,
                height: 131
            },
            id7: {
                x: 1009,
                y: 1067,
                width: 81,
                height: 79
            },
            id8: {
                x: 1024,
                y: 202,
                width: 81,
                height: 80
            },
            id9: {
                x: 0,
                y: 490,
                width: 472,
                height: 361
            }
        }
    },
    {
        id: "gameElements",
        file: "images/gameElements.png",
        oAtlasData: {
            id0: {
                x: 554,
                y: 753,
                width: 274,
                height: 274
            },
            id1: {
                x: 0,
                y: 246,
                width: 508,
                height: 229
            },
            id10: {
                x: 680,
                y: 472,
                width: 169,
                height: 121
            },
            id11: {
                x: 1389,
                y: 1348,
                width: 74,
                height: 123
            },
            id12: {
                x: 1210,
                y: 992,
                width: 101,
                height: 126
            },
            id13: {
                x: 1288,
                y: 1348,
                width: 99,
                height: 126
            },
            id14: {
                x: 1288,
                y: 1120,
                width: 101,
                height: 124
            },
            id15: {
                x: 1134,
                y: 865,
                width: 105,
                height: 125
            },
            id16: {
                x: 1344,
                y: 798,
                width: 95,
                height: 122
            },
            id17: {
                x: 1096,
                y: 1019,
                width: 112,
                height: 128
            },
            id18: {
                x: 1313,
                y: 991,
                width: 98,
                height: 127
            },
            id19: {
                x: 1241,
                y: 865,
                width: 101,
                height: 124
            },
            id2: {
                x: 982,
                y: 0,
                width: 150,
                height: 1017
            },
            id20: {
                x: 510,
                y: 246,
                width: 224,
                height: 224
            },
            id21: {
                x: 830,
                y: 1052,
                width: 150,
                height: 187
            },
            id22: {
                x: 736,
                y: 167,
                width: 151,
                height: 150
            },
            id23: {
                x: 761,
                y: 1305,
                width: 151,
                height: 150
            },
            id24: {
                x: 889,
                y: 315,
                width: 85,
                height: 86
            },
            id25: {
                x: 0,
                y: 0,
                width: 700,
                height: 244
            },
            id26: {
                x: 889,
                y: 130,
                width: 91,
                height: 90
            },
            id27: {
                x: 1285,
                y: 0,
                width: 145,
                height: 796
            },
            id28: {
                x: 1134,
                y: 0,
                width: 149,
                height: 752
            },
            id29: {
                x: 554,
                y: 1305,
                width: 205,
                height: 75
            },
            id3: {
                x: 0,
                y: 477,
                width: 401,
                height: 387
            },
            id30: {
                x: 554,
                y: 1459,
                width: 205,
                height: 75
            },
            id31: {
                x: 333,
                y: 866,
                width: 205,
                height: 75
            },
            id32: {
                x: 554,
                y: 1382,
                width: 205,
                height: 75
            },
            id33: {
                x: 1432,
                y: 0,
                width: 63,
                height: 66
            },
            id34: {
                x: 1409,
                y: 922,
                width: 63,
                height: 66
            },
            id35: {
                x: 1344,
                y: 922,
                width: 63,
                height: 66
            },
            id36: {
                x: 1390,
                y: 1246,
                width: 63,
                height: 66
            },
            id37: {
                x: 1413,
                y: 990,
                width: 63,
                height: 66
            },
            id38: {
                x: 1391,
                y: 1120,
                width: 63,
                height: 66
            },
            id39: {
                x: 889,
                y: 403,
                width: 63,
                height: 66
            },
            id4: {
                x: 1465,
                y: 1120,
                width: 25,
                height: 358
            },
            id40: {
                x: 0,
                y: 988,
                width: 275,
                height: 274
            },
            id41: {
                x: 830,
                y: 900,
                width: 150,
                height: 150
            },
            id42: {
                x: 875,
                y: 1496,
                width: 36,
                height: 37
            },
            id43: {
                x: 1096,
                y: 1149,
                width: 36,
                height: 37
            },
            id44: {
                x: 875,
                y: 1457,
                width: 36,
                height: 37
            },
            id45: {
                x: 495,
                y: 943,
                width: 36,
                height: 37
            },
            id46: {
                x: 457,
                y: 943,
                width: 36,
                height: 37
            },
            id47: {
                x: 876,
                y: 1241,
                width: 36,
                height: 37
            },
            id48: {
                x: 419,
                y: 943,
                width: 36,
                height: 37
            },
            id49: {
                x: 702,
                y: 0,
                width: 163,
                height: 165
            },
            id5: {
                x: 0,
                y: 866,
                width: 331,
                height: 120
            },
            id50: {
                x: 1432,
                y: 68,
                width: 35,
                height: 205
            },
            id51: {
                x: 1432,
                y: 275,
                width: 35,
                height: 205
            },
            id52: {
                x: 1432,
                y: 482,
                width: 35,
                height: 205
            },
            id53: {
                x: 449,
                y: 818,
                width: 44,
                height: 45
            },
            id54: {
                x: 403,
                y: 818,
                width: 44,
                height: 45
            },
            id55: {
                x: 830,
                y: 1241,
                width: 44,
                height: 45
            },
            id56: {
                x: 495,
                y: 818,
                width: 44,
                height: 45
            },
            id57: {
                x: 333,
                y: 943,
                width: 41,
                height: 21
            },
            id58: {
                x: 1288,
                y: 1246,
                width: 100,
                height: 100
            },
            id59: {
                x: 1134,
                y: 754,
                width: 109,
                height: 109
            },
            id6: {
                x: 517,
                y: 753,
                width: 10,
                height: 54
            },
            id60: {
                x: 889,
                y: 222,
                width: 91,
                height: 91
            },
            id61: {
                x: 851,
                y: 536,
                width: 102,
                height: 47
            },
            id62: {
                x: 1066,
                y: 1344,
                width: 103,
                height: 47
            },
            id63: {
                x: 833,
                y: 595,
                width: 128,
                height: 136
            },
            id64: {
                x: 914,
                y: 1393,
                width: 123,
                height: 124
            },
            id65: {
                x: 376,
                y: 943,
                width: 41,
                height: 21
            },
            id66: {
                x: 1180,
                y: 1149,
                width: 106,
                height: 360
            },
            id67: {
                x: 277,
                y: 988,
                width: 275,
                height: 274
            },
            id68: {
                x: 736,
                y: 319,
                width: 151,
                height: 150
            },
            id69: {
                x: 554,
                y: 1029,
                width: 274,
                height: 274
            },
            id7: {
                x: 1413,
                y: 1058,
                width: 59,
                height: 60
            },
            id70: {
                x: 914,
                y: 1241,
                width: 150,
                height: 150
            },
            id71: {
                x: 403,
                y: 477,
                width: 275,
                height: 274
            },
            id72: {
                x: 0,
                y: 1264,
                width: 275,
                height: 274
            },
            id73: {
                x: 277,
                y: 1264,
                width: 275,
                height: 274
            },
            id74: {
                x: 680,
                y: 595,
                width: 151,
                height: 150
            },
            id75: {
                x: 851,
                y: 471,
                width: 112,
                height: 63
            },
            id76: {
                x: 867,
                y: 0,
                width: 112,
                height: 63
            },
            id77: {
                x: 867,
                y: 65,
                width: 112,
                height: 63
            },
            id78: {
                x: 982,
                y: 1019,
                width: 112,
                height: 63
            },
            id79: {
                x: 761,
                y: 1457,
                width: 112,
                height: 63
            },
            id8: {
                x: 529,
                y: 753,
                width: 6,
                height: 25
            },
            id80: {
                x: 982,
                y: 1149,
                width: 112,
                height: 63
            },
            id81: {
                x: 1039,
                y: 1458,
                width: 112,
                height: 63
            },
            id82: {
                x: 1039,
                y: 1393,
                width: 112,
                height: 63
            },
            id83: {
                x: 1066,
                y: 1214,
                width: 112,
                height: 63
            },
            id84: {
                x: 1066,
                y: 1279,
                width: 112,
                height: 63
            },
            id85: {
                x: 982,
                y: 1084,
                width: 112,
                height: 63
            },
            id86: {
                x: 403,
                y: 753,
                width: 112,
                height: 63
            },
            id9: {
                x: 830,
                y: 747,
                width: 150,
                height: 151
            }
        }
    },
    {
        id: "horizon0",
        file: "images/horizon0.jpg"
    },
    {
        id: "horizon1",
        file: "images/horizon1.jpg"
    },
    {
        id: "horizon2",
        file: "images/horizon2.jpg"
    },
    {
        id: "horizon3",
        file: "images/horizon3.jpg"
    },
    {
        id: "horizon4",
        file: "images/horizon4.jpg"
    },
    {
        id: "ground0",
        file: "images/ground0.jpg"
    },
    {
        id: "ground1",
        file: "images/ground1.jpg"
    },
    {
        id: "ground2",
        file: "images/ground2.jpg"
    },
    {
        id: "ground3",
        file: "images/ground3.jpg"
    },
    {
        id: "ground4",
        file: "images/ground4.jpg"
    },
    {
        id: "scrollGround0",
        file: "images/scrollGround0.jpg"
    },
    {
        id: "scrollGround1",
        file: "images/scrollGround1.jpg"
    },
    {
        id: "scrollGround2",
        file: "images/scrollGround2.jpg"
    },
    {
        id: "scrollGround3",
        file: "images/scrollGround3.jpg"
    },
    {
        id: "scrollGround4",
        file: "images/scrollGround4.jpg"
    },
    {
        id: "map",
        file: "images/mapBg.jpg"
    },
    {
        id: "numbersBlue",
        file: "images/numbersBlue_51x63.png"
    },
    {
        id: "numbersGreen",
        file: "images/numbersGreen_51x63.png"
    },
    {
        id: "numbersRed",
        file: "images/numbersRed_51x63.png"
    },
    {
        id: "numbersLevel",
        file: "images/numbersLevel_21x37.png"
    },
    {
        id: "firework0",
        file: "images/firework0_150x150.png",
        oAnims: {
            explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        }
    },
    {
        id: "firework1",
        file: "images/firework1_175x175.png",
        oAnims: {
            explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
        }
    },
    {
        id: "balloonPop",
        file: "images/balloonPop_86x85.png",
        oAnims: {
            explode0: [0, 1, 2, 3, 4],
            explode1: [5, 6, 7, 8, 9],
            explode2: [10, 11, 12, 13, 14],
            explode3: [15, 16, 17, 18, 19],
            explode4: [20, 21, 22, 23, 24],
            explode5: [25, 26, 27, 28, 29],
            explode6: [30, 31, 32, 33, 34]
        }
    },
    {
        id: "drifters",
        file: "images/drifters_210x194.png",
        oAnims: {
            ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        }
    },
    {
        id: "trees",
        file: "images/trees.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 0,
                width: 289,
                height: 388
            },
            id1: {
                x: 855,
                y: 840,
                width: 283,
                height: 390
            },
            id10: {
                x: 1140,
                y: 0,
                width: 273,
                height: 534
            },
            id11: {
                x: 1140,
                y: 1072,
                width: 273,
                height: 534
            },
            id12: {
                x: 285,
                y: 789,
                width: 283,
                height: 357
            },
            id13: {
                x: 0,
                y: 1148,
                width: 283,
                height: 356
            },
            id14: {
                x: 0,
                y: 789,
                width: 283,
                height: 357
            },
            id2: {
                x: 0,
                y: 390,
                width: 284,
                height: 397
            },
            id3: {
                x: 855,
                y: 420,
                width: 283,
                height: 418
            },
            id4: {
                x: 570,
                y: 426,
                width: 283,
                height: 417
            },
            id5: {
                x: 576,
                y: 0,
                width: 283,
                height: 418
            },
            id6: {
                x: 570,
                y: 845,
                width: 283,
                height: 424
            },
            id7: {
                x: 285,
                y: 1148,
                width: 283,
                height: 424
            },
            id8: {
                x: 291,
                y: 0,
                width: 283,
                height: 424
            },
            id9: {
                x: 1140,
                y: 536,
                width: 273,
                height: 534
            }
        }
    },
    {
        id: "tutorial",
        file: "images/tutorial_264x261.png",
        oAnims: {
            tut0: [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 33, 33, 33, 33, 34, 35, 36, 37, 38],
            tut1: [39, 40, 41, 42, 43, 44, 45, 46, 45, 44, 43, 44, 45, 46, 45, 44, 43, 44, 45, 46]
        }
    },
    {
        id: "bird",
        file: "images/bird_12x10.png",
        oAnims: {
            fly: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        }
    },
    {
        id: "moreGamesBut",
        file: a
    }], ctx, canvas.width, canvas.height),
        oImageIds.infoBut = "id0",
        oImageIds.muteBut1 = "id1",
        oImageIds.muteBut0 = "id2",
        oImageIds.playBut1 = "id3",
        oImageIds.moreGamesBut = "id4",
        oImageIds.mapBut = "id5",
        oImageIds.backBut = "id6",
        oImageIds.pauseBut = "id7",
        oImageIds.resetBut = "id8",
        oImageIds.nextBut = "id9",
        oImageIds.restart0But = "id10",
        oImageIds.restart1But = "id11",
        oImageIds.quitBut = "id12",
        oImageIds.playBut0 = "id13",
        oImageIds.titleLogo = "id0",
        oImageIds.mapBut2 = "id1",
        oImageIds.mapBut3 = "id2",
        oImageIds.mapBut4 = "id3",
        oImageIds.mapBut1 = "id4",
        oImageIds.mapBut0 = "id5",
        oImageIds.fingerPoint = "id6",
        oImageIds.fadeBorderBottom = "id7",
        oImageIds.fadeBorderTop = "id8",
        oImageIds.bluePanel = "id9",
        oImageIds.scoreBgWin = "id10",
        oImageIds.quiver = "id11",
        oImageIds.scoreTarget0 = "id12",
        oImageIds.scoreTarget1 = "id13",
        oImageIds.scoreTarget2 = "id14",
        oImageIds.losePanel = "id15",
        oImageIds.mapBut7 = "id16",
        oImageIds.mapBut8 = "id17",
        oImageIds.mapBut9 = "id18",
        oImageIds.mapBut6 = "id19",
        oImageIds.mapBut5 = "id20",
        oImageIds.balloonTarget0 = "id21",
        oImageIds.balloonTarget1 = "id22",
        oImageIds.balloonTarget2 = "id23",
        oImageIds.challengePanel = "id24",
        oImageIds.tutBg0 = "id25",
        oImageIds.tutBg1 = "id26",
        oImageIds.miniCup = "id27",
        oImageIds.target0 = "id0",
        oImageIds.stand = "id1",
        oImageIds.bowMiddle = "id2",
        oImageIds.arrowInBow = "id3",
        oImageIds.arrowInFlight = "id4",
        oImageIds.scope0 = "id5",
        oImageIds.arrowShadow = "id6",
        oImageIds.missCross = "id7",
        oImageIds.flushArrowHit = "id8",
        oImageIds.targetSmall0 = "id9",
        oImageIds.standSmall = "id10",
        oImageIds.score1 = "id11",
        oImageIds.score2 = "id12",
        oImageIds.score3 = "id13",
        oImageIds.score4 = "id14",
        oImageIds.score5 = "id15",
        oImageIds.score6 = "id16",
        oImageIds.score7 = "id17",
        oImageIds.score8 = "id18",
        oImageIds.score9 = "id19",
        oImageIds.score10 = "id20",
        oImageIds.windPanel = "id21",
        oImageIds.targetSmall5 = "id22",
        oImageIds.targetSmall6 = "id23",
        oImageIds.scoreBgGame = "id24",
        oImageIds.scoreDiagBg = "id25",
        oImageIds.quiverBgGame = "id26",
        oImageIds.bowTop = "id27",
        oImageIds.bowBottom = "id28",
        oImageIds.distMarker0 = "id29",
        oImageIds.distMarker1 = "id30",
        oImageIds.distMarker2 = "id31",
        oImageIds.distMarker3 = "id32",
        oImageIds.balloon0 = "id33",
        oImageIds.balloon1 = "id34",
        oImageIds.balloon2 = "id35",
        oImageIds.balloon3 = "id36",
        oImageIds.balloon4 = "id37",
        oImageIds.balloon5 = "id38",
        oImageIds.balloon6 = "id39",
        oImageIds.target3 = "id40",
        oImageIds.targetSmall3 = "id41",
        oImageIds.balloonSmall0 = "id42",
        oImageIds.balloonSmall1 = "id43",
        oImageIds.balloonSmall2 = "id44",
        oImageIds.balloonSmall3 = "id45",
        oImageIds.balloonSmall4 = "id46",
        oImageIds.balloonSmall5 = "id47",
        oImageIds.balloonSmall6 = "id48",
        oImageIds.balloonScore = "id49",
        oImageIds.progressBar0 = "id50",
        oImageIds.progressBar1 = "id51",
        oImageIds.progressBar2 = "id52",
        oImageIds.progressMarker0 = "id53",
        oImageIds.progressMarker1 = "id54",
        oImageIds.progressMarker2 = "id55",
        oImageIds.progressMarker3 = "id56",
        oImageIds.progressNumBg0 = "id57",
        oImageIds.lensFlare0 = "id58",
        oImageIds.lensFlare1 = "id59",
        oImageIds.lensFlare2 = "id60",
        oImageIds.fadeBorder0 = "id61",
        oImageIds.fadeBorder1 = "id62",
        oImageIds.thumbsUp = "id63",
        oImageIds.score0 = "id64",
        oImageIds.progressNumBg1 = "id65",
        oImageIds.arrowInFlightSpecial = "id66",
        oImageIds.target2 = "id67",
        oImageIds.targetSmall2 = "id68",
        oImageIds.target1 = "id69",
        oImageIds.targetSmall1 = "id70",
        oImageIds.target4 = "id71",
        oImageIds.target5 = "id72",
        oImageIds.target6 = "id73",
        oImageIds.targetSmall4 = "id74",
        oImageIds.windArrow00 = "id75",
        oImageIds.windArrow01 = "id76",
        oImageIds.windArrow02 = "id77",
        oImageIds.windArrow03 = "id78",
        oImageIds.windArrow04 = "id79",
        oImageIds.windArrow05 = "id80",
        oImageIds.windArrow10 = "id81",
        oImageIds.windArrow11 = "id82",
        oImageIds.windArrow12 = "id83",
        oImageIds.windArrow13 = "id84",
        oImageIds.windArrow14 = "id85",
        oImageIds.windArrow15 = "id86",
        oImageIds.tree00 = "id0",
        oImageIds.tree01 = "id1",
        oImageIds.tree02 = "id2",
        oImageIds.tree10 = "id3",
        oImageIds.tree11 = "id4",
        oImageIds.tree12 = "id5",
        oImageIds.tree20 = "id6",
        oImageIds.tree21 = "id7",
        oImageIds.tree22 = "id8",
        oImageIds.tree30 = "id9",
        oImageIds.tree31 = "id10",
        oImageIds.tree32 = "id11",
        oImageIds.tree40 = "id12",
        oImageIds.tree41 = "id13",
        oImageIds.tree42 = "id14",
        assetLib.onReady(initSplash),
        gameState = "load",
        previousTime = (new Date).getTime(),
        updateLoaderEvent()
}
function resizeCanvas() {
    var a = window.innerWidth,
        t = window.innerHeight;
    if (canvas.height = t, canvas.width = a, canvas.style.width = a + "px", canvas.style.height = t + "px", a > t ? canvas.height < minSquareSize ? (canvas.height = minSquareSize, canvas.width = minSquareSize * (a / t), canvasScale = minSquareSize / t) : canvas.height > maxSquareSize ? (canvas.height = maxSquareSize, canvas.width = maxSquareSize * (a / t), canvasScale = maxSquareSize / t) : canvasScale = 1 : canvas.width < minSquareSize ? (canvas.width = minSquareSize, canvas.height = minSquareSize * (t / a), canvasScale = minSquareSize / a) : canvas.width > maxSquareSize ? (canvas.width = maxSquareSize, canvas.height = maxSquareSize * (t / a), canvasScale = maxSquareSize / a) : canvasScale = 1, "game" == gameState) bow.isHeld || (userInput.removeHitArea("gameTouch"), userInput.addHitArea("gameTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    },
        "rect", {
            aRect: [0, 65, canvas.width, canvas.height]
        },
        !0));
    else if ("map" == gameState) {
        userInput.removeHitArea("mapTouch"),
            userInput.addHitArea("mapTouch", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0
            },
                "rect", {
                    aRect: [0, 0, canvas.width, canvas.height]
                },
                !0),
            mapScale = 1,
            canvas.width > 1446 && (mapScale = canvas.width / 1446),
            canvas.height > 1111 && (mapScale = Math.max(canvas.height / 1111, mapScale));
        var e = saveDataHandler.getLastUnlockedLevel(); - 1 == e && (e = 49),
            mapPosX = mapPosRealX = Math.max(Math.min(aLevelData[e].mapX - canvas.width / 2, 1446 - canvas.width), 0),
            mapPosY = mapPosRealY = Math.max(Math.min(aLevelData[e].mapY - canvas.height / 2, 1111 - canvas.height), 0)
    } else if ("levelPreview" == gameState || "levelSuccess" == gameState || "levelFail" == gameState || "challengeFail" == gameState) {
        mapScale = 1,
            canvas.width > 1446 && (mapScale = canvas.width / 1446),
            canvas.height > 1111 && (mapScale = Math.max(canvas.height / 1111, mapScale));
        var e = saveDataHandler.getLastUnlockedLevel(); - 1 == e && (e = 49),
            mapPosX = mapPosRealX = Math.max(Math.min(aLevelData[e].mapX - canvas.width / 2, 1446 - canvas.width), 0),
            mapPosY = mapPosRealY = Math.max(Math.min(aLevelData[e].mapY - canvas.height / 2, 1111 - canvas.height), 0)
    }
    window.scrollTo(0, 0)
}
function playSound(a) {
    // return 0//aaaaaa
    1 == audioType && sound.play(a)
}
function toggleMute(a) {
    muted = !muted,
        1 == audioType ? muted ? (Howler.mute(!0), music.pause(), a || (window.famobi_analytics.trackEvent("EVENT_VOLUMECHANGE", {
            bgmVolume: 0,
            sfxVolume: 0
        }), window.famobi.localStorage.setItem("muted", "1"))) : (Howler.mute(!1), playMusic(), "game" == gameState ? music.volume(.5) : music.volume(.25), a || (window.famobi_analytics.trackEvent("EVENT_VOLUMECHANGE", {
            bgmVolume: 1,
            sfxVolume: 1
        }), window.famobi.localStorage.removeItem("muted"))) : 2 == audioType && (muted ? music.pause() : playMusic())
}