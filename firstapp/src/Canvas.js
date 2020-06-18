//Main React Library
import React from 'react';
//css
import './App.css';

//return here to finish
//https://itnext.io/using-react-hooks-with-canvas-f188d6e416c0

class Canvas extends React.Component {

    // componentDidMount() {
    //     const canvas = this.refs.canvas
    //     const ctx = canvas.getContext("2d")
    //     const img = this.refs.image
    //     img.onload = () => {
    //         ctx.drawImage(img, 0, 0)
    //         ctx.font = "40px Courier"
    //         ctx.fillText(this.props.text, 210, 75)
    //     }
    // }


    render() {
        return (
            <div>
                <canvas width={640} height={425} border="1rem solid #9c9c9c" onClick={e =>{alert(e.clientX)}}/>
                {/* <img ref="image" src={cheese} className="hidden" /> */}
            </div>
        )
    }
}
export default Canvas