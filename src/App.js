import pic from './assets/download (4).jpg'
import './App.css';
import { useState,useEffect } from 'react';
import Namee from './views/Name/name';
import Counter from './component/counter';
import Dashboard from './views/Dashboard';
import Contact from './views/Contactus';
import About from './views/Dashboard/AboutUs';
import Navbar from './component/Navbar';
import Todo from './views/TODO';
import Practice from './views/TODO';
import REVISE from './views/revise';
function App() {

  const[List,setList]=useState([])
  const[Text,setText]=useState("")
  // const[name,setname]=useState("")

  const[counter,setcounter]=useState(0)
  const[value,setvalue]=useState("QAZI")
  const[show,setshow]=useState(true)
const[child,setchild]=useState("qazi")

  const arr=['Javascript' ,'React',"Reactnative",'AngularJs', 'Ionic',"python"]

  const carlist=[
    {name:"Audi",model:1986,color:"Gray"},
    {name:"Mehran",model:2000,color:"black"},
    {name:"Civic",model:2022,color:"white"},
    {name:"Corolla",model:1998,color:"blue"},
    {name:"BMW",model:2012,color:"golden"}
    ]

    const complex = [
      {company: 'CONTOUR ', jobs: ['Javascript' ,'React',"Reactnative"]},
       {company: 'EXPERTIZO', jobs: ['AngularJs', 'Ionic',"python"]},
       {company: 'ELEXSOFT', jobs: ['Oop', 'Java',"DSA"]}
      ]

      const text=['Javascript' ,'React',"Reactnative"]

      const Name="mom"







useEffect(()=>{
console.log("number 1")
},[])


 useEffect(()=>{
   console.log("number 2")
 })

 useEffect(()=>{
  console.log("number 3")
  },[value,counter])
console.log(arr)

function update(){
  setchild("ubaid")
}

function additem(){
setList(Text)
}
function Ubaid(){
console.log("ubaidullah")
}

  return (
    <div className="App">
      <header>
     


<h1>Component</h1>
<REVISE func={Ubaid} bgColor="red"/>
<Practice/>npm start
<Namee bgColor="blue"/>
<Dashboard/>
<Contact/>
<About/>
<Navbar bgColor='purple' text="Child to parent" func={update}/>


<h1>{child}</h1>
      {/* <input value={name} onChange={(e)=>setname(e.target.value)}></input>
      <h2>{name}</h2>
       <h2>Two Way binding</h2>

       <button onClick={()=>setname("")}>Delete</button> */}

<h2>UseEffect</h2>
{ /* <h2>React JS {counter}</h2> */}

{counter < 10 && <Counter count={counter}/>}

<button onClick={()=>setcounter(counter-1)}>-</button>
<button onClick={()=>setcounter(counter+1)}>+</button><br></br><br></br>

<button onClick={()=>{
  if(value=="QAZI"){
    setvalue("UBAIDULLAH")
  }else{
    setvalue("QAZI")
  }

}}>UPDATE</button>

<h2>{value}</h2>


{show?<img src={pic}></img>:null}
<br></br>
<button onClick={()=>setshow(!show)}>Toggle</button>



{arr.map(function(item){
  if(item.includes('J')){
    return<h2>{item} "advance"</h2>
  }
  else{
    return <h3>  {item}</h3> 

  }

})}

<h1>Array of Object</h1>



{carlist.map(function(item){
  return<div>
 <h3>{item.name}{item.model}</h3>
 </div>
})}




<table border={5}>
  <tr>
    <td>Company</td>
    <td>Jobs</td>
  </tr>
  {complex.map(function(item){
    return<tr>
      <td>
      {item.company}
      </td>
      <td> <ol>
        {item.jobs.map(function(item){
          return<li>{item}</li>
        }
        )}
      </ol></td>
 
    </tr>
  })}
</table>
*********************************TO DO********************************************************************
<hr></hr>
<input onChange={(e)=>setText(e.target.value)} type='text' placeholder='TODO'></input>

<button onClick={additem}>ADD</button>

{List.map(function(item){

return( <p>{item}</p>
)
})}
{Text}
    </header>
    </div>
  );
}







export default App;

