var Elements; !
    function (a) {
        var t = function () {
            function a() {
                var a = this;
                this.segNum = 200,
                    this.aRowData = new Array,
                    this.horizon = 0,
                    this.scrollY = 0,
                    this.scrollX = 0,
                    this.targScrollSpeed = 0,
                    this.scrollSpeed = 0,
                    this.scrollInc = 0,
                    this.lineRate = 1,
                    this.goalScale = .3,
                    this.isFlying = !0,
                    this.jiggleInc = 0,
                    this.jiggleRot = 0,
                    this.jiggleDamp = 1,
                    this.targetCentreY = 140,
                    this.groundSkew = 0,
                    this.arrowPassedTarget = !1,
                    this.arrowWillHit = !1,
                    this.scaleMultiplier = 1.82962962962963,
                    this.oScrollGroundImgData = assetLib.getData("scrollGround" + sceneType),
                    this.oGameElementsImgData = assetLib.getData("gameElements"),
                    "levels" == gameMode && 1 == quiver || "challenge" == gameMode && (levelScore + 1) % 5 == 0 ? (this.scrollInc = 150, this.specialArrowAlpha = 1, this.flightTime = .7 + .35 + .1 * archeryView.targPosId, TweenLite.to(this, this.flightTime, {
                        scrollInc: 1e3,
                        specialArrowAlpha: 0,
                        ease: "Power4.easeIn"
                    })) : (this.specialArrowAlpha = 0, this.scrollInc = 1e3, this.flightTime = .35 + .1 * archeryView.targPosId),
                    this.shotAngle = 5,
                    this.hitBalloon = !1,
                    this.targetScale = .17,
                    this.targetX = -500 * this.flightTime,
                    this.targetY = 800 * -this.flightTime,
                    this.arrowX = canvas.width / 3,
                    this.arrowY = canvas.height - 150,
                    this.arrowScale = 3,
                    this.arrowRot = -18 * radian;
                this.localMoveIncX = moveIncX * this.scaleMultiplier,
                    this.localMoveIncY = moveIncY * this.scaleMultiplier,
                    this.localMoveDistSeg = moveDistSeg * this.scaleMultiplier;
                var t = Math.sqrt(hitPosX * hitPosX + hitPosY * hitPosY),
                    e = 0 + 1 * hitTargetRadius * hitPosX,
                    i = this.targetCentreY + 1 * hitTargetRadius * hitPosY;
                TweenLite.to(this, this.flightTime, {
                    targetScale: 1,
                    targetY: this.targetCentreY,
                    targetX: 0,
                    ease: "Quad.easeIn",
                    onComplete: function () {
                        a.arrowPassedTarget = !0,
                            a.isFlying = !1
                    }
                }),
                    setTimeout(function () {
                        playSound("landTarget" + Math.floor(3 * Math.random()))
                    },
                        1e3 * (this.flightTime - .35)),
                    TweenLite.to(this, this.flightTime, {
                        arrowX: e,
                        arrowY: i,
                        arrowScale: .4,
                        ease: "Quad.easeInOut",
                        onComplete: function () {
                            if ("balloons" == aLevelData[levelNum].misc.id && "levels" == gameMode) {
                                for (var t = 0; t < aLevelBalloonData.length; t++) {
                                    var e = -Math.cos(targRot + aLevelBalloonData[t].rot) * aLevelBalloonData[t].hyp,
                                        i = -Math.sin(targRot + aLevelBalloonData[t].rot) * aLevelBalloonData[t].hyp,
                                        s = a.arrowX - e,
                                        o = a.arrowY - a.targetCentreY - i;
                                    Math.sqrt(s * s + o * o) < 28.3 * aLevelBalloonData[t].scale && (addPop(aLevelBalloonData[t].colour, canvas.width / 2 + a.targetX + e * a.targetScale, a.targetY + i * a.targetScale, 1 * aLevelBalloonData[t].scale), addFirework(0, canvas.width / 2 + a.targetX + e * a.targetScale, a.targetY + i * a.targetScale, .6 * aLevelBalloonData[t].scale), aLevelBalloonData.splice(t, 1), a.hitBalloon = !0, playSound("pop" + Math.floor(2 * Math.random())))
                                }
                                hud.showBalloonScore(a.hitBalloon),
                                    TweenLite.to(a, 1, {
                                        jiggleDamp: 0,
                                        ease: "Quad.easeOut",
                                        onComplete: function () { }
                                    })
                            } else if ("challenge" == gameMode) {
                                var e = -Math.cos(targRot + oChallengeBalloon.rot) * oChallengeBalloon.hyp,
                                    i = -Math.sin(targRot + oChallengeBalloon.rot) * oChallengeBalloon.hyp,
                                    s = a.arrowX - e,
                                    o = a.arrowY - a.targetCentreY - i;
                                Math.sqrt(s * s + o * o) < 28.3 * oChallengeBalloon.scale && (addPop(challengeLevelNum % 7, canvas.width / 2 + a.targetX + e * a.targetScale, a.targetY + i * a.targetScale, 1 * oChallengeBalloon.scale), addFirework(0, canvas.width / 2 + a.targetX + e * a.targetScale, a.targetY + i * a.targetScale, .6 * oChallengeBalloon.scale), a.hitBalloon = !0, playSound("pop" + Math.floor(2 * Math.random()))),
                                    hud.showBalloonScore(a.hitBalloon),
                                    TweenLite.to(a, 1, {
                                        jiggleDamp: 0,
                                        ease: "Quad.easeOut",
                                        onComplete: function () { }
                                    })
                            } else a.arrowHitTarget()
                        }
                    }),
                    t < 1 || i > this.targetCentreY + 1 * archeryView.groundToHit ? this.arrowWillHit = !0 : this.arrowWillHit = !1;
                for (var s = 0; s < this.segNum; s++) this.aRowData.push({
                    y: 0,
                    scale: 0
                })
            }
            return a.prototype.arrowHitTarget = function () {
                var a = this.arrowX,
                    t = this.arrowY - 140,
                    e = Math.max(10 - Math.floor(Math.sqrt(a * a + t * t) / 12), 0);
                if ("levels" == gameMode && aLevelData[levelNum].targType > 0 && 3 != aLevelData[levelNum].targType) {
                    var a, t;
                    if (aLevelData[levelNum].targType < 3) {
                        var i = 100 * -Math.cos(targRot + 180 * radian),
                            s = 100 * -Math.sin(targRot + 180 * radian);
                        if (a = this.arrowX - i, t = this.arrowY - this.targetCentreY - s, Math.sqrt(a * a + t * t) < 83.18 && (e = 0), 2 == aLevelData[levelNum].targType) {
                            var i = 100 * -Math.cos(targRot + 0 * radian),
                                s = 100 * -Math.sin(targRot + 0 * radian);
                            a = this.arrowX - i,
                                t = this.arrowY - this.targetCentreY - s,
                                Math.sqrt(a * a + t * t) < 83.18 && (e = 0)
                        }
                    } else if (aLevelData[levelNum].targType > 3) {
                        var i = 63.25 * -Math.cos(targRot + 0 * radian),
                            s = 63.25 * -Math.sin(targRot + 0 * radian);
                        if (a = this.arrowX - i, t = this.arrowY - this.targetCentreY - s, Math.sqrt(a * a + t * t) < 36.738 && (e = 0), aLevelData[levelNum].targType > 4) {
                            var i = 63.25 * -Math.cos(targRot + 120 * radian),
                                s = 63.25 * -Math.sin(targRot + 120 * radian);
                            a = this.arrowX - i,
                                t = this.arrowY - this.targetCentreY - s,
                                Math.sqrt(a * a + t * t) < 36.738 && (e = 0)
                        }
                        if (aLevelData[levelNum].targType > 5) {
                            var i = 63.25 * -Math.cos(targRot + 240 * radian),
                                s = 63.25 * -Math.sin(targRot + 240 * radian);
                            a = this.arrowX - i,
                                t = this.arrowY - this.targetCentreY - s,
                                Math.sqrt(a * a + t * t) < 36.738 && (e = 0)
                        }
                    }
                }
                TweenLite.to(this, 1, {
                    jiggleDamp: 0,
                    ease: "Quad.easeOut",
                    onComplete: function () { }
                }),
                    hud.showScore(e)
            },
                a.prototype.setThinLine = function () {
                    ctx.strokeStyle = "#8F8B7B",
                        ctx.lineWidth = 7.5 * this.targetScale
                },
                a.prototype.update = function () {
                    this.isFlying ? (this.scrollY -= this.scrollInc * delta, this.scrollY < 0 && (this.scrollY += 500), this.targScrollSpeed = 0) : this.arrowWillHit && (this.jiggleInc += delta, this.jiggleRot = Math.sin(20 * this.jiggleInc) / 10 * this.jiggleDamp),
                        this.groundSkew = Math.max(canvas.width / canvas.height / -4, -.8)
                },
                a.prototype.render = function () {
                    ctx.fillStyle = "rgba(0, 0, 0, 1)",
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                    for (var a = 500 / this.segNum,
                        t = 0,
                        e = 0; e < this.segNum; e++) {
                        this.tempInc = e,
                            this.easeInc = -1 * (Math.sqrt(1 - (this.tempInc /= this.segNum) * this.tempInc) - 1) + 0,
                            this.nextRow = e + 1,
                            this.segHeightAfter = -1 * (Math.sqrt(1 - (this.nextRow /= this.segNum) * this.nextRow) - 1) + 0 - this.easeInc;
                        var i = 1.4 * canvas.height;
                        if (this.aRowData[e].y = this.horizon + this.easeInc * i, 0 == t && (this.rowId = e), (t += this.segHeightAfter * i) > this.lineRate) {
                            var s = (e / this.segNum * (1500 / this.shotAngle) + this.scrollX) % 2e3;
                            s < 0 && (s += 2e3),
                                ctx.drawImage(this.oScrollGroundImgData.img, s, this.rowId * a + this.scrollY, 2e3 - e / this.segNum * 1500, a, (canvas.width - 1200) / 2, this.aRowData[this.rowId].y, 1200, t + 1),
                                t = 0
                        }
                    }
                    var s = this.scrollX / 3 % 1500;
                    s < 0 && (s += 1500);
                    var o = this.oGameElementsImgData.oData.oAtlasData[oImageIds.fadeBorder1].x,
                        r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.fadeBorder1].y,
                        h = this.oGameElementsImgData.oData.oAtlasData[oImageIds.fadeBorder1].width,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.fadeBorder1].height;
                    ctx.drawImage(this.oGameElementsImgData.img, o, r, h, l, canvas.width / 2 - 600, 0, h, canvas.height);
                    var o = this.oGameElementsImgData.oData.oAtlasData[oImageIds.fadeBorder0].x,
                        r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.fadeBorder0].y,
                        h = this.oGameElementsImgData.oData.oAtlasData[oImageIds.fadeBorder0].width,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.fadeBorder0].height;
                    ctx.drawImage(this.oGameElementsImgData.img, o, r, h, l, canvas.width / 2 + 600 - h, 0, h, canvas.height);
                    switch (ctx.strokeStyle = "#6D695C", ctx.lineWidth = 15 * this.targetScale, ctx.lineCap = "round", oTargetType.id) {
                        case "horiz":
                            ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY),
                                ctx.stroke();
                            break;
                        case "vert":
                            ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX, this.targetY - (this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX, this.targetY - (this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.stroke();
                            break;
                        case "diag0":
                            ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncX) * this.targetScale, this.targetY - (this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncX) * this.targetScale, this.targetY - (this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.stroke();
                            break;
                        case "diag1":
                            ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist + this.localMoveIncX) * this.targetScale, this.targetY - (this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist + this.localMoveIncX) * this.targetScale, this.targetY - (this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.stroke();
                            break;
                        case "circle0":
                        case "circle1":
                            ctx.beginPath(),
                                ctx.arc(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale - this.scaleMultiplier * oTargetType.moveDist * 200 * this.targetScale, this.scaleMultiplier * oTargetType.moveDist * 200 * this.targetScale, 0, 2 * Math.PI, !1),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.arc(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale - this.scaleMultiplier * oTargetType.moveDist * 200 * this.targetScale, this.scaleMultiplier * oTargetType.moveDist * 200 * this.targetScale, 0, 2 * Math.PI, !1),
                                ctx.stroke();
                            break;
                        case "triangle0":
                            ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.stroke();
                            break;
                        case "triangle1":
                            ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + this.localMoveIncX * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.stroke();
                            break;
                        case "square":
                            ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX + (this.localMoveDistSeg * oTargetType.moveDist / 2 + this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY - (.8 * this.localMoveDistSeg * oTargetType.moveDist - this.localMoveIncY) * this.targetScale),
                                ctx.lineTo(canvas.width / 2 + this.targetX - (this.localMoveDistSeg * oTargetType.moveDist / 2 - this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale),
                                ctx.stroke()
                    }
                    var o = this.oGameElementsImgData.oData.oAtlasData[oImageIds.stand].x,
                        r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.stand].y,
                        h = this.oGameElementsImgData.oData.oAtlasData[oImageIds.stand].width,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.stand].height;
                    ctx.drawImage(this.oGameElementsImgData.img, o, r, h, l, canvas.width / 2 + this.targetX - (h / 2 - this.localMoveIncX) * this.targetScale, this.targetY + this.localMoveIncY * this.targetScale, h * this.targetScale, l * this.targetScale);
                    var o = this.oGameElementsImgData.oData.oAtlasData[oImageIds["target" + archeryView.targStyle]].x,
                        r = this.oGameElementsImgData.oData.oAtlasData[oImageIds["target" + archeryView.targStyle]].y,
                        h = this.oGameElementsImgData.oData.oAtlasData[oImageIds["target" + archeryView.targStyle]].width,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds["target" + archeryView.targStyle]].height;
                    if (ctx.save(), ctx.translate(canvas.width / 2 + this.targetX, this.targetY), ctx.rotate(targRot), ctx.scale(this.targetScale, this.targetScale), ctx.drawImage(this.oGameElementsImgData.img, o, r, h, l, -h / 2, -l / 2, h, l), ctx.restore(), "balloons" == aLevelData[levelNum].misc.id && "levels" == gameMode) for (var e = 0; e < aLevelBalloonData.length; e++) {
                        var o = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloon" + aLevelBalloonData[e].colour]].x,
                            r = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloon" + aLevelBalloonData[e].colour]].y,
                            h = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloon" + aLevelBalloonData[e].colour]].width,
                            l = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloon" + aLevelBalloonData[e].colour]].height;
                        ctx.drawImage(this.oGameElementsImgData.img, o, r, h, l, canvas.width / 2 + this.targetX - h / 2 * aLevelBalloonData[e].scale * this.targetScale + (- Math.cos(targRot + aLevelBalloonData[e].rot) * aLevelBalloonData[e].hyp + 2.5 * aLevelBalloonData[e].scale) * this.targetScale, this.targetY - l / 2 * aLevelBalloonData[e].scale * this.targetScale + (- Math.sin(targRot + aLevelBalloonData[e].rot) * aLevelBalloonData[e].hyp + 7 * aLevelBalloonData[e].scale) * this.targetScale, h * this.targetScale * aLevelBalloonData[e].scale, h * this.targetScale * aLevelBalloonData[e].scale)
                    } else if ("challenge" == gameMode && !this.hitBalloon) {
                        var o = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloon" + challengeLevelNum % 7]].x,
                            r = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloon" + challengeLevelNum % 7]].y,
                            h = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloon" + challengeLevelNum % 7]].width,
                            l = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloon" + challengeLevelNum % 7]].height;
                        ctx.drawImage(this.oGameElementsImgData.img, o, r, h, l, canvas.width / 2 + this.targetX - h / 2 * oChallengeBalloon.scale * this.targetScale + (- Math.cos(targRot + oChallengeBalloon.rot) * oChallengeBalloon.hyp + 2.5 * oChallengeBalloon.scale) * this.targetScale, this.targetY - l / 2 * oChallengeBalloon.scale * this.targetScale + (- Math.sin(targRot + oChallengeBalloon.rot) * oChallengeBalloon.hyp + 7 * oChallengeBalloon.scale) * this.targetScale, h * this.targetScale * oChallengeBalloon.scale, h * this.targetScale * oChallengeBalloon.scale)
                    }
                    this.renderArrow();
                    for (var e = 0; e < aArrowsFired.length; e++) if (aArrowsFired[e].hitTarget) {
                        var o = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowShadow].x,
                            r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowShadow].y,
                            h = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowShadow].width,
                            l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowShadow].height;
                        ctx.drawImage(this.oGameElementsImgData.img, o, r, h, l, canvas.width / 2 + this.targetX + (Math.cos(targRot + aArrowsFired[e].rot) * aArrowsFired[e].hyp * hitTargetRadius - h / 2) * this.targetScale, this.targetY + (Math.sin(targRot + aArrowsFired[e].rot) * aArrowsFired[e].hyp * hitTargetRadius - 4) * this.targetScale, h * this.targetScale, l * this.targetScale),
                            ctx.save(),
                            ctx.translate(canvas.width / 2 + this.targetX + Math.cos(targRot + aArrowsFired[e].rot) * aArrowsFired[e].hyp * hitTargetRadius * this.targetScale, this.targetY + Math.sin(targRot + aArrowsFired[e].rot) * aArrowsFired[e].hyp * hitTargetRadius * this.targetScale),
                            ctx.rotate(this.arrowRot + this.groundSkew + Math.sin(1e3 * (e + 1 + levelNum)) / 6),
                            ctx.scale(.4, .4);
                        var o = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlight].x,
                            r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlight].y,
                            h = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlight].width,
                            l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlight].height;
                        ctx.drawImage(this.oGameElementsImgData.img, o, r, h, l, -h / 2, 1, h, l),
                            ctx.restore()
                    }
                },
                a.prototype.renderArrow = function () {
                    if (!this.isFlying && this.arrowWillHit) {
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowShadow].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowShadow].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowShadow].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowShadow].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, canvas.width / 2 + this.arrowX - e / 2 * this.targetScale, this.arrowY - 4 * this.targetScale, e * this.targetScale, i * this.targetScale)
                    }
                    if (this.isFlying || this.arrowWillHit) {
                        ctx.save(),
                            ctx.translate(canvas.width / 2 + this.arrowX, this.arrowY),
                            ctx.rotate(this.arrowRot + this.jiggleRot + this.groundSkew),
                            ctx.scale(this.arrowScale, this.arrowScale);
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlight].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlight].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlight].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlight].height;
                        if (ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, -e / 2, 0, e, i), this.specialArrowAlpha > 0) {
                            ctx.globalAlpha = this.specialArrowAlpha - Math.random() * this.specialArrowAlpha / 5;
                            var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlightSpecial].x,
                                t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlightSpecial].y,
                                e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlightSpecial].width,
                                i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInFlightSpecial].height;
                            ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, -e / 2, 0, e, i)
                        }
                    } else {
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.missCross].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.missCross].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.missCross].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.missCross].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, canvas.width / 2 + this.arrowX - e / 2, this.arrowY - i / 2, e, i)
                    }
                    ctx.restore()
                },
                a
        }();
        a.ScrollGround = t
    }(Elements || (Elements = {}));