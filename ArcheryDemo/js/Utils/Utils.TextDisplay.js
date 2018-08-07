var Utils; !
    function (a) {
        var t = function () {
            function a() {
                this.oTextData = {},
                    this.inc = 0,
                    this.createTextObjects()
            }
            return a.prototype.createTextObjects = function () {
                for (var a in assetLib.textData.langText.text[curLang]) this.oTextData[a] = {},
                    this.oTextData[a].aLineData = this.getCharData(assetLib.textData.langText.text[curLang][a]["@text"], assetLib.textData.langText.text[curLang][a]["@fontId"]),
                    this.oTextData[a].aLineWidths = this.getLineWidths(this.oTextData[a].aLineData),
                    this.oTextData[a].blockWidth = this.getBlockWidth(this.oTextData[a].aLineData),
                    this.oTextData[a].blockHeight = this.getBlockHeight(this.oTextData[a].aLineData, assetLib.textData.langText.text[curLang][a]["@fontId"]),
                    this.oTextData[a].lineHeight = parseInt(assetLib.textData["fontData" + assetLib.textData.langText.text[curLang][a]["@fontId"]].text.common["@lineHeight"]),
                    this.oTextData[a].oFontImgData = assetLib.getData("font" + assetLib.textData.langText.text[curLang][a]["@fontId"])
            },
                a.prototype.getLineWidths = function (a) {
                    for (var t, e = new Array,
                        i = 0; i < a.length; i++) {
                        t = 0;
                        for (var s = 0; s < a[i].length; s++) t += parseInt(a[i][s]["@xadvance"]),
                            0 == s ? t -= parseInt(a[i][s]["@xoffset"]) : s == a[i].length - 1 && (t += parseInt(a[i][s]["@xoffset"]));
                        e.push(t)
                    }
                    return e
                },
                a.prototype.getBlockWidth = function (a) {
                    for (var t, e = 0,
                        i = 0; i < a.length; i++) {
                        t = 0;
                        for (var s = 0; s < a[i].length; s++) t += parseInt(a[i][s]["@xadvance"]),
                            0 == s ? t -= parseInt(a[i][s]["@xoffset"]) : s == a[i].length - 1 && (t += parseInt(a[i][s]["@xoffset"]));
                        t > e && (e = t)
                    }
                    return e
                },
                a.prototype.getBlockHeight = function (a, t) {
                    return a.length * parseInt(assetLib.textData["fontData" + t].text.common["@lineHeight"])
                },
                a.prototype.getCharData = function (a, t) {
                    for (var e = new Array,
                        i = 0; i < a.length; i++) {
                        e[i] = new Array;
                        for (var s = 0; s < a[i].length; s++) for (var o = 0; o < assetLib.textData["fontData" + t].text.chars.char.length; o++) a[i][s].charCodeAt() == assetLib.textData["fontData" + t].text.chars.char[o]["@id"] && e[i].push(assetLib.textData["fontData" + t].text.chars.char[o])
                    }
                    return e
                },
                a.prototype.renderText = function (a) {
                    var t, e = this.oTextData[a.text].aLineData,
                        i = this.oTextData[a.text].oFontImgData,
                        s = 0,
                        o = 0,
                        r = 0,
                        h = 1,
                        l = 0;
                    a.lineOffsetY && (r = a.lineOffsetY),
                        a.scale && (h = a.scale);
                    var m = 1 * h;
                    a.maxWidth && this.oTextData[a.text].blockWidth * h > a.maxWidth && (m = a.maxWidth / this.oTextData[a.text].blockWidth),
                        a.anim && (this.inc += 7 * delta);
                    for (var n = 0; n < e.length; n++) {
                        t = 0,
                            "centre" == a.alignX && (s = this.oTextData[a.text].aLineWidths[n] / 2),
                            "centre" == a.alignY && (o = this.oTextData[a.text].blockHeight / 2 + r * (e.length - 1) / 2);
                        for (var g = 0; g < e[n].length; g++) {
                            var c = e[n][g]["@x"],
                                d = e[n][g]["@y"],
                                u = e[n][g]["@width"],
                                D = e[n][g]["@height"];
                            a.anim && (l = Math.sin(this.inc + g / 2) * (D / 15 * m)),
                                ctx.drawImage(i.img, c, d, u, D, a.x + (t + parseInt(e[n][g]["@xoffset"]) - s) * m, a.y + (parseInt(e[n][g]["@yoffset"]) + n * this.oTextData[a.text].lineHeight + n * r - o) * m + l, u * m, D * m),
                                t += parseInt(e[n][g]["@xadvance"])
                        }
                    }
                },
                a
        }();
        a.TextDisplay = t
    }(Utils || (Utils = {}));