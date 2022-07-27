const Dept=(props)=>{
    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {props.id}
                    </td>
                    <td>
                        {props.deptName}
                    </td>
                </tr>
            </tbody>
        </table>    
    )
}
export default Dept;