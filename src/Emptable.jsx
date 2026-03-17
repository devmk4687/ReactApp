
function Emptable(){
    const emp = [
        {id:1,name:'Naman Ojha',desg:'SE',sal:20000},
        {id:2,name:'Guman Blowa',desg:'AC',sal:30000},
        {id:3,name:'Vikram Bohra',desg:'CEO',sal:90000},
        {id:4,name:'Charan Teja',desg:'DR',sal:40000}
    ];
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Emp Id</th>
                    <th>Emp Name</th>
                    <th>Emp Designation</th>
                    <th>Emp Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {emp.map((e)=> (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.desg}</td>
                        <td>{e.sal}</td>
                    </tr>
                   ))}
                </tr>
            </tbody>
        </table>
        
        
        
        
        
        </>



    )
}

export default Emptable; 