// Styling
import { ListWrapper,CounterDivStyled } from "../styles";
// Components
import WatchedMovieItems from "./WatchedMovieItem";
import SearchBar from "./SearchBar";
// Data
import movieStore from "../stores/movieStore"
import { useState } from "react";
import { observer } from "mobx-react";


const WatchedMovieLists = (props) => {
//watched list
  const [query, setQuery] = useState("");
  const filteredList = movieStore.movies.filter((movie) =>
  movie.name.toLowerCase().includes(query.toLowerCase()) &&
  movie.state===false);

//Watched movie lists
  const watchedMovie =  filteredList.map((movies,i) => (
    
    <div>
     
    <WatchedMovieItems movie={movies} key={movies.id} i={i+1} />
    
    </div>

    
  ));
 

  return (
    <>
      <ListWrapper>
      <CounterDivStyled>
    <h4>watched Movies: {filteredList.length}</h4>
    </CounterDivStyled>
      <SearchBar setQuery={setQuery} />
        {watchedMovie}
       
        </ListWrapper>
    
    </>
  );
};

export default observer(WatchedMovieLists);
