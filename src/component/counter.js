
import { useEffect } from "react";
function Counter({count}){
    useEffect(()=>{
console.log("counter test")
return()=>{
    console.log("counter marjaega")
}
    },[])
    return(
        <div>
          
            <h1>React JS {count}</h1> 

        </div>
    )
}
export default Counter;