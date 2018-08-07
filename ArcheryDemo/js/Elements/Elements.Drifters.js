var Elements; !
    function (a) {
        var t = function (a) {
            function t(t, e) {
                a.call(this, t, 15, 45, e),
                    this.setAnimType("loop", e),
                    this.frameInc = Math.floor(18 * Math.random()),
                    this.driftX = 1 * Math.random() - .5,
                    this.driftY = 1 * Math.random() - .5
            }
            return __extends(t, a),
                t.prototype.update = function () {
                    a.prototype.updateAnimation.call(this, delta),
                        this.scaleX = archeryView.zoomScale,
                        archeryView.isStartScreen ? (this.x += (this.driftX + 1) * Math.cos(25 * radian) * delta * 50 * this.scaleX, this.y += (this.driftY + 1) * Math.sin(25 * radian) * delta * 50 * this.scaleX) : (this.x += (this.driftX + hud.windPower) * Math.cos(hud.windDir) * delta * 50 * this.scaleX, this.y += (this.driftY + hud.windPower) * Math.sin(hud.windDir) * delta * 50 * this.scaleX),
                        this.x > canvas.width + 120 * this.scaleX ? this.x = -120 : this.x < -120 && (this.x = canvas.width + 120 * this.scaleX),
                        this.y > canvas.height + 100 * this.scaleX ? this.y = -100 : this.y < -100 && (this.y = canvas.height + 100 * this.scaleX)
                },
                t.prototype.render = function () {
                    a.prototype.renderSimple.call(this, ctx)
                },
                t
        }(Utils.AnimSprite);
        a.Drifters = t
    }(Elements || (Elements = {}));
