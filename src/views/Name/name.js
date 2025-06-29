import { useState } from "react"
function Namee(props){
    const [hide,sethide]=useState()
    return(<div style={{backgroundColor:props.bgColor}}>

{hide?<h1>QAZI UBAIDULLAH</h1>:<h1>UMAIR</h1>}
        <button onClick={()=>sethide(!hide)}>UPDATION</button>

    </div>)
}
export default Namee