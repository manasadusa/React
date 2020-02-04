import React , {useState} from 'react'

const Questionbox =({questions,options,selected})=>{
    const [answers ,setanswer]= useState(options)
    return (
        <div>
<div className="quest">{questions}</div>
{answers.map((text,index)=>
<button key={index} className="ansbtn" onClick={()=>{
    setanswer([text])
        selected(text)
}}>{text}</button>

)}
        </div>
    )
}

export default Questionbox;