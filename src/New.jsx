import { useState } from "react";
const New=(props)=>{
   let [data,setName]=useState(props.defaultValue);
    return(
        <>
         <h1 class="text-center text-4xl text-blue-400">My car is: {data}</h1>
            <h1 class="text-center text-4xl text-blue-400">My name is: {props.carOwner}</h1>
            <input class="text-center text-4xl text-blue-400 bg-pink p-3" onChange={(e)=>setName(e.target.value)}/>
        </>
    )
}
export default New