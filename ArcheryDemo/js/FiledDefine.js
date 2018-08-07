var notIE = void 0 === document.documentMode,
    isChromium = window.chrome;
notIE && !isChromium || (window.addEventListener ? (window.addEventListener("focus",
    function (i) {
        setTimeout(function () { },
            300)
    },
    !1), window.addEventListener("blur",
        function (i) {
            visiblePause()
        },
        !1)) : (window.attachEvent("focus",
            function (i) {
                setTimeout(function () { },
                    300)
            }), window.attachEvent("blur",
                function (i) {
                    visiblePause()
                })));


var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (a) {
            window.setTimeout(a, 1e3 / 60, (new Date).getTime())
        }
}(),
    previousTime,
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    minSquareSize = 500,
    maxSquareSize = 700,
    canvasX,
    canvasY,
    canvasScale,
    div = document.getElementById("canvas-wrapper"),
    sound,
    music,
    audioType = 0,
    muted = !1,
    splashTimer = 0,
    assetLib,
    preAssetLib,
    isMobile = !1,
    gameState = "loading",
    aLangs = new Array("EN"),
    curLang = "",
    isBugBrowser = !1,
    isIE10 = !1,
    delta,
    radian = Math.PI / 180,
    ios9FirstTouch = !1,
    hasFocus = !0,
    firstRun = !0,
    testVar = "",
    saveDataHandler = new Utils.SaveDataHandler("awtfamobiv1"),
    famobiPauseActive = !1;
navigator.userAgent.match(/MSIE\s([\d]+)/) && (isIE10 = !0);
var deviceAgent = navigator.userAgent.toLowerCase();
(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) && (isMobile = !0, deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent) && (isBugBrowser = !0));
var userInput = new Utils.UserInput(canvas, isBugBrowser);




resizeCanvas(),
    window.onresize = function () {
        setTimeout(function () {
            resizeCanvas()
        },
            1)
    },
    window.onpageshow = function () {
        famobiPauseActive || (hasFocus || (userInput && userInput.checkKeyFocus(), muted || "pause" == gameState || "splash" == gameState || "loading" == gameState || (Howler.mute(!1), playMusic())), hasFocus = !0)
    },
    window.onpagehide = function () {
        famobiPauseActive || (hasFocus = !1, Howler.mute(!0), music.pause())
    },
    window.addEventListener("load",
        function () {
            setTimeout(function () {
                resizeCanvas()
            },
                0),
                window.addEventListener("orientationchange",
                    function () {
                        setTimeout(function () {
                            resizeCanvas()
                        },
                            500),
                            setTimeout(function () {
                                resizeCanvas()
                            },
                                2e3)
                    },
                    !1)
        });


var ua = navigator.userAgent,
    isSharpStock = /SHL24|SH-01F/i.test(ua) && isStock(),
    isXperiaAStock = /SO-04E/i.test(ua) && isStock(),
    isFujitsuStock = /F-01F/i.test(ua) && isStock();
isIE10 || isSharpStock || isXperiaAStock || isFujitsuStock || void 0 === window.AudioContext && void 0 === window.webkitAudioContext && -1 != navigator.userAgent.indexOf("Android") ? audioType = 0 :
    (audioType = 1, sound = new Howl({
        src: ["audio/sound.mp3"],
        sprite: {
            gameStart: [0, 800],
            cheer2: [1e3, 3500],
            winGame: [5e3, 6500],
            cheer4: [12e3, 5e3],
            cheer3: [17500, 5e3],
            cheer0: [22500, 3500],
            cheer1: [26500, 4500],
            bow: [31500, 1e3],
            crowdSad: [34e3, 3500],
            gameFail: [38e3, 1500],
            gameSuccess: [4e4, 1200],
            score0: [41500, 1500],
            score1: [43500, 2e3],
            score2: [46e3, 1500],
            score3: [48500, 2e3],
            score4: [51500, 1200],
            shoot0: [53500, 1e3],
            shoot1: [55e3, 1e3],
            shoot2: [56500, 1e3],
            shoot3: [58e3, 1e3],
            shoot4: [59500, 1e3],
            landGround: [61e3, 1300],
            landTarget0: [62500, 1700],
            landTarget1: [64500, 1500],
            landTarget2: [66500, 1500],
            pop0: [68500, 600],
            pop1: [69500, 600],
            click: [70500, 500],
            silence: [600, 200]
        }
    }), music = new Howl({
        src: ["audio/music.mp3"],
        volume: 0,
        loop: !0
    }));

