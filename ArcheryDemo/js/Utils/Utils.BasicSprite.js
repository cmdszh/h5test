var Utils; !
    function (a) {
        var t = function () {
            function a(a, t, e) {
                void 0 === e && (e = 0),
                    this.x = 0,
                    this.y = 0,
                    this.rotation = 0,
                    this.radius = 10,
                    this.removeMe = !1,
                    this.offsetX = 0,
                    this.offsetY = 0,
                    this.scaleX = 1,
                    this.scaleY = 1,
                    this.oImgData = a,
                    this.radius = t,
                    this.setFrame(e)
            }
            return a.prototype.setFrame = function (a) {
                this.frameNum = a
            },
                a.prototype.render = function (a) {
                    a.save(),
                        a.translate(this.x, this.y),
                        a.rotate(this.rotation),
                        a.scale(this.scaleX, this.scaleY);
                    var t = this.frameNum * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        e = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    a.drawImage(this.oImgData.img, t, e, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight),
                        a.restore()
                },
                a
        }();
        a.BasicSprite = t
    }(Utils || (Utils = {}));