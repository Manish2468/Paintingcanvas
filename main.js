var mouse_event="empty"
var lp_x,lp_y
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="mousedown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mousex=e.clientX-canvas.offsetLeft;
    current_position_of_mousey=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown")
    {ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
     ctx.moveTo(lp_x,lp_y);
     ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
     ctx.stroke();
    }
    lp_x=current_position_of_mousex;
    lp_y=current_position_of_mousey;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}