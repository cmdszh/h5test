var Utils; !
    function (a) {
        var t = function () {
            function a(a) {
                this.updateFreq = 10,
                    this.updateInc = 0,
                    this.frameAverage = 0,
                    this.display = 1,
                    this.log = "",
                    this.render = function (a) {
                        this.frameAverage += this.delta / this.updateFreq,
                            ++this.updateInc >= this.updateFreq && (this.updateInc = 0, this.display = this.frameAverage, this.frameAverage = 0),
                            a.textAlign = "left",
                            ctx.font = "10px Helvetica",
                            a.fillStyle = "#333333",
                            a.beginPath(),
                            a.rect(0, this.canvasHeight - 15, 40, 15),
                            a.closePath(),
                            a.fill(),
                            a.fillStyle = "#ffffff",
                            a.fillText(Math.round(1e3 / (1e3 * this.display)) + " fps " + this.log, 5, this.canvasHeight - 5)
                    },
                    this.canvasHeight = a
            }
            return a.prototype.update = function (a) {
                this.delta = a
            },
                a
        }();
        a.FpsMeter = t
    }(Utils || (Utils = {}));