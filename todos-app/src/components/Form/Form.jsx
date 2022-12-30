import { useState } from "react";

// import React from "react";
const Form = ({formOrderState ,setFormOrderState, listOrderesState , setListOrderState}) => {
    // const [orderState ,setOrderState ] = useState({name: '' , product : '', quantity : 0});

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(formOrderState);
        setListOrderState([ ...listOrderesState ,formOrderState]);
        setFormOrderState({name: '' , product : '', quantity : 0});
    }

    // if(orderToUpdate){
    //     // setOrderState()
    //     console.log(orderToUpdate);
    // }
    return (
        <form onSubmit={submitHandler}>
            <div style={{paddingBottom: 15}}>
                <label htmlFor="">
                    Customer Name : <input type="text" value={formOrderState.name} onChange={(e) => setFormOrderState({...formOrderState,name: e.target.value })} /> 
                </label>
            </div>  
            <div style={{paddingBottom: 15}}>
                <label htmlFor="">

                    product : <select onChange={(e) => setFormOrderState({...formOrderState , product : e.target.value})} >
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
                    Quantity : <input type="number" value={formOrderState.quantity} min='0' setp='1' onChange={(e) => setFormOrderState({...formOrderState ,  quantity : e.target.value})} /> 
                </label>
            </div>  

            <button>submit</button>
        </form>
    );

}


export default Form;