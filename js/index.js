var pic = document.querySelector('.pic');
var li = document.querySelectorAll('.linodes');
var chipUl = document.querySelector('.chipUl');
var picUl = document.querySelector('.picUl');

var x = 0;//定义全局变量
var y = 0;//定义全局变量
var falg = false;  //检测是否需要拖动
for (var i = 0; i < li.length; i++) {
  li[i].index = i;
  var box;
  var thisIndex;
  var iscomplete = true;
  li[i].boxleft = 0;
  li[i].boxtop = 0;
  li[i].onmousedown = function (event) {
    falg = true;  //需要拖动
    box = li[this.index];
    thisIndex = this.index;
    x = event.pageX - li[this.index].offsetLeft; //记录鼠标从盒子左上角开始到当前的x轴位置
    y = event.pageY - li[this.index].offsetTop;//记录鼠标从盒子左上角开始到当前的y轴位置
  }
  //鼠标移动事件
  document.onmousemove = function (e) {
    var movex = e.pageX;
    var movey = e.pageY;
    if (falg == true) {

      box.style.left = movex - x - (530 + thisIndex * 96) + "px";
      box.style.top = movey - y - 370 + "px";

      box.boxleft = movex - x - (530 + thisIndex * 96);
      box.boxtop = movey - y - 370;
      console.log(box.boxleft, box.boxtop);
    }
  }
  //鼠标弹起事件
  li[i].onmouseup = function () {
    falg = false;

    //第一个
    if ((li[0].boxleft < 50 && li[0].boxleft > 40) && (li[0].boxtop > -189 && li[0].boxtop < -180)) {
      console.log("ok");
      iscomplete = true;
      li[0].onmousedown = function () {
        // console.log("nook");
        
        return false;
        
      }
    }
    else {
      iscomplete = false;
    }
    console.log("第一个" + iscomplete);
    //第二个
    if ((li[1].boxleft < -10 && li[1].boxleft > -20) && (li[1].boxtop > -260 && li[1].boxtop < -250)) {
      console.log("ok");
      iscomplete = true;
      li[1].onmousedown = function () {
        console.log("nook");
       
        return false;
      }
    }
    else {
      iscomplete = false;
    }
    console.log("第二个" + iscomplete);
    //第三个
    if ((li[2].boxleft < -60 && li[2].boxleft > -80) && (li[2].boxtop > -322 && li[2].boxtop < -310)) {
      console.log("ok");
      iscomplete = true;
      li[2].onmousedown = function () {
        console.log("nook");
       
        return false;
      }
    }
    else {
      iscomplete = false;
    }
    console.log("第三个" + iscomplete);
    //第四个
    if ((li[3].boxleft < -90 && li[3].boxleft > -105) && (li[3].boxtop > -280 && li[3].boxtop < -270)) {
      console.log("ok");
       iscomplete = true;
      li[3].onmousedown = function () {
        console.log("nook");
        return false;
      }
    }
    else {
      iscomplete = false;
    }
    console.log("第四个" + iscomplete);
    //第五个
    if ((li[4].boxleft < -215 && li[4].boxleft > -230) && (li[4].boxtop > -210 && li[4].boxtop < -195)) {
      console.log("ok");
      iscomplete = true;
      li[4].onmousedown = function () {
        console.log("nook");
        
        return false;
      }
    }
    else {
      iscomplete = false;
    }
    console.log("第五个" + iscomplete);
    //第六个
    if ((li[5].boxleft < -350 && li[5].boxleft > -364) && (li[5].boxtop > -135 && li[5].boxtop < -120)) {
      console.log("ok");
      iscomplete = true;
      li[5].onmousedown = function () {
        console.log("nook");
        
        return false;
      }
    }
    else {
      iscomplete = false;
    }
    console.log("第六个" + iscomplete);
    if (iscomplete) {
      alert("拼图成功！");
    }
  }

}