let drift = .0
let driftOffsetMax = 400;
let driftflag = 5;
let percent = 150.0;

let img;

let initalTweenX;
let tmpInc = 0;

let zoomScale = 1;

window.onload = function () {
  testKuoHaoEffect()
}



//////test括號
function testKuoHaoEffect() {
  var w = window
  t = w._gsQueue || (w._gsQueue = [])
  t.push(function(){})
  console.log(t)
}

///test use math.sin to set ground scroll
function testMathSin() {
  previousTime = (new Date).getTime();
  var canvas = document.getElementById("canvas")
  ctx = canvas.getContext('2d')
  imgbg = new Image()
  imgbg.src = "images/horizon1.jpg"
  imgbg.onload = function () {
    ctx.drawImage(imgbg,
      canvas.width / 2 - imgbg.width / 2, 0,
      imgbg.width, imgbg.height)
  }

  img = new Image()
  img.src = "images/ground1.jpg"
  img.onload = function () {
    renderGroundTestMathSin()
  }
}

function renderGroundTestMathSin() {
  initalTweenX = 600 * Math.sin(tmpInc += getDelta() / 2)
  var scrathHeight = img.height / percent
  for (var i = 0; i < percent; i++) {
    ctx.drawImage(img,
      0, i * scrathHeight, img.width, scrathHeight + 1,
      canvas.width / 2 - (img.width / 2 + initalTweenX * (i / percent)) * zoomScale, .5 * canvas.height + (i * scrathHeight) * zoomScale, img.width * zoomScale, scrathHeight * zoomScale + 1)
  }
  requestAnimationFrame(renderGroundTestMathSin);
}

///test scroll image
function testScroolImage() {
  var canvas = document.getElementById("canvas")
  ctx = canvas.getContext('2d')

  imgbg = new Image()
  imgbg.src = "images/horizon1.jpg"
  imgbg.onload = function () {
    ctx.drawImage(imgbg,
      canvas.width / 2 - imgbg.width / 2, 0,
      imgbg.width, imgbg.height)
  }

  img = new Image()
  img.src = "images/ground1.jpg"
  img.onload = function () {
    renderGround()
  }
}

function renderGround() {
  if (drift > driftOffsetMax) driftflag = -driftflag;
  if (drift < -driftOffsetMax) driftflag = -driftflag;
  drift = drift + driftflag;
  var scrathHeight = img.height / percent
  var driftPerUnit = drift / percent;
  for (var i = 0; i < percent; i++) {
    ctx.drawImage(img,
      0, i * scrathHeight, img.width, scrathHeight,
      driftPerUnit * i + canvas.width / 2 - img.width / 2, 520 + i * scrathHeight, img.width, scrathHeight)
  }
  requestAnimationFrame(renderGround);
}

///draft from left -100  to right 100   

///test ctx draw Image
function testDrawImage() {
  var canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")

  ctx.fillStyle = '#EEEEFF';//填充样式
  ctx.fillRect(0, 0, 1920, 1080);//填充矩形

  img = new Image()
  img.src = "images/ground1.jpg"
  //img.src ="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1307608538.jpg"
  img.onload = function () {
    for (var i = 1; i < img.height / 10; i++) {
      ctx.drawImage(img,
        0, 10 * i,//开始剪切的 x,y 坐标位置。
        img.width, 10, //裁剪的寬高
        0, 10 * i,//画布上的坐标
        img.width, 10)//画布上显示的宽度，高度
    }
  }

}



//testWinodwSetTimeOout(1);
//////////////////////test Elements
function testElements() {
}


////////test JS OO////////////////////////
function NewElements() {
  this.x = 0;
  this.render = function () {
    console.log("do render")
  }
}


function testOO() {
  newElement = new NewElements();
  newElement.x++;
  console.log(newElement.x);
  newElement.render()
}

//////扩展Elements
var Elements;
!function (a) {
  var t = function () {
    function a() {
      this.x = 0,
        this.y = 0,
        this.z = 10
    }
    return a.prototype.render = function () {
      console.log("r 000000000000000")
    },
      a
  }();
  a.Background = t
}(Elements || (Elements = {}));
var bg = new Elements.Background()
bg.render()
console.log(bg.z)
////////////////////////////////////////
function testWinodwSetTimeOout(time) {
  if ("undefined" == typeof (startTime)) startTime = (new Date).getTime()
  if ((time - startTime) / 1e3 > 10) return;
  testWindowSetTimeOutLoop(testWinodwSetTimeOout)
  console.log("now:" + Math.floor(time))
}

function testWindowSetTimeOutLoop(func) {
  window.setTimeout(func, 1000, (new Date).getTime());
}
////////////////////////////////////////

function testInForUseSplice() {
  aFireworks = new Array
  aFireworks.push(1)
  aFireworks.push(2)
  aFireworks.push(3)
  aFireworks.push(4)
  aFireworks.push(5)

  for (a = 0; a < aFireworks.length; a++) {
    alert(aFireworks[a])
    aFireworks.splice(2, 1)
  }
}

function testKuoHao() {
  alert("start");
  var sss = function () {
    alert("11111111111111111111");
  }();
}

function testArraySplice() {
  aFireworks = new Array()
  aFireworks[0] = 10000
  aFireworks.push(1)
  aFireworks.push(2)
  aFireworks.push(3)
  aFireworks.push(4)
  aFireworks.push(5)

  aFireworks.splice(1, 1, 30, 31)
  for (a = 0; a < aFireworks.length; a++) {
    alert(aFireworks[a])
  }
}

function testArray() {
  aFireworks = new Array()
  aFireworks.push(1)
  aFireworks.push(2)
  aFireworks.push(3)
  aFireworks.push(4)
  aFireworks.push(5)

  for (a = 0; a < aFireworks.length; a++) {
    alert(aFireworks[a])
  }
}

function testForLoop() {
  for (var a = 0; a < 10; a++)
    alert(a)
}

function testMathRandom() {
  alert(Math.random())
}

function testDot1() {
  alert(.1)
}

function testGetDelta() {
  previousTime = (new Date).getTime();
  alert(previousTime / 1e3);
  newpreviousTime = getDelta();
  alert(newpreviousTime / 1e3);
}

function getDelta() {
  var a = (new Date).getTime();
  t = (a - previousTime) / 1e3;
  return previousTime = a,
    t > 1 && (t = 0),
    t
}

function test1e3() {
  alert(1e3);
}

function testAlert() {
  a = -1;
  -1 == a && (a = 49);
  alert(a);
  { 1 != 1 || alert(!1) }
}