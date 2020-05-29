import { shape } from "prop-types";

// 需要用到的变量定义
let clickX = new Array();
let clickY = new Array();
let clickDrag = new Array();
let paint;
let point = {notFirst:false};

let canvasDiv =  null; // 初始化画布父盒子
let canvas = document.createElement('canvas'); // 创建画板
let context = canvas.getContext("2d"); // 创建2d画布
let canvasWidth = 0; // 初始化画布宽度
let canvasHeight = 0; // 初始化画布高度
let panColor = {
  r: '58',
  g: '53',
  b: '52',
  a: '100',
};
let lwidth = 2;
let radlen = 10;
let dsp = "arc";

// 可导出图片的标识
let _exportable = false;

//
let restore = [context.getImageData(0, 0, 600, 450)];
let repeat = [];

/* ------------ 需要用到的一些功能函数  ------------ */
// 记录新的历史记录
function recordHistory(text) {
  let div = document.createElement('div');
  div.innerHTML = text;
  div.setAttribute('class', 'historyRecording');
  document.getElementById('history').append(div);
}

// 回退历史记录
function rebackHistory(index) {
  let history = document.getElementById('history');
  let historyList = history.getElementsByTagName('*');
  let len = historyList.length;
  for (let i = len - 1; i >= index; i--) {
      history.remove(historyList[i]);
  }
}

