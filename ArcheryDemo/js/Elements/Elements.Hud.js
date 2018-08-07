var Elements; !
    function (a) {
        var t = function () {
            function t() {
                this.hasWind = !1,
                    this.largeNumberSpace = 41,
                    this.scoreX = 0,
                    this.scoreY = 0,
                    this.levelScoreEase = 0,
                    this.windYPerc = .65,
                    this.oGameElementsImgData = assetLib.getData("gameElements"),
                    this.oGreenNumbersImgData = assetLib.getData("numbersGreen"),
                    this.oBlueNumbersImgData = assetLib.getData("numbersBlue"),
                    this.oRedNumbersImgData = assetLib.getData("numbersRed"),
                    firstRun && (this.tutorial = new a.Tutorial(assetLib.getData("tutorial"))),
                    this.resetWind()
            }
            return t.prototype.easeScore = function () {
                TweenLite.to(this, .3, {
                    levelScoreEase: Math.min(levelScore, aLevelData[levelNum].aScoreTargs[2]),
                    ease: "Quad.easeOut"
                })
            },
                t.prototype.resetWind = function () {
                    var a = this;
                    if (oTargetType.windMax > 0) {
                        this.hasWind = !0;
                        var t = 0;
                        Math.random() > .5 && (t = 180),
                            "challenge" == gameMode && (this.windYPerc = .5),
                            this.windDir = (60 * Math.random() - 30 + t) * radian,
                            this.windPower = Math.round(Math.random() * (oTargetType.windMax - oTargetType.windMin) * 10) / 10 + oTargetType.windMin,
                            this.windX = canvas.width / 2,
                            this.windY = -100,
                            this.windScale = 1.5,
                            TweenLite.to(this, 1, {
                                windX: canvas.width / 2,
                                windScale: 1,
                                ease: "Bounce.easeOut",
                                onComplete: function () {
                                    TweenLite.to(a, .5, {
                                        delay: 0,
                                        windX: 58,
                                        windY: 0,
                                        windScale: .6,
                                        ease: "Quad.easeOut",
                                        onComplete: function () { }
                                    })
                                }
                            })
                    } else this.windDir = 0,
                        this.windPower = 0
                },
                t.prototype.showScore = function (a) {
                    var t = this;
                    switch (this.scoreX = 0, this.scoreY = .5, this.scoreNum = a, levelScore += this.scoreNum, this.easeScore(), this.scoreNum) {
                        case 10:
                        case 9:
                            playSound("cheer" + Math.floor(5 * Math.random()));
                        case 8:
                        case 7:
                        case 6:
                        case 5:
                        case 4:
                        case 3:
                        case 2:
                        case 1:
                            playSound("score" + Math.floor(5 * Math.random())),
                                addFirework(1, .2 * canvas.width, .5 * canvas.height, 3),
                                addFirework(1, .8 * canvas.width, .5 * canvas.height, 3);
                            break;
                        case 0:
                            playSound("crowdSad")
                    }
                    this.scoreTween = TweenLite.to(this, .5, {
                        delay: .1,
                        scoreX: .5,
                        scoreY: .75,
                        ease: "Back.easeOut",
                        onComplete: function () {
                            if (t.scoreNum >= 10) for (var a = 0; a < 5; a++) addFirework(0, canvas.width / 2 - 150 + 75 * a, .75 * canvas.height + 200 * Math.random() - 100, 1 * Math.random() + 2);
                            t.scoreTween = TweenLite.to(t, .5, {
                                delay: .5,
                                scoreX: -.2,
                                scoreY: .5,
                                ease: "Back.easeIn",
                                onComplete: function () {
                                    initNextShot()
                                }
                            })
                        }
                    })
                },
                t.prototype.showBalloonScore = function (a) {
                    var t = this;
                    this.scoreX = 0,
                        this.scoreY = .5,
                        a ? (this.scoreNum = 1, levelScore += this.scoreNum, addFirework(1, .2 * canvas.width, .5 * canvas.height, 3), addFirework(1, .8 * canvas.width, .5 * canvas.height, 3), playSound("cheer" + Math.floor(5 * Math.random())), playSound("score" + Math.floor(5 * Math.random()))) : (this.scoreNum = 0, playSound("crowdSad")),
                        this.easeScore(),
                        this.scoreTween = TweenLite.to(this, .5, {
                            delay: .1,
                            scoreX: .5,
                            scoreY: .75,
                            ease: "Back.easeOut",
                            onComplete: function () {
                                for (var a = 0; a < 5; a++) addFirework(0, canvas.width / 2 - 150 + 75 * a, .75 * canvas.height + 200 * Math.random() - 100, 1 * Math.random() + 2);
                                t.scoreTween = TweenLite.to(t, .5, {
                                    delay: .5,
                                    scoreX: -.2,
                                    scoreY: .5,
                                    ease: "Back.easeIn",
                                    onComplete: function () {
                                        "levels" == gameMode ? initNextShot() : "challenge" == gameMode && (0 == t.scoreNum ? initChallengeFail() : initNextShot())
                                    }
                                })
                            }
                        })
                },
                t.prototype.update = function () { },
                t.prototype.render = function () {
                    if ("levels" == gameMode) {
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar2].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar2].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar2].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar2].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, 52 - e / 2, 20, e, i);
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar1].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar1].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar1].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar1].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t + 30 + 171 / aLevelData[levelNum].aScoreTargs[2] * (aLevelData[levelNum].aScoreTargs[2] - aLevelData[levelNum].aScoreTargs[1]), e, 171 / aLevelData[levelNum].aScoreTargs[2] * aLevelData[levelNum].aScoreTargs[1], 52 - e / 2, 50 + 171 / aLevelData[levelNum].aScoreTargs[2] * (aLevelData[levelNum].aScoreTargs[2] - aLevelData[levelNum].aScoreTargs[1]), e, 171 / aLevelData[levelNum].aScoreTargs[2] * aLevelData[levelNum].aScoreTargs[1]);
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar0].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar0].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar0].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressBar0].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t + 30 + 171 / aLevelData[levelNum].aScoreTargs[2] * (aLevelData[levelNum].aScoreTargs[2] - aLevelData[levelNum].aScoreTargs[0]), e, 171 / aLevelData[levelNum].aScoreTargs[2] * aLevelData[levelNum].aScoreTargs[0], 52 - e / 2, 50 + 171 / aLevelData[levelNum].aScoreTargs[2] * (aLevelData[levelNum].aScoreTargs[2] - aLevelData[levelNum].aScoreTargs[0]), e, 171 / aLevelData[levelNum].aScoreTargs[2] * aLevelData[levelNum].aScoreTargs[0]);
                        var s = 0;
                        this.levelScoreEase >= aLevelData[levelNum].aScoreTargs[2] ? s = 3 : this.levelScoreEase >= aLevelData[levelNum].aScoreTargs[1] ? s = 2 : this.levelScoreEase >= aLevelData[levelNum].aScoreTargs[0] && (s = 1);
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds["progressMarker" + s]].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["progressMarker" + s]].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["progressMarker" + s]].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["progressMarker" + s]].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, 53 - e / 2, 20 - i / 2 + 30 + 168 - 168 / aLevelData[levelNum].aScoreTargs[2] * this.levelScoreEase - 3, e, i);
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg0].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg0].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg0].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg0].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, 58, 50 + 171 / aLevelData[levelNum].aScoreTargs[2] * (aLevelData[levelNum].aScoreTargs[2] - aLevelData[levelNum].aScoreTargs[0]) - i / 2, e, i);
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg1].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg1].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg1].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg1].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, 3, 50 + 171 / aLevelData[levelNum].aScoreTargs[2] * (aLevelData[levelNum].aScoreTargs[2] - aLevelData[levelNum].aScoreTargs[1]) - i / 2, e, i);
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg0].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg0].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg0].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.progressNumBg0].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, 58, 50 - i / 2, e, i);
                        for (var o = aLevelData[levelNum].aScoreTargs[0].toString(), r = .3, h = 0; h < o.length; h++) {
                            var l;
                            l = parseFloat(o.charAt(h));
                            var m = l * this.oGreenNumbersImgData.oData.spriteWidth % this.oGreenNumbersImgData.img.width,
                                n = Math.floor(l / (this.oGreenNumbersImgData.img.width / this.oGreenNumbersImgData.oData.spriteWidth)) * this.oGreenNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oGreenNumbersImgData.img, m, n, this.oGreenNumbersImgData.oData.spriteWidth, this.oGreenNumbersImgData.oData.spriteHeight, 82 + h * (this.largeNumberSpace * r) - o.length / 2 * (this.largeNumberSpace * r), 50 + 171 / aLevelData[levelNum].aScoreTargs[2] * (aLevelData[levelNum].aScoreTargs[2] - aLevelData[levelNum].aScoreTargs[0]) - 9, this.oGreenNumbersImgData.oData.spriteWidth * r, this.oGreenNumbersImgData.oData.spriteHeight * r)
                        }
                        for (var o = aLevelData[levelNum].aScoreTargs[1].toString(), h = 0; h < o.length; h++) {
                            var l;
                            l = parseFloat(o.charAt(h));
                            var m = l * this.oGreenNumbersImgData.oData.spriteWidth % this.oGreenNumbersImgData.img.width,
                                n = Math.floor(l / (this.oGreenNumbersImgData.img.width / this.oGreenNumbersImgData.oData.spriteWidth)) * this.oGreenNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oGreenNumbersImgData.img, m, n, this.oGreenNumbersImgData.oData.spriteWidth, this.oGreenNumbersImgData.oData.spriteHeight, 18 + h * (this.largeNumberSpace * r) - o.length / 2 * (this.largeNumberSpace * r), 50 + 171 / aLevelData[levelNum].aScoreTargs[2] * (aLevelData[levelNum].aScoreTargs[2] - aLevelData[levelNum].aScoreTargs[1]) - 9, this.oGreenNumbersImgData.oData.spriteWidth * r, this.oGreenNumbersImgData.oData.spriteHeight * r)
                        }
                        for (var o = aLevelData[levelNum].aScoreTargs[2].toString(), h = 0; h < o.length; h++) {
                            var l;
                            l = parseFloat(o.charAt(h));
                            var m = l * this.oGreenNumbersImgData.oData.spriteWidth % this.oGreenNumbersImgData.img.width,
                                n = Math.floor(l / (this.oGreenNumbersImgData.img.width / this.oGreenNumbersImgData.oData.spriteWidth)) * this.oGreenNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oGreenNumbersImgData.img, m, n, this.oGreenNumbersImgData.oData.spriteWidth, this.oGreenNumbersImgData.oData.spriteHeight, 82 + h * (this.largeNumberSpace * r) - o.length / 2 * (this.largeNumberSpace * r), 41, this.oGreenNumbersImgData.oData.spriteWidth * r, this.oGreenNumbersImgData.oData.spriteHeight * r)
                        }
                        if (levelScore > 0) for (var o = levelScore.toString(), r = .6, h = 0; h < o.length; h++) {
                            var l;
                            l = parseFloat(o.charAt(h));
                            var m = l * this.oGreenNumbersImgData.oData.spriteWidth % this.oGreenNumbersImgData.img.width,
                                n = Math.floor(l / (this.oGreenNumbersImgData.img.width / this.oGreenNumbersImgData.oData.spriteWidth)) * this.oGreenNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oGreenNumbersImgData.img, m, n, this.oGreenNumbersImgData.oData.spriteWidth, this.oGreenNumbersImgData.oData.spriteHeight, 48 + h * (this.largeNumberSpace * r) - o.length / 2 * (this.largeNumberSpace * r), 225, this.oGreenNumbersImgData.oData.spriteWidth * r, this.oGreenNumbersImgData.oData.spriteHeight * r)
                        }
                    } else {
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scoreBgGame].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scoreBgGame].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scoreBgGame].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scoreBgGame].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, 52 - e / 2, 50 - i / 2, e, i);
                        var o = levelScore.toString(),
                            r = 1;
                        o.length > 2 ? r = .6 : o.length > 1 && (r = .8);
                        for (var h = 0; h < o.length; h++) {
                            var l;
                            l = parseFloat(o.charAt(h));
                            var m = l * this.oGreenNumbersImgData.oData.spriteWidth % this.oGreenNumbersImgData.img.width,
                                n = Math.floor(l / (this.oGreenNumbersImgData.img.width / this.oGreenNumbersImgData.oData.spriteWidth)) * this.oGreenNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oGreenNumbersImgData.img, m, n, this.oGreenNumbersImgData.oData.spriteWidth, this.oGreenNumbersImgData.oData.spriteHeight, 48 + h * (this.largeNumberSpace * r) - o.length / 2 * (this.largeNumberSpace * r), 65, this.oGreenNumbersImgData.oData.spriteWidth * r, this.oGreenNumbersImgData.oData.spriteHeight * r)
                        }
                    }
                    if ("levels" == gameMode) {
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.quiverBgGame].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.quiverBgGame].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.quiverBgGame].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.quiverBgGame].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, 58 - e / 2, canvas.height - i / 2 - 60, e, i);
                        for (var o = (aLevelData[levelNum].quiver - quiver + 1).toString(), r = .6, h = 0; h < o.length; h++) {
                            var l;
                            l = parseFloat(o.charAt(h));
                            var m = l * this.oRedNumbersImgData.oData.spriteWidth % this.oRedNumbersImgData.img.width,
                                n = Math.floor(l / (this.oRedNumbersImgData.img.width / this.oRedNumbersImgData.oData.spriteWidth)) * this.oRedNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oRedNumbersImgData.img, m, n, this.oRedNumbersImgData.oData.spriteWidth, this.oRedNumbersImgData.oData.spriteHeight, 11, canvas.height - 55.5, this.oRedNumbersImgData.oData.spriteWidth * r, this.oRedNumbersImgData.oData.spriteHeight * r)
                        }
                        for (var o = aLevelData[levelNum].quiver.toString(), r = .6, h = 0; h < o.length; h++) {
                            var l;
                            l = parseFloat(o.charAt(h));
                            var m = l * this.oRedNumbersImgData.oData.spriteWidth % this.oRedNumbersImgData.img.width,
                                n = Math.floor(l / (this.oRedNumbersImgData.img.width / this.oRedNumbersImgData.oData.spriteWidth)) * this.oRedNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oRedNumbersImgData.img, m, n, this.oRedNumbersImgData.oData.spriteWidth, this.oRedNumbersImgData.oData.spriteHeight, 62, canvas.height - 55.5, this.oRedNumbersImgData.oData.spriteWidth * r, this.oRedNumbersImgData.oData.spriteHeight * r)
                        }
                    }
                    if (this.hasWind) {
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.windPanel].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.windPanel].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.windPanel].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.windPanel].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, this.windX - e / 2 * this.windScale, canvas.height * this.windYPerc + this.windY - i / 2 * this.windScale, e * this.windScale, i * this.windScale),
                            ctx.save(),
                            ctx.translate(this.windX - 4, canvas.height * this.windYPerc + this.windY + 4),
                            ctx.rotate(this.windDir),
                            ctx.scale(this.windScale, this.windScale);
                        var s = 0;
                        this.windDir / radian > 90 && (s = 1);
                        var g = Math.round(1.66 * this.windPower),
                            a = this.oGameElementsImgData.oData.oAtlasData[oImageIds["windArrow" + s + g]].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["windArrow" + s + g]].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["windArrow" + s + g]].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["windArrow" + s + g]].height;
                        ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, -e / 2, -i / 2, e, i),
                            ctx.restore();
                        for (var o = Math.round(10 * this.windPower).toString(); o.length < 2;) o = "0" + o;
                        for (var r = 1,
                            h = 0; h < o.length; h++) {
                            var l;
                            l = parseFloat(o.charAt(h));
                            var m = l * this.oBlueNumbersImgData.oData.spriteWidth % this.oBlueNumbersImgData.img.width,
                                n = Math.floor(l / (this.oBlueNumbersImgData.img.width / this.oBlueNumbersImgData.oData.spriteWidth)) * this.oBlueNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oBlueNumbersImgData.img, m, n, this.oBlueNumbersImgData.oData.spriteWidth, this.oBlueNumbersImgData.oData.spriteHeight, this.windX + h * (63 * r * this.windScale) - 65 * r * this.windScale, canvas.height * this.windYPerc + this.windY + 34 * this.windScale, this.oBlueNumbersImgData.oData.spriteWidth * r * this.windScale, this.oBlueNumbersImgData.oData.spriteHeight * r * this.windScale)
                        }
                    }
                    if (canvas.width * this.scoreX > 0) {
                        var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scoreDiagBg].x,
                            t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scoreDiagBg].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scoreDiagBg].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scoreDiagBg].height;
                        if (ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, 0, canvas.height * this.scoreY - i / 2 * (2 * this.scoreX) + 5, canvas.width, i * (2 * this.scoreX)), "balloons" == aLevelData[levelNum].misc.id && "levels" == gameMode) if (1 == this.scoreNum) {
                            var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.balloonScore].x,
                                t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.balloonScore].y,
                                e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.balloonScore].width,
                                i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.balloonScore].height;
                            ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, canvas.width * this.scoreX - e / 2, canvas.height * this.scoreY - i / 2, e, i)
                        } else {
                            var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].x,
                                t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].y,
                                e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].width,
                                i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].height;
                            ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, canvas.width * this.scoreX - e / 2, canvas.height * this.scoreY - i / 2, e, i)
                        } else if ("levels" == gameMode) {
                            var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].x,
                                t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].y,
                                e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].width,
                                i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].height;
                            ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, canvas.width * this.scoreX - e / 2, canvas.height * this.scoreY - i / 2, e, i)
                        } else if ("challenge" == gameMode) if (1 == this.scoreNum) {
                            var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.thumbsUp].x,
                                t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.thumbsUp].y,
                                e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.thumbsUp].width,
                                i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.thumbsUp].height;
                            ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, canvas.width * this.scoreX - e / 2, canvas.height * this.scoreY - i / 2, e, i)
                        } else {
                            var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].x,
                                t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].y,
                                e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].width,
                                i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.scoreNum]].height;
                            ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, canvas.width * this.scoreX - e / 2, canvas.height * this.scoreY - i / 2, e, i)
                        }
                    }
                    firstRun && (this.tutorial.update(), this.tutorial.render())
                },
                t
        }();
        a.Hud = t
    }(Elements || (Elements = {}));