//Main React Library
import React from 'react';
//css
import './App.css';

//return here to finish
//https://itnext.io/using-react-hooks-with-canvas-f188d6e416c0

//params for drawing
const SCALE = 0.3
const OFFSET = 80
var flag = false;

//draw function
function drawFlag(canvas, ctx, location) {
    //allow continual drawing
    flag = true;
    console.log("flag is on");
    ctx.beginPath()
    ctx.fillStyle = "black"
    //thickness
    ctx.fillRect(location.x - 135, location.y - 115, 10, 10)
    ctx.closePath()
    ctx.restore()
}
//draw for mouse over
function draw(canvas, ctx, location) {
    console.log(flag+" moving")
    //draw if been flagged by mouse down
    if (flag == true) {
        console.log("flag should be on");
        ctx.beginPath()
        ctx.fillStyle = "black"
        //thickness
        ctx.fillRect(location.x - 135, location.y - 115, 10, 10)
        ctx.closePath()
        ctx.restore()
    }
}
function stopDraw()
{
    console.log("reset flag");
    flag = false;
}

//canavs component
function Canvas() {
    //initialise hook
    const canvasRef = React.useRef(null)

    return (
        <div>
            <canvas id="canvas" width={640} height={425} border="1rem solid #9c9c9c" ref={canvasRef}
                //add in draw logic here
                //on click
                onMouseDown={e => {
                    //get canvas and context on click
                    const canvas = canvasRef.current
                    const ctx = canvas.getContext('2d')
                    //use the draw function from above
                    drawFlag(canvas, ctx, { x: e.clientX, y: e.clientY })
                }}
                onMouseMove={e => {
                    //get canvas and context on click
                    const canvas = canvasRef.current
                    const ctx = canvas.getContext('2d')
                    //use the draw function from above
                    draw(canvas, ctx, { x: e.clientX, y: e.clientY })
                }}
                onMouseUp={e => {
                    stopDraw()
                }}
            />
            {/* <img ref="image" src={cheese} className="hidden" /> */}
        </div>
    )

}
export default Canvas