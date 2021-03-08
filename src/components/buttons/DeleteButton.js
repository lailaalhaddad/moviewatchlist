import React from "react";
import { DeleteButtonStyled } from "../../styles";
import movieStore from "../../stores/movieStore";


const DeleteButton = (props) => {
    const handleDelete = (event) => {
        event.preventDefault();
        movieStore.deleteMovie(props.movieId);
        console.log(props.movieId)
    
      };

  return <DeleteButtonStyled onClick={handleDelete} movieId={props.movieId}> X</DeleteButtonStyled>;
};

export default DeleteButton;