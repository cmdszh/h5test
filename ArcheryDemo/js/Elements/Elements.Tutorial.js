var Elements; !
    function (a) {
        var t = function (a) {
            function t(t) {
                a.call(this, t, 15, 45, "tut0"),
                    this.tutBg = 0,
                    this.oUiElementsImgData = assetLib.getData("uiElements"),
                    this.setAnimType("once", "tut0"),
                    this.animEndedFunc = this.switchBg1
            }
            return __extends(t, a),
                t.prototype.switchBg1 = function () {
                    this.setAnimType("once", "tut1"),
                        this.tutBg = 1,
                        this.animEndedFunc = this.switchBg0
                },
                t.prototype.switchBg0 = function () {
                    this.setAnimType("once", "tut0"),
                        this.tutBg = 0,
                        this.animEndedFunc = this.switchBg1
                },
                t.prototype.update = function () {
                    a.prototype.updateAnimation.call(this, delta),
                        this.x = canvas.width / 2,
                        this.y = canvas.height / 2
                },
                t.prototype.render = function () {
                    ctx.fillStyle = "rgba(0, 0, 0, 0.75)",
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].x,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].y,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].width,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, this.x - i / 2, this.y - s / 2, i, s),
                        a.prototype.renderSimple.call(this, ctx)
                },
                t
        }(Utils.AnimSprite);
        a.Tutorial = t
    }(Elements || (Elements = {}));
