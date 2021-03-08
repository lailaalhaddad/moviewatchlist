// Styling
import { ProductWrapper,ThemeButton,ButtonWrapper} from "../styles";
import {ListGroup} from 'react-bootstrap';

import { observer } from "mobx-react";
import DeleteButton from "./buttons/DeleteButton";


const UnwatchedMovieItem = (props) => {

  const movies = props.movies;


  return (
    <ProductWrapper>
      
     <ListGroup>
  <ListGroup.Item  >  <p>{movies.name}</p> <ButtonWrapper> <ThemeButton onClick= {() => movies.state=false}> Unwatched</ThemeButton>  <DeleteButton movieId={movies.id}/></ButtonWrapper></ListGroup.Item>

</ListGroup>
    
    </ProductWrapper>
  );
};

export default observer(UnwatchedMovieItem);
