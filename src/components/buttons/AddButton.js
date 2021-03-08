import React from "react";
import {ThemeButton,CreateBarStyled,ListWrapper } from "../../styles";
import movieStore from "../../stores/movieStore";
import { useState } from "react";


const AddButton = (props) => {
    const [data, setData] = useState({ name: "",state:true});
    const handleChange = (event) => {
      setData((prevState) => ({
        ...prevState,
        [event.target.name]:
        event.target.name === "price"
          ? +event.target.value
          : event.target.value,
      }));
    };

    const handleAdd = (event) => {
        event.preventDefault();
        movieStore.AddMovie(data);
        console.log(data)
    
      };

  return   <ListWrapper>
      <form onSubmit={handleAdd}>
  <CreateBarStyled onChange={handleChange} placeholder="Add a Movie" type="text" name="name" />
<ThemeButton type="submit" className="float-right" size="2em">ADD</ThemeButton>

</form>

 </ListWrapper>
 
 };

export default AddButton;