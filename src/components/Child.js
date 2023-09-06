import React,{useState} from 'react';


const Child =()=>{
    const [btn1 ,setBtn1]=useState(true);
    const [btn2 ,setBtn2]=useState(true);
    const [btn3 ,setBtn3]=useState(true);
    
    return(
        <div>
            <h2>Child Component</h2>
            <ul>
                <li>learn React{btn1&&<button onClick={()=>setBtn1(false)}>Complete</button>}</li>
                <li>Build a React app{btn2&&<button onClick={()=>setBtn2(false)}>Complete</button>}</li>
                <li>Deploy a React app{btn3&&<button onClick={()=>setBtn3(false)}>Complete</button>}</li>
            </ul>   
        </div>
    )
}

export default Child;