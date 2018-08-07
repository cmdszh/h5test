var Utils; !
    function (a) {
        var t = function () {
            function a(a) {
                this.dataGroupNum = 2,
                    this.saveDataId = a,
                    window.famobi = window.famobi ? window.famobi : {},
                    window.famobi.localStorage = window.famobi.localStorage ? window.famobi.localStorage : window.localStorage,
                    window.famobi.sessionStorage = window.famobi.sessionStorage ? window.famobi.sessionStorage : window.sessionStorage,
                    this.clearData(),
                    this.setInitialData()
            }
            return a.prototype.getLevelData = function (a) {
                return {
                    levelState: this.aLevelStore[2 * a + 1],
                    score: this.aLevelStore[2 * a + 1 + 1]
                }
            },
                a.prototype.setLevelData = function (a, t, e) {
                    this.aLevelStore[2 * a + 1] = t,
                        e > this.aLevelStore[2 * a + 1] && (this.aLevelStore[2 * a + 1 + 1] = e),
                        this.saveData()
                },
                a.prototype.getChallengeHighscore = function () {
                    return this.aLevelStore[0]
                },
                a.prototype.setChallengeHighscore = function (a) {
                    a > this.aLevelStore[0] && (this.aLevelStore[0] = a),
                        this.saveData()
                },
                a.prototype.getTotalScore = function () {
                    for (var a = 0,
                        t = 0; t < (this.aLevelStore.length - 1) / 2; t++) a += this.aLevelStore[2 * t + 1 + 1];
                    return a
                },
                a.prototype.getLastUnlockedLevel = function () {
                    for (var a = -1,
                        t = 0; t < (this.aLevelStore.length - 1) / 2; t++) if (1 == this.aLevelStore[2 * t + 1]) {
                            a = t;
                            break
                        }
                    return a
                },
                a.prototype.clearData = function () {
                    this.aLevelStore = new Array,
                        this.aLevelStore.push(0),
                        this.aLevelStore.push(1),
                        this.aLevelStore.push(0);
                    for (var a = 0; a < 49; a++) this.aLevelStore.push(0),
                        this.aLevelStore.push(0)
                },
                a.prototype.resetData = function () {
                    this.clearData(),
                        this.saveData()
                },
                a.prototype.setInitialData = function () {
                    if (null != window.famobi.localStorage.getItem(this.saveDataId) && "" != window.famobi.localStorage.getItem(this.saveDataId)) {
                        this.aLevelStore = window.famobi.localStorage.getItem(this.saveDataId).split(",");
                        for (var a in this.aLevelStore) this.aLevelStore[a] = parseInt(this.aLevelStore[a])
                    } else this.saveData()
                },
                a.prototype.saveData = function () {
                    for (var a = "",
                        t = 0; t < this.aLevelStore.length; t++) a += this.aLevelStore[t],
                            t < this.aLevelStore.length - 1 && (a += ",");
                    window.famobi.localStorage.setItem(this.saveDataId, a)
                },
                a
        }();
        a.SaveDataHandler = t
    }(Utils || (Utils = {}));