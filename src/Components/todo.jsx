import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { AddTODO, DeleteAllTODO,RemoveTODO,UpdateTODO } from "../action/index";

const Todo = () => {
  const [SelectInput, setSelectInput] = useState("");
  const [show , setShow] = useState(true);
  const myState = useSelector((state) => state.TodoReducer);
  const dispatch = useDispatch();
  
  const HandleStateValue = (item) => {
    setSelectInput(item);
    setShow(false);
  }

  return (
    <>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>

        <input
          type="text"
          id="myInput"
          placeholder="✍️ Title..."
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
            {
              show ? (
                <span onClick={ () => HandleStateValue(item) } className="opens" > Edit </span>
              )
              : 
              (
                <span onClick={() => {SelectInput.length!==0 && dispatch(UpdateTODO({item:SelectInput,id})); setSelectInput("");setShow(true)}} className="opens"> update </span>
              )
            }
            
            
            </li>  
          </ul>
        );
      })}
    </>
  );
};

export default Todo;