var panel, background, totalScore = 0,
    levelScore = 0,
    levelNum = 0,
    aTutorials = new Array,
    panelFrame, oLogoData = {},
    oLogoBut, musicTween, oImageIds = {},
    archeryView, bow, scrollGround, aimTargetRadius = 78.25,
    hitTargetRadius = 142,
    aTargetRings = new Array,
    hitPosX, hitPosY, aArrowsFired, moveIncX = 0,
    /*
        moveIncY = 0,
        moveDistSeg = 400,
        moveState = 0,
        targRot = 0,
        circleAngle = 0,
        aTreeData = new Array,
        treeNum = 10,*/
    mapTouchFirst = !1,
    mapPosX, mapPosRealX, mapPosY, mapPosRealY, mapScale = 1,
    hud, aFireworks, aDrifters, quiver, aLevelBalloonData, gameMode, challengeLevelNum,
    aBalloonData = new Array([{
        rot: 2.36,
        hyp: 87.68,
        scale: 1
    },
    {
        rot: .79,
        hyp: 87.68,
        scale: 1
    },
    {
        rot: -.79,
        hyp: 87.68,
        scale: 1
    },
    {
        rot: -2.36,
        hyp: 87.68,
        scale: 1
    },
    {
        rot: 3.14,
        hyp: 86,
        scale: 1
    },
    {
        rot: 1.57,
        hyp: 86,
        scale: 1
    },
    {
        rot: -1.57,
        hyp: 86,
        scale: 1
    },
    {
        rot: 0,
        hyp: 86,
        scale: 1
    },
    {
        rot: 0,
        hyp: 0,
        scale: 1
    }], [{
        rot: 3.14,
        hyp: 80,
        scale: .8
    },
    {
        rot: 1.57,
        hyp: 80,
        scale: .8
    },
    {
        rot: -1.57,
        hyp: 80,
        scale: .8
    },
    {
        rot: 0,
        hyp: 80,
        scale: .8
    },
    {
        rot: 0,
        hyp: 0,
        scale: 1.18
    }], [{
        rot: 3.05,
        hyp: 97.42,
        scale: .6
    },
    {
        rot: -2.67,
        hyp: 66.19,
        scale: .7
    },
    {
        rot: .11,
        hyp: 84.48,
        scale: 1
    },
    {
        rot: -.79,
        hyp: 42.43,
        scale: .9
    },
    {
        rot: 2.65,
        hyp: 19.24,
        scale: .8
    }], [{
        rot: 1.77,
        hyp: 34.71,
        scale: 1.02
    },
    {
        rot: 2.4,
        hyp: 93.43,
        scale: .7
    },
    {
        rot: 1.08,
        hyp: 93.06,
        scale: .67
    },
    {
        rot: -.58,
        hyp: 88.2,
        scale: .74
    },
    {
        rot: -2.2,
        hyp: 83.01,
        scale: .67
    },
    {
        rot: -3.07,
        hyp: 86.21,
        scale: .81
    },
    {
        rot: -1.5,
        hyp: 89.2,
        scale: .88
    },
    {
        rot: .32,
        hyp: 86.33,
        scale: .88
    },
    {
        rot: -1.2,
        hyp: 30.08,
        scale: .63
    }], [{
        rot: -1.61,
        hyp: 99.08,
        scale: .6
    },
    {
        rot: -1.04,
        hyp: 69.46,
        scale: .7
    },
    {
        rot: 1.63,
        hyp: 83.15,
        scale: 1
    },
    {
        rot: .69,
        hyp: 45.45,
        scale: .9
    },
    {
        rot: -1.79,
        hyp: 18.44,
        scale: .8
    }], [{
        rot: 2.36,
        hyp: 96.17,
        scale: .75
    },
    {
        rot: 2.71,
        hyp: 50.57,
        scale: .75
    },
    {
        rot: -.79,
        hyp: 96.17,
        scale: .75
    },
    {
        rot: -.43,
        hyp: 50.57,
        scale: .75
    },
    {
        rot: .79,
        hyp: 96.17,
        scale: .75
    },
    {
        rot: 1.14,
        hyp: 50.57,
        scale: .75
    },
    {
        rot: -2.36,
        hyp: 96.17,
        scale: .75
    },
    {
        rot: -2,
        hyp: 50.57,
        scale: .75
    },
    {
        rot: 0,
        hyp: 0,
        scale: .75
    }], [{
        rot: 0,
        hyp: 0,
        scale: .68
    },
    {
        rot: 2.35,
        hyp: 95.46,
        scale: .68
    },
    {
        rot: .79,
        hyp: 96.17,
        scale: .68
    },
    {
        rot: -.79,
        hyp: 96.17,
        scale: .68
    },
    {
        rot: -2.35,
        hyp: 95.46,
        scale: .68
    },
    {
        rot: 3.14,
        hyp: 90,
        scale: .68
    },
    {
        rot: 1.57,
        hyp: 90,
        scale: .68
    },
    {
        rot: -1.57,
        hyp: 91,
        scale: .68
    },
    {
        rot: 0,
        hyp: 91,
        scale: .68
    }], [{
        rot: -.8,
        hyp: 68.59,
        scale: .94
    },
    {
        rot: -2.32,
        hyp: 69.35,
        scale: .94
    },
    {
        rot: 2.6,
        hyp: 87.46,
        scale: .75
    },
    {
        rot: 1.98,
        hyp: 78.39,
        scale: .75
    },
    {
        rot: 1.27,
        hyp: 75.29,
        scale: .75
    },
    {
        rot: .59,
        hyp: 84.31,
        scale: .75
    }], [{
        rot: 3.14,
        hyp: 100,
        scale: .6
    },
    {
        rot: 3.14,
        hyp: 55,
        scale: .8
    },
    {
        rot: 0,
        hyp: 100,
        scale: .6
    },
    {
        rot: 0,
        hyp: 55,
        scale: .8
    },
    {
        rot: 1.57,
        hyp: 100,
        scale: .6
    },
    {
        rot: 1.57,
        hyp: 54,
        scale: .8
    },
    {
        rot: -1.57,
        hyp: 100,
        scale: .6
    },
    {
        rot: -1.57,
        hyp: 56,
        scale: .8
    },
    {
        rot: 0,
        hyp: 0,
        scale: 1
    }], [{
        rot: 2.46,
        hyp: 42.64,
        scale: .73
    },
    {
        rot: 1.1,
        hyp: 41.59,
        scale: .73
    },
    {
        rot: -.81,
        hyp: 33.24,
        scale: .73
    },
    {
        rot: -2.17,
        hyp: 46.04,
        scale: .73
    },
    {
        rot: 2.31,
        hyp: 97.67,
        scale: .73
    },
    {
        rot: .16,
        hyp: 73.98,
        scale: .73
    },
    {
        rot: -1.12,
        hyp: 91.24,
        scale: .73
    },
    {
        rot: -2.49,
        hyp: 95.6,
        scale: .73
    },
    {
        rot: 3.09,
        hyp: 94.13,
        scale: .73
    },
    {
        rot: .74,
        hyp: 103.32,
        scale: .73
    },
    {
        rot: -1.8,
        hyp: 95.57,
        scale: .73
    },
    {
        rot: -.51,
        hyp: 98.49,
        scale: .73
    },
    {
        rot: 1.62,
        hyp: 95.13,
        scale: .73
    }]
    ),
    aLevelData = new Array({
        id: "static",
        misc: {
            id: null,
            num: null
        },
        targType: 0,
        rot: 0,
        bg: 0,
        targPosId: 0,
        moveDist: 0,
        windMin: 0,
        windMax: 0,
        aScoreTargs: [6, 8, 10],
        quiver: 5,
        mapX: 133,
        mapY: 618
    },
        {
            id: "static",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 0,
            targPosId: 1,
            moveDist: 0,
            windMin: .2,
            windMax: .7,
            aScoreTargs: [9, 12, 15],
            quiver: 3,
            mapX: 271,
            mapY: 649
        },
        {
            id: "static",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 0,
            targPosId: 2,
            moveDist: 0,
            windMin: .4,
            windMax: .9,
            aScoreTargs: [12, 16, 20],
            quiver: 3,
            mapX: 422,
            mapY: 592
        },
        {
            id: "static",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 0,
            targPosId: 3,
            moveDist: 0,
            windMin: .5,
            windMax: 1,
            aScoreTargs: [15, 20, 25],
            quiver: 3,
            mapX: 592,
            mapY: 595
        },
        {
            id: "static",
            misc: {
                id: "balloons",
                num: 0
            },
            targType: 3,
            rot: .1,
            bg: 0,
            targPosId: 1,
            moveDist: 0,
            windMin: .5,
            windMax: 1,
            aScoreTargs: [2, 3, 4],
            quiver: 4,
            mapX: 749,
            mapY: 590
        },
        {
            id: "horiz",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 0,
            targPosId: 0,
            moveDist: .3,
            windMin: 0,
            windMax: 0,
            aScoreTargs: [20, 25, 30],
            quiver: 4,
            mapX: 862,
            mapY: 499
        },
        {
            id: "horiz",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 0,
            targPosId: 1,
            moveDist: .3,
            windMin: .5,
            windMax: 1,
            aScoreTargs: [20, 25, 30],
            quiver: 4,
            mapX: 720,
            mapY: 435
        },
        {
            id: "horiz",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 0,
            targPosId: 2,
            moveDist: .3,
            windMin: .75,
            windMax: 1.25,
            aScoreTargs: [20, 25, 30],
            quiver: 4,
            mapX: 564,
            mapY: 443
        },
        {
            id: "horiz",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 0,
            targPosId: 3,
            moveDist: .3,
            windMin: 1,
            windMax: 1.5,
            aScoreTargs: [20, 25, 30],
            quiver: 4,
            mapX: 400,
            mapY: 449
        },
        {
            id: "vert",
            misc: {
                id: "balloons",
                num: 1
            },
            targType: 3,
            rot: .1,
            bg: 0,
            targPosId: 0,
            moveDist: .2,
            windMin: 0,
            windMax: 0,
            aScoreTargs: [2, 3, 4],
            quiver: 4,
            mapX: 269,
            mapY: 412
        },
        {
            id: "vert",
            misc: {
                id: null,
                num: null
            },
            targType: 4,
            rot: .2,
            bg: 1,
            targPosId: 1,
            moveDist: .2,
            windMin: .5,
            windMax: 1,
            aScoreTargs: [25, 30, 35],
            quiver: 4,
            mapX: 177,
            mapY: 307
        },
        {
            id: "vert",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 1,
            targPosId: 2,
            moveDist: .2,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [25, 30, 35],
            quiver: 4,
            mapX: 139,
            mapY: 163
        },
        {
            id: "vert",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 1,
            targPosId: 3,
            moveDist: .2,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [27, 31, 35],
            quiver: 4,
            mapX: 277,
            mapY: 186
        },
        {
            id: "diag0",
            misc: {
                id: null,
                num: null
            },
            targType: 4,
            rot: -.2,
            bg: 1,
            targPosId: 1,
            moveDist: .2,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [27, 31, 35],
            quiver: 4,
            mapX: 357,
            mapY: 304
        },
        {
            id: "diag1",
            misc: {
                id: "balloons",
                num: 2
            },
            targType: 3,
            rot: -.15,
            bg: 1,
            targPosId: 2,
            moveDist: .2,
            windMin: 1,
            windMax: 1.5,
            aScoreTargs: [2, 3, 4],
            quiver: 4,
            mapX: 433,
            mapY: 171
        },
        {
            id: "diag0",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 1,
            targPosId: 3,
            moveDist: .2,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [30, 33, 36],
            quiver: 4,
            mapX: 518,
            mapY: 300
        },
        {
            id: "circle0",
            misc: {
                id: null,
                num: null
            },
            targType: 5,
            rot: .2,
            bg: 1,
            targPosId: 0,
            moveDist: .2,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [30, 33, 36],
            quiver: 4,
            mapX: 587,
            mapY: 160
        },
        {
            id: "circle1",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 1,
            targPosId: 1,
            moveDist: .3,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [30, 33, 36],
            quiver: 4,
            mapX: 666,
            mapY: 300
        },
        {
            id: "circle0",
            misc: {
                id: null,
                num: null
            },
            targType: 4,
            rot: -.2,
            bg: 1,
            targPosId: 2,
            moveDist: .4,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [30, 33, 36],
            quiver: 4,
            mapX: 761,
            mapY: 171
        },
        {
            id: "circle1",
            misc: {
                id: "balloons",
                num: 3
            },
            targType: 3,
            rot: .15,
            bg: 1,
            targPosId: 1,
            moveDist: .5,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [3, 4, 5],
            quiver: 5,
            mapX: 823,
            mapY: 296
        },
        {
            id: "static",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: -.2,
            bg: 2,
            targPosId: 0,
            moveDist: 0,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [30, 34, 37],
            quiver: 4,
            mapX: 949,
            mapY: 373
        },
        {
            id: "static",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: .3,
            bg: 2,
            targPosId: 1,
            moveDist: 0,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [30, 34, 37],
            quiver: 4,
            mapX: 974,
            mapY: 241
        },
        {
            id: "static",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: -.4,
            bg: 2,
            targPosId: 2,
            moveDist: 0,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [30, 34, 37],
            quiver: 4,
            mapX: 1089,
            mapY: 162
        },
        {
            id: "static",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: .5,
            bg: 2,
            targPosId: 3,
            moveDist: 0,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [30, 34, 37],
            quiver: 4,
            mapX: 1240,
            mapY: 147
        },
        {
            id: "triangle0",
            misc: {
                id: "balloons",
                num: 4
            },
            targType: 3,
            rot: -.2,
            bg: 2,
            targPosId: 1,
            moveDist: .4,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [3, 4, 5],
            quiver: 5,
            mapX: 1361,
            mapY: 232
        },
        {
            id: "horiz",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: .2,
            bg: 2,
            targPosId: 0,
            moveDist: .3,
            windMin: 1,
            windMax: 1.5,
            aScoreTargs: [31, 34, 37],
            quiver: 4,
            mapX: 1358,
            mapY: 373
        },
        {
            id: "vert",
            misc: {
                id: null,
                num: null
            },
            targType: 6,
            rot: -.2,
            bg: 2,
            targPosId: 1,
            moveDist: .2,
            windMin: 1,
            windMax: 1.5,
            aScoreTargs: [31, 34, 37],
            quiver: 4,
            mapX: 1335,
            mapY: 500
        },
        {
            id: "horiz",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: .3,
            bg: 2,
            targPosId: 2,
            moveDist: .3,
            windMin: 1,
            windMax: 1.5,
            aScoreTargs: [31, 34, 37],
            quiver: 4,
            mapX: 1191,
            mapY: 441
        },
        {
            id: "vert",
            misc: {
                id: null,
                num: null
            },
            targType: 6,
            rot: -.3,
            bg: 2,
            targPosId: 3,
            moveDist: .2,
            windMin: 1,
            windMax: 1.5,
            aScoreTargs: [31, 34, 37],
            quiver: 4,
            mapX: 1062,
            mapY: 474
        },
        {
            id: "horiz",
            misc: {
                id: "balloons",
                num: 5
            },
            targType: 3,
            rot: .3,
            bg: 2,
            targPosId: 2,
            moveDist: .3,
            windMin: 1,
            windMax: 1.5,
            aScoreTargs: [3, 4, 5],
            quiver: 5,
            mapX: 1e3,
            mapY: 592
        },
        {
            id: "triangle0",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: 0,
            bg: 3,
            targPosId: 1,
            moveDist: .4,
            windMin: 1.5,
            windMax: 2,
            aScoreTargs: [31, 34, 37],
            quiver: 4,
            mapX: 924,
            mapY: 702
        },
        {
            id: "triangle1",
            misc: {
                id: null,
                num: null
            },
            targType: 4,
            rot: .3,
            bg: 3,
            targPosId: 2,
            moveDist: .4,
            windMin: 1.5,
            windMax: 2,
            aScoreTargs: [31, 34, 37],
            quiver: 4,
            mapX: 757,
            mapY: 746
        },
        {
            id: "triangle0",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: -.25,
            bg: 3,
            targPosId: 3,
            moveDist: .4,
            windMin: 1.5,
            windMax: 2,
            aScoreTargs: [31, 34, 37],
            quiver: 4,
            mapX: 865,
            mapY: 842
        },
        {
            id: "triangle1",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: .25,
            bg: 3,
            targPosId: 2,
            moveDist: .3,
            windMin: 1.5,
            windMax: 2,
            aScoreTargs: [31, 34, 37],
            quiver: 4,
            mapX: 1033,
            mapY: 831
        },
        {
            id: "triangle0",
            misc: {
                id: "balloons",
                num: 6
            },
            targType: 3,
            rot: .25,
            bg: 3,
            targPosId: 0,
            moveDist: .3,
            windMin: 1.5,
            windMax: 2,
            aScoreTargs: [3, 4, 5],
            quiver: 5,
            mapX: 1119,
            mapY: 697
        },
        {
            id: "square",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: .3,
            bg: 3,
            targPosId: 0,
            moveDist: .3,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [33, 35, 37],
            quiver: 4,
            mapX: 1275,
            mapY: 679
        },
        {
            id: "square",
            misc: {
                id: null,
                num: null
            },
            targType: 2,
            rot: -.15,
            bg: 3,
            targPosId: 1,
            moveDist: .3,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [33, 35, 37],
            quiver: 4,
            mapX: 1351,
            mapY: 779
        },
        {
            id: "square",
            misc: {
                id: null,
                num: null
            },
            targType: 6,
            rot: .15,
            bg: 3,
            targPosId: 2,
            moveDist: .3,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [33, 35, 37],
            quiver: 4,
            mapX: 1361,
            mapY: 914
        },
        {
            id: "square",
            misc: {
                id: null,
                num: null
            },
            targType: 2,
            rot: -.15,
            bg: 3,
            targPosId: 3,
            moveDist: .3,
            windMin: .5,
            windMax: 1,
            aScoreTargs: [33, 35, 37],
            quiver: 4,
            mapX: 1230,
            mapY: 982
        },
        {
            id: "square",
            misc: {
                id: "balloons",
                num: 7
            },
            targType: 3,
            rot: .25,
            bg: 3,
            targPosId: 2,
            moveDist: .3,
            windMin: 1.5,
            windMax: 2.5,
            aScoreTargs: [3, 4, 5],
            quiver: 5,
            mapX: 1062,
            mapY: 998
        },
        {
            id: "circle1",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: .4,
            bg: 4,
            targPosId: 3,
            moveDist: .3,
            windMin: 1.7,
            windMax: 2.5,
            aScoreTargs: [33, 35, 37],
            quiver: 4,
            mapX: 900,
            mapY: 998
        },
        {
            id: "vert",
            misc: {
                id: null,
                num: null
            },
            targType: 6,
            rot: .2,
            bg: 4,
            targPosId: 2,
            moveDist: .2,
            windMin: 1.7,
            windMax: 2.5,
            aScoreTargs: [33, 35, 37],
            quiver: 4,
            mapX: 737,
            mapY: 990
        },
        {
            id: "triangle0",
            misc: {
                id: null,
                num: null
            },
            targType: 1,
            rot: .4,
            bg: 4,
            targPosId: 3,
            moveDist: .3,
            windMin: 1.7,
            windMax: 2.5,
            aScoreTargs: [33, 35, 37],
            quiver: 4,
            mapX: 603,
            mapY: 937
        },
        {
            id: "diag1",
            misc: {
                id: null,
                num: null
            },
            targType: 0,
            rot: .4,
            bg: 4,
            targPosId: 3,
            moveDist: .2,
            windMin: 1.7,
            windMax: 2.5,
            aScoreTargs: [33, 35, 37],
            quiver: 4,
            mapX: 479,
            mapY: 973
        },
        {
            id: "horiz",
            misc: {
                id: "balloons",
                num: 8
            },
            targType: 3,
            rot: .3,
            bg: 4,
            targPosId: 2,
            moveDist: .3,
            windMin: 1.7,
            windMax: 2.5,
            aScoreTargs: [6, 7, 8],
            quiver: 8,
            mapX: 334,
            mapY: 987
        },
        {
            id: "circle0",
            misc: {
                id: null,
                num: null
            },
            targType: 4,
            rot: .5,
            bg: 4,
            targPosId: 2,
            moveDist: .3,
            windMin: 2,
            windMax: 3,
            aScoreTargs: [34, 36, 38],
            quiver: 4,
            mapX: 189,
            mapY: 988
        },
        {
            id: "diag0",
            misc: {
                id: null,
                num: null
            },
            targType: 2,
            rot: .3,
            bg: 4,
            targPosId: 3,
            moveDist: .2,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [34, 36, 38],
            quiver: 4,
            mapX: 64,
            mapY: 930
        },
        {
            id: "triangle1",
            misc: {
                id: null,
                num: null
            },
            targType: 6,
            rot: .3,
            bg: 4,
            targPosId: 2,
            moveDist: .4,
            windMin: 2,
            windMax: 3,
            aScoreTargs: [34, 36, 38],
            quiver: 4,
            mapX: 103,
            mapY: 812
        },
        {
            id: "square",
            misc: {
                id: null,
                num: null
            },
            targType: 2,
            rot: .3,
            bg: 4,
            targPosId: 3,
            moveDist: .3,
            windMin: 1,
            windMax: 2,
            aScoreTargs: [34, 36, 38],
            quiver: 4,
            mapX: 234,
            mapY: 805
        },
        {
            id: "circle1",
            misc: {
                id: "balloons",
                num: 9
            },
            targType: 3,
            rot: .2,
            bg: 4,
            targPosId: 2,
            moveDist: .3,
            windMin: 1.8,
            windMax: 2.5,
            aScoreTargs: [7, 8, 9],
            quiver: 9,
            mapX: 374,
            mapY: 857
        },
        {
            id: "static",
            misc: {
                id: null,
                num: null
            },
            targType: 3,
            bg: 1,
            targPosId: 0,
            moveDist: 0,
            windMin: .5,
            windMax: 1,
            aScoreTargs: [6, 8, 10],
            quiver: 5,
            mapX: 133,
            mapY: 618
        }),
    aTargetTypes = new Array({
        id: "horiz",
        moveDist: .3
    },
        {
            id: "vert",
            moveDist: .2
        },
        {
            id: "diag0",
            moveDist: .2
        },
        {
            id: "diag1",
            moveDist: .2
        },
        {
            id: "circle0",
            moveDist: .3
        },
        {
            id: "circle1",
            moveDist: .3
        },
        {
            id: "triangle0",
            moveDist: .3
        },
        {
            id: "triangle1",
            moveDist: .3
        },
        {
            id: "square",
            moveDist: .3
        }),
    oTargetType,
    sceneType,
    oChallengeBalloon,
    aBirds;