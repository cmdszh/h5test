var __extends = this.__extends ||
    function (a, t) {
        function e() {
            this.constructor = a
        }
        e.prototype = t.prototype,
            a.prototype = new e
    },
    Elements; !
        function (a) {
            var t = function (a) {
                function t(t, e, i) {
                    a.call(this, t, 25, 45, e),
                        this.setAnimType("once", e),
                        this.shouldFall = i,
                        this.animEndedFunc = function () {
                            this.removeMe = !0
                        }
                }
                return __extends(t, a),
                    t.prototype.update = function () {
                        a.prototype.updateAnimation.call(this, delta),
                            this.shouldFall && (this.y += 100 * delta)
                    },
                    t.prototype.render = function () {
                        a.prototype.renderSimple.call(this, ctx)
                    },
                    t
            }(Utils.AnimSprite);
            a.Firework = t
        }(Elements || (Elements = {}));
