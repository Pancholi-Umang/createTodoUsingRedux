import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { AddTODO, DeleteAllTODO,RemoveTODO,UpdateTODO } from "../action/index";

const Todo = () => {
  const [SelectInput, setSelectInput] = useState("");
  const myState = useSelector((state) => state.TodoReducer);
  const dispatch = useDispatch();



  const UpdateChangedata = (item,id) => {
    setSelectInput(item)   
  }

  
  // const submitData = (item,id) => {
  //   let updatearr=[]
  //   myState.list.map((data)=>{
  //     console.log(id);
  //     if(data.id==id){
  //       updatearr.push({item:item,id:id})
  //     }
  //     else{
  //       updatearr.push(data)
  //     }
  //   }) 
  // }


  return (
    // 
    <>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>

        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          onChange={(e) => setSelectInput(e.target.value)}
          value={SelectInput}
          autoComplete="off"
        />
        
        <button
          onClick={() => {SelectInput.length!==0 && dispatch(AddTODO({item:SelectInput,id:new Date().getTime().toString()}));setSelectInput("")}}
          className="addBtn" > Add
        </button>

        <button onClick={() => dispatch(DeleteAllTODO())} className="addBtn"> Remove All </button>
        
      </div>
      {myState.list?.map((value) => {
        const {item,id} = value;
        return (
          <ul id="myUL" key={id}>
            <li>{item} 
            <span onClick={ () => dispatch(RemoveTODO(id)) } className="close" > x </span>
            <span onClick={ () => dispatch(UpdateTODO()) } className="opens" > Edit </span>
            </li>  
          </ul>
        );
      })}
    </>
  );
};

export default Todo;