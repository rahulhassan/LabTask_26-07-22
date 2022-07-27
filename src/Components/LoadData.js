import { useState } from "react";
import axios from "axios";
import Dept from './DeptInfo';
import Student from "./StudentInfo";

const LoadData=()=>{
    const[dept,setDept]=useState();
    const[st,setSt]=useState();
    const [deptInfo, setDeptInfo]=useState({});
    const url = "https://mocki.io/v1/72353acd-8db8-4293-9df4-2e6c22920b55"
    axios.get(url)
        .then(rsp=>{
            setDeptInfo(rsp.data);
        });
    const handleClick=()=>{
        setDept(<Dept id={deptInfo.Id} deptName={deptInfo.Name}/>);
        setSt(<Student/>);
    }
    
    return(
        <div>
            <button onClick={handleClick}>Load Data</button>
            <br></br>
            <br></br>
            {dept}
            <br></br>
            {st}
        </div>
    )
}

export default LoadData;