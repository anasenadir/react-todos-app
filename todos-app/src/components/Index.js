import { useState } from "react";
import Form from "./Form/Form";
import Table from "./Table/Table";

const Index = () =>{

    const [formOrderState ,setFormOrderState] = useState({name: '' , product : '', quantity : 0});
    const [listOrderesState , setListOrderState] = useState([]);

    // function addOrder(order){
    //     setListOrderState([...listOrderesState , order]);
    // }

    function deleteOrder(indexParam)
    {
        let newOrders = listOrderesState.filter((item , index) => { return index != indexParam});
        setListOrderState(newOrders);

    }


    function updateOrder(index) {
        let orderToUpdate = listOrderesState[index]
        setFormOrderState(orderToUpdate);
    }

    // function getOrderToUpdate(indexParam)
    // {
    //     let order = listOrderesState[indexParam];
    //     setOderToUpdateState(order);
    // }

    // console.log(orderToUpdateState)
  return (<div>
    <h1>App</h1>
    <Form 
    listOrderesState={listOrderesState} 
    setListOrderState={setListOrderState} 
    formOrderState={formOrderState}
    setFormOrderState={setFormOrderState}/>


    <Table 
    listOrderesState={listOrderesState}
    updateOrder={updateOrder} 
    deleteOrder={deleteOrder}/>
  </div>
  );
}


export default Index;