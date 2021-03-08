

// Styling
import { ListWrapper ,CounterDivStyled} from "../styles";


// Components
import UnwatchedMovieItem from "./UnwatchedMovieItem";

import SearchBar2 from "./SearchBar";
// Data
import movieStore from "../stores/movieStore"
import { useState } from "react";

// import moviestore from "../stores/movieStore";
import { observer } from "mobx-react";

const UnwatchedMovieList = (props) => {
//watched list

  const [query, setQuery] = useState("");
  const filteredList2 = movieStore.movies.filter((movie) =>
  movie.name.toLowerCase().includes(query.toLowerCase()) &&
  movie.state===true
  );

//temp




//Watched movie lists
  const unwatchedMovies =  filteredList2.map((movies) => (
    <UnwatchedMovieItem movies={movies} key={movies.id}/>
    
    
  ));

  return (
    <>
  
   
      <ListWrapper>
 <CounterDivStyled>
    <h4>Unwatched Movies: {filteredList2.length}</h4>
    </CounterDivStyled>
      <SearchBar2 setQuery={setQuery} />
      
       {unwatchedMovies}</ListWrapper>
    </>
  );
};

export default observer(UnwatchedMovieList);
