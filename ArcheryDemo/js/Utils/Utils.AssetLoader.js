var Utils; !
    function (a) {
        var t = function () {
            //a curLang array
            //t table resource
            //e context
            //i canvas.width
            //s canvas.height

            function a(a, t, e, i, s, o) {
                void 0 === o && (o = !0),
                    this.oAssetData = {},
                    this.assetsLoaded = 0,
                    this.textData = {},
                    this.spinnerRot = 0,
                    this.totalAssets = t.length,
                    this.showBar = o;
                for (var r = 0; r < t.length; r++) - 1 != t[r].file.indexOf(".json") ? this.loadJSON(t[r]) : this.loadImage(t[r]);
                o && (this.oLoaderImgData = preAssetLib.getData("loader"), this.oLoadSpinnerImgData = preAssetLib.getData("loadSpinner"))
            }
            return a.prototype.render = function () {
                ctx.fillStyle = "rgba(0, 0, 0, 1)",
                    ctx.fillRect(0, 0, canvas.width, canvas.height),
                    ctx.fillStyle = "#FFFFFF",
                    ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 + 20, 300 / this.totalAssets * this.assetsLoaded, 30),
                    ctx.drawImage(this.oLoaderImgData.img, canvas.width / 2 - this.oLoaderImgData.img.width / 2, canvas.height / 2 - this.oLoaderImgData.img.height / 2),
                    this.spinnerRot += 3 * delta,
                    ctx.save(),
                    ctx.translate(canvas.width / 2 - 30, canvas.height / 2 - 16),
                    ctx.rotate(this.spinnerRot),
                    ctx.drawImage(this.oLoadSpinnerImgData.img, -this.oLoadSpinnerImgData.img.width / 2, -this.oLoadSpinnerImgData.img.height / 2),
                    ctx.restore(),
                    this.displayNumbers()
            },
                a.prototype.displayNumbers = function () {
                    ctx.textAlign = "left",
                        ctx.font = "bold 40px arial",
                        ctx.fillStyle = "#ffffff",
                        ctx.fillText(Math.round(this.assetsLoaded / this.totalAssets * 100) + "%", canvas.width / 2 + 0, canvas.height / 2 - 1)
                },
                a.prototype.loadExtraAssets = function (a, t) {
                    this.showBar = !1,
                        this.totalAssets = t.length,
                        this.assetsLoaded = 0,
                        this.loadedCallback = a;
                    for (var e = 0; e < t.length; e++) - 1 != t[e].file.indexOf(".json") ? this.loadJSON(t[e]) : this.loadImage(t[e])
                },
                a.prototype.loadJSON = function (a) {
                    var t = this,
                        e = new XMLHttpRequest;
                    e.open("GET", a.file, !0),
                        e.onreadystatechange = function () {
                            4 == e.readyState && 200 == e.status && (t.textData[a.id] = JSON.parse(e.responseText), ++t.assetsLoaded, t.checkLoadComplete())
                        },
                        e.send(null)
                },
                a.prototype.loadImage = function (a) {
                    var t = this,
                        e = new Image;
                    e.onload = function () {
                        t.oAssetData[a.id] = {},
                            t.oAssetData[a.id].img = e,
                            t.oAssetData[a.id].oData = {};
                        var i = t.getSpriteSize(a.file);
                        0 != i[0] ? (t.oAssetData[a.id].oData.spriteWidth = i[0], t.oAssetData[a.id].oData.spriteHeight = i[1]) : (t.oAssetData[a.id].oData.spriteWidth = t.oAssetData[a.id].img.width, t.oAssetData[a.id].oData.spriteHeight = t.oAssetData[a.id].img.height),
                            a.oAnims && (t.oAssetData[a.id].oData.oAnims = a.oAnims),
                            a.oAtlasData ? t.oAssetData[a.id].oData.oAtlasData = a.oAtlasData : t.oAssetData[a.id].oData.oAtlasData = {
                                none: {
                                    x: 0,
                                    y: 0,
                                    width: t.oAssetData[a.id].oData.spriteWidth,
                                    height: t.oAssetData[a.id].oData.spriteHeight
                                }
                            },
                            ++t.assetsLoaded,
                            t.checkLoadComplete()
                    },
                        e.src = a.file
                },
                a.prototype.getSpriteSize = function (a) {
                    for (var t = new Array,
                        e = "",
                        i = "",
                        s = 0,
                        o = a.lastIndexOf("."), r = !0; r;) o-- ,
                            0 == s && this.isNumber(a.charAt(o)) ? e = a.charAt(o) + e : 0 == s && e.length > 0 && "x" == a.charAt(o) ? (o-- , s = 1, i = a.charAt(o) + i) : 1 == s && this.isNumber(a.charAt(o)) ? i = a.charAt(o) + i : 1 == s && i.length > 0 && "_" == a.charAt(o) ? (r = !1, t = [parseInt(i), parseInt(e)]) : (r = !1, t = [0, 0]);
                    return t
                },
                a.prototype.isNumber = function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                a.prototype.checkLoadComplete = function () {
                    this.assetsLoaded == this.totalAssets && this.loadedCallback()
                },
                a.prototype.onReady = function (a) {
                    this.loadedCallback = a
                },
                a.prototype.getImg = function (a) {
                    return this.oAssetData[a].img
                },
                a.prototype.getData = function (a) {
                    return this.oAssetData[a]
                },
                a
        }();
        a.AssetLoader = t
    }(Utils || (Utils = {}));
