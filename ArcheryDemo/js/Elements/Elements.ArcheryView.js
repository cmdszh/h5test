var Elements; !
    function (a) {
        var t = function () {
            function a(a) {
                if (void 0 === a && (a = !1), this.aTargData = new Array({
                    y: 3,
                    scale: .77,
                    dist: 30
                },
                    {
                        y: 3,
                        scale: .58,
                        dist: 50
                    },
                    {
                        y: 3,
                        scale: .45,
                        dist: 70
                    },
                    {
                        y: 3,
                        scale: .34,
                        dist: 90
                    }), this.zoomScale = 1, this.initialTweenX = 0, this.scrollSegs = 100, this.tempInc = 0, this.isStartScreen = !1, this.aDistMarker = new Array(400, 420, 450, 485), this.smallScale = .5461341790996472, this.oGameElementsImgData = assetLib.getData("gameElements"), this.oTreesImgData = assetLib.getData("trees"), "levels" == gameMode) sceneType = aLevelData[levelNum].bg,
                        oTargetType = {
                            id: aLevelData[levelNum].id,
                            moveDist: aLevelData[levelNum].moveDist,
                            windMin: aLevelData[levelNum].windMin,
                            windMax: aLevelData[levelNum].windMax
                        },
                        this.targPosId = aLevelData[levelNum].targPosId,
                        levelNum < 30 ? (this.moveSpeed = 20, this.moveSpeedTarg = 20) : (this.moveSpeed = 25, this.moveSpeedTarg = 25);
                else {
                    sceneType = Math.floor(5 * Math.random());
                    for (var t = this.getChallengeWind(), e = 0; e < aBirds.length; e++) aBirds[e].reset();
                    if (0 == challengeLevelNum) oTargetType = "static",
                        this.challengeRot = 0,
                        oChallengeBalloon = {
                            rot: 0,
                            hyp: 0,
                            scale: Math.max(.5, 1 - challengeLevelNum / 30)
                        };
                    else {
                        oTargetType = aTargetTypes[Math.floor(Math.random() * aTargetTypes.length)],
                            oTargetType.windMin = t,
                            oTargetType.windMax = t,
                            this.challengeRot = (1 * Math.random() - .5) * Math.min(challengeLevelNum / 10, 1);
                        Math.random();
                        oChallengeBalloon = {
                            rot: Math.random() * (360 * radian),
                            hyp: 100 * Math.random(),
                            scale: Math.max(.75, 1 - challengeLevelNum / 100)
                        }
                    }
                    this.targPosId = this.getChallengePosId(),
                        moveIncX = 0,
                        moveIncY = 0,
                        moveState = 0,
                        this.moveSpeed = 20,
                        this.moveSpeedTarg = 20,
                        aArrowsFired = new Array
                }
                this.oGroundImgData = assetLib.getData("ground" + sceneType),
                    this.oHorizonImgData = assetLib.getData("horizon" + sceneType),
                    setTreeData(),
                    this.isStartScreen = a,
                    "challenge" == gameMode ? this.targStyle = 3 : this.isStartScreen ? this.targStyle = 0 : this.targStyle = aLevelData[levelNum].targType,
                    this.isScrollingGround = !0,
                    this.isStartScreen && (this.scrollSegs = 150, moveIncX = 0, moveIncY = 0, moveState = 0),
                    this.initialTweenX = -600,
                    firstRun || this.introTween()
            }
            return a.prototype.introTween = function () {
                this.startTween = TweenLite.to(this, 1, {
                    initialTweenX: 0,
                    ease: "Cubic.easeOut",
                    onComplete: function () { }
                })
            },
                a.prototype.getChallengePosId = function () {
                    switch (Math.min(Math.round(Math.random() * challengeLevelNum), 10)) {
                        case 0:
                        case 1:
                        case 2:
                            return 0;
                        case 3:
                        case 4:
                        case 5:
                            return 1;
                        case 6:
                        case 7:
                        case 8:
                            return 2;
                        case 9:
                        case 10:
                            return 3;
                        default:
                            return Math.random() > .2 ? 3 : Math.floor(4 * Math.random())
                    }
                    return Math.floor(Math.random() * challengeLevelNum / 5)
                },
                a.prototype.getChallengeWind = function () {
                    return 0 == challengeLevelNum ? 0 : .5 + Math.random() * Math.min(challengeLevelNum / 20, 2)
                },
                a.prototype.update = function () {
                    switch ("levels" == gameMode && 0 != aLevelData[levelNum].rot ? targRot += aLevelData[levelNum].rot * delta : "challenge" == gameMode && (targRot += this.challengeRot * delta), this.horizonY = .5 * canvas.height, this.groundToHit = this.oGameElementsImgData.oData.oAtlasData[oImageIds.standSmall].height, oTargetType.id) {
                        case "horiz":
                            this.moveSpeed -= 0 == moveState ? .05 * (this.moveSpeed - this.moveSpeedTarg) : .05 * (this.moveSpeed + this.moveSpeedTarg),
                                moveIncX += delta * this.moveSpeed,
                                moveIncX >= oTargetType.moveDist * moveDistSeg / 2 ? moveState = 1 : moveIncX <= oTargetType.moveDist * -moveDistSeg / 2 && (moveState = 0);
                            break;
                        case "vert":
                            this.moveSpeed -= 0 == moveState ? .05 * (this.moveSpeed - this.moveSpeedTarg) : .05 * (this.moveSpeed + this.moveSpeedTarg),
                                moveIncY += delta * this.moveSpeed,
                                moveIncY >= oTargetType.moveDist * moveDistSeg ? moveState = 1 : moveIncY <= 0 && (moveState = 0);
                            break;
                        case "diag0":
                            this.moveSpeed -= 0 == moveState ? .05 * (this.moveSpeed - this.moveSpeedTarg) : .05 * (this.moveSpeed + this.moveSpeedTarg),
                                moveIncY += delta * this.moveSpeed,
                                moveIncX += delta * this.moveSpeed,
                                moveIncY >= oTargetType.moveDist * moveDistSeg ? moveState = 1 : moveIncY <= 0 && (moveState = 0);
                            break;
                        case "diag1":
                            this.moveSpeed -= 0 == moveState ? .05 * (this.moveSpeed - this.moveSpeedTarg) : .05 * (this.moveSpeed + this.moveSpeedTarg),
                                moveIncY += delta * this.moveSpeed,
                                moveIncX -= delta * this.moveSpeed,
                                moveIncY >= oTargetType.moveDist * moveDistSeg ? moveState = 1 : moveIncY <= 0 && (moveState = 0);
                            break;
                        case "circle0":
                            circleAngle += delta * this.moveSpeed / 55,
                                moveIncX = Math.cos(circleAngle) * (200 * oTargetType.moveDist),
                                moveIncY = Math.sin(circleAngle) * (200 * oTargetType.moveDist) + 200 * oTargetType.moveDist;
                            break;
                        case "circle1":
                            circleAngle -= delta * this.moveSpeed / 55,
                                moveIncX = Math.cos(circleAngle) * (200 * oTargetType.moveDist),
                                moveIncY = Math.sin(circleAngle) * (200 * oTargetType.moveDist) + 200 * oTargetType.moveDist;
                            break;
                        case "triangle0":
                            0 == moveState ? moveIncX += delta * this.moveSpeed : 1 == moveState ? (moveIncY += delta * this.moveSpeed * .8, moveIncX -= delta * this.moveSpeed / 2) : (moveIncY -= delta * this.moveSpeed * .8, moveIncX -= delta * this.moveSpeed / 2),
                                moveIncX >= oTargetType.moveDist * moveDistSeg / 2 ? moveState = 1 : moveIncY >= oTargetType.moveDist * moveDistSeg * .8 ? moveState = 2 : moveIncX <= oTargetType.moveDist * -moveDistSeg / 2 && (moveState = 0);
                            break;
                        case "triangle1":
                            0 == moveState ? (moveIncX -= delta * this.moveSpeed / 2, moveIncY += delta * this.moveSpeed * .8) : 1 == moveState ? moveIncX += delta * this.moveSpeed : (moveIncY -= delta * this.moveSpeed * .8, moveIncX -= delta * this.moveSpeed / 2),
                                moveIncX <= oTargetType.moveDist * -moveDistSeg / 2 ? moveState = 1 : moveIncX >= oTargetType.moveDist * moveDistSeg / 2 ? moveState = 2 : moveIncY <= 0 && (moveState = 0);
                            break;
                        case "square":
                            0 == moveState ? moveIncX += delta * this.moveSpeed : 1 == moveState ? moveIncY += delta * this.moveSpeed : 2 == moveState ? moveIncX -= delta * this.moveSpeed : moveIncY -= delta * this.moveSpeed,
                                0 == moveState && moveIncX >= oTargetType.moveDist * moveDistSeg / 2 ? moveState = 1 : 1 == moveState && moveIncY >= oTargetType.moveDist * moveDistSeg * .8 ? moveState = 2 : 2 == moveState && moveIncX <= oTargetType.moveDist * -moveDistSeg / 2 ? moveState = 3 : 3 == moveState && moveIncY <= 0 && (moveState = 0)
                    }
                    this.isStartScreen && (this.initialTweenX = 600 * Math.sin(this.tempInc += delta / 2))
                },
                a.prototype.zoomIn = function () {
                    this.sceneTween = TweenLite.to(this, 1, {
                        zoomScale: 1.3,
                        ease: "Quad.easeInOut"
                    }),
                        this.startTween.kill(),
                        this.initialTweenX = 0,
                        this.isScrollingGround = !1
                },
                a.prototype.setThinLine = function () {
                    ctx.strokeStyle = "#8F8B7B",
                        ctx.lineWidth = 5 * this.aTargData[this.targPosId].scale * this.zoomScale
                },
                a.prototype.render = function () {
                    if (ctx.drawImage(this.oHorizonImgData.img,
                        0, 0, this.oHorizonImgData.img.width, this.oHorizonImgData.img.height,
                        canvas.width / 2 - this.oHorizonImgData.img.width / 2 * this.zoomScale, this.horizonY - this.oHorizonImgData.img.height * this.zoomScale,
                        this.oHorizonImgData.img.width * this.zoomScale, this.oHorizonImgData.img.height * this.zoomScale), this.isScrollingGround)
                        for (var a = 0; a < this.scrollSegs; a++)
                            ctx.drawImage(this.oGroundImgData.img,
                                0, this.oGroundImgData.img.height / this.scrollSegs * a,
                                this.oGroundImgData.img.width, this.oGroundImgData.img.height / this.scrollSegs + 1,

                                canvas.width / 2 - (this.oGroundImgData.img.width / 2 + this.initialTweenX * (a / this.scrollSegs)) * this.zoomScale,
                                this.horizonY + this.oGroundImgData.img.height / this.scrollSegs * a,
                                this.oGroundImgData.img.width * this.zoomScale,
                                this.oGroundImgData.img.height / this.scrollSegs * this.zoomScale + 1);

                    else ctx.drawImage(this.oGroundImgData.img, 0, 0, this.oGroundImgData.img.width, this.oGroundImgData.img.height, canvas.width / 2 - this.oGroundImgData.img.width / 2 * this.zoomScale, this.horizonY, this.oGroundImgData.img.width * this.zoomScale, this.oGroundImgData.img.height * this.zoomScale);
                    for (var a = 0; a < aBirds.length; a++) aBirds[a].update(),
                        aBirds[a].render(ctx),
                        aBirds[a].removeMe && (aBirds.splice(a, 1), a -= 1);

                    for (var a = 0; a < treeNum; a++) {
                        var t = this.oTreesImgData.oData.oAtlasData[oImageIds[aTreeData[a].idL]].x,
                            e = this.oTreesImgData.oData.oAtlasData[oImageIds[aTreeData[a].idL]].y,
                            i = this.oTreesImgData.oData.oAtlasData[oImageIds[aTreeData[a].idL]].width,
                            s = this.oTreesImgData.oData.oAtlasData[oImageIds[aTreeData[a].idL]].height,
                            o = a + 2,
                            r = (o * o * o / 900 + .25) * aTreeData[a].scaleL;
                        ctx.drawImage(this.oTreesImgData.img, t, e, i, s, canvas.width / 2 - i / 2 * r * this.zoomScale - 50 * a * r * this.zoomScale - this.initialTweenX * (r - .2) / 6.5 * this.zoomScale - 150 * this.zoomScale, this.horizonY - s * r * this.zoomScale + ((12 * a + 15) * r + 10) * this.zoomScale, i * r * this.zoomScale, s * r * this.zoomScale);
                        var t = this.oTreesImgData.oData.oAtlasData[oImageIds[aTreeData[a].idR]].x,
                            e = this.oTreesImgData.oData.oAtlasData[oImageIds[aTreeData[a].idR]].y,
                            i = this.oTreesImgData.oData.oAtlasData[oImageIds[aTreeData[a].idR]].width,
                            s = this.oTreesImgData.oData.oAtlasData[oImageIds[aTreeData[a].idR]].height,
                            o = a + 2,
                            r = (o * o * o / 900 + .25) * aTreeData[a].scaleR;
                        ctx.drawImage(this.oTreesImgData.img, t, e, i, s, canvas.width / 2 - i / 2 * r * this.zoomScale + 50 * a * r * this.zoomScale - this.initialTweenX * (r - .2) / 6.5 * this.zoomScale + 150 * this.zoomScale, this.horizonY - s * r * this.zoomScale + ((12 * a + 15) * r + 10) * this.zoomScale, i * r * this.zoomScale, s * r * this.zoomScale)
                    }
                    //*
                    var h = this.initialTweenX * (this.aTargData[this.targPosId].scale - .1) / 7,
                        t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["distMarker" + this.targPosId]].x,
                        e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["distMarker" + this.targPosId]].y,
                        i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["distMarker" + this.targPosId]].width,
                        s = this.oGameElementsImgData.oData.oAtlasData[oImageIds["distMarker" + this.targPosId]].height;
                    this.targetCentreX = canvas.width / 2,
                        this.targetCentreY = this.horizonY - this.aTargData[this.targPosId].y * this.zoomScale,
                        ctx.drawImage(this.oGameElementsImgData.img, t, e, i, s, canvas.width / 2 - (.6 * (i / 2 + this.aDistMarker[this.targPosId]) * this.aTargData[this.targPosId].scale + h) * this.zoomScale, this.targetCentreY + 77 * this.aTargData[this.targPosId].scale * this.zoomScale, i * this.aTargData[this.targPosId].scale * .6 * this.zoomScale, s * this.aTargData[this.targPosId].scale * .6 * this.zoomScale);
                    var t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["distMarker" + this.targPosId]].x,
                        e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["distMarker" + this.targPosId]].y,
                        i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["distMarker" + this.targPosId]].width,
                        s = this.oGameElementsImgData.oData.oAtlasData[oImageIds["distMarker" + this.targPosId]].height;
                    //*
                    switch (this.targetCentreX = canvas.width / 2, this.targetCentreY = this.horizonY - this.aTargData[this.targPosId].y * this.zoomScale, ctx.drawImage(this.oGameElementsImgData.img, t, e, i, s, canvas.width / 2 - (.6 * (i / 2 - this.aDistMarker[this.targPosId]) * this.aTargData[this.targPosId].scale + h) * this.zoomScale, this.targetCentreY + 77 * this.aTargData[this.targPosId].scale * this.zoomScale, i * this.aTargData[this.targPosId].scale * .6 * this.zoomScale, s * this.aTargData[this.targPosId].scale * .6 * this.zoomScale), ctx.strokeStyle = "#6D695C", ctx.lineWidth = 10 * this.aTargData[this.targPosId].scale * this.zoomScale, ctx.lineCap = "round", oTargetType.id) {
                        case "horiz":
                            ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.stroke();
                            break;
                        case "vert":
                            ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY - moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY - moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.stroke();
                            break;
                        case "diag0":
                            ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.stroke();
                            break;
                        case "diag1":
                            ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.stroke();
                            break;
                        case "circle0":
                        case "circle1":
                            ctx.beginPath(),
                                ctx.arc(this.targetCentreX - h * this.zoomScale, this.targetCentreY - 200 * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale, 200 * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale, 0, 2 * Math.PI, !1),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.arc(this.targetCentreX - h * this.zoomScale, this.targetCentreY - 200 * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale, 200 * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale, 0, 2 * Math.PI, !1),
                                ctx.stroke();
                            break;
                        case "triangle0":
                            ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.stroke();
                            break;
                        case "triangle1":
                            ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - h * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.stroke();
                            break;
                        case "square":
                            ctx.beginPath(),
                                ctx.moveTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.stroke(),
                                this.setThinLine(),
                                ctx.moveTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.lineTo(this.targetCentreX - (h + moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY - .8 * moveDistSeg * oTargetType.moveDist * this.aTargData[this.targPosId].scale * this.zoomScale),
                                ctx.lineTo(this.targetCentreX - (h - moveDistSeg * oTargetType.moveDist / 2 * this.aTargData[this.targPosId].scale) * this.zoomScale, this.targetCentreY),
                                ctx.stroke()
                    }
                    var t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.standSmall].x,
                        e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.standSmall].y,
                        i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.standSmall].width,
                        s = this.oGameElementsImgData.oData.oAtlasData[oImageIds.standSmall].height;
                    ctx.drawImage(this.oGameElementsImgData.img, t, e, i, s, canvas.width / 2 - (i / 2 * this.aTargData[this.targPosId].scale + h) * this.zoomScale, this.targetCentreY, i * this.aTargData[this.targPosId].scale * this.zoomScale, s * this.aTargData[this.targPosId].scale * this.zoomScale),
                        ctx.save(),
                        ctx.translate(this.targetCentreX - h - moveIncX * this.zoomScale * this.aTargData[this.targPosId].scale, this.targetCentreY - moveIncY * this.zoomScale * this.aTargData[this.targPosId].scale),
                        ctx.rotate(targRot),
                        ctx.scale(this.zoomScale * this.aTargData[this.targPosId].scale, this.zoomScale * this.aTargData[this.targPosId].scale);
                    var t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["targetSmall" + this.targStyle]].x,
                        e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["targetSmall" + this.targStyle]].y,
                        i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["targetSmall" + this.targStyle]].width,
                        s = this.oGameElementsImgData.oData.oAtlasData[oImageIds["targetSmall" + this.targStyle]].height;
                    if (ctx.drawImage(this.oGameElementsImgData.img, t, e, i, s, -i / 2, -s / 2, i, s), ctx.restore(), "balloons" == aLevelData[levelNum].misc.id && "levels" == gameMode) for (var a = 0; a < aLevelBalloonData.length; a++) {
                        var t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloonSmall" + aLevelBalloonData[a].colour]].x,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloonSmall" + aLevelBalloonData[a].colour]].y,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloonSmall" + aLevelBalloonData[a].colour]].width,
                            s = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloonSmall" + aLevelBalloonData[a].colour]].height;
                        ctx.drawImage(this.oGameElementsImgData.img, t, e, i, s, this.targetCentreX - ((i / 2 * aLevelBalloonData[a].scale + moveIncX) * this.aTargData[this.targPosId].scale - (- Math.cos(targRot + aLevelBalloonData[a].rot) * aLevelBalloonData[a].hyp + 3.5 * aLevelBalloonData[a].scale) * this.smallScale * this.aTargData[this.targPosId].scale + h) * this.zoomScale, this.targetCentreY - ((s / 2 * aLevelBalloonData[a].scale + moveIncY) * this.aTargData[this.targPosId].scale - (- Math.sin(targRot + aLevelBalloonData[a].rot) * aLevelBalloonData[a].hyp + 5 * aLevelBalloonData[a].scale) * this.smallScale * this.aTargData[this.targPosId].scale) * this.zoomScale, i * this.aTargData[this.targPosId].scale * this.zoomScale * aLevelBalloonData[a].scale, s * this.aTargData[this.targPosId].scale * this.zoomScale * aLevelBalloonData[a].scale)
                    } else if ("challenge" == gameMode) {
                        var t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloonSmall" + challengeLevelNum % 7]].x,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloonSmall" + challengeLevelNum % 7]].y,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloonSmall" + challengeLevelNum % 7]].width,
                            s = this.oGameElementsImgData.oData.oAtlasData[oImageIds["balloonSmall" + challengeLevelNum % 7]].height;
                        ctx.drawImage(this.oGameElementsImgData.img, t, e, i, s, this.targetCentreX - ((i / 2 * oChallengeBalloon.scale + moveIncX) * this.aTargData[this.targPosId].scale - (- Math.cos(targRot + oChallengeBalloon.rot) * oChallengeBalloon.hyp + 3.5 * oChallengeBalloon.scale) * this.smallScale * this.aTargData[this.targPosId].scale + h) * this.zoomScale, this.targetCentreY - ((s / 2 * oChallengeBalloon.scale + moveIncY) * this.aTargData[this.targPosId].scale - (- Math.sin(targRot + oChallengeBalloon.rot) * oChallengeBalloon.hyp + 5 * oChallengeBalloon.scale) * this.smallScale * this.aTargData[this.targPosId].scale) * this.zoomScale, i * this.aTargData[this.targPosId].scale * this.zoomScale * oChallengeBalloon.scale, s * this.aTargData[this.targPosId].scale * this.zoomScale * oChallengeBalloon.scale)
                    }
                    for (var a = 0; a < aArrowsFired.length; a++) if (aArrowsFired[a].hitTarget) {
                        var t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.flushArrowHit].x,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.flushArrowHit].y,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.flushArrowHit].width,
                            s = this.oGameElementsImgData.oData.oAtlasData[oImageIds.flushArrowHit].height;
                        ctx.drawImage(this.oGameElementsImgData.img, t, e, i, s, this.targetCentreX - ((- Math.cos(targRot + aArrowsFired[a].rot) * aArrowsFired[a].hyp * aimTargetRadius + i / 2 + moveIncX) * this.aTargData[this.targPosId].scale + h) * this.zoomScale, this.targetCentreY - (- Math.sin(targRot + aArrowsFired[a].rot) * aArrowsFired[a].hyp * aimTargetRadius + 2.5 + moveIncY) * this.aTargData[this.targPosId].scale * this.zoomScale, i * this.aTargData[this.targPosId].scale * this.zoomScale, s * this.aTargData[this.targPosId].scale * this.zoomScale)
                    }
                    if (this.isStartScreen) for (var a = 0; a < 5; a++) {
                        var t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["lensFlare" + a % 3]].x,
                            e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["lensFlare" + a % 3]].y,
                            i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["lensFlare" + a % 3]].width,
                            s = this.oGameElementsImgData.oData.oAtlasData[oImageIds["lensFlare" + a % 3]].height,
                            l = canvas.height / 5 + canvas.height / (a + a) / 1 - s / 2;
                        ctx.drawImage(this.oGameElementsImgData.img, t, e, i, s, canvas.width / 2 - canvas.width / (a + a) - i / 2 - this.initialTweenX * l / 1e4, l, i, s)
                    }
                },
                a
        }();
        a.ArcheryView = t
    }(Elements || (Elements = {}));