import "./Table.css";

const Table = ({odrers , deleteOrder ,updateOrder})=>{

    return (
        <table>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>product</th>
                    <th>quantity</th>
                    <th>contorl</th>
                </tr>
            </thead>
            <tbody>
                {
                    odrers.map((order , index)=>{
                        return (
                            <tr key={index}>
                                <td>{order.name}</td>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                                <td>
                                    <button style={{marginRight:10}} onClick={()=>{deleteOrder(index)}}>delete</button>
                                    <button onClick={()=>{updateOrder(index)}}>update</button>
                                </td>

                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}


export default Table ;