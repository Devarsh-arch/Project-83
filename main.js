canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent= "empty";
var last_x, last_y;
var color, width;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color= document.getElementById("input_color").value;
    width= document.getElementById("input_width").value;
    mouseEvent= "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_x= current_position_of_mouse_x;
    last_y= current_position_of_mouse_y;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    last_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_of_touch_y= e.touches[0].clientY - canvas.offsetTop;
    current_position_of_touch_x= e.touches[0].clientX - canvas.offsetLeft;
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width;
    ctx.moveTo(last_touch_x, last_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_touch_x= current_position_of_touch_x;
    last_touch_y= current_position_of_touch_y;
}

function clear_area(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}