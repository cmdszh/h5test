var Elements; !
    function (a) {
        var t = function (a) {
            function t(t) {
                a.call(this, t, 25, 45, "fly"),
                    this.reset()
            }
            return __extends(t, a),
                t.prototype.reset = function () {
                    this.posX = Math.random() * (canvas.width + 500) - (canvas.width + 500) / 2,
                        this.speed = 10 * Math.random() + 30,
                        this.posY = 200 * Math.random() + 150,
                        this.scaleX = this.scaleY = .7 * Math.random() + .2
                },
                t.prototype.update = function () {
                    a.prototype.updateAnimation.call(this, delta),
                        this.posX += this.speed * delta * this.scaleX,
                        this.x > canvas.width + 250 && (this.posX = -(canvas.width + 500) / 2, this.speed = 10 * Math.random() + 30, this.posY = 200 * Math.random() + 150, this.scaleX = this.scaleY = .7 * Math.random() + .2),
                        this.x = canvas.width / 2 + this.posX * archeryView.zoomScale,
                        this.y = canvas.height / 2 - this.posY * archeryView.zoomScale
                },
                t.prototype.render = function () {
                    a.prototype.renderSimple.call(this, ctx)
                },
                t
        }(Utils.AnimSprite);
        a.Bird = t
    }(Elements || (Elements = {}));