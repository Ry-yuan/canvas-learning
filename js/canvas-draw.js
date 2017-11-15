window.onload = function () {
    //获取canvas
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    //获取按钮
    var redBtn = document.getElementById('redBtn');
    var blueBtn = document.getElementById('blueBtn');
    var greenBtn = document.getElementById('greenBtn');

    //颜色选框
    var selectColor = document.getElementById('selectColor');

    // 粗细选框
    var selectLineWidth = document.getElementById('selectLineWidth');
    selectColor.onchange = function () {
        changeColor(this.value);
    };
    selectLineWidth.onchange = function(){
        changeLineWidth(this.value);
        console.log(this.value);
    }
    //利用鼠标事件来控制绘画
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;

    //changeColor 改变颜色函数
    function changeColor(color, item) {
        //线条颜色
        context.strokeStyle = color;
        // alert('hji');
    }

    function changeLineWidth(size){
        context.lineWidth = size;
    }
    //记录是否开始绘画，默认false
    var isDrawing = false;

    //startDrawing 函数
    function startDrawing(e) {
        isDrawing = true;
        // 创建路径
        context.beginPath();
        context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    }

    //绘画函数
    function draw(e) {
        if (isDrawing == true) {
            var x = e.pageX - canvas.offsetLeft;
            var y = e.pageY - canvas.offsetTop;
            context.lineTo(x, y);
            context.stroke();
        }
    }

    //停止绘画
    function stopDrawing() {
        isDrawing = false;
    }
}