// Styling
import { ProductWrapper,ThemeButton,ButtonWrapper } from "../styles";
import {ListGroup,} from 'react-bootstrap';

// import movieStore from "../stores/movieStore"
import { observer } from "mobx-react";
import DeleteButton from "./buttons/DeleteButton";

const WatchedMovieItem = (props) => {
  const movies = props.movie;


 
  return (
    <ProductWrapper>
     <ListGroup>
  <ListGroup.Item >  {movies.name} <ButtonWrapper><ThemeButton  onClick= {() => movies.state=true}> Watched </ThemeButton>   <DeleteButton movieId={movies.id}/></ButtonWrapper> </ListGroup.Item>

</ListGroup>
    
    </ProductWrapper>
  );
};

export default observer(WatchedMovieItem);
