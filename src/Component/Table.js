

import React,{useState, useEffect} from "react";
import JsonData from '../shared/data.json';
const Table = () =>{

const [data, setData] = useState([]);

// useEffect(() => {
//     const DisplayData=JsonData.proformaItem.map(
//         (info)=>{
            
//             }
//         )
//         setData(DisplayData);
// })

const DisplayData=JsonData.proformaItem.map(
(info)=>{
    return(
        <tr>
            <td>{info.categoryDescription}</td>
            <td>{info.productDescription}</td>
            <td>{info["items"]}</td>
        </tr>
      
    )
    {JsonData.proformaItem[info].items.map(sub => {
        return(
            <p>{sub.productId}</p>
        )
    })}
    }
)

return(
<div>
    <h3>Table from JSON</h3>
    <table class="table table-striped">
        <thead>
            <tr>
            <th>Category</th>
            <th>Product</th>
            <th>City</th>
            </tr>
        </thead>
        <tbody>
            {DisplayData}
        </tbody>
    </table>
        
</div>
)
}

export default Table;