function addClick(x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function draw(event,cavas,dshape){
  let left = event.clientX - cavas.offsetLeft;
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let top = event.clientY - cavas.offsetTop + scrollTop;
  context.fillStyle = panColor;
  _exportable = true;
  // while (clickX.length > 0 ) {
  //   point.bx = point.x;
  //   point.by = point.y;
  //   point.x = clickX.pop();
  //   point.y = clickY.pop();
  //   point.drag = clickDrag.pop();
  //   context.beginPath();
  //   if (point.drag && point.notFirst) {
  //     context.moveTo(point.bx, point.by);
  //   } else {
  //     point.notFirst = true;
  //     context.moveTo(point.x - 1, point.y);
  //   }
  //    context.lineTo(point.x, point.y);
  //    context.closePath();
  //    context.stroke();
  // }
  switch (dshape) {
    case "arc":
        drawByStr();
        break
    case "ric":
        drawByRic(left, top, radlen, 'stroke')
        break
    case "tri":
        drawByTriangle(left, top, radlen, 'stroke')
        break
    case "hexagon":
        drawByHexagon(left, top, radlen, 'stroke')
        break
    case "pentagram":
        drawByPentagram(left, top, radlen, 'stroke')
        break
}
}
//画笔方法
//笔线
function drawByStr() {
  context.lineJoin = "round"; 
  while (clickX.length > 0 ) {
    point.bx = point.x;
    point.by = point.y;
    point.x = clickX.pop();
    point.y = clickY.pop();
    point.drag = clickDrag.pop();
    context.beginPath();
    if (point.drag && point.notFirst) {
      context.moveTo(point.bx, point.by);
    } else {
      point.notFirst = true;
      context.moveTo(point.x - 1, point.y);
    }
     context.lineTo(point.x, point.y);
     context.closePath();
     context.stroke();
  }

}
//正方形
function drawByRic(x, y, radius, type) {
  radius *= 2
  context.beginPath()
  context.rect(x - radius / 2, y - radius / 2, radius, radius)
  if (type == 'fill')
      context.fill()
  else
      context.stroke()
  context.closePath()
}
//正三角形
function drawByTriangle(x, y, radius, type) {
  context.beginPath()
  context.moveTo(x, y - radius)
  context.lineTo(x + Math.sin(Math.PI / 3) * radius, y + Math.cos(Math.PI / 3) * radius)
  context.lineTo(x - Math.sin(Math.PI / 3) * radius, y + Math.cos(Math.PI / 3) * radius)
  context.lineTo(x, y - radius)
  if (type == 'fill')
      context.fill()
  else
      context.stroke()
  context.closePath()
}

//正六边形
function drawByHexagon(x, y, radius, type) {
  radius = parseInt(radius)
  let offsetX = radius * Math.sin(Math.PI / 6)
  let offsetY = radius * Math.cos(Math.PI / 6)
  context.beginPath()
  context.moveTo(x - offsetX, y - offsetY)
  context.lineTo(x + offsetX, y - offsetY)
  context.lineTo(x + radius, y)
  context.lineTo(x + offsetX, y + offsetY)
  context.lineTo(x - offsetX, y + offsetY)
  context.lineTo(x - radius, y)
  context.lineTo(x - offsetX, y - offsetY)
  if (type == 'fill')
      context.fill()
  else
      context.stroke()
  context.closePath()
}

//五角星
function drawByPentagram(x, y, radius, type) {
  var radius = parseInt(radius);
  var inRadius = radius / 2;
  let perAngle = 2 * Math.PI / 5;
  context.beginPath();
  for (let i = 0; i <= 5; i++) {
      context.lineTo(x + Math.sin(i * perAngle) * radius, y - Math.cos(i * perAngle) * radius)
      context.lineTo(x + Math.sin(i * perAngle + perAngle / 2) * inRadius, y - Math.cos(i * perAngle + perAngle / 2) * inRadius)
  }
  if (type == 'fill'){
    context.fill();
  }
  else{
    context.stroke();
    context.closePath();
  }
}


/* 创建画布背景和画笔 */
function create() {
  // 以下是创建画布背景
  context.rect(0, 0, canvasWidth, canvasHeight); 
  context.fillStyle="#ffffff"; // 画板背景色
  context.fill();
  // 默认值清理
  clickX = new Array();
  clickY = new Array();
  clickDrag = new Array();
  _exportable = false;
}
function changPan(pCol){
  // 设置画笔属性
  context.strokeStyle = `rgba(${ pCol.r }, ${ pCol.g }, ${ pCol.b }, ${ pCol.a })`;  //#666
  //context.lineJoin = "round";  
}
function changLineWidth(width){
  context.lineWidth = width; // 画笔粗细
}

export default {
  
  changeColor(a){
    console.log('ddd',a);
    panColor=a;
    console.log(panColor,'pp');
  },
  setLineWidth(b){
    console.log('ddd',b);
    lwidth=b;
    console.log(lwidth,'pp');
  },
  drawStar(c){
    console.log(c);
    dsp=c;
  },
  /* 初始化 */
  init(canvasDivDom, classname) {
    canvasDiv = canvasDivDom; // 传入画布父盒子
    canvasWidth = canvasDiv.clientWidth; // 获取父盒子宽度
    canvasHeight = canvasDiv.clientHeight; // 获取父盒子高度
    // 设置属性并追加元素
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvasDiv.appendChild(canvas);
    // 创建画布背景和画笔
    create();
    changPan(panColor);
    changLineWidth(lwidth);
    // 开始监控画图
    this.listen(classname); 
  },

  /* 画图时的监控 */
  listen(classname) {
    // 获取盒子需要的参数
    let left = canvas.getBoundingClientRect().left;
    let top = canvas.getBoundingClientRect().top;
    // 支持 移动端
    canvasDiv.addEventListener("touchstart", function(e){
      changPan(panColor);
      changLineWidth(lwidth);
      paint = true;
      classname && (this.className = classname);
      (e.touches) && (e = e.touches[0]);
      addClick(e.pageX - left, e.pageY - top);
      draw(e,canvasDiv,dsp);
      repeat.length = 0
    });
    
    canvasDiv.addEventListener("touchmove", function(e){
      changPan(panColor);
      changLineWidth(lwidth);
      if(!paint) {
        return;
      }
      (e.touches) && (e = e.touches[0]);
      addClick(e.pageX - left, e.pageY - top, true);
      draw(e,canvasDiv,dsp);
    });

    canvasDiv.addEventListener("touchend", function(e){
      changPan(panColor);
      changLineWidth(lwidth);
      paint = false;
      restore[restore.length] = context.getImageData(0, 0, 600, 450);
    });
    
    // 支持 PC 端
    canvasDiv.addEventListener("mousedown", function(e){
      changPan(panColor);
      changLineWidth(lwidth);
      paint = true;
      classname && (this.className = classname);
      addClick(e.pageX - left, e.pageY - top);
      draw(e,canvasDiv,dsp);
      repeat.length = 0;
    });
    
    canvasDiv.addEventListener("mousemove", function(e){
      changPan(panColor);
      changLineWidth(lwidth);
      if(!paint) {
        return;
      }
      addClick(e.pageX - left, e.pageY - top, true);
      draw(e,canvasDiv,dsp);
    });
    
    canvasDiv.addEventListener("mouseup", function(e){
      changPan(panColor);
      changLineWidth(lwidth);
      paint = false;
      restore[restore.length] = context.getImageData(0, 0, 600, 450);
    });
    
    canvasDiv.addEventListener("mouseleave", function(e){
      changPan(panColor);
      changLineWidth(lwidth);
      paint = false;
    });
  },

  //撤回
  reBack(){
    console.log('back',restore);
    if (restore.length > 1) {
      repeat[repeat.length] = restore[restore.length - 1]
      context.putImageData(restore[restore.length - 2], 0, 0)
      restore.length--;
    }
  },

  //重复
  repeatDraw(){
    console.log('gogg',restore);
    if (repeat.length > 0) {
      context.putImageData(repeat[repeat.length - 1], 0, 0)
      restore[restore.length] = repeat[repeat.length - 1]
      repeat.length--
    }
  },

  /* 清理 */
  clear() {
    // 使用此方式来清理画布
    canvas.width = canvas.width; 
    canvas.height = canvas.height;
    create(); // 重新创建画布背景和画笔
    _exportable = false; // 清理之后无法导出
  },

  /* 导出图片 */
  exportImg() {
    if(!_exportable) {
      return -1;  // 说明此处无法导出图片
    }
    return canvas.toDataURL("image/png");
  }
}