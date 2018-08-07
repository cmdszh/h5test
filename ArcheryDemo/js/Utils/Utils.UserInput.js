var Utils; !
    function (a) {
        var t = function () {
            function a(a, t) {
                var e = this;
                this.prevHitTime = 0,
                    this.pauseIsOn = !1,
                    this.isDown = !1,
                    this.isBugBrowser = t,
                    this.keyDownEvtFunc = function (a) {
                        e.keyDown(a)
                    },
                    this.keyUpEvtFunc = function (a) {
                        e.keyUp(a)
                    },
                    a.addEventListener("touchstart",
                        function (a) {
                            for (var t = 0; t < a.changedTouches.length; t++) e.hitDown(a, a.changedTouches[t].pageX, a.changedTouches[t].pageY, a.changedTouches[t].identifier)
                        },
                        !1),
                    a.addEventListener("touchend",
                        function (a) {
                            for (var t = 0; t < a.changedTouches.length; t++) e.hitUp(a, a.changedTouches[t].pageX, a.changedTouches[t].pageY, a.changedTouches[t].identifier)
                        },
                        !1),
                    a.addEventListener("touchcancel",
                        function (a) {
                            for (var t = 0; t < a.changedTouches.length; t++) e.hitCancel(a, a.changedTouches[t].pageX, a.changedTouches[t].pageY, a.changedTouches[t].identifier)
                        },
                        !1),
                    a.addEventListener("touchmove",
                        function (a) {
                            for (var t = 0; t < a.changedTouches.length; t++) e.move(a, a.changedTouches[t].pageX, a.changedTouches[t].pageY, a.changedTouches[t].identifier, !0)
                        },
                        !1),
                    a.addEventListener("mousedown",
                        function (a) {
                            e.isDown = !0,
                                e.hitDown(a, a.pageX, a.pageY, 1)
                        },
                        !1),
                    a.addEventListener("mouseup",
                        function (a) {
                            e.isDown = !1,
                                e.hitUp(a, a.pageX, a.pageY, 1)
                        },
                        !1),
                    a.addEventListener("mousemove",
                        function (a) {
                            e.move(a, a.pageX, a.pageY, 1, e.isDown)
                        },
                        !1),
                    a.addEventListener("mouseout",
                        function (a) {
                            e.isDown = !1,
                                e.hitUp(a, Math.abs(a.pageX), Math.abs(a.pageY), 1)
                        },
                        !1),
                    this.aHitAreas = new Array,
                    this.aKeys = new Array
            }
            return a.prototype.hitDown = function (a, t, e, i) {
                if (a.preventDefault(), a.stopPropagation(), hasFocus || visibleResume(), !this.pauseIsOn) {
                    var s = (new Date).getTime();
                    t *= canvasScale,
                        e *= canvasScale;
                    for (var o = 0; o < this.aHitAreas.length; o++) if (this.aHitAreas[o].rect) {
                        var r = canvas.width * this.aHitAreas[o].align[0],
                            h = canvas.height * this.aHitAreas[o].align[1];
                        if (t > r + this.aHitAreas[o].area[0] && e > h + this.aHitAreas[o].area[1] && t < r + this.aHitAreas[o].area[2] && e < h + this.aHitAreas[o].area[3]) {
                            if (this.aHitAreas[o].aTouchIdentifiers.push(i), this.aHitAreas[o].oData.hasLeft = !1, !this.aHitAreas[o].oData.isDown) {
                                if (this.aHitAreas[o].oData.isDown = !0, this.aHitAreas[o].oData.isBeingDragged = !1, this.aHitAreas[o].oData.x = t, this.aHitAreas[o].oData.y = e, s - this.prevHitTime < 500 && ("game" != gameState || "pause" == this.aHitAreas[o].id) && isBugBrowser) return;
                                this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData)
                            }
                            break
                        }
                    }
                    this.prevHitTime = s
                }
            },
                a.prototype.hitUp = function (a, t, e, i) {
                    if (ios9FirstTouch || (playSound("silence"), ios9FirstTouch = !0), !this.pauseIsOn) {
                        a.preventDefault(),
                            a.stopPropagation(),
                            t *= canvasScale,
                            e *= canvasScale;
                        for (var s = 0; s < this.aHitAreas.length; s++) if (this.aHitAreas[s].rect) {
                            var o = canvas.width * this.aHitAreas[s].align[0],
                                r = canvas.height * this.aHitAreas[s].align[1];
                            if (t > o + this.aHitAreas[s].area[0] && e > r + this.aHitAreas[s].area[1] && t < o + this.aHitAreas[s].area[2] && e < r + this.aHitAreas[s].area[3]) {
                                for (var h = 0; h < this.aHitAreas[s].aTouchIdentifiers.length; h++) this.aHitAreas[s].aTouchIdentifiers[h] == i && (this.aHitAreas[s].aTouchIdentifiers.splice(h, 1), h -= 1);
                                0 == this.aHitAreas[s].aTouchIdentifiers.length && (this.aHitAreas[s].oData.isDown = !1, this.aHitAreas[s].oData.multiTouch && (this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = e, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData)));
                                break
                            }
                        }
                    }
                },
                a.prototype.hitCancel = function (a, t, e, i) {
                    a.preventDefault(),
                        a.stopPropagation(),
                        t *= canvasScale,
                        e *= canvasScale;
                    for (var s = 0; s < this.aHitAreas.length; s++) this.aHitAreas[s].oData.isDown && (this.aHitAreas[s].oData.isDown = !1, this.aHitAreas[s].aTouchIdentifiers = new Array, this.aHitAreas[s].oData.multiTouch && (this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = e, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData)))
                },
                a.prototype.move = function (a, t, e, i, s) {
                    if (!this.pauseIsOn && s) {
                        t *= canvasScale,
                            e *= canvasScale;
                        for (var o = 0; o < this.aHitAreas.length; o++) if (this.aHitAreas[o].rect) {
                            var r = canvas.width * this.aHitAreas[o].align[0],
                                h = canvas.height * this.aHitAreas[o].align[1];
                            if (t > r + this.aHitAreas[o].area[0] && e > h + this.aHitAreas[o].area[1] && t < r + this.aHitAreas[o].area[2] && e < h + this.aHitAreas[o].area[3]) this.aHitAreas[o].oData.hasLeft = !1,
                                this.aHitAreas[o].oData.isDraggable && !this.aHitAreas[o].oData.isDown && (this.aHitAreas[o].oData.isDown = !0, this.aHitAreas[o].oData.x = t, this.aHitAreas[o].oData.y = e, this.aHitAreas[o].aTouchIdentifiers.push(i), this.aHitAreas[o].oData.multiTouch && this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData)),
                                this.aHitAreas[o].oData.isDraggable && (this.aHitAreas[o].oData.isBeingDragged = !0, this.aHitAreas[o].oData.x = t, this.aHitAreas[o].oData.y = e, this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData), this.aHitAreas[o] && (this.aHitAreas[o].oData.isBeingDragged = !1));
                            else if (this.aHitAreas[o].oData.isDown && !this.aHitAreas[o].oData.hasLeft) {
                                for (var l = 0; l < this.aHitAreas[o].aTouchIdentifiers.length; l++) this.aHitAreas[o].aTouchIdentifiers[l] == i && (this.aHitAreas[o].aTouchIdentifiers.splice(l, 1), l -= 1);
                                0 == this.aHitAreas[o].aTouchIdentifiers.length && (this.aHitAreas[o].oData.hasLeft = !0, this.aHitAreas[o].oData.isBeingDragged || (this.aHitAreas[o].oData.isDown = !1), this.aHitAreas[o].oData.multiTouch && this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData))
                            }
                        }
                    }
                },
                a.prototype.keyDown = function (a) {
                    for (var t = 0; t < this.aKeys.length; t++) a.keyCode == this.aKeys[t].keyCode && (a.preventDefault(), this.aKeys[t].oData.isDown = !0, this.aKeys[t].callback(this.aKeys[t].id, this.aKeys[t].oData))
                },
                a.prototype.keyUp = function (a) {
                    for (var t = 0; t < this.aKeys.length; t++) a.keyCode == this.aKeys[t].keyCode && (a.preventDefault(), this.aKeys[t].oData.isDown = !1, this.aKeys[t].callback(this.aKeys[t].id, this.aKeys[t].oData))
                },
                a.prototype.checkKeyFocus = function () {
                    window.focus(),
                        this.aKeys.length > 0 && (window.removeEventListener("keydown", this.keyDownEvtFunc, !1), window.removeEventListener("keyup", this.keyUpEvtFunc, !1), window.addEventListener("keydown", this.keyDownEvtFunc, !1), window.addEventListener("keyup", this.keyUpEvtFunc, !1))
                },
                a.prototype.addKey = function (a, t, e, i) {
                    null == e && (e = new Object),
                        this.aKeys.push({
                            id: a,
                            callback: t,
                            oData: e,
                            keyCode: i
                        }),
                        this.checkKeyFocus()
                },
                a.prototype.removeKey = function (a) {
                    for (var t = 0; t < this.aKeys.length; t++) this.aKeys[t].id == a && (this.aKeys.splice(t, 1), t -= 1)
                },
                a.prototype.addHitArea = function (a, t, e, i, s, o) {
                    void 0 === o && (o = !1),
                        null == e && (e = new Object),
                        o && this.removeHitArea(a),
                        s.scale || (s.scale = 1),
                        s.align || (s.align = [0, 0]);
                    var r = new Array;
                    switch (i) {
                        case "image":
                            var h;
                            h = new Array(s.aPos[0] - s.oImgData.oData.oAtlasData[s.id].width / 2 * s.scale, s.aPos[1] - s.oImgData.oData.oAtlasData[s.id].height / 2 * s.scale, s.aPos[0] + s.oImgData.oData.oAtlasData[s.id].width / 2 * s.scale, s.aPos[1] + s.oImgData.oData.oAtlasData[s.id].height / 2 * s.scale),
                                this.aHitAreas.push({
                                    id: a,
                                    aTouchIdentifiers: r,
                                    callback: t,
                                    oData: e,
                                    rect: !0,
                                    area: h,
                                    align: s.align
                                });
                            break;
                        case "rect":
                            this.aHitAreas.push({
                                id:
                                    a,
                                aTouchIdentifiers: r,
                                callback: t,
                                oData: e,
                                rect: !0,
                                area: s.aRect,
                                align: s.align
                            })
                    }
                },
                a.prototype.removeHitArea = function (a) {
                    for (var t = 0; t < this.aHitAreas.length; t++) this.aHitAreas[t].id == a && (this.aHitAreas.splice(t, 1), t -= 1)
                },
                a.prototype.resetAll = function () {
                    for (var a = 0; a < this.aHitAreas.length; a++) this.aHitAreas[a].oData.isDown = !1,
                        this.aHitAreas[a].oData.isBeingDragged = !1,
                        this.aHitAreas[a].aTouchIdentifiers = new Array;
                    this.isDown = !1
                },
                a
        }();
        a.UserInput = t
    }(Utils || (Utils = {}));