window.onload = function(){
    //获取canvas
    var  canvas = document.getElementById('canvas');
    var  context = canvas.getContext('2d');


    //利用鼠标事件来控制绘画
    canvas.onmousedown = startDrawing ; 
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;

    //changeColor 函数
    function changeColor (color, item){
        //线条颜色
        context.strokeStyle = color;
    }

    //记录是否开始绘画，默认false
    var isDrawing = false;

    //startDrawing 函数
    function strartDrawing (e) {
        isDrawing = true ; 
        // 创建路径
        context.beginPath();
        context.moveTo(e.pageX-canvas.offsetLeft , e.pageY-canvas.offsetTop);
    }

    //绘画函数
    function draw (e){
        if(isDrawing == true){
            var x = e.pageX -canvas.offsetLeft;
            var y = e.pageY -canvas.offsetTop;
            context.lineTo(x,y);
            context.stroke();
        }
    }
}