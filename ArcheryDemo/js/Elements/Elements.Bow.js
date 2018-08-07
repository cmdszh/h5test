var Elements; !
    function (a) {
        var t = function () {
            function a() {
                this.tartgDistX = 66,
                    this.dragX = 0,
                    this.dragY = 0,
                    this.targAimX = 0,
                    this.targAimY = 0,
                    this.startAimX = 0,
                    this.startAimY = 0,
                    this.isHeld = !1,
                    this.maxMoveSpeed = 10,
                    this.easeTargX = 0,
                    this.easeTargY = 0,
                    this.arrowFireX = 0,
                    this.arrowFireY = 0,
                    this.arrowScale = 1,
                    this.aScopeOffset = new Array({
                        x: 60.5
                    }),
                    this.bowId = 0,
                    this.isAiming = !0,
                    this.oGameElementsImgData = assetLib.getData("gameElements"),
                    this.scale = .5,
                    this.startX = 25 * Math.random(),
                    this.startY = 25 * Math.random(),
                    this.initialTweenX = 200,
                    this.initialTweenY = 200,
                    firstRun || this.introTween()
            }
            return a.prototype.introTween = function () {
                this.easeTweenX = TweenLite.to(this, 1, {
                    initialTweenX: 0,
                    ease: "Quad.easeOut"
                }),
                    this.easeTweenY = TweenLite.to(this, 1, {
                        initialTweenY: 0,
                        ease: "Back.easeOut"
                    })
            },
                a.prototype.zoomIn = function () {
                    this.bowTween = TweenLite.to(this, .5, {
                        scale: 1,
                        ease: "Quad.easeInOut"
                    }),
                        this.easeTweenX && this.easeTweenX.kill(),
                        this.easeTweenY && this.easeTweenY.kill(),
                        this.initialTweenX = 0,
                        this.initialTweenY = 0
                },
                a.prototype.fireArrow = function () {
                    TweenLite.to(this, .1, {
                        arrowFireX: -100,
                        arrowFireY: -100,
                        arrowScale: .2,
                        ease: "Quad.easeIn",
                        onComplete: function () {
                            initArrowFire()
                        }
                    }),
                        this.isAiming = !1
                },
                a.prototype.update = function () {
                    this.isAiming && (this.easeTargX -= (this.easeTargX - (this.targAimX - this.startAimX)) * (5 * delta), this.easeTargY -= (this.easeTargY - (this.targAimY - this.startAimY)) * (5 * delta), this.dragX = Math.max(Math.min(this.dragX + 3 * this.easeTargX * delta, .4 * canvas.width), .4 * -canvas.width), this.dragY = Math.max(Math.min(this.dragY + 3 * this.easeTargY * delta, .4 * canvas.height), .4 * -canvas.height), this.x = canvas.width / 2 - this.tartgDistX * this.scale + this.startX + this.dragX + this.initialTweenX, this.y = canvas.height / 2 + this.startY + this.dragY + this.initialTweenY)
                },
                a.prototype.render = function () {
                    var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scope0].x,
                        t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scope0].y,
                        e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scope0].width,
                        i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.scope0].height;
                    ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, this.x, this.y - i / 2 * this.scale, e * this.scale, i * this.scale);
                    var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowTop].x,
                        t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowTop].y,
                        e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowTop].width,
                        i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowTop].height;
                    ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, this.x + 174 * this.scale, this.y - (i + 338) * this.scale, e * this.scale, i * this.scale);
                    var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowMiddle].x,
                        t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowMiddle].y,
                        e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowMiddle].width,
                        i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowMiddle].height;
                    ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, this.x + 170 * this.scale, this.y - 340 * this.scale, e * this.scale, i * this.scale);
                    var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowBottom].x,
                        t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowBottom].y,
                        e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowBottom].width,
                        i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowBottom].height;
                    ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, this.x + 171 * this.scale, this.y + (this.oGameElementsImgData.oData.oAtlasData[oImageIds.bowMiddle].height - 342) * this.scale, e * this.scale, i * this.scale);
                    var a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInBow].x,
                        t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInBow].y,
                        e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInBow].width,
                        i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.arrowInBow].height;
                    ctx.drawImage(this.oGameElementsImgData.img, a, t, e, i, this.x + (220 - this.initialTweenX / 2 + this.arrowFireX) * this.scale, this.y + (100 - this.initialTweenX / 2 + this.arrowFireY) * this.scale, e * this.scale * this.arrowScale, i * this.scale * this.arrowScale),
                        ctx.strokeStyle = "rgba(50,50,50, 1)",
                        ctx.lineWidth = 2,
                        ctx.beginPath(),
                        ctx.moveTo(this.x + 250 * this.scale, this.y - 1130 * this.scale),
                        ctx.lineTo(this.x + (610 - 1 * (this.initialTweenX / 2 + this.arrowFireX)) * this.scale, this.y + (475 - 1 * (this.initialTweenX / 2 + this.arrowFireY)) * this.scale),
                        ctx.lineTo(this.x + 250 * this.scale, this.y + 1423 * this.scale),
                        ctx.stroke()
                },
                a
        }();
        a.Bow = t
    }(Elements || (Elements = {}));