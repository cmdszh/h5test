var Utils; !
    function (a) {
        var t = function () {
            function a(a, t, e, i) {
                this.x = 0,
                    this.y = 0,
                    this.rotation = 0,
                    this.radius = 10,
                    this.removeMe = !1,
                    this.frameInc = 0,
                    this.animType = "loop",
                    this.offsetX = 0,
                    this.offsetY = 0,
                    this.scaleX = 1,
                    this.scaleY = 1,
                    this.alpha = 1,
                    this.oImgData = a,
                    this.oAnims = this.oImgData.oData.oAnims,
                    this.fps = t,
                    this.radius = e,
                    this.animId = i,
                    this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2),
                    this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2)
            }
            return a.prototype.updateAnimation = function (a) {
                this.frameInc += this.fps * a
            },
                a.prototype.changeImgData = function (a, t) {
                    this.oImgData = a,
                        this.oAnims = this.oImgData.oData.oAnims,
                        this.animId = t,
                        this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2),
                        this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2),
                        this.resetAnim()
                },
                a.prototype.resetAnim = function () {
                    this.frameInc = 0
                },
                a.prototype.setFrame = function (a) {
                    this.fixedFrame = a
                },
                a.prototype.setAnimType = function (a, t, e) {
                    switch (void 0 === e && (e = !0), this.animId = t, this.animType = a, e && this.resetAnim(), a) {
                        case "loop":
                            break;
                        case "once":
                            this.maxIdx = this.oAnims[this.animId].length - 1
                    }
                },
                a.prototype.render = function (a) {
                    if (a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scaleX, this.scaleY), a.globalAlpha = this.alpha, null != this.animId) {
                        var t = this.oAnims[this.animId].length,
                            e = Math.floor(this.frameInc);
                        this.curFrame = this.oAnims[this.animId][e % t];
                        var i = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                            s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                        if ("once" == this.animType && e > this.maxIdx) {
                            this.fixedFrame = this.oAnims[this.animId][t - 1],
                                this.animId = null,
                                null != this.animEndedFunc && this.animEndedFunc();
                            var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                        }
                    } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    a.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight),
                        a.restore()
                },
                a.prototype.renderSimple = function (a) {
                    if (null != this.animId) {
                        var t = this.oAnims[this.animId].length,
                            e = Math.floor(this.frameInc);
                        this.curFrame = this.oAnims[this.animId][e % t];
                        var i = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                            s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                        if ("once" == this.animType && e > this.maxIdx) {
                            this.fixedFrame = this.oAnims[this.animId][t - 1],
                                this.animId = null,
                                null != this.animEndedFunc && this.animEndedFunc();
                            var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                        }
                    } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    a.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY)
                },
                a
        }();
        a.AnimSprite = t
    }(Utils || (Utils = {}));