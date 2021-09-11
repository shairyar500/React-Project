 import React, {useState} from 'react'

export default function TextForm(props){
    const UppercaseClicked= ()=>{
        let updateText = text.toUpperCase();
        newText(updateText);
        console.log('click here' + text)
    }
    const LowercaseClicked= ()=>{
        let updateText = text.toLowerCase();
        newText(updateText);
        console.log('click here' + text)
    }

    const clearClicked= ()=>{
        let updateText = '';
        newText(updateText);
        // console.log('click here' + text)
    }

    const handleOnChange = (event)=>{
        console.log('onchange event')
        newText(event.target.value)
    }
    const [text, newText] = useState('')
    return(
        <>
        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            
            </div>
            <button className='btn btn-primary' onClick={UppercaseClicked}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={LowercaseClicked}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={clearClicked}>Clear Text</button>
        </div>
        <div className='container my-3'>
        <h3>Summary Details</h3>
        <p>{text.split(" ").length} Words {text.length} Characters in total</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h5>Preview</h5>
        <p>{text}</p>
        </div>
        </>
    )
}
