import { useState } from "react";

// import React from "react";
const Form = ({addOrder , orderToUpdate}) => {
    const [orderState ,setOrderState ] = useState({name: '' , product : '', quantity : 0});

    const submitHandler = (e)=>{
        e.preventDefault();
        addOrder(orderState);
        setOrderState({name: '' , product : '', quantity : 0});
    }

    // if(orderToUpdate){
    //     // setOrderState()
    //     console.log(orderToUpdate);
    // }
    return (
        <form>
            <div style={{paddingBottom: 15}}>
                <label htmlFor="">
                    Customer Name : <input type="text" value={orderToUpdate.name} onChange={(e) => setOrderState({name: e.target.value , product : orderState.product, quantity : orderState.quantity})} /> 
                </label>
            </div>  
            <div style={{paddingBottom: 15}}>
                <label htmlFor="">

                    product : <select onChange={(e) => setOrderState({name: orderState.name , product : e.target.value, quantity : orderState.quantity})} >
                        <option value='' >select a product</option>
                        <option value="product1">product1</option>
                        <option value="prodcut2">prodcut2</option>
                        <option value="prodcut3">prodcut3</option>
                    </select>
                    {/* Product : <input type="text" value={orderState.product} />  */}
                </label>
            </div>  
            <div style={{paddingBottom: 15}}>
                <label htmlFor="">
                    Quantity : <input type="number" value={orderState.quantity} min='0' setp='1' onChange={(e) => setOrderState({name: orderState.name , product : orderState.product , quantity : e.target.value})} /> 
                </label>
            </div>  

            <button onClick={submitHandler}>submit</button>
        </form>
    );

}


export default Form;