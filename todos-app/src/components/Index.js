import { useState } from "react";
import Form from "./Form/Form";
import Table from "./Table/Table";

const Index = () =>{

    const [listOrderesState , setListOrderState] = useState([]);
    const [orderToUpdateState ,setOderToUpdateState] = useState({});

    function addOrder(order){
        setListOrderState([...listOrderesState , order]);
    }

    function deleteOrder(indexParam)
    {
        let newOrders = listOrderesState.filter((item , index) => { return index != indexParam});
        setListOrderState(newOrders);

    }

    function getOrderToUpdate(indexParam)
    {
        let order = listOrderesState[indexParam];
        setOderToUpdateState(order);
    }

    // console.log(orderToUpdateState)
  return (<div>
    <h1>App</h1>
    <Form addOrder={addOrder} orderToUpdate={orderToUpdateState}/>
    <Table odrers={listOrderesState} deleteOrder={deleteOrder} updateOrder={getOrderToUpdate}/>
  </div>
  );
}


export default Index;