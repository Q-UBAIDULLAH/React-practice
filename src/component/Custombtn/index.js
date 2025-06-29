function Custombtn(props){
return<div>
<button onClick={()=>alert(props.show)} style={{backgroundColor:props.bgColor}}>
    {props.text}

</button>
</div>
}
export default Custombtn;