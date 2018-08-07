var Elements;
!function (a) {
    var t = function () {
        function a() {
            this.x = 0,
                this.y = 0,
                this.targY = 0,
                this.incY = 0,
                this.renderState = null,
                this.oImgData = assetLib.getData("background")
        }
        return a.prototype.render = function () {
            canvas.width > canvas.height ? ctx.drawImage(this.oImgData.img, 0, (1 - canvas.height / canvas.width) / 2 * this.oImgData.img.height, this.oImgData.img.width, canvas.height / canvas.width * this.oImgData.img.height, 0, 0, canvas.width, canvas.height) : ctx.drawImage(this.oImgData.img, (1 - canvas.width / canvas.height) / 2 * this.oImgData.img.width, 0, canvas.width / canvas.height * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height)
        },
            a
    }();
    a.Background = t
}(Elements || (Elements = {}));