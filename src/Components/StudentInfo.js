import { useState } from "react";
import axios from "axios";

const Student=()=>{
    const [stInfo, setStinfo]=useState([]);
    const url = "https://mocki.io/v1/72353acd-8db8-4293-9df4-2e6c22920b55"
    axios.get(url)
        .then(rsp=>{
            setStinfo(rsp.data.Students);
        });
        
    return(
        <table border={1}>
            <thead>
                <tr>
                    <th colSpan={4}>Students Table</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>CGPA</th>
                </tr>
            </thead>
            <tbody>
                {
                    stInfo.map(info=>(
                        <tr key={info.Id}>
                            <td>
                                {info.Id}
                            </td>
                            <td>
                                {info.Name}
                            </td>
                            <td>
                                {info.Dob}
                            </td>
                            <td>
                                {info.Cgpa}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )    
}
export default Student;