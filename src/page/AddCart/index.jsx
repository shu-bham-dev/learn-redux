import React from "react";
import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../../utils/cartSlice";

const AddCart = () => {
  const dispatch = useDispatch();
  const handleAddItem=()=>{
    dispatch(addItem("Grapes"));
  }
  const handlePopItem=()=>{
    dispatch(removeItem("Grapes"));
  }
  const handleResetItem=()=>{
    dispatch(clearCart("Grapes"));
  }
  return (
    <div style={{display:'flex',flexDirection:'column',width:'100px',margin:'auto',marginTop:'20px',justifyContent:'space-evenly'}}>
      <button onClick={()=>handleAddItem()} style={{color:'green',backgroundColor:'white',margin:'4px'}}>Add to Cart</button>
      <button onClick={()=>handlePopItem()} style={{color:'yellow',backgroundColor:'black',margin:'4px'}}>Pop Cart</button>
      <button onClick={()=>handleResetItem()} style={{color:'red',backgroundColor:'white',margin:'4px'}}>Reset Cart</button>
    </div>
  );
};

export default AddCart;
