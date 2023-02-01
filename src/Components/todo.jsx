import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { AddTODO, DeleteAllTODO,RemoveTODO,UpdateTODO } from "../action/index";

const Todo = () => {
  const [SelectInput, setSelectInput] = useState("");
  const myState = useSelector((state) => state.TodoReducer);
  const dispatch = useDispatch();

  return (
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
          onClick={() => {dispatch(AddTODO({item:SelectInput,id:new Date().getTime().toString()}));setSelectInput("")}}
          className="addBtn" > Add
        </button>

        <button onClick={() => dispatch(DeleteAllTODO())} className="addBtn"> Remove All </button>
        
      </div>
      {myState.list?.map((value) => {
        return (
          <ul id="myUL" key={value.id}>
            <li>{value.item} 
            <span onClick={ () => dispatch(RemoveTODO(value.id)) } className="close" > x </span>
            <span onClick={ () => dispatch(UpdateTODO(value.id)) } className="opens" > Edit </span>
            </li>  
          </ul>
        );
      })}
    </>
  );
};

export default Todo;
