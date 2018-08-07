var Elements; !
    function (a) {
        var t = function () {
            function a(a, t) {
                this.timer = .3,
                    this.endTime = 0,
                    this.posY = 0,
                    this.largeNumberSpace = 41,
                    this.incY = 0,
                    this.flareRot = 0,
                    this.levelNumberSpace = 20,
                    this.oSplashLogoImgData = assetLib.getData("splashLogo"),
                    this.oUiElementsImgData = assetLib.getData("uiElements"),
                    this.oGreenNumbersImgData = assetLib.getData("numbersGreen"),
                    this.oBlueNumbersImgData = assetLib.getData("numbersBlue"),
                    this.oRedNumbersImgData = assetLib.getData("numbersRed"),
                    this.oLevelNumbersImgData = assetLib.getData("numbersLevel"),
                    this.oMapImgData = assetLib.getData("map"),
                    this.panelType = a,
                    this.aButs = t,
                    this.oTopFlareImgData = assetLib.getData("flare")
            }
            return a.prototype.update = function () {
                this.incY += 10 * delta
            },
                a.prototype.startTween1 = function () {
                    this.posY = 500,
                        TweenLite.to(this, .5, {
                            posY: 0,
                            ease: "Cubic.easeOut"
                        })
                },
                a.prototype.tweenFinger = function () {
                    var a = saveDataHandler.getLastUnlockedLevel();
                    this.fingerArc = 0,
                        this.fingerX = aLevelData[a - 1].mapX,
                        this.fingerY = aLevelData[a - 1].mapY,
                        TweenLite.to(this, 1, {
                            fingerX: aLevelData[a].mapX,
                            fingerY: aLevelData[a].mapY,
                            fingerArc: -180 * radian,
                            ease: "Quad.easeInOut",
                            onComplete: function () {
                                levelNum++ ,
                                    initLevelPreview()
                            }
                        })
                },
                a.prototype.switchBut = function (a, t, e, i) {
                    void 0 === e && (e = null),
                        void 0 === i && (i = null);
                    for (var s = null,
                        o = 0; o < this.aButs.length; o++) if (this.aButs[o].id == a) {
                            this.aButs[o].id = t,
                                s = this.aButs[o],
                                e && (this.aButs[o].aPos = e),
                                i && (this.aButs[o].align = i);
                            break
                        }
                    return s
                },
                a.prototype.render = function (a) {
                    switch (void 0 === a && (a = !0), a || this.addButs(ctx), this.panelType) {
                        case "splash":
                            ctx.fillStyle = "rgba(0,0,0,.35)",
                                ctx.fillRect(0, 0, canvas.width, canvas.height),
                                ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY);
                            break;
                        case "start":
                            this.flareRot += delta / 3,
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY + 90, .7 * canvas.height),
                                ctx.scale(.6, .5),
                                ctx.rotate(this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.translate(- (canvas.width / 2 + this.posY + 90), -.7 * canvas.height),
                                ctx.translate(canvas.width / 2 + this.posY + 90, .7 * canvas.height),
                                ctx.rotate(2 * -this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore(),
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY - 90, .7 * canvas.height),
                                ctx.scale(.6, .5),
                                ctx.rotate(this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.translate(- (canvas.width / 2 + this.posY - 90), -.7 * canvas.height),
                                ctx.translate(canvas.width / 2 + this.posY - 90, .7 * canvas.height),
                                ctx.rotate(2 * -this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore();
                            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY - 10, .25 * canvas.height - s / 2, i, s);
                            var o = saveDataHandler.getChallengeHighscore().toString(),
                                r = .5,
                                t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.miniCup].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.miniCup].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.miniCup].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.miniCup].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i - o.length / 2 * (this.largeNumberSpace * r) + 103 + this.posY, .7 * canvas.height + 70, i, s);
                            for (var h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oGreenNumbersImgData.oData.spriteWidth % this.oGreenNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oGreenNumbersImgData.img.width / this.oGreenNumbersImgData.oData.spriteWidth)) * this.oGreenNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oGreenNumbersImgData.img, m, n, this.oRedNumbersImgData.oData.spriteWidth, this.oRedNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - o.length / 2 * (this.largeNumberSpace * r) + 101 + this.posY, .7 * canvas.height + 75, this.oRedNumbersImgData.oData.spriteWidth * r, this.oRedNumbersImgData.oData.spriteHeight * r)
                            }
                            var o = saveDataHandler.getTotalScore().toString(),
                                r = .5,
                                t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.miniCup].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.miniCup].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.miniCup].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.miniCup].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i - o.length / 2 * (this.largeNumberSpace * r) - 75 + this.posY, .7 * canvas.height + 70, i, s);
                            for (var h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oGreenNumbersImgData.oData.spriteWidth % this.oGreenNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oGreenNumbersImgData.img.width / this.oGreenNumbersImgData.oData.spriteWidth)) * this.oGreenNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oGreenNumbersImgData.img, m, n, this.oRedNumbersImgData.oData.spriteWidth, this.oRedNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - o.length / 2 * (this.largeNumberSpace * r) - 77 + this.posY, .7 * canvas.height + 75, this.oRedNumbersImgData.oData.spriteWidth * r, this.oRedNumbersImgData.oData.spriteHeight * r)
                            }
                            break;
                        case "credits":
                            ctx.fillStyle = "rgba(0, 0, 0, 0.35)",
                                ctx.fillRect(0, 0, canvas.width, canvas.height),
                                ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY);
                            break;
                        case "map":
                            mapPosRealY -= 8 * (mapPosRealY - mapPosY) * delta,
                                mapPosRealX -= 8 * (mapPosRealX - mapPosX) * delta,
                                ctx.drawImage(this.oMapImgData.img, mapPosRealX, mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width * mapScale, canvas.height * mapScale);
                            var g = saveDataHandler.getLastUnlockedLevel();
                            if (- 1 != g) {
                                this.flareRot += delta / 3;
                                aLevelData[g].y < 200 && 80,
                                    ctx.save(),
                                    ctx.translate((aLevelData[g].mapX - mapPosRealX) * mapScale, (aLevelData[g].mapY - mapPosRealY) * mapScale),
                                    ctx.scale(.5, .5),
                                    ctx.rotate(this.flareRot),
                                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                    ctx.restore(),
                                    ctx.save(),
                                    ctx.translate((aLevelData[g].mapX - mapPosRealX) * mapScale, (aLevelData[g].mapY - mapPosRealY) * mapScale),
                                    ctx.scale(.5, .5),
                                    ctx.rotate(- this.flareRot),
                                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                    ctx.restore()
                            }
                            if (this.displayMapIcons(), -1 != g) {
                                var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].x,
                                    e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].y,
                                    i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].width,
                                    s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].height;
                                ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, (aLevelData[g].mapX - i / 2 - mapPosRealX + 4) * mapScale, (aLevelData[g].mapY - s / 2 - mapPosRealY - 100 + 10 * Math.sin(this.incY)) * mapScale, i * mapScale, s * mapScale)
                            }
                            this.displayScore();
                            break;
                        case "levelPreview":
                            ctx.drawImage(this.oMapImgData.img, mapPosRealX, mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width * mapScale, canvas.height * mapScale),
                                this.displayMapIcons(),
                                ctx.fillStyle = "rgba(0, 0, 0, 0.5)",
                                ctx.fillRect(0, 0, canvas.width, canvas.height);
                            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bluePanel].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bluePanel].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bluePanel].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bluePanel].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY, canvas.height / 2 - s / 2, i, s);
                            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.quiver].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.quiver].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.quiver].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.quiver].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY, canvas.height / 2 - s / 2 - 110, i, s);
                            for (var o = aLevelData[levelNum].quiver.toString(), r = .7, h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oRedNumbersImgData.oData.spriteWidth % this.oRedNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oRedNumbersImgData.img.width / this.oRedNumbersImgData.oData.spriteWidth)) * this.oRedNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oRedNumbersImgData.img, m, n, this.oRedNumbersImgData.oData.spriteWidth, this.oRedNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - this.posY + 1, canvas.height / 2 - 132, this.oRedNumbersImgData.oData.spriteWidth * r, this.oRedNumbersImgData.oData.spriteHeight * r)
                            }
                            for (var c = 0; c < 3; c++) {
                                var d = oImageIds["scoreTarget" + c];
                                "balloons" == aLevelData[levelNum].misc.id && (d = oImageIds["balloonTarget" + c]);
                                var t = this.oUiElementsImgData.oData.oAtlasData[d].x,
                                    e = this.oUiElementsImgData.oData.oAtlasData[d].y,
                                    i = this.oUiElementsImgData.oData.oAtlasData[d].width,
                                    s = this.oUiElementsImgData.oData.oAtlasData[d].height;
                                ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY - 113 + 115 * c, canvas.height / 2 - s + 112, i, s);
                                for (var o = aLevelData[levelNum].aScoreTargs[c].toString(), r = .85, h = 0; h < o.length; h++) {
                                    var l;
                                    l = parseFloat(o.charAt(h));
                                    var m = l * this.oBlueNumbersImgData.oData.spriteWidth % this.oBlueNumbersImgData.img.width,
                                        n = Math.floor(l / (this.oBlueNumbersImgData.img.width / this.oBlueNumbersImgData.oData.spriteWidth)) * this.oBlueNumbersImgData.oData.spriteHeight;
                                    ctx.drawImage(this.oBlueNumbersImgData.img, m, n, this.oBlueNumbersImgData.oData.spriteWidth, this.oBlueNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - this.posY - o.length / 2 * (this.largeNumberSpace * r) - 118 + 115 * c, canvas.height / 2 + 42, this.oBlueNumbersImgData.oData.spriteWidth * r, this.oBlueNumbersImgData.oData.spriteHeight * r)
                                }
                            }
                            for (var o = (levelNum + 1).toString(); o.length < 2;) o = "0" + o;
                            for (var r = 1,
                                h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oLevelNumbersImgData.oData.spriteWidth % this.oLevelNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oLevelNumbersImgData.img.width / this.oLevelNumbersImgData.oData.spriteWidth)) * this.oLevelNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oLevelNumbersImgData.img, m, n, this.oLevelNumbersImgData.oData.spriteWidth, this.oLevelNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.levelNumberSpace * r) - this.posY - 201, canvas.height / 2 - 154, this.oLevelNumbersImgData.oData.spriteWidth * r, this.oLevelNumbersImgData.oData.spriteHeight * r)
                            }
                            this.flareRot += delta / 3,
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.scale(.5, .3),
                                ctx.rotate(this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore(),
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.scale(.5, .3),
                                ctx.rotate(- this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore();
                            break;
                        case "levelSuccess":
                            ctx.drawImage(this.oMapImgData.img, mapPosRealX, mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width * mapScale, canvas.height * mapScale),
                                this.displayMapIcons(),
                                ctx.fillStyle = "rgba(0, 0, 0, 0.5)",
                                ctx.fillRect(0, 0, canvas.width, canvas.height);
                            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bluePanel].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bluePanel].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bluePanel].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bluePanel].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY, canvas.height / 2 - s / 2, i, s);
                            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreBgWin].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreBgWin].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreBgWin].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreBgWin].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY, canvas.height / 2 - s / 2 - 115, i, s);
                            for (var o = levelScore.toString(), r = .85, h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oBlueNumbersImgData.oData.spriteWidth % this.oBlueNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oBlueNumbersImgData.img.width / this.oBlueNumbersImgData.oData.spriteWidth)) * this.oBlueNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oBlueNumbersImgData.img, m, n, this.oBlueNumbersImgData.oData.spriteWidth, this.oBlueNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - this.posY - o.length / 2 * (this.largeNumberSpace * r), canvas.height / 2 - 139, this.oBlueNumbersImgData.oData.spriteWidth * r, this.oBlueNumbersImgData.oData.spriteHeight * r)
                            }
                            for (var c = 0; c < 3; c++) {
                                ctx.save(),
                                    0 == c ? levelScore >= aLevelData[levelNum].aScoreTargs[0] && levelScore < aLevelData[levelNum].aScoreTargs[1] ? ctx.globalAlpha = 1 : ctx.globalAlpha = .4 : 1 == c ? levelScore >= aLevelData[levelNum].aScoreTargs[1] && levelScore < aLevelData[levelNum].aScoreTargs[2] ? ctx.globalAlpha = 1 : ctx.globalAlpha = .4 : 2 == c && (levelScore >= aLevelData[levelNum].aScoreTargs[2] ? ctx.globalAlpha = 1 : ctx.globalAlpha = .4);
                                var d = oImageIds["scoreTarget" + c];
                                "balloons" == aLevelData[levelNum].misc.id && (d = oImageIds["balloonTarget" + c]);
                                var t = this.oUiElementsImgData.oData.oAtlasData[d].x,
                                    e = this.oUiElementsImgData.oData.oAtlasData[d].y,
                                    i = this.oUiElementsImgData.oData.oAtlasData[d].width,
                                    s = this.oUiElementsImgData.oData.oAtlasData[d].height;
                                ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY - 113 + 115 * c, canvas.height / 2 - s + 112, i, s);
                                for (var o = aLevelData[levelNum].aScoreTargs[c].toString(), r = .85, h = 0; h < o.length; h++) {
                                    var l;
                                    l = parseFloat(o.charAt(h));
                                    var m = l * this.oBlueNumbersImgData.oData.spriteWidth % this.oBlueNumbersImgData.img.width,
                                        n = Math.floor(l / (this.oBlueNumbersImgData.img.width / this.oBlueNumbersImgData.oData.spriteWidth)) * this.oBlueNumbersImgData.oData.spriteHeight;
                                    ctx.drawImage(this.oBlueNumbersImgData.img, m, n, this.oBlueNumbersImgData.oData.spriteWidth, this.oBlueNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - this.posY - o.length / 2 * (this.largeNumberSpace * r) - 118 + 115 * c, canvas.height / 2 + 42, this.oBlueNumbersImgData.oData.spriteWidth * r, this.oBlueNumbersImgData.oData.spriteHeight * r)
                                }
                                ctx.restore()
                            }
                            for (var o = (levelNum + 1).toString(); o.length < 2;) o = "0" + o;
                            for (var r = 1,
                                h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oLevelNumbersImgData.oData.spriteWidth % this.oLevelNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oLevelNumbersImgData.img.width / this.oLevelNumbersImgData.oData.spriteWidth)) * this.oLevelNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oLevelNumbersImgData.img, m, n, this.oLevelNumbersImgData.oData.spriteWidth, this.oLevelNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.levelNumberSpace * r) - this.posY - 201, canvas.height / 2 - 154, this.oLevelNumbersImgData.oData.spriteWidth * r, this.oLevelNumbersImgData.oData.spriteHeight * r)
                            }
                            this.flareRot += delta / 3,
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.scale(.5, .3),
                                ctx.rotate(this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore(),
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.scale(.5, .3),
                                ctx.rotate(- this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore();
                            break;
                        case "levelFail":
                            ctx.drawImage(this.oMapImgData.img, mapPosRealX, mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width * mapScale, canvas.height * mapScale),
                                this.displayMapIcons(),
                                ctx.fillStyle = "rgba(0, 0, 0, 0.5)",
                                ctx.fillRect(0, 0, canvas.width, canvas.height);
                            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.losePanel].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.losePanel].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.losePanel].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.losePanel].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY, canvas.height / 2 - s / 2, i, s);
                            for (var o = levelScore.toString(), r = .85, h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oRedNumbersImgData.oData.spriteWidth % this.oRedNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oRedNumbersImgData.img.width / this.oRedNumbersImgData.oData.spriteWidth)) * this.oRedNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oRedNumbersImgData.img, m, n, this.oRedNumbersImgData.oData.spriteWidth, this.oRedNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - this.posY - o.length / 2 * (this.largeNumberSpace * r), canvas.height / 2 - 139, this.oRedNumbersImgData.oData.spriteWidth * r, this.oRedNumbersImgData.oData.spriteHeight * r)
                            }
                            for (var c = 0; c < 3; c++) {
                                ctx.save(),
                                    levelScore >= aLevelData[levelNum].aScoreTargs[c] ? ctx.globalAlpha = 1 : ctx.globalAlpha = .4;
                                var d = oImageIds["scoreTarget" + c];
                                "balloons" == aLevelData[levelNum].misc.id && (d = oImageIds["balloonTarget" + c]);
                                var t = this.oUiElementsImgData.oData.oAtlasData[d].x,
                                    e = this.oUiElementsImgData.oData.oAtlasData[d].y,
                                    i = this.oUiElementsImgData.oData.oAtlasData[d].width,
                                    s = this.oUiElementsImgData.oData.oAtlasData[d].height;
                                ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY - 113 + 115 * c, canvas.height / 2 - s + 112, i, s);
                                for (var o = aLevelData[levelNum].aScoreTargs[c].toString(), r = .85, h = 0; h < o.length; h++) {
                                    var l;
                                    l = parseFloat(o.charAt(h));
                                    var m = l * this.oBlueNumbersImgData.oData.spriteWidth % this.oBlueNumbersImgData.img.width,
                                        n = Math.floor(l / (this.oBlueNumbersImgData.img.width / this.oBlueNumbersImgData.oData.spriteWidth)) * this.oBlueNumbersImgData.oData.spriteHeight;
                                    ctx.drawImage(this.oBlueNumbersImgData.img, m, n, this.oBlueNumbersImgData.oData.spriteWidth, this.oBlueNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - this.posY - o.length / 2 * (this.largeNumberSpace * r) - 118 + 115 * c, canvas.height / 2 + 42, this.oBlueNumbersImgData.oData.spriteWidth * r, this.oBlueNumbersImgData.oData.spriteHeight * r)
                                }
                                ctx.restore()
                            }
                            for (var o = (levelNum + 1).toString(); o.length < 2;) o = "0" + o;
                            for (var r = 1,
                                h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oLevelNumbersImgData.oData.spriteWidth % this.oLevelNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oLevelNumbersImgData.img.width / this.oLevelNumbersImgData.oData.spriteWidth)) * this.oLevelNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oLevelNumbersImgData.img, m, n, this.oLevelNumbersImgData.oData.spriteWidth, this.oLevelNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.levelNumberSpace * r) - this.posY - 201, canvas.height / 2 - 154, this.oLevelNumbersImgData.oData.spriteWidth * r, this.oLevelNumbersImgData.oData.spriteHeight * r)
                            }
                            this.flareRot += delta / 3,
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.scale(.5, .3),
                                ctx.rotate(this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore(),
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.scale(.5, .3),
                                ctx.rotate(- this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore();
                            break;
                        case "challengeFail":
                            ctx.drawImage(this.oMapImgData.img, mapPosRealX, mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width * mapScale, canvas.height * mapScale),
                                this.displayMapIcons(),
                                ctx.fillStyle = "rgba(0, 0, 0, 0.5)",
                                ctx.fillRect(0, 0, canvas.width, canvas.height);
                            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.challengePanel].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.challengePanel].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.challengePanel].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.challengePanel].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 - this.posY, canvas.height / 2 - s / 2, i, s);
                            for (var o = levelScore.toString(), r = .85, h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oBlueNumbersImgData.oData.spriteWidth % this.oBlueNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oBlueNumbersImgData.img.width / this.oBlueNumbersImgData.oData.spriteWidth)) * this.oBlueNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oBlueNumbersImgData.img, m, n, this.oRedNumbersImgData.oData.spriteWidth, this.oRedNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - this.posY - o.length / 2 * (this.largeNumberSpace * r), canvas.height / 2 - 6, this.oRedNumbersImgData.oData.spriteWidth * r, this.oRedNumbersImgData.oData.spriteHeight * r)
                            }
                            for (var o = saveDataHandler.getChallengeHighscore().toString(), r = .6, h = 0; h < o.length; h++) {
                                var l;
                                l = parseFloat(o.charAt(h));
                                var m = l * this.oBlueNumbersImgData.oData.spriteWidth % this.oBlueNumbersImgData.img.width,
                                    n = Math.floor(l / (this.oBlueNumbersImgData.img.width / this.oBlueNumbersImgData.oData.spriteWidth)) * this.oBlueNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oBlueNumbersImgData.img, m, n, this.oRedNumbersImgData.oData.spriteWidth, this.oRedNumbersImgData.oData.spriteHeight, canvas.width / 2 + h * (this.largeNumberSpace * r) - 156 - this.posY, canvas.height / 2 + 106, this.oRedNumbersImgData.oData.spriteWidth * r, this.oRedNumbersImgData.oData.spriteHeight * r)
                            }
                            this.flareRot += delta / 3,
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.scale(.5, .3),
                                ctx.rotate(this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore(),
                                ctx.save(),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.translate(canvas.width / 2 + this.posY + 140, canvas.height / 2 + 170),
                                ctx.scale(.5, .3),
                                ctx.rotate(- this.flareRot),
                                ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                ctx.restore();
                            break;
                        case "game":
                            break;
                        case "animateMap":
                            mapPosRealY -= 8 * (mapPosRealY - mapPosY) * delta,
                                mapPosRealX -= 8 * (mapPosRealX - mapPosX) * delta,
                                ctx.drawImage(this.oMapImgData.img, mapPosRealX, mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width * mapScale, canvas.height * mapScale);
                            var g = saveDataHandler.getLastUnlockedLevel();
                            if (- 1 != g) {
                                this.flareRot += delta / 3;
                                aLevelData[g].y < 200 && 80,
                                    ctx.save(),
                                    ctx.translate((aLevelData[g].mapX - mapPosRealX) * mapScale, (aLevelData[g].mapY - mapPosRealY) * mapScale),
                                    ctx.scale(.5, .5),
                                    ctx.rotate(this.flareRot),
                                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                    ctx.restore(),
                                    ctx.save(),
                                    ctx.translate((aLevelData[g].mapX - mapPosRealX) * mapScale, (aLevelData[g].mapY - mapPosRealY) * mapScale),
                                    ctx.scale(.5, .5),
                                    ctx.rotate(- this.flareRot),
                                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                                    ctx.restore()
                            }
                            this.displayMapIcons();
                            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].x,
                                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].y,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].width,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].height;
                            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, (this.fingerX - i / 2 - mapPosRealX + 4) * mapScale, (this.fingerY - s / 2 - mapPosRealY - 100 + 50 * Math.sin(this.fingerArc)) * mapScale, i * mapScale, s * mapScale);
                            break;
                        case "pause":
                            ctx.fillStyle = "rgba(0, 0, 0, 0.75)",
                                ctx.fillRect(0, 0, canvas.width, canvas.height)
                    }
                    a && this.addButs(ctx)
                },
                a.prototype.displayMapIcons = function () {
                    for (var a = 0; a < 50; a++) {
                        var t = saveDataHandler.getLevelData(a).levelState;
                        "balloons" == aLevelData[a].misc.id && (t += 5);
                        var e, i, s = oImageIds["mapBut" + t];
                        switch (saveDataHandler.getLevelData(a).levelState) {
                            case 0:
                                e = 10,
                                    i = 4;
                                break;
                            case 1:
                                e = 4,
                                    i = 4;
                                break;
                            case 2:
                            case 3:
                            case 4:
                                e = 0,
                                    i = -40
                        }
                        var o = this.oUiElementsImgData.oData.oAtlasData[s].x,
                            r = this.oUiElementsImgData.oData.oAtlasData[s].y,
                            h = this.oUiElementsImgData.oData.oAtlasData[s].width,
                            l = this.oUiElementsImgData.oData.oAtlasData[s].height;
                        ctx.drawImage(this.oUiElementsImgData.img, o, r, h, l, (aLevelData[a].mapX - h / 2 - mapPosRealX + e) * mapScale, (aLevelData[a].mapY - l / 2 - mapPosRealY + i) * mapScale, h * mapScale, l * mapScale)
                    }
                    var o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fadeBorderTop].x,
                        r = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fadeBorderTop].y,
                        h = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fadeBorderTop].width,
                        l = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fadeBorderTop].height;
                    ctx.drawImage(this.oUiElementsImgData.img, o, r, h, l, 0, 0, canvas.width, l);
                    var o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fadeBorderBottom].x,
                        r = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fadeBorderBottom].y,
                        h = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fadeBorderBottom].width,
                        l = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fadeBorderBottom].height;
                    ctx.drawImage(this.oUiElementsImgData.img, o, r, h, l, 0, canvas.height - l, canvas.width, l)
                },
                a.prototype.displayScore = function () {
                    for (var a = saveDataHandler.getTotalScore().toString(); a.length < 6;) a = "0" + a;
                    for (var t = 0; t < a.length; t++) {
                        var e;
                        e = parseFloat(a.charAt(t));
                        var i = e * this.oGreenNumbersImgData.oData.spriteWidth % this.oGreenNumbersImgData.img.width,
                            s = Math.floor(e / (this.oGreenNumbersImgData.img.width / this.oGreenNumbersImgData.oData.spriteWidth)) * this.oGreenNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oGreenNumbersImgData.img, i, s, this.oGreenNumbersImgData.oData.spriteWidth, this.oGreenNumbersImgData.oData.spriteHeight, canvas.width / 2 + t * (.7 * this.largeNumberSpace) - a.length / 2 * (.7 * this.largeNumberSpace), 8 - this.posY, .7 * this.oGreenNumbersImgData.oData.spriteWidth, .7 * this.oGreenNumbersImgData.oData.spriteHeight)
                    }
                },
                a.prototype.addButs = function (a) {
                    for (var t = 0; t < this.aButs.length; t++) {
                        var e = this.posY,
                            i = 0;
                        0 == this.incY || this.aButs[t].noMove || (i = 3 * Math.sin(this.incY + 45 * t)),
                            this.aButs[t].scale || (this.aButs[t].scale = 1);
                        var s = this.aButs[t].oImgData.oData.oAtlasData[this.aButs[t].id].x,
                            o = this.aButs[t].oImgData.oData.oAtlasData[this.aButs[t].id].y,
                            r = this.aButs[t].oImgData.oData.oAtlasData[this.aButs[t].id].width,
                            h = this.aButs[t].oImgData.oData.oAtlasData[this.aButs[t].id].height,
                            l = canvas.width * this.aButs[t].align[0],
                            m = canvas.height * this.aButs[t].align[1];
                        a.drawImage(this.aButs[t].oImgData.img, s, o, r, h, l + this.aButs[t].aPos[0] - r / 2 * this.aButs[t].scale + e - i / 2, m + this.aButs[t].aPos[1] - h / 2 * this.aButs[t].scale + i / 2, r * this.aButs[t].scale + i, h * this.aButs[t].scale - i)
                    }
                },
                a
        }();
        a.Panel = t
    }(Elements || (Elements = {}));