var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
var current_position_of_mouse_x,current_position_of_mouse_y;
var width_of_line;
var color_of_circle;
var radius_of_circle;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color_of_circle=document.getElementById("color_of_circle").value;
    radius_of_circle=document.getElementById("radius_of_circle").value;
    width_of_circle=document.getElementById("width_of_circle").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){

        console.log("Current position of x and y coordinates=")
        console.log("x="+current_position_of_mouse_x,"y="+current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}