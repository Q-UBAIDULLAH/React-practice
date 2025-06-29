 import { useState,useEffect } from "react";
function Practice(){
const[getdata,setdata]=useState([])
const getproduct=()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then((res)=>setdata(res.products))
}
console.log("get"+getdata)
useEffect(()=>{
    getproduct()
},[])
    return<div>
{getdata.map(function(item){
return <div>

    </div>

})}
    </div>
}
export default Practice